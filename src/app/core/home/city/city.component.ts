import { Component, Input, OnInit } from '@angular/core';
import { IForecast } from '../../interfaces';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.scss']
})
export class CityComponent implements OnInit {

  @Input() cityForecast?: IForecast;
  constructor() { }

  ngOnInit(): void {
  }

}
