import { Component } from '@angular/core';
import {Voyage} from "../../models/voyage";
import {VoyageService} from "../../services/voyage.service";
import {Router} from "@angular/router";
import {CurrencyPipe} from "@angular/common";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-new-voyage',
  standalone: true,
  imports: [
    CurrencyPipe,
    MatButton
  ],
  templateUrl: './new-voyage.component.html',
  styleUrl: './new-voyage.component.css'
})
export class NewVoyageComponent {
  voyageGenere:  Voyage | null = null;

  constructor(private voyageService: VoyageService, private router: Router) {
  }

  ngOnInit() {
  }

  voyageAleatoire() {
    this.voyageGenere = this.voyageService.ajouterAleatoire();
  }

  validerVoyage() {
    if (this.voyageGenere) {
      this.voyageService.addVoyage(this.voyageGenere);
      this.router.navigateByUrl('');
    }
  }
}
