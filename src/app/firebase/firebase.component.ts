import {Component, Inject} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  templateUrl: './app/firebase/firebase.component.html'
})
export class FireBaseComponent {
  friends: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.friends = af.database.list('/friends');
  }
  addNew(item: any) {
    this.friends.push(item);
  }
}
