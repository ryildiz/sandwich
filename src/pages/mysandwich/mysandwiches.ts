import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-mysandwiches',
  templateUrl: 'mysandwiches.html'
})
export class MySandwichesPage {

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
