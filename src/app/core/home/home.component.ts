import { Component, OnInit } from '@angular/core';
import { IForecast } from '../interfaces';
import { ForecastService } from '../service/forecast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  forecast: IForecast[] = [];
  cities: string[] = ['Sofia', 'Plovdiv', 'Varna'];
  
  constructor(
    private sForecast: ForecastService,
  ) { }

  ngOnInit(): void {
    this.getForecasts();
  }

  getForecasts() {
    this.cities.map((city) => {
      this.sForecast.getMultipleCitiesForecast(city)
          .subscribe((res) => {
            this.forecast.push(res);
      });
    });
  }
}
