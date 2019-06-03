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

  interestsArray: string[] = ['Movies', 'Read books', 'Gaming'];
  interests: any[] = [];

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

  ionChangeInterest(event, interest, i) {
    console.log('ionChangeInterest', event, interest, i);
    const indexOf = this.interestsArray.indexOf(interest);
    console.log('indexOf', indexOf);
    const interests = this.userRegistrationFormGroup.controls.interests as FormArray;
    if (event.detail.checked) {
      this.interests.push({name: interest});
      interests.push(this.formBuilder.formGroup(Interest));
    } else {
      this.interests.splice(indexOf, 1);
      interests.removeAt(indexOf);
    }
    console.log('interests', this.interests);

    interests.setValue(this.interests);
    console.log('this.userRegistrationFormGroup.value', this.userRegistrationFormGroup.value);

  }

}
