import {GenericService} from './generic.service';
import {FirebaseListObservable} from 'angularfire2';
import {IGenericEntity} from '../domain/generic.entity';
import {FirebaseList} from '../domain/firebase.entity';

export class FirebaseService<IFirebaseEntity> extends GenericService<IFirebaseEntity, FirebaseList<IFirebaseEntity>> {
  constructor(flo: FirebaseListObservable<IFirebaseEntity[]>) {
    super(flo)
  }
  add(p: IFirebaseEntity) {
    this.get().push(p);
  }
}
