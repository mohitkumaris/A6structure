import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginForgotpasswordComponent } from './login-forgotpassword.component';
import {LoginForgotPasswordRoutingModule} from './login-forgotpassword-routing.module';

@NgModule({
  imports: [
    CommonModule,
    LoginForgotPasswordRoutingModule
  ],
  declarations: [LoginForgotpasswordComponent]
})
export class LoginForgotpasswordModule { }
