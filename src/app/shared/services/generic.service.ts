import {Observable} from 'rxjs/Observable';
import {IGenericEntity, ILookupEntity} from '../domain/generic.entity';

export abstract class GenericService<TEntity extends IGenericEntity, TObservable extends Observable<TEntity[]>> {
  abstract get(): TObservable;
}

export abstract class LookupService<TEntity extends ILookupEntity> extends GenericService<TEntity, Observable<TEntity[]>> {
  constructor() {
    super();
  }
}
