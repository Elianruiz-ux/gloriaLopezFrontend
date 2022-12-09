import { EmpleadoService, Empleado} from './../../SERVICES/empleado.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  ListarEmpleado: Empleado[] = []; 

  empleado: Empleado={
  IDENTIFICACION_EMPLEADO: '',
  TIPO_DOCUMENTO: '',
  NOMBRE_EMPLEADO: '',
  FECHA_NACIMIENTO_EMPLEADO: '',
  DIRECCION: '',
  SEXO_EMPLEADO: '',
  TELEFONO: '',
  CORREO: '',
  EPS: '',
  FONDO_PENSION: '',
  ESTADO_CIVIL: '',
  HIJOS: '',
  ESTUDIOS: '',
  TIPO_SERVICIO: ''
  }

  constructor(private EmpleadoService:EmpleadoService, 
              private router:Router) { }

  ngOnInit(): void {
    this.listarEmpleado(); 
  }
  listarEmpleado(){
    this.EmpleadoService.getEmpleado().subscribe(
      res=>{
        console.log(res);
        this.ListarEmpleado= <any>res;
      }, 
      err => console.log(err)
    );
  }

   AgregarEmpelado(){
    if(!this.empleado.IDENTIFICACION_EMPLEADO ||
      !this.empleado.TIPO_DOCUMENTO ||
      !this.empleado.NOMBRE_EMPLEADO ||
      !this.empleado.FECHA_NACIMIENTO_EMPLEADO ||
      !this.empleado.DIRECCION ||
      !this.empleado.SEXO_EMPLEADO ||
      !this.empleado.TELEFONO ||
      !this.empleado.CORREO ||
      !this.empleado.EPS ||
      !this.empleado.FONDO_PENSION ||
      !this.empleado.ESTADO_CIVIL ||
      !this.empleado.HIJOS ||
      !this.empleado.ESTUDIOS ||
      !this.empleado.TIPO_SERVICIO
      ){
      alert('Rellene todos los campos');    
    }else{
      alert('Se registro correctamente');
      this.router.navigate(['empleado']); 
      this.listarEmpleado();
      this.EmpleadoService.addEmpleado(this.empleado).subscribe();
    }
  }
  ModificarEmpleado(id:any){
    this.router.navigate(['editarProducto/'+id]); 
  }

  deleteEmpleado(id:any){
    this.EmpleadoService.deleteEmpleado(id).subscribe(
      res =>{
        console.log(res);
        this.listarEmpleado();
      },
      err => console.log(err)
    );
  }
}
