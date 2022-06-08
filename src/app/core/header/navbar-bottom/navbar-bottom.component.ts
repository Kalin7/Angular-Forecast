import { Component, HostListener, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar-bottom',
  templateUrl: './navbar-bottom.component.html',
  styleUrls: ['./navbar-bottom.component.scss']
})
export class NavbarBottomComponent implements OnInit {

  isVisible = false;

  constructor(
    library: FaIconLibrary
  ) {
    library.addIcons(
      faAngleLeft,
      faAngleRight,
    )
   }

  ngOnInit(): void {
    this.getWidth();
  }

  @HostListener('window:resize')
  getWidth() {
    window.innerWidth < 1200 ? this.isVisible = true : this.isVisible = false;
  }


  onClick(event: any) {
    event.preventDefault();
    let parent = document.querySelectorAll('.list-item');
    
    if (event.target.tagName === 'A') {
      let id = event.target.parentNode.id;
      parent.forEach((child) => 
        child.id == id ? 
          (child as HTMLElement).style.borderBottom = '1px solid #f01422':
          (child as HTMLElement).style.borderBottom = 'none'
      )
    }


  }

}
