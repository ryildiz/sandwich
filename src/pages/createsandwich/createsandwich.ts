 import { Component } from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {ModalContentPage} from "./modalcontent";
import {Sandwich} from "../../model/Sandwich";
import {TranslateService} from "@ngx-translate/core";

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

    sandwich = new Sandwich();

   constructor(public navCtrl: NavController,
               private translate: TranslateService,
               public modalCtrl: ModalController,
               public navParams: NavParams) {
       this.loginData = this.navParams.get("loginData");


console.log('default lang is ' + translate.getDefaultLang());


       let yarim       = translate.get('yarim').subscribe(value => {
           console.log('---> ' + value);
           return value;
       });
       let tahilli     = translate.get('tahilli').subscribe(value => {console.log('---> ' + value); return value});
       let kasar       = translate.get('kasar').subscribe(value => {console.log('---> ' + value); return value});
       let salatalik   = translate.get('salatalik').subscribe(value => {console.log('---> ' + value); return value});
       let zeytinyagi  = translate.get('zeytinyagi').subscribe(value => {
           console.log('---> ' + value);
           return value
       });

   }

    openSaveModal() {
        this.sandwich.setIcerik(this.translate);
        let modal = this.modalCtrl.create(ModalContentPage, {'sandwich': this.sandwich});
        modal.present();

    }


}
