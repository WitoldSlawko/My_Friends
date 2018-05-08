import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ContactsService } from '../contacts.service';

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit{

  constructor(private contactsService: ContactsService) {}

  inputs: string[] = ['First Name', 'Last Name', 'Email', 'Phone Number', 'City'];
  genders: string[] = ['Male', 'Female'];
  countries: string[] = ['Germany', 'Poland', 'USA'];

  addContactForm: FormGroup;

  ngOnInit() {
    this.addContactForm = new FormGroup({
      'firstname': new FormControl(null),
      'lastname': new FormControl(null),
      'email': new FormControl(null),
      'phonenumber': new FormControl(null),
      'city': new FormControl(null),
      'country': new FormControl(null),
      'gender': new FormControl('null')
    });
  }

  onSubmit() {
    // console.log(this.addContactForm.value);
    // this.contactsService.contacts.push(this.addContactForm.value);
    this.contactsService.storeContact(this.addContactForm.value)
      .subscribe(
        (response) => console.log(response),
        (error) => console.log(error)
      );
    this.addContactForm.reset()
  }

}
