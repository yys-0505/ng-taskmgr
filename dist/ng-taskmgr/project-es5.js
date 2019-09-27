(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["project"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/project/invite/invite.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project/invite/invite.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form #f=\"ngForm\" (ngSubmit)=\"onSubmit($event, f)\">\n  <h2 mat-dialog-title>邀请组员:</h2>\n  <div mat-dialog-content>\n    <!-- <mat-form-field class=\"full-width\">\n      <input matInput type=\"text\" placeholder=\"组员姓名\" [matAutocomplete]=\"autoMember\">\n      <mat-autocomplete #autoMember=\"matAutocomplete\" [displayWith]=\"displayUser\">\n        <mat-option *ngFor=\"let item of items\" [value]=\"item\">\n          {{item.name}}\n        </mat-option>\n      </mat-autocomplete>\n    </mat-form-field> -->\n    <app-chips-list\n      [label]=\"'邀请成员'\"\n      name=\"member\"\n      [(ngModel)]=\"members\"></app-chips-list>\n  </div>\n  <div mat-dialog-actions>\n    <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"!f.valid\">保存</button>\n    <button type=\"button\" mat-button mat-dialog-close>关闭</button>\n  </div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project/new-project/new-project.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project/new-project/new-project.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form, $event)\">\n  <h3 mat-dialog-title>{{title}}</h3>\n  <div mat-dialog-content>\n    <mat-form-field class=\"full-width\">\n      <input matInput type=\"text\" placeholder=\"项目名称\" formControlName=\"name\">\n    </mat-form-field>\n    <mat-form-field class=\"full-width\">\n      <input matInput type=\"text\" placeholder=\"项目描述\" formControlName=\"desc\">\n    </mat-form-field>\n    <app-image-list-select\n      [useSvgIcon]=\"false\"\n      [cols]=\"6\"\n      [title]=\"'选择封面'\"\n      [items]=\"coverImages\"\n      formControlName=\"coverImg\"\n    ></app-image-list-select>\n  </div>\n  <div mat-dialog-actions>\n    <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"!form.valid\">保存</button>\n    <button type=\"button\" mat-button mat-dialog-close>关闭</button>\n  </div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project/project-item/project-item.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project/project-item/project-item.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card (click)=\"onClick()\">\n  <mat-card-header>\n    <mat-card-title>{{item.name}}</mat-card-title>\n  </mat-card-header>\n  <img mat-card-image [src]=\"item.coverImg\" alt=\"项目封面\">\n  <mat-card-content>\n    {{item.desc}}\n  </mat-card-content>\n  <mat-card-actions>\n    <button mat-button type=\"button\" (click)=\"onEditClick($event)\">\n      <mat-icon>note</mat-icon>\n      <span>编辑</span>\n    </button>\n    <button mat-button type=\"button\" (click)=\"onInviteClick($event)\">\n      <mat-icon>group_add</mat-icon>\n      <span>邀请</span>\n    </button>\n    <button mat-button type=\"button\" (click)=\"onDelClick($event)\">\n      <mat-icon>delete</mat-icon>\n      <span>删除</span>\n    </button>\n  </mat-card-actions>\n</mat-card>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/project/project-list/project-list.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/project/project-list/project-list.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" [@listAnim]=\"listAnim$ | async\">\n  <app-project-item *ngFor=\"let project of (projects$ | async)\"\n    [item]=\"project\"\n    class=\"card\"\n    (onInvite)=\"launchInviteDialog(project)\"\n    (onEdit)=\"launchUpdateDialog(project)\"\n    (onDel)=\"launchConfirmDialog(project)\"\n    (onSelected)=\"selectProject(project)\">\n\n  </app-project-item>\n</div>\n\n<button class=\"fab-button\" mat-fab type=\"button\" (click)=\"openNewProjectDialog()\">\n  <mat-icon>add</mat-icon>\n</button>"

/***/ }),

/***/ "./src/app/anims/card.anim.ts":
/*!************************************!*\
  !*** ./src/app/anims/card.anim.ts ***!
  \************************************/
