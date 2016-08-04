import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {Broadcaster} from './app/shared/broadcaster.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [Broadcaster]);
