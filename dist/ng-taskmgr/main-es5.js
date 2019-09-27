(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../my-calendar": [
		"./src/app/my-calendar/index.ts",
		"my-calendar"
	],
	"../project": [
		"./src/app/project/index.ts",
		"common",
		"project"
	],
	"../task": [
		"./src/app/task/index.ts",
		"common",
		"task"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-sidenav-container [class.myapp-dark-theme]=\"darkTheme\">\n  <mat-sidenav #sidenav mode=\"over\">\n    <app-sidebar (navClick)=\"sidenav.toggle()\"></app-sidebar>\n  </mat-sidenav>\n  <div class=\"site\">\n    <header>\n      <app-header\n        (toggle)=\"sidenav.toggle()\"\n        (toggleDarkTheme)=\"switchDarkTheme($event)\"\n      ></app-header>\n    </header>\n    <main>\n      <router-outlet></router-outlet>\n    </main>\n    <footer>\n      <app-footer></app-footer>\n    </footer>\n  </div>\n</mat-sidenav-container>\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/footer/footer.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/footer/footer.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <span class=\"fill-remaining-space\"></span>\n  <span>&copy; 接灰的电子产品 </span>\n  <span class=\"fill-remaining-space\"></span>\n</mat-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/header/header.component.html":
/*!*****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/header/header.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\n  <button mat-icon-button (click)=\"openSidebar()\" *ngIf=\"(auth$ | async)?.token\">\n    <mat-icon>menu</mat-icon>\n  </button>\n  <span>企业协作平台</span>\n  <span class=\"fill-remaining-space\"></span>\n  <mat-slide-toggle (change)=\"onChange($event.checked)\">黑夜模式</mat-slide-toggle>\n  <span><a *ngIf=\"(auth$ | async)?.token\" mat-button (click)=\"logout()\">退出</a></span>\n</mat-toolbar>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/core/sidebar/sidebar.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/core/sidebar/sidebar.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-nav-list>\n  <h3 mat-subheader>项目</h3>\n  <mat-list-item [routerLink]=\"['/projects']\" (click)=\"onNavClick()\">\n    <mat-icon mat-list-icon svgIcon=\"projects\"></mat-icon>\n    <span mat-line>项目首页</span>\n    <span mat-line mat-subheader>查看您的所有项目</span>\n  </mat-list-item>\n  <mat-list-item *ngFor=\"let prj of projects$ | async\" (click)=\"onPrjClick(prj)\">\n    <mat-icon mat-list-icon svgIcon=\"project\"></mat-icon>\n    <span mat-line>{{prj.name}}</span>\n    <span mat-line mat-subheader>{{prj.desc}}</span>\n  </mat-list-item>\n  <h3 mat-subheader>日历</h3>\n  <mat-list-item [routerLink]=\"['/mycal/month']\" (click)=\"onNavClick()\">\n    <mat-icon mat-list-icon svgIcon=\"month\"></mat-icon>\n    <span mat-line>月视图</span>\n    <span mat-line mat-subheader>按月查看您的任务</span>\n  </mat-list-item>\n  <mat-list-item [routerLink]=\"['/mycal/week']\" (click)=\"onNavClick()\">\n    <mat-icon mat-list-icon svgIcon=\"week\"></mat-icon>\n    <span mat-line>周视图</span>\n    <span mat-line mat-subheader>按周查看您的任务</span>\n  </mat-list-item>\n  <mat-list-item [routerLink]=\"['/mycal/day']\" (click)=\"onNavClick()\">\n    <mat-icon mat-list-icon [svgIcon]=\"today\"></mat-icon>\n    <span mat-line>日视图</span>\n    <span mat-line mat-subheader>按天查看您的任务</span>\n  </mat-list-item>\n</mat-nav-list>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/login/login.component.html":
/*!****************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/login/login.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form, $event)\">\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>登录:</mat-card-title>\n    </mat-card-header>\n    <mat-card-content>\n      <mat-form-field class=\"full-width\">\n        <input matInput type=\"text\" placeholder=\"您的email\" formControlName=\"email\">\n        <!-- <mat-error>{{ form.controls['email'].errors | json}}</mat-error> -->\n      </mat-form-field>\n      <mat-form-field class=\"full-width\">\n        <input matInput type=\"password\" placeholder=\"您的密码\" formControlName=\"password\">\n      </mat-form-field>\n      <button mat-raised-button type=\"submit\" [disabled]=\"!form.valid\">登录</button>\n    </mat-card-content>\n    <mat-card-actions class=\"text-right\">\n      <p>还没有账户? <a routerLink=\"/register\">注册</a></p>\n      <p>忘记密码? <a href=\"\">找回</a></p>\n    </mat-card-actions>\n  </mat-card>\n  <mat-card>\n    <mat-card-header>\n      <mat-card-title>每日佳句</mat-card-title>\n      <mat-card-subtitle>{{(quote$ | async).cn}}</mat-card-subtitle>\n    </mat-card-header>\n    <img mat-card-image [src]=\"(quote$ | async).pic\" alt=\"\">\n    <mat-card-content>{{(quote$ | async).en}}</mat-card-content>\n  </mat-card>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/login/register/register.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/login/register/register.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form, $event)\">\n  <mat-card class=\"card\">\n    <mat-tab-group>\n      <mat-tab label=\"账号信息\">\n        <mat-card-header>\n          <mat-card-title>注册:</mat-card-title>\n        </mat-card-header>\n        <mat-card-content>\n          <mat-form-field class=\"full-width\">\n            <input matInput type=\"text\" placeholder=\"您的email\" formControlName=\"email\">\n          </mat-form-field>\n          <mat-form-field class=\"full-width\">\n            <input matInput type=\"text\" placeholder=\"您的姓名\" formControlName=\"name\">\n          </mat-form-field>\n          <mat-form-field class=\"full-width\">\n            <input matInput type=\"password\" placeholder=\"您的密码\" formControlName=\"password\">\n          </mat-form-field>\n          <mat-form-field class=\"full-width\">\n            <input matInput type=\"password\" placeholder=\"重复输入您的密码\" formControlName=\"repeat\">\n          </mat-form-field>\n          <!-- <mat-grid-list cols=\"6\">\n            <mat-grid-tile *ngFor=\"let item of items\">\n              <mat-icon class=\"avatar\" [svgIcon]=\"item\"></mat-icon>\n            </mat-grid-tile>\n          </mat-grid-list> -->\n          <app-image-list-select\n            [useSvgIcon]=\"true\"\n            [cols]=\"6\"\n            [title]=\"'选择头像'\"\n            [items]=\"items\"\n            formControlName=\"avatar\"\n          ></app-image-list-select>\n          <button mat-raised-button type=\"submit\">注册</button>\n        </mat-card-content>\n        <mat-card-actions class=\"text-right\">\n          <p>还没有账户? <a href=\"\">登录</a></p>\n          <p>忘记密码? <a href=\"\">找回</a></p>\n        </mat-card-actions>\n      </mat-tab>\n      <mat-tab label=\"个人信息\">\n        <div class=\"full-width control-padding\">\n          <app-identity-input formControlName=\"identity\"></app-identity-input>\n        </div>\n        <div class=\"full-width control-padding\">\n          <app-age-input formControlName=\"dateOfBirth\"></app-age-input>\n        </div>\n        <div class=\"full-width control-padding\">\n          <app-area-list formControlName=\"address\"></app-area-list>\n        </div>\n      </mat-tab>\n    </mat-tab-group>\n  </mat-card>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/age-input/age-input.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/age-input/age-input.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"form\" class=\"age-input\">\n  <div>\n    <mat-form-field>\n      <input type=\"text\" matInput [matDatepicker]=\"birthPicker\" formControlName=\"birthday\" placeholder=\"出生日期\">\n      <mat-datepicker-toggle matSuffix [for]=\"birthPicker\"></mat-datepicker-toggle>\n      <mat-error>日期不正确</mat-error>\n    </mat-form-field>\n    <mat-datepicker touchUi=\"true\" #birthPicker></mat-datepicker>\n  </div>\n  <ng-container formGroupName=\"age\">\n    <div>\n      <mat-form-field class=\"age-num\">\n        <input type=\"number\" placeholder=\"年龄\" matInput formControlName=\"ageNum\">\n      </mat-form-field>\n    </div>\n    <div>\n      <mat-button-toggle-group formControlName=\"ageUnit\">\n        <mat-button-toggle *ngFor=\"let unit of ageUnits\" [value]=\"unit.value\">\n          {{unit.label}}\n        </mat-button-toggle>\n      </mat-button-toggle-group>\n    </div>\n    <mat-error *ngIf=\"form.get('age').hasError('ageInvalid')\">年龄或单位不正确</mat-error>\n  </ng-container>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/area-list/area-list.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/area-list/area-list.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"address-group\">\n  <div class=\"addr-input\">\n    <mat-select\n      placeholder=\"请输入省份\"\n      [(ngModel)]=\"_address.province\"\n      (selectionChange)=\"onProvinceChange()\">\n      <mat-option *ngFor=\"let p of provinces$ | async\" [value]=\"p\">{{p}}</mat-option>\n    </mat-select>\n  </div>\n  <div class=\"addr-input\">\n    <mat-select\n      placeholder=\"请输入城市\"\n      [(ngModel)]=\"_address.city\"\n      (selectionChange)=\"onCityChange()\">\n      <mat-option *ngFor=\"let c of cities$ | async\" [value]=\"c\">{{c}}</mat-option>\n    </mat-select>\n  </div>\n  <div class=\"addr-input\">\n    <mat-select\n      placeholder=\"请输入区县\"\n      [(ngModel)]=\"_address.district\"\n      (selectionChange)=\"onDistrictChange($event)\">\n      <mat-option *ngFor=\"let d of districts$ | async\" [value]=\"d\">{{d}}</mat-option>\n    </mat-select>\n  </div>\n  <div class=\"street\">\n    <mat-form-field class=\"full-width\">\n      <input\n        matInput\n        type=\"text\"\n        placeholder=\"请输入街道地址\"\n        [(ngModel)]=\"_address.street\"\n        (change)=\"onStreetChange()\">\n    </mat-form-field>\n  </div>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/chips-list/chips-list.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/chips-list/chips-list.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div [formGroup]=\"form\" class=\"full-width\">\n  <span>{{label}}</span>\n  <mat-form-field class=\"full-width\">\n    <mat-chip-list>\n      <mat-chip selectable=\"true\" color=\"primary\" *ngFor=\"let member of items\">\n        {{member.name}}\n        <mat-icon\n          class=\"remove-tag\"\n          matChipRemove\n          (click)=\"removeMember(member)\"\n        >cancel</mat-icon>\n      </mat-chip>\n      <input\n        type=\"text\"\n        matInput\n        #memberSearchInput\n        [placeholder]=\"placeholderText\"\n        [matAutocomplete]=\"autoMember\"\n        formControlName=\"memberSearch\"\n        *ngIf=\"displayInput\">\n    </mat-chip-list>\n    <mat-autocomplete\n      #autoMember=\"matAutocomplete\"\n      (optionSelected)=\"handleMemberSelection($event)\"\n      [displayWith]=\"displayUser\">\n      <mat-option *ngFor=\"let item of memberResults$ | async\" [value]=\"item\">\n        {{item.name}}\n      </mat-option>\n    </mat-autocomplete>\n  </mat-form-field>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/identity-input/identity-input.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/identity-input/identity-input.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"type-input\">\n  <mat-select\n    placeholder=\"证件类型\"\n    (selectionChange)=\"onIdTypeChange($event.value)\"\n    [(ngModel)]=\"identity.identityType\">\n    <mat-option *ngFor=\"let type of identityTypes\" [value]=\"type.value\">\n      {{type.label}}\n    </mat-option>\n  </mat-select>\n</div>\n<div class=\"id-input\">\n  <mat-form-field class=\"full-width\">\n    <input\n      type=\"text\"\n      matInput\n      placeholder=\"证件号码\"\n      (change)=\"onIdNoChange($event.target.value)\"\n      [(ngModel)]=\"identity.identityNo\">\n    <mat-error>证件号码输入有误</mat-error>\n  </mat-form-field>\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/shared/image-list-select/image-list-select.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/shared/image-list-select/image-list-select.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n\t<span>{{title}}</span>\n\t<mat-icon class=\"avatar\" [svgIcon]=\"selected\" *ngIf=\"useSvgIcon else imgSelect\"></mat-icon>\n\t<ng-template #imgSelect>\n\t\t<img [src]=\"selected\" alt=\"image selected\" class=\"cover\">\n\t</ng-template>\n</div>\n<div class=\"scroll-container\">\n\t<mat-grid-list [cols]=\"cols\" [rowHeight]=\"rowHeight\">\n\t\t<mat-grid-tile *ngFor=\"let item of items; let i = index;\">\n\t\t\t<div class=\"image-container\" (click)=\"onChange(i)\">\n\t\t\t\t<mat-icon class=\"avatar\" [svgIcon]=\"item\" *ngIf=\"useSvgIcon else imgItem\"></mat-icon>\n\t\t\t\t<ng-template #imgItem>\n\t\t\t\t\t<img [src]=\"item\" alt=\"image item\" [ngStyle]=\"{'width': itemWidth}\">\n\t\t\t\t</ng-template>\n\t\t\t\t<div class=\"after\">\n\t\t\t\t\t<div class=\"zoom\"><mat-icon>checked</mat-icon></div>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</mat-grid-tile>\n\t</mat-grid-list>\n</div>"

/***/ }),

/***/ "./src/app/actions/auth.action.ts":
/*!****************************************!*\
  !*** ./src/app/actions/auth.action.ts ***!
  \****************************************/
/*! exports provided: LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, REGISTER, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT, login, loginSuccess, loginFail, register, registerSuccess, registerFail, logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return LOGIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return LOGIN_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAIL", function() { return LOGIN_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER", function() { return REGISTER; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_SUCCESS", function() { return REGISTER_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "REGISTER_FAIL", function() { return REGISTER_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return LOGOUT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "login", function() { return login; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return loginSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loginFail", function() { return loginFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "register", function() { return register; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerSuccess", function() { return registerSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerFail", function() { return registerFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return logout; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var LOGIN = '[Auth] Login';
var LOGIN_SUCCESS = '[Auth] Login Success';
var LOGIN_FAIL = '[Auth] Login Fail';
var REGISTER = '[Auth] Register';
var REGISTER_SUCCESS = '[Auth] Register Success';
var REGISTER_FAIL = '[Auth] Register Fail';
var LOGOUT = '[Auth] Logout';
var login = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOGIN, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var loginSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOGIN_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var loginFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOGIN_FAIL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var register = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(REGISTER, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var registerSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(REGISTER_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var registerFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(REGISTER_FAIL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var logout = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOGOUT, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/actions/index.ts":
/*!**********************************!*\
  !*** ./src/app/actions/index.ts ***!
  \**********************************/
/*! exports provided: LOGIN, LOGIN_SUCCESS, LOGIN_FAIL, REGISTER, REGISTER_SUCCESS, REGISTER_FAIL, LOGOUT, login, loginSuccess, loginFail, register, registerSuccess, registerFail, logout, ADD, ADD_SUCCESS, ADD_FAIL, UPDATE, UPDATE_SUCCESS, UPDATE_FAIL, DELETE, DELETE_SUCCESS, DELETE_FAIL, LOAD, LOAD_SUCCESS, LOAD_FAIL, INVITE, INVITE_SUCCESS, INVITE_FAIL, SELECT_PROJECT, add, addSuccess, addFail, update, updateSuccess, updateFail, deleteProject, deleteSuccess, deleteFail, load, loadSuccess, loadFail, select, invite, inviteSuccess, inviteFail, QUOTE_LOAD, QUOTE_SUCCESS, QUOTE_FAIL, quoteLoad, quoteLoadSuccess, quoteLoadFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _quote_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./quote.action */ "./src/app/actions/quote.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QUOTE_LOAD", function() { return _quote_action__WEBPACK_IMPORTED_MODULE_0__["QUOTE_LOAD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QUOTE_SUCCESS", function() { return _quote_action__WEBPACK_IMPORTED_MODULE_0__["QUOTE_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "QUOTE_FAIL", function() { return _quote_action__WEBPACK_IMPORTED_MODULE_0__["QUOTE_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quoteLoad", function() { return _quote_action__WEBPACK_IMPORTED_MODULE_0__["quoteLoad"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quoteLoadSuccess", function() { return _quote_action__WEBPACK_IMPORTED_MODULE_0__["quoteLoadSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "quoteLoadFail", function() { return _quote_action__WEBPACK_IMPORTED_MODULE_0__["quoteLoadFail"]; });

/* harmony import */ var _auth_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.action */ "./src/app/actions/auth.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGIN", function() { return _auth_action__WEBPACK_IMPORTED_MODULE_1__["LOGIN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGIN_SUCCESS", function() { return _auth_action__WEBPACK_IMPORTED_MODULE_1__["LOGIN_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGIN_FAIL", function() { return _auth_action__WEBPACK_IMPORTED_MODULE_1__["LOGIN_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REGISTER", function() { return _auth_action__WEBPACK_IMPORTED_MODULE_1__["REGISTER"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REGISTER_SUCCESS", function() { return _auth_action__WEBPACK_IMPORTED_MODULE_1__["REGISTER_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "REGISTER_FAIL", function() { return _auth_action__WEBPACK_IMPORTED_MODULE_1__["REGISTER_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOGOUT", function() { return _auth_action__WEBPACK_IMPORTED_MODULE_1__["LOGOUT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "login", function() { return _auth_action__WEBPACK_IMPORTED_MODULE_1__["login"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loginSuccess", function() { return _auth_action__WEBPACK_IMPORTED_MODULE_1__["loginSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loginFail", function() { return _auth_action__WEBPACK_IMPORTED_MODULE_1__["loginFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "register", function() { return _auth_action__WEBPACK_IMPORTED_MODULE_1__["register"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerSuccess", function() { return _auth_action__WEBPACK_IMPORTED_MODULE_1__["registerSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "registerFail", function() { return _auth_action__WEBPACK_IMPORTED_MODULE_1__["registerFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "logout", function() { return _auth_action__WEBPACK_IMPORTED_MODULE_1__["logout"]; });

/* harmony import */ var _project_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./project.action */ "./src/app/actions/project.action.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ADD", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["ADD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ADD_SUCCESS", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["ADD_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ADD_FAIL", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["ADD_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["UPDATE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SUCCESS", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["UPDATE_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FAIL", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["UPDATE_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["DELETE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_SUCCESS", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["DELETE_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DELETE_FAIL", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["DELETE_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["LOAD"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_SUCCESS", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["LOAD_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "LOAD_FAIL", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["LOAD_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INVITE", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["INVITE"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INVITE_SUCCESS", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["INVITE_SUCCESS"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "INVITE_FAIL", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["INVITE_FAIL"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SELECT_PROJECT", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["SELECT_PROJECT"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "add", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["add"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addSuccess", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["addSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "addFail", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["addFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "update", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["update"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateSuccess", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["updateSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "updateFail", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["updateFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteProject", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["deleteProject"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteSuccess", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["deleteSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "deleteFail", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["deleteFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "load", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["load"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadSuccess", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["loadSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "loadFail", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["loadFail"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "select", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["select"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "invite", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["invite"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inviteSuccess", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["inviteSuccess"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "inviteFail", function() { return _project_action__WEBPACK_IMPORTED_MODULE_2__["inviteFail"]; });






/***/ }),

/***/ "./src/app/actions/project.action.ts":
/*!*******************************************!*\
  !*** ./src/app/actions/project.action.ts ***!
  \*******************************************/
/*! exports provided: ADD, ADD_SUCCESS, ADD_FAIL, UPDATE, UPDATE_SUCCESS, UPDATE_FAIL, DELETE, DELETE_SUCCESS, DELETE_FAIL, LOAD, LOAD_SUCCESS, LOAD_FAIL, INVITE, INVITE_SUCCESS, INVITE_FAIL, SELECT_PROJECT, add, addSuccess, addFail, update, updateSuccess, updateFail, deleteProject, deleteSuccess, deleteFail, load, loadSuccess, loadFail, select, invite, inviteSuccess, inviteFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD", function() { return ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SUCCESS", function() { return ADD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_FAIL", function() { return ADD_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE", function() { return UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SUCCESS", function() { return UPDATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FAIL", function() { return UPDATE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_SUCCESS", function() { return DELETE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_FAIL", function() { return DELETE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD", function() { return LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SUCCESS", function() { return LOAD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FAIL", function() { return LOAD_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVITE", function() { return INVITE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVITE_SUCCESS", function() { return INVITE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INVITE_FAIL", function() { return INVITE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_PROJECT", function() { return SELECT_PROJECT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSuccess", function() { return addSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFail", function() { return addFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSuccess", function() { return updateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFail", function() { return updateFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteProject", function() { return deleteProject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSuccess", function() { return deleteSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFail", function() { return deleteFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSuccess", function() { return loadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFail", function() { return loadFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "select", function() { return select; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "invite", function() { return invite; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inviteSuccess", function() { return inviteSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inviteFail", function() { return inviteFail; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var ADD = '[Project] Add';
var ADD_SUCCESS = '[Project] Add Success';
var ADD_FAIL = '[Project] Add Fail';
var UPDATE = '[Project] Update';
var UPDATE_SUCCESS = '[Project] Update Success';
var UPDATE_FAIL = '[Project] Update Fail';
var DELETE = '[Project] Delete';
var DELETE_SUCCESS = '[Project] Delete Success';
var DELETE_FAIL = '[Project] Delete Fail';
var LOAD = '[Project] Load';
var LOAD_SUCCESS = '[Project] Load Success';
var LOAD_FAIL = '[Project] Load Fail';
var INVITE = '[Project] Invite';
var INVITE_SUCCESS = '[Project] Invite Success';
var INVITE_FAIL = '[Project] Invite Fail';
var SELECT_PROJECT = '[Project] Select Project';
var add = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD_FAIL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var update = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UPDATE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var updateSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UPDATE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var updateFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UPDATE_FAIL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteProject = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(DELETE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(DELETE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(DELETE_FAIL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var load = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOAD, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var loadSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOAD_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var loadFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOAD_FAIL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var select = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SELECT_PROJECT, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var invite = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(INVITE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var inviteSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(INVITE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var inviteFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(INVITE_FAIL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/actions/quote.action.ts":
/*!*****************************************!*\
  !*** ./src/app/actions/quote.action.ts ***!
  \*****************************************/
/*! exports provided: QUOTE_LOAD, QUOTE_SUCCESS, QUOTE_FAIL, quoteLoad, quoteLoadSuccess, quoteLoadFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUOTE_LOAD", function() { return QUOTE_LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUOTE_SUCCESS", function() { return QUOTE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QUOTE_FAIL", function() { return QUOTE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quoteLoad", function() { return quoteLoad; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quoteLoadSuccess", function() { return quoteLoadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "quoteLoadFail", function() { return quoteLoadFail; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var QUOTE_LOAD = '[Quote] Load';
var QUOTE_SUCCESS = '[Quote] Load Success';
var QUOTE_FAIL = '[Quote] Load Fail';
var quoteLoad = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(QUOTE_LOAD, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var quoteLoadSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(QUOTE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var quoteLoadFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(QUOTE_FAIL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/actions/task-list.action.ts":
/*!*********************************************!*\
  !*** ./src/app/actions/task-list.action.ts ***!
  \*********************************************/
/*! exports provided: ADD, ADD_SUCCESS, ADD_FAIL, UPDATE, UPDATE_SUCCESS, UPDATE_FAIL, DELETE, DELETE_SUCCESS, DELETE_FAIL, LOAD, LOAD_SUCCESS, LOAD_FAIL, SWAP, SWAP_SUCCESS, SWAP_FAIL, add, addSuccess, addFail, update, updateSuccess, updateFail, deleteTaskList, deleteSuccess, deleteFail, load, loadSuccess, loadFail, swap, swapSuccess, swapFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD", function() { return ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SUCCESS", function() { return ADD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_FAIL", function() { return ADD_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE", function() { return UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SUCCESS", function() { return UPDATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FAIL", function() { return UPDATE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_SUCCESS", function() { return DELETE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_FAIL", function() { return DELETE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD", function() { return LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SUCCESS", function() { return LOAD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FAIL", function() { return LOAD_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWAP", function() { return SWAP; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWAP_SUCCESS", function() { return SWAP_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SWAP_FAIL", function() { return SWAP_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSuccess", function() { return addSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFail", function() { return addFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSuccess", function() { return updateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFail", function() { return updateFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteTaskList", function() { return deleteTaskList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSuccess", function() { return deleteSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFail", function() { return deleteFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSuccess", function() { return loadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFail", function() { return loadFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swap", function() { return swap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swapSuccess", function() { return swapSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "swapFail", function() { return swapFail; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var ADD = '[TaskList] Add';
var ADD_SUCCESS = '[TaskList] Add Success';
var ADD_FAIL = '[TaskList] Add Fail';
var UPDATE = '[TaskList] Update';
var UPDATE_SUCCESS = '[TaskList] Update Success';
var UPDATE_FAIL = '[TaskList] Update Fail';
var DELETE = '[TaskList] Delete';
var DELETE_SUCCESS = '[TaskList] Delete Success';
var DELETE_FAIL = '[TaskList] Delete Fail';
var LOAD = '[TaskList] Load';
var LOAD_SUCCESS = '[TaskList] Load Success';
var LOAD_FAIL = '[TaskList] Load Fail';
var SWAP = '[TaskList] Swap';
var SWAP_SUCCESS = '[TaskList] Swap Success';
var SWAP_FAIL = '[TaskList] Swap Fail';
var add = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD_FAIL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var update = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UPDATE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var updateSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UPDATE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var updateFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UPDATE_FAIL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteTaskList = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(DELETE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(DELETE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(DELETE_FAIL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var load = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOAD, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var loadSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOAD_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var loadFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOAD_FAIL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var swap = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SWAP, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var swapSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SWAP_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var swapFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SWAP_FAIL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/actions/task.action.ts":
/*!****************************************!*\
  !*** ./src/app/actions/task.action.ts ***!
  \****************************************/
/*! exports provided: ADD, ADD_SUCCESS, ADD_FAIL, UPDATE, UPDATE_SUCCESS, UPDATE_FAIL, DELETE, DELETE_SUCCESS, DELETE_FAIL, LOAD, LOAD_SUCCESS, LOAD_FAIL, MOVE, MOVE_SUCCESS, MOVE_FAIL, MOVE_ALL, MOVE_ALL_SUCCESS, MOVE_ALL_FAIL, COMPLETE, COMPLETE_SUCCESS, COMPLETE_FAIL, add, addSuccess, addFail, update, updateSuccess, updateFail, deleteAction, deleteSuccess, deleteFail, load, loadSuccess, loadFail, move, moveSuccess, moveFail, moveAll, moveAllSuccess, moveAllFail, complete, completeSuccess, completeFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD", function() { return ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SUCCESS", function() { return ADD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_FAIL", function() { return ADD_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE", function() { return UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SUCCESS", function() { return UPDATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FAIL", function() { return UPDATE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_SUCCESS", function() { return DELETE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_FAIL", function() { return DELETE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD", function() { return LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SUCCESS", function() { return LOAD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FAIL", function() { return LOAD_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE", function() { return MOVE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_SUCCESS", function() { return MOVE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_FAIL", function() { return MOVE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_ALL", function() { return MOVE_ALL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_ALL_SUCCESS", function() { return MOVE_ALL_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MOVE_ALL_FAIL", function() { return MOVE_ALL_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPLETE", function() { return COMPLETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPLETE_SUCCESS", function() { return COMPLETE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPLETE_FAIL", function() { return COMPLETE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSuccess", function() { return addSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFail", function() { return addFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSuccess", function() { return updateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFail", function() { return updateFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAction", function() { return deleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSuccess", function() { return deleteSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFail", function() { return deleteFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSuccess", function() { return loadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFail", function() { return loadFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "move", function() { return move; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveSuccess", function() { return moveSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveFail", function() { return moveFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveAll", function() { return moveAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveAllSuccess", function() { return moveAllSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "moveAllFail", function() { return moveAllFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "complete", function() { return complete; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "completeSuccess", function() { return completeSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "completeFail", function() { return completeFail; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var ADD = '[Task] Add';
var ADD_SUCCESS = '[Task] Add Success';
var ADD_FAIL = '[Task] Add Fail';
var UPDATE = '[Task] Update';
var UPDATE_SUCCESS = '[Task] Update Success';
var UPDATE_FAIL = '[Task] Update Fail';
var DELETE = '[Task] Delete';
var DELETE_SUCCESS = '[Task] Delete Success';
var DELETE_FAIL = '[Task] Delete Fail';
var LOAD = '[Task] Load';
var LOAD_SUCCESS = '[Task] Load Success';
var LOAD_FAIL = '[Task] Load Fail';
var MOVE = '[Task] Move';
var MOVE_SUCCESS = '[Task] Move Success';
var MOVE_FAIL = '[Task] Move Fail';
var MOVE_ALL = '[Task] Move All';
var MOVE_ALL_SUCCESS = '[Task] Move All Success';
var MOVE_ALL_FAIL = '[Task] Move All Fail';
var COMPLETE = '[Task] Complete All';
var COMPLETE_SUCCESS = '[Task] Complete All Success';
var COMPLETE_FAIL = '[Task] Complete All Fail';
var add = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD_FAIL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var update = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UPDATE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var updateSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UPDATE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var updateFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UPDATE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(DELETE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(DELETE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(DELETE_FAIL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var load = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOAD, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var loadSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOAD_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var loadFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOAD_FAIL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var move = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(MOVE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var moveSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(MOVE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var moveFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(MOVE_FAIL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var moveAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(MOVE_ALL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var moveAllSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(MOVE_ALL_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var moveAllFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(MOVE_ALL_FAIL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var complete = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(COMPLETE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var completeSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(COMPLETE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var completeFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(COMPLETE_FAIL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/actions/user.action.ts":
/*!****************************************!*\
  !*** ./src/app/actions/user.action.ts ***!
  \****************************************/
/*! exports provided: ADD, ADD_SUCCESS, ADD_FAIL, UPDATE, UPDATE_SUCCESS, UPDATE_FAIL, DELETE, DELETE_SUCCESS, DELETE_FAIL, LOAD, LOAD_SUCCESS, LOAD_FAIL, SEARCH, SEARCH_SUCCESS, SEARCH_FAIL, add, addSuccess, addFail, update, updateSuccess, updateFail, deleteAction, deleteSuccess, deleteFail, load, loadSuccess, loadFail, search, searchSuccess, searchFail */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD", function() { return ADD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SUCCESS", function() { return ADD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_FAIL", function() { return ADD_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE", function() { return UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_SUCCESS", function() { return UPDATE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_FAIL", function() { return UPDATE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE", function() { return DELETE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_SUCCESS", function() { return DELETE_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DELETE_FAIL", function() { return DELETE_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD", function() { return LOAD; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SUCCESS", function() { return LOAD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_FAIL", function() { return LOAD_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH", function() { return SEARCH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_SUCCESS", function() { return SEARCH_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SEARCH_FAIL", function() { return SEARCH_FAIL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "add", function() { return add; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addSuccess", function() { return addSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addFail", function() { return addFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "update", function() { return update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateSuccess", function() { return updateSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateFail", function() { return updateFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteAction", function() { return deleteAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteSuccess", function() { return deleteSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "deleteFail", function() { return deleteFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "load", function() { return load; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSuccess", function() { return loadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadFail", function() { return loadFail; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "search", function() { return search; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchSuccess", function() { return searchSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "searchFail", function() { return searchFail; });
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");

var ADD = '[User] Add User Project';
var ADD_SUCCESS = '[User] Add User Project Success';
var ADD_FAIL = '[User] Add User Project Fail';
var UPDATE = '[User] Update User Project';
var UPDATE_SUCCESS = '[User] Update User Project Success';
var UPDATE_FAIL = '[User] Update User Project Fail';
var DELETE = '[User] Delete User Project';
var DELETE_SUCCESS = '[User] Delete User Project Success';
var DELETE_FAIL = '[User] Delete User Project Fail';
var LOAD = '[User] Load Users By Projects';
var LOAD_SUCCESS = '[User] Load Users By Projects Success';
var LOAD_FAIL = '[User] Load Users By Projects Fail';
var SEARCH = '[User] Search';
var SEARCH_SUCCESS = '[User] Search Success';
var SEARCH_FAIL = '[User] Search Fail';
var add = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var addFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(ADD_FAIL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var update = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UPDATE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var updateSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UPDATE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var updateFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(UPDATE_FAIL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteAction = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(DELETE, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(DELETE_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var deleteFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(DELETE_FAIL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var load = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOAD, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var loadSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOAD_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var loadFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(LOAD_FAIL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var search = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SEARCH, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var searchSuccess = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SEARCH_SUCCESS, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());
var searchFail = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["createAction"])(SEARCH_FAIL, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_0__["props"])());


/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-sidenav-container.myapp-dark-theme {\n  background-color: black;\n}\n\nmat-sidenav {\n  width: 300px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFx5aW55aVxcRGVza3RvcFxcZXhlcmNpc2VcXGdpdGh1Yl9wcm9qXFxuZy10YXNrbWdyL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtc2lkZW5hdi1jb250YWluZXIubXlhcHAtZGFyay10aGVtZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbn1cclxuXHJcbm1hdC1zaWRlbmF2IHtcclxuICB3aWR0aDogMzAwcHg7XHJcbn1cclxuIiwibWF0LXNpZGVuYXYtY29udGFpbmVyLm15YXBwLWRhcmstdGhlbWUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cblxubWF0LXNpZGVuYXYge1xuICB3aWR0aDogMzAwcHg7XG59Il19 */"

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
/* harmony import */ var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/overlay */ "./node_modules/@angular/cdk/esm5/overlay.es5.js");



var AppComponent = /** @class */ (function () {
    function AppComponent(oc) {
        this.oc = oc;
        this.darkTheme = false;
    }
    AppComponent.prototype.switchDarkTheme = function (dark) {
        this.darkTheme = dark;
        this.oc.getContainerElement().classList.add('myapp-dark-theme');
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_2__["OverlayContainer"] }
    ]; };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
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
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./login/login.module */ "./src/app/login/login.module.ts");







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_3__["CoreModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"],
                _login_login_module__WEBPACK_IMPORTED_MODULE_6__["LoginModule"],
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/core/app-routing.module.ts":
/*!********************************************!*\
  !*** ./src/app/core/app-routing.module.ts ***!
  \********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/auth-guard.service */ "./src/app/services/auth-guard.service.ts");




var routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    // { path: 'projects', redirectTo: '/projects', pathMatch: 'full'},
    // { path: 'tasklists', redirectTo: '/tasklists', pathMatch: 'full'},
    {
        path: 'projects',
        loadChildren: '../project#ProjectModule',
        pathMatch: 'full',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'tasklists/:id',
        loadChildren: '../task#TaskModule',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
    {
        path: 'mycal/:view',
        loadChildren: '../my-calendar#MyCalendarModule',
        canActivate: [_services_auth_guard_service__WEBPACK_IMPORTED_MODULE_3__["AuthGuardService"]]
    },
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

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/core/app-routing.module.ts");
/* harmony import */ var _services_services_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/services.module */ "./src/app/services/services.module.ts");
/* harmony import */ var _effects__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../effects */ "./src/app/effects/index.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/core/header/header.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/core/footer/footer.component.ts");
/* harmony import */ var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./sidebar/sidebar.component */ "./src/app/core/sidebar/sidebar.component.ts");
/* harmony import */ var _utils_svg_util__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../utils/svg.util */ "./src/app/utils/svg.util.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _utils_debug_util__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../utils/debug.util */ "./src/app/utils/debug.util.ts");

















var CoreModule = /** @class */ (function () {
    function CoreModule(parent, ir, ds) {
        if (parent) {
            throw new Error('模块已经存在, 不能再次加载!');
        }
        Object(_utils_svg_util__WEBPACK_IMPORTED_MODULE_14__["loadSvgResources"])(ir, ds);
    }
    CoreModule.ctorParameters = function () { return [
        { type: CoreModule, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"] }] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconRegistry"] },
        { type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"] }
    ]; };
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"]
            ],
            imports: [
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _services_services_module__WEBPACK_IMPORTED_MODULE_8__["ServicesModule"].forRoot(),
                _effects__WEBPACK_IMPORTED_MODULE_9__["AppEffectsModule"],
                _reducers__WEBPACK_IMPORTED_MODULE_10__["AppStoreModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            ],
            exports: [
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_12__["FooterComponent"],
                _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_13__["SidebarComponent"],
            ],
            providers: [
                {
                    provide: 'BASE_CONFIG', useValue: {
                        uri: 'http://localhost:3000'
                    }
                }
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["SkipSelf"])())
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/footer/footer.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/footer/footer.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/footer/footer.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/footer/footer.component.ts ***!
  \*************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/core/footer/footer.component.scss")]
        })
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/core/header/header.component.scss":
/*!***************************************************!*\
  !*** ./src/app/core/header/header.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvcmUvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/core/header/header.component.ts":
/*!*************************************************!*\
  !*** ./src/app/core/header/header.component.ts ***!
  \*************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions */ "./src/app/actions/index.ts");





var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(store$) {
        this.store$ = store$;
        this.toggle = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.toggleDarkTheme = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.auth$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["getAuthState"]));
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.openSidebar = function () {
        this.toggle.emit();
    };
    HeaderComponent.prototype.onChange = function (checked) {
        this.toggleDarkTheme.emit(checked);
    };
    HeaderComponent.prototype.logout = function () {
        this.store$.dispatch(_actions__WEBPACK_IMPORTED_MODULE_4__["logout"](null));
    };
    HeaderComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], HeaderComponent.prototype, "toggle", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], HeaderComponent.prototype, "toggleDarkTheme", void 0);
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! raw-loader!./header.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/core/header/header.component.scss")]
        })
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-icon {\n  align-self: flex-start;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29yZS9zaWRlYmFyL0M6XFxVc2Vyc1xceWlueWlcXERlc2t0b3BcXGV4ZXJjaXNlXFxnaXRodWJfcHJvalxcbmctdGFza21nci9zcmNcXGFwcFxcY29yZVxcc2lkZWJhclxcc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29yZS9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxzQkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvY29yZS9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJtYXQtaWNvbiB7XHJcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxufSIsIm1hdC1pY29uIHtcbiAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/core/sidebar/sidebar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/core/sidebar/sidebar.component.ts ***!
  \***************************************************/
/*! exports provided: SidebarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidebarComponent", function() { return SidebarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _actions_project_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/project.action */ "./src/app/actions/project.action.ts");






var SidebarComponent = /** @class */ (function () {
    function SidebarComponent(store$) {
        this.store$ = store$;
        this.navClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.today = 'day';
        this.projects$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["getProjects"]));
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.today = "day" + Object(date_fns__WEBPACK_IMPORTED_MODULE_2__["getDate"])(new Date());
    };
    SidebarComponent.prototype.onNavClick = function () {
        this.navClick.emit();
    };
    SidebarComponent.prototype.onPrjClick = function (prj) {
        this.store$.dispatch(_actions_project_action__WEBPACK_IMPORTED_MODULE_5__["select"]({ payload: prj }));
        this.navClick.emit();
    };
    SidebarComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], SidebarComponent.prototype, "navClick", void 0);
    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sidebar',
            template: __webpack_require__(/*! raw-loader!./sidebar.component.html */ "./node_modules/raw-loader/index.js!./src/app/core/sidebar/sidebar.component.html"),
            styles: [__webpack_require__(/*! ./sidebar.component.scss */ "./src/app/core/sidebar/sidebar.component.scss")]
        })
    ], SidebarComponent);
    return SidebarComponent;
}());



/***/ }),

/***/ "./src/app/directive/directive.module.ts":
/*!***********************************************!*\
  !*** ./src/app/directive/directive.module.ts ***!
  \***********************************************/
/*! exports provided: DirectiveModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DirectiveModule", function() { return DirectiveModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drag_drop_drag_directive__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./drag-drop/drag.directive */ "./src/app/directive/drag-drop/drag.directive.ts");
/* harmony import */ var _drag_drop_drop_directive__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./drag-drop/drop.directive */ "./src/app/directive/drag-drop/drop.directive.ts");
/* harmony import */ var _drag_drop_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drag-drop.service */ "./src/app/directive/drag-drop.service.ts");





var DirectiveModule = /** @class */ (function () {
    function DirectiveModule() {
    }
    DirectiveModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_drag_drop_drag_directive__WEBPACK_IMPORTED_MODULE_2__["DragDirective"], _drag_drop_drop_directive__WEBPACK_IMPORTED_MODULE_3__["DropDirective"]],
            exports: [_drag_drop_drag_directive__WEBPACK_IMPORTED_MODULE_2__["DragDirective"], _drag_drop_drop_directive__WEBPACK_IMPORTED_MODULE_3__["DropDirective"]],
            providers: [_drag_drop_service__WEBPACK_IMPORTED_MODULE_4__["DragDropService"]]
        })
    ], DirectiveModule);
    return DirectiveModule;
}());



/***/ }),

/***/ "./src/app/directive/drag-drop.service.ts":
/*!************************************************!*\
  !*** ./src/app/directive/drag-drop.service.ts ***!
  \************************************************/
/*! exports provided: DragDropService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDropService", function() { return DragDropService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var DragDropService = /** @class */ (function () {
    function DragDropService() {
        this._dragData = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    DragDropService.prototype.setDragData = function (data) {
        this._dragData.next(data);
    };
    DragDropService.prototype.getDragData = function () {
        return this._dragData.asObservable();
    };
    DragDropService.prototype.clearDragData = function () {
        this._dragData.next(null);
    };
    DragDropService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        })
    ], DragDropService);
    return DragDropService;
}());



/***/ }),

/***/ "./src/app/directive/drag-drop/drag.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directive/drag-drop/drag.directive.ts ***!
  \*******************************************************/
/*! exports provided: DragDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DragDirective", function() { return DragDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drag_drop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drag-drop.service */ "./src/app/directive/drag-drop.service.ts");



var DragDirective = /** @class */ (function () {
    function DragDirective(el, rd, service) {
        this.el = el;
        this.rd = rd;
        this.service = service;
        this._isDraggable = false;
    }
    Object.defineProperty(DragDirective.prototype, "isDraggable", {
        get: function () {
            return this._isDraggable;
        },
        set: function (val) {
            this._isDraggable = val;
            this.rd.setAttribute(this.el.nativeElement, 'draggable', "" + val);
        },
        enumerable: true,
        configurable: true
    });
    DragDirective.prototype.onDragStart = function (ev) {
        if (this.el.nativeElement === ev.target) {
            this.rd.addClass(this.el.nativeElement, this.draggedClass);
            this.service.setDragData({ tag: this.dragTag, data: this.dragData });
        }
    };
    DragDirective.prototype.onDragEnd = function (ev) {
        if (this.el.nativeElement === ev.target) {
            this.rd.removeClass(this.el.nativeElement, this.draggedClass);
        }
    };
    DragDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _drag_drop_service__WEBPACK_IMPORTED_MODULE_2__["DragDropService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('app-draggable') //外部调用app-draggable='true' 会调用set方法
    ], DragDirective.prototype, "isDraggable", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DragDirective.prototype, "draggedClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DragDirective.prototype, "dragTag", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DragDirective.prototype, "dragData", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("dragstart", ['$event'])
    ], DragDirective.prototype, "onDragStart", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("dragend", ['$event'])
    ], DragDirective.prototype, "onDragEnd", null);
    DragDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[app-draggable][dragTag][dragData][draggedClass]'
        })
    ], DragDirective);
    return DragDirective;
}());



/***/ }),

/***/ "./src/app/directive/drag-drop/drop.directive.ts":
/*!*******************************************************!*\
  !*** ./src/app/directive/drag-drop/drop.directive.ts ***!
  \*******************************************************/
/*! exports provided: DropDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropDirective", function() { return DropDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _drag_drop_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../drag-drop.service */ "./src/app/directive/drag-drop.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var DropDirective = /** @class */ (function () {
    function DropDirective(el, rd, service) {
        this.el = el;
        this.rd = rd;
        this.service = service;
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.dropTags = [];
        this.data$ = service.getDragData().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1));
    }
    DropDirective.prototype.onDragEnter = function (ev) {
        var _this = this;
        ev.preventDefault();
        ev.stopPropagation();
        if (this.el.nativeElement === ev.target) {
            this.data$.subscribe(function (dragData) {
                if (_this.dropTags.indexOf(dragData.tag) > -1) {
                    _this.rd.addClass(_this.el.nativeElement, _this.dragEnterClass);
                }
            });
        }
    };
    DropDirective.prototype.onDragOver = function (ev) {
        var _this = this;
        ev.preventDefault();
        ev.stopPropagation();
        if (this.el.nativeElement === ev.target) {
            this.data$.subscribe(function (dragData) {
                if (_this.dropTags.indexOf(dragData.tag) > -1) {
                    _this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'all');
                    _this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'move');
                }
                else {
                    _this.rd.setProperty(ev, 'dataTransfer.effectAllowed', 'none');
                    _this.rd.setProperty(ev, 'dataTransfer.dropEffect', 'none');
                }
            });
        }
    };
    DropDirective.prototype.onDragLeave = function (ev) {
        var _this = this;
        ev.preventDefault();
        ev.stopPropagation();
        if (this.el.nativeElement === ev.target) {
            this.data$.subscribe(function (dragData) {
                if (_this.dropTags.indexOf(dragData.tag) > -1) {
                    _this.rd.removeClass(_this.el.nativeElement, _this.dragEnterClass);
                }
            });
        }
    };
    DropDirective.prototype.onDrop = function (ev) {
        var _this = this;
        ev.preventDefault();
        ev.stopPropagation();
        if (this.el.nativeElement === ev.target) {
            this.data$.subscribe(function (dragData) {
                if (_this.dropTags.indexOf(dragData.tag) > -1) {
                    _this.rd.removeClass(_this.el.nativeElement, _this.dragEnterClass);
                    _this.dropped.emit(dragData);
                    _this.service.clearDragData();
                }
            });
        }
    };
    DropDirective.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"] },
        { type: _drag_drop_service__WEBPACK_IMPORTED_MODULE_2__["DragDropService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], DropDirective.prototype, "dropped", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DropDirective.prototype, "dragEnterClass", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], DropDirective.prototype, "dropTags", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("dragenter", ['$event'])
    ], DropDirective.prototype, "onDragEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("dragover", ['$event'])
    ], DropDirective.prototype, "onDragOver", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("dragleave", ['$event'])
    ], DropDirective.prototype, "onDragLeave", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("drop", ['$event'])
    ], DropDirective.prototype, "onDrop", null);
    DropDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[app-droppable][dropTags][dragEnterClass]'
        })
    ], DropDirective);
    return DropDirective;
}());



/***/ }),

/***/ "./src/app/domain/index.ts":
/*!*********************************!*\
  !*** ./src/app/domain/index.ts ***!
  \*********************************/
/*! exports provided: IdentityType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _user_model__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./user.model */ "./src/app/domain/user.model.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "IdentityType", function() { return _user_model__WEBPACK_IMPORTED_MODULE_0__["IdentityType"]; });




/***/ }),

/***/ "./src/app/domain/user.model.ts":
/*!**************************************!*\
  !*** ./src/app/domain/user.model.ts ***!
  \**************************************/
/*! exports provided: IdentityType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityType", function() { return IdentityType; });
var IdentityType;
(function (IdentityType) {
    IdentityType[IdentityType["IdCard"] = 0] = "IdCard";
    IdentityType[IdentityType["Insurance"] = 1] = "Insurance";
    IdentityType[IdentityType["Passport"] = 2] = "Passport";
    IdentityType[IdentityType["Militory"] = 3] = "Militory";
    IdentityType[IdentityType["Other"] = 4] = "Other";
})(IdentityType || (IdentityType = {}));


/***/ }),

/***/ "./src/app/effects/auth.effects.ts":
/*!*****************************************!*\
  !*** ./src/app/effects/auth.effects.ts ***!
  \*****************************************/
/*! exports provided: AuthEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthEffects", function() { return AuthEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions */ "./src/app/actions/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");








var AuthEffects = /** @class */ (function () {
    function AuthEffects(actions$, service, router) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.router = router;
        this.login$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["LOGIN"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (_a) {
                var email = _a.email, password = _a.password;
                return _this.service.login(email, password).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (auth) { return _actions__WEBPACK_IMPORTED_MODULE_6__["loginSuccess"](auth); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions__WEBPACK_IMPORTED_MODULE_6__["loginFail"](error)); }));
            }));
        });
        this.register$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["REGISTER"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (user) {
                return _this.service.register(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (auth) { return _actions__WEBPACK_IMPORTED_MODULE_6__["registerSuccess"](auth); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions__WEBPACK_IMPORTED_MODULE_6__["registerFail"](error)); }));
            }));
        });
        this.logout$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["LOGOUT"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
                _this.router.navigateByUrl('/');
            }));
        }, { dispatch: false });
        this.loginAndNavigate$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["LOGIN_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
                _this.router.navigateByUrl('/projects');
            }));
        }, { dispatch: false });
        this.registerAndNavigate$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["REGISTER_SUCCESS"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["tap"])(function (_) {
                _this.router.navigateByUrl('/projects');
            }));
        }, { dispatch: false });
    }
    AuthEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"] }
    ]; };
    AuthEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthEffects);
    return AuthEffects;
}());



/***/ }),

/***/ "./src/app/effects/index.ts":
/*!**********************************!*\
  !*** ./src/app/effects/index.ts ***!
  \**********************************/
/*! exports provided: AppEffectsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppEffectsModule", function() { return AppEffectsModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _quote_effects__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./quote.effects */ "./src/app/effects/quote.effects.ts");
/* harmony import */ var _auth_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./auth.effects */ "./src/app/effects/auth.effects.ts");
/* harmony import */ var _project_effects__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project.effects */ "./src/app/effects/project.effects.ts");
/* harmony import */ var _task_list_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-list.effects */ "./src/app/effects/task-list.effects.ts");
/* harmony import */ var _task_effects__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task.effects */ "./src/app/effects/task.effects.ts");
/* harmony import */ var _user_effects__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./user.effects */ "./src/app/effects/user.effects.ts");









var AppEffectsModule = /** @class */ (function () {
    function AppEffectsModule() {
    }
    AppEffectsModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["EffectsModule"].forRoot([
                    _quote_effects__WEBPACK_IMPORTED_MODULE_3__["QuoteEffects"],
                    _auth_effects__WEBPACK_IMPORTED_MODULE_4__["AuthEffects"],
                    _project_effects__WEBPACK_IMPORTED_MODULE_5__["ProjectEffects"],
                    _task_list_effects__WEBPACK_IMPORTED_MODULE_6__["TaskListEffects"],
                    _task_effects__WEBPACK_IMPORTED_MODULE_7__["TaskEffects"],
                    _user_effects__WEBPACK_IMPORTED_MODULE_8__["UserEffects"],
                ]),
            ]
        })
    ], AppEffectsModule);
    return AppEffectsModule;
}());



/***/ }),

/***/ "./src/app/effects/project.effects.ts":
/*!********************************************!*\
  !*** ./src/app/effects/project.effects.ts ***!
  \********************************************/
/*! exports provided: ProjectEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectEffects", function() { return ProjectEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _actions_project_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/project.action */ "./src/app/actions/project.action.ts");
/* harmony import */ var _services_project_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _actions_task_list_action__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../actions/task-list.action */ "./src/app/actions/task-list.action.ts");
/* harmony import */ var _actions_user_action__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../actions/user.action */ "./src/app/actions/user.action.ts");












var ProjectEffects = /** @class */ (function () {
    function ProjectEffects(actions$, store$, service$, router) {
        var _this = this;
        this.actions$ = actions$;
        this.store$ = store$;
        this.service$ = service$;
        this.router = router;
        this.loadProjects$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_project_action__WEBPACK_IMPORTED_MODULE_7__["LOAD"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(_this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_9__["getAuthState"]))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (_a) {
                var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), _ = _b[0], auth = _b[1];
                return _this.service$.get(auth.user.id).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (projects) { return _actions_project_action__WEBPACK_IMPORTED_MODULE_7__["loadSuccess"]({ payload: projects }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions_project_action__WEBPACK_IMPORTED_MODULE_7__["loadFail"](error)); }));
            }));
        });
        this.addProject$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_project_action__WEBPACK_IMPORTED_MODULE_7__["add"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (action) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(action).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(_this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_9__["getAuthState"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (auth) { return auth.user; })))); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (_a) {
                var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), action = _b[0], user = _b[1];
                var added = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, action.payload, { members: ["" + user.id] });
                return _this.service$.add(added).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (project) { return _actions_project_action__WEBPACK_IMPORTED_MODULE_7__["addSuccess"]({ payload: project }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions_project_action__WEBPACK_IMPORTED_MODULE_7__["addFail"](error)); }));
            }));
        });
        this.updateProjects$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_project_action__WEBPACK_IMPORTED_MODULE_7__["UPDATE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (_a) {
                var payload = _a.payload;
                return _this.service$.update(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (project) { return _actions_project_action__WEBPACK_IMPORTED_MODULE_7__["updateSuccess"]({ payload: project }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions_project_action__WEBPACK_IMPORTED_MODULE_7__["updateFail"](error)); }));
            }));
        });
        this.delProject$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_project_action__WEBPACK_IMPORTED_MODULE_7__["DELETE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (_a) {
                var payload = _a.payload;
                return _this.service$.delete(payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (project) { return _actions_project_action__WEBPACK_IMPORTED_MODULE_7__["deleteSuccess"]({ payload: project }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions_project_action__WEBPACK_IMPORTED_MODULE_7__["deleteFail"](error)); }));
            }));
        });
        this.selectProject$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_project_action__WEBPACK_IMPORTED_MODULE_7__["select"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (action) {
                _this.router.navigateByUrl("/tasklists/" + action.payload.id);
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return _actions_task_list_action__WEBPACK_IMPORTED_MODULE_10__["load"]({ payload: action.payload.id }); }));
        });
        this.invite$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_project_action__WEBPACK_IMPORTED_MODULE_7__["INVITE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["exhaustMap"])(function (_a) {
                var projectId = _a.projectId, members = _a.members;
                return _this.service$.invite(projectId, members).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (project) { return _actions_project_action__WEBPACK_IMPORTED_MODULE_7__["inviteSuccess"]({ payload: project }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(_actions_project_action__WEBPACK_IMPORTED_MODULE_7__["inviteFail"](error)); }));
            }));
        });
        this.loadUsers$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_project_action__WEBPACK_IMPORTED_MODULE_7__["loadSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["switchMap"])(function (action) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["from"])(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (prj) { return prj.id; }));
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (projectId) { return _actions_user_action__WEBPACK_IMPORTED_MODULE_11__["load"]({ payload: projectId }); }));
        });
        this.addUserProject$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_project_action__WEBPACK_IMPORTED_MODULE_7__["addSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["concatMap"])(function (action) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(action).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(_this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_9__["getAuthState"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (auth) { return auth.user; })))); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
                var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), action = _b[0], user = _b[1];
                return _actions_user_action__WEBPACK_IMPORTED_MODULE_11__["add"]({ payload: { user: user, projectId: action.payload.id } });
            }));
        });
        this.removeUserProject$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_project_action__WEBPACK_IMPORTED_MODULE_7__["deleteSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["withLatestFrom"])(_this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_9__["getAuthState"])).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (auth) { return auth.user; }))), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (_a) {
                var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__read"](_a, 2), action = _b[0], user = _b[1];
                return _actions_user_action__WEBPACK_IMPORTED_MODULE_11__["deleteAction"]({ payload: { user: user, projectId: action.payload.id } });
            }));
        });
        this.updateUserProject$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["ofType"])(_actions_project_action__WEBPACK_IMPORTED_MODULE_7__["inviteSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (action) { return _actions_user_action__WEBPACK_IMPORTED_MODULE_11__["update"]({ payload: action.payload }); }));
        });
    }
    ProjectEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_4__["Actions"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] },
        { type: _services_project_service__WEBPACK_IMPORTED_MODULE_8__["ProjectService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"] }
    ]; };
    ProjectEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], ProjectEffects);
    return ProjectEffects;
}());



/***/ }),

/***/ "./src/app/effects/quote.effects.ts":
/*!******************************************!*\
  !*** ./src/app/effects/quote.effects.ts ***!
  \******************************************/
/*! exports provided: QuoteEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteEffects", function() { return QuoteEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_quote_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/quote.service */ "./src/app/services/quote.service.ts");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions */ "./src/app/actions/index.ts");







var QuoteEffects = /** @class */ (function () {
    function QuoteEffects(actions$, service) {
        var _this = this;
        this.actions$ = actions$;
        this.service = service;
        this.quote$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions__WEBPACK_IMPORTED_MODULE_6__["QUOTE_LOAD"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function () { return _this.service.getQuote().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (q) { return _actions__WEBPACK_IMPORTED_MODULE_6__["quoteLoadSuccess"](q); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err) { return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"]; })); })); });
    }
    QuoteEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _services_quote_service__WEBPACK_IMPORTED_MODULE_5__["QuoteService"] }
    ]; };
    QuoteEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], QuoteEffects);
    return QuoteEffects;
}());



/***/ }),

/***/ "./src/app/effects/task-list.effects.ts":
/*!**********************************************!*\
  !*** ./src/app/effects/task-list.effects.ts ***!
  \**********************************************/
/*! exports provided: TaskListEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListEffects", function() { return TaskListEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_task_list_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/task-list.service */ "./src/app/services/task-list.service.ts");
/* harmony import */ var _actions_task_list_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/task-list.action */ "./src/app/actions/task-list.action.ts");
/* harmony import */ var _actions_task_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/task.action */ "./src/app/actions/task.action.ts");








var TaskListEffects = /** @class */ (function () {
    function TaskListEffects(actions$, service$) {
        var _this = this;
        this.actions$ = actions$;
        this.service$ = service$;
        this.loadTaskList$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_task_list_action__WEBPACK_IMPORTED_MODULE_6__["load"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) {
                return _this.service$.get(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (taskLists) { return _actions_task_list_action__WEBPACK_IMPORTED_MODULE_6__["loadSuccess"]({ payload: taskLists }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_task_list_action__WEBPACK_IMPORTED_MODULE_6__["loadFail"](error)); }));
            }));
        });
        this.addTaskList$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_task_list_action__WEBPACK_IMPORTED_MODULE_6__["add"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) {
                return _this.service$.add(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (taskList) { return _actions_task_list_action__WEBPACK_IMPORTED_MODULE_6__["addSuccess"]({ payload: taskList }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_task_list_action__WEBPACK_IMPORTED_MODULE_6__["addFail"](error)); }));
            }));
        });
        this.updateTaskList$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_task_list_action__WEBPACK_IMPORTED_MODULE_6__["update"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) {
                return _this.service$.update(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (taskList) { return _actions_task_list_action__WEBPACK_IMPORTED_MODULE_6__["updateSuccess"]({ payload: taskList }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_task_list_action__WEBPACK_IMPORTED_MODULE_6__["updateFail"](error)); }));
            }));
        });
        this.delTaskList$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_task_list_action__WEBPACK_IMPORTED_MODULE_6__["deleteTaskList"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) {
                return _this.service$.delete(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (taskList) { return _actions_task_list_action__WEBPACK_IMPORTED_MODULE_6__["deleteSuccess"]({ payload: taskList }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_task_list_action__WEBPACK_IMPORTED_MODULE_6__["deleteFail"](error)); }));
            }));
        });
        this.swap$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_task_list_action__WEBPACK_IMPORTED_MODULE_6__["SWAP"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (_a) {
                var src = _a.src, target = _a.target;
                return _this.service$.swapOrder(src, target).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (taskLists) { return _actions_task_list_action__WEBPACK_IMPORTED_MODULE_6__["swapSuccess"]({ payload: taskLists }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_task_list_action__WEBPACK_IMPORTED_MODULE_6__["swapFail"](error)); }));
            }));
        });
        this.loadTasksInLists$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_task_list_action__WEBPACK_IMPORTED_MODULE_6__["loadSuccess"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (action) { return _actions_task_action__WEBPACK_IMPORTED_MODULE_7__["load"]({ payload: action.payload }); }));
        });
    }
    TaskListEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _services_task_list_service__WEBPACK_IMPORTED_MODULE_5__["TaskListService"] }
    ]; };
    TaskListEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TaskListEffects);
    return TaskListEffects;
}());



/***/ }),

/***/ "./src/app/effects/task.effects.ts":
/*!*****************************************!*\
  !*** ./src/app/effects/task.effects.ts ***!
  \*****************************************/
/*! exports provided: TaskEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskEffects", function() { return TaskEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _actions_task_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/task.action */ "./src/app/actions/task.action.ts");







var TaskEffects = /** @class */ (function () {
    function TaskEffects(actions$, service$) {
        var _this = this;
        this.actions$ = actions$;
        this.service$ = service$;
        this.loadTasks$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_task_action__WEBPACK_IMPORTED_MODULE_6__["load"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) {
                return _this.service$.getByLists(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (tasks) { return _actions_task_action__WEBPACK_IMPORTED_MODULE_6__["loadSuccess"]({ payload: tasks }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_task_action__WEBPACK_IMPORTED_MODULE_6__["loadFail"]({ payload: error })); }));
            }));
        });
        this.addTask$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_task_action__WEBPACK_IMPORTED_MODULE_6__["add"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) {
                return _this.service$.add(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (t) { return _actions_task_action__WEBPACK_IMPORTED_MODULE_6__["addSuccess"]({ payload: t }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_task_action__WEBPACK_IMPORTED_MODULE_6__["addFail"]({ payload: error })); }));
            }));
        });
        this.update$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_task_action__WEBPACK_IMPORTED_MODULE_6__["update"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) {
                return _this.service$.update(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (task) { return _actions_task_action__WEBPACK_IMPORTED_MODULE_6__["updateSuccess"]({ payload: task }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_task_action__WEBPACK_IMPORTED_MODULE_6__["updateFail"]({ payload: error })); }));
            }));
        });
        this.delTask$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_task_action__WEBPACK_IMPORTED_MODULE_6__["deleteAction"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) {
                return _this.service$.delete(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (task) { return _actions_task_action__WEBPACK_IMPORTED_MODULE_6__["deleteSuccess"]({ payload: task }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_task_action__WEBPACK_IMPORTED_MODULE_6__["deleteFail"]({ payload: error })); }));
            }));
        });
        this.complete$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_task_action__WEBPACK_IMPORTED_MODULE_6__["complete"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) {
                return _this.service$.complete(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (task) { return _actions_task_action__WEBPACK_IMPORTED_MODULE_6__["completeSuccess"]({ payload: task }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_task_action__WEBPACK_IMPORTED_MODULE_6__["completeFail"]({ payload: error })); }));
            }));
        });
        this.move$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_task_action__WEBPACK_IMPORTED_MODULE_6__["MOVE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (_a) {
                var taskId = _a.taskId, taskListId = _a.taskListId;
                return _this.service$.move(taskId, taskListId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (task) { return _actions_task_action__WEBPACK_IMPORTED_MODULE_6__["moveSuccess"]({ payload: task }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_task_action__WEBPACK_IMPORTED_MODULE_6__["moveFail"]({ payload: error })); }));
            }));
        });
        this.moveALL$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_task_action__WEBPACK_IMPORTED_MODULE_6__["MOVE_ALL"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (_a) {
                var _b = _a.payload, srcListId = _b.srcListId, targetListId = _b.targetListId;
                return _this.service$.moveAll(srcListId, targetListId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (tasks) { return _actions_task_action__WEBPACK_IMPORTED_MODULE_6__["moveAllSuccess"]({ payload: tasks }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_task_action__WEBPACK_IMPORTED_MODULE_6__["moveAllFail"]({ payload: error })); }));
            }));
        });
    }
    TaskEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _services_task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"] }
    ]; };
    TaskEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], TaskEffects);
    return TaskEffects;
}());



/***/ }),

/***/ "./src/app/effects/user.effects.ts":
/*!*****************************************!*\
  !*** ./src/app/effects/user.effects.ts ***!
  \*****************************************/
/*! exports provided: UserEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserEffects", function() { return UserEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions_user_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/user.action */ "./src/app/actions/user.action.ts");
/* harmony import */ var _services_user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/user.service */ "./src/app/services/user.service.ts");







var UserEffects = /** @class */ (function () {
    function UserEffects(actions$, service$) {
        var _this = this;
        this.actions$ = actions$;
        this.service$ = service$;
        this.loadUsers$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_5__["load"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) {
                return _this.service$.getUsersByProject(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (users) { return _actions_user_action__WEBPACK_IMPORTED_MODULE_5__["loadSuccess"]({ payload: users }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_5__["loadFail"]({ payload: error })); }));
            }));
        });
        this.addUserProjectRef$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_5__["ADD"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (_a) {
                var _b = _a.payload, user = _b.user, projectId = _b.projectId;
                return _this.service$.addProjectRef(user, projectId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) { return _actions_user_action__WEBPACK_IMPORTED_MODULE_5__["addSuccess"]({ payload: user }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_5__["addFail"]({ payload: error })); }));
            }));
        });
        this.updateUserProjectRef$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_5__["update"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) {
                return _this.service$.batchUpdateProjectRef(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (users) { return _actions_user_action__WEBPACK_IMPORTED_MODULE_5__["updateSuccess"]({ payload: users }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_5__["updateFail"]({ payload: error })); }));
            }));
        });
        this.delUserProjectRef$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_5__["DELETE"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (_a) {
                var _b = _a.payload, user = _b.user, projectId = _b.projectId;
                return _this.service$.removeProjectRef(user, projectId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) { return _actions_user_action__WEBPACK_IMPORTED_MODULE_5__["deleteSuccess"]({ payload: user }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_5__["deleteFail"]({ payload: error })); }));
            }));
        });
        this.search$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () {
            return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_5__["search"]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (action) {
                return _this.service$.searchUsers(action.payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (users) { return _actions_user_action__WEBPACK_IMPORTED_MODULE_5__["searchSuccess"]({ payload: users }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (error) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_5__["searchFail"]({ payload: error })); }));
            }));
        });
    }
    UserEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: _services_user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"] }
    ]; };
    UserEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], UserEffects);
    return UserEffects;
}());



/***/ }),

/***/ "./src/app/login/login-routing.module.ts":
/*!***********************************************!*\
  !*** ./src/app/login/login-routing.module.ts ***!
  \***********************************************/
/*! exports provided: LoginRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginRoutingModule", function() { return LoginRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./register/register.component */ "./src/app/login/register/register.component.ts");





var routes = [
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'register', component: _register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
];
var LoginRoutingModule = /** @class */ (function () {
    function LoginRoutingModule() {
    }
    LoginRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], LoginRoutingModule);
    return LoginRoutingModule;
}());



/***/ }),

/***/ "./src/app/login/login.module.ts":
/*!***************************************!*\
  !*** ./src/app/login/login.module.ts ***!
  \***************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login-routing.module */ "./src/app/login/login-routing.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login/login.component.ts");
/* harmony import */ var _register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./register/register.component */ "./src/app/login/register/register.component.ts");






var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"]],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _login_routing_module__WEBPACK_IMPORTED_MODULE_3__["LoginRoutingModule"],
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/login/login/login.component.scss":
/*!**************************************************!*\
  !*** ./src/app/login/login/login.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\n  height: 25em;\n  -webkit-box-flex: 0;\n          flex: 0 0 20em;\n}\n\nform {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  width: 100%;\n  height: 100%;\n}\n\n.text-right {\n  margin: 10px;\n  text-align: end;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4vQzpcXFVzZXJzXFx5aW55aVxcRGVza3RvcFxcZXhlcmNpc2VcXGdpdGh1Yl9wcm9qXFxuZy10YXNrbWdyL3NyY1xcYXBwXFxsb2dpblxcbG9naW5cXGxvZ2luLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtVQUFBLGNBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDQ0YiLCJmaWxlIjoic3JjL2FwcC9sb2dpbi9sb2dpbi9sb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jYXJkIHtcclxuICBoZWlnaHQ6IDI1ZW07XHJcbiAgZmxleDogMCAwIDIwZW07XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLnRleHQtcmlnaHQge1xyXG4gIG1hcmdpbjogMTBweDtcclxuICB0ZXh0LWFsaWduOiBlbmQ7XHJcbn0iLCJtYXQtY2FyZCB7XG4gIGhlaWdodDogMjVlbTtcbiAgZmxleDogMCAwIDIwZW07XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLnRleHQtcmlnaHQge1xuICBtYXJnaW46IDEwcHg7XG4gIHRleHQtYWxpZ246IGVuZDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/login/login/login.component.ts":
/*!************************************************!*\
  !*** ./src/app/login/login/login.component.ts ***!
  \************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _actions_quote_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../actions/quote.action */ "./src/app/actions/quote.action.ts");
/* harmony import */ var _actions_auth_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../actions/auth.action */ "./src/app/actions/auth.action.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(fb, store$) {
        this.fb = fb;
        this.store$ = store$;
        // this.quote$ = this.store$.select(state => state.quote.quote); old
        // this.quote$ = this.store$.pipe(select('quote'), select('quote')); old
        this.quote$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_3__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_4__["getQuote"]));
        this.store$.dispatch(_actions_quote_action__WEBPACK_IMPORTED_MODULE_5__["quoteLoad"](null));
    }
    LoginComponent.prototype.ngOnInit = function () {
        // this.form = new FormGroup({
        //   email: new FormControl('yy@163.com', Validators.compose([Validators.required, Validators.email])),
        //   password: new FormControl('', Validators.required)
        // });
        /* 上面初始化可以写成以下形式, 没有new */
        this.form = this.fb.group({
            // email: ['yy@163.com', Validators.compose([Validators.required, Validators.email, this.validate])], //自定义校验器
            email: ['yy@163.com', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email])],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    LoginComponent.prototype.onSubmit = function (_a, ev) {
        var value = _a.value, valid = _a.valid;
        ev.preventDefault();
        // this.form.controls['email'].setValidators(this.validate);
        if (!valid) {
            return;
        }
        this.store$.dispatch(_actions_auth_action__WEBPACK_IMPORTED_MODULE_6__["login"](value));
    };
    LoginComponent.prototype.validate = function (c) {
        if (!c.value) {
            return null; //null合法, 出错时返回对象
        }
        var pattern = /^yy+/;
        if (pattern.test(c.value)) {
            return null;
        }
        return {
            emailNotValid: 'The email must start with yy'
        };
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.scss */ "./src/app/login/login/login.component.scss")]
        })
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/register/register.component.scss":
/*!********************************************************!*\
  !*** ./src/app/login/register/register.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  margin: 15px;\n  display: -webkit-box;\n  display: flex;\n}\n\n.text-right {\n  margin: 10px;\n  text-align: end;\n}\n\n.control-padding {\n  margin-top: 10px;\n  padding-top: 10px;\n}\n\n.action-area {\n  display: -webkit-box;\n  display: flex;\n}\n\nform {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-flex: 0;\n          flex: 0 1 auto;\n}\n\nmat-tab {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-flex: 0;\n          flex: 0 1 auto;\n}\n\n:host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vcmVnaXN0ZXIvQzpcXFVzZXJzXFx5aW55aVxcRGVza3RvcFxcZXhlcmNpc2VcXGdpdGh1Yl9wcm9qXFxuZy10YXNrbWdyL3NyY1xcYXBwXFxsb2dpblxccmVnaXN0ZXJcXHJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9sb2dpbi9yZWdpc3Rlci9yZWdpc3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNDRjs7QURFQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FERUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLG1CQUFBO1VBQUEsY0FBQTtBQ0NGOztBREVBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsbUJBQUE7VUFBQSxjQUFBO0FDQ0Y7O0FERUE7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQge1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4udGV4dC1yaWdodCB7XHJcbiAgbWFyZ2luOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG5cclxuLmNvbnRyb2wtcGFkZGluZ3tcclxuICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOiAxMHB4O1xyXG59XHJcblxyXG4uYWN0aW9uLWFyZWEge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbn1cclxuXHJcbmZvcm0ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBmbGV4OiAwIDEgYXV0bztcclxufVxyXG5cclxubWF0LXRhYiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4OiAwIDEgYXV0bztcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxufVxyXG4iLCIuY2FyZCB7XG4gIG1hcmdpbjogMTVweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLnRleHQtcmlnaHQge1xuICBtYXJnaW46IDEwcHg7XG4gIHRleHQtYWxpZ246IGVuZDtcbn1cblxuLmNvbnRyb2wtcGFkZGluZyB7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHBhZGRpbmctdG9wOiAxMHB4O1xufVxuXG4uYWN0aW9uLWFyZWEge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuXG5mb3JtIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleDogMCAxIGF1dG87XG59XG5cbm1hdC10YWIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4OiAwIDEgYXV0bztcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/login/register/register.component.ts":
/*!******************************************************!*\
  !*** ./src/app/login/register/register.component.ts ***!
  \******************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_auth_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/auth.action */ "./src/app/actions/auth.action.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils_date_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/date.util */ "./src/app/utils/date.util.ts");
/* harmony import */ var _utils_identity_util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../utils/identity.util */ "./src/app/utils/identity.util.ts");








var RegisterComponent = /** @class */ (function () {
    function RegisterComponent(fb, store$) {
        this.fb = fb;
        this.store$ = store$;
        this.avatarName = 'avatars';
    }
    RegisterComponent.prototype.ngOnInit = function () {
        var _this = this;
        var img = this.avatarName + ":svg-" + Math.floor(Math.random() * 16).toFixed(0);
        var nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
        this.items = nums.map(function (d) { return "avatars:svg-" + d; });
        this.form = this.fb.group({
            email: [],
            name: [],
            password: [],
            repeat: [],
            avatar: [img],
            dateOfBirth: ['1990-01-01'],
            identity: [],
            address: []
        });
        var id$ = this.form.get("identity").valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["filter"])(function (_) {
            return _this.form.get('identity').valid;
        }));
        this.sub = id$.subscribe(function (id) {
            var info = Object(_utils_identity_util__WEBPACK_IMPORTED_MODULE_7__["extractInfo"])(id.identityNo);
            if (Object(_utils_identity_util__WEBPACK_IMPORTED_MODULE_7__["isValidAddr"])(info.addrCode)) {
                var addr = Object(_utils_identity_util__WEBPACK_IMPORTED_MODULE_7__["getAddrByCode"])(info.addrCode);
                _this.form.get("address").patchValue(addr);
            }
            if (Object(_utils_date_util__WEBPACK_IMPORTED_MODULE_6__["isValidDate"])(info.dateOfBirth)) {
                _this.form.get('dateOfBirth').patchValue(info.dateOfBirth);
            }
        });
    };
    RegisterComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    RegisterComponent.prototype.onSubmit = function (_a, ev) {
        var value = _a.value, valid = _a.valid;
        ev.preventDefault();
        if (!valid) {
            return;
        }
        this.store$.dispatch(_actions_auth_action__WEBPACK_IMPORTED_MODULE_4__["register"](value));
    };
    RegisterComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"] }
    ]; };
    RegisterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-register',
            template: __webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/index.js!./src/app/login/register/register.component.html"),
            styles: [__webpack_require__(/*! ./register.component.scss */ "./src/app/login/register/register.component.scss")]
        })
    ], RegisterComponent);
    return RegisterComponent;
}());



/***/ }),

/***/ "./src/app/reducers/auth.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/reducers/auth.reducer.ts ***!
  \******************************************/
/*! exports provided: initialState, authReducer, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authReducer", function() { return authReducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_auth_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/auth.action */ "./src/app/actions/auth.action.ts");



var initialState = {};
var authReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_auth_action__WEBPACK_IMPORTED_MODULE_2__["loginSuccess"], function (state, payload) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, payload);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_auth_action__WEBPACK_IMPORTED_MODULE_2__["registerSuccess"], function (state, payload) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, payload);
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_auth_action__WEBPACK_IMPORTED_MODULE_2__["loginFail"], _actions_auth_action__WEBPACK_IMPORTED_MODULE_2__["registerFail"], _actions_auth_action__WEBPACK_IMPORTED_MODULE_2__["logout"], function (_) { return initialState; }));
function reducer(state, action) {
    return authReducer(state, action);
}


/***/ }),

/***/ "./src/app/reducers/index.ts":
/*!***********************************!*\
  !*** ./src/app/reducers/index.ts ***!
  \***********************************/
/*! exports provided: getQuoteState, getAuthState, getProjectState, getTaskListState, getTasksState, getUserState, getQuote, getProjects, getTaskLists, getTasks, getUsers, getUserEntities, getTasksWithOwners, getTasksByLists, getProjectUsers, AppStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuoteState", function() { return getQuoteState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAuthState", function() { return getAuthState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjectState", function() { return getProjectState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskListState", function() { return getTaskListState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTasksState", function() { return getTasksState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserState", function() { return getUserState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuote", function() { return getQuote; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjects", function() { return getProjects; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTaskLists", function() { return getTaskLists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTasks", function() { return getTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return getUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserEntities", function() { return getUserEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTasksWithOwners", function() { return getTasksWithOwners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTasksByLists", function() { return getTasksByLists; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProjectUsers", function() { return getProjectUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStoreModule", function() { return AppStoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/router-store */ "./node_modules/@ngrx/router-store/fesm5/router-store.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/fesm5/store-devtools.js");
/* harmony import */ var _quote_reducer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./quote.reducer */ "./src/app/reducers/quote.reducer.ts");
/* harmony import */ var _auth_reducer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./auth.reducer */ "./src/app/reducers/auth.reducer.ts");
/* harmony import */ var _project_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project.reducer */ "./src/app/reducers/project.reducer.ts");
/* harmony import */ var _task_list_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./task-list.reducer */ "./src/app/reducers/task-list.reducer.ts");
/* harmony import */ var _task_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./task.reducer */ "./src/app/reducers/task.reducer.ts");
/* harmony import */ var _user_reducer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./user.reducer */ "./src/app/reducers/user.reducer.ts");











;
var reducers = {
    quote: _quote_reducer__WEBPACK_IMPORTED_MODULE_5__["reducer"],
    auth: _auth_reducer__WEBPACK_IMPORTED_MODULE_6__["reducer"],
    projects: _project_reducer__WEBPACK_IMPORTED_MODULE_7__["reducer"],
    taskList: _task_list_reducer__WEBPACK_IMPORTED_MODULE_8__["reducer"],
    tasks: _task_reducer__WEBPACK_IMPORTED_MODULE_9__["reducer"],
    user: _user_reducer__WEBPACK_IMPORTED_MODULE_10__["reducer"],
};
var initState = {
    auth: _auth_reducer__WEBPACK_IMPORTED_MODULE_6__["initialState"],
    quote: _quote_reducer__WEBPACK_IMPORTED_MODULE_5__["initialState"],
    projects: _project_reducer__WEBPACK_IMPORTED_MODULE_7__["initialState"],
    taskList: _task_list_reducer__WEBPACK_IMPORTED_MODULE_8__["initialState"],
    tasks: _task_reducer__WEBPACK_IMPORTED_MODULE_9__["initialState"],
    user: _auth_reducer__WEBPACK_IMPORTED_MODULE_6__["initialState"],
};
var getQuoteState = function (state) { return state.quote; };
var getAuthState = function (state) { return state.auth; };
var getProjectState = function (state) { return state.projects; };
var getTaskListState = function (state) { return state.taskList; };
var getTasksState = function (state) { return state.tasks; };
var getUserState = function (state) { return state.user; };
var getQuote = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getQuoteState, _quote_reducer__WEBPACK_IMPORTED_MODULE_5__["getQuote"]);
var getProjects = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getProjectState, _project_reducer__WEBPACK_IMPORTED_MODULE_7__["getAll"]);
var getTaskLists = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getTaskListState, _task_list_reducer__WEBPACK_IMPORTED_MODULE_8__["getSelected"]);
var getTasks = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getTasksState, _task_reducer__WEBPACK_IMPORTED_MODULE_9__["getTasks"]);
var getUsers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getUserState, _user_reducer__WEBPACK_IMPORTED_MODULE_10__["getUsers"]);
var getUserEntities = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getUserState, _user_reducer__WEBPACK_IMPORTED_MODULE_10__["getEntities"]);
var getTasksWithOwners = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getTasks, getUserEntities, function (tasks, userEntities) {
    return tasks.map(function (task) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, task, { owner: userEntities[task.ownerId], participants: task.participantIds.map(function (id) { return userEntities[id]; }) });
    });
});
var getTasksByLists = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getTaskLists, getTasksWithOwners, function (lists, tasks) {
    return lists.map(function (list) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, list, { tasks: tasks.filter(function (task) { return task.taskListId === list.id; }) });
    });
});
var getProjectUsers = function (projectId) { return Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createSelector"])(getProjectState, getUserEntities, function (state, entities) {
    return state.entities[projectId].members.map(function (id) { return entities[id]; });
}); };
var AppStoreModule = /** @class */ (function () {
    function AppStoreModule() {
    }
    AppStoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [
                _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["StoreModule"].forRoot(reducers),
                _ngrx_router_store__WEBPACK_IMPORTED_MODULE_3__["StoreRouterConnectingModule"].forRoot(),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_4__["StoreDevtoolsModule"].instrument({}),
            ]
        })
    ], AppStoreModule);
    return AppStoreModule;
}());



/***/ }),

/***/ "./src/app/reducers/project.reducer.ts":
/*!*********************************************!*\
  !*** ./src/app/reducers/project.reducer.ts ***!
  \*********************************************/
/*! exports provided: initialState, reducer, getIds, getEntities, getSelectedId, getAll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIds", function() { return getIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntities", function() { return getEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedId", function() { return getSelectedId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAll", function() { return getAll; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions */ "./src/app/actions/index.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




var initialState = {
    ids: [],
    entities: {},
    selectedId: null
};
var addProject = function (state, action) {
    var _a;
    var project = action.payload;
    if (state.entities[project.id]) {
        return state;
    }
    var newIds = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](state.ids, [project.id]);
    var newEntities = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.entities, (_a = {}, _a[project.id] = project, _a));
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { ids: newIds, entities: newEntities });
};
var updateProject = function (state, action) {
    var _a;
    var project = action.payload;
    var newEntities = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.entities, (_a = {}, _a[project.id] = project, _a));
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { newEntities: newEntities });
};
var delProject = function (state, action) {
    var project = action.payload;
    var newIds = state.ids.filter(function (id) { return id !== project.id; });
    var newEntities = newIds.reduce(function (entities, id) {
        var _a;
        return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, entities, (_a = {}, _a[id] = state.entities[id], _a)));
    }, {});
    return {
        ids: newIds,
        entities: newEntities,
        selectedId: project.id === state.selectedId ? null : state.selectedId
    };
};
var loadProjects = function (state, action) {
    var projects = action.payload;
    var incomingIds = projects.map(function (p) { return p.id; });
    var newIds = lodash__WEBPACK_IMPORTED_MODULE_3__["difference"](incomingIds, state.ids);
    var incomingEntities = lodash__WEBPACK_IMPORTED_MODULE_3__["chain"](projects)
        .keyBy('id')
        .mapValues(function (o) { return o; })
        .value();
    var newEntities = newIds.reduce(function (entities, id) {
        var _a;
        return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, entities, (_a = {}, _a[id] = incomingEntities[id], _a)));
    }, {});
    return {
        ids: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](state.ids, newIds),
        entities: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.entities, newEntities),
        selectedId: null
    };
};
var projectReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["addSuccess"], function (state, action) { return addProject(state, action); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["deleteSuccess"], function (state, action) { return delProject(state, action); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["updateSuccess"], _actions__WEBPACK_IMPORTED_MODULE_2__["inviteSuccess"], function (state, action) { return updateProject(state, action); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["loadSuccess"], function (state, action) { return loadProjects(state, action); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions__WEBPACK_IMPORTED_MODULE_2__["select"], function (state, actions) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { selectedId: actions.payload.id })); }));
function reducer(state, action) {
    return projectReducer(state, action);
}
var getIds = function (state) { return state.ids; };
var getEntities = function (state) { return state.entities; };
var getSelectedId = function (state) { return state.selectedId; };
var getAll = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getIds, getEntities, function (ids, entities) {
    return ids.map(function (id) { return entities[id]; });
});


/***/ }),

/***/ "./src/app/reducers/quote.reducer.ts":
/*!*******************************************!*\
  !*** ./src/app/reducers/quote.reducer.ts ***!
  \*******************************************/
/*! exports provided: initialState, reducer, getQuote */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getQuote", function() { return getQuote; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../actions */ "./src/app/actions/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");


//new

;
var initialState = {
    quote: {
        cn: "满足感在于不断的努力,而不是现有的成就。全心努力定会胜利满满。",
        en: "Satisfaction lies in the effort, not in the attainment. Full efforts is full victory.",
        pic: "assets/img/quote_fallback.jpg"
    }
};
// export function reducer(state = initialState, action: {type: string, payload: any} ): State {
//   switch (action.type) {
//     case quoteAction.QUOTE_SUCCESS: {
//       return {...state, quote: action.payload};
//     }
//     case quoteAction.QUOTE_FAIL:
//     default: {
//       return state;
//     }
//   }
// }
//new
var reducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["quoteLoadSuccess"], function (state, payload) {
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { quote: payload });
}), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["on"])(_actions__WEBPACK_IMPORTED_MODULE_1__["quoteLoad"], _actions__WEBPACK_IMPORTED_MODULE_1__["quoteLoadFail"], function (state) { return state; }));
var getQuote = function (state) { return state.quote; };


/***/ }),

/***/ "./src/app/reducers/task-list.reducer.ts":
/*!***********************************************!*\
  !*** ./src/app/reducers/task-list.reducer.ts ***!
  \***********************************************/
/*! exports provided: initialState, reducer, getIds, getEntities, getSelectedIds, getSelected */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIds", function() { return getIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntities", function() { return getEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelectedIds", function() { return getSelectedIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSelected", function() { return getSelected; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_task_list_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/task-list.action */ "./src/app/actions/task-list.action.ts");
/* harmony import */ var _actions_project_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/project.action */ "./src/app/actions/project.action.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var initialState = {
    ids: [],
    entities: {},
    selectedIds: [],
};
var addTaskList = function (state, action) {
    var _a;
    var taskList = action.payload;
    console.log(taskList);
    if (state.entities[taskList.id]) {
        return state;
    }
    var newIds = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](state.ids, [taskList.id]);
    var newEntities = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.entities, (_a = {}, _a[taskList.id] = taskList, _a));
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { ids: newIds, entities: newEntities });
};
var delTaskList = function (state, action) {
    var taskList = action.payload;
    var newIds = state.ids.filter(function (id) { return id !== taskList.id; });
    var newEntities = newIds.reduce(function (entities, id) {
        var _a;
        return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, entities, (_a = {}, _a[id] = state.entities[id], _a)));
    }, {});
    var newSelectedIds = state.selectedIds.filter(function (id) { return id !== taskList.id; });
    return {
        ids: newIds,
        entities: newEntities,
        selectedIds: newSelectedIds
    };
};
var loadTaskList = function (state, action) {
    var taskLists = action.payload;
    if (taskLists === null) {
        return state;
    }
    var newTaskLists = taskLists.filter(function (taskList) { return !state.entities[taskList.id]; });
    if (newTaskLists.length === 0) {
        return {
            ids: [],
            entities: {},
            selectedIds: state.selectedIds
        };
    }
    var newIds = newTaskLists.map(function (taskList) { return taskList.id; });
    var incomingEntities = lodash__WEBPACK_IMPORTED_MODULE_4__["chain"](taskLists)
        .keyBy('id')
        .mapValues(function (o) { return o; })
        .value();
    var newEntities = newIds.reduce(function (entities, id) {
        var _a;
        return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, entities, (_a = {}, _a[id] = incomingEntities[id], _a)));
    }, {});
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { ids: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](state.ids, newIds), entities: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.entities, newEntities) });
};
var updateTaskList = function (state, action) {
    var _a;
    var taskList = action.payload;
    var newEntities = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.entities, (_a = {}, _a[taskList.id] = taskList, _a));
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { entities: newEntities });
};
var swapTaskLists = function (state, action) {
    var taskLists = action.payload;
    var updatedEntities = lodash__WEBPACK_IMPORTED_MODULE_4__["chain"](taskLists)
        .keyBy('id')
        .mapValues(function (o) { return o; })
        .values();
    var newEntities = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.entities, updatedEntities);
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { entities: newEntities });
};
var selectPrj = function (state, action) {
    var selected = action.payload;
    var selectedIds = state.ids.filter(function (id) { return state.entities[id].projectId === selected.id; });
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { selectedIds: selectedIds });
};
var delListsByPrj = function (state, action) {
    var project = action.payload;
    var taskListIds = project.taskLists;
    var remainingIds = lodash__WEBPACK_IMPORTED_MODULE_4__["difference"](state.ids, taskListIds);
    var remainingEntities = remainingIds.reduce(function (entities, id) {
        var _a;
        return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, entities, (_a = {}, _a[id] = state.entities[id], _a)));
    }, {});
    return {
        ids: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](remainingIds),
        entities: remainingEntities,
        selectedIds: []
    };
};
var taskListReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_task_list_action__WEBPACK_IMPORTED_MODULE_2__["addSuccess"], function (state, action) { return addTaskList(state, action); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_task_list_action__WEBPACK_IMPORTED_MODULE_2__["deleteSuccess"], function (state, action) { return delTaskList(state, action); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_task_list_action__WEBPACK_IMPORTED_MODULE_2__["loadSuccess"], function (state, action) { return loadTaskList(state, action); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_task_list_action__WEBPACK_IMPORTED_MODULE_2__["updateSuccess"], function (state, action) { return updateTaskList(state, action); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_task_list_action__WEBPACK_IMPORTED_MODULE_2__["swapSuccess"], function (state, action) { return swapTaskLists(state, action); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_project_action__WEBPACK_IMPORTED_MODULE_3__["select"], function (state, action) { return selectPrj(state, action); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_project_action__WEBPACK_IMPORTED_MODULE_3__["deleteSuccess"], function (state, action) { return delListsByPrj(state, action); }));
function reducer(state, action) {
    return taskListReducer(state, action);
}
var getIds = function (state) { return state.ids; };
var getEntities = function (state) { return state.entities; };
var getSelectedIds = function (state) { return state.selectedIds; };
var getSelected = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getIds, getEntities, function (ids, entities) {
    return ids.map(function (id) { return entities[id]; });
});


/***/ }),

/***/ "./src/app/reducers/task.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/reducers/task.reducer.ts ***!
  \******************************************/
/*! exports provided: initialState, getIds, getEntities, getTasks, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIds", function() { return getIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntities", function() { return getEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getTasks", function() { return getTasks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_task_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/task.action */ "./src/app/actions/task.action.ts");
/* harmony import */ var _actions_project_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../actions/project.action */ "./src/app/actions/project.action.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);





var initialState = {
    ids: [],
    entities: {},
};
var addTask = function (state, action) {
    var _a;
    var task = action.payload;
    if (state.entities[task.id]) {
        return;
    }
    var newIds = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](state.ids, [task.id]);
    var newEntities = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.entities, (_a = {}, _a[task.id] = task, _a));
    return {
        ids: newIds,
        entities: newEntities
    };
};
var delTask = function (state, action) {
    var task = action.payload;
    var newIds = state.ids.filter(function (id) { return id !== task.id; });
    var newEntities = newIds.reduce(function (entities, id) {
        var _a;
        return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, entities, (_a = {}, _a[id] = state.entities[id], _a)));
    }, {});
    return {
        ids: newIds,
        entities: newEntities
    };
};
var updateTask = function (state, action) {
    var _a;
    var task = action.payload;
    var newEntities = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.entities, (_a = {}, _a[task.id] = task, _a));
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { entities: newEntities });
};
var loadTask = function (state, action) {
    var tasks = action.payload;
    var newTasks = tasks.filter(function (task) { return !state.entities[task.id]; });
    var newIds = newTasks.map(function (t) { return t.id; });
    var incomingEntities = lodash__WEBPACK_IMPORTED_MODULE_4__["chain"](tasks)
        .keyBy('id')
        .mapValues(function (o) { return o; })
        .value();
    var newEntities = newIds.reduce(function (entities, id) {
        var _a;
        return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, entities, (_a = {}, _a[id] = incomingEntities[id], _a)));
    }, {});
    return {
        ids: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](state.ids, newIds),
        entities: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.entities, newEntities)
    };
};
var moveAllTasks = function (state, action) {
    var tasks = action.payload;
    var updatedEntities = tasks.reduce(function (entities, task) {
        var _a;
        return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, entities, (_a = {}, _a[task.id] = task, _a)));
    }, {});
    var newEntities = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.entities, updatedEntities);
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { entities: newEntities });
};
var delByPrj = function (state, action) {
    var project = action.payload;
    var taskListIds = project.taskLists;
    var remainingIds = state.ids.filter(function (id) { return taskListIds.indexOf(state.entities[id].taskListId) === -1; });
    var remainingEntities = remainingIds.reduce(function (entities, id) {
        var _a;
        return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, entities, (_a = {}, _a[id] = state.entities[id], _a)));
    }, {});
    return {
        ids: remainingIds,
        entities: remainingEntities
    };
};
var taskReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_task_action__WEBPACK_IMPORTED_MODULE_2__["addSuccess"], function (state, action) { return addTask(state, action); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_task_action__WEBPACK_IMPORTED_MODULE_2__["deleteSuccess"], function (state, action) { return delTask(state, action); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_task_action__WEBPACK_IMPORTED_MODULE_2__["updateSuccess"], _actions_task_action__WEBPACK_IMPORTED_MODULE_2__["moveSuccess"], _actions_task_action__WEBPACK_IMPORTED_MODULE_2__["completeSuccess"], function (state, action) { return updateTask(state, action); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_task_action__WEBPACK_IMPORTED_MODULE_2__["loadSuccess"], function (state, action) { return loadTask(state, action); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_task_action__WEBPACK_IMPORTED_MODULE_2__["moveAllSuccess"], function (state, action) { return moveAllTasks(state, action); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_project_action__WEBPACK_IMPORTED_MODULE_3__["deleteSuccess"], function (state, action) { return delByPrj(state, action); }));
var getIds = function (state) { return state.ids; };
var getEntities = function (state) { return state.entities; };
var getTasks = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getIds, getEntities, function (ids, entities) {
    return ids.map(function (id) { return entities[id]; });
});
function reducer(state, action) {
    return taskReducer(state, action);
}


/***/ }),

/***/ "./src/app/reducers/user.reducer.ts":
/*!******************************************!*\
  !*** ./src/app/reducers/user.reducer.ts ***!
  \******************************************/
/*! exports provided: initialState, getIds, getEntities, getUsers, reducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialState", function() { return initialState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getIds", function() { return getIds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getEntities", function() { return getEntities; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUsers", function() { return getUsers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reducer", function() { return reducer; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _actions_user_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../actions/user.action */ "./src/app/actions/user.action.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);




;
var initialState = {
    ids: [],
    entities: {},
};
var addUser = function (state, action) {
    var _a;
    var user = action.payload;
    var newIds = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](state.ids, [user.id]);
    var newEntities = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.entities, (_a = {}, _a[user.id] = user, _a));
    return state.entities[user.id] ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { entities: newEntities }) : tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { ids: newIds, entities: newEntities });
};
var updateUser = function (state, action) {
    var users = action.payload;
    var incomingEntities = lodash__WEBPACK_IMPORTED_MODULE_3__["chain"](users)
        .keyBy('id')
        .mapValues(function (o) { return o; })
        .value();
    var newEntities = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.entities, incomingEntities);
    return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { entities: newEntities });
};
var delUser = function (state, action) {
    var _a;
    var user = action.payload;
    var newEntities = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.entities, (_a = {}, _a[user.id] = user, _a));
    return state.entities[user.id] ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state, { entities: newEntities }) : state;
};
var loadUsers = function (state, action) {
    var users = action.payload;
    if (users === null) {
        return state;
    }
    var newUsers = users.filter(function (user) { return !state.entities[user.id]; });
    var newIds = newUsers.map(function (user) { return user.id; });
    if (newIds.length === 0) {
        return state;
    }
    var incomingEntities = lodash__WEBPACK_IMPORTED_MODULE_3__["chain"](users)
        .keyBy('id')
        .mapValues(function (o) { return o; })
        .value();
    var newEntities = newIds.reduce(function (entities, id) {
        var _a;
        return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, entities, (_a = {}, _a[id] = incomingEntities[id], _a)));
    }, {});
    return {
        ids: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](state.ids, newIds),
        entities: tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, state.entities, newEntities)
    };
};
var userReducer = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createReducer"])(initialState, Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_2__["addSuccess"], function (state, action) { return addUser(state, action); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_2__["updateSuccess"], function (state, action) { return updateUser(state, action); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_2__["deleteSuccess"], function (state, action) { return delUser(state, action); }), Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["on"])(_actions_user_action__WEBPACK_IMPORTED_MODULE_2__["loadSuccess"], _actions_user_action__WEBPACK_IMPORTED_MODULE_2__["searchSuccess"], function (state, action) { return loadUsers(state, action); }));
var getIds = function (state) { return state.ids; };
var getEntities = function (state) { return state.entities; };
var getUsers = Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["createSelector"])(getIds, getEntities, function (ids, entities) {
    return ids.map(function (id) { return entities[id]; });
});
function reducer(state, action) {
    return userReducer(state, action);
}


/***/ }),

/***/ "./src/app/services/auth-guard.service.ts":
/*!************************************************!*\
  !*** ./src/app/services/auth-guard.service.ts ***!
  \************************************************/
/*! exports provided: AuthGuardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardService", function() { return AuthGuardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../reducers */ "./src/app/reducers/index.ts");






var AuthGuardService = /** @class */ (function () {
    function AuthGuardService(store$, router) {
        this.store$ = store$;
        this.router = router;
    }
    AuthGuardService.prototype.canActivate = function (route, state) {
        var _this = this;
        return this.store$.select(_reducers__WEBPACK_IMPORTED_MODULE_5__["getAuthState"]).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (auth) {
            var result = auth.token !== null && auth.token !== undefined;
            if (!result) {
                _this.router.navigateByUrl('/login');
            }
            return result;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["defaultIfEmpty"])(false));
    };
    AuthGuardService.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AuthGuardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], AuthGuardService);
    return AuthGuardService;
}());



/***/ }),

/***/ "./src/app/services/auth.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/auth.service.ts ***!
  \******************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");




var AuthService = /** @class */ (function () {
    function AuthService(http, config) {
        this.http = http;
        this.config = config;
        this.domain = 'users';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
        this.token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9' +
            '.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9' +
            '.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ';
    }
    // 注册
    AuthService.prototype.register = function (user) {
        var _this = this;
        user.id = null;
        var uri = this.config.uri + "/" + this.domain;
        return this.http
            .get(uri, { params: { 'email': user.email } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (res) {
            if (Object.keys(res).length > 0) {
                throw 'user existed';
            }
            return _this.http
                .post(uri, JSON.stringify(user), { headers: _this.headers })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (r) { return ({ token: _this.token, user: r }); }));
        }));
    };
    // 登录
    AuthService.prototype.login = function (username, password) {
        var _this = this;
        var uri = this.config.uri + "/" + this.domain;
        return this.http
            .get(uri, { params: { 'email': username, 'password': password } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            if (Object.keys(res).length === 0) {
                throw 'username or password not match';
            }
            return {
                token: _this.token,
                user: res[0]
            };
        }));
    };
    AuthService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['BASE_CONFIG',] }] }
    ]; };
    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BASE_CONFIG'))
    ], AuthService);
    return AuthService;
}());



/***/ }),

/***/ "./src/app/services/project.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/project.service.ts ***!
  \*********************************************/
/*! exports provided: ProjectService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectService", function() { return ProjectService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






var ProjectService = /** @class */ (function () {
    function ProjectService(http, config) {
        this.http = http;
        this.config = config;
        this.domain = 'projects';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
    }
    // POST
    ProjectService.prototype.add = function (project) {
        project.id = null;
        var uri = this.config.uri + "/" + this.domain;
        return this.http
            .post(uri, JSON.stringify(project), { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    // PUT
    ProjectService.prototype.update = function (project) {
        var uri = this.config.uri + "/" + this.domain + "/" + project.id;
        var toUpdate = {
            name: project.name,
            desc: project.desc,
            coverImg: project.coverImg
        };
        return this.http
            .patch(uri, JSON.stringify(toUpdate), { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    // DELETE
    ProjectService.prototype.delete = function (project) {
        var _this = this;
        var delTasks$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(project.taskLists ? project.taskLists : []).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (listId) { return _this.http.delete(_this.config.uri + "/tasklists/" + listId); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["count"])());
        return delTasks$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (_) { return _this.http.delete(_this.config.uri + "/" + _this.domain + "/" + project.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])(project));
    };
    // GET
    ProjectService.prototype.get = function (userId) {
        var uri = this.config.uri + "/" + this.domain;
        return this.http
            .get(uri, { params: { 'members_like': userId } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    ProjectService.prototype.invite = function (projectId, users) {
        var _this = this;
        var uri = this.config.uri + "/" + this.domain + "/" + projectId;
        return this.http
            .get(uri).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (project) {
            var existingMembers = project.members;
            var invitedIds = users.map(function (user) { return user.id; });
            var newIds = lodash__WEBPACK_IMPORTED_MODULE_5__["union"](existingMembers, invitedIds);
            return _this.http
                .patch(uri, JSON.stringify({ members: newIds }), { headers: _this.headers })
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
        }));
    };
    ProjectService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['BASE_CONFIG',] }] }
    ]; };
    ProjectService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BASE_CONFIG'))
    ], ProjectService);
    return ProjectService;
}());



/***/ }),

/***/ "./src/app/services/quote.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/quote.service.ts ***!
  \*******************************************/
/*! exports provided: QuoteService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuoteService", function() { return QuoteService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");




var QuoteService = /** @class */ (function () {
    function QuoteService(http, config) {
        this.http = http;
        this.config = config;
    }
    QuoteService.prototype.getQuote = function () {
        var uri = this.config.uri + "/quotes/" + Math.floor(Math.random() * 10);
        return this.http.get(uri).debug('quote :').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) { return res; }));
    };
    QuoteService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['BASE_CONFIG',] }] }
    ]; };
    QuoteService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BASE_CONFIG'))
    ], QuoteService);
    return QuoteService;
}());



/***/ }),

/***/ "./src/app/services/services.module.ts":
/*!*********************************************!*\
  !*** ./src/app/services/services.module.ts ***!
  \*********************************************/
/*! exports provided: ServicesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesModule", function() { return ServicesModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _quote_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./quote.service */ "./src/app/services/quote.service.ts");
/* harmony import */ var _project_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project.service */ "./src/app/services/project.service.ts");
/* harmony import */ var _task_list_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-list.service */ "./src/app/services/task-list.service.ts");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task.service */ "./src/app/services/task.service.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user.service */ "./src/app/services/user.service.ts");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./auth.service */ "./src/app/services/auth.service.ts");
/* harmony import */ var _auth_guard_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./auth-guard.service */ "./src/app/services/auth-guard.service.ts");









var ServicesModule = /** @class */ (function () {
    function ServicesModule() {
    }
    ServicesModule_1 = ServicesModule;
    ServicesModule.forRoot = function () {
        return {
            ngModule: ServicesModule_1,
            providers: [
                _quote_service__WEBPACK_IMPORTED_MODULE_2__["QuoteService"],
                _project_service__WEBPACK_IMPORTED_MODULE_3__["ProjectService"],
                _task_list_service__WEBPACK_IMPORTED_MODULE_4__["TaskListService"],
                _task_service__WEBPACK_IMPORTED_MODULE_5__["TaskService"],
                _user_service__WEBPACK_IMPORTED_MODULE_6__["UserService"],
                _auth_service__WEBPACK_IMPORTED_MODULE_7__["AuthService"],
                _auth_guard_service__WEBPACK_IMPORTED_MODULE_8__["AuthGuardService"],
            ]
        };
    };
    var ServicesModule_1;
    ServicesModule = ServicesModule_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])()
    ], ServicesModule);
    return ServicesModule;
}());



/***/ }),

/***/ "./src/app/services/task-list.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/task-list.service.ts ***!
  \***********************************************/
/*! exports provided: TaskListService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListService", function() { return TaskListService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var TaskListService = /** @class */ (function () {
    function TaskListService(http, config) {
        this.http = http;
        this.config = config;
        this.domain = 'taskLists';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
    }
    // POST
    TaskListService.prototype.add = function (tasklist) {
        var uri = this.config.uri + "/" + this.domain;
        return this.http
            .post(uri, JSON.stringify(tasklist), { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    // PUT
    TaskListService.prototype.update = function (tasklist) {
        var uri = this.config.uri + "/" + this.domain + "/" + tasklist.id;
        var toUpdate = {
            name: tasklist.name
        };
        return this.http
            .patch(uri, JSON.stringify(toUpdate), { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    // DELETE
    TaskListService.prototype.delete = function (tasklist) {
        var uri = this.config.uri + "/" + this.domain + "/" + tasklist.id;
        return this.http.delete(uri).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])(tasklist));
    };
    // GET
    TaskListService.prototype.get = function (projectId) {
        var uri = this.config.uri + "/" + this.domain;
        return this.http
            .get(uri, { params: { 'projectId': projectId } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    // PATCH
    TaskListService.prototype.swapOrder = function (src, target) {
        var dragUri = this.config.uri + "/" + this.domain + "/" + src.id;
        var dropUri = this.config.uri + "/" + this.domain + "/" + target.id;
        var drag$ = this.http
            .patch(dragUri, JSON.stringify({ order: target.order }), { headers: this.headers });
        var drop$ = this.http
            .patch(dropUri, JSON.stringify({ order: src.order }), { headers: this.headers });
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["concat"])(drag$, drop$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["reduce"])(function (arrs, list) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](arrs, [list]); }, []));
    };
    TaskListService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['BASE_CONFIG',] }] }
    ]; };
    TaskListService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BASE_CONFIG'))
    ], TaskListService);
    return TaskListService;
}());



/***/ }),

/***/ "./src/app/services/task.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/task.service.ts ***!
  \******************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var TaskService = /** @class */ (function () {
    function TaskService(http, config) {
        this.http = http;
        this.config = config;
        this.domain = 'tasks';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
    }
    // POST
    TaskService.prototype.add = function (task) {
        task.id = null;
        var uri = this.config.uri + "/" + this.domain;
        return this.http
            .post(uri, JSON.stringify(task), { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    // PUT
    TaskService.prototype.update = function (task) {
        var uri = this.config.uri + "/" + this.domain + "/" + task.id;
        var toUpdate = {
            desc: task.desc,
            priority: task.priority,
            dueDate: task.dueDate,
            reminder: task.reminder,
            ownerId: task.ownerId,
            participantIds: task.participantIds,
            remark: task.remark
        };
        return this.http
            .patch(uri, JSON.stringify(toUpdate), { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    // DELETE
    TaskService.prototype.delete = function (task) {
        var uri = this.config.uri + "/" + this.domain + "/" + task.id;
        return this.http.delete(uri).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])(task));
    };
    // GET
    TaskService.prototype.get = function (taskListId) {
        var uri = this.config.uri + "/" + this.domain;
        return this.http
            .get(uri, { params: { 'taskListId': taskListId } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    TaskService.prototype.getByLists = function (lists) {
        var _this = this;
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(lists).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (list) { return _this.get(list.id); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["reduce"])(function (tasks, t) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](tasks, t); }, []));
    };
    TaskService.prototype.complete = function (task) {
        var uri = this.config.uri + "/" + this.domain + "/" + task.id;
        return this.http
            .patch(uri, JSON.stringify({ complete: !task.completed }), { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    TaskService.prototype.move = function (taskId, taskListId) {
        var uri = this.config.uri + "/" + this.domain + "/" + taskId;
        return this.http
            .patch(uri, JSON.stringify({ taskListId: taskListId }), { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    TaskService.prototype.moveAll = function (srcListId, targetListId) {
        var _this = this;
        return this.get(srcListId).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (tasks) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(tasks); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (task) { return _this.move(task.id, targetListId); }), 
        // reduce((arr:any, x) => arr.concat(x), [])
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["reduce"])(function (arr, x) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](arr, [x]); }, []));
    };
    TaskService.prototype.getUserTasks = function (userId) {
        var uri = this.config.uri + "/" + this.domain;
        return this.http.get(uri, { params: { ownerId: userId } }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    TaskService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['BASE_CONFIG',] }] }
    ]; };
    TaskService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BASE_CONFIG'))
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/services/user.service.ts":
/*!******************************************!*\
  !*** ./src/app/services/user.service.ts ***!
  \******************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");





var UserService = /** @class */ (function () {
    function UserService(http, config) {
        this.http = http;
        this.config = config;
        this.domain = 'users';
        this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            'Content-Type': 'application/json'
        });
    }
    UserService.prototype.searchUsers = function (filter) {
        var uri = this.config.uri + "/" + this.domain;
        return this.http
            .get(uri, { params: { 'email_like': filter } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    UserService.prototype.getUsersByProject = function (projectId) {
        var uri = this.config.uri + "/" + this.domain;
        return this.http
            .get(uri, { params: { 'projectId': projectId } })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    UserService.prototype.addProjectRef = function (user, projectId) {
        var uri = this.config.uri + "/" + this.domain + "/" + user.id;
        var projectIds = user.projectIds ? user.projectIds : [];
        if (projectIds.indexOf(projectId) > -1) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(user);
        }
        return this.http
            .patch(uri, JSON.stringify({ projectIds: tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](projectIds, [projectId]) }), { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    UserService.prototype.removeProjectRef = function (user, projectId) {
        var uri = this.config.uri + "/" + this.domain + "/" + user.id;
        var projectIds = user.projectIds ? user.projectIds : [];
        var index = projectIds.indexOf(projectId);
        if (index === -1) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(user);
        }
        var toUpdate = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](projectIds.slice(0, index), projectIds.slice(index + 1));
        return this.http
            .patch(uri, JSON.stringify({ projectIds: toUpdate }), { headers: this.headers })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
    };
    //批量增加多个成员
    UserService.prototype.batchUpdateProjectRef = function (project) {
        var _this = this;
        var projectId = project.id;
        var memberIds = project.members ? project.members : [];
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["from"])(memberIds).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (id) {
            var uri = _this.config.uri + "/" + _this.domain + "/" + id;
            return _this.http.get(uri).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (res) { return res; }));
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])(function (user) { return user.projectIds.indexOf(projectId) !== -1; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (u) { return _this.addProjectRef(u, projectId); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["reduce"])(function (arr, curr) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](arr, [curr]); }, []));
    };
    UserService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: ['BASE_CONFIG',] }] }
    ]; };
    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])('BASE_CONFIG'))
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/app/shared/age-input/age-input.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/shared/age-input/age-input.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".age-num {\n  width: 50px;\n}\n\n.age-input {\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: nowrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2FnZS1pbnB1dC9DOlxcVXNlcnNcXHlpbnlpXFxEZXNrdG9wXFxleGVyY2lzZVxcZ2l0aHViX3Byb2pcXG5nLXRhc2ttZ3Ivc3JjXFxhcHBcXHNoYXJlZFxcYWdlLWlucHV0XFxhZ2UtaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9hZ2UtaW5wdXQvYWdlLWlucHV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsV0FBQTtBQ0NGOztBRENBO0VBQ0Usb0JBQUE7RUFBQSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSwyQkFBQTtVQUFBLHFCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvYWdlLWlucHV0L2FnZS1pbnB1dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZ2UtbnVte1xyXG4gIHdpZHRoOiA1MHB4O1xyXG59XHJcbi5hZ2UtaW5wdXR7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxufSIsIi5hZ2UtbnVtIHtcbiAgd2lkdGg6IDUwcHg7XG59XG5cbi5hZ2UtaW5wdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/age-input/age-input.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/age-input/age-input.component.ts ***!
  \*********************************************************/
/*! exports provided: AgeUnit, AgeInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgeUnit", function() { return AgeUnit; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AgeInputComponent", function() { return AgeInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_date_util__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/date.util */ "./src/app/utils/date.util.ts");







var AgeUnit;
(function (AgeUnit) {
    AgeUnit[AgeUnit["Year"] = 0] = "Year";
    AgeUnit[AgeUnit["Month"] = 1] = "Month";
    AgeUnit[AgeUnit["Day"] = 2] = "Day";
})(AgeUnit || (AgeUnit = {}));
var AgeInputComponent = /** @class */ (function () {
    function AgeInputComponent(fb) {
        this.fb = fb;
        this.daysTop = 90;
        this.daysBottom = 0;
        this.monthsTop = 24;
        this.monthsBottom = 1;
        this.yearsTop = 150;
        this.yearsBottom = 1;
        this.format = 'YYYY-MM-DD';
        this.debounceTime = 300;
        this.ageUnits = [
            { value: AgeUnit.Year, label: '岁' },
            { value: AgeUnit.Month, label: '月' },
            { value: AgeUnit.Day, label: '天' }
        ];
        this.propagateChange = function (_) { };
    }
    AgeInputComponent_1 = AgeInputComponent;
    AgeInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.fb.group({
            birthday: ['', this.validateDate],
            age: this.fb.group({
                ageNum: [],
                ageUnit: [AgeUnit.Year]
            }, { validator: this.validateAge('ageNum', 'ageUnit') })
        });
        var birthday = this.form.get('birthday');
        var ageNum = this.form.get('age').get('ageNum');
        var ageUnit = this.form.get('age').get('ageUnit');
        var birthday$ = birthday.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (d) {
            return { date: d, from: 'birthday' };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(this.debounceTime), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_) { return birthday.valid; }));
        var ageNum$ = ageNum.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(ageNum.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(this.debounceTime), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        var ageUnit$ = ageUnit.valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(ageUnit.value), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(this.debounceTime), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])());
        var age$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(ageNum$, ageUnit$, function (_n, _u) {
            return _this.toDate({ age: _n, unit: _u });
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (d) {
            return { date: d, from: 'age' };
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_) { return _this.form.get('age').valid; }));
        var merge$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["merge"])(birthday$, age$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (_) { return _this.form.valid; }));
        this.sub = merge$.subscribe(function (d) {
            var age = _this.toAge(d.date);
            if (d.from === 'birthday') {
                if (age.age !== ageNum.value) {
                    ageNum.patchValue(age.age, { emitEvent: false });
                }
                if (age.unit !== ageUnit.value) {
                    ageUnit.patchValue(age.unit, { emitEvent: false });
                }
                _this.propagateChange(d.date);
            }
            else {
                var ageToCompare = _this.toAge(birthday.value);
                if (age.age !== ageToCompare.age || age.unit !== ageToCompare.unit) {
                    birthday.patchValue(d.date, { emitEvent: false });
                    _this.propagateChange(d.date);
                }
            }
        });
    };
    AgeInputComponent.prototype.writeValue = function (obj) {
        if (obj) {
            var date = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(obj, this.format);
            this.form.get('birthday').patchValue(date);
            var age = this.toAge(date);
            this.form.get('age').get('ageNum').patchValue(age.age);
            this.form.get('age').get('ageUnit').patchValue(age.unit);
        }
    };
    AgeInputComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    AgeInputComponent.prototype.registerOnTouched = function (fn) { };
    AgeInputComponent.prototype.toAge = function (dateStr) {
        var date = Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["parse"])(dateStr);
        var now = Date.now();
        return Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["isBefore"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["subDays"])(now, this.daysTop), date) ?
            { age: Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["differenceInDays"])(now, date), unit: AgeUnit.Day } :
            Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["isBefore"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["subMonths"])(now, this.monthsTop), date) ?
                { age: Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["differenceInMonths"])(now, date), unit: AgeUnit.Month } :
                {
                    age: Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["differenceInYears"])(now, date),
                    unit: AgeUnit.Year
                };
    };
    AgeInputComponent.prototype.toDate = function (age) {
        var now = Date.now();
        switch (age.unit) {
            case AgeUnit.Year:
                return Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["subYears"])(now, age.age), this.format);
            case AgeUnit.Month:
                return Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["subMonths"])(now, age.age), this.format);
            case AgeUnit.Day:
                return Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["format"])(Object(date_fns__WEBPACK_IMPORTED_MODULE_5__["subDays"])(now, age.age), this.format);
            default:
                return null;
        }
    };
    AgeInputComponent.prototype.validate = function (c) {
        var val = c.value;
        if (!val) {
            return null;
        }
        if (Object(_utils_date_util__WEBPACK_IMPORTED_MODULE_6__["isValidDate"])(val)) {
            return null;
        }
        return {
            dateOfBirthInvalid: true
        };
    };
    AgeInputComponent.prototype.validateDate = function (c) {
        var val = c.value;
        return Object(_utils_date_util__WEBPACK_IMPORTED_MODULE_6__["isValidDate"])(val) ? null : {
            birthdayInvalid: true
        };
    };
    AgeInputComponent.prototype.validateAge = function (ageNumKey, ageUnitKey) {
        var _this = this;
        return function (group) {
            var ageNum = group.controls[ageNumKey];
            var ageUnit = group.controls[ageUnitKey];
            var result = false;
            var ageNumVal = ageNum.value;
            switch (ageUnit.value) {
                case AgeUnit.Year:
                    result = ageNumVal >= _this.yearsBottom && ageNumVal < _this.yearsTop;
                    break;
                case AgeUnit.Month:
                    result = ageNumVal >= _this.monthsBottom && ageNumVal < _this.monthsTop;
                    break;
                case AgeUnit.Day:
                    result = ageNumVal >= _this.daysBottom && ageNumVal < _this.daysTop;
                    break;
                default:
                    break;
            }
            return result ? null : { ageInvalid: true };
        };
    };
    AgeInputComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    var AgeInputComponent_1;
    AgeInputComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AgeInputComponent.prototype, "daysTop", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AgeInputComponent.prototype, "daysBottom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AgeInputComponent.prototype, "monthsTop", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AgeInputComponent.prototype, "monthsBottom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AgeInputComponent.prototype, "yearsTop", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AgeInputComponent.prototype, "yearsBottom", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AgeInputComponent.prototype, "format", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], AgeInputComponent.prototype, "debounceTime", void 0);
    AgeInputComponent = AgeInputComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-age-input',
            template: __webpack_require__(/*! raw-loader!./age-input.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/age-input/age-input.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return AgeInputComponent_1; }),
                    multi: true //多对一
                },
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return AgeInputComponent_1; }),
                    multi: true
                }
            ],
            styles: [__webpack_require__(/*! ./age-input.component.scss */ "./src/app/shared/age-input/age-input.component.scss")]
        })
    ], AgeInputComponent);
    return AgeInputComponent;
}());



/***/ }),

/***/ "./src/app/shared/area-list/area-list.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/shared/area-list/area-list.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".street {\n  -webkit-box-flex: 1;\n          flex: 1 1 100%;\n}\n\n.address-group {\n  width: 100%;\n  display: -webkit-box;\n  display: flex;\n  flex-wrap: wrap;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: justify;\n          justify-content: space-between;\n}\n\n.addr-input {\n  min-width: 112px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2FyZWEtbGlzdC9DOlxcVXNlcnNcXHlpbnlpXFxEZXNrdG9wXFxleGVyY2lzZVxcZ2l0aHViX3Byb2pcXG5nLXRhc2ttZ3Ivc3JjXFxhcHBcXHNoYXJlZFxcYXJlYS1saXN0XFxhcmVhLWxpc3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9hcmVhLWxpc3QvYXJlYS1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7VUFBQSxjQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxXQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsZUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO1VBQUEsOEJBQUE7QUNFRjs7QURBQTtFQUNFLGdCQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvYXJlYS1saXN0L2FyZWEtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHJlZXR7XHJcbiAgZmxleDogMSAxIDEwMCU7XHJcbn1cclxuLmFkZHJlc3MtZ3JvdXB7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbn1cclxuLmFkZHItaW5wdXQge1xyXG4gIG1pbi13aWR0aDogMTEycHg7XHJcbn0iLCIuc3RyZWV0IHtcbiAgZmxleDogMSAxIDEwMCU7XG59XG5cbi5hZGRyZXNzLWdyb3VwIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuXG4uYWRkci1pbnB1dCB7XG4gIG1pbi13aWR0aDogMTEycHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/shared/area-list/area-list.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/area-list/area-list.component.ts ***!
  \*********************************************************/
/*! exports provided: AreaListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AreaListComponent", function() { return AreaListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _utils_area_util__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/area.util */ "./src/app/utils/area.util.ts");






var AreaListComponent = /** @class */ (function () {
    function AreaListComponent() {
        this._address = {
            province: '',
            city: '',
            district: '',
            street: ''
        };
        this._province = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._city = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._district = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._street = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.propagateChange = function (_) { };
    }
    AreaListComponent_1 = AreaListComponent;
    AreaListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var province$ = this._province.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''));
        var city$ = this._city.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''));
        var district$ = this._district.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''));
        var street$ = this._street.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])(''));
        var val$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])([province$, city$, district$, street$], function (_p, _c, _d, _s) {
            return {
                province: _p,
                city: _c,
                district: _d,
                street: _s
            };
        });
        this.sub = val$.subscribe(function (v) {
            _this.propagateChange(v);
        });
        this.provinces$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(Object(_utils_area_util__WEBPACK_IMPORTED_MODULE_5__["getProvinces"])());
        this.cities$ = province$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (p) { return Object(_utils_area_util__WEBPACK_IMPORTED_MODULE_5__["getCitiesByProvince"])(p); }));
        this.districts$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["combineLatest"])(province$, city$, function (p, c) {
            return Object(_utils_area_util__WEBPACK_IMPORTED_MODULE_5__["getAreaByCity"])(p, c);
        });
    };
    AreaListComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    AreaListComponent.prototype.writeValue = function (obj) {
        if (obj) {
            this._address = obj;
            if (this._address.province) {
                this._province.next(this._address.province);
            }
            if (this._address.city) {
                this._city.next(this._address.city);
            }
            if (this._address.district) {
                this._district.next(this._address.district);
            }
            if (this._address.street) {
                this._street.next(this._address.street);
            }
        }
    };
    AreaListComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    AreaListComponent.prototype.registerOnTouched = function (fn) { };
    AreaListComponent.prototype.validate = function (c) {
        var val = c.value;
        if (!val) {
            return null;
        }
        if (val.province && val.city && val.district && val.street) {
            return null;
        }
        return {
            addressInvalid: true
        };
    };
    AreaListComponent.prototype.onProvinceChange = function () {
        this._province.next(this._address.province);
    };
    AreaListComponent.prototype.onCityChange = function () {
        this._city.next(this._address.city);
    };
    AreaListComponent.prototype.onDistrictChange = function () {
        this._district.next(this._address.district);
    };
    AreaListComponent.prototype.onStreetChange = function () {
        this._street.next(this._address.street);
    };
    var AreaListComponent_1;
    AreaListComponent = AreaListComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-area-list',
            template: __webpack_require__(/*! raw-loader!./area-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/area-list/area-list.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return AreaListComponent_1; }),
                    multi: true
                },
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return AreaListComponent_1; }),
                    multi: true
                }
            ],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./area-list.component.scss */ "./src/app/shared/area-list/area-list.component.scss")]
        })
    ], AreaListComponent);
    return AreaListComponent;
}());



/***/ }),

/***/ "./src/app/shared/chips-list/chips-list.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/shared/chips-list/chips-list.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jaGlwcy1saXN0L2NoaXBzLWxpc3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/shared/chips-list/chips-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/shared/chips-list/chips-list.component.ts ***!
  \***********************************************************/
/*! exports provided: ChipsListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChipsListComponent", function() { return ChipsListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/user.service */ "./src/app/services/user.service.ts");





var ChipsListComponent = /** @class */ (function () {
    function ChipsListComponent(fb, service) {
        this.fb = fb;
        this.service = service;
        this.multiple = true;
        this.placeholderText = '请输入成员 email';
        this.label = '添加/修改成员';
        this.items = [];
        this.propagateChange = function (_) { };
    }
    ChipsListComponent_1 = ChipsListComponent;
    ChipsListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.form = this.fb.group({
            memberSearch: ['']
        });
        this.memberResults$ = this.form.get("memberSearch").valueChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(300), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])(), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["filter"])(function (s) { return s && s.length > 1; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (str) { return _this.service.searchUsers(str); }));
    };
    ChipsListComponent.prototype.writeValue = function (obj) {
        if (obj && this.multiple) {
            var userEntities_1 = obj.reduce(function (e, c) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, e, { c: c })); }, {});
            if (this.items) {
                var remaining = this.items.filter(function (item) { return !userEntities_1[item.id]; });
                this.items = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](remaining, obj);
            }
        }
        else if (obj && !this.multiple) {
            this.items = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](obj);
        }
    };
    ChipsListComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    ChipsListComponent.prototype.registerOnTouched = function (fn) { };
    ChipsListComponent.prototype.validate = function (c) {
        return this.items ? null : {
            chipListInvalid: true
        };
    };
    ChipsListComponent.prototype.removeMember = function (member) {
        var ids = this.items.map(function (item) { return item.id; });
        var i = ids.indexOf(member.id);
        if (this.multiple) {
            this.items = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.items.slice(0, i), this.items.slice(i + 1));
        }
        else {
            this.items = [];
        }
        this.form.patchValue({ memberSearch: '' });
        this.propagateChange(this.items);
    };
    ChipsListComponent.prototype.handleMemberSelection = function (event) {
        var member = event.option.value;
        if (this.items.map(function (item) { return item.id; }).indexOf(member.id) !== -1) {
            return;
        }
        this.items = this.multiple ? tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.items, [member]) : [member];
        this.form.patchValue({ memberSearch: member.name });
        this.memberSearchInput.nativeElement.value = '';
        this.propagateChange(this.items);
    };
    ChipsListComponent.prototype.displayUser = function (user) {
        return user ? user.name : '';
    };
    Object.defineProperty(ChipsListComponent.prototype, "displayInput", {
        get: function () {
            return this.multiple || this.items.length === 0;
        },
        enumerable: true,
        configurable: true
    });
    var ChipsListComponent_1;
    ChipsListComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ChipsListComponent.prototype, "multiple", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ChipsListComponent.prototype, "placeholderText", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ChipsListComponent.prototype, "label", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('memberSearchInput', { static: false })
    ], ChipsListComponent.prototype, "memberSearchInput", void 0);
    ChipsListComponent = ChipsListComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-chips-list',
            template: __webpack_require__(/*! raw-loader!./chips-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/chips-list/chips-list.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return ChipsListComponent_1; }),
                    multi: true //多对一
                },
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return ChipsListComponent_1; }),
                    multi: true
                }
            ],
            styles: [__webpack_require__(/*! ./chips-list.component.scss */ "./src/app/shared/chips-list/chips-list.component.scss")]
        })
    ], ChipsListComponent);
    return ChipsListComponent;
}());



/***/ }),

/***/ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/confirm-dialog/confirm-dialog.component.ts ***!
  \*******************************************************************/
/*! exports provided: ConfirmDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmDialogComponent", function() { return ConfirmDialogComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var ConfirmDialogComponent = /** @class */ (function () {
    function ConfirmDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.title = "";
        this.content = "";
    }
    ConfirmDialogComponent.prototype.ngOnInit = function () {
        this.title = this.data.title;
        this.content = this.data.content;
    };
    ConfirmDialogComponent.prototype.onClick = function (result) {
        this.dialogRef.close(result);
    };
    ConfirmDialogComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    ConfirmDialogComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm-dialog',
            template: "\n    <h3 mat-dialog-title>{{title}}</h3>\n    <div mat-dialog-content>\n      {{content}}\n    </div>\n    <div mat-dialog-actions>\n      <button type=\"button\" mat-raised-button color=\"primary\" (click)=\"onClick(true)\">\u786E\u5B9A</button>\n      <button type=\"button\" mat-button mat-dialog-close (click)=\"onClick(false)\">\u53D6\u6D88</button>\n    </div>\n  "
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], ConfirmDialogComponent);
    return ConfirmDialogComponent;
}());



/***/ }),

/***/ "./src/app/shared/identity-input/identity-input.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/shared/identity-input/identity-input.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".type-input {\n  min-width: 112px;\n}\n\n.id-input {\n  -webkit-box-flex: 1;\n          flex: 1;\n}\n\n:host {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: nowrap;\n  -webkit-box-align: baseline;\n          align-items: baseline;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2lkZW50aXR5LWlucHV0L0M6XFxVc2Vyc1xceWlueWlcXERlc2t0b3BcXGV4ZXJjaXNlXFxnaXRodWJfcHJvalxcbmctdGFza21nci9zcmNcXGFwcFxcc2hhcmVkXFxpZGVudGl0eS1pbnB1dFxcaWRlbnRpdHktaW5wdXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9pZGVudGl0eS1pbnB1dC9pZGVudGl0eS1pbnB1dC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxtQkFBQTtVQUFBLE9BQUE7QUNFRjs7QURBQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7VUFBQSxxQkFBQTtBQ0dGIiwiZmlsZSI6InNyYy9hcHAvc2hhcmVkL2lkZW50aXR5LWlucHV0L2lkZW50aXR5LWlucHV0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnR5cGUtaW5wdXQge1xyXG4gIG1pbi13aWR0aDogMTEycHg7XHJcbn1cclxuLmlkLWlucHV0e1xyXG4gIGZsZXg6IDE7XHJcbn1cclxuOmhvc3R7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogbm93cmFwO1xyXG4gIGFsaWduLWl0ZW1zOiBiYXNlbGluZTtcclxufSIsIi50eXBlLWlucHV0IHtcbiAgbWluLXdpZHRoOiAxMTJweDtcbn1cblxuLmlkLWlucHV0IHtcbiAgZmxleDogMTtcbn1cblxuOmhvc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgYWxpZ24taXRlbXM6IGJhc2VsaW5lO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/shared/identity-input/identity-input.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/shared/identity-input/identity-input.component.ts ***!
  \*******************************************************************/
/*! exports provided: IdentityInputComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IdentityInputComponent", function() { return IdentityInputComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_domain__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/domain */ "./src/app/domain/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





// import { , from } from "rxjs/operators";
var IdentityInputComponent = /** @class */ (function () {
    function IdentityInputComponent() {
        this.identityTypes = [
            { value: src_app_domain__WEBPACK_IMPORTED_MODULE_3__["IdentityType"].IdCard, label: '身份证' },
            { value: src_app_domain__WEBPACK_IMPORTED_MODULE_3__["IdentityType"].Insurance, label: '医保' },
            { value: src_app_domain__WEBPACK_IMPORTED_MODULE_3__["IdentityType"].Passport, label: '护照' },
            { value: src_app_domain__WEBPACK_IMPORTED_MODULE_3__["IdentityType"].Militory, label: '军官证' },
            { value: src_app_domain__WEBPACK_IMPORTED_MODULE_3__["IdentityType"].Other, label: '其他' }
        ];
        this.identity = { indentityType: null, indentifyNo: null };
        this._idType = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this._idNo = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.propagateChange = function (_) { };
    }
    IdentityInputComponent_1 = IdentityInputComponent;
    IdentityInputComponent.prototype.ngOnInit = function () {
        var _this = this;
        var val$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_4__["combineLatest"])(this._idType, this._idNo, function (_type, _no) {
            return {
                identityType: _type,
                identityNo: _no
            };
        });
        this.sub = val$.subscribe(function (id) {
            _this.propagateChange(id);
        });
    };
    IdentityInputComponent.prototype.ngOnDestroy = function () {
        if (this.sub) {
            this.sub.unsubscribe();
        }
    };
    IdentityInputComponent.prototype.onIdTypeChange = function (idType) {
        this._idType.next(idType);
    };
    IdentityInputComponent.prototype.onIdNoChange = function (idNo) {
        this._idNo.next(idNo);
    };
    Object.defineProperty(IdentityInputComponent.prototype, "idType", {
        get: function () {
            return this._idType.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(IdentityInputComponent.prototype, "idNo", {
        get: function () {
            return this._idNo.asObservable();
        },
        enumerable: true,
        configurable: true
    });
    IdentityInputComponent.prototype.writeValue = function (obj) {
        if (obj) {
            this.identity = obj;
        }
    };
    IdentityInputComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    IdentityInputComponent.prototype.registerOnTouched = function (fn) { };
    IdentityInputComponent.prototype.validate = function (c) {
        var val = c.value;
        if (!val) {
            return null;
        }
        switch (val.identityType) {
            case src_app_domain__WEBPACK_IMPORTED_MODULE_3__["IdentityType"].IdCard:
                return this.validateIdCard(c);
            case src_app_domain__WEBPACK_IMPORTED_MODULE_3__["IdentityType"].Passport:
                return this.validatePassport(c);
            case src_app_domain__WEBPACK_IMPORTED_MODULE_3__["IdentityType"].Militory:
                return this.validateMilitory(c);
            case src_app_domain__WEBPACK_IMPORTED_MODULE_3__["IdentityType"].Insurance:
            default:
                return null;
        }
    };
    IdentityInputComponent.prototype.validateIdCard = function (c) {
        var val = c.value.identityNo;
        if (val.length !== 18) {
            return { idInvalid: true };
        }
        var pattern = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}[x0-9]$/;
        return pattern.test(val) ? null : { idInvalid: true };
    };
    IdentityInputComponent.prototype.validatePassport = function (c) {
        var val = c.value.identityNo;
        if (val.length !== 9) {
            return { idInvalid: true };
        }
        var pattern = /^[GgEe]\d{8}$/;
        return pattern.test(val) ? null : { idInvalid: true };
    };
    IdentityInputComponent.prototype.validateMilitory = function (c) {
        var val = c.value.identityNo;
        var pattern = /[\u4e00-\u9fa5](字第)(\d{4,8})(号?)$/;
        return pattern.test(val) ? null : { idInvalid: true };
    };
    var IdentityInputComponent_1;
    IdentityInputComponent = IdentityInputComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-identity-input',
            template: __webpack_require__(/*! raw-loader!./identity-input.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/identity-input/identity-input.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return IdentityInputComponent_1; }),
                    multi: true //多对一
                },
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return IdentityInputComponent_1; }),
                    multi: true
                }
            ],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./identity-input.component.scss */ "./src/app/shared/identity-input/identity-input.component.scss")]
        })
    ], IdentityInputComponent);
    return IdentityInputComponent;
}());



/***/ }),

/***/ "./src/app/shared/image-list-select/image-list-select.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/shared/image-list-select/image-list-select.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-icon.avatar {\n  overflow: hidden;\n  width: 64px;\n  height: 64px;\n  border-radius: 50%;\n  margin: 12px;\n}\n\n.scroll-container {\n  overflow-y: scroll;\n  height: 200px;\n}\n\n.image-container {\n  position: relative;\n  display: inline-block;\n}\n\n.image-container img {\n  display: block;\n}\n\n.image-container .after {\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  display: none;\n  color: #fff;\n}\n\n.image-container:hover .after {\n  display: block;\n  background: rgba(0, 0, 0, 0.6);\n}\n\n.image-container .after .zoom {\n  color: #ddd;\n  font-size: 48px;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  margin: -30px 0 0 -19px;\n  height: 50px;\n  width: 45px;\n  cursor: pointer;\n}\n\n.image-container .after .zoom:hover {\n  color: #fff;\n}\n\n.cover {\n  width: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2ltYWdlLWxpc3Qtc2VsZWN0L0M6XFxVc2Vyc1xceWlueWlcXERlc2t0b3BcXGV4ZXJjaXNlXFxnaXRodWJfcHJvalxcbmctdGFza21nci9zcmNcXGFwcFxcc2hhcmVkXFxpbWFnZS1saXN0LXNlbGVjdFxcaW1hZ2UtbGlzdC1zZWxlY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL3NoYXJlZC9pbWFnZS1saXN0LXNlbGVjdC9pbWFnZS1saXN0LXNlbGVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNDLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUNDRDs7QURFQTtFQUNDLGtCQUFBO0VBQ0EsYUFBQTtBQ0NEOztBREVBO0VBQ0Msa0JBQUE7RUFDQSxxQkFBQTtBQ0NEOztBREVBO0VBQ0MsY0FBQTtBQ0NEOztBREVBO0VBQ0Msa0JBQUE7RUFDQSxNQUFBO0VBQ0EsT0FBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUNDRDs7QURFQTtFQUNDLGNBQUE7RUFDQSw4QkFBQTtBQ0NEOztBREVBO0VBQ0MsV0FBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7QUNDRDs7QURFQTtFQUNDLFdBQUE7QUNDRDs7QURFQTtFQUNDLFlBQUE7QUNDRCIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9pbWFnZS1saXN0LXNlbGVjdC9pbWFnZS1saXN0LXNlbGVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1pY29uLmF2YXRhciB7XHJcblx0b3ZlcmZsb3c6IGhpZGRlbjtcclxuXHR3aWR0aDogNjRweDtcclxuXHRoZWlnaHQ6IDY0cHg7XHJcblx0Ym9yZGVyLXJhZGl1czogNTAlO1xyXG5cdG1hcmdpbjogMTJweDtcclxufVxyXG4gIFxyXG4uc2Nyb2xsLWNvbnRhaW5lciB7XHJcblx0b3ZlcmZsb3cteTogc2Nyb2xsO1xyXG5cdGhlaWdodDogMjAwcHg7XHJcbn1cclxuXHJcbi5pbWFnZS1jb250YWluZXIge1xyXG5cdHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbn1cclxuXHJcbi5pbWFnZS1jb250YWluZXIgaW1nIHtcclxuXHRkaXNwbGF5OiBibG9jaztcclxufVxyXG5cclxuLmltYWdlLWNvbnRhaW5lciAuYWZ0ZXIge1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDA7XHJcblx0bGVmdDogMDtcclxuXHR3aWR0aDogMTAwJTtcclxuXHRoZWlnaHQ6IDEwMCU7XHJcblx0ZGlzcGxheTogbm9uZTtcclxuXHRjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuLmltYWdlLWNvbnRhaW5lcjpob3ZlciAuYWZ0ZXIge1xyXG5cdGRpc3BsYXk6IGJsb2NrO1xyXG5cdGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgLjYpO1xyXG59XHJcblxyXG4uaW1hZ2UtY29udGFpbmVyIC5hZnRlciAuem9vbSB7XHJcblx0Y29sb3I6ICNkZGQ7XHJcblx0Zm9udC1zaXplOiA0OHB4O1xyXG5cdHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuXHR0b3A6IDUwJTtcclxuXHRsZWZ0OiA1MCU7XHJcblx0bWFyZ2luOiAtMzBweCAwIDAgLTE5cHg7XHJcblx0aGVpZ2h0OiA1MHB4O1xyXG5cdHdpZHRoOiA0NXB4O1xyXG5cdGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmltYWdlLWNvbnRhaW5lciAuYWZ0ZXIgLnpvb206aG92ZXJ7XHJcblx0Y29sb3I6I2ZmZjtcclxufVxyXG5cclxuLmNvdmVyIHtcclxuXHR3aWR0aDogMTUwcHg7XHJcbn0iLCJtYXQtaWNvbi5hdmF0YXIge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogNjRweDtcbiAgaGVpZ2h0OiA2NHB4O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG1hcmdpbjogMTJweDtcbn1cblxuLnNjcm9sbC1jb250YWluZXIge1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbi5pbWFnZS1jb250YWluZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbn1cblxuLmltYWdlLWNvbnRhaW5lciBpbWcge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmltYWdlLWNvbnRhaW5lciAuYWZ0ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5pbWFnZS1jb250YWluZXI6aG92ZXIgLmFmdGVyIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGJhY2tncm91bmQ6IHJnYmEoMCwgMCwgMCwgMC42KTtcbn1cblxuLmltYWdlLWNvbnRhaW5lciAuYWZ0ZXIgLnpvb20ge1xuICBjb2xvcjogI2RkZDtcbiAgZm9udC1zaXplOiA0OHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogNTAlO1xuICBsZWZ0OiA1MCU7XG4gIG1hcmdpbjogLTMwcHggMCAwIC0xOXB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA0NXB4O1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5pbWFnZS1jb250YWluZXIgLmFmdGVyIC56b29tOmhvdmVyIHtcbiAgY29sb3I6ICNmZmY7XG59XG5cbi5jb3ZlciB7XG4gIHdpZHRoOiAxNTBweDtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/image-list-select/image-list-select.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/shared/image-list-select/image-list-select.component.ts ***!
  \*************************************************************************/
/*! exports provided: ImageListSelectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImageListSelectComponent", function() { return ImageListSelectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");



var ImageListSelectComponent = /** @class */ (function () {
    function ImageListSelectComponent() {
        this.title = '选择';
        this.cols = 6;
        this.rowHeight = '64px';
        this.items = [];
        this.useSvgIcon = false;
        this.itemWidth = '80px';
        this.propagateChange = function (_) { };
    }
    ImageListSelectComponent_1 = ImageListSelectComponent;
    ImageListSelectComponent.prototype.onChange = function (i) {
        this.selected = this.items[i];
        this.propagateChange(this.selected); //变化通知表单,即通知(change)="onChange($event)", this.select会放到$event中
    };
    ImageListSelectComponent.prototype.writeValue = function (obj) {
        this.selected = obj;
    };
    ImageListSelectComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    ImageListSelectComponent.prototype.registerOnTouched = function (fn) {
    };
    ImageListSelectComponent.prototype.validate = function (c) {
        return this.selected ? null : {
            imageListInvalid: {
                valid: false
            }
        };
    };
    var ImageListSelectComponent_1;
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ImageListSelectComponent.prototype, "title", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ImageListSelectComponent.prototype, "cols", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ImageListSelectComponent.prototype, "rowHeight", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ImageListSelectComponent.prototype, "items", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ImageListSelectComponent.prototype, "useSvgIcon", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ImageListSelectComponent.prototype, "itemWidth", void 0);
    ImageListSelectComponent = ImageListSelectComponent_1 = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-image-list-select',
            template: __webpack_require__(/*! raw-loader!./image-list-select.component.html */ "./node_modules/raw-loader/index.js!./src/app/shared/image-list-select/image-list-select.component.html"),
            providers: [
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALUE_ACCESSOR"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return ImageListSelectComponent_1; }),
                    multi: true //多对一
                },
                {
                    provide: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NG_VALIDATORS"],
                    useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () { return ImageListSelectComponent_1; }),
                    multi: true
                }
            ],
            styles: [__webpack_require__(/*! ./image-list-select.component.scss */ "./src/app/shared/image-list-select/image-list-select.component.scss")]
        })
    ], ImageListSelectComponent);
    return ImageListSelectComponent;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./confirm-dialog/confirm-dialog.component */ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _directive_directive_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../directive/directive.module */ "./src/app/directive/directive.module.ts");
/* harmony import */ var _image_list_select_image_list_select_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./image-list-select/image-list-select.component */ "./src/app/shared/image-list-select/image-list-select.component.ts");
/* harmony import */ var _age_input_age_input_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./age-input/age-input.component */ "./src/app/shared/age-input/age-input.component.ts");
/* harmony import */ var _chips_list_chips_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./chips-list/chips-list.component */ "./src/app/shared/chips-list/chips-list.component.ts");
/* harmony import */ var _identity_input_identity_input_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./identity-input/identity-input.component */ "./src/app/shared/identity-input/identity-input.component.ts");
/* harmony import */ var _area_list_area_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./area-list/area-list.component */ "./src/app/shared/area-list/area-list.component.ts");












var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogComponent"],
                _image_list_select_image_list_select_component__WEBPACK_IMPORTED_MODULE_7__["ImageListSelectComponent"],
                _age_input_age_input_component__WEBPACK_IMPORTED_MODULE_8__["AgeInputComponent"],
                _chips_list_chips_list_component__WEBPACK_IMPORTED_MODULE_9__["ChipsListComponent"],
                _identity_input_identity_input_component__WEBPACK_IMPORTED_MODULE_10__["IdentityInputComponent"],
                _area_list_area_list_component__WEBPACK_IMPORTED_MODULE_11__["AreaListComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _directive_directive_module__WEBPACK_IMPORTED_MODULE_6__["DirectiveModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            ],
            exports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatGridListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatAutocompleteModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRadioModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatNativeDateModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSelectModule"],
                _directive_directive_module__WEBPACK_IMPORTED_MODULE_6__["DirectiveModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                _image_list_select_image_list_select_component__WEBPACK_IMPORTED_MODULE_7__["ImageListSelectComponent"],
                _identity_input_identity_input_component__WEBPACK_IMPORTED_MODULE_10__["IdentityInputComponent"],
                _area_list_area_list_component__WEBPACK_IMPORTED_MODULE_11__["AreaListComponent"],
                _age_input_age_input_component__WEBPACK_IMPORTED_MODULE_8__["AgeInputComponent"],
                _chips_list_chips_list_component__WEBPACK_IMPORTED_MODULE_9__["ChipsListComponent"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatTabsModule"],
            ],
            entryComponents: [
                _confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_5__["ConfirmDialogComponent"],
            ]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/app/utils/area.data.ts":
/*!************************************!*\
  !*** ./src/app/utils/area.data.ts ***!
  \************************************/
/*! exports provided: city_data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "city_data", function() { return city_data; });
var city_data = { '北京市': { '北京市': ['东城区', '西城区', '崇文区', '宣武区', '朝阳区', '丰台区', '石景山区', '海淀区', '门头沟区', '房山区', '通州区', '顺义区', '昌平区', '大兴区', '怀柔区', '平谷区', '密云县', '延庆县'] }, '上海市': { '上海市': ['黄浦区', '卢湾区', '徐汇区', '长宁区', '静安区', '普陀区', '闸北区', '虹口区', '杨浦区', '闵行区', '宝山区', '嘉定区', '浦东新区', '金山区', '松江区', '青浦区', '南汇区', '奉贤区', '崇明县'] }, '天津市': { '天津市': ['和平区', '河东区', '河西区', '南开区', '河北区', '红桥区', '塘沽区', '汉沽区', '大港区', '东丽区', '西青区', '津南区', '北辰区', '武清区', '宝坻区', '宁河县', '静海县', '蓟县'] }, '河北省': { '保定市': ['安国市', '安新县', '北市区', '博野县', '定兴县', '定州市', '阜平县', '高碑店', '高阳县', '涞水县', '涞源县', '蠡县', '满城县', '南市区', '清苑县', '曲阳县', '容城县', '顺平县', '唐县', '望都县', '新市区', '雄县', '徐水县', '易县', '涿州市'], '沧州市': ['泊头市', '沧县', '东光县', '海兴县', '河间市', '黄骅市', '孟村回族自治县', '南皮县', '青县', '任丘市', '肃宁县', '吴桥县', '献县', '新华区', '盐山县', '运河区'], '承德市': ['承德县', '丰宁满族自治县', '宽城满族自治县', '隆化县', '滦平县', '平泉县', '双滦区', '双桥区', '围场满族蒙古族自治县', '兴隆县', '鹰手营子矿区'], '邯郸市': ['成安县', '磁县', '丛台区', '大名县', '肥乡县', '峰峰矿区', '复兴区', '馆陶县', '广平县', '邯郸县', '邯山区', '鸡泽县', '临漳县', '邱县', '曲周县', '涉县', '魏县', '武安市', '永年县'], '衡水市': ['安平县', '阜城县', '故城县', '冀州市', '景县', '饶阳县', '深州市', '桃城区', '武强县', '武邑县', '枣强县'], '廊坊市': ['安次区', '霸州市', '大厂回族自治县', '大城县', '固安县', '广阳区', '三河市', '文安县', '香河县', '永清县'], '秦皇岛市': ['北戴河区', '昌黎县', '抚宁县', '海港区', '卢龙县', '青龙满族自治县', '山海关区'], '石家庄市': ['高邑县', '藁城市', '行唐县', '晋州市', '井陉矿区', '井陉县', '灵寿县', '鹿泉市', '栾城县', '平山县', '桥东区', '桥西区', '深泽县', '无极县', '辛集市', '新华区', '新乐市', '裕华区', '元氏县', '赞皇县', '长安区', '赵县', '正定县'], '唐山市': ['曹妃甸区', '丰南区', '丰润区', '古冶区', '开平区', '乐亭县', '路北区', '路南区', '滦南县', '滦县', '迁安市', '迁西县', '玉田县', '遵化市'], '邢台市': ['柏乡县', '广宗县', '巨鹿县', '临城县', '临西县', '隆尧县', '南宫市', '南和县', '内丘县', '宁晋县', '平乡县', '桥东区', '桥西区', '清河县', '任县', '沙河市', '威县', '新河县', '邢台县'], '张家口市': ['赤城县', '崇礼县', '沽源县', '怀安县', '怀来县', '康保县', '桥东区', '桥西区', '尚义县', '万全县', '蔚县', '下花园区', '宣化区', '宣化县', '阳原县', '张北县', '涿鹿县'] }, '重庆市': { '重庆市': ['万州区', '涪陵区', '渝中区', '大渡口区', '江北区', '沙坪坝区', '九龙坡区', '南岸区', '北碚区', '万盛区', '双桥区', '渝北区', '巴南区', '黔江区', '长寿区', '綦江县', '潼南县', '铜梁县', '大足县', '荣昌县', '璧山县', '梁平县', '城口县', '丰都县', '垫江县', '武隆县', '忠县', '开县', '云阳县', '奉节县', '巫山县', '巫溪县', '石柱土家族自治县', '秀山土家族苗族自治县', '酉阳土家族苗族自治县', '彭水苗族土家族自治县', '江津市', '合川市', '永川市', '南川市'] }, '广东省': { '广州市': ['越秀区', '荔湾区', '海珠区', '天河区', '白云区', '黄埔区', '花都区', '番禺区', '南沙区', '增城区', '从化区'], '深圳市': ['福田区', '罗湖区', '南山区', '盐田区', '宝安区', '龙岗区'], '珠海市': ['香洲区', '斗门区', '金湾区'], '汕头市': ['金平区', '龙湖区', '濠江区', '潮南区', '潮阳区', '澄海区', '南澳县'], '佛山市': ['禅城区', '高明区', '三水区', '南海区', '顺德区'], '韶关市': ['浈江区', '武江区', '曲江区', '乐昌市', '南雄市', '始兴县', '仁化县', '翁源县', '新丰县', '乳源瑶族自治县'], '湛江市': ['赤坎区', '霞山区', '坡头区', '麻章区', '廉江市', '吴川市', '雷州市', '遂溪县', '徐闻县'], '肇庆市': ['端州区', '鼎湖区', '高要市', '四会市', '广宁县', '怀集县', '封开县', '德庆县'], '江门市': ['江海区', '蓬江区', '新会区', '台山市', '鹤山市', '开平市', '恩平市 '], '茂名市': ['茂南区', '电白区', '高州市', '化州市', '信宜市'], '惠州市': ['惠城区', '惠阳区', '博罗县', '龙门县', '惠东县'], '梅州市': ['梅江区', '梅县区', '兴宁市', '大埔县', '丰顺县', '五华县', '平远县', '蕉岭县'], '汕尾市': ['城区', '陆丰市', '海丰县', '陆河县'], '河源市': ['源城区', '龙川县', '连平县', '东源县', '和平县', '紫金县'], '阳江市': ['江城区', '阳春市', '阳西县', '阳东县'], '清远市': ['清城区', '清新区', '英德市', '连州市', '佛冈县', '阳山县', '连山壮族瑶族自治县', '连南瑶族自治县'], '东莞市': ['东莞市'], '中山市': ['中山市'], '潮州市': ['湘桥区', '潮安区', '饶平县'], '揭阳市': ['榕城区', '揭东区', '普宁市', '惠来县', '揭西县'], '云浮市': ['云城区', '罗定市', '新兴县', '郁南县', '云安县'] }, '甘肃省': { '白银市': ['白银区', '会宁县', '景泰县', '靖远县', '平川区'], '定西市': ['安定区', '临洮县', '陇西县', '岷县', '通渭县', '渭源县', '漳县'], '甘南藏族自治州': ['迭部县', '合作市', '临潭县', '碌曲县', '玛曲县', '夏河县', '舟曲县', '卓尼县'], '嘉峪关市': ['嘉峪关'], '金昌市': ['金川区', '永昌县'], '酒泉市': ['阿克塞哈萨克族自治县', '敦煌市', '瓜州县', '金塔县', '肃北蒙古族自治县', '肃州区', '玉门市'], '兰州市': ['安宁区', '城关区', '皋兰县', '红古区', '七里河区', '西固区', '永登县', '榆中县'], '临夏回族自治州': ['东乡族自治县', '广河县', '和政县', '积石山保安族东乡族撒拉族自治县', '康乐县', '临夏市', '临夏县', '永靖县'], '陇南市': ['成县', '宕昌县', '徽县', '康县', '礼县', '两当县', '文县', '武都区', '西和县'], '平凉市': ['崇信县', '华亭县', '泾川县', '静宁县', '崆峒区', '灵台县', '庄浪县'], '庆阳市': ['合水县', '华池县', '环县', '宁县', '庆城县', '西峰区', '镇原县', '正宁县'], '天水市': ['甘谷县', '麦积区', '秦安县', '秦州区', '清水县', '武山县', '张家川回族自治县'], '武威市': ['古浪县', '凉州区', '民勤县', '天祝藏族自治县'], '张掖市': ['甘州区', '高台县', '临泽县', '民乐县', '山丹县', '肃南裕固族自治县'] }, '湖北省': { '鄂州市': ['鄂城区', '华容区', '梁子湖区'], '恩施土家族苗族自治州': ['巴东县', '恩施市', '鹤峰县', '建始县', '来凤县', '利川市', '咸丰县', '宣恩县'], '黄冈市': ['红安县', '黄梅县', '黄州区', '罗田县', '麻城市', '蕲春县', '团风县', '武穴市', '浠水县', '英山县'], '黄石市': ['大冶市', '黄石港区', '铁山区', '西塞山区', '下陆区', '阳新县'], '荆州市': ['东宝区', '掇刀区', '京山县', '沙洋县', '钟祥市', '公安县', '洪湖市', '监利县', '江陵县', '荆州区', '沙市区', '石首市', '松滋市'], '省直辖县级行政区划': ['潜江市', '神农架林区', '天门市', '仙桃市'], '十堰市': ['丹江口市', '房县', '茅箭区', '郧西县', '郧县', '张湾区', '竹山县', '竹溪县'], '随州市': ['曾都区', '广水市', '随县'], '武汉市': ['蔡甸区', '东西湖区', '汉南区', '汉阳区', '洪山区', '黄陂区', '江岸区', '江汉区', '江夏区', '硚口区', '青山区', '武昌区', '新洲区'], '咸宁市': ['赤壁市', '崇阳县', '嘉鱼县', '通城县', '通山县', '咸安区'], '襄阳市': ['保康县', '樊城区', '谷城县', '老河口市', '南漳县', '襄城区', '襄州区', '宜城市', '枣阳市'], '孝感市': ['安陆市', '大悟县', '汉川市', '孝昌县', '孝南区', '应城市', '云梦县'], '宜昌市': ['当阳市', '点军区', '五峰土家族自治县', '伍家岗区', '西陵区', '猇亭区', '兴山县', '夷陵区', '宜都市', '远安县', '长阳土家族自治县', '枝江市', '秭归县'] }, '湖南省': { '常德市': ['安乡县', '鼎城区', '汉寿县', '津市市', '澧县', '临澧县', '石门县', '桃源县', '武陵区'], '郴州市': ['安仁县', '北湖区', '桂东县', '桂阳县', '嘉禾县', '临武县', '汝城县', '苏仙区', '宜章县', '永兴县', '资兴市'], '衡阳市': ['常宁市', '衡东县', '衡南县', '衡山县', '衡阳县', '耒阳市', '南岳区', '祁东县', '石鼓区', '雁峰区', '蒸湘区', '珠晖区'], '怀化市': ['辰溪县', '鹤城区', '洪江市', '会同县', '靖州苗族侗族自治县', '麻阳苗族自治县', '通道侗族自治县', '新晃侗族自治县', '溆浦县', '沅陵县', '芷江侗族自治县', '中方县'], '娄底市': ['冷水江市', '涟源市', '娄星区', '双峰县', '新化县'], '邵阳市': ['北塔区', '城步苗族自治县', '大祥区', '洞口县', '隆回县', '邵东县', '邵阳县', '双清区', '绥宁县', '武冈市', '新宁县', '新邵县'], '湘潭市': ['韶山市', '湘潭县', '湘乡市', '雨湖区', '岳塘区'], '湘西土家族苗族自治州': ['保靖县', '凤凰县', '古丈县', '花垣县', '吉首市', '龙山县', '泸溪县', '永顺县'], '益阳市': ['安化县', '赫山区', '南县', '桃江县', '沅江市', '资阳区'], '永州市': ['道县', '东安县', '江华瑶族自治县', '江永县', '蓝山县', '冷水滩区', '零陵区', '宁远县', '祁阳县', '双牌县', '新田县'], '岳阳市': ['华容县', '君山区', '临湘市', '汨罗市', '平江县', '湘阴县', '岳阳县', '岳阳楼区', '云溪区'], '张家界市': ['慈利县', '桑植县', '武陵源区', '永定区'], '长沙市': ['芙蓉区', '开福区', '浏阳市', '宁乡县', '天心区', '望城区', '雨花区', '岳麓区', '长沙县'], '株洲市': ['茶陵县', '荷塘区', '醴陵市', '芦淞区', '石峰区', '天元区', '炎陵县', '攸县', '株洲县'] }, '四川省': { '成都市': ['锦江区', '青羊区', '金牛区', '武侯区', '成华区', '龙泉驿区', '青白江区', '新都区', '温江县', '金堂县', '双流县', '郫县', '大邑县', '蒲江县', '新津县', '都江堰市', '彭州市', '邛崃市', '崇州市'], '自贡市': ['自流井区', '贡井区', '大安区', '沿滩区', '荣县', '富顺县'], '攀枝花市': ['东区', '西区', '仁和区', '米易县', '盐边县'], '泸州市': ['江阳区', '纳溪区', '龙马潭区', '泸县', '合江县', '叙永县', '古蔺县'], '德阳市': ['旌阳区', '中江县', '罗江县', '广汉市', '什邡市', '绵竹市'], '绵阳市': ['涪城区', '游仙区', '三台县', '盐亭县', '安县', '梓潼县', '北川羌族自治县', '平武县', '江油市'], '广元市': ['市中区', '元坝区', '朝天区', '旺苍县', '青川县', '剑阁县', '苍溪县'], '遂宁市': ['船山区', '安居区', '蓬溪县', '射洪县', '大英县'], '内江市': ['市中区', '东兴区', '威远县', '资中县', '隆昌县'], '乐山市': ['市中区', '沙湾区', '五通桥区', '金口河区', '犍为县', '井研县', '夹江县', '沐川县', '峨边彝族自治县', '马边彝族自治县', '峨眉山市'], '南充市': ['顺庆区', '高坪区', '嘉陵区', '南部县', '营山县', '蓬安县', '仪陇县', '西充县', '阆中市'], '眉山市': ['东坡区', '仁寿县', '彭山县', '洪雅县', '丹棱县', '青神县'], '宜宾市': ['翠屏区', '宜宾县', '南溪县', '江安县', '长宁县', '高县', '珙县', '筠连县', '兴文县', '屏山县'], '广安市': ['广安区', '岳池县', '武胜县', '邻水县', '华莹市'], '达州市': ['通川区', '达县', '宣汉县', '开江县', '大竹县', '渠县', '万源市'], '雅安市': ['雨城区', '名山县', '荥经县', '汉源县', '石棉县', '天全县', '芦山县', '宝兴县'], '巴中市': ['巴州区', '通江县', '南江县', '平昌县'], '资阳市': ['雁江区', '安岳县', '乐至县', '简阳市'], '阿坝藏族羌族自治州': ['汶川县', '理县', '茂县', '松潘县', '九寨沟县', '金川县', '小金县', '黑水县', '马尔康县', '壤塘县', '阿坝县', '若尔盖县', '红原县'], '甘孜藏族自治州': ['康定县', '泸定县', '丹巴县', '九龙县', '雅江县', '道孚县', '炉霍县', '甘孜县', '新龙县', '德格县', '白玉县', '石渠县', '色达县', '理塘县', '巴塘县', '乡城县', '稻城县', '得荣县'], '凉山彝族自治州': ['西昌市', '木里藏族自治县', '盐源县', '德昌县', '会理县', '会东县', '宁南县', '普格县', '布拖县', '金阳县', '昭觉县', '喜德县', '冕宁县', '越西县', '甘洛县', '美姑县', '雷波县'] }, '贵州省': { '贵阳市': ['南明区', '云岩区', '花溪区', '乌当区', '白云区', '小河区', '开阳县', '息烽县', '修文县', '清镇市'], '六盘水市': ['钟山区', '六枝特区', '水城县', '盘县'], '遵义市': ['红花岗区', '汇川区', '遵义县', '桐梓县', '绥阳县', '正安县', '道真仡佬族苗族自治县', '务川仡佬族苗族自治县', '凤冈县', '湄潭县', '余庆县', '习水县', '赤水市', '仁怀市'], '安顺市': ['西秀区', '平坝县', '普定县', '镇宁布依族苗族自治县', '关岭布依族苗族自治县', '紫云苗族布依族自治县'], '铜仁地区': ['铜仁市', '江口县', '玉屏侗族自治县', '石阡县', '思南县', '印江土家族苗族自治县', '德江县', '沿河土家族自治县', '松桃苗族自治县', '万山特区'], '黔西南布依族苗族自治州': ['兴义市', '兴仁县', '普安县', '晴隆县', '贞丰县', '望谟县', '册亨县', '安龙县'], '毕节地区': ['毕节市', '大方县', '黔西县', '金沙县', '织金县', '纳雍县', '威宁彝族回族苗族自治县', '赫章县'], '黔东南苗族侗族自治州': ['凯里市', '黄平县', '施秉县', '三穗县', '镇远县', '岑巩县', '天柱县', '锦屏县', '剑河县', '台江县', '黎平县', '榕江县', '从江县', '雷山县', '麻江县', '丹寨县'], '黔南布依族苗族自治州': ['都匀市', '福泉市', '荔波县', '贵定县', '瓮安县', '独山县', '平塘县', '罗甸县', '长顺县', '龙里县', '惠水县', '三都水族自治县'] }, '云南省': { '昆明市': ['五华区', '盘龙区', '官渡区', '西山区', '东川区', '呈贡县', '晋宁县', '富民县', '宜良县', '石林彝族自治县', '嵩明县', '禄劝彝族苗族自治县', '寻甸回族彝族自治县', '安宁市'], '曲靖市': ['麒麟区', '马龙县', '陆良县', '师宗县', '罗平县', '富源县', '会泽县', '沾益县', '宣威市'], '玉溪市': ['红塔区', '江川县', '澄江县', '通海县', '华宁县', '易门县', '峨山彝族自治县', '新平彝族傣族自治县', '元江哈尼族彝族傣族自治县'], '保山市': ['隆阳区', '施甸县', '腾冲县', '龙陵县', '昌宁县'], '昭通市': ['昭阳区', '鲁甸县', '巧家县', '盐津县', '大关县', '永善县', '绥江县', '镇雄县', '彝良县', '威信县', '水富县'], '丽江市': ['古城区', '玉龙纳西族自治县', '永胜县', '华坪县', '宁蒗彝族自治县'], '思茅市': ['翠云区', '普洱哈尼族彝族自治县', '墨江哈尼族自治县', '景东彝族自治县', '景谷傣族彝族自治县', '镇沅彝族哈尼族拉祜族自治县', '江城哈尼族彝族自治县', '孟连傣族拉祜族佤族自治县', '澜沧拉祜族自治县', '西盟佤族自治县'], '临沧市': ['临翔区', '凤庆县', '云县', '永德县', '镇康县', '双江拉祜族佤族布朗族傣族自治县', '耿马傣族佤族自治县', '沧源佤族自治县'], '楚雄彝族自治州': ['楚雄市', '双柏县', '牟定县', '南华县', '姚安县', '大姚县', '永仁县', '元谋县', '武定县', '禄丰县'], '红河哈尼族彝族自治州': ['个旧市', '开远市', '蒙自县', '屏边苗族自治县', '建水县', '石屏县', '弥勒县', '泸西县', '元阳县', '红河县', '金平苗族瑶族傣族自治县', '绿春县', '河口瑶族自治县'], '文山壮族苗族自治州': ['文山县', '砚山县', '西畴县', '麻栗坡县', '马关县', '丘北县', '广南县', '富宁县'], '西双版纳傣族自治州': ['景洪市', '勐海县', '勐腊县'], '大理白族自治州': ['大理市', '漾濞彝族自治县', '祥云县', '宾川县', '弥渡县', '南涧彝族自治县', '巍山彝族回族自治县', '永平县', '云龙县', '洱源县', '剑川县', '鹤庆县'], '德宏傣族景颇族自治州': ['瑞丽市', '潞西市', '梁河县', '盈江县', '陇川县'], '怒江傈僳族自治州': ['泸水县', '福贡县', '贡山独龙族怒族自治县', '兰坪白族普米族自治县'], '迪庆藏族自治州': ['香格里拉县', '德钦县', '维西傈僳族自治县'] }, '河南省': { '郑州市': ['中原区', '二七区', '管城回族区', '金水区', '上街区', '邙山区', '中牟县', '巩义市', '荥阳市', '新密市', '新郑市', '登封市'], '开封市': ['龙亭区', '顺河回族区', '鼓楼区', '南关区', '郊区', '杞县', '通许县', '尉氏县', '开封县', '兰考县'], '洛阳市': ['老城区', '西工区', '廛河回族区', '涧西区', '吉利区', '洛龙区', '孟津县', '新安县', '栾川县', '嵩县', '汝阳县', '宜阳县', '洛宁县', '伊川县', '偃师市'], '平顶山市': ['新华区', '卫东区', '石龙区', '湛河区', '宝丰县', '叶县', '鲁山县', '郏县', '舞钢市', '汝州市'], '安阳市': ['文峰区', '北关区', '殷都区', '龙安区', '安阳县', '汤阴县', '滑县', '内黄县', '林州市'], '鹤壁市': ['鹤山区', '山城区', '淇滨区', '浚县', '淇县'], '新乡市': ['红旗区', '卫滨区', '凤泉区', '牧野区', '新乡县', '获嘉县', '原阳县', '延津县', '封丘县', '长垣县', '卫辉市', '辉县市'], '焦作市': ['解放区', '中站区', '马村区', '山阳区', '修武县', '博爱县', '武陟县', '温县', '济源市', '沁阳市', '孟州市'], '濮阳市': ['华龙区', '清丰县', '南乐县', '范县', '台前吴桥县', '献县', '孟村回族自治县', '泊头市', '任丘市', '黄骅市', '河间市'], '廊坊市': ['安次区', '广阳区', '固安县', '永清县', '香河县', '大城县', '文安县', '大厂回族自治县', '霸州市', '三河市'], '衡水市': ['桃城区', '枣强县', '武邑县', '武强县', '饶阳县', '安平县', '故城县', '景县', '阜城县', '冀州市', '深州市'] }, '山西省': { '太原市': ['小店区', '迎泽区', '杏花岭区', '尖草坪区', '万柏林区', '晋源区', '清徐县', '阳曲县', '娄烦县', '古交市'], '大同市': ['城区', '矿区', '南郊区', '新荣区', '阳高县', '天镇县', '广灵县', '灵丘县', '浑源县', '左云县', '大同县'], '阳泉市': ['城区', '矿区', '郊区', '平定县', '盂县'], '长治市': ['城区', '郊区', '长治县', '襄垣县', '屯留县', '平顺县', '黎城县', '壶关县', '长子县', '武乡县', '沁县', '沁源县', '潞城市'], '晋城市': ['城区', '沁水县', '阳城县', '陵川县', '泽州县', '高平市'], '朔州市': ['朔城区', '平鲁区', '山阴县', '应县', '右玉县', '怀仁县'], '晋中市': ['榆次区', '榆社县', '左权县', '和顺县', '昔阳县', '寿阳县', '太谷县', '祁县', '平遥县', '灵石县', '介休市'], '运城市': ['盐湖区', '临猗县', '万荣县', '闻喜县', '稷山县', '新绛县', '绛县', '垣曲县', '夏县', '平陆县', '芮城县', '永济市', '河津市'], '忻州市': ['忻府区', '定襄县', '五台县', '代县', '繁峙县', '宁武县', '静乐县', '神池县', '五寨县', '岢岚县', '河曲县', '保德县', '偏关县', '原平市'], '临汾市': ['尧都区', '曲沃县', '翼城县', '襄汾县', '洪洞县', '古县', '安泽县', '浮山县', '吉县', '乡宁县', '大宁县', '隰县', '永和县', '蒲县', '汾西县', '侯马市', '霍州市'], '吕梁市': ['离石区', '文水县', '交城县', '兴县', '临县', '柳林县', '石楼县', '岚县', '方山县', '中阳县', '交口县', '孝义市', '汾阳市'] }, '江苏省': { '南京市': ['玄武区', '白下区', '秦淮区', '建邺区', '鼓楼区', '下关区', '浦口区', '栖霞区', '雨花台区', '江宁区', '六合区', '溧水县', '高淳县'], '无锡市': ['崇安区', '南长区', '北塘区', '锡山区', '惠山区', '滨湖区', '江阴市', '宜兴市'], '徐州市': ['鼓楼区', '云龙区', '九里区', '贾汪区', '泉山区', '丰县', '沛县', '铜山县', '睢宁县', '新沂市', '邳州市'], '常州市': ['天宁区', '钟楼区', '戚墅堰区', '新北区', '武进区', '溧阳市', '金坛市'], '苏州市': ['沧浪区', '平江区', '金阊区', '虎丘区', '吴中区', '相城区', '常熟市', '张家港市', '昆山市', '吴江市', '太仓市'], '南通市': ['崇川区', '港闸区', '海安县', '如东县', '启东市', '如皋市', '通州市', '海门市'], '连云港市': ['连云区', '新浦区', '海州区', '赣榆县', '东海县', '灌云县', '灌南县'], '淮安市': ['清河区', '楚州区', '淮阴区', '清浦区', '涟水县', '洪泽县', '盱眙县', '金湖县'], '盐城市': ['亭湖区', '盐都区', '响水县', '滨海县', '阜宁县', '射阳县', '建湖县', '东台市', '大丰市'], '扬州市': ['广陵区', '邗江区', '郊区', '宝应县', '仪征市', '高邮市', '江都市'], '镇江市': ['京口区', '润州区', '丹徒区', '丹阳市', '扬中市', '句容市'], '泰州市': ['海陵区', '高港区', '兴化市', '靖江市', '泰兴市', '姜堰市'], '宿迁市': ['宿城区', '宿豫区', '沭阳县', '泗阳县', '泗洪县'] }, '浙江省': { '杭州市': ['上城区', '下城区', '江干区', '拱墅区', '西湖区', '滨江区', '萧山区', '余杭区', '桐庐县', '淳安县', '建德市', '富阳市', '临安市'], '宁波市': ['海曙区', '江东区', '江北区', '北仑区', '镇海区', '鄞州区', '象山县', '宁海县', '余姚市', '慈溪市', '奉化市'], '温州市': ['鹿城区', '龙湾区', '瓯海区', '洞头县', '永嘉县', '平阳县', '苍南县', '文成县', '泰顺县', '瑞安市', '乐清市'], '嘉兴市': ['秀城区', '秀洲区', '嘉善县', '海盐县', '海宁市', '平湖市', '桐乡市'], '湖州市': ['吴兴区', '南浔区', '德清县', '长兴县', '安吉县'], '绍兴市': ['越城区', '绍兴县', '新昌县', '诸暨市', '上虞市', '嵊州市'], '金华市': ['婺城区', '金东区', '武义县', '浦江县', '磐安县', '兰溪市', '义乌市', '东阳市', '永康市'], '衢州市': ['柯城区', '衢江区', '常山县', '开化县', '龙游县', '江山市'], '舟山市': ['定海区', '普陀区', '岱山县', '嵊泗县'], '台州市': ['椒江区', '黄岩区', '路桥区', '玉环县', '三门县', '天台县', '仙居县', '温岭市', '临海市'], '丽水市': ['莲都区', '青田县', '缙云县', '遂昌县', '松阳县', '云和县', '庆元县', '景宁畲族自治县', '龙泉市'] }, '安徽省': { '合肥市': ['瑶海区', '庐阳区', '蜀山区', '包河区', '长丰县', '肥东县', '肥西县'], '芜湖市': ['镜湖区', '马塘区', '新芜区', '鸠江区', '芜湖县', '繁昌县', '南陵县'], '蚌埠市': ['龙子湖区', '蚌山区', '禹会区', '淮上区', '怀远县', '五河县', '固镇县'], '淮南市': ['大通区', '田家庵区', '谢家集区', '八公山区', '潘集区', '凤台县'], '马鞍山市': ['金家庄区', '花山区', '雨山区', '当涂县'], '淮北市': ['杜集区', '相山区', '烈山区', '濉溪县'], '铜陵市': ['铜官山区', '狮子山区', '郊区', '铜陵县'], '安庆市': ['迎江区', '大观区', '郊区', '怀宁县', '枞阳县', '潜山县', '太湖县', '宿松县', '望江县', '岳西县', '桐城市'], '黄山市': ['屯溪区', '黄山区', '徽州区', '歙县', '休宁县', '黟县', '祁门县'], '滁州市': ['琅琊区', '南谯区', '来安县', '全椒县', '定远县', '凤阳县', '天长市', '明光市'], '阜阳市': ['颍州区', '颍东区', '颍泉区', '临泉县', '太和县', '阜南县', '颍上县', '界首市'], '宿州市': ['墉桥区', '砀山县', '萧县', '灵璧县', '泗县'], '巢湖市': ['居巢区', '庐江县', '无为县', '含山县', '和县'], '六安市': ['金安区', '裕安区', '寿县', '霍邱县', '舒城县', '金寨县', '霍山县'], '亳州市': ['谯城区', '涡阳县', '蒙城县', '利辛县'], '池州市': ['贵池区', '东至县', '石台县', '青阳县'], '宣城市': ['宣州区', '郎溪县', '广德县', '泾县', '绩溪县', '旌德县', '宁国市'] }, '福建省': { '福州市': ['鼓楼区', '台江区', '仓山区', '马尾区', '晋安区', '闽侯县', '连江县', '罗源县', '闽清县', '永泰县', '平潭县', '福清市', '长乐市'], '厦门市': ['思明区', '海沧区', '湖里区', '集美区', '同安区', '翔安区'], '莆田市': ['城厢区', '涵江区', '荔城区', '秀屿区', '仙游县'], '三明市': ['梅列区', '三元区', '明溪县', '清流县', '宁化县', '大田县', '尤溪县', '沙县', '将乐县', '泰宁县', '建宁县', '永安市'], '泉州市': ['鲤城区', '丰泽区', '洛江区', '泉港区', '惠安县', '安溪县', '永春县', '德化县', '金门县', '石狮市', '晋江市', '南安市'], '漳州市': ['芗城区', '龙文区', '云霄县', '漳浦县', '诏安县', '长泰县', '东山县', '南靖县', '平和县', '华安县', '龙海市'], '南平市': ['延平区', '顺昌县', '浦城县', '光泽县', '松溪县', '政和县', '邵武市', '武夷山市', '建瓯市', '建阳市'], '龙岩市': ['新罗区', '长汀县', '永定县', '上杭县', '武平县', '连城县', '漳平市'], '宁德市': ['蕉城区', '霞浦县', '古田县', '屏南县', '寿宁县', '周宁县', '柘荣县', '福安市', '福鼎市'] }, '江西省': { '南昌市': ['东湖区', '西湖区', '青云谱区', '湾里区', '青山湖区', '南昌县', '新建县', '安义县', '进贤县'], '景德镇市': ['昌江区', '珠山区', '浮梁县', '乐平市'], '萍乡市': ['安源区', '湘东区', '莲花县', '上栗县', '芦溪县'], '九江市': ['庐山区', '浔阳区', '九江县', '武宁县', '修水县', '永修县', '德安县', '星子县', '都昌县', '湖口县', '彭泽县', '瑞昌市'], '新余市': ['渝水区', '分宜县'], '鹰潭市': ['月湖区', '余江县', '贵溪市'], '赣州市': ['章贡区', '赣县', '信丰县', '大余县', '上犹县', '崇义县', '安远县', '龙南县', '定南县', '全南县', '宁都县', '于都县', '兴国县', '会昌县', '寻乌县', '石城县', '瑞金市', '南康市'], '吉安市': ['吉州区', '青原区', '吉安县', '吉水县', '峡江县', '新干县', '永丰县', '泰和县', '遂川县', '万安县', '安福县', '永新县', '井冈山市'], '宜春市': ['袁州区', '奉新县', '万载县', '上高县', '宜丰县', '靖安县', '铜鼓县', '丰城市', '樟树市', '高安市'], '抚州市': ['临川区', '南城县', '黎川县', '南丰县', '崇仁县', '乐安县', '宜黄县', '金溪县', '资溪县', '东乡县', '广昌县'], '上饶市': ['信州区', '上饶县', '广丰县', '玉山县', '铅山县', '横峰县', '弋阳县', '余干县', '鄱阳县', '万年县', '婺源县', '德兴市'] }, '山东省': { '济南市': ['历下区', '市中区', '槐荫区', '天桥区', '历城区', '长清区', '平阴县', '济阳县', '商河县', '章丘市'], '青岛市': ['市南区', '市北区', '四方区', '黄岛区', '崂山区', '李沧区', '城阳区', '胶州市', '即墨市', '平度市', '胶南市', '莱西市'], '淄博市': ['淄川区', '张店区', '博山区', '临淄区', '周村区', '桓台县', '高青县', '沂源县'], '枣庄市': ['市中区', '薛城区', '峄城区', '台儿庄区', '山亭区', '滕州市'], '东营市': ['东营区', '河口区', '垦利县', '利津县', '广饶县'], '烟台市': ['芝罘区', '福山区', '牟平区', '莱山区', '长岛县', '龙口市', '莱阳市', '莱州市', '蓬莱市', '招远市', '栖霞市', '海阳市'], '潍坊市': ['潍城区', '寒亭区', '坊子区', '奎文区', '临朐县', '昌乐县', '青州市', '诸城市', '寿光市', '安丘市', '高密市', '昌邑市'], '济宁市': ['市中区', '任城区', '微山县', '鱼台县', '金乡县', '嘉祥县', '汶上县', '泗水县', '梁山县', '曲阜市', '兖州市', '邹城市'], '泰安市': ['泰山区', '岱岳区', '宁阳县', '东平县', '新泰市', '肥城市'], '威海市': ['环翠区', '文登市', '荣成市', '乳山市'], '日照市': ['东港区', '岚山区', '五莲县', '莒县'], '莱芜市': ['莱城区', '钢城区'], '临沂市': ['兰山区', '罗庄区', '河东区', '沂南县', '郯城县', '沂水县', '苍山县', '费县', '平邑县', '莒南县', '蒙阴县', '临沭县'], '德州市': ['德城区', '陵县', '宁津县', '庆云县', '临邑县', '齐河县', '平原县', '夏津县', '武城县', '乐陵市', '禹城市'], '聊城市': ['东昌府区', '阳谷县', '莘县', '茌平县', '东阿县', '冠县', '高唐县', '临清市'], '滨州市': ['滨城区', '惠民县', '阳信县', '无棣县', '沾化县', '博兴县', '邹平县'], '荷泽市': ['牡丹区', '曹县', '单县', '成武县', '巨野县', '郓城县', '鄄城县', '定陶县', '东明县'] }, '辽宁省': { '沈阳市': ['和平区', '沈河区', '大东区', '皇姑区', '铁西区', '苏家屯区', '东陵区', '新城子区', '于洪区', '辽中县', '康平县', '法库县', '新民市'], '大连市': ['中山区', '西岗区', '沙河口区', '甘井子区', '旅顺口区', '金州区', '长海县', '瓦房店市', '普兰店市', '庄河市'], '鞍山市': ['铁东区', '铁西区', '立山区', '千山区', '台安县', '岫岩满族自治县', '海城市'], '抚顺市': ['新抚区', '东洲区', '望花区', '顺城区', '抚顺县', '新宾满族自治县', '清原满族自治县'], '本溪市': ['平山区', '溪湖区', '明山区', '南芬区', '本溪满族自治县', '桓仁满族自治县'], '丹东市': ['元宝区', '振兴区', '振安区', '宽甸满族自治县', '东港市', '凤城市'], '锦州市': ['古塔区', '凌河区', '太和区', '黑山县', '义县', '凌海市', '北宁市'], '营口市': ['站前区', '西市区', '鲅鱼圈区', '老边区', '盖州市', '大石桥市'], '阜新市': ['海州区', '新邱区', '太平区', '清河门区', '细河区', '阜新蒙古族自治县', '彰武县'], '辽阳市': ['白塔区', '文圣区', '宏伟区', '弓长岭区', '太子河区', '辽阳县', '灯塔市'], '盘锦市': ['双台子区', '兴隆台区', '大洼县', '盘山县'], '铁岭市': ['银州区', '清河区', '铁岭县', '西丰县', '昌图县', '调兵山市', '开原市'], '朝阳市': ['双塔区', '龙城区', '朝阳县', '建平县', '喀喇沁左翼蒙古族自治县', '北票市', '凌源市'], '葫芦岛市': ['连山区', '龙港区', '南票区', '绥中县', '建昌县', '兴城市'] }, '青海省': { '果洛藏族自治州': ['班玛县', '达日县', '甘德县', '久治县', '玛多县', '玛沁县'], '海北藏族自治州': ['刚察县', '海晏县', '门源回族自治县', '祁连县'], '海东市': ['互助土族自治县', '化隆回族自治县', '乐都区', '民和回族土族自治县', '平安县', '循化撒拉族自治县'], '海南藏族自治州': ['共和县', '贵德县', '贵南县', '同德县', '兴海县'], '海西蒙古族藏族自治州': ['德令哈市', '都兰县', '格尔木市', '天峻县', '乌兰县'], '黄南藏族自治州': ['河南蒙古族自治县', '尖扎县', '同仁县', '泽库县'], '西宁市': ['城北区', '城东区', '城西区', '城中区', '大通回族土族自治县', '湟源县', '湟中县'], '玉树藏族自治州': ['称多县', '囊谦县', '曲麻莱县', '玉树市', '杂多县', '治多县'] }, '陕西省': { '安康市': ['白河县', '汉滨区', '汉阴县', '岚皋县', '宁陕县', '平利县', '石泉县', '旬阳县', '镇坪县', '紫阳县'], '宝鸡市': ['陈仓区', '凤县', '凤翔县', '扶风县', '金台区', '麟游县', '陇县', '眉县', '岐山县', '千阳县', '太白县', '渭滨区'], '汉中市': ['城固县', '佛坪县', '汉台区', '留坝县', '略阳县', '勉县', '南郑县', '宁强县', '西乡县', '洋县', '镇巴县'], '商洛市': ['丹凤县', '洛南县', '山阳县', '商南县', '商州区', '柞水县', '镇安县'], '铜川市': ['王益区', '耀州区', '宜君县', '印台区'], '渭南市': ['白水县', '澄城县', '大荔县', '富平县', '韩城市', '合阳县', '华县', '华阴市', '临渭区', '蒲城县', '潼关县'], '西安市': ['灞桥区', '碑林区', '高陵县', '户县', '蓝田县', '莲湖区', '临潼区', '未央区', '新城区', '阎良区', '雁塔区', '长安区', '周至县'], '咸阳市': ['彬县', '淳化县', '泾阳县', '礼泉县', '乾县', '秦都区', '三原县', '渭城区', '武功县', '兴平市', '旬邑县', '杨陵区', '永寿县', '长武县'], '延安市': ['安塞县', '宝塔区', '富县', '甘泉县', '黄陵县', '黄龙县', '洛川县', '吴起县', '延川县', '延长县', '宜川县', '志丹县', '子长县'], '榆林市': ['定边县', '府谷县', '横山县', '佳县', '靖边县', '米脂县', '清涧县', '神木县', '绥德县', '吴堡县', '榆阳区', '子洲县'] }, '吉林省': { '长春市': ['南关区', '宽城区', '朝阳区', '二道区', '绿园区', '双阳区', '农安县', '九台市', '榆树市', '德惠市'], '吉林市': ['昌邑区', '龙潭区', '船营区', '丰满区', '永吉县', '蛟河市', '桦甸市', '舒兰市', '磐石市'], '四平市': ['铁西区', '铁东区', '梨树县', '伊通满族自治县', '公主岭市', '双辽市'], '辽源市': ['龙山区', '西安区', '东丰县', '东辽县'], '通化市': ['东昌区', '二道江区', '通化县', '辉南县', '柳河县', '梅河口市', '集安市'], '白山市': ['八道江区', '抚松县', '靖宇县', '长白朝鲜族自治县', '江源县', '临江市'], '松原市': ['宁江区', '前郭尔罗斯蒙古族自治县', '长岭县', '乾安县', '扶余县'], '白城市': ['洮北区', '镇赉县', '通榆县', '洮南市', '大安市'], '延边朝鲜族自治州': ['延吉市', '图们市', '敦化市', '珲春市', '龙井市', '和龙市', '汪清县', '安图县'] }, '黑龙江省': { '哈尔滨市': ['道里区', '南岗区', '道外区', '香坊区', '动力区', '平房区', '松北区', '呼兰区', '依兰县', '方正县', '宾县', '巴彦县', '木兰县', '通河县', '延寿县', '阿城市', '双城市', '尚志市', '五常市'], '齐齐哈尔市': ['龙沙区', '建华区', '铁锋区', '昂昂溪区', '富拉尔基区', '碾子山区', '梅里斯达斡尔族区', '龙江县', '依安县', '泰来县', '甘南县', '富裕县', '克山县', '克东县', '拜泉县', '讷河市'], '鸡西市': ['鸡冠区', '恒山区', '滴道区', '梨树区', '城子河区', '麻山区', '鸡东县', '虎林市', '密山市'], '鹤岗市': ['向阳区', '工农区', '南山区', '兴安区', '东山区', '兴山区', '萝北县', '绥滨县'], '双鸭山市': ['尖山区', '岭东区', '四方台区', '宝山区', '集贤县', '友谊县', '宝清县', '饶河县'], '大庆市': ['萨尔图区', '龙凤区', '让胡路区', '红岗区', '大同区', '肇州县', '肇源县', '林甸县', '杜尔伯特蒙古族自治县'], '伊春市': ['伊春区', '南岔区', '友好区', '西林区', '翠峦区', '新青区', '美溪区', '金山屯区', '五营区', '乌马河区', '汤旺河区', '带岭区', '乌伊岭区', '红星区', '上甘岭区', '嘉荫县', '铁力市'], '佳木斯市': ['永红区', '向阳区', '前进区', '东风区', '郊区', '桦南县', '桦川县', '汤原县', '抚远县', '同江市', '富锦市'], '七台河市': ['新兴区', '桃山区', '茄子河区', '勃利县'], '牡丹江市': ['东安区', '阳明区', '爱民区', '西安区', '东宁县', '林口县', '绥芬河市', '海林市', '宁安市', '穆棱市'], '黑河市': ['爱辉区', '嫩江县', '逊克县', '孙吴县', '北安市', '五大连池市'], '绥化市': ['北林区', '望奎县', '兰西县', '青冈县', '庆安县', '明水县', '绥棱县', '安达市', '肇东市', '海伦市'], '大兴安岭地区': ['呼玛县', '塔河县', '漠河县'] }, '海南省': { '海口市': ['秀英区', '龙华区', '琼山区', '美兰区'], '三亚市': ['三亚市'], '省直辖县级行政单位': ['五指山市', '琼海市', '儋州市', '文昌市', '万宁市', '东方市', '定安县', '屯昌县', '澄迈县', '临高县', '白沙黎族自治县', '昌江黎族自治县', '乐东黎族自治县', '陵水黎族自治县', '保亭黎族苗族自治县', '琼中黎族苗族自治县', '西沙群岛', '南沙群岛', '中沙群岛的岛礁及其海域'] }, '宁夏回族自治区': { '固原市': ['泾源县', '隆德县', '彭阳县', '西吉县', '原州区'], '石嘴山市': ['大武口区', '惠农区', '平罗县'], '吴忠市': ['红寺堡区', '利通区', '青铜峡市', '同心县', '盐池县'], '银川市': ['贺兰县', '金凤区', '灵武市', '西夏区', '兴庆区', '永宁县'], '中卫市': ['海原县', '沙坡头区', '中宁县'] }, '广西壮族自治区': { '南宁市': ['青秀区', '兴宁区', '西乡塘区', '江南区', '良庆区', '邕宁区', '武鸣县', '隆安县', '马山县', '上林县', '宾阳县', '横县'], '柳州市': ['柳北区', '柳南区', '城中区', '鱼峰区', '柳城县', '柳江县', '鹿寨县', '融安县', '融水苗族自治县', '三江侗族自治县'], '桂林市': ['象山区', '秀峰区', '叠彩区', '七星区', '雁山区', '临桂区', '阳朔县', '灵川县', '全州县', '平乐县', '兴安县', '灌阳县', '荔浦县', '资源县', '永福县', '龙胜各族自治县', '恭城瑶族自治县'], '梧州市': ['长洲区', '万秀区', '龙圩区', '岑溪市', '苍梧县', '蒙山县', '藤县'], '北海市': ['海城区', '银海区', '铁山港区', '合浦县'], '防城港市': ['港口区', '防城区', '东兴市', '上思县'], '钦州市': ['钦南区', '钦北区', '灵山县', '浦北县'], '贵港市': ['港北区', '港南区', '覃塘区', '桂平市', '平南县　　'], '玉林市': ['玉州区', '福绵区', '北流市', '容县', '陆川县', '博白县', '兴业县　　'], '百色市': ['右江区', '田阳县', '田东县', '平果县', '德保县', '靖西县', '那坡县', '凌云县', '乐业县', '田林县', '西林县', '隆林各族自治县'], '贺州市': ['八步区', '平桂管理区', '昭平县', '钟山县', '富川瑶族自治县'], '河池市': ['金城江区', '宜州市', '南丹县', '天峨县', '凤山县', '东兰县', '巴马瑶族自治县', '都安瑶族自治县', '大化瑶族自治县', '罗城仫佬族自治县', '环江毛南族自治县'], '来宾市': ['兴宾区', '合山市', '象州县', '武宣县', '忻城县', '金秀瑶族自治县'], '崇左市': ['江州区', '凭祥市', '扶绥县', '宁明县', '龙州县', '大新县', '天等县'] }, '内蒙古自治区': { '呼和浩特市': ['新城区', '回民区', '玉泉区', '赛罕区', '土默特左旗', '托克托县', '和林格尔县', '清水河县', '武川县'], '包头市': ['东河区', '昆都仑区', '青山区', '石拐区', '白云矿区', '九原区', '土默特右旗', '固阳县', '达尔罕茂明安联合旗'], '乌海市': ['海勃湾区', '海南区', '乌达区'], '赤峰市': ['红山区', '元宝山区', '松山区', '阿鲁科尔沁旗', '巴林左旗', '巴林右旗', '林西县', '克什克腾旗', '翁牛特旗', '喀喇沁旗', '宁城县', '敖汉旗'], '通辽市': ['科尔沁区', '科尔沁左翼中旗', '科尔沁左翼后旗', '开鲁县', '库伦旗', '奈曼旗', '扎鲁特旗', '霍林郭勒市'], '鄂尔多斯市': ['东胜区', '达拉特旗', '准格尔旗', '鄂托克前旗', '鄂托克旗', '杭锦旗', '乌审旗', '伊金霍洛旗'], '呼伦贝尔市': ['海拉尔区', '阿荣旗', '莫力达瓦达斡尔族自治旗', '鄂伦春自治旗', '鄂温克族自治旗', '陈巴尔虎旗', '新巴尔虎左旗', '新巴尔虎右旗', '满洲里市', '牙克石市', '扎兰屯市', '额尔古纳市', '根河市'], '巴彦淖尔市': ['临河区', '五原县', '磴口县', '乌拉特前旗', '乌拉特中旗', '乌拉特后旗', '杭锦后旗'], '乌兰察布市': ['集宁区', '卓资县', '化德县', '商都县', '兴和县', '凉城县', '察哈尔右翼前旗', '察哈尔右翼中旗', '察哈尔右翼后旗', '四子王旗', '丰镇市'], '兴安盟': ['乌兰浩特市', '阿尔山市', '科尔沁右翼前旗', '科尔沁右翼中旗', '扎赉特旗', '突泉县'], '锡林郭勒盟': ['二连浩特市', '锡林浩特市', '阿巴嘎旗', '苏尼特左旗', '苏尼特右旗', '东乌珠穆沁旗', '西乌珠穆沁旗', '太仆寺旗', '镶黄旗', '正镶白旗', '正蓝旗', '多伦县'], '阿拉善盟': ['阿拉善左旗', '阿拉善右旗', '额济纳旗'] }, '新疆维吾尔自治区': { '阿克苏地区': ['阿克苏市', '阿瓦提县', '拜城县', '柯坪县', '库车县', '沙雅县  ', '温宿县', '乌什县', '新和县  ', '阿勒泰市', '布尔津县', '福海县  ', '富蕴县  ', '哈巴河县', '吉木乃县', '青河县'], '巴音郭楞蒙古自治州': ['博湖县', '和静县', '和硕县', '库尔勒市', '轮台县', '且末县', '若羌县', '尉犁县', '焉耆回族自治县', '阿拉山口市', '博乐市', '精河县', '温泉县'], '昌吉回族自治州': ['昌吉市', '阜康市', '呼图壁县', '吉木萨尔县', '玛纳斯县', '木垒哈萨克自治县', '奇台县'], '哈密地区': ['巴里坤哈萨克自治县', '哈密市', '伊吾县'], '和田地区': ['策勒县', '和田市', '和田县', '洛浦县', '民丰县', '墨玉县', '皮山县', '于田县'], '喀什地区': ['巴楚县', '伽师县', '喀什市', '麦盖提县', '莎车县', '疏附县', '疏勒县', '塔什库尔干塔吉克自治县', '叶城县', '英吉沙县', '岳普湖县', '泽普县'], '克拉玛依市': ['白碱滩区', '独山子区', '克拉玛依区', '乌尔禾区'], '克孜勒苏柯尔克孜自治州': ['阿合奇县', '阿克陶县', '阿图什市', '乌恰县'], '阿拉尔市': ['阿拉尔市'], '北屯市': ['北屯市'], '石河子市': ['石河子市'], '铁门关市': ['铁门关市'], '图木舒克市': ['图木舒克市'], '五家渠市': ['五家渠市'], '塔城地区': ['额敏县', '和布克赛尔蒙古自治县', '沙湾县', '塔城市', '托里县', '乌苏市', '裕民县'], '吐鲁番地区': ['鄯善县', '吐鲁番市', '托克逊县'], '乌鲁木齐市': ['达坂城区', '米东区', '沙依巴克区', '水磨沟区', '天山区', '头屯河区', '乌鲁木齐县', '新市区'], '伊犁哈萨克自治州': ['察布查尔锡伯自治县', '巩留县', '霍城县', '奎屯市', '尼勒克县', '特克斯县', '新源县', '伊宁市', '伊宁县', '昭苏县'] }, '西藏自治区': { '阿里地区': ['措勤县', '噶尔县', '改则县', '革吉县', '普兰县', '日土县', '札达县'], '昌都地区': ['八宿县', '边坝县', '察雅县', '昌都县', '丁青县', '贡觉县', '江达县', '类乌齐县', '洛隆县', '芒康县', '左贡县'], '拉萨市': ['城关区', '达孜县', '当雄县', '堆龙德庆县', '林周县', '墨竹工卡县', '尼木县', '曲水县'], '林芝地区': ['波密县', '察隅县', '工布江达县', '朗县', '林芝县', '米林县', '墨脱县'], '那曲地区': ['安多县', '巴青县', '班戈县', '比如县', '嘉黎县', '那曲县', '尼玛县', '聂荣县', '申扎县', '双湖县', '索县'], '日喀则地区': ['昂仁县', '白朗县', '定结县', '定日县', '岗巴县', '吉隆县', '江孜县', '康马县', '拉孜县', '南木林县', '聂拉木县', '仁布县', '日喀则市', '萨嘎县', '萨迦县', '谢通门县', '亚东县', '仲巴县'], '山南地区': ['措美县', '错那县', '贡嘎县', '加查县', '浪卡子县', '隆子县', '洛扎县', '乃东县', '琼结县', '曲松县', '桑日县', '扎囊县'] }, '台湾省': { '台湾': [] }, '澳门特别行政区': { '澳门特别行政区': [] }, '香港特别行政区': { '香港特别行政区': [] } };


/***/ }),

/***/ "./src/app/utils/area.util.ts":
/*!************************************!*\
  !*** ./src/app/utils/area.util.ts ***!
  \************************************/
/*! exports provided: getProvinces, getCitiesByProvince, getAreaByCity */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getProvinces", function() { return getProvinces; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCitiesByProvince", function() { return getCitiesByProvince; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAreaByCity", function() { return getAreaByCity; });
/* harmony import */ var _area_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./area.data */ "./src/app/utils/area.data.ts");

var getProvinces = function () {
    var provinces = [];
    for (var province in _area_data__WEBPACK_IMPORTED_MODULE_0__["city_data"]) {
        provinces.push(province);
    }
    return provinces;
};
var getCitiesByProvince = function (province) {
    if (!province || !_area_data__WEBPACK_IMPORTED_MODULE_0__["city_data"][province]) {
        return [];
    }
    var cities = [];
    var val = _area_data__WEBPACK_IMPORTED_MODULE_0__["city_data"][province];
    for (var city in val) {
        cities.push(city);
    }
    return cities;
};
var getAreaByCity = function (province, city) {
    if (!province || !_area_data__WEBPACK_IMPORTED_MODULE_0__["city_data"][province] || !_area_data__WEBPACK_IMPORTED_MODULE_0__["city_data"][province][city]) {
        return [];
    }
    return _area_data__WEBPACK_IMPORTED_MODULE_0__["city_data"][province][city];
};


/***/ }),

/***/ "./src/app/utils/date.util.ts":
/*!************************************!*\
  !*** ./src/app/utils/date.util.ts ***!
  \************************************/
/*! exports provided: isValidDate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidDate", function() { return isValidDate; });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(date_fns__WEBPACK_IMPORTED_MODULE_0__);

var isValidDate = function (val) {
    var date = Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["parse"])(val);
    return Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isDate"])(date)
        && Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isValid"])(date)
        && !Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["isFuture"])(date)
        && Object(date_fns__WEBPACK_IMPORTED_MODULE_0__["differenceInYears"])(Date.now(), date) < 150;
};


/***/ }),

/***/ "./src/app/utils/debug.util.ts":
/*!*************************************!*\
  !*** ./src/app/utils/debug.util.ts ***!
  \*************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");


// Observable.prototype.debug = function(message: string) {
// 	return this.do(
// 		(next) => {
// 			if (!environment.production) {
// 				console.log(message, next);
// 			}
// 		},
// 		(err) => {
// 			if (!environment.production) {
// 				console.error('ERROR>>', message, err);
// 			}
// 		},
// 		() => {
// 			if (!environment.production) {
// 				console.log("Completed - ");
// 			}
// 		}
// 	);
// }
rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"].prototype.debug = function (message) {
    var _this = this;
    return new rxjs__WEBPACK_IMPORTED_MODULE_0__["Observable"](function (subscriber) {
        _this.subscribe({
            next: function (value) {
                if (!_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
                    console.log(message, value);
                }
                subscriber.next(value);
            },
            error: function (err) {
                if (!_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
                    console.error('ERROR>>>', message, err);
                }
                subscriber.error(err);
            },
            complete: function () {
                if (!_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
                    console.log('Completed - ');
                }
                subscriber.complete();
            },
        });
    });
};


/***/ }),

/***/ "./src/app/utils/identity.data.ts":
/*!****************************************!*\
  !*** ./src/app/utils/identity.data.ts ***!
  \****************************************/
/*! exports provided: GB2260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GB2260", function() { return GB2260; });
var GB2260 = { '110000': '北京市', '110100': '北京市市辖区', '110101': '北京市东城区', '110102': '北京市西城区', '110103': '北京市崇文区', '110104': '北京市宣武区', '110105': '北京市朝阳区', '110106': '北京市丰台区', '110107': '北京市石景山区', '110108': '北京市海淀区', '110109': '北京市门头沟区', '110111': '北京市房山区', '110112': '北京市通州区', '110113': '北京市顺义区', '110200': '北京市县', '110221': '北京市昌平县', '110224': '北京市大兴县', '110226': '北京市平谷县', '110227': '北京市怀柔县', '110228': '北京市密云县', '110229': '北京市延庆县', '120000': '天津市', '120100': '天津市市辖区', '120101': '天津市和平区', '120102': '天津市河东区', '120103': '天津市河西区', '120104': '天津市南开区', '120105': '天津市河北区', '120106': '天津市红桥区', '120107': '天津市塘沽区', '120108': '天津市汉沽区', '120109': '天津市大港区', '120110': '天津市东丽区', '120111': '天津市西青区', '120112': '天津市津南区', '120113': '天津市北辰区', '120200': '天津市县', '120221': '天津市宁河县', '120222': '天津市武清县', '120223': '天津市静海县', '120224': '天津市宝坻县', '120225': '天津市蓟县', '130000': '河北省', '130100': '河北省石家庄市', '130101': '河北省石家庄市市辖区', '130102': '河北省石家庄市长安区', '130103': '河北省石家庄市桥东区', '130104': '河北省石家庄市桥西区', '130105': '河北省石家庄市新华区', '130106': '河北省石家庄市郊区', '130107': '河北省石家庄市井陉矿区', '130121': '河北省石家庄市井陉县', '130123': '河北省石家庄市正定县', '130124': '河北省石家庄市栾城县', '130125': '河北省石家庄市行唐县', '130126': '河北省石家庄市灵寿县', '130127': '河北省石家庄市高邑县', '130128': '河北省石家庄市深泽县', '130129': '河北省石家庄市赞皇县', '130130': '河北省石家庄市无极县', '130131': '河北省石家庄市平山县', '130132': '河北省石家庄市元氏县', '130133': '河北省石家庄市赵县', '130181': '河北省石家庄市辛集市', '130182': '河北省石家庄市藁城市', '130183': '河北省石家庄市晋州市', '130184': '河北省石家庄市新乐市', '130185': '河北省石家庄市鹿泉市', '130200': '河北省唐山市', '130201': '河北省唐山市市辖区', '130202': '河北省唐山市路南区', '130203': '河北省唐山市路北区', '130204': '河北省唐山市古冶区', '130205': '河北省唐山市开平区', '130206': '河北省唐山市新区', '130221': '河北省唐山市丰润县', '130223': '河北省唐山市滦县', '130224': '河北省唐山市滦南县', '130225': '河北省唐山市乐亭县', '130227': '河北省唐山市迁西县', '130229': '河北省唐山市玉田县', '130230': '河北省唐山市唐海县', '130281': '河北省唐山市遵化市', '130282': '河北省唐山市丰南市', '130283': '河北省唐山市迁安市', '130300': '河北省秦皇岛市秦皇岛市', '130301': '河北省秦皇岛市市辖区', '130302': '河北省秦皇岛市海港区', '130303': '河北省秦皇岛市山海关区', '130304': '河北省秦皇岛市北戴河区', '130321': '河北省秦皇岛市青龙满族自治县', '130322': '河北省秦皇岛市昌黎县', '130323': '河北省秦皇岛市抚宁县', '130324': '河北省秦皇岛市卢龙县', '130400': '河北省邯郸市邯郸市', '130401': '河北省邯郸市市辖区', '130402': '河北省邯郸市邯山区', '130403': '河北省邯郸市丛台区', '130404': '河北省邯郸市复兴区', '130406': '河北省邯郸市峰峰矿区', '130421': '河北省邯郸市邯郸县', '130423': '河北省邯郸市临漳县', '130424': '河北省邯郸市成安县', '130425': '河北省邯郸市大名县', '130426': '河北省邯郸市涉县', '130427': '河北省邯郸市磁县', '130428': '河北省邯郸市肥乡县', '130429': '河北省邯郸市永年县', '130430': '河北省邯郸市邱县', '130431': '河北省邯郸市鸡泽县', '130432': '河北省邯郸市广平县', '130433': '河北省邯郸市馆陶县', '130434': '河北省邯郸市魏县', '130435': '河北省邯郸市曲周县', '130481': '河北省邯郸市武安市', '130500': '河北省邢台市', '130501': '河北省邢台市市辖区', '130502': '河北省邢台市桥东区', '130503': '河北省邢台市桥西区', '130521': '河北省邢台市邢台县', '130522': '河北省邢台市临城县', '130523': '河北省邢台市内丘县', '130524': '河北省邢台市柏乡县', '130525': '河北省邢台市隆尧县', '130526': '河北省邢台市任县', '130527': '河北省邢台市南和县', '130528': '河北省邢台市宁晋县', '130529': '河北省邢台市巨鹿县', '130530': '河北省邢台市新河县', '130531': '河北省邢台市广宗县', '130532': '河北省邢台市平乡县', '130533': '河北省邢台市威县', '130534': '河北省邢台市清河县', '130535': '河北省邢台市临西县', '130581': '河北省邢台市南宫市', '130582': '河北省邢台市沙河市', '130600': '河北省保定市', '130601': '河北省保定市市辖区', '130602': '河北省保定市新市区', '130603': '河北省保定市北市区', '130604': '河北省保定市南市区', '130621': '河北省保定市满城县', '130622': '河北省保定市清苑县', '130623': '河北省保定市涞水县', '130624': '河北省保定市阜平县', '130625': '河北省保定市徐水县', '130626': '河北省保定市定兴县', '130627': '河北省保定市唐县', '130628': '河北省保定市高阳县', '130629': '河北省保定市容城县', '130630': '河北省保定市涞源县', '130631': '河北省保定市望都县', '130632': '河北省保定市安新县', '130633': '河北省保定市易县', '130634': '河北省保定市曲阳县', '130635': '河北省保定市蠡县', '130636': '河北省保定市顺平县', '130637': '河北省保定市博野县', '130638': '河北省保定市雄县', '130681': '河北省保定市涿州市', '130682': '河北省保定市定州市', '130683': '河北省保定市安国市', '130684': '河北省保定市高碑店市', '130700': '河北省张家口市', '130701': '河北省张家口市市辖区', '130702': '河北省张家口市桥东区', '130703': '河北省张家口市桥西区', '130705': '河北省张家口市宣化区', '130706': '河北省张家口市下花园区', '130721': '河北省张家口市宣化县', '130722': '河北省张家口市张北县', '130723': '河北省张家口市康保县', '130724': '河北省张家口市沽源县', '130725': '河北省张家口市尚义县', '130726': '河北省张家口市蔚县', '130727': '河北省张家口市阳原县', '130728': '河北省张家口市怀安县', '130729': '河北省张家口市万全县', '130730': '河北省张家口市怀来县', '130731': '河北省张家口市涿鹿县', '130732': '河北省张家口市赤城县', '130733': '河北省张家口市崇礼县', '130800': '河北省承德市', '130801': '河北省承德市市辖区', '130802': '河北省承德市双桥区', '130803': '河北省承德市双滦区', '130804': '河北省承德市鹰手营子矿区', '130821': '河北省承德市承德县', '130822': '河北省承德市兴隆县', '130823': '河北省承德市平泉县', '130824': '河北省承德市滦平县', '130825': '河北省承德市隆化县', '130826': '河北省承德市丰宁满族自治县', '130827': '河北省承德市宽城满族自治县', '130828': '河北省承德市围场满族蒙古族自治县', '130900': '河北省沧州市', '130901': '河北省沧州市市辖区', '130902': '河北省沧州市新华区', '130903': '河北省沧州市运河区', '130921': '河北省沧州市沧县', '130922': '河北省沧州市青县', '130923': '河北省沧州市东光县', '130924': '河北省沧州市海兴县', '130925': '河北省沧州市盐山县', '130926': '河北省沧州市肃宁县', '130927': '河北省沧州市南皮县', '130928': '河北省沧州市吴桥县', '130929': '河北省沧州市献县', '130930': '河北省沧州市孟村回族自治县', '130981': '河北省沧州市泊头市', '130982': '河北省沧州市任丘市', '130983': '河北省沧州市黄骅市', '130984': '河北省沧州市河间市', '131000': '河北省廊坊市', '131001': '河北省廊坊市市辖区', '131002': '河北省廊坊市安次区', '131022': '河北省廊坊市固安县', '131023': '河北省廊坊市永清县', '131024': '河北省廊坊市香河县', '131025': '河北省廊坊市大城县', '131026': '河北省廊坊市文安县', '131028': '河北省廊坊市大厂回族自治县', '131081': '河北省廊坊市霸州市', '131082': '河北省廊坊市三河市', '131100': '河北省衡水市', '131101': '河北省衡水市市辖区', '131102': '河北省衡水市桃城区', '131121': '河北省衡水市枣强县', '131122': '河北省衡水市武邑县', '131123': '河北省衡水市武强县', '131124': '河北省衡水市饶阳县', '131125': '河北省衡水市安平县', '131126': '河北省衡水市故城县', '131127': '河北省衡水市景县', '131128': '河北省衡水市阜城县', '131181': '河北省衡水市冀州市', '131182': '河北省衡水市深州市', '140000': '山西省', '140100': '山西省太原市', '140101': '山西省太原市市辖区', '140105': '山西省太原市小店区', '140106': '山西省太原市迎泽区', '140107': '山西省太原市杏花岭区', '140108': '山西省太原市尖草坪区', '140109': '山西省太原市万柏林区', '140110': '山西省太原市晋源区', '140121': '山西省太原市清徐县', '140122': '山西省太原市阳曲县', '140123': '山西省太原市娄烦县', '140181': '山西省太原市古交市', '140200': '山西省大同市', '140201': '山西省大同市市辖区', '140202': '山西省大同市城区', '140203': '山西省大同市矿区', '140211': '山西省大同市南郊区', '140212': '山西省大同市新荣区', '140221': '山西省大同市阳高县', '140222': '山西省大同市天镇县', '140223': '山西省大同市广灵县', '140224': '山西省大同市灵丘县', '140225': '山西省大同市浑源县', '140226': '山西省大同市左云县', '140227': '山西省大同市大同县', '140300': '山西省阳泉市', '140301': '山西省阳泉市市辖区', '140302': '山西省阳泉市城区', '140303': '山西省阳泉市矿区', '140311': '山西省阳泉市郊区', '140321': '山西省阳泉市平定县', '140322': '山西省阳泉市盂县', '140400': '山西省长治市', '140401': '山西省长治市市辖区', '140402': '山西省长治市城区', '140411': '山西省长治市郊区', '140421': '山西省长治市长治县', '140423': '山西省长治市襄垣县', '140424': '山西省长治市屯留县', '140425': '山西省长治市平顺县', '140426': '山西省长治市黎城县', '140427': '山西省长治市壶关县', '140428': '山西省长治市长子县', '140429': '山西省长治市武乡县', '140430': '山西省长治市沁县', '140431': '山西省长治市沁源县', '140481': '山西省长治市潞城市', '140500': '山西省晋城市', '140501': '山西省晋城市市辖区', '140502': '山西省晋城市城区', '140521': '山西省晋城市沁水县', '140522': '山西省晋城市阳城县', '140524': '山西省晋城市陵川县', '140525': '山西省晋城市泽州县', '140581': '山西省晋城市高平市', '140600': '山西省晋城市朔州市', '140601': '山西省晋城市市辖区', '140602': '山西省晋城市朔城区', '140603': '山西省晋城市平鲁区', '140621': '山西省晋城市山阴县', '140622': '山西省晋城市应县', '140623': '山西省晋城市右玉县', '140624': '山西省晋城市怀仁县', '142200': '山西省忻州地区', '142201': '山西省忻州地区忻州市', '142202': '山西省忻州地区原平市', '142222': '山西省忻州地区定襄县', '142223': '山西省忻州地区五台县', '142225': '山西省忻州地区代县', '142226': '山西省忻州地区繁峙县', '142227': '山西省忻州地区宁武县', '142228': '山西省忻州地区静乐县', '142229': '山西省忻州地区神池县', '142230': '山西省忻州地区五寨县', '142231': '山西省忻州地区岢岚县', '142232': '山西省忻州地区河曲县', '142233': '山西省忻州地区保德县', '142234': '山西省忻州地区偏关县', '142300': '山西省忻州地区吕梁地区', '142301': '山西省忻州地区孝义市', '142302': '山西省忻州地区离石市', '142303': '山西省忻州地区汾阳市', '142322': '山西省忻州地区文水县', '142323': '山西省忻州地区交城县', '142325': '山西省忻州地区兴县', '142326': '山西省忻州地区临县', '142327': '山西省忻州地区柳林县', '142328': '山西省忻州地区石楼县', '142329': '山西省忻州地区岚县', '142330': '山西省忻州地区方山县', '142332': '山西省忻州地区中阳县', '142333': '山西省忻州地区交口县', '142400': '山西省晋中地区', '142401': '山西省晋中地区榆次市', '142402': '山西省晋中地区介休市', '142421': '山西省晋中地区榆社县', '142422': '山西省晋中地区左权县', '142423': '山西省晋中地区和顺县', '142424': '山西省晋中地区昔阳县', '142427': '山西省晋中地区寿阳县', '142429': '山西省晋中地区太谷县', '142430': '山西省晋中地区祁县', '142431': '山西省晋中地区平遥县', '142433': '山西省晋中地区灵石县', '142600': '山西省临汾地区', '142601': '山西省临汾地区临汾市', '142602': '山西省临汾地区侯马市', '142603': '山西省临汾地区霍州市', '142621': '山西省临汾地区曲沃县', '142622': '山西省临汾地区翼城县', '142623': '山西省临汾地区襄汾县', '142625': '山西省临汾地区洪洞县', '142627': '山西省临汾地区古县', '142628': '山西省临汾地区安泽县', '142629': '山西省临汾地区浮山县', '142630': '山西省临汾地区吉县', '142631': '山西省临汾地区乡宁县', '142632': '山西省临汾地区蒲县', '142633': '山西省临汾地区大宁县', '142634': '山西省临汾地区永和县', '142635': '山西省临汾地区隰县', '142636': '山西省临汾地区汾西县', '142700': '山西省运城地区', '142701': '山西省运城地区运城市', '142702': '山西省运城地区永济市', '142703': '山西省运城地区河津市', '142723': '山西省运城地区芮城县', '142724': '山西省运城地区临猗县', '142725': '山西省运城地区万荣县', '142726': '山西省运城地区新绛县', '142727': '山西省运城地区稷山县', '142729': '山西省运城地区闻喜县', '142730': '山西省运城地区夏县', '142731': '山西省运城地区绛县', '142732': '山西省运城地区平陆县', '142733': '山西省运城地区垣曲县', '150000': '内蒙古自治区', '150100': '内蒙古自治区呼和浩特市', '150101': '内蒙古自治区呼和浩特市市辖区', '150102': '内蒙古自治区呼和浩特市新城区', '150103': '内蒙古自治区呼和浩特市回民区', '150104': '内蒙古自治区呼和浩特市玉泉区', '150105': '内蒙古自治区呼和浩特市郊区', '150121': '内蒙古自治区呼和浩特市土默特左旗', '150122': '内蒙古自治区呼和浩特市托克托县', '150123': '内蒙古自治区呼和浩特市和林格尔县', '150124': '内蒙古自治区呼和浩特市清水河县', '150125': '内蒙古自治区呼和浩特市武川县', '150200': '内蒙古自治区包头市', '150201': '内蒙古自治区包头市市辖区', '150202': '内蒙古自治区包头市东河区', '150203': '内蒙古自治区包头市昆都伦区', '150204': '内蒙古自治区包头市青山区', '150205': '内蒙古自治区包头市石拐矿区', '150206': '内蒙古自治区包头市白云矿区', '150207': '内蒙古自治区包头市郊区', '150221': '内蒙古自治区包头市土默特右旗', '150222': '内蒙古自治区包头市固阳县', '150223': '内蒙古自治区包头市达尔罕茂明安联合旗', '150300': '内蒙古自治区乌海市', '150301': '内蒙古自治区乌海市市辖区', '150302': '内蒙古自治区乌海市海勃湾区', '150303': '内蒙古自治区乌海市海南区', '150304': '内蒙古自治区乌海市乌达区', '150400': '内蒙古自治区赤峰市', '150401': '内蒙古自治区赤峰市市辖区', '150402': '内蒙古自治区赤峰市红山区', '150403': '内蒙古自治区赤峰市元宝山区', '150404': '内蒙古自治区赤峰市松山区', '150421': '内蒙古自治区赤峰市阿鲁科尔沁旗', '150422': '内蒙古自治区赤峰市巴林左旗', '150423': '内蒙古自治区赤峰市巴林右旗', '150424': '内蒙古自治区赤峰市林西县', '150425': '内蒙古自治区赤峰市克什克腾旗', '150426': '内蒙古自治区赤峰市翁牛特旗', '150428': '内蒙古自治区赤峰市喀喇沁旗', '150429': '内蒙古自治区赤峰市宁城县', '150430': '内蒙古自治区赤峰市敖汉旗', '152100': '内蒙古自治区呼伦贝尔盟', '152101': '内蒙古自治区呼伦贝尔盟海拉尔市', '152102': '内蒙古自治区呼伦贝尔盟满洲里市', '152103': '内蒙古自治区呼伦贝尔盟扎兰屯市', '152104': '内蒙古自治区呼伦贝尔盟牙克石市', '152105': '内蒙古自治区呼伦贝尔盟根河市', '152106': '内蒙古自治区呼伦贝尔盟额尔古纳市', '152122': '内蒙古自治区呼伦贝尔盟阿荣旗', '152123': '内蒙古自治区呼伦贝尔盟莫力达瓦达斡尔族自治旗', '152127': '内蒙古自治区呼伦贝尔盟鄂伦春自治旗', '152128': '内蒙古自治区呼伦贝尔盟鄂温克族自治旗', '152129': '内蒙古自治区呼伦贝尔盟新巴尔虎右旗', '152130': '内蒙古自治区呼伦贝尔盟新巴尔虎左旗', '152131': '内蒙古自治区呼伦贝尔盟陈巴尔虎旗', '152200': '内蒙古自治区兴安盟', '152201': '内蒙古自治区兴安盟乌兰浩特市', '152202': '内蒙古自治区兴安盟阿尔山市', '152221': '内蒙古自治区兴安盟科尔沁右翼前旗', '152222': '内蒙古自治区兴安盟科尔沁右翼中旗', '152223': '内蒙古自治区兴安盟扎赉特旗', '152224': '内蒙古自治区兴安盟突泉县', '152300': '内蒙古自治区哲里木盟', '152301': '内蒙古自治区哲里木盟通辽市', '152302': '内蒙古自治区哲里木盟霍林郭勒市', '152322': '内蒙古自治区哲里木盟科尔沁左翼中旗', '152323': '内蒙古自治区哲里木盟科尔沁左翼后旗', '152324': '内蒙古自治区哲里木盟开鲁县', '152325': '内蒙古自治区哲里木盟库伦旗', '152326': '内蒙古自治区哲里木盟奈曼旗', '152327': '内蒙古自治区哲里木盟扎鲁特旗', '152500': '内蒙古自治区锡林郭勒盟', '152501': '内蒙古自治区锡林郭勒盟二连浩特市', '152502': '内蒙古自治区锡林郭勒盟锡林浩特市', '152522': '内蒙古自治区锡林郭勒盟阿巴嘎旗', '152523': '内蒙古自治区锡林郭勒盟苏尼特左旗', '152524': '内蒙古自治区锡林郭勒盟苏尼特右旗', '152525': '内蒙古自治区锡林郭勒盟东乌珠穆沁旗', '152526': '内蒙古自治区锡林郭勒盟西乌珠穆沁旗', '152527': '内蒙古自治区锡林郭勒盟太仆寺旗', '152528': '内蒙古自治区锡林郭勒盟镶黄旗', '152529': '内蒙古自治区锡林郭勒盟正镶白旗', '152530': '内蒙古自治区锡林郭勒盟正蓝旗', '152531': '内蒙古自治区锡林郭勒盟多伦县', '152600': '内蒙古自治区乌兰察布盟', '152601': '内蒙古自治区乌兰察布盟集宁市', '152602': '内蒙古自治区乌兰察布盟丰镇市', '152624': '内蒙古自治区乌兰察布盟卓资县', '152625': '内蒙古自治区乌兰察布盟化德县', '152626': '内蒙古自治区乌兰察布盟商都县', '152627': '内蒙古自治区乌兰察布盟兴和县', '152629': '内蒙古自治区乌兰察布盟凉城县', '152630': '内蒙古自治区乌兰察布盟察哈尔右翼前旗', '152631': '内蒙古自治区乌兰察布盟察哈尔右翼中旗', '152632': '内蒙古自治区乌兰察布盟察哈尔右翼后旗', '152634': '内蒙古自治区乌兰察布盟四子王旗', '152700': '内蒙古自治区伊克昭盟', '152701': '内蒙古自治区伊克昭盟东胜市', '152722': '内蒙古自治区伊克昭盟达拉特旗', '152723': '内蒙古自治区伊克昭盟准格尔旗', '152724': '内蒙古自治区伊克昭盟鄂托克前旗', '152725': '内蒙古自治区伊克昭盟鄂托克旗', '152726': '内蒙古自治区伊克昭盟杭锦旗', '152727': '内蒙古自治区伊克昭盟乌审旗', '152728': '内蒙古自治区伊克昭盟伊金霍洛旗', '152800': '内蒙古自治区巴彦淖尔盟', '152801': '内蒙古自治区巴彦淖尔盟临河市', '152822': '内蒙古自治区巴彦淖尔盟五原县', '152823': '内蒙古自治区巴彦淖尔盟磴口县', '152824': '内蒙古自治区巴彦淖尔盟乌拉特前旗', '152825': '内蒙古自治区巴彦淖尔盟乌拉特中旗', '152826': '内蒙古自治区巴彦淖尔盟乌拉特后旗', '152827': '内蒙古自治区巴彦淖尔盟杭锦后旗', '152900': '内蒙古自治区阿拉善盟', '152921': '内蒙古自治区阿拉善盟阿拉善左旗', '152922': '内蒙古自治区阿拉善盟阿拉善右旗', '152923': '内蒙古自治区阿拉善盟额济纳旗', '210000': '辽宁省', '210100': '辽宁省沈阳市', '210101': '辽宁省沈阳市市辖区', '210102': '辽宁省沈阳市和平区', '210103': '辽宁省沈阳市沈河区', '210104': '辽宁省沈阳市大东区', '210105': '辽宁省沈阳市皇姑区', '210106': '辽宁省沈阳市铁西区', '210111': '辽宁省沈阳市苏家屯区', '210112': '辽宁省沈阳市东陵区', '210113': '辽宁省沈阳市新城子区', '210114': '辽宁省沈阳市于洪区', '210122': '辽宁省沈阳市辽中县', '210123': '辽宁省沈阳市康平县', '210124': '辽宁省沈阳市法库县', '210181': '辽宁省沈阳市新民市', '210200': '辽宁省大连市', '210201': '辽宁省大连市市辖区', '210202': '辽宁省大连市中山区', '210203': '辽宁省大连市西岗区', '210204': '辽宁省大连市沙河口区', '210211': '辽宁省大连市甘井子区', '210212': '辽宁省大连市旅顺口区', '210213': '辽宁省大连市金州区', '210224': '辽宁省大连市长海县', '210281': '辽宁省大连市瓦房店市', '210282': '辽宁省大连市普兰店市', '210283': '辽宁省大连市庄河市', '210300': '辽宁省鞍山市', '210301': '辽宁省鞍山市市辖区', '210302': '辽宁省鞍山市铁东区', '210303': '辽宁省鞍山市铁西区', '210304': '辽宁省鞍山市立山区', '210311': '辽宁省鞍山市千山区', '210321': '辽宁省鞍山市台安县', '210323': '辽宁省鞍山市岫岩满族自治县', '210381': '辽宁省鞍山市海城市', '210400': '辽宁省抚顺市', '210401': '辽宁省抚顺市市辖区', '210402': '辽宁省抚顺市新抚区', '210403': '辽宁省抚顺市露天区', '210404': '辽宁省抚顺市望花区', '210411': '辽宁省抚顺市顺城区', '210421': '辽宁省抚顺市抚顺县', '210422': '辽宁省抚顺市新宾满族自治县', '210423': '辽宁省抚顺市清原满族自治县', '210500': '辽宁省本溪市', '210501': '辽宁省本溪市市辖区', '210502': '辽宁省本溪市平山区', '210503': '辽宁省本溪市溪湖区', '210504': '辽宁省本溪市明山区', '210505': '辽宁省本溪市南芬区', '210521': '辽宁省本溪市本溪满族自治县', '210522': '辽宁省本溪市桓仁满族自治县', '210600': '辽宁省丹东市', '210601': '辽宁省丹东市市辖区', '210602': '辽宁省丹东市元宝区', '210603': '辽宁省丹东市振兴区', '210604': '辽宁省丹东市振安区', '210624': '辽宁省丹东市宽甸满族自治县', '210681': '辽宁省丹东市东港市', '210682': '辽宁省丹东市凤城市', '210700': '辽宁省锦州市', '210701': '辽宁省锦州市市辖区', '210702': '辽宁省锦州市古塔区', '210703': '辽宁省锦州市凌河区', '210711': '辽宁省锦州市太和区', '210726': '辽宁省锦州市黑山县', '210727': '辽宁省锦州市义县', '210781': '辽宁省锦州市凌海市', '210782': '辽宁省锦州市北宁市', '210800': '辽宁省营口市', '210801': '辽宁省营口市市辖区', '210802': '辽宁省营口市站前区', '210803': '辽宁省营口市西市区', '210804': '辽宁省营口市鲅鱼圈区', '210811': '辽宁省营口市老边区', '210881': '辽宁省营口市盖州市', '210882': '辽宁省营口市大石桥市', '210900': '辽宁省阜新市', '210901': '辽宁省阜新市市辖区', '210902': '辽宁省阜新市海州区', '210903': '辽宁省阜新市新邱区', '210904': '辽宁省阜新市太平区', '210905': '辽宁省阜新市清河门区', '210911': '辽宁省阜新市细河区', '210921': '辽宁省阜新市阜新蒙古族自治县', '210922': '辽宁省阜新市彰武县', '211000': '辽宁省辽阳市', '211001': '辽宁省辽阳市市辖区', '211002': '辽宁省辽阳市白塔区', '211003': '辽宁省辽阳市文圣区', '211004': '辽宁省辽阳市宏伟区', '211005': '辽宁省辽阳市弓长岭区', '211011': '辽宁省辽阳市太子河区', '211021': '辽宁省辽阳市辽阳县', '211081': '辽宁省辽阳市灯塔市', '211100': '辽宁省盘锦市', '211101': '辽宁省盘锦市市辖区', '211102': '辽宁省盘锦市双台子区', '211103': '辽宁省盘锦市兴隆台区', '211121': '辽宁省盘锦市大洼县', '211122': '辽宁省盘锦市盘山县', '211200': '辽宁省铁岭市', '211201': '辽宁省铁岭市市辖区', '211202': '辽宁省铁岭市银州区', '211204': '辽宁省铁岭市清河区', '211221': '辽宁省铁岭市铁岭县', '211223': '辽宁省铁岭市西丰县', '211224': '辽宁省铁岭市昌图县', '211281': '辽宁省铁岭市铁法市', '211282': '辽宁省铁岭市开原市', '211300': '辽宁省朝阳市', '211301': '辽宁省朝阳市市辖区', '211302': '辽宁省朝阳市双塔区', '211303': '辽宁省朝阳市龙城区', '211321': '辽宁省朝阳市朝阳县', '211322': '辽宁省朝阳市建平县', '211324': '辽宁省朝阳市喀喇沁左翼蒙古族自治县', '211381': '辽宁省朝阳市北票市', '211382': '辽宁省朝阳市凌源市', '211400': '辽宁省葫芦岛市', '211401': '辽宁省葫芦岛市市辖区', '211402': '辽宁省葫芦岛市连山区', '211403': '辽宁省葫芦岛市龙港区', '211404': '辽宁省葫芦岛市南票区', '211421': '辽宁省葫芦岛市绥中县', '211422': '辽宁省葫芦岛市建昌县', '211481': '辽宁省葫芦岛市兴城市', '220000': '吉林省', '220100': '吉林省长春市', '220101': '吉林省长春市市辖区', '220102': '吉林省长春市南关区', '220103': '吉林省长春市宽城区', '220104': '吉林省长春市朝阳区', '220105': '吉林省长春市二道区', '220106': '吉林省长春市绿园区', '220112': '吉林省长春市双阳区', '220122': '吉林省长春市农安县', '220181': '吉林省长春市九台市', '220182': '吉林省长春市榆树市', '220183': '吉林省长春市德惠市', '220200': '吉林省吉林市', '220201': '吉林省吉林市市辖区', '220202': '吉林省吉林市昌邑区', '220203': '吉林省吉林市龙潭区', '220204': '吉林省吉林市船营区', '220211': '吉林省吉林市丰满区', '220221': '吉林省吉林市永吉县', '220281': '吉林省吉林市蛟河市', '220282': '吉林省吉林市桦甸市', '220283': '吉林省吉林市舒兰市', '220284': '吉林省吉林市磐石市', '220300': '吉林省四平市', '220301': '吉林省四平市市辖区', '220302': '吉林省四平市铁西区', '220303': '吉林省四平市铁东区', '220322': '吉林省四平市梨树县', '220323': '吉林省四平市伊通满族自治县', '220381': '吉林省四平市公主岭市', '220382': '吉林省四平市双辽市', '220400': '吉林省辽源市', '220401': '吉林省辽源市市辖区', '220402': '吉林省辽源市龙山区', '220403': '吉林省辽源市西安区', '220421': '吉林省辽源市东丰县', '220422': '吉林省辽源市东辽县', '220500': '吉林省通化市', '220501': '吉林省通化市市辖区', '220502': '吉林省通化市东昌区', '220503': '吉林省通化市二道江区', '220521': '吉林省通化市通化县', '220523': '吉林省通化市辉南县', '220524': '吉林省通化市柳河县', '220581': '吉林省通化市梅河口市', '220582': '吉林省通化市集安市', '220600': '吉林省白山市', '220601': '吉林省白山市市辖区', '220602': '吉林省白山市八道江区', '220621': '吉林省白山市抚松县', '220622': '吉林省白山市靖宇县', '220623': '吉林省白山市长白朝鲜族自治县', '220625': '吉林省白山市江源县', '220681': '吉林省白山市临江市', '220700': '吉林省松原市', '220701': '吉林省松原市市辖区', '220702': '吉林省松原市宁江区', '220721': '吉林省松原市前郭尔罗斯蒙古族自治县', '220722': '吉林省松原市长岭县', '220723': '吉林省松原市乾安县', '220724': '吉林省松原市扶余县', '220800': '吉林省白城市', '220801': '吉林省白城市市辖区', '220802': '吉林省白城市洮北区', '220821': '吉林省白城市镇赉县', '220822': '吉林省白城市通榆县', '220881': '吉林省白城市洮南市', '220882': '吉林省白城市大安市', '222400': '吉林省延边朝鲜族自治州', '222401': '吉林省延边朝鲜族自治州延吉市', '222402': '吉林省延边朝鲜族自治州图们市', '222403': '吉林省延边朝鲜族自治州敦化市', '222404': '吉林省延边朝鲜族自治州珲春市', '222405': '吉林省延边朝鲜族自治州龙井市', '222406': '吉林省延边朝鲜族自治州和龙市', '222424': '吉林省延边朝鲜族自治州汪清县', '222426': '吉林省延边朝鲜族自治州安图县', '230000': '黑龙江省', '230100': '黑龙江省哈尔滨市', '230101': '黑龙江省哈尔滨市市辖区', '230102': '黑龙江省哈尔滨市道里区', '230103': '黑龙江省哈尔滨市南岗区', '230104': '黑龙江省哈尔滨市道外区', '230105': '黑龙江省哈尔滨市太平区', '230106': '黑龙江省哈尔滨市香坊区', '230107': '黑龙江省哈尔滨市动力区', '230108': '黑龙江省哈尔滨市平房区', '230121': '黑龙江省哈尔滨市呼兰县', '230123': '黑龙江省哈尔滨市依兰县', '230124': '黑龙江省哈尔滨市方正县', '230125': '黑龙江省哈尔滨市宾县', '230126': '黑龙江省哈尔滨市巴彦县', '230127': '黑龙江省哈尔滨市木兰县', '230128': '黑龙江省哈尔滨市通河县', '230129': '黑龙江省哈尔滨市延寿县', '230181': '黑龙江省哈尔滨市阿城市', '230182': '黑龙江省哈尔滨市双城市', '230183': '黑龙江省哈尔滨市尚志市', '230184': '黑龙江省哈尔滨市五常市', '230200': '黑龙江省齐齐哈尔市', '230201': '黑龙江省齐齐哈尔市市辖区', '230202': '黑龙江省齐齐哈尔市龙沙区', '230203': '黑龙江省齐齐哈尔市建华区', '230204': '黑龙江省齐齐哈尔市铁锋区', '230205': '黑龙江省齐齐哈尔市昂昂溪区', '230206': '黑龙江省齐齐哈尔市富拉尔基区', '230207': '黑龙江省齐齐哈尔市碾子山区', '230208': '黑龙江省齐齐哈尔市梅里斯达斡尔族区', '230221': '黑龙江省齐齐哈尔市龙江县', '230223': '黑龙江省齐齐哈尔市依安县', '230224': '黑龙江省齐齐哈尔市泰来县', '230225': '黑龙江省齐齐哈尔市甘南县', '230227': '黑龙江省齐齐哈尔市富裕县', '230229': '黑龙江省齐齐哈尔市克山县', '230230': '黑龙江省齐齐哈尔市克东县', '230231': '黑龙江省齐齐哈尔市拜泉县', '230281': '黑龙江省齐齐哈尔市讷河市', '230300': '黑龙江省鸡西市', '230301': '黑龙江省鸡西市市辖区', '230302': '黑龙江省鸡西市鸡冠区', '230303': '黑龙江省鸡西市恒山区', '230304': '黑龙江省鸡西市滴道区', '230305': '黑龙江省鸡西市梨树区', '230306': '黑龙江省鸡西市城子河区', '230307': '黑龙江省鸡西市麻山区', '230321': '黑龙江省鸡西市鸡东县', '230381': '黑龙江省鸡西市虎林市', '230382': '黑龙江省鸡西市密山市', '230400': '黑龙江省鹤岗市', '230401': '黑龙江省鹤岗市市辖区', '230402': '黑龙江省鹤岗市向阳区', '230403': '黑龙江省鹤岗市工农区', '230404': '黑龙江省鹤岗市南山区', '230405': '黑龙江省鹤岗市兴安区', '230406': '黑龙江省鹤岗市东山区', '230407': '黑龙江省鹤岗市兴山区', '230421': '黑龙江省鹤岗市萝北县', '230422': '黑龙江省鹤岗市绥滨县', '230500': '黑龙江省双鸭山市', '230501': '黑龙江省双鸭山市市辖区', '230502': '黑龙江省双鸭山市尖山区', '230503': '黑龙江省双鸭山市岭东区', '230505': '黑龙江省双鸭山市四方台区', '230506': '黑龙江省双鸭山市宝山区', '230521': '黑龙江省双鸭山市集贤县', '230522': '黑龙江省双鸭山市友谊县', '230523': '黑龙江省双鸭山市宝清县', '230524': '黑龙江省双鸭山市饶河县', '230600': '黑龙江省大庆市', '230601': '黑龙江省大庆市市辖区', '230602': '黑龙江省大庆市萨尔图区', '230603': '黑龙江省大庆市龙凤区', '230604': '黑龙江省大庆市让胡路区', '230605': '黑龙江省大庆市红岗区', '230606': '黑龙江省大庆市大同区', '230621': '黑龙江省大庆市肇州县', '230622': '黑龙江省大庆市肇源县', '230623': '黑龙江省大庆市林甸县', '230624': '黑龙江省大庆市杜尔伯特蒙古族自治县', '230700': '黑龙江省伊春市', '230701': '黑龙江省伊春市市辖区', '230702': '黑龙江省伊春市伊春区', '230703': '黑龙江省伊春市南岔区', '230704': '黑龙江省伊春市友好区', '230705': '黑龙江省伊春市西林区', '230706': '黑龙江省伊春市翠峦区', '230707': '黑龙江省伊春市新青区', '230708': '黑龙江省伊春市美溪区', '230709': '黑龙江省伊春市金山屯区', '230710': '黑龙江省伊春市五营区', '230711': '黑龙江省伊春市乌马河区', '230712': '黑龙江省伊春市汤旺河区', '230713': '黑龙江省伊春市带岭区', '230714': '黑龙江省伊春市乌伊岭区', '230715': '黑龙江省伊春市红星区', '230716': '黑龙江省伊春市上甘岭区', '230722': '黑龙江省伊春市嘉荫县', '230781': '黑龙江省伊春市铁力市', '230800': '黑龙江省佳木斯市', '230801': '黑龙江省佳木斯市市辖区', '230802': '黑龙江省佳木斯市永红区', '230803': '黑龙江省佳木斯市向阳区', '230804': '黑龙江省佳木斯市前进区', '230805': '黑龙江省佳木斯市东风区', '230811': '黑龙江省佳木斯市郊区', '230822': '黑龙江省佳木斯市桦南县', '230826': '黑龙江省佳木斯市桦川县', '230828': '黑龙江省佳木斯市汤原县', '230833': '黑龙江省佳木斯市抚远县', '230881': '黑龙江省佳木斯市同江市', '230882': '黑龙江省佳木斯市富锦市', '230900': '黑龙江省七台河市', '230901': '黑龙江省七台河市市辖区', '230902': '黑龙江省七台河市新兴区', '230903': '黑龙江省七台河市桃山区', '230904': '黑龙江省七台河市茄子河区', '230921': '黑龙江省七台河市勃利县', '231000': '黑龙江省牡丹江市', '231001': '黑龙江省牡丹江市市辖区', '231002': '黑龙江省牡丹江市东安区', '231003': '黑龙江省牡丹江市阳明区', '231004': '黑龙江省牡丹江市爱民区', '231005': '黑龙江省牡丹江市西安区', '231024': '黑龙江省牡丹江市东宁县', '231025': '黑龙江省牡丹江市林口县', '231081': '黑龙江省牡丹江市绥芬河市', '231083': '黑龙江省牡丹江市海林市', '231084': '黑龙江省牡丹江市宁安市', '231085': '黑龙江省牡丹江市穆棱市', '231100': '黑龙江省黑河市', '231101': '黑龙江省黑河市市辖区', '231102': '黑龙江省黑河市爱辉区', '231121': '黑龙江省黑河市嫩江县', '231123': '黑龙江省黑河市逊克县', '231124': '黑龙江省黑河市孙吴县', '231181': '黑龙江省黑河市北安市', '231182': '黑龙江省黑河市五大连池市', '232300': '黑龙江省绥化地区', '232301': '黑龙江省绥化地区绥化市', '232302': '黑龙江省绥化地区安达市', '232303': '黑龙江省绥化地区肇东市', '232304': '黑龙江省绥化地区海伦市', '232324': '黑龙江省绥化地区望奎县', '232325': '黑龙江省绥化地区兰西县', '232326': '黑龙江省绥化地区青冈县', '232330': '黑龙江省绥化地区庆安县', '232331': '黑龙江省绥化地区明水县', '232332': '黑龙江省绥化地区绥棱县', '232700': '黑龙江省大兴安岭地区', '232721': '黑龙江省大兴安岭地区呼玛县', '232722': '黑龙江省大兴安岭地区塔河县', '232723': '黑龙江省大兴安岭地区漠河县', '310000': '上海市', '310100': '上海市市辖区', '310101': '上海市黄浦区', '310102': '上海市南市区', '310103': '上海市卢湾区', '310104': '上海市徐汇区', '310105': '上海市长宁区', '310106': '上海市静安区', '310107': '上海市普陀区', '310108': '上海市闸北区', '310109': '上海市虹口区', '310110': '上海市杨浦区', '310112': '上海市闵行区', '310113': '上海市宝山区', '310114': '上海市嘉定区', '310115': '上海市浦东新区', '310116': '上海市金山区', '310117': '上海市松江区', '310200': '上海市县', '310225': '上海市南汇县', '310226': '上海市奉贤县', '310229': '上海市青浦县', '310230': '上海市崇明县', '320000': '江苏省', '320100': '江苏省南京市', '320101': '江苏省南京市市辖区', '320102': '江苏省南京市玄武区', '320103': '江苏省南京市白下区', '320104': '江苏省南京市秦淮区', '320105': '江苏省南京市建邺区', '320106': '江苏省南京市鼓楼区', '320107': '江苏省南京市下关区', '320111': '江苏省南京市浦口区', '320112': '江苏省南京市大厂区', '320113': '江苏省南京市栖霞区', '320114': '江苏省南京市雨花台区', '320121': '江苏省南京市江宁县', '320122': '江苏省南京市江浦县', '320123': '江苏省南京市六合县', '320124': '江苏省南京市溧水县', '320125': '江苏省南京市高淳县', '320200': '江苏省无锡市', '320201': '江苏省无锡市市辖区', '320202': '江苏省无锡市崇安区', '320203': '江苏省无锡市南长区', '320204': '江苏省无锡市北塘区', '320211': '江苏省无锡市郊区', '320281': '江苏省无锡市江阴市', '320282': '江苏省无锡市宜兴市', '320283': '江苏省无锡市锡山市', '320300': '江苏省徐州市', '320301': '江苏省徐州市市辖区', '320302': '江苏省徐州市鼓楼区', '320303': '江苏省徐州市云龙区', '320304': '江苏省徐州市九里区', '320305': '江苏省徐州市贾汪区', '320311': '江苏省徐州市泉山区', '320321': '江苏省徐州市丰县', '320322': '江苏省徐州市沛县', '320323': '江苏省徐州市铜山县', '320324': '江苏省徐州市睢宁县', '320381': '江苏省徐州市新沂市', '320382': '江苏省徐州市邳州市', '320400': '江苏省常州市', '320401': '江苏省常州市市辖区', '320402': '江苏省常州市天宁区', '320404': '江苏省常州市钟楼区', '320405': '江苏省常州市戚墅堰区', '320411': '江苏省常州市郊区', '320481': '江苏省常州市溧阳市', '320482': '江苏省常州市金坛市', '320483': '江苏省常州市武进市', '320500': '江苏省苏州市', '320501': '江苏省苏州市市辖区', '320502': '江苏省苏州市沧浪区', '320503': '江苏省苏州市平江区', '320504': '江苏省苏州市金阊区', '320511': '江苏省苏州市郊区', '320581': '江苏省苏州市常熟市', '320582': '江苏省苏州市张家港市', '320583': '江苏省苏州市昆山市', '320584': '江苏省苏州市吴江市', '320585': '江苏省苏州市太仓市', '320586': '江苏省苏州市吴县市', '320600': '江苏省南通市', '320601': '江苏省南通市市辖区', '320602': '江苏省南通市崇川区', '320611': '江苏省南通市港闸区', '320621': '江苏省南通市海安县', '320623': '江苏省南通市如东县', '320681': '江苏省南通市启东市', '320682': '江苏省南通市如皋市', '320683': '江苏省南通市通州市', '320684': '江苏省南通市海门市', '320700': '江苏省连云港市', '320701': '江苏省连云港市市辖区', '320703': '江苏省连云港市连云区', '320704': '江苏省连云港市云台区', '320705': '江苏省连云港市新浦区', '320706': '江苏省连云港市海州区', '320721': '江苏省连云港市赣榆县', '320722': '江苏省连云港市东海县', '320723': '江苏省连云港市灌云县', '320724': '江苏省连云港市灌南县', '320800': '江苏省淮阴市', '320801': '江苏省淮阴市市辖区', '320802': '江苏省淮阴市清河区', '320811': '江苏省淮阴市清浦区', '320821': '江苏省淮阴市淮阴县', '320826': '江苏省淮阴市涟水县', '320829': '江苏省淮阴市洪泽县', '320830': '江苏省淮阴市盱眙县', '320831': '江苏省淮阴市金湖县', '320882': '江苏省淮阴市淮安市', '320900': '江苏省盐城市', '320901': '江苏省盐城市市辖区', '320902': '江苏省盐城市城区', '320921': '江苏省盐城市响水县', '320922': '江苏省盐城市滨海县', '320923': '江苏省盐城市阜宁县', '320924': '江苏省盐城市射阳县', '320925': '江苏省盐城市建湖县', '320928': '江苏省盐城市盐都县', '320981': '江苏省盐城市东台市', '320982': '江苏省盐城市大丰市', '321000': '江苏省扬州市', '321001': '江苏省扬州市市辖区', '321002': '江苏省扬州市广陵区', '321011': '江苏省扬州市郊区', '321023': '江苏省扬州市宝应县', '321027': '江苏省扬州市邗江县', '321081': '江苏省扬州市仪征市', '321084': '江苏省扬州市高邮市', '321088': '江苏省扬州市江都市', '321100': '江苏省镇江市', '321101': '江苏省镇江市市辖区', '321102': '江苏省镇江市京口区', '321111': '江苏省镇江市润州区', '321121': '江苏省镇江市丹徒县', '321181': '江苏省镇江市丹阳市', '321182': '江苏省镇江市扬中市', '321183': '江苏省镇江市句容市', '321200': '江苏省泰州市', '321201': '江苏省泰州市市辖区', '321202': '江苏省泰州市海陵区', '321203': '江苏省泰州市高港区', '321281': '江苏省泰州市兴化市', '321282': '江苏省泰州市靖江市', '321283': '江苏省泰州市泰兴市', '321284': '江苏省泰州市姜堰市', '321300': '江苏省宿迁市', '321301': '江苏省宿迁市市辖区', '321302': '江苏省宿迁市宿城区', '321321': '江苏省宿迁市宿豫县', '321322': '江苏省宿迁市沭阳县', '321323': '江苏省宿迁市泗阳县', '321324': '江苏省宿迁市泗洪县', '330000': '浙江省', '330100': '浙江省杭州市', '330101': '浙江省杭州市市辖区', '330102': '浙江省杭州市上城区', '330103': '浙江省杭州市下城区', '330104': '浙江省杭州市江干区', '330105': '浙江省杭州市拱墅区', '330106': '浙江省杭州市西湖区', '330108': '浙江省杭州市滨江区', '330122': '浙江省杭州市桐庐县', '330127': '浙江省杭州市淳安县', '330181': '浙江省杭州市萧山市', '330182': '浙江省杭州市建德市', '330183': '浙江省杭州市富阳市', '330184': '浙江省杭州市余杭市', '330185': '浙江省杭州市临安市', '330200': '浙江省宁波市', '330201': '浙江省宁波市市辖区', '330203': '浙江省宁波市海曙区', '330204': '浙江省宁波市江东区', '330205': '浙江省宁波市江北区', '330206': '浙江省宁波市北仑区', '330211': '浙江省宁波市镇海区', '330225': '浙江省宁波市象山县', '330226': '浙江省宁波市宁海县', '330227': '浙江省宁波市鄞县', '330281': '浙江省宁波市余姚市', '330282': '浙江省宁波市慈溪市', '330283': '浙江省宁波市奉化市', '330300': '浙江省温州市', '330301': '浙江省温州市市辖区', '330302': '浙江省温州市鹿城区', '330303': '浙江省温州市龙湾区', '330304': '浙江省温州市瓯海区', '330322': '浙江省温州市洞头县', '330324': '浙江省温州市永嘉县', '330326': '浙江省温州市平阳县', '330327': '浙江省温州市苍南县', '330328': '浙江省温州市文成县', '330329': '浙江省温州市泰顺县', '330381': '浙江省温州市瑞安市', '330382': '浙江省温州市乐清市', '330400': '浙江省嘉兴市', '330401': '浙江省嘉兴市市辖区', '330402': '浙江省嘉兴市秀城区', '330411': '浙江省嘉兴市郊区', '330421': '浙江省嘉兴市嘉善县', '330424': '浙江省嘉兴市海盐县', '330481': '浙江省嘉兴市海宁市', '330482': '浙江省嘉兴市平湖市', '330483': '浙江省嘉兴市桐乡市', '330500': '浙江省湖州市', '330501': '浙江省湖州市市辖区', '330521': '浙江省湖州市德清县', '330522': '浙江省湖州市长兴县', '330523': '浙江省湖州市安吉县', '330600': '浙江省绍兴市', '330601': '浙江省绍兴市市辖区', '330602': '浙江省绍兴市越城区', '330621': '浙江省绍兴市绍兴县', '330624': '浙江省绍兴市新昌县', '330681': '浙江省绍兴市诸暨市', '330682': '浙江省绍兴市上虞市', '330683': '浙江省绍兴市嵊州市', '330700': '浙江省金华市', '330701': '浙江省金华市市辖区', '330702': '浙江省金华市婺城区', '330721': '浙江省金华市金华县', '330723': '浙江省金华市武义县', '330726': '浙江省金华市浦江县', '330727': '浙江省金华市磐安县', '330781': '浙江省金华市兰溪市', '330782': '浙江省金华市义乌市', '330783': '浙江省金华市东阳市', '330784': '浙江省金华市永康市', '330800': '浙江省衢州市', '330801': '浙江省衢州市市辖区', '330802': '浙江省衢州市柯城区', '330821': '浙江省衢州市衢县', '330822': '浙江省衢州市常山县', '330824': '浙江省衢州市开化县', '330825': '浙江省衢州市龙游县', '330881': '浙江省衢州市江山市', '330900': '浙江省舟山市', '330901': '浙江省舟山市市辖区', '330902': '浙江省舟山市定海区', '330903': '浙江省舟山市普陀区', '330921': '浙江省舟山市岱山县', '330922': '浙江省舟山市嵊泗县', '331000': '浙江省台州市', '331001': '浙江省台州市市辖区', '331002': '浙江省台州市椒江区', '331003': '浙江省台州市黄岩区', '331004': '浙江省台州市路桥区', '331021': '浙江省台州市玉环县', '331022': '浙江省台州市三门县', '331023': '浙江省台州市天台县', '331024': '浙江省台州市仙居县', '331081': '浙江省台州市温岭市', '331082': '浙江省台州市临海市', '332500': '浙江省丽水地区', '332501': '浙江省丽水地区丽水市', '332502': '浙江省丽水地区龙泉市', '332522': '浙江省丽水地区青田县', '332523': '浙江省丽水地区云和县', '332525': '浙江省丽水地区庆元县', '332526': '浙江省丽水地区缙云县', '332527': '浙江省丽水地区遂昌县', '332528': '浙江省丽水地区松阳县', '332529': '浙江省丽水地区景宁畲族自治县', '340000': '安徽省', '340100': '安徽省合肥市', '340101': '安徽省合肥市市辖区', '340102': '安徽省合肥市东市区', '340103': '安徽省合肥市中市区', '340104': '安徽省合肥市西市区', '340111': '安徽省合肥市郊区', '340121': '安徽省合肥市长丰县', '340122': '安徽省合肥市肥东县', '340123': '安徽省合肥市肥西县', '340200': '安徽省芜湖市', '340201': '安徽省芜湖市市辖区', '340202': '安徽省芜湖市镜湖区', '340203': '安徽省芜湖市马塘区', '340204': '安徽省芜湖市新芜区', '340207': '安徽省芜湖市鸠江区', '340221': '安徽省芜湖市芜湖县', '340222': '安徽省芜湖市繁昌县', '340223': '安徽省芜湖市南陵县', '340300': '安徽省蚌埠市', '340301': '安徽省蚌埠市市辖区', '340302': '安徽省蚌埠市东市区', '340303': '安徽省蚌埠市中市区', '340304': '安徽省蚌埠市西市区', '340311': '安徽省蚌埠市郊区', '340321': '安徽省蚌埠市怀远县', '340322': '安徽省蚌埠市五河县', '340323': '安徽省蚌埠市固镇县', '340400': '安徽省淮南市', '340401': '安徽省淮南市市辖区', '340402': '安徽省淮南市大通区', '340403': '安徽省淮南市田家庵区', '340404': '安徽省淮南市谢家集区', '340405': '安徽省淮南市八公山区', '340406': '安徽省淮南市潘集区', '340421': '安徽省淮南市凤台县', '340500': '安徽省马鞍山市', '340501': '安徽省马鞍山市市辖区', '340502': '安徽省马鞍山市金家庄区', '340503': '安徽省马鞍山市花山区', '340504': '安徽省马鞍山市雨山区', '340505': '安徽省马鞍山市向山区', '340521': '安徽省马鞍山市当涂县', '340600': '安徽省淮北市', '340601': '安徽省淮北市市辖区', '340602': '安徽省淮北市杜集区', '340603': '安徽省淮北市相山区', '340604': '安徽省淮北市烈山区', '340621': '安徽省淮北市濉溪县', '340700': '安徽省铜陵市', '340701': '安徽省铜陵市市辖区', '340702': '安徽省铜陵市铜官山区', '340703': '安徽省铜陵市狮子山区', '340711': '安徽省铜陵市郊区', '340721': '安徽省铜陵市铜陵县', '340800': '安徽省安庆市', '340801': '安徽省安庆市市辖区', '340802': '安徽省安庆市迎江区', '340803': '安徽省安庆市大观区', '340811': '安徽省安庆市郊区', '340822': '安徽省安庆市怀宁县', '340823': '安徽省安庆市枞阳县', '340824': '安徽省安庆市潜山县', '340825': '安徽省安庆市太湖县', '340826': '安徽省安庆市宿松县', '340827': '安徽省安庆市望江县', '340828': '安徽省安庆市岳西县', '340881': '安徽省安庆市桐城市', '341000': '安徽省黄山市', '341001': '安徽省黄山市市辖区', '341002': '安徽省黄山市屯溪区', '341003': '安徽省黄山市黄山区', '341004': '安徽省黄山市徽州区', '341021': '安徽省黄山市歙县', '341022': '安徽省黄山市休宁县', '341023': '安徽省黄山市黟县', '341024': '安徽省黄山市祁门县', '341100': '安徽省滁州市', '341101': '安徽省滁州市市辖区', '341102': '安徽省滁州市琅琊区', '341103': '安徽省滁州市南谯区', '341122': '安徽省滁州市来安县', '341124': '安徽省滁州市全椒县', '341125': '安徽省滁州市定远县', '341126': '安徽省滁州市凤阳县', '341181': '安徽省滁州市天长市', '341182': '安徽省滁州市明光市', '341200': '安徽省阜阳市', '341201': '安徽省阜阳市市辖区', '341202': '安徽省阜阳市颍州区', '341203': '安徽省阜阳市颍东区', '341204': '安徽省阜阳市颍泉区', '341221': '安徽省阜阳市临泉县', '341222': '安徽省阜阳市太和县', '341223': '安徽省阜阳市涡阳县', '341224': '安徽省阜阳市蒙城县', '341225': '安徽省阜阳市阜南县', '341226': '安徽省阜阳市颍上县', '341227': '安徽省阜阳市利辛县', '341281': '安徽省阜阳市亳州市', '341282': '安徽省阜阳市界首市', '341300': '安徽省宿州市', '341301': '安徽省宿州市市辖区', '341302': '安徽省宿州市甬桥区', '341321': '安徽省宿州市砀山县', '341322': '安徽省宿州市萧县', '341323': '安徽省宿州市灵璧县', '341324': '安徽省宿州市泗县', '342400': '安徽省六安地区', '342401': '安徽省六安地区六安市', '342422': '安徽省六安地区寿县', '342423': '安徽省六安地区霍邱县', '342425': '安徽省六安地区舒城县', '342426': '安徽省六安地区金寨县', '342427': '安徽省六安地区霍山县', '342500': '安徽省宣城地区', '342501': '安徽省宣城地区宣州市', '342502': '安徽省宣城地区宁国市', '342522': '安徽省宣城地区郎溪县', '342523': '安徽省宣城地区广德县', '342529': '安徽省宣城地区泾县', '342530': '安徽省宣城地区旌德县', '342531': '安徽省宣城地区绩溪县', '342600': '安徽省巢湖地区', '342601': '安徽省巢湖地区巢湖市', '342622': '安徽省巢湖地区庐江县', '342623': '安徽省巢湖地区无为县', '342625': '安徽省巢湖地区含山县', '342626': '安徽省巢湖地区和县', '342900': '安徽省池州地区', '342901': '安徽省池州地区贵池市', '342921': '安徽省池州地区东至县', '342922': '安徽省池州地区石台县', '342923': '安徽省池州地区青阳县', '350000': '福建省', '350100': '福建省福州市', '350101': '福建省福州市市辖区', '350102': '福建省福州市鼓楼区', '350103': '福建省福州市台江区', '350104': '福建省福州市仓山区', '350105': '福建省福州市马尾区', '350111': '福建省福州市晋安区', '350121': '福建省福州市闽侯县', '350122': '福建省福州市连江县', '350123': '福建省福州市罗源县', '350124': '福建省福州市闽清县', '350125': '福建省福州市永泰县', '350128': '福建省福州市平潭县', '350181': '福建省福州市福清市', '350182': '福建省福州市长乐市', '350200': '福建省厦门市', '350201': '福建省厦门市市辖区', '350202': '福建省厦门市鼓浪屿区', '350203': '福建省厦门市思明区', '350204': '福建省厦门市开元区', '350205': '福建省厦门市杏林区', '350206': '福建省厦门市湖里区', '350211': '福建省厦门市集美区', '350212': '福建省厦门市同安区', '350300': '福建省莆田市', '350301': '福建省莆田市市辖区', '350302': '福建省莆田市城厢区', '350303': '福建省莆田市涵江区', '350321': '福建省莆田市莆田县', '350322': '福建省莆田市仙游县', '350400': '福建省三明市', '350401': '福建省三明市市辖区', '350402': '福建省三明市梅列区', '350403': '福建省三明市三元区', '350421': '福建省三明市明溪县', '350423': '福建省三明市清流县', '350424': '福建省三明市宁化县', '350425': '福建省三明市大田县', '350426': '福建省三明市尤溪县', '350427': '福建省三明市沙县', '350428': '福建省三明市将乐县', '350429': '福建省三明市泰宁县', '350430': '福建省三明市建宁县', '350481': '福建省三明市永安市', '350500': '福建省泉州市', '350501': '福建省泉州市市辖区', '350502': '福建省泉州市鲤城区', '350503': '福建省泉州市丰泽区', '350504': '福建省泉州市洛江区', '350521': '福建省泉州市惠安县', '350524': '福建省泉州市安溪县', '350525': '福建省泉州市永春县', '350526': '福建省泉州市德化县', '350527': '福建省泉州市金门县', '350581': '福建省泉州市石狮市', '350582': '福建省泉州市晋江市', '350583': '福建省泉州市南安市', '350600': '福建省漳州市', '350601': '福建省漳州市市辖区', '350602': '福建省漳州市芗城区', '350603': '福建省漳州市龙文区', '350622': '福建省漳州市云霄县', '350623': '福建省漳州市漳浦县', '350624': '福建省漳州市诏安县', '350625': '福建省漳州市长泰县', '350626': '福建省漳州市东山县', '350627': '福建省漳州市南靖县', '350628': '福建省漳州市平和县', '350629': '福建省漳州市华安县', '350681': '福建省漳州市龙海市', '350700': '福建省南平市', '350701': '福建省南平市市辖区', '350702': '福建省南平市延平区', '350721': '福建省南平市顺昌县', '350722': '福建省南平市浦城县', '350723': '福建省南平市光泽县', '350724': '福建省南平市松溪县', '350725': '福建省南平市政和县', '350781': '福建省南平市邵武市', '350782': '福建省南平市武夷山市', '350783': '福建省南平市建瓯市', '350784': '福建省南平市建阳市', '350800': '福建省龙岩市', '350801': '福建省龙岩市市辖区', '350802': '福建省龙岩市新罗区', '350821': '福建省龙岩市长汀县', '350822': '福建省龙岩市永定县', '350823': '福建省龙岩市上杭县', '350824': '福建省龙岩市武平县', '350825': '福建省龙岩市连城县', '350881': '福建省龙岩市漳平市', '352200': '福建省宁德地区', '352201': '福建省宁德地区宁德市', '352202': '福建省宁德地区福安市', '352203': '福建省宁德地区福鼎市', '352225': '福建省宁德地区霞浦县', '352227': '福建省宁德地区古田县', '352228': '福建省宁德地区屏南县', '352229': '福建省宁德地区寿宁县', '352230': '福建省宁德地区周宁县', '352231': '福建省宁德地区柘荣县', '360000': '江西省', '360100': '江西省南昌市', '360101': '江西省南昌市市辖区', '360102': '江西省南昌市东湖区', '360103': '江西省南昌市西湖区', '360104': '江西省南昌市青云谱区', '360105': '江西省南昌市湾里区', '360111': '江西省南昌市郊区', '360121': '江西省南昌市南昌县', '360122': '江西省南昌市新建县', '360123': '江西省南昌市安义县', '360124': '江西省南昌市进贤县', '360200': '江西省景德镇市', '360201': '江西省景德镇市市辖区', '360202': '江西省景德镇市昌江区', '360203': '江西省景德镇市珠山区', '360222': '江西省景德镇市浮梁县', '360281': '江西省景德镇市乐平市', '360300': '江西省萍乡市', '360301': '江西省萍乡市市辖区', '360302': '江西省萍乡市安源区', '360313': '江西省萍乡市湘东区', '360321': '江西省萍乡市莲花县', '360322': '江西省萍乡市上栗县', '360323': '江西省萍乡市芦溪县', '360400': '江西省九江市', '360401': '江西省九江市市辖区', '360402': '江西省九江市庐山区', '360403': '江西省九江市浔阳区', '360421': '江西省九江市九江县', '360423': '江西省九江市武宁县', '360424': '江西省九江市修水县', '360425': '江西省九江市永修县', '360426': '江西省九江市德安县', '360427': '江西省九江市星子县', '360428': '江西省九江市都昌县', '360429': '江西省九江市湖口县', '360430': '江西省九江市彭泽县', '360481': '江西省九江市瑞昌市', '360500': '江西省新余市', '360501': '江西省新余市市辖区', '360502': '江西省新余市渝水区', '360521': '江西省新余市分宜县', '360600': '江西省鹰潭市', '360601': '江西省鹰潭市市辖区', '360602': '江西省鹰潭市月湖区', '360622': '江西省鹰潭市余江县', '360681': '江西省鹰潭市贵溪市', '360700': '江西省赣州市', '360701': '江西省赣州市市辖区', '360702': '江西省赣州市章贡区', '360721': '江西省赣州市赣县', '360722': '江西省赣州市信丰县', '360723': '江西省赣州市大余县', '360724': '江西省赣州市上犹县', '360725': '江西省赣州市崇义县', '360726': '江西省赣州市安远县', '360727': '江西省赣州市龙南县', '360728': '江西省赣州市定南县', '360729': '江西省赣州市全南县', '360730': '江西省赣州市宁都县', '360731': '江西省赣州市于都县', '360732': '江西省赣州市兴国县', '360733': '江西省赣州市会昌县', '360734': '江西省赣州市寻乌县', '360735': '江西省赣州市石城县', '360781': '江西省赣州市瑞金市', '360782': '江西省赣州市南康市', '362200': '江西省宜春地区', '362201': '江西省宜春地区宜春市', '362202': '江西省宜春地区丰城市', '362203': '江西省宜春地区樟树市', '362204': '江西省宜春地区高安市', '362226': '江西省宜春地区奉新县', '362227': '江西省宜春地区万载县', '362228': '江西省宜春地区上高县', '362229': '江西省宜春地区宜丰县', '362232': '江西省宜春地区靖安县', '362233': '江西省宜春地区铜鼓县', '362300': '江西省上饶地区', '362301': '江西省上饶地区上饶市', '362302': '江西省上饶地区德兴市', '362321': '江西省上饶地区上饶县', '362322': '江西省上饶地区广丰县', '362323': '江西省上饶地区玉山县', '362324': '江西省上饶地区铅山县', '362325': '江西省上饶地区横峰县', '362326': '江西省上饶地区弋阳县', '362329': '江西省上饶地区余干县', '362330': '江西省上饶地区波阳县', '362331': '江西省上饶地区万年县', '362334': '江西省上饶地区婺源县', '362400': '江西省吉安地区', '362401': '江西省吉安地区吉安市', '362402': '江西省吉安地区井冈山市', '362421': '江西省吉安地区吉安县', '362422': '江西省吉安地区吉水县', '362423': '江西省吉安地区峡江县', '362424': '江西省吉安地区新干县', '362425': '江西省吉安地区永丰县', '362426': '江西省吉安地区泰和县', '362427': '江西省吉安地区遂川县', '362428': '江西省吉安地区万安县', '362429': '江西省吉安地区安福县', '362430': '江西省吉安地区永新县', '362432': '江西省吉安地区宁冈县', '362500': '江西省抚州地区', '362502': '江西省抚州地区临川市', '362522': '江西省抚州地区南城县', '362523': '江西省抚州地区黎川县', '362524': '江西省抚州地区南丰县', '362525': '江西省抚州地区崇仁县', '362526': '江西省抚州地区乐安县', '362527': '江西省抚州地区宜黄县', '362528': '江西省抚州地区金溪县', '362529': '江西省抚州地区资溪县', '362531': '江西省抚州地区东乡县', '362532': '江西省抚州地区广昌县', '370000': '山东省', '370100': '山东省济南市', '370101': '山东省济南市市辖区', '370102': '山东省济南市历下区', '370103': '山东省济南市市中区', '370104': '山东省济南市槐荫区', '370105': '山东省济南市天桥区', '370112': '山东省济南市历城区', '370123': '山东省济南市长清县', '370124': '山东省济南市平阴县', '370125': '山东省济南市济阳县', '370126': '山东省济南市商河县', '370181': '山东省济南市章丘市', '370200': '山东省青岛市', '370201': '山东省青岛市市辖区', '370202': '山东省青岛市市南区', '370203': '山东省青岛市市北区', '370205': '山东省青岛市四方区', '370211': '山东省青岛市黄岛区', '370212': '山东省青岛市崂山区', '370213': '山东省青岛市李沧区', '370214': '山东省青岛市城阳区', '370281': '山东省青岛市胶州市', '370282': '山东省青岛市即墨市', '370283': '山东省青岛市平度市', '370284': '山东省青岛市胶南市', '370285': '山东省青岛市莱西市', '370300': '山东省淄博市', '370301': '山东省淄博市市辖区', '370302': '山东省淄博市淄川区', '370303': '山东省淄博市张店区', '370304': '山东省淄博市博山区', '370305': '山东省淄博市临淄区', '370306': '山东省淄博市周村区', '370321': '山东省淄博市桓台县', '370322': '山东省淄博市高青县', '370323': '山东省淄博市沂源县', '370400': '山东省枣庄市', '370401': '山东省枣庄市市辖区', '370402': '山东省枣庄市市中区', '370403': '山东省枣庄市薛城区', '370404': '山东省枣庄市峄城区', '370405': '山东省枣庄市台儿庄区', '370406': '山东省枣庄市山亭区', '370481': '山东省枣庄市滕州市', '370500': '山东省东营市', '370501': '山东省东营市市辖区', '370502': '山东省东营市东营区', '370503': '山东省东营市河口区', '370521': '山东省东营市垦利县', '370522': '山东省东营市利津县', '370523': '山东省东营市广饶县', '370600': '山东省烟台市', '370601': '山东省烟台市市辖区', '370602': '山东省烟台市芝罘区', '370611': '山东省烟台市福山区', '370612': '山东省烟台市牟平区', '370613': '山东省烟台市莱山区', '370634': '山东省烟台市长岛县', '370681': '山东省烟台市龙口市', '370682': '山东省烟台市莱阳市', '370683': '山东省烟台市莱州市', '370684': '山东省烟台市蓬莱市', '370685': '山东省烟台市招远市', '370686': '山东省烟台市栖霞市', '370687': '山东省烟台市海阳市', '370700': '山东省潍坊市', '370701': '山东省潍坊市市辖区', '370702': '山东省潍坊市潍城区', '370703': '山东省潍坊市寒亭区', '370704': '山东省潍坊市坊子区', '370705': '山东省潍坊市奎文区', '370724': '山东省潍坊市临朐县', '370725': '山东省潍坊市昌乐县', '370781': '山东省潍坊市青州市', '370782': '山东省潍坊市诸城市', '370783': '山东省潍坊市寿光市', '370784': '山东省潍坊市安丘市', '370785': '山东省潍坊市高密市', '370786': '山东省潍坊市昌邑市', '370800': '山东省济宁市', '370801': '山东省济宁市市辖区', '370802': '山东省济宁市市中区', '370811': '山东省济宁市任城区', '370826': '山东省济宁市微山县', '370827': '山东省济宁市鱼台县', '370828': '山东省济宁市金乡县', '370829': '山东省济宁市嘉祥县', '370830': '山东省济宁市汶上县', '370831': '山东省济宁市泗水县', '370832': '山东省济宁市梁山县', '370881': '山东省济宁市曲阜市', '370882': '山东省济宁市兖州市', '370883': '山东省济宁市邹城市', '370900': '山东省泰安市', '370901': '山东省泰安市市辖区', '370902': '山东省泰安市泰山区', '370911': '山东省泰安市郊区', '370921': '山东省泰安市宁阳县', '370923': '山东省泰安市东平县', '370982': '山东省泰安市新泰市', '370983': '山东省泰安市肥城市', '371000': '山东省威海市', '371001': '山东省威海市市辖区', '371002': '山东省威海市环翠区', '371081': '山东省威海市文登市', '371082': '山东省威海市荣成市', '371083': '山东省威海市乳山市', '371100': '山东省日照市', '371101': '山东省日照市市辖区', '371102': '山东省日照市东港区', '371121': '山东省日照市五莲县', '371122': '山东省日照市莒县', '371200': '山东省莱芜市', '371201': '山东省莱芜市市辖区', '371202': '山东省莱芜市莱城区', '371203': '山东省莱芜市钢城区', '371300': '山东省临沂市', '371301': '山东省临沂市市辖区', '371302': '山东省临沂市兰山区', '371311': '山东省临沂市罗庄区', '371312': '山东省临沂市河东区', '371321': '山东省临沂市沂南县', '371322': '山东省临沂市郯城县', '371323': '山东省临沂市沂水县', '371324': '山东省临沂市苍山县', '371325': '山东省临沂市费县', '371326': '山东省临沂市平邑县', '371327': '山东省临沂市莒南县', '371328': '山东省临沂市蒙阴县', '371329': '山东省临沂市临沭县', '371400': '山东省德州市', '371401': '山东省德州市市辖区', '371402': '山东省德州市德城区', '371421': '山东省德州市陵县', '371422': '山东省德州市宁津县', '371423': '山东省德州市庆云县', '371424': '山东省德州市临邑县', '371425': '山东省德州市齐河县', '371426': '山东省德州市平原县', '371427': '山东省德州市夏津县', '371428': '山东省德州市武城县', '371481': '山东省德州市乐陵市', '371482': '山东省德州市禹城市', '371500': '山东省聊城市', '371501': '山东省聊城市市辖区', '371502': '山东省聊城市东昌府区', '371521': '山东省聊城市阳谷县', '371522': '山东省聊城市莘县', '371523': '山东省聊城市茌平县', '371524': '山东省聊城市东阿县', '371525': '山东省聊城市冠县', '371526': '山东省聊城市高唐县', '371581': '山东省聊城市临清市', '372300': '山东省滨州地区', '372301': '山东省滨州地区滨州市', '372321': '山东省滨州地区惠民县', '372323': '山东省滨州地区阳信县', '372324': '山东省滨州地区无棣县', '372325': '山东省滨州地区沾化县', '372328': '山东省滨州地区博兴县', '372330': '山东省滨州地区邹平县', '372900': '山东省菏泽地区', '372901': '山东省菏泽地区菏泽市', '372922': '山东省菏泽地区曹县', '372923': '山东省菏泽地区定陶县', '372924': '山东省菏泽地区成武县', '372925': '山东省菏泽地区单县', '372926': '山东省菏泽地区巨野县', '372928': '山东省菏泽地区郓城县', '372929': '山东省菏泽地区鄄城县', '372930': '山东省菏泽地区东明县', '410000': '河南省', '410100': '河南省郑州市', '410101': '河南省郑州市市辖区', '410102': '河南省郑州市中原区', '410103': '河南省郑州市二七区', '410104': '河南省郑州市管城回族区', '410105': '河南省郑州市金水区', '410106': '河南省郑州市上街区', '410108': '河南省郑州市邙山区', '410122': '河南省郑州市中牟县', '410181': '河南省郑州市巩义市', '410182': '河南省郑州市荥阳市', '410183': '河南省郑州市新密市', '410184': '河南省郑州市新郑市', '410185': '河南省郑州市登封市', '410200': '河南省开封市', '410201': '河南省开封市市辖区', '410202': '河南省开封市龙亭区', '410203': '河南省开封市顺河回族区', '410204': '河南省开封市鼓楼区', '410205': '河南省开封市南关区', '410211': '河南省开封市郊区', '410221': '河南省开封市杞县', '410222': '河南省开封市通许县', '410223': '河南省开封市尉氏县', '410224': '河南省开封市开封县', '410225': '河南省开封市兰考县', '410300': '河南省洛阳市', '410301': '河南省洛阳市市辖区', '410302': '河南省洛阳市老城区', '410303': '河南省洛阳市西工区', '410304': '河南省洛阳市廛河回族区', '410305': '河南省洛阳市涧西区', '410306': '河南省洛阳市吉利区', '410311': '河南省洛阳市郊区', '410322': '河南省洛阳市孟津县', '410323': '河南省洛阳市新安县', '410324': '河南省洛阳市栾川县', '410325': '河南省洛阳市嵩县', '410326': '河南省洛阳市汝阳县', '410327': '河南省洛阳市宜阳县', '410328': '河南省洛阳市洛宁县', '410329': '河南省洛阳市伊川县', '410381': '河南省洛阳市偃师市', '410400': '河南省平顶山市', '410401': '河南省平顶山市市辖区', '410402': '河南省平顶山市新华区', '410403': '河南省平顶山市卫东区', '410404': '河南省平顶山市石龙区', '410411': '河南省平顶山市湛河区', '410421': '河南省平顶山市宝丰县', '410422': '河南省平顶山市叶县', '410423': '河南省平顶山市鲁山县', '410425': '河南省平顶山市郏县', '410481': '河南省平顶山市舞钢市', '410482': '河南省平顶山市汝州市', '410500': '河南省安阳市', '410501': '河南省安阳市市辖区', '410502': '河南省安阳市文峰区', '410503': '河南省安阳市北关区', '410504': '河南省安阳市铁西区', '410511': '河南省安阳市郊区', '410522': '河南省安阳市安阳县', '410523': '河南省安阳市汤阴县', '410526': '河南省安阳市滑县', '410527': '河南省安阳市内黄县', '410581': '河南省安阳市林州市', '410600': '河南省鹤壁市', '410601': '河南省鹤壁市市辖区', '410602': '河南省鹤壁市鹤山区', '410603': '河南省鹤壁市山城区', '410611': '河南省鹤壁市郊区', '410621': '河南省鹤壁市浚县', '410622': '河南省鹤壁市淇县', '410700': '河南省新乡市', '410701': '河南省新乡市市辖区', '410702': '河南省新乡市红旗区', '410703': '河南省新乡市新华区', '410704': '河南省新乡市北站区', '410711': '河南省新乡市郊区', '410721': '河南省新乡市新乡县', '410724': '河南省新乡市获嘉县', '410725': '河南省新乡市原阳县', '410726': '河南省新乡市延津县', '410727': '河南省新乡市封丘县', '410728': '河南省新乡市长垣县', '410781': '河南省新乡市卫辉市', '410782': '河南省新乡市辉县市', '410800': '河南省焦作市', '410801': '河南省焦作市市辖区', '410802': '河南省焦作市解放区', '410803': '河南省焦作市中站区', '410804': '河南省焦作市马村区', '410811': '河南省焦作市山阳区', '410821': '河南省焦作市修武县', '410822': '河南省焦作市博爱县', '410823': '河南省焦作市武陟县', '410825': '河南省焦作市温县', '410881': '河南省焦作市济源市', '410882': '河南省焦作市沁阳市', '410883': '河南省焦作市孟州市', '410900': '河南省濮阳市', '410901': '河南省濮阳市市辖区', '410902': '河南省濮阳市市区', '410922': '河南省濮阳市清丰县', '410923': '河南省濮阳市南乐县', '410926': '河南省濮阳市范县', '410927': '河南省濮阳市台前县', '410928': '河南省濮阳市濮阳县', '411000': '河南省许昌市', '411001': '河南省许昌市市辖区', '411002': '河南省许昌市魏都区', '411023': '河南省许昌市许昌县', '411024': '河南省许昌市鄢陵县', '411025': '河南省许昌市襄城县', '411081': '河南省许昌市禹州市', '411082': '河南省许昌市长葛市', '411100': '河南省漯河市', '411101': '河南省漯河市市辖区', '411102': '河南省漯河市源汇区', '411121': '河南省漯河市舞阳县', '411122': '河南省漯河市临颍县', '411123': '河南省漯河市郾城县', '411200': '河南省三门峡市', '411201': '河南省三门峡市市辖区', '411202': '河南省三门峡市湖滨区', '411221': '河南省三门峡市渑池县', '411222': '河南省三门峡市陕县', '411224': '河南省三门峡市卢氏县', '411281': '河南省三门峡市义马市', '411282': '河南省三门峡市灵宝市', '411300': '河南省南阳市', '411301': '河南省南阳市市辖区', '411302': '河南省南阳市宛城区', '411303': '河南省南阳市卧龙区', '411321': '河南省南阳市南召县', '411322': '河南省南阳市方城县', '411323': '河南省南阳市西峡县', '411324': '河南省南阳市镇平县', '411325': '河南省南阳市内乡县', '411326': '河南省南阳市淅川县', '411327': '河南省南阳市社旗县', '411328': '河南省南阳市唐河县', '411329': '河南省南阳市新野县', '411330': '河南省南阳市桐柏县', '411381': '河南省南阳市邓州市', '411400': '河南省商丘市', '411401': '河南省商丘市市辖区', '411402': '河南省商丘市梁园区', '411403': '河南省商丘市睢阳区', '411421': '河南省商丘市民权县', '411422': '河南省商丘市睢县', '411423': '河南省商丘市宁陵县', '411424': '河南省商丘市柘城县', '411425': '河南省商丘市虞城县', '411426': '河南省商丘市夏邑县', '411481': '河南省商丘市永城市', '411500': '河南省信阳市', '411501': '河南省信阳市市辖区', '411502': '河南省信阳市师河区', '411503': '河南省信阳市平桥区', '411521': '河南省信阳市罗山县', '411522': '河南省信阳市光山县', '411523': '河南省信阳市新县', '411524': '河南省信阳市商城县', '411525': '河南省信阳市固始县', '411526': '河南省信阳市潢川县', '411527': '河南省信阳市淮滨县', '411528': '河南省信阳市息县', '412700': '河南省周口地区', '412701': '河南省周口地区周口市', '412702': '河南省周口地区项城市', '412721': '河南省周口地区扶沟县', '412722': '河南省周口地区西华县', '412723': '河南省周口地区商水县', '412724': '河南省周口地区太康县', '412725': '河南省周口地区鹿邑县', '412726': '河南省周口地区郸城县', '412727': '河南省周口地区淮阳县', '412728': '河南省周口地区沈丘县', '412800': '河南省驻马店地区', '412801': '河南省驻马店地区驻马店市', '412821': '河南省驻马店地区确山县', '412822': '河南省驻马店地区泌阳县', '412823': '河南省驻马店地区遂平县', '412824': '河南省驻马店地区西平县', '412825': '河南省驻马店地区上蔡县', '412826': '河南省驻马店地区汝南县', '412827': '河南省驻马店地区平舆县', '412828': '河南省驻马店地区新蔡县', '412829': '河南省驻马店地区正阳县', '420000': '湖北省', '420100': '湖北省武汉市', '420101': '湖北省武汉市市辖区', '420102': '湖北省武汉市江岸区', '420103': '湖北省武汉市江汉区', '420104': '湖北省武汉市乔口区', '420105': '湖北省武汉市汉阳区', '420106': '湖北省武汉市武昌区', '420107': '湖北省武汉市青山区', '420111': '湖北省武汉市洪山区', '420112': '湖北省武汉市东西湖区', '420113': '湖北省武汉市汉南区', '420114': '湖北省武汉市蔡甸区', '420115': '湖北省武汉市江夏区', '420116': '湖北省武汉市黄陂区', '420117': '湖北省武汉市新洲区', '420200': '湖北省黄石市', '420201': '湖北省黄石市市辖区', '420202': '湖北省黄石市黄石港区', '420203': '湖北省黄石市石灰窑区', '420204': '湖北省黄石市下陆区', '420205': '湖北省黄石市铁山区', '420222': '湖北省黄石市阳新县', '420281': '湖北省黄石市大冶市', '420300': '湖北省十堰市', '420301': '湖北省十堰市市辖区', '420302': '湖北省十堰市茅箭区', '420303': '湖北省十堰市张湾区', '420321': '湖北省十堰市郧县', '420322': '湖北省十堰市郧西县', '420323': '湖北省十堰市竹山县', '420324': '湖北省十堰市竹溪县', '420325': '湖北省十堰市房县', '420381': '湖北省十堰市丹江口市', '420500': '湖北省宜昌市', '420501': '湖北省宜昌市市辖区', '420502': '湖北省宜昌市西陵区', '420503': '湖北省宜昌市伍家岗区', '420504': '湖北省宜昌市点军区', '420505': '湖北省宜昌市虎亭区', '420521': '湖北省宜昌市宜昌县', '420525': '湖北省宜昌市远安县', '420526': '湖北省宜昌市兴山县', '420527': '湖北省宜昌市秭归县', '420528': '湖北省宜昌市长阳土家族自治县', '420529': '湖北省宜昌市五峰土家族自治县', '420581': '湖北省宜昌市宜都市', '420582': '湖北省宜昌市当阳市', '420583': '湖北省宜昌市枝江市', '420600': '湖北省襄樊市', '420601': '湖北省襄樊市市辖区', '420602': '湖北省襄樊市襄城区', '420606': '湖北省襄樊市樊城区', '420621': '湖北省襄樊市襄阳县', '420624': '湖北省襄樊市南漳县', '420625': '湖北省襄樊市谷城县', '420626': '湖北省襄樊市保康县', '420682': '湖北省襄樊市老河口市', '420683': '湖北省襄樊市枣阳市', '420684': '湖北省襄樊市宜城市', '420700': '湖北省鄂州市', '420701': '湖北省鄂州市市辖区', '420702': '湖北省鄂州市梁子湖区', '420703': '湖北省鄂州市华容区', '420704': '湖北省鄂州市鄂城区', '420800': '湖北省荆门市', '420801': '湖北省荆门市市辖区', '420802': '湖北省荆门市东宝区', '420821': '湖北省荆门市京山县', '420822': '湖北省荆门市沙洋县', '420881': '湖北省荆门市钟祥市', '420900': '湖北省孝感市', '420901': '湖北省孝感市市辖区', '420902': '湖北省孝感市孝南区', '420921': '湖北省孝感市孝昌县', '420922': '湖北省孝感市大悟县', '420923': '湖北省孝感市云梦县', '420981': '湖北省孝感市应城市', '420982': '湖北省孝感市安陆市', '420983': '湖北省孝感市广水市', '420984': '湖北省孝感市汉川市', '421000': '湖北省荆州市', '421001': '湖北省荆州市市辖区', '421002': '湖北省荆州市沙市区', '421003': '湖北省荆州市荆州区', '421022': '湖北省荆州市公安县', '421023': '湖北省荆州市监利县', '421024': '湖北省荆州市江陵县', '421081': '湖北省荆州市石首市', '421083': '湖北省荆州市洪湖市', '421087': '湖北省荆州市松滋市', '421100': '湖北省黄冈市', '421101': '湖北省黄冈市市辖区', '421102': '湖北省黄冈市黄州区', '421121': '湖北省黄冈市团风县', '421122': '湖北省黄冈市红安县', '421123': '湖北省黄冈市罗田县', '421124': '湖北省黄冈市英山县', '421125': '湖北省黄冈市浠水县', '421126': '湖北省黄冈市蕲春县', '421127': '湖北省黄冈市黄梅县', '421181': '湖北省黄冈市麻城市', '421182': '湖北省黄冈市武穴市', '421200': '湖北省咸宁市', '421201': '湖北省咸宁市市辖区', '421202': '湖北省咸宁市咸安区', '421221': '湖北省咸宁市嘉鱼县', '421222': '湖北省咸宁市通城县', '421223': '湖北省咸宁市崇阳县', '421224': '湖北省咸宁市通山县', '422800': '湖北省施土家族苗族自治州', '422801': '湖北省恩施土家族苗族自治州恩施县', '422802': '湖北省恩施土家族苗族自治州利川市', '422822': '湖北省恩施土家族苗族自治州建始县', '422823': '湖北省恩施土家族苗族自治州巴东县', '422825': '湖北省恩施土家族苗族自治州宣恩县', '422826': '湖北省恩施土家族苗族自治州咸丰县', '422827': '湖北省恩施土家族苗族自治州来凤县', '422828': '湖北省恩施土家族苗族自治州鹤峰县', '429000': '湖北省省直辖县级行政单位', '429001': '湖北省随州市', '429004': '湖北省仙桃市', '429005': '湖北省潜江市', '429006': '湖北省天门市', '429021': '湖北省神农架林区', '430000': '湖南省', '430100': '湖南省长沙市', '430101': '湖南省长沙市市辖区', '430102': '湖南省长沙市芙蓉区', '430103': '湖南省长沙市天心区', '430104': '湖南省长沙市岳麓区', '430105': '湖南省长沙市开福区', '430111': '湖南省长沙市雨花区', '430121': '湖南省长沙市长沙县', '430122': '湖南省长沙市望城县', '430124': '湖南省长沙市宁乡县', '430181': '湖南省长沙市浏阳市', '430200': '湖南省株洲市', '430201': '湖南省株洲市市辖区', '430202': '湖南省株洲市荷塘区', '430203': '湖南省株洲市芦淞区', '430204': '湖南省株洲市石峰区', '430211': '湖南省株洲市天元区', '430221': '湖南省株洲市株洲县', '430223': '湖南省株洲市攸县', '430224': '湖南省株洲市茶陵县', '430225': '湖南省株洲市炎陵县', '430281': '湖南省株洲市醴陵市', '430300': '湖南省湘潭市', '430301': '湖南省湘潭市市辖区', '430302': '湖南省湘潭市雨湖区', '430304': '湖南省湘潭市岳塘区', '430321': '湖南省湘潭市湘潭县', '430381': '湖南省湘潭市湘乡市', '430382': '湖南省湘潭市韶山市', '430400': '湖南省衡阳市', '430401': '湖南省衡阳市市辖区', '430402': '湖南省衡阳市江东区', '430403': '湖南省衡阳市城南区', '430404': '湖南省衡阳市城北区', '430411': '湖南省衡阳市郊区', '430412': '湖南省衡阳市南岳区', '430421': '湖南省衡阳市衡阳县', '430422': '湖南省衡阳市衡南县', '430423': '湖南省衡阳市衡山县', '430424': '湖南省衡阳市衡东县', '430426': '湖南省衡阳市祁东县', '430481': '湖南省衡阳市耒阳市', '430482': '湖南省衡阳市常宁市', '430500': '湖南省邵阳市', '430501': '湖南省邵阳市市辖区', '430502': '湖南省邵阳市双清区', '430503': '湖南省邵阳市大祥区', '430511': '湖南省邵阳市北塔区', '430521': '湖南省邵阳市邵东县', '430522': '湖南省邵阳市新邵县', '430523': '湖南省邵阳市邵阳县', '430524': '湖南省邵阳市隆回县', '430525': '湖南省邵阳市洞口县', '430527': '湖南省邵阳市绥宁县', '430528': '湖南省邵阳市新宁县', '430529': '湖南省邵阳市城步苗族自治县', '430581': '湖南省邵阳市武冈市', '430600': '湖南省岳阳市', '430601': '湖南省岳阳市市辖区', '430602': '湖南省岳阳市岳阳楼区', '430603': '湖南省岳阳市云溪区', '430611': '湖南省岳阳市君山区', '430621': '湖南省岳阳市岳阳县', '430623': '湖南省岳阳市华容县', '430624': '湖南省岳阳市湘阴县', '430626': '湖南省岳阳市平江县', '430681': '湖南省岳阳市汨罗市', '430682': '湖南省岳阳市临湘市', '430700': '湖南省常德市', '430701': '湖南省常德市市辖区', '430702': '湖南省常德市武陵区', '430703': '湖南省常德市鼎城区', '430721': '湖南省常德市安乡县', '430722': '湖南省常德市汉寿县', '430723': '湖南省常德市澧县', '430724': '湖南省常德市临澧县', '430725': '湖南省常德市桃源县', '430726': '湖南省常德市石门县', '430781': '湖南省常德市津市市', '430800': '湖南省张家界市', '430801': '湖南省张家界市市辖区', '430802': '湖南省张家界市永定区', '430811': '湖南省张家界市武陵源区', '430821': '湖南省张家界市慈利县', '430822': '湖南省张家界市桑植县', '430900': '湖南省益阳市', '430901': '湖南省益阳市市辖区', '430902': '湖南省益阳市资阳区', '430903': '湖南省益阳市赫山区', '430921': '湖南省益阳市南县', '430922': '湖南省益阳市桃江县', '430923': '湖南省益阳市安化县', '430981': '湖南省益阳市沅江市', '431000': '湖南省郴州市', '431001': '湖南省郴州市市辖区', '431002': '湖南省郴州市北湖区', '431003': '湖南省郴州市苏仙区', '431021': '湖南省郴州市桂阳县', '431022': '湖南省郴州市宜章县', '431023': '湖南省郴州市永兴县', '431024': '湖南省郴州市嘉禾县', '431025': '湖南省郴州市临武县', '431026': '湖南省郴州市汝城县', '431027': '湖南省郴州市桂东县', '431028': '湖南省郴州市安仁县', '431081': '湖南省郴州市资兴市', '431100': '湖南省永州市', '431101': '湖南省永州市市辖区', '431102': '湖南省永州市芝山区', '431103': '湖南省永州市冷水滩区', '431121': '湖南省永州市祁阳县', '431122': '湖南省永州市东安县', '431123': '湖南省永州市双牌县', '431124': '湖南省永州市道县', '431125': '湖南省永州市江永县', '431126': '湖南省永州市宁远县', '431127': '湖南省永州市蓝山县', '431128': '湖南省永州市新田县', '431129': '湖南省永州市江华瑶族自治县', '431200': '湖南省怀化市', '431201': '湖南省怀化市市辖区', '431202': '湖南省怀化市鹤城区', '431221': '湖南省怀化市中方县', '431222': '湖南省怀化市沅陵县', '431223': '湖南省怀化市辰溪县', '431224': '湖南省怀化市溆浦县', '431225': '湖南省怀化市会同县', '431226': '湖南省怀化市麻阳苗族自治县', '431227': '湖南省怀化市新晃侗族自治县', '431228': '湖南省怀化市芷江侗族自治县', '431229': '湖南省怀化市靖州苗族侗族自治县', '431230': '湖南省怀化市通道侗族自治县', '431281': '湖南省怀化市洪江市', '432500': '湖南省娄底地区', '432501': '湖南省娄底地区娄底市', '432502': '湖南省娄底地区冷水江市', '432503': '湖南省娄底地区涟源市', '432522': '湖南省娄底地区双峰县', '432524': '湖南省娄底地区新化县', '433000': '湖南省怀化市', '433001': '湖南省怀化市', '433100': '湖南省湘西土家族苗族自治州', '433101': '湖南省湘西土家族苗族自治州吉首市', '433122': '湖南省湘西土家族苗族自治州泸溪县', '433123': '湖南省湘西土家族苗族自治州凤凰县', '433124': '湖南省湘西土家族苗族自治州花垣县', '433125': '湖南省湘西土家族苗族自治州保靖县', '433126': '湖南省湘西土家族苗族自治州古丈县', '433127': '湖南省湘西土家族苗族自治州永顺县', '433130': '湖南省湘西土家族苗族自治州龙山县', '440000': '广东省', '440100': '广东省广州市', '440101': '广东省广州市市辖区', '440102': '广东省广州市东山区', '440103': '广东省广州市荔湾区', '440104': '广东省广州市越秀区', '440105': '广东省广州市海珠区', '440106': '广东省广州市天河区', '440107': '广东省广州市芳村区', '440111': '广东省广州市白云区', '440112': '广东省广州市黄埔区', '440181': '广东省广州市番禺市', '440182': '广东省广州市花都市', '440183': '广东省广州市增城市', '440184': '广东省广州市从化市', '440200': '广东省韶关市', '440201': '广东省韶关市市辖区', '440202': '广东省韶关市北江区', '440203': '广东省韶关市武江区', '440204': '广东省韶关市浈江区', '440221': '广东省韶关市曲江县', '440222': '广东省韶关市始兴县', '440224': '广东省韶关市仁化县', '440229': '广东省韶关市翁源县', '440232': '广东省韶关市乳源瑶族自治县', '440233': '广东省韶关市新丰县', '440281': '广东省韶关市乐昌市', '440282': '广东省韶关市南雄市', '440300': '广东省深圳市', '440301': '广东省深圳市市辖区', '440303': '广东省深圳市罗湖区', '440304': '广东省深圳市福田区', '440305': '广东省深圳市南山区', '440306': '广东省深圳市宝安区', '440307': '广东省深圳市龙岗区', '440308': '广东省深圳市盐田区', '440400': '广东省珠海市', '440401': '广东省珠海市市辖区', '440402': '广东省珠海市香洲区', '440421': '广东省珠海市斗门县', '440500': '广东省汕头市', '440501': '广东省汕头市市辖区', '440506': '广东省汕头市达濠区', '440507': '广东省汕头市龙湖区', '440508': '广东省汕头市金园区', '440509': '广东省汕头市升平区', '440510': '广东省汕头市河浦区', '440523': '广东省汕头市南澳县', '440582': '广东省汕头市潮阳市', '440583': '广东省汕头市澄海市', '440600': '广东省佛山市', '440601': '广东省佛山市市辖区', '440602': '广东省佛山市城区', '440603': '广东省佛山市石湾区', '440681': '广东省佛山市顺德市', '440682': '广东省佛山市南海市', '440683': '广东省佛山市三水市', '440684': '广东省佛山市高明市', '440700': '广东省江门市', '440701': '广东省江门市市辖区', '440703': '广东省江门市蓬江区', '440704': '广东省江门市江海区', '440781': '广东省江门市台山市', '440782': '广东省江门市新会市', '440783': '广东省江门市开平市', '440784': '广东省江门市鹤山市', '440785': '广东省江门市恩平市', '440800': '广东省湛江市', '440801': '广东省湛江市市辖区', '440802': '广东省湛江市赤坎区', '440803': '广东省湛江市霞山区', '440804': '广东省湛江市坡头区', '440811': '广东省湛江市麻章区', '440823': '广东省湛江市遂溪县', '440825': '广东省湛江市徐闻县', '440881': '广东省湛江市廉江市', '440882': '广东省湛江市雷州市', '440883': '广东省湛江市吴川市', '440900': '广东省茂名市', '440901': '广东省茂名市市辖区', '440902': '广东省茂名市茂南区', '440923': '广东省茂名市电白县', '440981': '广东省茂名市高州市', '440982': '广东省茂名市化州市', '440983': '广东省茂名市信宜市', '441200': '广东省肇庆市', '441201': '广东省肇庆市市辖区', '441202': '广东省肇庆市端州区', '441203': '广东省肇庆市鼎湖区', '441223': '广东省肇庆市广宁县', '441224': '广东省肇庆市怀集县', '441225': '广东省肇庆市封开县', '441226': '广东省肇庆市德庆县', '441283': '广东省肇庆市高要市', '441284': '广东省肇庆市四会市', '441300': '广东省惠州市', '441301': '广东省惠州市市辖区', '441302': '广东省惠州市惠城区', '441322': '广东省惠州市博罗县', '441323': '广东省惠州市惠东县', '441324': '广东省惠州市龙门县', '441381': '广东省惠州市惠阳市', '441400': '广东省梅州市', '441401': '广东省梅州市市辖区', '441402': '广东省梅州市梅江区', '441421': '广东省梅州市梅县', '441422': '广东省梅州市大埔县', '441423': '广东省梅州市丰顺县', '441424': '广东省梅州市五华县', '441426': '广东省梅州市平远县', '441427': '广东省梅州市蕉岭县', '441481': '广东省梅州市兴宁市', '441500': '广东省汕尾市', '441501': '广东省汕尾市市辖区', '441502': '广东省汕尾市城区', '441521': '广东省汕尾市海丰县', '441523': '广东省汕尾市陆河县', '441581': '广东省汕尾市陆丰市', '441600': '广东省河源市', '441601': '广东省河源市市辖区', '441602': '广东省河源市源城区', '441621': '广东省河源市紫金县', '441622': '广东省河源市龙川县', '441623': '广东省河源市连平县', '441624': '广东省河源市和平县', '441625': '广东省河源市东源县', '441700': '广东省阳江市', '441701': '广东省阳江市市辖区', '441702': '广东省阳江市江城区', '441721': '广东省阳江市阳西县', '441723': '广东省阳江市阳东县', '441781': '广东省阳江市阳春市', '441800': '广东省清远市', '441801': '广东省清远市市辖区', '441802': '广东省清远市清城区', '441821': '广东省清远市佛冈县', '441823': '广东省清远市阳山县', '441825': '广东省清远市连山壮族瑶族自治县', '441826': '广东省清远市连南瑶族自治县', '441827': '广东省清远市清新县', '441881': '广东省清远市英德市', '441882': '广东省清远市连州市', '441900': '广东省东莞市', '441901': '广东省东莞市市辖区', '442000': '广东省中山市', '442001': '广东省中山市市辖区', '445100': '广东省潮州市', '445101': '广东省潮州市市辖区', '445102': '广东省潮州市湘桥区', '445121': '广东省潮州市潮安县', '445122': '广东省潮州市饶平县', '445200': '广东省揭阳市', '445201': '广东省揭阳市市辖区', '445202': '广东省揭阳市榕城区', '445221': '广东省揭阳市揭东县', '445222': '广东省揭阳市揭西县', '445224': '广东省揭阳市惠来县', '445281': '广东省揭阳市普宁市', '445300': '广东省云浮市', '445301': '广东省云浮市市辖区', '445302': '广东省云浮市云城区', '445321': '广东省云浮市新兴县', '445322': '广东省云浮市郁南县', '445323': '广东省云浮市云安县', '445381': '广东省云浮市罗定市', '450000': '广西壮族自治区', '450100': '广西壮族自治区南宁市', '450101': '广西壮族自治区南宁市市辖区', '450102': '广西壮族自治区南宁市兴宁区', '450103': '广西壮族自治区南宁市新城区', '450104': '广西壮族自治区南宁市城北区', '450105': '广西壮族自治区南宁市江南区', '450106': '广西壮族自治区南宁市永新区', '450111': '广西壮族自治区南宁市市郊区', '450121': '广西壮族自治区南宁市邕宁县', '450122': '广西壮族自治区南宁市武鸣县', '450200': '广西壮族自治区柳州市', '450201': '广西壮族自治区柳州市市辖区', '450202': '广西壮族自治区柳州市城中区', '450203': '广西壮族自治区柳州市鱼峰区', '450204': '广西壮族自治区柳州市柳南区', '450205': '广西壮族自治区柳州市柳北区', '450211': '广西壮族自治区柳州市市郊区', '450221': '广西壮族自治区柳州市柳江县', '450222': '广西壮族自治区柳州市柳城县', '450300': '广西壮族自治区桂林市', '450301': '广西壮族自治区桂林市市辖区', '450302': '广西壮族自治区桂林市秀峰区', '450303': '广西壮族自治区桂林市叠彩区', '450304': '广西壮族自治区桂林市象山区', '450305': '广西壮族自治区桂林市七星区', '450311': '广西壮族自治区桂林市雁山区', '450321': '广西壮族自治区桂林市阳朔县', '450322': '广西壮族自治区桂林市临桂县', '450323': '广西壮族自治区桂林市灵川县', '450324': '广西壮族自治区桂林市全州县', '450325': '广西壮族自治区桂林市兴安县', '450326': '广西壮族自治区桂林市永福县', '450327': '广西壮族自治区桂林市灌阳县', '450328': '广西壮族自治区桂林市龙胜各族自治县', '450329': '广西壮族自治区桂林市资源县', '450330': '广西壮族自治区桂林市平乐县', '450331': '广西壮族自治区桂林市荔浦县', '450332': '广西壮族自治区桂林市恭城瑶族自治县', '450400': '广西壮族自治区梧州市', '450401': '广西壮族自治区梧州市市辖区', '450403': '广西壮族自治区梧州市万秀区', '450404': '广西壮族自治区梧州市蝶山区', '450411': '广西壮族自治区梧州市市郊区', '450421': '广西壮族自治区梧州市苍梧县', '450422': '广西壮族自治区梧州市藤县', '450423': '广西壮族自治区梧州市蒙山县', '450481': '广西壮族自治区梧州市岑溪市', '450500': '广西壮族自治区北海市', '450501': '广西壮族自治区北海市市辖区', '450502': '广西壮族自治区北海市海城区', '450503': '广西壮族自治区北海市银海区', '450512': '广西壮族自治区北海市铁山港区', '450521': '广西壮族自治区北海市合浦县', '450600': '广西壮族自治区防城港市', '450601': '广西壮族自治区防城港市市辖区', '450602': '广西壮族自治区防城港市港口区', '450603': '广西壮族自治区防城港市防城区', '450621': '广西壮族自治区防城港市上思县', '450681': '广西壮族自治区防城港市东兴市', '450700': '广西壮族自治区钦州市', '450701': '广西壮族自治区钦州市市辖区', '450702': '广西壮族自治区钦州市钦南区', '450703': '广西壮族自治区钦州市钦北区', '450721': '广西壮族自治区钦州市灵山县', '450722': '广西壮族自治区钦州市浦北县', '450800': '广西壮族自治区贵港市', '450801': '广西壮族自治区贵港市市辖区', '450802': '广西壮族自治区贵港市港北区', '450803': '广西壮族自治区贵港市港南区', '450821': '广西壮族自治区贵港市平南县', '450881': '广西壮族自治区贵港市桂平市', '450900': '广西壮族自治区玉林市', '450901': '广西壮族自治区玉林市市辖区', '450902': '广西壮族自治区玉林市玉州区', '450921': '广西壮族自治区玉林市容县', '450922': '广西壮族自治区玉林市陆川县', '450923': '广西壮族自治区玉林市博白县', '450924': '广西壮族自治区玉林市兴业县', '450981': '广西壮族自治区玉林市北流市', '452100': '广西壮族自治区南宁地区', '452101': '广西壮族自治区南宁地区凭祥市', '452122': '广西壮族自治区南宁地区横县', '452123': '广西壮族自治区南宁地区宾阳县', '452124': '广西壮族自治区南宁地区上林县', '452126': '广西壮族自治区南宁地区隆安县', '452127': '广西壮族自治区南宁地区马山县', '452128': '广西壮族自治区南宁地区扶绥县', '452129': '广西壮族自治区南宁地区崇左县', '452130': '广西壮族自治区南宁地区大新县', '452131': '广西壮族自治区南宁地区天等县', '452132': '广西壮族自治区南宁地区宁明县', '452133': '广西壮族自治区南宁地区龙州县', '452200': '广西壮族自治区柳州地区', '452201': '广西壮族自治区柳州地区合山市', '452223': '广西壮族自治区柳州地区鹿寨县', '452224': '广西壮族自治区柳州地区象州县', '452225': '广西壮族自治区柳州地区武宣县', '452226': '广西壮族自治区柳州地区来宾县', '452227': '广西壮族自治区柳州地区融安县', '452228': '广西壮族自治区柳州地区三江侗族自治县', '452229': '广西壮族自治区柳州地区融水苗族自治县', '452230': '广西壮族自治区柳州地区金秀瑶族自治县', '452231': '广西壮族自治区柳州地区忻城县', '452400': '广西壮族自治区贺州地区', '452402': '广西壮族自治区贺州地区贺州市', '452424': '广西壮族自治区贺州地区昭平县', '452427': '广西壮族自治区贺州地区钟山县', '452428': '广西壮族自治区贺州地区富川瑶族自治县', '452600': '广西壮族自治区百色地区', '452601': '广西壮族自治区百色地区百色市', '452622': '广西壮族自治区百色地区田阳县', '452623': '广西壮族自治区百色地区田东县', '452624': '广西壮族自治区百色地区平果县', '452625': '广西壮族自治区百色地区德保县', '452626': '广西壮族自治区百色地区靖西县', '452627': '广西壮族自治区百色地区那坡县', '452628': '广西壮族自治区百色地区凌云县', '452629': '广西壮族自治区百色地区乐业县', '452630': '广西壮族自治区百色地区田林县', '452631': '广西壮族自治区百色地区隆林各族自治县', '452632': '广西壮族自治区百色地区西林县', '452700': '广西壮族自治区河池地区', '452701': '广西壮族自治区河池地区河池市', '452702': '广西壮族自治区河池地区宜州市', '452723': '广西壮族自治区河池地区罗城仫佬族自治县', '452724': '广西壮族自治区河池地区环江毛南族自治县', '452725': '广西壮族自治区河池地区南丹县', '452726': '广西壮族自治区河池地区天峨县', '452727': '广西壮族自治区河池地区凤山县', '452728': '广西壮族自治区河池地区东兰县', '452729': '广西壮族自治区河池地区巴马瑶族自治县', '452730': '广西壮族自治区河池地区都安瑶族自治县', '452731': '广西壮族自治区河池地区大化瑶族自治县', '460000': '海南省', '460001': '海南省三亚市通什市', '460002': '海南省三亚市琼海市', '460003': '海南省三亚市儋州市', '460004': '海南省三亚市琼山市', '460005': '海南省三亚市文昌市', '460006': '海南省三亚市万宁市', '460007': '海南省三亚市东方市', '460025': '海南省三亚市定安县', '460026': '海南省三亚市屯昌县', '460027': '海南省三亚市澄迈县', '460028': '海南省三亚市临高县', '460030': '海南省三亚市白沙黎族自治县', '460031': '海南省三亚市昌江黎族自治县', '460033': '海南省三亚市乐东黎族自治县', '460034': '海南省三亚市陵水黎族自治县', '460035': '海南省三亚市保亭黎族苗族自治县', '460036': '海南省三亚市琼中黎族苗族自治县', '460037': '海南省西沙群岛', '460038': '海南省南沙群岛', '460039': '海南省中沙群岛的岛礁及其海域', '460100': '海南省海口市', '460101': '海南省海口市市辖区', '460102': '海南省海口市振东区', '460103': '海南省海口市新华区', '460104': '海南省海口市秀英区', '460200': '海南省三亚市', '460201': '海南省三亚市市辖区', '500000': '重庆市', '500100': '重庆市市辖区', '500101': '重庆市万州区', '500102': '重庆市涪陵区', '500103': '重庆市渝中区', '500104': '重庆市大渡口区', '500105': '重庆市江北区', '500106': '重庆市沙坪坝区', '500107': '重庆市九龙坡区', '500108': '重庆市南岸区', '500109': '重庆市北碚区', '500110': '重庆市万盛区', '500111': '重庆市双桥区', '500112': '重庆市渝北区', '500113': '重庆市巴南区', '500200': '重庆市县', '500221': '重庆市长寿县', '500222': '重庆市綦江县', '500223': '重庆市潼南县', '500224': '重庆市铜梁县', '500225': '重庆市大足县', '500226': '重庆市荣昌县', '500227': '重庆市璧山县', '500228': '重庆市梁平县', '500229': '重庆市城口县', '500230': '重庆市丰都县', '500231': '重庆市垫江县', '500232': '重庆市武隆县', '500233': '重庆市忠县', '500234': '重庆市开县', '500235': '重庆市云阳县', '500236': '重庆市奉节县', '500237': '重庆市巫山县', '500238': '重庆市巫溪县', '500239': '重庆市黔江土家族苗族自治县', '500240': '重庆市石柱土家族自治县', '500241': '重庆市秀山土家族苗族自治县', '500242': '重庆市酉阳土家族苗族自治县', '500243': '重庆市彭水苗族土家族自治县', '500300': '重庆市(市)', '500381': '重庆市江津市', '500382': '重庆市合川市', '500383': '重庆市永川市', '500384': '重庆市南川市', '510000': '四川省', '510100': '四川省成都市', '510101': '四川省成都市市辖区', '510104': '四川省成都市锦江区', '510105': '四川省成都市青羊区', '510106': '四川省成都市金牛区', '510107': '四川省成都市武侯区', '510108': '四川省成都市成华区', '510112': '四川省成都市龙泉驿区', '510113': '四川省成都市青白江区', '510121': '四川省成都市金堂县', '510122': '四川省成都市双流县', '510123': '四川省成都市温江县', '510124': '四川省成都市郫县', '510125': '四川省成都市新都县', '510129': '四川省成都市大邑县', '510131': '四川省成都市蒲江县', '510132': '四川省成都市新津县', '510181': '四川省成都市都江堰市', '510182': '四川省成都市彭州市', '510183': '四川省成都市邛崃市', '510184': '四川省成都市崇州市', '510300': '四川省自贡市', '510301': '四川省自贡市市辖区', '510302': '四川省自贡市自流井区', '510303': '四川省自贡市贡井区', '510304': '四川省自贡市大安区', '510311': '四川省自贡市沿滩区', '510321': '四川省自贡市荣县', '510322': '四川省自贡市富顺县', '510400': '四川省攀枝花市', '510401': '四川省攀枝花市市辖区', '510402': '四川省攀枝花市东区', '510403': '四川省攀枝花市西区', '510411': '四川省攀枝花市仁和区', '510421': '四川省攀枝花市米易县', '510422': '四川省攀枝花市盐边县', '510500': '四川省泸州市', '510501': '四川省泸州市市辖区', '510502': '四川省泸州市江阳区', '510503': '四川省泸州市纳溪区', '510504': '四川省泸州市龙马潭区', '510521': '四川省泸州市泸县', '510522': '四川省泸州市合江县', '510524': '四川省泸州市叙永县', '510525': '四川省泸州市古蔺县', '510600': '四川省德阳市', '510601': '四川省德阳市市辖区', '510603': '四川省德阳市旌阳区', '510623': '四川省德阳市中江县', '510626': '四川省德阳市罗江县', '510681': '四川省德阳市广汉市', '510682': '四川省德阳市什邡市', '510683': '四川省德阳市绵竹市', '510700': '四川省绵阳市', '510701': '四川省绵阳市市辖区', '510703': '四川省绵阳市涪城区', '510704': '四川省绵阳市游仙区', '510722': '四川省绵阳市三台县', '510723': '四川省绵阳市盐亭县', '510724': '四川省绵阳市安县', '510725': '四川省绵阳市梓潼县', '510726': '四川省绵阳市北川县', '510727': '四川省绵阳市平武县', '510781': '四川省绵阳市江油市', '510800': '四川省广元市', '510801': '四川省广元市市辖区', '510802': '四川省广元市市中区', '510811': '四川省广元市元坝区', '510812': '四川省广元市朝天区', '510821': '四川省广元市旺苍县', '510822': '四川省广元市青川县', '510823': '四川省广元市剑阁县', '510824': '四川省广元市苍溪县', '510900': '四川省遂宁市', '510901': '四川省遂宁市市辖区', '510902': '四川省遂宁市市中区', '510921': '四川省遂宁市蓬溪县', '510922': '四川省遂宁市射洪县', '510923': '四川省遂宁市大英县', '511000': '四川省内江市', '511001': '四川省内江市市辖区', '511002': '四川省内江市市中区', '511011': '四川省内江市东兴区', '511024': '四川省内江市威远县', '511025': '四川省内江市资中县', '511028': '四川省内江市隆昌县', '511100': '四川省乐山市', '511101': '四川省乐山市市辖区', '511102': '四川省乐山市市中区', '511111': '四川省乐山市沙湾区', '511112': '四川省乐山市五通桥区', '511113': '四川省乐山市金口河区', '511123': '四川省乐山市犍为县', '511124': '四川省乐山市井研县', '511126': '四川省乐山市夹江县', '511129': '四川省乐山市沐川县', '511132': '四川省乐山市峨边彝族自治县', '511133': '四川省乐山市马边彝族自治县', '511181': '四川省乐山市峨眉山市', '511300': '四川省南充市', '511301': '四川省南充市市辖区', '511302': '四川省南充市顺庆区', '511303': '四川省南充市高坪区', '511304': '四川省南充市嘉陵区', '511321': '四川省南充市南部县', '511322': '四川省南充市营山县', '511323': '四川省南充市蓬安县', '511324': '四川省南充市仪陇县', '511325': '四川省南充市西充县', '511381': '四川省南充市阆中市', '511500': '四川省宜宾市', '511501': '四川省宜宾市市辖区', '511502': '四川省宜宾市翠屏区', '511521': '四川省宜宾市宜宾县', '511522': '四川省宜宾市南溪县', '511523': '四川省宜宾市江安县', '511524': '四川省宜宾市长宁县', '511525': '四川省宜宾市高县', '511526': '四川省宜宾市珙县', '511527': '四川省宜宾市筠连县', '511528': '四川省宜宾市兴文县', '511529': '四川省宜宾市屏山县', '511600': '四川省广安市', '511601': '四川省广安市市辖区', '511602': '四川省广安市广安区', '511621': '四川省广安市岳池县', '511622': '四川省广安市武胜县', '511623': '四川省广安市邻水县', '511681': '四川省广安市华蓥市', '513000': '四川省达川地区', '513001': '四川省达川地区达川市', '513002': '四川省达川地区万源市', '513021': '四川省达川地区达县', '513022': '四川省达川地区宣汉县', '513023': '四川省达川地区开江县', '513029': '四川省达川地区大竹县', '513030': '四川省达川地区渠县', '513100': '四川省雅安地区', '513101': '四川省雅安地区雅安市', '513122': '四川省雅安地区名山县', '513123': '四川省雅安地区荥经县', '513124': '四川省雅安地区汉源县', '513125': '四川省雅安地区石棉县', '513126': '四川省雅安地区天全县', '513127': '四川省雅安地区芦山县', '513128': '四川省雅安地区宝兴县', '513200': '四川省阿坝藏族羌族自治州', '513221': '四川省阿坝藏族羌族自治州汶川县', '513222': '四川省阿坝藏族羌族自治州理县', '513223': '四川省阿坝藏族羌族自治州茂县', '513224': '四川省阿坝藏族羌族自治州松潘县', '513225': '四川省阿坝藏族羌族自治州九寨沟县', '513226': '四川省阿坝藏族羌族自治州金川县', '513227': '四川省阿坝藏族羌族自治州小金县', '513228': '四川省阿坝藏族羌族自治州黑水县', '513229': '四川省阿坝藏族羌族自治州马尔康县', '513230': '四川省阿坝藏族羌族自治州壤塘县', '513231': '四川省阿坝藏族羌族自治州阿坝县', '513232': '四川省阿坝藏族羌族自治州若尔盖县', '513233': '四川省阿坝藏族羌族自治州红原县', '513300': '四川省甘孜藏族自治州', '513321': '四川省甘孜藏族自治州康定县', '513322': '四川省甘孜藏族自治州泸定县', '513323': '四川省甘孜藏族自治州丹巴县', '513324': '四川省甘孜藏族自治州九龙县', '513325': '四川省甘孜藏族自治州雅江县', '513326': '四川省甘孜藏族自治州道孚县', '513327': '四川省甘孜藏族自治州炉霍县', '513328': '四川省甘孜藏族自治州甘孜县', '513329': '四川省甘孜藏族自治州新龙县', '513330': '四川省甘孜藏族自治州德格县', '513331': '四川省甘孜藏族自治州白玉县', '513332': '四川省甘孜藏族自治州石渠县', '513333': '四川省甘孜藏族自治州色达县', '513334': '四川省甘孜藏族自治州理塘县', '513335': '四川省甘孜藏族自治州巴塘县', '513336': '四川省甘孜藏族自治州乡城县', '513337': '四川省甘孜藏族自治州稻城县', '513338': '四川省甘孜藏族自治州得荣县', '513400': '四川省凉山彝族自治州', '513401': '四川省凉山彝族自治州西昌市', '513422': '四川省凉山彝族自治州木里藏族自治县', '513423': '四川省凉山彝族自治州盐源县', '513424': '四川省凉山彝族自治州德昌县', '513425': '四川省凉山彝族自治州会理县', '513426': '四川省凉山彝族自治州会东县', '513427': '四川省凉山彝族自治州宁南县', '513428': '四川省凉山彝族自治州普格县', '513429': '四川省凉山彝族自治州布拖县', '513430': '四川省凉山彝族自治州金阳县', '513431': '四川省凉山彝族自治州昭觉县', '513432': '四川省凉山彝族自治州喜德县', '513433': '四川省凉山彝族自治州冕宁县', '513434': '四川省凉山彝族自治州越西县', '513435': '四川省凉山彝族自治州甘洛县', '513436': '四川省凉山彝族自治州美姑县', '513437': '四川省凉山彝族自治州雷波县', '513700': '四川省巴中地区', '513701': '四川省巴中地区巴中市', '513721': '四川省巴中地区通江县', '513722': '四川省巴中地区南江县', '513723': '四川省巴中地区平昌县', '513800': '四川省眉山地区', '513821': '四川省眉山地区眉山县', '513822': '四川省眉山地区仁寿县', '513823': '四川省眉山地区彭山县', '513824': '四川省眉山地区洪雅县', '513825': '四川省眉山地区丹棱县', '513826': '四川省眉山地区青神县', '513900': '四川省眉山地区资阳地区', '513901': '四川省眉山地区资阳市', '513902': '四川省眉山地区简阳市', '513921': '四川省眉山地区安岳县', '513922': '四川省眉山地区乐至县', '520000': '贵州省', '520100': '贵州省贵阳市', '520101': '贵州省贵阳市市辖区', '520102': '贵州省贵阳市南明区', '520103': '贵州省贵阳市云岩区', '520111': '贵州省贵阳市花溪区', '520112': '贵州省贵阳市乌当区', '520113': '贵州省贵阳市白云区', '520121': '贵州省贵阳市开阳县', '520122': '贵州省贵阳市息烽县', '520123': '贵州省贵阳市修文县', '520181': '贵州省贵阳市清镇市', '520200': '贵州省六盘水市', '520201': '贵州省六盘水市钟山区', '520202': '贵州省六盘水市盘县特区', '520203': '贵州省六盘水市六枝特区', '520221': '贵州省六盘水市水城县', '520300': '贵州省遵义市', '520301': '贵州省遵义市市辖区', '520302': '贵州省遵义市红花岗区', '520321': '贵州省遵义市遵义县', '520322': '贵州省遵义市桐梓县', '520323': '贵州省遵义市绥阳县', '520324': '贵州省遵义市正安县', '520325': '贵州省遵义市道真仡佬族苗族自治县', '520326': '贵州省遵义市务川仡佬族苗族自治县', '520327': '贵州省遵义市凤冈县', '520328': '贵州省遵义市湄潭县', '520329': '贵州省遵义市余庆县', '520330': '贵州省遵义市习水县', '520381': '贵州省遵义市赤水市', '520382': '贵州省遵义市仁怀市', '522200': '贵州省铜仁地区', '522201': '贵州省铜仁地区铜仁市', '522222': '贵州省铜仁地区江口县', '522223': '贵州省铜仁地区玉屏侗族自治县', '522224': '贵州省铜仁地区石阡县', '522225': '贵州省铜仁地区思南县', '522226': '贵州省铜仁地区印江土家族苗族自治县', '522227': '贵州省铜仁地区德江县', '522228': '贵州省铜仁地区沿河土家族自治县', '522229': '贵州省铜仁地区松桃苗族自治县', '522230': '贵州省铜仁地区万山特区', '522300': '贵州省黔西南布依族苗族自治州', '522301': '贵州省黔西南布依族苗族自治州兴义市', '522322': '贵州省黔西南布依族苗族自治州兴仁县', '522323': '贵州省黔西南布依族苗族自治州普安县', '522324': '贵州省黔西南布依族苗族自治州晴隆县', '522325': '贵州省黔西南布依族苗族自治州贞丰县', '522326': '贵州省黔西南布依族苗族自治州望谟县', '522327': '贵州省黔西南布依族苗族自治州册亨县', '522328': '贵州省黔西南布依族苗族自治州安龙县', '522400': '贵州省毕节地区', '522401': '贵州省毕节地区毕节市', '522422': '贵州省毕节地区大方县', '522423': '贵州省毕节地区黔西县', '522424': '贵州省毕节地区金沙县', '522425': '贵州省毕节地区织金县', '522426': '贵州省毕节地区纳雍县', '522427': '贵州省毕节地区威宁彝族回族苗族自治县', '522428': '贵州省毕节地区赫章县', '522500': '贵州省安顺地区', '522501': '贵州省安顺地区安顺市', '522526': '贵州省安顺地区平坝县', '522527': '贵州省安顺地区普定县', '522528': '贵州省安顺地区关岭布依族苗族自治县', '522529': '贵州省安顺地区镇宁布依族苗族自治县', '522530': '贵州省安顺地区紫云苗族布依族自治县', '522600': '贵州省黔东南苗族侗族自治州', '522601': '贵州省黔东南苗族侗族自治州凯里市', '522622': '贵州省黔东南苗族侗族自治州黄平县', '522623': '贵州省黔东南苗族侗族自治州施秉县', '522624': '贵州省黔东南苗族侗族自治州三穗县', '522625': '贵州省黔东南苗族侗族自治州镇远县', '522626': '贵州省黔东南苗族侗族自治州岑巩县', '522627': '贵州省黔东南苗族侗族自治州天柱县', '522628': '贵州省黔东南苗族侗族自治州锦屏县', '522629': '贵州省黔东南苗族侗族自治州剑河县', '522630': '贵州省黔东南苗族侗族自治州台江县', '522631': '贵州省黔东南苗族侗族自治州黎平县', '522632': '贵州省黔东南苗族侗族自治州榕江县', '522633': '贵州省黔东南苗族侗族自治州从江县', '522634': '贵州省黔东南苗族侗族自治州雷山县', '522635': '贵州省黔东南苗族侗族自治州麻江县', '522636': '贵州省黔东南苗族侗族自治州丹寨县', '522700': '贵州省黔南布依族苗族自治州', '522701': '贵州省黔南布依族苗族自治州都匀市', '522702': '贵州省黔南布依族苗族自治州福泉市', '522722': '贵州省黔南布依族苗族自治州荔波县', '522723': '贵州省黔南布依族苗族自治州贵定县', '522725': '贵州省黔南布依族苗族自治州瓮安县', '522726': '贵州省黔南布依族苗族自治州独山县', '522727': '贵州省黔南布依族苗族自治州平塘县', '522728': '贵州省黔南布依族苗族自治州罗甸县', '522729': '贵州省黔南布依族苗族自治州长顺县', '522730': '贵州省黔南布依族苗族自治州龙里县', '522731': '贵州省黔南布依族苗族自治州惠水县', '522732': '贵州省黔南布依族苗族自治州三都水族自治县', '530000': '云南省', '530100': '云南省昆明市', '530101': '云南省昆明市市辖区', '530102': '云南省昆明市五华区', '530103': '云南省昆明市盘龙区', '530111': '云南省昆明市官渡区', '530112': '云南省昆明市西山区', '530113': '云南省昆明市东川区', '530121': '云南省昆明市呈贡县', '530122': '云南省昆明市晋宁县', '530124': '云南省昆明市富民县', '530125': '云南省昆明市宜良县', '530126': '云南省昆明市石林彝族自治县', '530127': '云南省昆明市嵩明县', '530128': '云南省昆明市禄劝彝族苗族自治县', '530129': '云南省昆明市寻甸回族彝族自治县', '530181': '云南省昆明市安宁市', '530300': '云南省曲靖市', '530301': '云南省曲靖市市辖区', '530302': '云南省曲靖市麒麟区', '530321': '云南省曲靖市马龙县', '530322': '云南省曲靖市陆良县', '530323': '云南省曲靖市师宗县', '530324': '云南省曲靖市罗平县', '530325': '云南省曲靖市富源县', '530326': '云南省曲靖市会泽县', '530328': '云南省曲靖市沾益县', '530381': '云南省曲靖市宣威市', '530400': '云南省玉溪市', '530401': '云南省玉溪市市辖区', '530402': '云南省玉溪市红塔区', '530421': '云南省玉溪市江川县', '530422': '云南省玉溪市澄江县', '530423': '云南省玉溪市通海县', '530424': '云南省玉溪市华宁县', '530425': '云南省玉溪市易门县', '530426': '云南省玉溪市峨山彝族自治县', '530427': '云南省玉溪市新平彝族傣族自治县', '530428': '云南省玉溪市元江哈尼族彝族傣族自治县', '532100': '云南省昭通地区', '532101': '云南省昭通地区昭通市', '532122': '云南省昭通地区鲁甸县', '532123': '云南省昭通地区巧家县', '532124': '云南省昭通地区盐津县', '532125': '云南省昭通地区大关县', '532126': '云南省昭通地区永善县', '532127': '云南省昭通地区绥江县', '532128': '云南省昭通地区镇雄县', '532129': '云南省昭通地区彝良县', '532130': '云南省昭通地区威信县', '532131': '云南省昭通地区水富县', '532300': '云南省楚雄彝族自治州', '532301': '云南省楚雄彝族自治州楚雄市', '532322': '云南省楚雄彝族自治州双柏县', '532323': '云南省楚雄彝族自治州牟定县', '532324': '云南省楚雄彝族自治州南华县', '532325': '云南省楚雄彝族自治州姚安县', '532326': '云南省楚雄彝族自治州大姚县', '532327': '云南省楚雄彝族自治州永仁县', '532328': '云南省楚雄彝族自治州元谋县', '532329': '云南省楚雄彝族自治州武定县', '532331': '云南省楚雄彝族自治州禄丰县', '532500': '云南省红河哈尼族彝族自治州', '532501': '云南省红河哈尼族彝族自治州个旧市', '532502': '云南省红河哈尼族彝族自治州开远市', '532522': '云南省红河哈尼族彝族自治州蒙自县', '532523': '云南省红河哈尼族彝族自治州屏边苗族自治县', '532524': '云南省红河哈尼族彝族自治州建水县', '532525': '云南省红河哈尼族彝族自治州石屏县', '532526': '云南省红河哈尼族彝族自治州弥勒县', '532527': '云南省红河哈尼族彝族自治州泸西县', '532528': '云南省红河哈尼族彝族自治州元阳县', '532529': '云南省红河哈尼族彝族自治州红河县', '532530': '云南省红河哈尼族彝族自治州金平苗族瑶族傣族自治县', '532531': '云南省红河哈尼族彝族自治州绿春县', '532532': '云南省红河哈尼族彝族自治州河口瑶族自治县', '532600': '云南省文山壮族苗族自治州', '532621': '云南省文山壮族苗族自治州文山县', '532622': '云南省文山壮族苗族自治州砚山县', '532623': '云南省文山壮族苗族自治州西畴县', '532624': '云南省文山壮族苗族自治州麻栗坡县', '532625': '云南省文山壮族苗族自治州马关县', '532626': '云南省文山壮族苗族自治州丘北县', '532627': '云南省文山壮族苗族自治州广南县', '532628': '云南省文山壮族苗族自治州富宁县', '532700': '云南省思茅地区', '532701': '云南省思茅地区思茅市', '532722': '云南省思茅地区普洱哈尼族彝族自治县', '532723': '云南省思茅地区墨江哈尼族自治县', '532724': '云南省思茅地区景东彝族自治县', '532725': '云南省思茅地区景谷傣族彝族自治县', '532726': '云南省思茅地区镇沅彝族哈尼族拉祜族自治县', '532727': '云南省思茅地区江城哈尼族彝族自治县', '532728': '云南省思茅地区孟连傣族拉祜族佤族自治县', '532729': '云南省思茅地区澜沧拉祜族自治县', '532730': '云南省思茅地区西盟佤族自治县', '532800': '云南省西双版纳傣族自治州', '532801': '云南省西双版纳傣族自治州景洪市', '532822': '云南省西双版纳傣族自治州勐海县', '532823': '云南省西双版纳傣族自治州勐腊县', '532900': '云南省大理白族自治州', '532901': '云南省大理白族自治州大理市', '532922': '云南省大理白族自治州漾濞彝族自治县', '532923': '云南省大理白族自治州祥云县', '532924': '云南省大理白族自治州宾川县', '532925': '云南省大理白族自治州弥渡县', '532926': '云南省大理白族自治州南涧彝族自治县', '532927': '云南省大理白族自治州巍山彝族回族自治县', '532928': '云南省大理白族自治州永平县', '532929': '云南省大理白族自治州云龙县', '532930': '云南省大理白族自治州洱源县', '532931': '云南省大理白族自治州剑川县', '532932': '云南省大理白族自治州鹤庆县', '533000': '云南省保山地区', '533001': '云南省保山地区保山市', '533022': '云南省保山地区施甸县', '533023': '云南省保山地区腾冲县', '533024': '云南省保山地区龙陵县', '533025': '云南省保山地区昌宁县', '533100': '云南省德宏傣族景颇族自治州', '533101': '云南省德宏傣族景颇族自治州畹町市', '533102': '云南省德宏傣族景颇族自治州瑞丽市', '533103': '云南省德宏傣族景颇族自治州潞西市', '533122': '云南省德宏傣族景颇族自治州梁河县', '533123': '云南省德宏傣族景颇族自治州盈江县', '533124': '云南省德宏傣族景颇族自治州陇川县', '533200': '云南省丽江地区', '533221': '云南省丽江地区丽江纳西族自治县', '533222': '云南省丽江地区永胜县', '533223': '云南省丽江地区华坪县', '533224': '云南省丽江地区宁蒗彝族自治县', '533300': '云南省怒江傈僳族自治州', '533321': '云南省怒江傈僳族自治州泸水县', '533323': '云南省怒江傈僳族自治州福贡县', '533324': '云南省怒江傈僳族自治州贡山独龙族怒族自治县', '533325': '云南省怒江傈僳族自治州兰坪白族普米族自治县', '533400': '云南省迪庆藏族自治州', '533421': '云南省迪庆藏族自治州中甸县', '533422': '云南省迪庆藏族自治州德钦县', '533423': '云南省迪庆藏族自治州维西傈僳族自治县', '533500': '云南省临沧地区', '533521': '云南省临沧地区临沧县', '533522': '云南省临沧地区凤庆县', '533523': '云南省临沧地区云县', '533524': '云南省临沧地区永德县', '533525': '云南省临沧地区镇康县', '533526': '云南省临沧地区双江拉祜族佤族布朗族傣族自治县', '533527': '云南省临沧地区耿马傣族佤族自治县', '533528': '云南省临沧地区沧源佤族自治县', '540000': '西藏自治区', '540100': '西藏自治区拉萨市', '540101': '西藏自治区拉萨市市辖区', '540102': '西藏自治区拉萨市城关区', '540121': '西藏自治区拉萨市林周县', '540122': '西藏自治区拉萨市当雄县', '540123': '西藏自治区拉萨市尼木县', '540124': '西藏自治区拉萨市曲水县', '540125': '西藏自治区拉萨市堆龙德庆县', '540126': '西藏自治区拉萨市达孜县', '540127': '西藏自治区拉萨市墨竹工卡县', '542100': '西藏自治区昌都地区', '542121': '西藏自治区昌都地区昌都县', '542122': '西藏自治区昌都地区江达县', '542123': '西藏自治区昌都地区贡觉县', '542124': '西藏自治区昌都地区类乌齐县', '542125': '西藏自治区昌都地区丁青县', '542126': '西藏自治区昌都地区察雅县', '542127': '西藏自治区昌都地区八宿县', '542128': '西藏自治区昌都地区左贡县', '542129': '西藏自治区昌都地区芒康县', '542132': '西藏自治区昌都地区洛隆县', '542133': '西藏自治区昌都地区边坝县', '542134': '西藏自治区昌都地区盐井县', '542135': '西藏自治区昌都地区碧土县', '542136': '西藏自治区昌都地区妥坝县', '542137': '西藏自治区昌都地区生达县', '542200': '西藏自治区山南地区', '542221': '西藏自治区山南地区乃东县', '542222': '西藏自治区山南地区扎囊县', '542223': '西藏自治区山南地区贡嘎县', '542224': '西藏自治区山南地区桑日县', '542225': '西藏自治区山南地区琼结县', '542226': '西藏自治区山南地区曲松县', '542227': '西藏自治区山南地区措美县', '542228': '西藏自治区山南地区洛扎县', '542229': '西藏自治区山南地区加查县', '542231': '西藏自治区山南地区隆子县', '542232': '西藏自治区山南地区错那县', '542233': '西藏自治区山南地区浪卡子县', '542300': '西藏自治区日喀则地区', '542301': '西藏自治区日喀则地区日喀则市', '542322': '西藏自治区日喀则地区南木林县', '542323': '西藏自治区日喀则地区江孜县', '542324': '西藏自治区日喀则地区定日县', '542325': '西藏自治区日喀则地区萨迦县', '542326': '西藏自治区日喀则地区拉孜县', '542327': '西藏自治区日喀则地区昂仁县', '542328': '西藏自治区日喀则地区谢通门县', '542329': '西藏自治区日喀则地区白朗县', '542330': '西藏自治区日喀则地区仁布县', '542331': '西藏自治区日喀则地区康马县', '542332': '西藏自治区日喀则地区定结县', '542333': '西藏自治区日喀则地区仲巴县', '542334': '西藏自治区日喀则地区亚东县', '542335': '西藏自治区日喀则地区吉隆县', '542336': '西藏自治区日喀则地区聂拉木县', '542337': '西藏自治区日喀则地区萨嘎县', '542338': '西藏自治区日喀则地区岗巴县', '542400': '西藏自治区那曲地区', '542421': '西藏自治区那曲地区那曲县', '542422': '西藏自治区那曲地区嘉黎县', '542423': '西藏自治区那曲地区比如县', '542424': '西藏自治区那曲地区聂荣县', '542425': '西藏自治区那曲地区安多县', '542426': '西藏自治区那曲地区申扎县', '542427': '西藏自治区那曲地区索县', '542428': '西藏自治区那曲地区班戈县', '542429': '西藏自治区那曲地区巴青县', '542430': '西藏自治区那曲地区尼玛县', '542500': '西藏自治区阿里地区', '542521': '西藏自治区阿里地区普兰县', '542522': '西藏自治区阿里地区札达县', '542523': '西藏自治区阿里地区噶尔县', '542524': '西藏自治区阿里地区日土县', '542525': '西藏自治区阿里地区革吉县', '542526': '西藏自治区阿里地区改则县', '542527': '西藏自治区阿里地区措勤县', '542528': '西藏自治区阿里地区隆格尔县', '542600': '西藏自治区林芝地区', '542621': '西藏自治区林芝地区林芝县', '542622': '西藏自治区林芝地区工布江达县', '542623': '西藏自治区林芝地区米林县', '542624': '西藏自治区林芝地区墨脱县', '542625': '西藏自治区林芝地区波密县', '542626': '西藏自治区林芝地区察隅县', '542627': '西藏自治区林芝地区朗县', '610000': '陕西省', '610100': '陕西省西安市', '610101': '陕西省西安市市辖区', '610102': '陕西省西安市新城区', '610103': '陕西省西安市碑林区', '610104': '陕西省西安市莲湖区', '610111': '陕西省西安市灞桥区', '610112': '陕西省西安市未央区', '610113': '陕西省西安市雁塔区', '610114': '陕西省西安市阎良区', '610115': '陕西省西安市临潼区', '610121': '陕西省西安市长安县', '610122': '陕西省西安市蓝田县', '610124': '陕西省西安市周至县', '610125': '陕西省西安市户县', '610126': '陕西省西安市高陵县', '610200': '陕西省铜川市', '610201': '陕西省铜川市市辖区', '610202': '陕西省铜川市城区', '610203': '陕西省铜川市郊区', '610221': '陕西省铜川市耀县', '610222': '陕西省铜川市宜君县', '610300': '陕西省宝鸡市', '610301': '陕西省宝鸡市市辖区', '610302': '陕西省宝鸡市渭滨区', '610303': '陕西省宝鸡市金台区', '610321': '陕西省宝鸡市宝鸡县', '610322': '陕西省宝鸡市凤翔县', '610323': '陕西省宝鸡市岐山县', '610324': '陕西省宝鸡市扶风县', '610326': '陕西省宝鸡市眉县', '610327': '陕西省宝鸡市陇县', '610328': '陕西省宝鸡市千阳县', '610329': '陕西省宝鸡市麟游县', '610330': '陕西省宝鸡市凤县', '610331': '陕西省宝鸡市太白县', '610400': '陕西省咸阳市', '610401': '陕西省咸阳市市辖区', '610402': '陕西省咸阳市秦都区', '610403': '陕西省咸阳市杨陵区', '610404': '陕西省咸阳市渭城区', '610422': '陕西省咸阳市三原县', '610423': '陕西省咸阳市泾阳县', '610424': '陕西省咸阳市乾县', '610425': '陕西省咸阳市礼泉县', '610426': '陕西省咸阳市永寿县', '610427': '陕西省咸阳市彬县', '610428': '陕西省咸阳市长武县', '610429': '陕西省咸阳市旬邑县', '610430': '陕西省咸阳市淳化县', '610431': '陕西省咸阳市武功县', '610481': '陕西省咸阳市兴平市', '610500': '陕西省渭南市', '610501': '陕西省渭南市市辖区', '610502': '陕西省渭南市临渭区', '610521': '陕西省渭南市华县', '610522': '陕西省渭南市潼关县', '610523': '陕西省渭南市大荔县', '610524': '陕西省渭南市合阳县', '610525': '陕西省渭南市澄城县', '610526': '陕西省渭南市蒲城县', '610527': '陕西省渭南市白水县', '610528': '陕西省渭南市富平县', '610581': '陕西省渭南市韩城市', '610582': '陕西省渭南市华阴市', '610600': '陕西省延安市', '610601': '陕西省延安市市辖区', '610602': '陕西省延安市宝塔区', '610621': '陕西省延安市延长县', '610622': '陕西省延安市延川县', '610623': '陕西省延安市子长县', '610624': '陕西省延安市安塞县', '610625': '陕西省延安市志丹县', '610626': '陕西省延安市吴旗县', '610627': '陕西省延安市甘泉县', '610628': '陕西省延安市富县', '610629': '陕西省延安市洛川县', '610630': '陕西省延安市宜川县', '610631': '陕西省延安市黄龙县', '610632': '陕西省延安市黄陵县', '610700': '陕西省汉中市', '610701': '陕西省汉中市市辖区', '610702': '陕西省汉中市汉台区', '610721': '陕西省汉中市南郑县', '610722': '陕西省汉中市城固县', '610723': '陕西省汉中市洋县', '610724': '陕西省汉中市西乡县', '610725': '陕西省汉中市勉县', '610726': '陕西省汉中市宁强县', '610727': '陕西省汉中市略阳县', '610728': '陕西省汉中市镇巴县', '610729': '陕西省汉中市留坝县', '610730': '陕西省汉中市佛坪县', '612400': '陕西省安康地区', '612401': '陕西省安康地区安康市', '612422': '陕西省安康地区汉阴县', '612423': '陕西省安康地区石泉县', '612424': '陕西省安康地区宁陕县', '612425': '陕西省安康地区紫阳县', '612426': '陕西省安康地区岚皋县', '612427': '陕西省安康地区平利县', '612428': '陕西省安康地区镇坪县', '612429': '陕西省安康地区旬阳县', '612430': '陕西省安康地区白河县', '612500': '陕西省商洛地区', '612501': '陕西省商洛地区商州市', '612522': '陕西省商洛地区洛南县', '612523': '陕西省商洛地区丹凤县', '612524': '陕西省商洛地区商南县', '612525': '陕西省商洛地区山阳县', '612526': '陕西省商洛地区镇安县', '612527': '陕西省商洛地区柞水县', '612700': '陕西省榆林地区', '612701': '陕西省榆林地区榆林市', '612722': '陕西省榆林地区神木县', '612723': '陕西省榆林地区府谷县', '612724': '陕西省榆林地区横山县', '612725': '陕西省榆林地区靖边县', '612726': '陕西省榆林地区定边县', '612727': '陕西省榆林地区绥德县', '612728': '陕西省榆林地区米脂县', '612729': '陕西省榆林地区佳县', '612730': '陕西省榆林地区吴堡县', '612731': '陕西省榆林地区清涧县', '612732': '陕西省榆林地区子洲县', '620000': '甘肃省', '620100': '甘肃省兰州市', '620101': '甘肃省兰州市市辖区', '620102': '甘肃省兰州市城关区', '620103': '甘肃省兰州市七里河区', '620104': '甘肃省兰州市西固区', '620105': '甘肃省兰州市安宁区', '620111': '甘肃省兰州市红古区', '620121': '甘肃省兰州市永登县', '620122': '甘肃省兰州市皋兰县', '620123': '甘肃省兰州市榆中县', '620200': '甘肃省嘉峪关市', '620201': '甘肃省嘉峪关市市辖区', '620300': '甘肃省嘉峪关市金昌市', '620301': '甘肃省嘉峪关市市辖区', '620302': '甘肃省嘉峪关市金川区', '620321': '甘肃省嘉峪关市永昌县', '620400': '甘肃省白银市', '620401': '甘肃省白银市市辖区', '620402': '甘肃省白银市白银区', '620403': '甘肃省白银市平川区', '620421': '甘肃省白银市靖远县', '620422': '甘肃省白银市会宁县', '620423': '甘肃省白银市景泰县', '620500': '甘肃省天水市', '620501': '甘肃省天水市市辖区', '620502': '甘肃省天水市秦城区', '620503': '甘肃省天水市北道区', '620521': '甘肃省天水市清水县', '620522': '甘肃省天水市秦安县', '620523': '甘肃省天水市甘谷县', '620524': '甘肃省天水市武山县', '620525': '甘肃省天水市张家川回族自治县', '622100': '甘肃省酒泉地区', '622101': '甘肃省酒泉地区玉门市', '622102': '甘肃省酒泉地区酒泉市', '622103': '甘肃省酒泉地区敦煌市', '622123': '甘肃省酒泉地区金塔县', '622124': '甘肃省酒泉地区肃北蒙古族自治县', '622125': '甘肃省酒泉地区阿克塞哈萨克族自治县', '622126': '甘肃省酒泉地区安西县', '622200': '甘肃省张掖地区', '622201': '甘肃省张掖地区张掖市', '622222': '甘肃省张掖地区肃南裕固族自治县', '622223': '甘肃省张掖地区民乐县', '622224': '甘肃省张掖地区临泽县', '622225': '甘肃省张掖地区高台县', '622226': '甘肃省张掖地区山丹县', '622300': '甘肃省武威地区', '622301': '甘肃省武威地区武威市', '622322': '甘肃省武威地区民勤县', '622323': '甘肃省武威地区古浪县', '622326': '甘肃省武威地区天祝藏族自治县', '622400': '甘肃省定西地区', '622421': '甘肃省定西地区定西县', '622424': '甘肃省定西地区通渭县', '622425': '甘肃省定西地区陇西县', '622426': '甘肃省定西地区渭源县', '622427': '甘肃省定西地区临洮县', '622428': '甘肃省定西地区漳县', '622429': '甘肃省定西地区岷县', '622600': '甘肃省陇南地区', '622621': '甘肃省陇南地区武都县', '622623': '甘肃省陇南地区宕昌县', '622624': '甘肃省陇南地区成县', '622625': '甘肃省陇南地区康县', '622626': '甘肃省陇南地区文县', '622627': '甘肃省陇南地区西和县', '622628': '甘肃省陇南地区礼县', '622629': '甘肃省陇南地区两当县', '622630': '甘肃省陇南地区徽县', '622700': '甘肃省平凉地区', '622701': '甘肃省平凉地区平凉市', '622722': '甘肃省平凉地区泾川县', '622723': '甘肃省平凉地区灵台县', '622724': '甘肃省平凉地区崇信县', '622725': '甘肃省平凉地区华亭县', '622726': '甘肃省平凉地区庄浪县', '622727': '甘肃省平凉地区静宁县', '622800': '甘肃省庆阳地区', '622801': '甘肃省庆阳地区西峰市', '622821': '甘肃省庆阳地区庆阳县', '622822': '甘肃省庆阳地区环县', '622823': '甘肃省庆阳地区华池县', '622824': '甘肃省庆阳地区合水县', '622825': '甘肃省庆阳地区正宁县', '622826': '甘肃省庆阳地区宁县', '622827': '甘肃省庆阳地区镇原县', '622900': '甘肃省临夏回族自治州', '622901': '甘肃省临夏回族自治州临夏市', '622921': '甘肃省临夏回族自治州临夏县', '622922': '甘肃省临夏回族自治州康乐县', '622923': '甘肃省临夏回族自治州永靖县', '622924': '甘肃省临夏回族自治州广河县', '622925': '甘肃省临夏回族自治州和政县', '622926': '甘肃省临夏回族自治州东乡族自治县', '622927': '甘肃省临夏回族自治州积石山保安族东乡族撒拉族自治县', '623000': '甘肃省甘南藏族自治州', '623001': '甘肃省甘南藏族自治州合作市', '623021': '甘肃省甘南藏族自治州临潭县', '623022': '甘肃省甘南藏族自治州卓尼县', '623023': '甘肃省甘南藏族自治州舟曲县', '623024': '甘肃省甘南藏族自治州迭部县', '623025': '甘肃省甘南藏族自治州玛曲县', '623026': '甘肃省甘南藏族自治州碌曲县', '623027': '甘肃省甘南藏族自治州夏河县', '630000': '青海省', '630100': '青海省西宁市', '630101': '青海省西宁市市辖区', '630102': '青海省西宁市城东区', '630103': '青海省西宁市城中区', '630104': '青海省西宁市城西区', '630105': '青海省西宁市城北区', '630121': '青海省西宁市大通回族土族自治县', '632100': '青海省海东地区', '632121': '青海省海东地区平安县', '632122': '青海省海东地区民和回族土族自治县', '632123': '青海省海东地区乐都县', '632124': '青海省海东地区湟中县', '632125': '青海省海东地区湟源县', '632126': '青海省海东地区互助土族自治县', '632127': '青海省海东地区化隆回族自治县', '632128': '青海省海东地区循化撒拉族自治县', '632200': '青海省海北藏族自治州', '632221': '青海省海北藏族自治州门源回族自治县', '632222': '青海省海北藏族自治州祁连县', '632223': '青海省海北藏族自治州海晏县', '632224': '青海省海北藏族自治州刚察县', '632300': '青海省黄南藏族自治州', '632321': '青海省黄南藏族自治州同仁县', '632322': '青海省黄南藏族自治州尖扎县', '632323': '青海省黄南藏族自治州泽库县', '632324': '青海省黄南藏族自治州河南蒙古族自治县', '632500': '青海省海南藏族自治州', '632521': '青海省海南藏族自治州共和县', '632522': '青海省海南藏族自治州同德县', '632523': '青海省海南藏族自治州贵德县', '632524': '青海省海南藏族自治州兴海县', '632525': '青海省海南藏族自治州贵南县', '632600': '青海省果洛藏族自治州', '632621': '青海省果洛藏族自治州玛沁县', '632622': '青海省果洛藏族自治州班玛县', '632623': '青海省果洛藏族自治州甘德县', '632624': '青海省果洛藏族自治州达日县', '632625': '青海省果洛藏族自治州久治县', '632626': '青海省果洛藏族自治州玛多县', '632700': '青海省玉树藏族自治州', '632721': '青海省玉树藏族自治州玉树县', '632722': '青海省玉树藏族自治州杂多县', '632723': '青海省玉树藏族自治州称多县', '632724': '青海省玉树藏族自治州治多县', '632725': '青海省玉树藏族自治州囊谦县', '632726': '青海省玉树藏族自治州曲麻莱县', '632800': '青海省海西蒙古族藏族自治州', '632801': '青海省海西蒙古族藏族自治州格尔木市', '632802': '青海省海西蒙古族藏族自治州德令哈市', '632821': '青海省海西蒙古族藏族自治州乌兰县', '632822': '青海省海西蒙古族藏族自治州都兰县', '632823': '青海省海西蒙古族藏族自治州天峻县', '640000': '宁夏回族自治区', '640100': '宁夏回族自治区银川市', '640101': '宁夏回族自治区银川市市辖区', '640102': '宁夏回族自治区银川市城区', '640103': '宁夏回族自治区银川市新城区', '640111': '宁夏回族自治区银川市郊区', '640121': '宁夏回族自治区银川市永宁县', '640122': '宁夏回族自治区银川市贺兰县', '640200': '宁夏回族自治区石嘴山市', '640201': '宁夏回族自治区石嘴山市市辖区', '640202': '宁夏回族自治区石嘴山市大武口区', '640203': '宁夏回族自治区石嘴山市石嘴山区', '640204': '宁夏回族自治区石嘴山市石炭井区', '640221': '宁夏回族自治区石嘴山市平罗县', '640222': '宁夏回族自治区石嘴山市陶乐县', '640223': '宁夏回族自治区石嘴山市惠农县', '640300': '宁夏回族自治区吴忠市', '640301': '宁夏回族自治区吴忠市市辖区', '640302': '宁夏回族自治区吴忠市利通区', '640321': '宁夏回族自治区吴忠市中卫县', '640322': '宁夏回族自治区吴忠市中宁县', '640323': '宁夏回族自治区吴忠市盐池县', '640324': '宁夏回族自治区吴忠市同心县', '640381': '宁夏回族自治区吴忠市青铜峡市', '640382': '宁夏回族自治区吴忠市灵武市', '642200': '宁夏回族自治区固原地区', '642221': '宁夏回族自治区固原地区固原县', '642222': '宁夏回族自治区固原地区海原县', '642223': '宁夏回族自治区固原地区西吉县', '642224': '宁夏回族自治区固原地区隆德县', '642225': '宁夏回族自治区固原地区泾源县', '642226': '宁夏回族自治区固原地区彭阳县', '650000': '新疆维吾尔自治区', '650100': '新疆维吾尔族自治区乌鲁木齐市', '650101': '新疆维吾尔族自治区乌鲁木齐市市辖区', '650102': '新疆维吾尔族自治区乌鲁木齐市天山区', '650103': '新疆维吾尔族自治区乌鲁木齐市沙依巴克区', '650104': '新疆维吾尔族自治区乌鲁木齐市新市区', '650105': '新疆维吾尔族自治区乌鲁木齐市水磨沟区', '650106': '新疆维吾尔族自治区乌鲁木齐市头屯河区', '650107': '新疆维吾尔族自治区乌鲁木齐市南山矿区', '650108': '新疆维吾尔族自治区乌鲁木齐市东山区', '650121': '新疆维吾尔族自治区乌鲁木齐市乌鲁木齐县', '650200': '新疆维吾尔族自治区克拉玛依市', '650201': '新疆维吾尔族自治区克拉玛依市市辖区', '650202': '新疆维吾尔族自治区克拉玛依市独山子区', '650203': '新疆维吾尔族自治区克拉玛依市克拉玛依区', '650204': '新疆维吾尔族自治区克拉玛依市白碱滩区', '650205': '新疆维吾尔族自治区克拉玛依市乌尔禾区', '652100': '新疆维吾尔族自治区吐鲁番地区', '652101': '新疆维吾尔族自治区吐鲁番地区吐鲁番市', '652122': '新疆维吾尔族自治区吐鲁番地区鄯善县', '652123': '新疆维吾尔族自治区吐鲁番地区托克逊县', '652200': '新疆维吾尔族自治区哈密地区', '652201': '新疆维吾尔族自治区哈密地区哈密市', '652222': '新疆维吾尔族自治区哈密地区巴里坤哈萨克自治县', '652223': '新疆维吾尔族自治区哈密地区伊吾县', '652300': '新疆维吾尔族自治区昌吉回族自治州', '652301': '新疆维吾尔族自治区昌吉回族自治州昌吉市', '652302': '新疆维吾尔族自治区昌吉回族自治州阜康市', '652303': '新疆维吾尔族自治区昌吉回族自治州米泉市', '652323': '新疆维吾尔族自治区昌吉回族自治州呼图壁县', '652324': '新疆维吾尔族自治区昌吉回族自治州玛纳斯县', '652325': '新疆维吾尔族自治区昌吉回族自治州奇台县', '652327': '新疆维吾尔族自治区昌吉回族自治州吉木萨尔县', '652328': '新疆维吾尔族自治区昌吉回族自治州木垒哈萨克自治县', '652700': '新疆维吾尔族自治区博尔塔拉蒙古自治州', '652701': '新疆维吾尔族自治区博尔塔拉蒙古自治州博乐市', '652722': '新疆维吾尔族自治区博尔塔拉蒙古自治州精河县', '652723': '新疆维吾尔族自治区博尔塔拉蒙古自治州温泉县', '652800': '新疆维吾尔族自治区巴音郭楞蒙古自治州', '652801': '新疆维吾尔族自治区巴音郭楞蒙古自治州库尔勒市', '652822': '新疆维吾尔族自治区巴音郭楞蒙古自治州轮台县', '652823': '新疆维吾尔族自治区巴音郭楞蒙古自治州尉犁县', '652824': '新疆维吾尔族自治区巴音郭楞蒙古自治州若羌县', '652825': '新疆维吾尔族自治区巴音郭楞蒙古自治州且末县', '652826': '新疆维吾尔族自治区巴音郭楞蒙古自治州焉耆回族自治县', '652827': '新疆维吾尔族自治区巴音郭楞蒙古自治州和静县', '652828': '新疆维吾尔族自治区巴音郭楞蒙古自治州和硕县', '652829': '新疆维吾尔族自治区巴音郭楞蒙古自治州博湖县', '652900': '新疆维吾尔族自治区阿克苏地区', '652901': '新疆维吾尔族自治区阿克苏地区阿克苏市', '652922': '新疆维吾尔族自治区阿克苏地区温宿县', '652923': '新疆维吾尔族自治区阿克苏地区库车县', '652924': '新疆维吾尔族自治区阿克苏地区沙雅县', '652925': '新疆维吾尔族自治区阿克苏地区新和县', '652926': '新疆维吾尔族自治区阿克苏地区拜城县', '652927': '新疆维吾尔族自治区阿克苏地区乌什县', '652928': '新疆维吾尔族自治区阿克苏地区阿瓦提县', '652929': '新疆维吾尔族自治区阿克苏地区柯坪县', '653000': '新疆维吾尔族自治区克孜勒苏柯尔克孜自治州', '653001': '新疆维吾尔族自治区克孜勒苏柯尔克孜自治州阿图什市', '653022': '新疆维吾尔族自治区克孜勒苏柯尔克孜自治州阿克陶县', '653023': '新疆维吾尔族自治区克孜勒苏柯尔克孜自治州阿合奇县', '653024': '新疆维吾尔族自治区克孜勒苏柯尔克孜自治州乌恰县', '653100': '新疆维吾尔族自治区喀什地区', '653101': '新疆维吾尔族自治区喀什地区喀什市', '653121': '新疆维吾尔族自治区喀什地区疏附县', '653122': '新疆维吾尔族自治区喀什地区疏勒县', '653123': '新疆维吾尔族自治区喀什地区英吉沙县', '653124': '新疆维吾尔族自治区喀什地区泽普县', '653125': '新疆维吾尔族自治区喀什地区莎车县', '653126': '新疆维吾尔族自治区喀什地区叶城县', '653127': '新疆维吾尔族自治区喀什地区麦盖提县', '653128': '新疆维吾尔族自治区喀什地区岳普湖县', '653129': '新疆维吾尔族自治区喀什地区伽师县', '653130': '新疆维吾尔族自治区喀什地区巴楚县', '653131': '新疆维吾尔族自治区喀什地区塔什库尔干塔吉克自治县', '653200': '新疆维吾尔族自治区和田地区', '653201': '新疆维吾尔族自治区和田地区和田市', '653221': '新疆维吾尔族自治区和田地区和田县', '653222': '新疆维吾尔族自治区和田地区墨玉县', '653223': '新疆维吾尔族自治区和田地区皮山县', '653224': '新疆维吾尔族自治区和田地区洛浦县', '653225': '新疆维吾尔族自治区和田地区策勒县', '653226': '新疆维吾尔族自治区和田地区于田县', '653227': '新疆维吾尔族自治区和田地区民丰县', '654000': '新疆维吾尔族自治区伊犁哈萨克自治州', '654001': '新疆维吾尔族自治区伊犁哈萨克自治州奎屯市', '654100': '新疆维吾尔族自治区伊犁哈萨克自治州伊犁地区', '654101': '新疆维吾尔族自治区伊犁哈萨克自治州伊宁市', '654121': '新疆维吾尔族自治区伊犁哈萨克自治州伊宁县', '654122': '新疆自治区伊犁哈萨克自治州察布查尔锡伯自治县', '654123': '新疆维吾尔族自治区伊犁哈萨克自治州霍城县', '654124': '新疆维吾尔族自治区伊犁哈萨克自治州巩留县', '654125': '新疆维吾尔族自治区伊犁哈萨克自治州新源县', '654126': '新疆维吾尔族自治区伊犁哈萨克自治州昭苏县', '654127': '新疆维吾尔族自治区伊犁哈萨克自治州特克斯县', '654128': '新疆维吾尔族自治区伊犁哈萨克自治州尼勒克县', '654200': '新疆维吾尔族自治区塔城地区', '654201': '新疆维吾尔族自治区塔城地区塔城市', '654202': '新疆维吾尔族自治区塔城地区乌苏市', '654221': '新疆维吾尔族自治区塔城地区额敏县', '654223': '新疆维吾尔族自治区塔城地区沙湾县', '654224': '新疆维吾尔族自治区塔城地区托里县', '654225': '新疆维吾尔族自治区塔城地区裕民县', '654226': '新疆维吾尔族自治区塔城地区和布克赛尔蒙古自治县', '654300': '新疆维吾尔族自治区阿勒泰地区', '654301': '新疆维吾尔族自治区阿勒泰地区阿勒泰市', '654321': '新疆维吾尔族自治区阿勒泰地区布尔津县', '654322': '新疆维吾尔族自治区阿勒泰地区富蕴县', '654323': '新疆维吾尔族自治区阿勒泰地区福海县', '654324': '新疆维吾尔族自治区阿勒泰地区哈巴河县', '654325': '新疆维吾尔族自治区阿勒泰地区青河县', '654326': '新疆维吾尔族自治区阿勒泰地区吉木乃县', '659000': '新疆维吾尔族自治区直辖县级行政单位', '659001': '新疆维吾尔族自治区石河子市' };


/***/ }),

/***/ "./src/app/utils/identity.util.ts":
/*!****************************************!*\
  !*** ./src/app/utils/identity.util.ts ***!
  \****************************************/
/*! exports provided: extractInfo, isValidAddr, getAddrByCode */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "extractInfo", function() { return extractInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isValidAddr", function() { return isValidAddr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAddrByCode", function() { return getAddrByCode; });
/* harmony import */ var _identity_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./identity.data */ "./src/app/utils/identity.data.ts");

var extractInfo = function (idNo) {
    var addrPart = idNo.substring(0, 6);
    var birthPart = idNo.substring(6, 14);
    return {
        addrCode: addrPart,
        dateOfBirth: birthPart
    };
};
var isValidAddr = function (addr) {
    return _identity_data__WEBPACK_IMPORTED_MODULE_0__["GB2260"][addr] !== undefined;
};
var getAddrByCode = function (code) {
    var province = _identity_data__WEBPACK_IMPORTED_MODULE_0__["GB2260"][code.substring(0, 2) + '0000'];
    var city = _identity_data__WEBPACK_IMPORTED_MODULE_0__["GB2260"][code.substring(0, 4) + '00'].replace(province, '');
    var district = _identity_data__WEBPACK_IMPORTED_MODULE_0__["GB2260"][code].replace(province + city, '');
    return {
        province: province,
        city: city,
        district: district
    };
};


/***/ }),

/***/ "./src/app/utils/svg.util.ts":
/*!***********************************!*\
  !*** ./src/app/utils/svg.util.ts ***!
  \***********************************/
/*! exports provided: loadSvgResources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadSvgResources", function() { return loadSvgResources; });
var loadSvgResources = function (ir, ds) {
    var imgDir = 'assets/img';
    var sidebarDir = imgDir + "/sidebar";
    var dayDir = imgDir + "/days";
    var avatarDir = imgDir + "/avatar";
    var iconDir = imgDir + "/icons";
    ir.addSvgIcon('project', ds.bypassSecurityTrustResourceUrl(sidebarDir + "/project.svg"));
    ir.addSvgIcon('projects', ds.bypassSecurityTrustResourceUrl(sidebarDir + "/projects.svg"));
    ir.addSvgIcon('day', ds.bypassSecurityTrustResourceUrl(sidebarDir + "/day.svg"));
    ir.addSvgIcon('week', ds.bypassSecurityTrustResourceUrl(sidebarDir + "/week.svg"));
    ir.addSvgIcon('month', ds.bypassSecurityTrustResourceUrl(sidebarDir + "/month.svg"));
    for (var i = 1, len = 31; i <= len; i++) {
        ir.addSvgIcon("day" + i, ds.bypassSecurityTrustResourceUrl(dayDir + "/day" + i + ".svg"));
    }
    ir.addSvgIconSetInNamespace('avatars', ds.bypassSecurityTrustResourceUrl(avatarDir + "/avatars.svg"));
    ir.addSvgIcon('move', ds.bypassSecurityTrustResourceUrl(iconDir + "/move.svg"));
    ir.addSvgIcon('add', ds.bypassSecurityTrustResourceUrl(iconDir + "/add.svg"));
    ir.addSvgIcon('delete', ds.bypassSecurityTrustResourceUrl(iconDir + "/delete.svg"));
    ir.addSvgIcon('unassigned', ds.bypassSecurityTrustResourceUrl(avatarDir + "/unassigned.svg"));
};


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
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\yinyi\Desktop\exercise\github_proj\ng-taskmgr\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es5.js.map