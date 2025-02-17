import {Component, EventEmitter, Input, Output} from '@angular/core';
import {SlideInterface} from "../models/slide-interface";
import {NgIf, NgStyle} from "@angular/common";

@Component({
  selector: 'app-carousel',
  standalone: true,
  imports: [
    NgStyle,
    NgIf
  ],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss'
})
export class CarouselComponent {
  @Input() title: string = '';
  @Input() slides: SlideInterface[] = [];

  @Output() nextSlide = new EventEmitter<number>();

  currentIndex = 0;

  get currentSlide(){
    return this.slides[this.currentIndex];
  }

  prev(): void {
    if (this.slides.length > 0) {
      this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
      this.nextSlide.emit(this.currentIndex);
    }
  }

    next(): void {
        if (this.slides.length > 0) {
        this.currentIndex = (this.currentIndex + 1) % this.slides.length;
        this.nextSlide.emit(this.currentIndex);
        }
    }


}
