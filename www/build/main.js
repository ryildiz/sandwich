webpackJsonp([0],{

/***/ 135:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mysandwich_mysandwiches__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__createsandwich_createsandwich__ = __webpack_require__(238);
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"D:\ro\sandwich\src\pages\tabs\tabs.html"*/'<ion-tabs>\n\n    <ion-tab [root]="sandivichTab" tabTitle="Sandiviclerim" tabIcon="restaurant"></ion-tab>\n\n    <ion-tab [root]="createSandwichTab" tabTitle="Sandivic Olustur" tabIcon="add-circle"></ion-tab>\n\n    <ion-tab [root]="accountTab" tabTitle="Hesap" tabIcon="person"></ion-tab>\n\n</ion-tabs>\n\n'/*ion-inline-end:"D:\ro\sandwich\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MySandwichesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
        selector: 'page-mysandwiches',template:/*ion-inline-start:"D:\ro\sandwich\src\pages\mysandwich\mysandwiches.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Sandviçlerim</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content class="cards-bg">\n\n\n\n    <ion-card>\n\n\n\n    <div>\n\n      <img src="assets/img/sandwich.jpg"/>\n\n    </div>\n\n\n\n    <ion-card-content>\n\n      <ion-card-title>\n\n        Dağ Deviren\n\n      </ion-card-title>\n\n      <p>\n\n        1 dilim dil peyniri, 1 dilim kaşar peyniri, 1 dilim beyaz peynir, 2 dilim salam, 2 dilim jambon, zeytin ezmesi, kekik, zeytin yağı.\n\n      </p>\n\n    </ion-card-content>\n\n\n\n    <ion-item big color="primary">\n\n      <ion-icon name="share-alt" item-start></ion-icon>\n\n      Hemen sipariş ver\n\n      <ion-badge item-end>10TL</ion-badge>\n\n    </ion-item>\n\n\n\n    <ion-row no-padding>\n\n      <ion-col>\n\n        <button ion-button clear small color="secondary" icon-start>\n\n          <ion-icon name=\'md-create\'></ion-icon>\n\n          Düzenle        </button>\n\n      </ion-col>\n\n      <ion-col text-right>\n\n        <button ion-button clear small color="danger" icon-start>\n\n          <ion-icon name=\'trash\'></ion-icon>\n\n          Sil\n\n        </button>\n\n\n\n      </ion-col>\n\n    </ion-row>\n\n\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ro\sandwich\src\pages\mysandwich\mysandwiches.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], MySandwichesPage);

//# sourceMappingURL=mysandwiches.js.map

/***/ }),

/***/ 154:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 154;

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	return new Promise(function(resolve, reject) { reject(new Error("Cannot find module '" + req + "'.")); });
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 195;

/***/ }),

