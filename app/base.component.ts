import { Component } from '@angular/core';
import {trigger, state, animate, style, transition} from '@angular/core';

@Component({
    selector: 'mon-site',
    templateUrl: './app/base.component.html',

})

export class BaseComponent {

    showMobilemenu() {
        document.getElementById('hideTarget').classList.toggle('show');




    }
}
