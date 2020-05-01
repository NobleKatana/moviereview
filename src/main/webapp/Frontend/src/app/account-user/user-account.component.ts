import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-account',
  templateUrl: './user-account.component.html',
  styleUrls: ['./user-account.component.css']
})
export class UserAccountComponent implements OnInit {
  Username:string = "none";
  Status:string = "normal";
  Birthday: Date = new Date(2013, 9, 22);
  Gender: string = "Male";
  Country: string = "USA";

  ngOnInit() {
  }

}