/*! exports provided: cardAnim */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "cardAnim", function() { return cardAnim; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var cardAnim = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('card', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1)', 'box-shadow': 'none' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hover', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ transform: 'scale(1.1)', 'box-shadow': '3px 3px 5px 6px #ccc' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('out => hover', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms ease-in')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hover => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms ease-out'))
]);


/***/ }),

/***/ "./src/app/anims/list.anim.ts":
/*!************************************!*\
  !*** ./src/app/anims/list.anim.ts ***!
  \************************************/
/*! exports provided: listAnimation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listAnimation", function() { return listAnimation; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");

var listAnimation = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('listAnim', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':enter', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(100, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('1s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }))
        ]), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 1 }), { optional: true }),
        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["query"])(':leave', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["stagger"])(100, [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('5s', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ opacity: 0 }))
        ]), { optional: true }),
    ])
]);


/***/ }),

/***/ "./src/app/project/index.ts":
/*!**********************************!*\
  !*** ./src/app/project/index.ts ***!
  \**********************************/
/*! exports provided: ProjectModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectModule", function() { return ProjectModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _project_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-routing.module */ "./src/app/project/project-routing.module.ts");
/* harmony import */ var _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project-list/project-list.component */ "./src/app/project/project-list/project-list.component.ts");
/* harmony import */ var _project_item_project_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project-item/project-item.component */ "./src/app/project/project-item/project-item.component.ts");
/* harmony import */ var _new_project_new_project_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-project/new-project.component */ "./src/app/project/new-project/new-project.component.ts");
/* harmony import */ var _invite_invite_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./invite/invite.component */ "./src/app/project/invite/invite.component.ts");








var ProjectModule = /** @class */ (function () {
    function ProjectModule() {
    }
    ProjectModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_4__["ProjectListComponent"],
                _project_item_project_item_component__WEBPACK_IMPORTED_MODULE_5__["ProjectItemComponent"],
                _new_project_new_project_component__WEBPACK_IMPORTED_MODULE_6__["NewProjectComponent"],
                _invite_invite_component__WEBPACK_IMPORTED_MODULE_7__["InviteComponent"]
            ],
            imports: [
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
                _project_routing_module__WEBPACK_IMPORTED_MODULE_3__["ProjectRoutingModule"],
            ],
            entryComponents: [
                _new_project_new_project_component__WEBPACK_IMPORTED_MODULE_6__["NewProjectComponent"],
                _invite_invite_component__WEBPACK_IMPORTED_MODULE_7__["InviteComponent"]
            ]
        })
    ], ProjectModule);
    return ProjectModule;
}());



/***/ }),

/***/ "./src/app/project/invite/invite.component.scss":
/*!******************************************************!*\
  !*** ./src/app/project/invite/invite.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvaW52aXRlL2ludml0ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/project/invite/invite.component.ts":
/*!****************************************************!*\
  !*** ./src/app/project/invite/invite.component.ts ***!
  \****************************************************/
/*! exports provided: InviteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InviteComponent", function() { return InviteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var InviteComponent = /** @class */ (function () {
    function InviteComponent(data, dialogRef) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.members = [];
    }
    InviteComponent.prototype.ngOnInit = function () {
        this.members = tslib__WEBPACK_IMPORTED_MODULE_0__["__spread"](this.data.members);
    };
    InviteComponent.prototype.onSubmit = function (ev, _a) {
        var valid = _a.valid, value = _a.value;
        ev.preventDefault();
        if (!valid) {
            return;
        }
        this.dialogRef.close(this.members);
    };
    InviteComponent.ctorParameters = function () { return [
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] }
    ]; };
    InviteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-invite',
            template: __webpack_require__(/*! raw-loader!./invite.component.html */ "./node_modules/raw-loader/index.js!./src/app/project/invite/invite.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./invite.component.scss */ "./src/app/project/invite/invite.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], InviteComponent);
    return InviteComponent;
}());



/***/ }),

