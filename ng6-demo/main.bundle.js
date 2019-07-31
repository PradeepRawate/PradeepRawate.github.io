webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-router.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRouterModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__servers_servers_component__ = __webpack_require__("./src/app/servers/servers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user_resolve_service__ = __webpack_require__("./src/app/user/user-resolve.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");






var appRoutes = [
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_5__login_login_component__["a" /* LoginComponent */] },
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */] },
    { path: 'workspace', component: __WEBPACK_IMPORTED_MODULE_1__servers_servers_component__["a" /* ServersComponent */] },
    {
        path: 'user',
        component: __WEBPACK_IMPORTED_MODULE_3__user_user_component__["a" /* UserComponent */],
        resolve: {
            users: __WEBPACK_IMPORTED_MODULE_4__user_user_resolve_service__["a" /* UserResolveService */]
        }
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' }
];
var AppRouterModule = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(appRoutes, { enableTracing: false });


/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ".user-icon {\r\n    font-size: 2rem;\r\n    color: white;\r\n    cursor: pointer;\r\n}\r\n\r\nnav {\r\n   padding: 0px 4rem 0px 4rem;\r\n}\r\n\r\n.dropdown-item {\r\n    padding: 4px 10px 4px 15px;\r\n    overflow: hidden;\r\n    color: #24292e;\r\n    text-overflow: ellipsis;\r\n    white-space: nowrap;\r\n    cursor: pointer;\r\n}\r\n\r\n.dropdown-header {\r\n    padding: 4px 10px 4px 15px;\r\n}\r\n\r\n.dropdown-item:hover {\r\n    background-color: #099 !important;\r\n    color: white;\r\n}\r\n\r\n.dropdown-menu-sw {\r\n    right: -2px;\r\n    left: auto;\r\n}\r\n\r\n.dropdown-menu {\r\n    display: block;\r\n    position: absolute;\r\n    top: 100%;\r\n    width: 180px;\r\n    margin-top: 8px;\r\n    z-index: 100;\r\n    width: 160px;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    margin-top: 7px;\r\n    list-style: none;\r\n    background-color: #fff;\r\n    background-clip: padding-box;\r\n    border: 1px solid rgba(27,31,35,0.15);\r\n    border-radius: 4px;\r\n    -webkit-box-shadow: 0 3px 12px rgba(27,31,35,0.15);\r\n            box-shadow: 0 3px 12px rgba(27,31,35,0.15);\r\n}\r\n\r\n.dropdown-divider {\r\n    height: 1px;\r\n    margin: 8px 1px;\r\n    background-color: #e1e4e8;\r\n}\r\n\r\n.dropdown-menu-sw::before {\r\n    top: -16px;\r\n    right: 9px;\r\n    left: auto;\r\n}\r\n\r\n.dropdown-menu::before {\r\n    border: 8px solid transparent;\r\n    border-bottom-color: rgba(27,31,35,0.15);\r\n}\r\n\r\n.dropdown-menu::before, .dropdown-menu::after {\r\n    position: absolute;\r\n    display: inline-block;\r\n    content: \"\";\r\n}\r\n\r\n.dropdown-menu-sw::after {\r\n    top: -14px;\r\n    right: 10px;\r\n    left: auto;\r\n}\r\n\r\n.dropdown-menu::after {\r\n    border: 7px solid transparent;\r\n    border-bottom-color: #fff;\r\n}\r\n\r\n.dropdown-menu::before, .dropdown-menu::after {\r\n    position: absolute;\r\n    display: inline-block;\r\n    content: \"\";\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- NavBar -->\r\n<!-- example 1 - using absolute position for center -->\r\n<nav class=\"navbar navbar-expand-md md-theme navbar-dark fixed-top\" *ngIf=\"globals.isUserLoggedIn\">\r\n  <a class=\"navbar-brand\" href=\"#\">\r\n    My\r\n    <img width=\"50\" alt=\"Angular Logo\" src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNTAgMjUwIj4KICAgIDxwYXRoIGZpbGw9IiNERDAwMzEiIGQ9Ik0xMjUgMzBMMzEuOSA2My4ybDE0LjIgMTIzLjFMMTI1IDIzMGw3OC45LTQzLjcgMTQuMi0xMjMuMXoiIC8+CiAgICA8cGF0aCBmaWxsPSIjQzMwMDJGIiBkPSJNMTI1IDMwdjIyLjItLjFWMjMwbDc4LjktNDMuNyAxNC4yLTEyMy4xTDEyNSAzMHoiIC8+CiAgICA8cGF0aCAgZmlsbD0iI0ZGRkZGRiIgZD0iTTEyNSA1Mi4xTDY2LjggMTgyLjZoMjEuN2wxMS43LTI5LjJoNDkuNGwxMS43IDI5LjJIMTgzTDEyNSA1Mi4xem0xNyA4My4zaC0zNGwxNy00MC45IDE3IDQwLjl6IiAvPgogIDwvc3ZnPg==\">App\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsingNavbar\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n  <div class=\"navbar-collapse collapse\" id=\"collapsingNavbar\">\r\n    <ul class=\"navbar-nav\">\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/home\" routerLinkActive=\"active\">Home</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/workspace\" routerLinkActive=\"active\">Workspace</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link\" routerLink=\"/user\" routerLinkActive=\"active\">Admin</a>\r\n      </li>\r\n      <li class=\"nav-item\">\r\n        <a class=\"nav-link disabled\">Mindsphere</a>\r\n      </li>\r\n    </ul>\r\n    <ul class=\"navbar-nav ml-auto\">\r\n      <li class=\"nav-item pull-right\" style=\"position: relative;\">\r\n        <span class=\"\" (click)=\"showDropdown($event)\" >\r\n          <i class=\"fa fa-user-circle-o user-icon\"></i>\r\n        </span>\r\n        <ul id=\"profileDropdown\" *ngIf=\"profileDropdown\" class=\"dropdown-menu dropdown-menu-sw collapse\">\r\n          <li class=\"dropdown-header\">Signed in as <div><b>Pradeep Rawate</b></div></li>\r\n          <li class=\"dropdown-divider\"></li>\r\n          <li class=\"dropdown-item\" (click)=\"logout()\">\r\n            <span class=\"\" >Logout</span>\r\n          </li>\r\n        </ul>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n<!-- Navbar End -->\r\n<div style=\"padding-top: 4.7rem\">\r\n  <router-outlet>\r\n    <app-ms-loader></app-ms-loader>\r\n    <app-popup></app-popup>\r\n  </router-outlet>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_global_service__ = __webpack_require__("./src/app/services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(globals, router) {
        this.globals = globals;
        this.router = router;
        this.title = 'My App';
        this.profileDropdown = false;
    }
    AppComponent.prototype.clear = function (event) {
        this.profileDropdown = false;
    };
    AppComponent.prototype.showDropdown = function ($event) {
        this.profileDropdown = !this.profileDropdown;
        $event.preventDefault();
        $event.stopPropagation();
    };
    AppComponent.prototype.logout = function () {
        this.globals.isUserLoggedIn = false;
        this.router.navigate(['login']);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["y" /* HostListener */])('document:click', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "clear", null);
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_global_service__["a" /* Globals */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* Router */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_http_interceptor_service__ = __webpack_require__("./src/app/services/http-interceptor.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__server_server_component__ = __webpack_require__("./src/app/server/server.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__servers_servers_component__ = __webpack_require__("./src/app/servers/servers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__client_client_component__ = __webpack_require__("./src/app/client/client.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__client_client_service__ = __webpack_require__("./src/app/client/client.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__home_home_component__ = __webpack_require__("./src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__app_router_module__ = __webpack_require__("./src/app/app-router.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__user_user_component__ = __webpack_require__("./src/app/user/user.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__user_user_resolve_service__ = __webpack_require__("./src/app/user/user-resolve.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__user_user_service__ = __webpack_require__("./src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__loader_loader_service__ = __webpack_require__("./src/app/loader/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__loader_loader_component__ = __webpack_require__("./src/app/loader/loader.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__popup_popup_component__ = __webpack_require__("./src/app/popup/popup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_utility_service__ = __webpack_require__("./src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pipes_key_value_pipe__ = __webpack_require__("./src/app/pipes/key-value.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__login_login_component__ = __webpack_require__("./src/app/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_global_service__ = __webpack_require__("./src/app/services/global.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



// import { HttpClientModule } from '@angular/common/http';






















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_17__loader_loader_component__["a" /* LoaderComponent */],
                __WEBPACK_IMPORTED_MODULE_18__popup_popup_component__["a" /* PopupComponent */],
                __WEBPACK_IMPORTED_MODULE_6__server_server_component__["a" /* ServerComponent */],
                __WEBPACK_IMPORTED_MODULE_7__servers_servers_component__["a" /* ServersComponent */],
                __WEBPACK_IMPORTED_MODULE_9__client_client_component__["a" /* ClientComponent */],
                __WEBPACK_IMPORTED_MODULE_11__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_13__user_user_component__["a" /* UserComponent */],
                __WEBPACK_IMPORTED_MODULE_21__pipes_key_value_pipe__["a" /* MapToIterable */],
                __WEBPACK_IMPORTED_MODULE_22__login_login_component__["a" /* LoginComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_12__app_router_module__["a" /* AppRouterModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_16__loader_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_10__client_client_service__["a" /* ClientService */], __WEBPACK_IMPORTED_MODULE_15__user_user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_14__user_user_resolve_service__["a" /* UserResolveService */], __WEBPACK_IMPORTED_MODULE_19__services_utility_service__["a" /* UtilityService */], __WEBPACK_IMPORTED_MODULE_20__services_auth_service__["a" /* AuthService */], __WEBPACK_IMPORTED_MODULE_23__services_global_service__["a" /* Globals */],
                { provide: __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HTTP_INTERCEPTORS */], useClass: __WEBPACK_IMPORTED_MODULE_5__services_http_interceptor_service__["a" /* InterceptorService */], multi: true }],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/client/client.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/client/client.component.html":
/***/ (function(module, exports) {

module.exports = "Child ...<div>\r\n  Input from Parent : {{childMessage.status}} <br>\r\n  <div class=\"btn btn-primary\" (click)=\"sendSignal()\">Send</div> Data to Parent: {{message}}\r\n</div><br>\r\nData from HTTP get Call : \r\n<div *ngFor=\"let emp of data\">\r\n  Id: {{emp.id}}\r\n  Name: {{emp.name}} \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/client/client.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__client_service__ = __webpack_require__("./src/app/client/client.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ClientComponent = /** @class */ (function () {
    function ClientComponent(_clientService) {
        this._clientService = _clientService;
        this.signal = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* EventEmitter */]();
        this.message = 'Out';
    }
    ClientComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._clientService.getdata()
            .subscribe(function (data) { return _this.data = data; }, function (error) { return console.log(error); });
    };
    ClientComponent.prototype.sendSignal = function () {
        this.message = this.message === 'Out' ? 'Not-Out' : 'Out';
        this.signal.emit(this.message);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["D" /* Input */])(),
        __metadata("design:type", Object)
    ], ClientComponent.prototype, "childMessage", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["P" /* Output */])(),
        __metadata("design:type", Object)
    ], ClientComponent.prototype, "signal", void 0);
    ClientComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-client',
            template: __webpack_require__("./src/app/client/client.component.html"),
            styles: [__webpack_require__("./src/app/client/client.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__client_service__["a" /* ClientService */]])
    ], ClientComponent);
    return ClientComponent;
}());



/***/ }),

/***/ "./src/app/client/client.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ClientService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/do.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ClientService = /** @class */ (function () {
    function ClientService(_http) {
        this._http = _http;
    }
    ClientService.prototype.getdata = function () {
        return this._http.get('assets/data.json')
            .map(function (response) { return response.json(); })
            .do(function (data) { return console.log(data); });
    };
    ClientService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
    ], ClientService);
    return ClientService;
}());



