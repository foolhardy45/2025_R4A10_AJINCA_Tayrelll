import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import {Pizza} from "../../../../models/pizza";
import {PizzaService} from "../../../../services/pizza.service";

@Component({
  selector: 'app-pizza-list-page',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './pizza-list-page.component.html',
  styleUrl: './pizza-list-page.component.css',
})
export class PizzaListPageComponent {
  pizzas: Pizza[] = [];

  constructor(private pizzaService: PizzaService) {
  }

  ngOnInit() {
    this.pizzas = this.pizzaService.getAllPizzas();
  }

  getStars(rating: number): string[] {
    return Array(5)
      .fill('☆')
      .map((_, i) => (i < rating ? '★' : '☆'));
  }

  formatPizzaUrl(name: string): string {
    console.log(name);
    return `/pizza/${name.toLowerCase().replace(/\s+/g, '-')}`;
  }
}
