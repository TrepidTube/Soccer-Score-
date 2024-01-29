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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/main/main.component */ "./src/app/pages/main/main.component.ts");
/* harmony import */ var _pages_control_control_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/control/control.component */ "./src/app/pages/control/control.component.ts");





var routes = [
    { path: 'inicio', component: _pages_main_main_component__WEBPACK_IMPORTED_MODULE_3__["MainComponent"] },
    { path: 'control', component: _pages_control_control_component__WEBPACK_IMPORTED_MODULE_4__["ControlComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<app-init></app-init>\n"

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'football-score';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_display_display_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/display/display.component */ "./src/app/components/display/display.component.ts");
/* harmony import */ var _components_scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/scoreboard/scoreboard.component */ "./src/app/components/scoreboard/scoreboard.component.ts");
/* harmony import */ var _pages_main_main_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/main/main.component */ "./src/app/pages/main/main.component.ts");
/* harmony import */ var _pages_control_control_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/control/control.component */ "./src/app/pages/control/control.component.ts");
/* harmony import */ var _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/timer/timer.component */ "./src/app/components/timer/timer.component.ts");
/* harmony import */ var _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/menu/menu.component */ "./src/app/components/menu/menu.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _components_init_init_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/init/init.component */ "./src/app/components/init/init.component.ts");
/* harmony import */ var _directives_fade_in_down_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/fade-in-down.directive */ "./src/app/directives/fade-in-down.directive.ts");


















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_display_display_component__WEBPACK_IMPORTED_MODULE_9__["DisplayComponent"],
                _components_scoreboard_scoreboard_component__WEBPACK_IMPORTED_MODULE_10__["ScoreboardComponent"],
                _pages_main_main_component__WEBPACK_IMPORTED_MODULE_11__["MainComponent"],
                _pages_control_control_component__WEBPACK_IMPORTED_MODULE_12__["ControlComponent"],
                _components_timer_timer_component__WEBPACK_IMPORTED_MODULE_13__["TimerComponent"],
                _components_menu_menu_component__WEBPACK_IMPORTED_MODULE_14__["MenuComponent"],
                _components_init_init_component__WEBPACK_IMPORTED_MODULE_16__["InitComponent"],
                _directives_fade_in_down_directive__WEBPACK_IMPORTED_MODULE_17__["FadeInDownDirective"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_3__["HttpModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"], _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_15__["LayoutModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatListModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/display/display.component.html":
/*!***********************************************************!*\
  !*** ./src/app/components/display/display.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<img [src]=\"_ds.file\" id=\"display\">\n"

/***/ }),

/***/ "./src/app/components/display/display.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/display/display.component.ts ***!
  \*********************************************************/
/*! exports provided: DisplayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayComponent", function() { return DisplayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_display_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/display.service */ "./src/app/services/display.service.ts");



var DisplayComponent = /** @class */ (function () {
    function DisplayComponent(_ds) {
        this._ds = _ds;
    }
    DisplayComponent.prototype.ngOnInit = function () {
    };
    DisplayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-display',
            template: __webpack_require__(/*! ./display.component.html */ "./src/app/components/display/display.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_display_service__WEBPACK_IMPORTED_MODULE_2__["DisplayService"]])
    ], DisplayComponent);
    return DisplayComponent;
}());



/***/ }),

/***/ "./src/app/components/init/init.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/init/init.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"init fadeInDown\" *ngIf=\"initApp\">\n  <mat-card>\n    <mat-form-field>\n      <input matInput type=\"tel\" placeholder=\"INGRESE SERVIDOR\" [(ngModel)]=\"_sc.url\" name=\"url\">\n    </mat-form-field>\n    <div *ngIf=\"_sc.url.length > 7\">\n      <h1>Usar como:</h1>\n      <button mat-raised-button color=\"primary\" class=\"w-50\" (click)=\"goTo('/inicio')\">PANTALLA</button>\n      <button mat-button color=\"primary\" class=\"w-50\" (click)=\"goTo('/control')\">CONTROL</button>\n    </div>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/components/init/init.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/init/init.component.ts ***!
  \***************************************************/
/*! exports provided: InitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InitComponent", function() { return InitComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_score_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/score.service */ "./src/app/services/score.service.ts");




var InitComponent = /** @class */ (function () {
    function InitComponent(_sc, router) {
        this._sc = _sc;
        this.router = router;
        this.initApp = true;
        this._sc.url = "localhost:3000";
    }
    InitComponent.prototype.goTo = function (link) {
        this.initApp = false;
        this.router.navigate([link]);
    };
    InitComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-init',
            template: __webpack_require__(/*! ./init.component.html */ "./src/app/components/init/init.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_score_service__WEBPACK_IMPORTED_MODULE_3__["ScoreService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], InitComponent);
    return InitComponent;
}());



/***/ }),

/***/ "./src/app/components/menu/menu.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/menu/menu.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\n  height: 100%;\n}\n\n.sidenav {\n  width: 200px;\n}\n\n.sidenav .mat-toolbar {\n  background: inherit;\n}\n\n.mat-toolbar.mat-primary {\n  position: -webkit-sticky;\n  position: sticky;\n  top: 0;\n  z-index: 1;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tZW51L21lbnUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLGFBQWE7Q0FDZDs7QUFFRDtFQUNFLG9CQUFvQjtDQUNyQjs7QUFFRDtFQUNFLHlCQUFpQjtFQUFqQixpQkFBaUI7RUFDakIsT0FBTztFQUNQLFdBQVc7Q0FDWiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWVudS9tZW51LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwMHB4O1xufVxuXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xufVxuXG4ubWF0LXRvb2xiYXIubWF0LXByaW1hcnkge1xuICBwb3NpdGlvbjogc3RpY2t5O1xuICB0b3A6IDA7XG4gIHotaW5kZXg6IDE7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/menu/menu.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/menu/menu.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav>\n  <button mat-button color=\"primary\" [routerLink]=\"['/control']\">\n    <mat-icon>videogame_asset</mat-icon>\n    CONTROL\n  </button>\n  <button mat-button color=\"primary\" [routerLink]=\"['/inicio']\">\n    <mat-icon>desktop_windows</mat-icon>\n    TABLERO\n  </button>\n</nav>\n"

/***/ }),

/***/ "./src/app/components/menu/menu.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/menu/menu.component.ts ***!
  \***************************************************/
/*! exports provided: MenuComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MenuComponent", function() { return MenuComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var MenuComponent = /** @class */ (function () {
    function MenuComponent(breakpointObserver) {
        this.breakpointObserver = breakpointObserver;
        this.isHandset$ = this.breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (result) { return result.matches; }));
    }
    MenuComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-menu',
            template: __webpack_require__(/*! ./menu.component.html */ "./src/app/components/menu/menu.component.html"),
            styles: [__webpack_require__(/*! ./menu.component.css */ "./src/app/components/menu/menu.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"]])
    ], MenuComponent);
    return MenuComponent;
}());



