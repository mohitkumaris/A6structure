import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {DataSource} from '@angular/cdk/collections';
import {AuthService} from '../../../shared/services/auth/auth.service';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.scss']
})
export class InputOutputComponent implements OnInit {
  users = new ProductDataSource(this.authService);
  displayedColumns = ['name', 'email', 'phone', 'company'];

  constructor(private authService: AuthService) {
  }

  ngOnInit() {
  }

  onRowClick(data) {
    console.log(data);
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
