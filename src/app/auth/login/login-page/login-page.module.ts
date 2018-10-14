import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {LoginPageRoutingModule} from './login-page-routing.module';
import {LoginPageComponent} from './login-page.component';

@NgModule({
  imports: [
    CommonModule,
    LoginPageRoutingModule
  ],
  declarations: [LoginPageComponent]
})
export class LoginPageModule {
}