/***/ }),

/***/ "./src/app/components/scoreboard/scoreboard.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/scoreboard/scoreboard.component.css ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import 'https://fonts.googleapis.com/css?family=Roboto+Condensed:700';\ndiv {\n  font-size: 25px;\n  font-family: Roboto Condensed;\n  color: #eee\n}\n#board {\n  width: 864px;\n  height: 1536px;\n  border: solid 1px\n}\n#display {\n  background: #111;\n  width: 1536px;\n  height: 700px;\n}\nh1 {\n  margin: 2px 0 0 0;\n  letter-spacing: 3px;\n  font-size: 40px\n}\n#LH{\n  padding-right: 25px;\n}\n#RG{\n  padding-left: 25px;\n}\n#score {\n  padding: 0 24px;\n  margin: 5px;\n  max-width: 100%;\n  height: 152px;\n  background: #004891;\n  border-radius: 15px;\n  border: solid 2px #fff\n}\n.wrapper {\n  display: grid;\n  grid-template-columns: repeat(3, 1fr);\n  grid-gap: 10px;\n  grid-auto-rows: minmax(100px, auto);\n}\n.one {\n  grid-column: 1 / 2;\n  grid-row: 1;\n}\n.row {\n  display: flex;\n  margin-top: 20px;\n}\n.lower {\n  align-self: end;\n}\n.num {\n  display: inline-block;\n  background: #111;\n  width: 58px;\n  height: 60px;\n  font-size: 45px !important;\n  text-align: center;\n  border-radius: 5px;\n}\n.center-logo{\n  margin-right: -15px;\n  margin-bottom: -50px;\n}\n.dtext {\n  text-overflow: ellipsis;\n  white-space: nowrap;\n  \n}\n.num.sc {\n  width: 80px;\n}\n.home {\n  text-align: center;\n}\n.timer {\n  text-align: center;\n  display: inline-block;\n  width: 401px;\n  text-align: -webkit-center;\n}\n.counter { \n  margin-top: -20px;\n  background: #111;\n  width: 400px;\n  height: 100px;\n  border: solid 2px #eee;\n  border-radius: 0 0 30px 30px;\n  font-size: 90px;\n}\n.tol span {\n  display: block;\n}\n.down {\n  margin: 0 0 0 20px;\n  text-align: center;\n  align-self: end;\n}\n.down span {\n  display: block\n}\n.row:nth-child(2) {\n  padding: 5px 0;\n}\n.logo {\n  margin-top: -5px;\n  height: 100px;\n  width: auto;\n  align-self: center;\n}\n.time {\n  margin: -110px 340px 0 0;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zY29yZWJvYXJkL3Njb3JlYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RUFBdUU7QUFDdkU7RUFDRSxnQkFBZ0I7RUFDaEIsOEJBQThCO0VBQzlCLFdBQVc7Q0FDWjtBQUVEO0VBQ0UsYUFBYTtFQUNiLGVBQWU7RUFDZixpQkFBaUI7Q0FDbEI7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsY0FBYztDQUNmO0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsb0JBQW9CO0VBQ3BCLGVBQWU7Q0FDaEI7QUFDRDtFQUNFLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UsbUJBQW1CO0NBQ3BCO0FBR0Q7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixjQUFjO0VBQ2Qsb0JBQW9CO0VBQ3BCLG9CQUFvQjtFQUNwQixzQkFBc0I7Q0FDdkI7QUFDRDtFQUNFLGNBQWM7RUFDZCxzQ0FBc0M7RUFDdEMsZUFBZTtFQUNmLG9DQUFvQztDQUNyQztBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7Q0FDYjtBQUVEO0VBQ0UsY0FBYztFQUNkLGlCQUFpQjtDQUNsQjtBQUNEO0VBQ0UsZ0JBQWdCO0NBQ2pCO0FBRUQ7RUFDRSxzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixhQUFhO0VBQ2IsMkJBQTJCO0VBQzNCLG1CQUFtQjtFQUNuQixtQkFBbUI7Q0FDcEI7QUFFRDtFQUNFLG9CQUFvQjtFQUNwQixxQkFBcUI7Q0FDdEI7QUFFRDtFQUNFLHdCQUF3QjtFQUN4QixvQkFBb0I7O0NBRXJCO0FBRUQ7RUFDRSxZQUFZO0NBQ2I7QUFFRDtFQUNFLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0UsbUJBQW1CO0VBQ25CLHNCQUFzQjtFQUN0QixhQUFhO0VBQ2IsMkJBQTJCO0NBQzVCO0FBRUQ7RUFDRSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGFBQWE7RUFDYixjQUFjO0VBQ2QsdUJBQXVCO0VBQ3ZCLDZCQUE2QjtFQUM3QixnQkFBZ0I7Q0FDakI7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7QUFFRDtFQUNFLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZ0JBQWdCO0NBQ2pCO0FBRUQ7RUFDRSxjQUFjO0NBQ2Y7QUFFRDtFQUNFLGVBQWU7Q0FDaEI7QUFFRDtFQUNFLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2QsWUFBWTtFQUNaLG1CQUFtQjtDQUNwQjtBQUVEO0VBQ0UseUJBQXlCO0NBQzFCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zY29yZWJvYXJkL3Njb3JlYm9hcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG8rQ29uZGVuc2VkOjcwMCc7XG5kaXYge1xuICBmb250LXNpemU6IDI1cHg7XG4gIGZvbnQtZmFtaWx5OiBSb2JvdG8gQ29uZGVuc2VkO1xuICBjb2xvcjogI2VlZVxufVxuXG4jYm9hcmQge1xuICB3aWR0aDogODY0cHg7XG4gIGhlaWdodDogMTUzNnB4O1xuICBib3JkZXI6IHNvbGlkIDFweFxufVxuXG4jZGlzcGxheSB7XG4gIGJhY2tncm91bmQ6ICMxMTE7XG4gIHdpZHRoOiAxNTM2cHg7XG4gIGhlaWdodDogNzAwcHg7XG59XG5cbmgxIHtcbiAgbWFyZ2luOiAycHggMCAwIDA7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG4gIGZvbnQtc2l6ZTogNDBweFxufVxuI0xIe1xuICBwYWRkaW5nLXJpZ2h0OiAyNXB4O1xufVxuI1JHe1xuICBwYWRkaW5nLWxlZnQ6IDI1cHg7XG59XG5cblxuI3Njb3JlIHtcbiAgcGFkZGluZzogMCAyNHB4O1xuICBtYXJnaW46IDVweDtcbiAgbWF4LXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDE1MnB4O1xuICBiYWNrZ3JvdW5kOiAjMDA0ODkxO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBib3JkZXI6IHNvbGlkIDJweCAjZmZmXG59XG4ud3JhcHBlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XG4gIGdyaWQtZ2FwOiAxMHB4O1xuICBncmlkLWF1dG8tcm93czogbWlubWF4KDEwMHB4LCBhdXRvKTtcbn1cblxuLm9uZSB7XG4gIGdyaWQtY29sdW1uOiAxIC8gMjtcbiAgZ3JpZC1yb3c6IDE7XG59XG5cbi5yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLmxvd2VyIHtcbiAgYWxpZ24tc2VsZjogZW5kO1xufVxuXG4ubnVtIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBiYWNrZ3JvdW5kOiAjMTExO1xuICB3aWR0aDogNThweDtcbiAgaGVpZ2h0OiA2MHB4O1xuICBmb250LXNpemU6IDQ1cHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5jZW50ZXItbG9nb3tcbiAgbWFyZ2luLXJpZ2h0OiAtMTVweDtcbiAgbWFyZ2luLWJvdHRvbTogLTUwcHg7XG59XG5cbi5kdGV4dCB7XG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xuICBcbn1cblxuLm51bS5zYyB7XG4gIHdpZHRoOiA4MHB4O1xufVxuXG4uaG9tZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRpbWVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHdpZHRoOiA0MDFweDtcbiAgdGV4dC1hbGlnbjogLXdlYmtpdC1jZW50ZXI7XG59XG5cbi5jb3VudGVyIHsgXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xuICBiYWNrZ3JvdW5kOiAjMTExO1xuICB3aWR0aDogNDAwcHg7XG4gIGhlaWdodDogMTAwcHg7XG4gIGJvcmRlcjogc29saWQgMnB4ICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCAzMHB4IDMwcHg7XG4gIGZvbnQtc2l6ZTogOTBweDtcbn1cblxuLnRvbCBzcGFuIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5kb3duIHtcbiAgbWFyZ2luOiAwIDAgMCAyMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGFsaWduLXNlbGY6IGVuZDtcbn1cblxuLmRvd24gc3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrXG59XG5cbi5yb3c6bnRoLWNoaWxkKDIpIHtcbiAgcGFkZGluZzogNXB4IDA7XG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luLXRvcDogLTVweDtcbiAgaGVpZ2h0OiAxMDBweDtcbiAgd2lkdGg6IGF1dG87XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbn1cblxuLnRpbWUge1xuICBtYXJnaW46IC0xMTBweCAzNDBweCAwIDA7XG59XG4iXX0= */"

