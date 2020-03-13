(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-admin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/create-course/create-course.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/create-course/create-course.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"center-form\">\r\n<h2>Create New Course</h2>\r\n<form [formGroup]=\"courseForm\" class=\"col-sm-4\">\r\n\r\n    <div class=\"form-group\">\r\n        <label>Name</label>\r\n        <input type=\"text\" class=\"form-control\"  formControlName=\"name\" #name>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label>Description</label>\r\n        <textarea class=\"form-control\"  formControlName=\"description\" #description></textarea>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label>Seats</label>\r\n        <input type=\"text\" class=\"form-control\"  formControlName=\"seats\" #seats>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label>Start Date</label>\r\n        <div class=\"input-group\">\r\n            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                   name=\"dp\" ngbDatepicker #d=\"ngbDatepicker\" formControlName=\"start_date\" #start_date>\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-outline-secondary far fa-calendar-alt\" (click)=\"d.toggle()\" type=\"button\"></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\" data-provide=\"datepicker\">\r\n        <label>End Date</label>\r\n        <div class=\"input-group\">\r\n            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                   name=\"dp\" ngbDatepicker #d2=\"ngbDatepicker\" formControlName=\"end_date\" #end_date>\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-outline-secondary far fa-calendar-alt\" (click)=\"d2.toggle()\" type=\"button\"></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <button type=\"submit\" (click)=\"addCourse(name.value, description.value, seats.value, start_date.value, end_date.value)\" class=\"btn btn-primary\"><i class=\"fas fa-plus-circle\"></i> Create Course</button>\r\n    <a routerLink=\"/admin\" class=\"btn btn-warning\"><i class=\"fas fa-arrow-circle-left\"></i> Go Back</a>\r\n</form>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/dashboard/dashboard.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/dashboard/dashboard.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 class=\"center-form\">Admin Dashboard</h2>\r\n\r\n<div *ngIf=\"currentUser && isAdmin\" class=\"center-form\">\r\n\r\n    <div *ngIf=\"currentUser\">\r\n    <h2>Courses</h2>\r\n    <nav class=\"nav flex-column col-sm-1\">\r\n        <a routerLink=\"/admin/create-course\" routerLinkActive=\"active\" class=\"nav-link btn btn-success\"><i class=\"fas fa-plus-circle\"></i> Create New Course</a>\r\n    </nav>\r\n\r\n</div>\r\n\r\n<table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n            <th *ngFor=\"let colName of displayedColumns\" scope=\"col\">{{ colName }}</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let course of courses.res; let i = index\" class=\"trstyle\">\r\n            <th scope=\"row\">{{ course.id }}</th>\r\n            <td style=\"max-width: 125px; word-wrap: break-word;\">{{ course.name }}</td>\r\n            <td style=\"max-width: 200px; word-wrap: break-word;\">{{ course.description }}</td>\r\n            <td>{{ course.seats }}</td>\r\n            <td>{{ course.start_date }}</td>\r\n            <td>{{ course.end_date }}</td>\r\n            <td>\r\n                <button type=\"button\" (click)=\"editCourse(course.id)\" class=\"btn btn-primary\"><i class=\"fas fa-edit\"></i> Edit</button>\r\n                <button type=\"button\" (click)=\"deleteCourse(course.id)\" class=\"btn btn-danger\"><i class=\"fas fa-minus-circle\"></i> Delete</button>\r\n                <button type=\"button\" (click)=\"pendingEnrollment(course.id)\" class=\"btn btn-warning\" style=\"margin-left: 20px\"><span *ngIf=\"students[i] > 0\"class=\"badge badge-light\">{{students[i]}}</span> Pending Enrollments</button>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<nav aria-label=\"Page navigation course-library\">\r\n    <ul class=\"pagination\">\r\n\r\n        <ng-container *ngIf=\"page == 0; else elseBlock\">\r\n            <li class=\"page-item disabled\"><button class=\"page-link\" (click)=\"fetchPageCourses(page-1)\">Previous</button></li>\r\n        </ng-container>\r\n        <ng-template #elseBlock>\r\n            <li class=\"page-item\"><button class=\"page-link\" (click)=\"fetchPageCourses(page-1)\">Previous</button></li>\r\n        </ng-template>\r\n\r\n        <ng-container *ngFor=\"let maxPages of maxPagesArray; let i = index\">\r\n        <li class=\"page-item\"><button class=\"page-link\" (click)=\"fetchPageCourses(i)\">{{i}}</button></li>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"page == maxPages - 1; else elseBlock2\">\r\n            <li class=\"page-item disabled\"><button class=\"page-link\" (click)=\"fetchPageCourses(page+1)\">Next</button></li>\r\n        </ng-container>\r\n        <ng-template #elseBlock2>\r\n            <li class=\"page-item\"><button class=\"page-link\" (click)=\"fetchPageCourses(page+1)\">Next</button></li>\r\n        </ng-template>\r\n        \r\n    </ul>\r\n  </nav>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/edit-course/edit-course.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/edit-course/edit-course.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"center-form\">\r\n    <h2>Edit Course {{id}}</h2>\r\n    <form [formGroup]=\"updateForm\" class=\"col-sm-4\">\r\n    \r\n        <div class=\"form-group\">\r\n            <label>Name</label>\r\n            <input type=\"text\" class=\"form-control\"  formControlName=\"name\" #name>\r\n        </div>\r\n    \r\n        <div class=\"form-group\">\r\n            <label>Description</label>\r\n            <textarea class=\"form-control\"  formControlName=\"description\" #description></textarea>\r\n        </div>\r\n    \r\n        <div class=\"form-group\">\r\n            <label>Seats</label>\r\n            <input type=\"text\" class=\"form-control\"  formControlName=\"seats\" #seats>\r\n        </div>\r\n    \r\n        <div class=\"form-group\">\r\n            <label>Start Date</label>\r\n            <div class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                       name=\"dp\" ngbDatepicker #d=\"ngbDatepicker\" formControlName=\"start_date\" #start_date>\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary far fa-calendar-alt\" (click)=\"d.toggle()\" type=\"button\"></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    \r\n        <div class=\"form-group\">\r\n            <label>End Date</label>\r\n            <div class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                       name=\"dp\" ngbDatepicker #d2=\"ngbDatepicker\" formControlName=\"end_date\" #end_date>\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary far fa-calendar-alt\" (click)=\"d2.toggle()\" type=\"button\"></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    \r\n        <button type=\"submit\" (click)=\"updateCourse(name.value, description.value, seats.value, start_date.value, end_date.value)\" class=\"btn btn-primary\"><i class=\"fas fa-plus-circle\"></i> Update Course</button>\r\n        <a routerLink=\"/admin\" class=\"btn btn-warning\"><i class=\"fas fa-arrow-circle-left\"></i> Go Back</a>\r\n    </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/pending-enrollment/pending-enrollment.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/pending-enrollment/pending-enrollment.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2 *ngIf=\"course\">{{ course.name }} <span style=\"float: right\">Seats: {{ course.seats }}</span></h2>\r\n\r\n<table class=\"table\" *ngIf=\"!noSeats; else elseBlock\">\r\n    <thead>\r\n        <tr>\r\n            <th scope=\"col\">studentID</th>\r\n            <th scope=\"col\">email</th>\r\n            <th scope=\"col\">First Name</th>\r\n            <th scope=\"col\">Last Name</th>\r\n            <th scope=\"col\">Enroll</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let student of students\">\r\n            <ng-container *ngIf=\"student.enrollment_status == 'pending'\">\r\n            <th scope=\"row\">{{ student.student_id}}</th>\r\n            <td>{{ student.email }}</td>\r\n            <td>{{ student.f_name }}</td>\r\n            <td>{{ student.l_name }}</td>\r\n            <td>\r\n                <button type=\"button\" (click)=\"acceptEnrollment(student.student_id, student.course_id, 'enrolled')\" class=\"btn btn-success\">Accept</button>\r\n                <button type=\"button\" (click)=\"declineEnrollment(student.student_id, student.course_id)\" class=\"btn btn-danger\">Decline</button>\r\n            </td>\r\n            </ng-container>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<ng-template #elseBlock>\r\n    <h2 class=\"center-form\">No seats available!</h2>\r\n</ng-template>\r\n\r\n<a routerLink=\"/admin\" class=\"btn btn-warning\"><i class=\"fas fa-arrow-circle-left\"></i> Go Back</a>\r\n");

