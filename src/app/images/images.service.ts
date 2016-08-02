import {Injectable} from '@angular/core';

@Injectable()
export class ImagesService {
  constructor() {
  }

  images: Image[];

  getImages(width: number, height: number, count: number): Image[] {
    this.images = new Array<Image>();
    for (var i = 0; i <= count; i++) {
      this.images.push({
        imgUrl: 'http://lorempixel.com/' + width + '/' + height + '/people?' + i
      });
    }
    return this.images;
  }
}

export class Image {
  imgUrl: string;
}
