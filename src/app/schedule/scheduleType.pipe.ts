import {Component, Pipe, PipeTransform} from '@angular/core';
import {ScheduleTypeService} from '../shared/services/scheduleType.service';

@Pipe({
  name: 'sheduleTypeTitle'
})
/**
* 1 -> Daily
**/
export class ScheduleTypePipe implements PipeTransform {
  constructor(private _scheduleTypeService: ScheduleTypeService) {
  }
  transform(scheduleType: number, atgs: any[]): any {
    var listObservable = this._scheduleTypeService.get();
    var scheduleTypeTitle = 'N/A';

    listObservable.subscribe((value) => {
      var arr = value.filter((schType, index) => {
        return schType.id == scheduleType;
      });

      if (arr && arr.length > 0)
        scheduleTypeTitle = arr[0].title;
    });

    return scheduleTypeTitle;
  }
}
