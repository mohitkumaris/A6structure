import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardTablesComponent} from './dashboard-tables.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dashboard'
    },
    children: [
      {
        path: '',
        component: DashboardTablesComponent,
        data: {
          title: 'Dashboard'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardTablesRoutingModule {
}
