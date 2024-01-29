import { Component } from '@angular/core';

import { ScoreService } from '../../services/score.service';
import { CounterService } from '../../services/counter.service';
import { DisplayService } from '../../services/display.service';

@Component({
  selector: 'app-scoreboard',
  templateUrl: './scoreboard.component.html',
  styleUrls: ['./scoreboard.component.css']
})
export class ScoreboardComponent {
  constructor( public _sc: ScoreService, public _cn: CounterService, public _ds: DisplayService ) {
    setInterval( () => {
      _sc.getData();
      _cn.getCount();
      _ds.getMedia();
    }, 1000);
  }
}
