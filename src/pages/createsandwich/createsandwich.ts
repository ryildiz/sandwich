import { Component } from '@angular/core';
import {ModalController, NavController, NavParams} from 'ionic-angular';
import {ModalContentPage} from "./modalcontent";
import {Sandwich} from "../../model/Sandwich";
import {TranslateService} from "@ngx-translate/core";
 import {SandwichLabels} from "../../model/SndwichLabels";
import {SandwichProvider} from "../../providers/sandwich-provider";
import {JsonConvert, OperationMode, ValueCheckingMode} from "json2typescript";
import {LoadingProvider} from "../../providers/loading-provider";

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
    snapshot :any;

   constructor(public navCtrl: NavController,
               private translate: TranslateService,
               public modalCtrl: ModalController,
               private loading : LoadingProvider,
               private sandwichProvider : SandwichProvider,
               public navParams: NavParams) {

       this.loading.startLoading();

       this.loginData = this.navParams.get("loginData");
       this.snapshot = this.navParams.get("snapshot");

       if(this.snapshot) {

           let jsonConvert: JsonConvert = new JsonConvert();
           jsonConvert.operationMode = OperationMode.LOGGING; // print some debug data
           jsonConvert.ignorePrimitiveChecks = true; // don't allow assigning number to string etc.
           jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL; // never allow null

           this.sandwich = jsonConvert.deserializeObject(this.snapshot.val(), Sandwich);
           this.sandwich.fiyat = this.snapshot.val().fiyat;
       } else {
           this.sandwich = new Sandwich();
       }

       this.sandwich.sandwichProvider = sandwichProvider;
       this.loading.dismiss(true);


   }



    openSaveModal() {

        this.sandwich.setIcerik(new SandwichLabels(this.translate));

        let modal = this.modalCtrl.create(ModalContentPage,
                    {'sandwich': this.sandwich, 'snapshotkey':(this.snapshot ? this.snapshot.key : undefined)});
        modal.present();

    }


}
