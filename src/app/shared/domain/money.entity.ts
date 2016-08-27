import {FirebaseEntity} from './firebase.entity';

export interface IMoney {
  name: string;
  amount: number;
  currency: string;
  description: string;
  at: string;
}

export class Money implements IMoney {
  name: string;
  amount: number;
  currency: string;
  description: string;
  at: string;
}
