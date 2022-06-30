import { Component, HostListener, Input, OnInit} from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faAngleLeft, faAngleRight, faBars } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-navbar-bottom',
  templateUrl: './navbar-bottom.component.html',
  styleUrls: ['./navbar-bottom.component.scss']
})
export class NavbarBottomComponent implements OnInit {

  isVisibleArrows: boolean = false;
  isMobileMenu: boolean = true;
  parent!: HTMLElement | null; 
  
  @Input() city?: string;
  
  constructor(
    library: FaIconLibrary
  ) {
    library.addIcons(
      faAngleLeft,
      faAngleRight,
      faBars
    )
   }

  ngOnInit(): void {
    this.getWidth();
    this.parent = document.querySelector('.navbar-bottom--list');
  }

  @HostListener('window:resize')
  getWidth() {
    window.innerWidth < 1200 ? this.isVisibleArrows = true : this.isVisibleArrows = false;
  }

  forward() {
    const first = this.parent?.firstChild;
    this.parent?.removeChild(first!);
    this.parent?.appendChild(first!);
  }

  backward() {
    const first = this.parent?.firstChild;
    const last = this.parent?.lastChild;
    this.parent?.insertBefore(last!, first!);
   
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
