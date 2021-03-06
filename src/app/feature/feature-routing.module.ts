import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DailyComponent } from './daily/daily.component';
import { DetailsComponent } from './daily/details/details.component';
import { HoursComponent } from './hours/hours.component';
import { WarningsComponent } from './warnings/warnings.component';
import { WeeklyComponent } from './weekly/weekly.component';

const routes: Routes = [
  {path: '', redirectTo: ':city/today', pathMatch: 'full'},
  {path: ':city/today', component: DailyComponent},
  {path: ':city/today/details', component: DetailsComponent},  
  {path: ':city/today-by-hours', component: HoursComponent},
  {path: ':city/weekly', component: WeeklyComponent},
  {path: ':country/warnings', component: WarningsComponent}
 
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeatureRoutingModule { }
