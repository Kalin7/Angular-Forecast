import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForecastService {

  url: string = environment.baseUrl;
  key: string = environment.secretKey;
  autoLocation: string = 'auto:ip';

  
  constructor(  
    private http: HttpClient,
  ) { }

  getCurrentLocationForecast(location: any) {
    return this.http.get<any>(`${this.url}/current.json?key=${this.key}&q=${location ? location : this.autoLocation}`);
  }

}
