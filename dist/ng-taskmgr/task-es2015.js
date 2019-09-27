(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["task"],{

/***/ "./node_modules/raw-loader/index.js!./src/app/task/copy-task/copy-task.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/task/copy-task/copy-task.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit($event, form)\">\n\t<h2 mat-dialog-title>移动本列表所有内容:</h2>\n\t<div mat-dialog-content>\n\t\t<mat-select placeholder=\"请选择目标列表\" formControlName=\"targetListId\">\n\t\t\t<mat-option *ngFor=\"let list of lists$ | async\" [value]=\"list.id\">\n\t\t\t\t{{list.name}}\n\t\t\t</mat-option>\n\t\t</mat-select>\n\t</div>\n\t<div mat-dialog-actions>\n\t\t<button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"!form.valid\">保存</button>\n\t\t<button type=\"button\" mat-button mat-dialog-close>关闭</button>\n\t</div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/task/new-task-list/new-task-list.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/task/new-task-list/new-task-list.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit(form, $event)\">\n  <h2 mat-dialog-title>{{title}}</h2>\n  <div mat-dialog-content>\n    <mat-form-field class=\"full-width\">\n      <input matInput placeholder=\"列表名称\" formControlName=\"name\">\n    </mat-form-field>\n  </div>\n  <div mat-dialog-actions>\n      <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"!form.valid\">保存</button>\n      <button type=\"button\" mat-button mat-dialog-close>关闭</button>\n  </div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/task/new-task/new-task.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/task/new-task/new-task.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"form\" (ngSubmit)=\"onSubmit($event, form)\">\n\t<h2 mat-dialog-title>{{dialogTitle}}</h2>\n\t<div mat-dialog-content>\n\t\t<mat-form-field class=\"full-width\">\n\t\t\t<input matInput type=\"text\" placeholder=\"任务内容\" formControlName=\"desc\">\n\t\t</mat-form-field>\n\t\t<mat-radio-group aria-label=\"Select an option\" formControlName=\"priority\">\n\t\t\t<mat-radio-button *ngFor=\"let priority of priorities\" [value]=\"priority.value\">\n\t\t\t\t{{priority.label}}\n\t\t\t</mat-radio-button>\n\t\t</mat-radio-group>\n\t\t<div class=\"full-width\">\n\t\t\t<app-chips-list [label]=\"'更改执行者'\" [multiple]=\"false\" formControlName=\"owner\"></app-chips-list>\n\t\t</div>\n\t\t<mat-form-field class=\"full-width\">\n\t\t\t<input matInput [matDatepicker]=\"dueDatepicker\" type=\"text\" placeholder=\"任务截止日期\" formControlName=\"dueDate\">\n\t\t\t<mat-datepicker-toggle matSuffix [for]=\"dueDatepicker\"></mat-datepicker-toggle>\n\t\t\t<mat-datepicker #dueDatepicker></mat-datepicker>\n\t\t</mat-form-field>\n\t\t<mat-form-field class=\"full-width\">\n\t\t\t<input matInput [matDatepicker]=\"reminderDatepicker\" type=\"text\" placeholder=\"提醒日期\" formControlName=\"reminder\">\n\t\t\t<mat-datepicker-toggle matSuffix [for]=\"reminderDatepicker\"></mat-datepicker-toggle>\n\t\t\t\t<mat-datepicker #reminderDatepicker></mat-datepicker>\n\t\t</mat-form-field>\n\t\t<div class=\"full-width\">\n\t\t\t<app-chips-list [label]=\"'更改参与者'\" [multiple]=\"true\" formControlName=\"followers\"></app-chips-list>\n\t\t</div>\n\t\t<mat-form-field class=\"full-width\">\n\t\t\t<textarea matInput placeholder=\"备注\" formControlName=\"remark\"></textarea>\n\t\t</mat-form-field>\n\t</div>\n\t<div mat-dialog-actions>\n\t\t<button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"!form.valid\">保存</button>\n\t\t<button type=\"button\" mat-button mat-dialog-close>关闭</button>\n\t</div>\n</form>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/task/quick-task/quick-task.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/task/quick-task/quick-task.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-form-field class=\"full-width\">\n\t<input matInput type=\"text\" placeholder=\"在这里快速建立一个任务\" [(ngModel)]=\"desc\">\n\t<button mat-icon-button matSuffix type=\"button\" (onClick)=\"sendQuickTask()\">\n\t\t<mat-icon>send</mat-icon>\n\t</button>\n</mat-form-field>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/task/task-header/task-header.component.html":
/*!***************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/task/task-header/task-header.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div mat-subheader class=\"header-container\">\n  <div><h3>{{header}}</h3></div>\n  <div class=\"fill\">\n    <button mat-button type=\"button\" (click)=\"onNewTaskClick()\">\n      <mat-icon>add_circle_outline</mat-icon>\n      <span>新任务</span>\n    </button>\n  </div>\n  <div>\n    <button mat-icon-button [matMenuTriggerFor]=\"menu\">\n      <mat-icon>keyboard_arrow_down</mat-icon>\n    </button>\n  </div>\n</div>\n\n<mat-menu #menu=\"matMenu\">\n  <button mat-menu-item (click)=\"onEditListClick()\">\n    <mat-icon>mode_edit</mat-icon>\n    <span>修改列表名称</span>\n  </button>\n  <button mat-menu-item (click)=\"onMoveAllClick()\">\n    <mat-icon [svgIcon]=\"'move'\" class=\"material-icon\"></mat-icon>\n    <span>移动列表所有内容</span>\n  </button>\n  <button mat-menu-item (click)=\"onDelListClick()\">\n      <mat-icon>delete_forever</mat-icon>\n      <span>删除列表</span>\n    </button>\n</mat-menu>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/task/task-home/task-home.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/task/task-home/task-home.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"task-lists\">\n  <app-task-list\n    class=\"list-container\"\n    app-droppable\n    [dropTags]=\"['task-item', 'task-list']\"\n    [dragEnterClass]=\"'drag-enter'\"\n    [app-draggable]=\"true\"\n    [dragTag]=\"'task-list'\"\n    [draggedClass]=\"'drag-start'\"\n    [dragData]=\"list\"\n    (dropped)=\"handleMove($event, list)\"\n    [ngStyle]=\"{order: list.order}\"\n    *ngFor=\"let list of lists$ | async\">\n    <app-task-header\n      [header]=\"list.name\"\n      (newTask)=\"launchNewTaskDialog(list)\"\n      (moveAll)=\"launchCopyTaskDialog(list)\"\n      (delList)=\"launchConfirmDialog(list)\"\n      (onEditList)=\"launchEditListDialog(list)\">\n    </app-task-header>\n    <app-quick-task (quickTask)=\"handleQuickTask($event, list)\"></app-quick-task>\n    <app-task-item\n      *ngFor=\"let task of list.tasks\"\n      [item]=\"task\"\n      (taskClick)=\"launchUpdateTaskDialog(task)\">\n    </app-task-item>\n  </app-task-list>\n</div>\n\n<button class=\"fab-button\" mat-fab type=\"button\" (click)=\"launchNewListDialog($event)\">\n  <mat-icon>add</mat-icon>\n</button>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/task/task-item/task-item.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/task/task-item/task-item.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list-item class=\"container\"\n  [@item]=\"widerPriority\"\n  [ngClass]=\"{\n    'priority-normal': item.priority === 3,\n    'priority-important': item.priority === 2,\n    'priority-emergency': item.priority === 1\n  }\"\n  [app-draggable]=\"true\"\n  [dragTag]=\"'task-item'\"\n  [draggedClass]=\"'drag-start'\"\n  [dragData]=\"item\"\n  (click)=\"onItemClick()\">\n  <mat-checkbox\n    class=\"completion-status\"\n    [checked]=\"item.completed\"\n    (click)=\"onCheckBoxClick($event)\">\n  </mat-checkbox>\n  <div mat-line class=\"content\" [ngClass]=\"{'completed': item.completed}\">\n    <span [matTooltip]=\"item.desc\">{{item.desc}}</span>\n  </div>\n  <div mat-line class=\"bottom-bar\">\n    <span class=\"due-date\" *ngIf=\"item.dueDate\">\n      {{item.dueDate | date: \"yy-MM-dd\"}}\n    </span>\n    <mat-icon *ngIf=\"item.reminder\">alarm</mat-icon>\n  </div>\n  <mat-icon [svgIcon]=\"avatar\" class=\"avatar\" matListAvatar></mat-icon>\n</mat-list-item>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/task/task-list/task-list.component.html":
/*!***********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/task/task-list/task-list.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-list>\n  <ng-content></ng-content>\n</mat-list>"

/***/ }),

