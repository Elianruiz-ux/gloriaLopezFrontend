import { RouterModule, Routes } from "@angular/router";

import { AdminComponent } from "./components/admin/admin.component";
import { HomeComponent } from "./components/home/home.component";
import { LoginHomeComponent } from "./components/login-home/login-home.component";
import { RegisterHomeComponent } from "./components/register-home/register-home.component";
import { UserHomeComponent } from "./components/user-home/user-home.component";
import { AdminHomeComponent } from "./components/admin-home/admin-home.component";

const app_routes: Routes = [
    {path: 'admin', component: AdminComponent},
    {path: 'home', component: HomeComponent},
    {path: 'login', component: LoginHomeComponent},
    {path: 'registro', component: RegisterHomeComponent},
    {path: 'userhome', component: UserHomeComponent},
    {path: 'adminhome', component: AdminHomeComponent},
    {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const app_routing = RouterModule.forRoot(app_routes);