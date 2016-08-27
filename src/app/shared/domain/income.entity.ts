import {Money} from './money.entity';
import {FirebaseList} from './firebase.entity';

export class Income extends Money {
}

export class IncomesList extends FirebaseList<Income> {
}
