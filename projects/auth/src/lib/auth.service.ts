import { Injectable } from '@angular/core';
import { WindowService } from '@fcf/window';
import { ConfigService } from '@fcf/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(
    private window: WindowService,
    private configService: ConfigService,
  ) {}

  get auth() {
    return this.configService.config.pipe(
      map(v => ({
        ...v,
        userId: '1234',
        window: this.window,
      })),
    );
  }
}