/***/ }),

/***/ "./src/app/modules/admin/admin-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/admin/admin-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/modules/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _create_course_create_course_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-course/create-course.component */ "./src/app/modules/admin/create-course/create-course.component.ts");
/* harmony import */ var _edit_course_edit_course_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./edit-course/edit-course.component */ "./src/app/modules/admin/edit-course/edit-course.component.ts");
/* harmony import */ var _pending_enrollment_pending_enrollment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pending-enrollment/pending-enrollment.component */ "./src/app/modules/admin/pending-enrollment/pending-enrollment.component.ts");
/* harmony import */ var _app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @app/core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");








const routes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], canActivate: [_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]], data: { expectedRole: 'admin' } },
    { path: 'create-course', component: _create_course_create_course_component__WEBPACK_IMPORTED_MODULE_4__["CreateCourseComponent"], canActivate: [_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]], data: { expectedRole: 'admin' } },
    { path: 'edit-course/:id', component: _edit_course_edit_course_component__WEBPACK_IMPORTED_MODULE_5__["EditCourseComponent"], canActivate: [_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]], data: { expectedRole: 'admin' } },
    { path: 'pending-enrollment/:id', component: _pending_enrollment_pending_enrollment_component__WEBPACK_IMPORTED_MODULE_6__["PendingEnrollmentComponent"], canActivate: [_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]], data: { expectedRole: 'admin' } }
];
let AdminRoutingModule = class AdminRoutingModule {
};
AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AdminRoutingModule);



