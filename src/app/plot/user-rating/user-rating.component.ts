import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PlotModel } from '../plot.model';

@Component({
  selector: 'app-user-rating',
  templateUrl: './user-rating.component.html',
  styleUrls: ['./user-rating.component.css']
})
export class UserRatingComponent implements OnInit {

  @Input() plotModel;
  @Output() onRatingChange = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

  onRating(rate) {
    this.plotModel.ratings.map((inRate) => {
      inRate['clicked'] = false;
    })
    this.onRatingChange.emit(rate.rating);
    rate.clicked = true;
  }
}
