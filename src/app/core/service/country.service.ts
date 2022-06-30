import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  url: string = 'https://restcountries.com/v3.1/name/';

  constructor(
    private http: HttpClient
  ) { }


  getCountryByName(name: string): Observable<any> {
    return this.http.get<any>(this.url + name);
  }

  createCountryInterface(data:any) {
      return {
        name: {
          common: data.name.common,
          official: data.name.official
        },
        currencies: data.currencies,
        sufix: data.idd,
        capital: data.capital,
        borders: data.borders,
        area: data.area,
        maps: {
            openStreetMaps: data.maps.openStreetMaps,
        },
        population: data.population,
        timezones: data.timezones,
        continent: data.continents,
        flag: data.flag,
    }
  } 
}
