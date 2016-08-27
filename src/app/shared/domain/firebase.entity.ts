import {IGenericEntity} from './generic.entity';
import {FirebaseListObservable} from 'angularfire2';

export interface IFirebaseEntity extends IGenericEntity {
}
export class FirebaseList<T> extends FirebaseListObservable<T[]> {
}
