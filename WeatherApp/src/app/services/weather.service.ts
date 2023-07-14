import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiUrl = 'http://localhost:8080/weather';

  constructor(private http: HttpClient) {}

  getWeather(cityName: string): Observable<any> {
    const url = `${this.apiUrl}/${cityName}`;
    return this.http.get(url).pipe(
      catchError((error: HttpErrorResponse) => {
        console.log(error);
        if (error.status === 404) {
          throw new Error('City not found');
        } else {
          throw new Error('Error fetching weather data. Please try again later.');
        }
      })
    );
  }
}



