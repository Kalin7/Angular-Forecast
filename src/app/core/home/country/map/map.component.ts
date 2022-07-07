import { Component, Input, OnInit } from '@angular/core';
import { ICountry } from 'src/app/core/interfaces';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  @Input() country?: ICountry;

  constructor(
  ) {}

  ngOnInit(): void {
  }



}
