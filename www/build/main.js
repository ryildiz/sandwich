webpackJsonp([0],{

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mysandwich_mysandwiches__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createsandwich_createsandwich__ = __webpack_require__(146);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TabsPage = (function () {
    function TabsPage() {
        // this tells the tabs component which Pages
        // should be each tab's root Page
        this.sandivichTab = __WEBPACK_IMPORTED_MODULE_1__mysandwich_mysandwiches__["a" /* MySandwichesPage */];
        this.createSandwichTab = __WEBPACK_IMPORTED_MODULE_2__createsandwich_createsandwich__["a" /* CreateSandwichPage */];
        console.log("I am called!");
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\ro\sandwich\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n    <ion-tab [root]="sandivichTab" tabTitle="Sandviçlerim" tabIcon="restaurant"></ion-tab>\n\n    <ion-tab [root]="createSandwichTab" tabTitle="Sandviç oluştur" tabIcon="add-circle"></ion-tab>\n\n    <ion-tab [root]="accountTab" tabTitle="Hesap" tabIcon="person"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\ro\sandwich\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 146:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateSandwichPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modalcontent__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_Sandwich__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_SndwichLabels__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_sandwich_provider__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_json2typescript__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_json2typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_json2typescript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_loading_provider__ = __webpack_require__(83);
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
    function CreateSandwichPage(navCtrl, translate, modalCtrl, loading, sandwichProvider, navParams) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.modalCtrl = modalCtrl;
        this.loading = loading;
        this.sandwichProvider = sandwichProvider;
        this.navParams = navParams;
        this.loading.startLoading();
        this.loginData = this.navParams.get("loginData");
        this.snapshot = this.navParams.get("snapshot");
        if (this.snapshot) {
            var jsonConvert = new __WEBPACK_IMPORTED_MODULE_7_json2typescript__["JsonConvert"]();
            jsonConvert.operationMode = __WEBPACK_IMPORTED_MODULE_7_json2typescript__["OperationMode"].LOGGING; // print some debug data
            jsonConvert.ignorePrimitiveChecks = true; // don't allow assigning number to string etc.
            jsonConvert.valueCheckingMode = __WEBPACK_IMPORTED_MODULE_7_json2typescript__["ValueCheckingMode"].ALLOW_NULL; // never allow null
            this.sandwich = jsonConvert.deserializeObject(this.snapshot.val(), __WEBPACK_IMPORTED_MODULE_3__model_Sandwich__["a" /* Sandwich */]);
            this.sandwich.fiyat = this.snapshot.val().fiyat;
        }
        else {
            this.sandwich = new __WEBPACK_IMPORTED_MODULE_3__model_Sandwich__["a" /* Sandwich */]();
        }
        this.sandwich.sandwichProvider = sandwichProvider;
        this.loading.dismiss(true);
    }
    CreateSandwichPage.prototype.openSaveModal = function () {
        this.sandwich.setIcerik(new __WEBPACK_IMPORTED_MODULE_5__model_SndwichLabels__["a" /* SandwichLabels */](this.translate));
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modalcontent__["a" /* ModalContentPage */], { 'sandwich': this.sandwich, 'snapshotkey': (this.snapshot ? this.snapshot.key : undefined) });
        modal.present();
    };
    return CreateSandwichPage;
}());
CreateSandwichPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-createsandwich',template:/*ion-inline-start:"D:\ro\sandwich\src\pages\createsandwich\createsandwich.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-title>Sandviç oluştur</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n\n<ion-content class="cards-bg">\n\n  <ion-card>\n    <ion-card-header>\n      Ekmek\n    </ion-card-header>\n\n      <div>\n          <img src="assets/img/ekmek.jpg"/>\n      </div>\n\n    <ion-card-content>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>Boyu</ion-label>\n          <ion-select [(ngModel)]="sandwich.ekmekboyu" (ionChange)="sandwich.updatePrice()" interface="popover">\n            <ion-option value="tam">Tam</ion-option>\n            <ion-option value="yarim">Yarım</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>Tipi</ion-label>\n          <ion-select [(ngModel)]="sandwich.ekmektipi" (ionChange)="sandwich.updatePrice()" interface="popover">\n            <ion-option value="tahilli">Tahıllı</ion-option>\n            <ion-option value="beyaz">Beyaz</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card>\n    <ion-card-header>\n      Peynir\n    </ion-card-header>\n\n    <div>\n      <img src="assets/img/peynir.jpg"/>\n    </div>\n\n\n    <ion-card-content>\n\n      <ion-item-divider></ion-item-divider>\n    <ion-item style="padding-left: 0px; padding-bottom: 0px;">\n        <ion-label>Beyaz peynir</ion-label>\n        <ion-checkbox color="royal" [(ngModel)]="sandwich.peynir.beyaz"  (ionChange)="sandwich.updatePrice()"></ion-checkbox>\n    </ion-item>\n\n    <ion-row style="margin-top: -12px; padding-right: 0px;">\n    <ion-col style="padding: 0px; margin-left: 24px;">\n      <button ion-button icon-left clear small color="secondary" (click)="sandwich.beyazArtir()">\n        <ion-icon name="ios-add-circle-outline"></ion-icon>\n        <div>Dilim ekle</div>\n      </button>\n    </ion-col>\n    <ion-col style="padding: 0px;">\n      <button ion-button icon-left clear small color="danger">\n        <ion-icon name="ios-remove-outline"></ion-icon>\n        <div>Dilim azalt</div>\n      </button>\n    </ion-col>\n    <ion-col style="padding: 0px;">\n      <button ion-button icon-left clear small (click)="sandwich.beyazAzalt()">\n        <ion-badge item-end>{{sandwich.peynir.beyazdilimsayisi}} dilim</ion-badge>\n      </button>\n    </ion-col>\n\n  </ion-row>\n\n      <ion-item-divider></ion-item-divider>\n\n      <ion-item style="padding-left: 0px; padding-bottom: 0px;">\n        <ion-label>Kaşar peyniri</ion-label>\n        <ion-checkbox color="royal" [(ngModel)]="sandwich.peynir.kasar"></ion-checkbox>\n      </ion-item>\n\n      <ion-row style="margin-top: -12px; padding-right: 0px;">\n        <ion-col style="padding: 0px; margin-left: 24px;">\n          <button ion-button icon-left clear small color="secondary" (click)="sandwich.kasarArtir()">\n            <ion-icon name="ios-add-circle-outline"></ion-icon>\n            <div>Dilim ekle</div>\n          </button>\n        </ion-col>\n        <ion-col style="padding: 0px;">\n          <button ion-button icon-left clear small color="danger" (click)="sandwich.kasarAzalt()">\n            <ion-icon name="ios-remove-outline"></ion-icon>\n            <div>Dilim azalt</div>\n          </button>\n        </ion-col>\n        <ion-col style="padding: 0px;">\n          <button ion-button icon-left clear small>\n            <ion-badge item-end>{{sandwich.peynir.kasardilimsayisi}} dilim</ion-badge>\n          </button>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-item-divider></ion-item-divider>\n\n      <ion-item style="padding-left: 0px; padding-bottom: 0px;">\n        <ion-label>Dil peyniri</ion-label>\n        <ion-checkbox color="royal" [(ngModel)]="sandwich.peynir.dil"></ion-checkbox>\n      </ion-item>\n\n      <ion-row style="margin-top: -12px; padding-right: 0px;">\n        <ion-col style="padding: 0px; margin-left: 24px;">\n          <button ion-button icon-left clear small color="secondary" (click)="sandwich.dilArtir()">\n            <ion-icon name="ios-add-circle-outline"></ion-icon>\n            <div>Dilim ekle</div>\n          </button>\n        </ion-col>\n        <ion-col style="padding: 0px;">\n          <button ion-button icon-left clear small color="danger" (click)="sandwich.dilAzalt()">\n            <ion-icon name="ios-remove-outline"></ion-icon>\n            <div>Dilim azalt</div>\n          </button>\n        </ion-col>\n        <ion-col style="padding: 0px;">\n          <button ion-button icon-left clear small>\n            <ion-badge item-end>{{sandwich.peynir.dildilimsayisi}} dilim</ion-badge>\n          </button>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-item-divider></ion-item-divider>\n\n\n    </ion-card-content>\n  </ion-card>\n\n\n\n  <ion-list no-border>\n\n    <ion-list-header lang="tr">\n      Yeşillik\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-toggle [(ngModel)]="sandwich.yesillik.domates" (ionChange)="sandwich.updatePrice()" ></ion-toggle>\n      <ion-label>\n        Domates\n      </ion-label>\n      <ion-avatar item-start>\n        <img src="assets/img/domates.jpg">\n      </ion-avatar>\n    </ion-item>\n\n    <ion-item>\n      <ion-toggle [(ngModel)]="sandwich.yesillik.salatalik" (ionChange)="sandwich.updatePrice()"></ion-toggle>\n      <ion-label>\n        Salatalık\n      </ion-label>\n      <ion-avatar item-start>\n        <img src="assets/img/salatalık.jpg">\n      </ion-avatar>\n    </ion-item>\n\n  </ion-list>\n\n\n  <ion-list>\n\n    <ion-list-header>\n      Süsleme\n    </ion-list-header>\n\n    <ion-item>\n      <ion-toggle [(ngModel)]="sandwich.susleme.kekik" (ionChange)="sandwich.updatePrice()"></ion-toggle>\n      <ion-label>\n        Kekik\n      </ion-label>\n      <ion-avatar item-start>\n        <img src="assets/img/kekik.jpg">\n      </ion-avatar>\n    </ion-item>\n\n    <ion-item>\n      <ion-toggle [(ngModel)]="sandwich.susleme.zeytinyagi" (ionChange)="sandwich.updatePrice()"></ion-toggle>\n      <ion-label>\n        Zeytinyağı\n      </ion-label>\n      <ion-avatar item-start>\n        <img src="assets/img/zeytinyagi.jpg">\n      </ion-avatar>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>\n      Sos\n    </ion-list-header>\n\n    <ion-item>\n      <ion-toggle [(ngModel)]="sandwich.sossos.zeytinezmesi" (ionChange)="sandwich.updatePrice()"></ion-toggle>\n      <ion-label>\n        Zeytin ezmesi\n      </ion-label>\n      <ion-avatar item-start>\n        <img src="assets/img/zeytinezmesi.jpg">\n      </ion-avatar>\n    </ion-item>\n\n    <ion-item>\n      <ion-toggle [(ngModel)]="sandwich.sossos.acuka" (ionChange)="sandwich.updatePrice()"></ion-toggle>\n      <ion-label>\n        Acuka\n      </ion-label>\n      <ion-avatar item-start>\n        <img src="assets/img/acuka.jpg">\n      </ion-avatar>\n    </ion-item>\n\n  </ion-list>\n\n\n  <ion-fab right bottom style="margin-bottom:-16px;" *ngIf="sandwich.fiyat">\n    <button ion-fab mini style="width:100px; height: 42px; font-size: 14px;" color="danger">Fiyatı {{sandwich.fiyat}} TL</button>\n  </ion-fab>\n  <ion-item big color="primary" (click)="openSaveModal()">\n    <ion-icon name="share-alt" item-start></ion-icon>\n    Sandviç oluştur\n  </ion-item>\n\n\n</ion-content>\n'/*ion-inline-end:"D:\ro\sandwich\src\pages\createsandwich\createsandwich.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_8__providers_loading_provider__["a" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_6__providers_sandwich_provider__["a" /* SandwichProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], CreateSandwichPage);

//# sourceMappingURL=createsandwich.js.map

/***/ }),