/***/ }),

/***/ "./src/app/home/home.component.css":
/***/ (function(module, exports) {

module.exports = ".md-pic { \r\n    /* The image used */\r\n    background-image:url('fb-img.70b78e6bd6be6cbe1353.jpg');\r\n\r\n    /* Set rules to fill background */\r\n    min-height: 100%;\r\n    width: 100%;\r\n    height: auto;\r\n    background-position: center;\r\n    background-repeat: round;     \r\n    position: fixed;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n/* .md-pic:before{\r\n    content: '';\r\n    position: absolute;\r\n    top: 0;\r\n    right: 0;\r\n    left: 0;\r\n    bottom: 0;\r\n    background: #0040315e;\r\n} */"

/***/ }),

/***/ "./src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms-container\">\r\n    <br>\r\n    <div class=\"row col-lg-8\">\r\n        <div class=\"p-5 ml-4 caption-bg caption-text\">\r\n            <h1 class=\"\">MindSphere - The Internet of Things (IoT) Solution</h1>\r\n            <p>MindSphere is the cloud-based, open IoT operating system from Siemens that connects your products, plants, systems,\r\n                and machines, enabling you to harness the wealth of data generated by the Internet of Things (IoT) with advanced\r\n                analytics.\r\n            </p>\r\n            <h4>Open IoT operating system</h4>\r\n            <p>MindSphere delivers wide range of device and enterprise system connectivity protocol options, industry applications,\r\n                advanced analytics and an innovative development environment that utilizes both Siemens’ open Platform-as-a-Service\r\n                (PaaS) capabilities along with access to AWS cloud services.</p>\r\n            <p>Through these capabilities, MindSphere connects real things to the digital world and provides powerful industry\r\n                applications and digital services to help drive business success.</p>\r\n            <p>MindSphere’s open PaaS capabilities enable a rich partner ecosystem to develop and deliver industry applications.\r\n                Profit from the experience and insights of our partners. No development required on your part to advance\r\n                your IoT strategy.</p>\r\n            <p>Siemens provides business-focused solutions to help drive closed-loop innovation through digital twins for products,\r\n                production, and performance.</p>\r\n        </div>\r\n    </div>\r\n    <!-- <div class=\"col-md-4\">\r\n            <img src=\"../../assets/Mindsphere-Small.jpg\" alt=\"\">\r\n        </div> -->\r\n</div>"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("./src/app/home/home.component.html"),
            styles: [__webpack_require__("./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/loader/loader.component.css":
/***/ (function(module, exports) {

module.exports = "/* Absolute Center Spinner */\r\n.loading {\r\n  position: fixed;\r\n  z-index: 999;\r\n  height: 2em;\r\n  width: 2em;\r\n  overflow: show;\r\n  margin: auto;\r\n  top: 0;\r\n  left: 0;\r\n  bottom: 0;\r\n  right: 0;\r\n}\r\n/* Transparent Overlay */\r\n.loading:before {\r\n  content: '';\r\n  display: block;\r\n  position: fixed;\r\n  top: 0;\r\n  left: 0;\r\n  width: 100%;\r\n  height: 100%;\r\n  background-color: rgba(0,0,0,0.3);\r\n}\r\n/* :not(:required) hides these rules from IE9 and below */\r\n.loading:not(:required) {\r\n  /* hide \"loading...\" text */\r\n  font: 0/0 a;\r\n  color: transparent;\r\n  text-shadow: none;\r\n  background-color: transparent;\r\n  border: 0;\r\n}\r\n.loading:not(:required):after {\r\n  content: '';\r\n  display: block;\r\n  position: absolute;\r\n  margin: -2rem 0rem 0rem 0rem;\r\n  -webkit-animation: spinner 800ms linear infinite;\r\n  animation: spinner 800ms linear infinite;\r\n  -webkit-animation: spinner 800ms linear infinite;\r\n  animation: spinner 800ms linear infinite;\r\n  width: 80px;\r\n  height: 80px;\r\n  border-radius: 50%;\r\n  /* box-shadow: 0 4px 0 0 #79ffe6; */\r\n  /* animation: spinner .6s infinite linear; */\r\n    border-left: 6px solid rgba(0,174,239,.15);\r\n    border-right: 6px solid rgba(0,174,239,.15);\r\n    border-bottom: 6px solid rgba(0,174,239,.15);\r\n    border-top: 6px solid rgb(0, 137, 138);\r\n    border-radius: 100%;\r\n  /* -webkit-transform-origin: 80px 82px; */\r\n  /* transform-origin: 80px 82px; */\r\n}\r\n/* Animation */\r\n@-webkit-keyframes spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}\r\n@keyframes spinner {\r\n  0% {\r\n    -webkit-transform: rotate(0deg);\r\n    transform: rotate(0deg);\r\n  }\r\n  100% {\r\n    -webkit-transform: rotate(360deg);\r\n    transform: rotate(360deg);\r\n  }\r\n}"

/***/ }),

/***/ "./src/app/loader/loader.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"showLoader\">\r\n        <div class=\"loading\"></div>\r\n</div>\r\n<!-- Modal -->\r\n<div id=\"myModal\" class=\"modal fade\" role=\"dialog\" *ngIf=\"showAlert\">\r\n        <div class=\"modal-dialog\">\r\n                <!-- Modal content-->\r\n                <div class=\"modal-content\">\r\n                        <div class=\"modal-header\">\r\n                                <button type=\"button\" class=\"close\" data-dismiss=\"modal\">&times;</button>\r\n                                <h4 class=\"modal-title\">Modal Header</h4>\r\n                        </div>\r\n                        <div class=\"modal-body\">\r\n                                <p>Some text in the modal.</p>\r\n                        </div>\r\n                        <div class=\"modal-footer\">\r\n                                <button type=\"button\" class=\"btn btn-default\" data-dismiss=\"modal\">Close</button>\r\n                        </div>\r\n                </div>\r\n        </div>\r\n</div>"

/***/ }),

