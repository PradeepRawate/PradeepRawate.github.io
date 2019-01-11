(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n  \r\n  .App-header {\r\n    background-color: #69a79f;\r\n    padding: 10px;\r\n    color: white;\r\n    text-align: center;\r\n  }\r\n  \r\n  .mdsp {\r\n    font-size: 20px;\r\n    color: #607D8B !important;\r\n    font-weight: 700!important;\r\n    width: 180px;\r\n  }\r\n  \r\n  .App-intro {\r\n    font-size: large;\r\n  }\r\n  \r\n  .app-container {\r\n    width: 85% !important;\r\n  }\r\n  \r\n  .navbar {\r\n    background: #91b5c787;\r\n  }\r\n  \r\n  .logo {\r\n    margin-right: 20px;\r\n  }\r\n  \r\n  @-webkit-keyframes App-logo-spin {\r\n    from { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    to { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n  }\r\n  \r\n  @keyframes App-logo-spin {\r\n    from { -webkit-transform: rotate(0deg); transform: rotate(0deg); }\r\n    to { -webkit-transform: rotate(360deg); transform: rotate(360deg); }\r\n  }\r\n  "

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <!-- <header class=\"App-header\">\n    <h1 class=\"App-title\">SafeMeds</h1>\n  </header> -->\n  <div class=\"ui stackable menu navbar\">\n    <div class=\"left menu\">\n      <a class=\"item mdsp\">\n        <i class=\"braille icon\"></i><span class=\"\">&nbsp;Mindsphere</span>\n      </a>\n    </div>\n    <div class=\"logo\">\n      <img src=\"../assets/safemeds-logo.png\" style=\"width: 16.5em;\">\n    </div>\n  </div>\n  <div class=\"ui container app-container\">\n    <app-dashboard></app-dashboard>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.constant.ts":
/*!*********************************!*\
  !*** ./src/app/app.constant.ts ***!
  \*********************************/
/*! exports provided: MAX_TEMP, SECRET */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MAX_TEMP", function() { return MAX_TEMP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SECRET", function() { return SECRET; });
var MAX_TEMP = 30;
var SECRET = 'safemeds';


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _chain_chain_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./chain/chain.component */ "./src/app/chain/chain.component.ts");
/* harmony import */ var _contracts_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contracts.service */ "./src/app/contracts.service.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _chain_chain_component__WEBPACK_IMPORTED_MODULE_4__["ChainComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["DashboardComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_http__WEBPACK_IMPORTED_MODULE_6__["HttpModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"]
            ],
            providers: [_contracts_service__WEBPACK_IMPORTED_MODULE_5__["ContractsService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/chain/chain.component.css":
/*!*******************************************!*\
  !*** ./src/app/chain/chain.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".huge-icon {\r\n    font-size: 3.5em !important;\r\n}\r\n\r\n.step {\r\n    position: relative;\r\n}\r\n\r\n@media (max-height:768px) and (max-width:1366px) {\r\n    .ui.massive.step, .ui.massive.steps .step {\r\n        font-size: 1.3rem;\r\n    }\r\n}\r\n\r\n.hospital-details {\r\n    /* visibility: hidden; */\r\n    position: absolute;\r\n    z-index: 1;\r\n    top: 22px;\r\n    left: 33px;\r\n}\r\n\r\n.circular.icon:hover {\r\n    opacity: 0.5;\r\n    background: rgba(105, 167, 159, 0.815);\r\n    color: white;\r\n}\r\n\r\n.circular.icon:hover .hospital-details {\r\n    visibility: visible;\r\n}\r\n\r\n.circular.icon.disabled:hover {\r\n    cursor: not-allowed;\r\n    background: inherit;\r\n    color: inherit;\r\n}\r\n\r\n.ui.steps .step {\r\n    padding: 40px 0 40px 0;\r\n}\r\n\r\n.ui.steps .step .title {\r\n    font-size: 1em;\r\n    font-weight: 600;\r\n    margin-bottom: 15px;\r\n}\r\n\r\n.ui.steps .step .description {\r\n    font-size: 17px !important;\r\n    color: teal;\r\n}\r\n\r\n.success {\r\n    background: #ccf2cc !important;\r\n}\r\n\r\n.error {\r\n    background: #f0adad80!important;\r\n}\r\n\r\n.ml-20 {\r\n    margin-left: 20px;\r\n}\r\n\r\n.ui.steps .step:after {\r\n    background-color: inherit;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/chain/chain.component.html":
/*!********************************************!*\
  !*** ./src/app/chain/chain.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ui modal status fullscreen\" *ngIf=\"shipmentData\">\n  <i class=\"close icon\"></i>\n  <div class=\"header\">\n    Shipment Status\n  </div>\n  <div class=\"content\">\n    <div class=\"Home\">\n      <div class=\"ui massive tablet stackable six steps\">\n        <div class=\"step\" [ngClass]=\"getShipmentStatus(shipmentData.manufacturer)\">\n          <i class=\"pills icon\"></i>\n          <div class=\"content\">\n            <div class=\"title\">Manufacturer</div>\n            <div class=\"description\">Temperature: {{shipmentData.manufacturer}}</div>\n            <div class=\"description\">Humidity: {{shipmentData.manufacturerhumidity}}</div>\n          </div>\n        </div>\n        <div class=\"step\" [ngClass]=\"getShipmentStatus(shipmentData.dist)\">\n          <i class=\"truck icon\"></i>\n          <div class=\"content\">\n            <div class=\"title\">Distributer</div>\n            <div class=\"description\">Temperature: {{shipmentData.dist}} </div>\n            <div class=\"description\">Humidity: {{shipmentData.disthumidity}} </div>\n          </div>\n        </div>\n        <div class=\"step\" [ngClass]=\"getShipmentStatus(shipmentData.wholesaler)\">\n          <i class=\"boxes icon\"></i>\n          <div class=\"content\">\n            <div class=\"title\">Wholesale Dealer</div>\n            <div class=\"description\">Temperature: {{shipmentData.wholesaler}} </div>\n            <div class=\"description\">Humidity: {{shipmentData.wholesalerhumidity}} </div>\n          </div>\n        </div>\n        <div class=\"step\" [ngClass]=\"getShipmentStatus(shipmentData.retailer)\">\n          <i class=\"shipping fast icon\"></i>\n          <div class=\"content\">\n            <div class=\"title\">Retailer</div>\n            <div class=\"description\">Temperature: {{shipmentData.retailer}} </div>\n            <div class=\"description\">Humidity: {{shipmentData.retailerhumidity}} </div>\n          </div>\n        </div>\n        <div class=\"step\" [ngClass]=\"getShipmentStatus(shipmentData.pharmacy)\">\n          <i class=\"medkit icon\"></i>\n          <div class=\"content\">\n            <div class=\"title\">Pharmacy</div>\n            <div class=\"description\">Temperature: {{shipmentData.pharmacy}} </div>\n            <div class=\"description\">Humidity: {{shipmentData.pharmacyhumidity}} </div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"actions\">\n    <div class=\"ui icon message\" [ngClass]=\"{'error': shipmentData.status === 'FAIL', 'success': shipmentData.status === 'PASS'}\">\n      <div class=\"content\">\n        <div class=\"header\" *ngIf=\"shipmentData.status === 'PASS'\">\n          Payment Successful !\n        </div>\n        <div class=\"header\" *ngIf=\"shipmentData.status === 'FAIL'\">\n            Payment Failed !\n        </div>\n      </div>\n      <i class=\"credit card icon ml-20\"></i>\n    </div>\n  </div>\n</div>\n\n<!-- <div class=\"Chain\">\n  <div class=\"ui center aligned header\">\n    Chain...\n  </div>\n  <div class=\"five column divided stackable center aligned ui grid\">\n    <div class=\"cloumn\">\n      <div class=\"ui huge-icon icon header step\">\n        <i class=\"hospital outline circular link icon\">\n          <div class=\"hospital-details\">\n            <div class=\"content\">\n              <div class=\"ui small primary button\">Add</div>\n              <div class=\"ui small button\">View</div>\n            </div>\n          </div>\n        </i>\n        <div class=\"content\">\n            <div class=\"title\">Confirm Order</div>\n            <div class=\"description\">Sample Step 2</div>\n          </div>\n      </div>\n    </div>\n    <div class=\"cloumn\">\n      <div class=\"ui huge-icon icon header\">\n        <i class=\"user md circular link icon\"></i>\n      </div>\n    </div>\n    <div class=\"cloumn\">\n      <div class=\"ui huge-icon icon header\">\n        <i class=\"ambulance circular link icon disabled\"></i>\n      </div>\n    </div>\n    <div class=\"cloumn\">\n      <div class=\"ui huge-icon icon header\">\n        <i class=\"medkit circular link icon\"></i>\n      </div>\n    </div>\n    <div class=\"cloumn\">\n      <div class=\"ui huge-icon icon header\">\n        <i class=\"hospital circular link icon\"></i>\n      </div>\n    </div>\n  </div>\n</div> -->\n\n<!-- <div class=\"col-xs-6 col-sm-3 placeholder\">\n    <h4>Block</h4>\n    <span class=\"text-muted\" id=\"label2\"></span>\n  </div>\n  <div class=\"col-xs-6 col-sm-3 placeholder\">\n      <h4>Sols</h4>\n      <span class=\"text-muted\" id=\"label3\"></span>\n    </div> -->"

/***/ }),

