import { Component, OnInit } from '@angular/core';
import { PlotComponent } from '../plot/plot.component';

@Component({
  selector: 'app-mersal',
  templateUrl: './mersal.component.html',
  styleUrls: ['./mersal.component.css']
})
export class MersalComponent implements OnInit {

  movieRating: number;
  plotRating: number = 0;
  boRating: number = 0;

  constructor() { }

  ngOnInit() {
  }

  plotRatingChange(plotRating) {
    this.plotRating = plotRating;
    this.updateMovieRating();
  }

  boRatingChange(boRating) {
    this.boRating = boRating;
    this.updateMovieRating();
  }

  updateMovieRating() {
    this.movieRating = (this.boRating + this.plotRating) / 4;
  }



}
