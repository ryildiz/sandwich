webpackJsonp([0],{

/***/ 108:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 108;

/***/ }),

/***/ 149:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 149;

/***/ }),

/***/ 192:
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], MySandwichesPage);

//# sourceMappingURL=mysandwiches.js.map

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(213);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 213:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(254);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_google_plus__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_mysandwich_mysandwiches__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_createsandwich_createsandwich__ = __webpack_require__(265);
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

/***/ 254:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_createsandwich_createsandwich__ = __webpack_require__(265);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sandwich_sandwich__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(193);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__["a" /* GooglePlus */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateSandwichPage; });
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


var CreateSandwichPage = (function () {
    function CreateSandwichPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.loginData = this.navParams.get("loginData");
    }
    return CreateSandwichPage;
}());
CreateSandwichPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-createsandwich',template:/*ion-inline-start:"D:\ro\sandwich\src\pages\createsandwich\createsandwich.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Sandviç oluştur</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cards-bg">\n\n\n\n\n\n  <ion-list>\n\n\n\n    <ion-item>\n\n      <ion-select [(ngModel)]="gaming" interface="popover">\n\n        <ion-option value="1">1 dilim</ion-option>\n\n        <ion-option value="2">2 dilim</ion-option>\n\n        <ion-option value="3">3 dilim</ion-option>\n\n        <ion-option value="4">4 dilim</ion-option>\n\n        <ion-option value="5">5 dilim</ion-option>\n\n        <ion-option value="6">6 dilim</ion-option>\n\n        <ion-option value="7">7 dilim</ion-option>\n\n        <ion-option value="8">8 dilim</ion-option>\n\n        <ion-option value="9">9 dilim</ion-option>\n\n        <ion-option value="10">10 dilim</ion-option>\n\n        <ion-option value="11">11 dilim</ion-option>\n\n        <ion-option value="12">12 dilim</ion-option>\n\n      </ion-select>\n\n    </ion-item>\n\n  </ion-list>\n\n\n\n\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Ekmek seçin\n\n    </ion-card-header>\n\n\n\n    <ion-card-content>\n\n\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label>Boyu</ion-label>\n\n          <ion-select [(ngModel)]="ekmektipi" interface="popover">\n\n            <ion-option value="nes">Tam</ion-option>\n\n            <ion-option value="n64">Yarım</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n      <ion-list>\n\n        <ion-item>\n\n          <ion-label>Tipi</ion-label>\n\n          <ion-select [(ngModel)]="ekmekboyu" interface="popover">\n\n            <ion-option value="nes">Tahıllı</ion-option>\n\n            <ion-option value="n64">Beyaz</ion-option>\n\n          </ion-select>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Süsleme\n\n    </ion-card-header>\n\n\n\n    <ion-card-content>\n\n\n\n      <div padding>\n\n        <ion-segment [(ngModel)]="susleme">\n\n          <ion-segment-button value="kittens">\n\n            Kekik\n\n          </ion-segment-button>\n\n          <ion-segment-button value="puppies">\n\n            Zeytin yağı\n\n          </ion-segment-button>\n\n        </ion-segment>\n\n      </div>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Yeşillik\n\n    </ion-card-header>\n\n\n\n    <ion-card-content>\n\n\n\n      <div padding>\n\n        <ion-segment [(ngModel)]="yesillik">\n\n          <ion-segment-button value="kittens">\n\n            Domates\n\n          </ion-segment-button>\n\n          <ion-segment-button value="puppies">\n\n            Salatalık\n\n          </ion-segment-button>\n\n        </ion-segment>\n\n      </div>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n  <ion-card>\n\n    <ion-card-header>\n\n      Sos\n\n    </ion-card-header>\n\n\n\n    <ion-card-content>\n\n\n\n      <div padding>\n\n        <ion-segment [(ngModel)]="sos">\n\n          <ion-segment-button value="kittens">\n\n            Zeytin ezmesi\n\n          </ion-segment-button>\n\n          <ion-segment-button value="puppies">\n\n            Acuka\n\n          </ion-segment-button>\n\n        </ion-segment>\n\n      </div>\n\n\n\n    </ion-card-content>\n\n  </ion-card>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ro\sandwich\src\pages\createsandwich\createsandwich.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], CreateSandwichPage);

//# sourceMappingURL=createsandwich.js.map

/***/ }),

/***/ 99:
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavParams */]])
], SandwichPage);

//# sourceMappingURL=sandwich.js.map

/***/ })

},[194]);
//# sourceMappingURL=main.js.map