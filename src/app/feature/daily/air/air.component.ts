import { Component, Input, OnInit } from '@angular/core';
import { ForecastService } from 'src/app/core/service/forecast.service';

@Component({
  selector: 'app-air',
  templateUrl: './air.component.html',
  styleUrls: ['./air.component.scss']
})
export class AirComponent implements OnInit {


  condition?: any;
  isScaleVisible: boolean = false;
 
  @Input() air!: any

  constructor(
    private sAir: ForecastService
  ) {}

  ngOnInit(): void {
    this.condition = this.sAir.airQualityCode(this.air['us-epa-index']);
  }

  show(event: any): void {
    event.preventDefault();
    let ele = event.target as HTMLElement;
    let style = window.getComputedStyle(ele).borderBottom.split(' ')[1];
    if (event.target.tagName == 'SPAN' && style == 'none') {
      let children = event.target.parentNode.children;
      Object.values(children).map((ch) => { 
        if ((ch as HTMLElement).id == event.target.id) {
          (ch as HTMLElement).style.borderBottom = '1px solid #fff';
        } else {
          (ch as HTMLElement).style.borderBottom = 'none';
        }
      });
      this.isScaleVisible = !this.isScaleVisible;
    }

  }
}
