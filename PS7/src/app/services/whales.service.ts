import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WhalesService {
  baseURL = 'http://hotline.whalemuseum.org/api.json?';

  // tslint:disable-next-line:variable-name
  getWhales(query_arguments) {
    let reqURL = this.baseURL;
    reqURL += `limit=${query_arguments.limit}`;

    return this.http.get(reqURL);
  }

  constructor(private http: HttpClient) { }
}
