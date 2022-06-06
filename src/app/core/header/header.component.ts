import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSun, faSearch, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { IForecast, ILocation } from '../interfaces';
import { ForecastService } from '../service/forecast.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {


  constructor(
    library: FaIconLibrary
  ) { 
    library.addIcons(
      faSun,
    )
  }

  ngOnInit(): void {
    
  }


}
