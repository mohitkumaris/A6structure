import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginForgotusernameComponent} from './login-forgotusername.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Login'
    },
    children: [
      {
        path: '',
        component: LoginForgotusernameComponent,
        data: {
          title: 'Login'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginForgotUsernameRoutingModule {
}
