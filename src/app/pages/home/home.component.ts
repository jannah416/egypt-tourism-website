import { Component ,OnInit} from '@angular/core';
import { NgFor } from '@angular/common';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [NgFor],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  
  AboutEgypt:string='About Egypt';
  DiscoverEgypt:string='Discover Egypt';
  UsefulInformations:string='Useful Informations';

  welcomeMessage = '';
  
  ngOnInit() {
    const hour = new Date().getHours();
    if (hour < 12) {
      this.welcomeMessage = 'Good Morning! Welcome to Egypt';
    } else if (hour < 18) {
      this.welcomeMessage = 'Good Afternoon! Welcome to Egypt';
    } else {
      this.welcomeMessage = 'Good Evening! Welcome to Egypt';
    }
  }
  airports = [
    { name: 'Cairo International Airport', url: 'https://www.google.com/maps?q=Cairo+International+Airport' },
    { name: 'Luxor International Airport', url: 'https://www.google.com/maps?q=Luxor+International+Airport' },
    { name: 'Sharm al-Sheikh International Airport', url: 'https://www.google.com/maps?q=Sharm+al-Sheikh+International+Airport' },
    { name: 'Hurghada International Airport', url: 'https://www.google.com/maps?q=Hurghada+International+Airport' },
    { name: 'Marsa Alam International Airport', url: 'https://www.google.com/maps?q=Marsa+Alam+International+Airport' },
    { name: 'Taba International Airport', url: 'https://www.google.com/maps?q=Taba+International+Airport' },
    { name: 'Aswan International Airport', url: 'https://www.google.com/maps?q=Aswan+International+Airport' },
    { name: 'Borg al-Arab International Airport', url: 'https://www.google.com/maps?q=Borg+al-Arab+International+Airport' },
  ];
   constructor(private router: Router) {}
  handleNavigate(path: string) {
    this.router.navigate([path]);
  }
}
