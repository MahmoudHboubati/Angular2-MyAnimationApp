import {Broadcaster} from '../shared/broadcaster.service';
import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';

@Injectable()
export class EditEvent {
  constructor(private broadcaster: Broadcaster) { }
  fire(data: any) {
    this.broadcaster.broadcast(MessageEvent, data);
  }
  on(): Observable<any> {
    return this.broadcaster.on<any>(MessageEvent);
  }
}
