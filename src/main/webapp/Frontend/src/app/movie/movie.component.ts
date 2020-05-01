import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  MovieBanner: ImageBitmap;
  Title:string = "Sample";
  Director:string = "Guy Bro";
  Genre: string = "Action";
  Year: string = "1999";
  Ascore: number = 50;
  Cscore: number = 70;
  constructor() { }

  ngOnInit() {
  }

}
