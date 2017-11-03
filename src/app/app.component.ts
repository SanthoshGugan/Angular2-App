import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  triggerRating(rating: number){
  	console.log("Rating recieved from box office component :", rating);
  };
}
