import {NavParams, Platform, ViewController} from "ionic-angular";
import {Component} from "@angular/core";
import {Sandwich} from "../../model/Sandwich";
import {AngularFireDatabase} from "angularfire2/database";


@Component({
    selector: 'page-modalcontent',
    templateUrl: 'modalcontent.html'
})
export class ModalContentPage {

    sandwich:Sandwich;

    constructor(
        public platform: Platform,
        public params: NavParams,
        private fdb : AngularFireDatabase,
        public viewCtrl: ViewController
    ) {
        this.sandwich = this.params.get('sandwich');
    }

    saveSandwich(){
        this.fdb.list("/users/").push(this.sandwich);
        this.dismiss();
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

}