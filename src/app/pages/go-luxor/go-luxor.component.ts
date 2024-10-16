import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-go-luxor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './go-luxor.component.html',
  styleUrl: './go-luxor.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class GoLuxorComponent {
  imgSrc: string = 'assets/images';

  cardsLuxor = [
    {
      title: 'Karnak and Luxor Temples tour',
      price: 38,
      hours: 6,
      imageUrl:
        'assets/images/imgs/luxor/Karnak and Luxor Temples tour_f2685_lg.jpg',
    },
    {
      title: 'Valley of the Kings, Memnon Colossi',
      price: 55,
      hours: 8,
      imageUrl:
        'assets/images/imgs/luxor/Valley of the Kings, Memnon Colossi & Hatshepsut Temple_b2091_lg.jpg',
    },
    {
      title: 'Day tour to Aswan from Luxor',
      price: 110,
      hours: 12,
      imageUrl:
        'assets/images/imgs/luxor/1613390956day-tour-to-aswan-from-luxor.jpg',
    },
    {
      title: 'Hot Air Balloon Tour',
      price: 95,
      hours: 2,
      imageUrl: 'assets/images/imgs/luxor/hot air balloon tour_dd384_lg.jpg',
    },
  ];
}