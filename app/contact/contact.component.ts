import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContactService } from './contact.service';
/*import { routerTransition } from '../router.animations';*/
import { GlobalValidator } from './globalvalidator';


@Component({
    selector: 'contact',
    templateUrl: 'app/contact/contact.component.html',
    styleUrls: ['app/contact/contact.component.css'],
    /*animations: [routerTransition()],
    host: { '[@routerTransition]': '' },*/
    providers: [ContactService]

})

export class ContactComponent {

    contactForm: FormGroup;

    mode = 'Observable';

    constructor(public fb: FormBuilder, private contactService: ContactService) {
      this.contactForm = this.fb.group  ({
        name: ["", Validators.required],
        email: ["", Validators.compose([Validators.required, GlobalValidator.mailFormat])],
        message: ["", Validators.required],
    });
    console.log(this.contactForm.controls['email']);
  };


    response: string;

    submitted = false;

    sendEmail() {
        this.submitted = true;
        console.log(this.contactForm.valid);
        let output = this.contactForm.value
        this.contactService.postContact(output).subscribe(response => this.response = response,
            error => console.log(error));

    }


}
