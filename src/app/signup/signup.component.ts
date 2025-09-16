import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  standalone: false
})
export class SignupComponent {
  constructor(private fb: FormBuilder) {}

  form = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(2)]],
    email: ['', [Validators.required, Validators.email]],
    company: [''],
    password: ['', [Validators.required, Validators.minLength(6)]],
    agree: [false, [Validators.requiredTrue]]
  });

  isSubmitting = false;

  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }
    this.isSubmitting = true;
    setTimeout(() => {
      this.isSubmitting = false;
      alert('Account created (demo)');
    }, 1000);
  }
}


