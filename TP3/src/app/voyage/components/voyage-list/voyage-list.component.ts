import { Component } from '@angular/core';
import {VoyageListItemComponent} from "../voyage-list-item/voyage-list-item.component";
import {VoyageService} from "../../services/voyage.service";
import {Voyage} from "../../models/voyage";

@Component({
  selector: 'app-voyage-list',
  standalone: true,
  imports: [
    VoyageListItemComponent
  ],
  templateUrl: './voyage-list.component.html',
  styleUrl: './voyage-list.component.css'
})
export class VoyageListComponent {
  voyages!: Voyage[];


  constructor(private voyageService: VoyageService) {
  }

  ngOnInit() {
    this.voyages = this.voyageService.getAllVoyages();
  }
}
