import {Component, EventEmitter, Input, Output} from '@angular/core';
import {Voyage} from "../../models/voyage";
import {CurrencyPipe, SlicePipe} from "@angular/common";
import {Router} from "@angular/router";
import {VoyageService} from "../../services/voyage.service";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {MatDialog} from "@angular/material/dialog";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-voyage-list-item',
  standalone: true,
  imports: [
    SlicePipe,
    CurrencyPipe,
    MatButton
  ],
  templateUrl: './voyage-list-item.component.html',
  styleUrl: './voyage-list-item.component.css'
})
export class VoyageListItemComponent {
  @Input() voyage!: Voyage;
  @Output() deleteVoyage = new EventEmitter<number>();


  constructor(private dialog: MatDialog, private router: Router, private voyageService: VoyageService) {
  }

  onSelect() {
    this.router.navigateByUrl('/singleVoyage/' + this.voyage.id);
  }

  onDeleteVoyage() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: {message: 'Are you sure you want to delete this voyage?'}
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
        if (result) {
            this.voyageService.deleteVoyage(this.voyage.id);
            this.deleteVoyage.emit(this.voyage.id);
        }
    })
  }
}