/***/ "./src/app/anims/item.anim.ts":
/*!************************************!*\
  !*** ./src/app/anims/item.anim.ts ***!
  \************************************/
/*! exports provided: itemAnim */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "itemAnim", function() { return itemAnim; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm2015/animations.js");

const itemAnim = Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('item', [
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('in', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'border-left-width': '3px' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ 'border-left-width': '8px' })),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('out => hover', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms ease-in')),
    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('hover => out', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('100ms ease-out'))
]);


/***/ }),

/***/ "./src/app/task/copy-task/copy-task.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/task/copy-task/copy-task.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svY29weS10YXNrL2NvcHktdGFzay5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/task/copy-task/copy-task.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/task/copy-task/copy-task.component.ts ***!
  \*******************************************************/
/*! exports provided: CopyTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CopyTaskComponent", function() { return CopyTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm2015/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let CopyTaskComponent = class CopyTaskComponent {
    constructor(dialogRef, data, fb) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
    }
    ngOnInit() {
        this.lists$ = this.data.lists;
        this.form = this.fb.group({
            targetListId: ['']
        });
    }
    onSubmit(ev, { value, valid }) {
        ev.preventDefault();
        if (!valid) {
            return;
        }
        this.dialogRef.close({ srcListId: this.data.srcListId, targetListId: value.targetListId });
    }
};
CopyTaskComponent.ctorParameters = () => [
    { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
CopyTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-copy-task',
        template: __webpack_require__(/*! raw-loader!./copy-task.component.html */ "./node_modules/raw-loader/index.js!./src/app/task/copy-task/copy-task.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./copy-task.component.scss */ "./src/app/task/copy-task/copy-task.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], CopyTaskComponent);