/***/ "./src/app/loader/loader.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__loader_service__ = __webpack_require__("./src/app/loader/loader.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoaderComponent = /** @class */ (function () {
    function LoaderComponent(loaderService) {
        this.loaderService = loaderService;
    }
    LoaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.loaderService.status.subscribe(function (val) {
            console.log('loader status changes to :', val);
            _this.showLoader = val;
        });
    };
    LoaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-ms-loader',
            template: __webpack_require__("./src/app/loader/loader.component.html"),
            styles: [__webpack_require__("./src/app/loader/loader.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__loader_service__["a" /* LoaderService */]])
    ], LoaderComponent);
    return LoaderComponent;
}());



/***/ }),

/***/ "./src/app/loader/loader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoaderService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var LoaderService = /** @class */ (function () {
    function LoaderService() {
        this.status = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
    }
    LoaderService.prototype.display = function (value) {
        this.status.next(value);
    };
    LoaderService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], LoaderService);
    return LoaderService;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/***/ (function(module, exports) {

module.exports = ".login-box {\r\n    background: #fff;\r\n    margin: 60px auto 40px;\r\n    padding: 40px;\r\n    -webkit-box-shadow: 0 0 40px #e3e3e3;\r\n            box-shadow: 0 0 40px #e3e3e3;\r\n    border-radius: 5px;\r\n    -webkit-transform-origin: 0 0;\r\n            transform-origin: 0 0;\r\n    -webkit-animation: swing-in .15s;\r\n            animation: swing-in .15s;\r\n    position: absolute;\r\n    top: 0;\r\n    bottom: 0;\r\n    left: 0;\r\n    right: 0;\r\n    width: 350px;\r\n    height: 300px;\r\n}\r\n\r\n.login-heading {\r\n    text-align: center;\r\n    margin-bottom: 10%;\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms-container\">\r\n  <div class=\"row\">\r\n    <!-- <div class=\"col-md-8 col-lg-8\"></div> -->\r\n    <div class=\"\">\r\n        <form class=\"login-box\">\r\n            <h4 class=\"login-heading\">Login to MyApp</h4>\r\n            <input type=\"text\" id=\"username\" name=\"username\" class=\"form-control\" placeholder=\"Username\" [(ngModel)]=\"credentials.username\" required autofocus><br>\r\n            <input type=\"password\" id=\"password\" name=\"password\" class=\"form-control\" placeholder=\"Password\" [(ngModel)]=\"credentials.password\" required><br>\r\n            <button class=\"btn btn-lg btn-primary btn-block\" (click)=\"login()\">Sign in</button>\r\n          </form>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_global_service__ = __webpack_require__("./src/app/services/global.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_auth_service__ = __webpack_require__("./src/app/services/auth.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, globals, authService) {
        this.router = router;
        this.globals = globals;
        this.authService = authService;
        this.credentials = {
            username: '',
            password: ''
        };
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.login = function () {
        this.globals.isUserLoggedIn = true;
        this.router.navigate(['/home']);
        var login = this.authService.login(this.credentials);
        login.then(function (response) {
            if (response) {
            }
        });
    };
    LoginComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-login',
            template: __webpack_require__("./src/app/login/login.component.html"),
            styles: [__webpack_require__("./src/app/login/login.component.css")],
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* Router */], __WEBPACK_IMPORTED_MODULE_2__services_global_service__["a" /* Globals */], __WEBPACK_IMPORTED_MODULE_3__services_auth_service__["a" /* AuthService */]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/models/error.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Error; });
var Error = /** @class */ (function () {
    function Error(msg, isError, statusCode, redirectUrl) {
        this.msg = msg;
        this.isError = isError;
        this.statusCode = statusCode;
        this.redirectUrl = redirectUrl;
    }
    return Error;
}());



