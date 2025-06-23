import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { EmailRequestService } from '../../services/email-request.service';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.css'
})
export class ContactFormComponent {
  emailRequestService = inject(EmailRequestService);
  contactForm: FormGroup;
  
  loading: Boolean = false;
  success: Boolean = false;
  errorMessage: String = '';

  constructor(private fb: FormBuilder) {
    this.contactForm =this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // subject: ['', Validators.required],
      message: ['', Validators.required]
    });
  }

  async onSubmit() {
    this.contactForm.markAllAsTouched();
    if (this.contactForm.valid) {
      this.loading = true;
      this.success = false;
      this.errorMessage = '';


      var result = await this.emailRequestService.sendMinimalEmailRequest(
        this.contactForm.value.name,
        this.contactForm.value.email,
        this.contactForm.value.message
      );

      this.loading = false;

      if (result) {
        this.success = true;
        setTimeout(() => {
          this.success = false;
          this.errorMessage = '';
        }, 8000);
      } else {
        this.errorMessage = 'Sorry! We are currently not available. Please contact via other method.'

        setTimeout(() => {
          this.success = false;
          this.errorMessage = '';
        }, 4000);
      }
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
