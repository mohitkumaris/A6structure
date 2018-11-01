import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CreateauthPageComponent} from './createauth-page.component';


const routes: Routes = [{
  path: '',
  data: {
    title: 'CreateAuth'
  },
  children: [
    {
      path: '',
      component: CreateauthPageComponent,
      data: {
        title: 'CreateAuth'
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateauthPageRoutingModule { }
