import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardModule} from './modules/dashboard/dashboard.module';
import {PageNotFoundComponent} from './shared/components/page-not-found/page-not-found.component';

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
      title: 'registration'
    },
    children: [
      {
        path: 'registration',
        loadChildren: './auth/registration/registration.module#RegistrationModule'
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
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
