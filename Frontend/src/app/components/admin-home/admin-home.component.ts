import { Producto } from './../../SERVICES/producto.service';
import { ServicioService, Servicio } from './../../SERVICES/servicio.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {


  ListarServicio: Servicio[] = [];
  servicio: Servicio = {
    CODIGO_SERVICIO: '',
    NOMBRE_SERVICIO: '',
    COSTO_SERVICIO: ''
  }
  constructor(private ServicioService: ServicioService,
    private router: Router) { }
  ngOnInit(): void {
    this.listarServicio();
  }
  listarServicio() {
    this.ServicioService.getServicio().subscribe(
      res => {
        console.log(res);
        this.ListarServicio = <any>res;
      },
      err => console.log(err)
    );
  }
  agregarServicio(){
    if(!this.servicio.CODIGO_SERVICIO ||
       !this.servicio.COSTO_SERVICIO  ||
       !this.servicio.NOMBRE_SERVICIO  ){
        alert('Debes llenar todos los campos');
       }else{
        this.ServicioService.addServicio(this.servicio).subscribe();
        alert('Se agregaron los datos exitosamente');
        this.router.navigate(['adminhome']); 
        this.listarServicio();      
       }
  }

  
}
