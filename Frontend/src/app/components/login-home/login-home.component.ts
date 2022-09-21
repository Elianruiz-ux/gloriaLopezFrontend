import { Component, OnInit } from '@angular/core';

import { FormGroup, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-login-home',
  templateUrl: './login-home.component.html',
  styleUrls: ['./login-home.component.css']
})
export class LoginHomeComponent implements OnInit {
  angForm: FormGroup;
  
  constructor(
    private fb: FormBuilder, 
    private dataService: ApiService, 
    private router: Router
    ) { 
      this.angForm = this.fb.group({
        correo: ['', [Validators.required, Validators.minLength(1), Validators.email]],
        contraseña: ['', Validators.required],
      });
    }


  postdata(angForm:any){
    this.dataService.userlogin(angForm.value.correo,angForm.value.contraseña
    )
    .pipe(first())
    .subscribe(
      data =>  {
      console.log(data);
      if(data.message=='success'){
        //const redirect = this.dataService.redirectUrl ? this.dataService.redirectUrl : '/userhome';
        this.router.navigate(['/userhome']);
      }
    }, 
    error => {
      alert("Correo o contraseña incorrectas")
    });
  }

  ngOnInit(): void {
  }

}
