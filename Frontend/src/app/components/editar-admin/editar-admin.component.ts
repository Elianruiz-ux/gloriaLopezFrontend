import { EmpleadoService, Empleado} from './../../SERVICES/empleado.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router'; 


@Component({
  selector: 'app-editar-admin',
  templateUrl: './editar-admin.component.html',
  styleUrls: ['./editar-admin.component.css']
})
export class EditarAdminComponent implements OnInit {
  
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
    private router:Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = <String> this.activatedRoute.snapshot.params["id"];
    console.log('id entrada: ' + id_entrada); 

    if(id_entrada){
      this.EmpleadoService.getUnEmpleado(id_entrada).subscribe((rows:any)=>{
        if(rows[0]){
          this.empleado = rows[0];
        }
      },
      err => console.log(err)
      )
    }
  }
  modificarEmpleado(){
    if (!this.empleado.IDENTIFICACION_EMPLEADO ||
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
    ) {

      alert('Rellene todos los campos');
    } else {
      if ((Number(this.empleado.TELEFONO) > 1000000000) && (Number(this.empleado.TELEFONO) <= 999999999999999)) {
        if ((Number(this.empleado.HIJOS) >= 0) && (Number(this.empleado.HIJOS) <= 50)) {
          if ((this.empleado.TIPO_DOCUMENTO === 'C.C.') && (Number(this.empleado.IDENTIFICACION_EMPLEADO) >= 1000000000)) {
            this.EmpleadoService.editEmpleado(this.empleado.IDENTIFICACION_EMPLEADO, this.empleado).subscribe(
              res=>{
                console.log(res);
              },
              err => console.log(err)
              
            );
            alert('Se modificaron los datos exitosamente' );
            this.router.navigate(['/empleado'])
          }else{
            if ((this.empleado.TIPO_DOCUMENTO === 'C.E.') && (Number(this.empleado.IDENTIFICACION_EMPLEADO) >= 100000000000)) {
              this.EmpleadoService.editEmpleado(this.empleado.IDENTIFICACION_EMPLEADO, this.empleado).subscribe(
                res=>{
                  console.log(res);
                },
                err => console.log(err)
               
              );
              alert('Se modificaron los datos exitosamente');
              this.router.navigate(['/empleado'])
            }else{
              alert('Asegurece que el tipo de documento y el número de documento sean los correspondientes')
            }
          }
        }else{
          alert('El número de hijos no puede ser negativo')
        }  
      }else{
        alert('La cantidad de digitos del celular no son los correctos')
      }
  }
  }
}
