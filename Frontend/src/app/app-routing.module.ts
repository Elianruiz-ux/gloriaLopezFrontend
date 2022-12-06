import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//importamos vistas
import { AdminComponent } from "./components/admin/admin.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginHomeComponent } from "./components/login-home/login-home.component";
import { RegisterHomeComponent } from "./components/register-home/register-home.component";
import { UserHomeComponent } from "./components/user-home/user-home.component";
import { AdminHomeComponent } from "./components/admin-home/admin-home.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ProductoFormComponent } from "./components/producto-form/producto-form.component";
import { ProveedorAdminComponent } from "./components/proveedor-admin/proveedor-admin.component";
import { EditarAdminComponent } from "./components/editar-admin/editar-admin.component";
import { EmpleadoComponent } from "./components/empleado/empleado.component";
import { EditarProducAdminComponent } from "./components/editar-produc-admin/editar-produc-admin.component";
import { EditarProvAdminComponent } from "./components/editar-prov-admin/editar-prov-admin.component";
import { LoginGuard } from './guards/login.guard';
import { AdminGuard } from './guards/admin.guard';


const routes: Routes = [
  {path: 'admin', component: AdminComponent},
  {path: 'home', component: HomeComponent},
  {path: 'login', component: LoginHomeComponent},
  {path: 'registro', component: RegisterHomeComponent},
  {path: 'adminhome', component: AdminHomeComponent,canActivate: [AdminGuard]},
  {path: 'contact', component: ContactComponent},
  {path: 'inventario', component: ProductoFormComponent},
  {path: 'user-home', component: UserHomeComponent, canActivate: [LoginGuard]},
  {path: 'proveedores', component: ProveedorAdminComponent},
  {path: 'editarEmpleado', component: EditarAdminComponent},
  {path: 'editarProducto/:id', component: EditarProducAdminComponent},
  {path: 'editarProveedor/:id', component: EditarProvAdminComponent},
  {path: 'empleado', component: EmpleadoComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
