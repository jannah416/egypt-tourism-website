import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {

  FormGroup,
  ReactiveFormsModule,
  Validators,
  FormBuilder,
} from '@angular/forms';

@Component({
  selector: 'app-pyramids-tour',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './pyramids-tour.component.html',
  styleUrl: './pyramids-tour.component.css'
})
export class PyramidsTourComponent {

  BookForm!: FormGroup; 

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
  
    this.BookForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('^\\+?[0-9]{10,15}$')]], // Phone validation
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
