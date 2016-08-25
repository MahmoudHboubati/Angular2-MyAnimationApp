import { Observable } from 'rxjs/Observable';

export class GenericService<TEntity extends IGenericEntity, TObservable extends Observable<TEntity[]>> {
  constructor(private list: TObservable) {
  }
  get(): TObservable {
    return this.list;
  }
}

export interface IGenericEntity {
}
