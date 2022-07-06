import { Component, OnInit, Input } from '@angular/core';
import { ILocation } from '../../interfaces';


@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.scss']
})
export class LocationComponent implements OnInit {

  
  @Input() currentLocation?: ILocation;
  
  constructor(
    
  ) { }
  
  ngOnInit(): void {
  }

}
