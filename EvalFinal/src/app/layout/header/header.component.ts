import { Component } from '@angular/core';
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isMenuOpen = false;
  constructor(private router: Router) {
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