/***/ "./src/app/chain/chain.component.ts":
/*!******************************************!*\
  !*** ./src/app/chain/chain.component.ts ***!
  \******************************************/
/*! exports provided: ChainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChainComponent", function() { return ChainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../app.constant */ "./src/app/app.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import '../../assets/contract.js';
var ChainComponent = /** @class */ (function () {
    function ChainComponent() {
        this.maxTemperature = _app_constant__WEBPACK_IMPORTED_MODULE_1__["MAX_TEMP"];
    }
    ChainComponent.prototype.ngOnInit = function () {
        console.log('in chain: ', this.shipmentData);
        for (var _i = 0, _a = Object.keys(this.shipmentData); _i < _a.length; _i++) {
            var key = _a[_i];
            var temp = this.shipmentData[key];
            this.shipmentData[key + 'humidity'] = this.getHumidity();
        }
        console.log(this.shipmentData);
    };
    ChainComponent.prototype.getHumidity = function () {
        return Math.trunc(Math.random() * (60 - 50) + 50);
    };
    ChainComponent.prototype.getShipmentStatus = function (temp) {
        return temp > this.maxTemperature ? 'error' : '';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ChainComponent.prototype, "shipmentData", void 0);
    ChainComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-chain',
            template: __webpack_require__(/*! ./chain.component.html */ "./src/app/chain/chain.component.html"),
            styles: [__webpack_require__(/*! ./chain.component.css */ "./src/app/chain/chain.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ChainComponent);
    return ChainComponent;
}());



/***/ }),

