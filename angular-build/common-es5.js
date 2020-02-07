function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/core/services/student-course.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/core/services/student-course.service.ts ***!
    \*********************************************************/

  /*! exports provided: StudentCourseService */

  /***/
  function srcAppCoreServicesStudentCourseServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StudentCourseService", function () {
      return StudentCourseService;
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


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");

    var StudentCourseService =
    /*#__PURE__*/
    function () {
      function StudentCourseService(http) {
        _classCallCheck(this, StudentCourseService);

        this.http = http;
      }

      _createClass(StudentCourseService, [{
        key: "getStudentsByCourseId",
        value: function getStudentsByCourseId(id) {
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL, "/student-courses/c/").concat(id));
        }
      }, {
        key: "getCoursesByStudentId",
        value: function getCoursesByStudentId(id) {
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL, "/student-courses/s/").concat(id));
        }
      }, {
        key: "acceptStudentEnrollment",
        value: function acceptStudentEnrollment(student_id, course_id, enrollment_status) {
          var student_course = {
            student_id: student_id,
            course_id: course_id,
            enrollment_status: enrollment_status
          };
          console.log(student_course);
          return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL, "/student-courses/").concat(student_id), student_course);
        }
      }, {
        key: "declineStudentEnrollment",
        value: function declineStudentEnrollment(student_id, course_id) {
          return this.http.delete("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL, "/student-courses/").concat(student_id, "/").concat(course_id));
        }
      }]);

      return StudentCourseService;
    }();

    StudentCourseService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    StudentCourseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], StudentCourseService);
    /***/
  }
}]);
//# sourceMappingURL=common-es5.js.map