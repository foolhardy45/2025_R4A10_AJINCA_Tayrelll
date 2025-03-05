import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {Book} from "../../models/book";
import {BooksInMemoryService} from "../../services/book-inmemory.service";
import {Router} from "@angular/router";
import {take} from "rxjs";


@Component({
  selector: 'app-create-book-page',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './create-book-page.component.html',
  styleUrl: './create-book-page.component.css',
})
export class CreateBookPageComponent {
  book: Book = {
    id: -1,
    title: '',
    author: '',
    description: '',
    coverUrl: 'https://placehold.co/150x200',
  }

  constructor(private bookService: BooksInMemoryService,private router: Router) {
  }

  onSubmit() {
    this.bookService.createBook(this.book).pipe(
        take(1)
    ).subscribe();
    console.log(this.book);

    this.router.navigateByUrl('');

  }
}
