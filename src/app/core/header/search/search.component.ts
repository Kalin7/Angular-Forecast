import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { HeaderService } from '../../service/header.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Output() searchValue = new EventEmitter();
 
  form = new FormGroup({
    location: new FormControl(null)
  });
  
  constructor(
    library: FaIconLibrary,
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
    this.sHeader.getLocation(loc!);
  }

}

