import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Broadcaster} from '../shared/broadcaster.service';

@Injectable()
export class AnimateEvent {
  constructor(private broadcaster: Broadcaster) { }

  fire(data: AnimateEventParameter): void {
    this.broadcaster.broadcast(MessageEvent, data);
  }

  on(): Observable<AnimateEventParameter> {
    return this.broadcaster.on<AnimateEventParameter>(MessageEvent);
  }
}

export class AnimateEventParameter {
  animationType: string = 'random';
}
