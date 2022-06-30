import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faClock, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Observable } from 'rxjs';
import { SportService } from '../../service/sport.service';

@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.scss']
})
export class SportsNewsComponent implements OnInit{

  football$: Observable<any>
  countryName!: string;
  isVisibleDetails?: boolean = false;
 
  constructor(
    library: FaIconLibrary,
    private sSport: SportService,
    private router: Router,
    ) {
      library.addIcons(
        faGlobe,
        faClock
      )
      this.football$ = this.sSport.getSports();
     }

  ngOnInit(): void {
  }

  show(): void {
    this.isVisibleDetails = true;
  }
  hide(): void {
    this.isVisibleDetails = false;
    this.router.navigate(['/forecast/home']);
  }
}