/***/ "./src/app/contracts.service.ts":
/*!**************************************!*\
  !*** ./src/app/contracts.service.ts ***!
  \**************************************/
/*! exports provided: ContractsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractsService", function() { return ContractsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! web3 */ "./node_modules/web3/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_1__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var tokenAbi = __webpack_require__(/*! ../assets/contract.json */ "./src/assets/contract.json.js");
var ContractsService = /** @class */ (function () {
    // constructor() {
    //   if (typeof window.web3 !== 'undefined') {
    //     // Use Mist/MetaMask's provider
    //     this._web3 = new Web3(window.web3.currentProvider);
    //     if (this._web3.version.network !== '4') {
    //       alert('Please connect to the Rinkeby network');
    //     }
    //   } else {
    //     console.warn(
    //       'Please use a dapp browser like mist or MetaMask plugin for chrome'
    //     );
    //   }
    //   this._tokenContract = this._web3.eth.contract(tokenAbi).at(this._tokenContractAddress);
    // }
    function ContractsService() {
        this._account = '0xe6acf686f91b529f4c89f801e02081d4bb54f1fe';
        this.web3Provider = null;
        this._tokenContractAddress = '0x692a70d2e424a56d2c6c27aa97d1a86395877b3a';
        if (typeof window.web3 !== 'undefined') {
            // this._web3 = new Web3.providers.HttpProvider('http://localhost:8545');
            this._web3 = new web3__WEBPACK_IMPORTED_MODULE_1__(window.web3.currentProvider);
        }
        this._web3.eth.defaultAccount = this._account;
        this._tokenContract = this._web3.eth.contract(tokenAbi).at(this._tokenContractAddress);
        console.log('connected: ', this._tokenContract);
    }
    ContractsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], ContractsService);
    return ContractsService;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".ui.inverted.table {\r\n    background: #607D8B;\r\n}\r\n\r\n.fail, .error {\r\n    background: #f0adad80!important;\r\n}\r\n\r\n.error-message {\r\n    color: #f3b7b7;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    font-weight: 600;\r\n}\r\n\r\n.fail:hover {\r\n    background: #f0adad80;\r\n}\r\n\r\n.shipment {\r\n    cursor: pointer;\r\n}\r\n\r\n.success {\r\n    background: #ccf2cc !important;\r\n}\r\n\r\n.secret-input {\r\n    width: 50%;\r\n    margin-left: 25%;\r\n}\r\n\r\n#shipment-table {\r\n    position: relative;\r\n    display: inline-block;\r\n    width: 100%;\r\n}\r\n\r\n.wrapper {\r\n    height: 450px;\r\n    overflow-x: auto;\r\n}\r\n\r\n#shipment-table thead tr {\r\n    position: absolute;\r\n}\r\n\r\ntable {\r\n\tmax-width:100%;\r\n\ttable-layout:fixed;\r\n\tmargin:auto;\r\n}\r\n\r\nthead, tfoot {\r\n\tdisplay:table;\r\n\twidth:100%;\r\n\t/* width:calc(100% - 18px); */\r\n}\r\n\r\ntbody {\r\n\theight: 430px;\r\n\toverflow:auto;\r\n\toverflow-x:hidden;\r\n\tdisplay:block;\r\n\twidth:100%;\r\n}\r\n\r\n@media (min-height:768px) and (min-width:1366px) {\r\n    tbody {\r\n        height: 592px;\r\n    }\r\n}\r\n\r\ntbody tr {\r\n\tdisplay:table;\r\n\twidth:100%;\r\n\ttable-layout:fixed;\r\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 class=\"text-center\">Welcome to SafeMeds</h2> {{MAX_TEMP}}\n<button class=\"ui instagram icon right floated button\" (click)=\"getTimeSeries()\" style=\"margin-bottom: 5px;\">\n  <!-- <i class=\"pause icon\" *ngIf=\"timerToggle\" (click)=\"stopGettingData()\"></i> -->\n  <i class=\"cloud download icon\"></i>&nbsp; Get Shipment Data\n</button>\n<div class=\"\">\n  <table class=\"ui selectable inverted table segment\">\n    <thead>\n      <tr>\n        <th class=\"three wide\">Shipment Id</th>\n        <th class=\"two wide\">Manufacturer</th>\n        <th class=\"two wide\">Distributer</th>\n        <th class=\"two wide\">Wholesale Dealer</th>\n        <th class=\"two wide\">Retailer</th>\n        <th class=\"two wide\">Pharmacy</th>\n        <th class=\"three wide\">Status</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let shipment of shipments; let i = index;\" [ngClass]=\"{'fail': shipment.status === 'FAIL', 'shipment': true}\"\n        (click)=\"openSecretPopup(shipment)\">\n        <!-- <td class=\"three wide\">0300{{i+1}}23{{i}}</td> -->\n        <td class=\"three wide\">{{shipment.shipmentId}}</td>\n        <td class=\"two wide\">xxx...xxx</td>\n        <td class=\"two wide\">xxx...xxx</td>\n        <td class=\"two wide\">xxx...xxx</td>\n        <td class=\"two wide\">xxx...xxx</td>\n        <td class=\"two wide\">xxx...xxx</td>\n        <td class=\"three wide\">{{ shipment.status }}</td>\n      </tr>\n      <div class=\"ui active dimmer\" *ngIf=\"timerToggle\">\n        <div class=\"ui inverted active centered inline loader\"></div>\n      </div>\n    </tbody>\n  </table>\n</div>\n<!-- <br> -->\n\n<div *ngIf=\"selectedShipment\">\n  <app-chain [shipmentData]=\"selectedShipment\"></app-chain>\n</div>\n\n<div class=\"ui basic modal password\">\n  <i class=\"close icon\"></i>\n  <div class=\"ui icon header\">\n    <i class=\"lock icon\"></i>\n    <!-- Secret -->\n  </div>\n  <div class=\"content\">\n    <div class=\"ui form\">\n      <div class=\"secret-input\">\n        <input type=\"password\" [(ngModel)]=\"key\" placeholder=\"Provide Secret Key...\">\n      </div>\n      <div class=\"header error-message\" *ngIf=\"secretError\">Invalid Secret Key !</div>\n    </div>\n  </div>\n  <div class=\"actions text-center\">\n    <div class=\"ui positive right labeled icon button deny\" (click)=\"openShipmentStatus(key)\">\n      Yep, that's me\n      <i class=\"checkmark icon\"></i>\n    </div>\n  </div>\n</div>\n\n<!-- <div class=\"ui modal status\">\n    <div class=\"header\">\n      Profile Picture\n    </div>\n    <div class=\"image content\">\n      <div class=\"ui medium image\">\n        <img src=\"../../assets/Pradeep_pic.jpg\">\n      </div>\n      <div class=\"description\">\n        <div class=\"ui header\">We've auto-chosen a profile image for you.</div>\n        <p>We've grabbed the following image from the\n          <a href=\"https://www.gravatar.com\" target=\"_blank\">gravatar</a> image associated with your registered e-mail address.</p>\n        <p>Is it okay to use this photo?</p>\n      </div>\n    </div>\n    <div class=\"actions\">\n      <div class=\"ui black deny button\">\n        Nope\n      </div>\n      <div class=\"ui positive right labeled icon button\">\n        Yep, that's me\n        <i class=\"checkmark icon\"></i>\n      </div>\n    </div>\n  </div> -->"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _shipment_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./shipment.model */ "./src/app/dashboard/shipment.model.ts");
