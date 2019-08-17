import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginForgotpasswordComponent} from './login-forgotpassword.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Login'
    },
    children: [
      {
        path: '',
        component: LoginForgotpasswordComponent,
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
export class LoginForgotPasswordRoutingModule {
}
