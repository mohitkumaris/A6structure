import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegistrationPageComponent} from './registration-page.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Registration'
    },
    children: [
      {
        path: '',
        component: RegistrationPageComponent,
        data: {
          title: 'Registration'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationPageRoutingModule {
}
