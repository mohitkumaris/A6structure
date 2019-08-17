import {Component, OnInit, ContentChildren, QueryList, Input, EventEmitter, Output} from '@angular/core';
import {DatoOptionComponent} from '../data-option/dato-option.component';

@Component({
  selector: 'app-dato-select',
  template: `
    <ng-content select="[ddwn]"></ng-content>`
})
export class DatoSelectComponent implements OnInit {
  @ContentChildren(DatoOptionComponent) options: QueryList<DatoOptionComponent>;
  @Output() search = new EventEmitter();
  value = 'Hello';
  private internalSearch;

  ngOnInit() {
    this.internalSearch = this.search.observers.length === 0;
  }

  Searched() {
    this.search.emit(this.value);
  }
}
