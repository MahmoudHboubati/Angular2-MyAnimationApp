import {Component, Inject, Input, Output, EventEmitter} from '@angular/core';
import {ScheduleType} from '../shared/domain/scheduleType.entity';
import {ScheduleTypePipe} from './scheduleType.pipe';

@Component({
  selector: 'schedule-types',
  templateUrl: '../app/schedule/scheduleType.component.html',
  pipes: [ScheduleTypePipe]
})
export class ScheduleTypeComponent {
  @Input()
  type: string = 'dropdown';
  @Input()
  id: string;

  scheduleType: string;

  @Output()
  changeType = new EventEmitter();

  onChange($event) {
    this.changeType.emit({ newValue: $event.target.value });
  }
}
