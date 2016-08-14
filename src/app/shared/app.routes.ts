import { provideRouter, RouterConfig } from '@angular/router';
import {AnimatedImagesComponent} from '../images/animated-images.component';
import {FireBaseComponent} from '../firebase/firebase.component';
import {PageNotFoundComponent} from './notFound.component';
// import {AccelaComponent} from '../accela/accela.component';

const routes: RouterConfig = [
  { path: 'animation', component: AnimatedImagesComponent },
  { path: 'firebase', component: FireBaseComponent },
  // { path: 'accela', component: AccelaComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
