import { ServicioService, Servicio } from './../../SERVICES/servicio.service';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  showFiller = false;

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
        if((Number(this.servicio.COSTO_SERVICIO) < 1000) ){
          alert('La cantidad del precio deben ser mayor a $1000')
         }else{
          this.ServicioService.addServicio(this.servicio).subscribe();
        this.ServicioService.getUnServicio(this.servicio.CODIGO_SERVICIO).subscribe((rows:any)=>{         
          if(!rows[0]){
            alert('Se agregaron los datos exitosamente');
            this.router.navigate(['adminhome']); 
            this.listarServicio(); 
          }else{
            alert('El id del servicio ya existe, por favor ingresa uno nuevo');
          }
        }); 
         }           
       }
  }
  modificarServicio(id:any){
    this.router.navigate(['editarServicio/'+id]); 
  }
  deleteServicio(id:any){
    this.ServicioService.deleteServicio(id).subscribe(
      res =>{   
        alert('Se elimino el servicio')
        this.listarServicio();
      },
      err => console.log(err, alert('no fue posible elimnar el servicio')) 
    );
}
}