/***/ }),

/***/ "./src/app/task/index.ts":
/*!*******************************!*\
  !*** ./src/app/task/index.ts ***!
  \*******************************/
/*! exports provided: TaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModule", function() { return TaskModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _task_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-routing.module */ "./src/app/task/task-routing.module.ts");
/* harmony import */ var _task_home_task_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-home/task-home.component */ "./src/app/task/task-home/task-home.component.ts");
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./task-list/task-list.component */ "./src/app/task/task-list/task-list.component.ts");
/* harmony import */ var _task_item_task_item_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task-item/task-item.component */ "./src/app/task/task-item/task-item.component.ts");
/* harmony import */ var _task_header_task_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./task-header/task-header.component */ "./src/app/task/task-header/task-header.component.ts");
/* harmony import */ var _new_task_new_task_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./new-task/new-task.component */ "./src/app/task/new-task/new-task.component.ts");
/* harmony import */ var _copy_task_copy_task_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./copy-task/copy-task.component */ "./src/app/task/copy-task/copy-task.component.ts");
/* harmony import */ var _new_task_list_new_task_list_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./new-task-list/new-task-list.component */ "./src/app/task/new-task-list/new-task-list.component.ts");
/* harmony import */ var _quick_task_quick_task_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./quick-task/quick-task.component */ "./src/app/task/quick-task/quick-task.component.ts");












let TaskModule = class TaskModule {
};
TaskModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [
            _task_home_task_home_component__WEBPACK_IMPORTED_MODULE_4__["TaskHomeComponent"],
            _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_5__["TaskListComponent"],
            _task_item_task_item_component__WEBPACK_IMPORTED_MODULE_6__["TaskItemComponent"],
            _task_header_task_header_component__WEBPACK_IMPORTED_MODULE_7__["TaskHeaderComponent"],
            _new_task_new_task_component__WEBPACK_IMPORTED_MODULE_8__["NewTaskComponent"],
            _copy_task_copy_task_component__WEBPACK_IMPORTED_MODULE_9__["CopyTaskComponent"],
            _new_task_list_new_task_list_component__WEBPACK_IMPORTED_MODULE_10__["NewTaskListComponent"],
            _quick_task_quick_task_component__WEBPACK_IMPORTED_MODULE_11__["QuickTaskComponent"],
        ],
        imports: [
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"],
            _task_routing_module__WEBPACK_IMPORTED_MODULE_3__["TaskRoutingModule"],
        ],
        entryComponents: [
            _new_task_new_task_component__WEBPACK_IMPORTED_MODULE_8__["NewTaskComponent"],
            _copy_task_copy_task_component__WEBPACK_IMPORTED_MODULE_9__["CopyTaskComponent"],
            _new_task_list_new_task_list_component__WEBPACK_IMPORTED_MODULE_10__["NewTaskListComponent"],
        ]
    })
], TaskModule);



/***/ }),

/***/ "./src/app/task/new-task-list/new-task-list.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/task/new-task-list/new-task-list.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svbmV3LXRhc2stbGlzdC9uZXctdGFzay1saXN0LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/task/new-task-list/new-task-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/task/new-task-list/new-task-list.component.ts ***!
  \***************************************************************/
/*! exports provided: NewTaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTaskListComponent", function() { return NewTaskListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let NewTaskListComponent = class NewTaskListComponent {
    constructor(data, dialogRef, fb) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.fb = fb;
        this.title = "";
    }
    ngOnInit() {
        this.title = this.data.title;
        this.form = this.fb.group({
            name: [this.data.name ? this.data.name : '', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    onSubmit({ value, valid }) {
        if (!valid) {
            return;
        }
        this.dialogRef.close(value);
    }
};
NewTaskListComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
NewTaskListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-task-list',
        template: __webpack_require__(/*! raw-loader!./new-task-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/task/new-task-list/new-task-list.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./new-task-list.component.scss */ "./src/app/task/new-task-list/new-task-list.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
], NewTaskListComponent);



/***/ }),

/***/ "./src/app/task/new-task/new-task.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/task/new-task/new-task.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svbmV3LXRhc2svbmV3LXRhc2suY29tcG9uZW50LnNjc3MifQ== */"

/***/ }),

/***/ "./src/app/task/new-task/new-task.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/task/new-task/new-task.component.ts ***!
  \*****************************************************/
