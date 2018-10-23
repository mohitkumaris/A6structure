import { Injectable } from '@angular/core';
// import {RestService} from '../rest/rest.service';
import {Observable} from 'rxjs';
import {RestService} from '../rest/rest.service';
import {AppConfig} from '../../app-config';



const appConfig = new AppConfig();
@Injectable()
export class AuthService {
  private apiTypes: any;
  constructor(private restService: RestService) {
     this.apiTypes = restService.apiTypes;
  }
  registerUser(data: any): Observable<any> {
    return this.restService.postService(appConfig.resgisterUrl, data, this.apiTypes.app);
  }
}
