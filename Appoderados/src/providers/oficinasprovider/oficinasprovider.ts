import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

/*
  Generated class for the OficinasproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class OficinasproviderProvider {
  public API = 'http://localhost:3448';
  public ALL_OFFICES = this.API + '/Offices/allOffices'
  public ALL_BANKS = this.API + '/Banks/AllBanks'
  public GET_API = this.API + '/Offices/findOffice/'
  public POST_API = this.API + '/Offices/addOffice'
  public DELETE_API = this.API + '/Offices/DeleteOffice/'

  constructor(public http: HttpClient) {
  }
  getOffices(): Observable<any>{
    return this.http.get(this.ALL_OFFICES);
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

save(office: any): Observable<any> {
  let result: Observable<Object>;
  if (office['href']) {
    var formDataup = new FormData();
    formData.append('Nombre', office.nombre);
    formData.append('Id_Banco',office.Id_Banco.Id_Banco)
    formData.append('Direccion', office.direccion);
    formData.append('Horario', office.horario);
    result = this.http.put(this.POST_API, formDataup);
   
  } else {
    var formData = new FormData();
    formData.append('Nombre', office.nombre);
    formData.append('Id_Banco',office.Id_Banco)
    formData.append('Direccion', office.direccion);
    formData.append('Horario', office.horario);
    result = this.http.post(this.POST_API, formData);
    
  }
  
  return result.catch(error => Observable.throw(error));
}
  

}
