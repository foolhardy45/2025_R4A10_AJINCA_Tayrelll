import { Component } from '@angular/core';
import {ActivatedRoute, RouterLink} from "@angular/router";
import {Voyage} from "../../models/voyage";
import {VoyageService} from "../../services/voyage.service";
import {CurrencyPipe} from "@angular/common";

@Component({
  selector: 'app-single-voyage',
  standalone: true,
  imports: [
    RouterLink,
    CurrencyPipe
  ],
  templateUrl: './single-voyage.component.html',
  styleUrl: './single-voyage.component.css'
})
export class SingleVoyageComponent {
  private id!: number;
  voyage!: Voyage;

  constructor( private activatedRoute: ActivatedRoute, private voyageService: VoyageService) {}

  ngOnInit() {
    this.id = + this.activatedRoute.snapshot.paramMap.get('id')!;
    this.voyage = this.voyageService.getVoyageById(this.id);
  }


  onDelete() {
    this.voyageService.deleteVoyage(this.id);
  }
}
