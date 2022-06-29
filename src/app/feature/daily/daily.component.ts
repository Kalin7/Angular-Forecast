import { Component, OnInit, HostListener } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IForecast } from 'src/app/core/interfaces';
import { ForecastService } from 'src/app/core/service/forecast.service';
import { HeaderService } from 'src/app/core/service/header.service';


@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {

  forecast$!: Observable<IForecast>;
  location: string = 'auto:ip';

  constructor(
    private sForecast: ForecastService,
    private router: ActivatedRoute,
    private sHeader: HeaderService
  ) { }

  ngOnInit(): void {
    this.location = this.router.snapshot.params['city'];
    this.getForecast();
    
  }

  @HostListener('window:click')
  getChangedLocation() {
    this.location = this.sHeader.cityName!;
    this.getForecast();
  }
  
  getForecast() {
    this.forecast$ = this.sForecast.getCurrentLocationForecast(this.location)
  }

}


