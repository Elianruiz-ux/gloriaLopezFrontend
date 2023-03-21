import { ProductoService, Producto } from './../../SERVICES/producto.service';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar-produc-admin',
  templateUrl: './editar-produc-admin.component.html',
  styleUrls: ['./editar-produc-admin.component.css']
})
export class EditarProducAdminComponent implements OnInit {
  producto: Producto = {
    IDENTIFICACION_PRODUCTO: '',
    NOMBRE_PRODUCTO: '',
    FECHA_COMPRA: '', // <- reemplazar por precio
    CANTIDAD_PRODUCTO: '',
    IDENTIFICACION_PROVEEDOR: "1007055117"
  }
  constructor(private ProductoService: ProductoService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const id_entrada = <String> this.activatedRoute.snapshot.params["id"];
    console.log('id entrada: ' + id_entrada); 
    if(id_entrada){
      this.ProductoService.getUnProducto(id_entrada).subscribe((rows:any)=>{
        if(rows[0]){
          this.producto = rows[0];
        }
      },
      err => console.log(err)
      )       
    }
  }
  modificarProducto(){
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
        this.ProductoService.editProducto(this.producto.IDENTIFICACION_PRODUCTO, this.producto).subscribe(
          res =>{
            console.log(res);
          },
          err => console.log(err)
        );
        alert('Se modificaron los datos exitosamente');
        this.router.navigate(['/inventario'])
       }      
    }
    }

}