/***/ }),

/***/ "./src/app/components/scoreboard/scoreboard.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/components/scoreboard/scoreboard.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"score\">\n  <div class=\"row justify-content-center\">\n    <div class=\"home col-md-auto\">\n      <h1>\n        {{ _sc.homeName }}\n      </h1>\n      <div class=\"num sc\">\n        {{ _sc.homeScore }}\n      </div>\n    </div>\n    <img class=\"logo\" src=\"assets/logo.png\" id=\"LH\">\n    <div class=\"timer\">\n      <span class=\"ball\" style=\"display:none\">\n        <img src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjY0cHgiIHZpZXdCb3g9IjAgMCA1MTEgNTExLjk5OTc2IiB3aWR0aD0iNjRweCI+PHBhdGggZD0ibTE5Mi44NTkzNzUgMjk4LjQyNTc4MS0yMS4yMTQ4NDQtMjEuMjE0ODQzIDIxLjIxNDg0NC0yMS4yMTA5MzggMjEuMjEwOTM3IDIxLjIxMDkzOCAyMS4yMTQ4NDQtMjEuMjEwOTM4LTIxLjIxMDkzNy0yMS4yMTQ4NDQgMjEuMjEwOTM3LTIxLjIxMDkzNyAyMS4yMTQ4NDQgMjEuMjEwOTM3IDIxLjIxMDkzOC0yMS4yMTA5MzctMjEuMjEwOTM4LTIxLjIxNDg0NCAyMS4yMTA5MzgtMjEuMjEwOTM3IDIxLjIxNDg0MyAyMS4yMTA5MzcgNDIuNDI1NzgxLTQyLjQyNTc4MS0xMDQuNzYxNzE4LTEwNC43NTc4MTNjLTQxLjMyODEyNSAxNC42MzI4MTMtODIuNDM3NSAzNy4zOTg0MzgtMTE3Ljk3NjU2MyA3Mi45Mzc1LTM1LjU0Mjk2OSAzNS41NDI5NjktNTguMzA0Njg3IDc2LjY0ODQzOC03Mi45NDE0MDYgMTE3Ljk4MDQ2OWwxMDQuNzYxNzE5IDEwNC43NTc4MTJ6bTAgMCIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Im0yOC40MDIzNDQgMzAzLjY3NTc4MSAxODAuNDIxODc1IDE4MC40MjE4NzVjMTEuNTExNzE5LTEuOTEwMTU2IDIzLjE5OTIxOS00LjM3NSAzNS4wMzEyNS03LjM5ODQzN2wtMjA4LjA1ODU5NC0yMDguMDU0Njg4Yy0zLjAyMzQzNyAxMS44MzIwMzEtNS40ODQzNzUgMjMuNTE5NTMxLTcuMzk0NTMxIDM1LjAzMTI1em0wIDAiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJtMzYyLjU2NjQwNiAxNzEuMTQ4NDM4LTQyLjQyNTc4MSA0Mi40MjU3ODEgMjEuMjEwOTM3IDIxLjIxMDkzNy0yMS4yMTA5MzcgMjEuMjE0ODQ0LTIxLjIxNDg0NC0yMS4yMTQ4NDQtMjEuMjE0ODQzIDIxLjIxNDg0NCAyMS4yMTQ4NDMgMjEuMjEwOTM4LTIxLjIxNDg0MyAyMS4yMTQ4NDMtMjEuMjEwOTM4LTIxLjIxNDg0My0yMS4yMTQ4NDQgMjEuMjE0ODQzIDIxLjIxNDg0NCAyMS4yMTQ4NDQtMjEuMjE0ODQ0IDIxLjIxMDkzNy0yMS4yMTA5MzctMjEuMjEwOTM3LTQyLjQyNTc4MSA0Mi40MjU3ODEgMTA0Ljc1NzgxMiAxMDQuNzU3ODEzYzQxLjMzMjAzMS0xNC42MzI4MTMgODIuNDM3NS0zNy4zOTg0MzggMTE3Ljk4MDQ2OS03Mi45Mzc1IDM1LjUzOTA2Mi0zNS41NDI5NjkgNTguMzA0Njg3LTc2LjY0ODQzOCA3Mi45Mzc1LTExNy45ODA0Njl6bTAgMCIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Im00ODEuMzA4NTk0IDMxLjE5MTQwNmMtNDcuNTYyNS05Ljk0NTMxMi05NS45MTc5NjktMTEuNzUtMTM5LjU2NjQwNi04LjE0NDUzMWwxNDcuNzEwOTM3IDE0Ny43MTA5MzdjMy42Mjg5MDYtNDMuOTQxNDA2IDEuNzYxNzE5LTkyLjE5MTQwNi04LjE0NDUzMS0xMzkuNTY2NDA2em0wIDAiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJtNDg0LjU5Mzc1IDIwOC4zMjQyMTktMTgwLjQxNzk2OS0xODAuNDIxODc1Yy0xMS41MTE3MTkgMS45MTAxNTYtMjMuMTk5MjE5IDQuMzc1LTM1LjAzMTI1IDcuMzk4NDM3bDIwOC4wNTQ2ODggMjA4LjA1NDY4OGMzLjAyMzQzNy0xMS44MzIwMzEgNS40ODgyODEtMjMuNTE5NTMxIDcuMzk0NTMxLTM1LjAzMTI1em0wIDAiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJtMzEuNjg3NSA0ODAuODA4NTk0YzQ3LjU2NjQwNiA5Ljk0NTMxMiA5NS45MjE4NzUgMTEuNzUgMTM5LjU2NjQwNiA4LjE0NDUzMWwtMTQ3LjcwNzAzMS0xNDcuNzEwOTM3Yy0zLjYzMjgxMyA0My45NDE0MDYtMS43NjE3MTkgOTIuMTkxNDA2IDguMTQwNjI1IDEzOS41NjY0MDZ6bTAgMCIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Im0xMjkuNTQ2ODc1IDU5Ljc3MzQzOCAxNC44NTE1NjMtMjYuMDgyMDMyYy02My45OTIxODgtMzYuNDQxNDA2LTEwNy45OTIxODgtNDMuMzU5Mzc1LTEzMC43NzczNDQtMjAuNTcwMzEyLTIyLjc4OTA2MyAyMi43ODkwNjItMTUuODY3MTg4IDY2Ljc4OTA2MiAyMC41NzAzMTIgMTMwLjc4MTI1bDI2LjA4MjAzMi0xNC44NTU0NjljLTMwLjEyMTA5NC01Mi44ODY3MTktMzQuNDg0Mzc2LTg1LjY3MTg3NS0yNS40NDE0MDctOTQuNzE0ODQ0IDkuMDQyOTY5LTkuMDM5MDYyIDQxLjgyNDIxOS00LjY3OTY4NyA5NC43MTQ4NDQgMjUuNDQxNDA3em0wIDAiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJtNDc4LjgwODU5NCAzNjguMDk3NjU2LTI2LjA4MjAzMiAxNC44NTU0NjljMzAuMTIxMDk0IDUyLjg4NjcxOSAzNC40ODA0NjkgODUuNjY3OTY5IDI1LjQzNzUgOTQuNzEwOTM3LTkuMDQyOTY4IDkuMDQyOTY5LTQxLjgyNDIxOCA0LjY4MzU5NC05NC43MTQ4NDMtMjUuNDM3NWwtMTQuODUxNTYzIDI2LjA4MjAzMmM2My45OTIxODggMzYuNDM3NSAxMDcuOTkyMTg4IDQzLjM1OTM3NSAxMzAuNzgxMjUgMjAuNTcwMzEyIDIyLjc4NTE1Ni0yMi43ODkwNjIgMTUuODY3MTg4LTY2Ljc4OTA2Mi0yMC41NzAzMTItMTMwLjc4MTI1em0wIDAiIGZpbGw9IiNGRkZGRkYiLz48L3N2Zz4K\" />\n      </span>\n      <div class=\"counter\">\n        {{ _cn.timeOut }}\n        <h1 class=\"time\">{{ _cn.time }}</h1>\n      </div>\n      <div class=\"center-logo\">\n        <img src=\"assets/borregos_logo.png\">\n      </div>\n      <span class=\"ball\" style=\"display:none\">\n        <img src=\"data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIj8+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBoZWlnaHQ9IjY0cHgiIHZpZXdCb3g9IjAgMCA1MTEgNTExLjk5OTc2IiB3aWR0aD0iNjRweCI+PHBhdGggZD0ibTE5Mi44NTkzNzUgMjk4LjQyNTc4MS0yMS4yMTQ4NDQtMjEuMjE0ODQzIDIxLjIxNDg0NC0yMS4yMTA5MzggMjEuMjEwOTM3IDIxLjIxMDkzOCAyMS4yMTQ4NDQtMjEuMjEwOTM4LTIxLjIxMDkzNy0yMS4yMTQ4NDQgMjEuMjEwOTM3LTIxLjIxMDkzNyAyMS4yMTQ4NDQgMjEuMjEwOTM3IDIxLjIxMDkzOC0yMS4yMTA5MzctMjEuMjEwOTM4LTIxLjIxNDg0NCAyMS4yMTA5MzgtMjEuMjEwOTM3IDIxLjIxNDg0MyAyMS4yMTA5MzcgNDIuNDI1NzgxLTQyLjQyNTc4MS0xMDQuNzYxNzE4LTEwNC43NTc4MTNjLTQxLjMyODEyNSAxNC42MzI4MTMtODIuNDM3NSAzNy4zOTg0MzgtMTE3Ljk3NjU2MyA3Mi45Mzc1LTM1LjU0Mjk2OSAzNS41NDI5NjktNTguMzA0Njg3IDc2LjY0ODQzOC03Mi45NDE0MDYgMTE3Ljk4MDQ2OWwxMDQuNzYxNzE5IDEwNC43NTc4MTJ6bTAgMCIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Im0yOC40MDIzNDQgMzAzLjY3NTc4MSAxODAuNDIxODc1IDE4MC40MjE4NzVjMTEuNTExNzE5LTEuOTEwMTU2IDIzLjE5OTIxOS00LjM3NSAzNS4wMzEyNS03LjM5ODQzN2wtMjA4LjA1ODU5NC0yMDguMDU0Njg4Yy0zLjAyMzQzNyAxMS44MzIwMzEtNS40ODQzNzUgMjMuNTE5NTMxLTcuMzk0NTMxIDM1LjAzMTI1em0wIDAiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJtMzYyLjU2NjQwNiAxNzEuMTQ4NDM4LTQyLjQyNTc4MSA0Mi40MjU3ODEgMjEuMjEwOTM3IDIxLjIxMDkzNy0yMS4yMTA5MzcgMjEuMjE0ODQ0LTIxLjIxNDg0NC0yMS4yMTQ4NDQtMjEuMjE0ODQzIDIxLjIxNDg0NCAyMS4yMTQ4NDMgMjEuMjEwOTM4LTIxLjIxNDg0MyAyMS4yMTQ4NDMtMjEuMjEwOTM4LTIxLjIxNDg0My0yMS4yMTQ4NDQgMjEuMjE0ODQzIDIxLjIxNDg0NCAyMS4yMTQ4NDQtMjEuMjE0ODQ0IDIxLjIxMDkzNy0yMS4yMTA5MzctMjEuMjEwOTM3LTQyLjQyNTc4MSA0Mi40MjU3ODEgMTA0Ljc1NzgxMiAxMDQuNzU3ODEzYzQxLjMzMjAzMS0xNC42MzI4MTMgODIuNDM3NS0zNy4zOTg0MzggMTE3Ljk4MDQ2OS03Mi45Mzc1IDM1LjUzOTA2Mi0zNS41NDI5NjkgNTguMzA0Njg3LTc2LjY0ODQzOCA3Mi45Mzc1LTExNy45ODA0Njl6bTAgMCIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Im00ODEuMzA4NTk0IDMxLjE5MTQwNmMtNDcuNTYyNS05Ljk0NTMxMi05NS45MTc5NjktMTEuNzUtMTM5LjU2NjQwNi04LjE0NDUzMWwxNDcuNzEwOTM3IDE0Ny43MTA5MzdjMy42Mjg5MDYtNDMuOTQxNDA2IDEuNzYxNzE5LTkyLjE5MTQwNi04LjE0NDUzMS0xMzkuNTY2NDA2em0wIDAiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJtNDg0LjU5Mzc1IDIwOC4zMjQyMTktMTgwLjQxNzk2OS0xODAuNDIxODc1Yy0xMS41MTE3MTkgMS45MTAxNTYtMjMuMTk5MjE5IDQuMzc1LTM1LjAzMTI1IDcuMzk4NDM3bDIwOC4wNTQ2ODggMjA4LjA1NDY4OGMzLjAyMzQzNy0xMS44MzIwMzEgNS40ODgyODEtMjMuNTE5NTMxIDcuMzk0NTMxLTM1LjAzMTI1em0wIDAiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJtMzEuNjg3NSA0ODAuODA4NTk0YzQ3LjU2NjQwNiA5Ljk0NTMxMiA5NS45MjE4NzUgMTEuNzUgMTM5LjU2NjQwNiA4LjE0NDUzMWwtMTQ3LjcwNzAzMS0xNDcuNzEwOTM3Yy0zLjYzMjgxMyA0My45NDE0MDYtMS43NjE3MTkgOTIuMTkxNDA2IDguMTQwNjI1IDEzOS41NjY0MDZ6bTAgMCIgZmlsbD0iI0ZGRkZGRiIvPjxwYXRoIGQ9Im0xMjkuNTQ2ODc1IDU5Ljc3MzQzOCAxNC44NTE1NjMtMjYuMDgyMDMyYy02My45OTIxODgtMzYuNDQxNDA2LTEwNy45OTIxODgtNDMuMzU5Mzc1LTEzMC43NzczNDQtMjAuNTcwMzEyLTIyLjc4OTA2MyAyMi43ODkwNjItMTUuODY3MTg4IDY2Ljc4OTA2MiAyMC41NzAzMTIgMTMwLjc4MTI1bDI2LjA4MjAzMi0xNC44NTU0NjljLTMwLjEyMTA5NC01Mi44ODY3MTktMzQuNDg0Mzc2LTg1LjY3MTg3NS0yNS40NDE0MDctOTQuNzE0ODQ0IDkuMDQyOTY5LTkuMDM5MDYyIDQxLjgyNDIxOS00LjY3OTY4NyA5NC43MTQ4NDQgMjUuNDQxNDA3em0wIDAiIGZpbGw9IiNGRkZGRkYiLz48cGF0aCBkPSJtNDc4LjgwODU5NCAzNjguMDk3NjU2LTI2LjA4MjAzMiAxNC44NTU0NjljMzAuMTIxMDk0IDUyLjg4NjcxOSAzNC40ODA0NjkgODUuNjY3OTY5IDI1LjQzNzUgOTQuNzEwOTM3LTkuMDQyOTY4IDkuMDQyOTY5LTQxLjgyNDIxOCA0LjY4MzU5NC05NC43MTQ4NDMtMjUuNDM3NWwtMTQuODUxNTYzIDI2LjA4MjAzMmM2My45OTIxODggMzYuNDM3NSAxMDcuOTkyMTg4IDQzLjM1OTM3NSAxMzAuNzgxMjUgMjAuNTcwMzEyIDIyLjc4NTE1Ni0yMi43ODkwNjIgMTUuODY3MTg4LTY2Ljc4OTA2Mi0yMC41NzAzMTItMTMwLjc4MTI1em0wIDAiIGZpbGw9IiNGRkZGRkYiLz48L3N2Zz4K\" />\n      </span>\n    </div>\n    <img class=\"logo\" src=\"assets/logo.png\" id=\"RG\">\n    <div class=\"home col-md-auto\">\n      <h1>\n        {{ _sc.guestName }}\n      </h1>\n      <div class=\"num sc\">\n        {{ _sc.guestScore }}\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/scoreboard/scoreboard.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/scoreboard/scoreboard.component.ts ***!
  \***************************************************************/
