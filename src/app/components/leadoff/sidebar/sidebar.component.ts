import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }

  navigateToDashboard() {
    this.router.navigate(['/sidebar/navbar/dashboard']);
  }

  navigateToCollection() {
    this.router.navigate(['/sidebar/navbar/colectionlist']);
  }

  navigateToModels() {
    this.router.navigate(['/sidebar/navbar/modellist']);
  }

  ngOnInit() {
    const helpLink = document.querySelector('#help-link') as HTMLAnchorElement;
    helpLink.addEventListener('click', (event) => {
      event.preventDefault();
    });

    const commentsLink = document.querySelector('#comments-link') as HTMLAnchorElement;
    commentsLink.addEventListener('click', (event) => {
      event.preventDefault();
    });
  }

}