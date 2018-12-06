import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
/*
  Generated class for the ClientesproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ClientesproviderProvider {
  public API = 'http://localhost:3448';
  public ALL_CLIENTS = this.API + '/Clients/AllClients'
  constructor(public http: HttpClient) {
    
  }

  getClients(): Observable<any> {
    return this.http.get(this.ALL_CLIENTS);
  }

}
