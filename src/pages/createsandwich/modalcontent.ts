import {NavController, NavParams, Platform, ViewController} from "ionic-angular";
import {Component} from "@angular/core";
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {MySandwichesPage} from "../mysandwich/mysandwiches";
import {Sandwich} from "../../model/Sandwich";
import {JsonConvert, OperationMode, ValueCheckingMode} from "json2typescript";
import {SandwichProvider} from "../../providers/sandwich-provider";


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
        private sandwichProvider : SandwichProvider,
        public viewCtrl: ViewController
    ) {
        this.sandwich = this.params.get('sandwich');
        this.loginData.userId = Date.now().valueOf();
    }

    saveSandwich(){

        debugger;

        let jsonConvert: JsonConvert = new JsonConvert();
        jsonConvert.operationMode = OperationMode.LOGGING; // print some debug data
        jsonConvert.ignorePrimitiveChecks = true; // don't allow assigning number to string etc.
        jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL; // never allow null

        let serializedObj: any = jsonConvert.serialize(this.sandwich);

        debugger;

         this.fdb.list("/users/1502547025511/").push(serializedObj);

         this.fdb.list("/users/1502547025511/", { preserveSnapshot: true})
             .subscribe(snapshots=>{
             snapshots.forEach(snapshot => {
                 console.log(snapshot.key, snapshot.val());
                 debugger;
                 let ss : Sandwich = jsonConvert.deserializeObject(snapshot.val(), Sandwich);
                 debugger;
             });
         });


         this.navCtrl.push(MySandwichesPage, {});

    }

    dismiss() {
        this.viewCtrl.dismiss();
    }


    // filter(obj) {
    //     for (var key in obj) {
    //         if (obj[key] === undefined) {
    //             delete obj[key];
    //             // obj[key]='';
    //             continue;
    //         }
    //         if (obj[key] && typeof obj[key] === "object") {
    //             this.serializeFilter(obj[key]);
    //             if (!Object.keys(obj[key]).length) {
    //                 delete obj[key];
    //                 // obj[key]='';
    //             }
    //         }
    //     }
    //     return obj;
    // }



}