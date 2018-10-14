import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RegistrationPageRoutingModule} from './registration-page-routing.module';
import {RegistrationPageComponent} from './registration-page.component';

@NgModule({
  imports: [
    CommonModule,
    RegistrationPageRoutingModule
  ],
  declarations: [RegistrationPageComponent]
})
export class RegistrationPageModule {
}
