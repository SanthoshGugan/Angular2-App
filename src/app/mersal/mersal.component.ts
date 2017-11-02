import { Component, OnInit } from '@angular/core';
import { PlotComponent } from '../plot/plot.component';

@Component({
  selector: 'app-mersal',
  templateUrl: './mersal.component.html',
  styleUrls: ['./mersal.component.css']
})
export class MersalComponent implements OnInit {

  movieRating: number; 

  constructor() { }

  ngOnInit() {
  }

  ratingChange(plotRating, boRating = 0) {
    this.movieRating = (plotRating + boRating) / 2;
  }

}