/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app.constant */ "./src/app/app.constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var DashboardComponent = /** @class */ (function () {
    // shipments = [{ 'man': '11', 'd': '22', 'hsd': '11', 'ld': '33', 'sel': '11', 'status': 'PASS' },
    // { 'man': '11', 'd': '22', 'hsd': '11', 'ld': '33', 'sel': '11', 'status': 'PASS' },
    // { 'man': '11', 'd': '22', 'hsd': '11', 'ld': '33', 'sel': '11', 'status': 'PASS' },
    // { 'man': '11', 'd': '22', 'hsd': '11', 'ld': '33', 'sel': '11', 'status': 'FAIL' },
    // { 'man': '11', 'd': '22', 'hsd': '11', 'ld': '33', 'sel': '11', 'status': 'PASS' },
    // { 'man': '11', 'd': '22', 'hsd': '11', 'ld': '33', 'sel': '11', 'status': 'PASS' },
    // { 'man': '11', 'd': '22', 'hsd': '11', 'ld': '33', 'sel': '11', 'status': 'FAIL' },
    // { 'man': '11', 'd': '22', 'hsd': '11', 'ld': '33', 'sel': '11', 'status': 'PASS' },
    // { 'man': '11', 'd': '22', 'hsd': '11', 'ld': '33', 'sel': '11', 'status': 'PASS' },
    // { 'man': '11', 'd': '22', 'hsd': '11', 'ld': '33', 'sel': '11', 'status': 'FAIL' },
    // { 'man': '11', 'd': '22', 'hsd': '11', 'ld': '33', 'sel': '11', 'status': 'PASS' },
    // { 'man': '11', 'd': '22', 'hsd': '11', 'ld': '33', 'sel': '11', 'status': 'PASS' },
    // { 'man': '11', 'd': '22', 'hsd': '11', 'ld': '33', 'sel': '11', 'status': 'FAIL' },
    // { 'man': '11', 'd': '22', 'hsd': '11', 'ld': '33', 'sel': '11', 'status': 'PASS' },
    // { 'man': '11', 'd': '22', 'hsd': '11', 'ld': '33', 'sel': '11', 'status': 'PASS' }];
    function DashboardComponent(_http) {
        this._http = _http;
        this.maxTemperature = _app_constant__WEBPACK_IMPORTED_MODULE_3__["MAX_TEMP"];
        this.shipments = [];
        this.count = 0;
        // this.getTimeSeries();
        // this.timer = setInterval(() => this.getTimeSeries(), 2000);
    }
    DashboardComponent.prototype.ngOnInit = function () {
        this.getTimeSeries();
        // this._http.get('http://localhost:3000/account')
        //   .subscribe((res) => {
        //     console.log(res.text());
        //   });
    };
    DashboardComponent.prototype.getTimeSeriesPLAY = function () {
        var _this = this;
        this.getTimeSeries();
        this.timer = setInterval(function () { return _this.getTimeSeries(); }, 2000);
    };
    DashboardComponent.prototype.getTimeSeries = function () {
        var _this = this;
        // this.timerToggle = true;
        var headers1 = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]({ 'Access-Control-Allow-Origin': 'http://localhost:4200' });
        headers1.append('Content-Type', 'application/json');
        // this._http.get('http://132.186.65.165:8090/api/iottimeseries/v3/timeseries', { headers: headers1 })
        //   .subscribe((res) => {
        //     console.log(res.text());
        //     this.timerToggle = false;
        //     this.shipments.push(this.populateShipment(res.text()));
        //   });
        // this._http.get('http://132.186.66.28:3000/getShipmentData')
        //   .subscribe((res) => {
        //     console.log(res.text());
        //     this.timerToggle = false;
        //     this.shipments.push(this.populateShipment(res.text()));
        //   });
        // return this.http.get('../../assets/datasets.json').subscribe(response => {
        //   this.datasets = response;
        // });
        if (this.count === 2 || this.count === 5 || this.count === 6) {
            this._http.get('../../assets/shipments2.json')
                .subscribe(function (res) {
                console.log(res.text());
                _this.timerToggle = false;
                _this.shipments.push(_this.populateShipment(res.text()));
            });
        }
        else {
            this._http.get('../../assets/shipments.json')
                .subscribe(function (res) {
                console.log(res.text());
                _this.timerToggle = false;
                _this.shipments.push(_this.populateShipment(res.text()));
            });
        }
        this.count++;
    };
    DashboardComponent.prototype.stopGettingData = function () {
        this.timerToggle = false;
        clearInterval(this.timer);
    };
    DashboardComponent.prototype.populateShipment = function (shipment) {
        var shipmentData = new _shipment_model__WEBPACK_IMPORTED_MODULE_2__["Shipment"]();
        shipmentData = JSON.parse(shipment);
        shipmentData.status = this.getStatus(shipmentData);
        shipmentData['shipmentId'] = Math.floor(Math.random() * 1000000000);
        console.log('res: ', shipmentData);
        return shipmentData;
    };
    DashboardComponent.prototype.getStatus = function (shipment) {
        return shipment.manufacturer > this.maxTemperature ? 'FAIL' : shipment.dist > this.maxTemperature ? 'FAIL' :
            shipment.wholesaler > this.maxTemperature ? 'FAIL' : shipment.retailer > this.maxTemperature ? 'FAIL' :
                shipment.pharmacy > this.maxTemperature ? 'FAIL' : 'PASS';
    };
    DashboardComponent.prototype.openShipmentStatus = function (secret) {
        if (this.validateKey(secret)) {
            this.secretError = false;
            setTimeout(function () {
                $('.status').modal('show');
            }, 500);
        }
        else {
            this.secretError = true;
        }
    };
    DashboardComponent.prototype.validateKey = function (secret) {
        return secret === _app_constant__WEBPACK_IMPORTED_MODULE_3__["SECRET"];
    };
    DashboardComponent.prototype.openSecretPopup = function (shipment) {
        this.selectedShipment = shipment;
        this.key = '';
        $('.ui.modal.password')
            .modal({
            // selector: {
            //   close: '.actions .button',
            //   deny: '.actions .negative, .actions .deny, .actions .cancel, .close'
            // },
            closable: false,
            blurring: true,
            onDeny: function () {
                // window.alert('Wait not yet!');
                return false;
            },
            onApprove: function () {
                // return this.validateKey(this.key);
                return false;
            }
        })
            .modal('show');
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/shipment.model.ts":
/*!*********************************************!*\
  !*** ./src/app/dashboard/shipment.model.ts ***!
  \*********************************************/
/*! exports provided: Shipment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shipment", function() { return Shipment; });
var Shipment = /** @class */ (function () {
    function Shipment() {
    }
    return Shipment;
}());



/***/ }),

