import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {
  Username:string;
  Status:string;
  Birthday: Date;
  Gender: string;
  Country: string;
  Password: string;
  CPassword: string;

  getUsername() {
    return this.Username;
  }

  setUsername(value: string) {
    this.Username = value;
  }

  getBirthday() {
    return this.Birthday;
  }

  setBirthday(value: Date) {
    this.Birthday = value;
  }

getGender() {
  return this.Gender;
}

setMale() {
  this.Gender = "male";
}

setFemale() {
  this.Gender = "female";
}

setOther() {
  this.Gender = "other";
}

getCountry() {
  return this.Country;
}

setCountry(value: string) {
  this.Country = value;
}
  
getPassword() {
  return this.Password;
}

setPassword(value: string) {
  this.Password = value;
}

getCPassword() {
  return this.Password;
}

setCPassword(value: string) {
  this.Password = value;
}

  constructor() { }

  ngOnInit() {
  }

}
