import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {RegistrationLayoutComponent} from './registration-layout/registration-layout.component';
import {RegistrationPageModule} from './registration-page/registration-page.module';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Registration'
    },
    children: [
      {
        path: 'registration',
        component: RegistrationLayoutComponent,
        loadChildren: './registration-page/registration-page.module#RegistrationPageModule',
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
export class RegistrationRoutingModule {
}
