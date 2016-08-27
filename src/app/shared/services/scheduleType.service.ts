import {ScheduleType} from '../domain/scheduleType.entity';
import {LookupService} from './generic.service';
import {Observable} from 'rxjs/Rx.KitchenSink';

export class ScheduleTypeService extends LookupService<ScheduleType> {
  private scheduleTypes: ScheduleType[];
  private list: Observable<ScheduleType[]>;

  type: string = 'dropdown';

  get(): Observable<ScheduleType[]> {
    return this.list;
  }

  constructor() {
    super();

    this.list = Observable.create(this.scheduleTypes);
    var daily: ScheduleType = { id: 1, title: 'Daily', isActive: true };
    var weekly: ScheduleType = { id: 4, title: 'Weekly', isActive: true };
    var monthly: ScheduleType = { id: 2, title: 'Monthly', isActive: true };
    var yearly: ScheduleType = { id: 3, title: 'Yearly', isActive: true };

    this.scheduleTypes.push(daily);
    this.scheduleTypes.push(weekly);
    this.scheduleTypes.push(monthly);
    this.scheduleTypes.push(yearly);
  }
}
