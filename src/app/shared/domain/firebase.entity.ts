import {IGenericEntity} from './generic.entity';
import {FirebaseListObservable} from 'angularfire2';

export interface IFirebaseEntity extends IGenericEntity {
}
export class FirebaseEntity implements IFirebaseEntity {
}
export class FirebaseList<T> extends FirebaseListObservable<T[]> {
}
