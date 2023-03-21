import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'; 

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
url = 'http://localhost:3000/productos/';
  
  constructor(private http: HttpClient) { }
  getProducto(){
    return this.http.get(this.url);
  }

  //get un proveedor

  getUnProducto(id:String){
    return this.http.get(this.url+'/'+id);
  }

  //agregar proveedor
  addProducto(proveedor:Producto){
    return this.http.post(this.url, proveedor);
  }

  //Eliminar proveedor
  deleteProducto(id:String){
    return this.http.delete(this.url + '/' + id);
  }

  //Modificar proveedor
  editProducto(id:any, proveedor:Producto){
    return this.http.put(this.url + '/'+id, proveedor); 
  }
}

export interface Producto{
  IDENTIFICACION_PRODUCTO?: String,
  NOMBRE_PRODUCTO?: String,
  FECHA_COMPRA?: String,
  CANTIDAD_PRODUCTO?: String ,
  IDENTIFICACION_PROVEEDOR?: String
}