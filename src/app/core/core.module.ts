import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LocationComponent } from './header/location/location.component';
import { SearchComponent } from './header/search/search.component';


@NgModule({
  declarations: [
    HeaderComponent,
    LocationComponent,
    SearchComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule
  ],
  exports: [
    HeaderComponent,
    LocationComponent
  ]
})
export class CoreModule { }
