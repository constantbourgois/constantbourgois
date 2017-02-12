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
var forms_1 = require('@angular/forms');
var contact_service_1 = require('./contact.service');
/*import { routerTransition } from '../router.animations';*/
var globalvalidator_1 = require('./globalvalidator');
var ContactComponent = (function () {
    function ContactComponent(fb, contactService) {
        this.fb = fb;
        this.contactService = contactService;
        this.mode = 'Observable';
        this.submitted = false;
        this.contactForm = this.fb.group({
            name: ["", forms_1.Validators.required],
            email: ["", forms_1.Validators.compose([forms_1.Validators.required, globalvalidator_1.GlobalValidator.mailFormat])],
            message: ["", forms_1.Validators.required],
        });
        console.log(this.contactForm.controls['email']);
    }
    ;
    ContactComponent.prototype.sendEmail = function () {
        var _this = this;
        this.submitted = true;
        console.log(this.contactForm.valid);
        var output = this.contactForm.value;
        this.contactService.postContact(output).subscribe(function (response) { return _this.response = response; }, function (error) { return console.log(error); });
    };
    ContactComponent = __decorate([
        core_1.Component({
            selector: 'contact',
            templateUrl: 'app/contact/contact.component.html',
            styleUrls: ['app/contact/contact.component.css'],
            /*animations: [routerTransition()],
            host: { '[@routerTransition]': '' },*/
            providers: [contact_service_1.ContactService]
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, contact_service_1.ContactService])
    ], ContactComponent);
    return ContactComponent;
}());
exports.ContactComponent = ContactComponent;
//# sourceMappingURL=contact.component.js.map