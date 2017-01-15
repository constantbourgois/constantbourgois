"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var router_1 = require('@angular/router');
var base_component_1 = require('./base.component');
var home_component_1 = require('app/home/home.component');
var projets_component_1 = require('app/projets/projets.component');
var contact_component_1 = require('app/contact/contact.component');
var appRoutes = [
    { path: 'home', component: home_component_1.HomeComponent },
    { path: 'projets', component: projets_component_1.ProjetsComponent },
    { path: 'contact', component: contact_component_1.ContactComponent },
    { path: '', component: home_component_1.HomeComponent, pathMatch: 'full' } // redirect to home page on load
];
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                router_1.RouterModule.forRoot(appRoutes), platform_browser_1.BrowserModule
            ],
            declarations: [base_component_1.BaseComponent, home_component_1.HomeComponent, projets_component_1.ProjetsComponent, contact_component_1.ContactComponent],
            bootstrap: [base_component_1.BaseComponent],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map