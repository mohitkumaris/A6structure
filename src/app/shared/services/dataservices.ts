import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

export class DataServices {
  constructor(private _http: HttpClient) {}
  private  HandleError(err: HttpErrorResponse) {
    console.log(err);
    return  Observable.throw(err.message);
  }
  Get(url: string): Observable<any> {
    return this._http.get(url)
      .do(data => {

      }).catch(this.HandleError);
  }
  Post(url: string, body: Object): Observable<any> {
    return this._http.post(url, body)
      .do( data => {

      }).catch(this.HandleError);
  }

}
