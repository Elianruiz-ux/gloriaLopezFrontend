import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';

@Component({
  selector: 'app-navbar-user-home',
  templateUrl: './navbar-user-home.component.html',
  styleUrls: ['./navbar-user-home.component.css']
})
export class NavbarUserHomeComponent implements OnInit {

  logoutbtn: boolean;

  constructor(private dataService: ApiService){


    if(this.dataService.isLoggedIn()){
      console.log("loggedin");
      this.logoutbtn = true
    }else{ 
      this.logoutbtn = false
    }
  }

  logout(){
    this.dataService.deleteToken();
    window.location.href = window.location.href;
  }
  ngOnInit(): void {
  }

}
