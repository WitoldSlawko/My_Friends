// modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from './shared/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AddContactComponent } from './contacts/add-contact/add-contact.component';
import { ContactListComponent } from './contacts/contact-list/contact-list.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { SignInComponent } from './auth/sign-in/sign-in.component';

// services
import { ContactsLocalStorageAdapter } from './contacts/contacts.localstorage.adapter';
import { ContactsFirebaseAdapter } from './contacts/contacts.firebase.adapter';
import { ContactsService } from './contacts/contacts.service';
import { AuthService } from './auth/auth.service';
import { AuthGuardService } from './auth/auth-guard.service';

// pipes
import { ArraySortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { LayoutModule } from '@angular/cdk/layout';

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
    SignInComponent,
    ArraySortPipe,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    LayoutModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [
    ContactsService,
    ContactsFirebaseAdapter,
    ContactsLocalStorageAdapter,
    AuthService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
