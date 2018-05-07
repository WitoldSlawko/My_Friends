import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';

import { ContactsService } from './contacts/contacts.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-contact', component: AddContactComponent },
  { path: 'contact-list', component: ContactListComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddContactComponent,
    ContactListComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule
  ],
  providers: [
    ContactsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
