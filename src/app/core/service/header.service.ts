import { Injectable } from '@angular/core';
import { IForecast, ILocation } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  current?: ILocation;

  constructor() { }

  createNavbarForecast(forecast: IForecast) {
     this.current = {
      city: forecast!.location.name,
      country: forecast!.location.country,
      temp: forecast!.current.temp_c,
      icon: forecast!.current.condition.icon
    }
  }

}
