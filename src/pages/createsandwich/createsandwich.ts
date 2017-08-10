import { Component } from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {ModalContentPage} from "./modalcontent";
import {Sandwich} from "../../model/Sandwich";
import {TranslateService} from "@ngx-translate/core";
 import {SandwichLabels} from "../../model/SndwichLabels";
import {SandwichProvider} from "../../providers/sandwich-provider";
import {SandwichBase} from "../../model/SandwichBase";

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

    sandwich :Sandwich;

   constructor(public navCtrl: NavController,
               private translate: TranslateService,
               public modalCtrl: ModalController,
               private sandwichProvider : SandwichProvider,
               public navParams: NavParams) {

       this.loginData = this.navParams.get("loginData");

       this.sandwich = new Sandwich(sandwichProvider);

   }



    openSaveModal() {

        this.sandwich.setIcerik(new SandwichLabels(this.translate));

        let modal = this.modalCtrl.create(ModalContentPage, {'sandwich': this.sandwich});
        modal.present();

    }


}
