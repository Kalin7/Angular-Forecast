import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { IForecast } from 'src/app/core/interfaces';
import { ForecastService } from 'src/app/core/service/forecast.service';


@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit, OnDestroy {

  forecast!: IForecast;
  location: string = 'auto:ip';
  airQualityIndex?: string;
  airQualityText?: string;
  subscriber?: Subscription;
  constructor(
    private sForecast: ForecastService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.getForecast();
    this.location = this.router.snapshot.params['city'];
  }

  getForecast() {
    this.subscriber = this.sForecast.getCurrentLocationForecast(this.location)
        .subscribe((res) => {
          this.forecast = res;
          this.getAirQuality(res);
        });
  }
  
  getAirQuality(forecast: IForecast) {
    this.airQualityIndex = (forecast.current.air_quality['us-epa-index']).toString();
    const air: any = this.sForecast.airQualityCode();
    this.airQualityText = air[this.airQualityIndex];
  }

  ngOnDestroy() {
    this.subscriber?.unsubscribe();
  }
}

