webpackJsonp([0],{

/***/ 107:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 107;

/***/ }),

/***/ 148:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 148;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateSandwichPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modalcontent__ = __webpack_require__(265);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CreateSandwichPage = (function () {
    function CreateSandwichPage(navCtrl, modalCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.navParams = navParams;
        this.sandwich = {
            name: String,
            price: String
        };
        this.loginData = this.navParams.get("loginData");
    }
    CreateSandwichPage.prototype.openSaveModal = function () {
        this.sandwich.name = 'Dag deviren';
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modalcontent__["a" /* ModalContentPage */], { 'sandwich': this.sandwich });
        modal.present();
    };
    return CreateSandwichPage;
}());
CreateSandwichPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-createsandwich',template:/*ion-inline-start:"D:\ro\sandwich\src\pages\createsandwich\createsandwich.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Sandviç oluştur</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cards-bg">\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Ekmek\n\n    </ion-card-header>\n\n\n\n      <div>\n\n          <img src="assets/img/ekmek.jpg"/>\n\n      </div>\n\n\n\n    <ion-card-content>\n\n\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label>Boyu</ion-label>\n\n          <ion-select [(ngModel)]="ekmektipi" interface="popover">\n\n            <ion-option value="nes">Tam</ion-option>\n\n            <ion-option value="n64">Yarım</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label>Tipi</ion-label>\n\n          <ion-select [(ngModel)]="ekmekboyu" interface="popover">\n\n            <ion-option value="nes">Tahıllı</ion-option>\n\n            <ion-option value="n64">Beyaz</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Peynir\n\n    </ion-card-header>\n\n\n\n    <div>\n\n      <img src="assets/img/peynir.jpg"/>\n\n    </div>\n\n\n\n\n\n    <ion-card-content>\n\n\n\n      <ion-item-divider></ion-item-divider>\n\n    <ion-item style="padding-left: 0px; padding-bottom: 0px;">\n\n        <ion-label>Beyaz peynir</ion-label>\n\n        <ion-checkbox color="royal"></ion-checkbox>\n\n    </ion-item>\n\n\n\n    <ion-row style="margin-top: -12px; padding-right: 0px;">\n\n    <ion-col style="padding: 0px; margin-left: 24px;">\n\n      <button ion-button icon-left clear small color="secondary">\n\n        <ion-icon name="ios-add-circle-outline"></ion-icon>\n\n        <div>Dilim ekle</div>\n\n      </button>\n\n    </ion-col>\n\n    <ion-col style="padding: 0px;">\n\n      <button ion-button icon-left clear small color="danger">\n\n        <ion-icon name="ios-remove-outline"></ion-icon>\n\n        <div>Dilim azalt</div>\n\n      </button>\n\n    </ion-col>\n\n    <ion-col style="padding: 0px;">\n\n      <button ion-button icon-left clear small>\n\n        <ion-badge item-end>1 dilim</ion-badge>\n\n      </button>\n\n    </ion-col>\n\n\n\n  </ion-row>\n\n\n\n      <ion-item-divider></ion-item-divider>\n\n\n\n      <ion-item style="padding-left: 0px; padding-bottom: 0px;">\n\n        <ion-label>Kaşar peyniri</ion-label>\n\n        <ion-checkbox color="royal"></ion-checkbox>\n\n      </ion-item>\n\n\n\n      <ion-row style="margin-top: -12px; padding-right: 0px;">\n\n        <ion-col style="padding: 0px; margin-left: 24px;">\n\n          <button ion-button icon-left clear small color="secondary">\n\n            <ion-icon name="ios-add-circle-outline"></ion-icon>\n\n            <div>Dilim ekle</div>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col style="padding: 0px;">\n\n          <button ion-button icon-left clear small color="danger">\n\n            <ion-icon name="ios-remove-outline"></ion-icon>\n\n            <div>Dilim azalt</div>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col style="padding: 0px;">\n\n          <button ion-button icon-left clear small>\n\n            <ion-badge item-end>1 dilim</ion-badge>\n\n          </button>\n\n        </ion-col>\n\n\n\n      </ion-row>\n\n\n\n      <ion-item-divider></ion-item-divider>\n\n\n\n      <ion-item style="padding-left: 0px; padding-bottom: 0px;">\n\n        <ion-label>Dil peyniri</ion-label>\n\n        <ion-checkbox color="royal"></ion-checkbox>\n\n      </ion-item>\n\n\n\n      <ion-row style="margin-top: -12px; padding-right: 0px;">\n\n        <ion-col style="padding: 0px; margin-left: 24px;">\n\n          <button ion-button icon-left clear small color="secondary">\n\n            <ion-icon name="ios-add-circle-outline"></ion-icon>\n\n            <div>Dilim ekle</div>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col style="padding: 0px;">\n\n          <button ion-button icon-left clear small color="danger">\n\n            <ion-icon name="ios-remove-outline"></ion-icon>\n\n            <div>Dilim azalt</div>\n\n          </button>\n\n        </ion-col>\n\n        <ion-col style="padding: 0px;">\n\n          <button ion-button icon-left clear small>\n\n            <ion-badge item-end>1 dilim</ion-badge>\n\n          </button>\n\n        </ion-col>\n\n\n\n      </ion-row>\n\n\n\n      <ion-item-divider></ion-item-divider>\n\n\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n\n\n  <ion-list no-border>\n\n\n\n    <ion-list-header lang="tr">\n\n      Yeşillik\n\n    </ion-list-header>\n\n\n\n    <ion-item>\n\n\n\n      <ion-toggle checked="false"></ion-toggle>\n\n      <ion-label>\n\n        Domates\n\n      </ion-label>\n\n      <ion-avatar item-start>\n\n        <img src="assets/img/domates.jpg">\n\n      </ion-avatar>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-toggle checked="false"></ion-toggle>\n\n      <ion-label>\n\n        Salatalık\n\n      </ion-label>\n\n      <ion-avatar item-start>\n\n        <img src="assets/img/salatalık.jpg">\n\n      </ion-avatar>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n\n\n  <ion-list>\n\n\n\n    <ion-list-header>\n\n      Süsleme\n\n    </ion-list-header>\n\n\n\n    <ion-item>\n\n      <ion-toggle checked="true"></ion-toggle>\n\n      <ion-label>\n\n        Kekik\n\n      </ion-label>\n\n      <ion-avatar item-start>\n\n        <img src="assets/img/kekik.jpg">\n\n      </ion-avatar>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-toggle checked="true"></ion-toggle>\n\n      <ion-label>\n\n        Zeytinyağı\n\n      </ion-label>\n\n      <ion-avatar item-start>\n\n        <img src="assets/img/zeytinyagi.jpg">\n\n      </ion-avatar>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n  <ion-list>\n\n\n\n    <ion-list-header>\n\n      Sos\n\n    </ion-list-header>\n\n\n\n    <ion-item>\n\n      <ion-toggle checked="true"></ion-toggle>\n\n      <ion-label>\n\n        Zeytin ezmesi\n\n      </ion-label>\n\n      <ion-avatar item-start>\n\n        <img src="assets/img/zeytinezmesi.jpg">\n\n      </ion-avatar>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-toggle checked="true"></ion-toggle>\n\n      <ion-label>\n\n        Acuka\n\n      </ion-label>\n\n      <ion-avatar item-start>\n\n        <img src="assets/img/acuka.jpg">\n\n      </ion-avatar>\n\n    </ion-item>\n\n\n\n  </ion-list>\n\n\n\n\n\n  <ion-fab right bottom style="margin-bottom:13px;">\n\n    <button ion-fab mini style="width:100px; height: 42px; font-size: 14px;" color="danger">Fiyatı 10 TL</button>\n\n  </ion-fab>\n\n  <ion-item-divider></ion-item-divider>\n\n  <ion-item big color="primary" (click)="openSaveModal()">\n\n    <ion-icon name="share-alt" item-start></ion-icon>\n\n    Sandviç oluştur\n\n  </ion-item>\n\n  <ion-item-divider></ion-item-divider>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ro\sandwich\src\pages\createsandwich\createsandwich.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* ModalController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _c || Object])
], CreateSandwichPage);

