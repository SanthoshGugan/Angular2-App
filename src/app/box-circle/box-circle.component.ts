import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-box-circle',
  templateUrl: './box-circle.component.html',
  styleUrls: ['./box-circle.component.css']
})
export class BoxCircleComponent implements OnInit {

	@Input() image;
	@Input() heading;
	@Input() overlay;
  constructor() { }

  ngOnInit() {
  }

  url(img){
  	return "url('"+img+"')";
  }
}
