import { ServicioService, Servicio } from './../../SERVICES/servicio.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edti-servicio-admin',
  templateUrl: './edti-servicio-admin.component.html',
  styleUrls: ['./edti-servicio-admin.component.css']
})
export class EdtiServicioAdminComponent implements OnInit {

  servicio: Servicio = {
    CODIGO_SERVICIO: '',
    NOMBRE_SERVICIO: '',
    COSTO_SERVICIO: ''
  }
  constructor(private ServicioService: ServicioService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = <String> this.activatedRoute.snapshot.params["id"];
    console.log('id entrada: ' + id_entrada); 

    if(id_entrada){
      this.ServicioService.getUnServicio(id_entrada).subscribe((rows:any)=>{
        if(rows[0]){
          this.servicio = rows[0];
        }
      },
      err => console.log(err)
      )       
    }
  }
  modificarServicio(){
     if(!this.servicio.CODIGO_SERVICIO ||
       !this.servicio.COSTO_SERVICIO  ||
       !this.servicio.NOMBRE_SERVICIO  ){
        alert('Debes llenar todos los campos');
   }else{
    if((Number(this.servicio.COSTO_SERVICIO) < 1000) ){
      alert('La cantidad del precio deben ser mayor a $1000')
     }else{
    this.ServicioService.editServicio(this.servicio.CODIGO_SERVICIO, this.servicio).subscribe(
      res=>{
        console.log(res);
      },
      err => console.log(err)
    );
    alert('Se modificaron los datos exitosamente');
    this.router.navigate(['/adminhome'])
     }
   }
    
  }
}
