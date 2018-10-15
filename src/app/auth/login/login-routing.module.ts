import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {LoginLayoutComponent} from './login-layout/login-layout.component';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Login'
    },
    children: [
      {
        path: '',
        component: LoginLayoutComponent,
        loadChildren: './login-page/login-page.module#LoginPageModule',
        data: {
          title: 'Login'
        }
      },
      {
        path: 'forgotpassword',
        component: LoginLayoutComponent,
        loadChildren: './login-forgotpassword/login-forgotpassword.module#LoginForgotpasswordModule',
        data: {
          title: 'Login'
        }
      },
      {
        path: 'forgotusername',
        component: LoginLayoutComponent,
        loadChildren: './login-forgotusername/login-forgotusername.module#LoginForgotusernameModule',
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
export class LoginRoutingModule {
}
