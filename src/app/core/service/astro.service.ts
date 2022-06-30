import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AstroService {

  url: string = environment.baseUrl;
  key: string = environment.secretKey;
  constructor(
    private http: HttpClient
  ) { }

  getAstrology(): Observable<any>{
    return this.http.get<any>(`${this.url}/astronomy.json?key=${this.key}&q=Bulgaria&lang=bg`);
  }
}
