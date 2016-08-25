import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {GenericService, IGenericEntity} from './generic.service';
import {FirebaseService, IFirebaseEntity} from './firebase.service';

@Injectable()
export class ExpensesService extends FirebaseService<IExpenses> {
  constructor(private af: AngularFire) {
    super(af.database.list('/expenses'));
  }
}

export interface IExpenses extends IFirebaseEntity {
  amount: number;
  at: string;
}
