import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { ICountry } from 'src/app/core/interfaces';
import { CountryService } from 'src/app/core/service/country.service';


@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.scss']
})
export class CountryComponent implements OnInit {

  country?: ICountry;
 
  constructor(
    library: FaIconLibrary,
    private route: ActivatedRoute,
    private sCountry: CountryService
  ) {
    library.addIcons(
      faSpinner
    )
  }

  ngOnInit(): void {
    this.getCountryData();
  }

  getCountryData() {
    const name = this.route.snapshot.params['name'];
    this.sCountry.getCountryByName(name)
        .subscribe((res) => {
          this.country = this.sCountry.createCountryInterface(res[0]);
        })
  }

}
