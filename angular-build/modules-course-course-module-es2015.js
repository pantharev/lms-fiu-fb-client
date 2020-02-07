(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-course-course-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/course/dashboard/dashboard.component.html":
/*!*********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/course/dashboard/dashboard.component.html ***!
  \*********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h2>Dashboard</h2>\n<div class=\"row\">\n<ng-container *ngFor=\"let course of courses; let i = index\">\n    <div class=\"col-sm-2\">\n        <div class=\"card\" style=\"max-width: 18rem;\">\n            <!--<img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\">-->\n            <div class=\"card-body\">\n                <h5 class=\"card-title\">{{course.name}}</h5>\n                <p class=\"card-text\">{{course.description}}</p>\n                <a [routerLink]=\"[course.course_id, 'modules']\" class=\"btn btn-primary\">Go to Course</a>\n            </div>\n        </div>\n    </div>\n</ng-container>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/course/modules/modules.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/course/modules/modules.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<table class=\"table\">\n    <thead>\n        <tr>\n            <th scope=\"col\">#</th>\n            <th scope=\"col\">Title</th>\n        </tr>\n    </thead>\n    <tbody>\n    <tr *ngFor=\"let module of modules\">\n        <th scope=\"row\">Module {{ module.module_number }}</th>\n        <td>{{ module.module_title }}</td>\n    </tr>\n    </tbody>\n</table>\n");

/***/ }),

/***/ "./src/app/core/services/module.service.ts":
/*!*************************************************!*\
  !*** ./src/app/core/services/module.service.ts ***!
  \*************************************************/
/*! exports provided: ModuleService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModuleService", function() { return ModuleService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");




let ModuleService = class ModuleService {
    constructor(http) {
        this.http = http;
    }
    getModulesByCourseId(id) {
        return this.http.get(`${src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL}/modules/${id}`);
    }
};
ModuleService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
ModuleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], ModuleService);



/***/ }),

/***/ "./src/app/modules/course/course-routing.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/course/course-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: CourseRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseRoutingModule", function() { return CourseRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/modules/course/dashboard/dashboard.component.ts");
/* harmony import */ var _modules_modules_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/modules.component */ "./src/app/modules/course/modules/modules.component.ts");





const routes = [
    { path: '', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"] },
    { path: ':id/modules', component: _modules_modules_component__WEBPACK_IMPORTED_MODULE_4__["ModulesComponent"] }
];
let CourseRoutingModule = class CourseRoutingModule {
};
CourseRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [],
        imports: [
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)
        ],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], CourseRoutingModule);



/***/ }),

/***/ "./src/app/modules/course/course.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/course/course.module.ts ***!
  \*************************************************/
/*! exports provided: CourseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseModule", function() { return CourseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/modules/course/dashboard/dashboard.component.ts");
/* harmony import */ var _course_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./course-routing.module */ "./src/app/modules/course/course-routing.module.ts");
/* harmony import */ var _modules_modules_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/modules.component */ "./src/app/modules/course/modules/modules.component.ts");






let CourseModule = class CourseModule {
};
CourseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], _modules_modules_component__WEBPACK_IMPORTED_MODULE_5__["ModulesComponent"]],
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _course_routing_module__WEBPACK_IMPORTED_MODULE_4__["CourseRoutingModule"]
        ]
    })
], CourseModule);



/***/ }),

/***/ "./src/app/modules/course/dashboard/dashboard.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/modules/course/dashboard/dashboard.component.scss ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY291cnNlL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/modules/course/dashboard/dashboard.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/course/dashboard/dashboard.component.ts ***!
  \*****************************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/core/services/student-course.service */ "./src/app/core/services/student-course.service.ts");



let DashboardComponent = class DashboardComponent {
    constructor(studentCourseService) {
        this.studentCourseService = studentCourseService;
        this.courses = [];
    }
    ngOnInit() {
        this.fetchStudentCourses();
    }
    fetchStudentCourses() {
        this.studentCourseService.getCoursesByStudentId(1).subscribe((data) => {
            this.courses = data;
            console.log(data);
        });
    }
};
DashboardComponent.ctorParameters = () => [
    { type: src_app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_2__["StudentCourseService"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/course/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.scss */ "./src/app/modules/course/dashboard/dashboard.component.scss")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/modules/course/modules/modules.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/modules/course/modules/modules.component.scss ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY291cnNlL21vZHVsZXMvbW9kdWxlcy5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/modules/course/modules/modules.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/course/modules/modules.component.ts ***!
  \*************************************************************/
/*! exports provided: ModulesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModulesComponent", function() { return ModulesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_core_services_module_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/core/services/module.service */ "./src/app/core/services/module.service.ts");





let ModulesComponent = class ModulesComponent {
    constructor(moduleService, route) {
        this.moduleService = moduleService;
        this.route = route;
        this.modules = [];
        const url = route.url.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(segments => segments.join('')));
        this.urlPath = url;
        this.courseId = this.urlPath.source._value[0].path;
    }
    ngOnInit() {
        console.log(this.urlPath.source._value[0].path);
        console.log(this.courseId);
        this.fetchModules(this.courseId);
    }
    fetchModules(courseId) {
        this.moduleService.getModulesByCourseId(courseId).subscribe((data) => {
            this.modules = data;
            console.log(this.modules);
        });
    }
};
ModulesComponent.ctorParameters = () => [
    { type: src_app_core_services_module_service__WEBPACK_IMPORTED_MODULE_4__["ModuleService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] }
];
ModulesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-modules',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./modules.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/course/modules/modules.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./modules.component.scss */ "./src/app/modules/course/modules/modules.component.scss")).default]
    })
], ModulesComponent);



/***/ })

}]);
//# sourceMappingURL=modules-course-course-module-es2015.js.map