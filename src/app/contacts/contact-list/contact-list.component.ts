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

  ngOnInit() {
    this.contacts = this.contactsService.contacts;
    this.contactsService.retriveContacts()
      .subscribe(
        (response) => {
          this.contacts = [];
          this.retrivedContacts = JSON.parse(response["_body"]);
          console.log(this.retrivedContacts)
          for (var prop in this.retrivedContacts) {
            this.contacts.push(this.retrivedContacts[prop])
          }
        },
        (error) => console.log(error)
      );
  }

}
