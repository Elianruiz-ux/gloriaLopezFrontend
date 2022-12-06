import { Component, OnInit } from '@angular/core';
import { RegistrarService, RegUsu} from './../../SERVICES/registrar.service';
import { FormGroup, FormControl, FormBuilder, Validators, NgForm } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register-home',
  templateUrl: './register-home.component.html',
  styleUrls: ['./register-home.component.css']
})
export class RegisterHomeComponent implements OnInit {

  registrar: RegUsu[] = []; 
  
    regUsu: RegUsu = {
    NOMBRE_CLIENTE: '',
    IDENTIFICACION_CLIENTE: '',
    CORREO_CLIENTE: '',
    CONTRASENA_CLIENTE: '',
    SEXO_EMPLEADO:''
  }
  
  constructor(private RegistrarService:RegistrarService, private router:Router) { }
  ngOnInit(): void {
    this.listarProvedores();
  }

  listarProvedores(){
    this.RegistrarService.GetUsu().subscribe(
      res=>{
        console.log(res);
        this.registrar= <any>res;
      }, 
      err => console.log(err)
    );
  }
  Registrar(){

    if(!this.regUsu.NOMBRE_CLIENTE ||
      !this.regUsu.IDENTIFICACION_CLIENTE ||
      !this.regUsu.CORREO_CLIENTE ||
      !this.regUsu.CONTRASENA_CLIENTE 
      ){
      alert('Rellene todos los campos')
      

    }else{
      this.RegistrarService.regUsu(this.regUsu).subscribe();
   
    }
  }
  
  
}
