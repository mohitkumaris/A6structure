import {Injectable} from '@angular/core';
// import {RestService} from '../rest/rest.service';
import {Observable} from 'rxjs';
import {RestService} from '../rest/rest.service';
import {AppConfig} from '../../app-config';


const appConfig = new AppConfig();

@Injectable()
export class CreateAuthorizationService {
  private apiTypes: any;

  constructor(private restService: RestService) {
    this.apiTypes = restService.apiTypes;
  }

  getCustomProcs(): Observable<any> {
    return this.restService.getService(appConfig.getCustomUrl);
  }
}
