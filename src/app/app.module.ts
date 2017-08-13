import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {LoginPage} from "../pages/login/login";
import { TabsPage } from "../pages/tabs/tabs";
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

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
import {HttpModule, Http, RequestOptions, XHRBackend} from "@angular/http";
import {SandwichProvider} from "../providers/sandwich-provider";
import {LoadingProvider} from "../providers/loading-provider";

var config = {
    apiKey: "AIzaSyA730uys6aEhWaQjgbiqxxPtovkqg3psgE",
    authDomain: "sandwich-f5301.firebaseapp.com",
    databaseURL: "https://sandwich-f5301.firebaseio.com",
    projectId: "sandwich-f5301",
    storageBucket: "sandwich-f5301.appspot.com",
    messagingSenderId: "902230738570"
};

export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
    declarations: [
        MyApp,
        MySandwichesPage,
        CreateSandwichPage,
        ModalContentPage,
        FirebaseTestPage,
        LoginPage,
        TabsPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp),
        HttpModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [Http]
            }
        }),
        AngularFireDatabaseModule,
        AngularFireModule.initializeApp(config)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        MySandwichesPage,
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
        SandwichProvider,
        LoadingProvider,
        {provide: ErrorHandler, useClass: IonicErrorHandler},
        {
            provide: Http,
            useFactory: (backend: XHRBackend, defaultOptions: RequestOptions) => new Http(backend, defaultOptions),
            deps: [XHRBackend, RequestOptions]
        }
    ]
})
export class AppModule {
}