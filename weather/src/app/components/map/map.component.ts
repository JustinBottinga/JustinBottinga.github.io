import { KeyValuePipe, NgClass } from '@angular/common';
import {
  Component,
  ElementRef,
  Input,
  QueryList,
  inject,
  viewChildren,
} from '@angular/core';
import { NgModel } from '@angular/forms';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-map',
  standalone: true,
  imports: [RouterLink, NgClass, KeyValuePipe],
  templateUrl: './map.component.html',
  styleUrl: './map.component.css',
})
export class MapComponent {
  ngModel = inject(NgModel);
  transformClass = 'not-active';

  provinces = {
    GR: ['Groningen', 'Veendam', 'Winschoten'],
    FR: ['Leeuwarden', 'Drachten', 'Heerenveen'],
    DR: ['Assen', 'Emmen', 'Hoogeveen'],
    OV: ['Zwolle', 'Enschede', 'Deventer'],
    FL: ['Almere', 'Lelystad', 'Emmeloord'],
    GE: ['Arnhem', 'Nijmegen', 'Apeldoorn'],
    UT: ['Utrecht', 'Amersfoort', 'Zeist'],
    NH: ['Amsterdam', 'Haarlem', 'Alkmaar'],
    ZH: ['Rotterdam', 'Den Haag', 'Leiden'],
    ZE: ['Middelburg', 'Vlissingen', 'Goes'],
    NB: ['Eindhoven', 'Tilburg', 'Breda'],
    LI: ['Maastricht', 'Venlo', 'Roermond'],
  };

  open(provinceId: any) {
    const classes = document.getElementsByClassName(provinceId);

    if (this.transformClass == 'not-active') {
      this.transformClass = 'active';
      classes.item(0)?.classList.add('d-flex');
    } else if (this.transformClass == 'active') {
      this.transformClass = 'not-active';
      classes.item(0)?.classList.add('d-none');
    }
  }
}
