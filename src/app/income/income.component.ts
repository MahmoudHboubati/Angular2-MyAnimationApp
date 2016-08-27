import {Component} from '@angular/core';
import {Income, IncomesList} from '../shared/domain/income.entity';
import {IncomesComponent} from './incomes.component';
import {IncomeService}  from '../shared/services/income.service';
import {MoneyComponent} from '../shared/components/money.component'

@Component({
  templateUrl: './app/income/income.component.html',
  directives: [IncomesComponent],
  providers: [IncomeService]
})
export class IncomeComponent extends MoneyComponent {
  private income: Income;
  incomes: IncomesList;

  constructor(private _incomeService: IncomeService) {
    super();
    this.incomes = _incomeService.get();
  }

  addNew() {
    this.income = new Income();
    this.income.name = this.name;
    this.income.description = this.description;
    this.income.amount = this.amount;
    this.income.at = this.at;
    this._incomeService.add(this.income);
  }
}
