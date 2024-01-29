import { Component, OnInit } from '@angular/core';

import { ScoreService } from '../../services/score.service';
import { CounterService } from '../../services/counter.service';
import { ImageStringifyService } from '../../services/image-stringify.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.css']
})
export class ControlComponent implements OnInit {

  constructor( public _sc: ScoreService, public _cn: CounterService, public _imgString: ImageStringifyService ) { }

  ngOnInit() {
  }

  updateScore(sc: any){
    if( sc.homeScore > 99 ) {
      sc.homeScore = 99;
    }
    if( sc.guestScore > 100 ) {
      sc.guestScore = 99;
    }
    let data = {
      homeScore: sc.homeScore,
      guestScore: sc.guestScore,
      homeName: sc.homeName,
      guestName: sc.guestName
    }
    this._sc.update(data);
  }

  updateTime(cn: any){
    if (cn.min == 0) {
      cn.timeOut ="00:00"
    } else if (cn.min == 45) {
      cn.timeOut ="45:00"
    } else if (cn.min == 90) {
      cn.timeOut ="90:00"
    } else if (cn.min == 105) {
      cn.timeOut ="105:00"
    } else if (cn.min == 120) {
      cn.timeOut ="120:00"
    }
  }

  upImg(event) {
    this._imgString.toBase64(event);
  }
  sendImage(image: string) {
    this._cn.sendImage(image);
    delete this._imgString.dataUrl;
  }
}
