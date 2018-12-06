webpackJsonp([2],{

/***/ 166:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 166;

/***/ }),

/***/ 210:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/apoderados/apoderados.module": [
		685,
		1
	],
	"../pages/bancos/bancos.module": [
		211
	],
	"../pages/clientes/clientes.module": [
		686,
		0
	],
	"../pages/oficinas/oficinas.module": [
		309
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 210;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 211:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BancosPageModule", function() { return BancosPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bancos__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bank_modal__ = __webpack_require__(307);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_bancos_bancos__ = __webpack_require__(74);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var BancosPageModule = /** @class */ (function () {
    function BancosPageModule() {
    }
    BancosPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__bank_modal__["a" /* BankModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__bancos__["a" /* BancosPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__providers_bancos_bancos__["a" /* BancosProvider */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__bank_modal__["a" /* BankModalPage */]
            ]
        })
    ], BancosPageModule);
    return BancosPageModule;
}());

//# sourceMappingURL=bancos.module.js.map

/***/ }),

/***/ 307:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BankModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_bancos_bancos__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var BankModalPage = /** @class */ (function () {
    function BankModalPage(BancosProvider, params, viewCtrl, toastCtrl, navCtrl) {
        this.BancosProvider = BancosProvider;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.bank = {};
    }
    BankModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    BankModalPage.prototype.save = function (form) {
        var _this = this;
        var update = form['href'];
        this.BancosProvider.save(form).subscribe(function (result) {
            var toast = _this.toastCtrl.create({
                message: 'Banco "' + form.name + '" ' + ((update) ? 'updated' : 'added') + '.',
                duration: 2000
            });
            toast.present();
            _this.dismiss();
        }, function (error) { return _this.error = error; });
    };
    BankModalPage.prototype.ionViewDidLoad = function () {
        setTimeout(function () {
        }, 150);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('name'),
        __metadata("design:type", Object)
    ], BankModalPage.prototype, "name", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('sede'),
        __metadata("design:type", Object)
    ], BankModalPage.prototype, "sede", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["_8" /* ViewChild */])('pais'),
        __metadata("design:type", Object)
    ], BankModalPage.prototype, "pais", void 0);
    BankModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\Proyecto 2º DAM 1er Trimestre\Aplicacion\Aplicacion\Appoderados\src\pages\bancos\bank-modal.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-title>\n\n            {{bank ? \'Añadir Banco\' : \'Add Beer\'}}\n\n        </ion-title>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">\n\n                <span ion-text color="primary" showWhen="ios,core">Cancel</span>\n\n                <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <form #bankForm="ngForm" (ngSubmit)="save(bankForm.value)">\n\n        <input type="hidden" name="href" [(ngModel)]="bank.href">\n\n        <ion-row>\n\n            <ion-col>\n\n                <ion-list inset>\n\n                    <ion-item>\n\n                        <ion-input placeholder="Nombre del banco" name="nombre" type="text" required [(ngModel)]="bank.nombre"\n\n                            #name></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-input placeholder="Sede del banco" name="sede" type="text" required [(ngModel)]="bank.sede"\n\n                            #name></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-input placeholder="País del banco" name="pais" type="text" required [(ngModel)]="bank.pais"\n\n                            #name></ion-input>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col>\n\n                <div *ngIf="error" class="alert alert-danger">{{error}}</div>\n\n                <button ion-button color="primary" full type="submit" [disabled]="!bankForm.form.valid">Save</button>\n\n            </ion-col>\n\n            \n\n        </ion-row>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"F:\Proyecto 2º DAM 1er Trimestre\Aplicacion\Aplicacion\Appoderados\src\pages\bancos\bank-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__providers_bancos_bancos__["a" /* BancosProvider */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["h" /* NavController */]])
    ], BankModalPage);
    return BankModalPage;
}());

//# sourceMappingURL=bank-modal.js.map

/***/ }),

