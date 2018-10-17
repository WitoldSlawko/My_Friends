import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class ContactsFirebaseAdapter {

  private token: string;

  constructor(private http: Http) {}

  public setToken (token: string) {
    this.token = token;
  }

  public save (contactForm) {
    console.log(contactForm);
    return new Promise((resolve, reject) => {
      this.http.post('https://my-friends-base.firebaseio.com/.json?auth=' + this.token, contactForm)
      .subscribe((response) => { resolve() }, (error) => { reject(error); });
    });
  }

  public get () {
    return new Promise((resolve, reject) => {
      this.http.get('https://my-friends-base.firebaseio.com/.json?auth=' + this.token)
      .subscribe( (response) => { resolve(response) }, (error) => { reject(error) } );
    });
  }

  public remove (contact) {
    console.log(contact);
    return new Promise((resolve, reject) => {
      this.http.delete(`https://my-friends-base.firebaseio.com/${contact}.json?auth=` + this.token)
      .subscribe((response) => { resolve(); }, (error) => { reject(error); });
    });
  }
}
