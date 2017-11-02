import { Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import { PlotModel } from './plot.model';

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css']
})
export class PlotComponent implements OnInit {

  @Input() movieRating;
  @Output() onRatingChange = new EventEmitter<any>();
  model: PlotModel;

  constructor() { }

  ngOnInit() {
    this.model = new PlotModel();
  }

}
