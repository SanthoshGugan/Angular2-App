import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoxOfficeComponent } from './box-office/box-office.component';
import { PlotComponent } from './plot/plot.component';
import { MersalComponent } from './mersal/mersal.component';
import { UserRatingComponent } from './plot/user-rating/user-rating.component';

import { StarRatingModule } from 'angular-star-rating';

@NgModule({
  declarations: [
    AppComponent,
    BoxOfficeComponent,
    PlotComponent,
    MersalComponent,
    UserRatingComponent
  ],
  imports: [
    BrowserModule,
    StarRatingModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
