import { ProductoService, Producto} from './../../SERVICES/producto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'; 



 
@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {

  //Variable
 ListaProducto: Producto[] = []; 
   
 producto: Producto={
  IDENTIFICACION_PRODUCTO: '',
  NOMBRE_PRODUCTO: '',
  FECHA_COMPRA: '', // <- reemplazar por precio
  CANTIDAD_PRODUCTO: '',
  IDENTIFICACION_PROVEEDOR: ''
}

  constructor(private ProductoService:ProductoService, private router:Router) { }
  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos(){
    this.ProductoService.getProducto().subscribe(
      res=>{
        console.log(res);
        this.ListaProducto= <any>res;
      }, 
      err => console.log(err)
    );
    
  }

  AgregarProducto(){
    if(!this.producto.IDENTIFICACION_PRODUCTO ||
      !this.producto.NOMBRE_PRODUCTO ||
      !this.producto.FECHA_COMPRA ||
      !this.producto.CANTIDAD_PRODUCTO ||
      !this.producto.IDENTIFICACION_PROVEEDOR
      ){
      alert('Rellene todos los campos')
    }else{
      this.ProductoService.addProducto(this.producto).subscribe();
      this.listarProductos();
    }
  }
  ModificarProducto(id:any){
    this.router.navigate(['editarProducto/'+id]); 
  }
  deleteProducto(id:any){
    this.ProductoService.deleteProducto(id).subscribe(
      res =>{
        console.log(res);
        this.listarProductos();
      },
      err => console.log(err)
    );
  }

}
