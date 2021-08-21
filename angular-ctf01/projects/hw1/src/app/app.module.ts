import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './nav/nav.component';
import { SearchBarComponent } from './searchbar/searchbar.component';
import { CategoryMenuComponent } from './categorymenu/categorymenu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavComponent,
    SearchBarComponent,
    CategoryMenuComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
