import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ISport } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  url: string = environment.baseUrl;
  key: string = environment.secretKey;
  constructor(private http: HttpClient) { }

  getSports (): Observable<ISport> {
    return this.http.get<ISport>(`${this.url}/sports.json?key=${this.key}&q=auto:ip`);
  }

}
