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
      },
      {
        path: 'createauth',
        component: DashboardLayoutComponent,
        loadChildren: './createauth-page/createauth-page.module#CreateauthPageModule',
        data: {
          title: 'Sample'
        }
      },
      {
        path: 'inputoutput',
        component: DashboardLayoutComponent,
        loadChildren: './input-output/input-output.module#InputOutputModule',
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
