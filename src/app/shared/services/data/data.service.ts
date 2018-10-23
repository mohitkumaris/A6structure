import { Injectable } from '@angular/core';

import { RestService } from '../rest/rest.service';
import { Observable} from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataService {
  private apiTypes: any;
  constructor(private restService: RestService, private authService: AuthService) {
    this.apiTypes = restService.apiTypes;
  }


  // All your data services get put post patch update delete here
  getSampleData(params) {
    const url = `/sample/data`;
    return this.restService.postService(url, params, this.apiTypes.app);
  }
  getSomeId(id) {
    const url = `/some/` + id;
    return this.restService.getService(url, this.apiTypes.app);
  }
  saveSample(sampleData: any): Observable<any> {
    const url = `/sample/save`;
    return this.restService.postService(url, sampleData, this.apiTypes.app);
  }


}