/***/ 156:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 156;

/***/ }),

/***/ 197:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 197;

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(289);
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
    function LoginPage(navCtrl, gplus, facebook) {
        this.navCtrl = navCtrl;
        this.gplus = gplus;
        this.facebook = facebook;
        this.userProfile = null;
    }
    LoginPage.prototype.goToSandwich = function (params) {
        if (!params)
            params = {};
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */], params);
    };
    LoginPage.prototype.loginUserG = function () {
        var _this = this;
        this.gplus.login({
            'webclientid': '1086603815740-ast0hifohjn3kuvj7rc2hlvuslqbms71.apps.googleusercontent.com',
            'offline': true
        }).then(function (res) {
            console.log(res); // holds user image etc
            _this.goToSandwich({ loginData: res });
        }).catch(function (err) { return console.error(err); });
    };
    LoginPage.prototype.loginUserF = function () {
        var _this = this;
        this.facebook.login(['public_profile', 'email']).then(function (res) {
            _this.facebook.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(function (profile) {
                _this.userProfile = { email: profile['email'], displayName: profile['name'], imageUrl: profile['picture_large']['data']['url'] };
                _this.goToSandwich({ loginData: _this.userProfile });
            });
        }).catch(function (err) { return console.error(err); });
    };
    return LoginPage;
}());
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"D:\ro\sandwich\src\pages\login\login.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Login\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding class="bgcolor">\n\n\n\n    <div style="padding: 1em;" >\n\n\n\n        <img src="assets/img/logo.jpg"/>\n\n\n\n        <div>\n\n\n\n            <h4>Sandiviç</h4>\n\n            <p>\n\n                Seç, tasarla, sıra bekleme, hemen ye!\n\n            </p>\n\n\n\n            <button ion-button block color="danger" (click)="loginUserG()">\n\n                <ion-icon style="font-size:32px;" name="logo-googleplus"></ion-icon>\n\n                <span class="text-tips">Google Login</span>\n\n            </button>\n\n\n\n            <button ion-button block style="margin-top:8px; backgroun-color:\'#3b5998\'" (click)="loginUserF()">\n\n                <ion-icon style="font-size:32px;" name="logo-facebook"></ion-icon>\n\n                <span class="text-tips">Facebook Login</span>\n\n            </button>\n\n\n\n        </div>\n\n    </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\ro\sandwich\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 241:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MySandwichesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_json2typescript__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_json2typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_json2typescript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createsandwich_createsandwich__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_loading_provider__ = __webpack_require__(83);
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
    function MySandwichesPage(navCtrl, fdb, loading, navParams) {
        this.navCtrl = navCtrl;
        this.fdb = fdb;
        this.loading = loading;
        this.navParams = navParams;
        this.loading.startLoading();
        this.loginData = this.navParams.get("loginData");
        var jsonConvert = new __WEBPACK_IMPORTED_MODULE_3_json2typescript__["JsonConvert"]();
        jsonConvert.operationMode = __WEBPACK_IMPORTED_MODULE_3_json2typescript__["OperationMode"].LOGGING; // print some debug data
        jsonConvert.ignorePrimitiveChecks = true; // don't allow assigning number to string etc.
        jsonConvert.valueCheckingMode = __WEBPACK_IMPORTED_MODULE_3_json2typescript__["ValueCheckingMode"].ALLOW_NULL; // never allow null
        try {
            this.sandwichList = this.fdb.list("/users/1502547025511/", { preserveSnapshot: true });
        }
        catch (e) {
            this.loading.dismiss(false);
        }
        this.loading.dismiss(true);
    }
    MySandwichesPage.prototype.edit = function (snapshot) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__createsandwich_createsandwich__["a" /* CreateSandwichPage */], { 'snapshot': snapshot });
    };
    MySandwichesPage.prototype.delete = function (sandwich) {
        this.loading.startLoading();
        try {
            this.fdb.list("/users/1502547025511/").remove(sandwich.key);
            this.loading.dismiss(true);
        }
        catch (e) {
            this.loading.dismiss(false);
        }
    };
    return MySandwichesPage;
}());
MySandwichesPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-mysandwiches',template:/*ion-inline-start:"D:\ro\sandwich\src\pages\mysandwich\mysandwiches.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-title>Sandviçlerim</ion-title>\n\n    </ion-toolbar>\n\n\n\n</ion-header>\n\n\n\n<ion-content class="cards-bg">\n\n\n\n    <ion-list>\n\n\n\n        <ion-item *ngFor="let sandwich of sandwichList | async">\n\n\n\n\n\n    <ion-card>\n\n\n\n    <div>\n\n      <img src="assets/img/sandwich.jpg"/>\n\n    </div>\n\n\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n          <h2>{{sandwich.val().name}} </h2>\n\n      </ion-card-title>\n\n      <p text-wrap>\n\n          {{sandwich.val().icerik}}\n\n      </p>\n\n    </ion-card-content>\n\n\n\n    <ion-item big color="primary">\n\n      <ion-icon name="share-alt" item-start></ion-icon>\n\n      Hemen sipariş ver\n\n      <ion-badge item-end>{{sandwich.val().fiyat}}  TL</ion-badge>\n\n    </ion-item>\n\n\n\n    <ion-row no-padding>\n\n      <ion-col>\n\n        <button ion-button clear small color="secondary" icon-start (click)="edit(sandwich)">\n\n          <ion-icon name=\'md-create\'></ion-icon>\n\n          Düzenle        </button>\n\n      </ion-col>\n\n      <ion-col text-right>\n\n        <button ion-button clear small color="danger" icon-start (click)="delete(sandwich)">\n\n          <ion-icon name=\'trash\'></ion-icon>\n\n          Sil\n\n        </button>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-card>\n\n\n\n\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ro\sandwich\src\pages\mysandwich\mysandwiches.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_5__providers_loading_provider__["a" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], MySandwichesPage);

