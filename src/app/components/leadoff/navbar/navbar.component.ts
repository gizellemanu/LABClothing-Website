import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  constructor(private router: Router) { }
  handleAccountClick() { this.router.navigate(['/login']);}
  
  handleSetsClick() {this.router.navigate(['/login']);}
  
  handleLogoutClick() { this.router.navigate(['/login']);}
}
