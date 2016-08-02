import { Component, trigger, state, style, transition, animate, ElementRef } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { ImagesService, Image } from './images/images.service';
import { Translate } from './animations/animations.service';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  providers: [ImagesService],
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
export class AppComponent {
  title = 'app works!';
  state: string = 'firstpos';
  posCounter: number = 1;
  dueTime: number = 1000;
  period: number = 100;
  imgHieght: number = 25;
  imgWidth: number = 25;
  imgUrl = 'http://lorempixel.com/' + this.imgHieght + '/' + this.imgWidth + '';
  animate: any;
  repeate: number = 4;
  observableSource: any;
  images: Image[];
  imagesCount: number = 5;

  next() {
    if (this.posCounter >= 4)
      this.resetCounter();
    else
      this.posCounter++;
  }

  resetCounter() {
    this.posCounter = 1;
  }
  // stopAnimating(){
  //   this.animate.unsubscribe();
  // }
  constructor(private _imagesService: ImagesService) {
    this.images = _imagesService.getImages(this.imgWidth, this.imgHieght, this.imagesCount);
  }

  getImages() {
    this.images = this._imagesService.getImages(this.imgWidth, this.imgHieght, this.imagesCount);
  }

  start() {
    this.observableSource = Observable.timer(this.dueTime, this.period)
      .take(this.repeate);
    this.animate = this.observableSource.subscribe(val => {
      this.next();
    }, err => { }, () => { });
  }
  distroyObservable() {
    this.observableSource = null;
  }
}
