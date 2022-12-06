import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-user-home',
  templateUrl: './navbar-user-home.component.html',
  styleUrls: ['./navbar-user-home.component.css']
})
export class NavbarUserHomeComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit(): void {
  }

  logoutUser(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }


}
