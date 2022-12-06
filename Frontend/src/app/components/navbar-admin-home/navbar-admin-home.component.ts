import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-admin-home',
  templateUrl: './navbar-admin-home.component.html',
  styleUrls: ['./navbar-admin-home.component.css']
})
export class NavbarAdminHomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/admin']);
  }

}
