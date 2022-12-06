import { HttpClient } from '@angular/common/http';
import { Injectable, NgProbeToken } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class AdminService {

  URL = 'http://localhost:3000/admin/admin';

  constructor(private http : HttpClient,
    private jwtHelper: JwtHelperService) { }

  singin(USUARIO_ADMIN:any){
    return this.http.post(this.URL, USUARIO_ADMIN);
  }

  

  isLogin():boolean{
    const token:any = localStorage.getItem('token');
    if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){
      return false;
    }
    return true;
  }
}
