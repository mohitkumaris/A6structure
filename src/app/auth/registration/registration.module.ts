import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RegistrationRoutingModule} from './registration-routing.module';
import {RegistrationLayoutComponent} from './registration-layout/registration-layout.component';

@NgModule({
  imports: [
    CommonModule,
    RegistrationRoutingModule
  ],
  declarations: [RegistrationLayoutComponent]
})
export class RegistrationModule {
}
