import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { SearchbarComponent } from './searchbar/searchbar.component';

@NgModule({
  declarations: [AppComponent, HomeComponent, NavComponent, SearchbarComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
