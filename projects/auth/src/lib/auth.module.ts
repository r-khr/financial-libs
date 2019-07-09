import { NgModule } from '@angular/core';
import { WindowModule } from '@fcf/window';
import { ConfigModule } from '@fcf/config';

@NgModule({
  imports: [WindowModule, ConfigModule],
})
export class AuthModule {}
