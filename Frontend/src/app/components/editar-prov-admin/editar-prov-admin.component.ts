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
      this.ProveedorService.getUnProveedor(idProveedor).subscribe((rows: any) =>
        {
          if(rows[0]){
            this.proveedor = <any> rows[0]; 
          }
      },
      err => console.error(err) 
      );
    }
  }
 modificarProveedor(){
  if (!this.proveedor.IDENTIFICACION_PROVEEDOR ||
    !this.proveedor.NOMBRE_PROVEEDOR ||
    !this.proveedor.TELEFONO ||
    !this.proveedor.CORREO ||
    !this.proveedor.DIRECCION
  ) {
    alert('Rellene todos los campos');
  } else {
    if ((Number(this.proveedor.TELEFONO) > 1000000000) && (Number(this.proveedor.TELEFONO) <= 999999999999999)) {
      if ((Number(this.proveedor.IDENTIFICACION_PROVEEDOR) >= 1000000000) ) {
        this.ProveedorService.editProveedor(this.ActivatedRoute.snapshot.params['id'], this.proveedor)
        .subscribe(
          res => {
            console.log(res);
          },
          err => console.log
        )  
        this.router.navigate(['/proveedores'])
      }else{
        alert('Asegurece que el tipo de documento y el número de documento sean los correspondientes')
      }
      
    }else{
        alert('La cantidad de digitos del celular no son los correctos')

      }    
  }
  
}
}
