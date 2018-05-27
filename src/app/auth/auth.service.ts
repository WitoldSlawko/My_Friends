import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signingUpResult: { message: string } = {
    message: ''
  }

  signingInResult: { message: string } = {
    message: ''
  }

  token: string;

  constructor(private router: Router ) { }

  signUpUser(email: string, password: string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(
        (response) => {
          this.signingUpResult.message = 'New user signed up successfuly !';
          console.log(response);
        }
      )
      .catch(
        (error) => {
          this.signingUpResult.message = error.message;
          console.log(error);
          console.log(error.message);
        }
      )
  }

  signInUser(email: string, password: string){
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(
        (response) => {
          this.router.navigate(['contact-list']);
          firebase.auth().currentUser.getIdToken()
            .then(
              (token) => {
                this.token = token;
              }
            )
          console.log(response);
        }
      )
      .catch(
        (error) => {
          this.signingInResult.message = error.message;
          console.log(error);
        }
      )
  }

  getToken() {
    firebase.auth().currentUser.getIdToken()
      .then(
        (token) => {
          this.token = token;
        }
      )
    return this.token;
  }

  isAuthenticated(): boolean {
    return this.token != null;
  }

  logout() {
    firebase.auth().signOut();
    this.token = null;
  }
}
