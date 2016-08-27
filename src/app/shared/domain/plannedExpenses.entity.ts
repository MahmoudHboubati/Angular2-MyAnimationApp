import {IFirebaseEntity} from './firebase.entity';
import {Money} from './money.entity';

export interface IPlannedExpenses extends IFirebaseEntity {
}

export interface PlannedExpenses extends Money, IPlannedExpenses {
}
