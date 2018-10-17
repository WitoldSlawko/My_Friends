import { Component, OnInit } from '@angular/core';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  constructor(private contactsService: ContactsService) { }

  contacts: {}[] = [];
  retrivedContacts: {};
  searchText: string = '';
  contactProperties: string[] = this.contactsService.contactProperties;
  searchActivated: boolean = false;

  ngOnInit() {
    this.updateContactList();
  }

  changeQuerySearchText(event, property) {
    return this.contacts.forEach((contact, index) => {
      if (event.checked) {
        this.searchActivated = true;
        this.contacts[index]['nameSearch'] += this.contacts[index][property];
      } else {
        this.contacts[index]['nameSearch'] = this.contacts[index]['nameSearch'].replace(this.contacts[index][property], '');
        if (!this.contacts[index]['nameSearch'].length) {
          this.searchActivated = false;
        }
      }
    });
  }

updateContactList() {
  this.contactsService.retriveContacts()
    .then((contacts: {}[]) => {
      this.contacts = contacts;
    })
    .catch((error) => {
      console.error(error);
    });
}

onContactDeletion(idCode) {
  this.contactsService.deleteContact(idCode)
    .then(() => {
      this.updateContactList();
    })
    .catch((error) => {
      console.error(error);
    });
}

}
