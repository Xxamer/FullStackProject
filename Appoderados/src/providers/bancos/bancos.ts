import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

/*
  Generated class for the BancosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class BancosProvider {
  public API = 'http://localhost:3448';
  public ALL_BANKS = this.API + '/banks/AllBanks'
  public POST_API = this.API + '/banks/addBank'
  public GET_API = this.API + '/banks/FindBanks/'
  public UPDATE_API = this.API + '/banks/UpdateBanks/'
  public DELETE_API = this.API + '/banks/deleteBank/'
  constructor(public http: HttpClient) {
  }

  getBanks(): Observable<any> {
    return this.http.get(this.ALL_BANKS);
  }

  get(id: string) {
    console.log(id);
    return this.http.get(this.GET_API +  id);
  }

  save(bank: any): Observable<any> {
    let result: Observable<Object>;
      var formData = new FormData();
      formData.append('Nombre', bank.nombre);
      formData.append('Sede', bank.sede);
      formData.append('Pais', bank.pais);
      result = this.http.post(this.POST_API, formData);
    return result.catch(error => Observable.throw(error));
  }
  remove(id: string) {
    return this.http.delete(this.DELETE_API + id);
  }

  edit(bank: any, id_bank): Observable<any>{
    let result: Observable<Object>
    var formData = new FormData();
    formData.append('Nombre', bank.nombre);
    formData.append('Sede', bank.sede);
    formData.append('Pais', bank.pais);
    result = this.http.put(this.UPDATE_API + id_bank, formData);
    return result.catch(error => Observable.throw(error));

  }
}

