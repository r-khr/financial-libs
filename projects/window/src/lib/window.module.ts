import { NgModule } from '@angular/core';
import {
  WINDOW_SERVICE,
  checkBrowserEnvironmentFactory,
} from './window.service';
import { PlatformService } from './platform.service';

@NgModule({
  providers: [
    {
      provide: WINDOW_SERVICE,
      useFactory: checkBrowserEnvironmentFactory,
      deps: [PlatformService],
    },
  ],
})
export class WindowModule {}