/***/ }),

/***/ "./src/app/pipes/key-value.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MapToIterable; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var MapToIterable = /** @class */ (function () {
    function MapToIterable() {
    }
    MapToIterable.prototype.transform = function (value, args) {
        var keys = [];
        for (var key in value) {
            if (key) {
                keys.push({ key: key, value: value[key] });
            }
        }
        return keys;
    };
    MapToIterable = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'mapToIterable'
        })
    ], MapToIterable);
    return MapToIterable;
}());



/***/ }),

/***/ "./src/app/popup/popup.component.css":
/***/ (function(module, exports) {

module.exports = ".modal-dialog {\r\n    top: 4rem;\r\n}\r\n\r\n.modal-header, .modal-footer  {\r\n    padding: .5rem;\r\n}\r\n\r\n.modal-header {\r\n    background: darkcyan;\r\n}"

/***/ }),

/***/ "./src/app/popup/popup.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- Modal START -->\r\n<div id=\"msModal\" class=\"modal fade\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\" role=\"document\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header text-white\">\r\n        <h5 class=\"modal-title pl-2\">{{showAlert.isError ? 'Error' : 'Alert'}}</h5>\r\n        <button id=\"closeExampleModal\" type=\"button\" class=\"close text-white\" data-dismiss=\"modal\" aria-label=\"Close\">\r\n          <span aria-hidden=\"true\">×</span>\r\n        </button>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        {{showAlert.msg}}\r\n      </div>\r\n      <div *ngIf=\"showAlert.redirectUrl\" class=\"modal-footer\" data-dismiss=\"modal\">\r\n        <button type=\"button\" class=\"btn btn-secondary\" (click)=\"navigate(showAlert.redirectUrl)\">Back to Home</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n <!-- Modal END -->\r\n <button id=\"openModalButton\" [hidden]=\"true\" data-toggle=\"modal\" data-target=\"#msModal\" aria-hidden=\"true\">Open Modal</button>"

/***/ }),

/***/ "./src/app/popup/popup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PopupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery__ = __webpack_require__("./node_modules/jquery/dist/jquery.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_jquery___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_jquery__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_utility_service__ = __webpack_require__("./src/app/services/utility.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PopupComponent = /** @class */ (function () {
    function PopupComponent(utilityService, router) {
        this.utilityService = utilityService;
        this.router = router;
    }
    PopupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.utilityService.showAlert.subscribe(function (value) {
            console.log('alert :', value);
            _this.showAlert = value;
            return value.isError ? _this.openPopup(value) : null;
        });
    };
    PopupComponent.prototype.openPopup = function (value) {
        __WEBPACK_IMPORTED_MODULE_1_jquery__('#openModalButton').click();
    };
    PopupComponent.prototype.navigate = function (url) {
        this.router.navigateByUrl(url);
    };
    PopupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-popup',
            template: __webpack_require__("./src/app/popup/popup.component.html"),
            styles: [__webpack_require__("./src/app/popup/popup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_utility_service__["a" /* UtilityService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* Router */]])
    ], PopupComponent);
    return PopupComponent;
}());



/***/ }),

/***/ "./src/app/server/server.component.css":
/***/ (function(module, exports) {

module.exports = ".online {\r\n    background-color: lightgreen;\r\n}\r\n\r\n.offline {\r\n    background-color: rgb(243, 136, 136);\r\n}"

/***/ }),

/***/ "./src/app/server/server.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <div [ngStyle]=\"{backgroundColor: getColor()}\"> -->\r\n<div [ngClass]=\"(status === 'Online') ? 'online' : 'offline'\">\r\n    <p>Parent ...</p>  \r\n    Employee with Id {{ empId }} is {{ getEmployeeName() }}\r\n    <button class=\"btn btn-primary\" [disabled]=\"!btnVisibility\" (click)=\"onClick()\">Change Status</button>\r\n\r\n    <p *ngIf=\"status == 'Online';else other\">Server is Online</p>\r\n    <ng-template #other style=\"display: flex;\">\r\n        <p>Server is Offline</p>\r\n    </ng-template>\r\n    <p [hidden]=\"!signalFromChild\">Status changed from child...</p>\r\n\r\n</div>\r\n<app-client (signal)=\"getSignal($event)\" [childMessage]=\"myObject\"></app-client>\r\n<!-- <div [innerText]=\"status\"></div>\r\n<input type=\"text\" [(ngModel)]=\"status\"> -->"

/***/ }),

/***/ "./src/app/server/server.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var ServerComponent = /** @class */ (function () {
    function ServerComponent() {
        this.empId = 515548;
        this.empName = 'Pradeep Rawate';
        this.status = 'Offline';
        this.signalFromChild = false;
        this.myObject = {
            empId: this.empId,
            empName: this.empName,
            status: this.status
        };
    }
    ServerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getEmployeeId();
        setTimeout(function () {
            _this.btnVisibility = true;
        }, 2000);
    };
    ServerComponent.prototype.getEmployeeId = function () {
        return this.empId;
    };
    ServerComponent.prototype.getEmployeeName = function () {
        return this.empName;
    };
    ServerComponent.prototype.onClick = function () {
        this.signalFromChild = false;
        if (this.status === 'Offline') {
            this.status = 'Online';
        }
        else {
            this.status = 'Offline';
            this.myObject = {
                empId: this.empId,
                empName: this.empName,
                status: this.status
            };
        }
    };
    ServerComponent.prototype.getColor = function () {
        return this.status === 'Online' ? 'lightgreen' : 'rgba(255, 0, 0, 0.41)';
    };
    ServerComponent.prototype.getSignal = function ($event) {
        this.signalFromChild = true;
        this.status = $event === 'Out' ? 'Offline' : 'Online';
    };
    ServerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: '.app-server',
            template: __webpack_require__("./src/app/server/server.component.html"),
            styles: [__webpack_require__("./src/app/server/server.component.css")]
        })
    ], ServerComponent);
    return ServerComponent;
}());



/***/ }),

