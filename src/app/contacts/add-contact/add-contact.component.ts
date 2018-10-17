import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ContactsService } from '../contacts.service';
import { CountriesCitiesService } from '../countries-cities.service'

@Component({
  selector: 'app-add-contact',
  templateUrl: './add-contact.component.html',
  styleUrls: ['./add-contact.component.css']
})
export class AddContactComponent implements OnInit {

  constructor(private contactsService: ContactsService, private countriesCitiesService: CountriesCitiesService) { }

  genders: string[] = ['Male', 'Female'];
  contactProperties: string[] = this.contactsService.contactProperties;
  countriesAndCities: {} = {};
  countries: string[] = [];
  selectedCountry: string = '';
  cities: string[] = [];

  addContactForm: FormGroup;

  ngOnInit() {
    this.countriesCitiesService.getCountriesAndCities()
      .then((response) => {
        this.countriesAndCities = response;
        this.countries = this.sortStrings(Object.keys(this.countriesAndCities));
      })

    this.addContactForm = new FormGroup(
      this.generatreFormControlsFromContactProperties(this.contactProperties)
    );
  }

  generatreFormControlsFromContactProperties(arrayOfProp: string[]) {
    let formControlsObject = {};
    arrayOfProp.forEach((prop) => {
      let parsedProp = prop.toLowerCase().split(' ').join('');
      if (prop !== 'email') {
        formControlsObject[parsedProp] = new FormControl(null, Validators.required);
      } else {
        formControlsObject[parsedProp] = new FormControl(null, [Validators.required, Validators.email]);
      }
    })
    return formControlsObject;
  }

  sortStrings(array) {
    return array.sort(function (a, b) {
      return ('' + a).localeCompare(b);
    })
  }

  selectCountry(country) {
    this.selectedCountry = country.value;
    this.cities = this.sortStrings(this.countriesAndCities[this.selectedCountry]);
  }

  onSubmit() {
    // console.log(this.addContactForm.value);
    this.contactsService.contacts.push(this.addContactForm.value);
    /*
    this.contactsService.storeContact(this.addContactForm.value)
      .then((response) => console.log(response))
      .catch((error) => console.log(error));
    this.addContactForm.reset()
    */
  }

}
