import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class RegistrarService {
  // url = '/reg';

  URL = 'http://localhost:3000/reg';
  constructor(private http: HttpClient) { }

  GetUsu(){
    return this.http.get(this.URL);
    
  }
  //agregar 
  regUsu(regUsu:RegUsu){
    return this.http.post(this.URL, regUsu);
  }

}

export interface RegUsu{
    NOMBRE_CLIENTE?:String;
    IDENTIFICACION_CLIENTE?:String;
    CORREO_CLIENTE?:String;
    CONTRASENA_CLIENTE?:String;
    SEXO_EMPLEADO?:String;
}