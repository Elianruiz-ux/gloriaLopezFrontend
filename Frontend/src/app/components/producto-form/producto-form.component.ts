import { ProductoService, Producto } from './../../SERVICES/producto.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';




@Component({
  selector: 'app-producto-form',
  templateUrl: './producto-form.component.html',
  styleUrls: ['./producto-form.component.css']
})
export class ProductoFormComponent implements OnInit {
  showFiller = false;

  //Variable
  ListaProducto: Producto[] = [];

  producto: Producto = {
    IDENTIFICACION_PRODUCTO: '',
    NOMBRE_PRODUCTO: '',
    FECHA_COMPRA: '', // <- reemplazar por precio
    CANTIDAD_PRODUCTO: '',
    IDENTIFICACION_PROVEEDOR: "1007055117"
  }

  constructor(private ProductoService: ProductoService, private router: Router) { }
  ngOnInit(): void {
    this.listarProductos();
  }

  listarProductos() {
    this.ProductoService.getProducto().subscribe(
      res => {
        this.ListaProducto = <any>res;
      },
      err => console.log(err)
    );

  }

  AgregarProducto() {
    if (!this.producto.IDENTIFICACION_PRODUCTO ||
      !this.producto.NOMBRE_PRODUCTO ||
      !this.producto.FECHA_COMPRA ||
      !this.producto.CANTIDAD_PRODUCTO
    ) {
      alert('Rellene todos los campos');
    } else {
      if((Number(this.producto.CANTIDAD_PRODUCTO) < 0) || (Number(this.producto.FECHA_COMPRA) < 0)){
       alert('La cantidad de compras y el precio deben ser mayor a 0')
      }else{
        this.ProductoService.addProducto(this.producto).subscribe();
        this.ProductoService.getUnProducto(this.producto.IDENTIFICACION_PRODUCTO).subscribe((rows: any) => {
       if (!rows[0]) {
           alert('Se registro correctamente');
           this.router.navigate(['inventario']);
           this.listarProductos();
         }else{
           alert('El id del servicio ya existe, por favor ingresa uno nuevo')
         }
       })
      }
       

    }
  }
  ModificarProducto(id: any) {
    this.router.navigate(['editarProducto/' + id]);
  }
  deleteProducto(id: any) {
    this.ProductoService.deleteProducto(id).subscribe(
      res => {
        console.log(res);
        this.listarProductos();
      },
      err => console.log(err)
    );
  }

}
