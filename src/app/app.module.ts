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

@NgModule({
    declarations: [
        MyApp,
        MySandwichesPage,
        SandwichPage,
        CreateSandwichPage,
        ModalContentPage,
        LoginPage,
        TabsPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        MySandwichesPage,
        SandwichPage,
        CreateSandwichPage,
        ModalContentPage,
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