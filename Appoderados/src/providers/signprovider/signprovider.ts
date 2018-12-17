import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
/*
  Generated class for the SignproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SignproviderProvider {
  public API = 'http://localhost:3448/';
  public ALL_APODERADOS = this.API + 'apoderados/AllApoderados'
  public ALL_SIGNS = this.API + 'signs/AllSigns'
  public ALL_OFFICES = this.API + 'offices/allOffices'
  public GET_API = this.API + 'signs/getSigns/'
  public POST_API = this.API + 'signs/addSign'
  public UPDATE_API = this.API + 'signs/UpdateSign/'
  public DELETE_API = this.API + 'signs/DeleteSign/'

  constructor(public http: HttpClient) {
    console.log('Hello SignproviderProvider Provider');
  }
  getOffices(): Observable<any>{
    return this.http.get(this.ALL_OFFICES);
  }
  getApoderados(): Observable<any>{
    return this.http.get(this.ALL_APODERADOS);
  }

  getsigns(): Observable<any> {
    return this.http.get(this.ALL_SIGNS);
  }
  remove(id: string) {
    return this.http.delete(this.DELETE_API + id);
  }
  save(sign: any): Observable<any> {
    let result: Observable<Object>;
      var formData = new FormData();
      formData.append('Id_Apoderado', sign.Id_Apoderado)
      formData.append('Id_Oficinas', sign.Id_Oficinas)
      formData.append('Num_Escritura', sign.num_Escritura)
      formData.append('Fecha', sign.fecha)
      formData.append('Precio_Vivienda', sign.precio_Vivienda)
      formData.append('Num_Caras', sign.num_Caras)
      formData.append('Garaje', sign.garaje)
      formData.append('Trastero',  sign.trastero)
      formData.append('Num_Persona', sign.num_Persona)
      result = this.http.post(this.POST_API, formData);
    return result.catch(error => Observable.throw(error));
  }

}
