import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProveedorService {

  url = '/api';
  constructor(private http: HttpClient) { }

  //Get Equipo
  getProveedor(){
    return this.http.get(this.url);
  }

  //get un proveedor

  getUnProveedor(id:String){
    return this.http.get(this.url+'/'+id);
  }

  //agregar proveedor
  addProveedor(proveedor:Proveedor){
    return this.http.post(this.url, proveedor);
  }

  //Eliminar proveedor
  deleteProvedor(id:String){
    return this.http.delete(this.url + '/' + id);
  }

  //Modificar proveedor
  editProveedor(id:any, proveedor:Proveedor){
    return this.http.put(this.url + '/'+id, proveedor); 
  }
}


export interface Proveedor{
  IDENTIFICACION_PROVEEDOR?:String;
  NOMBRE_PROVEEDOR?:String;
  TELEFONO?:String;
  CORREO?:String;
  DIRECCION?:String;
}

