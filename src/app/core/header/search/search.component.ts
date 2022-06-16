import { Component, EventEmitter, OnInit, Output } from '@angular/core';
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

  @Output() searchValue = new EventEmitter();

  forecast?: IForecast;
  currentLocation?: ILocation;

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
    const loc = this.form.get('location')!.value;
    this.searchValue.emit(loc);
  }

}

