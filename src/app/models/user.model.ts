import { required, prop, propObject, propArray, email } from '@rxweb/reactive-form-validators';

import { Address } from './address.model';
import { Hobby } from './hobby.model';
import { Interest } from './interest.model';

export class User {
  private isCountryCanadaFlag = false;

  @required()
  username: string;

  @email()
  @required()
  email: string;

  @required()
  fullName: string;

  @prop()
  set isCountryCanada(value: boolean) {
      if (value) {
        if (this.address) {
          this.address.countryName = 'Canada';
        }
      }
      this.isCountryCanadaFlag = value;
  }

  get isCountryCanada(): boolean {
    return this.isCountryCanadaFlag;
  }

  @propObject(Address)
  address: Address;

  @propArray(Hobby)
  hobbies: Array<Hobby>;

  @propArray(Interest)
  interests: Array<Interest>;
}
