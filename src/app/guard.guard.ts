import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class GuardGuard implements CanActivate {

  constructor(private dataService: ApiService, private router: Router){

  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): any {
    //return true;
    const routerUrl: string = state.url;
    return this.isLogin(routerUrl);
  }

  isLogin(routerurl: string){
    if (this.dataService.isLoggedIn()){
      return true;
    }
    this.dataService.redirectUrl = routerurl;
    this.router.navigate(['/login'], {queryParams:{returnUrl:routerurl}});
  }
  
}
