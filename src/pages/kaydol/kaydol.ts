import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SandwichPage } from '../sandwich/sandwich';

@Component({
  selector: 'page-kaydol',
  templateUrl: 'kaydol.html'
})
export class KaydolPage {

  constructor(public navCtrl: NavController) {
  }
  goToSandwich(params){
    if (!params) params = {};
    this.navCtrl.push(SandwichPage);
  }
}
