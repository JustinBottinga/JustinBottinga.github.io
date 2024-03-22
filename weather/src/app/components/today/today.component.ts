import { Component, OnInit, Pipe, inject } from '@angular/core';
import { WeatherServiceService } from '../../services/weather-service.service';
import { DatePipe } from '@angular/common';
import { pipe } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-today',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './today.component.html',
  styleUrl: './today.component.css',
})
export class TodayComponent implements OnInit {
  conditionsToday: any = {};
  resolvedAddress: any;
  address: any;
  temp!: number;
  weatherService: WeatherServiceService = inject(WeatherServiceService);
  max: any;
  min: any;
  description: any;

  activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  routelength = this.activatedRoute.snapshot.url.length;

  ngOnInit(): void {
    if (this.routelength == 0) {
      this.getToday(true);
    } else {
      const routePath = this.activatedRoute.snapshot.url[1].path;

      this.getToday(false, routePath);
    }
  }
  getToday(useLocation: boolean, city?: string): any {
    return this.weatherService.getWeather(useLocation, city).subscribe({
      next: (data: any) => {
        if (data) {
          this.resolvedAddress = data.resolvedAddress;
          this.address = data.address;
          this.conditionsToday = data.currentConditions;

          this.max = data.days[0].tempmax;
          this.min = data.days[0].tempmin;

          this.description = data.description;
        }
      },
      error: (error: any) => {
        console.error(error);
      },
      complete: () => {
        // console.log('request completed successfuly');
      },
    });
  }
}
