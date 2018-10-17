import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';

/**
 * We could use rules here like:
 * - cache over network e.g. update view first from storage then from network
 * - network over cache e.g. use local storage only when internet problem after reconnection updated db if needed
 */

@Injectable({
  providedIn: 'root'
})
export class ContactsService {

  token: string;

  contacts: string[] = [];

  contactProperties: string[] = ['First Name', 'Last Name', 'Email', 'Phone Number', 'City', 'Country', 'Gender'];

  constructor(private authService: AuthService) {}

  private onRetrieveContactsSuccess (response) {
    const contacts: {}[] = [];
      const retrivedContacts = JSON.parse(response["_body"]);
      for (var prop in retrivedContacts) {
        contacts.push(Object.assign(
          {}, 
          retrivedContacts[prop], 
          {idCode: prop},
          {nameSearch: ''}
        ));
      }
      return contacts;
  }

  public storeContact(contactForm) {
    // fb leftover
  }

  public retriveContacts() {
    // leftover
  }

  public deleteContact(contact) {
    // fb leftover
  }

}
