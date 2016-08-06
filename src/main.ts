import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import {Broadcaster} from './app/shared/broadcaster.service';
import { appRouterProviders } from './app/shared/app.routes';
import { FIREBASE_PROVIDERS, AuthProviders, defaultFirebase } from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [Broadcaster, appRouterProviders, FIREBASE_PROVIDERS,
  defaultFirebase({
    apiKey: "AIzaSyC5VvURIFqzvPJt-35oUyQCPWgx2svvaNg",
    authDomain: "myanimationapp.firebaseapp.com",
    databaseURL: "https://myanimationapp.firebaseio.com",
    storageBucket: "firebase-myanimationapp.appspot.com",
  })
]);
