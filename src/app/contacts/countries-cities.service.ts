import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CountriesCitiesService {

  private storageKey: string = ''

  constructor(private http: HttpClient) {
    this.storageKey = 'countries-cities-cache';
  }

  headers = new HttpHeaders({
    "Content-Type": "application/x-www-form-urlencoded; charset=iso-8859-2"
  });

  public getCountriesAndCities() {
    return new Promise((resolve, reject) => {
      this.http.get("https://raw.githubusercontent.com/David-Haim/CountriesToCitiesJSON/master/countriesToCities.json", { headers: this.headers })
        .subscribe((response) => { resolve(response) }, (error) => { reject(error); });
    });
  }

}


