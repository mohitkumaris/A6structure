import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import {RegistrationPageRoutingModule} from './registration-page-routing.module';
import {RegistrationPageComponent} from './registration-page.component';
import {SharedModule} from '../../../shared/shared-module';
import {DatoOptionComponent} from '../../../shared/components/input/data-option/dato-option.component';
import {DatoOptionMultiComponent} from '../../../shared/components/input/data-multi-select/data-multi-select.component';
import {DatoSelectComponent} from '../../../shared/components/input/data-select/dato-select.component';

@NgModule({
  imports: [
    CommonModule,
    RegistrationPageRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule],
  declarations: [RegistrationPageComponent, DatoOptionComponent,
    DatoOptionMultiComponent,
    DatoSelectComponent]
})
export class RegistrationPageModule {
}
