import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyComponent } from './daily/daily.component';
import { HoursComponent } from './hours/hours.component';

const routes: Routes = [
  {path: ':city/today', component: DailyComponent},
  {path: ':city/today-by-hours', component: HoursComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
