import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateauthPageRoutingModule } from './createauth-page-routing.module';
import { CreateauthPageComponent } from './createauth-page.component';

@NgModule({
  imports: [
    CommonModule,
    CreateauthPageRoutingModule
  ],
  declarations: [CreateauthPageComponent]
})
export class CreateauthPageModule { }
