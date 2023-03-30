import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ParentComponent } from './components/leadoff/parent/parent.component';

import { DashboardComponent } from './components/pages/dashboard/dashboard.component';

import { UserloginComponent } from './components/pages/userlogin/userlogin.component';
import { UserregisterComponent } from './components/pages/userregister/userregister.component';
import { UserpasswordComponent } from './components/pages/userpassword/userpassword.component';
import { UserconfirmationpasswordComponent } from './components/pages/userconfirmationpassword/userconfirmationpassword.component';

import { ColectioneditComponent } from './components/pages/colectionedit/colectionedit.component';
import { ColectionsheetComponent } from './components/pages/colectionsheet/colectionsheet.component';
import { ColectionlistComponent } from './components/pages/colectionlist/colectionlist.component';

import { ModeleditComponent } from './components/pages/modeledit/modeledit.component';
import { ModelsheetComponent } from './components/pages/modelsheet/modelsheet.component';
import { ModellistComponent } from './components/pages/modellist/modellist.component';


const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: UserloginComponent,
  },
  {
    path: 'userregister',
    component: UserregisterComponent,
  },
  {
    path: 'userpassword',
    component: UserpasswordComponent,
  },
  {
    path: 'userpassword/confirmationpassword',
    component: UserconfirmationpasswordComponent,
  },
 
  {
    path: '',
    component: ParentComponent,
    children: [
      {
        path: 'sidebar/navbar/dashboard',
        component: DashboardComponent,
      },
      {
        path: 'sidebar/navbar/colectionlist',
        component: ColectionlistComponent,
      },
      {
        path: 'sidebar/navbar/colectionedit',
        component: ColectioneditComponent,
      },
      {
        path: 'sidebar/navbar/colectionedit/:id', 
        component: ColectioneditComponent,
      },
      {
        path: 'sidebar/navbar/colectionsheet',
        component: ColectionsheetComponent,
      },
      {
        path: 'sidebar/navbar/modellist',
        component: ModellistComponent,
      },
      {
        path: 'sidebar/navbar/modeledit',
        component: ModeleditComponent,
      },
      {
        path: 'sidebar/navbar/modeledit/:id', 
        component: ModeleditComponent,
      },
      {
        path: 'sidebar/navbar/modelsheet',
        component: ModelsheetComponent,
      },
    ],
    
  },

 
];


@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
