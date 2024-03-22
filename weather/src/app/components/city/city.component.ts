import { Component, inject } from '@angular/core';
import { TodayComponent } from '../today/today.component';
import { WeatherServiceService } from '../../services/weather-service.service';
import { ActivatedRoute } from '@angular/router';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-city',
  standalone: true,
  imports: [HomeComponent],
  templateUrl: './city.component.html',
  styleUrl: './city.component.css',
})
export class CityComponent {
  weatherService: WeatherServiceService = inject(WeatherServiceService);
  activatedRoute: ActivatedRoute = inject(ActivatedRoute);

  routePath = this.activatedRoute.snapshot.url[1].path;

  ngOnInit(): void {}
}
