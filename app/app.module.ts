import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { BaseComponent }  from './base.component';
import { HomeComponent }  from 'app/home/home.component';
import { ProjetsComponent }  from 'app/projets/projets.component';
import { ContactComponent }  from 'app/contact/contact.component';

const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'projets', component: ProjetsComponent },
  { path: 'contact', component: ContactComponent },
  { path: '', component: HomeComponent, pathMatch: 'full'} // redirect to home page on load
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes), BrowserModule
  ],
  declarations: [ BaseComponent,HomeComponent,ProjetsComponent,ContactComponent ],
  bootstrap:    [ BaseComponent ],

})
export class AppModule { }
