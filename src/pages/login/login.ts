import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {TabsPage} from '../tabs/tabs';
import {GooglePlus} from '@ionic-native/google-plus';
import {Facebook} from '@ionic-native/facebook';
import {MySandwichesPage} from "../mysandwich/mysandwiches";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})
export class LoginPage {

    userProfile: any = null;

    constructor(public navCtrl: NavController, private gplus: GooglePlus, private facebook: Facebook) {
    }

    goToSandwich(params) {
        if (!params) params = {};
        this.navCtrl.push(TabsPage, params);
    }

    loginUserG() {
        this.gplus.login({
            'webclientid': '1086603815740-ast0hifohjn3kuvj7rc2hlvuslqbms71.apps.googleusercontent.com',
            'offline': true
        }).then(res => {
            console.log(res); // holds user image etc
            this.goToSandwich({loginData: res});
        }).catch(err => console.error(err));
    }

    loginUserF() {
        this.facebook.login(['public_profile','email']).then((res) => {
                this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile => {
                    this.userProfile = {email: profile['email'], displayName: profile['name'], imageUrl: profile['picture_large']['data']['url']}
                    this.goToSandwich({loginData: this.userProfile});
                });
        }).catch(err => console.error(err));
    }
}
