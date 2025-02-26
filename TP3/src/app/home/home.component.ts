import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {VoyageListComponent} from "../voyage/components/voyage-list/voyage-list.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    VoyageListComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {


  constructor(private router: Router) {
  }

  onContinue() {
    this.router.navigateByUrl('voyage/:id');
  }

}