var _a, _b, _c;
//# sourceMappingURL=createsandwich.js.map

/***/ }),

/***/ 193:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(212);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 212:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mysandwich_mysandwiches__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_createsandwich_createsandwich__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_createsandwich_modalcontent__ = __webpack_require__(265);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_mysandwich_mysandwiches__["a" /* MySandwichesPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_createsandwich_createsandwich__["a" /* CreateSandwichPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_createsandwich_modalcontent__["a" /* ModalContentPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_8__pages_mysandwich_mysandwiches__["a" /* MySandwichesPage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_createsandwich_createsandwich__["a" /* CreateSandwichPage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_createsandwich_modalcontent__["a" /* ModalContentPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__["a" /* GooglePlus */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 253:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_createsandwich_createsandwich__ = __webpack_require__(191);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        // rootPage:any = LoginPage;
        // rootPage:any = MySandwichesPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_createsandwich_createsandwich__["a" /* CreateSandwichPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\ro\sandwich\src\app\app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"D:\ro\sandwich\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sandwich_sandwich__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginPage = (function () {
    function LoginPage(navCtrl, gplus) {
        this.navCtrl = navCtrl;
        this.gplus = gplus;
        this.userProfile = null;
        console.log("hello mate!");
    }
    LoginPage.prototype.goToSandwich = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sandwich_sandwich__["a" /* SandwichPage */], params);
    };
    LoginPage.prototype.loginUser = function () {
        var _this = this;
        this.gplus.login({
            'webclientid': '1086603815740-ast0hifohjn3kuvj7rc2hlvuslqbms71.apps.googleusercontent.com',
            'offline': true
        }).then(function (res) {
            console.log(res); // holds user image etc
            _this.goToSandwich({ loginData: res });
        }).catch(function (err) { return console.error(err); });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"D:\ro\sandwich\src\pages\login\login.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Login\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <ion-item *ngIf="userProfile">\n\n        <ion-avatar item-left>\n\n            <img [src]="userProfile.photoURL">\n\n        </ion-avatar>\n\n        <h2>{{ userProfile.displayName }}</h2>\n\n        <h3>{{ userProfile.email }}</h3>\n\n    </ion-item>\n\n\n\n    <button ion-button block color="danger" (click)="loginUser()" *ngIf="!userProfile">\n\n        <ion-icon name="logo-googleplus"></ion-icon>\n\n        Login with Google\n\n    </button>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\ro\sandwich\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__["a" /* GooglePlus */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SandwichPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SandwichPage = (function () {
    function SandwichPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loginData = this.navParams.get("loginData");
    }
    return SandwichPage;
}());
SandwichPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sandwich',template:/*ion-inline-start:"D:\ro\sandwich\src\pages\sandwich\sandwich.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Sandviçlerim\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding style="background-color:#F33562;">\n\n\n\n  <ion-item *ngIf="loginData">\n\n    <ion-avatar item-left>\n\n      <img [src]="loginData.imageUrl">\n\n    </ion-avatar>\n\n    <h2>{{ loginData.displayName }}</h2>\n\n    <h3>{{ loginData.email }}</h3>\n\n  </ion-item>\n\n\n\n\n\n  <ion-card id="sandwich-card21">\n\n    <ion-list>\n\n      <ion-item color="none" id="sandwich-list-item3">\n\n        <ion-avatar item-left>\n\n          <img src="assets/img/sandwich.jpg" />\n\n        </ion-avatar>\n\n        <h2>\n\n          Sipariş oluştur\n\n        </h2>\n\n      </ion-item>\n\n\n\n      <form id="sandwich-form1">\n\n        <ion-item id="sandwich-toggle1">\n\n          <ion-label>\n\n            Tam yağlı beyaz peynir\n\n          </ion-label>\n\n          <ion-toggle color="positive" checked="false"></ion-toggle>\n\n        </ion-item>\n\n        <ion-item id="sandwich-toggle2">\n\n          <ion-label>\n\n            Taze kaşar\n\n          </ion-label>\n\n          <ion-toggle color="positive" checked="false"></ion-toggle>\n\n        </ion-item>\n\n        <ion-item id="sandwich-toggle3">\n\n          <ion-label>\n\n            Salam\n\n          </ion-label>\n\n          <ion-toggle color="positive" checked="false"></ion-toggle>\n\n        </ion-item>\n\n        <ion-item id="sandwich-toggle4">\n\n          <ion-label>\n\n            Kıvırcık\n\n          </ion-label>\n\n          <ion-toggle color="positive" checked="false"></ion-toggle>\n\n        </ion-item>\n\n        <ion-item id="sandwich-toggle5">\n\n          <ion-label>\n\n            Dilim domates\n\n          </ion-label>\n\n          <ion-toggle color="positive" checked="false"></ion-toggle>\n\n        </ion-item>\n\n        <ion-item id="sandwich-toggle6">\n\n          <ion-label>\n\n            Halka kırmızı biber\n\n          </ion-label>\n\n          <ion-toggle color="positive" checked="false"></ion-toggle>\n\n        </ion-item>\n\n        <ion-item id="sandwich-toggle7">\n\n          <ion-label>\n\n            Mayonez\n\n          </ion-label>\n\n          <ion-toggle color="positive" checked="false"></ion-toggle>\n\n        </ion-item>\n\n      </form>\n\n    </ion-list>\n\n  </ion-card>\n\n  <button id="sandwich-button1" ion-button color="positive" block icon-right>\n\n    Sipariş Ver!\n\n    <ion-icon name="arrow-round-forward"></ion-icon>\n\n  </button>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ro\sandwich\src\pages\sandwich\sandwich.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], SandwichPage);

