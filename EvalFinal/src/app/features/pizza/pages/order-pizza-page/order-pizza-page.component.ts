import { Component } from '@angular/core';
import {OrderLocalService} from "../../../../services/order.service";
import {Router} from "@angular/router";
import {PizzaService} from "../../../../services/pizza.service";
import {Pizza} from "../../../../models/pizza";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {Order} from "../../../../models/order";

@Component({
  selector: 'app-order-pizza-page',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './order-pizza-page.component.html',
  styleUrl: './order-pizza-page.component.css'
})
export class OrderPizzaPageComponent {
  pizzas: Pizza[] = [];
  order: { pizza: string; size: string; email: string; paymentMethod: string } = {
    pizza: '',
    size: 'Medium',
    email: '',
    paymentMethod: 'Bitcoin',

  }
  constructor(private orderLocalService: OrderLocalService, private router: Router, private pizzaService: PizzaService) {}

    ngOnInit() {
        this.pizzas = this.pizzaService.getAllPizzas();
    }

  onSubmit() {

  }
}
