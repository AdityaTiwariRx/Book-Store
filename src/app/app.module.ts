import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {APP_LAZY_ROUTING} from './routing';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookComponent } from './book/book.component';
import { EditBookComponent } from './edit-book/edit-book.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule,APP_LAZY_ROUTING,RouterModule,ReactiveFormsModule ],
  declarations: [ AppComponent, HelloComponent, BookComponent, AddBookComponent, EditBookComponent ],
  exports:[RouterModule],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
