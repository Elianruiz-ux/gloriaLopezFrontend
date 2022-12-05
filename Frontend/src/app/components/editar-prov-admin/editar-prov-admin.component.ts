import { Component, Host, HostBinding, OnInit } from '@angular/core';
import { ProveedorService, Proveedor} from './../../SERVICES/proveedor.service';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-editar-prov-admin',
  templateUrl: './editar-prov-admin.component.html',
  styleUrls: ['./editar-prov-admin.component.css']
})



export class EditarProvAdminComponent implements OnInit {

proveedor: Proveedor={
    IDENTIFICACION_PROVEEDOR: '', 
    NOMBRE_PROVEEDOR: '', 
    TELEFONO: '', 
    CORREO: '', 
    DIRECCION: ''
  };

  constructor(private ProveedorService:ProveedorService, 
    private router:Router,
    private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const idProveedor  = <String> this.ActivatedRoute.snapshot.params['id']; 
    console.log('id entrada: ' + idProveedor);
    if(idProveedor){
      this.ProveedorService.getUnProveedor(idProveedor).subscribe(
        res=>{
        this.proveedor = <any> res; 
        console.log( <any> res); 
        
        this.proveedor =  res;
      },
      err => console.error(err) 
      );
    }
  }
 modificarProveedor(){
  this.ProveedorService.editProveedor(this.ActivatedRoute.snapshot.params['id'], this.proveedor)
.subscribe(
  res => {
    console.log(res);
  },
  err => console.log
)  
}
}
