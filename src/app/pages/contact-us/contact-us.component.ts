import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import {  FormGroup, ReactiveFormsModule,Validators ,FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  standalone: true,
  imports: [ReactiveFormsModule,NgIf],
  templateUrl: './contact-us.component.html',
  styleUrl: './contact-us.component.css',
})
export class ContactUsComponent {
  ContactForm!: FormGroup; 

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
  
    this.ContactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(13)]],
    });
  }

  
  onSubmit(): void {
    if (this.ContactForm.valid) {
      console.log(this.ContactForm.value);  
    } else {
      console.log('Form is invalid');
    }
  }
}
