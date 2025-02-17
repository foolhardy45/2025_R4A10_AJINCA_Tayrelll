import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from "./header/header.component";
import {FooterComponent} from "./footer/footer.component";
import {OurServiceComponent} from "./our-service/our-service.component";
import {CarouselComponent} from "./carousel/carousel.component";
import {HeroComponent} from "./hero/hero.component";
import {SlideInterface} from "./models/slide-interface";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, OurServiceComponent, CarouselComponent, HeroComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  carouselTitle = 'Carousel';
  carouselSlides: SlideInterface[] = [
    {
      image: 'assets/lego_1.jpg',
      name: 'Slide 1',
      title: 'Slide 1',
      description: 'Description 1',
      sousDescription: 'Sous description 1'
    },
    {
      image: 'assets/lego_2.jpg',
      name: 'Slide 2',
      title: 'Slide 2',
      description: 'Description 2',
      sousDescription: 'Sous description 2'
    },
    {
      image: 'assets/lego_3.jpg',
      name: 'Slide 3',
      title: 'Slide 3',
      description: 'Description 3',
      sousDescription: 'Sous description 3'
    }
    ];

    onSlideChanged(index: number): void {
        console.log('Slide changed to index', index);
    }
}
