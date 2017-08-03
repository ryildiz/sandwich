import {NgModule, ErrorHandler} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {IonicApp, IonicModule, IonicErrorHandler} from 'ionic-angular';
import {MyApp} from './app.component';
import {SandwichPage} from '../pages/sandwich/sandwich';
import {KaydolPage} from '../pages/kaydol/kaydol';
import {LoginPage} from "../pages/login/login";


import {StatusBar} from '@ionic-native/status-bar';
import {SplashScreen} from '@ionic-native/splash-screen';
import {GooglePlus} from '@ionic-native/google-plus';
import {MySandwichesPage} from "../pages/mysandwich/mysandwiches";

@NgModule({
    declarations: [
        MyApp,
        SandwichPage,
        MySandwichesPage,
        KaydolPage,
        LoginPage
    ],
    imports: [
        BrowserModule,
        IonicModule.forRoot(MyApp)
    ],
    bootstrap: [IonicApp],
    entryComponents: [
        MyApp,
        SandwichPage,
        MySandwichesPage,
        KaydolPage,
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