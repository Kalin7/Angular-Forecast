import { Component, OnInit, DoCheck } from '@angular/core';
import { IForecast, ILocation } from '../../interfaces';
import { ForecastService } from '../../service/forecast.service';
import { HeaderService } from '../../service/header.service';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit, DoCheck {

  forecast?: IForecast;
  currentLocation?: ILocation;
  loc?: string | null;

  constructor(
    private sForecast: ForecastService,
    private sHeader: HeaderService
  ) { }
  
  ngOnInit(): void {
    this.getForecast();
  }

  ngDoCheck(): void {
    this.currentLocation = this.sHeader.current;
  }

  getForecast() {
    this.sForecast.getCurrentLocationForecast(this.loc)
        .subscribe(
          res => {
          this.forecast = res;
          this.sHeader.createNavbarForecast(this.forecast!);
          this.currentLocation = this.sHeader.current;
        });
  }

}
