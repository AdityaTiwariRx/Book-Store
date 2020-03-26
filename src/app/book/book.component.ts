import { Component, OnInit ,Input} from '@angular/core';
import { Router, ActivatedRoute, ActivationStart } from "@angular/router";
import { BookData } from "../book.model";

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnInit {
books=BookData;
  constructor(private router:Router,private activateRoute:ActivatedRoute) { }
bookid;
  ngOnInit() {}
 deleteBook(getId) {
 alert("Book Id " + getId + " will be Deleted.");
   for(let i=0; i<this.books.length; i++){
        if(this.books[i].bookId == getId){
            this.books.splice(i,1);}
   }
 }
}