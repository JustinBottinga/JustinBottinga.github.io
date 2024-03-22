import { Component, Injector, OnInit, inject } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { WeatherServiceService } from '../../services/weather-service.service';
import { DatePipe } from '@angular/common';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-forecast',
  standalone: true,
  imports: [DatePipe, RouterLink, AppComponent],
  templateUrl: './forecast.component.html',
  styleUrl: './forecast.component.css',
})
export class ForecastComponent implements OnInit {
  weatherCall: any;
  weatherService: WeatherServiceService = inject(WeatherServiceService);
  locationService: LocationService = inject(LocationService);
  currentConditions: any[] = [];
  location: string | undefined;
  condition?: string;
  twoWeekForecast?: any[] | undefined;
  twoWeekArray: any[] = [];

  sunny =
    'https://media.istockphoto.com/id/1342162257/nl/foto/direct-ray-of-the-sun-in-the-blue-sky.jpg?s=612x612&w=0&k=20&c=xF6CuQJiAhQLQhYr44YdnL-WMKByP5kSvro7k0By3Co=';

  partCloudy = '../../../assets/shared/images/cloud1.webp';
  rain = '../../../assets/shared/images/rain.jfif';
  overcast = '../../../assets/shared/images/overcast.jfif';

  activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  route: any;
  router = inject(Router);

  routelength = this.activatedRoute.snapshot.url.length;

  ngOnInit(): void {
    if (this.routelength == 0) {
      this.getWeather(true);
      this.route = '';
    } else {
      const routePath = this.activatedRoute.snapshot.url[1].path;
      this.route = this.router.url;
      this.getWeather(false, routePath);
    }
  }

  lat: undefined | number;
  long: undefined | number;

  getWeather(useLocation: boolean, city?: string): any {
    console.log(this.routelength);
    return this.weatherService.getWeather(useLocation, city).subscribe({
      next: (data: any) => {
        if (data) {
          this.weatherCall = data;
          this.currentConditions = data.currentConditions;
          this.location = data.address;
          this.condition = data.currentConditions.conditions;
          this.twoWeekForecast = data.days;

          //map into array
          this.twoWeekArray = this.twoWeekForecast!.map(function (obj) {
            return {
              date: obj.datetime,
              feelslike: obj.feelslike,
              feelslikemax: obj.feelslikemax,
              feelslikemin: obj.feelslikemin,
              conditions: obj.conditions,
              temp: obj.temp,
              tempmax: obj.tempmax,
              tempmin: obj.tempmin,
            };
            // feelslike: obj.feelslike,
          });
          console.log(data);
          // console.log(this.twoWeekArray);
        } else {
          console.log(' NO DATA ');
        }
      },
      error: (error: any) => {
        console.error('Data error', error);
      },
      complete: () => {
        // console.log('request completed successfuly');
      },
    });
  }
}
