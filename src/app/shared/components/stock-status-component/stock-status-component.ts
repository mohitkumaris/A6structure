import {Component, Input, EventEmitter, Output, OnChanges} from '@angular/core';
import {MessageService} from '../../services/common/message-service';


@Component({
  selector: 'app-stock-status',
  template: `<input type='number' [(ngModel)]='updatedstockvalue'/>
  <button class='btn btn-primary'
          [style.background]='color'
          (click)="stockValueChanged()">Change Stock Value
  </button> `
})
export class StockStatusComponent implements OnChanges {
  constructor(private messageService: MessageService) {
  }
  @Input() stock: number;
  @Input() productId: number;
  @Output() stockValueChange = new EventEmitter();
  color = '';
  updatedstockvalue: number;

  stockValueChanged() {
    this.sendMessage(`Product Id: ${this.productId}`);
    this.stockValueChange.emit({id: this.productId, updatdstockvalue: this.updatedstockvalue});
    this.updatedstockvalue = null;
  }

  sendMessage(message): void {
    // send message to subscribers via observable subject
    this.messageService.sendMessages(message);
  }

  clearMessage(): void {
    this.messageService.clearMessage();
  }

  ngOnChanges() {
    if (this.stock > 10) {
      this.color = 'green';
    } else {
      this.color = 'red';
    }
  }
}
