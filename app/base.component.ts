import { Component } from '@angular/core';

@Component({
  selector: 'mon-site',
  templateUrl: './app/base.component.html',

})

export class BaseComponent{
  showMobilemenu(){
    document.getElementById('hideTarget').classList.toggle("show");



  }
}
