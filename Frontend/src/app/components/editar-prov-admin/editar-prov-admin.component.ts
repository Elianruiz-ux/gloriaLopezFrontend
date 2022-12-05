import { Component, Host, HostBinding, OnInit } from '@angular/core';
import { ProveedorService, Proveedor} from './../../SERVICES/proveedor.service';
import { Router, ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-editar-prov-admin',
  templateUrl: './editar-prov-admin.component.html',
  styleUrls: ['./editar-prov-admin.component.css']
})



export class EditarProvAdminComponent implements OnInit {

  @HostBinding('class') classes = 'row';
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
        console.log('Hola desde oninit'); 
        console.log(res); 
        
        this.proveedor = res;
      },
      err => console.error(err) 
      );
    }
  }
 modificarProveedor(){
  if(this.proveedor==null){
    alert('Proveedor vacio')
  }else{
    alert('Proveedor con datos: ' + this.proveedor.CORREO)
    this.router.navigate(['/proveedores']);
  }
   this.ProveedorService.editProveedor(this.ActivatedRoute.snapshot.params['id'], this.proveedor).subscribe()
//    res=>{
      
//   //     // console.log('String; ' + this.proveedor.IDENTIFICACION_PROVEEDOR);
//       console.log('objeto ' + this.proveedor );
//     console.log(res);
      
//     },
//     err => console.error(err)
//  );
 this.router.navigate(['/proveedores']);
  }
}
