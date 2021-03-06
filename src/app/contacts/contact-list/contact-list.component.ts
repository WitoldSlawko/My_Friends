import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private contactsService: ContactsService) {}

  contacts: {}[] = [];
  retrivedContacts: {};
  searchText: string = '';

  ngOnInit() {
    this.updateContactList();
  }

  updateContactList() {
    this.contacts = this.contactsService.contacts;
    this.contactsService.retriveContacts()
      .subscribe(
        (response) => {
          this.contacts = [];
          this.retrivedContacts = JSON.parse(response["_body"]);
          for (var prop in this.retrivedContacts) {
            this.contacts.push(Object.assign(
              {}, 
              this.retrivedContacts[prop], 
              {idCode: prop},
              {nameSerach: this.retrivedContacts[prop]['firstname'] +  this.retrivedContacts[prop]['lastname']}
            ));
          }
        },
        (error) => console.log(error)
      );
  }

  onContactDeletion(idCode) {
    console.log(idCode)
    this.contactsService.deleteContact(idCode)
      .subscribe(() => {
        this.updateContactList();
      })
  }

}
