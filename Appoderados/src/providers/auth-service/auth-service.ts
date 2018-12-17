import { Injectable } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
 
export class User {
  name: string;
 
  constructor(name: string) {
    this.name = name;
  }
}
 
@Injectable()
export class AuthService {
  currentUser: User;
  public API = 'http://localhost:3448';
  public GET_USERS = this.API + '/allusers'
  public POST_API = this.API + '/adduser'
  constructor(public http: HttpClient) {
  }
 
  public getUsers(): Observable<any> {
    return this.http.get(this.GET_USERS);
  }
 
   save(credentials: any): Observable<any> {
      var formData = new FormData();
      let result: Observable<Object>;
      formData.append('username', credentials.username);
      formData.append('password', credentials.password);
      result = this.http.post(this.POST_API ,formData);
      return result.catch(error => Observable.throw(error));
  
    }
  
 
  public getUserInfo() : User {
    return this.currentUser;
  }
 
  public logout() {
    return Observable.create(observer => {
      this.currentUser = null;
      observer.next(true);
      observer.complete();
    });
  }
}