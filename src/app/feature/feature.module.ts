import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { DailyComponent } from './daily/daily.component';
import { HoursComponent } from './hours/hours.component';


@NgModule({
  declarations: [
    DailyComponent,
    HoursComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule
  ],
  exports: [
    DailyComponent,
    HoursComponent
  ]
})
export class FeatureModule { }
