import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {SandwichPage} from '../sandwich/sandwich';
import {GooglePlus} from '@ionic-native/google-plus';

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    userProfile: any = null;

    constructor(public navCtrl: NavController, private gplus: GooglePlus) {
        console.log("hello mate!");
    }

    goToSandwich(params) {
        if (!params) params = {};
        this.navCtrl.push(SandwichPage, params);
    }

    loginUser() {
        this.gplus.login({
            'webclientid': '1086603815740-ast0hifohjn3kuvj7rc2hlvuslqbms71.apps.googleusercontent.com',
            'offline': true
        }).then(res => {
            console.log(res); // holds user image etc
            this.goToSandwich({loginData: res});
        }).catch(err => console.error(err));
    }
}
