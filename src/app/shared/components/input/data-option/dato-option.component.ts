import {Component, OnInit} from '@angular/core';

export function getOptionTemplate(isMulti = false) {
  return `
     <div class="dato-option">
       ${isMulti ? '<input type="checkbox">' : ''}
       <ng-content></ng-content>
     </div>
  `;
}

@Component({
  selector: 'app-dato-option:not([multi])',
  template: getOptionTemplate(),
})
export class DatoOptionComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