/***/ 308:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesproviderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/*
  Generated class for the ClientesproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var ClientesproviderProvider = /** @class */ (function () {
    function ClientesproviderProvider(http) {
        this.http = http;
        this.API = 'http://localhost:3448';
        this.ALL_CLIENTS = this.API + '/Clients/AllClients';
    }
    ClientesproviderProvider.prototype.getClients = function () {
        return this.http.get(this.ALL_CLIENTS);
    };
    ClientesproviderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ClientesproviderProvider);
    return ClientesproviderProvider;
}());

//# sourceMappingURL=clientesprovider.js.map

/***/ }),

/***/ 309:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OficinasPageModule", function() { return OficinasPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__oficinas__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_oficinasprovider_oficinasprovider__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__office_modal__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var OficinasPageModule = /** @class */ (function () {
    function OficinasPageModule() {
    }
    OficinasPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__oficinas__["a" /* OficinasPage */],
                __WEBPACK_IMPORTED_MODULE_4__office_modal__["a" /* OfficeModalPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__oficinas__["a" /* OficinasPage */]),
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_3__providers_oficinasprovider_oficinasprovider__["a" /* OficinasproviderProvider */]
            ],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_4__office_modal__["a" /* OfficeModalPage */]
            ],
        })
    ], OficinasPageModule);
    return OficinasPageModule;
}());

//# sourceMappingURL=oficinas.module.js.map

/***/ }),

/***/ 310:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OfficeModalPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_oficinasprovider_oficinasprovider__ = __webpack_require__(85);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var OfficeModalPage = /** @class */ (function () {
    function OfficeModalPage(OficinasproviderProvider, params, viewCtrl, toastCtrl, navCtrl) {
        var _this = this;
        this.OficinasproviderProvider = OficinasproviderProvider;
        this.params = params;
        this.viewCtrl = viewCtrl;
        this.toastCtrl = toastCtrl;
        this.navCtrl = navCtrl;
        this.office = {};
        if (this.params.data.id) {
            this.OficinasproviderProvider.get(this.params.get('id')).subscribe(function (office) {
                _this.OficinasproviderProvider = office;
                _this.office.href = office.href;
            });
        }
    }
    OfficeModalPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.OficinasproviderProvider.getBanks().subscribe(function (banks) {
            _this.banks = banks;
        });
    };
    OfficeModalPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    OfficeModalPage.prototype.save = function (form) {
        var _this = this;
        var update = form['href'];
        this.OficinasproviderProvider.save(form).subscribe(function (result) {
            var toast = _this.toastCtrl.create({
                message: "Oficina añadida. ",
                duration: 2000
            });
            toast.present();
            _this.dismiss();
        }, function (error) { return _this.error = error; });
    };
    OfficeModalPage.prototype.ionViewDidLoad = function () {
        setTimeout(function () {
        }, 150);
    };
    OfficeModalPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\Proyecto 2º DAM 1er Trimestre\Aplicacion\Aplicacion\Appoderados\src\pages\oficinas\office-modal.html"*/'<ion-header>\n\n    <ion-toolbar>\n\n        <ion-title>\n\n            {{bank ? \'Añadir Oficina\' : \'Añadir Oficina\'}}\n\n        </ion-title>\n\n        <ion-buttons start>\n\n            <button ion-button (click)="dismiss()">\n\n                <span ion-text color="primary" showWhen="ios,core">Cancel</span>\n\n                <ion-icon name="md-close" showWhen="android,windows"></ion-icon>\n\n            </button>\n\n        </ion-buttons>\n\n    </ion-toolbar>\n\n</ion-header>\n\n<ion-content padding>\n\n    <ion-item *ngFor="let bank of banks">\n\n        <p>{{bank.nombre}}</p>\n\n    </ion-item>\n\n    <form #officeForm="ngForm" (ngSubmit)="save(officeForm.value)">\n\n        <input type="hidden" name="href" [(ngModel)]="office.href">\n\n        <ion-row>\n\n            <ion-col>\n\n                <ion-list inset>\n\n                    <ion-item>\n\n                        <ion-input placeholder="Nombre del banco" name="nombre" type="text" required [(ngModel)]="office.nombre"\n\n                            #name></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-label>Banco</ion-label>\n\n                        <ion-select #name name="Id_Banco" [(ngModel)]="office.Id_Banco">\n\n                            <ion-option *ngFor="let bank of banks" [value]="bank.id_Banco">{{bank.nombre}}</ion-option>\n\n                        </ion-select>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-input placeholder="Direccion de la oficina" name="direccion" type="text" required\n\n                            [(ngModel)]="office.direccion" #name></ion-input>\n\n                    </ion-item>\n\n                    <ion-item>\n\n                        <ion-input placeholder="Horario de oficina" name="horario" type="text" required [(ngModel)]="office.horario"\n\n                            #name></ion-input>\n\n                    </ion-item>\n\n                </ion-list>\n\n            </ion-col>\n\n        </ion-row>\n\n        <ion-row>\n\n            <ion-col>\n\n                <div *ngIf="error" class="alert alert-danger">Ha ocurrido un error</div>\n\n                <button ion-button color="primary" full type="submit" [disabled]="!officeForm.form.valid">Save</button>\n\n            </ion-col>\n\n        </ion-row>\n\n    </form>\n\n</ion-content>'/*ion-inline-end:"F:\Proyecto 2º DAM 1er Trimestre\Aplicacion\Aplicacion\Appoderados\src\pages\oficinas\office-modal.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_oficinasprovider_oficinasprovider__["a" /* OficinasproviderProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* ViewController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], OfficeModalPage);
    return OfficeModalPage;
}());

//# sourceMappingURL=office-modal.js.map

/***/ }),

