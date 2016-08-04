import {Component, EventEmitter} from '@angular/core';
import {AnimatedImage} from './animated-image.component';
import {ImagesService, Image} from './images.service';
import {Observable} from 'rxjs/Rx';
import {AnimateEvent, AnimateEventParameter} from '../animations/animate.event';

@Component({
  selector: 'animated-images',
  templateUrl: './app/images/animated-images.component.html',
  directives: [AnimatedImage],
  providers: [ImagesService, AnimateEvent]
})
export class AnimatedImages {
  images: Image[];
  imgHieght: number = 50;
  imgWidth: number = 50;
  imagesCount: number = 100;

  constructor(private _imagesService: ImagesService, private _animateEvent: AnimateEvent) {
    this.getImages();
  }

  getImages() {
    this.images = this._imagesService.getImages(this.imgWidth, this.imgHieght, this.imagesCount);
  }

  start() {
    this._animateEvent.fire(new AnimateEventParameter());
  }
}
