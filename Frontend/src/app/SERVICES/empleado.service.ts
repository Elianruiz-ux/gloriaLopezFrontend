import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
  url = 'http://localhost:3000/empleado/';
  constructor(private http: HttpClient) { }

  //Get empleado
  getEmpleado() {
    return this.http.get(this.url);
  }
  //get un empleado
  getUnEmpleado(id:String) {
    return this.http.get(this.url + '/' + id);
  }

  //agregar empleado
  addEmpleado(empleado:Empleado) {
    return this.http.post(this.url, empleado);
  }

  //Eliminar empleado
  deleteEmpleado(id:String) {
    return this.http.delete(this.url + '/' + id);
  }
  //Modificar empleado
  editEmpleado(id:any, empleado:Empleado) {
    return this.http.put(this.url + '/' + id, empleado);
  }
}

export interface Empleado {
  IDENTIFICACION_EMPLEADO?: String,
  TIPO_DOCUMENTO?: String,
  NOMBRE_EMPLEADO?: String,
  FECHA_NACIMIENTO_EMPLEADO?: String,
  DIRECCION?: String,
  SEXO_EMPLEADO?: String,
  TELEFONO?: String,
  CORREO?: String,
  EPS?: String,
  FONDO_PENSION?: String,
  ESTADO_CIVIL?: String,
  HIJOS?: String,
  ESTUDIOS?: String,
  TIPO_SERVICIO?: String
}