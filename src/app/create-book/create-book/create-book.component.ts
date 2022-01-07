import { Component, OnInit } from '@angular/core';
import {BookService} from '../../service/book.service';
import {Book} from '../../model/Book';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss']
})
export class CreateBookComponent implements OnInit {
  Form: any = {};
  book: Book;
  status = 'Please fill in the form to create book';
  constructor(private bookService: BookService) { }

  ngOnInit(): void {
  }

  ngSubmit() {
    this.book = new Book(
      this.Form.name,
      this.Form.author,
      this.Form.description
    );
    this.bookService.createBook(this.book).subscribe(() => {
      this.status = 'Create book success!';
    });
  }
}
