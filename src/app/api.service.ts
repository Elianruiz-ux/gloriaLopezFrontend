import {Injectable, Output, EventEmitter} from '@angular/core';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

import { Users } from './users';

@Injectable({
    providedIn: 'root'
})

export class ApiService{

    redirectUrl!: string;
    baseUrl: string = "http://localhost/angularcrud/";

    @Output() getLoggedInName: EventEmitter<any> = new EventEmitter();

    constructor(private httpClient: HttpClient){ }

    public userregistration(nombre:any, apellido:any, documento:any, celular:any, correo:any, confirmarCorreo:any, contraseña:any, confirmarContraseña:any){
        return this.httpClient.post<any>(this.baseUrl + 'register.php',
        { 
            nombre, apellido, documento, celular, correo, confirmarCorreo, contraseña, confirmarContraseña}
        )
        .pipe(map(Users =>{
            return Users
        }));
    }

    public userlogin(correo:any, contraseña:any){
        return this.httpClient.post<any>(this.baseUrl + '/login.php',
        { 
            correo, contraseña}
        )
        .pipe(map(Users =>{
            //console.log(Users.correo);
            this.setToken(Users.correo);
            this.getLoggedInName.emit(true);
            return Users;
        }));
    }

    setToken(token: string){
        localStorage.setItem('token', token);
    }

    getToken(){
       return localStorage.getItem('token');
    }

    deleteToken(){
        localStorage.removeItem('token');
    }

    isLoggedIn(){
        const usertoken = this.getToken();
        if(usertoken != null){
            return true;
        }
        return false;
    }

}