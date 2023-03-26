import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.css'],
})
export class UserloginComponent {
  user = {
    email: '',
    password: '', 
  };
  isEmailValid = false;
  isPasswordValid = false;
  constructor(private router: Router, private route: ActivatedRoute) {}

  onSubmit() {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const isEmailValid = emailRegex.test(this.user.email);
    const isPasswordValid = this.user.password.length >= 8;

    this.isEmailValid = emailRegex.test(this.user.email);
    if (!this.isEmailValid) {
      alert('Please enter a valid email.');
      return;
    }

    this.isPasswordValid = this.user.password.length >= 8;
    if (!this.isPasswordValid) {
      alert('The password must be at least 8 characters long.');
      return;
    }

    this.router.navigateByUrl('/sidebar/navbar/dashboard');
  }
}
