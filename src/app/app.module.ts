import {ErrorHandler, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicErrorHandler, IonicModule} from 'ionic-angular';
import {MyApp} from './app.component';
import {LoginPage} from "../pages/login/login";


import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {GooglePlus} from '@ionic-native/google-plus';
import {MySandwichesPage} from "../pages/mysandwich/mysandwiches";
import {CreateSandwichPage} from "../pages/createsandwich/createsandwich";
import {ModalContentPage} from "../pages/createsandwich/modalcontent";

@NgModule({
    declarations: [
        MyApp,
        MySandwichesPage,
        CreateSandwichPage,
        ModalContentPage,
        LoginPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        MySandwichesPage,
        CreateSandwichPage,
        ModalContentPage,
        LoginPage
    ],
    providers: [
        StatusBar,
        SplashScreen,
        GooglePlus,
        {provide: ErrorHandler, useClass: IonicErrorHandler}
    ]
})
export class AppModule {
}