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
  parent!: HTMLElement | null; 
  
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
    this.parent = document.querySelector('.navbar-bottom--list');
  }

  @HostListener('window:resize')
  getWidth() {
    window.innerWidth < 1200 ? this.isVisible = true : this.isVisible = false;
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
  
  showMenu(event: any) {
    event.preventDefault();
    this.parent?.style.display  == 'block' ? this.parent.style.display = 'none': this.parent!.style.display = 'block';
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

