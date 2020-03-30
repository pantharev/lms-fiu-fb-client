(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-admin-module"],{

/***/ "./src/app/modules/admin/admin-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/admin/admin-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: AdminRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function() { return AdminRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/modules/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _create_course_create_course_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./create-course/create-course.component */ "./src/app/modules/admin/create-course/create-course.component.ts");
/* harmony import */ var _edit_course_edit_course_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./edit-course/edit-course.component */ "./src/app/modules/admin/edit-course/edit-course.component.ts");
/* harmony import */ var _pending_enrollment_pending_enrollment_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pending-enrollment/pending-enrollment.component */ "./src/app/modules/admin/pending-enrollment/pending-enrollment.component.ts");
/* harmony import */ var _app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @app/core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");









const routes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"], canActivate: [_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]], data: { expectedRole: 'admin' } },
    { path: 'create-course', component: _create_course_create_course_component__WEBPACK_IMPORTED_MODULE_3__["CreateCourseComponent"], canActivate: [_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]], data: { expectedRole: 'admin' } },
    { path: 'edit-course/:id', component: _edit_course_edit_course_component__WEBPACK_IMPORTED_MODULE_4__["EditCourseComponent"], canActivate: [_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]], data: { expectedRole: 'admin' } },
    { path: 'pending-enrollment/:id', component: _pending_enrollment_pending_enrollment_component__WEBPACK_IMPORTED_MODULE_5__["PendingEnrollmentComponent"], canActivate: [_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]], data: { expectedRole: 'admin' } }
];
class AdminRoutingModule {
}
AdminRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminRoutingModule });
AdminRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminRoutingModule_Factory(t) { return new (t || AdminRoutingModule)(); }, imports: [[
            _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
        ],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [],
                imports: [
                    _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)
                ],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
/* harmony import */ var _create_course_create_course_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./create-course/create-course.component */ "./src/app/modules/admin/create-course/create-course.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/modules/admin/dashboard/dashboard.component.ts");
/* harmony import */ var _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin-routing.module */ "./src/app/modules/admin/admin-routing.module.ts");
/* harmony import */ var _edit_course_edit_course_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./edit-course/edit-course.component */ "./src/app/modules/admin/edit-course/edit-course.component.ts");
/* harmony import */ var _pending_enrollment_pending_enrollment_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pending-enrollment/pending-enrollment.component */ "./src/app/modules/admin/pending-enrollment/pending-enrollment.component.ts");










