import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { IForecast, ILocation } from '../../interfaces';
import { ForecastService } from '../../service/forecast.service';
import { HeaderService } from '../../service/header.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {


  forecast?: IForecast;
  currentLocation?: ILocation;
  loc?: string | null;


  form = new FormGroup({
    location: new FormControl(null)
  });
  
  constructor(
    library: FaIconLibrary,
    private sForecast: ForecastService,
    private sHeader: HeaderService
  ) { 
    library.addIcons(
      faMagnifyingGlass,
    )
  }

  ngOnInit(): void {
  }

  onSearch() {
    this.loc = this.form.get('location')!.value;
    this.sForecast.getCurrentLocationForecast(this.loc)
        .subscribe(
        res => {
        this.forecast = res;
        this.sHeader.createNavbarForecast(this.forecast!);
    });
  }

}
