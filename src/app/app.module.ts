import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {LoginPage} from "../pages/login/login";
import {SandwichPage} from "../pages/sandwich/sandwich";
import { TabsPage } from "../pages/tabs/tabs";


import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {GooglePlus} from '@ionic-native/google-plus';
import {MySandwichesPage} from "../pages/mysandwich/mysandwiches";
import {CreateSandwichPage} from "../pages/createsandwich/createsandwich";
import {ModalContentPage} from "../pages/createsandwich/modalcontent";
import {Facebook} from "@ionic-native/facebook";
import {AngularFireModule} from "angularfire2";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {FirebaseTestPage} from "../pages/firebase_test/firebasetest";

var config = {
    apiKey: "AIzaSyA730uys6aEhWaQjgbiqxxPtovkqg3psgE",
    authDomain: "sandwich-f5301.firebaseapp.com",
    databaseURL: "https://sandwich-f5301.firebaseio.com",
    projectId: "sandwich-f5301",
    storageBucket: "sandwich-f5301.appspot.com",
    messagingSenderId: "902230738570"
};

@NgModule({
    declarations: [
        MyApp,
        MySandwichesPage,
        SandwichPage,
        CreateSandwichPage,
        ModalContentPage,
        FirebaseTestPage,
        LoginPage,
        TabsPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(config)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        MySandwichesPage,
        SandwichPage,
        CreateSandwichPage,
        ModalContentPage,
        FirebaseTestPage,
        LoginPage,
        TabsPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        GooglePlus,
        Facebook,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}