/*! exports provided: ScoreboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreboardComponent", function() { return ScoreboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_score_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/score.service */ "./src/app/services/score.service.ts");
/* harmony import */ var _services_counter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/counter.service */ "./src/app/services/counter.service.ts");
/* harmony import */ var _services_display_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/display.service */ "./src/app/services/display.service.ts");





var ScoreboardComponent = /** @class */ (function () {
    function ScoreboardComponent(_sc, _cn, _ds) {
        this._sc = _sc;
        this._cn = _cn;
        this._ds = _ds;
        setInterval(function () {
            _sc.getData();
            _cn.getCount();
            _ds.getMedia();
        }, 1000);
    }
    ScoreboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-scoreboard',
            template: __webpack_require__(/*! ./scoreboard.component.html */ "./src/app/components/scoreboard/scoreboard.component.html"),
            styles: [__webpack_require__(/*! ./scoreboard.component.css */ "./src/app/components/scoreboard/scoreboard.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_score_service__WEBPACK_IMPORTED_MODULE_2__["ScoreService"], _services_counter_service__WEBPACK_IMPORTED_MODULE_3__["CounterService"], _services_display_service__WEBPACK_IMPORTED_MODULE_4__["DisplayService"]])
    ], ScoreboardComponent);
    return ScoreboardComponent;
}());



