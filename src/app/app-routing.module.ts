import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardModule} from './modules/dashboard/dashboard.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: '',
     data: {
      title: 'login'
    },
   children: [
      {
     path: 'login',
        loadChildren: './auth/login/login.module#LoginModule'
     }
     ]
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
