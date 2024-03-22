import { Component, OnInit, Pipe, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';

import { WeatherServiceService } from './services/weather-service.service';
import { CommonModule, DatePipe } from '@angular/common';
import { LocationService } from './services/location.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NgModel } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HomeComponent,
    NavbarComponent,
    // CarouselComponent,
    HttpClientModule,
    CommonModule,
  ],
  providers: [
    // CarouselComponent,
    WeatherServiceService,
    LocationService,
    DatePipe,
    Pipe,
    NgModel,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'WeatherApp';

  locationService: LocationService = inject(LocationService);
  lat: number = 0;
  long: number = 0;
}
