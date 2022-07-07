import { Component, Input, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { HeaderService } from '../../service/header.service';

@Component({
  selector: 'app-mobile-menu',
  templateUrl: './mobile-menu.component.html',
  styleUrls: ['./mobile-menu.component.scss']
})
export class MobileMenuComponent implements OnInit {

  isShow: boolean = false;
  
  @Input() city?: string;
  @Input() country?: string;

  constructor(
    library: FaIconLibrary
  ) {
    library.addIcons( 
      faBars,
    )
  }

  ngOnInit(): void {
  }

  showMenu() {
    this.isShow == false ? this.isShow = true : this.isShow = false;
  }
}
