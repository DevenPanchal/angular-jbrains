import { Component, Input } from '@angular/core';
import { User } from './address-card/user.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  
  inputText : string = "Input Text";

  bennett : User;
  
  //TODO we should not be defining data here
  constructor () {
    this.bennett = new User();
    this.bennett.name = 'Matthew Bennett';
    this.bennett.designation = 'Software wizard';

    this.bennett.address = 'Plano, TX';
    this.bennett.phone = ['214-509-8569', '972-332-3791'];
    this.bennett.email = 'twinbee@gmail.com';
  }
}
