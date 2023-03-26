import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-userpassword',
  templateUrl: './userpassword.component.html',
  styleUrls: ['./userpassword.component.css']
})
export class UserpasswordComponent {
  userForm: FormGroup = new FormGroup({
    email: new FormControl('x.y.z@gmail.com', [
      Validators.required,
      Validators.email
    ])
  });

  constructor(private router: Router, private route: ActivatedRoute) {}

  onSubmit() {
    if (this.userForm.invalid) {
      alert('Please enter a valid email.');
      return;
    }

    this.router.navigateByUrl('/userpassword/confirmationpassword');
  }

}