/***/ }),

/***/ "./src/app/modules/admin/admin.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/admin/admin.module.ts ***!
  \***********************************************/
/*! exports provided: AdminModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminModule", function() { return AdminModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
/* harmony import */ var _create_course_create_course_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./create-course/create-course.component */ "./src/app/modules/admin/create-course/create-course.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/modules/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/modules/admin/admin-routing.module.ts");
/* harmony import */ var _edit_course_edit_course_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./edit-course/edit-course.component */ "./src/app/modules/admin/edit-course/edit-course.component.ts");
/* harmony import */ var _pending_enrollment_pending_enrollment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pending-enrollment/pending-enrollment.component */ "./src/app/modules/admin/pending-enrollment/pending-enrollment.component.ts");










let AdminModule = class AdminModule {
};
AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_create_course_create_course_component__WEBPACK_IMPORTED_MODULE_5__["CreateCourseComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _edit_course_edit_course_component__WEBPACK_IMPORTED_MODULE_8__["EditCourseComponent"], _pending_enrollment_pending_enrollment_component__WEBPACK_IMPORTED_MODULE_9__["PendingEnrollmentComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_7__["AdminRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]
        ]
    })
], AdminModule);



/***/ }),

/***/ "./src/app/modules/admin/create-course/create-course.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/modules/admin/create-course/create-course.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY3JlYXRlLWNvdXJzZS9jcmVhdGUtY291cnNlLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/modules/admin/create-course/create-course.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/modules/admin/create-course/create-course.component.ts ***!
  \************************************************************************/
/*! exports provided: CreateCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateCourseComponent", function() { return CreateCourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/course.service */ "./src/app/core/services/course.service.ts");





let CreateCourseComponent = class CreateCourseComponent {
    constructor(courseService, fb, router) {
        this.courseService = courseService;
        this.fb = fb;
        this.router = router;
        this.labels = ['name', 'description', 'seats', 'start_date', 'end_date'];
        this.courseForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            seats: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            start_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            end_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    ngOnInit() {
    }
    addCourse(name, description, seats, start_date, end_date) {
        if (this.courseForm.valid)
            this.courseService.addCourse(name, description, seats, start_date, end_date).subscribe(() => {
                this.router.navigate(['/admin']);
            });
        else
            alert('Missing required fields!');
    }
};
CreateCourseComponent.ctorParameters = () => [
    { type: _core_services_course_service__WEBPACK_IMPORTED_MODULE_4__["CourseService"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
CreateCourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-create-course',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./create-course.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/create-course/create-course.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./create-course.component.scss */ "./src/app/modules/admin/create-course/create-course.component.scss")).default]
    })
], CreateCourseComponent);



/***/ }),

/***/ "./src/app/modules/admin/dashboard/dashboard.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/modules/admin/dashboard/dashboard.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin/dashboard/dashboard.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/modules/admin/dashboard/dashboard.component.ts ***!
  \****************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _core_services_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/services/course.service */ "./src/app/core/services/course.service.ts");
/* harmony import */ var _app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @app/core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var src_app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/services/student-course.service */ "./src/app/core/services/student-course.service.ts");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! jwt-decode */ "./node_modules/jwt-decode/lib/index.js");
/* harmony import */ var jwt_decode__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_6__);







