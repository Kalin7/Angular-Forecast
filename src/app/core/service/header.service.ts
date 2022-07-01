import { Injectable } from '@angular/core';
import { IForecast, ILocation } from '../interfaces';


@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  cityName?: string = 'Sofia';
  forecast?: IForecast;
  
  constructor(
  ) { }

  getNavbarForecast(forecast: IForecast): ILocation {
    return {
      city: forecast!.location.name,
      country: forecast!.location.country,
      temp: forecast!.current.temp_c,
      icon: forecast!.current.condition.icon
    }
  }

  getLocation(location: string) {
    if (location != null || location != undefined || location != '') {
      this.cityName = location;
    }
  }

}
