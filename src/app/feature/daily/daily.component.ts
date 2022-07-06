import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { catchError, Observable, of } from 'rxjs';
import { IForecast } from 'src/app/core/interfaces';
import { ForecastService } from 'src/app/core/service/forecast.service';


@Component({
  selector: 'app-daily',
  templateUrl: './daily.component.html',
  styleUrls: ['./daily.component.scss']
})
export class DailyComponent implements OnInit {

  forecast$!: Observable<IForecast>;
  errorHandler$? : Observable<any>;
  location?: string;
  
  constructor(
    private sForecast: ForecastService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.location = this.route.snapshot.params['city'];
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    this.getForecast();
  }

  getForecast() {
    this.forecast$ = this.sForecast.getCurrentLocationForecast(this.location);
    this.errorHandler$ = this.forecast$.pipe(catchError((err) => of(err)))
  }
}