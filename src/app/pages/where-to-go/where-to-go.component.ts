import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-where-to-go',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './where-to-go.component.html',
  styleUrl: './where-to-go.component.css',
})
export class WhereToGoComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    // Scroll to the top of the page when the component is loaded
    window.scrollTo(0, 0);
  }
}
