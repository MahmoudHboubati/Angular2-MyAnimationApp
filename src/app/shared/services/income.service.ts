import {Injectable} from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';
import {GenericService} from './generic.service';
import {IGenericEntity} from '../domain/generic.entity';
import {FirebaseService} from './firebase.service';
import {Income} from '../domain/income.entity';

@Injectable()
export class IncomeService extends FirebaseService<Income> {
  constructor(private af: AngularFire) {
    super(af.database.list('/incomes'));
  }
}