/***/ "./src/app/project/new-project/new-project.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/project/new-project/new-project.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvbmV3LXByb2plY3QvbmV3LXByb2plY3QuY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/project/new-project/new-project.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/project/new-project/new-project.component.ts ***!
  \**************************************************************/
/*! exports provided: NewProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProjectComponent", function() { return NewProjectComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");




var NewProjectComponent = /** @class */ (function () {
    function NewProjectComponent(dialogRef, data, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.title = "";
        this.coverImages = [];
    }
    NewProjectComponent.prototype.ngOnInit = function () {
        this.coverImages = this.data.thumbnails;
        if (this.data.project) {
            this.form = this.fb.group({
                name: [this.data.project.name, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                desc: [this.data.project.desc],
                coverImg: [this.data.project.coverImg]
            });
            this.title = '修改项目:';
        }
        else {
            this.form = this.fb.group({
                name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
                desc: [],
                coverImg: [this.data.img]
            });
            this.title = '创建项目:';
        }
    };
    NewProjectComponent.prototype.onSubmit = function (_a, ev) {
        var value = _a.value, valid = _a.valid;
        ev.preventDefault();
        if (!valid) {
            return;
        }
        this.dialogRef.close(value);
    };
    NewProjectComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    NewProjectComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-new-project',
            template: __webpack_require__(/*! raw-loader!./new-project.component.html */ "./node_modules/raw-loader/index.js!./src/app/project/new-project/new-project.component.html"),
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./new-project.component.scss */ "./src/app/project/new-project/new-project.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
    ], NewProjectComponent);
    return NewProjectComponent;
}());



/***/ }),

/***/ "./src/app/project/project-item/project-item.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/project/project-item/project-item.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdC1pdGVtL3Byb2plY3QtaXRlbS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/project/project-item/project-item.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/project/project-item/project-item.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjectItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectItemComponent", function() { return ProjectItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _anims_card_anim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../anims/card.anim */ "./src/app/anims/card.anim.ts");



var ProjectItemComponent = /** @class */ (function () {
    function ProjectItemComponent() {
        this.onInvite = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEdit = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onDel = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.cardState = 'out';
    }
    ProjectItemComponent.prototype.ngOnInit = function () {
    };
    ProjectItemComponent.prototype.onMouseEnter = function () {
        this.cardState = 'hover';
    };
    ProjectItemComponent.prototype.onMouseLeave = function () {
        this.cardState = 'out';
    };
    ProjectItemComponent.prototype.onInviteClick = function (ev) {
        ev.preventDefault();
        this.onInvite.emit();
    };
    ProjectItemComponent.prototype.onEditClick = function (ev) {
        ev.preventDefault();
        this.onEdit.emit();
    };
    ProjectItemComponent.prototype.onDelClick = function (ev) {
        ev.preventDefault();
        ev.stopPropagation();
        this.onDel.emit();
    };
    ProjectItemComponent.prototype.onClick = function () {
        this.onSelected.emit();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
    ], ProjectItemComponent.prototype, "item", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ProjectItemComponent.prototype, "onInvite", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ProjectItemComponent.prototype, "onEdit", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ProjectItemComponent.prototype, "onDel", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
    ], ProjectItemComponent.prototype, "onSelected", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('@card')
    ], ProjectItemComponent.prototype, "cardState", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseenter")
    ], ProjectItemComponent.prototype, "onMouseEnter", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("mouseleave")
    ], ProjectItemComponent.prototype, "onMouseLeave", null);
    ProjectItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-item',
            template: __webpack_require__(/*! raw-loader!./project-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/project/project-item/project-item.component.html"),
            animations: [
                _anims_card_anim__WEBPACK_IMPORTED_MODULE_2__["cardAnim"]
            ],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./project-item.component.scss */ "./src/app/project/project-item/project-item.component.scss")]
        })
    ], ProjectItemComponent);
    return ProjectItemComponent;
}());



/***/ }),

