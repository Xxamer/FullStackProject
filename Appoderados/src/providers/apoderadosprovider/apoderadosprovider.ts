import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the ApoderadosproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApoderadosproviderProvider {
  public API = 'http://localhost:3448';
  public ALL_APODERADOS = this.API + '/apoderados/AllApoderados'
  public ALL_BANKS = this.API + '/banks/AllBanks'
  public GET_API = this.API + '/apoderados/findApoderado/'
  public POST_API = this.API + '/apoderados/AddApoderado'
  public DELETE_API = this.API + '/apoderados/deleteApoderados/'

  constructor(public http: HttpClient) {
  }
  getApoderados(): Observable<any>{
    return this.http.get(this.ALL_APODERADOS);
  }
  getBanks(): Observable<any>{
    return this.http.get(this.ALL_BANKS);
  }
  get(id: number) {
    return this.http.get(this.GET_API +  id);
  }

remove(id: string) {
  return this.http.delete(this.DELETE_API + id);
}

save(apoderado: any): Observable<any> {
  let result: Observable<Object>;
    var formDataup = new FormData();
    formDataup.append('Nombre', apoderado.nombre);
    formDataup.append('Id_Banco',apoderado.id_Banco)
    formDataup.append('Apellido1', apoderado.apellido1);
    formDataup.append('Apellido2', apoderado.apellido2);
    formDataup.append('Num_Apoderado', apoderado.num_Apoderado)
    result = this.http.post(this.POST_API, formDataup);
  
  
  return result.catch(error => Observable.throw(error));
}
  
}