/***/ "./src/app/servers/servers.component.css":
/***/ (function(module, exports) {

module.exports = "\r\n/*.app-form {\r\n    margin-top: 1%;\r\n    padding-left: 0%;\r\n}\r\n*/\r\n\r\n.config-container {\r\n    margin: 1rem;\r\n}\r\n\r\n.col-add-component {\r\n    margin: 0;\r\n    margin-top: 2%;\r\n}\r\n\r\n.add-comp-btn {\r\n    border-bottom: 0;\r\n    color:  #009EFF;\r\n    margin-bottom:0px;\r\n    width: 34px;\r\n    height: 34px;\r\n}\r\n\r\n.add-component-modal {\r\n    min-width: 60vw;\r\n    min-height: 60vh;\r\n    margin-top: 15%;\r\n}\r\n\r\n.confirm-modal {\r\n    margin-top: 15%;\r\n}\r\n\r\n.component-table-row {\r\n    cursor: pointer;\r\n}\r\n\r\n.comp-table-cell-input {\r\n  width: 100%;\r\n  margin: 0px;\r\n  border: 2px solid #efefef !important;\r\n}\r\n\r\n.comp-table-cell-btn {\r\n  width: 100%;\r\n  margin: 0px;\r\n}\r\n\r\n.comp-table-remove-icon{\r\n   padding: 0px;\r\n   text-align: center;\r\n   vertical-align: inherit;\r\n   color: #f05050;\r\n }\r\n\r\n.comp-table-remove-icon:hover{\r\n  color: #f05050;\r\n}\r\n\r\n.fa-info-circle{\r\n    color:  #009EFF;\r\n    font-size: 15px;\r\n}\r\n\r\n.fa-info-circle:hover{\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\ncolor: cornflowerblue;\r\n}\r\n\r\n.home-icon{\r\n    font-size: 25px;\r\n}\r\n\r\n.form-group input{\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.app-heading{\r\n  padding-left: 15px;\r\n}\r\n\r\n.app-holder{\r\n  padding-top: 25px;\r\n  border: 1px solid #efefef;\r\n  height: 100%;\r\n}\r\n\r\ninput.ng-invalid.ng-touched.ng-pristine {\r\n  border-color: red !important;\r\n}\r\n\r\ninput.ng-invalid.ng-dirty.ng-touched {\r\n  border-color: red !important;\r\n}\r\n\r\n/*\r\n.table-fixed{\r\n    margin-bottom: 0px;\r\n}\r\n.table-fixed th{\r\n    width: 25%;\r\n    padding-right:10px;\r\n}\r\n\r\n.table-fixed td{\r\n    width: 25%;\r\n    padding:2px;\r\n    padding-right:10px;\r\n    padding-left: 15px;\r\n}\r\n.table-fixed td .form-control{\r\n    margin-bottom:2px;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    width:100%\r\n}\r\n*/\r\n\r\ntd .panel{\r\n    padding:5px;\r\n}\r\n\r\n.popbtn{\r\nfont-size: 12px;\r\n}\r\n\r\n.create-app-modal {\r\n    margin-top: 15%;\r\n    min-width: 40%;\r\n}\r\n\r\n.table-create-div{\r\n    height:220px;\r\n    overflow-y: auto;\r\n    border:1px solid #ddd;\r\n    margin-top: -2px;\r\n}\r\n\r\n/*\r\n *  STYLE 8\r\n */\r\n\r\n.scrollbarx\r\n {\r\n     margin-left: 10px;\r\n     float: left;\r\n     height: 300px;\r\n     background: #F5F5F5;\r\n     overflow-y: scroll;\r\n     margin-bottom: 25px;\r\n     border:1px solid #c3c3c3;\r\n }\r\n\r\n#style-8::-webkit-scrollbar-track\r\n {\r\n     border: 1px solid #ddd;\r\n     background-color: #F5F5F5;\r\n     width:5px;\r\n }\r\n\r\n#style-8::-webkit-scrollbar\r\n {\r\n     width: 10px;\r\n     background-color: #F5F5F5;\r\n }\r\n\r\n#style-8::-webkit-scrollbar-thumb\r\n {\r\n   background:   #009EFF\t;\r\n }\r\n\r\n.mt0{\r\n   color:  #009EFF\r\n }\r\n\r\n/*.app-form {\r\n    margin-top: 1%;\r\n    padding-left: 0%;\r\n}\r\n*/\r\n\r\n.col-add-component {\r\n    margin: 0;\r\n    margin-top: 2%;\r\n}\r\n\r\n.add-component-btn {\r\n\r\n}\r\n\r\n.add-component-btn:hover {\r\n    margin-bottom: -1px;\r\n    border: none;\r\n    background: transparent;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n}\r\n\r\n.add-component-btn:active {\r\n    margin-bottom: -1px;\r\n    border: none;\r\n    background: transparent;\r\n    -webkit-box-shadow: none;\r\n            box-shadow: none;\r\n}\r\n\r\n.add-component-modal {\r\n    min-width: 60vw;\r\n    min-height: 60vh;\r\n    margin-top: 15%;\r\n}\r\n\r\n.confirm-modal {\r\n    margin-top: 15%;\r\n}\r\n\r\n.component-table-row {\r\n    cursor: pointer;\r\n}\r\n\r\n.comp-table-cell-input {\r\n  width: 100%;\r\n  margin: 0px;\r\n  border: 2px solid #efefef !important;\r\n}\r\n\r\n.comp-table-cell-btn {\r\n  width: 100%;\r\n  margin: 0px;\r\n}\r\n\r\n.comp-table-remove-icon{\r\n   padding: 0px;\r\n   text-align: center;\r\n   vertical-align: inherit;\r\n   color: #f05050;\r\n }\r\n\r\n.comp-table-remove-icon:hover{\r\n  color: #f05050;\r\n}\r\n\r\n.fa-info-circle{\r\n    color:  #009EFF;\r\n    font-size: 15px;\r\n}\r\n\r\n.fa-info-circle:hover{\r\n    -webkit-transform: scale(1.1);\r\n            transform: scale(1.1);\r\ncolor: cornflowerblue;\r\n}\r\n\r\n.home-icon{\r\n    font-size: 25px;\r\n}\r\n\r\n.form-group input{\r\n  margin-bottom: 10px;\r\n}\r\n\r\n.app-heading{\r\n  padding-left: 15px;\r\n}\r\n\r\n.app-holder{\r\n  padding-top: 25px;\r\n  border: 1px solid #efefef;\r\n  height: 80%;\r\n}\r\n\r\ninput.ng-invalid.ng-touched.ng-pristine {\r\n  border-color: red !important;\r\n}\r\n\r\ninput.ng-invalid.ng-dirty.ng-touched {\r\n  border-color: red !important;\r\n}\r\n\r\n.border-1 {\r\n  border-width: medium;\r\n  border: groove;\r\n  border-color: black;\r\n}\r\n\r\n.border-2 {\r\n  border-width: thin;\r\n  border: groove;\r\n  border-color: black;\r\n  width: 90%;\r\n  padding: 2%;\r\n}\r\n\r\n.row.vdivide [class*='col-']:not(:last-child):after {\r\n  background: #e0e0e0;\r\n  width: 1px;\r\n  content: \"\";\r\n  display:block;\r\n  position: absolute;\r\n  top:0;\r\n  bottom: 0;\r\n  right: 0;\r\n  min-height: 70px;\r\n}\r\n\r\n/** File Upload **/\r\n\r\n.table-file-upload {\r\nwidth: 100% !important;\r\n}\r\n\r\n.table-file-upload tr td {\r\n    padding:5px;\r\n}\r\n\r\n.metadata-container{\r\n        height:250px;\r\n        border:1px solid #efefef;\r\n\r\n}\r\n\r\n.metadata-container .form-control{\r\n    margin: 2px;\r\n    width: 95%;\r\n    padding: 2px;\r\n    height: 27px;\r\n    padding-left: 10px;\r\n}\r\n\r\n.metadata-child-container{\r\n    border:1px solid #efefef;\r\n    height:127px;\r\n    margin: 10px 0px;\r\n}\r\n\r\n.metadata-container .dropdown{\r\n    margin-bottom: 2px;\r\n  border: 1px solid #c5c5c5;\r\n  padding: 4px;\r\n    background: #d8d8d8;\r\n    cursor: pointer;\r\n}\r\n\r\n.metadata-container .dropdown:active {\r\n    border:1px solid #7b7a7a;\r\n}\r\n\r\n.metadata-container .dropdown:hover {\r\n    background: #b5b2b2;\r\n}\r\n\r\n.metadata-container .dropdown .btn{\r\n    border: 1px solid rgb(148, 148, 148);\r\n}\r\n\r\n.metadata-container .dropdown .btn:hover{\r\n    background: rgb(248, 248, 248);\r\n    color: white !important ;\r\n}\r\n\r\n.metadata-container .dropdown .btn:active{\r\n    background: rgb(135, 134, 134);\r\n    color: white !important ;\r\n}\r\n\r\n.table-service {\r\n    width: 100% !important;\r\n }\r\n\r\n.service-input {\r\n  margin-bottom:5px;\r\n  padding:2px;\r\n}\r\n\r\n.service-input .form-control{\r\n    width:100%;\r\n  }\r\n\r\n.table-service tr td {\r\n    padding:10px 5px;\r\n }\r\n\r\n.tr-sm td{\r\n     padding:2px;\r\n }\r\n\r\n.divider{\r\n  position:absolute;\r\n  left:50%;\r\n  top:10%;\r\n  bottom:10%;\r\n  border-left:2px solid  #009EFF;\r\n}\r\n\r\n.assignment-table-tr td{\r\n    padding: 5px 10px;\r\n    text-align: left\r\n}\r\n\r\n.assignment-table-tr th{\r\n    padding: 5px 10px;\r\n    text-align: left;\r\n    background: #dfdfdf;\r\n\r\n}\r\n\r\n.notice p{\r\n    width: 100%;\r\n    height: 70px;\r\n    margin: 0px;\r\n    padding: 5px 10px;\r\n    text-align: justify;\r\n    margin-bottom:5px;\r\n    border-radius: 2px;\r\n    border-left: 5px solid #909090;\r\n    overflow-y:auto;\r\n\r\n}\r\n\r\n.notice{\r\n    margin-top:20px;\r\n}\r\n\r\n.len100{\r\n width: 100%;\r\n}\r\n\r\n/*\r\n@media (max-width: @screen-xs-max) { ... }\r\n@media (min-width: @screen-sm-min) and (max-width: @screen-sm-max) { ... }\r\n@media (min-width: @screen-md-min) and (max-width: @screen-md-max) { ... }\r\n@media (min-width: @screen-lg-min) { ... }\r\n*/\r\n\r\n@media (min-width: 500px) and (max-width: 900px) {\r\n    .modal-content{\r\n        margin-top:34%;\r\n    }\r\n    .modal-body{\r\n        max-height:867px;\r\n        overflow-y: auto;\r\n    }\r\n }\r\n\r\n@media (min-width: 500px) and (max-width: 1025px) {\r\n    .modal-content{\r\n        margin-top: 45%;\r\n    }\r\n  }\r\n\r\n.ms-UTS-message-error {\r\n  color: darkred;\r\n}\r\n\r\n.ms-UTS-message-ok {\r\n  color: darkgreen;\r\n}\r\n\r\n.ms-UTS-message-warning {\r\n  color: darkorange;\r\n}\r\n\r\n.form-pad-15-5{\r\n    padding: 5px 15px;\r\n}\r\n\r\ntr td .form-group {\r\nmargin-bottom: 0px;\r\n}\r\n\r\nth .form-group {\r\n    margin-bottom: 0px;\r\n    }\r\n\r\n.container-fluid{\r\n      background: white;\r\n}\r\n\r\n.error{\r\n   color:red;\r\n   padding-left:0px;\r\n   margin-top:-10px;\r\n   margin-bottom: 0px;\r\n}\r\n\r\n@media (min-height:500px) and (max-height:800px){\r\n    .table-create-div{\r\n        height: 120px;\r\n    }\r\n\r\n    .well{\r\n        padding:5px;\r\n        margin-bottom: 0px;\r\n        font-size:small;\r\n    }\r\n    .table-fixed th{\r\n        padding:5px;\r\n    }\r\n    img{\r\n        height: 75px;\r\n        width: 75px;\r\n    }\r\n\r\n    .modal-body{\r\n        font-size: small;\r\n    }\r\n    .plate{\r\n        font-size: small;\r\n    }\r\n    .checkmark {\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        height: 15px;\r\n        width: 15px;\r\n        background-color: rgb(172, 172, 172);\r\n        border-radius: 50%;\r\n    }\r\n\r\n    .plate .checkmark:after {\r\n        top: 4px;\r\n        left: 4px;\r\n        width: 8px;\r\n        height: 8px;\r\n    }\r\n  }\r\n\r\n"

/***/ }),

