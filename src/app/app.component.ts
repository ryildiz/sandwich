import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {SandwichPage} from "../pages/sandwich/sandwich";
import {MySandwichesPage} from "../pages/mysandwich/mysandwiches";
import {CreateSandwichPage} from "../pages/createsandwich/createsandwich";
import {LoginPage} from "../pages/login/login";
import {TabsPage} from "../pages/tabs/tabs";
import {FirebaseTestPage} from "../pages/firebase_test/firebasetest";
import {TranslateService} from "@ngx-translate/core";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {

    rootPage:any = TabsPage;
    // rootPage:any = FirebaseTestPage;
    // rootPage:any = LoginPage;
    // rootPage:any = MySandwichesPage;
    // rootPage:any = CreateSandwichPage;

  constructor(platform: Platform,
              private translate: TranslateService,
              statusBar: StatusBar,
              splashScreen: SplashScreen) {

    this.initTranslation();

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }


    initTranslation() {
        var userLang = navigator.language.split('-')[0]; // use navigator lang if available
        userLang = /(en|tr)/gi.test(userLang) ? userLang :'tr';
        // userLang = 'en';
        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang('tr');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translate.use(userLang);


    }

  
}
