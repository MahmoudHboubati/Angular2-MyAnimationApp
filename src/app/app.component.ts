import { Component, ElementRef } from '@angular/core';
import {AnimatedImages} from './images/animated-images.component';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [AnimatedImages]
})
export class AppComponent {
  title = 'app works!';
}
