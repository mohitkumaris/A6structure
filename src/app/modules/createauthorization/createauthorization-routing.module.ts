import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardLayoutComponent} from '../dashboard/dashboard-layout/dashboard-layout.component';
import {CreateauthLayoutComponent} from './createauth-layout/createauth-layout.component';

const routes: Routes = [{
  path: '',
  data: {
    title: 'CreateAuthorization'
  },
  children: [
    {
      path: '',
      component: CreateauthLayoutComponent,
      loadChildren: './createauth-page/createauth-page.module#CreateauthPageModule',
      data: {
        title: 'Sample'
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateauthorizationRoutingModule { }
