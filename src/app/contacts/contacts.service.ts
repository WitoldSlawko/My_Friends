import { Injectable } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { ContactsFirebaseAdapter } from './contacts.firebase.adapter';

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

  constructor(private authService: AuthService, private contactsFirebaseAdapter: ContactsFirebaseAdapter) {}

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
    this.contactsFirebaseAdapter.setToken( this.authService.getToken() );
    return this.contactsFirebaseAdapter.save(contactForm);
  }

  public retriveContacts() {
    this.contactsFirebaseAdapter.setToken( this.authService.getToken() );
    return this.contactsFirebaseAdapter.get()
      .then(this.onRetrieveContactsSuccess)
  }

  public deleteContact(contact) {
    this.contactsFirebaseAdapter.setToken( this.authService.getToken() );
    return this.contactsFirebaseAdapter.remove(contact);
  }

}
