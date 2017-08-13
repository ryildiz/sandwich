import {NavController, NavParams, Platform, ViewController} from "ionic-angular";
import {Component} from "@angular/core";
import {AngularFireDatabase} from "angularfire2/database";
import {MySandwichesPage} from "../mysandwich/mysandwiches";
import {Sandwich} from "../../model/Sandwich";
import {JsonConvert, OperationMode, ValueCheckingMode} from "json2typescript";
import {LoadingProvider} from "../../providers/loading-provider";


@Component({
    selector: 'page-modalcontent',
    templateUrl: 'modalcontent.html'
})
export class ModalContentPage {

    sandwich:Sandwich;
    snapshotkey:any;

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
        private loading:LoadingProvider,
        public viewCtrl: ViewController
    ) {
        this.sandwich = this.params.get('sandwich');
        this.snapshotkey = this.params.get('snapshotkey');

        this.loginData.userId = Date.now().valueOf();
    }

    saveSandwich(){

        this.loading.startLoading();

        let jsonConvert: JsonConvert = new JsonConvert();
        jsonConvert.operationMode = OperationMode.LOGGING; // print some debug data
        jsonConvert.ignorePrimitiveChecks = true; // don't allow assigning number to string etc.
        jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL; // never allow null

        let serializedObj: any = jsonConvert.serialize(this.sandwich);

        try {
            if(this.snapshotkey)
                this.fdb.list("/users/1502547025511/").update(this.snapshotkey, serializedObj);
            else
                this.fdb.list("/users/1502547025511/").push(serializedObj);
        } catch(e) {
            this.loading.dismiss(false);
        }

        this.loading.dismiss(true);

        this.navCtrl.push(MySandwichesPage, {});

    }

    dismiss() {
        this.viewCtrl.dismiss();
    }


}