/***/ }),

/***/ "./src/app/components/timer/timer.component.html":
/*!*******************************************************!*\
  !*** ./src/app/components/timer/timer.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  timer works!\n</p>\n"

/***/ }),

/***/ "./src/app/components/timer/timer.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/timer/timer.component.ts ***!
  \*****************************************************/
/*! exports provided: TimerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimerComponent", function() { return TimerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TimerComponent = /** @class */ (function () {
    function TimerComponent() {
    }
    TimerComponent.prototype.ngOnInit = function () {
    };
    TimerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timer',
            template: __webpack_require__(/*! ./timer.component.html */ "./src/app/components/timer/timer.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TimerComponent);
    return TimerComponent;
}());



/***/ }),

/***/ "./src/app/directives/fade-in-down.directive.ts":
/*!******************************************************!*\
  !*** ./src/app/directives/fade-in-down.directive.ts ***!
  \******************************************************/
/*! exports provided: FadeInDownDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FadeInDownDirective", function() { return FadeInDownDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FadeInDownDirective = /** @class */ (function () {
    function FadeInDownDirective(e) {
        e.nativeElement.style.animation = "fadeInDown 0.3s";
    }
    FadeInDownDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[FadeInDown]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]])
    ], FadeInDownDirective);
    return FadeInDownDirective;
}());



