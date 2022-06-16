import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { IForecast } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  url: string = environment.baseUrl;
  key: string = environment.secretKey;
  
  
  constructor(  
    private http: HttpClient,
  ) { }

  getCurrentLocationForecast(location: any) {
    return this.http.get<any>(`${this.url}/current.json?key=${this.key}&q=${location}&aqi=yes&lang=bg`);
  }

  airQualityCode() {
    return {
      1: 'Добро', 
      2: 'Умерено', 
      3: 'Нездравословно за определени групи',
      4: 'Нездравословно',
      5: 'Много Нездравословно', 
      6: 'Опасно'
    }
  }

}

