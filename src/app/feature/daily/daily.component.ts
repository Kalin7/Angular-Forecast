import { Component, OnInit } from '@angular/core';
import { IForecast } from 'src/app/core/interfaces';
import { ForecastService } from 'src/app/core/service/forecast.service';
import { HeaderService } from 'src/app/core/service/header.service';


@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {

  forecast!: IForecast;
  location: string = 'auto:ip';
  currentTime?: string;
  airQualityIndex?: string;
  airQualityText?: string;

  constructor(
    private sForecast: ForecastService,
    private sHeader: HeaderService
  ) { }

  ngOnInit(): void {
    this.forecast = this.sHeader.forecast!;
    this.airQualityIndex = (this.forecast.current.air_quality['us-epa-index']).toString();
    const air: any = this.sForecast.airQualityCode();
    this.airQualityText = air[this.airQualityIndex]
    this.currentTime = this.getCurrentTime();
  }

  getCurrentTime() {
    return new Date().getHours() + ':' + new Date().getMinutes();
  }
}
