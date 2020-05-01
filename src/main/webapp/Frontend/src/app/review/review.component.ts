import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  MovieTitle:string = "Sample";
  Username: string = "I'm the guy"
  Status:string = "normal";
  Score: number = 7;
  Review: String = "I WATCHED THIS MOVIE AND IT WAS Awesome";
  
  
  constructor() { }

  ngOnInit() {
  }

}