//# sourceMappingURL=sandwich.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MySandwichesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MySandwichesPage = (function () {
    function MySandwichesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loginData = this.navParams.get("loginData");
    }
    return MySandwichesPage;
}());
MySandwichesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mysandwiches',template:/*ion-inline-start:"D:\ro\sandwich\src\pages\mysandwich\mysandwiches.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Sandviçlerim</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cards-bg">\n\n\n\n    <ion-card>\n\n\n\n    <div>\n\n      <img src="assets/img/sandwich.jpg"/>\n\n    </div>\n\n\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        Dağ Deviren\n\n      </ion-card-title>\n\n      <p>\n\n        1 dilim dil peyniri, 1 dilim kaşar peyniri, 1 dilim beyaz peynir, 2 dilim salam, 2 dilim jambon, zeytin ezmesi, kekik, zeytin yağı.\n\n      </p>\n\n    </ion-card-content>\n\n\n\n    <ion-item big color="primary">\n\n      <ion-icon name="share-alt" item-start></ion-icon>\n\n      Hemen sipariş ver\n\n      <ion-badge item-end>10TL</ion-badge>\n\n    </ion-item>\n\n\n\n    <ion-row no-padding>\n\n      <ion-col>\n\n        <button ion-button clear small color="secondary" icon-start>\n\n          <ion-icon name=\'md-create\'></ion-icon>\n\n          Düzenle        </button>\n\n      </ion-col>\n\n      <ion-col text-right>\n\n        <button ion-button clear small color="danger" icon-start>\n\n          <ion-icon name=\'trash\'></ion-icon>\n\n          Sil\n\n        </button>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ro\sandwich\src\pages\mysandwich\mysandwiches.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
], MySandwichesPage);

//# sourceMappingURL=mysandwiches.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ModalContentPage = (function () {
    function ModalContentPage(platform, params, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.sandwich = this.params.get('sandwich');
    }
    ModalContentPage.prototype.saveSandwich = function () {
        this.dismiss();
    };
    ModalContentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return ModalContentPage;
}());
ModalContentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-modalcontent',template:/*ion-inline-start:"D:\ro\sandwich\src\pages\createsandwich\modalcontent.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Sandviçinize isim verin</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cards-bg">\n\n\n\n  {{sandwich.name}}\n\n\n\n  <ion-item-divider></ion-item-divider>\n\n  <ion-item big color="primary" (click)="saveSandwich()">\n\n    <ion-icon name="share-alt" item-start></ion-icon>\n\n    Kaydet\n\n  </ion-item>\n\n  <ion-item-divider></ion-item-divider>\n\n\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ro\sandwich\src\pages\createsandwich\modalcontent.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* ViewController */]) === "function" && _c || Object])
], ModalContentPage);

var _a, _b, _c;
//# sourceMappingURL=modalcontent.js.map

/***/ })

},[193]);
//# sourceMappingURL=main.js.map