/***/ }),

/***/ "./src/app/pages/control/control.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pages/control/control.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import 'https://fonts.googleapis.com/css?family=Roboto+Condensed:700';\r\ndiv {\r\n  font-size: 25px;\r\n  font-family: Roboto Condensed;\r\n  color: #000000\r\n}\r\n#input{\r\n    font-size: 20px;\r\n}\r\n.icon-disp{\r\n    -webkit-transform: scale(3);\r\n            transform: scale(3);\r\n}\r\n.text {\r\n    font-size:35px;\r\n    font-weight: bold;\r\n}\r\n.title {\r\n  font-size: 35px;\r\n  font-weight: bold;\r\n  width: 100%;\r\n}\r\n.wrapper {\r\n    display: grid;\r\n    grid-template-columns: repeat(3, 1fr);\r\n    grid-gap: 10px;\r\n    grid-auto-rows: minmax(100px, auto);\r\n  }\r\n.button {\r\n    width: 462px;\r\n    height: 97px;\r\n    font-size: 30px;\r\n    align-self: center;\r\n    align-content: center;\r\n}\r\n.tiempo{\r\n    width: 250px;\r\n    align-items: center;\r\n}\r\n.tres {\r\n    grid-column: 1 / 3;\r\n    grid-row: 1;\r\n  }\r\n.cuatro {\r\n    grid-column: 1 / 4;\r\n    grid-row: 2;\r\n  }\r\n.box {\r\n  display: flex;\r\n}\r\n.box_ {\r\n  display: inline-block;\r\n  position: relative;\r\n  text-align: left;\r\n  width: 520px;\r\n  height: 250px;\r\n  padding-bottom: 20px;\r\n}\r\n.tmr{\r\n  padding-right: -250px;\r\n  padding-top: -250px;\r\n}\r\n.pb{\r\n  padding-bottom: 50px;\r\n}\r\n.w-70 {\r\n  width: 70%;\r\n  height: 125px\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvY29udHJvbC9jb250cm9sLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsdUVBQXVFO0FBQ3ZFO0VBQ0UsZ0JBQWdCO0VBQ2hCLDhCQUE4QjtFQUM5QixjQUFjO0NBQ2Y7QUFFRDtJQUNJLGdCQUFnQjtDQUNuQjtBQUVEO0lBQ0ksNEJBQW9CO1lBQXBCLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtDQUNyQjtBQUNEO0VBQ0UsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixZQUFZO0NBQ2I7QUFDRDtJQUNJLGNBQWM7SUFDZCxzQ0FBc0M7SUFDdEMsZUFBZTtJQUNmLG9DQUFvQztHQUNyQztBQUVIO0lBQ0ksYUFBYTtJQUNiLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsbUJBQW1CO0lBQ25CLHNCQUFzQjtDQUN6QjtBQUVEO0lBQ0ksYUFBYTtJQUNiLG9CQUFvQjtDQUN2QjtBQUNEO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7R0FDYjtBQUVIO0lBQ0ksbUJBQW1CO0lBQ25CLFlBQVk7R0FDYjtBQUVIO0VBQ0UsY0FBYztDQUNmO0FBQ0Q7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsY0FBYztFQUNkLHFCQUFxQjtDQUN0QjtBQUNEO0VBQ0Usc0JBQXNCO0VBQ3RCLG9CQUFvQjtDQUNyQjtBQUNEO0VBQ0UscUJBQXFCO0NBQ3RCO0FBQ0Q7RUFDRSxXQUFXO0VBQ1gsYUFBYTtDQUNkIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvY29udHJvbC9jb250cm9sLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvK0NvbmRlbnNlZDo3MDAnO1xyXG5kaXYge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LWZhbWlseTogUm9ib3RvIENvbmRlbnNlZDtcclxuICBjb2xvcjogIzAwMDAwMFxyXG59XHJcblxyXG4jaW5wdXR7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5pY29uLWRpc3B7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDMpO1xyXG59XHJcbi50ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTozNXB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLnRpdGxlIHtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLndyYXBwZXIge1xyXG4gICAgZGlzcGxheTogZ3JpZDtcclxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIDFmcik7XHJcbiAgICBncmlkLWdhcDogMTBweDtcclxuICAgIGdyaWQtYXV0by1yb3dzOiBtaW5tYXgoMTAwcHgsIGF1dG8pO1xyXG4gIH1cclxuXHJcbi5idXR0b24ge1xyXG4gICAgd2lkdGg6IDQ2MnB4O1xyXG4gICAgaGVpZ2h0OiA5N3B4O1xyXG4gICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xyXG4gICAgYWxpZ24tY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4udGllbXBve1xyXG4gICAgd2lkdGg6IDI1MHB4O1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG4udHJlcyB7XHJcbiAgICBncmlkLWNvbHVtbjogMSAvIDM7XHJcbiAgICBncmlkLXJvdzogMTtcclxuICB9XHJcblxyXG4uY3VhdHJvIHtcclxuICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcclxuICAgIGdyaWQtcm93OiAyO1xyXG4gIH1cclxuXHJcbi5ib3gge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuLmJveF8ge1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxuICB3aWR0aDogNTIwcHg7XHJcbiAgaGVpZ2h0OiAyNTBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxufVxyXG4udG1ye1xyXG4gIHBhZGRpbmctcmlnaHQ6IC0yNTBweDtcclxuICBwYWRkaW5nLXRvcDogLTI1MHB4O1xyXG59XHJcbi5wYntcclxuICBwYWRkaW5nLWJvdHRvbTogNTBweDtcclxufVxyXG4udy03MCB7XHJcbiAgd2lkdGg6IDcwJTtcclxuICBoZWlnaHQ6IDEyNXB4XHJcbn1cclxuXHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/pages/control/control.component.html":
/*!******************************************************!*\
  !*** ./src/app/pages/control/control.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card FadeInDown class=\"fondo\">\n  <form (ngSubmit)=\"updateScore(_sc)\">\n    <span class=\"title\">MARCADOR</span>\n    <div class=\"box\">\n      <mat-form-field class=\"w-100\" hideRequieredMarker appearance=\"standard\">\n        <mat-label>Servidor</mat-label>\n        <input matInput type=\"tel\" [(ngModel)]=\"_sc.url\" name=\"url\" class=\"text\">\n      </mat-form-field>\n      <div class=\"button ld-img\">\n        <input id=\"upFile\" type=\"file\" style=\"display:none\" #upFile (change)=\"upImg($event)\">\n        <button mat-button color=\"primary\" type=\"button\" (click)=\"upFile.click()\" class=\"button\">CARGAR IMAGEN</button>\n      </div>\n    </div>\n    <hr>\n    <div class=\"box\">\n      <div class=\"box_ text\">\n          \n            HOME:&nbsp;\n            <mat-form-field class=\"w-70 pb\" hideRequieredMarker appearance=\"standard\">\n              <mat-label>Nombre</mat-label>\n              <input matInput type=\"tel\" maxlength=\"12\" [(ngModel)]=\"_sc.homeName\" name=\"homeN\" class=\"text\">\n              <mat-hint align=\"end\">Max 12 caracteres</mat-hint>\n            </mat-form-field>\n        <mat-form-field class=\"w-100 text\" appearance=\"legacy\"> \n          <mat-label>Marcador</mat-label> \n          <input matInput type=\"number\" color=\"primary\" min=\"0\" max=\"99\" [(ngModel)]=\"_sc.homeScore\" name=\"home\" class=\"text\">\n        </mat-form-field>\n      </div>\n      \n      <div class=\"box_ text\">  \n          GUEST:&nbsp;\n          <mat-form-field class=\"w-70 pb\" hideRequieredMarker appearance=\"standard\">\n            <mat-label>Nombre</mat-label>\n              <input matInput type=\"tel\" maxlength=\"12\" [(ngModel)]=\"_sc.guestName\" name=\"guestN\" class=\"text\">\n              <mat-hint align=\"end\">Max 12 caracteres</mat-hint>\n            </mat-form-field>\n        <mat-form-field class=\"w-100 text\" appearance=\"legacy\">\n          <mat-label>Marcador</mat-label>\n          <input matInput type=\"number\" color=\"primary\" min=\"0\" max=\"99\" [(ngModel)]=\"_sc.guestScore\" name=\"guest\" class=\"text\">\n        </mat-form-field>\n      </div>\n      <button type=\"submit\" mat-raised-button color=\"primary\" class=\"button\">\n        ACTUALIZAR\n      </button>\n    </div>\n  </form>\n  <div class=\"wrapper pt3\">\n    <h1 class=\"tres text\">\n      CRONÓMETRO\n    </h1>\n    \n    <select [(ngModel)]=\"_cn.timeOut\" (change)=\"_cn.initClock()\" class=\"text\">\n      <option value=\"00:00\">T1</option>\n      <option value=\"45:00\">T2</option>\n      <option value=\"90:00\">ET</option>\n      <option value=\"105:00\">ET2</option>\n    </select>\n    <mat-form-field class=\"cuatro\">\n      <input matInput type=\"tel\" color=\"primary\"  [(ngModel)]=\"_cn.timeOut\" name=\"time\" (change)=\"_cn.initClock()\" class=\"text\">\n    </mat-form-field>\n    <button mat-stroked-button color=\"primary\" (click)=\"_cn.run()\">\n      <mat-icon class=\"icon-disp\">play_arrow</mat-icon>\n    </button>\n    <button mat-stroked-button color=\"primary\" (click)=\"_cn.pause()\">\n      <mat-icon class=\"icon-disp\">pause</mat-icon>\n    </button>\n    <button mat-stroked-button color=\"primary\" (dblclick)=\"_cn.stop()\">\n      <mat-icon class=\"icon-disp\">stop</mat-icon>\n    </button>\n  </div>\n  <div>\n    \n  </div>\n</mat-card>\n\n<div class=\"init fadeInDown\" *ngIf=\"_imgString.dataUrl\">\n  <mat-card>\n  <img mat-card-image [src]=\"_imgString.dataUrl\">\n  <mat-card-content>\n    Esta imagen se ajustará a 1536px x 700px\n  </mat-card-content>\n    <mat-card-actions>\n      <button mat-button (click)=\"_imgString.dataUrl = null\">CANCELAR</button>\n      <button mat-raised-button color=\"primary\" (click)=\"sendImage(_imgString.dataUrl)\">ENVIAR</button>\n    </mat-card-actions>\n  </mat-card>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/control/control.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pages/control/control.component.ts ***!
  \****************************************************/
