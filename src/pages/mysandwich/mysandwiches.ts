import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AngularFireDatabase, FirebaseListObservable} from "angularfire2/database";
import {JsonConvert, OperationMode, ValueCheckingMode} from "json2typescript";
import {CreateSandwichPage} from "../createsandwich/createsandwich";
import {LoadingProvider} from "../../providers/loading-provider";

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

   // sandwichList : Observable<any>;
   sandwichList : FirebaseListObservable<any>;

  constructor(public navCtrl: NavController,
              private fdb : AngularFireDatabase,
              private loading : LoadingProvider,
              public navParams: NavParams) {

      this.loading.startLoading();

      this.loginData = this.navParams.get("loginData");

      let jsonConvert: JsonConvert = new JsonConvert();
      jsonConvert.operationMode = OperationMode.LOGGING; // print some debug data
      jsonConvert.ignorePrimitiveChecks = true; // don't allow assigning number to string etc.
      jsonConvert.valueCheckingMode = ValueCheckingMode.ALLOW_NULL; // never allow null

      try {
          this.sandwichList = this.fdb.list("/users/1502547025511/", {preserveSnapshot: true});
      } catch(e) {
          this.loading.dismiss(false);
      }

      this.loading.dismiss(true);

  }

  edit(snapshot: any) {
      this.navCtrl.push(CreateSandwichPage, {'snapshot': snapshot});
  }

  delete(sandwich: any) {

      this.loading.startLoading();
      try {
          this.fdb.list("/users/1502547025511/").remove(sandwich.key);
          this.loading.dismiss(true);
      } catch (e) {
          this.loading.dismiss(false);
      }

  }







}
