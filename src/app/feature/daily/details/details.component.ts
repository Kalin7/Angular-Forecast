import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { ForecastService } from 'src/app/core/service/forecast.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  forecastDetails$?: Observable<any>;
  city?: string;

  constructor(
    private route: ActivatedRoute,
    private sForecast: ForecastService
  ) { }

  ngOnInit(): void {
    this.city = this.route.snapshot.params['city'];
    this.forecastDetails$ = this.sForecast.getFullForecastDetails(this.city!);
    this.forecastDetails$.subscribe(res => console.log(res))
  }

}
