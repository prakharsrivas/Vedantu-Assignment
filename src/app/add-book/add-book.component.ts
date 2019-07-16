import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup ,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import data from '../../books.json';

class bookModel{
  category:string;
  bookCover:string;
  bookTitle:string;
  bookDescription:string;
}
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})

export class AddBookComponent implements OnInit {
  addbookForm:FormGroup;
  category:FormControl;
  bookCover:FormControl;
  bookTitle:FormControl;
  bookDescription:FormControl;

  newAddbookModel:bookModel=new bookModel();
  constructor(private router: Router) { }

  ngOnInit() {
    this.initialize();
    this.createForm();
  }
  initialize(){
    this.category=new FormControl('',Validators.required);
    this.bookCover=new FormControl('');
    this.bookTitle=new FormControl('',Validators.required);
    this.bookDescription=new FormControl('');

  }
  createForm() {
    this.addbookForm = new FormGroup({
      category: this.category,
      bookCover: this.bookCover,
      bookTitle: this.bookTitle,
      bookDescription: this.bookDescription
    });
  }

  onSubmit() {
    if(this.addbookForm.valid){
      this.newAddbookModel=this.addbookForm.value;
      let addbook = {};
      let bookId = Math.floor(1000 + Math.random() * 9000).toString();
      let bookSource = data[this.newAddbookModel.category];
      addbook[bookId] = this.newAddbookModel;
      let curtBook = Object.assign(addbook, bookSource);
      data[this.newAddbookModel.category] = curtBook;
      this.router.navigateByUrl('/');
    }
  }

}
