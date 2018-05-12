import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(){
    firebase.initializeApp({
      apiKey: "AIzaSyAT7ZJjwZdXYI85a6bLOUnJLTb37Y5YdZ4",
      authDomain: "my-friends-base.firebaseapp.com",
    })
  }

}
