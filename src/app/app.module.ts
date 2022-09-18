import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//rutas
import { app_routing } from "./app.routes";


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarHomeComponent } from './components/navbar-home/navbar-home.component';
import { LoginHomeComponent } from './components/login-home/login-home.component';
import { RegisterHomeComponent } from './components/register-home/register-home.component';
import { NavbarAdminComponent } from './components/navbar-admin/navbar-admin.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    HomeComponent,
    NavbarHomeComponent,
    LoginHomeComponent,
    RegisterHomeComponent,
    NavbarAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    app_routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
