import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[FadeInDown]'
})
export class FadeInDownDirective {

  constructor( e: ElementRef) {
    e.nativeElement.style.animation = "fadeInDown 0.3s";
  }

}