/***/ 238:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CreateSandwichPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__modalcontent__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_Sandwich__ = __webpack_require__(411);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__model_SndwichLabels__ = __webpack_require__(421);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_sandwich_provider__ = __webpack_require__(282);
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
    function CreateSandwichPage(navCtrl, translate, modalCtrl, sandwichProvider, navParams) {
        this.navCtrl = navCtrl;
        this.translate = translate;
        this.modalCtrl = modalCtrl;
        this.sandwichProvider = sandwichProvider;
        this.navParams = navParams;
        this.loginData = this.navParams.get("loginData");
        this.sandwich = new __WEBPACK_IMPORTED_MODULE_3__model_Sandwich__["a" /* Sandwich */](sandwichProvider);
    }
    CreateSandwichPage.prototype.openSaveModal = function () {
        this.sandwich.setIcerik(new __WEBPACK_IMPORTED_MODULE_5__model_SndwichLabels__["a" /* SandwichLabels */](this.translate));
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__modalcontent__["a" /* ModalContentPage */], { 'sandwich': this.sandwich });
        modal.present();
    };
    return CreateSandwichPage;
}());
CreateSandwichPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-createsandwich',template:/*ion-inline-start:"D:\ro\sandwich\src\pages\createsandwich\createsandwich.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Sandviç oluştur</ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content class="cards-bg">\n\n  <ion-card>\n    <ion-card-header>\n      Ekmek\n    </ion-card-header>\n\n      <div>\n          <img src="assets/img/ekmek.jpg"/>\n      </div>\n\n    <ion-card-content>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>Boyu</ion-label>\n          <ion-select [(ngModel)]="sandwich.ekmekboyu" (ionChange)="sandwich.updatePrice()" interface="popover">\n            <ion-option value="tam">Tam</ion-option>\n            <ion-option value="yarim">Yarım</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n      <ion-list>\n        <ion-item>\n          <ion-label>Tipi</ion-label>\n          <ion-select [(ngModel)]="sandwich.ekmektipi" (ionChange)="sandwich.updatePrice()" interface="popover">\n            <ion-option value="tahilli">Tahıllı</ion-option>\n            <ion-option value="beyaz">Beyaz</ion-option>\n          </ion-select>\n        </ion-item>\n      </ion-list>\n\n    </ion-card-content>\n  </ion-card>\n\n\n  <ion-card>\n    <ion-card-header>\n      Peynir\n    </ion-card-header>\n\n    <div>\n      <img src="assets/img/peynir.jpg"/>\n    </div>\n\n\n    <ion-card-content>\n\n      <ion-item-divider></ion-item-divider>\n    <ion-item style="padding-left: 0px; padding-bottom: 0px;">\n        <ion-label>Beyaz peynir</ion-label>\n        <ion-checkbox color="royal" [(ngModel)]="sandwich.peynir.beyaz"  (ionChange)="sandwich.updatePrice()"></ion-checkbox>\n    </ion-item>\n\n    <ion-row style="margin-top: -12px; padding-right: 0px;">\n    <ion-col style="padding: 0px; margin-left: 24px;">\n      <button ion-button icon-left clear small color="secondary" (click)="sandwich.beyazArtir()">\n        <ion-icon name="ios-add-circle-outline"></ion-icon>\n        <div>Dilim ekle</div>\n      </button>\n    </ion-col>\n    <ion-col style="padding: 0px;">\n      <button ion-button icon-left clear small color="danger">\n        <ion-icon name="ios-remove-outline"></ion-icon>\n        <div>Dilim azalt</div>\n      </button>\n    </ion-col>\n    <ion-col style="padding: 0px;">\n      <button ion-button icon-left clear small (click)="sandwich.beyazAzalt()">\n        <ion-badge item-end>{{sandwich.peynir.beyazdilimsayisi}} dilim</ion-badge>\n      </button>\n    </ion-col>\n\n  </ion-row>\n\n      <ion-item-divider></ion-item-divider>\n\n      <ion-item style="padding-left: 0px; padding-bottom: 0px;">\n        <ion-label>Kaşar peyniri</ion-label>\n        <ion-checkbox color="royal" [(ngModel)]="sandwich.peynir.kasar"></ion-checkbox>\n      </ion-item>\n\n      <ion-row style="margin-top: -12px; padding-right: 0px;">\n        <ion-col style="padding: 0px; margin-left: 24px;">\n          <button ion-button icon-left clear small color="secondary" (click)="sandwich.kasarArtir()">\n            <ion-icon name="ios-add-circle-outline"></ion-icon>\n            <div>Dilim ekle</div>\n          </button>\n        </ion-col>\n        <ion-col style="padding: 0px;">\n          <button ion-button icon-left clear small color="danger" (click)="sandwich.kasarAzalt()">\n            <ion-icon name="ios-remove-outline"></ion-icon>\n            <div>Dilim azalt</div>\n          </button>\n        </ion-col>\n        <ion-col style="padding: 0px;">\n          <button ion-button icon-left clear small>\n            <ion-badge item-end>{{sandwich.peynir.kasardilimsayisi}} dilim</ion-badge>\n          </button>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-item-divider></ion-item-divider>\n\n      <ion-item style="padding-left: 0px; padding-bottom: 0px;">\n        <ion-label>Dil peyniri</ion-label>\n        <ion-checkbox color="royal" [(ngModel)]="sandwich.peynir.dil"></ion-checkbox>\n      </ion-item>\n\n      <ion-row style="margin-top: -12px; padding-right: 0px;">\n        <ion-col style="padding: 0px; margin-left: 24px;">\n          <button ion-button icon-left clear small color="secondary" (click)="sandwich.dilArtir()">\n            <ion-icon name="ios-add-circle-outline"></ion-icon>\n            <div>Dilim ekle</div>\n          </button>\n        </ion-col>\n        <ion-col style="padding: 0px;">\n          <button ion-button icon-left clear small color="danger" (click)="sandwich.dilAzalt()">\n            <ion-icon name="ios-remove-outline"></ion-icon>\n            <div>Dilim azalt</div>\n          </button>\n        </ion-col>\n        <ion-col style="padding: 0px;">\n          <button ion-button icon-left clear small>\n            <ion-badge item-end>{{sandwich.peynir.dildilimsayisi}} dilim</ion-badge>\n          </button>\n        </ion-col>\n\n      </ion-row>\n\n      <ion-item-divider></ion-item-divider>\n\n\n    </ion-card-content>\n  </ion-card>\n\n\n\n  <ion-list no-border>\n\n    <ion-list-header lang="tr">\n      Yeşillik\n    </ion-list-header>\n\n    <ion-item>\n\n      <ion-toggle [(ngModel)]="sandwich.yesillik.domates" (ionChange)="sandwich.updatePrice()" ></ion-toggle>\n      <ion-label>\n        Domates\n      </ion-label>\n      <ion-avatar item-start>\n        <img src="assets/img/domates.jpg">\n      </ion-avatar>\n    </ion-item>\n\n    <ion-item>\n      <ion-toggle [(ngModel)]="sandwich.yesillik.salatalik" (ionChange)="sandwich.updatePrice()"></ion-toggle>\n      <ion-label>\n        Salatalık\n      </ion-label>\n      <ion-avatar item-start>\n        <img src="assets/img/salatalık.jpg">\n      </ion-avatar>\n    </ion-item>\n\n  </ion-list>\n\n\n  <ion-list>\n\n    <ion-list-header>\n      Süsleme\n    </ion-list-header>\n\n    <ion-item>\n      <ion-toggle [(ngModel)]="sandwich.susleme.kekik" (ionChange)="sandwich.updatePrice()"></ion-toggle>\n      <ion-label>\n        Kekik\n      </ion-label>\n      <ion-avatar item-start>\n        <img src="assets/img/kekik.jpg">\n      </ion-avatar>\n    </ion-item>\n\n    <ion-item>\n      <ion-toggle [(ngModel)]="sandwich.susleme.zeytinyagi" (ionChange)="sandwich.updatePrice()"></ion-toggle>\n      <ion-label>\n        Zeytinyağı\n      </ion-label>\n      <ion-avatar item-start>\n        <img src="assets/img/zeytinyagi.jpg">\n      </ion-avatar>\n    </ion-item>\n\n  </ion-list>\n\n  <ion-list>\n\n    <ion-list-header>\n      Sos\n    </ion-list-header>\n\n    <ion-item>\n      <ion-toggle [(ngModel)]="sandwich.sos.zeytinezmesi" (ionChange)="sandwich.updatePrice()"></ion-toggle>\n      <ion-label>\n        Zeytin ezmesi\n      </ion-label>\n      <ion-avatar item-start>\n        <img src="assets/img/zeytinezmesi.jpg">\n      </ion-avatar>\n    </ion-item>\n\n    <ion-item>\n      <ion-toggle [(ngModel)]="sandwich.sos.acuka" (ionChange)="sandwich.updatePrice()"></ion-toggle>\n      <ion-label>\n        Acuka\n      </ion-label>\n      <ion-avatar item-start>\n        <img src="assets/img/acuka.jpg">\n      </ion-avatar>\n    </ion-item>\n\n  </ion-list>\n\n\n  <ion-fab right bottom style="margin-bottom:13px;" *ngIf="sandwich.fiyat">\n    <button ion-fab mini style="width:100px; height: 42px; font-size: 14px;" color="danger">Fiyatı {{sandwich.fiyat}} TL</button>\n  </ion-fab>\n  <ion-item-divider></ion-item-divider>\n  <ion-item big color="primary" (click)="openSaveModal()">\n    <ion-icon name="share-alt" item-start></ion-icon>\n    Sandviç oluştur\n  </ion-item>\n  <ion-item-divider></ion-item-divider>\n\n\n\n</ion-content>\n'/*ion-inline-end:"D:\ro\sandwich\src\pages\createsandwich\createsandwich.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_4__ngx_translate_core__["c" /* TranslateService */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_6__providers_sandwich_provider__["a" /* SandwichProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], CreateSandwichPage);

//# sourceMappingURL=createsandwich.js.map

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ModalContentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mysandwich_mysandwiches__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__model_SandwichBase__ = __webpack_require__(412);
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
    function ModalContentPage(platform, params, fdb, navCtrl, viewCtrl) {
        this.platform = platform;
        this.params = params;
        this.fdb = fdb;
        this.navCtrl = navCtrl;
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
        this.loginData.userId = Date.now().valueOf();
    }
    ModalContentPage.prototype.saveSandwich = function () {
        debugger;
        var bb = this.sandwich.getModel();
        debugger;
        var xx = new __WEBPACK_IMPORTED_MODULE_4__model_SandwichBase__["a" /* SandwichBase */]();
        this.fdb.list("/demo/" + this.loginData.userId + "/").push(xx);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__mysandwich_mysandwiches__["a" /* MySandwichesPage */], {});
    };
    ModalContentPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return ModalContentPage;
}());
ModalContentPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["n" /* Component */])({
        selector: 'page-modalcontent',template:/*ion-inline-start:"D:\ro\sandwich\src\pages\createsandwich\modalcontent.html"*/'\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Sandviç Kayıt</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="cards-bg">\n\n\n\n  <ion-card>\n\n\n\n    <div>\n\n      <img src="assets/img/sandwich.jpg"/>\n\n    </div>\n\n\n\n    <ion-card-content>\n\n\n\n      <ion-list>\n\n\n\n        <ion-item>\n\n          <ion-input type="text" placeholder="Sandviçinize isim verin ..." [(ngModel)]="sandwich.name"></ion-input>\n\n        </ion-item>\n\n      </ion-list>\n\n\n\n      <ion-label text-wrap>\n\n       İçerik: {{sandwich.icerik}}\n\n      </ion-label>\n\n\n\n\n\n\n\n    </ion-card-content>\n\n\n\n    <ion-item big color="primary" (click)="saveSandwich()">\n\n      <ion-icon name="share-alt" item-start></ion-icon>\n\n      Kaydet\n\n      <ion-badge item-end>{{sandwich.fiyat}} TL</ion-badge>\n\n    </ion-item>\n\n\n\n  </ion-card>\n\n\n\n</ion-content>\n\n'/*ion-inline-end:"D:\ro\sandwich\src\pages\createsandwich\modalcontent.html"*/
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* Platform */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["i" /* Platform */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["h" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["g" /* NavController */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ViewController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0_ionic_angular__["j" /* ViewController */]) === "function" && _e || Object])
], ModalContentPage);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=modalcontent.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SandwichProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angularfire2_database__ = __webpack_require__(73);
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

