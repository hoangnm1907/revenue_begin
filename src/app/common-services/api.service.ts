import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiUrl = environment.apiUrl;

  constructor(public http: HttpClient) {

  }

  get(endpoint: string, params?: any, reqOpts?: any) {
    if (!reqOpts) {
      reqOpts = {
        params: {}
      };
    }
    if (params) {
      reqOpts.params = params;

    }

    return this.http.get(this.apiUrl + '/' + endpoint, reqOpts).pipe(
      map(res => JSON.stringify(res))
    ).toPromise();
  }

  post(endpoint: string, body: any, reqOpts?: any) {
    return this.http.post(this.apiUrl + '/' + endpoint, body, reqOpts).pipe(
      map(res => res)
    ).toPromise();
  }

  put(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.apiUrl + '/' + endpoint, body, reqOpts);
  }

  delete(endpoint: string, reqOpts?: any) {
    return this.http.delete(this.apiUrl + '/' + endpoint, reqOpts);
  }

  patch(endpoint: string, body: any, reqOpts?: any) {
    return this.http.put(this.apiUrl + '/' + endpoint, body, reqOpts);
  }
}
