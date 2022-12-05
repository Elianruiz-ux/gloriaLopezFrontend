import { Component, OnInit } from '@angular/core';
import { LoginService } from './../../SERVICES/login.service';

import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent implements OnInit {

  user = {
    CORREO_CLIENTE: '',
    CONTRASENA_CLIENTE: ''
  }
  
  constructor(
    private loginService: LoginService,
    private router: Router) {}

  ngOnInit(): void {
  }

  logIn(){

    console.log(this.user);
    this.loginService.singin(this.user).subscribe((res:any) =>{
      console.log(res);
      localStorage.setItem('token', res.token);
      this.router.navigate(['user-home']);
    });
  }

}
