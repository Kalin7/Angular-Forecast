import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { IForecast, ILocation } from '../interfaces';
import { ForecastService } from '../service/forecast.service';
import { HeaderService } from '../service/header.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  forecast?: IForecast;
  headerForecast?: ILocation;
  isMobileMenu: boolean = false;
  searchedCity?: string;
  currentCity?: string;

  constructor(
    library: FaIconLibrary,
    private sHeader: HeaderService,
    private sForecast: ForecastService,
    private router: Router
  ) { 
    library.addIcons(
      faSun,
    )
  }

  ngOnInit(): void {
    this.getWidth();
    this.getFullForecast();
    
  }

  @HostListener('window:resize')
  getWidth() {
    window.innerWidth < 769 ? this.isMobileMenu = true : this.isMobileMenu = false;
  }

  searched(event: string) {
    this.searchedCity = event;
    this.sHeader.getLocation(this.searchedCity);
    this.getFullForecast();
  }

  getFullForecast() {
    this.sForecast.getCurrentLocationForecast(this.sHeader.cityName)
        .subscribe((res) => {
          this.forecast = res;
          this.sHeader.forecast = this.forecast;
          this.headerForecast = this.sHeader.getNavbarForecast(this.forecast!);
          this.currentCity = this.forecast!.location.name;
        })
  }

}