/*! exports provided: ControlComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlComponent", function() { return ControlComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_score_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/score.service */ "./src/app/services/score.service.ts");
/* harmony import */ var _services_counter_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/counter.service */ "./src/app/services/counter.service.ts");
/* harmony import */ var _services_image_stringify_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/image-stringify.service */ "./src/app/services/image-stringify.service.ts");





var ControlComponent = /** @class */ (function () {
    function ControlComponent(_sc, _cn, _imgString) {
        this._sc = _sc;
        this._cn = _cn;
        this._imgString = _imgString;
    }
    ControlComponent.prototype.ngOnInit = function () {
    };
    ControlComponent.prototype.updateScore = function (sc) {
        if (sc.homeScore > 99) {
            sc.homeScore = 99;
        }
        if (sc.guestScore > 100) {
            sc.guestScore = 99;
        }
        var data = {
            homeScore: sc.homeScore,
            guestScore: sc.guestScore,
            homeName: sc.homeName,
            guestName: sc.guestName
        };
        this._sc.update(data);
    };
    ControlComponent.prototype.updateTime = function (cn) {
        if (cn.min == 0) {
            cn.timeOut = "00:00";
        }
        else if (cn.min == 45) {
            cn.timeOut = "45:00";
        }
        else if (cn.min == 90) {
            cn.timeOut = "90:00";
        }
        else if (cn.min == 105) {
            cn.timeOut = "105:00";
        }
        else if (cn.min == 120) {
            cn.timeOut = "120:00";
        }
    };
    ControlComponent.prototype.upImg = function (event) {
        this._imgString.toBase64(event);
    };
    ControlComponent.prototype.sendImage = function (image) {
        this._cn.sendImage(image);
        delete this._imgString.dataUrl;
    };
    ControlComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-control',
            template: __webpack_require__(/*! ./control.component.html */ "./src/app/pages/control/control.component.html"),
            styles: [__webpack_require__(/*! ./control.component.css */ "./src/app/pages/control/control.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_score_service__WEBPACK_IMPORTED_MODULE_2__["ScoreService"], _services_counter_service__WEBPACK_IMPORTED_MODULE_3__["CounterService"], _services_image_stringify_service__WEBPACK_IMPORTED_MODULE_4__["ImageStringifyService"]])
    ], ControlComponent);
    return ControlComponent;
}());



/***/ }),

/***/ "./src/app/pages/main/main.component.html":
/*!************************************************!*\
  !*** ./src/app/pages/main/main.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div FadeInDown>\n  <app-display></app-display>\n  <app-scoreboard></app-scoreboard>\n</div>\n"

/***/ }),

