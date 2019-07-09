import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  private conf = new BehaviorSubject(undefined);

  constructor() {
    this.conf.next({ foo: 'stuff' });
  }

  get config() {
    return this.conf.asObservable().pipe(filter(conf => conf !== undefined));
  }
}
