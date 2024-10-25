import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-aqua-park-tour',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './aqua-park-tour.component.html',
  styleUrl: './aqua-park-tour.component.css',
})
export class AquaParkTourComponent implements OnInit {
  BookForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    window.scrollTo(0, 0);

    this.BookForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: [
        '',
        [Validators.required, Validators.pattern('^\\+?[0-9]{10,15}$')],
      ], // Phone validation
      date: ['', [Validators.required]], // Date required
      message: ['', [Validators.required, Validators.minLength(10)]],
      adults: [1, [Validators.required, Validators.min(1)]], // Number of adults, minimum 1
      children: [0, [Validators.min(0)]], // Number of children, minimum 0
      rooms: [1, [Validators.required, Validators.min(1)]], // Number of rooms, minimum 1
    });
  }

  onSubmit(): void {
    if (this.BookForm.valid) {
      console.log(this.BookForm.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
