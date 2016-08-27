import {GenericService} from './generic.service';
import {FirebaseListObservable} from 'angularfire2';
import {IGenericEntity} from '../domain/generic.entity';
import {FirebaseList} from '../domain/firebase.entity';

export abstract class FirebaseService<IFirebaseEntity> extends GenericService<IFirebaseEntity, FirebaseList<IFirebaseEntity>> {
  constructor() {
    super()
  }
  add(p: IFirebaseEntity) {
    this.get().push(p);
  }
}