/***/ 285:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(301);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export createTranslateLoader */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(341);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(422);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_sandwich_sandwich__ = __webpack_require__(423);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__ = __webpack_require__(424);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_plus__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_mysandwich_mysandwiches__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_createsandwich_createsandwich__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_createsandwich_modalcontent__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_facebook__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_angularfire2__ = __webpack_require__(426);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_firebase_test_firebasetest__ = __webpack_require__(427);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__angular_http__ = __webpack_require__(428);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__providers_sandwich_provider__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__providers_loading_provider__ = __webpack_require__(429);
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
    return new __WEBPACK_IMPORTED_MODULE_8__ngx_translate_http_loader__["a" /* TranslateHttpLoader */](http, './assets/i18n/', '.json');
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
            __WEBPACK_IMPORTED_MODULE_12__pages_mysandwich_mysandwiches__["a" /* MySandwichesPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_sandwich_sandwich__["a" /* SandwichPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_createsandwich_createsandwich__["a" /* CreateSandwichPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_createsandwich_modalcontent__["a" /* ModalContentPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_firebase_test_firebasetest__["a" /* FirebaseTestPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */]),
            __WEBPACK_IMPORTED_MODULE_19__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["b" /* TranslateModule */].forRoot({
                loader: {
                    provide: __WEBPACK_IMPORTED_MODULE_7__ngx_translate_core__["a" /* TranslateLoader */],
                    useFactory: (createTranslateLoader),
                    deps: [__WEBPACK_IMPORTED_MODULE_19__angular_http__["a" /* Http */]]
                }
            }),
            __WEBPACK_IMPORTED_MODULE_17_angularfire2_database__["b" /* AngularFireDatabaseModule */],
            __WEBPACK_IMPORTED_MODULE_16_angularfire2__["a" /* AngularFireModule */].initializeApp(config)
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_12__pages_mysandwich_mysandwiches__["a" /* MySandwichesPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_sandwich_sandwich__["a" /* SandwichPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_createsandwich_createsandwich__["a" /* CreateSandwichPage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_createsandwich_modalcontent__["a" /* ModalContentPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_firebase_test_firebasetest__["a" /* FirebaseTestPage */],
            __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_9__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_splash_screen__["a" /* SplashScreen */],
            __WEBPACK_IMPORTED_MODULE_11__ionic_native_google_plus__["a" /* GooglePlus */],
            __WEBPACK_IMPORTED_MODULE_15__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_20__providers_sandwich_provider__["a" /* SandwichProvider */],
            __WEBPACK_IMPORTED_MODULE_21__providers_loading_provider__["a" /* LoadingProvider */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
            {
                provide: __WEBPACK_IMPORTED_MODULE_19__angular_http__["a" /* Http */],
                useFactory: function (backend, defaultOptions) { return new __WEBPACK_IMPORTED_MODULE_19__angular_http__["a" /* Http */](backend, defaultOptions); },
                deps: [__WEBPACK_IMPORTED_MODULE_19__angular_http__["d" /* XHRBackend */], __WEBPACK_IMPORTED_MODULE_19__angular_http__["c" /* RequestOptions */]]
            }
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 341:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ngx_translate_core__ = __webpack_require__(82);
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
    // rootPage:any = FirebaseTestPage;
    // rootPage:any = LoginPage;
    // rootPage:any = MySandwichesPage;
    // rootPage:any = CreateSandwichPage;
    function MyApp(platform, translate, statusBar, splashScreen) {
        this.translate = translate;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
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

/***/ 411:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Sandwich; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__SandwichBase__ = __webpack_require__(412);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var Sandwich = (function (_super) {
    __extends(Sandwich, _super);
    function Sandwich(sandwichProvider) {
        var _this = _super.call(this) || this;
        _this.sandwichProvider = sandwichProvider;
        _this.peynir.kasardilimsayisi = 1;
        _this.peynir.beyazdilimsayisi = 1;
        _this.peynir.dildilimsayisi = 1;
        _this.ekmektipi = 'tahilli';
        _this.ekmekboyu = 'tam';
        return _this;
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
    Sandwich.prototype.getModel = function () {
        var s = new __WEBPACK_IMPORTED_MODULE_0__SandwichBase__["a" /* SandwichBase */]();
        s.name = this.name;
        s.icerik = this.icerik;
        s.ekmektipi = this.ekmektipi;
        s.ekmekboyu = this.ekmekboyu;
        s.peynir = this.peynir;
        s.peynir.kasar = this.peynir.kasar;
        s.peynir.kasardilimsayisi = this.peynir.kasardilimsayisi;
        s.peynir.beyaz = this.peynir.beyaz;
        s.peynir.beyazdilimsayisi = this.peynir.beyazdilimsayisi;
        s.peynir.dil = this.peynir.dil;
        s.peynir.dildilimsayisi = this.peynir.dildilimsayisi;
        s.yesillik = this.yesillik;
        s.yesillik.salatalik = this.yesillik.salatalik;
        s.yesillik.domates = this.yesillik.domates;
        s.susleme = this.susleme;
        s.susleme.kekik = this.susleme.kekik;
        s.susleme.zeytinyagi = this.susleme.zeytinyagi;
        s.sos = this.sos;
        s.sos.acuka = this.sos.acuka;
        s.sos.zeytinezmesi = this.sos.zeytinezmesi;
        s.fiyat = this.fiyat;
        return s;
    };
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
                (this.sos ? (this.sos.zeytinezmesi ? 'zeytin ezmesi,' + SPACE : '') : '') +
                (this.sos ? (this.sos.acuka ? 'acuka' + SPACE : '') : '');
        this.icerik = this.icerik && this.icerik.trim().endsWith(',') ? this.icerik.substr(0, this.icerik.lastIndexOf(',')) : this.icerik;
        return this.icerik;
    };
    ;
    return Sandwich;
}(__WEBPACK_IMPORTED_MODULE_0__SandwichBase__["a" /* SandwichBase */]));

//# sourceMappingURL=Sandwich.js.map

/***/ }),

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SandwichBase; });
var SandwichBase = (function () {
    function SandwichBase() {
        this.peynir = {};
        this.yesillik = {};
        this.susleme = {};
        this.sos = {};
    }
    return SandwichBase;
}());

