import { NgModule } from '@angular/core';
import { WindowModule } from '@fcf/f-window';
import { ConfigModule } from '@fcf/config';

@NgModule({
  imports: [WindowModule, ConfigModule],
})
export class AuthModule {}
