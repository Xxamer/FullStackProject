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
  public POST_API = this.API + '/clients/addClient'
  public ALL_CLIENTS = this.API + '/clients/AllClients'
  public DELETE_API = this.API + '/clients/DeleteClient/'
  public GET_API = this.API + '/clients/FindClients/'
  public UPDATE_API = this.API + '/clients/UpdateClients/'
  constructor(public http: HttpClient) {
    
  }
  get(id: string) {
    console.log(id);
    return this.http.get(this.GET_API +  id);
  }
  getClients(): Observable<any> {
    return this.http.get(this.ALL_CLIENTS);
  }
  save(office: any): Observable<any> {
    let result: Observable<Object>;
      var formData = new FormData();
      formData.append('Nombre', office.nombre);
      formData.append('Apellido1', office.apellido1);
      formData.append('Apellido2', office.apellido2);
      formData.append('NIF', office.nif);
      result = this.http.post(this.POST_API, formData);
    return result.catch(error => Observable.throw(error));
  }
  edit(office: any, id_client): Observable<any> {
    let result: Observable<Object>;
      var formData = new FormData();
      formData.append('Nombre', office.nombre);
      formData.append('Apellido1', office.apellido1);
      formData.append('Apellido2', office.apellido2);
      formData.append('NIF', office.nif);
      result = this.http.put(this.UPDATE_API+id_client, formData);
    return result.catch(error => Observable.throw(error));
  }
  remove(id: string) {
    return this.http.delete(this.DELETE_API + id);
  }
}
