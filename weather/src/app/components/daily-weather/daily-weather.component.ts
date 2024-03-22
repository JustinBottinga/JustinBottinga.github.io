import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { WeatherServiceService } from '../../services/weather-service.service';
import { DatePipe, DecimalPipe } from '@angular/common';
import { TimePipe } from '../../pipes/time.pipe';
import { GettimePipe } from '../../pipes/gettime.pipe';

@Component({
  selector: 'app-daily-weather',
  standalone: true,
  imports: [DatePipe, TimePipe, GettimePipe, DecimalPipe],
  templateUrl: './daily-weather.component.html',
  styleUrl: './daily-weather.component.css',
})
export class DailyWeatherComponent implements OnInit {
  dayID: number = 0;

  weatherService = inject(WeatherServiceService);
  formattedTime: any;
  constructor(private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe((p) => {
      this.dayID = p['dayID'];
    });
  }

  route: any;
  router = inject(Router);

  routelength = this.activatedRoute.snapshot.url.length;

  ngOnInit(): void {
    if (this.routelength == 0) {
      this.getDailyWeather(this.dayID, true);

      this.route = '';
    } else {
      const routePath = this.activatedRoute.snapshot.url[1].path;
      this.route = this.router.url;
      this.getDailyWeather(this.dayID, false, routePath);
    }
  }

  daily: any;
  formattedTimeArray: any;

  getDailyWeather(dayID: number, useLocation: boolean, city?: string) {
    this.weatherService.getWeather(useLocation, city).subscribe({
      next: (data: any) => {
        this.daily = data.days[dayID];

        console.log(this.daily);
      },
    });
  }
}
