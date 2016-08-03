import {Component} from '@angular/core';
import {AnimatedImage} from './animated-image.component';
import {ImagesService, Image} from './images.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'animated-images',
  templateUrl: './app/images/animated-images.component.html',
  directives: [AnimatedImage],
  providers: [ImagesService]
})
export class AnimatedImages {
  images: Image[];
  imgHieght: number = 50;
  imgWidth: number = 50;
  imagesCount: number = 5;
  observableSource: any;
  animate: any;
  repeate: number = 4;
  dueTime: number = 1000;
  period: number = 100;

  constructor(private _imagesService: ImagesService) {
    this.getImages();
  }

  getImages() {
    this.images = this._imagesService.getImages(this.imgWidth, this.imgHieght, this.imagesCount);
  }

  next() {

  }

  start() {
    this.observableSource = Observable.timer(this.dueTime, this.period)
      .take(this.repeate);
    this.animate = this.observableSource.subscribe(val => {
      this.next();
    }, err => { },
      () => { });
  }
}
