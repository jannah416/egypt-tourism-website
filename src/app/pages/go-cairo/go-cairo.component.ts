import { Component, ViewEncapsulation } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-go-cairo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './go-cairo.component.html',
  styleUrl: './go-cairo.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class GoCairoComponent {
  imgSrc: string = 'assets/images';

  cardsCairo = [
    {
      title: 'Museum, Citadel and Old Cairo',
      description:
        'Get exposed to the Egypt ancient history in the Egyptian museum,Then proceed with your private guide',
      price: 76,
      hours: 8,
      imageUrl:
        'assets/images/imgs/cairo/Museum, Citadel and Old Cairo_009f7_lg (1).webp',
    },
    {
      title: 'Giza Pyramids & Sphinx',
      description:
        'Get a glimpse of the greatness of Pharaohs and enjoy a tour through the three great pyramids of Giza',
      hours: 4,
      price: 75,
      imageUrl: 'assets/images/imgs/cairo/pyramids.webp',
    },
    {
      title: 'Pyramids & The Egyptian Museum',
      description:
        'Travel to ancient time with Pyramids and Egyptian museum tour, start with a visit to the pyramids',
      hours: 8,
      price: 100,
      imageUrl: 'assets/images/imgs/cairo/Egyptian_Museu.webp',
    },
    {
      title: 'Giza Pyramids, Memphis and Sakkara',
      description:
        'Visit the first pyramids in history at Sakkara. Located in the northwest of Memphis',
      hours: 8,
      price: 110,
      imageUrl: 'assets/images/imgs/cairo/TOUR-Thumbnail_62894_lg (1).webp',
    },
    {
      title: 'Day Trip To Luxor From Cairo By Air',
      description:
        'Tour Luxor in one day. Visit Karnak temple, the valley of kings and Hatshepsut temple with your private tour guide.',
      hours: 12,
      price: 369,
      imageUrl: 'assets/images/imgs/cairo/TOUR-Thumbnail_e3e4d_lg (1).jpg',
    },
    {
      title: 'Alexandria from Cairo by Car',
      description:
        'During your Alexandria day tours, you’ll visit Roman temples’ ruins, Qaitbay Citadel, and of course,',
      hours: 12,
      price: 130,
      imageUrl: 'assets/images/imgs/cairo/TOUR-Thumbnail_50001_lg (1).jpg',
    },
    {
      title: 'Sound and Light Show at the Pyramids',
      hours: 8,
      price: 25,
      imageUrl: 'assets/images/imgs/cairo/TOUR-Thumbnail_c2d71_lg (1).jpg',
    },
    {
      title: 'Cairo Nile Dinner Cruise and Show',
      hours: 3,
      price: 59,
      imageUrl: 'assets/images/imgs/cairo/Port-_4baff_lg (1).jpg',
    },
    {
      title: 'Camel Ride around the Pyramids',
      hours: 4,
      price: 57,
      imageUrl: 'assets/images/imgs/cairo/Untitled-1_f0a0e_lg (1).jpg',
    },
    {
      title: 'Felucca Ride On The Nile In Cairo',
      hours: 3,
      price: 110,
      imageUrl: 'assets/images/imgs/cairo/Untitled-1_138e1_lg.jpg',
    },
    {
      title: 'Cairo Excursion From Alexandria Port',
      price: 120,
      imageUrl:
        'assets/images/imgs/cairo/Cairo Excursion From Alexandria Port tour_d0881_lg.jpg',
    },
    {
      title: 'Pyramids, Sakkara Excursion.',
      price: 120,
      imageUrl:
        'assets/images/imgs/cairo/Pyramids, Sakkara Excursion From Port Said tour_005d8_lg.jpg',
    },
    {
      title: 'Pyramids And Lunch Cruise Excursion From Port Said',
      price: 120,
      imageUrl:
        'assets/images/imgs/cairo/Pyramids And Lunch Cruise Excursion From Port Said tour_c22e6_lg (1).jpg',
    },
    {
      title: 'Cairo Excursions From Port Said',
      price: 120,
      imageUrl:
        'assets/images/imgs/cairo/Cairo Excursions From Port Said package_1d146_lg.jpg',
    },
    {
      title: 'coptic cairo tour',
      hours: 8,
      price: 45,
      imageUrl: 'assets/images/imgs/cairo/coptic_43582_lg.jpg',
    },
  ];
}
