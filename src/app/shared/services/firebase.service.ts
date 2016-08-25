import {GenericService, IGenericEntity} from './generic.service';
import {FirebaseListObservable} from 'angularfire2';

export class FirebaseService<IFirebaseEntity> extends GenericService<IFirebaseEntity, FirebaseListObservable<IFirebaseEntity[]>> {
  constructor(flo: FirebaseListObservable<IFirebaseEntity[]>) {
    super(flo)
  }
  add(p: IFirebaseEntity) {
    this.get().push(p);
  }
}

export interface IFirebaseEntity extends IGenericEntity {
}
