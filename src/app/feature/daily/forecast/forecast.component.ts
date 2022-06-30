import { Component, Input, OnInit } from '@angular/core';
import { IForecast } from 'src/app/core/interfaces';

@Component({
  selector: 'app-forecast',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.scss']
})
export class ForecastComponent implements OnInit {

  @Input() forecast?: IForecast
  @Input() text?: string
  
  constructor() { }

  ngOnInit(): void {
  }

}
