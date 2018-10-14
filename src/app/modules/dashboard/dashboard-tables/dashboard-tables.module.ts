import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardTablesRoutingModule} from './dashboard-tables-routing.module';
import {DashboardTablesComponent} from './dashboard-tables.component';

@NgModule({
  imports: [
    CommonModule,
    DashboardTablesRoutingModule
  ],
  declarations: [DashboardTablesComponent]
})
export class DashboardTablesModule {
}
