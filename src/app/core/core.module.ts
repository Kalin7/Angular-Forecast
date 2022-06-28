import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LocationComponent } from './header/location/location.component';
import { SearchComponent } from './header/search/search.component';
import { NavbarBottomComponent } from './header/navbar-bottom/navbar-bottom.component';
import { MobileMenuComponent } from './header/mobile-menu/mobile-menu.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CityComponent } from './home/city/city.component';
import { AstroComponent } from './home/astro/astro.component';
import { SportsNewsComponent } from './home/sports-news/sports-news.component';
import { CountryComponent } from './home/country/country.component';
import { MapComponent } from './home/country/map/map.component';
import { ForecastComponent } from './home/country/forecast/forecast.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LocationComponent,
    SearchComponent,
    NavbarBottomComponent,
    MobileMenuComponent,
    HomeComponent,
    CityComponent,
    AstroComponent,
    SportsNewsComponent,
    CountryComponent,
    MapComponent,
    ForecastComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent,
    LocationComponent,
    SearchComponent,
    NavbarBottomComponent,
    MobileMenuComponent,
    AstroComponent,
    CityComponent,
    AstroComponent,
    SportsNewsComponent,
    CountryComponent,
    MapComponent,
  ]
})
export class CoreModule { }

