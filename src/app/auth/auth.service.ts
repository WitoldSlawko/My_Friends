import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  signingUpResult: { message: string } = {
    message: ''
  }

  token: string;

  constructor() { }

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
          firebase.auth().currentUser.getIdToken()
            .then(
              (token) => {
                console.log(token)
                this.token = token;
              }
            )
          console.log(response);
        }
      )
      .catch(
        (error) => {
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
}