/***/ "./src/app/servers/servers.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms-container\">\r\n    <div class='app-server'></div>\r\n    <div>\r\n        <div class=\"config-container\">\r\n            <h3>\r\n              <strong>Configurations</strong>\r\n              <!-- <span>\r\n                <button class=\"pull-right astext\" (click)=\"addConfiguration()\" style=\"font-size: 14px;font-weight:100;\">\r\n                  <span class=\" text-primary\">\r\n                    <span class=\"fa-stack\">\r\n                      <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                      <i class=\"fa fa-plus fa-stack-1x\" style=\"color:white\"></i>\r\n                    </span> Add Configuration </span>\r\n                </button>\r\n              </span> -->\r\n            </h3>\r\n            <div>\r\n              <table class=\"table table-striped\">\r\n                <tr>\r\n                  <th>\r\n                    <div class=\"zero-margin-vertical\">\r\n                        <input type=\"text\" class=\"form-control comp-table-cell-input\" id=\"config.key\" name=\"config.key\" [(ngModel)]=\"key\" placeholder=\"Enter Key\">\r\n                    </div>\r\n                  </th>\r\n                  <th>\r\n                    <div class=\"form-group required zero-margin-vertical\">\r\n                        <input type=\"text\" class=\"form-control comp-table-cell-input\" id=\"config.value\" name=\"config.value\" [(ngModel)]=\"value\" placeholder=\"Enter Value\">\r\n                    </div>\r\n                  </th>\r\n                  <th>\r\n                      <span>\r\n                          <button class=\"pull-right astext\" (click)=\"addConfiguration()\" style=\"font-size: 14px;font-weight:100;\">\r\n                            <span class=\" text-primary\">\r\n                              <span class=\"fa-stack\">\r\n                                <i class=\"fa fa-circle fa-stack-2x\"></i>\r\n                                <i class=\"fa fa-plus fa-stack-1x\" style=\"color:white\"></i>\r\n                              </span> Add Configuration </span>\r\n                          </button>\r\n                        </span>\r\n                  </th>\r\n                </tr>\r\n                <!-- <tr *ngFor=\"let config of keyValues; let i = index\" class=\"component-table-row\">\r\n                  <td class=\"comp-table-cell\">\r\n                    <input type=\"text\" class=\"form-control comp-table-cell-input\" [id]=\"'config.key.'+i\" [name]=\"'config.key.'+i\" [(ngModel)]=\"config[0]\" placeholder=\"Enter Key\">\r\n                  </td>\r\n                  <td class=\"comp-table-cell\">\r\n                    <input type=\"text\" class=\"form-control comp-table-cell-input\" [id]=\"'config.value.'+i\" [name]=\"'config.value.'+i\" [(ngModel)]=\"config[1]\" placeholder=\"Enter Value\">\r\n                  </td>\r\n                  <td class=\"comp-table-remove-icon\" (click)=\"removeConfiguration(i)\">\r\n                    <i class=\"fa fa-trash\"></i>\r\n                  </td>\r\n                </tr> -->\r\n                <!-- <tr *ngFor=\"let config of configurations.keys(); let i = index\" class=\"component-table-row\">\r\n                    <td class=\"comp-table-cell\">\r\n                      {{config}}            \r\n                    </td>\r\n                    <td class=\"comp-table-cell\">\r\n                      {{configurations.get(config)}}\r\n                    </td>\r\n                    <td class=\"comp-table-remove-icon\" (click)=\"editConfiguration(config)\">\r\n                        <i class=\"fa fa-edit\"></i>\r\n                      </td>\r\n                    <td class=\"comp-table-remove-icon\" (click)=\"removeConfiguration(config)\">\r\n                      <i class=\"fa fa-trash\"></i>\r\n                    </td>\r\n                  </tr> -->\r\n              </table>\r\n            </div>\r\n          </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/servers/servers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServersComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServersComponent = /** @class */ (function () {
    function ServersComponent() {
        this.parentMessage = 'Pradeep';
        this.configPair = {};
        this.configurations = new Map();
        this.keyValues = [[]];
    }
    ServersComponent.prototype.ngOnInit = function () {
        this.configurations.set('name', 'Pradeep');
        this.configurations.set('id', '515548');
    };
    ServersComponent.prototype.addConfiguration = function () {
        if (this.configurations.has(this.key)) {
            alert('Already exists !!!');
        }
        this.configurations = this.configurations.set(this.key, this.value);
        this.key = this.value = '';
    };
    ServersComponent.prototype.removeConfiguration = function (key) {
        this.configurations.delete(key);
        // this.keyValues.splice(index, 1);
    };
    ServersComponent.prototype.editConfiguration = function (key) {
        this.key = key;
        this.value = this.configurations.get(key);
        // this.keyValues.splice(index, 1);
    };
    ServersComponent.prototype.display = function () {
        this.configurations.forEach(function (value, key) {
            console.log('key', key + 'value', value);
        });
    };
    ServersComponent.prototype.getConfigurations = function (map) {
        return this.keyValues;
    };
    ServersComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-servers',
            template: __webpack_require__("./src/app/servers/servers.component.html"),
            styles: [__webpack_require__("./src/app/servers/servers.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ServersComponent);
    return ServersComponent;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AuthService = /** @class */ (function () {
    function AuthService(http) {
        this.http = http;
        this.isAuthenticated = false;
    }
    // constructor(private http: Http) {}
    AuthService.prototype.login = function (credentials) {
        var _this = this;
        var header = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["d" /* HttpHeaders */]({ 'Content-Type': 'application/x-www-form-urlencoded' });
        var creds = 'username=' + credentials.username + '&password=' + credentials.password;
        // header = header.set('Access-Control-Allow-Origin', 'http://localhost:4300');
        // const options = new RequestOptions({ headers: header });
        return new Promise(function (resolve) {
            _this.http.post('http://localhost:8080/oauth/token?grant_type=password&' + creds, {}, { headers: header }).subscribe(function (data) {
                console.log(data);
                if (data) {
                    _this.isAuthenticated = true;
                }
                resolve(_this.isAuthenticated);
            });
        });
    };
    AuthService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["b" /* HttpClient */]])
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/global.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Globals; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var Globals = /** @class */ (function () {
    function Globals() {
        this.isUserLoggedIn = false;
    }
    Globals = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], Globals);
    return Globals;
}());



