import {Component, OnDestroy, OnInit} from '@angular/core';
import {Observable, Subscription} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import {AuthService} from '../../../shared/services/auth/auth.service';
import {MessageService} from '../../../shared/services/common/message-service';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit, OnDestroy {
  users = new ProductDataSource(this.authService);
  displayedColumns = ['name', 'email', 'phone', 'company'];
  products = [];
  title = 'Products';
  productToUpdate: any;
  subscription: Subscription;
  message: any;

  constructor(private authService: AuthService, private messageService: MessageService) {
    this.subscription = this.messageService.getMessage().subscribe(message => {
      this.message = message;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
  ngOnInit() {
    this.products = this.getProducts();
  }

  onRowClick(data) {
    console.log(data);
  }

  getProducts() {
    return [
      {'id': '1', 'title': 'Screw Driver', 'price': 400, 'stock': 11},
      {'id': '2', 'title': 'Nut Volt', 'price': 200, 'stock': 5},
      {'id': '3', 'title': 'Resistor', 'price': 78, 'stock': 45},
      {'id': '4', 'title': 'Tractor', 'price': 20000, 'stock': 1},
      {'id': '5', 'title': 'Roller', 'price': 62, 'stock': 15},
    ];
  }

  changeStockValue(obj) {
    this.productToUpdate = this.products.find(this.findProducts, [obj.id]);
    this.productToUpdate.stock = this.productToUpdate.stock + obj.updatdstockvalue;
  }

  findProducts(p) {
    return p.id === this[0];
  }
}

export class ProductDataSource extends DataSource<any> {
  constructor(private authService: AuthService) {
    super();
  }

  connect(): Observable<Product[]> {
    return this.authService.getUser();
  }

  disconnect() {
  }

}

export class Product {
  name: string;
  email: string;
  phone: string;
  company: {
    name: string;
  };
}