/***/ 354:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomePage = /** @class */ (function () {
    function HomePage(navCtrl) {
        this.navCtrl = navCtrl;
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"F:\Proyecto 2º DAM 1er Trimestre\Aplicacion\Aplicacion\Appoderados\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Home</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding>\n  <h3>Ionic Menu Starter</h3>\n\n  <p>\n    If you get lost, the <a href="http://ionicframework.com/docs/v2">docs</a> will show you the way.\n  </p>\n\n  <button ion-button secondary menuToggle>Toggle Menu</button>\n</ion-content>\n'/*ion-inline-end:"F:\Proyecto 2º DAM 1er Trimestre\Aplicacion\Aplicacion\Appoderados\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ListPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"F:\Proyecto 2º DAM 1er Trimestre\Aplicacion\Aplicacion\Appoderados\src\pages\list\list.html"*/'<ion-header>\n  <ion-navbar>\n    <button ion-button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Firmas</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    \n  </ion-list>\n\n</ion-content>\n'/*ion-inline-end:"F:\Proyecto 2º DAM 1er Trimestre\Aplicacion\Aplicacion\Appoderados\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ListPage);
    return ListPage;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 356:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__bancos_bancos__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__clientes_clientes__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__oficinas_oficinas__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__apoderados_apoderados__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = /** @class */ (function () {
    function TabsPage(navParams) {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_2__bancos_bancos__["a" /* BancosPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_3__clientes_clientes__["a" /* ClientesPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_4__oficinas_oficinas__["a" /* OficinasPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_5__apoderados_apoderados__["a" /* ApoderadosPage */];
        this.color = "primary";
        // Set the active tab based on the passed index from menu.ts
        this.myIndex = navParams.data.tabIndex || 0;
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\Proyecto 2º DAM 1er Trimestre\Aplicacion\Aplicacion\Appoderados\src\pages\tabs\tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Bancos" tabIcon="logo-usd"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Clientes" tabIcon="people"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Oficinas" tabIcon="albums"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Appoderados" tabIcon="albums"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"F:\Proyecto 2º DAM 1er Trimestre\Aplicacion\Aplicacion\Appoderados\src\pages\tabs\tabs.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 357:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(358);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(362);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 362:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(681);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__ = __webpack_require__(356);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_bancos_bancos__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_clientes_clientes__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_oficinas_oficinas__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_apoderados_apoderados__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__providers_bancos_bancos__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__angular_common_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_bancos_bancos_module__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_clientesprovider_clientesprovider__ = __webpack_require__(308);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__providers_oficinasprovider_oficinasprovider__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_oficinas_oficinas_module__ = __webpack_require__(309);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_bancos_bancos__["a" /* BancosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_clientes_clientes__["a" /* ClientesPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_apoderados_apoderados__["a" /* ApoderadosPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_14__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/apoderados/apoderados.module#ApoderadosPageModule', name: 'ApoderadosPage', segment: 'apoderados', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/bancos/bancos.module#BancosPageModule', name: 'BancosPage', segment: 'bancos', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/clientes/clientes.module#ClientesPageModule', name: 'ClientesPage', segment: 'clientes', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/oficinas/oficinas.module#OficinasPageModule', name: 'OficinasPage', segment: 'oficinas', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_15__pages_bancos_bancos_module__["BancosPageModule"],
                __WEBPACK_IMPORTED_MODULE_18__pages_oficinas_oficinas_module__["OficinasPageModule"]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_bancos_bancos__["a" /* BancosPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_clientes_clientes__["a" /* ClientesPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_oficinas_oficinas__["a" /* OficinasPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_apoderados_apoderados__["a" /* ApoderadosPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_tabs_tabs__["a" /* TabsPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_8__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_13__providers_bancos_bancos__["a" /* BancosProvider */],
                __WEBPACK_IMPORTED_MODULE_16__providers_clientesprovider_clientesprovider__["a" /* ClientesproviderProvider */],
                __WEBPACK_IMPORTED_MODULE_17__providers_oficinasprovider_oficinasprovider__["a" /* OficinasproviderProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 681:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(350);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(353);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(354);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_bancos_bancos__ = __webpack_require__(73);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_clientes_clientes__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_oficinas_oficinas__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_apoderados_apoderados__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__ = __webpack_require__(356);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var MyApp = /** @class */ (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Inicio', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Tramitar firma', component: __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */] },
            { title: 'Crear entidades', component: __WEBPACK_IMPORTED_MODULE_10__pages_tabs_tabs__["a" /* TabsPage */] },
            { title: 'Crear bancos', component: __WEBPACK_IMPORTED_MODULE_6__pages_bancos_bancos__["a" /* BancosPage */] },
            { title: 'Crear clientes', component: __WEBPACK_IMPORTED_MODULE_7__pages_clientes_clientes__["a" /* ClientesPage */] },
            { title: 'Crear oficinas', component: __WEBPACK_IMPORTED_MODULE_8__pages_oficinas_oficinas__["a" /* OficinasPage */] },
            { title: 'Crear apoderados', component: __WEBPACK_IMPORTED_MODULE_9__pages_apoderados_apoderados__["a" /* ApoderadosPage */] }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.setRoot(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"F:\Proyecto 2º DAM 1er Trimestre\Aplicacion\Aplicacion\Appoderados\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-header>\n    <ion-toolbar>\n      <ion-title>Menu</ion-title>\n    </ion-toolbar>\n  </ion-header>\n\n  <ion-content>\n    <ion-list>\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n        {{p.title}}\n        <hr/>\n      </button>\n    </ion-list>\n  </ion-content>\n\n</ion-menu>\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>'/*ion-inline-end:"F:\Proyecto 2º DAM 1er Trimestre\Aplicacion\Aplicacion\Appoderados\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 73:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BancosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_bancos_bancos__ = __webpack_require__(74);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__bancos_bank_modal__ = __webpack_require__(307);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the BancosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var BancosPage = /** @class */ (function () {
    function BancosPage(navCtrl, navParams, BancosProvider, modalCtrl, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.BancosProvider = BancosProvider;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
    }
    BancosPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.BancosProvider.getBanks().subscribe(function (banks) {
            _this.banks = banks;
        });
    };
    BancosPage.prototype.openModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__bancos_bank_modal__["a" /* BankModalPage */]);
        modal.present();
        // refresh data after modal dismissed
        modal.onDidDismiss(function () { return _this.ionViewWillEnter(); });
    };
    BancosPage.prototype.remove = function (bank) {
        var _this = this;
        this.BancosProvider.remove(bank.id_Banco).subscribe(function (response) {
            for (var i = 0; i < _this.banks.length; i++) {
                if (_this.banks[i] === bank) {
                    _this.banks.splice(i, 1);
                    var toast = _this.toastCtrl.create({
                        message: 'movie' + bank.nombre + 'deleted'
                    });
                    toast.present;
                }
            }
        });
    };
    BancosPage.prototype.Popup = function (bank) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete',
            message: 'Do you want to DELETE THIS ENTRY? REALLY? ARE YOU SURE?',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'DELETE, BE CAREFUL',
                    role: "remove",
                    handler: function () {
                        _this.remove(bank);
                    }
                }
            ]
        });
        alert.present();
    };
    BancosPage.prototype.edit = function (bank) {
        var _this = this;
        this.BancosProvider.remove(bank.id_Banco).subscribe(function (response) {
            for (var i = 0; i < _this.banks.length; i++) {
                if (_this.banks[i] === bank) {
                    _this.banks.splice(i, 1);
                    var modal = _this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__bancos_bank_modal__["a" /* BankModalPage */], bank.id_Banco);
                    modal.present();
                    modal.onDidDismiss(function () { return _this.ionViewWillEnter(); });
                }
            }
        });
    };
    BancosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-bancos',template:/*ion-inline-start:"F:\Proyecto 2º DAM 1er Trimestre\Aplicacion\Aplicacion\Appoderados\src\pages\bancos\bancos.html"*/'<!--\n  Generated template for the BancosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Bancos</ion-title>\n    <ion-buttons end>\n      <button ion-button icon-only (click)="openModal()" color="primary">\n        <ion-icon name="add-circle"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n      <ion-item-sliding *ngFor="let bank of banks"> \n  <ion-item  text-wrap (press)="Popup(bank)">\n    <p>{{bank.nombre}}</p>\n    <p>{{bank.sede}}</p>\n    <p>{{bank.pais}}</p>\n  </ion-item>\n  <ion-item-options>\n      <button ion-button color="secondary" (click)="openModal({id: bank.id_Banco})">\n        <ion-icon name="brush"></ion-icon> Editar\n      </button>\n  </ion-item-options>\n</ion-item-sliding>\n</ion-list>\n</ion-content>\n'/*ion-inline-end:"F:\Proyecto 2º DAM 1er Trimestre\Aplicacion\Aplicacion\Appoderados\src\pages\bancos\bancos.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_bancos_bancos__["a" /* BancosProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], BancosPage);
    return BancosPage;
}());

