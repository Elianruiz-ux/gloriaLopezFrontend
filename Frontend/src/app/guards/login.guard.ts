import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../SERVICES/login.service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ){}

  canActivate():boolean {
    if(!this.loginService.isLogin()){
      console.log('token no es valido o ya expiro');
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }
  
}
