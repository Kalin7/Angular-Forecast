import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeatureRoutingModule } from './feature-routing.module';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DailyComponent } from './daily/daily.component';
import { HoursComponent } from './hours/hours.component';
import { ForecastComponent } from './daily/forecast/forecast.component';
import { AirComponent } from './daily/air/air.component';
import { PollutantsComponent } from './daily/air/pollutants/pollutants.component';
import { ScaleComponent } from './daily/air/scale/scale.component';
import { DetailsComponent } from './daily/details/details.component';
import { WeeklyComponent } from './weekly/weekly.component';
import { ErrorComponent } from './daily/error/error.component';


@NgModule({
  declarations: [
    DailyComponent,
    HoursComponent,
    ForecastComponent,
    AirComponent,
    PollutantsComponent,
    ScaleComponent,
    DetailsComponent,
    WeeklyComponent,
    ErrorComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    FontAwesomeModule
  ],
  exports: [
    DailyComponent,
    HoursComponent,
    ForecastComponent,
    AirComponent,
    PollutantsComponent,
    ScaleComponent,
    DetailsComponent,
    WeeklyComponent
  ]
})
export class FeatureModule { }
