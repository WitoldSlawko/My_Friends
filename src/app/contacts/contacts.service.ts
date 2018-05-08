import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  constructor(private http: Http) {}

  contacts: string[] = [];

  storeContact(contactForm) {
    return this.http.post('https://my-friends-base.firebaseio.com/data.json', contactForm);
  }

  retriveContacts() {
    return this.http.get('https://my-friends-base.firebaseio.com/data.json');
  }

}
