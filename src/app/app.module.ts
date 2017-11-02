import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BoxOfficeComponent } from './box-office/box-office.component';

@NgModule({
  declarations: [
    AppComponent,
    BoxOfficeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
