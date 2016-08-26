import {Component, EventEmitter} from '@angular/core';
import {AnimatedImageComponent} from './animated-image.component';
import {ImagesService, Image} from './images.service';
import {Observable} from 'rxjs/Rx';
import {AnimateEvent, AnimateEventParameter} from '../animations/animate.event';

@Component({
  selector: 'animated-images',
  templateUrl: './app/images/animated-images.component.html',
  directives: [AnimatedImageComponent],
  providers: [ImagesService, AnimateEvent]
})
export class AnimatedImagesComponent {
  images: Image[];
  imgHieght: number = 50;
  imgWidth: number = 50;
  imagesCount: number = 100;

  constructor(private _imagesService: ImagesService, private _animateEvent: AnimateEvent) {
    this.getImages();
  }

  getImages() {
    this.images = this._imagesService.getImages(this.imgWidth, this.imgHieght, this.imagesCount);
    // console.log(this.images[0].imgUrl);
  }

  start() {
    console.log('started');
    this._animateEvent.fire(new AnimateEventParameter());
  }
}
