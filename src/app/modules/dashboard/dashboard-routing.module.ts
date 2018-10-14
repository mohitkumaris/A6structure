import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {DashboardLayoutComponent} from './dashboard-layout/dashboard-layout.component';
import {DashboardTablesModule} from './dashboard-tables/dashboard-tables.module';


const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Dashboard'
    },
    children: [
      {
        path: '',
        component: DashboardLayoutComponent,
        loadChildren: './dashboard-tables/dashboard-tables.module#DashboardTablesModule',
        data: {
          title: 'Sample'
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {
}
