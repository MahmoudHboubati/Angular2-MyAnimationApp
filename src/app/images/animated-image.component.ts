import {Component, trigger, state, style, transition, animate, Input, OnDestroy} from '@angular/core';
import {Translate} from '../animations/animations.service';
import {Observable} from 'rxjs/Rx';
import {AnimateEvent, AnimateEventParameter} from '../animations/animate.event';
@Component({
  selector: 'animated-img',
  templateUrl: './app/images/animated-image.component.html',
  styleUrls: ['./app/images/animated-image.component.css'],
  animations: [Translate.randomTrigger()],
  providers: [AnimateEvent]
})
export class AnimatedImage implements OnDestroy {
  @Input() imgUrl: string;
  @Input() animationType: string = 'random';
  currentState: number = 1;
  observableSource: any;
  repeate: number = 4;
  dueTime: number = 100;
  period: number = 1000;
  startAnimateing: any;

  constructor(private _animateEvent: AnimateEvent) {
    this._animateEvent.on().subscribe(animationParameter => {
      this.animate(animationParameter);
    });
  }

  /// Returns a random number between min (inclusive) and max (exclusive)
  private getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  next() {
    if (this.currentState >= 4)
      this.resetCounter();
    else
      this.currentState++;
  }

  animate(animationParameter: AnimateEventParameter) {
    this.observableSource = Observable.timer(this.dueTime, this.period)
      .take(this.repeate);
    this.startAnimateing = this.observableSource.subscribe(val => {
      this.next();
    }, err => { },
      () => { });
  }

  resetCounter() {
    this.currentState = 1;
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.startAnimateing.unsubscribe();
  }
}
