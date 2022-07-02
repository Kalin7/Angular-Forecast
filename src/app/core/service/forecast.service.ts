import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IForecast } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  url: string = environment.baseUrl;
  key: string = environment.secretKey;
  airQuality = [
    {
      level: 'Добро',
      description: 'Качеството на въздуха е задоволително и наличието на замърсяване не крие риск за здравето',
      color: 'green'
    },
    {
      level: 'Умерено',
      description: 'Качеството на въздуха е приемливо, но крие опастност за определени групи хора',
      color: 'yellow'
    },
    { 
      level: 'Нездравословно за определени групи',
      description: 'Риск за определени групи с непоносимост към замърсявания',
      color: 'orange'
    },
    {
      level: 'Нездравословно',
      description: 'Може да окаже влияние върху основната част от населението, \
        хора от застрашените групи може да почустват сериозни здравословни проблеми',
      color: 'red'
    },
    {
      level: 'Много Нездравословно',
      description: 'Предупреждение за опасност за здравето на всички хора',
      color: 'purple'
    },
    {
      level: 'Опасно',
      description: 'Предупреждение за спешни случаи, всички биха били засегнати',
      color: 'maroon'
    }
  ]

  

  
  constructor(  
    private http: HttpClient,
  ) { }

  getCurrentLocationForecast(location: any): Observable<any> {
    return this.http.get<any>(`${this.url}/current.json?key=${this.key}&q=${location}&aqi=yes&lang=bg`);
  }


  getMultipleCitiesForecast(city: string): Observable<any>{
    return this.http.get<any>(`${this.url}/current.json?key=${this.key}&q=${city}&aqi=yes&lang=bg`);
  }

  getFullForecastDetails(city: string): Observable<any>{
    return this.http.get<any>(`${this.url}/forecast.json?key=${this.key}&q=${city}&aqi=yes&lang=bg&alerts=yes`)
  }

  getHoursForecast(city: string): Observable<any>{
    return this.http.get<any>(`${this.url}/forecast.json?key=${this.key}&q=${city}&lang=bg`)
                    .pipe(map((res) => {
                      return res.forecast.forecastday[0].hour;
                    }))
  }

  airQualityCode(code: number) {
    return this.airQuality[code - 1];
  }

}