//# sourceMappingURL=bancos.js.map

/***/ }),

/***/ 74:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BancosProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(83);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the BancosProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var BancosProvider = /** @class */ (function () {
    function BancosProvider(http) {
        this.http = http;
        this.API = 'http://localhost:3448';
        this.ALL_BANKS = this.API + '/banks/AllBanks';
        this.POST_API = this.API + '/banks/addBank';
        this.GET_API = this.API + '/banks/FindBanks/';
        this.UPDATE_API = this.API + '/banks/UpdateBanks/';
        this.DELETE_API = this.API + '/banks/deleteBank/';
    }
    BancosProvider.prototype.getBanks = function () {
        return this.http.get(this.ALL_BANKS);
    };
    BancosProvider.prototype.get = function (id) {
        console.log(id);
        return this.http.get(this.GET_API + id);
    };
    BancosProvider.prototype.save = function (bank) {
        var result;
        var formData = new FormData();
        formData.append('Nombre', bank.nombre);
        formData.append('Sede', bank.sede);
        formData.append('Pais', bank.pais);
        result = this.http.post(this.POST_API, formData);
        return result.catch(function (error) { return __WEBPACK_IMPORTED_MODULE_1_rxjs__["Observable"].throw(error); });
    };
    BancosProvider.prototype.remove = function (id) {
        return this.http.delete(this.DELETE_API + id);
    };
    BancosProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object])
    ], BancosProvider);
    return BancosProvider;
    var _a;
}());

