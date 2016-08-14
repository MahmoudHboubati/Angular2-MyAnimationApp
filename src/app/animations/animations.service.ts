import {trigger, state, style, transition, animate} from '@angular/core';

export interface IAnimatedComponent {
  animated: IAnimationable;
}

export interface IAnimationable {
  currentState: number;
  repeate: number;
  dueTime: number;
  period: number;
}

export class Animated implements IAnimationable {
  currentState: number = 1;
  repeate: number = 4;
  dueTime: number = 100;
  period: number = 1000;
}

export class Translate {
  static getTranslate() {
    return 'translate(0px, 0px)';
  }
  static getTranslatePX(pixels: number) {
    return 'translateX(' + pixels + 'px)';
  }
  static getTranslatePY(pixels: number) {
    return 'translateY(' + pixels + 'px)';
  }
  static getStyle() {
    return style({ transform: this.getTranslate() })
  }

  static randomTrigger() {
    return trigger('movementtrigger', [
      state('1', this.getStyle()),
      state('2', style({ transform: 'translateX(50px)' })),
      state('3', style({ transform: 'translate(50px, 50px)' })),
      state('4', style({ transform: 'translate(0px, 50px)' })),
      transition('1 <=> 2', [
        animate('1s ease')
      ]),
      transition('2 <=> 3', [
        animate('1s ease')
      ]),
      transition('3 <=> 4', [
        animate('1s ease')
      ]),
      transition('4 <=> 1', [
        animate('1s ease')
      ])
    ])
  }
}
