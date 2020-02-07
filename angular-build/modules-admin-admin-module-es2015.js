(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-admin-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/create-course/create-course.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/create-course/create-course.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"center-form\">\n<h2>Create New Course</h2>\n<form [formGroup]=\"courseForm\" class=\"col-sm-4\">\n\n    <div class=\"form-group\">\n        <label>Name</label>\n        <input type=\"text\" class=\"form-control\"  formControlName=\"name\" #name>\n    </div>\n\n    <div class=\"form-group\">\n        <label>Description</label>\n        <textarea class=\"form-control\"  formControlName=\"description\" #description></textarea>\n    </div>\n\n    <div class=\"form-group\">\n        <label>Seats</label>\n        <input type=\"text\" class=\"form-control\"  formControlName=\"seats\" #seats>\n    </div>\n\n    <div class=\"form-group\">\n        <label>Start Date</label>\n        <div class=\"input-group\">\n            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                   name=\"dp\" ngbDatepicker #d=\"ngbDatepicker\" formControlName=\"start_date\" #start_date>\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-outline-secondary far fa-calendar-alt\" (click)=\"d.toggle()\" type=\"button\"></button>\n            </div>\n        </div>\n    </div>\n\n    <div class=\"form-group\" data-provide=\"datepicker\">\n        <label>End Date</label>\n        <div class=\"input-group\">\n            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                   name=\"dp\" ngbDatepicker #d2=\"ngbDatepicker\" formControlName=\"end_date\" #end_date>\n            <div class=\"input-group-append\">\n              <button class=\"btn btn-outline-secondary far fa-calendar-alt\" (click)=\"d2.toggle()\" type=\"button\"></button>\n            </div>\n        </div>\n    </div>\n\n    <button type=\"submit\" (click)=\"addCourse(name.value, description.value, seats.value, start_date.value, end_date.value)\" class=\"btn btn-primary\"><i class=\"fas fa-plus-circle\"></i> Create Course</button>\n    <a routerLink=\"/admin\" class=\"btn btn-warning\"><i class=\"fas fa-arrow-circle-left\"></i> Go Back</a>\n</form>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/dashboard/dashboard.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/dashboard/dashboard.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Admin Dashboard</h2>\n\n<nav class=\"nav flex-column col-sm-1\">\n    <a routerLink=\"/admin/create-course\" routerLinkActive=\"active\" class=\"nav-link btn btn-primary\"><i class=\"fas fa-plus-circle\"></i> Create New Course</a>\n</nav>\n\n<h2>Courses</h2>\n\n<table class=\"table\">\n    <thead>\n        <tr>\n            <th *ngFor=\"let colName of displayedColumns\" scope=\"col\">{{ colName }}</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let course of courses.res\">\n            <th scope=\"row\">{{ course.id }}</th>\n            <td>{{ course.name }}</td>\n            <td>{{ course.description }}</td>\n            <td>{{ course.seats }}</td>\n            <td>{{ course.start_date }}</td>\n            <td>{{ course.end_date }}</td>\n            <td>\n                <button type=\"button\" (click)=\"editCourse(course.id)\" class=\"btn btn-primary\"><i class=\"fas fa-edit\"></i> Edit</button>\n                <button type=\"button\" (click)=\"deleteCourse(course.id)\" class=\"btn btn-danger\"><i class=\"fas fa-minus-circle\"></i> Delete</button>\n                <button type=\"button\" (click)=\"pendingEnrollment(course.id)\" class=\"btn btn-warning\" style=\"margin-left: 20px\">Pending Enrollments</button>\n            </td>\n        </tr>\n    </tbody>\n</table>\n\n<nav aria-label=\"Page navigation course-library\">\n    <ul class=\"pagination\">\n\n        <ng-container *ngIf=\"page == 0; else elseBlock\">\n            <li class=\"page-item disabled\"><button class=\"page-link\" (click)=\"fetchPageCourses(page-1)\">Previous</button></li>\n        </ng-container>\n        <ng-template #elseBlock>\n            <li class=\"page-item\"><button class=\"page-link\" (click)=\"fetchPageCourses(page-1)\">Previous</button></li>\n        </ng-template>\n\n        <ng-container *ngFor=\"let maxPages of maxPagesArray; let i = index\">\n        <li class=\"page-item\"><button class=\"page-link\" (click)=\"fetchPageCourses(i)\">{{i}}</button></li>\n        </ng-container>\n\n        <ng-container *ngIf=\"page == maxPages - 1; else elseBlock2\">\n            <li class=\"page-item disabled\"><button class=\"page-link\" (click)=\"fetchPageCourses(page+1)\">Next</button></li>\n        </ng-container>\n        <ng-template #elseBlock2>\n            <li class=\"page-item\"><button class=\"page-link\" (click)=\"fetchPageCourses(page+1)\">Next</button></li>\n        </ng-template>\n        \n    </ul>\n  </nav>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/edit-course/edit-course.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/edit-course/edit-course.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"center-form\">\n    <h2>Edit Course {{id}}</h2>\n    <form [formGroup]=\"updateForm\" class=\"col-sm-4\">\n    \n        <div class=\"form-group\">\n            <label>Name</label>\n            <input type=\"text\" class=\"form-control\"  formControlName=\"name\" #name>\n        </div>\n    \n        <div class=\"form-group\">\n            <label>Description</label>\n            <textarea class=\"form-control\"  formControlName=\"description\" #description></textarea>\n        </div>\n    \n        <div class=\"form-group\">\n            <label>Seats</label>\n            <input type=\"text\" class=\"form-control\"  formControlName=\"seats\" #seats>\n        </div>\n    \n        <div class=\"form-group\">\n            <label>Start Date</label>\n            <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                       name=\"dp\" ngbDatepicker #d=\"ngbDatepicker\" formControlName=\"start_date\" #start_date>\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-outline-secondary far fa-calendar-alt\" (click)=\"d.toggle()\" type=\"button\"></button>\n                </div>\n            </div>\n        </div>\n    \n        <div class=\"form-group\">\n            <label>End Date</label>\n            <div class=\"input-group\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"yyyy-mm-dd\"\n                       name=\"dp\" ngbDatepicker #d2=\"ngbDatepicker\" formControlName=\"end_date\" #end_date>\n                <div class=\"input-group-append\">\n                  <button class=\"btn btn-outline-secondary far fa-calendar-alt\" (click)=\"d2.toggle()\" type=\"button\"></button>\n                </div>\n            </div>\n        </div>\n    \n        <button type=\"submit\" (click)=\"updateCourse(name.value, description.value, seats.value, start_date.value, end_date.value)\" class=\"btn btn-primary\"><i class=\"fas fa-plus-circle\"></i> Update Course</button>\n        <a routerLink=\"/admin\" class=\"btn btn-warning\"><i class=\"fas fa-arrow-circle-left\"></i> Go Back</a>\n    </form>\n    </div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/pending-enrollment/pending-enrollment.component.html":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/pending-enrollment/pending-enrollment.component.html ***!
  \**************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>{{ course.name }} <span style=\"float: right\">Seats: {{ course.seats }}</span></h2>\n\n<table class=\"table\">\n    <thead>\n        <tr>\n            <th scope=\"col\">studentID</th>\n            <th scope=\"col\">email</th>\n            <th scope=\"col\">First Name</th>\n            <th scope=\"col\">Last Name</th>\n            <th scope=\"col\">Enroll</th>\n        </tr>\n    </thead>\n    <tbody>\n        <tr *ngFor=\"let student of students\">\n            <ng-container *ngIf=\"student.enrollment_status == 'pending'\">\n            <th scope=\"row\">{{ student.student_id}}</th>\n            <td>{{ student.email }}</td>\n            <td>{{ student.f_name }}</td>\n            <td>{{ student.l_name }}</td>\n            <td>\n                <button type=\"button\" (click)=\"acceptEnrollment(student.student_id, student.course_id, 'enrolled')\" class=\"btn btn-success\">Accept</button>\n                <button type=\"button\" (click)=\"declineEnrollment(student.student_id, student.course_id)\" class=\"btn btn-danger\">Decline</button>\n            </td>\n            </ng-container>\n        </tr>\n    </tbody>\n</table>\n\n<a routerLink=\"/admin\" class=\"btn btn-warning\"><i class=\"fas fa-arrow-circle-left\"></i> Go Back</a>\n");

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







