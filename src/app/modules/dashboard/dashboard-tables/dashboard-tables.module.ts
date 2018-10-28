import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {DashboardTablesRoutingModule} from './dashboard-tables-routing.module';
import {DashboardTablesComponent} from './dashboard-tables.component';
import { ModalModule } from 'ngx-bootstrap/modal';


@NgModule({
  imports: [
    CommonModule,
    DashboardTablesRoutingModule,
    ModalModule.forRoot()
  ],
  declarations: [DashboardTablesComponent]
})
export class DashboardTablesModule {
}
