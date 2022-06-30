import { Component, Input, OnInit } from '@angular/core';
import { IAirQuality } from 'src/app/core/interfaces';
import { ForecastService } from 'src/app/core/service/forecast.service';

@Component({
  selector: 'app-air',
  templateUrl: './air.component.html',
  styleUrls: ['./air.component.scss']
})
export class AirComponent implements OnInit {

  @Input() air!: any
  condition?: any;

  constructor(
    private sAir: ForecastService
  ) { }

  ngOnInit(): void {
    this.condition = this.sAir.airQualityCode(this.air['us-epa-index']);
  }

  
}
