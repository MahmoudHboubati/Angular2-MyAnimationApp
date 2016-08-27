import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {FirebaseService} from "./firebase.service";
import {IPlannedExpenses} from '../domain/plannedExpenses.entity';

@Injectable()
export class PlannedExpensesService extends FirebaseService<IPlannedExpenses> {
  constructor(private af: AngularFire) {
    super();
  }
  get() {
    return this.af.database.list('/plannedExpenses');
  }
}
