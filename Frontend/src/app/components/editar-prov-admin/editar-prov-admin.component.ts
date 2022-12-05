import { Component, OnInit } from '@angular/core';
import { ProveedorService, Proveedor} from './../../SERVICES/proveedor.service';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-editar-prov-admin',
  templateUrl: './editar-prov-admin.component.html',
  styleUrls: ['./editar-prov-admin.component.css']
})



export class EditarProvAdminComponent implements OnInit {
ListarProveedor: Proveedor[] = []; 

proveedor: Proveedor={
    IDENTIFICACION_PROVEEDOR: '', 
    NOMBRE_PROVEEDOR: '', 
    TELEFONO: '', 
    CORREO: '', 
    DIRECCION: ''
  }
  constructor(private ProveedorService:ProveedorService, 
    private router:Router,
    private ActivatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    const idProveedor  = <String> this.ActivatedRoute.snapshot.params['id']; 
    if(idProveedor){
      this.ProveedorService.getUnProveedor(idProveedor).subscribe(res=>{
        this.proveedor = res; 
        console.log(res); 
        this.proveedor = res;
      },
      err => console.error(err) 
      );
    }
  }

 modificarProveedor(){
    this.ProveedorService.editProveedor(this.proveedor.IDENTIFICACION_PROVEEDOR, this.proveedor)
  .subscribe(
    res=>{
      console.log(res);
      this.router.navigate(['/proveedores']);
    },
    err => console.error(err)
  );
  }
}
