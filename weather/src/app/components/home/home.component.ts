import { Component, Input, OnInit, inject } from '@angular/core';
import { LocationService } from '../../services/location.service';
import { WeatherServiceService } from '../../services/weather-service.service';
import { Observable } from 'rxjs';
import { Pipe } from '@angular/core';
import { DatePipe } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { ForecastComponent } from '../forecast/forecast.component';
import { TodayComponent } from '../today/today.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [DatePipe, NavbarComponent, ForecastComponent, TodayComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  hello: string = 'hello';

  locationService: LocationService = inject(LocationService);
  pipes: DatePipe = inject(DatePipe);

  constructor() {}

  ngOnInit(): void {}
}
