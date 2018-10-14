import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardRoutingModule} from './dashboard-routing.module';
import {DashboardLayoutComponent} from './dashboard-layout/dashboard-layout.component';


@NgModule({
  imports: [
    CommonModule,
    DashboardRoutingModule
  ],
  declarations: [DashboardLayoutComponent]
})
export class DashboardModule {
}
