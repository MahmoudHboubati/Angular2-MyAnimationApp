import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {FirebaseService, IFirebaseEntity} from "./firebase.service";

@Injectable()
export class PlannedExpensesService extends FirebaseService<IPlannedExpenses> {
  constructor(private af: AngularFire) {
    super(af.database.list('/plannedExpenses'));
  }
}

export interface IPlannedExpenses extends IFirebaseEntity {
}
