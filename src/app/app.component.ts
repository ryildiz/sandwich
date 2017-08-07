import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import {SandwichPage} from "../pages/sandwich/sandwich";
import {MySandwichesPage} from "../pages/mysandwich/mysandwiches";
import {CreateSandwichPage} from "../pages/createsandwich/createsandwich";
import {LoginPage} from "../pages/login/login";
import {TabsPage} from "../pages/tabs/tabs";



@Component({
  templateUrl: 'app.html'
})
export class MyApp {

    rootPage:any = TabsPage;
    // rootPage:any = LoginPage;
    // rootPage:any = MySandwichesPage;
    // rootPage:any = CreateSandwichPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
  
}
