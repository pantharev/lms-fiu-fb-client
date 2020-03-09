function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-course-course-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/course/dashboard/dashboard.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/course/dashboard/dashboard.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesCourseDashboardDashboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"center-form\" style=\"position: relative\">\r\n\r\n    <h2>Dashboard</h2>\r\n\r\n    <ng-container *ngIf=\"listCourses | async; else elseBlock\">\r\n        <!--<button type=\"button\" (click)=\"toggleDropCourse()\" class=\"btn btn-danger btn-sm\">Toggle Course Drop</button>-->\r\n        <div class=\"row\">\r\n            <ng-container *ngFor=\"let course of listCourses | async; let index = index\">\r\n                <ng-container *ngIf=\"course.enrollment_status == 'enrolled'\">\r\n                    <button *ngIf=\"index == 0\" type=\"button\" (click)=\"toggleDropCourse()\" class=\"btn btn-danger btn-sm center-form\" style=\"position: absolute; top: 5px; left: 20px;\">Toggle Course Drop</button>\r\n                    <div class=\"col\">\r\n                        <div class=\"card\" style=\"max-width: 18rem;\">\r\n                            <!--<img class=\"card-img-top\" src=\"...\" alt=\"Card image cap\">-->\r\n                            <div class=\"card-body\">\r\n                                <h5 class=\"card-title text-wrap\" style=\"word-wrap: break-word\">{{course.name}}</h5>\r\n                                <p class=\"card-text text-wrap\" style=\"word-wrap: break-word\">{{course.description}}</p>\r\n                                <div class=\"flex-container\">\r\n                                    <a [routerLink]=\"[course.course_id, 'modules']\" class=\"btn btn-primary flex-item\">Go to Course</a>\r\n                                    <button type=\"button\" (click)=\"dropCourse(course.course_id)\" class=\"btn btn-danger btn-sm flex-item\" *ngIf=\"courseDrop\">Drop Course</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </ng-container>\r\n            </ng-container>\r\n        </div>\r\n    </ng-container>\r\n\r\n    <ng-template #elseBlock class=\"center-form\">\r\n        <p>You have no courses!</p>\r\n        <label>Enroll in courses</label>\r\n        <button routerLink=\"../course-library\" class=\"btn btn-primary\" style=\"margin-left: 10px\">Enroll</button>\r\n    </ng-template>\r\n\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/course/leaderboard/leaderboard.component.html":
  /*!*************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/course/leaderboard/leaderboard.component.html ***!
    \*************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesCourseLeaderboardLeaderboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--<a href=\"../../../../assets/favicon-32x32.png\" download=\"favicon-32x32\">Download it!</a>-->\r\n<app-sidebar></app-sidebar>\r\n<div id=\"main\">\r\n    <app-sidebar-button></app-sidebar-button>\r\n    <div class=\"flexbox-row\">\r\n\r\n        <!-- HEADER -->\r\n        <h2> Leaderboard </h2>\r\n        <!-- COLUMN NAMES -->\r\n        <div class=\"flexbox-container\">\r\n                <div class=\"flexbox-cell left\">ID</div>\r\n                <div class=\"flexbox-cell center\">Name</div>\r\n                <div class=\"flexbox-cell right\">Points</div>\r\n        </div>\r\n\r\n        <!-- STUDENTS -->\r\n        <div class=\"flexbox-row\" *ngFor=\"let student of students; let index = index\">\r\n        <div class=\"flexbox-container\">\r\n                <div class=\"flexbox-cell left\">{{student.student_id}}</div>\r\n                <div class=\"flexbox-cell center\">{{student.f_name}} {{student.l_name}}</div>\r\n                <div class=\"flexbox-cell right\">{{student.points}}</div>\r\n            </div>\r\n        </div>\r\n    </div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/course/modules/modules.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/course/modules/modules.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesCourseModulesModulesComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--<a href=\"../../../../assets/favicon-32x32.png\" download=\"favicon-32x32\">Download it!</a>-->\r\n<app-sidebar></app-sidebar>\r\n<div id=\"main\">\r\n  <app-sidebar-button></app-sidebar-button>\r\n\r\n<div class=\"progress\" style=\"height: 30px\">\r\n    <div class=\"progress-bar progress-bar-striped\" id=\"progressbar\" role=\"progressbar\" style=\"width: 10%\" aria-valuenow=\"10\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{points}}%</div>\r\n</div>\r\n<div class=\"flexbox-row\">\r\n    <div *ngIf=\"currentUser && (isAdmin || isInstructor)\">\r\n        <button (click)=\"createModule(courseId)\" class=\"btn btn-success\"><i class=\"fas fa-plus-circle\"></i> Create Module</button>\r\n    </div>\r\n    <div class=\"flexbox-container\" *ngFor=\"let module of modules; let index = index\">\r\n        <ng-container *ngIf=\"!moduleLocked[index] || isAdmin || isInstructor; else lockedBlock\">\r\n            <span *ngIf=\"!moduleLocked[index] && (isAdmin || isInstructor); else lockedBlock0\"style=\"color: blue;\">locked until: {{module.lockedUntil}}</span>\r\n            <ng-template #lockedBlock0>\r\n                <span *ngIf=\"isAdmin || isInstructor\" style=\"color: red\">locked until: {{module.lockedUntil}}</span>\r\n            </ng-template>\r\n            <div class=\"flexbox-options\">\r\n\r\n                <!--FORM CONTENT IN MODAL FOR VIDEO ADD-->\r\n                <ng-template #content let-modal>\r\n                    <div class=\"modal-header\">\r\n                        <h4 class=\"modal-title\">Add Youtube Video</h4>\r\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n                        <form [formGroup]=\"videoForm\" class=\"col-9\">\r\n\r\n                            <div class=\"form-group\">\r\n                                <label>Link</label>\r\n                                <input type=\"text\" class=\"form-control\"  formControlName=\"link\" #link>\r\n                            </div>\r\n                        \r\n                            <button *ngIf=\"isAdmin || isInstructor\" type=\"submit\" (click)=\"addVideo(link.value, module.module_id)\" class=\"btn btn-primary\"><i class=\"fas fa-plus-circle\"></i> Add Video</button>\r\n                        </form>\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n                    </div>\r\n                </ng-template>\r\n                <button *ngIf=\"isAdmin || isInstructor\" class=\"btn btn-success\" (click)=\"open(content)\">Add Video</button>\r\n                <!--END OF FORM CONTENT IN MODAL FOR VIDEO ADD-->\r\n\r\n                <!--FORM CONTENT IN MODAL FOR PDF ADD-->\r\n                <ng-template #contentpdf let-modal>\r\n                    <div class=\"modal-header\">\r\n                        <h4 class=\"modal-title\">Add PDF File</h4>\r\n                        <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n                            <span aria-hidden=\"true\">&times;</span>\r\n                        </button>\r\n                    </div>\r\n                    <div class=\"modal-body\">\r\n\r\n                        <form [formGroup]=\"pdfForm\" (ngSubmit)=\"addPdf(module.module_id)\"class=\"col-9\" method=\"POST\" enctype=\"multipart/form-data\">\r\n\r\n                            <div class=\"form-group\">\r\n                                <label>Select a PDF File</label>\r\n                                <input id=\"theFile\" type=\"file\" class=\"form-control\" name=\"pdf\" #file (change)=\"handleFileInput($event)\">\r\n                            </div>\r\n                        \r\n                            <button type=\"submit\" class=\"btn btn-primary\"><i class=\"fas fa-plus-circle\"></i> Add PDF</button>\r\n                        </form>\r\n\r\n                    </div>\r\n                    <div class=\"modal-footer\">\r\n                        <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n                    </div>\r\n                </ng-template>\r\n                <button *ngIf=\"isAdmin || isInstructor\" class=\"btn btn-success\" (click)=\"open(contentpdf)\">Add PDF</button>\r\n                <!--END OF FORM CONTENT IN MODAL FOR PDF ADD-->\r\n\r\n                <button *ngIf=\"isAdmin || isInstructor\" class=\"btn btn-success\">Add Quiz/Test</button>\r\n            </div>\r\n\r\n            <!--CONTENT IN EACH MODULE-->\r\n            <div class=\"flexbox-item\" *ngIf=\"!toggleContent[index]; else moduleBlock\" (click)=\"openModule(index)\" style=\"cursor:pointer\">\r\n                <i class=\"fas fa-caret-right\"></i> <strong>Module {{ module.module_number }} </strong>| {{ module.module_title }}\r\n            </div>\r\n            <ng-template #moduleBlock>\r\n                <div class=\"flexbox-item\" (click)=\"openModule(index)\" style=\"cursor:pointer\">\r\n                    <i class=\"fas fa-caret-down\"></i> <strong>Module {{ module.module_number }} </strong>| {{ module.module_title }}\r\n                </div>\r\n            </ng-template>\r\n            <div class=\"flexbox-subcontainer\" *ngIf=\"toggleContent[index]\">\r\n                <!--RESOURCES PDF CONTENT-->\r\n                <div class=\"flexbox-resources\" *ngFor=\"let pdf of safePdfs | keyvalue; let index = index\">\r\n                    <div *ngIf=\"pdf.key == module.module_id\">\r\n                        <div class=\"flexbox-resources-inner\" *ngFor=\"let innerpdf of pdf.value; let j = index\">\r\n                            <i class=\"fas fa-paperclip\"></i>\r\n\r\n                            <ng-template #contentPdf let-modal>\r\n                                <div class=\"modal-header\">\r\n                                    <h4 class=\"modal-title\">{{module.module_title}} - Pdf {{j + 1}}</h4>\r\n                                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n                                        <span aria-hidden=\"true\">&times;</span>\r\n                                    </button>\r\n                                </div>\r\n                                <div class=\"modal-body\">\r\n                                    <div class=\"embed-responsive embed-responsive-16by9\">\r\n                                        <iframe class=\"embed-responsive-item\" width=\"780\" height=\"480\" [src]=\"innerpdf.pdf\"></iframe>\r\n                                        <!--<a [href]=\"innerpdf.pdf\">Link</a>-->\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"modal-footer\">\r\n                                    <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n                                </div>\r\n                            </ng-template>\r\n                            <button class=\"btn btn-primary\" (click)=\"open(contentPdf)\">View Pdf {{j + 1}}</button>\r\n                            <button *ngIf=\"isAdmin || isInstructor\" class=\"btn btn-danger flexbox-module-options\" (click)=\"deletePDF(innerpdf.pdf_id)\">Delete Pdf</button>\r\n\r\n                            <!--FORM CONTENT IN MODAL FOR PDF EDIT-->\r\n                            <ng-template #contentPdfUpdate let-modal>\r\n                            <div class=\"modal-header\">\r\n                                <h4 class=\"modal-title\">Edit PDF</h4>\r\n                                <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n                                    <span aria-hidden=\"true\">&times;</span>\r\n                                </button>\r\n                            </div>\r\n                            <div class=\"modal-body\">\r\n                                <form [formGroup]=\"updatePdfForm\" (ngSubmit)=\"updatePDF(innerpdf.pdf_id, module.module_id)\"class=\"col-9\" method=\"POST\" enctype=\"multipart/form-data\">\r\n\r\n                                    <div class=\"form-group\">\r\n                                        <label>Select a PDF File</label>\r\n                                        <input id=\"theFile\" type=\"file\" class=\"form-control\" name=\"pdf\" #file (change)=\"handleFileInputUpdate($event)\">\r\n                                    </div>\r\n                                \r\n                                    <button type=\"submit\" class=\"btn btn-primary\"><i class=\"fas fa-plus-circle\"></i> Update PDF</button>\r\n                                </form>\r\n                            </div>\r\n                            <div class=\"modal-footer\">\r\n                                <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n                            </div>\r\n                        </ng-template>\r\n                        <button *ngIf=\"isAdmin || isInstructor\" class=\"btn btn-success flexbox-module-options\" (click)=\"openUpdatePDF(contentPdfUpdate, innerpdf.pdf)\">Edit PDF</button>\r\n                        <!--END OF FORM CONTENT IN MODAL FOR PDF EDIT-->\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!--END OF RESOURCES PDF CONTENT-->\r\n\r\n                <!--YOUTUBE LINKS CONTENT-->\r\n                <div class=\"flexbox-links\" *ngFor=\"let link of safeLinks | keyvalue; let index = index\">\r\n                    <div *ngIf=\"link.key == module.module_id\">\r\n                        <div class=\"flexbox-links-inner\" *ngFor=\"let innerlink of link.value; let j = index\">\r\n                            <i class=\"fab fa-youtube\"></i>    \r\n\r\n                            <ng-template #content let-modal>\r\n                                <div class=\"modal-header\">\r\n                                    <h4 class=\"modal-title\">{{module.module_title}} - Video {{j + 1}}</h4>\r\n                                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n                                        <span aria-hidden=\"true\">&times;</span>\r\n                                    </button>\r\n                                </div>\r\n                                <div class=\"modal-body\">\r\n                                    <div class=\"embed-responsive embed-responsive-16by9\">\r\n                                        <iframe class=\"embed-responsive-item\" width=\"780\" height=\"480\" [src]=\"innerlink.videoUrl\" frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"modal-footer\">\r\n                                    <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n                                </div>\r\n                            </ng-template>\r\n                            <button class=\"btn btn-primary\" (click)=\"open(content)\">Watch Video {{j + 1}}</button>\r\n                            <button *ngIf=\"isAdmin || isInstructor\" class=\"btn btn-danger flexbox-module-options\" (click)=\"deleteVideo(innerlink.video_id)\">Delete Video</button>\r\n\r\n                            <!--FORM CONTENT IN MODAL FOR VIDEO EDIT-->\r\n                            <ng-template #contentVideoUpdate let-modal>\r\n                                <div class=\"modal-header\">\r\n                                    <h4 class=\"modal-title\">Edit Youtube Video</h4>\r\n                                    <button type=\"button\" class=\"close\" aria-label=\"Close\" (click)=\"modal.dismiss('Cross click')\">\r\n                                        <span aria-hidden=\"true\">&times;</span>\r\n                                    </button>\r\n                                </div>\r\n                                <div class=\"modal-body\">\r\n                                    <form [formGroup]=\"updateVideoForm\" class=\"col-9\">\r\n            \r\n                                        <div class=\"form-group\">\r\n                                            <label>New Link</label>\r\n                                            <input type=\"text\" class=\"form-control form-control-lg\" formControlName=\"linkInput\" #linkInput>\r\n                                        </div>\r\n                                    \r\n                                        <button type=\"submit\" (click)=\"updateVideo(linkInput.value, innerlink.video_id)\" class=\"btn btn-primary\"><i class=\"fas fa-plus-circle\"></i> Update Video</button>\r\n                                    </form>\r\n                                </div>\r\n                                <div class=\"modal-footer\">\r\n                                    <button type=\"button\" class=\"btn btn-light\" (click)=\"modal.close('Close click')\">Close</button>\r\n                                </div>\r\n                            </ng-template>\r\n                            <button *ngIf=\"isAdmin || isInstructor\" class=\"btn btn-success flexbox-module-options\" (click)=\"openUpdateVideo(contentVideoUpdate, innerlink.url)\">Edit Video</button>\r\n                            <!--END OF FORM CONTENT IN MODAL FOR VIDEO EDIT-->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!--END OF YOUTUBE LINKS CONTENT-->\r\n\r\n                <!--QUIZZES CONTENT-->\r\n                <div class=\"flexbox-quizzes\" *ngFor=\"let quiz of quizzes\">\r\n                    <i class=\"fas fa-paper-plane\"></i> {{quiz}}\r\n                </div>\r\n                <!--END OF QUIZZES CONTENT-->\r\n\r\n            </div>  \r\n            <div class=\"flexbox-item-module-actions\" *ngIf=\"currentUser\">\r\n                <button *ngIf=\"isAdmin || isInstructor\" type=\"button\" (click)=\"editModule(module.course_id, module.module_id)\" class=\"btn btn-primary\"><i class=\"fas fa-edit\"></i> Edit</button>\r\n                <button *ngIf=\"isAdmin || isInstructor\" type=\"button\" (click)=\"deleteModule(module.module_id, module.module_number)\" class=\"btn btn-danger\"><i class=\"fas fa-minus-circle\"></i> Delete</button>\r\n            </div>\r\n            <!--END OF CONTENT IN EACH MODULE-->\r\n        </ng-container>\r\n\r\n            <ng-template #lockedBlock>\r\n                <span style=\"color: red;\">locked until: {{module.lockedUntil}}</span>\r\n                <div class=\"flexbox-item\" (click)=\"openModule(index)\" style=\"cursor: not-allowed; opacity: 0.5;\">\r\n                    <i class=\"fas fa-caret-right\"></i> <strong>Module {{ module.module_number }} </strong>| {{ module.module_title }}\r\n                </div>\r\n            </ng-template>\r\n    </div>\r\n</div>\r\n\r\n</div>\r\n<!--<video\r\n    id=\"vid1\"\r\n    class=\"vjs-matrix video-js\"\r\n    controls\r\n    width=\"854\" height=\"480\"\r\n    data-setup='{ \r\n        \"techOrder\": [\"youtube\"],\r\n        \"sources\": [{ \"type\": \"video/youtube\", \"src\": \"https://youtu.be/zpOULjyy-n8\"}],\r\n        \"playbackRates\": [0.5, 1, 1.5, 2]\r\n        }'\r\n>\r\n</video>-->\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/course/modulesManagement/create-module/create-module.component.html":
  /*!***********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/course/modulesManagement/create-module/create-module.component.html ***!
    \***********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesCourseModulesManagementCreateModuleCreateModuleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"center-form\">\r\n    <h2>Create New Module</h2>\r\n    <form [formGroup]=\"moduleForm\" class=\"col-sm-4\">\r\n    \r\n        <div class=\"form-group\">\r\n            <label>Number</label>\r\n            <input type=\"text\" class=\"form-control\"  formControlName=\"number\" #number>\r\n        </div>\r\n    \r\n        <div class=\"form-group\">\r\n            <label>Title</label>\r\n            <textarea class=\"form-control\"  formControlName=\"title\" #title></textarea>\r\n        </div>\r\n    \r\n        <div class=\"form-group\">\r\n            <label>lockedUntil</label>\r\n            <div class=\"input-group\">\r\n                <input class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                       name=\"dp\" ngbDatepicker #d=\"ngbDatepicker\" formControlName=\"lockedUntil\" #lockedUntil>\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary far fa-calendar-alt\" (click)=\"d.toggle()\" type=\"button\"></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    \r\n        <button type=\"submit\" (click)=\"addModule(number.value, title.value, lockedUntil.value)\" class=\"btn btn-primary\"><i class=\"fas fa-plus-circle\"></i> Create Module</button>\r\n        <!--<a routerLink=\"/admin\" class=\"btn btn-warning\"><i class=\"fas fa-arrow-circle-left\"></i> Go Back</a>-->\r\n    </form>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/course/modulesManagement/edit-module/edit-module.component.html":
  /*!*******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/course/modulesManagement/edit-module/edit-module.component.html ***!
    \*******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesCourseModulesManagementEditModuleEditModuleComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"center-form\">\r\n    <h2>Edit Module {{moduleNumber}}</h2>\r\n    <form [formGroup]=\"updateForm\" class=\"col-sm-4\">\r\n    \r\n        <div class=\"form-group\">\r\n            <label>Number</label>\r\n            <input type=\"text\" class=\"form-control\"  formControlName=\"number\" #number>\r\n        </div>\r\n    \r\n        <div class=\"form-group\">\r\n            <label>Title</label>\r\n            <textarea class=\"form-control\"  formControlName=\"title\" #title></textarea>\r\n        </div>\r\n    \r\n        <div class=\"form-group\">\r\n            <label>Locked Until</label>\r\n            <div class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control\" placeholder=\"yyyy-mm-dd\"\r\n                       name=\"dp\" ngbDatepicker #d=\"ngbDatepicker\" formControlName=\"lockedUntil\" #lockedUntil>\r\n                <div class=\"input-group-append\">\r\n                  <button class=\"btn btn-outline-secondary far fa-calendar-alt\" (click)=\"d.toggle()\" type=\"button\"></button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    \r\n        <button type=\"submit\" (click)=\"updateModule(number.value, title.value, lockedUntil.value)\" class=\"btn btn-primary\"><i class=\"fas fa-plus-circle\"></i> Update Module</button>\r\n        <!--<a routerLink=\"/admin\" class=\"btn btn-warning\"><i class=\"fas fa-arrow-circle-left\"></i> Go Back</a>-->\r\n    </form>\r\n    </div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/course/sidebar-button/sidebar-button.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/course/sidebar-button/sidebar-button.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesCourseSidebarButtonSidebarButtonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"sidebarIsOpen == false\" class=\"flexbox-row\">\r\n    <span (click)=\"openNav()\" class=\"flexbox-side\" style=\"cursor: pointer\"><i class=\"fas fa-angle-double-right fa-5x\"></i></span>\r\n</div>\r\n<div *ngIf=\"sidebarIsOpen == true\" class=\"flexbox-row\">\r\n    <span (click)=\"closeNav()\" class=\"flexbox-side\" style=\"cursor: pointer\"><i class=\"fas fa-angle-double-left fa-5x\"></i></span>\r\n</div>  \r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/course/sidebar/sidebar.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/modules/course/sidebar/sidebar.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppModulesCourseSidebarSidebarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"mySidenav\" class=\"sidenav\">\r\n    <a class=\"nav-link\" routerLink=\"/\" routerLinkActive=\"active\">Home</a>\r\n    <a class=\"nav-link\" routerLink=\"/courses\" routerLinkActive=\"active\">Courses</a>\r\n    <a class=\"nav-link\" routerLink=\"/admin\" routerLinkActive=\"active\">Admin</a>\r\n    <a class=\"nav-link\" routerLink=\"../leaderboard\" routerLinkActive=\"active\">Leaderboard</a>\r\n    <a class=\"nav-link\" routerLink=\"../modules\" routerLinkActive=\"active\">Modules</a>\r\n</div>";
    /***/
  },

  /***/
  "./src/app/core/services/module.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/services/module.service.ts ***!
    \*************************************************/

  /*! exports provided: ModuleService */

  /***/
  function srcAppCoreServicesModuleServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModuleService", function () {
      return ModuleService;
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

    var ModuleService =
    /*#__PURE__*/
    function () {
      function ModuleService(http) {
        _classCallCheck(this, ModuleService);

        this.http = http;
      }

      _createClass(ModuleService, [{
        key: "addModule",
        value: function addModule(courseId, number, title, lockedUntil) {
          var moduleO = {
            number: number,
            title: title,
            lockedUntil: lockedUntil
          };
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL, "/modules/").concat(courseId), moduleO);
        }
      }, {
        key: "getModuleById",
        value: function getModuleById(id) {
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL, "/modules/m/").concat(id));
        }
      }, {
        key: "getModulesByCourseId",
        value: function getModulesByCourseId(id) {
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL, "/modules/c/").concat(id));
        }
      }, {
        key: "updateModule",
        value: function updateModule(moduleId, number, title, lockedUntil) {
          var moduleO = {
            number: number,
            title: title,
            lockedUntil: lockedUntil
          };
          return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL, "/modules/").concat(moduleId), moduleO);
        }
      }, {
        key: "deleteModule",
        value: function deleteModule(moduleId) {
          return this.http.delete("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL, "/modules/").concat(moduleId));
        }
      }]);

      return ModuleService;
    }();

    ModuleService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    ModuleService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ModuleService);
    /***/
  },

  /***/
  "./src/app/core/services/pdf.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/core/services/pdf.service.ts ***!
    \**********************************************/

  /*! exports provided: PdfService */

  /***/
  function srcAppCoreServicesPdfServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PdfService", function () {
      return PdfService;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @environments/environment */
    "./src/environments/environment.ts");

    var PdfService =
    /*#__PURE__*/
    function () {
      function PdfService(http) {
        _classCallCheck(this, PdfService);

        this.http = http;
      }

      _createClass(PdfService, [{
        key: "addPDF",
        value: function addPDF(formData) {
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL, "/pdfs"), formData);
        }
      }, {
        key: "fetchPDFs",
        value: function fetchPDFs(courseId) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL, "/pdfs/").concat(courseId));
        }
      }, {
        key: "updatePDF",
        value: function updatePDF(pdfID, formData) {
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL, "/pdfs/").concat(pdfID), formData);
        }
      }, {
        key: "deletePDF",
        value: function deletePDF(pdfID) {
          return this.http.delete("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL, "/pdfs/").concat(pdfID));
        }
      }]);

      return PdfService;
    }();

    PdfService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    PdfService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], PdfService);
    /***/
  },

  /***/
  "./src/app/core/services/video.service.ts":
  /*!************************************************!*\
    !*** ./src/app/core/services/video.service.ts ***!
    \************************************************/

  /*! exports provided: VideoService */

  /***/
  function srcAppCoreServicesVideoServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "VideoService", function () {
      return VideoService;
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


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @environments/environment */
    "./src/environments/environment.ts");

    var VideoService =
    /*#__PURE__*/
    function () {
      function VideoService(http) {
        _classCallCheck(this, VideoService);

        this.http = http;
      }

      _createClass(VideoService, [{
        key: "addVideo",
        value: function addVideo(link, module_id) {
          var video = {
            link: link,
            module_id: module_id
          };
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL, "/videos"), video);
        }
      }, {
        key: "fetchVideos",
        value: function fetchVideos(courseId) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL, "/videos/").concat(courseId));
        }
      }, {
        key: "updateVideo",
        value: function updateVideo(link, videoId) {
          var video = {
            link: link
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL, "/videos/").concat(videoId), video);
        }
      }, {
        key: "deleteVideo",
        value: function deleteVideo(videoId) {
          return this.http.delete("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].apiURL, "/videos/").concat(videoId));
        }
      }]);

      return VideoService;
    }();

    VideoService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    VideoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], VideoService);
    /***/
  },

  /***/
  "./src/app/modules/course/course-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/modules/course/course-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: CourseRoutingModule */

  /***/
  function srcAppModulesCourseCourseRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseRoutingModule", function () {
      return CourseRoutingModule;
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
    "./src/app/modules/course/dashboard/dashboard.component.ts");
    /* harmony import */


    var _modules_modules_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./modules/modules.component */
    "./src/app/modules/course/modules/modules.component.ts");
    /* harmony import */


    var _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./leaderboard/leaderboard.component */
    "./src/app/modules/course/leaderboard/leaderboard.component.ts");
    /* harmony import */


    var _modulesManagement_create_module_create_module_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./modulesManagement/create-module/create-module.component */
    "./src/app/modules/course/modulesManagement/create-module/create-module.component.ts");
    /* harmony import */


    var _modulesManagement_edit_module_edit_module_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./modulesManagement/edit-module/edit-module.component */
    "./src/app/modules/course/modulesManagement/edit-module/edit-module.component.ts");
    /* harmony import */


    var _app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");

    var routes = [{
      path: '',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"],
      canActivate: [_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]]
    }, {
      path: ':id/modules',
      component: _modules_modules_component__WEBPACK_IMPORTED_MODULE_4__["ModulesComponent"],
      canActivate: [_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]]
    }, {
      path: ':id/leaderboard',
      component: _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_5__["LeaderboardComponent"],
      canActivate: [_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]]
    }, {
      path: ':id/create-module',
      component: _modulesManagement_create_module_create_module_component__WEBPACK_IMPORTED_MODULE_6__["CreateModuleComponent"],
      canActivate: [_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]],
      data: {
        expectedRole: 'instructor'
      }
    }, {
      path: ':id/edit-module/:moduleId',
      component: _modulesManagement_edit_module_edit_module_component__WEBPACK_IMPORTED_MODULE_7__["EditModuleComponent"],
      canActivate: [_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]],
      data: {
        expectedRole: 'instructor'
      }
    }];

    var CourseRoutingModule = function CourseRoutingModule() {
      _classCallCheck(this, CourseRoutingModule);
    };

    CourseRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], CourseRoutingModule);
    /***/
  },

  /***/
  "./src/app/modules/course/course.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/modules/course/course.module.ts ***!
    \*************************************************/

  /*! exports provided: CourseModule */

  /***/
  function srcAppModulesCourseCourseModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseModule", function () {
      return CourseModule;
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


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/modules/course/dashboard/dashboard.component.ts");
    /* harmony import */


    var _course_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./course-routing.module */
    "./src/app/modules/course/course-routing.module.ts");
    /* harmony import */


    var _modules_modules_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./modules/modules.component */
    "./src/app/modules/course/modules/modules.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/modules/course/sidebar/sidebar.component.ts");
    /* harmony import */


    var _sidebar_button_sidebar_button_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./sidebar-button/sidebar-button.component */
    "./src/app/modules/course/sidebar-button/sidebar-button.component.ts");
    /* harmony import */


    var _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./leaderboard/leaderboard.component */
    "./src/app/modules/course/leaderboard/leaderboard.component.ts");
    /* harmony import */


    var _modulesManagement_create_module_create_module_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./modulesManagement/create-module/create-module.component */
    "./src/app/modules/course/modulesManagement/create-module/create-module.component.ts");
    /* harmony import */


    var _modulesManagement_edit_module_edit_module_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./modulesManagement/edit-module/edit-module.component */
    "./src/app/modules/course/modulesManagement/edit-module/edit-module.component.ts");

    var CourseModule = function CourseModule() {
      _classCallCheck(this, CourseModule);
    };

    CourseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"], _modules_modules_component__WEBPACK_IMPORTED_MODULE_7__["ModulesComponent"], _modulesManagement_create_module_create_module_component__WEBPACK_IMPORTED_MODULE_11__["CreateModuleComponent"], _modulesManagement_edit_module_edit_module_component__WEBPACK_IMPORTED_MODULE_12__["EditModuleComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_8__["SidebarComponent"], _sidebar_button_sidebar_button_component__WEBPACK_IMPORTED_MODULE_9__["SidebarButtonComponent"], _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_10__["LeaderboardComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _course_routing_module__WEBPACK_IMPORTED_MODULE_6__["CourseRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"]]
    })], CourseModule);
    /***/
  },

  /***/
  "./src/app/modules/course/dashboard/dashboard.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/modules/course/dashboard/dashboard.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesCourseDashboardDashboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".flex-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  -webkit-box-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n          justify-content: center;\n}\n\n.flex-item {\n  align-self: center;\n  margin: 10px;\n}\n\n.card {\n  -webkit-transition: 0.7s;\n  transition: 0.7s;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.card:hover {\n  -webkit-transition: 0.7s;\n  transition: 0.7s;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.8);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3Vyc2UvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcSmltbXlcXERvY3VtZW50c1xcR2l0SHViXFxsbXMtZml1LWZiLWNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcY291cnNlXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jb3Vyc2UvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLG9CQUFBO0VBQUEsYUFBQTtFQUNBLDRCQUFBO0VBQUEsNkJBQUE7VUFBQSxzQkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7RUFDQSx3QkFBQTtVQUFBLHVCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLHdCQUFBO0VBQUEsZ0JBQUE7RUFDQSw0RUFBQTtBQ0NKOztBREVBO0VBQ0ksd0JBQUE7RUFBQSxnQkFBQTtFQUNBLDJFQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvdXJzZS9kYXNoYm9hcmQvZGFzaGJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXgtY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcblxyXG4uZmxleC1pdGVtIHtcclxuICAgIGFsaWduLXNlbGY6IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTBweDtcclxufVxyXG5cclxuLmNhcmQge1xyXG4gICAgdHJhbnNpdGlvbjogMC43cztcclxuICAgIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICAgIHRyYW5zaXRpb246IDAuN3M7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuOCksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuOCk7XHJcbn0iLCIuZmxleC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbn1cblxuLmZsZXgtaXRlbSB7XG4gIGFsaWduLXNlbGY6IGNlbnRlcjtcbiAgbWFyZ2luOiAxMHB4O1xufVxuXG4uY2FyZCB7XG4gIHRyYW5zaXRpb246IDAuN3M7XG4gIGJveC1zaGFkb3c6IDAgNHB4IDhweCAwIHJnYmEoMCwgMCwgMCwgMC4yKSwgMCA2cHggMjBweCAwIHJnYmEoMCwgMCwgMCwgMC4xOSk7XG59XG5cbi5jYXJkOmhvdmVyIHtcbiAgdHJhbnNpdGlvbjogMC43cztcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjgpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjgpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/modules/course/dashboard/dashboard.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/course/dashboard/dashboard.component.ts ***!
    \*****************************************************************/

  /*! exports provided: DashboardComponent */

  /***/
  function srcAppModulesCourseDashboardDashboardComponentTs(module, __webpack_exports__, __webpack_require__) {
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


    var _app_core_services_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/core/services/course.service */
    "./src/app/core/services/course.service.ts");
    /* harmony import */


    var src_app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/core/services/student-course.service */
    "./src/app/core/services/student-course.service.ts");
    /* harmony import */


    var _app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/lib/index.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_5__);

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(studentCourseService, courseService, authService) {
        _classCallCheck(this, DashboardComponent);

        this.studentCourseService = studentCourseService;
        this.courseService = courseService;
        this.authService = authService;
        this.courses = [];
        this.courseDrop = false;
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currentStudent = this.authService.currentUserValue;

          if (this.currentStudent) {
            this.tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_5___default()(this.currentStudent.token);
            this.studentId = this.tokenPayload.id; //this.hasCourses = this.asyncFetchStudentCourses(this.studentId);

            this.listCourses = this.studentCourseService.getCoursesByStudentId(this.studentId);
            console.log(this.studentId);
          }
        }
      }, {
        key: "fetchStudentCourses",
        value: function fetchStudentCourses(studentId) {
          var _this = this;

          //let returnValue: Boolean;
          return new Promise(function (resolve, reject) {
            _this.studentCourseService.getCoursesByStudentId(studentId).subscribe(function (data) {
              for (var i = 0; i < data.length; i++) {
                if (data[i]) {
                  if (data[i].enrollment_status == "enrolled") {
                    _this.courses.push(data[i]);

                    console.log("Enrolled");
                    console.log(data[i]);
                  } else {
                    console.log("Not enrolled");
                    console.log(data[i]);
                  }

                  if (i == data.length) {
                    console.log("got data");
                    resolve(true);
                  } //returnValue = true;

                } else {
                  console.log("got no data"); //returnValue = false;

                  reject(false);
                }
              } //this.hasCourses = resolve('resolved');

            }, function (error) {
              reject(error);
              console.log("error: " + error);
            });
          }).then(function (res) {
            console.log("resthen: " + res);
            return true;
          }).catch(function (error) {
            console.log('ERROR: ' + error);
            return false;
          }); //return returnValue;
        }
      }, {
        key: "asyncFetchStudentCourses",
        value: function asyncFetchStudentCourses(studentId) {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log("calling");
                    _context.next = 3;
                    return this.fetchStudentCourses(studentId);

                  case 3:
                    this.hasCourses = _context.sent;
                    console.log("resasync: " + this.hasCourses);

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "dropCourse",
        value: function dropCourse(courseId) {
          var _this2 = this;

          this.courseService.getCourseById(courseId).subscribe(function (course) {
            _this2.course = course;
          });
          var r = confirm("Drop the course? Are you sure?");

          if (r) {
            this.studentCourseService.declineStudentEnrollment(this.studentId, courseId).subscribe(function () {
              alert("Dropped the course");

              _this2.courseService.updateCourseSeats(courseId, _this2.course.seats + 1).subscribe(function () {
                console.log("incremented seats by 1: " + (_this2.course.seats + 1));
              });
            });
          }
        }
      }, {
        key: "toggleDropCourse",
        value: function toggleDropCourse() {
          if (this.courseDrop == false) {
            this.courseDrop = true;
          } else {
            this.courseDrop = false;
          }
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ctorParameters = function () {
      return [{
        type: src_app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_3__["StudentCourseService"]
      }, {
        type: _app_core_services_course_service__WEBPACK_IMPORTED_MODULE_2__["CourseService"]
      }, {
        type: _app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }];
    };

    DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dashboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dashboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/course/dashboard/dashboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dashboard.component.scss */
      "./src/app/modules/course/dashboard/dashboard.component.scss")).default]
    })], DashboardComponent);
    /***/
  },

  /***/
  "./src/app/modules/course/leaderboard/leaderboard.component.scss":
  /*!***********************************************************************!*\
    !*** ./src/app/modules/course/leaderboard/leaderboard.component.scss ***!
    \***********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesCourseLeaderboardLeaderboardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".flexbox-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  flex-wrap: wrap;\n  /*height: 50px;*/\n  width: 600px;\n  padding: 20px;\n  justify-content: space-around;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #ececec;\n  border-left: solid black 1px;\n  border-right: solid black 1px;\n  border-bottom: dotted gray 1px;\n}\n\n.flexbox-row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.flexbox-column {\n  background-color: #d9deff;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: horizontal;\n  -webkit-box-direction: normal;\n          flex-direction: row;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.flexbox-cell {\n  width: 100px;\n  text-align: center;\n}\n\n/*\n.flexbox-cell.left {\n    text-align: left;\n}\n\n.flexbox-cell.center {\n    text-align: center;\n}\n\n.flexbox-cell.right {\n    text-align: right;\n}\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3Vyc2UvbGVhZGVyYm9hcmQvQzpcXFVzZXJzXFxKaW1teVxcRG9jdW1lbnRzXFxHaXRIdWJcXGxtcy1maXUtZmItY2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxjb3Vyc2VcXGxlYWRlcmJvYXJkXFxsZWFkZXJib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jb3Vyc2UvbGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw4QkFBQTtFQUFBLDZCQUFBO1VBQUEsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7VUFBQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FDQ0o7O0FERUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxlQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0Esb0JBQUE7RUFBQSxhQUFBO0VBQ0EsOEJBQUE7RUFBQSw2QkFBQTtVQUFBLG1CQUFBO0VBQ0EsOEJBQUE7VUFBQSw2QkFBQTtFQUNBLHlCQUFBO1VBQUEsbUJBQUE7QUNDSjs7QURDQTtFQUNJLFlBQUE7RUFDQSxrQkFBQTtBQ0VKOztBREFBOzs7Ozs7Ozs7Ozs7Q0FBQSIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY291cnNlL2xlYWRlcmJvYXJkL2xlYWRlcmJvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZsZXhib3gtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdzsgLy9Nb2RpZmllZCBmcm9tIGNvbHVtblxyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgLypoZWlnaHQ6IDUwcHg7Ki9cclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDsgLy9Nb2RpZmllZCBmcm9tIHNwYWNlLWV2ZW5seVxyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyMzYsIDIzNiwgMjM2KTtcclxuICAgIGJvcmRlci1sZWZ0OiBzb2xpZCBibGFjayAxcHg7XHJcbiAgICBib3JkZXItcmlnaHQ6IHNvbGlkIGJsYWNrIDFweDtcclxuICAgIGJvcmRlci1ib3R0b206IGRvdHRlZCBncmF5IDFweDtcclxufVxyXG4vLyBMZWFkZXJib2FyZCBDU1NcclxuLmZsZXhib3gtcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZmxleGJveC1jb2x1bW4ge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZGVmZjtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcbi5mbGV4Ym94LWNlbGx7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLypcclxuLmZsZXhib3gtY2VsbC5sZWZ0IHtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5mbGV4Ym94LWNlbGwuY2VudGVyIHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXhib3gtY2VsbC5yaWdodCB7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG4qL1xyXG5cclxuXHJcblxyXG4iLCIuZmxleGJveC1jb250YWluZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIC8qaGVpZ2h0OiA1MHB4OyovXG4gIHdpZHRoOiA2MDBweDtcbiAgcGFkZGluZzogMjBweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VjZWM7XG4gIGJvcmRlci1sZWZ0OiBzb2xpZCBibGFjayAxcHg7XG4gIGJvcmRlci1yaWdodDogc29saWQgYmxhY2sgMXB4O1xuICBib3JkZXItYm90dG9tOiBkb3R0ZWQgZ3JheSAxcHg7XG59XG5cbi5mbGV4Ym94LXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mbGV4Ym94LWNvbHVtbiB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWRlZmY7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uZmxleGJveC1jZWxsIHtcbiAgd2lkdGg6IDEwMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qXG4uZmxleGJveC1jZWxsLmxlZnQge1xuICAgIHRleHQtYWxpZ246IGxlZnQ7XG59XG5cbi5mbGV4Ym94LWNlbGwuY2VudGVyIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5mbGV4Ym94LWNlbGwucmlnaHQge1xuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xufVxuKi8iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/course/leaderboard/leaderboard.component.ts":
  /*!*********************************************************************!*\
    !*** ./src/app/modules/course/leaderboard/leaderboard.component.ts ***!
    \*********************************************************************/

  /*! exports provided: LeaderboardComponent */

  /***/
  function srcAppModulesCourseLeaderboardLeaderboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LeaderboardComponent", function () {
      return LeaderboardComponent;
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


    var src_app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/services/student-course.service */
    "./src/app/core/services/student-course.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LeaderboardComponent =
    /*#__PURE__*/
    function () {
      function LeaderboardComponent(studentCourseService, router, route) {
        _classCallCheck(this, LeaderboardComponent);

        this.studentCourseService = studentCourseService;
        this.router = router;
        this.route = route;
        this.students = [];
      }

      _createClass(LeaderboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.route.params.subscribe(function (params) {
            _this3.courseId = params.id;
            console.log("param id is: " + params.id);
          });
          this.fetchStudents(this.courseId);
        } // Gets students from course ID

      }, {
        key: "fetchStudents",
        value: function fetchStudents(courseId) {
          var _this4 = this;

          console.log("fetching students");
          this.studentCourseService.getStudentsByCourseId(courseId).subscribe(function (data) {
            _this4.students = data;
            console.log(data);
          });
        }
      }]);

      return LeaderboardComponent;
    }();

    LeaderboardComponent.ctorParameters = function () {
      return [{
        type: src_app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_2__["StudentCourseService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }];
    };

    LeaderboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-leaderboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./leaderboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/course/leaderboard/leaderboard.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./leaderboard.component.scss */
      "./src/app/modules/course/leaderboard/leaderboard.component.scss")).default]
    })], LeaderboardComponent);
    /***/
  },

  /***/
  "./src/app/modules/course/modules/modules.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/modules/course/modules/modules.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesCourseModulesModulesComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".flexbox-row {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  flex-wrap: wrap;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: center;\n          align-items: center;\n}\n\n.flexbox-container {\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  flex-wrap: wrap;\n  /*height: 50px;*/\n  width: 600px;\n  padding: 20px;\n  -webkit-box-pack: space-evenly;\n          justify-content: space-evenly;\n  -webkit-box-align: center;\n          align-items: center;\n  background-color: #ececec;\n  border-left: solid black 1px;\n  border-right: solid black 1px;\n  border-bottom: dotted gray 1px;\n}\n\n.flexbox-options {\n  margin-bottom: 15px;\n  align-self: flex-end;\n}\n\n.flexbox-item {\n  align-self: stretch;\n  background-color: transparent;\n  border: solid #afafaf 1px;\n}\n\n.flexbox-item-module-actions {\n  margin-top: 15px;\n  align-self: flex-end;\n  background-color: transparent;\n  border: solid black 1px;\n}\n\n.flexbox-subcontainer {\n  margin-top: 15px;\n  align-self: flex-start;\n  display: -webkit-box;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n          flex-direction: column;\n  width: 560px;\n  -webkit-box-pack: center;\n          justify-content: center;\n  -webkit-box-align: start;\n          align-items: flex-start;\n  background-color: #fafafa;\n}\n\n.flexbox-module-options {\n  float: right;\n}\n\n.flexbox-links {\n  align-self: stretch;\n}\n\n.flexbox-links .flexbox-links-inner {\n  align-self: stretch;\n  border: solid black 1px;\n}\n\n.flexbox-links .flexbox-links-inner:hover {\n  background-color: #d9deff;\n}\n\n.flexbox-resources {\n  align-self: stretch;\n}\n\n.flexbox-resources .flexbox-resources-inner {\n  align-self: stretch;\n  border: solid black 1px;\n}\n\n.flexbox-resources .flexbox-resources-inner:hover {\n  background-color: #d9deff;\n}\n\n.flexbox-quizzes {\n  align-self: stretch;\n  border: solid black 1px;\n}\n\n.flexbox-quizzes:hover {\n  background-color: #d9deff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3Vyc2UvbW9kdWxlcy9DOlxcVXNlcnNcXEppbW15XFxEb2N1bWVudHNcXEdpdEh1YlxcbG1zLWZpdS1mYi1jbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXGNvdXJzZVxcbW9kdWxlc1xcbW9kdWxlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jb3Vyc2UvbW9kdWxlcy9tb2R1bGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksb0JBQUE7RUFBQSxhQUFBO0VBQ0EsNEJBQUE7RUFBQSw2QkFBQTtVQUFBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0FDREo7O0FESUE7RUFDSSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO1VBQUEsNkJBQUE7RUFDQSx5QkFBQTtVQUFBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSw0QkFBQTtFQUNBLDZCQUFBO0VBQ0EsOEJBQUE7QUNESjs7QURJQTtFQUNJLG1CQUFBO0VBQ0Esb0JBQUE7QUNESjs7QURJQTtFQUNJLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSx5QkFBQTtBQ0RKOztBREtBO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7QUNGSjs7QURLQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxvQkFBQTtFQUFBLGFBQUE7RUFDQSw0QkFBQTtFQUFBLDZCQUFBO1VBQUEsc0JBQUE7RUFDQSxZQUFBO0VBQ0Esd0JBQUE7VUFBQSx1QkFBQTtFQUNBLHdCQUFBO1VBQUEsdUJBQUE7RUFDQSx5QkFBQTtBQ0ZKOztBREtBO0VBQ0ksWUFBQTtBQ0ZKOztBREtBO0VBQ0ksbUJBQUE7QUNGSjs7QURJSTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7QUNGUjs7QURJUTtFQUNJLHlCQW5FQztBQ2lFYjs7QURPQTtFQUNJLG1CQUFBO0FDSko7O0FETUk7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0FDSlI7O0FETVE7RUFDSSx5QkFoRkM7QUM0RWI7O0FEU0E7RUFDSSxtQkFBQTtFQUNBLHVCQUFBO0FDTko7O0FEU0E7RUFDSSx5QkEzRlM7QUNxRmIiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvdXJzZS9tb2R1bGVzL21vZHVsZXMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIkYmFzZS1jb2xvcjogI2Q5ZGVmZjtcclxuXHJcbi5mbGV4Ym94LXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXhib3gtY29udGFpbmVye1xyXG4gICAgZGlzcGxheTpmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIC8qaGVpZ2h0OiA1MHB4OyovXHJcbiAgICB3aWR0aDogNjAwcHg7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIGJsYWNrIDFweDtcclxuICAgIGJvcmRlci1yaWdodDogc29saWQgYmxhY2sgMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogZG90dGVkIGdyYXkgMXB4O1xyXG59XHJcblxyXG4uZmxleGJveC1vcHRpb25zIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxufVxyXG5cclxuLmZsZXhib3gtaXRlbSB7XHJcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IHNvbGlkIHJnYigxNzUsIDE3NSwgMTc1KSAxcHg7XHJcbn1cclxuXHJcblxyXG4uZmxleGJveC1pdGVtLW1vZHVsZS1hY3Rpb25zIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbn1cclxuXHJcbi5mbGV4Ym94LXN1YmNvbnRhaW5lciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgd2lkdGg6IDU2MHB4O1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigyNTAsIDI1MCwgMjUwKTtcclxufVxyXG5cclxuLmZsZXhib3gtbW9kdWxlLW9wdGlvbnMge1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uZmxleGJveC1saW5rc3tcclxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcblxyXG4gICAgLmZsZXhib3gtbGlua3MtaW5uZXIge1xyXG4gICAgICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICAgICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcblxyXG4gICAgICAgICY6aG92ZXIge1xyXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mbGV4Ym94LXJlc291cmNlcyB7XHJcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG5cclxuICAgIC5mbGV4Ym94LXJlc291cmNlcy1pbm5lciB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZsZXhib3gtcXVpenplcyB7XHJcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XHJcbn1cclxuXHJcbi5mbGV4Ym94LXF1aXp6ZXM6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtY29sb3I7XHJcbn1cclxuXHJcbiIsIi5mbGV4Ym94LXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mbGV4Ym94LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLypoZWlnaHQ6IDUwcHg7Ki9cbiAgd2lkdGg6IDYwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIGJsYWNrIDFweDtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCBibGFjayAxcHg7XG4gIGJvcmRlci1ib3R0b206IGRvdHRlZCBncmF5IDFweDtcbn1cblxuLmZsZXhib3gtb3B0aW9ucyB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xufVxuXG4uZmxleGJveC1pdGVtIHtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogc29saWQgI2FmYWZhZiAxcHg7XG59XG5cbi5mbGV4Ym94LWl0ZW0tbW9kdWxlLWFjdGlvbnMge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xufVxuXG4uZmxleGJveC1zdWJjb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNTYwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cblxuLmZsZXhib3gtbW9kdWxlLW9wdGlvbnMge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5mbGV4Ym94LWxpbmtzIHtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbn1cbi5mbGV4Ym94LWxpbmtzIC5mbGV4Ym94LWxpbmtzLWlubmVyIHtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XG59XG4uZmxleGJveC1saW5rcyAuZmxleGJveC1saW5rcy1pbm5lcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWRlZmY7XG59XG5cbi5mbGV4Ym94LXJlc291cmNlcyB7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG59XG4uZmxleGJveC1yZXNvdXJjZXMgLmZsZXhib3gtcmVzb3VyY2VzLWlubmVyIHtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XG59XG4uZmxleGJveC1yZXNvdXJjZXMgLmZsZXhib3gtcmVzb3VyY2VzLWlubmVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZGVmZjtcbn1cblxuLmZsZXhib3gtcXVpenplcyB7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xufVxuXG4uZmxleGJveC1xdWl6emVzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZGVmZjtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/modules/course/modules/modules.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/modules/course/modules/modules.component.ts ***!
    \*************************************************************/

  /*! exports provided: ModulesComponent */

  /***/
  function srcAppModulesCourseModulesModulesComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModulesComponent", function () {
      return ModulesComponent;
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


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _app_core_services_pdf_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/core/services/pdf.service */
    "./src/app/core/services/pdf.service.ts");
    /* harmony import */


    var _app_core_services_video_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/core/services/video.service */
    "./src/app/core/services/video.service.ts");
    /* harmony import */


    var _app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @app/core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");
    /* harmony import */


    var _app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @app/core/services/student-course.service */
    "./src/app/core/services/student-course.service.ts");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! jwt-decode */
    "./node_modules/jwt-decode/lib/index.js");
    /* harmony import */


    var jwt_decode__WEBPACK_IMPORTED_MODULE_10___default =
    /*#__PURE__*/
    __webpack_require__.n(jwt_decode__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var src_app_core_services_module_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! src/app/core/services/module.service */
    "./src/app/core/services/module.service.ts");

    var ModulesComponent =
    /*#__PURE__*/
    function () {
      function ModulesComponent(moduleService, videoService, pdfService, authenticationService, studentCourseService, fb, router, route, sanitizer, modalService) {
        var _this5 = this;

        _classCallCheck(this, ModulesComponent);

        this.moduleService = moduleService;
        this.videoService = videoService;
        this.pdfService = pdfService;
        this.authenticationService = authenticationService;
        this.studentCourseService = studentCourseService;
        this.fb = fb;
        this.router = router;
        this.route = route;
        this.sanitizer = sanitizer;
        this.modalService = modalService;
        this.modules = [];
        this.moduleLocked = [];
        this.linksFromDB = new Array();
        this.links = new Array();
        this.safeLinks = new Map();
        this.pdfsFromDB = new Array();
        this.pdfs = new Array();
        this.safePdfs = new Map();
        this.resources = ['pdf1', 'pdf2', 'worddoc1'];
        this.quizzes = ['quiz1', 'quiz2', 'quiz3'];
        this.toggleContent = [];
        this.moduleVideosFetched = [];
        this.modulePDFsFetched = [];
        this.fileToUpload = null;
        this.contentObject = {
          course_id: 0,
          course_name: "",
          module_id: 0,
          module_number: 0,
          module_title: "",
          lockedUntil: "",
          link: ""
        };
        this.authenticationService.currentUser.subscribe(function (x) {
          return _this5.currentUser = x;
        });
        this.makeVideoForms();
      }

      _createClass(ModulesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.route.params.subscribe(function (params) {
            _this6.courseId = params.id;
            console.log("param id is: " + params.id);
          });

          if (!this.currentUser) {
            return;
          }

          this.todayDate = new Date(); //console.log(this.todayDate.toLocaleString());

          this.tokenPayload = jwt_decode__WEBPACK_IMPORTED_MODULE_10___default()(this.currentUser.token);
          this.isAdmin = this.tokenPayload.role === "admin";
          this.isInstructor = this.tokenPayload.role === "instructor";
          this.isStudent = this.tokenPayload.role === "student";
          this.fetchModules(this.courseId);
          this.studentCourseService.getStudentsByCourseId(this.courseId).subscribe(function (data) {
            data.forEach(function (val, i, arr) {
              if (val.student_id == _this6.tokenPayload.id) {
                //console.log("Got student: " + JSON.stringify(val));
                _this6.points = val.points;
                console.log("Points: " + _this6.points);
                document.getElementById('progressbar').style.width = _this6.points + "%";
              }
            });
          });
        } // BEGIN UTILITY FUNCTIONS

      }, {
        key: "makeVideoForms",
        value: function makeVideoForms() {
          this.videoForm = this.fb.group({
            link: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.updateVideoForm = this.fb.group({
            linkInput: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.pdfForm = this.fb.group({
            pdf: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
          this.updatePdfForm = this.fb.group({
            pdf: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
          });
        }
      }, {
        key: "pushLinksToArray",
        value: function pushLinksToArray(linksFromDB, links) {
          linksFromDB.forEach(function (val, i, arr) {
            links.push({
              link: arr[i].link,
              module_id: arr[i].module_id,
              video_id: arr[i].video_id
            }); //console.log("Links array: " + JSON.stringify(links));
          });
        }
      }, {
        key: "updateVideoUrl",
        value: function updateVideoUrl(linksArr, moduleId) {
          var _this7 = this;

          //console.log("updateVideoUrl");
          //console.log("linksArr size: " + linksArr.length);
          //this.moduleVideosFetched[moduleId] = true;
          linksArr.forEach(function (val, i, arr) {
            if (val.module_id == moduleId) {
              _this7.moduleVideosFetched[moduleId] = true; //console.log("val: " + i + " " + JSON.stringify(val));

              var id = val.link.substring(32, 43);
              var videoUrl;
              var url;
              var videoObject = {};
              url = 'https://www.youtube.com/embed/' + id;
              videoUrl = _this7.sanitizer.bypassSecurityTrustResourceUrl(url);
              videoObject = {
                videoUrl: videoUrl,
                video_id: val.video_id,
                url: val.link
              };

              if (_this7.safeLinks.get(moduleId)) {
                _this7.safeLinks.get(moduleId).push(videoObject);
              } else {
                _this7.safeLinks.set(moduleId, [videoObject]);
              } //console.log("safeLinks: " + JSON.stringify(this.safeLinks.get(moduleId)));
              //console.log("safeLinks size: " + this.safeLinks.size);

            }
          });
        }
      }, {
        key: "pushPDFsToArray",
        value: function pushPDFsToArray(pdfsFromDB, pdfs) {
          pdfsFromDB.forEach(function (val, i, arr) {
            //console.log("val : " + i + " " + JSON.stringify(val));
            var pdfData = val.pdf.data; //console.log(Array.isArray(pdfData));

            var myBuffer = Uint8Array.from(pdfData); //console.log(myBuffer);

            var blob = new Blob([myBuffer.buffer], {
              type: 'application/pdf'
            }); //application/octet-stream
            //console.log(blob.size);
            //console.log(blob);

            pdfs.push({
              module_id: val.module_id,
              pdf_id: val.pdf_id,
              pdf: blob
            }); //console.log("pdfs: " + JSON.stringify(pdfs));
          });
        }
      }, {
        key: "updatePdfData",
        value: function updatePdfData(pdfsArr, moduleId) {
          var _this8 = this;

          //console.log("pdfsArr size: " + pdfsArr.length);
          //this.modulePDFsFetched[moduleId] = true;
          pdfsArr.forEach(function (val, i, arr) {
            if (val.module_id == moduleId) {
              _this8.modulePDFsFetched[moduleId] = true; //console.log("val: " + i + " " + JSON.stringify(val));

              var pdfObject = {};
              var cleanPDF;
              var pdfURL = URL.createObjectURL(val.pdf); //console.log(pdfURL);

              cleanPDF = _this8.sanitizer.bypassSecurityTrustResourceUrl(pdfURL);
              pdfObject = {
                pdf_id: val.pdf_id,
                pdf: cleanPDF
              };

              if (_this8.safePdfs.get(moduleId)) {
                _this8.safePdfs.get(moduleId).push(pdfObject);
              } else {
                _this8.safePdfs.set(moduleId, [pdfObject]);
              } //console.log("safePdfs: " + JSON.stringify(this.safePdfs.get(moduleId)));
              //console.log("safePdfs size: " + this.safePdfs.size);

            }
          });
        }
      }, {
        key: "open",
        value: function open(content) {
          this.modalService.open(content, {
            size: 'lg',
            centered: true
          });
        }
      }, {
        key: "openModule",
        value: function openModule(index) {
          if (this.toggleContent[index]) {
            //console.log("Closing module content");
            this.toggleContent[index] = false;
          } else {
            //console.log("Opening module content");
            this.toggleContent[index] = true;
          }
        }
      }, {
        key: "openUpdateVideo",
        value: function openUpdateVideo(content, videoUrl) {
          this.modalService.open(content, {
            size: 'lg',
            centered: true
          });
          this.updateVideoForm.get('linkInput').setValue(videoUrl);
        }
      }, {
        key: "openUpdatePDF",
        value: function openUpdatePDF(content, pdf) {
          this.modalService.open(content, {
            size: 'lg',
            centered: true
          });
          this.updatePdfForm.get('pdf').setValue(pdf);
        } // END UTILITY FUNCTIONS
        // BEGIN MODULES CRUD

      }, {
        key: "createModule",
        value: function createModule(courseId) {
          this.router.navigate(["courses/".concat(courseId, "/create-module")]);
        }
      }, {
        key: "fetchModules",
        value: function fetchModules(courseId) {
          var _this9 = this;

          this.moduleService.getModulesByCourseId(courseId).subscribe(function (data) {
            data.forEach(function (moduleO, i, arr) {
              var lockedUntil = new Date(moduleO.lockedUntil.toString());
              _this9.moduleLocked[i] = false;

              if (_this9.todayDate < lockedUntil) {
                //console.log(this.todayDate.toLocaleDateString() + " < " + JSON.stringify(moduleO));
                _this9.moduleLocked[i] = true;
              }

              moduleO.lockedUntil = lockedUntil.toLocaleDateString();
            });
            _this9.modules = data; //console.log(this.modules);

            _this9.fetchVideos(courseId, data);

            _this9.fetchPdfs(courseId, data);
          });
        }
      }, {
        key: "editModule",
        value: function editModule(courseId, moduleId) {
          this.router.navigate(["courses/".concat(courseId, "/edit-module/").concat(moduleId)]);
        }
      }, {
        key: "deleteModule",
        value: function deleteModule(moduleId, moduleNumber) {
          var response = confirm("Delete Module ".concat(moduleNumber, ": Are you sure?"));

          if (response == true) {
            this.moduleService.deleteModule(moduleId).subscribe(function () {
              console.log("Deleted module " + moduleId); //this.modules.pop();
            });
            var item = this.modules.find(function (item) {
              return item.id === moduleId;
            });
            this.modules.splice(this.modules.indexOf(item));
          }
        } // END MODULES CRUD
        // BEGIN VIDEOS CRUD

      }, {
        key: "addVideo",
        value: function addVideo(link, moduleId) {
          this.videoService.addVideo(link, moduleId).subscribe(function () {
            alert("Added video");
          });
        }
      }, {
        key: "updateVideo",
        value: function updateVideo(link, videoId) {
          //console.log("link: " + link + " " + "videoId: " + videoId);
          this.videoService.updateVideo(link, videoId).subscribe(function () {
            alert("Updated video");
          });
        }
      }, {
        key: "deleteVideo",
        value: function deleteVideo(videoId) {
          //console.log("Delete video: " + videoId);
          var r = confirm("Delete video: are you sure?");

          if (r) {
            this.videoService.deleteVideo(videoId).subscribe(function () {
              alert("Deleted video");
            });
          }
        }
      }, {
        key: "fetchVideos",
        value: function fetchVideos(courseId, modules) {
          var _this10 = this;

          console.log("Fetching content: " + courseId);
          this.videoService.fetchVideos(courseId).subscribe(function (data) {
            _this10.linksFromDB = data; //console.log("linksFromDB: " + JSON.stringify(this.linksFromDB));

            _this10.pushLinksToArray(data, _this10.links);

            modules.forEach(function (val, i, arr) {
              var moduleval = val;

              for (var _i = 0; _i < data.length; _i++) {
                var _val = data[_i];

                if (_val.module_id == moduleval.module_id) {
                  if (_this10.moduleVideosFetched[_val.module_id] == true) {
                    console.log("Modules videos fetched true");
                    break;
                  } else {
                    //console.log(val.module_id);
                    _this10.updateVideoUrl(_this10.links, _val.module_id);
                  }
                }
              }
            });
          });
        } // END VIDEOS CRUD
        // BEGIN PDFS CRUD

      }, {
        key: "handleFileInput",
        value: function handleFileInput(event) {
          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.pdfForm.get('pdf').setValue(file);
          }
        }
      }, {
        key: "handleFileInputUpdate",
        value: function handleFileInputUpdate(event) {
          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.updatePdfForm.get('pdf').setValue(file);
          }
        }
      }, {
        key: "addPdf",
        value: function addPdf(moduleId) {
          //console.log("fileName: " + this.pdfForm.get('pdf').value.name + " fileSize: " + this.pdfForm.get('pdf').value.size);
          var formData = new FormData();
          formData.append('fileKey', this.pdfForm.get('pdf').value);
          formData.append('fileKey', moduleId); //console.log(formData.getAll('fileKey'));

          this.pdfService.addPDF(formData).subscribe(function (res) {
            console.log(res);
            alert("Added PDF!");
          }, function (err) {
            return console.log(err);
          });
        }
      }, {
        key: "fetchPdfs",
        value: function fetchPdfs(courseId, modules) {
          var _this11 = this;

          this.pdfService.fetchPDFs(courseId).subscribe(function (data) {
            //console.log(data);
            _this11.pdfsFromDB = data;

            _this11.pushPDFsToArray(data, _this11.pdfs);

            modules.forEach(function (val, i, arr) {
              var moduleval = val;

              for (var _i2 = 0; _i2 < data.length; _i2++) {
                var _val2 = data[_i2];

                if (_val2.module_id == moduleval.module_id) {
                  if (_this11.modulePDFsFetched[_val2.module_id] == true) {
                    console.log("Modules pdfs fetched true");
                    break;
                  } else {
                    //console.log(val.module_id);
                    _this11.updatePdfData(_this11.pdfs, _val2.module_id);
                  }
                }
              }
            });
          });
        }
      }, {
        key: "updatePDF",
        value: function updatePDF(pdfId, moduleId) {
          //console.log("updatePDF");
          var formData = new FormData();
          formData.append('fileKey', this.updatePdfForm.get('pdf').value);
          formData.append('fileKey', moduleId);
          this.pdfService.updatePDF(pdfId, formData).subscribe(function () {
            alert("Updated pdf");
          });
        }
      }, {
        key: "deletePDF",
        value: function deletePDF(pdfId) {
          console.log("PDF ID: " + pdfId);
          var r = confirm("Delete pdf: Are you sure?");

          if (r) {
            this.pdfService.deletePDF(pdfId).subscribe(function () {
              alert("Deleted pdf");
            });
          }
        }
      }]);

      return ModulesComponent;
    }();

    ModulesComponent.ctorParameters = function () {
      return [{
        type: src_app_core_services_module_service__WEBPACK_IMPORTED_MODULE_11__["ModuleService"]
      }, {
        type: _app_core_services_video_service__WEBPACK_IMPORTED_MODULE_7__["VideoService"]
      }, {
        type: _app_core_services_pdf_service__WEBPACK_IMPORTED_MODULE_6__["PdfService"]
      }, {
        type: _app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]
      }, {
        type: _app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_9__["StudentCourseService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }, {
        type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbModal"]
      }];
    };

    ModulesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-modules',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./modules.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/course/modules/modules.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./modules.component.scss */
      "./src/app/modules/course/modules/modules.component.scss")).default]
    })], ModulesComponent);
    /***/
  },

  /***/
  "./src/app/modules/course/modulesManagement/create-module/create-module.component.scss":
  /*!*********************************************************************************************!*\
    !*** ./src/app/modules/course/modulesManagement/create-module/create-module.component.scss ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesCourseModulesManagementCreateModuleCreateModuleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY291cnNlL21vZHVsZXNNYW5hZ2VtZW50L2NyZWF0ZS1tb2R1bGUvY3JlYXRlLW1vZHVsZS5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/modules/course/modulesManagement/create-module/create-module.component.ts":
  /*!*******************************************************************************************!*\
    !*** ./src/app/modules/course/modulesManagement/create-module/create-module.component.ts ***!
    \*******************************************************************************************/

  /*! exports provided: CreateModuleComponent */

  /***/
  function srcAppModulesCourseModulesManagementCreateModuleCreateModuleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateModuleComponent", function () {
      return CreateModuleComponent;
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


    var _app_core_services_module_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/services/module.service */
    "./src/app/core/services/module.service.ts");

    var CreateModuleComponent =
    /*#__PURE__*/
    function () {
      function CreateModuleComponent(router, route, moduleService, fb) {
        _classCallCheck(this, CreateModuleComponent);

        this.router = router;
        this.route = route;
        this.moduleService = moduleService;
        this.fb = fb;
        this.labels = ['number', 'title', 'lockedUntil'];
        this.moduleForm = this.fb.group({
          number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          lockedUntil: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(CreateModuleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.route.params.subscribe(function (params) {
            _this12.courseId = params.id;
            console.log("params id create: " + params.id);
          });
        }
      }, {
        key: "addModule",
        value: function addModule(number, title, lockedUntil) {
          if (this.moduleForm.valid) this.moduleService.addModule(this.courseId, number, title, lockedUntil).subscribe(function () {
            //this.router.navigate(['/admin']);
            alert("Added module successfully!");
          });else alert('Missing required fields!');
        }
      }]);

      return CreateModuleComponent;
    }();

    CreateModuleComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _app_core_services_module_service__WEBPACK_IMPORTED_MODULE_4__["ModuleService"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    CreateModuleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-create-module',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./create-module.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/course/modulesManagement/create-module/create-module.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./create-module.component.scss */
      "./src/app/modules/course/modulesManagement/create-module/create-module.component.scss")).default]
    })], CreateModuleComponent);
    /***/
  },

  /***/
  "./src/app/modules/course/modulesManagement/edit-module/edit-module.component.scss":
  /*!*****************************************************************************************!*\
    !*** ./src/app/modules/course/modulesManagement/edit-module/edit-module.component.scss ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesCourseModulesManagementEditModuleEditModuleComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY291cnNlL21vZHVsZXNNYW5hZ2VtZW50L2VkaXQtbW9kdWxlL2VkaXQtbW9kdWxlLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/course/modulesManagement/edit-module/edit-module.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/modules/course/modulesManagement/edit-module/edit-module.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: EditModuleComponent */

  /***/
  function srcAppModulesCourseModulesManagementEditModuleEditModuleComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditModuleComponent", function () {
      return EditModuleComponent;
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


    var _app_core_services_module_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/services/module.service */
    "./src/app/core/services/module.service.ts");

    var EditModuleComponent =
    /*#__PURE__*/
    function () {
      function EditModuleComponent(moduleService, router, route, fb) {
        _classCallCheck(this, EditModuleComponent);

        this.moduleService = moduleService;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.CreateForm();
      }

      _createClass(EditModuleComponent, [{
        key: "CreateForm",
        value: function CreateForm() {
          this.updateForm = this.fb.group({
            number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            lockedUntil: ['']
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this13 = this;

          this.route.params.subscribe(function (params) {
            _this13.id = params.moduleId;

            _this13.moduleService.getModuleById(_this13.id).subscribe(function (res) {
              _this13.module = res[0];
              _this13.moduleNumber = _this13.module.number; //console.log(this.module);
              //console.log(this.module.id);

              _this13.updateForm.get('number').setValue(_this13.module.number);

              _this13.updateForm.get('title').setValue(_this13.module.title);

              _this13.updateForm.get('lockedUntil').setValue(_this13.module.lockedUntil);

              _this13.startDate = ("" + _this13.module.lockedUntil).split("-"); //console.log(this.startDate);
            });
          });
        }
      }, {
        key: "updateModule",
        value: function updateModule(number, title, lockedUntil) {
          if (this.updateForm.valid) this.moduleService.updateModule(this.id, number, title, lockedUntil).subscribe(function (res) {
            alert('Module updated successfully');
          });else alert('Missing required fields!');
        }
      }]);

      return EditModuleComponent;
    }();

    EditModuleComponent.ctorParameters = function () {
      return [{
        type: _app_core_services_module_service__WEBPACK_IMPORTED_MODULE_4__["ModuleService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }];
    };

    EditModuleComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit-module',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit-module.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/course/modulesManagement/edit-module/edit-module.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit-module.component.scss */
      "./src/app/modules/course/modulesManagement/edit-module/edit-module.component.scss")).default]
    })], EditModuleComponent);
    /***/
  },

  /***/
  "./src/app/modules/course/sidebar-button/sidebar-button.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/modules/course/sidebar-button/sidebar-button.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesCourseSidebarButtonSidebarButtonComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY291cnNlL3NpZGViYXItYnV0dG9uL3NpZGViYXItYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/modules/course/sidebar-button/sidebar-button.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/modules/course/sidebar-button/sidebar-button.component.ts ***!
    \***************************************************************************/

  /*! exports provided: SidebarButtonComponent */

  /***/
  function srcAppModulesCourseSidebarButtonSidebarButtonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarButtonComponent", function () {
      return SidebarButtonComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SidebarButtonComponent =
    /*#__PURE__*/
    function () {
      function SidebarButtonComponent() {
        _classCallCheck(this, SidebarButtonComponent);

        this.sidebarIsOpen = false;
      }

      _createClass(SidebarButtonComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openNav",
        value: function openNav() {
          document.getElementById("mySidenav").style.width = "250px";
          document.getElementById("main").style.marginLeft = "250px";
          document.getElementById("mySidenav").style.display = "block";
          this.sidebarIsOpen = true;
        }
      }, {
        key: "closeNav",
        value: function closeNav() {
          document.getElementById("mySidenav").style.display = "none";
          document.getElementById("mySidenav").style.width = "0";
          document.getElementById("main").style.marginLeft = "0";
          this.sidebarIsOpen = false;
        }
      }]);

      return SidebarButtonComponent;
    }();

    SidebarButtonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidebar-button',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar-button.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/course/sidebar-button/sidebar-button.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar-button.component.scss */
      "./src/app/modules/course/sidebar-button/sidebar-button.component.scss")).default]
    })], SidebarButtonComponent);
    /***/
  },

  /***/
  "./src/app/modules/course/sidebar/sidebar.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/modules/course/sidebar/sidebar.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppModulesCourseSidebarSidebarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".sidenav {\n  height: 100%;\n  width: 0;\n  position: absolute;\n  z-index: 0;\n  top: 55px;\n  left: 0;\n  background-color: #425efd;\n  overflow-x: hidden;\n  -webkit-transition: 0.5s;\n  transition: 0.5s;\n}\n\n.sidenav a, .dropdown-btn {\n  padding: 10px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #000000;\n  display: block;\n}\n\n.sidenav a:hover, dropdown-btn:hover {\n  background-color: #2d3d97;\n  color: #ffffff;\n}\n\n#main {\n  padding: 16px;\n}\n\n/* Dropdown container (hidden by default). Optional: add a lighter background color and some left padding to change the design of the dropdown content */\n\n.dropdown-container {\n  display: none;\n  background-color: #262626;\n  padding-left: 8px;\n}\n\n/* Optional: Style the caret down icon */\n\n.fa-caret-down {\n  float: right;\n  padding-right: 8px;\n}\n\n@media screen and (max-height: 450px) {\n  .sidenav {\n    padding-top: 15px;\n  }\n\n  .sidenav a {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3Vyc2Uvc2lkZWJhci9DOlxcVXNlcnNcXEppbW15XFxEb2N1bWVudHNcXEdpdEh1YlxcbG1zLWZpdS1mYi1jbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXGNvdXJzZVxcc2lkZWJhclxcc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jb3Vyc2Uvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsWUFBQTtFQUNBLFFBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx3QkFBQTtFQUFBLGdCQUFBO0FDREo7O0FESUU7RUFDRSxhQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7QUNESjs7QURJRTtFQUNFLHlCQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRElFO0VBQ0UsYUFBQTtBQ0RKOztBREdFLHdKQUFBOztBQUNBO0VBQ0UsYUFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUNBSjs7QURHRSx3Q0FBQTs7QUFDQTtFQUNFLFlBQUE7RUFDQSxrQkFBQTtBQ0FKOztBREdFO0VBQ0U7SUFBVSxpQkFBQTtFQ0NaOztFREFFO0lBQVksZUFBQTtFQ0lkO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvdXJzZS9zaWRlYmFyL3NpZGViYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICBcclxuICAuc2lkZW5hdiB7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICB0b3A6IDU1cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNWVmZDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlbmF2IGEsIC5kcm9wZG93bi1idG4ge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiAjMDAwMDAwO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgfVxyXG4gIFxyXG4gIC5zaWRlbmF2IGE6aG92ZXIsIGRyb3Bkb3duLWJ0bjpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzZDk3O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICAjbWFpbiB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gIH1cclxuICAvKiBEcm9wZG93biBjb250YWluZXIgKGhpZGRlbiBieSBkZWZhdWx0KS4gT3B0aW9uYWw6IGFkZCBhIGxpZ2h0ZXIgYmFja2dyb3VuZCBjb2xvciBhbmQgc29tZSBsZWZ0IHBhZGRpbmcgdG8gY2hhbmdlIHRoZSBkZXNpZ24gb2YgdGhlIGRyb3Bkb3duIGNvbnRlbnQgKi9cclxuICAuZHJvcGRvd24tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjYyNjI2O1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgfVxyXG5cclxuICAvKiBPcHRpb25hbDogU3R5bGUgdGhlIGNhcmV0IGRvd24gaWNvbiAqL1xyXG4gIC5mYS1jYXJldC1kb3duIHtcclxuICAgIGZsb2F0OiByaWdodDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDhweDtcclxuICB9IFxyXG4gIFxyXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0NTBweCkge1xyXG4gICAgLnNpZGVuYXYge3BhZGRpbmctdG9wOiAxNXB4O31cclxuICAgIC5zaWRlbmF2IGEge2ZvbnQtc2l6ZTogMThweDt9XHJcbiAgfVxyXG4gIiwiLnNpZGVuYXYge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAwO1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDA7XG4gIHRvcDogNTVweDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNWVmZDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xufVxuXG4uc2lkZW5hdiBhLCAuZHJvcGRvd24tYnRuIHtcbiAgcGFkZGluZzogMTBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBmb250LXNpemU6IDI1cHg7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNpZGVuYXYgYTpob3ZlciwgZHJvcGRvd24tYnRuOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzJkM2Q5NztcbiAgY29sb3I6ICNmZmZmZmY7XG59XG5cbiNtYWluIHtcbiAgcGFkZGluZzogMTZweDtcbn1cblxuLyogRHJvcGRvd24gY29udGFpbmVyIChoaWRkZW4gYnkgZGVmYXVsdCkuIE9wdGlvbmFsOiBhZGQgYSBsaWdodGVyIGJhY2tncm91bmQgY29sb3IgYW5kIHNvbWUgbGVmdCBwYWRkaW5nIHRvIGNoYW5nZSB0aGUgZGVzaWduIG9mIHRoZSBkcm9wZG93biBjb250ZW50ICovXG4uZHJvcGRvd24tY29udGFpbmVyIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzI2MjYyNjtcbiAgcGFkZGluZy1sZWZ0OiA4cHg7XG59XG5cbi8qIE9wdGlvbmFsOiBTdHlsZSB0aGUgY2FyZXQgZG93biBpY29uICovXG4uZmEtY2FyZXQtZG93biB7XG4gIGZsb2F0OiByaWdodDtcbiAgcGFkZGluZy1yaWdodDogOHB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcbiAgLnNpZGVuYXYge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICB9XG5cbiAgLnNpZGVuYXYgYSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/modules/course/sidebar/sidebar.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/modules/course/sidebar/sidebar.component.ts ***!
    \*************************************************************/

  /*! exports provided: SidebarComponent */

  /***/
  function srcAppModulesCourseSidebarSidebarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SidebarComponent", function () {
      return SidebarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent() {
        _classCallCheck(this, SidebarComponent);
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var dropdown = document.getElementsByClassName("dropdown-btn");
          var i;

          for (i = 0; i < dropdown.length; i++) {
            dropdown[i].addEventListener("click", function () {
              this.classList.toggle("active");
              var dropdownContent = this.nextElementSibling;

              if (dropdownContent.style.display === "block") {
                dropdownContent.style.display = "none";
              } else {
                dropdownContent.style.display = "block";
              }
            });
          }
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sidebar',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sidebar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/modules/course/sidebar/sidebar.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sidebar.component.scss */
      "./src/app/modules/course/sidebar/sidebar.component.scss")).default]
    })], SidebarComponent);
    /***/
  }
}]);
//# sourceMappingURL=modules-course-course-module-es5.js.map