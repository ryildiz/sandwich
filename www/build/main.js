webpackJsonp([0],{

/***/ 106:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 106;

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return KaydolPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__sandwich_sandwich__ = __webpack_require__(192);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var KaydolPage = (function () {
    function KaydolPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    KaydolPage.prototype.goToSandwich = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__sandwich_sandwich__["a" /* SandwichPage */]);
    };
    return KaydolPage;
}());
KaydolPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-kaydol',template:/*ion-inline-start:"D:\ro2\sandwich\src\pages\kaydol\kaydol.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Kaydol\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page2" style="background-color:#795BF3;">\n\n  <ion-card id="kaydol-card22" style="margin-left:0px; margin-right:0px; width: 100%;">\n    <ion-list>\n      <ion-item color="none" id="kaydol-list-item8">\n        <ion-icon name="walk" item-left></ion-icon>\n        Hey yabancı!\n      </ion-item>\n      <ion-item id="kaydol-list-item-container4">\n        <div id="kaydol-markdown6" style="text-align:center;" class="show-list-numbers-and-dots">\n          <p style="margin-top:0px;color:#000000;">\n            Kolay sandwich siparişi için\n          </p>\n        </div>\n        <div id="kaydol-markdown7" style="text-align:center;" class="show-list-numbers-and-dots">\n          <p style="margin-top:0px;color:#000000;">\n            <strong>\n              hemen kaydol!\n            </strong>\n          </p>\n        </div>\n      </ion-item>\n    </ion-list>\n  </ion-card>\n\n  <form id="kaydol-form2">\n\n    <ion-list id="kaydol-list1">\n      <ion-item id="kaydol-input1">\n        <ion-label>\n          Ad soyad\n        </ion-label>\n        <ion-input type="text" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="kaydol-input2">\n        <ion-label>\n          Email\n        </ion-label>\n        <ion-input type="email" placeholder=""></ion-input>\n      </ion-item>\n      <ion-item id="kaydol-input5">\n        <ion-label>\n          Telefon\n        </ion-label>\n        <ion-input type="tel" placeholder="533 123 12 12"></ion-input>\n      </ion-item>\n    </ion-list>\n    <button id="kaydol-button2" ion-button color="stable" block on-click="goToSandwich()">\n      Kaydet\n    </button>\n  </form>\n</ion-content>\n'/*ion-inline-end:"D:\ro2\sandwich\src\pages\kaydol\kaydol.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], KaydolPage);

//# sourceMappingURL=kaydol.js.map

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SandwichPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
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
    function SandwichPage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    return SandwichPage;
}());
SandwichPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-sandwich',template:/*ion-inline-start:"D:\ro2\sandwich\src\pages\sandwich\sandwich.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n      Sandwich\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n<ion-content padding id="page1" style="background-color:#F33562;">\n  <ion-card id="sandwich-card21">\n    <ion-list>\n      <ion-item color="none" id="sandwich-list-item3">\n        <ion-avatar item-left>\n          <img src="assets/img/EgjbpRxhT7aISki0fMjI_sandwich1.jpg" />\n        </ion-avatar>\n        <h2>\n          Sipariş oluştur\n        </h2>\n      </ion-item>\n\n      <form id="sandwich-form1">\n        <ion-item id="sandwich-toggle1">\n          <ion-label>\n            Tam yağlı beyaz peynir\n          </ion-label>\n          <ion-toggle color="positive" checked="false"></ion-toggle>\n        </ion-item>\n        <ion-item id="sandwich-toggle2">\n          <ion-label>\n            Taze kaşar\n          </ion-label>\n          <ion-toggle color="positive" checked="false"></ion-toggle>\n        </ion-item>\n        <ion-item id="sandwich-toggle3">\n          <ion-label>\n            Salam\n          </ion-label>\n          <ion-toggle color="positive" checked="false"></ion-toggle>\n        </ion-item>\n        <ion-item id="sandwich-toggle4">\n          <ion-label>\n            Kıvırcık\n          </ion-label>\n          <ion-toggle color="positive" checked="false"></ion-toggle>\n        </ion-item>\n        <ion-item id="sandwich-toggle5">\n          <ion-label>\n            Dilim domates\n          </ion-label>\n          <ion-toggle color="positive" checked="false"></ion-toggle>\n        </ion-item>\n        <ion-item id="sandwich-toggle6">\n          <ion-label>\n            Halka kırmızı biber\n          </ion-label>\n          <ion-toggle color="positive" checked="false"></ion-toggle>\n        </ion-item>\n        <ion-item id="sandwich-toggle7">\n          <ion-label>\n            Mayonez\n          </ion-label>\n          <ion-toggle color="positive" checked="false"></ion-toggle>\n        </ion-item>\n      </form>\n    </ion-list>\n  </ion-card>\n  <button id="sandwich-button1" ion-button color="positive" block icon-right>\n    Sipariş Ver!\n    <ion-icon name="arrow-round-forward"></ion-icon>\n  </button>\n</ion-content>\n'/*ion-inline-end:"D:\ro2\sandwich\src\pages\sandwich\sandwich.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* NavController */]])
], SandwichPage);

//# sourceMappingURL=sandwich.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_sandwich_sandwich__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_kaydol_kaydol__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(190);
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
            __WEBPACK_IMPORTED_MODULE_4__pages_sandwich_sandwich__["a" /* SandwichPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_kaydol_kaydol__["a" /* KaydolPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */])
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_4__pages_sandwich_sandwich__["a" /* SandwichPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_kaydol_kaydol__["a" /* KaydolPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_kaydol_kaydol__ = __webpack_require__(191);
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
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_kaydol_kaydol__["a" /* KaydolPage */];
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\ro2\sandwich\src\app\app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"D:\ro2\sandwich\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ })

},[193]);
//# sourceMappingURL=main.js.map