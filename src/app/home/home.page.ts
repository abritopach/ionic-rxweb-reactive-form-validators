import { Component, OnInit } from '@angular/core';
import { FormGroup, FormArray } from '@angular/forms';

import { RxFormBuilder } from '@rxweb/reactive-form-validators';
import { User } from '../models/user.model';
import { Hobby } from '../models/hobby.model';

import { UserService } from '../services/user.service';
import { Interest } from '../models/interest.model';

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
    /*
    console.log('ngOnInit form', this.userRegistrationFormGroup);
    console.log('ngOnInit', this.userRegistrationFormGroup.value);
    console.log(this.getInterests(0));
    console.log((this.userRegistrationFormGroup.get('interests') as FormArray).hasError('choice'));
    console.log((this.userRegistrationFormGroup.get('interests') as FormArray).hasError('required'));
    */
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
    console.log(this.userRegistrationFormGroup.getRawValue());
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

  getInterests(index) {
    return ((this.userRegistrationFormGroup.get('interests') as FormArray).at(index) as FormGroup).get('name');
  }

  getAllErrors(form: FormGroup | FormArray): { [key: string]: any; } | null {
    let hasError = false;
    const result = Object.keys(form.controls).reduce((acc, key) => {
        const control = form.get(key);
        const errors = (control instanceof FormGroup || control instanceof FormArray)
            ? this.getAllErrors(control)
            : control.errors;
        if (errors) {
            acc[key] = errors;
            hasError = true;
        }
        return acc;
    }, {} as { [key: string]: any; });
    return hasError ? result : null;
}

}
