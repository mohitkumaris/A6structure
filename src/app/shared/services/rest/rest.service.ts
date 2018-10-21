import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, URLSearchParams } from '@angular/http';
import { AppConfig} from '../../app-config';
import { Observable} from 'rxjs';
import { map, catchError, finalize } from 'rxjs/operators';
const appConfig = new AppConfig();

@Injectable()
export class RestService {
  private headers: Headers;
  private options: RequestOptions;
  private optionsDelete: RequestOptions;

  public apiTypes = {
    'auth': 'auth',
    'app': 'app'
  };



  constructor(private http: Http) {
    this.pushHeaders();
  }

  public pushHeaders() {
    this.headers = new Headers({ 'Content-Type': 'application/json', 'Accept': 'q=0.8;application/json;q=0.9', 'Authorization': 'Bearer ' + localStorage.getItem('accessToken') });
    this.options = new RequestOptions({ headers: this.headers });
    this.optionsDelete = new RequestOptions({ headers: this.headers });
  }

  //Get Call
  public getService(url: string, isAuth?: string): Observable<any> {
    const _url = isAuth === this.apiTypes.auth ? appConfig.appAuthUrl + url : appConfig.appUrl + url;
    // show loader
    return this.http
      .get(_url, this.options)
      .pipe(
      map(this.fromResponse),
      catchError(this.catchServerError),
      finalize(() => {
        //hide loader
      })
    );
  }

  //Whole Update
  public putService(url: string, param: any, isAuth?: string): Observable<any> {
    const body = JSON.stringify(param);
    const _url = isAuth === this.apiTypes.auth ? appConfig.appAuthUrl + url : appConfig.appUrl + url;
    // show loader
    return this.http
      .put(_url, body, this.options)
      .pipe(
        map(this.fromResponse),
      catchError(this.catchServerError),
      finalize(() => {
        //hide loader
      })
    );
  }

  //Post Call
  public postService(url: string, param: any, isAuth?: string): Observable<any> {
    const body = JSON.stringify(param);
    const _url = isAuth === this.apiTypes.auth ? appConfig.appAuthUrl + url : appConfig.appUrl + url;
    // show loader
    return this.http
      .post(_url, body, this.options)
      .pipe(
          map(this.fromResponse),
        catchError(this.catchServerError),
        finalize(() => {
          //hide loader
        })
      );

  }

  //All delete
  public deleteService(url: string, param: any, isAuth?: string): Observable<any> {
    const body = JSON.stringify(param);
    const params: URLSearchParams = new URLSearchParams();
    for (const key in param) {
      if (param.hasOwnProperty(key)) {
        const val = param[key];
        params.set(key, val);
      }
    }
    this.optionsDelete = new RequestOptions({ headers: this.headers, search: params, body: body }); //  ======change
    const _url = isAuth === this.apiTypes.auth ? appConfig.appAuthUrl + url : appConfig.appUrl + url;
    // show loader
    return this.http
      .delete(_url, this.optionsDelete)
      .pipe(
        map(this.fromResponse),
      catchError(this.catchServerError),
      finalize(() => {
        //hide loader
      })
    );
  }

  //Individual Delete
  public deleteServiceWithId(url: string, key: string, val: string): Observable<any> {
    /// show loader
    return this.http
      .delete(appConfig.appUrl + url + '/?' + key + '=' + val, this.options)
      .pipe(
        map(this.fromResponse),
      catchError(this.catchServerError),
      finalize(() => {
        //hide loader
      })
    );
  }


  // Update all
  public updateService(url: string, param: any, isAuth?: string): Observable<any> {
    const body = JSON.stringify(param);
    const _url = isAuth === this.apiTypes.auth ? appConfig.appAuthUrl + url : appConfig.appUrl + url;
    // show loader
    return this.http
      .put(_url, body, this.options)
      .pipe(
        map(this.fromResponse),
      catchError(this.catchServerError),
      finalize(() => {
        // hide loader
      })
    );
  }

  // Update partial
  public patchService(url: string, param: any): Observable<any> {
    const body = JSON.stringify(param);
    // show loader
    return this.http
      .patch(appConfig.appUrl + url, body, this.options)
      .pipe(
        map(this.fromResponse),
      catchError(this.catchServerError),
      finalize(() => {
        // hide loader
      })
    );
  }




//Data from Response
  public fromResponse(response: Response) {
    if (response.status < 200 || response.status >= 300) {
      throw new Error('Bad response status: ' + response.status);
    }
    const body = response.json();

    if (body.http_status < 200 || response.status >= 300) {
      this.catchServerError(body.data);
    }

    return body || {};
  }

  //Catching errors
  public catchServerError(errors: any) {
    const errorMsg = errors.message || 'Something went wrong on Server!';
     if (errors) {
      for (const error in errors) {
        console.error(error);
      }
    }

    return Observable.throw(errorMsg);
  }




}

