import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-sandwich',
  templateUrl: 'sandwich.html'
})
export class SandwichPage {
  loginData: {
    displayName: string,
      email: string,
      familyName: string,
      givenName: string,
      imageUrl: string,
      userId: string
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.loginData = this.navParams.get("loginData");
  }
  
}
