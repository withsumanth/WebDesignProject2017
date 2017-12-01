import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Headers} from '@angular/http';
import { RequestOptions } from '@angular/http';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class UserService {
  private checkLogout ;
  headers: Headers;
  options: RequestOptions;
  constructor (private _http: Http){
    this.headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
    this.options = new RequestOptions({ headers: this.headers });
  }
  onSignup(details) {
    return this._http.post('http://localhost/ProjectPhp/insert.php/', details, this.options)
      .map(() => '');
  }
  getUsers() {
    return this._http.post('http://localhost/ProjectPhp/select.php/','' , this.options)
      .map( res => res.json());
  }

  isLoggedIn() {
    return this.checkLogout;
  }

  loggedIn(value) {
    this.checkLogout = value;
  }
}
