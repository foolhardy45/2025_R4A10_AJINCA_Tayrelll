import { Component, inject, OnInit } from '@angular/core';
import { Book } from '../../models/book';
import { BooksInMemoryService } from '../../services/book-inmemory.service';
import { RouterLink } from '@angular/router';
import { Subscription} from "rxjs";


@Component({
  selector: 'app-book-list-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './book-list-page.component.html',
  styleUrl: './book-list-page.component.css',
})
export class BookListPageComponent implements OnInit {
  private readonly bookService = inject(BooksInMemoryService);
  private subscription = new Subscription();
  book: Book[] = [];



  ngOnInit() {
    this.subscription = this.bookService.getAllBooks().subscribe((data) => {
        this.book = data;
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