//# sourceMappingURL=mysandwiches.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_json2typescript__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_json2typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_json2typescript__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_loading_provider__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(137);
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
    function ModalContentPage(platform, params, fdb, navCtrl, loading, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.fdb = fdb;
        this.navCtrl = navCtrl;
        this.loading = loading;
        this.viewCtrl = viewCtrl;
        this.loginData = {
            displayName: String,
            email: String,
            familyName: String,
            givenName: String,
            imageUrl: String,
            userId: String
        };
        this.sandwich = this.params.get('sandwich');
        this.snapshotkey = this.params.get('snapshotkey');
        this.loginData.userId = Date.now().valueOf();
    }
    ModalContentPage.prototype.saveSandwich = function () {
        this.loading.startLoading();
        var jsonConvert = new __WEBPACK_IMPORTED_MODULE_3_json2typescript__["JsonConvert"]();
        jsonConvert.operationMode = __WEBPACK_IMPORTED_MODULE_3_json2typescript__["OperationMode"].LOGGING; // print some debug data
        jsonConvert.ignorePrimitiveChecks = true; // don't allow assigning number to string etc.
        jsonConvert.valueCheckingMode = __WEBPACK_IMPORTED_MODULE_3_json2typescript__["ValueCheckingMode"].ALLOW_NULL; // never allow null
        var serializedObj = jsonConvert.serialize(this.sandwich);
        try {
            if (this.snapshotkey)
                this.fdb.list("/users/1502547025511/").update(this.snapshotkey, serializedObj);
            else
                this.fdb.list("/users/1502547025511/").push(serializedObj);
        }
        catch (e) {
            this.loading.dismiss(false);
        }
        this.loading.dismiss(true);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */], {});
    };
    ModalContentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return ModalContentPage;
}());
ModalContentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-modalcontent',template:/*ion-inline-start:"D:\ro\sandwich\src\pages\createsandwich\modalcontent.html"*/'\n\n<ion-header>\n\n  <ion-toolbar>\n\n    <ion-title>Sandviç kayıt</ion-title>\n\n  </ion-toolbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="cards-bg">\n\n\n\n  <ion-card>\n\n\n\n    <div>\n\n      <img src="assets/img/sandwich.jpg"/>\n\n    </div>\n\n\n\n    <ion-card-content>\n\n\n\n      <ion-list>\n\n\n\n        <ion-item>\n\n          <ion-input type="text" placeholder="Sandviçinize isim verin ..." [(ngModel)]="sandwich.name"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n      <ion-item>\n\n      <ion-label text-wrap>\n\n       İçerik: {{sandwich.icerik}}\n\n      </ion-label>\n\n      </ion-item>\n\n\n\n      <ion-row no-padding>\n\n        <ion-col>\n\n          <button ion-button round medium color="primary" icon-start (click)="saveSandwich()">\n\n            <ion-icon name=\'share-alt\'></ion-icon>\n\n            Kaydet        </button>\n\n        </ion-col>\n\n        <ion-col text-right>\n\n          <button ion-button round medium color="danger" icon-start (click)="dismiss()">\n\n            <ion-icon name=\'ios-undo-outline\'></ion-icon>\n\n            İptal\n\n          </button>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n\n\n      <ion-fab right top *ngIf="sandwich.fiyat">\n\n        <button ion-fab color="danger" style="width: 86px;">\n\n          <ion-label>{{sandwich.fiyat}} TL</ion-label>\n\n        </button>\n\n      </ion-fab>\n\n\n\n\n\n      <!--<ion-item medium color="primary" (click)="saveSandwich()">-->\n\n        <!--<ion-icon name="share-alt" item-start></ion-icon>-->\n\n        <!--Kaydet-->\n\n        <!--<ion-badge item-end>{{sandwich.fiyat}} TL</ion-badge>-->\n\n      <!--</ion-item>-->\n\n\n\n      <!--<ion-item small color="secondary" (click)="dismiss()">-->\n\n        <!--<ion-icon name="ios-undo-outline" item-start></ion-icon>-->\n\n        <!--İptal-->\n\n      <!--</ion-item>-->\n\n\n\n    </ion-card-content>\n\n\n\n\n\n\n\n\n\n\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ro\sandwich\src\pages\createsandwich\modalcontent.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_loading_provider__["a" /* LoadingProvider */],
        __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ViewController */]])
], ModalContentPage);

