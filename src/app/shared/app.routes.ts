import { provideRouter, RouterConfig } from '@angular/router';
import {AnimatedImages} from '../images/animated-images.component';
import {FireBaseComponent} from '../firebase/firebase.component';
import {PageNotFoundComponent} from './notFound.component';

const routes: RouterConfig = [
  { path: 'animation', component: AnimatedImages },
  { path: 'firebase', component: FireBaseComponent },
  { path: '**', component: PageNotFoundComponent }
];

export const appRouterProviders = [
  provideRouter(routes)
];
