import { Component } from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {ModalContentPage} from "./modalcontent";
import {Sandwich} from "../../model/Sandwich";

@Component({
  selector: 'page-createsandwich',
  templateUrl: 'createsandwich.html'
})
export class CreateSandwichPage {

    loginData: {
        displayName: string,
        email: string,
        familyName: string,
        givenName: string,
        imageUrl: string,
        userId: string
    };

    sandwich  : Sandwich = {};

   constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams) {
       this.loginData = this.navParams.get("loginData");
   }

    openSaveModal() {

        let modal = this.modalCtrl.create(ModalContentPage, {'sandwich': this.sandwich});
        modal.present();

    }


}
