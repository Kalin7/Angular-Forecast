import { Component } from '@angular/core';
import { IForecast } from './core/interfaces';
import { ForecastService } from './core/service/forecast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Forecast';
}
