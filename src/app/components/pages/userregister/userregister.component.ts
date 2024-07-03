import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-userregister',
  templateUrl: './userregister.component.html',
  styleUrls: ['./userregister.component.css'],
})
export class UserregisterComponent {
  userForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')]],
      company: ['', Validators.required],
      cnpj: ['', [Validators.required, Validators.pattern('^\\d{2}\\.\\d{3}\\.\\d{3}\\/\\d{4}\\-\\d{2}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirmation: ['', [Validators.required, Validators.minLength(8)]],
    });
  }

  onSubmit() {
    if (this.userForm.valid) {
      this.router.navigateByUrl('/login');
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }

  onPasswordInput() {
    const passwordInput = document.getElementById('passwordInput');
    const passwordConfirmationInput = document.getElementById(
      'passwordConfirmationInput'
    );
    if (passwordInput && passwordConfirmationInput) {
      passwordConfirmationInput.setAttribute('type', 'password');
    }
  }

  onPasswordConfirmationInput() {
    const passwordInput = document.getElementById('passwordInput');
    const passwordConfirmationInput = document.getElementById(
      'passwordConfirmationInput'
    );
    if (passwordInput && passwordConfirmationInput) {
      passwordInput.setAttribute('type', 'password');
    }
  }
}