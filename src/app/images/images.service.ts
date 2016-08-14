import {Injectable} from '@angular/core';
import {Animated} from '../animations/animations.service';

@Injectable()
export class ImagesService {
  getImages(width: number, height: number, count: number): Image[] {
    var images = new Array<Image>();
    for (var i = 0; i < count; i++) {
      images.push(new Image('http://lorempixel.com/' + width + '/' + height + '/people'));
    }
    return images;
  }
}

export class Image extends Animated {
  imgUrl: string;
  constructor(imgUrl: string) {
    super()
    this.imgUrl = imgUrl;
  }
}
