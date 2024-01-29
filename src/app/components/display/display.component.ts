import { Component, OnInit } from '@angular/core';
import { DisplayService } from '../../services/display.service'


@Component({
  selector: 'app-display',
  templateUrl: './display.component.html'
})
export class DisplayComponent implements OnInit {

  constructor( public _ds: DisplayService) { }

  ngOnInit() {
  }

}
