import {Component, Inject} from '@angular/core';
import {FirebaseListObservable} from 'angularfire2';
import {IPlannedExpenses} from '../shared/domain/plannedExpenses.entity';
import {PlannedExpensesService} from '../shared/services/plannedExpenses.service';
import {ScheduleTypeComponent} from '../schedule/scheduleType.component';

@Component({
  templateUrl: './app/plannedExpenses/plannedExpenses.component.html',
  providers: [PlannedExpensesService],
  directives: [ScheduleTypeComponent]
})
export class PlannedExpensesComponent {
  name: string;
  amount: number;
  description: string;
  scheduleType: string;

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

  onScheduleTypeChange($event) {
    this.scheduleType = $event.newValue;
  }
}
