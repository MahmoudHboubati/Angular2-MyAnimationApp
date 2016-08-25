import {Component} from '@angular/core';
import {ChartDirective, IChartData} from '../charts/ChartJS.directive';
import {PlannedExpensesService} from '../shared/services/plannedExpenses.service';
import {ExpensesService, IExpenses} from '../shared/services/expenses.service';
import {Observable} from 'rxjs/Rx.KitchenSink';
import {Operator} from 'rxjs/operator';
import {FirebaseListObservable} from 'angularfire2';

@Component({
  directives: [ChartDirective],
  providers: [PlannedExpensesService, ExpensesService],
  templateUrl: './app/dashboard/expensesVSplanned.component.html'
})
export class ExpensesVSPlannedComponent {

  plannedExpenses: any;
  expenses: FirebaseListObservable<IExpenses[]>;

  constructor(plannedExoensesService: PlannedExpensesService, exoensesService: ExpensesService) {
    this.plannedExpenses = plannedExoensesService.get();
    this.expenses = exoensesService.get();
    this.data = this.expenses.map((next) => {

      var months: any[] = [];
      var ddd: number[] = [];

      Observable.from<IExpenses>(next).groupBy((k) => {
        return new Date(k.at).getMonth() + 1;
      }).map((a) => {
        months.push(a.key);
        var sum = 0;
        a.subscribe((s) => {
          sum += s.amount;
        }, () => { }, () => {
          ddd.push(sum);
        });
      }).subscribe();

      var chartData: ChartData = new ChartData(ddd, months.sort());
      return chartData;
    });
  }

  data: Observable<IChartData>;
}

class ChartData implements IChartData {
  constructor(public data: any[], public labels: any[]) {
  }
}
