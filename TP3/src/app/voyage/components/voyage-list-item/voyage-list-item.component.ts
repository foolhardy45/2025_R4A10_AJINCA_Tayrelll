import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Voyage} from "../../models/voyage";
import {CurrencyPipe, SlicePipe} from "@angular/common";
import {Router} from "@angular/router";
import {VoyageService} from "../../services/voyage.service";

@Component({
  selector: 'app-voyage-list-item',
  standalone: true,
  imports: [
    SlicePipe,
    CurrencyPipe
  ],
  templateUrl: './voyage-list-item.component.html',
  styleUrl: './voyage-list-item.component.css'
})
export class VoyageListItemComponent {
  @Input() voyage!: Voyage;
  @Output() deleteVoyage = new EventEmitter<number>();


  constructor(private router: Router, private voyageService: VoyageService) {
  }

  onSelect() {
    this.router.navigateByUrl('/singleVoyage/' + this.voyage.id);
  }

  onDelete() {
    this.voyageService.deleteVoyage(this.voyage.id);
    this.voyageService.getAllVoyages();
  }
}
