import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule
} from '@angular/material';
import {InputOutputRoutingModule} from './input-output-routing.module';
import {InputOutputComponent} from './input-output.component';
import {StockStatusComponent} from '../../../shared/components/stock-status-component/stock-status-component';
import {FormsModule} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    InputOutputRoutingModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    FormsModule

  ],
  declarations: [InputOutputComponent, StockStatusComponent]
})
export class InputOutputModule {
}
