import { Component } from '@angular/core';
import {OurService} from "../models/our-service";
import {OurServiceService} from "../services/our-service.service";
import {OurServiceCardComponent} from "../our-service-card/our-service-card.component";
import {NgForOf} from "@angular/common";

@Component({
  selector: 'app-our-service',
  standalone: true,
  imports: [
    OurServiceCardComponent,
    NgForOf
  ],
  templateUrl: './our-service.component.html',
  styleUrl: './our-service.component.scss'
})
export class OurServiceComponent {
  ourService!: OurService[];

  constructor(private ourServiceService: OurServiceService) {
  }

  ngOnInit(): void {
    this.ourService = this.ourServiceService.getAllOurServices();
  }

}
