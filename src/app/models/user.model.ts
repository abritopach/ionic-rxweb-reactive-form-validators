import { required, prop, propObject, propArray } from '@rxweb/reactive-form-validators';

import { Address } from './address.model';
import { Hobby } from './hobby.model';

export class User {
  private isCountryCanadaFlag = false;


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
}
