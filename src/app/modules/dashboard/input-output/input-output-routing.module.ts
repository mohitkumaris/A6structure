import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {InputOutputComponent} from './input-output.component';

const routes: Routes = [{
  path: '',
  data: {
    title: 'InputOutput'
  },
  children: [
    {
      path: '',
      component: InputOutputComponent,
      data: {
        title: 'InputOutput'
      }
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InputOutputRoutingModule {
}
