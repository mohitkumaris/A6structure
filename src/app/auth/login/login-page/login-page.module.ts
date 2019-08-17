import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {LoginPageRoutingModule} from './login-page-routing.module';
import {LoginPageComponent} from './login-page.component';

@NgModule({
  imports: [
    CommonModule,
    LoginPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [LoginPageComponent]
})
export class LoginPageModule {
}
