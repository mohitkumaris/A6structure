import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {RegistrationPageRoutingModule} from './registration-page-routing.module';
import {RegistrationPageComponent} from './registration-page.component';

@NgModule({
  imports: [
    CommonModule,
    RegistrationPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [RegistrationPageComponent]
})
export class RegistrationPageModule {
}
