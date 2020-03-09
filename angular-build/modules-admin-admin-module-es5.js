function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-admin-admin-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/create-course/create-course.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/create-course/create-course.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAdminCreateCourseCreateCourseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"center-form\">\r\n<h2>Create New Course</h2>\r\n<form [formGroup]=\"courseForm\" class=\"col-sm-4\">\r\n\r\n    <div class=\"form-group\">\r\n        <label>Name</label>\r\n        <input type=\"text\" class=\"form-control\"  formControlName=\"name\" #name>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label>Description</label>\r\n        <textarea class=\"form-control\"  formControlName=\"description\" #description></textarea>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label>Seats</label>\r\n        <input type=\"text\" class=\"form-control\"  formControlName=\"seats\" #seats>\r\n    </div>\r\n\r\n    <div class=\"form-group\">\r\n        <label>Start Date</label>\r\n        <div class=\"input-group\">\r\n            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                   name=\"dp\" ngbDatepicker #d=\"ngbDatepicker\" formControlName=\"start_date\" #start_date>\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-outline-secondary far fa-calendar-alt\" (click)=\"d.toggle()\" type=\"button\"></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"form-group\" data-provide=\"datepicker\">\r\n        <label>End Date</label>\r\n        <div class=\"input-group\">\r\n            <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                   name=\"dp\" ngbDatepicker #d2=\"ngbDatepicker\" formControlName=\"end_date\" #end_date>\r\n            <div class=\"input-group-append\">\r\n              <button class=\"btn btn-outline-secondary far fa-calendar-alt\" (click)=\"d2.toggle()\" type=\"button\"></button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <button type=\"submit\" (click)=\"addCourse(name.value, description.value, seats.value, start_date.value, end_date.value)\" class=\"btn btn-primary\"><i class=\"fas fa-plus-circle\"></i> Create Course</button>\r\n    <a routerLink=\"/admin\" class=\"btn btn-warning\"><i class=\"fas fa-arrow-circle-left\"></i> Go Back</a>\r\n</form>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/dashboard/dashboard.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/dashboard/dashboard.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAdminDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 class=\"center-form\">Admin Dashboard</h2>\r\n\r\n<div *ngIf=\"currentUser && isAdmin\" class=\"center-form\">\r\n\r\n    <div *ngIf=\"currentUser\">\r\n    <h2>Courses</h2>\r\n    <nav class=\"nav flex-column col-sm-1\">\r\n        <a routerLink=\"/admin/create-course\" routerLinkActive=\"active\" class=\"nav-link btn btn-success\"><i class=\"fas fa-plus-circle\"></i> Create New Course</a>\r\n    </nav>\r\n\r\n</div>\r\n\r\n<table class=\"table\">\r\n    <thead>\r\n        <tr>\r\n            <th *ngFor=\"let colName of displayedColumns\" scope=\"col\">{{ colName }}</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let course of courses.res; let i = index\" class=\"trstyle\">\r\n            <th scope=\"row\">{{ course.id }}</th>\r\n            <td style=\"max-width: 125px; word-wrap: break-word;\">{{ course.name }}</td>\r\n            <td style=\"max-width: 200px; word-wrap: break-word;\">{{ course.description }}</td>\r\n            <td>{{ course.seats }}</td>\r\n            <td>{{ course.start_date }}</td>\r\n            <td>{{ course.end_date }}</td>\r\n            <td>\r\n                <button type=\"button\" (click)=\"editCourse(course.id)\" class=\"btn btn-primary\"><i class=\"fas fa-edit\"></i> Edit</button>\r\n                <button type=\"button\" (click)=\"deleteCourse(course.id)\" class=\"btn btn-danger\"><i class=\"fas fa-minus-circle\"></i> Delete</button>\r\n                <button type=\"button\" (click)=\"pendingEnrollment(course.id)\" class=\"btn btn-warning\" style=\"margin-left: 20px\"><span *ngIf=\"students[i] > 0\"class=\"badge badge-light\">{{students[i]}}</span> Pending Enrollments</button>\r\n            </td>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<nav aria-label=\"Page navigation course-library\">\r\n    <ul class=\"pagination\">\r\n\r\n        <ng-container *ngIf=\"page == 0; else elseBlock\">\r\n            <li class=\"page-item disabled\"><button class=\"page-link\" (click)=\"fetchPageCourses(page-1)\">Previous</button></li>\r\n        </ng-container>\r\n        <ng-template #elseBlock>\r\n            <li class=\"page-item\"><button class=\"page-link\" (click)=\"fetchPageCourses(page-1)\">Previous</button></li>\r\n        </ng-template>\r\n\r\n        <ng-container *ngFor=\"let maxPages of maxPagesArray; let i = index\">\r\n        <li class=\"page-item\"><button class=\"page-link\" (click)=\"fetchPageCourses(i)\">{{i}}</button></li>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"page == maxPages - 1; else elseBlock2\">\r\n            <li class=\"page-item disabled\"><button class=\"page-link\" (click)=\"fetchPageCourses(page+1)\">Next</button></li>\r\n        </ng-container>\r\n        <ng-template #elseBlock2>\r\n            <li class=\"page-item\"><button class=\"page-link\" (click)=\"fetchPageCourses(page+1)\">Next</button></li>\r\n        </ng-template>\r\n        \r\n    </ul>\r\n  </nav>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/edit-course/edit-course.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/edit-course/edit-course.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAdminEditCourseEditCourseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"center-form\">\r\n    <h2>Edit Course {{id}}</h2>\r\n    <form [formGroup]=\"updateForm\" class=\"col-sm-4\">\r\n    \r\n        <div class=\"form-group\">\r\n            <label>Name</label>\r\n            <input type=\"text\" class=\"form-control\"  formControlName=\"name\" #name>\r\n        </div>\r\n    \r\n        <div class=\"form-group\">\r\n            <label>Description</label>\r\n            <textarea class=\"form-control\"  formControlName=\"description\" #description></textarea>\r\n        </div>\r\n    \r\n        <div class=\"form-group\">\r\n            <label>Seats</label>\r\n            <input type=\"text\" class=\"form-control\"  formControlName=\"seats\" #seats>\r\n        </div>\r\n    \r\n        <div class=\"form-group\">\r\n            <label>Start Date</label>\r\n            <div class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                       name=\"dp\" ngbDatepicker #d=\"ngbDatepicker\" formControlName=\"start_date\" #start_date>\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary far fa-calendar-alt\" (click)=\"d.toggle()\" type=\"button\"></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    \r\n        <div class=\"form-group\">\r\n            <label>End Date</label>\r\n            <div class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                       name=\"dp\" ngbDatepicker #d2=\"ngbDatepicker\" formControlName=\"end_date\" #end_date>\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary far fa-calendar-alt\" (click)=\"d2.toggle()\" type=\"button\"></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    \r\n        <button type=\"submit\" (click)=\"updateCourse(name.value, description.value, seats.value, start_date.value, end_date.value)\" class=\"btn btn-primary\"><i class=\"fas fa-plus-circle\"></i> Update Course</button>\r\n        <a routerLink=\"/admin\" class=\"btn btn-warning\"><i class=\"fas fa-arrow-circle-left\"></i> Go Back</a>\r\n    </form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/pending-enrollment/pending-enrollment.component.html":
  /*!**************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/pending-enrollment/pending-enrollment.component.html ***!
    \**************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesAdminPendingEnrollmentPendingEnrollmentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<h2 *ngIf=\"course\">{{ course.name }} <span style=\"float: right\">Seats: {{ course.seats }}</span></h2>\r\n\r\n<table class=\"table\" *ngIf=\"!noSeats; else elseBlock\">\r\n    <thead>\r\n        <tr>\r\n            <th scope=\"col\">studentID</th>\r\n            <th scope=\"col\">email</th>\r\n            <th scope=\"col\">First Name</th>\r\n            <th scope=\"col\">Last Name</th>\r\n            <th scope=\"col\">Enroll</th>\r\n        </tr>\r\n    </thead>\r\n    <tbody>\r\n        <tr *ngFor=\"let student of students\">\r\n            <ng-container *ngIf=\"student.enrollment_status == 'pending'\">\r\n            <th scope=\"row\">{{ student.student_id}}</th>\r\n            <td>{{ student.email }}</td>\r\n            <td>{{ student.f_name }}</td>\r\n            <td>{{ student.l_name }}</td>\r\n            <td>\r\n                <button type=\"button\" (click)=\"acceptEnrollment(student.student_id, student.course_id, 'enrolled')\" class=\"btn btn-success\">Accept</button>\r\n                <button type=\"button\" (click)=\"declineEnrollment(student.student_id, student.course_id)\" class=\"btn btn-danger\">Decline</button>\r\n            </td>\r\n            </ng-container>\r\n        </tr>\r\n    </tbody>\r\n</table>\r\n\r\n<ng-template #elseBlock>\r\n    <h2 class=\"center-form\">No seats available!</h2>\r\n</ng-template>\r\n\r\n<a routerLink=\"/admin\" class=\"btn btn-warning\"><i class=\"fas fa-arrow-circle-left\"></i> Go Back</a>\r\n";
    /***/
  },

  /***/
  "./src/app/modules/admin/admin-routing.module.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/admin/admin-routing.module.ts ***!
    \*******************************************************/

  /*! exports provided: AdminRoutingModule */

  /***/
  function srcAppModulesAdminAdminRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminRoutingModule", function () {
      return AdminRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/modules/admin/dashboard/dashboard.component.ts");
    /* harmony import */


    var _create_course_create_course_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./create-course/create-course.component */
    "./src/app/modules/admin/create-course/create-course.component.ts");
    /* harmony import */


    var _edit_course_edit_course_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-course/edit-course.component */
    "./src/app/modules/admin/edit-course/edit-course.component.ts");
    /* harmony import */


    var _pending_enrollment_pending_enrollment_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./pending-enrollment/pending-enrollment.component */
    "./src/app/modules/admin/pending-enrollment/pending-enrollment.component.ts");
    /* harmony import */


    var _app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");

    var routes = [{
      path: '',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
      canActivate: [_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]],
      data: {
        expectedRole: 'admin'
      }
    }, {
      path: 'create-course',
      component: _create_course_create_course_component__WEBPACK_IMPORTED_MODULE_4__["CreateCourseComponent"],
      canActivate: [_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]],
      data: {
        expectedRole: 'admin'
      }
    }, {
      path: 'edit-course/:id',
      component: _edit_course_edit_course_component__WEBPACK_IMPORTED_MODULE_5__["EditCourseComponent"],
      canActivate: [_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]],
      data: {
        expectedRole: 'admin'
      }
    }, {
      path: 'pending-enrollment/:id',
      component: _pending_enrollment_pending_enrollment_component__WEBPACK_IMPORTED_MODULE_6__["PendingEnrollmentComponent"],
      canActivate: [_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_7__["AuthenticationService"]],
      data: {
        expectedRole: 'admin'
      }
    }];

    var AdminRoutingModule = function AdminRoutingModule() {
      _classCallCheck(this, AdminRoutingModule);
    };

    AdminRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AdminRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/admin/admin.module.ts":
  /*!***********************************************!*\
    !*** ./src/app/modules/admin/admin.module.ts ***!
    \***********************************************/

  /*! exports provided: AdminModule */

  /***/
  function srcAppModulesAdminAdminModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdminModule", function () {
      return AdminModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _create_course_create_course_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./create-course/create-course.component */
    "./src/app/modules/admin/create-course/create-course.component.ts");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/modules/admin/dashboard/dashboard.component.ts");
    /* harmony import */


    var _admin_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./admin-routing.module */
    "./src/app/modules/admin/admin-routing.module.ts");
    /* harmony import */


    var _edit_course_edit_course_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./edit-course/edit-course.component */
    "./src/app/modules/admin/edit-course/edit-course.component.ts");
    /* harmony import */


    var _pending_enrollment_pending_enrollment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./pending-enrollment/pending-enrollment.component */
    "./src/app/modules/admin/pending-enrollment/pending-enrollment.component.ts");

    var AdminModule = function AdminModule() {
      _classCallCheck(this, AdminModule);
    };

    AdminModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_create_course_create_course_component__WEBPACK_IMPORTED_MODULE_5__["CreateCourseComponent"], _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["DashboardComponent"], _edit_course_edit_course_component__WEBPACK_IMPORTED_MODULE_8__["EditCourseComponent"], _pending_enrollment_pending_enrollment_component__WEBPACK_IMPORTED_MODULE_9__["PendingEnrollmentComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _admin_routing_module__WEBPACK_IMPORTED_MODULE_7__["AdminRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__["NgbModule"]]
    })], AdminModule);
    /***/
  },

  /***/
  "./src/app/modules/admin/create-course/create-course.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/modules/admin/create-course/create-course.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAdminCreateCourseCreateCourseComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vY3JlYXRlLWNvdXJzZS9jcmVhdGUtY291cnNlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/admin/create-course/create-course.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/modules/admin/create-course/create-course.component.ts ***!
    \************************************************************************/

  /*! exports provided: CreateCourseComponent */

  /***/
  function srcAppModulesAdminCreateCourseCreateCourseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateCourseComponent", function () {
      return CreateCourseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _core_services_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../core/services/course.service */
    "./src/app/core/services/course.service.ts");

    var CreateCourseComponent =
    /*#__PURE__*/
    function () {
      function CreateCourseComponent(courseService, fb, router) {
        _classCallCheck(this, CreateCourseComponent);

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

      _createClass(CreateCourseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addCourse",
        value: function addCourse(name, description, seats, start_date, end_date) {
          var _this = this;

          if (this.courseForm.valid) this.courseService.addCourse(name, description, seats, start_date, end_date).subscribe(function () {
            _this.router.navigate(['/admin']);
          });else alert('Missing required fields!');
        }
      }]);

      return CreateCourseComponent;
    }();

    CreateCourseComponent.ctorParameters = function () {
      return [{
        type: _core_services_course_service__WEBPACK_IMPORTED_MODULE_4__["CourseService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    CreateCourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-course',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-course.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/create-course/create-course.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-course.component.scss */
      "./src/app/modules/admin/create-course/create-course.component.scss")).default]
    })], CreateCourseComponent);
    /***/
  },

  /***/
  "./src/app/modules/admin/dashboard/dashboard.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/modules/admin/dashboard/dashboard.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAdminDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/admin/dashboard/dashboard.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/modules/admin/dashboard/dashboard.component.ts ***!
    \****************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppModulesAdminDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DashboardComponent", function () {
      return DashboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _core_services_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../core/services/course.service */
    "./src/app/core/services/course.service.ts");
    /* harmony import */


    var _app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");
    /* harmony import */


    var src_app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/core/services/student-course.service */
    "./src/app/core/services/student-course.service.ts");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/lib/index.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_6__);

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(courseService, router, route, authenticationService, studentCourseService) {
        _classCallCheck(this, DashboardComponent);

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
        this.numberPerPage = 5; //this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var page = this.route.snapshot.paramMap.get('page') || this.page;
          this.fetchCourses(page);
          this.currentUser = this.authenticationService.currentUserValue;

          if (this.currentUser) {
            this.tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_6___default()(this.currentUser.token);
            this.isAdmin = this.tokenPayload.role === "admin";
            console.log("Current user in Admin: " + JSON.stringify(this.currentUser));
            console.log("tokenPayload: " + JSON.stringify(this.tokenPayload));
          }
        }
      }, {
        key: "pendingEnrollmentsNotification",
        value: function pendingEnrollmentsNotification(courses) {
          var _this2 = this;

          courses.forEach(function (course, index, arr) {
            var start_date = new Date(course.start_date.toString());
            var end_date = new Date(course.end_date.toString());
            course.start_date = start_date.toLocaleDateString();
            course.end_date = end_date.toLocaleDateString();

            if (course.seats < 1) {
              return;
            }

            _this2.students[index] = 0;

            _this2.studentCourseService.getStudentsByCourseId(course.id).subscribe(function (res) {
              res.forEach(function (val) {
                if (val.enrollment_status == "pending") {
                  _this2.students[index]++;
                }
              });
              console.log(course.name + " pending students: " + _this2.students[index]); //this.students = res;
              //console.log("i: " + index + " course: " + JSON.stringify(course));
              //console.log(this.students);
            });
          });
        }
      }, {
        key: "fetchCourses",
        value: function fetchCourses(page) {
          var _this3 = this;

          this.courseService.getCourses(page, this.numberPerPage).subscribe(function (data) {
            _this3.courses = data;
            _this3.page = page;
            _this3.currentPage = _this3.courses.pagination.current;
            _this3.maxPages = _this3.courses.pagination.maxPages;
            _this3.maxPagesArray = new Array(_this3.maxPages);
            _this3.pages = Object.values(_this3.courses.pagination);
            console.log('Data requested...');

            _this3.pendingEnrollmentsNotification(_this3.courses.res);

            _this3.router.navigate(['/admin', {
              page: page
            }]);
          });
        }
      }, {
        key: "fetchPageCourses",
        value: function fetchPageCourses(pageNo) {
          var _this4 = this;

          //console.log("pageNo: " + pageNo);
          if (pageNo < 0) {
            return;
          }

          this.courseService.getCourses(pageNo, this.numberPerPage).subscribe(function () {
            var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            _this4.courses = data;
            _this4.page = pageNo;
            _this4.currentPage = _this4.courses.pagination.current;
            _this4.maxPages = _this4.courses.pagination.maxPages;

            _this4.pendingEnrollmentsNotification(_this4.courses.res);

            console.log('Data requested...' + pageNo);

            _this4.router.navigate(['/admin', {
              page: _this4.courses.pagination.current
            }]);
          });
        }
      }, {
        key: "editCourse",
        value: function editCourse(id) {
          this.router.navigate(["admin/edit-course/".concat(id)]);
        }
      }, {
        key: "deleteCourse",
        value: function deleteCourse(id) {
          var r = confirm("Delete Course ".concat(id, ": Are you sure?"));

          if (r == true) {
            this.courseService.deleteCourse(id).subscribe(function () {//this.fetchCourses();
            });
            var item = this.courses.res.find(function (item) {
              return item.id === id;
            });
            this.courses.res.splice(this.courses.res.indexOf(item));
          }
        }
      }, {
        key: "pendingEnrollment",
        value: function pendingEnrollment(id) {
          this.router.navigate(["admin/pending-enrollment/".concat(id)]);
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: _core_services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }, {
        type: src_app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_5__["StudentCourseService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/modules/admin/dashboard/dashboard.component.scss")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/modules/admin/edit-course/edit-course.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/modules/admin/edit-course/edit-course.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAdminEditCourseEditCourseComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vZWRpdC1jb3Vyc2UvZWRpdC1jb3Vyc2UuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/modules/admin/edit-course/edit-course.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/modules/admin/edit-course/edit-course.component.ts ***!
    \********************************************************************/

  /*! exports provided: EditCourseComponent */

  /***/
  function srcAppModulesAdminEditCourseEditCourseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditCourseComponent", function () {
      return EditCourseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _core_services_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../core/services/course.service */
    "./src/app/core/services/course.service.ts");

    var EditCourseComponent =
    /*#__PURE__*/
    function () {
      function EditCourseComponent(courseService, router, route, fb) {
        _classCallCheck(this, EditCourseComponent);

        this.courseService = courseService;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.CreateForm();
      }

      _createClass(EditCourseComponent, [{
        key: "CreateForm",
        value: function CreateForm() {
          this.updateForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            description: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            seats: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            start_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            end_date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this5 = this;

          this.route.params.subscribe(function (params) {
            _this5.id = params.id;

            _this5.courseService.getCourseById(_this5.id).subscribe(function (res) {
              _this5.course = res;
              console.log(_this5.course.start_date);

              _this5.hDateFormat(_this5.course);

              console.log(_this5.course.start_date);

              _this5.updateForm.get('name').setValue(_this5.course.name);

              _this5.updateForm.get('description').setValue(_this5.course.description);

              _this5.updateForm.get('seats').setValue(_this5.course.seats);

              _this5.updateForm.get('start_date').setValue(_this5.course.start_date);

              _this5.updateForm.get('end_date').setValue(_this5.course.end_date);
            });
          });
        }
      }, {
        key: "updateCourse",
        value: function updateCourse(name, description, seats, start_date, end_date) {
          var _this6 = this;

          if (this.updateForm.valid) this.courseService.updateCourse(this.id, name, description, seats, start_date, end_date).subscribe(function (res) {
            _this6.router.navigate(['/admin']);
          });else alert('Missing required fields!');
        }
      }, {
        key: "hDateFormat",
        value: function hDateFormat(course) {
          var start_date = new Date(course.start_date.toString());
          var end_date = new Date(course.end_date.toString());
          course.start_date = start_date.toLocaleDateString();
          course.end_date = end_date.toLocaleDateString();
        }
      }]);

      return EditCourseComponent;
    }();

    EditCourseComponent.ctorParameters = function () {
      return [{
        type: _core_services_course_service__WEBPACK_IMPORTED_MODULE_4__["CourseService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    EditCourseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-course',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-course.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/edit-course/edit-course.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-course.component.scss */
      "./src/app/modules/admin/edit-course/edit-course.component.scss")).default]
    })], EditCourseComponent);
    /***/
  },

  /***/
  "./src/app/modules/admin/pending-enrollment/pending-enrollment.component.scss":
  /*!************************************************************************************!*\
    !*** ./src/app/modules/admin/pending-enrollment/pending-enrollment.component.scss ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesAdminPendingEnrollmentPendingEnrollmentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvYWRtaW4vcGVuZGluZy1lbnJvbGxtZW50L3BlbmRpbmctZW5yb2xsbWVudC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/admin/pending-enrollment/pending-enrollment.component.ts":
  /*!**********************************************************************************!*\
    !*** ./src/app/modules/admin/pending-enrollment/pending-enrollment.component.ts ***!
    \**********************************************************************************/

  /*! exports provided: PendingEnrollmentComponent */

  /***/
  function srcAppModulesAdminPendingEnrollmentPendingEnrollmentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PendingEnrollmentComponent", function () {
      return PendingEnrollmentComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/services/student-course.service */
    "./src/app/core/services/student-course.service.ts");
    /* harmony import */


    var src_app_core_services_course_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/core/services/course.service */
    "./src/app/core/services/course.service.ts");

    var PendingEnrollmentComponent =
    /*#__PURE__*/
    function () {
      function PendingEnrollmentComponent(studentCourseService, courseService, route) {
        _classCallCheck(this, PendingEnrollmentComponent);

        this.studentCourseService = studentCourseService;
        this.courseService = courseService;
        this.route = route;
        this.students = [];
        this.noSeats = false;
      }

      _createClass(PendingEnrollmentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this7 = this;

          this.route.params.subscribe(function (params) {
            _this7.id = params.id;

            _this7.courseService.getCourseById(_this7.id).subscribe(function (res) {
              _this7.course = res;

              if (_this7.course.seats < 1) {
                _this7.noSeats = true;
                console.log("no seats: " + _this7.noSeats);
              }

              console.log(_this7.course);

              if (!_this7.noSeats) {
                _this7.studentCourseService.getStudentsByCourseId(_this7.id).subscribe(function (res) {
                  _this7.students = res; //console.log(this.students);
                });
              }
            });
            /*this.studentCourseService.getStudentsByCourseId(this.id).subscribe(res => {
              this.students = res;
              //console.log(this.students);
            });*/

          });
        }
      }, {
        key: "acceptEnrollment",
        value: function acceptEnrollment(studentId, courseId, enrollment_status) {
          var _this8 = this;

          // Update student enrollment_status = 'enrolled'
          var ret = confirm("Accept student ".concat(studentId, " enrollment?"));

          if (ret == true) {
            this.studentCourseService.acceptStudentEnrollment(studentId, courseId, enrollment_status).subscribe(function (res) {
              //alert(`Accepted student ${studentId} enrollment`);
              // remove student from view
              for (var i = 0; i < _this8.students.length; i++) {
                if (_this8.students[i].student_id === studentId) {
                  _this8.students.splice(i, 1);
                }
              }

              _this8.courseService.updateCourseSeats(courseId, _this8.course.seats - 1).subscribe(function () {
                console.log("seats decremented by 1");
                _this8.course.seats = _this8.course.seats - 1;
              });
            });
          }
        }
      }, {
        key: "declineEnrollment",
        value: function declineEnrollment(studentId, courseId) {
          var _this9 = this;

          var ret = confirm("Decline student ".concat(studentId, " enrollment?"));

          if (ret == true) {
            this.studentCourseService.declineStudentEnrollment(studentId, courseId).subscribe(function (res) {
              //alert(`Declined student ${studentId} enrollment`);
              // remove student from view
              for (var i = 0; i < _this9.students.length; i++) {
                if (_this9.students[i].student_id === studentId) {
                  _this9.students.splice(i, 1);
                }
              }
            });
          }
        }
      }]);

      return PendingEnrollmentComponent;
    }();

    PendingEnrollmentComponent.ctorParameters = function () {
      return [{
        type: src_app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_3__["StudentCourseService"]
      }, {
        type: src_app_core_services_course_service__WEBPACK_IMPORTED_MODULE_4__["CourseService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    PendingEnrollmentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pending-enrollment',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pending-enrollment.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/admin/pending-enrollment/pending-enrollment.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pending-enrollment.component.scss */
      "./src/app/modules/admin/pending-enrollment/pending-enrollment.component.scss")).default]
    })], PendingEnrollmentComponent);
    /***/
  }
}]);
//# sourceMappingURL=modules-admin-admin-module-es5.js.map