class AdminModule {
}
AdminModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AdminModule });
AdminModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AdminModule_Factory(t) { return new (t || AdminModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdminRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AdminModule, { declarations: [_create_course_create_course_component__WEBPACK_IMPORTED_MODULE_4__["CreateCourseComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], _edit_course_edit_course_component__WEBPACK_IMPORTED_MODULE_7__["EditCourseComponent"], _pending_enrollment_pending_enrollment_component__WEBPACK_IMPORTED_MODULE_8__["PendingEnrollmentComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdminRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
        _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AdminModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [_create_course_create_course_component__WEBPACK_IMPORTED_MODULE_4__["CreateCourseComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], _edit_course_edit_course_component__WEBPACK_IMPORTED_MODULE_7__["EditCourseComponent"], _pending_enrollment_pending_enrollment_component__WEBPACK_IMPORTED_MODULE_8__["PendingEnrollmentComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _admin_routing_module__WEBPACK_IMPORTED_MODULE_6__["AdminRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                    _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]
                ]
            }]
    }], null, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_services_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/course.service */ "./src/app/core/services/course.service.ts");
/* harmony import */ var _app_core_services_course_details_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/services/course-details.service */ "./src/app/core/services/course-details.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");









function CreateCourseComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateCourseComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateCourseComponent_div_11_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r86 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r86.c.name.errors.required);
} }
function CreateCourseComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateCourseComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateCourseComponent_div_19_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r88 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r88.c.description.errors.required);
} }
function CreateCourseComponent_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Seats is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateCourseComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateCourseComponent_div_27_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r90 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r90.c.seats.errors.required);
} }
function CreateCourseComponent_div_41_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Start Date is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateCourseComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateCourseComponent_div_41_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r93 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r93.c.start_date.errors.required);
} }
function CreateCourseComponent_div_55_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "End Date is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function CreateCourseComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateCourseComponent_div_55_div_1_Template, 2, 0, "div", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r96 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r96.c.end_date.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class CreateCourseComponent {
    constructor(courseService, courseDetailsService, fb, router) {
        this.courseService = courseService;
        this.courseDetailsService = courseDetailsService;
        this.fb = fb;
        this.router = router;
        this.labels = ['name', 'description', 'seats', 'start_date', 'end_date'];
        this.submitted = false;
        this.todayDate = null;
        this.startDateEvent = null;
        this.endDateEvent = null;
        this.startDateSelected = false;
        this.endDateSelected = false;
        this.courseForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            seats: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            start_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            end_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    get c() { return this.courseForm.controls; }
    ngOnInit() {
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        this.todayDate = new Promise((resolve, reject) => { resolve(mm + '/' + dd + '/' + yyyy); });
        //this.todayDate = mm + '/' + dd + '/' + yyyy;
        //console.log(this.todayDate);
    }
    addCourse(name, description, seats, start_date, end_date) {
        this.submitted = true;
        start_date = this.formatDate(start_date);
        console.log("going to submit start_date: " + start_date);
        end_date = this.formatDate(end_date);
        console.log("going to submit end_date: " + end_date);
        if (!this.courseForm.valid) {
            return;
        }
        this.courseService.addCourse(name, description, seats, start_date, end_date).subscribe((course) => {
            //console.log("course: " + JSON.stringify(course));
            this.courseDetailsService.createCourseDetails(course.id, "<p>Recommended inputs: Course Name, Instructor Name, Office (location/hours), Phone number, and email.</p>").subscribe(() => {
                console.log("course details created");
            });
            this.router.navigate(['/admin']);
        });
    }
    onStartDateSelect(event) {
        console.log("startDateSelected");
        this.startDateEvent = new Promise((resolve, reject) => {
            resolve(String(event.month).padStart(2, '0') + '/' + String(event.day).padStart(2, '0') + '/' + event.year);
        });
        this.startDateSelected = true;
    }
    onEndDateSelect(event) {
        console.log("endDateSelected");
        this.endDateEvent = new Promise((resolve, reject) => {
            resolve(String(event.month).padStart(2, '0') + '/' + String(event.day).padStart(2, '0') + '/' + event.year);
        });
        this.endDateSelected = true;
    }
    formatDate(date) {
        let newDate = new Date(date);
        let dd = String(newDate.getDate()).padStart(2, '0');
        let mm = String(newDate.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = newDate.getFullYear();
        let dateRes = yyyy + '-' + mm + '-' + dd;
        return dateRes;
    }
}
CreateCourseComponent.ɵfac = function CreateCourseComponent_Factory(t) { return new (t || CreateCourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_course_details_service__WEBPACK_IMPORTED_MODULE_3__["CourseDetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
CreateCourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: CreateCourseComponent, selectors: [["app-create-course"]], decls: 62, vars: 31, consts: [[1, "center-form"], [1, "col-sm-4", 3, "formGroup"], [1, "form-group"], ["for", "name"], [2, "color", "red"], ["type", "text", "formControlName", "name", "required", "", 1, "form-control", 3, "ngClass"], ["name", ""], ["class", "invalid-feedback", 4, "ngIf"], ["for", "description"], ["formControlName", "description", "required", "", 1, "form-control", 3, "ngClass"], ["description", ""], ["for", "seats"], ["type", "text", "formControlName", "seats", "required", "", 1, "form-control", 3, "ngClass"], ["seats", ""], ["for", "start_date"], [1, "input-group"], ["name", "dp", "ngbDatepicker", "", "formControlName", "start_date", "readonly", "", "required", "", 1, "form-control", 3, "value", "ngClass", "dateSelect"], ["d", "ngbDatepicker", "start_date", ""], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "far", "fa-calendar-alt", 3, "click"], ["data-provide", "datepicker", 1, "form-group"], ["for", "end_date"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", "formControlName", "end_date", "readonly", "", "required", "", 1, "form-control", 3, "value", "ngClass", "dateSelect"], ["d2", "ngbDatepicker", "end_date", ""], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-plus-circle"], ["routerLink", "/admin", 1, "btn", "btn-warning"], [1, "fas", "fa-arrow-circle-left"], [1, "invalid-feedback"], [4, "ngIf"]], template: function CreateCourseComponent_Template(rf, ctx) { if (rf & 1) {
        const _r102 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create New Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, CreateCourseComponent_div_11_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "textarea", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, CreateCourseComponent_div_19_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Number of Seats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, CreateCourseComponent_div_27_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateSelect", function CreateCourseComponent_Template_input_dateSelect_34_listener($event) { return ctx.onStartDateSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateCourseComponent_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const _r91 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); return _r91.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, CreateCourseComponent_div_41_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 22, 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateSelect", function CreateCourseComponent_Template_input_dateSelect_48_listener($event) { return ctx.onEndDateSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateCourseComponent_Template_button_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const _r94 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49); return _r94.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, CreateCourseComponent_div_55_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateCourseComponent_Template_button_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r102); const _r85 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const _r87 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); const _r89 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26); const _r92 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36); const _r95 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50); return ctx.addCourse(_r85.value, _r87.value, _r89.value, _r92.value, _r95.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Create Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Go Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.courseForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](21, _c0, ctx.submitted && ctx.c.name.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.c.name.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](23, _c0, ctx.submitted && ctx.c.description.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.c.description.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](25, _c0, ctx.submitted && ctx.c.seats.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.c.seats.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.startDateSelected ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 13, ctx.startDateEvent) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 15, ctx.todayDate))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](27, _c0, ctx.submitted && ctx.c.start_date.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.c.start_date.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.endDateSelected ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 17, ctx.endDateEvent) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 19, ctx.todayDate))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](29, _c0, ctx.submitted && ctx.c.end_date.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.c.end_date.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_6__["NgbInputDatepicker"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY3JlYXRlLWNvdXJzZS9jcmVhdGUtY291cnNlLmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateCourseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-create-course',
                templateUrl: './create-course.component.html',
                styleUrls: ['./create-course.component.scss']
            }]
    }], function () { return [{ type: _core_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"] }, { type: _app_core_services_course_details_service__WEBPACK_IMPORTED_MODULE_3__["CourseDetailsService"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_services_course_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/services/course.service */ "./src/app/core/services/course.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @app/core/services/authentication.service */ "./src/app/core/services/authentication.service.ts");
/* harmony import */ var src_app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/student-course.service */ "./src/app/core/services/student-course.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function DashboardComponent_th_12_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "th", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const colName_r112 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](colName_r112);
} }
function DashboardComponent_tr_14_span_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const i_r114 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;
    const ctx_r115 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r115.students[i_r114]);
} }
function DashboardComponent_tr_14_Template(rf, ctx) { if (rf & 1) {
    const _r118 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_tr_14_Template_button_click_14_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118); const course_r113 = ctx.$implicit; const ctx_r117 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r117.editCourse(course_r113.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Edit");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_tr_14_Template_button_click_17_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118); const course_r113 = ctx.$implicit; const ctx_r119 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r119.deleteCourse(course_r113.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " Delete");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_tr_14_Template_button_click_20_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r118); const course_r113 = ctx.$implicit; const ctx_r120 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r120.pendingEnrollment(course_r113.id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DashboardComponent_tr_14_span_21_Template, 2, 1, "span", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, " Pending Enrollments");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const course_r113 = ctx.$implicit;
    const i_r114 = ctx.index;
    const ctx_r104 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r113.id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r113.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r113.description);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r113.seats);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r113.start_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r113.end_date);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r104.students[i_r114] > 0);
} }
function DashboardComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    const _r122 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_container_17_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r122); const ctx_r121 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r121.fetchPageCourses(ctx_r121.page - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function DashboardComponent_ng_template_18_Template(rf, ctx) { if (rf & 1) {
    const _r124 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_template_18_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r124); const ctx_r123 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r123.fetchPageCourses(ctx_r123.page - 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Previous");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function DashboardComponent_ng_container_20_Template(rf, ctx) { if (rf & 1) {
    const _r128 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_container_20_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r128); const i_r126 = ctx.index; const ctx_r127 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r127.fetchPageCourses(i_r126); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const i_r126 = ctx.index;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](i_r126);
} }
function DashboardComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    const _r130 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_container_21_Template_button_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r130); const ctx_r129 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r129.fetchPageCourses(ctx_r129.page + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function DashboardComponent_ng_template_22_Template(rf, ctx) { if (rf & 1) {
    const _r132 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "li", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DashboardComponent_ng_template_22_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r132); const ctx_r131 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r131.fetchPageCourses(ctx_r131.page + 1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Next");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class DashboardComponent {
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
        this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    }
    ngOnInit() {
        let page = this.route.snapshot.paramMap.get('page') || this.page;
        this.fetchCourses(page);
        console.log(this.currentUser);
        this.isAdmin = (JSON.parse(localStorage.getItem("FB_user")).role == 'admin');
        /*
        this.currentUser = this.authenticationService.currentUserValue;
        if(this.currentUser){
          this.tokenPayload = decode(this.currentUser.token);
          this.isAdmin = (this.tokenPayload.role === "admin");
          console.log("Current user in Admin: " + JSON.stringify(this.currentUser));
          console.log("tokenPayload: " + JSON.stringify(this.tokenPayload));
        }
        */
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
}
DashboardComponent.ɵfac = function DashboardComponent_Factory(t) { return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_4__["StudentCourseService"])); };
DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: DashboardComponent, selectors: [["app-dashboard"]], decls: 24, vars: 7, consts: [[1, "center-form"], [1, "nav", "flex-column", "col-sm-1"], ["routerLink", "/admin/create-course", "routerLinkActive", "active", 1, "nav-link", "btn", "btn-success"], [1, "fas", "fa-plus-circle"], [1, "table"], ["scope", "col", 4, "ngFor", "ngForOf"], ["class", "trstyle", 4, "ngFor", "ngForOf"], ["aria-label", "Page navigation course-library"], [1, "pagination"], [4, "ngIf", "ngIfElse"], ["elseBlock", ""], [4, "ngFor", "ngForOf"], ["elseBlock2", ""], ["scope", "col"], [1, "trstyle"], ["scope", "row"], [2, "max-width", "125px", "word-wrap", "break-word"], [2, "max-width", "200px", "word-wrap", "break-word"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-edit"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "fas", "fa-minus-circle"], ["type", "button", 1, "btn", "btn-warning", 2, "margin-left", "20px", 3, "click"], ["class", "badge badge-light", 4, "ngIf"], [1, "badge", "badge-light"], [1, "page-item", "disabled"], [1, "page-link", 3, "click"], [1, "page-item"]], template: function DashboardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Admin Dashboard");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Courses");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "nav", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Create New Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "table", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "thead");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "tr");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, DashboardComponent_th_12_Template, 2, 1, "th", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, DashboardComponent_tr_14_Template, 23, 7, "tr", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "nav", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "ul", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, DashboardComponent_ng_container_17_Template, 4, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, DashboardComponent_ng_template_18_Template, 3, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, DashboardComponent_ng_container_20_Template, 4, 1, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, DashboardComponent_ng_container_21_Template, 4, 0, "ng-container", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, DashboardComponent_ng_template_22_Template, 3, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r106 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);
        const _r110 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.displayedColumns);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.courses.res);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.page == 0)("ngIfElse", _r106);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.maxPagesArray);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.page == ctx.maxPages - 1)("ngIfElse", _r110);
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-dashboard',
                templateUrl: './dashboard.component.html',
                styleUrls: ['./dashboard.component.scss']
            }]
    }], function () { return [{ type: _core_services_course_service__WEBPACK_IMPORTED_MODULE_1__["CourseService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }, { type: _app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"] }, { type: src_app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_4__["StudentCourseService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_services_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/services/course.service */ "./src/app/core/services/course.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");








function EditCourseComponent_div_11_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditCourseComponent_div_11_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditCourseComponent_div_11_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r134 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r134.cu.name.errors.required);
} }
function EditCourseComponent_div_19_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Description is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditCourseComponent_div_19_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditCourseComponent_div_19_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r136 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r136.cu.description.errors.required);
} }
function EditCourseComponent_div_27_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Seats is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditCourseComponent_div_27_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditCourseComponent_div_27_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r138 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r138.cu.seats.errors.required);
} }
function EditCourseComponent_div_41_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Start Date is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditCourseComponent_div_41_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditCourseComponent_div_41_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r141 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r141.cu.start_date.errors.required);
} }
function EditCourseComponent_div_55_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "End Date is required");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function EditCourseComponent_div_55_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditCourseComponent_div_55_div_1_Template, 2, 0, "div", 28);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r144 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r144.cu.end_date.errors.required);
} }
const _c0 = function (a0) { return { "is-invalid": a0 }; };
class EditCourseComponent {
    constructor(courseService, router, route, fb) {
        this.courseService = courseService;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.submitted = false;
        this.startDate = null;
        this.startDateSelected = false;
        this.startDateEvent = null;
        this.endDate = null;
        this.endDateSelected = false;
        this.endDateEvent = null;
        this.CreateForm();
    }
    CreateForm() {
        this.updateForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            seats: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            start_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            end_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    }
    get cu() { return this.updateForm.controls; }
    ngOnInit() {
        this.route.params.subscribe(params => {
            this.id = params.id;
            this.courseService.getCourseById(this.id).subscribe((res) => {
                this.course = res;
                //console.log(this.course.start_date);
                this.hDateFormat(this.course);
                //console.log(this.course.start_date);
                this.updateForm.get('name').setValue(this.course.name);
                this.updateForm.get('description').setValue(this.course.description);
                this.updateForm.get('seats').setValue(this.course.seats);
                let newDate = new Date(this.course.start_date.toString());
                let dd = String(newDate.getDate()).padStart(2, '0');
                let mm = String(newDate.getMonth() + 1).padStart(2, '0'); //January is 0!
                let yyyy = newDate.getFullYear();
                this.startDate = new Promise((resolve, reject) => { resolve(mm + '/' + dd + '/' + yyyy); });
                newDate = new Date(this.course.end_date.toString());
                dd = String(newDate.getDate()).padStart(2, '0');
                mm = String(newDate.getMonth() + 1).padStart(2, '0'); //January is 0!
                yyyy = newDate.getFullYear();
                this.endDate = new Promise((resolve, relect) => { resolve(mm + '/' + dd + '/' + yyyy); });
                //this.updateForm.get('start_date').setValue(this.course.start_date);
                //this.updateForm.get('end_date').setValue(this.course.end_date);
            });
        });
    }
    updateCourse(name, description, seats, start_date, end_date) {
        this.submitted = true;
        start_date = this.formatDate(start_date);
        console.log("going to submit start_date: " + start_date);
        end_date = this.formatDate(end_date);
        console.log("going to submit end_date: " + end_date);
        if (!this.updateForm.valid) {
            return;
        }
        this.courseService.updateCourse(this.id, name, description, seats, start_date, end_date).subscribe(res => {
            this.router.navigate(['/admin']);
        });
    }
    hDateFormat(course) {
        let start_date = new Date(course.start_date.toString());
        let end_date = new Date(course.end_date.toString());
        course.start_date = start_date.toLocaleDateString();
        course.end_date = end_date.toLocaleDateString();
    }
    formatDate(date) {
        let newDate = new Date(date);
        let dd = String(newDate.getDate()).padStart(2, '0');
        let mm = String(newDate.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = newDate.getFullYear();
        let dateRes = yyyy + '-' + mm + '-' + dd;
        return dateRes;
    }
    onStartDateSelect(event) {
        this.startDateSelected = true;
        this.startDateEvent = new Promise((resolve, reject) => {
            resolve(String(event.month).padStart(2, '0') + '/' + String(event.day).padStart(2, '0') + '/' + event.year);
        });
    }
    onEndDateSelect(event) {
        this.endDateSelected = true;
        this.endDateEvent = new Promise((resolve, reject) => {
            resolve(String(event.month).padStart(2, '0') + '/' + String(event.day).padStart(2, '0') + '/' + event.year);
        });
    }
}
EditCourseComponent.ɵfac = function EditCourseComponent_Factory(t) { return new (t || EditCourseComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"])); };
EditCourseComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: EditCourseComponent, selectors: [["app-edit-course"]], decls: 62, vars: 32, consts: [[1, "center-form"], [1, "col-sm-4", 3, "formGroup"], [1, "form-group"], ["for", "name"], [2, "color", "red"], ["type", "text", "formControlName", "name", "required", "", 1, "form-control", 3, "ngClass"], ["name", ""], ["class", "invalid-feedback", 4, "ngIf"], ["for", "description"], ["formControlName", "description", "required", "", 1, "form-control", 3, "ngClass"], ["description", ""], ["for", "seats"], ["type", "text", "formControlName", "seats", "required", "", 1, "form-control", 3, "ngClass"], ["seats", ""], ["for", "start_date"], [1, "input-group"], ["type", "text", "placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", "formControlName", "start_date", "readonly", "", "required", "", 1, "form-control", 3, "value", "ngClass", "dateSelect"], ["d", "ngbDatepicker", "start_date", ""], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "far", "fa-calendar-alt", 3, "click"], ["for", "end_date"], ["type", "text", "placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", "formControlName", "end_date", "readonly", "", "required", "", 1, "form-control", 3, "value", "ngClass", "dateSelect"], ["d2", "ngbDatepicker", "end_date", ""], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-plus-circle"], ["routerLink", "/admin", 1, "btn", "btn-warning"], [1, "fas", "fa-arrow-circle-left"], [1, "invalid-feedback"], [4, "ngIf"]], template: function EditCourseComponent_Template(rf, ctx) { if (rf & 1) {
        const _r150 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Name");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, EditCourseComponent_div_11_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Description");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "textarea", 9, 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](19, EditCourseComponent_div_19_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Number of Seats");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](25, "input", 12, 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, EditCourseComponent_div_27_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Start Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 16, 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateSelect", function EditCourseComponent_Template_input_dateSelect_34_listener($event) { return ctx.onStartDateSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](37, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](38, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditCourseComponent_Template_button_click_40_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r150); const _r139 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](35); return _r139.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](41, EditCourseComponent_div_41_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "label", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "End Date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "input", 21, 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateSelect", function EditCourseComponent_Template_input_dateSelect_48_listener($event) { return ctx.onEndDateSelect($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](51, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](52, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "button", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditCourseComponent_Template_button_click_54_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r150); const _r142 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](49); return _r142.toggle(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](55, EditCourseComponent_div_55_Template, 2, 1, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditCourseComponent_Template_button_click_56_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r150); const _r133 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](10); const _r135 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18); const _r137 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](26); const _r140 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](36); const _r143 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](50); return ctx.updateCourse(_r133.value, _r135.value, _r137.value, _r140.value, _r143.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "i", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Update Course");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "a", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "i", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " Go Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Edit Course ", ctx.id, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](22, _c0, ctx.submitted && ctx.cu.name.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.cu.name.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](24, _c0, ctx.submitted && ctx.cu.description.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.cu.description.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](26, _c0, ctx.submitted && ctx.cu.seats.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.cu.seats.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.startDateSelected ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](37, 14, ctx.startDateEvent) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](38, 16, ctx.startDate))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](28, _c0, ctx.submitted && ctx.cu.start_date.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.cu.start_date.errors);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.endDateSelected ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](51, 18, ctx.endDateEvent) : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](52, 20, ctx.endDate))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](30, _c0, ctx.submitted && ctx.cu.end_date.errors));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.cu.end_date.errors);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepicker"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vZWRpdC1jb3Vyc2UvZWRpdC1jb3Vyc2UuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditCourseComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-edit-course',
                templateUrl: './edit-course.component.html',
                styleUrls: ['./edit-course.component.scss']
            }]
    }], function () { return [{ type: _core_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }, { type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/core/services/student-course.service */ "./src/app/core/services/student-course.service.ts");
/* harmony import */ var src_app_core_services_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/course.service */ "./src/app/core/services/course.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function PendingEnrollmentComponent_h2_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r151 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("", ctx_r151.course.name, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Seats: ", ctx_r151.course.seats, "");
} }
function PendingEnrollmentComponent_table_1_tr_14_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r160 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "th", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PendingEnrollmentComponent_table_1_tr_14_ng_container_1_Template_button_click_10_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r160); const student_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r158 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r158.acceptEnrollment(student_r156.student_id, student_r156.course_id, "enrolled"); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Accept");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function PendingEnrollmentComponent_table_1_tr_14_ng_container_1_Template_button_click_12_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r160); const student_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit; const ctx_r161 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2); return ctx_r161.declineEnrollment(student_r156.student_id, student_r156.course_id); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Decline");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const student_r156 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r156.student_id);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r156.email);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r156.f_name);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r156.l_name);
} }
function PendingEnrollmentComponent_table_1_tr_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PendingEnrollmentComponent_table_1_tr_14_ng_container_1_Template, 14, 4, "ng-container", 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const student_r156 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", student_r156.enrollment_status == "pending");
} }
function PendingEnrollmentComponent_table_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "table", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "thead");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "tr");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "studentID");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "th", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Enroll");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "tbody");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, PendingEnrollmentComponent_table_1_tr_14_Template, 2, 1, "tr", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r152 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r152.students);
} }
function PendingEnrollmentComponent_ng_template_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h2", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "No seats available!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class PendingEnrollmentComponent {
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
}
PendingEnrollmentComponent.ɵfac = function PendingEnrollmentComponent_Factory(t) { return new (t || PendingEnrollmentComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_1__["StudentCourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"])); };
PendingEnrollmentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: PendingEnrollmentComponent, selectors: [["app-pending-enrollment"]], decls: 7, vars: 3, consts: [[4, "ngIf"], ["class", "table", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], ["routerLink", "/admin", 1, "btn", "btn-warning"], [1, "fas", "fa-arrow-circle-left"], [2, "float", "right"], [1, "table"], ["scope", "col"], [4, "ngFor", "ngForOf"], ["scope", "row"], ["type", "button", 1, "btn", "btn-success", 3, "click"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "center-form"]], template: function PendingEnrollmentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, PendingEnrollmentComponent_h2_0_Template, 4, 2, "h2", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, PendingEnrollmentComponent_table_1_Template, 15, 1, "table", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, PendingEnrollmentComponent_ng_template_2_Template, 2, 0, "ng-template", null, 2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "i", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " Go Back");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r153 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.course);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.noSeats)("ngIfElse", _r153);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vcGVuZGluZy1lbnJvbGxtZW50L3BlbmRpbmctZW5yb2xsbWVudC5jb21wb25lbnQuc2NzcyJ9 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PendingEnrollmentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-pending-enrollment',
                templateUrl: './pending-enrollment.component.html',
                styleUrls: ['./pending-enrollment.component.scss']
            }]
    }], function () { return [{ type: src_app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_1__["StudentCourseService"] }, { type: src_app_core_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=modules-admin-admin-module-es2015.js.map