/***/ "./src/app/pages/main/main.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/main/main.component.ts ***!
  \**********************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MainComponent = /** @class */ (function () {
    function MainComponent() {
    }
    MainComponent.prototype.ngOnInit = function () {
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/pages/main/main.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/services/counter.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/counter.service.ts ***!
  \*********************************************/
/*! exports provided: CounterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CounterService", function() { return CounterService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _score_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./score.service */ "./src/app/services/score.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var CounterService = /** @class */ (function () {
    function CounterService(http, _sc) {
        this.http = http;
        this._sc = _sc;
        this.time = "1T";
        this.timeOut = '00:00';
        this.initClock();
    }
    ;
    CounterService.prototype.initClock = function () {
        var d = this.timeOut.split(':')[0];
        this.min = parseInt(d);
        d = this.timeOut.split(':')[1];
        this.sec = parseInt(d);
    };
    CounterService.prototype.run = function () {
        var _this = this;
        this.sendCmd('run');
        if (!this.clock) {
            this.clock = setInterval(function () {
                _this.timeOut = '';
                if (_this.sec == 59) {
                    _this.sec = 0;
                    ++_this.min;
                }
                else {
                    ++_this.sec;
                }
                if (_this.min == 0 && _this.sec == 0) {
                    clearInterval(_this.clock);
                }
                if (_this.min < 10) {
                    _this.timeOut += '0';
                }
                _this.timeOut += _this.min + ':';
                if (_this.sec < 10) {
                    _this.timeOut += '0';
                }
                if (_this.min <= 44) {
                    _this.time = "1T";
                }
                else if (_this.min <= 89) {
                    _this.time = "2T";
                }
                else if (_this.min <= 104) {
                    _this.time = "TE";
                }
                else if (_this.min <= 119) {
                    _this.time = "2TE";
                }
                _this.timeOut += _this.sec;
                if (_this.sec == 0) {
                    switch (_this.min) {
                        case (45):
                            _this.sendCmd('pause');
                            clearInterval(_this.clock);
                            delete _this.clock;
                            break;
                        case (90):
                            _this.sendCmd('pause');
                            clearInterval(_this.clock);
                            delete _this.clock;
                            break;
                        case (105):
                            _this.sendCmd('pause');
                            clearInterval(_this.clock);
                            delete _this.clock;
                            break;
                        case (120):
                            _this.sendCmd('pause');
                            clearInterval(_this.clock);
                            delete _this.clock;
                            break;
                    }
                }
            }, 1000);
        }
    };
    CounterService.prototype.pause = function () {
        this.sendCmd('pause');
        clearInterval(this.clock);
        delete this.clock;
    };
    CounterService.prototype.stop = function () {
        this.sendCmd('stop');
        clearInterval(this.clock);
        delete this.clock;
        this.timeOut = '00:00';
        this.initClock();
    };
    CounterService.prototype.sendCmd = function (action) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        var cmd = { action: action, time: this.timeOut };
        var body = JSON.stringify(cmd);
        var postRef = this.http.post('http://' + this._sc.url + '/time', body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
        postRef.subscribe(function (success) { console.log('true'); }, function (error) { console.error(error); });
    };
    CounterService.prototype.sendImage = function (image) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        var cmd = { image: image };
        var body = JSON.stringify(cmd);
        var postRef = this.http.post('http://' + this._sc.url + '/media', body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
        postRef.subscribe(function (success) { console.log('true'); }, function (error) { console.error(error); });
    };
    CounterService.prototype.getCount = function () {
        var _this = this;
        var countRef = this.http.get('http://' + this._sc.url + '/time').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res.json(); }));
        countRef.subscribe(function (data) {
            data = JSON.parse(data);
            console.log(data.action);
            if (data.action != 'nothing') {
                _this.timeOut = data.time;
                _this.initClock();
                switch (data.action) {
                    case 'run':
                        _this.run();
                        break;
                    case 'pause':
                        _this.pause();
                        break;
                    case 'stop':
                        _this.stop();
                        break;
                }
                _this.sendCmd('nothing');
            }
        });
    };
    CounterService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _score_service__WEBPACK_IMPORTED_MODULE_3__["ScoreService"]])
    ], CounterService);
    return CounterService;
}());



/***/ }),

/***/ "./src/app/services/display.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/display.service.ts ***!
  \*********************************************/
/*! exports provided: DisplayService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DisplayService", function() { return DisplayService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _score_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./score.service */ "./src/app/services/score.service.ts");





var DisplayService = /** @class */ (function () {
    function DisplayService(http, _sc) {
        this.http = http;
        this._sc = _sc;
        this.file = "assets/HPM.png";
    }
    DisplayService.prototype.getMedia = function () {
        var _this = this;
        var mediaRef = this.http.get('http://' + this._sc.url + '/media').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
        mediaRef.subscribe(function (data) {
            data = JSON.parse(data);
            if (data.image !== _this.file) {
                _this.file = data.image;
            }
        });
    };
    DisplayService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"], _score_service__WEBPACK_IMPORTED_MODULE_4__["ScoreService"]])
    ], DisplayService);
    return DisplayService;
}());



/***/ }),

/***/ "./src/app/services/image-stringify.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/services/image-stringify.service.ts ***!
  \*****************************************************/
/*! exports provided: ImageStringifyService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageStringifyService", function() { return ImageStringifyService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ImageStringifyService = /** @class */ (function () {
    function ImageStringifyService() {
        this.dataUrl = '';
    }
    ImageStringifyService.prototype.toBase64 = function (event) {
        var _this = this;
        var canvas = document.createElement('canvas');
        var ctx = canvas.getContext('2d');
        var img = new Image;
        img.src = URL.createObjectURL(event.target.files[0]);
        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0);
            _this.dataUrl = canvas.toDataURL('image/jpg');
        };
        return this.dataUrl;
    };
    ImageStringifyService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ImageStringifyService);
    return ImageStringifyService;
}());



/***/ }),

/***/ "./src/app/services/score.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/score.service.ts ***!
  \*******************************************/
/*! exports provided: ScoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScoreService", function() { return ScoreService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var ScoreService = /** @class */ (function () {
    function ScoreService(http) {
        this.http = http;
        this.url = '';
        this.homeScore = 0;
        this.guestScore = 0;
        this.homeName = 'HOME';
        this.guestName = 'GUEST';
    }
    ScoreService.prototype.getData = function () {
        var _this = this;
        if (this.url) {
            var dataRef = this.http.get('http://' + this.url).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
            dataRef.subscribe(function (data) {
                data = JSON.parse(data);
                _this.homeScore = data.homeScore;
                _this.guestScore = data.guestScore;
                _this.homeName = data.homeName;
                _this.guestName = data.guestName;
            });
        }
    };
    ScoreService.prototype.update = function (sc) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_2__["Headers"]({ 'Content-Type': 'application/json' });
        var body = JSON.stringify(sc);
        console.log(body);
        var postRef = this.http.post('http://' + this.url, body, { headers: headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res.json(); }));
        postRef.subscribe(function (success) { console.log('posted'); });
    };
    ScoreService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_2__["Http"]])
    ], ScoreService);
    return ScoreService;
}());



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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Users\diego\Downloads\APP_Soccer-Score 2.0.1\Soccer-score-master-Code 2.0.1\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map