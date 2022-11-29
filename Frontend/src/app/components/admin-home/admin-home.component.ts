import { Component, OnInit } from '@angular/core';
import { ProveedorService, Proveedor} from './../../SERVICES/proveedor.service';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {


  ListarProveedor: Proveedor[] = []; 

  constructor(private ProveedorService:ProveedorService, private router:Router) { }
  ngOnInit(): void {
    this.listarProvedores();
  }
  
  listarProvedores(){
    this.ProveedorService.getProveedor().subscribe(
      res=>{
        console.log(res);
        this.ListarProveedor= <any>res;
      }, 
      err => console.log(err)
    );
  }

  deleteProveedor(id:any){
    this.ProveedorService.deleteProvedor(id).subscribe(
      res =>{
        console.log(res);
      },
      err => console.log(err)
    );
  }

}