/***/ }),

/***/ "./src/app/services/http-interceptor.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InterceptorService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__loader_loader_service__ = __webpack_require__("./src/app/loader/loader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("./node_modules/rxjs/_esm5/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_finally__ = __webpack_require__("./node_modules/rxjs/_esm5/add/operator/finally.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_throw__ = __webpack_require__("./node_modules/rxjs/_esm5/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utility_service__ = __webpack_require__("./src/app/services/utility.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var InterceptorService = /** @class */ (function () {
    function InterceptorService(loaderService, utilityService) {
        this.loaderService = loaderService;
        this.utilityService = utilityService;
    }
    InterceptorService.prototype.intercept = function (req, next) {
        var _this = this;
        this.showLoader();
        if (!req.headers.has('Content-Type')) {
            req = req.clone({ headers: req.headers.set('Content-Type', 'application/json') });
        }
        // req = req.clone({ headers: req.headers.set('Access-Control-Allow-Origin', 'http://localhost:4300')});
        req = req.clone({ headers: req.headers.set('Accept', 'application/json') });
        // req = req.clone({ headers: req.headers.set('Authorization', 'Basic bXktdHJ1c3RlZC1jbGllbnQ6c2VjcmV0') });
        req = req.clone({ headers: req.headers.set('Authorization', 'Basic ' + btoa('my-trusted-client:secret')) });
        console.log(JSON.stringify(req.headers));
        return next.handle(req)
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["a" /* Observable */].throw(_this.handleError(error));
        })
            .finally(function () {
            _this.hideLoader();
        });
    };
    InterceptorService.prototype.handleError = function (error) {
        console.log('error ', error);
        this.utilityService.displayAlert(error);
        return error;
    };
    InterceptorService.prototype.showLoader = function () {
        this.loaderService.display(true);
    };
    InterceptorService.prototype.showAlert = function (error) {
    };
    InterceptorService.prototype.hideLoader = function () {
        this.loaderService.display(false);
    };
    InterceptorService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_5__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__loader_loader_service__["a" /* LoaderService */], __WEBPACK_IMPORTED_MODULE_6__utility_service__["a" /* UtilityService */]])
    ], InterceptorService);
    return InterceptorService;
}());



/***/ }),

/***/ "./src/app/services/utility.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UtilityService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_error_model__ = __webpack_require__("./src/app/models/error.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var UtilityService = /** @class */ (function () {
    function UtilityService() {
        this.showAlert = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](new __WEBPACK_IMPORTED_MODULE_2__models_error_model__["a" /* Error */]('', false, '', ''));
    }
    UtilityService.prototype.displayAlert = function (value) {
        var error = new __WEBPACK_IMPORTED_MODULE_2__models_error_model__["a" /* Error */](value.error.error, true, '', '/home');
        this.showAlert.next(error);
    };
    UtilityService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], UtilityService);
    return UtilityService;
}());



