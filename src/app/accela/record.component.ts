import {Component, Input} from '@angular/core'
@Component({
  selector: 'record',
  templateUrl: '../app/accela/record.component.html'
})
export class RecordComponent {
  @Input() myRecord: any;
}
