import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  template:`
  <app-sidebar></app-sidebar>
  <app-navbar></app-navbar>
  <router-outlet></router-outlet>
  `
})
export class ParentComponent {

}
