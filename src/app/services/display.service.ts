import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

import { ScoreService } from './score.service';

@Injectable({
  providedIn: 'root'
})
export class DisplayService {
  file: string;

  constructor( private http: Http, private _sc: ScoreService) {
    this.file = "assets/HPM.png";
  }

  getMedia() {
    let mediaRef = this.http.get( 'http://' + this._sc.url + '/media').pipe( map( res => res.json() ) );
    mediaRef.subscribe( data => {
      data = JSON.parse(data);
      if(data.image !== this.file) {
        this.file = data.image;
      }
    })
  }
}
