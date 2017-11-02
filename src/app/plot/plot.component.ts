import { Component, OnInit, Input} from '@angular/core';
import { PlotModel } from './plot.model';

@Component({
  selector: 'app-plot',
  templateUrl: './plot.component.html',
  styleUrls: ['./plot.component.css']
})
export class PlotComponent implements OnInit {

  @Input() movieRating;

  model: PlotModel;

  constructor() { }

  ngOnInit() {
    this.model = new PlotModel();
  }

}
