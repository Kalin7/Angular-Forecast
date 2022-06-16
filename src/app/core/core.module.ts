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



@NgModule({
  declarations: [
    HeaderComponent,
    LocationComponent,
    SearchComponent,
    NavbarBottomComponent,
    MobileMenuComponent,
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
  ]
})
export class CoreModule { }

