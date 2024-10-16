import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
<<<<<<< HEAD
=======
  imports: [RouterLink,CommonModule],
>>>>>>> main-dev
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  imgSrc: string = 'assets/images/logo1.png';
  currentDate = new Date();
}
