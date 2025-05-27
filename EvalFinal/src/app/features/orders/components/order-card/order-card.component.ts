import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Order} from "../../../../models/order";
import {OrderLocalService} from "../../../../services/order.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-order-card',
  standalone: true,
  imports: [],
  templateUrl: './order-card.component.html',
  styleUrl: './order-card.component.css',
})
export class OrderCardComponent {
  @Input() order!: Order;
  @Output() delete = new EventEmitter<string>();
  constructor(private orderLocalService: OrderLocalService, private route: Router) {}

  removeOrder() {
    this.orderLocalService.remove(this.order.id);
    this.route.navigateByUrl('/pizzas');

  }
}
