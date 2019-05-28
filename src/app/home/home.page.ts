import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../models/user.model';
import { Hobby } from '../models/hobby.model';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  currentYear = new Date().getFullYear();
  userRegistrationFormGroup: FormGroup;

  constructor(private formBuilder: RxFormBuilder, private userService: UserService) {}

  ngOnInit() {
    this.userRegistrationFormGroup = this.formBuilder.formGroup(User, this.userService.getUser());
  }

  addHobby() {
    const hobbies = this.userRegistrationFormGroup.controls.hobbies as FormArray;
    hobbies.push(this.formBuilder.formGroup(Hobby));
  }

  removeHobby(index: number) {
    const hobbies = this.userRegistrationFormGroup.controls.hobbies as FormArray;
    hobbies.removeAt(index);
  }

  userRegistrationFormGroupSubmit() {
  }

  getAreaName() {
    return (this.userRegistrationFormGroup.get('address') as FormGroup).get('areaName');
  }

  getCityName() {
    return (this.userRegistrationFormGroup.get('address') as FormGroup).get('cityName');
  }

  getCountryName() {
    return (this.userRegistrationFormGroup.get('address') as FormGroup).get('countryName');
  }

}
