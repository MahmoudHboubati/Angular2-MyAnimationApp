import { Component, trigger, state, style, transition, animate, Input } from '@angular/core';
import { Translate } from '../animations/animations.service';

@Component({
  selector: 'animated-img',
  templateUrl: './app/images/animated-image.component.html',
  styleUrls: ['./app/images/animated-image.component.css'],
  animations: [
    trigger('movementtrigger', [
      state('1', style({ transform: new Translate().getTranslate() })),
      state('2', style({ transform: 'translateX(50px)' })),
      state('3', style({ transform: 'translate(50px, 50px)' })),
      state('4', style({ transform: 'translate(0px, 50px)' })),
      transition('1 <=> 2', [
        animate('100ms shake')
      ]),
      transition('2 <=> 3', [
        animate('100ms shake')
      ]),
      transition('3 <=> 4', [
        animate('100ms shake')
      ]),
      transition('4 <=> 1', [
        animate('100ms shake')
      ])
    ])
  ]
})
export class AnimatedImage {
  @Input() imgUrl: string;
  @Input() animationType: string;
  private currentState: number;
  private posCounter: number = 1;

  constructor() {
    if (this.animationType == 'random') {
      this.currentState = this.getRandomArbitrary(1, 4);
    }
    else {
      this.currentState = 1;
    }
  }

  /// Returns a random number between min (inclusive) and max (exclusive)
  private getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  next() {
    if (this.posCounter >= 4)
      this.resetCounter();
    else
      this.posCounter++;
  }

  resetCounter() {
    this.posCounter = 1;
  }
}
