import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountryComponent } from './core/home/country/country.component';
import { HomeComponent } from './core/home/home.component';


const routes: Routes = [
  {
    path: 'forecast/bg/home', component: HomeComponent,
    children: [
      {path: 'country/:name', component: CountryComponent},
    ]
  },

  {path: '', redirectTo: '/forecast/bg/home', pathMatch: 'full'},
  {
    path: 'forecast',
    loadChildren: () => import('./feature/feature-routing.module').then((m) => m.FeatureRoutingModule) 
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