let DashboardComponent = class DashboardComponent {
    constructor(courseService, router, route, authenticationService, studentCourseService) {
        this.courseService = courseService;
        this.router = router;
        this.route = route;
        this.authenticationService = authenticationService;
        this.studentCourseService = studentCourseService;
        this.courses = {};
        this.displayedColumns = ['id', 'name', 'description', 'seats', 'start_date', 'end_date', 'Actions'];
        this.page = 0;
        this.pages = [];
        this.students = [];
        this.numberPerPage = 5;
        //this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
    ngOnInit() {
        let page = this.route.snapshot.paramMap.get('page') || this.page;
        this.fetchCourses(page);
        this.currentUser = this.authenticationService.currentUserValue;
        if (this.currentUser) {
            this.tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_6___default()(this.currentUser.token);
            this.isAdmin = (this.tokenPayload.role === "admin");
            console.log("Current user in Admin: " + JSON.stringify(this.currentUser));
            console.log("tokenPayload: " + JSON.stringify(this.tokenPayload));
        }
    }
    pendingEnrollmentsNotification(courses) {
        courses.forEach((course, index, arr) => {
            let start_date = new Date(course.start_date.toString());
            let end_date = new Date(course.end_date.toString());
            course.start_date = start_date.toLocaleDateString();
            course.end_date = end_date.toLocaleDateString();
            if (course.seats < 1) {
                return;
            }
            this.students[index] = 0;
            this.studentCourseService.getStudentsByCourseId(course.id).subscribe((res) => {
                res.forEach((val) => {
                    if (val.enrollment_status == "pending") {
                        this.students[index]++;
                    }
                });
                console.log(course.name + " pending students: " + this.students[index]);
                //this.students = res;
                //console.log("i: " + index + " course: " + JSON.stringify(course));
                //console.log(this.students);
            });
        });
    }
    fetchCourses(page) {
        this.courseService.getCourses(page, this.numberPerPage)
            .subscribe((data) => {
            this.courses = data;
            this.page = page;
            this.currentPage = this.courses.pagination.current;
            this.maxPages = this.courses.pagination.maxPages;
            this.maxPagesArray = new Array(this.maxPages);
            this.pages = Object.values(this.courses.pagination);
            console.log('Data requested...');
            this.pendingEnrollmentsNotification(this.courses.res);
            this.router.navigate(['/admin', { page: page }]);
        });
    }
    fetchPageCourses(pageNo) {
        //console.log("pageNo: " + pageNo);
        if (pageNo < 0) {
            return;
        }
        this.courseService.getCourses(pageNo, this.numberPerPage)
            .subscribe((data = {}) => {
            this.courses = data;
            this.page = pageNo;
            this.currentPage = this.courses.pagination.current;
            this.maxPages = this.courses.pagination.maxPages;
            this.pendingEnrollmentsNotification(this.courses.res);
            console.log('Data requested...' + pageNo);
            this.router.navigate(['/admin', { page: this.courses.pagination.current }]);
        });
    }
    editCourse(id) {
        this.router.navigate([`admin/edit-course/${id}`]);
    }
    deleteCourse(id) {
        let r = confirm(`Delete Course ${id}: Are you sure?`);
        if (r == true) {
            this.courseService.deleteCourse(id).subscribe(() => {
                //this.fetchCourses();
            });
            const item = this.courses.res.find(item => item.id === id);
            this.courses.res.splice(this.courses.res.indexOf(item));
        }
    }
    pendingEnrollment(id) {
        this.router.navigate([`admin/pending-enrollment/${id}`]);
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _core_services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"] },
    { type: src_app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_5__["StudentCourseService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/modules/admin/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/modules/admin/edit-course/edit-course.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/modules/admin/edit-course/edit-course.component.scss ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vZWRpdC1jb3Vyc2UvZWRpdC1jb3Vyc2UuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/admin/edit-course/edit-course.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/modules/admin/edit-course/edit-course.component.ts ***!
  \********************************************************************/
/*! exports provided: EditCourseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditCourseComponent", function() { return EditCourseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _core_services_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../core/services/course.service */ "./src/app/core/services/course.service.ts");





let EditCourseComponent = class EditCourseComponent {
    constructor(courseService, router, route, fb) {
        this.courseService = courseService;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.CreateForm();
    }
    CreateForm() {
        this.updateForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            seats: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            start_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            end_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params.id;
            this.courseService.getCourseById(this.id).subscribe((res) => {
                this.course = res;
                console.log(this.course.start_date);
                this.hDateFormat(this.course);
                console.log(this.course.start_date);
                this.updateForm.get('name').setValue(this.course.name);
                this.updateForm.get('description').setValue(this.course.description);
                this.updateForm.get('seats').setValue(this.course.seats);
                this.updateForm.get('start_date').setValue(this.course.start_date);
                this.updateForm.get('end_date').setValue(this.course.end_date);
            });
        });
    }
    updateCourse(name, description, seats, start_date, end_date) {
        if (this.updateForm.valid)
            this.courseService.updateCourse(this.id, name, description, seats, start_date, end_date).subscribe(res => {
                this.router.navigate(['/admin']);
            });
        else
            alert('Missing required fields!');
    }
    hDateFormat(course) {
        let start_date = new Date(course.start_date.toString());
        let end_date = new Date(course.end_date.toString());
        course.start_date = start_date.toLocaleDateString();
        course.end_date = end_date.toLocaleDateString();
    }
};
EditCourseComponent.ctorParameters = () => [
    { type: _core_services_course_service__WEBPACK_IMPORTED_MODULE_4__["CourseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
];
EditCourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-edit-course',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-course.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/edit-course/edit-course.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-course.component.scss */ "./src/app/modules/admin/edit-course/edit-course.component.scss")).default]
    })
], EditCourseComponent);



