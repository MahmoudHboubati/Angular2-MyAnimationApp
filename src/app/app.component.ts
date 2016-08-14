import {Component, ElementRef} from '@angular/core';
import {AnimatedImagesComponent} from './images/animated-images.component';
import {FireBaseComponent} from './firebase/firebase.component';
import {ROUTER_DIRECTIVES} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [AnimatedImagesComponent, ROUTER_DIRECTIVES]
})
export class AppComponent {
  title = 'app works!';
}