//# sourceMappingURL=SandwichBase.js.map

/***/ }),

/***/ 421:
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

/***/ 422:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__ = __webpack_require__(283);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(284);
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
        selector: 'page-login',template:/*ion-inline-start:"D:\ro\sandwich\src\pages\login\login.html"*/'<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>\n\n            Login\n\n        </ion-title>\n\n    </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n    <div style="padding: 1em;">\n\n\n\n        <img src="assets/img/logo.jpg"/>\n\n\n\n        <div>\n\n\n\n            <h4>Sandivic</h4>\n\n            <p>\n\n                Sec, Tasarla, Sira bekleme hemen ye!\n\n            </p>\n\n\n\n            <button ion-button block color="danger" (click)="loginUserG()">\n\n                <ion-icon name="logo-googleplus"></ion-icon>\n\n                <span style="padding-left: 8px; padding-right: 8px;">Google Login</span>\n\n            </button>\n\n\n\n            <button ion-button block color="primary" (click)="loginUserF()">\n\n                <ion-icon name="logo-facebook"></ion-icon>\n\n                <span style="padding-left: 8px; padding-right: 8px;">Facebook Login</span>\n\n            </button>\n\n\n\n        </div>\n\n    </div>\n\n\n\n\n\n</ion-content>'/*ion-inline-end:"D:\ro\sandwich\src\pages\login\login.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 423:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SandwichPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
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
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
], SandwichPage);

//# sourceMappingURL=sandwich.js.map

/***/ }),

/***/ 427:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FirebaseTestPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(73);
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

/***/ 429:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoadingProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngx_translate_core__ = __webpack_require__(82);
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

},[285]);
//# sourceMappingURL=main.js.map