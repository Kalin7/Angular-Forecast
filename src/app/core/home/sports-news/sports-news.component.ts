import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faClock, faGlobe } from '@fortawesome/free-solid-svg-icons';
import { IFootball, ISport } from '../../interfaces';
import { SportService } from '../../service/sport.service';

@Component({
  selector: 'app-sports-news',
  templateUrl: './sports-news.component.html',
  styleUrls: ['./sports-news.component.scss']
})
export class SportsNewsComponent implements OnInit {

  football?: IFootball[];

  constructor(
    library: FaIconLibrary,
    private sSport: SportService
    ) {
      library.addIcons(
        faGlobe,
        faClock
      )
     }

  ngOnInit(): void {
    this.getFootbal();
  }

  getFootbal() {
    this.sSport.getSports().subscribe((res) => {
      this.football = res.football;
    })
  }

}
