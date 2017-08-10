import {NavController, NavParams, Platform, ViewController} from "ionic-angular";
import {Component} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {MySandwichesPage} from "../mysandwich/mysandwiches";
import {SandwichBase} from "../../model/SandwichBase";
import {Sandwich} from "../../model/Sandwich";


@Component({
    selector: 'page-modalcontent',
    templateUrl: 'modalcontent.html'
})
export class ModalContentPage {

    sandwich:Sandwich;

    loginData: any = {
        displayName: String,
        email: String,
        familyName: String,
        givenName: String,
        imageUrl: String,
        userId: String
    };

    constructor(
        public platform: Platform,
        public params: NavParams,
        private fdb : AngularFireDatabase,
        public navCtrl: NavController,
        public viewCtrl: ViewController
    ) {
        this.sandwich = this.params.get('sandwich');
        this.loginData.userId = Date.now().valueOf();
    }

    saveSandwich(){

        debugger;

        let bb : SandwichBase = this.sandwich.getModel();
        debugger;

        let xx : SandwichBase = new SandwichBase();

         this.fdb.list("/demo/" + this.loginData.userId + "/").push(xx);

         this.navCtrl.push(MySandwichesPage, {});


    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

}