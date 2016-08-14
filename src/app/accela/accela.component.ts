import {Component} from '@angular/core'
import {RecordsService} from './records.service';
import {RecordComponent} from './record.component';
import { Http, Response } from '@angular/http';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'accela',
  templateUrl: '../app/accela/accela.component.html',
  providers: [RecordsService],
  directives: [RecordComponent]
})
export class AccelaComponent {
  records = {};
  keyups = new Observable<Response>();

  constructor(_recordsService: RecordsService) {
    this.keyups = _recordsService.getAllRecords();
    var subscribtion = this.keyups.subscribe((data: Response) => { this.records = data; });
  }
}
