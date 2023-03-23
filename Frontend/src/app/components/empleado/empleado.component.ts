import { EmpleadoService, Empleado } from './../../SERVICES/empleado.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css']
})
export class EmpleadoComponent implements OnInit {

  showFiller = false;


  ListarEmpleado: Empleado[] = [];

  empleado: Empleado = {
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

  constructor(private EmpleadoService: EmpleadoService,
    private router: Router) { }

  ngOnInit(): void {
    this.listarEmpleado();
  }
  listarEmpleado() {
    this.EmpleadoService.getEmpleado().subscribe(
      res => {
        // console.log(res);
        this.ListarEmpleado = <any>res;
      },
      err => console.log(err)
    );
  }

  AgregarEmpelado() {
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
            this.EmpleadoService.addEmpleado(this.empleado).subscribe();
            this.EmpleadoService.getUnEmpleado(this.empleado.IDENTIFICACION_EMPLEADO).subscribe((rows: any) => {
              if (!rows[0]) {
                alert('Se registro correctamente');
                this.router.navigate(['empleado']);
                this.listarEmpleado();
              } else {
                alert('El id del servicio ya existe, por favor ingresa uno nuevo')
              }
            })

          } else {
            if ((this.empleado.TIPO_DOCUMENTO === 'C.E.') && (Number(this.empleado.IDENTIFICACION_EMPLEADO) >= 100000000000)) {
              this.EmpleadoService.addEmpleado(this.empleado).subscribe();
              this.EmpleadoService.getUnEmpleado(this.empleado.IDENTIFICACION_EMPLEADO).subscribe((rows: any) => {
                if (!rows[0]) {
                  alert('Se registro correctamente');
                  this.router.navigate(['empleado']);
                  this.listarEmpleado();
                } else {
                  alert('El id del servicio ya existe, por favor ingresa uno nuevo')
                }
              })
            } else {
              alert('Asegurece que el tipo de documento y el número de documento sean los correspondientes')
            }
          }
        }else{
          alert('El número de hijos no puede ser negativo')
        }  
      } else {
        alert('La cantidad de digitos del celular no son los correctos')
      }
    }
  }
  ModificarEmpleado(id: any) {
    this.router.navigate(['editarEmpleado/' + id]);
  }

  deleteEmpleado(id: any) {
    this.EmpleadoService.deleteEmpleado(id).subscribe(
      res => {
        console.log(res);
        this.listarEmpleado();
      },
      err => console.log(err)
    );
  }
}
