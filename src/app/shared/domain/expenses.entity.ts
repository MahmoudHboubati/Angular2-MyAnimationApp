import {IFirebaseEntity} from './firebase.entity';

export interface IExpenses extends IFirebaseEntity {
  amount: number;
  at: string;
}
