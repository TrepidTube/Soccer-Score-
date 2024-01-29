import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ScoreService } from '../../services/score.service';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styles: []
})
export class InitComponent {
  initApp: boolean;

  constructor( private _sc: ScoreService, private router: Router ) {
    this.initApp = true;
    this._sc.url = "localhost:3000";
  }

  goTo( link: string ){
    this.initApp = false;
    this.router.navigate([link]);
  }
}
