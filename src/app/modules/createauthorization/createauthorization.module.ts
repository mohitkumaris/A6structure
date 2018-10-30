import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreateauthorizationRoutingModule } from './createauthorization-routing.module';
import { CreateauthLayoutComponent } from './createauth-layout/createauth-layout.component';

@NgModule({
  imports: [
    CommonModule,
    CreateauthorizationRoutingModule
  ],
  declarations: [CreateauthLayoutComponent]
})
export class CreateauthorizationModule { }