/*! exports provided: NewTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewTaskComponent", function() { return NewTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let NewTaskComponent = class NewTaskComponent {
    constructor(data, fb, dialogRef) {
        this.data = data;
        this.fb = fb;
        this.dialogRef = dialogRef;
        this.title = "";
        this.priorities = [{
                label: '紧急',
                value: 1
            }, {
                label: '重要',
                value: 2
            }, {
                label: '普通',
                value: 3
            }];
    }
    ngOnInit() {
        if (!this.data.task) {
            this.form = this.fb.group({
                desc: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)])],
                priority: [3],
                owner: [[this.data.owner]],
                followers: [[]],
                dueDate: [],
                reminder: [],
                remark: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(40)]
            });
            this.dialogTitle = '创建任务：';
        }
        else {
            this.form = this.fb.group({
                desc: [this.data.task.desc, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(30)])],
                priority: [this.data.task.priority],
                owner: [this.data.task.owner ? [{ name: this.data.task.owner.name, value: this.data.task.owner.id }] : []],
                followers: [this.data.task.participants ? [...this.data.task.participants] : []],
                dueDate: [this.data.task.dueDate],
                reminder: [this.data.task.reminder],
                remark: [this.data.task.remark, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(40)]
            });
            this.dialogTitle = '修改任务：';
        }
    }
    onSubmit(ev, { value, valid }) {
        ev.preventDefault();
        if (!valid) {
            return;
        }
        this.dialogRef.close(Object.assign({}, value, { ownerId: value.owner.length > 0 ? value.owner[0].id : null, participantIds: value.followers.map(f => f.id) }));
    }
};
NewTaskComponent.ctorParameters = () => [
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] }
];
NewTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-task',
        template: __webpack_require__(/*! raw-loader!./new-task.component.html */ "./node_modules/raw-loader/index.js!./src/app/task/new-task/new-task.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./new-task.component.scss */ "./src/app/task/new-task/new-task.component.scss")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"]))
], NewTaskComponent);



/***/ }),

/***/ "./src/app/task/quick-task/quick-task.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/task/quick-task/quick-task.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svcXVpY2stdGFzay9xdWljay10YXNrLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/task/quick-task/quick-task.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/task/quick-task/quick-task.component.ts ***!
  \*********************************************************/
/*! exports provided: QuickTaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuickTaskComponent", function() { return QuickTaskComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let QuickTaskComponent = class QuickTaskComponent {
    constructor() {
        this.quickTask = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onSubmit({ value, valid }, ev) {
        ev.preventDefault();
        console.log(value, valid);
    }
    sendQuickTask() {
        if (!this.desc || this.desc.length === 0 || !this.desc.trim()) {
            return;
        }
        this.quickTask.emit(this.desc);
        this.desc = "";
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], QuickTaskComponent.prototype, "quickTask", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('keyup.enter')
], QuickTaskComponent.prototype, "sendQuickTask", null);
QuickTaskComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-quick-task',
        template: __webpack_require__(/*! raw-loader!./quick-task.component.html */ "./node_modules/raw-loader/index.js!./src/app/task/quick-task/quick-task.component.html"),
        styles: [__webpack_require__(/*! ./quick-task.component.scss */ "./src/app/task/quick-task/quick-task.component.scss")]
    })
], QuickTaskComponent);



/***/ }),

/***/ "./src/app/task/task-header/task-header.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/task/task-header/task-header.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fill {\n  -webkit-box-flex: 1;\n          flex: 1;\n  text-align: center;\n}\n\n.header-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: nowrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n  align-content: center;\n  width: 100%;\n}\n\n.material-icon {\n  line-height: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay90YXNrLWhlYWRlci9DOlxcVXNlcnNcXHlpbnlpXFxEZXNrdG9wXFxleGVyY2lzZVxcZ2l0aHViX3Byb2pcXG5nLXRhc2ttZ3Ivc3JjXFxhcHBcXHRhc2tcXHRhc2staGVhZGVyXFx0YXNrLWhlYWRlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFzay90YXNrLWhlYWRlci90YXNrLWhlYWRlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO1VBQUEsT0FBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EscUJBQUE7RUFDQSxXQUFBO0FDRUY7O0FEQ0E7RUFDRSxjQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC90YXNrL3Rhc2staGVhZGVyL3Rhc2staGVhZGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZpbGwge1xyXG4gIGZsZXg6IDE7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5oZWFkZXItY29udGFpbmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBhbGlnbi1jb250ZW50OiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5tYXRlcmlhbC1pY29uIHtcclxuICBsaW5lLWhlaWdodDogMTtcclxufSIsIi5maWxsIHtcbiAgZmxleDogMTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uaGVhZGVyLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYWxpZ24tY29udGVudDogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbn1cblxuLm1hdGVyaWFsLWljb24ge1xuICBsaW5lLWhlaWdodDogMTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/task/task-header/task-header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/task/task-header/task-header.component.ts ***!
  \***********************************************************/
/*! exports provided: TaskHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskHeaderComponent", function() { return TaskHeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TaskHeaderComponent = class TaskHeaderComponent {
    constructor() {
        this.header = '';
        this.newTask = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.moveAll = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.delList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onEditList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    ngOnInit() {
    }
    onNewTaskClick() {
        this.newTask.emit();
    }
    onMoveAllClick() {
        this.moveAll.emit();
    }
    onDelListClick() {
        this.delList.emit();
    }
    onEditListClick() {
        this.onEditList.emit();
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TaskHeaderComponent.prototype, "header", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TaskHeaderComponent.prototype, "newTask", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TaskHeaderComponent.prototype, "moveAll", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TaskHeaderComponent.prototype, "delList", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TaskHeaderComponent.prototype, "onEditList", void 0);
TaskHeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task-header',
        template: __webpack_require__(/*! raw-loader!./task-header.component.html */ "./node_modules/raw-loader/index.js!./src/app/task/task-header/task-header.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./task-header.component.scss */ "./src/app/task/task-header/task-header.component.scss")]
    })
], TaskHeaderComponent);



