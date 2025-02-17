import {Component, Input} from '@angular/core';
import {OurService} from "../models/our-service";

@Component({
  selector: 'app-our-service-card',
  standalone: true,
  imports: [],
  templateUrl: './our-service-card.component.html',
  styleUrl: './our-service-card.component.scss'
})
export class OurServiceCardComponent {
  @Input() ourServiceCard!: OurService;

    constructor() {
    }

}
