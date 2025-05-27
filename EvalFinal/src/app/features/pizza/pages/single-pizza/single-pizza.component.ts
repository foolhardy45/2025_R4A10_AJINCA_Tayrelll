import { CurrencyPipe } from '@angular/common';
import { Component } from '@angular/core';
import {Pizza} from "../../../../models/pizza";
import {PizzaService} from "../../../../services/pizza.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-single-pizza',
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: './single-pizza.component.html',
  styleUrl: './single-pizza.component.css',
})
export class SinglePizzaComponent {
  private name!: string;
  pizza!: Pizza ;

  constructor(private activatedRoute: ActivatedRoute, private pizzaService: PizzaService, private router:Router) {
  }

  ngOnInit() {
    this.name = this.activatedRoute.snapshot.paramMap.get('name')!;
    this.pizza = this.pizzaService.getPizzaByName(this.name);
    console.log(this.pizza);
  }

  get stars(): number[] {
    return Array(this.pizza.rating).fill(0);
  }

  onSelect() {
    this.router.navigateByUrl('/commandes');
  }
}
