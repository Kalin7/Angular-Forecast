import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IForecast } from 'src/app/core/interfaces';
import { ForecastService } from 'src/app/core/service/forecast.service';


@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {

  forecast$!: Observable<IForecast>;
  location?: string;
  
  constructor(
    private sForecast: ForecastService,
    private router: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.location = this.router.snapshot.params['city'];
    this.getForecast();
  }

  getForecast() {
    this.forecast$ = this.sForecast.getCurrentLocationForecast(this.location)
  }

}