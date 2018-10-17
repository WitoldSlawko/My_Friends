import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContactsLocalStorageAdapter {

  private token: string;
  private storageKey: string;

  constructor() {
    this.storageKey = 'contacts-cache';
  }

  public setToken (token: string) {
    this.token = token;
  }

  public save (contactForm) {
    return this.get().then(function (contacts: {}[]) {
      // we need contact id here in 'contactForm'
      // it is added only in db
      // or other way of finding and removing contacts from localStorage
      contacts.push(contactForm);
      localStorage.setItem(this.storageKey, JSON.stringify(contacts) );
    });
  }

  public get () {
    return new Promise((resolve, reject) => {
      resolve( JSON.parse( localStorage.getItem(this.storageKey) ) );
    });
  }

  public remove (contactId) {
    return this.get().then(function (contacts: { idCode: string }[]) {
      for (let index = 0; index < contacts.length; index++) {
        if (contacts[index].idCode === contactId) {
          contacts.splice(index, 1);
          break;
        }
      }
      localStorage.setItem(this.storageKey, JSON.stringify(contacts) );
    });
  }
}
