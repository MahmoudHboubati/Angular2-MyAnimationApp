import {Observable} from 'rxjs/Observable';
import {IGenericEntity} from '../domain/generic.entity';
export class GenericService<TEntity extends IGenericEntity, TObservable extends Observable<TEntity[]>> {
  constructor(private list: TObservable) {
  }
  get(): TObservable {
    return this.list;
  }
}
