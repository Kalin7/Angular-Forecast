import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faCloudRain, faDroplet, faEye, faMoon, faRadiation, faSun, faTemperatureDown, faTemperatureUp, faWind } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { ForecastService } from 'src/app/core/service/forecast.service';

@Component({
  selector: 'app-weekly',
  templateUrl: './weekly.component.html',
  styleUrls: ['./weekly.component.scss']
})
export class WeeklyComponent implements OnInit {

  forecast$!: Observable<any>
  city?: string;
  constructor(
    library: FaIconLibrary,
    private sForecast: ForecastService,
    private route: ActivatedRoute
  ) {
    library.addIcons(
      faTemperatureUp,
      faTemperatureDown,
      faDroplet,
      faWind,
      faCloudRain,
      faEye,
      faRadiation,
      faSun,
      faMoon
    )
   }

  ngOnInit(): void {
    this.city = this.route.snapshot.params['city'];
    this.forecast$ = this.sForecast.getWeekForecast(this.city!);
  }

}
