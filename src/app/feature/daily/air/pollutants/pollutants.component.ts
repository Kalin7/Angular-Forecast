import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pollutants',
  templateUrl: './pollutants.component.html',
  styleUrls: ['./pollutants.component.scss']
})
export class PollutantsComponent implements OnInit {

  @Input() pollutants: any;
  @Input() visible?: boolean;
  constructor() { }

  ngOnInit(): void {
  }

}
