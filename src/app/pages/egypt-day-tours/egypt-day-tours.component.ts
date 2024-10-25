import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router'; // Import RouterModule

@Component({
  selector: 'app-egypt-day-tours',
  standalone: true,
  imports: [CommonModule, RouterModule], // Ensure CommonModule &&&RouterModule is imported,
  templateUrl: './egypt-day-tours.component.html',
  styleUrl: './egypt-day-tours.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class EgyptDayToursComponent {
  imgSrc: string = 'assets/images';

  tours = [
    {
      title: 'Cairo day tours',
      description:
        'Travel to Egypt offers Cairo day tours with very special programs, Cairo excursions are diverse.',
      imageUrl: 'assets/images/imgs/cairo-tower-4600720.jpg',
      go: 'go-cairo',
    },
    {
      title: 'Luxor day tours',
      description:
        'Enjoy one of travel to Egypt Excursions programs, Luxor day tours, Luxor day trips will introduce you...',
      imageUrl:
        'assets/images/imgs/pexels-mohamed-eessa74-1306424906-24743611.jpg',
      go: 'go-luxor',
    },
    {
      title: 'Sharm El Sheikh day tours',
      description:
        'Travel to Egypt offers special programs for Sharm El Sheikh day tours, enjoy multiple Sharm El Sheikh...',
      imageUrl: 'assets/images/imgs/beautiful-tropical-beach-sea (1).jpg',
      go: 'go-sharm',
    },
  ];
}
