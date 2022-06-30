import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { DailyComponent } from './daily/daily.component';
import { HoursComponent } from './hours/hours.component';
import { ForecastComponent } from './daily/forecast/forecast.component';
import { AirComponent } from './daily/air/air.component';


@NgModule({
  declarations: [
    DailyComponent,
    HoursComponent,
    ForecastComponent,
    AirComponent,

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

  ]
})
export class FeatureModule { }
