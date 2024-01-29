import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class ScoreService {
  url: string;
  homeScore: number;
  guestScore: number;
  homeName: string;
  guestName: string;

  constructor( public http: Http ) {
    this.url = '';
    this.homeScore = 0;
    this.guestScore = 0;
    this.homeName = 'HOME';
    this.guestName= 'GUEST';
  }

  getData() {
    if(this.url) {
      let dataRef = this.http.get('http://' + this.url).pipe( map( res => res.json() ) );
      dataRef.subscribe( data => {
        data = JSON.parse(data);
        this.homeScore = data.homeScore;
        this.guestScore = data.guestScore;
        this.homeName = data.homeName;
        this.guestName = data.guestName;
      })
    }
  }

  update(sc: any) {
    let headers = new Headers({'Content-Type': 'application/json'});
    let body = JSON.stringify(sc);
    console.log(body)
    let postRef = this.http.post( 'http://' + this.url, body, { headers } ).pipe( map( res => res.json() ) );
    postRef.subscribe(success => {console.log('posted')});
  }
}
