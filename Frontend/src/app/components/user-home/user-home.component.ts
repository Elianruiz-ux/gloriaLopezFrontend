import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {
  auth:any;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.auth = localStorage.getItem('token');

    if(!this.auth){
      this.router.navigate(['/login']);
    }
  }

}
