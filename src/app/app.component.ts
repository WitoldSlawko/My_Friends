import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAT7ZJjwZdXYI85a6bLOUnJLTb37Y5YdZ4",
      authDomain: "my-friends-base.firebaseapp.com",
      databaseURL: "https://my-friends-base.firebaseio.com",
    })
  }

  onLogout() {
    this.router.navigate(['']);
    this.authService.logout();
  }

}
