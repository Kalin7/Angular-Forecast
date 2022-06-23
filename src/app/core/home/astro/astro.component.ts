import { Component, OnInit } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { IAstroInfo } from '../../interfaces';
import { AstroService } from '../../service/astro.service';

@Component({
  selector: 'app-astro',
  templateUrl: './astro.component.html',
  styleUrls: ['./astro.component.scss']
})
export class AstroComponent implements OnInit {

  astro?: IAstroInfo;
  constructor(
    library: FaIconLibrary,
    private sAstro: AstroService,
  ) {
    library.addIcons(
      faSun,
      faMoon
    )
   }

  ngOnInit(): void {
    this.getAstro();
  }

  getAstro() {
    this.sAstro.getAstrology().subscribe((res) => {
      this.astro = res.astronomy;
      console.log(this.astro);
    })
  }

}