//# sourceMappingURL=bancos.js.map

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OficinasPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_oficinasprovider_oficinasprovider__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__oficinas_office_modal__ = __webpack_require__(310);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the OficinasPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OficinasPage = /** @class */ (function () {
    function OficinasPage(navCtrl, navParams, OficinasproviderProvider, modalCtrl, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.OficinasproviderProvider = OficinasproviderProvider;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
    }
    OficinasPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.OficinasproviderProvider.getOffices().subscribe(function (offices) {
            _this.offices = offices;
        });
    };
    OficinasPage.prototype.openModal = function (id) {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__oficinas_office_modal__["a" /* OfficeModalPage */], id);
        modal.present();
        // refresh data after modal dismissed
        modal.onDidDismiss(function () { return _this.ionViewWillEnter(); });
    };
    OficinasPage.prototype.remove = function (office) {
        var _this = this;
        this.OficinasproviderProvider.remove(office.id_Oficinas).subscribe(function (response) {
            for (var i = 0; i < _this.offices.length; i++) {
                if (_this.offices[i] === office) {
                    _this.offices.splice(i, 1);
                    var toast = _this.toastCtrl.create({
                        message: 'Oficina' + office.nombre + 'borrada'
                    });
                    toast.present;
                }
            }
        });
    };
    OficinasPage.prototype.Popup = function (office) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Delete',
            message: '¿Quieres borrar esta oficina? Si en la oficina se han tramitado firmas el campo no se borrará.',
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'DELETE, BE CAREFUL',
                    role: "remove",
                    handler: function () {
                        _this.remove(office);
                    }
                }
            ]
        });
        alert.present();
    };
    OficinasPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-oficinas',template:/*ion-inline-start:"F:\Proyecto 2º DAM 1er Trimestre\Aplicacion\Aplicacion\Appoderados\src\pages\oficinas\oficinas.html"*/'<!--\n  Generated template for the OficinasPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Oficinas</ion-title>\n    <ion-buttons end>\n        <button ion-button icon-only (click)="openModal()" color="primary">\n          <ion-icon name="add-circle"></ion-icon>\n        </button>\n      </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list>\n      <ion-item-sliding *ngFor="let office of offices"> \n  <ion-item  text-wrap (press)="Popup(office)">\n      <p>{{office.nombre}}</p>\n    <p>{{office.id_Banco.nombre}}</p>\n    <p>{{office.horario}}</p>\n  </ion-item>\n  <ion-item-options>\n      <button ion-button color="secondary" (click)="openModal({id: office.id_Oficina})">\n        <ion-icon name="brush"></ion-icon> Edit\n      </button>\n  </ion-item-options>\n</ion-item-sliding>\n</ion-list>\n</ion-content>\n\n'/*ion-inline-end:"F:\Proyecto 2º DAM 1er Trimestre\Aplicacion\Aplicacion\Appoderados\src\pages\oficinas\oficinas.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__providers_oficinasprovider_oficinasprovider__["a" /* OficinasproviderProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], OficinasPage);
    return OficinasPage;
}());

