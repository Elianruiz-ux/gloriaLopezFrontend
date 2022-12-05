import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//trbajar el formulario de forma reactiva
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

//providers
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

//rutas
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarHomeComponent } from './components/navbar-home/navbar-home.component';
import { LoginHomeComponent } from './components/login-home/login-home.component';
import { RegisterHomeComponent } from './components/register-home/register-home.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';
import { CardHomeComponent } from './components/card-home/card-home.component';
import { NavbarUserHomeComponent } from './components/navbar-user-home/navbar-user-home.component';
import { UserHomeComponent } from './components/user-home/user-home.component';
import { NavbarAdminHomeComponent } from './components/navbar-admin-home/navbar-admin-home.component';
import { AdminHomeComponent } from './components/admin-home/admin-home.component';
import { FooterComponent } from './components/footer/footer.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductoFormComponent } from './components/producto-form/producto-form.component';
import { ProveedorAdminComponent } from './components/proveedor-admin/proveedor-admin.component';
import { EditarAdminComponent } from './components/editar-admin/editar-admin.component';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { EditarProvAdminComponent } from './components/editar-prov-admin/editar-prov-admin.component';
import { EditarProducAdminComponent } from './components/editar-produc-admin/editar-produc-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    NavbarHomeComponent,
    LoginHomeComponent,
    RegisterHomeComponent,
    NavbarAdminComponent,
    CardHomeComponent,
    NavbarUserHomeComponent,
    UserHomeComponent,
    NavbarAdminHomeComponent,
    AdminHomeComponent,
    FooterComponent,
    ContactComponent,
    ProductoFormComponent,
    ProveedorAdminComponent,
    EditarAdminComponent,
    EmpleadoComponent,
    EditarProvAdminComponent,
    EditarProducAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide: JWT_OPTIONS, useValue:JWT_OPTIONS },
    JwtHelperService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
