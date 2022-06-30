import { Component } from '@angular/core';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons'
import { Observable } from 'rxjs';
import { IAstroInfo } from '../../interfaces';
import { AstroService } from '../../service/astro.service';

@Component({
  selector: 'app-astro',
  templateUrl: './astro.component.html',
  styleUrls: ['./astro.component.scss']
})
export class AstroComponent{

  astro$!: Observable<IAstroInfo>;
  constructor(
    library: FaIconLibrary,
    private sAstro: AstroService,
  ) {
    library.addIcons(
      faSun,
      faMoon
    )
    this.astro$ = this.sAstro.getAstrology();
   }
}


