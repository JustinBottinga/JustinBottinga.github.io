import { HttpClient } from '@angular/common/http';
import { Injectable, Component, OnInit, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LocationService {
  public lat: any;
  public lng: any;

  // private http = inject(HttpClient);

  constructor() {}

  getLocation(): Observable<{ lat: number; lng: number }> {
    return new Observable<{ lat: number; lng: number }>((observer) => {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position: any) => {
            if (position) {
              console.log(
                'Latitude: ' +
                  position.coords.latitude +
                  ' Longitude: ' +
                  position.coords.longitude
              );
              observer.next({
                lat: position.coords.latitude,
                lng: position.coords.longitude,
              });
              observer.complete();
            }
          },
          (error: any) => {
            observer.error(error);
          }
        );
      } else {
        observer.error('Geolocation is not supported by this browser.');
      }
    });
  }
}
