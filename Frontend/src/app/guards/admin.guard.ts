import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminService } from '../SERVICES/admin.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(
    private adminService: AdminService,
    private router: Router
  ){}

  canActivate():boolean {
    if(!this.adminService.isLogin()){
      console.log('token no es valido o ya expiro');
      this.router.navigate(['admin']);
      return false;
    }
    return true;
  }
}
