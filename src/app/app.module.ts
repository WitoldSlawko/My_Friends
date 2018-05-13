import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';

import { ContactsService } from './contacts/contacts.service';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'add-contact', component: AddContactComponent, canActivate: [AuthGuardService] },
  { path: 'contact-list', component: ContactListComponent, canActivate: [AuthGuardService] },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'sign-in', component: SignInComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddContactComponent,
    ContactListComponent,
    SignUpComponent,
    SignInComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpModule
  ],
  providers: [
    ContactsService,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
