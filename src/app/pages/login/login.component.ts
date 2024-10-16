import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { FormControl,FormGroup,ReactiveFormsModule,Validators,} from '@angular/forms';



@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {

    loginForm: FormGroup;

    constructor() {
     
      this.loginForm = new FormGroup({
        email: new FormControl('info123@gmail.com', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(6),Validators.maxLength(16)]),
      });
    }
  
  
    onSubmit() {
      if (this.loginForm.valid) {
        console.log('Login successful:', this.loginForm);
       
      } else {
        console.log('Form is invalid');
      }
    }
}


