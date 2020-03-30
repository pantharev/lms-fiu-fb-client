(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

/***/ "./src/app/core/services/course-details.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/services/course-details.service.ts ***!
  \*********************************************************/
/*! exports provided: CourseDetailsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CourseDetailsService", function() { return CourseDetailsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");




class CourseDetailsService {
    constructor(http) {
        this.http = http;
    }
    createCourseDetails(course_id, content) {
        const courseDetails = {
            content: content,
            course_id: course_id
        };
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/courseDetails`, courseDetails);
    }
    getCourseDetails(courseId) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/courseDetails/${courseId}`);
    }
    updateCourseDetails(id, content) {
        const courseDetails = {
            content: content
        };
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/courseDetails/u/${id}`, courseDetails);
    }
    clearCourseDetails(id) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL}/courseDetails/c/${id}`, '');
    }
}
CourseDetailsService.ɵfac = function CourseDetailsService_Factory(t) { return new (t || CourseDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"])); };
CourseDetailsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: CourseDetailsService, factory: CourseDetailsService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseDetailsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common-es2015.js.map