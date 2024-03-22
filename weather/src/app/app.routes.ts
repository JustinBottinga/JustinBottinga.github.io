import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DailyWeatherComponent } from './components/daily-weather/daily-weather.component';
import { MapComponent } from './components/map/map.component';
import { CityComponent } from './components/city/city.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },

  { path: 'weather/:dayID', component: DailyWeatherComponent },

  { path: 'map', component: MapComponent },
  { path: 'map/:city', component: CityComponent },
  { path: 'map/:city/weather/:dayID', component: DailyWeatherComponent },
];
