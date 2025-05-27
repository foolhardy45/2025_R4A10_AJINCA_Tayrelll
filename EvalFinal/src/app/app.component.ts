import { Component } from '@angular/core';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import {RouterOutlet} from "@angular/router";
import {PizzaListPageComponent} from "./features/pizza/pages/pizza-list-page/pizza-list-page.component";

@Component({
  selector: 'app-root',
  standalone: true,
    imports: [HeaderComponent, FooterComponent, RouterOutlet, PizzaListPageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {}
