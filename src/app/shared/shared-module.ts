import {NgModule} from '@angular/core';
import {LocalDatePipe} from './pipes/local-date.pipe';
import {LocalNumberPipe} from './pipes/local-number.pipe';
import {CapitalizePipe} from './pipes/capitalize.pipe';

@NgModule({
  imports: [],
  declarations: [LocalDatePipe, LocalNumberPipe, CapitalizePipe],
  exports: [LocalDatePipe, LocalNumberPipe, CapitalizePipe]
})
export class SharedModule {
}
