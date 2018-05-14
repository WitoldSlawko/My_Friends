import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  token: string;

  contacts: string[] = [];

  constructor(private http: Http, private authService: AuthService) {}

  storeContact(contactForm) {
    this.token = this.authService.getToken();
    return this.http.post('https://my-friends-base.firebaseio.com/.json?auth=' + this.token, contactForm);
  }

  retriveContacts() {
    this.token = this.authService.getToken();
    return this.http.get('https://my-friends-base.firebaseio.com/.json?auth=' + this.token);
  }

  deleteContact(contact) {
    this.token = this.authService.getToken();
    return this.http.delete(`https://my-friends-base.firebaseio.com/${contact}.json?auth=` + this.token);
  }

}
