import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {
  MatInputModule, MatPaginatorModule, MatProgressSpinnerModule,
  MatSortModule, MatTableModule
} from '@angular/material';
import {InputOutputRoutingModule} from './input-output-routing.module';
import {InputOutputComponent} from './input-output.component';

@NgModule({
  imports: [
    CommonModule,
    InputOutputRoutingModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule

  ],
  declarations: [InputOutputComponent]
})
export class InputOutputModule {
}
