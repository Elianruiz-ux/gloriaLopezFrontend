import { Component, OnInit } from '@angular/core';
import { ProveedorService, Proveedor} from './../../SERVICES/proveedor.service';
import { Router } from '@angular/router'; 



@Component({
  selector: 'app-proveedor-admin',
  templateUrl: './proveedor-admin.component.html',
  styleUrls: ['./proveedor-admin.component.css']
})
export class ProveedorAdminComponent implements OnInit {
  
  ListarProveedor: Proveedor[] = []; 
  
  proveedor: Proveedor={
    IDENTIFICACION_PROVEEDOR: '', 
    NOMBRE_PROVEEDOR: '', 
    TELEFONO: '', 
    CORREO: '', 
    DIRECCION: ''
  }
  constructor(private ProveedorService:ProveedorService, private router:Router) { }

  ngOnInit(): void {
    this.listarProvedores();

  }
//obtener proveedores
  listarProvedores(){
    this.ProveedorService.getProveedor().subscribe(
      res=>{
        console.log(res);
        this.ListarProveedor= <any>res;
      }, 
      err => console.log(err)
    );
  }
  //Agregar proveedores
  AgregarProveedor(){

    if(!this.proveedor.IDENTIFICACION_PROVEEDOR ||
      !this.proveedor.NOMBRE_PROVEEDOR ||
      !this.proveedor.TELEFONO ||
      !this.proveedor.CORREO ||
      !this.proveedor.DIRECCION
      ){
      alert('Rellene todos los campos')
    }else{
      this.ProveedorService.addProveedor(this.proveedor).subscribe();
      this.listarProvedores();
    }
  }
  //Modifivar proveedor
  ModificarProveedor(id:any){
    this.router.navigate(['editarProveedor/'+id]); 
  }
  //Eliminar proveedores
  deleteProveedor(id:any){
    this.ProveedorService.deleteProvedor(id).subscribe(
      res =>{
        console.log(res);
        this.listarProvedores();
      },
      err => console.log(err)
    );
  }

}
