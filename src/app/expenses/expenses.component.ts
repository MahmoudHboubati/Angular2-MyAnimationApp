import {Component, Inject} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
  templateUrl: './app/expenses/expenses.component.html'
})
export class ExpensesComponent {

  name: string;
  description: string;
  amount: number;
  at: string;

  expenses: FirebaseListObservable<any[]>;
  plannedExpenses: FirebaseListObservable<any[]>;

  constructor(af: AngularFire) {
    this.expenses = af.database.list('/expenses');
    this.plannedExpenses = af.database.list('/plannedExpenses');
  }

  addNew() {
    var item = {
      name: this.name,
      description: this.description,
      amount: this.amount,
      at: this.at,
      createdAt: (new Date()).toString(),
    };
    this.expenses.push(item);
  }

  initialize(item: any) {
      this.name = item.name;
      this.description = item.description;
      this.amount = item.amount;
      this.at = (new Date()).toString();
  }
}
