import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IHours } from 'src/app/core/interfaces';
import { ForecastService } from 'src/app/core/service/forecast.service';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss']
})
export class HoursComponent implements OnInit {

  hoursForecast$?: Observable<any>
  city?: string;
  constructor(
    private sForecast: ForecastService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {
    this.city =  this.route.snapshot.params['city'];
    this.hoursForecast$ = this.sForecast.getHoursForecast(this.city!)
  }

}
