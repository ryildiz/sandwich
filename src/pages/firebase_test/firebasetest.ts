import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {AngularFireDatabase} from "angularfire2/database";

@Component({
  selector: 'page-firebasetest',
  templateUrl: 'firebasetest.html'
})
export class FirebaseTestPage {


  arrData = [];
    myInput : any;

  constructor(public navCtrl: NavController,
              private fdb : AngularFireDatabase,
              public navParams: NavParams) {

      this.fdb.list("/myitems/").subscribe(_data=>{
            this.arrData = _data;
      });

  }

  addItem(){
    this.fdb.list("/myitems/").push(this.myInput);
  }

  deleteItem(i) {
      this.fdb.list("/myitems/").remove(this.arrData[i].$key);
  }

}
