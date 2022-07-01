import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { DailyComponent } from './daily/daily.component';
import { HoursComponent } from './hours/hours.component';
import { ForecastComponent } from './daily/forecast/forecast.component';
import { AirComponent } from './daily/air/air.component';
import { PollutantsComponent } from './daily/air/pollutants/pollutants.component';
import { ScaleComponent } from './daily/air/scale/scale.component';
import { DetailsComponent } from './daily/details/details.component';


@NgModule({
  declarations: [
    DailyComponent,
    HoursComponent,
    ForecastComponent,
    AirComponent,
    PollutantsComponent,
    ScaleComponent,
    DetailsComponent,
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ],
  exports: [
    DailyComponent,
    HoursComponent,
    ForecastComponent,
    AirComponent,
    PollutantsComponent,
    ScaleComponent,
    DetailsComponent
  ]
})
export class FeatureModule { }
