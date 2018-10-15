import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginForgotusernameComponent } from './login-forgotusername.component';
import {LoginForgotUsernameRoutingModule} from './login-forgotusername-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LoginForgotUsernameRoutingModule
  ],
  declarations: [LoginForgotusernameComponent]
})
export class LoginForgotusernameModule { }
