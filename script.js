var cells = document.getElementsByClassName("cell");
var j = 0;

var word = [];
var wordString = "";

var randWordKey = Math.floor(Math.random() * fiveLetterWords.length);
var randWordLower = fiveLetterWords[randWordKey]
var randWordUpper = randWordLower.toLocaleUpperCase();
var answer = randWordUpper.split("");
console.log(answer);

// count amount of occurrences of a string in an array
const countOccurrences = (arr, val) => arr.reduce((a, v) => (v === val ? a + 1 : a), 0);


function allBoxes(d) {
    let key;
    let keynum;

    if (window.event) { // IE                  
        keynum = d.keyCode;
    } else if (d.which) { // Netscape/Firefox/Opera                 
        keynum = d.which;
    }
    key = (String.fromCharCode(keynum));

    if (keynum != 13) {
        cells[j].textContent = myKeyPress(event);
        j++;
    }
    
    // backspace 
    if (keynum == 8) {
        j--;
        cells[j - 1].textContent = "";
        word = word.slice(0, -1);
        j = j - 1;
        wordString = wordString.slice(0, -1);
    } else if (keynum != 13) {
        word.push(myKeyPress(event));
        wordString += key;
    }

    // check enough keys are pressed then evaluate the word
    //keynum 13 = 'enter'
    if (keynum == 13) {
        if (j % 5 == 0) {
            console.log(wordString)
            console.log(word);
            if (fiveLetterWords.includes(wordString.toLocaleLowerCase())) {
                for (let i = 0; i < 5; i++){
                    if (word[i] == answer[i]) {
                        cells[j - (5 - i)].classList.add("Correct");
                        document.getElementById(`${word[i]}`).classList.add("Correct");
                    } else if (answer.includes(word[i])) {
                        cells[j - (5 - i)].classList.add("Contains");
                        document.getElementById(`${word[i]}`).classList.add("Contains");
                    }
                    else {
                        cells[j - (5 - i)].classList.add("Incorrect");
                        document.getElementById(`${word[i]}`).classList.add("Incorrect");
                    }
                }
                word = [];
                wordString = "";
                // check if they all share the 'correct' class 
                /*
                if (cells[j - 5].className == cells[j - 4].className && cells[j - 4].className == cells[j - 3].className
                    && cells[j - 3].className == cells[j - 2].className && cells[j - 2].className == cells[j - 1].className && cells[j - 1].className == "cell Correct") {

                    document.querySelector("h3").textContent = "";

                    if (keynum == 13) {
                        location.reload()
                    }
                }
                */
                let correctCells = 0;
                for (let x = 5; x >= 1; x--) {
                    if (cells[j - x].className == 'cell Correct') {
                        correctCells++;
                    }
                }

                if (correctCells == 5) {
                    document.querySelector("h3").textContent = "";

                    if (keynum == 13) {
                        //location.reload()
                    }
                }
            } else {
            cells[j - 5].textContent = "";
            cells[j - 4].textContent = "";
            cells[j - 3].textContent = "";
            cells[j - 2].textContent = "";
            cells[j - 1].textContent = "";
            j = j - 5;
            word = word.slice(0, -5);
            wordString = wordString.slice(0, -5)
            setInterval(showPopup(), 5000);
            }
        }
    }
}

// RETURNS pressed key
function myKeyPress(e) {
    let keynum;
    let key;

    if (window.event) { // IE                  
        keynum = e.keyCode;
    } else if (e.which) { // Netscape/Firefox/Opera                 
        keynum = e.which;
    }
    key = (String.fromCharCode(keynum));
    console.log(key);
    console.log(keynum);

    if (bannedKeys.includes(keynum)) {
        try {
            key = null;
        } catch (err) {
            console.error(err);
        }
    }
    return key.toLocaleUpperCase();
}

function showPopup() {
    document.getElementById("popup").style.display = "flex";
}

function removePopup() {
    document.getElementById("popup").style.display = "none";
}