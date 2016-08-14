import {Component, trigger, state, style, transition, animate, Input, OnDestroy} from '@angular/core';
import {Translate, IAnimatedComponent} from '../animations/animations.service';
import {Observable} from 'rxjs/Rx';
import {AnimateEvent, AnimateEventParameter} from '../animations/animate.event';
import {EditEvent} from '../Editing/edit.event';
import {Image} from './images.service';

@Component({
  selector: 'animated-img',
  templateUrl: './app/images/animated-image.component.html',
  styleUrls: ['./app/images/animated-image.component.css'],
  animations: [Translate.randomTrigger()],
  providers: [AnimateEvent, EditEvent]
})

export class AnimatedImageComponent implements OnDestroy, IAnimatedComponent {
  @Input() animationType: string = 'random';

  startAnimateing: any;
  observableSource: any;

  @Input() animated: Image;
  constructor(private _animateEvent: AnimateEvent, private _editEvent: EditEvent) {
    this._animateEvent.on().subscribe(animationParameter => {
      this.animate(animationParameter);
    });
  }

  /// Returns a random number between min (inclusive) and max (exclusive)
  private getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }

  next() {
    if (this.animated.currentState >= 4)
      this.resetCounter();
    else
      this.animated.currentState++;
  }

  animate(animationParameter: AnimateEventParameter) {
    this.observableSource = Observable.timer(this.animated.dueTime, this.animated.period)
      .take(this.animated.repeate);
    this.startAnimateing = this.observableSource.subscribe(val => {
      this.next();
    }, err => { },
      () => { });
  }

  edit() {
    this._editEvent.fire(this.animated);
  }

  resetCounter() {
    this.animated.currentState = 1;
  }

  ngOnDestroy() {
    if (this.startAnimateing) {
      // prevent memory leak when component destroyed
      this.startAnimateing.unsubscribe();
    }
  }
}