//# sourceMappingURL=modalcontent.js.map

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SandwichProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SandwichProvider = (function () {
    function SandwichProvider(fdb) {
        this.fdb = fdb;
    }
    SandwichProvider.prototype.updatePrice = function (sandwich) {
        sandwich.fiyat = Math.round(Math.random() * 100);
        // TODO:
        console.log('todo ...');
    };
    return SandwichProvider;
}());
SandwichProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_angularfire2_database__["a" /* AngularFireDatabase */]])
], SandwichProvider);

//# sourceMappingURL=sandwich-provider.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(306);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 306:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(346);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_plus__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_mysandwich_mysandwiches__ = __webpack_require__(241);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_createsandwich_createsandwich__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_createsandwich_modalcontent__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_facebook__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_angularfire2__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_firebase_test_firebasetest__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__angular_http__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_sandwich_provider__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_loading_provider__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





















var config = {
    apiKey: "AIzaSyA730uys6aEhWaQjgbiqxxPtovkqg3psgE",
    authDomain: "sandwich-f5301.firebaseapp.com",
    databaseURL: "https://sandwich-f5301.firebaseio.com",
    projectId: "sandwich-f5301",
    storageBucket: "sandwich-f5301.appspot.com",
    messagingSenderId: "902230738570"
};
function createTranslateLoader(http) {
    return new __WEBPACK_IMPORTED_MODULE_7__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
}
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_mysandwich_mysandwiches__["a" /* MySandwichesPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_createsandwich_createsandwich__["a" /* CreateSandwichPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_createsandwich_modalcontent__["a" /* ModalContentPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_firebase_test_firebasetest__["a" /* FirebaseTestPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_18__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_6__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_18__angular_http__["a" /* Http */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_16_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_15_angularfire2__["a" /* AngularFireModule */].initializeApp(config)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_11__pages_mysandwich_mysandwiches__["a" /* MySandwichesPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_createsandwich_createsandwich__["a" /* CreateSandwichPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_createsandwich_modalcontent__["a" /* ModalContentPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_firebase_test_firebasetest__["a" /* FirebaseTestPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_14__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_19__providers_sandwich_provider__["a" /* SandwichProvider */],
            __WEBPACK_IMPORTED_MODULE_20__providers_loading_provider__["a" /* LoadingProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            {
                provide: __WEBPACK_IMPORTED_MODULE_18__angular_http__["a" /* Http */],
                useFactory: function (backend, defaultOptions) { return new __WEBPACK_IMPORTED_MODULE_18__angular_http__["a" /* Http */](backend, defaultOptions); },
                deps: [__WEBPACK_IMPORTED_MODULE_18__angular_http__["d" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_18__angular_http__["c" /* RequestOptions */]]
            }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 346:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(84);
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
    // rootPage:any = MySandwichesPage;
    // rootPage:any = CreateSandwichPage;
    function MyApp(platform, translate, statusBar, splashScreen) {
        this.translate = translate;
        // rootPage:any = TabsPage;
        // rootPage:any = FirebaseTestPage;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        this.initTranslation();
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp.prototype.initTranslation = function () {
        var userLang = navigator.language.split('-')[0]; // use navigator lang if available
        userLang = /(en|tr)/gi.test(userLang) ? userLang : 'tr';
        // userLang = 'en';
        // this language will be used as a fallback when a translation isn't found in the current language
        this.translate.setDefaultLang('tr');
        // the lang to use, if the lang isn't available, it will use the current loader to get them
        this.translate.use(userLang);
    };
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\ro\sandwich\src\app\app.html"*/'<ion-nav #mainContent [root]="rootPage"></ion-nav>'/*ion-inline-end:"D:\ro\sandwich\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 426:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sandwich; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_json2typescript__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_json2typescript___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_json2typescript__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Sandwich = (function () {
    function Sandwich() {
        this.name = '';
        this.icerik = '';
        this.ekmektipi = 'tahilli';
        this.ekmekboyu = 'tam';
        this.peynir = { beyaz: false, beyazdilimsayisi: 1, kasar: false, kasardilimsayisi: 1, dil: false, dildilimsayisi: 1 };
        this.yesillik = { domates: false, salatalik: false };
        this.sossos = { zeytinezmesi: false, acuka: false };
        this.susleme = { kekik: false, zeytinyagi: false };
    }
    Sandwich.prototype.updatePrice = function () {
        this.sandwichProvider.updatePrice(this);
    };
    ;
    Sandwich.prototype.dilArtir = function () {
        if (this.peynir.dildilimsayisi < this.maxdilim()) {
            this.peynir.dildilimsayisi++;
            this.updatePrice();
        }
    };
    ;
    Sandwich.prototype.dilAzalt = function () {
        if (this.peynir.dildilimsayisi > 1) {
            this.peynir.dildilimsayisi--;
            this.updatePrice();
        }
    };
    ;
    Sandwich.prototype.beyazArtir = function () {
        if (this.peynir.beyazdilimsayisi < this.maxdilim()) {
            this.peynir.beyazdilimsayisi++;
            this.updatePrice();
        }
    };
    ;
    Sandwich.prototype.beyazAzalt = function () {
        if (this.peynir.beyazdilimsayisi > 1) {
            this.peynir.beyazdilimsayisi--;
            this.updatePrice();
        }
    };
    ;
    Sandwich.prototype.kasarArtir = function () {
        if (this.peynir.kasardilimsayisi < this.maxdilim()) {
            this.peynir.kasardilimsayisi++;
            this.updatePrice();
        }
    };
    ;
    Sandwich.prototype.kasarAzalt = function () {
        if (this.peynir.kasardilimsayisi > 1) {
            this.peynir.kasardilimsayisi--;
            this.updatePrice();
        }
    };
    ;
    Sandwich.prototype.maxdilim = function () {
        return 10;
    };
    ;
    Sandwich.prototype.setIcerik = function (labels) {
        var SPACE = ' ';
        this.icerik =
            (this.ekmekboyu === 'tam' ? 'Tam' : labels.yarim) + SPACE + (this.ekmektipi === 'tahilli' ? labels.tahilli : 'beyaz') + SPACE + 'ekmek,' + SPACE +
                (this.peynir ? (this.peynir.beyaz ? this.peynir.beyazdilimsayisi + SPACE + 'dilim beyaz peynir,' + SPACE : '') : '') +
                (this.peynir ? (this.peynir.kasar ? this.peynir.kasardilimsayisi + SPACE + 'dilim ' + labels.kasar + ' peyniri,' + SPACE : '') : '') +
                (this.peynir ? (this.peynir.dil ? this.peynir.dildilimsayisi + SPACE + 'dilim dil peyniri,' + SPACE : '') : '') +
                (this.yesillik ? (this.yesillik.domates ? 'domates,' + SPACE : '') : '') +
                (this.yesillik ? (this.yesillik.salatalik ? labels.salatalik + ',' + SPACE : '') : '') +
                (this.susleme ? (this.susleme.kekik ? 'kekik,' + SPACE : '') : '') +
                (this.susleme ? (this.susleme.zeytinyagi ? labels.zeytinyagi + ',' + SPACE : '') : '') +
                (this.sossos ? (this.sossos.zeytinezmesi ? 'zeytin ezmesi,' + SPACE : '') : '') +
                (this.sossos ? (this.sossos.acuka ? 'acuka' + SPACE : '') : '');
        this.icerik = this.icerik && this.icerik.trim().endsWith(',') ? this.icerik.substr(0, this.icerik.lastIndexOf(',')) : this.icerik;
        return this.icerik;
    };
    ;
    return Sandwich;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonProperty"])("name", String),
    __metadata("design:type", String)
], Sandwich.prototype, "name", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonProperty"])("icerik", String),
    __metadata("design:type", String)
], Sandwich.prototype, "icerik", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonProperty"])("ekmektipi", String),
    __metadata("design:type", String)
], Sandwich.prototype, "ekmektipi", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonProperty"])("ekmekboyu", String),
    __metadata("design:type", String)
], Sandwich.prototype, "ekmekboyu", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonProperty"])("peynir", Object),
    __metadata("design:type", Object)
], Sandwich.prototype, "peynir", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonProperty"])("yesillik", Object),
    __metadata("design:type", Object)
], Sandwich.prototype, "yesillik", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonProperty"])("sossos", Object),
    __metadata("design:type", Object)
], Sandwich.prototype, "sossos", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonProperty"])("susleme", Object),
    __metadata("design:type", Object)
], Sandwich.prototype, "susleme", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonProperty"])("fiyat", Number),
    __metadata("design:type", Number)
], Sandwich.prototype, "fiyat", void 0);
Sandwich = __decorate([
    __WEBPACK_IMPORTED_MODULE_0_json2typescript__["JsonObject"],
    __metadata("design:paramtypes", [])
], Sandwich);

