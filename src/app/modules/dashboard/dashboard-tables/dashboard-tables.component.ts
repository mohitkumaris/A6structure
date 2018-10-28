import {Component, OnInit} from '@angular/core';
import { DataService } from '../../../shared/services/data/data.service';
import { AlertClass } from '../../../shared/services/common/alert';
import { AuthService } from '../../../shared/services/auth/auth.service';



@Component({
  selector: 'app-dashboard-tables',
  templateUrl: './dashboard-tables.component.html',
  styleUrls: ['./dashboard-tables.component.scss'],
  providers:[DataService, AlertClass,AuthService]
})
export class DashboardTablesComponent implements OnInit {



  constructor(private authService: AuthService, private alert: AlertClass) {
  }

  ngOnInit() {
    this.getCountries();
  }

  public getCountries() {
    this.authService.getUser()
      .subscribe(result => {
        // Works for 204 401 500 only
      }, error => {
        // Show Error
      });
  }

}
