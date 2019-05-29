import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user = {
    username: 'mike1997',
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
