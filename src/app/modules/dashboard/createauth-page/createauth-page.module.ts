import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule , ReactiveFormsModule } from '@angular/forms';
import { CreateauthPageRoutingModule } from './createauth-page-routing.module';
import { CreateauthPageComponent } from './createauth-page.component';

@NgModule({
  imports: [
    CommonModule,
    CreateauthPageRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [CreateauthPageComponent]
})
export class CreateauthPageModule { }