/***/ }),

/***/ "./src/app/task/task-home/task-home.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/task/task-home/task-home.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".fab-button {\n  position: fixed;\n  right: 32px;\n  bottom: 96px;\n  z-index: 998;\n}\n\n.task-lists {\n  min-width: 100%;\n  height: 100%;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: nowrap;\n  overflow-x: scroll;\n}\n\n.list-container {\n  -webkit-box-flex: 0;\n          flex: 0 0 360px;\n  overflow-x: hidden;\n  overflow-y: scroll;\n}\n\n.drag-enter {\n  background-color: dimgray;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay90YXNrLWhvbWUvQzpcXFVzZXJzXFx5aW55aVxcRGVza3RvcFxcZXhlcmNpc2VcXGdpdGh1Yl9wcm9qXFxuZy10YXNrbWdyL3NyY1xcYXBwXFx0YXNrXFx0YXNrLWhvbWVcXHRhc2staG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFzay90YXNrLWhvbWUvdGFzay1ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsWUFBQTtBQ0NGOztBREVBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxtQkFBQTtVQUFBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSx5QkFBQTtBQ0NGIiwiZmlsZSI6InNyYy9hcHAvdGFzay90YXNrLWhvbWUvdGFzay1ob21lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZhYi1idXR0b24ge1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICByaWdodDogMzJweDtcclxuICBib3R0b206IDk2cHg7XHJcbiAgei1pbmRleDogOTk4O1xyXG59XHJcblxyXG4udGFzay1saXN0cyB7XHJcbiAgbWluLXdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgZmxleC13cmFwOiBub3dyYXA7XHJcbiAgb3ZlcmZsb3cteDogc2Nyb2xsO1xyXG59XHJcblxyXG4ubGlzdC1jb250YWluZXIge1xyXG4gIGZsZXg6IDAgMCAzNjBweDtcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcblxyXG4uZHJhZy1lbnRlciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogZGltZ3JheTtcclxufSIsIi5mYWItYnV0dG9uIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICByaWdodDogMzJweDtcbiAgYm90dG9tOiA5NnB4O1xuICB6LWluZGV4OiA5OTg7XG59XG5cbi50YXNrLWxpc3RzIHtcbiAgbWluLXdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBvdmVyZmxvdy14OiBzY3JvbGw7XG59XG5cbi5saXN0LWNvbnRhaW5lciB7XG4gIGZsZXg6IDAgMCAzNjBweDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICBvdmVyZmxvdy15OiBzY3JvbGw7XG59XG5cbi5kcmFnLWVudGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogZGltZ3JheTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/task/task-home/task-home.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/task/task-home/task-home.component.ts ***!
  \*******************************************************/
/*! exports provided: TaskHomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskHomeComponent", function() { return TaskHomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _new_task_new_task_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../new-task/new-task.component */ "./src/app/task/new-task/new-task.component.ts");
/* harmony import */ var _copy_task_copy_task_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../copy-task/copy-task.component */ "./src/app/task/copy-task/copy-task.component.ts");
/* harmony import */ var _shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../shared/confirm-dialog/confirm-dialog.component */ "./src/app/shared/confirm-dialog/confirm-dialog.component.ts");
/* harmony import */ var _new_task_list_new_task_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../new-task-list/new-task-list.component */ "./src/app/task/new-task-list/new-task-list.component.ts");
/* harmony import */ var _anims_router_anim__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../anims/router.anim */ "./src/app/anims/router.anim.ts");
/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../reducers */ "./src/app/reducers/index.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _actions_task_list_action__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../actions/task-list.action */ "./src/app/actions/task-list.action.ts");
/* harmony import */ var _actions_task_action__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../actions/task.action */ "./src/app/actions/task.action.ts");