//# sourceMappingURL=oficinas.js.map

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OficinasproviderProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the OficinasproviderProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var OficinasproviderProvider = /** @class */ (function () {
    function OficinasproviderProvider(http) {
        this.http = http;
        this.API = 'http://localhost:3448';
        this.ALL_OFFICES = this.API + '/Offices/allOffices';
        this.ALL_BANKS = this.API + '/Banks/AllBanks';
        this.GET_API = this.API + '/Offices/findOffice/';
        this.POST_API = this.API + '/Offices/addOffice';
        this.DELETE_API = this.API + '/Offices/DeleteOffice/';
    }
    OficinasproviderProvider.prototype.getOffices = function () {
        return this.http.get(this.ALL_OFFICES);
    };
    OficinasproviderProvider.prototype.getBanks = function () {
        return this.http.get(this.ALL_BANKS);
    };
    OficinasproviderProvider.prototype.get = function (id) {
        return this.http.get(this.GET_API + id);
    };
    OficinasproviderProvider.prototype.remove = function (id) {
        return this.http.delete(this.DELETE_API + id);
    };
    OficinasproviderProvider.prototype.save = function (office) {
        var result;
        if (office['href']) {
            var formDataup = new FormData();
            formData.append('Nombre', office.nombre);
            formData.append('Id_Banco', office.Id_Banco.Id_Banco);
            formData.append('Direccion', office.direccion);
            formData.append('Horario', office.horario);
            result = this.http.put(this.POST_API, formDataup);
        }
        else {
            var formData = new FormData();
            formData.append('Nombre', office.nombre);
            formData.append('Id_Banco', office.Id_Banco);
            formData.append('Direccion', office.direccion);
            formData.append('Horario', office.horario);
            result = this.http.post(this.POST_API, formData);
        }
        return result.catch(function (error) { return __WEBPACK_IMPORTED_MODULE_2_rxjs__["Observable"].throw(error); });
    };
    OficinasproviderProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], OficinasproviderProvider);
    return OficinasproviderProvider;
}());

