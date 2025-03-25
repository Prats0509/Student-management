import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: false,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  form: FormGroup;
  submitted: boolean = false;
  loading: boolean = false
  constructor(
    private fb: FormBuilder,
    private authSrv: AuthService,
    private router: Router
  ) {
    // Create the registration form with the necessary fields and validation rules.
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, { validators: this.passwordMatchValidator });
  }
// Custom validator to ensure the password and confirmPassword fields match.
passwordMatchValidator(form: FormGroup) {
  const password = form.get('password')?.value;
  const confirmPassword = form.get('confirmPassword')?.value;
  return password === confirmPassword ? null : { passwordMismatch: true };
}

// Triggered when the registration form is submitted.
onSubmit() {
  this.submitted = true;

  // If the form is invalid, do nothing.
  if (this.form.invalid) {
    return;
  }

  this.loading = true;

  // Gather the user details from the form.
  const newUser = {
    firstName: this.form.get('firstName')?.value,
    lastName: this.form.get('lastName')?.value,
    email: this.form.get('email')?.value,
    password: this.form.get('password')?.value
  };

  // Call the register method from your authentication service.
  this.authSrv.register(newUser)
    .pipe(first())
    .subscribe({
      next: () => {
        // On successful registration, navigate to the login page.
        this.router.navigate(['/auth/login']);
      },
      error: (error) => {
        console.error(error);
        this.loading = false;
      },
      complete: () => {
        this.loading = false;
      }
    });
}
}