/***/ }),

/***/ "./src/app/user/user-resolve.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserResolveService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__user_service__ = __webpack_require__("./src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserResolveService = /** @class */ (function () {
    function UserResolveService(service) {
        this.service = service;
    }
    UserResolveService.prototype.resolve = function (route, state) {
        return this.service.getUsers().map(function (res) { return res; });
    };
    UserResolveService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__user_service__["a" /* UserService */]])
    ], UserResolveService);
    return UserResolveService;
}());



/***/ }),

/***/ "./src/app/user/user.component.css":
/***/ (function(module, exports) {

module.exports = ".ms-card {\r\n    width: 225px;\r\n    -webkit-box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n            box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\r\n}"

/***/ }),

/***/ "./src/app/user/user.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ms-container\">\r\n  <h4>Users List</h4>\r\n  <button class=\"pull-right\" (click)=\"createUser()\">Create User</button>&nbsp;\r\n  <button class=\"pull-right\" (click)=\"getUser()\">Fetch User</button>\r\n  <div *ngIf=\"user\">\r\n    {{user.id}}\r\n    <table class=\"table table-striped\">\r\n      <tr class=\"row\">\r\n        <th class=\"col-md-2\">\r\n          <strong>Key</strong>\r\n        </th>\r\n        <th class=\"col-md-8\">\r\n            <strong>Value</strong>\r\n        </th>\r\n        <th></th>\r\n      </tr>\r\n      <tr *ngFor=\"let detail of user.details | mapToIterable; let i = index\" class=\"row\">\r\n          <td class=\"col-md-2\">\r\n            {{detail.key}}            \r\n          </td>\r\n          <td class=\"col-md-8\">\r\n            {{detail.value}}\r\n          </td>\r\n          <td class=\"col-md-2\">\r\n            <span class=\"comp-table-remove-icon\" (click)=\"editDetail(detail.key)\">\r\n              <i class=\"fa fa-edit\"></i>\r\n            </span>&nbsp; &nbsp;\r\n            <span class=\"comp-table-remove-icon\" (click)=\"removeConfiguration(config)\">\r\n              <i class=\"fa fa-trash\"></i>\r\n            </span>\r\n          </td>\r\n        </tr>\r\n        <tr class=\"row\">\r\n            <td>\r\n                <div class=\"zero-margin-vertical\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"configKey\" name=\"config.key\" [(ngModel)]=\"key\" placeholder=\"Enter Key\" #configKey>\r\n                </div>\r\n            </td>\r\n            <td>\r\n                <div class=\"zero-margin-vertical\">\r\n                    <input type=\"text\" class=\"form-control\" id=\"configValue\" name=\"config.value\" [(ngModel)]=\"value\" placeholder=\"Enter Value\" #configValue>\r\n                </div>\r\n            </td>\r\n            <td [hidden]=\"editConfigFlag\">\r\n                <button class=\"btn btn-sm btn-primary\" (click)=\"addDetail()\" [disabled]=\"!key || !value\">Add Configuration\r\n                </button>\r\n            </td>\r\n            <td [hidden]=\"!editConfigFlag\">\r\n                <button class=\"btn btn-sm btn-primary\" (click)=\"addDetail()\">Update\r\n                </button>&nbsp;\r\n                <button class=\"btn btn-sm btn-primary\" (click)=\"hideEditConfig();clearInputs();\" >Cancel\r\n                  </button>\r\n            </td><button (click)=\"display()\">Display</button>\r\n          </tr>\r\n    </table>\r\n  </div><br><br>\r\n  <div class=\"row\">\r\n    <div *ngFor=\"let user of users\" class=\"col-md-2 mb-4\">\r\n      <div class=\"card ms-card\">\r\n        <img class=\"card-img-top\" src={{user.avatar}} alt={{user.first_name}} style=\"width:100%\">\r\n        <div class=\"card-body\">\r\n          <h5 class=\"card-title\">{{user.first_name}} {{user.last_name}}</h5>\r\n          <p class=\"card-text\">Id: {{user.id}}</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/user.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("./src/app/user/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pipes_key_value_pipe__ = __webpack_require__("./src/app/pipes/key-value.pipe.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserComponent = /** @class */ (function () {
    function UserComponent(route, userService) {
        this.route = route;
        this.userService = userService;
        this.editConfigFlag = false;
        this.mapToIterablePipe = new __WEBPACK_IMPORTED_MODULE_3__pipes_key_value_pipe__["a" /* MapToIterable */]();
    }
    UserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.data.forEach(function (data) {
            _this.users = data.users;
        });
    };
    UserComponent.prototype.createUser = function () {
        this.userService.createUser();
    };
    UserComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getUser()
            .subscribe(function (data) {
            _this.user = data;
            console.log(_this.user);
        });
    };
    UserComponent.prototype.display = function () {
        console.log(this.user);
    };
    UserComponent.prototype.addDetail = function () {
        var arr = [];
        var newUser = this.user;
        this.user = null;
        newUser.details[this.key] = this.value;
        // newUser.details = this.mapToIterablePipe.transform(newUser.details, arr);
        this.user = newUser;
    };
    UserComponent.prototype.editDetail = function (key) {
        this.showEditConfig();
        this.key = key;
        this.value = this.user.details[key];
    };
    UserComponent.prototype.clearInputs = function () {
        this.key = this.value = '';
    };
    UserComponent.prototype.showEditConfig = function () {
        this.editConfigFlag = true;
    };
    UserComponent.prototype.hideEditConfig = function () {
        this.editConfigFlag = false;
    };
    UserComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user',
            template: __webpack_require__("./src/app/user/user.component.html"),
            styles: [__webpack_require__("./src/app/user/user.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/user/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(_http) {
        this._http = _http;
    }
    UserService.prototype.getUsers = function () {
        return this._http.get('https://my-json-server.typicode.com/PradeepRawate/demo/data').map(function (res) { return res; });
        // return this._http.get('http://localhost:8080/api/users').map((res: Response) => res);
    };
    UserService.prototype.createUser = function () {
        return this._http.put('http://localhost:8080/api/userD?access_token=60e5c524-d2e3-4b17-a32e-378ac1b81b54', this.getDummyUser())
            .do(function (res) { return console.log(res); })
            .finally(function () { return console.log('finally'); })
            .subscribe(function (res) { return console.log('PUT call....'); });
    };
    UserService.prototype.getUser = function () {
        var _this = this;
        return this._http.get('http://localhost:8080/api/userD/1')
            .map(function (res) { return res; })
            .do(function (res) {
            _this.user = res;
            console.log('UserDetails as response', _this.user);
        })
            .finally(function () { return console.log('finally'); });
    };
    UserService.prototype.getDummyUser = function () {
        var user = {
            'fname': 'Raj',
            'username': 'iamraj',
            'password': 'raj',
            'lname': 'Aryan',
            'email': 'raj@xyz.com'
        };
        return user;
    };
    UserService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["b" /* HttpClient */]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map