/***/ "./src/app/project/project-list/project-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/project/project-list/project-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card {\n  height: 360px;\n  -webkit-box-flex: 0;\n          flex: 0 0 360px;\n  margin: 10px;\n  display: -webkit-box;\n  display: flex;\n}\n\n.container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.fab-button {\n  position: fixed;\n  right: 32px;\n  bottom: 96px;\n  z-index: 998;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LWxpc3QvQzpcXFVzZXJzXFx5aW55aVxcRGVza3RvcFxcZXhlcmNpc2VcXGdpdGh1Yl9wcm9qXFxuZy10YXNrbWdyL3NyY1xcYXBwXFxwcm9qZWN0XFxwcm9qZWN0LWxpc3RcXHByb2plY3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LWxpc3QvcHJvamVjdC1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO1VBQUEsZUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7QUNDRjs7QURFQTtFQUNFLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDhCQUFBO0VBQUEsNkJBQUE7VUFBQSxtQkFBQTtFQUNBLGVBQUE7QUNDRjs7QURFQTtFQUNFLGVBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLFlBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdC1saXN0L3Byb2plY3QtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJkIHtcclxuICBoZWlnaHQ6IDM2MHB4O1xyXG4gIGZsZXg6IDAgMCAzNjBweDtcclxuICBtYXJnaW46IDEwcHg7XHJcbiAgZGlzcGxheTogZmxleDtcclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gIGZsZXgtd3JhcDogd3JhcDtcclxufVxyXG5cclxuLmZhYi1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMzJweDtcclxuICBib3R0b206IDk2cHg7XHJcbiAgei1pbmRleDogOTk4O1xyXG59IiwiLmNhcmQge1xuICBoZWlnaHQ6IDM2MHB4O1xuICBmbGV4OiAwIDAgMzYwcHg7XG4gIG1hcmdpbjogMTBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmZhYi1idXR0b24ge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHJpZ2h0OiAzMnB4O1xuICBib3R0b206IDk2cHg7XG4gIHotaW5kZXg6IDk5ODtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/project/project-list/project-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/project/project-list/project-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ProjectListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectListComponent", function() { return ProjectListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _new_project_new_project_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../new-project/new-project.component */ "./src/app/project/new-project/new-project.component.ts");
/* harmony import */ var _invite_invite_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../invite/invite.component */ "./src/app/project/invite/invite.component.ts");
/* harmony import */ var _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/confirm-dialog/confirm-dialog.component */ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _anims_router_anim__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../anims/router.anim */ "./src/app/anims/router.anim.ts");
/* harmony import */ var _anims_list_anim__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../anims/list.anim */ "./src/app/anims/list.anim.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../actions */ "./src/app/actions/index.ts");













