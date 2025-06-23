import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  contactForm: FormGroup;
  
  loading: Boolean = false;
  success: Boolean = false;
  errorMessage: String = '';

  constructor(private fb: FormBuilder) {
    this.contactForm =this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.valid) {
      console.log('Form Submitted:', this.contactForm.value);
      // this.errorMessage = 'Please fill out all required fields correctly.';
      this.loading = true;
        this.success = false;
        this.errorMessage = '';
  
        // Simulate a service call
        setTimeout(() => {
          this.loading = false;
          this.success = true;
          // this.contactForm.reset();
        }, 2000);
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
