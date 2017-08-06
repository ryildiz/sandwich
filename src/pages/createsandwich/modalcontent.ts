import {NavParams, Platform, ViewController} from "ionic-angular";
import {Component} from "@angular/core";


@Component({
    selector: 'page-modalcontent',
    templateUrl: 'modalcontent.html'
})
export class ModalContentPage {

    sandwich:any;

    constructor(
        public platform: Platform,
        public params: NavParams,
        public viewCtrl: ViewController
    ) {
        this.sandwich = this.params.get('sandwich');
    }

    saveSandwich(){
        this.dismiss();
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }

}