var ProjectListComponent = /** @class */ (function () {
    function ProjectListComponent(dialog, cd, store$) {
        this.dialog = dialog;
        this.cd = cd;
        this.store$ = store$;
        this.store$.dispatch(_actions__WEBPACK_IMPORTED_MODULE_12__["load"]({ payload: null }));
        this.projects$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["getProjects"]));
        this.listAnim$ = this.projects$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (p) { return p.length; }));
    }
    ProjectListComponent.prototype.ngOnInit = function () {
    };
    ProjectListComponent.prototype.ngOnDestroy = function () {
    };
    ProjectListComponent.prototype.openNewProjectDialog = function () {
        var _this = this;
        var selectedImg = "/assets/img/covers/" + Math.floor(Math.random() * 40) + "_tn.jpg";
        var dialogRef = this.dialog.open(_new_project_new_project_component__WEBPACK_IMPORTED_MODULE_5__["NewProjectComponent"], { data: {
                thumbnails: this.getThumbnails(),
                img: selectedImg
            } });
        dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1), //只取一个值，然后自动销毁，这样就不用写unsubsrcribe了
        Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (n) { return n; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (val) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, val, { coverImg: _this.buildImgSrc(val.coverImg) })); })).subscribe(function (p) {
            _this.store$.dispatch(_actions__WEBPACK_IMPORTED_MODULE_12__["add"]({ payload: p }));
        });
    };
    ProjectListComponent.prototype.launchInviteDialog = function (project) {
        var _this = this;
        this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_3__["getProjectUsers"](project.id))).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (users) { return _this.dialog.open(_invite_invite_component__WEBPACK_IMPORTED_MODULE_6__["InviteComponent"], { data: { members: users } }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["switchMap"])(function (dialogRef) { return dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (n) { return n; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (val) { return _this.store$.dispatch(_actions__WEBPACK_IMPORTED_MODULE_12__["invite"]({ payload: { projectId: project.id, members: val } })); })); }));
    };
    ProjectListComponent.prototype.launchUpdateDialog = function (project) {
        var _this = this;
        var dialogRef = this.dialog.open(_new_project_new_project_component__WEBPACK_IMPORTED_MODULE_5__["NewProjectComponent"], { data: {
                thumbnails: this.getThumbnails(),
                project: project
            } });
        dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (n) { return n; }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(function (val) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, val, { id: project.id, coverImg: _this.buildImgSrc(val.coverImg) })); })).subscribe(function (p) {
            _this.store$.dispatch(_actions__WEBPACK_IMPORTED_MODULE_12__["update"]({ payload: p }));
        });
    };
    ProjectListComponent.prototype.launchConfirmDialog = function (project) {
        var _this = this;
        var dialogRef = this.dialog.open(_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_7__["ConfirmDialogComponent"], { data: {
                title: "删除项目:",
                content: "您确认删除该项目吗?"
            } });
        // dialogRef.afterClosed().subscribe(result => {
        //   console.log(result);
        //   this.projects = this.projects.filter(p => p.id !== project.id);
        //   this.cd.markForCheck();
        // });
        dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(function (n) { return n; })).subscribe(function (_) {
            _this.store$.dispatch(_actions__WEBPACK_IMPORTED_MODULE_12__["deleteProject"]({ payload: project }));
        });
    };
    ProjectListComponent.prototype.getThumbnails = function () {
        return lodash__WEBPACK_IMPORTED_MODULE_10__["range"](0, 39).map(function (i) { return "/assets/img/covers/" + i + "_tn.jpg"; });
    };
    ProjectListComponent.prototype.buildImgSrc = function (img) {
        return img.indexOf("_") > -1 ? img.split("_")[0] + '.jpg' : img;
    };
    ProjectListComponent.prototype.selectProject = function (project) {
        this.store$.dispatch(_actions__WEBPACK_IMPORTED_MODULE_12__["select"]({ payload: project }));
    };
    ProjectListComponent.ctorParameters = function () { return [
        { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('@routeAnim')
    ], ProjectListComponent.prototype, "state", void 0);
    ProjectListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-project-list',
            template: __webpack_require__(/*! raw-loader!./project-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/project/project-list/project-list.component.html"),
            animations: [_anims_router_anim__WEBPACK_IMPORTED_MODULE_8__["slideToRight"], _anims_list_anim__WEBPACK_IMPORTED_MODULE_9__["listAnimation"]],
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
            styles: [__webpack_require__(/*! ./project-list.component.scss */ "./src/app/project/project-list/project-list.component.scss")]
        })
    ], ProjectListComponent);
    return ProjectListComponent;
}());



/***/ }),

/***/ "./src/app/project/project-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/project/project-routing.module.ts ***!
  \***************************************************/
/*! exports provided: ProjectRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectRoutingModule", function() { return ProjectRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./project-list/project-list.component */ "./src/app/project/project-list/project-list.component.ts");




var routes = [
    { path: '', component: _project_list_project_list_component__WEBPACK_IMPORTED_MODULE_3__["ProjectListComponent"] }
];
var ProjectRoutingModule = /** @class */ (function () {
    function ProjectRoutingModule() {
    }
    ProjectRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], ProjectRoutingModule);
    return ProjectRoutingModule;
}());



/***/ })

}]);
//# sourceMappingURL=project-es5.js.map