let TaskHomeComponent = class TaskHomeComponent {
    constructor(dialog, store$, route) {
        this.dialog = dialog;
        this.store$ = store$;
        this.route = route;
        // this.projectId$ = this.route.paramMap.pipe(
        //   switchMap(params => of(params.get('id')))
        // );
        this.projectId$ = this.route.paramMap.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(p => p.get('id')));
        this.lists$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_9__["getTasksByLists"]));
    }
    ngOnInit() {
    }
    launchNewTaskDialog(list) {
        const user$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_9__["getAuthState"]));
        user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(auth => auth.user)).subscribe(user => {
            const dialogRef = this.dialog.open(_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_4__["NewTaskComponent"], { data: { owner: user } });
            dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(n => n)).subscribe(val => {
                this.store$.dispatch(_actions_task_action__WEBPACK_IMPORTED_MODULE_13__["add"]({ payload: Object.assign({}, val, { taskListId: list.id, completed: false, createDate: new Date() }) }));
            });
        });
    }
    launchCopyTaskDialog(list) {
        const list$ = this.lists$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(l => l.filter(n => n.id !== list.id)));
        const dialogRef = this.dialog.open(_copy_task_copy_task_component__WEBPACK_IMPORTED_MODULE_5__["CopyTaskComponent"], { data: { srcListId: list.id, lists: list$ } });
        dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(n => n)).subscribe(val => {
            this.store$.dispatch(_actions_task_action__WEBPACK_IMPORTED_MODULE_13__["moveAll"]({ payload: val }));
        });
    }
    launchUpdateTaskDialog(task) {
        const dialogRef = this.dialog.open(_new_task_new_task_component__WEBPACK_IMPORTED_MODULE_4__["NewTaskComponent"], { data: {
                task
            } });
        dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(n => n)).subscribe(val => {
            this.store$.dispatch(_actions_task_action__WEBPACK_IMPORTED_MODULE_13__["update"]({ payload: Object.assign({}, task, val) }));
        });
    }
    launchConfirmDialog(list) {
        const dialogRef = this.dialog.open(_shared_confirm_dialog_confirm_dialog_component__WEBPACK_IMPORTED_MODULE_6__["ConfirmDialogComponent"], { data: {
                title: "删除列表:",
                content: "您确认删除该列表吗?"
            } });
        dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["filter"])(n => n)).subscribe(result => {
            this.store$.dispatch(_actions_task_list_action__WEBPACK_IMPORTED_MODULE_12__["deleteTaskList"]({ payload: list }));
        });
    }
    launchEditListDialog(list) {
        const dialogRef = this.dialog.open(_new_task_list_new_task_list_component__WEBPACK_IMPORTED_MODULE_7__["NewTaskListComponent"], { data: {
                title: "更改列表名称:",
                name: list.name
            } });
        dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1)).subscribe(result => {
            this.store$.dispatch(_actions_task_list_action__WEBPACK_IMPORTED_MODULE_12__["update"]({ payload: Object.assign({}, result, { id: list.id }) }));
        });
    }
    launchNewListDialog(ev) {
        const dialogRef = this.dialog.open(_new_task_list_new_task_list_component__WEBPACK_IMPORTED_MODULE_7__["NewTaskListComponent"], { data: {
                title: "新建列表:"
            } });
        dialogRef.afterClosed().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["withLatestFrom"])(this.projectId$, (val, projectId) => (Object.assign({}, val, { projectId })))).subscribe(result => {
            this.store$.dispatch(_actions_task_list_action__WEBPACK_IMPORTED_MODULE_12__["add"]({ payload: result }));
        });
    }
    handleMove(srcData, list) {
        switch (srcData.tag) {
            case 'task-item':
                console.log('handling item');
                break;
            case 'task-list':
                console.log('handling list');
                const srcList = srcData.data;
                const tempOrder = srcList.order;
                srcList.order = list.order;
                list.order = tempOrder;
                break;
            default:
                break;
        }
    }
    handleQuickTask(desc, list) {
        const user$ = this.store$.pipe(Object(_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["select"])(_reducers__WEBPACK_IMPORTED_MODULE_9__["getAuthState"]));
        user$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_11__["map"])(auth => auth.user)).subscribe(user => {
            this.store$.dispatch(_actions_task_action__WEBPACK_IMPORTED_MODULE_13__["add"]({ payload: {
                    desc: desc,
                    priority: 3,
                    taskListId: list.id,
                    ownerId: user.id,
                    completed: false,
                    createDate: new Date(),
                    participantIds: []
                } }));
        });
    }
};
TaskHomeComponent.ctorParameters = () => [
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["ActivatedRoute"] }
];
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostBinding"])('@routeAnim')
], TaskHomeComponent.prototype, "state", void 0);
TaskHomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task-home',
        template: __webpack_require__(/*! raw-loader!./task-home.component.html */ "./node_modules/raw-loader/index.js!./src/app/task/task-home/task-home.component.html"),
        animations: [
            _anims_router_anim__WEBPACK_IMPORTED_MODULE_8__["slideToRight"]
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./task-home.component.scss */ "./src/app/task/task-home/task-home.component.scss")]
    })
], TaskHomeComponent);



/***/ }),

