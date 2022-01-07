import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment.prod';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Book} from '../model/Book';

@Injectable({
  providedIn: 'root'
})
export class BookService {
  private API_LOCAL = environment.API_LOCAL;

  constructor(private http: HttpClient) {
  }

  getListBook(): Observable<Book[]> {
    return this.http.get<Book[]>(this.API_LOCAL);
  }

  createBook(book: Book): Observable<Book> {
    return this.http.post<Book>(this.API_LOCAL, book);
  }

  deleteBookById(id: number): Observable<Book> {
    return this.http.delete<Book>(this.API_LOCAL + '/' + id);
  }

  detailBook(id: number): Observable<Book> {
    return this.http.get<Book>(this.API_LOCAL + '/' + id);
  }

  updateBook(id: number, book: Book): Observable<Book> {
    return this.http.put<Book>(this.API_LOCAL + '/' + id, book);
  }
}
