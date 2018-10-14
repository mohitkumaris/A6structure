import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardModule} from './modules/dashboard/dashboard.module';

const routes: Routes = [
  // {
  //   path: 'login',
  //   data: {
  //     title: 'Login'
  //   },
  //   children: [
  //     {
  //       path: '',
  //       loadChildren: './modules/login/login.module#LoginModule'
  //     }
  //   ]
  // },

  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: '',
    data: {
      title: 'Dashboard'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: './modules/dashboard/dashboard.module#DashboardModule'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
