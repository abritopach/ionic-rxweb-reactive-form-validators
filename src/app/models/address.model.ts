import { required } from '@rxweb/reactive-form-validators';

export class Address {

  @required()
  areaName: string;

  @required()
  cityName: string;

  @required()
  countryName: string;
}
