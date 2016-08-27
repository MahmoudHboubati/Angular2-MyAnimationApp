import {Component} from '@angular/core';
import {Income} from '../shared/domain/income.entity';
import {IncomeService}  from '../shared/services/income.service';
import {FirebaseList} from '../shared/domain/firebase.entity';

@Component({
  selector: 'incomes-list',
  templateUrl: './app/income/incomes.component.html'
})
export class IncomesComponent {
  incomes: FirebaseList<Income>;
  constructor(private _incomeService: IncomeService) {
    this.incomes = _incomeService.get();
  }
}
