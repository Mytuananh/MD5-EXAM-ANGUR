import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/Book';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.scss']
})
export class UpdateBookComponent implements OnInit {
  book: Book;
  status = 'Please fill in the form to update book';
  constructor(private actRouter: ActivatedRoute,
              private bookService: BookService) { }

  ngOnInit(): void {
    this.actRouter.paramMap.subscribe(bookId => {
      const id  = +bookId.get('id');
      console.log('id=== ', id);
      this.bookService.detailBook(id).subscribe(book => {
        this.book = book;
        console.log('category voi id', this.book);
      });
    });
  }
  ngSubmit() {
    this.bookService.updateBook(this.book.id, this.book).subscribe(() => {
        this.status = 'Update product success!';
    });
  }
}
