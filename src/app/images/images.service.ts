import {Injectable} from '@angular/core';

@Injectable()
export class ImagesService {

  getImages(width: number, height: number, count: number): Image[] {
    var images = new Array<Image>();
    for (var i = 0; i < count; i++) {
      images.push({
        imgUrl: 'http://lorempixel.com/' + width + '/' + height + '/people'
      });
    }
    return images;
  }
}

export class Image {
  imgUrl: string;
}
