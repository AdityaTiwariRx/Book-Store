import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BookData } from "../book.model";
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
books=BookData;
getId=this.books.length+1;
constructor(private formBuilder:FormBuilder,private router:Router){}
  addBookFormGroup:FormGroup;
  
ngOnInit(){
this.addBookFormGroup=this.formBuilder.group({
  bookId:[this.getId,Validators.required],
  bookTitle:["",Validators.required],
  edition:["",Validators.required],
  author:["",Validators.required],
  price:["",Validators.required],
  publisher:["",Validators.required],
  bookCount:["",Validators.required]
});
  }
addBook(){
 this.books.push(this.addBookFormGroup.value);
  alert("Book Added Successfully");
  this.router.navigateByUrl("");
}
}