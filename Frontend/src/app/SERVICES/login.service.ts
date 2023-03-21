import { HttpClient } from '@angular/common/http';
import { Injectable, NgProbeToken } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  URL = 'http://localhost:3000/user/singin';

  constructor(private http : HttpClient,
    private jwtHelper: JwtHelperService) { }

  singin(CORREO_CLIENTE:any){
    return this.http.post(this.URL, CORREO_CLIENTE);
  }

  isLogin():boolean{
    const token:any = localStorage.getItem('token');
    if(this.jwtHelper.isTokenExpired(token) || !localStorage.getItem('token')){
      return false;
    }
    return true;
  }

}
