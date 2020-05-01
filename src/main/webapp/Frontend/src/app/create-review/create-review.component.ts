import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent implements OnInit {
  Review = "none";
  Score = 0;

  getReview() {
    return this.Review;
  }

  setReview(value: string) {
    this.Review = value;
  }

  getScore() {
    return this.Score;
  }

  setScore(value: number) {
    this.Score = value;
  }

  constructor() { 
    
  }

  templateForm(value: any) {
    alert(JSON.stringify(value));
  }
  ngOnInit() {
  }

}
