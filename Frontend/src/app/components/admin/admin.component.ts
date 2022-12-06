import { Component, OnInit } from '@angular/core';

import { AdminService } from './../../SERVICES/admin.service';

import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  
  admin = {
    USUARIO_ADMIN: '',
    CONTRASENA: ''
  }
  
  constructor(
    private adminService: AdminService,
    private router: Router) {}

  ngOnInit(): void {
  }

  logAdmin(){

    console.log(this.admin);
    this.adminService.singin(this.admin).subscribe((res:any) =>{
      console.log(res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['adminhome']);
    });
  }

}