/***/ "./src/app/task/task-item/task-item.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/task/task-item/task-item.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-icon.avatar {\n  overflow: hidden;\n  width: 40px !important;\n  height: 40px !important;\n  border-radius: 50%;\n  box-sizing: border-box !important;\n  padding: 0 !important;\n  margin: 12px;\n  -webkit-box-ordinal-group: 4;\n          order: 3;\n}\n\n.priority-normal {\n  border-left: 3px solid #A6A6A6;\n}\n\n.priority-important {\n  border-left: 3px solid #FFAF38;\n}\n\n.priority-emergency {\n  border-left: 3px solid red;\n}\n\n.completed {\n  opacity: 0.64;\n  color: #d9d9d9;\n  text-decoration: line-through;\n}\n\n.completion-status {\n  -webkit-box-ordinal-group: 0;\n          order: -1;\n}\n\n.due-date {\n  background-color: #FF4F3E;\n  color: #fff;\n}\n\n.alarm {\n  font-size: 18px;\n}\n\n.bottom-bar {\n  margin-top: 3px;\n  margin-bottom: 2px;\n  font-size: 10px;\n  width: 100%;\n  -webkit-box-ordinal-group: 2;\n          order: 1;\n}\n\n.content {\n  -webkit-box-ordinal-group: 2;\n          order: 1;\n  width: 100%;\n  padding: 5px;\n}\n\n.container {\n  width: 100%;\n  border-radius: 3px;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);\n}\n\n.drag-start {\n  opacity: 0.5;\n  border: #ff525b dashed 2px;\n}\n\n:host {\n  width: 100%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdGFzay90YXNrLWl0ZW0vQzpcXFVzZXJzXFx5aW55aVxcRGVza3RvcFxcZXhlcmNpc2VcXGdpdGh1Yl9wcm9qXFxuZy10YXNrbWdyL3NyY1xcYXBwXFx0YXNrXFx0YXNrLWl0ZW1cXHRhc2staXRlbS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvdGFzay90YXNrLWl0ZW0vdGFzay1pdGVtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQ0FBQTtFQUNBLHFCQUFBO0VBQ0EsWUFBQTtFQUNBLDRCQUFBO1VBQUEsUUFBQTtBQ0NGOztBREVBO0VBQ0UsOEJBQUE7QUNDRjs7QURDQTtFQUNFLDhCQUFBO0FDRUY7O0FEQUE7RUFDRSwwQkFBQTtBQ0dGOztBREFBO0VBQ0UsYUFBQTtFQUNBLGNBQUE7RUFDQSw2QkFBQTtBQ0dGOztBREFBO0VBQ0UsNEJBQUE7VUFBQSxTQUFBO0FDR0Y7O0FEREE7RUFDRSx5QkFBQTtFQUNBLFdBQUE7QUNJRjs7QURGQTtFQUNFLGVBQUE7QUNLRjs7QURIQTtFQUNFLGVBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7VUFBQSxRQUFBO0FDTUY7O0FESkE7RUFDRSw0QkFBQTtVQUFBLFFBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtBQ09GOztBRExBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0Esd0NBQUE7QUNRRjs7QURMQTtFQUNFLFlBQUE7RUFDQSwwQkFBQTtBQ1FGOztBRExBO0VBQ0UsV0FBQTtBQ1FGIiwiZmlsZSI6InNyYy9hcHAvdGFzay90YXNrLWl0ZW0vdGFzay1pdGVtLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsibWF0LWljb24uYXZhdGFyIHtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gIHdpZHRoOiA0MHB4IWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDQwcHghaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBib3gtc2l6aW5nOiBib3JkZXItYm94IWltcG9ydGFudDtcclxuICBwYWRkaW5nOiAwIWltcG9ydGFudDtcclxuICBtYXJnaW46IDEycHg7XHJcbiAgb3JkZXI6IDM7XHJcbn1cclxuXHJcbi5wcmlvcml0eS1ub3JtYWwge1xyXG4gIGJvcmRlci1sZWZ0OiAzcHggc29saWQgI0E2QTZBNjtcclxufVxyXG4ucHJpb3JpdHktaW1wb3J0YW50IHtcclxuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNGRkFGMzg7XHJcbn1cclxuLnByaW9yaXR5LWVtZXJnZW5jeSB7XHJcbiAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCByZWQ7XHJcbn1cclxuXHJcbi5jb21wbGV0ZWQge1xyXG4gIG9wYWNpdHk6IDAuNjQ7XHJcbiAgY29sb3I6ICNkOWQ5ZDk7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiBsaW5lLXRocm91Z2g7XHJcbn1cclxuXHJcbi5jb21wbGV0aW9uLXN0YXR1cyB7XHJcbiAgb3JkZXI6IC0xO1xyXG59XHJcbi5kdWUtZGF0ZSB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI0ZGNEYzRTtcclxuICBjb2xvcjogI2ZmZjtcclxufVxyXG4uYWxhcm0ge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxufVxyXG4uYm90dG9tLWJhciB7XHJcbiAgbWFyZ2luLXRvcDogM3B4O1xyXG4gIG1hcmdpbi1ib3R0b206IDJweDtcclxuICBmb250LXNpemU6IDEwcHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgb3JkZXI6IDE7XHJcbn1cclxuLmNvbnRlbnQge1xyXG4gIG9yZGVyOiAxO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4uY29udGFpbmVyIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBib3JkZXItcmFkaXVzOiAzcHg7XHJcbiAgYm94LXNoYWRvdzogMCAxcHggMnB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxufVxyXG5cclxuLmRyYWctc3RhcnQge1xyXG4gIG9wYWNpdHk6IDAuNTtcclxuICBib3JkZXI6ICNmZjUyNWIgZGFzaGVkIDJweDtcclxufVxyXG5cclxuOmhvc3Qge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59IiwibWF0LWljb24uYXZhdGFyIHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDQwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiA0MHB4ICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveCAhaW1wb3J0YW50O1xuICBwYWRkaW5nOiAwICFpbXBvcnRhbnQ7XG4gIG1hcmdpbjogMTJweDtcbiAgb3JkZXI6IDM7XG59XG5cbi5wcmlvcml0eS1ub3JtYWwge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNBNkE2QTY7XG59XG5cbi5wcmlvcml0eS1pbXBvcnRhbnQge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkICNGRkFGMzg7XG59XG5cbi5wcmlvcml0eS1lbWVyZ2VuY3kge1xuICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHJlZDtcbn1cblxuLmNvbXBsZXRlZCB7XG4gIG9wYWNpdHk6IDAuNjQ7XG4gIGNvbG9yOiAjZDlkOWQ5O1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbn1cblxuLmNvbXBsZXRpb24tc3RhdHVzIHtcbiAgb3JkZXI6IC0xO1xufVxuXG4uZHVlLWRhdGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkY0RjNFO1xuICBjb2xvcjogI2ZmZjtcbn1cblxuLmFsYXJtIHtcbiAgZm9udC1zaXplOiAxOHB4O1xufVxuXG4uYm90dG9tLWJhciB7XG4gIG1hcmdpbi10b3A6IDNweDtcbiAgbWFyZ2luLWJvdHRvbTogMnB4O1xuICBmb250LXNpemU6IDEwcHg7XG4gIHdpZHRoOiAxMDAlO1xuICBvcmRlcjogMTtcbn1cblxuLmNvbnRlbnQge1xuICBvcmRlcjogMTtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuLmNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG4gIGJveC1zaGFkb3c6IDAgMXB4IDJweCByZ2JhKDAsIDAsIDAsIDAuMSk7XG59XG5cbi5kcmFnLXN0YXJ0IHtcbiAgb3BhY2l0eTogMC41O1xuICBib3JkZXI6ICNmZjUyNWIgZGFzaGVkIDJweDtcbn1cblxuOmhvc3Qge1xuICB3aWR0aDogMTAwJTtcbn0iXX0= */"