/***/ }),

/***/ "./src/app/modules/admin/pending-enrollment/pending-enrollment.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/modules/admin/pending-enrollment/pending-enrollment.component.scss ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vcGVuZGluZy1lbnJvbGxtZW50L3BlbmRpbmctZW5yb2xsbWVudC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/admin/pending-enrollment/pending-enrollment.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/modules/admin/pending-enrollment/pending-enrollment.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PendingEnrollmentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PendingEnrollmentComponent", function() { return PendingEnrollmentComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/core/services/student-course.service */ "./src/app/core/services/student-course.service.ts");
/* harmony import */ var src_app_core_services_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/course.service */ "./src/app/core/services/course.service.ts");





let PendingEnrollmentComponent = class PendingEnrollmentComponent {
    constructor(studentCourseService, courseService, route) {
        this.studentCourseService = studentCourseService;
        this.courseService = courseService;
        this.route = route;
        this.students = [];
        this.noSeats = false;
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params.id;
            this.courseService.getCourseById(this.id).subscribe((res) => {
                this.course = res;
                if (this.course.seats < 1) {
                    this.noSeats = true;
                    console.log("no seats: " + this.noSeats);
                }
                console.log(this.course);
                if (!this.noSeats) {
                    this.studentCourseService.getStudentsByCourseId(this.id).subscribe(res => {
                        this.students = res;
                        //console.log(this.students);
                    });
                }
            });
            /*this.studentCourseService.getStudentsByCourseId(this.id).subscribe(res => {
              this.students = res;
              //console.log(this.students);
            });*/
        });
    }
    acceptEnrollment(studentId, courseId, enrollment_status) {
        // Update student enrollment_status = 'enrolled'
        let ret = confirm(`Accept student ${studentId} enrollment?`);
        if (ret == true) {
            this.studentCourseService.acceptStudentEnrollment(studentId, courseId, enrollment_status).subscribe(res => {
                //alert(`Accepted student ${studentId} enrollment`);
                // remove student from view
                for (var i = 0; i < this.students.length; i++) {
                    if (this.students[i].student_id === studentId) {
                        this.students.splice(i, 1);
                    }
                }
                this.courseService.updateCourseSeats(courseId, this.course.seats - 1).subscribe(() => {
                    console.log("seats decremented by 1");
                    this.course.seats = this.course.seats - 1;
                });
            });
        }
    }
    declineEnrollment(studentId, courseId) {
        let ret = confirm(`Decline student ${studentId} enrollment?`);
        if (ret == true) {
            this.studentCourseService.declineStudentEnrollment(studentId, courseId).subscribe(res => {
                //alert(`Declined student ${studentId} enrollment`);
                // remove student from view
                for (var i = 0; i < this.students.length; i++) {
                    if (this.students[i].student_id === studentId) {
                        this.students.splice(i, 1);
                    }
                }
            });
        }
    }
};
PendingEnrollmentComponent.ctorParameters = () => [
    { type: src_app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_3__["StudentCourseService"] },
    { type: src_app_core_services_course_service__WEBPACK_IMPORTED_MODULE_4__["CourseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
PendingEnrollmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-pending-enrollment',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./pending-enrollment.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/pending-enrollment/pending-enrollment.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./pending-enrollment.component.scss */ "./src/app/modules/admin/pending-enrollment/pending-enrollment.component.scss")).default]
    })
], PendingEnrollmentComponent);



/***/ })

}]);
//# sourceMappingURL=modules-admin-admin-module-es2015.js.map