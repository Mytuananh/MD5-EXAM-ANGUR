import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {Book} from '../../model/Book';
import {BookService} from '../../service/book.service';
import {MatDialog} from '@angular/material/dialog';
import {MatTableDataSource} from '@angular/material/table';
import {DialogComponent} from '../../diaglog/dialog/dialog.component';


@Component({
  selector: 'app-list-book',
  templateUrl: './list-book.component.html',
  styleUrls: ['./list-book.component.scss']
})
export class ListBookComponent implements OnInit {
  displayedColumns: string[] = ['ID', 'Name', 'Author', 'Description', 'Edit', 'Delete', 'View'];
  // dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  dataSource: any;
  books: Book[];
  @ViewChild(MatPaginator) paginator: MatPaginator;
  constructor(private bookService: BookService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getListBook();
  }
  getListBook() {
    this.bookService.getListBook().subscribe(listBook => {
      this.books = listBook;
      this.dataSource = new MatTableDataSource<Book>(this.books);
      this.dataSource.paginator = this.paginator;
    });
  }
  deleteProduct(id: number){
    this.bookService.deleteBookById(id).subscribe(() => {
      this.getListBook();
    });
  }
  openDialog(id: number) {
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result){
        this.deleteProduct(id);
      }
      console.log(`Dialog result: ${result}`);
    });
  }
}