/***/ }),

/***/ "./src/app/task/task-item/task-item.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/task/task-item/task-item.component.ts ***!
  \*******************************************************/
/*! exports provided: TaskItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskItemComponent", function() { return TaskItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _anims_item_anim__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../anims/item.anim */ "./src/app/anims/item.anim.ts");



let TaskItemComponent = class TaskItemComponent {
    constructor() {
        this.taskClick = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.widerPriority = 'in';
    }
    ngOnInit() {
        this.avatar = this.item.owner ? this.item.owner.avatar : 'unassigned';
    }
    onItemClick() {
        this.taskClick.emit();
    }
    onCheckBoxClick(ev) {
        ev.stopPropagation();
    }
    onMouseEnter() {
        this.widerPriority = 'out';
    }
    onMouseLeave() {
        this.widerPriority = 'in';
    }
};
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TaskItemComponent.prototype, "item", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
], TaskItemComponent.prototype, "avatar", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])()
], TaskItemComponent.prototype, "taskClick", void 0);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseenter')
], TaskItemComponent.prototype, "onMouseEnter", null);
tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('mouseleave')
], TaskItemComponent.prototype, "onMouseLeave", null);
TaskItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task-item',
        template: __webpack_require__(/*! raw-loader!./task-item.component.html */ "./node_modules/raw-loader/index.js!./src/app/task/task-item/task-item.component.html"),
        animations: [
            _anims_item_anim__WEBPACK_IMPORTED_MODULE_2__["itemAnim"]
        ],
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./task-item.component.scss */ "./src/app/task/task-item/task-item.component.scss")]
    })
], TaskItemComponent);



/***/ }),

/***/ "./src/app/task/task-list/task-list.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/task/task-list/task-list.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Rhc2svdGFzay1saXN0L3Rhc2stbGlzdC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/task/task-list/task-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/task/task-list/task-list.component.ts ***!
  \*******************************************************/
/*! exports provided: TaskListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskListComponent", function() { return TaskListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let TaskListComponent = class TaskListComponent {
    constructor() { }
    ngOnInit() {
    }
};
TaskListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-task-list',
        template: __webpack_require__(/*! raw-loader!./task-list.component.html */ "./node_modules/raw-loader/index.js!./src/app/task/task-list/task-list.component.html"),
        changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectionStrategy"].OnPush,
        styles: [__webpack_require__(/*! ./task-list.component.scss */ "./src/app/task/task-list/task-list.component.scss")]
    })
], TaskListComponent);



/***/ }),

/***/ "./src/app/task/task-routing.module.ts":
/*!*********************************************!*\
  !*** ./src/app/task/task-routing.module.ts ***!
  \*********************************************/
/*! exports provided: TaskRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskRoutingModule", function() { return TaskRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _task_home_task_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-home/task-home.component */ "./src/app/task/task-home/task-home.component.ts");




const routes = [
    { path: '', component: _task_home_task_home_component__WEBPACK_IMPORTED_MODULE_3__["TaskHomeComponent"] }
];
let TaskRoutingModule = class TaskRoutingModule {
};
TaskRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], TaskRoutingModule);



/***/ })

}]);
//# sourceMappingURL=task-es2015.js.map