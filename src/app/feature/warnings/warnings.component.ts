import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBolt, faCloud, faCloudRain, faCloudSunRain, faDroplet, faRadiation, faSun, faThunderstorm, faWind } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { IAlerts } from 'src/app/core/interfaces';
import { ForecastService } from 'src/app/core/service/forecast.service';

@Component({
  selector: 'app-warnings',
  templateUrl: './warnings.component.html',
  styleUrls: ['./warnings.component.scss']
})
export class WarningsComponent implements OnInit {

  warnings$!: Observable<IAlerts>
  city?: string
  constructor(
    library: FaIconLibrary,
    private sForecast: ForecastService,
    private route: ActivatedRoute,
  ) { 
    library.addIcons(
      faThunderstorm,
      faCloudSunRain,
      faSun,
      faWind,
      faCloudRain,
      faRadiation,
      faCloud,
      faBolt,
      faDroplet,
    )
  }

  ngOnInit(): void {
    this.city = this.route.snapshot.params['city'];
    this.warnings$ = this.sForecast.getAlerts(this.city!);
    this.warnings$.subscribe(res => console.log(res))
  }

}
