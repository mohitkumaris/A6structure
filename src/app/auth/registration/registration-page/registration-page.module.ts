import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {RegistrationPageRoutingModule} from './registration-page-routing.module';
import {RegistrationPageComponent} from './registration-page.component';
import {SharedModule} from '../../../shared/shared-module';

@NgModule({
  imports: [
    CommonModule,
    RegistrationPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [RegistrationPageComponent]
})
export class RegistrationPageModule {
}