//# sourceMappingURL=oficinasprovider.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ApoderadosPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the ApoderadosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ApoderadosPage = /** @class */ (function () {
    function ApoderadosPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ApoderadosPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ApoderadosPage');
    };
    ApoderadosPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-apoderados',template:/*ion-inline-start:"F:\Proyecto 2º DAM 1er Trimestre\Aplicacion\Aplicacion\Appoderados\src\pages\apoderados\apoderados.html"*/'<!--\n  Generated template for the ApoderadosPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Apoderados</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"F:\Proyecto 2º DAM 1er Trimestre\Aplicacion\Aplicacion\Appoderados\src\pages\apoderados\apoderados.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], ApoderadosPage);
    return ApoderadosPage;
}());

//# sourceMappingURL=apoderados.js.map

/***/ }),

/***/ 91:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_clientesprovider_clientesprovider__ = __webpack_require__(308);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ClientesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ClientesPage = /** @class */ (function () {
    function ClientesPage(navCtrl, navParams, ClientesproviderProvider, modalCtrl, toastCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.ClientesproviderProvider = ClientesproviderProvider;
        this.modalCtrl = modalCtrl;
        this.toastCtrl = toastCtrl;
        this.alertCtrl = alertCtrl;
    }
    ClientesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ClientesPage');
    };
    ClientesPage.prototype.ionViewWillEnter = function () {
        var _this = this;
        this.ClientesproviderProvider.getClients().subscribe(function (clients) {
            _this.clients = clients;
        });
    };
    ClientesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-clientes',template:/*ion-inline-start:"F:\Proyecto 2º DAM 1er Trimestre\Aplicacion\Aplicacion\Appoderados\src\pages\clientes\clientes.html"*/'<!--\n  Generated template for the ClientesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n      <button ion-button menuToggle>\n          <ion-icon name="menu"></ion-icon>\n        </button>\n    <ion-title>Clientes</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-item  *ngFor="let client of clients">\n        <p>{{client.nombre}}</p>\n      </ion-item>\n</ion-content>\n'/*ion-inline-end:"F:\Proyecto 2º DAM 1er Trimestre\Aplicacion\Aplicacion\Appoderados\src\pages\clientes\clientes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2__providers_clientesprovider_clientesprovider__["a" /* ClientesproviderProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ClientesPage);
    return ClientesPage;
}());

//# sourceMappingURL=clientes.js.map

/***/ })

},[357]);
//# sourceMappingURL=main.js.map