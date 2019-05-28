import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = {
    fullName: 'Mike',
    address: {
      areaName: 'Wellsmere Rd',
      cityName: 'Boston',
      countryName: 'USA'
    },
    hobbies: [
      {
        name: 'Rugby'
      }
    ]
  };

  constructor() { }

  getUser() {
    return this.user;
  }
}
