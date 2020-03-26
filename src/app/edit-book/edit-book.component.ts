import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { BookData } from "../book.model";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-edit-book",
  templateUrl: "./edit-book.component.html",
  styleUrls: ["./edit-book.component.css"]
})
export class EditBookComponent implements OnInit {
  books = BookData;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute){}
  index;
   id;
  editBookFormGroup: FormGroup;
  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get("id");
    this.index=this.id-1;
    this.editBookFormGroup = this.formBuilder.group({
     bookId: [this.id, Validators.required],
     bookTitle: [this.books[this.index].bookTitle, Validators.required],
     edition: [this.books[this.index].edition, Validators.required],
     author: [this.books[this.index].author, Validators.required],
     price: [this.books[this.index].price, Validators.required],
     publisher: [this.books[this.index].publisher, Validators.required],
     bookCount: [this.books[this.index].bookCount, Validators.required]
    });
  }
  editBook() {
    let item = BookData.filter(t => t.id == this.id)[0];
    this.books[this.index].bookTitle = this.editBookFormGroup.controls.bookTitle.value;
    this.books[this.index].edition = this.editBookFormGroup.controls.edition.value;
    this.books[this.index].author = this.editBookFormGroup.controls.author.value;
    this.books[this.index].price = this.editBookFormGroup.controls.price.value;
    this.books[this.index].publisher = this.editBookFormGroup.controls.publisher.value;
    this.books[this.index].bookCount = this.editBookFormGroup.controls.bookCount.value;
    this.router.navigateByUrl("");
  }
}
