import { Component, OnInit } from '@angular/core';
import {Book} from '../../model/Book';
import {ActivatedRoute} from '@angular/router';
import {BookService} from '../../service/book.service';

@Component({
  selector: 'app-detail-book',
  templateUrl: './detail-book.component.html',
  styleUrls: ['./detail-book.component.scss']
})
export class DetailBookComponent implements OnInit {
  book: Book;
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

}
