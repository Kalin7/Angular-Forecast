import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IForecast } from 'src/app/core/interfaces';
import { ForecastService } from 'src/app/core/service/forecast.service';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit{

  @Input() capital!: string
  forecast$!: Observable<IForecast>
  constructor(
    private sForecast: ForecastService,
  ) { 
  }

  ngOnInit() {
    this.forecast$ = this.sForecast.getMultipleCitiesForecast(this.capital)
  }

}
