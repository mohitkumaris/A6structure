import {Component, OnInit} from '@angular/core';
import {DatoOptionComponent, getOptionTemplate} from '../data-option/dato-option.component';

@Component({
  selector: 'app-dato-option[multi]',
  template: getOptionTemplate(true),
  providers: [{provide: DatoOptionComponent, useExisting: DatoOptionMultiComponent}]

})
export class DatoOptionMultiComponent extends DatoOptionComponent {
}
