import {Component, EventEmitter, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Voyage} from "../../models/voyage";
import {VoyageService} from "../../services/voyage.service";
import {CurrencyPipe} from "@angular/common";
import {ConfirmDialogComponent} from "../confirm-dialog/confirm-dialog.component";
import {MatDialog} from "@angular/material/dialog";

@Component({
  selector: 'app-single-voyage',
  standalone: true,
  imports: [
    CurrencyPipe,
  ],
  templateUrl: './single-voyage.component.html',
  styleUrl: './single-voyage.component.css'
})
export class SingleVoyageComponent {
  private id!: number;
  voyage!: Voyage;

  @Output() deleteVoyage = new EventEmitter<number>();

  constructor( private dialog: MatDialog ,private activatedRoute: ActivatedRoute, private voyageService: VoyageService, private route: Router) {}

  ngOnInit() {
    this.id = + this.activatedRoute.snapshot.paramMap.get('id')!;
    this.voyage = this.voyageService.getVoyageById(this.id);
  }

  ngOnChanges() {
    this.voyage = this.voyageService.getVoyageById(this.id);
  }


  onDelete() {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: {message: 'Are you sure you want to delete this voyage?'}
    });

    dialogRef.afterClosed().subscribe((result: boolean) => {
      if (result) {
        this.voyageService.deleteVoyage(this.voyage.id);
        this.deleteVoyage.emit(this.voyage.id);
        this.route.navigateByUrl('');
      }
    })
  }
}
