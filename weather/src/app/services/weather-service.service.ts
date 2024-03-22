import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Injectable, OnInit, inject } from '@angular/core';
import { LocationService } from './location.service';
import { mergeMap, switchMap, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WeatherServiceService implements OnInit {
  private Key: string = 'CCB8P59XM7GWCJQJ7FX3XJYYH';

  private http = inject(HttpClient);

  locationService: LocationService = inject(LocationService);
  lat: number = 0;
  long: number = 0;

  constructor() {}

  response: any;

  ngOnInit(): void {
    // this.getLocation();
  }

  getWeather(currentLocation?: boolean, cityName?: string): any {
    if (!currentLocation && cityName) {
      let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${cityName}?unitGroup=metric&key=${this.Key}`;
      return this.http.get(url);
    } else {
      return this.locationService.getLocation().pipe(
        switchMap((data) => {
          let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${data.lat},${data.lng}?unitGroup=metric&key=${this.Key}`;
          return this.http.get(url);
        })
      );
    }
  }
}
