import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule} from '@angular/http';
import { RouterModule, Routes } from '@angular/router';


import { BaseComponent }  from './base.component';
import { HomeComponent }  from './home/home.component';
import { ProjetsComponent }  from './projets/projets.component';
import { ContactComponent }  from './contact/contact.component';
import { ContactService }  from './contact/contact.service';

const appRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'projets', component: ProjetsComponent },
    { path: 'contact', component: ContactComponent },
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: '**', component: HomeComponent }  // redirect to home page on load
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes), BrowserModule, ReactiveFormsModule, HttpModule
    ],
    exports: [
        RouterModule
    ],
    declarations: [BaseComponent, HomeComponent, ProjetsComponent, ContactComponent],
    providers: [ContactService],
    bootstrap: [BaseComponent],

})
export class AppModule { }

platformBrowserDynamic().bootstrapModule(AppModule);
