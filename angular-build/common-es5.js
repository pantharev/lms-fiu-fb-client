function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"], {
  /***/
  "./src/app/core/services/course-details.service.ts":
  /*!*********************************************************!*\
    !*** ./src/app/core/services/course-details.service.ts ***!
    \*********************************************************/

  /*! exports provided: CourseDetailsService */

  /***/
  function srcAppCoreServicesCourseDetailsServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseDetailsService", function () {
      return CourseDetailsService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var CourseDetailsService =
    /*#__PURE__*/
    function () {
      function CourseDetailsService(http) {
        _classCallCheck(this, CourseDetailsService);

        this.http = http;
      }

      _createClass(CourseDetailsService, [{
        key: "createCourseDetails",
        value: function createCourseDetails(course_id, content) {
          var courseDetails = {
            content: content,
            course_id: course_id
          };
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/courseDetails"), courseDetails);
        }
      }, {
        key: "getCourseDetails",
        value: function getCourseDetails(courseId) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/courseDetails/").concat(courseId));
        }
      }, {
        key: "updateCourseDetails",
        value: function updateCourseDetails(id, content) {
          var courseDetails = {
            content: content
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/courseDetails/u/").concat(id), courseDetails);
        }
      }, {
        key: "clearCourseDetails",
        value: function clearCourseDetails(id) {
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/courseDetails/c/").concat(id), '');
        }
      }]);

      return CourseDetailsService;
    }();

    CourseDetailsService.ɵfac = function CourseDetailsService_Factory(t) {
      return new (t || CourseDetailsService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    CourseDetailsService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CourseDetailsService,
      factory: CourseDetailsService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseDetailsService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=common-es5.js.map