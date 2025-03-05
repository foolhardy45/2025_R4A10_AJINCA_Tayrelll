import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({providedIn: 'root' })
export class BooksInMemoryService {
  private apiUrl = 'http://127.0.0.1:5000/books';

  constructor(private http: HttpClient) {
  }


  getAllBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.apiUrl);
  }

  getBookById(id: number): Observable<Book> {
    return this.http.get<Book>(this.apiUrl + '/' + id);
  }

  createBook(book: Omit<Book, 'id' | 'coverUrl'>): Observable<Book> {
     return this.http.post<Book>(this.apiUrl, book);
  }

  deleteBook(id: number): Observable<void> {
    return this.http.delete<void>(this.apiUrl + '/' + id);
  }
}
