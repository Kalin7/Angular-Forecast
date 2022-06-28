import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ICountry } from 'src/app/core/interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() country?: ICountry;
  url!: SafeResourceUrl;

  constructor(
    private sanitizer: DomSanitizer,
  ) {}

  ngOnInit(): void {
    this.getMap();
  }

  getMap() {
    const name = this.country!.name.common;
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(environment.mapUrl + name);
  }


}
