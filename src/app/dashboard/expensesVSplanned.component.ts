import {Component} from '@angular/core';
import {ChartDirective} from '../charts/ChartJS.directive';
import {IChartData, ChartData, LineChart} from '../charts/chartjs.data';
import {PlannedExpensesService} from '../shared/services/plannedExpenses.service';
import {ExpensesService} from '../shared/services/expenses.service';
import {IExpenses} from '../shared/domain/expenses.entity';
import {Observable} from 'rxjs/Rx.KitchenSink';
import {FirebaseListObservable} from 'angularfire2';

@Component({
  directives: [ChartDirective],
  providers: [PlannedExpensesService, ExpensesService],
  templateUrl: './app/dashboard/expensesVSplanned.component.html'
})
export class ExpensesVSPlannedComponent {

  plannedExpenses: any;
  expenses: FirebaseListObservable<IExpenses[]>;
  data: Observable<IChartData>;
  lineChart: LineChart;

  constructor(plannedExoensesService: PlannedExpensesService, exoensesService: ExpensesService) {
    this.plannedExpenses = plannedExoensesService.get();
    this.expenses = exoensesService.get();

    this.lineChart = new LineChart();
    // this.lineChart.addDataSet();

    this.data = this.expenses.map((next) => {

      var months: any[] = [];
      var totalExpenses: number[] = [];

      Observable.from<IExpenses>(next).groupBy((k) => {
        return new Date(k.at).getMonth() + 1;
      }).map((a) => {
        months.push(a.key);
        var sum = 0;
        a.subscribe((s) => {
          sum += s.amount;
        }, () => { }, () => {
          totalExpenses.push(sum);
        });
      }).subscribe();

      var chartData: ChartData = new ChartData(totalExpenses, months.sort());
      return chartData;
    });
  }

}
