import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-register-home',
  templateUrl: './register-home.component.html',
  styleUrls: ['./register-home.component.css']
})
export class RegisterHomeComponent implements OnInit {
  angForm: FormGroup;
  
  constructor(
    private fb: FormBuilder, 
    private dataService: ApiService, 
    private router: Router
    ) { 
      this.angForm = this.fb.group({
        nombre: ['', Validators.required],
        apellido: ['', Validators.required],
        documento: ['', Validators.required],
        celular: ['', Validators.required],
        correo: ['', [Validators.required, Validators.minLength(1), Validators.email]],
        confirmarCorreo: ['', [Validators.required, Validators.minLength(1), Validators.email]],
        contraseña: ['', Validators.required],
        confirmarContraseña: ['', Validators.required]

      });
    }

  ngOnInit(): void {
  }

  postdata(angForm:any){
    this.dataService.userregistration(
      angForm.value.nombre,
      angForm.value.apellido,
      angForm.value.documento,
      angForm.value.celular,
      angForm.value.correo,
      angForm.value.confirmarCorreo,
      angForm.value.contraseña,
      angForm.value.confirmarContraseña,
    )
    .pipe(first())
    .subscribe( data =>{
      this.router.navigate(['userhome']);
    }, 
    error => {
    });
  }

}