const routes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: 'create-course', component: _create_course_create_course_component__WEBPACK_IMPORTED_MODULE_4__["CreateCourseComponent"] },
    { path: 'edit-course/:id', component: _edit_course_edit_course_component__WEBPACK_IMPORTED_MODULE_5__["EditCourseComponent"] },
    { path: 'pending-enrollment/:id', component: _pending_enrollment_pending_enrollment_component__WEBPACK_IMPORTED_MODULE_6__["PendingEnrollmentComponent"] }
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




let DashboardComponent = class DashboardComponent {
    constructor(courseService, router, route) {
        this.courseService = courseService;
        this.router = router;
        this.route = route;
        this.courses = {};
        this.displayedColumns = ['id', 'name', 'description', 'seats', 'start_date', 'end_date', 'Actions'];
        this.page = 0;
        this.pages = [];
        this.numberPerPage = 2;
    }
    ngOnInit() {
        let page = this.route.snapshot.paramMap.get('page') || this.page;
        this.fetchCourses(page);
        //console.log("Init page: " + page);
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
            //console.log(this.pages);
            console.log('Data requested...');
            //console.log(this.courses.res);
            this.courses.res.forEach((item, index, arr) => {
                let start_date = new Date(arr[index].start_date.toString());
                let end_date = new Date(arr[index].end_date.toString());
                arr[index].start_date = start_date.toLocaleDateString();
                arr[index].end_date = end_date.toLocaleDateString();
            });
            //console.log('Data requested...');
            //console.log(this.courses);
            this.router.navigate(['/admin', { page: page }]);
        });
    }
    fetchPageCourses(pageNo) {
        //console.log("pageNo: " + pageNo);
        if (pageNo < 0) {
            return;
        }
        this.courseService.getCourses(pageNo, 2)
            .subscribe((data = {}) => {
            this.courses = data;
            this.page = pageNo;
            this.currentPage = this.courses.pagination.current;
            this.maxPages = this.courses.pagination.maxPages;
            this.courses.res.forEach((item, index, arr) => {
                let start_date = new Date(arr[index].start_date.toString());
                let end_date = new Date(arr[index].end_date.toString());
                arr[index].start_date = start_date.toLocaleDateString();
                arr[index].end_date = end_date.toLocaleDateString();
            });
            console.log('Data requested...' + pageNo);
            //console.log(this.courses);
            //console.log("Current page: " + this.courses.pagination.current);
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
        }
    }
    pendingEnrollment(id) {
        this.router.navigate([`admin/pending-enrollment/${id}`]);
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _core_services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
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
        this.course = {};
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
            this.courseService.getCourseById(this.id).subscribe(res => {
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
                alert('Course updated successfully');
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
        this.course = {};
        this.students = [];
    }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params.id;
            this.courseService.getCourseById(this.id).subscribe(res => {
                this.course = res;
                console.log(this.course);
            });
            this.studentCourseService.getStudentsByCourseId(this.id).subscribe(res => {
                this.students = res;
                console.log(this.students);
            });
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