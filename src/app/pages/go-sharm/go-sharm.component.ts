import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-go-sharm',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './go-sharm.component.html',
  styleUrl: './go-sharm.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class GoSharmComponent {
  imgSrc: string = 'assets/images';

  cardsSharm = [
    {
      title: 'Aqua Park In Sharm El Sheikh',
      price: 40,
      hours: 6,
      imageUrl: 'assets/images/imgs/sharm/aqua-park-sharm-main_cee16_lg.jpg',
    },
    {
      title: 'Luxor Tour From Sharm El Sheikh',
      price: 300,
      hours: 15,
      imageUrl:
        'assets/images/imgs/sharm/Luxor Day tour From Sharm El Sheikh_6bad5_lg.jpg',
    },
    {
      title: 'Saint Catherine Monastery Tour',
      price: 90,
      hours: 10,
      imageUrl:
        'assets/images/imgs/sharm/Saint Catherine Monastery Tour_13e15_lg.jpg',
    },
    {
      title: 'Dolphin Show In Sharm El Sheikh',
      price: 40,
      hours: 2,
      imageUrl:
        'assets/images/imgs/sharm/Dolphin_show_Sharm_El_Sheikh-main_a8c9c_lg.jpg',
    },
    {
      title: 'Desert Safari Trip By Quad Bike',
      price: 90,
      hours: 3,
      imageUrl:
        'assets/images/imgs/sharm/Desert Safari Trip By Quad Bike_3d801_lg.jpg',
    },
  ];
}