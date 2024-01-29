import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

import { ScoreService } from './score.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  timeOut: string;
  sec: number;
  min: number;
  clock: any;
  time: string ="1T";;


  constructor( private http: Http, private _sc: ScoreService ) {
    this.timeOut = '00:00';
    this.initClock();
  }

  initClock() {
    let d = this.timeOut.split(':')[0];
    this.min = parseInt(d);
    d = this.timeOut.split(':')[1];
    this.sec = parseInt(d);
  }

  run() {
    this.sendCmd('run');
    if(!this.clock) {
      this.clock = setInterval( () => {
        this.timeOut = '';
        if(this.sec == 59) {
          this.sec = 0;
          ++this.min;
        } else {
          ++this.sec;
        }
        if(this.min == 0 && this.sec == 0) {
          clearInterval(this.clock);
        }
        if(this.min < 10) {
          this.timeOut += '0';
        }
        this.timeOut += this.min + ':';
        if(this.sec < 10) {
          this.timeOut += '0'
        }

        if(this.min <= 44) {
          this.time = "1T";
        } else if(this.min <= 89) {
          this.time = "2T";
        } else if(this.min <= 104) {
          this.time = "TE";
        } else if(this.min <= 119) {
          this.time = "2TE";
        }
        this.timeOut += this.sec;

        if(this.sec == 0){
          switch(this.min){
            case(45):
              this.sendCmd('pause');
              clearInterval(this.clock);
              delete this.clock;
              
            break;
            case(90):
              this.sendCmd('pause');
              clearInterval(this.clock);
              delete this.clock;
              
            break;
            case(105):
              this.sendCmd('pause');
              clearInterval(this.clock);
              delete this.clock;
              
            break;
            case(120):
              this.sendCmd('pause');
              clearInterval(this.clock);
              delete this.clock;
              
            break;
          }
        }
      }, 1000)
    }

    
  }

  pause() {
    this.sendCmd('pause');
    clearInterval(this.clock);
    delete this.clock;
  }

  stop() {
    this.sendCmd('stop');
    clearInterval(this.clock);
    delete this.clock;
    this.timeOut = '00:00';
    this.initClock();
  }

  sendCmd(action: string) {
    let headers = new Headers({'Content-Type':'application/json'});
    let cmd = { action: action, time: this.timeOut };
    let body = JSON.stringify(cmd);
    let postRef = this.http.post( 'http://' + this._sc.url + '/time', body, { headers } ).pipe( map( res => res.json() ) );
    postRef.subscribe(success => { console.log('true')}, error => { console.error(error) });
  }

  sendImage(image: string) {
    let headers = new Headers({'Content-Type':'application/json'});
    let cmd = { image: image };
    let body = JSON.stringify(cmd);
    let postRef = this.http.post( 'http://' + this._sc.url + '/media', body, { headers } ).pipe( map( res => res.json() ) );
    postRef.subscribe(success => { console.log('true')}, error => { console.error(error) });
  }

  getCount() {
    let countRef = this.http.get('http://' + this._sc.url + '/time').pipe( map( res => res.json() ) );
    countRef.subscribe( data => {
      data = JSON.parse(data);
      console.log(data.action);
      if(data.action != 'nothing') {
        this.timeOut = data.time;
        this.initClock();
        switch(data.action) {
          case 'run':
            this.run();
            break;
          case 'pause':
            this.pause();
            break;
          case 'stop':
            this.stop();
            break;
        }
        this.sendCmd('nothing');
      }
    });
  }
}
