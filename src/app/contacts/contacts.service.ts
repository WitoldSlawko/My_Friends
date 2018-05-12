import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: Http, private authService: AuthService) {}

  contacts: string[] = [];

  storeContact(contactForm) {
    const token = this.authService.getToken();
    console.log(token)
    return this.http.post('https://my-friends-base.firebaseio.com/.json?!auth=' + token, contactForm);
  }

  retriveContacts() {
    const token = this.authService.getToken();
    return this.http.get('https://my-friends-base.firebaseio.com/.json?auth=' + token);
  }

}
