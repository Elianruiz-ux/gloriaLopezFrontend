import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ServicioService {
  url = 'http://localhost:3000/servicio/';
  constructor(private http: HttpClient) { }

  //Get servicio
  getServicio(){
    return this.http.get(this.url);
  }

  //get un servicio
  getUnServicio(id:String){
    return this.http.get(this.url+'/'+id);
  }

   //agregar servicio
   addServicio(servicio:Servicio){
    return this.http.post(this.url, servicio);
  }

  //Eliminar servicio
  deleteServicio(id:String){
    return this.http.delete(this.url + '/' + id);
  }

  //Modificar servicio
  editServicio(id:any, servicio:Servicio){
    return this.http.put(this.url + '/'+id, servicio); 
  }
}


export interface Servicio{
  CODIGO_SERVICIO?: String,
  NOMBRE_SERVICIO?: String,  
  COSTO_SERVICIO?: String
}