import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.css']
})
export class CreateReviewComponent implements OnInit {
  Review = "none";
  Score = 0;
  dateCreated: Date;
  // movie: Movie;
  
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
  
  getMovie(){
    //const id = +this.route.snapshot.paramMap.get('id');
    // this.movieService.getMovie(id).subscribe(movie => this.movie = movie);
  }

  constructor() { 
    
      
    }
    
 /*    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
    private movietitle: "hiho";
  }
*/
  templateForm(value: any) {
    alert(JSON.stringify(value));
  }
  
  ngOnInit(): void {
    // this.getMovie();
  } 

  

  
}
