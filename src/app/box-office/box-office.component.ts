import { Component, OnInit } from '@angular/core';
import { DecimalPipe} from '@angular/common';

@Component({
  selector: 'app-box-office',
  templateUrl: './box-office.component.html',
  styleUrls: ['./box-office.component.css']
})
export class BoxOfficeComponent implements OnInit {
	average: number;
	count: number;
	total: number;


  constructor() { 
  	this.average = 7.5 ;
  	this.count = 1;
  }

  ngOnInit() {
  }

  rate(rating: number){
  	this.total = (this.average * this.count) + rating;
  	this.count++;
  	this.average = this.total / this.count;
  }
}
