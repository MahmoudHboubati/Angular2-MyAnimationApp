import {Component, Inject} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  templateUrl: './app/plannedExpenses/plannedExpenses.component.html'
})
export class PlannedExpensesComponent {
  name: string;
  amount: number;
  description: string;
  scheduleType: number;

  plannedExpenses: FirebaseListObservable<any[]>;
  constructor(af: AngularFire) {
    this.plannedExpenses = af.database.list('/plannedExpenses');
  }
  addNew() {
    var item = {
      name: this.name,
      amount: this.amount,
      description: this.description,
      scheduleType: this.scheduleType
    };
    this.plannedExpenses.push(item);
  }
}
