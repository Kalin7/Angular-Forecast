import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { ForecastService } from 'src/app/core/service/forecast.service';

@Component({
  selector: 'app-scale',
  templateUrl: './scale.component.html',
  styleUrls: ['./scale.component.scss']
})
export class ScaleComponent {

  scale$?: Observable<any>;

  constructor(
    private sForecast: ForecastService
  ) { 
    this.scale$ = of(this.sForecast.airQuality);
  }
}