//# sourceMappingURL=Sandwich.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SandwichLabels; });
var SandwichLabels = (function () {
    function SandwichLabels(translate) {
        var _this = this;
        translate.get('yarim').subscribe(function (value) { _this.yarim = value; });
        translate.get('tahilli').subscribe(function (value) { _this.tahilli = value; });
        translate.get('kasar').subscribe(function (value) { _this.kasar = value; });
        translate.get('salatalik').subscribe(function (value) { _this.salatalik = value; });
        translate.get('zeytinyagi').subscribe(function (value) { _this.zeytinyagi = value; });
    }
    return SandwichLabels;
}());

//# sourceMappingURL=SndwichLabels.js.map

/***/ }),

/***/ 431:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseTestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(57);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FirebaseTestPage = (function () {
    function FirebaseTestPage(navCtrl, fdb, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.fdb = fdb;
        this.navParams = navParams;
        this.arrData = [];
        this.fdb.list("/myitems/").subscribe(function (_data) {
            _this.arrData = _data;
        });
    }
    FirebaseTestPage.prototype.addItem = function () {
        this.fdb.list("/myitems/").push(this.myInput);
    };
    FirebaseTestPage.prototype.deleteItem = function (i) {
        this.fdb.list("/myitems/").remove(this.arrData[i].$key);
    };
    return FirebaseTestPage;
}());
FirebaseTestPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-firebasetest',template:/*ion-inline-start:"D:\ro\sandwich\src\pages\firebase_test\firebasetest.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Firebase test</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cards-bg">\n\n\n\n    testing ....\n\n\n\n    <ion-item>\n\n        <ion-input [(ngModel)]="myInput"></ion-input>\n\n    </ion-item>\n\n\n\n    <button ion-button icon-left color="danger" (click)="addItem()">\n\n        <ion-icon name="exit-outline" class="user-icon"></ion-icon>\n\n        add item\n\n    </button>\n\n\n\n    <ion-list>\n\n        <ion-item *ngFor="let item of arrData; let i = index" (click)="deleteItem(i)">\n\n            {{item.$value}}\n\n        </ion-item>\n\n    </ion-list>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ro\sandwich\src\pages\firebase_test\firebasetest.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], FirebaseTestPage);

