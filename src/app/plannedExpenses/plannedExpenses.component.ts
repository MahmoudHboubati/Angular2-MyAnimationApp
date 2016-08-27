import {Component, Inject} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2';
import {IPlannedExpenses} from '../shared/domain/plannedExpenses.entity';
import {PlannedExpensesService} from '../shared/services/plannedExpenses.service';

@Component({
  templateUrl: './app/plannedExpenses/plannedExpenses.component.html',
  providers: [PlannedExpensesService]
})
export class PlannedExpensesComponent {
  name: string;
  amount: number;
  description: string;
  scheduleType: number;

  plannedExpenses: FirebaseListObservable<IPlannedExpenses>;
  constructor(private plannedExpensesService: PlannedExpensesService) {
    this.plannedExpenses = plannedExpensesService.get();
  }
  addNew() {
    var item = {
      name: this.name,
      amount: this.amount,
      description: this.description,
      scheduleType: this.scheduleType
    };
    this.plannedExpensesService.add(item);
  }
}
