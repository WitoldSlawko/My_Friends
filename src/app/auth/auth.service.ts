import { Injectable } from '@angular/core';
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

  constructor(private router: Router) { }

  signUpUser(email: string, password: string){
    // fb leftover
  }

  signInUser(email: string, password: string){
    // fb leftover
  }

  getToken() {
    // fb lefover
  }

  isAuthenticated(): boolean {
    return this.token != null;
  }

  logout() {
    this.token = null;
  }
}