/***/ "./src/assets/contract.json.js":
/*!*************************************!*\
  !*** ./src/assets/contract.json.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

var abiArray =
[
{"constant":false,
"inputs":
[
	{"name":"LocationId",
	"type":"uint256"},
	{"name":"Temperature",
	"type":"uint256"},
	{"name":"Humidity",
	"type":"uint256"},
	{"name":"Name",
	"type":"string"},
	{"name":"Secret",
	"type":"string"}
],
"name":"AddNewLocation",
"outputs":[],
"payable":false,
"stateMutability":"nonpayable",
"type":"function"},
{"constant":false,
"inputs":[],
"name":"GetLocation",
"outputs":[{"name":"",
"type":"string"}],
"payable":false,
"stateMutability":"nonpayable",
"type":"function"},
{"constant":false,
"inputs":[],
"name":"GetTrailCount",
"outputs":[{"name":"",
"type":"uint8"}],
"payable":false,
"stateMutability":"nonpayable",
"type":"function"},
{"constant":false,
"inputs":[{"name":"TrailNo",
"type":"uint8"}],
"name":"GetLocation",
"outputs":[{"name":"",
"type":"string"},
{"name":"",
"type":"uint256"},
{"name":"",
"type":"uint256"},
{"name":"",
"type":"uint256"},
{"name":"",
"type":"uint256"},
{"name":"",
"type":"uint256"},
{"name":"",
"type":"string"}],
"payable":false,
"stateMutability":"nonpayable",
"type":"function"}
]

/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\HACKathon\CLD-Inno-080\safeMeds2k18\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map