//# sourceMappingURL=firebasetest.js.map

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(84);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoadingProvider = (function () {
    function LoadingProvider(loadingCtrl, translate, alertCtrl) {
        var _this = this;
        this.loadingCtrl = loadingCtrl;
        this.translate = translate;
        this.alertCtrl = alertCtrl;
        translate.get('loading').subscribe(function (value) {
            _this.loadingText = value;
        });
        translate.get('errorText').subscribe(function (value) {
            _this.errorText = value;
        });
        translate.get('errorDescriptionText').subscribe(function (value) {
            _this.errorDescriptionText = value;
        });
        translate.get('infoText').subscribe(function (value) {
            _this.infoText = value;
        });
        translate.get('ok').subscribe(function (value) {
            _this.ok = value;
        });
    }
    LoadingProvider.prototype.startLoading = function () {
        var _this = this;
        this.loading = this.loadingCtrl.create({
            content: this.loadingText,
            duration: 60000
        });
        this.loading.onDidDismiss(function (success) {
            if (success)
                return;
            _this.raiseSystemError();
        });
        this.loading.present();
    };
    LoadingProvider.prototype.dismiss = function (success) {
        if (this.loading)
            this.loading.dismiss(success);
    };
    LoadingProvider.prototype.getLoading = function () {
        var _this = this;
        var loading = this.loadingCtrl.create({
            content: this.loadingText,
            duration: 60000
        });
        loading.onDidDismiss(function (success) {
            if (success)
                return;
            _this.raiseSystemError();
            return;
        });
        return loading;
    };
    LoadingProvider.prototype.raiseSystemError = function () {
        var alert = this.alertCtrl.create({
            title: this.errorText,
            subTitle: this.errorDescriptionText,
            buttons: [this.ok]
        });
        alert.present();
    };
    return LoadingProvider;
}());
LoadingProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
], LoadingProvider);

//# sourceMappingURL=loading-provider.js.map

/***/ })

},[290]);
//# sourceMappingURL=main.js.map