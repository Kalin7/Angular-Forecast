import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { IFootball, ISport } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class SportService {

  url: string = environment.baseUrl;
  key: string = environment.secretKey;
  constructor(private http: HttpClient) { }

  getSports (): Observable<any> {
    return this.http.get<IFootball>(`${this.url}/sports.json?key=${this.key}&q=auto:ip`)
                    .pipe(map((sports) => {
                      return sports.football
                    }))
  }

}
