import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserloginComponent } from './components/pages/userlogin/userlogin.component';
import { UserregisterComponent } from './components/pages/userregister/userregister.component';
import { UserpasswordComponent } from './components/pages/userpassword/userpassword.component';
import { DashboardComponent } from './components/pages/dashboard/dashboard.component';
import { ColectionlistComponent } from './components/pages/colectionlist/colectionlist.component';
import { ColectionsheetComponent } from './components/pages/colectionsheet/colectionsheet.component';
import { ColectioneditComponent } from './components/pages/colectionedit/colectionedit.component';
import { ModellistComponent } from './components/pages/modellist/modellist.component';
import { ModelsheetComponent } from './components/pages/modelsheet/modelsheet.component';
import { ModeleditComponent } from './components/pages/modeledit/modeledit.component';
import { UserconfirmationpasswordComponent } from './components/pages/userconfirmationpassword/userconfirmationpassword.component';
import { SidebarComponent } from './components/leadoff/sidebar/sidebar.component';
import { NavbarComponent } from './components/leadoff/navbar/navbar.component';


@NgModule({
  declarations: [
    AppComponent,
    UserloginComponent,
    UserregisterComponent,
    UserpasswordComponent,
    DashboardComponent,
    ColectionlistComponent,
    ColectionsheetComponent,
    ColectioneditComponent,
    ModellistComponent,
    ModelsheetComponent,
    ModeleditComponent,
    UserconfirmationpasswordComponent,
    SidebarComponent,
    NavbarComponent,
  
       
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
