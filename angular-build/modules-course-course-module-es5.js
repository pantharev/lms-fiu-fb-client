function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["modules-course-course-module"], {
  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js ***!
    \*******************************************************************/

  /*! exports provided: BreakpointObserver, Breakpoints, LayoutModule, MediaMatcher */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015LayoutJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BreakpointObserver", function () {
      return BreakpointObserver;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Breakpoints", function () {
      return Breakpoints;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LayoutModule", function () {
      return LayoutModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MediaMatcher", function () {
      return MediaMatcher;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/layout/layout-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var LayoutModule = function LayoutModule() {
      _classCallCheck(this, LayoutModule);
    };

    LayoutModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: LayoutModule
    });
    LayoutModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function LayoutModule_Factory(t) {
        return new (t || LayoutModule)();
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LayoutModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{}]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/layout/media-matcher.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Global registry for all dynamically-created, injected media queries.
     * @type {?}
     */


    var mediaQueriesForWebkitCompatibility = new Set();
    /**
     * Style tag that holds all of the dynamically-created media queries.
     * @type {?}
     */

    var mediaQueryStyleNode;
    /**
     * A utility for calling matchMedia queries.
     */

    var MediaMatcher =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _platform
       */
      function MediaMatcher(_platform) {
        _classCallCheck(this, MediaMatcher);

        this._platform = _platform;
        this._matchMedia = this._platform.isBrowser && window.matchMedia ? // matchMedia is bound to the window scope intentionally as it is an illegal invocation to
        // call it from a different scope.
        window.matchMedia.bind(window) : noopMatchMedia;
      }
      /**
       * Evaluates the given media query and returns the native MediaQueryList from which results
       * can be retrieved.
       * Confirms the layout engine will trigger for the selector query provided and returns the
       * MediaQueryList for the query provided.
       * @param {?} query
       * @return {?}
       */


      _createClass(MediaMatcher, [{
        key: "matchMedia",
        value: function matchMedia(query) {
          if (this._platform.WEBKIT) {
            createEmptyStyleRule(query);
          }

          return this._matchMedia(query);
        }
      }]);

      return MediaMatcher;
    }();

    MediaMatcher.ɵfac = function MediaMatcher_Factory(t) {
      return new (t || MediaMatcher)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]));
    };
    /** @nocollapse */


    MediaMatcher.ctorParameters = function () {
      return [{
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]
      }];
    };
    /** @nocollapse */


    MediaMatcher.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function MediaMatcher_Factory() {
        return new MediaMatcher(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]));
      },
      token: MediaMatcher,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MediaMatcher, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_1__["Platform"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * For Webkit engines that only trigger the MediaQueryListListener when
     * there is at least one CSS selector for the respective media query.
     * @param {?} query
     * @return {?}
     */


    function createEmptyStyleRule(query) {
      if (mediaQueriesForWebkitCompatibility.has(query)) {
        return;
      }

      try {
        if (!mediaQueryStyleNode) {
          mediaQueryStyleNode = document.createElement('style');
          mediaQueryStyleNode.setAttribute('type', 'text/css');

          /** @type {?} */
          document.head.appendChild(mediaQueryStyleNode);
        }

        if (mediaQueryStyleNode.sheet) {
          /** @type {?} */
          mediaQueryStyleNode.sheet.insertRule("@media ".concat(query, " {.fx-query-test{ }}"), 0);
          mediaQueriesForWebkitCompatibility.add(query);
        }
      } catch (e) {
        console.error(e);
      }
    }
    /**
     * No-op matchMedia replacement for non-browser platforms.
     * @param {?} query
     * @return {?}
     */


    function noopMatchMedia(query) {
      // Use `as any` here to avoid adding additional necessary properties for
      // the noop matcher.
      return (
        /** @type {?} */
        {
          matches: query === 'all' || query === '',
          media: query,
          addListener:
          /**
          * @return {?}
          */
          function addListener() {},
          removeListener:
          /**
          * @return {?}
          */
          function removeListener() {}
        }
      );
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/layout/breakpoints-observer.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * The current state of a layout breakpoint.
     * @record
     */


    function BreakpointState() {}

    if (false) {}
    /**
     * The current state of a layout breakpoint.
     * @record
     */


    function InternalBreakpointState() {}

    if (false) {}
    /**
     * @record
     */


    function Query() {}

    if (false) {}
    /**
     * Utility for checking the matching state of \@media queries.
     */


    var BreakpointObserver =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _mediaMatcher
       * @param {?} _zone
       */
      function BreakpointObserver(_mediaMatcher, _zone) {
        _classCallCheck(this, BreakpointObserver);

        this._mediaMatcher = _mediaMatcher;
        this._zone = _zone;
        /**
         * A map of all media queries currently being listened for.
         */

        this._queries = new Map();
        /**
         * A subject for all other observables to takeUntil based on.
         */

        this._destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
      }
      /**
       * Completes the active subject, signalling to all other observables to complete.
       * @return {?}
       */


      _createClass(BreakpointObserver, [{
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroySubject.next();

          this._destroySubject.complete();
        }
        /**
         * Whether one or more media queries match the current viewport size.
         * @param {?} value One or more media queries to check.
         * @return {?} Whether any of the media queries match.
         */

      }, {
        key: "isMatched",
        value: function isMatched(value) {
          var _this = this;

          /** @type {?} */
          var queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(value));
          return queries.some(
          /**
          * @param {?} mediaQuery
          * @return {?}
          */
          function (mediaQuery) {
            return _this._registerQuery(mediaQuery).mql.matches;
          });
        }
        /**
         * Gets an observable of results for the given queries that will emit new results for any changes
         * in matching of the given queries.
         * @param {?} value One or more media queries to check.
         * @return {?} A stream of matches for the given queries.
         */

      }, {
        key: "observe",
        value: function observe(value) {
          var _this2 = this;

          /** @type {?} */
          var queries = splitQueries(Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_4__["coerceArray"])(value));
          /** @type {?} */

          var observables = queries.map(
          /**
          * @param {?} query
          * @return {?}
          */
          function (query) {
            return _this2._registerQuery(query).observable;
          });
          /** @type {?} */

          var stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["combineLatest"])(observables); // Emit the first state immediately, and then debounce the subsequent emissions.

          stateObservable = Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["concat"])(stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1)), stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["skip"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(0)));
          return stateObservable.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
          /**
          * @param {?} breakpointStates
          * @return {?}
          */
          function (breakpointStates) {
            /** @type {?} */
            var response = {
              matches: false,
              breakpoints: {}
            };
            breakpointStates.forEach(
            /**
            * @param {?} state
            * @return {?}
            */
            function (state) {
              response.matches = response.matches || state.matches;
              response.breakpoints[state.query] = state.matches;
            });
            return response;
          }));
        }
        /**
         * Registers a specific query to be listened for.
         * @private
         * @param {?} query
         * @return {?}
         */

      }, {
        key: "_registerQuery",
        value: function _registerQuery(query) {
          var _this3 = this;

          // Only set up a new MediaQueryList if it is not already being listened for.
          if (this._queries.has(query)) {
            return (
              /** @type {?} */
              this._queries.get(query)
            );
          }
          /** @type {?} */


          var mql = this._mediaMatcher.matchMedia(query); // Create callback for match changes and add it is as a listener.

          /** @type {?} */


          var queryObservable = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](
          /**
          * @param {?} observer
          * @return {?}
          */
          function (observer) {
            // Listener callback methods are wrapped to be placed back in ngZone. Callbacks must be placed
            // back into the zone because matchMedia is only included in Zone.js by loading the
            // webapis-media-query.js file alongside the zone.js file.  Additionally, some browsers do not
            // have MediaQueryList inherit from EventTarget, which causes inconsistencies in how Zone.js
            // patches it.

            /** @type {?} */
            var handler =
            /**
            * @param {?} e
            * @return {?}
            */
            function handler(e) {
              return _this3._zone.run(
              /**
              * @return {?}
              */
              function () {
                return observer.next(e);
              });
            };

            mql.addListener(handler);
            return (
              /**
              * @return {?}
              */
              function () {
                mql.removeListener(handler);
              }
            );
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(mql), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(
          /**
          * @param {?} nextMql
          * @return {?}
          */
          function (nextMql) {
            return {
              query: query,
              matches: nextMql.matches
            };
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(this._destroySubject)); // Add the MediaQueryList to the set of queries.

          /** @type {?} */

          var output = {
            observable: queryObservable,
            mql: mql
          };

          this._queries.set(query, output);

          return output;
        }
      }]);

      return BreakpointObserver;
    }();

    BreakpointObserver.ɵfac = function BreakpointObserver_Factory(t) {
      return new (t || BreakpointObserver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](MediaMatcher), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
    };
    /** @nocollapse */


    BreakpointObserver.ctorParameters = function () {
      return [{
        type: MediaMatcher
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
      }];
    };
    /** @nocollapse */


    BreakpointObserver.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"])({
      factory: function BreakpointObserver_Factory() {
        return new BreakpointObserver(Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(MediaMatcher), Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]));
      },
      token: BreakpointObserver,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BreakpointObserver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: MediaMatcher
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * Split each query string into separate query strings if two queries are provided as comma
     * separated.
     * @param {?} queries
     * @return {?}
     */


    function splitQueries(queries) {
      return queries.map(
      /**
      * @param {?} query
      * @return {?}
      */
      function (query) {
        return query.split(',');
      }).reduce(
      /**
      * @param {?} a1
      * @param {?} a2
      * @return {?}
      */
      function (a1, a2) {
        return a1.concat(a2);
      }).map(
      /**
      * @param {?} query
      * @return {?}
      */
      function (query) {
        return query.trim();
      });
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/layout/breakpoints.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // PascalCase is being used as Breakpoints is used like an enum.
    // tslint:disable-next-line:variable-name

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     * @type {?}
     */


    var Breakpoints = {
      XSmall: '(max-width: 599.99px)',
      Small: '(min-width: 600px) and (max-width: 959.99px)',
      Medium: '(min-width: 960px) and (max-width: 1279.99px)',
      Large: '(min-width: 1280px) and (max-width: 1919.99px)',
      XLarge: '(min-width: 1920px)',
      Handset: '(max-width: 599.99px) and (orientation: portrait), ' + '(max-width: 959.99px) and (orientation: landscape)',
      Tablet: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait), ' + '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
      Web: '(min-width: 840px) and (orientation: portrait), ' + '(min-width: 1280px) and (orientation: landscape)',
      HandsetPortrait: '(max-width: 599.99px) and (orientation: portrait)',
      TabletPortrait: '(min-width: 600px) and (max-width: 839.99px) and (orientation: portrait)',
      WebPortrait: '(min-width: 840px) and (orientation: portrait)',
      HandsetLandscape: '(max-width: 959.99px) and (orientation: landscape)',
      TabletLandscape: '(min-width: 960px) and (max-width: 1279.99px) and (orientation: landscape)',
      WebLandscape: '(min-width: 1280px) and (orientation: landscape)'
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/layout/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=layout.js.map

    /***/
  },

  /***/
  "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js ***!
    \***********************************************************************/

  /*! exports provided: AutofillMonitor, CdkAutofill, CdkTextareaAutosize, TextFieldModule */

  /***/
  function node_modulesAngularCdk__ivy_ngcc__Fesm2015TextFieldJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AutofillMonitor", function () {
      return AutofillMonitor;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkAutofill", function () {
      return CdkAutofill;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CdkTextareaAutosize", function () {
      return CdkTextareaAutosize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextFieldModule", function () {
      return TextFieldModule;
    });
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/text-field/autofill.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Options to pass to the animationstart listener.
     * @type {?}
     */


    var listenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["normalizePassiveListenerOptions"])({
      passive: true
    });
    /**
     * An injectable service that can be used to monitor the autofill state of an input.
     * Based on the following blog post:
     * https://medium.com/\@brunn/detecting-autofilled-fields-in-javascript-aed598d25da7
     */

    var AutofillMonitor =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _platform
       * @param {?} _ngZone
       */
      function AutofillMonitor(_platform, _ngZone) {
        _classCallCheck(this, AutofillMonitor);

        this._platform = _platform;
        this._ngZone = _ngZone;
        this._monitoredElements = new Map();
      }
      /**
       * @param {?} elementOrRef
       * @return {?}
       */


      _createClass(AutofillMonitor, [{
        key: "monitor",
        value: function monitor(elementOrRef) {
          var _this4 = this;

          if (!this._platform.isBrowser) {
            return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"];
          }
          /** @type {?} */


          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceElement"])(elementOrRef);
          /** @type {?} */

          var info = this._monitoredElements.get(element);

          if (info) {
            return info.subject.asObservable();
          }
          /** @type {?} */


          var result = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
          /** @type {?} */

          var cssClass = 'cdk-text-field-autofilled';
          /** @type {?} */

          var listener =
          /** @type {?} */

          /**
          * @param {?} event
          * @return {?}
          */
          function listener(event) {
            // Animation events fire on initial element render, we check for the presence of the autofill
            // CSS class to make sure this is a real change in state, not just the initial render before
            // we fire off events.
            if (event.animationName === 'cdk-text-field-autofill-start' && !element.classList.contains(cssClass)) {
              element.classList.add(cssClass);

              _this4._ngZone.run(
              /**
              * @return {?}
              */
              function () {
                return result.next({
                  target:
                  /** @type {?} */
                  event.target,
                  isAutofilled: true
                });
              });
            } else if (event.animationName === 'cdk-text-field-autofill-end' && element.classList.contains(cssClass)) {
              element.classList.remove(cssClass);

              _this4._ngZone.run(
              /**
              * @return {?}
              */
              function () {
                return result.next({
                  target:
                  /** @type {?} */
                  event.target,
                  isAutofilled: false
                });
              });
            }
          };

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            element.addEventListener('animationstart', listener, listenerOptions);
            element.classList.add('cdk-text-field-autofill-monitored');
          });

          this._monitoredElements.set(element, {
            subject: result,
            unlisten:
            /**
            * @return {?}
            */
            function unlisten() {
              element.removeEventListener('animationstart', listener, listenerOptions);
            }
          });

          return result.asObservable();
        }
        /**
         * @param {?} elementOrRef
         * @return {?}
         */

      }, {
        key: "stopMonitoring",
        value: function stopMonitoring(elementOrRef) {
          /** @type {?} */
          var element = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceElement"])(elementOrRef);
          /** @type {?} */

          var info = this._monitoredElements.get(element);

          if (info) {
            info.unlisten();
            info.subject.complete();
            element.classList.remove('cdk-text-field-autofill-monitored');
            element.classList.remove('cdk-text-field-autofilled');

            this._monitoredElements["delete"](element);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          var _this5 = this;

          this._monitoredElements.forEach(
          /**
          * @param {?} _info
          * @param {?} element
          * @return {?}
          */
          function (_info, element) {
            return _this5.stopMonitoring(element);
          });
        }
      }]);

      return AutofillMonitor;
    }();

    AutofillMonitor.ɵfac = function AutofillMonitor_Factory(t) {
      return new (t || AutofillMonitor)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };
    /** @nocollapse */


    AutofillMonitor.ctorParameters = function () {
      return [{
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };
    /** @nocollapse */


    AutofillMonitor.ɵprov = Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"])({
      factory: function AutofillMonitor_Factory() {
        return new AutofillMonitor(Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"])(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
      },
      token: AutofillMonitor,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AutofillMonitor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * A directive that can be used to monitor the autofill state of an input.
     */


    var CdkAutofill =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _elementRef
       * @param {?} _autofillMonitor
       */
      function CdkAutofill(_elementRef, _autofillMonitor) {
        _classCallCheck(this, CdkAutofill);

        this._elementRef = _elementRef;
        this._autofillMonitor = _autofillMonitor;
        /**
         * Emits when the autofill state of the element changes.
         */

        this.cdkAutofill = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }
      /**
       * @return {?}
       */


      _createClass(CdkAutofill, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this._autofillMonitor.monitor(this._elementRef).subscribe(
          /**
          * @param {?} event
          * @return {?}
          */
          function (event) {
            return _this6.cdkAutofill.emit(event);
          });
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._autofillMonitor.stopMonitoring(this._elementRef);
        }
      }]);

      return CdkAutofill;
    }();

    CdkAutofill.ɵfac = function CdkAutofill_Factory(t) {
      return new (t || CdkAutofill)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](AutofillMonitor));
    };

    CdkAutofill.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkAutofill,
      selectors: [["", "cdkAutofill", ""]],
      outputs: {
        cdkAutofill: "cdkAutofill"
      }
    });
    /** @nocollapse */

    CdkAutofill.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: AutofillMonitor
      }];
    };

    CdkAutofill.propDecorators = {
      cdkAutofill: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkAutofill, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: '[cdkAutofill]'
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: AutofillMonitor
        }];
      }, {
        cdkAutofill: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/text-field/autosize.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Directive to automatically resize a textarea to fit its content.
     */


    var CdkTextareaAutosize =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _elementRef
       * @param {?} _platform
       * @param {?} _ngZone
       * @param {?=} document
       */
      function CdkTextareaAutosize(_elementRef, _platform, _ngZone,
      /** @breaking-change 11.0.0 make document required */
      document) {
        _classCallCheck(this, CdkTextareaAutosize);

        this._elementRef = _elementRef;
        this._platform = _platform;
        this._ngZone = _ngZone;
        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this._enabled = true;
        /**
         * Value of minRows as of last resize. If the minRows has decreased, the
         * height of the textarea needs to be recomputed to reflect the new minimum. The maxHeight
         * does not have the same problem because it does not affect the textarea's scrollHeight.
         */

        this._previousMinRows = -1;
        this._document = document;
        this._textareaElement =
        /** @type {?} */
        this._elementRef.nativeElement;
      }
      /**
       * Minimum amount of rows in the textarea.
       * @return {?}
       */


      _createClass(CdkTextareaAutosize, [{
        key: "_setMinHeight",

        /**
         * Sets the minimum height of the textarea as determined by minRows.
         * @return {?}
         */
        value: function _setMinHeight() {
          /** @type {?} */
          var minHeight = this.minRows && this._cachedLineHeight ? "".concat(this.minRows * this._cachedLineHeight, "px") : null;

          if (minHeight) {
            this._textareaElement.style.minHeight = minHeight;
          }
        }
        /**
         * Sets the maximum height of the textarea as determined by maxRows.
         * @return {?}
         */

      }, {
        key: "_setMaxHeight",
        value: function _setMaxHeight() {
          /** @type {?} */
          var maxHeight = this.maxRows && this._cachedLineHeight ? "".concat(this.maxRows * this._cachedLineHeight, "px") : null;

          if (maxHeight) {
            this._textareaElement.style.maxHeight = maxHeight;
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          var _this7 = this;

          if (this._platform.isBrowser) {
            // Remember the height which we started with in case autosizing is disabled
            this._initialHeight = this._textareaElement.style.height;
            this.resizeToFitContent();

            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              /** @type {?} */
              var window = _this7._getWindow();

              Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(window, 'resize').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["auditTime"])(16), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this7._destroyed)).subscribe(
              /**
              * @return {?}
              */
              function () {
                return _this7.resizeToFitContent(true);
              });
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._destroyed.next();

          this._destroyed.complete();
        }
        /**
         * Cache the height of a single-row textarea if it has not already been cached.
         *
         * We need to know how large a single "row" of a textarea is in order to apply minRows and
         * maxRows. For the initial version, we will assume that the height of a single line in the
         * textarea does not ever change.
         * @private
         * @return {?}
         */

      }, {
        key: "_cacheTextareaLineHeight",
        value: function _cacheTextareaLineHeight() {
          if (this._cachedLineHeight) {
            return;
          } // Use a clone element because we have to override some styles.

          /** @type {?} */


          var textareaClone =
          /** @type {?} */
          this._textareaElement.cloneNode(false);

          textareaClone.rows = 1; // Use `position: absolute` so that this doesn't cause a browser layout and use
          // `visibility: hidden` so that nothing is rendered. Clear any other styles that
          // would affect the height.

          textareaClone.style.position = 'absolute';
          textareaClone.style.visibility = 'hidden';
          textareaClone.style.border = 'none';
          textareaClone.style.padding = '0';
          textareaClone.style.height = '';
          textareaClone.style.minHeight = '';
          textareaClone.style.maxHeight = ''; // In Firefox it happens that textarea elements are always bigger than the specified amount
          // of rows. This is because Firefox tries to add extra space for the horizontal scrollbar.
          // As a workaround that removes the extra space for the scrollbar, we can just set overflow
          // to hidden. This ensures that there is no invalid calculation of the line height.
          // See Firefox bug report: https://bugzilla.mozilla.org/show_bug.cgi?id=33654

          textareaClone.style.overflow = 'hidden';

          /** @type {?} */
          this._textareaElement.parentNode.appendChild(textareaClone);

          this._cachedLineHeight = textareaClone.clientHeight;

          /** @type {?} */
          this._textareaElement.parentNode.removeChild(textareaClone); // Min and max heights have to be re-calculated if the cached line height changes


          this._setMinHeight();

          this._setMaxHeight();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this._platform.isBrowser) {
            this.resizeToFitContent();
          }
        }
        /**
         * Resize the textarea to fit its content.
         * @param {?=} force Whether to force a height recalculation. By default the height will be
         *    recalculated only if the value changed since the last call.
         * @return {?}
         */

      }, {
        key: "resizeToFitContent",
        value: function resizeToFitContent() {
          var _this8 = this;

          var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

          // If autosizing is disabled, just skip everything else
          if (!this._enabled) {
            return;
          }

          this._cacheTextareaLineHeight(); // If we haven't determined the line-height yet, we know we're still hidden and there's no point
          // in checking the height of the textarea.


          if (!this._cachedLineHeight) {
            return;
          }
          /** @type {?} */


          var textarea =
          /** @type {?} */
          this._elementRef.nativeElement;
          /** @type {?} */

          var value = textarea.value; // Only resize if the value or minRows have changed since these calculations can be expensive.

          if (!force && this._minRows === this._previousMinRows && value === this._previousValue) {
            return;
          }
          /** @type {?} */


          var placeholderText = textarea.placeholder; // Reset the textarea height to auto in order to shrink back to its default size.
          // Also temporarily force overflow:hidden, so scroll bars do not interfere with calculations.
          // Long placeholders that are wider than the textarea width may lead to a bigger scrollHeight
          // value. To ensure that the scrollHeight is not bigger than the content, the placeholders
          // need to be removed temporarily.

          textarea.classList.add('cdk-textarea-autosize-measuring');
          textarea.placeholder = ''; // The cdk-textarea-autosize-measuring class includes a 2px padding to workaround an issue with
          // Chrome, so we account for that extra space here by subtracting 4 (2px top + 2px bottom).

          /** @type {?} */

          var height = textarea.scrollHeight - 4; // Use the scrollHeight to know how large the textarea *would* be if fit its entire value.

          textarea.style.height = "".concat(height, "px");
          textarea.classList.remove('cdk-textarea-autosize-measuring');
          textarea.placeholder = placeholderText;

          this._ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            if (typeof requestAnimationFrame !== 'undefined') {
              requestAnimationFrame(
              /**
              * @return {?}
              */
              function () {
                return _this8._scrollToCaretPosition(textarea);
              });
            } else {
              setTimeout(
              /**
              * @return {?}
              */
              function () {
                return _this8._scrollToCaretPosition(textarea);
              });
            }
          });

          this._previousValue = value;
          this._previousMinRows = this._minRows;
        }
        /**
         * Resets the textarea to its original size
         * @return {?}
         */

      }, {
        key: "reset",
        value: function reset() {
          // Do not try to change the textarea, if the initialHeight has not been determined yet
          // This might potentially remove styles when reset() is called before ngAfterViewInit
          if (this._initialHeight !== undefined) {
            this._textareaElement.style.height = this._initialHeight;
          }
        } // In Ivy the `host` metadata will be merged, whereas in ViewEngine it is overridden. In order
        // to avoid double event listeners, we need to use `HostListener`. Once Ivy is the default, we
        // can move this back into `host`.
        // tslint:disable:no-host-decorator-in-concrete

        /**
         * @return {?}
         */

      }, {
        key: "_noopInputHandler",
        value: function _noopInputHandler() {} // no-op handler that ensures we're running change detection on input events.

        /**
         * Access injected document if available or fallback to global document reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getDocument",
        value: function _getDocument() {
          return this._document || document;
        }
        /**
         * Use defaultView of injected document if available or fallback to global window reference
         * @private
         * @return {?}
         */

      }, {
        key: "_getWindow",
        value: function _getWindow() {
          /** @type {?} */
          var doc = this._getDocument();

          return doc.defaultView || window;
        }
        /**
         * Scrolls a textarea to the caret position. On Firefox resizing the textarea will
         * prevent it from scrolling to the caret position. We need to re-set the selection
         * in order for it to scroll to the proper position.
         * @private
         * @param {?} textarea
         * @return {?}
         */

      }, {
        key: "_scrollToCaretPosition",
        value: function _scrollToCaretPosition(textarea) {
          var selectionStart = textarea.selectionStart,
              selectionEnd = textarea.selectionEnd;
          /** @type {?} */

          var document = this._getDocument(); // IE will throw an "Unspecified error" if we try to set the selection range after the
          // element has been removed from the DOM. Assert that the directive hasn't been destroyed
          // between the time we requested the animation frame and when it was executed.
          // Also note that we have to assert that the textarea is focused before we set the
          // selection range. Setting the selection range on a non-focused textarea will cause
          // it to receive focus on IE and Edge.


          if (!this._destroyed.isStopped && document.activeElement === textarea) {
            textarea.setSelectionRange(selectionStart, selectionEnd);
          }
        }
      }, {
        key: "minRows",
        get: function get() {
          return this._minRows;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._minRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);

          this._setMinHeight();
        }
        /**
         * Maximum amount of rows in the textarea.
         * @return {?}
         */

      }, {
        key: "maxRows",
        get: function get() {
          return this._maxRows;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._maxRows = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceNumberProperty"])(value);

          this._setMaxHeight();
        }
        /**
         * Whether autosizing is enabled or not
         * @return {?}
         */

      }, {
        key: "enabled",
        get: function get() {
          return this._enabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          value = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value); // Only act if the actual value changed. This specifically helps to not run
          // resizeToFitContent too early (i.e. before ngAfterViewInit)

          if (this._enabled !== value) {
            (this._enabled = value) ? this.resizeToFitContent(true) : this.reset();
          }
        }
      }]);

      return CdkTextareaAutosize;
    }();

    CdkTextareaAutosize.ɵfac = function CdkTextareaAutosize_Factory(t) {
      return new (t || CdkTextareaAutosize)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], 8));
    };

    CdkTextareaAutosize.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: CdkTextareaAutosize,
      selectors: [["textarea", "cdkTextareaAutosize", ""]],
      hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize"],
      hostBindings: function CdkTextareaAutosize_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("input", function CdkTextareaAutosize_input_HostBindingHandler() {
            return ctx._noopInputHandler();
          });
        }
      },
      inputs: {
        minRows: ["cdkAutosizeMinRows", "minRows"],
        maxRows: ["cdkAutosizeMaxRows", "maxRows"],
        enabled: ["cdkTextareaAutosize", "enabled"]
      },
      exportAs: ["cdkTextareaAutosize"]
    });
    /** @nocollapse */

    CdkTextareaAutosize.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
        }]
      }];
    };

    CdkTextareaAutosize.propDecorators = {
      minRows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkAutosizeMinRows']
      }],
      maxRows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkAutosizeMaxRows']
      }],
      enabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['cdkTextareaAutosize']
      }],
      _noopInputHandler: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
        args: ['input']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](CdkTextareaAutosize, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'textarea[cdkTextareaAutosize]',
          exportAs: 'cdkTextareaAutosize',
          host: {
            'class': 'cdk-textarea-autosize',
            // Textarea elements that have the directive applied should have a single row by default.
            // Browsers normally show two rows by default and therefore this limits the minRows binding.
            'rows': '1'
          }
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["Platform"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"]]
          }]
        }];
      }, {
        minRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkAutosizeMinRows']
        }],
        maxRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkAutosizeMaxRows']
        }],
        enabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['cdkTextareaAutosize']
        }],
        _noopInputHandler: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['input']
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/text-field/text-field-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var TextFieldModule = function TextFieldModule() {
      _classCallCheck(this, TextFieldModule);
    };

    TextFieldModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: TextFieldModule
    });
    TextFieldModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function TextFieldModule_Factory(t) {
        return new (t || TextFieldModule)();
      },
      imports: [[_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](TextFieldModule, {
        declarations: function declarations() {
          return [CdkAutofill, CdkTextareaAutosize];
        },
        imports: function imports() {
          return [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]];
        },
        exports: function exports() {
          return [CdkAutofill, CdkTextareaAutosize];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](TextFieldModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [CdkAutofill, CdkTextareaAutosize],
          imports: [_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_0__["PlatformModule"]],
          exports: [CdkAutofill, CdkTextareaAutosize]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/cdk/text-field/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=text-field.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js":
  /*!***********************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js ***!
    \***********************************************************************/

  /*! exports provided: MAT_INPUT_VALUE_ACCESSOR, MatInput, MatInputModule, MatTextareaAutosize, getMatInputUnsupportedTypeError */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015InputJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_INPUT_VALUE_ACCESSOR", function () {
      return MAT_INPUT_VALUE_ACCESSOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatInput", function () {
      return MatInput;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatInputModule", function () {
      return MatInputModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTextareaAutosize", function () {
      return MatTextareaAutosize;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatInputUnsupportedTypeError", function () {
      return getMatInputUnsupportedTypeError;
    });
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/input/autosize.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Directive to automatically resize a textarea to fit its content.
     * @deprecated Use `cdkTextareaAutosize` from `\@angular/cdk/text-field` instead.
     * \@breaking-change 8.0.0
     */


    var MatTextareaAutosize =
    /*#__PURE__*/
    function (_angular_cdk_text_fie) {
      _inherits(MatTextareaAutosize, _angular_cdk_text_fie);

      function MatTextareaAutosize() {
        _classCallCheck(this, MatTextareaAutosize);

        return _possibleConstructorReturn(this, _getPrototypeOf(MatTextareaAutosize).apply(this, arguments));
      }

      _createClass(MatTextareaAutosize, [{
        key: "matAutosizeMinRows",

        /**
         * @return {?}
         */
        get: function get() {
          return this.minRows;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.minRows = value;
        }
        /**
         * @return {?}
         */

      }, {
        key: "matAutosizeMaxRows",
        get: function get() {
          return this.maxRows;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.maxRows = value;
        }
        /**
         * @return {?}
         */

      }, {
        key: "matAutosize",
        get: function get() {
          return this.enabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.enabled = value;
        }
        /**
         * @return {?}
         */

      }, {
        key: "matTextareaAutosize",
        get: function get() {
          return this.enabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this.enabled = value;
        }
      }]);

      return MatTextareaAutosize;
    }(_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["CdkTextareaAutosize"]);

    MatTextareaAutosize.ɵfac = function MatTextareaAutosize_Factory(t) {
      return ɵMatTextareaAutosize_BaseFactory(t || MatTextareaAutosize);
    };

    MatTextareaAutosize.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatTextareaAutosize,
      selectors: [["textarea", "mat-autosize", ""], ["textarea", "matTextareaAutosize", ""]],
      hostAttrs: ["rows", "1", 1, "cdk-textarea-autosize", "mat-autosize"],
      inputs: {
        cdkAutosizeMinRows: "cdkAutosizeMinRows",
        cdkAutosizeMaxRows: "cdkAutosizeMaxRows",
        matAutosizeMinRows: "matAutosizeMinRows",
        matAutosizeMaxRows: "matAutosizeMaxRows",
        matAutosize: ["mat-autosize", "matAutosize"],
        matTextareaAutosize: "matTextareaAutosize"
      },
      exportAs: ["matTextareaAutosize"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"]]
    });
    MatTextareaAutosize.propDecorators = {
      matAutosizeMinRows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      matAutosizeMaxRows: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      matAutosize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
        args: ['mat-autosize']
      }],
      matTextareaAutosize: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };

    var ɵMatTextareaAutosize_BaseFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetInheritedFactory"](MatTextareaAutosize);
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatTextareaAutosize, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: 'textarea[mat-autosize], textarea[matTextareaAutosize]',
          exportAs: 'matTextareaAutosize',
          inputs: ['cdkAutosizeMinRows', 'cdkAutosizeMaxRows'],
          host: {
            'class': 'cdk-textarea-autosize mat-autosize',
            // Textarea elements that have the directive applied should have a single row by default.
            // Browsers normally show two rows by default and therefore this limits the minRows binding.
            'rows': '1'
          }
        }]
      }], null, {
        matAutosizeMinRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        matAutosizeMaxRows: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        matAutosize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"],
          args: ['mat-autosize']
        }],
        matTextareaAutosize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/input/input-errors.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @license
     * Copyright Google LLC All Rights Reserved.
     *
     * Use of this source code is governed by an MIT-style license that can be
     * found in the LICENSE file at https://angular.io/license
     */

    /**
     * \@docs-private
     * @param {?} type
     * @return {?}
     */


    function getMatInputUnsupportedTypeError(type) {
      return Error("Input type \"".concat(type, "\" isn't supported by matInput."));
    }
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/input/input-value-accessor.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * This token is used to inject the object whose value should be set into `MatInput`. If none is
     * provided, the native `HTMLInputElement` is used. Directives like `MatDatepickerInput` can provide
     * themselves for this token, in order to make `MatInput` delegate the getting and setting of the
     * value to them.
     * @type {?}
     */


    var MAT_INPUT_VALUE_ACCESSOR = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["InjectionToken"]('MAT_INPUT_VALUE_ACCESSOR');
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/input/input.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    // Invalid input type. Using one of these will throw an MatInputUnsupportedTypeError.

    /** @type {?} */

    var MAT_INPUT_INVALID_TYPES = ['button', 'checkbox', 'file', 'hidden', 'image', 'radio', 'range', 'reset', 'submit'];
    /** @type {?} */

    var nextUniqueId = 0; // Boilerplate for applying mixins to MatInput.

    /**
     * \@docs-private
     */

    var MatInputBase =
    /**
     * @param {?} _defaultErrorStateMatcher
     * @param {?} _parentForm
     * @param {?} _parentFormGroup
     * @param {?} ngControl
     */
    function MatInputBase(_defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl) {
      _classCallCheck(this, MatInputBase);

      this._defaultErrorStateMatcher = _defaultErrorStateMatcher;
      this._parentForm = _parentForm;
      this._parentFormGroup = _parentFormGroup;
      this.ngControl = ngControl;
    };

    if (false) {}
    /** @type {?} */


    var _MatInputMixinBase = Object(_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["mixinErrorState"])(MatInputBase);
    /**
     * Directive that allows a native input to work inside a `MatFormField`.
     */


    var MatInput =
    /*#__PURE__*/
    function (_MatInputMixinBase2) {
      _inherits(MatInput, _MatInputMixinBase2);

      /**
       * @param {?} _elementRef
       * @param {?} _platform
       * @param {?} ngControl
       * @param {?} _parentForm
       * @param {?} _parentFormGroup
       * @param {?} _defaultErrorStateMatcher
       * @param {?} inputValueAccessor
       * @param {?} _autofillMonitor
       * @param {?} ngZone
       */
      function MatInput(_elementRef, _platform, ngControl, _parentForm, _parentFormGroup, _defaultErrorStateMatcher, inputValueAccessor, _autofillMonitor, ngZone) {
        var _this9;

        _classCallCheck(this, MatInput);

        _this9 = _possibleConstructorReturn(this, _getPrototypeOf(MatInput).call(this, _defaultErrorStateMatcher, _parentForm, _parentFormGroup, ngControl));
        _this9._elementRef = _elementRef;
        _this9._platform = _platform;
        _this9.ngControl = ngControl;
        _this9._autofillMonitor = _autofillMonitor;
        _this9._uid = "mat-input-".concat(nextUniqueId++);
        /**
         * Whether the component is being rendered on the server.
         */

        _this9._isServer = false;
        /**
         * Whether the component is a native html select.
         */

        _this9._isNativeSelect = false;
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */

        _this9.focused = false;
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */

        _this9.stateChanges = new rxjs__WEBPACK_IMPORTED_MODULE_7__["Subject"]();
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */

        _this9.controlType = 'mat-input';
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         */

        _this9.autofilled = false;
        _this9._disabled = false;
        _this9._required = false;
        _this9._type = 'text';
        _this9._readonly = false;
        _this9._neverEmptyInputTypes = ['date', 'datetime', 'datetime-local', 'month', 'time', 'week'].filter(
        /**
        * @param {?} t
        * @return {?}
        */
        function (t) {
          return Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["getSupportedInputTypes"])().has(t);
        });
        /** @type {?} */

        var element = _this9._elementRef.nativeElement; // If no input value accessor was explicitly specified, use the element as the input value
        // accessor.

        _this9._inputValueAccessor = inputValueAccessor || element;
        _this9._previousNativeValue = _this9.value; // Force setter to be called in case id was not specified.

        _this9.id = _this9.id; // On some versions of iOS the caret gets stuck in the wrong place when holding down the delete
        // key. In order to get around this we need to "jiggle" the caret loose. Since this bug only
        // exists on iOS, we only bother to install the listener on iOS.

        if (_platform.IOS) {
          ngZone.runOutsideAngular(
          /**
          * @return {?}
          */
          function () {
            _elementRef.nativeElement.addEventListener('keyup',
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              /** @type {?} */
              var el =
              /** @type {?} */
              event.target;

              if (!el.value && !el.selectionStart && !el.selectionEnd) {
                // Note: Just setting `0, 0` doesn't fix the issue. Setting
                // `1, 1` fixes it for the first time that you type text and
                // then hold delete. Toggling to `1, 1` and then back to
                // `0, 0` seems to completely fix it.
                el.setSelectionRange(1, 1);
                el.setSelectionRange(0, 0);
              }
            });
          });
        }

        _this9._isServer = !_this9._platform.isBrowser;
        _this9._isNativeSelect = element.nodeName.toLowerCase() === 'select';

        if (_this9._isNativeSelect) {
          _this9.controlType =
          /** @type {?} */
          element.multiple ? 'mat-native-select-multiple' : 'mat-native-select';
        }

        return _this9;
      }
      /**
       * Implemented as part of MatFormFieldControl.
       * \@docs-private
       * @return {?}
       */


      _createClass(MatInput, [{
        key: "ngOnInit",

        /**
         * @return {?}
         */
        value: function ngOnInit() {
          var _this10 = this;

          if (this._platform.isBrowser) {
            this._autofillMonitor.monitor(this._elementRef.nativeElement).subscribe(
            /**
            * @param {?} event
            * @return {?}
            */
            function (event) {
              _this10.autofilled = event.isAutofilled;

              _this10.stateChanges.next();
            });
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnChanges",
        value: function ngOnChanges() {
          this.stateChanges.next();
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.stateChanges.complete();

          if (this._platform.isBrowser) {
            this._autofillMonitor.stopMonitoring(this._elementRef.nativeElement);
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngDoCheck",
        value: function ngDoCheck() {
          if (this.ngControl) {
            // We need to re-evaluate this on every change detection cycle, because there are some
            // error triggers that we can't subscribe to (e.g. parent form submissions). This means
            // that whatever logic is in here has to be super lean or we risk destroying the performance.
            this.updateErrorState();
          } // We need to dirty-check the native element's value, because there are some cases where
          // we won't be notified when it changes (e.g. the consumer isn't using forms or they're
          // updating the value using `emitEvent: false`).


          this._dirtyCheckNativeValue();
        }
        /**
         * Focuses the input.
         * @param {?=} options
         * @return {?}
         */

      }, {
        key: "focus",
        value: function focus(options) {
          this._elementRef.nativeElement.focus(options);
        }
        /**
         * Callback for the cases where the focused state of the input changes.
         * @param {?} isFocused
         * @return {?}
         */

      }, {
        key: "_focusChanged",
        value: function _focusChanged(isFocused) {
          if (isFocused !== this.focused && (!this.readonly || !isFocused)) {
            this.focused = isFocused;
            this.stateChanges.next();
          }
        }
        /**
         * @return {?}
         */

      }, {
        key: "_onInput",
        value: function _onInput() {} // This is a noop function and is used to let Angular know whenever the value changes.
        // Angular will run a new change detection each time the `input` event has been dispatched.
        // It's necessary that Angular recognizes the value change, because when floatingLabel
        // is set to false and Angular forms aren't used, the placeholder won't recognize the
        // value changes and will not disappear.
        // Listening to the input event wouldn't be necessary when the input is using the
        // FormsModule or ReactiveFormsModule, because Angular forms also listens to input events.

        /**
         * Determines if the component host is a textarea.
         * @return {?}
         */

      }, {
        key: "_isTextarea",
        value: function _isTextarea() {
          return this._elementRef.nativeElement.nodeName.toLowerCase() === 'textarea';
        }
        /**
         * Does some manual dirty checking on the native input `value` property.
         * @protected
         * @return {?}
         */

      }, {
        key: "_dirtyCheckNativeValue",
        value: function _dirtyCheckNativeValue() {
          /** @type {?} */
          var newValue = this._elementRef.nativeElement.value;

          if (this._previousNativeValue !== newValue) {
            this._previousNativeValue = newValue;
            this.stateChanges.next();
          }
        }
        /**
         * Make sure the input is a supported type.
         * @protected
         * @return {?}
         */

      }, {
        key: "_validateType",
        value: function _validateType() {
          if (MAT_INPUT_INVALID_TYPES.indexOf(this._type) > -1) {
            throw getMatInputUnsupportedTypeError(this._type);
          }
        }
        /**
         * Checks whether the input type is one of the types that are never empty.
         * @protected
         * @return {?}
         */

      }, {
        key: "_isNeverEmpty",
        value: function _isNeverEmpty() {
          return this._neverEmptyInputTypes.indexOf(this._type) > -1;
        }
        /**
         * Checks whether the input is invalid based on the native validation.
         * @protected
         * @return {?}
         */

      }, {
        key: "_isBadInput",
        value: function _isBadInput() {
          // The `validity` property won't be present on platform-server.

          /** @type {?} */
          var validity =
          /** @type {?} */
          this._elementRef.nativeElement.validity;
          return validity && validity.badInput;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "setDescribedByIds",

        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @param {?} ids
         * @return {?}
         */
        value: function setDescribedByIds(ids) {
          this._ariaDescribedby = ids.join(' ');
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "onContainerClick",
        value: function onContainerClick() {
          // Do not re-focus the input element if the element is already focused. Otherwise it can happen
          // that someone clicks on a time input and the cursor resets to the "hours" field while the
          // "minutes" field was actually clicked. See: https://github.com/angular/components/issues/12849
          if (!this.focused) {
            this.focus();
          }
        }
      }, {
        key: "disabled",
        get: function get() {
          if (this.ngControl && this.ngControl.disabled !== null) {
            return this.ngControl.disabled;
          }

          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value); // Browsers may not fire the blur event if the input is disabled too quickly.
          // Reset from here to ensure that the element doesn't become stuck.

          if (this.focused) {
            this.focused = false;
            this.stateChanges.next();
          }
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "id",
        get: function get() {
          return this._id;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._id = value || this._uid;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "required",
        get: function get() {
          return this._required;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._required = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
        /**
         * Input type of the element.
         * @return {?}
         */

      }, {
        key: "type",
        get: function get() {
          return this._type;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._type = value || 'text';

          this._validateType(); // When using Angular inputs, developers are no longer able to set the properties on the native
          // input element. To ensure that bindings for `type` work, we need to sync the setter
          // with the native property. Textarea elements don't support the type property or attribute.


          if (!this._isTextarea() && Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["getSupportedInputTypes"])().has(this._type)) {
            /** @type {?} */
            this._elementRef.nativeElement.type = this._type;
          }
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "value",
        get: function get() {
          return this._inputValueAccessor.value;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== this.value) {
            this._inputValueAccessor.value = value;
            this.stateChanges.next();
          }
        }
        /**
         * Whether the element is readonly.
         * @return {?}
         */

      }, {
        key: "readonly",
        get: function get() {
          return this._readonly;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._readonly = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_2__["coerceBooleanProperty"])(value);
        }
      }, {
        key: "empty",
        get: function get() {
          return !this._isNeverEmpty() && !this._elementRef.nativeElement.value && !this._isBadInput() && !this.autofilled;
        }
        /**
         * Implemented as part of MatFormFieldControl.
         * \@docs-private
         * @return {?}
         */

      }, {
        key: "shouldLabelFloat",
        get: function get() {
          if (this._isNativeSelect) {
            // For a single-selection `<select>`, the label should float when the selected option has
            // a non-empty display value. For a `<select multiple>`, the label *always* floats to avoid
            // overlapping the label with the options.

            /** @type {?} */
            var selectElement =
            /** @type {?} */
            this._elementRef.nativeElement;
            /** @type {?} */

            var firstOption = selectElement.options[0]; // On most browsers the `selectedIndex` will always be 0, however on IE and Edge it'll be
            // -1 if the `value` is set to something, that isn't in the list of options, at a later point.

            return this.focused || selectElement.multiple || !this.empty || !!(selectElement.selectedIndex > -1 && firstOption && firstOption.label);
          } else {
            return this.focused || !this.empty;
          }
        }
      }]);

      return MatInput;
    }(_MatInputMixinBase);

    MatInput.ɵfac = function MatInput_Factory(t) {
      return new (t || MatInput)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](MAT_INPUT_VALUE_ACCESSOR, 10), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]));
    };

    MatInput.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineDirective"]({
      type: MatInput,
      selectors: [["input", "matInput", ""], ["textarea", "matInput", ""], ["select", "matNativeControl", ""], ["input", "matNativeControl", ""], ["textarea", "matNativeControl", ""]],
      hostAttrs: [1, "mat-input-element", "mat-form-field-autofill-control"],
      hostVars: 10,
      hostBindings: function MatInput_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("blur", function MatInput_blur_HostBindingHandler() {
            return ctx._focusChanged(false);
          })("focus", function MatInput_focus_HostBindingHandler() {
            return ctx._focusChanged(true);
          })("input", function MatInput_input_HostBindingHandler() {
            return ctx._onInput();
          });
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵhostProperty"]("disabled", ctx.disabled)("required", ctx.required);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("id", ctx.id)("placeholder", ctx.placeholder)("readonly", ctx.readonly && !ctx._isNativeSelect || null)("aria-describedby", ctx._ariaDescribedby || null)("aria-invalid", ctx.errorState)("aria-required", ctx.required.toString());

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassProp"]("mat-input-server", ctx._isServer);
        }
      },
      inputs: {
        id: "id",
        disabled: "disabled",
        required: "required",
        type: "type",
        value: "value",
        readonly: "readonly",
        placeholder: "placeholder",
        errorStateMatcher: "errorStateMatcher"
      },
      exportAs: ["matInput"],
      features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵProvidersFeature"]([{
        provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldControl"],
        useExisting: MatInput
      }]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵNgOnChangesFeature"]]
    });
    /** @nocollapse */

    MatInput.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }]
      }, {
        type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
          args: [MAT_INPUT_VALUE_ACCESSOR]
        }]
      }, {
        type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    MatInput.propDecorators = {
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      id: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      placeholder: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      required: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      type: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      errorStateMatcher: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      value: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }],
      readonly: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatInput, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"],
        args: [{
          selector: "input[matInput], textarea[matInput], select[matNativeControl],\n      input[matNativeControl], textarea[matNativeControl]",
          exportAs: 'matInput',
          host: {
            /**
             * \@breaking-change 8.0.0 remove .mat-form-field-autofill-control in favor of AutofillMonitor.
             */
            'class': 'mat-input-element mat-form-field-autofill-control',
            '[class.mat-input-server]': '_isServer',
            // Native input properties that are overwritten by Angular inputs need to be synced with
            // the native input element. Otherwise property bindings for those don't work.
            '[attr.id]': 'id',
            '[attr.placeholder]': 'placeholder',
            '[disabled]': 'disabled',
            '[required]': 'required',
            '[attr.readonly]': 'readonly && !_isNativeSelect || null',
            '[attr.aria-describedby]': '_ariaDescribedby || null',
            '[attr.aria-invalid]': 'errorState',
            '[attr.aria-required]': 'required.toString()',
            '(blur)': '_focusChanged(false)',
            '(focus)': '_focusChanged(true)',
            '(input)': '_onInput()'
          },
          providers: [{
            provide: _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldControl"],
            useExisting: MatInput
          }]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_3__["Platform"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgForm"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroupDirective"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }]
        }, {
          type: _angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Self"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"],
            args: [MAT_INPUT_VALUE_ACCESSOR]
          }]
        }, {
          type: _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["AutofillMonitor"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
        }];
      }, {
        id: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        required: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        type: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        value: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        readonly: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        placeholder: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }],
        errorStateMatcher: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"]
        }]
      });
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/input/input-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatInputModule = function MatInputModule() {
      _classCallCheck(this, MatInputModule);
    };

    MatInputModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: MatInputModule
    });
    MatInputModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function MatInputModule_Factory(t) {
        return new (t || MatInputModule)();
      },
      providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]],
      imports: [[_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
      // be used together with `MatFormField`.
      _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](MatInputModule, {
        declarations: function declarations() {
          return [MatInput, MatTextareaAutosize];
        },
        imports: function imports() {
          return [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]];
        },
        exports: function exports() {
          return [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
          // be used together with `MatFormField`.
          _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], MatInput, MatTextareaAutosize];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MatInputModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [MatInput, MatTextareaAutosize],
          imports: [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"]],
          exports: [_angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_0__["TextFieldModule"], // We re-export the `MatFormFieldModule` since `MatInput` will almost always
          // be used together with `MatFormField`.
          _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], MatInput, MatTextareaAutosize],
          providers: [_angular_material_core__WEBPACK_IMPORTED_MODULE_5__["ErrorStateMatcher"]]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/input/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=input.js.map

    /***/

  },

  /***/
  "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js":
  /*!*************************************************************************!*\
    !*** ./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js ***!
    \*************************************************************************/

  /*! exports provided: MAT_TOOLTIP_DEFAULT_OPTIONS, MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY, MAT_TOOLTIP_SCROLL_STRATEGY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY, MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER, MatTooltip, MatTooltipModule, SCROLL_THROTTLE_MS, TOOLTIP_PANEL_CLASS, TooltipComponent, getMatTooltipInvalidPositionError, matTooltipAnimations */

  /***/
  function node_modulesAngularMaterial__ivy_ngcc__Fesm2015TooltipJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS", function () {
      return MAT_TOOLTIP_DEFAULT_OPTIONS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY", function () {
      return MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY", function () {
      return MAT_TOOLTIP_SCROLL_STRATEGY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY", function () {
      return MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER", function () {
      return MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTooltip", function () {
      return MatTooltip;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MatTooltipModule", function () {
      return MatTooltipModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SCROLL_THROTTLE_MS", function () {
      return SCROLL_THROTTLE_MS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TOOLTIP_PANEL_CLASS", function () {
      return TOOLTIP_PANEL_CLASS;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TooltipComponent", function () {
      return TooltipComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "getMatTooltipInvalidPositionError", function () {
      return getMatTooltipInvalidPositionError;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "matTooltipAnimations", function () {
      return matTooltipAnimations;
    });
    /* harmony import */


    var _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/cdk/overlay */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/overlay.js");
    /* harmony import */


    var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/cdk/a11y */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/a11y.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/cdk/bidi */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/bidi.js");
    /* harmony import */


    var _angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/cdk/coercion */
    "./node_modules/@angular/cdk/fesm2015/coercion.js");
    /* harmony import */


    var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/keycodes */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/keycodes.js");
    /* harmony import */


    var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/cdk/layout */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/layout.js");
    /* harmony import */


    var _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/cdk/platform */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/platform.js");
    /* harmony import */


    var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/cdk/portal */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/portal.js");
    /* harmony import */


    var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/cdk/scrolling */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/scrolling.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tooltip/tooltip-animations.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Animations used by MatTooltip.
     * \@docs-private
     * @type {?}
     */


    var matTooltipAnimations = {
      /**
       * Animation that transitions a tooltip in and out.
       */
      tooltipState: Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["trigger"])('state', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('initial, void, hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
        opacity: 0,
        transform: 'scale(0)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["state"])('visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
        transform: 'scale(1)'
      })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => visible', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('200ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["keyframes"])([Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
        opacity: 0,
        transform: 'scale(0)',
        offset: 0
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
        opacity: 0.5,
        transform: 'scale(0.99)',
        offset: 0.5
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
        opacity: 1,
        transform: 'scale(1)',
        offset: 1
      })]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["transition"])('* => hidden', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["animate"])('100ms cubic-bezier(0, 0, 0.2, 1)', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_14__["style"])({
        opacity: 0
      })))])
    };
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tooltip/tooltip.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Time in ms to throttle repositioning after scroll events.
     * @type {?}
     */

    var SCROLL_THROTTLE_MS = 20;
    /**
     * CSS class that will be attached to the overlay panel.
     * @type {?}
     */

    var TOOLTIP_PANEL_CLASS = 'mat-tooltip-panel';
    /**
     * Options used to bind passive event listeners.
     * @type {?}
     */

    var passiveListenerOptions = Object(_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["normalizePassiveListenerOptions"])({
      passive: true
    });
    /**
     * Time between the user putting the pointer on a tooltip
     * trigger and the long press event being fired.
     * @type {?}
     */

    var LONGPRESS_DELAY = 500;
    /**
     * Creates an error to be thrown if the user supplied an invalid tooltip position.
     * \@docs-private
     * @param {?} position
     * @return {?}
     */

    function getMatTooltipInvalidPositionError(position) {
      return Error("Tooltip position \"".concat(position, "\" is invalid."));
    }
    /**
     * Injection token that determines the scroll handling while a tooltip is visible.
     * @type {?}
     */


    var MAT_TOOLTIP_SCROLL_STRATEGY = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-tooltip-scroll-strategy');
    /**
     * \@docs-private
     * @param {?} overlay
     * @return {?}
     */

    function MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY(overlay) {
      return (
        /**
        * @return {?}
        */
        function () {
          return overlay.scrollStrategies.reposition({
            scrollThrottle: SCROLL_THROTTLE_MS
          });
        }
      );
    }
    /**
     * \@docs-private
     * @type {?}
     */


    var MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER = {
      provide: MAT_TOOLTIP_SCROLL_STRATEGY,
      deps: [_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]],
      useFactory: MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY
    };
    /**
     * Default `matTooltip` options that can be overridden.
     * @record
     */

    function MatTooltipDefaultOptions() {}

    if (false) {}
    /**
     * Injection token to be used to override the default options for `matTooltip`.
     * @type {?}
     */


    var MAT_TOOLTIP_DEFAULT_OPTIONS = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["InjectionToken"]('mat-tooltip-default-options', {
      providedIn: 'root',
      factory: MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY
    });
    /**
     * \@docs-private
     * @return {?}
     */

    function MAT_TOOLTIP_DEFAULT_OPTIONS_FACTORY() {
      return {
        showDelay: 0,
        hideDelay: 0,
        touchendHideDelay: 1500
      };
    }
    /**
     * Directive that attaches a material design tooltip to the host element. Animates the showing and
     * hiding of a tooltip provided position (defaults to below the element).
     *
     * https://material.io/design/components/tooltips.html
     */


    var MatTooltip =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _overlay
       * @param {?} _elementRef
       * @param {?} _scrollDispatcher
       * @param {?} _viewContainerRef
       * @param {?} _ngZone
       * @param {?} _platform
       * @param {?} _ariaDescriber
       * @param {?} _focusMonitor
       * @param {?} scrollStrategy
       * @param {?} _dir
       * @param {?} _defaultOptions
       * @param {?=} _hammerLoader
       */
      function MatTooltip(_overlay, _elementRef, _scrollDispatcher, _viewContainerRef, _ngZone, _platform, _ariaDescriber, _focusMonitor, scrollStrategy, _dir, _defaultOptions,
      /**
       * @deprecated _hammerLoader parameter to be removed.
       * @breaking-change 9.0.0
       */
      // Note that we need to give Angular something to inject here so it doesn't throw.
      _hammerLoader) {
        var _this11 = this;

        _classCallCheck(this, MatTooltip);

        this._overlay = _overlay;
        this._elementRef = _elementRef;
        this._scrollDispatcher = _scrollDispatcher;
        this._viewContainerRef = _viewContainerRef;
        this._ngZone = _ngZone;
        this._platform = _platform;
        this._ariaDescriber = _ariaDescriber;
        this._focusMonitor = _focusMonitor;
        this._dir = _dir;
        this._defaultOptions = _defaultOptions;
        this._position = 'below';
        this._disabled = false;
        /**
         * The default delay in ms before showing the tooltip after show is called
         */

        this.showDelay = this._defaultOptions.showDelay;
        /**
         * The default delay in ms before hiding the tooltip after hide is called
         */

        this.hideDelay = this._defaultOptions.hideDelay;
        /**
         * How touch gestures should be handled by the tooltip. On touch devices the tooltip directive
         * uses a long press gesture to show and hide, however it can conflict with the native browser
         * gestures. To work around the conflict, Angular Material disables native gestures on the
         * trigger, but that might not be desirable on particular elements (e.g. inputs and draggable
         * elements). The different values for this option configure the touch event handling as follows:
         * - `auto` - Enables touch gestures for all elements, but tries to avoid conflicts with native
         *   browser gestures on particular elements. In particular, it allows text selection on inputs
         *   and textareas, and preserves the native browser dragging on elements marked as `draggable`.
         * - `on` - Enables touch gestures for all elements and disables native
         *   browser gestures with no exceptions.
         * - `off` - Disables touch gestures. Note that this will prevent the tooltip from
         *   showing on touch devices.
         */

        this.touchGestures = 'auto';
        this._message = '';
        /**
         * Manually-bound passive event listeners.
         */

        this._passiveListeners = new Map();
        /**
         * Emits when the component is destroyed.
         */

        this._destroyed = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        /**
         * Handles the keydown events on the host element.
         * Needs to be an arrow function so that we can use it in addEventListener.
         */

        this._handleKeydown =
        /**
        * @param {?} event
        * @return {?}
        */
        function (event) {
          if (_this11._isTooltipVisible() && event.keyCode === _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["ESCAPE"] && !Object(_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_7__["hasModifierKey"])(event)) {
            event.preventDefault();
            event.stopPropagation();

            _this11._ngZone.run(
            /**
            * @return {?}
            */
            function () {
              return _this11.hide(0);
            });
          }
        };

        this._scrollStrategy = scrollStrategy;

        if (_defaultOptions) {
          if (_defaultOptions.position) {
            this.position = _defaultOptions.position;
          }

          if (_defaultOptions.touchGestures) {
            this.touchGestures = _defaultOptions.touchGestures;
          }
        }

        _focusMonitor.monitor(_elementRef).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(
        /**
        * @param {?} origin
        * @return {?}
        */
        function (origin) {
          // Note that the focus monitor runs outside the Angular zone.
          if (!origin) {
            _ngZone.run(
            /**
            * @return {?}
            */
            function () {
              return _this11.hide(0);
            });
          } else if (origin === 'keyboard') {
            _ngZone.run(
            /**
            * @return {?}
            */
            function () {
              return _this11.show();
            });
          }
        });

        _ngZone.runOutsideAngular(
        /**
        * @return {?}
        */
        function () {
          _elementRef.nativeElement.addEventListener('keydown', _this11._handleKeydown);
        });
      }
      /**
       * Allows the user to define the position of the tooltip relative to the parent element
       * @return {?}
       */


      _createClass(MatTooltip, [{
        key: "ngOnInit",

        /**
         * Setup styling-specific things
         * @return {?}
         */
        value: function ngOnInit() {
          // This needs to happen in `ngOnInit` so the initial values for all inputs have been set.
          this._setupPointerEvents();
        }
        /**
         * Dispose the tooltip when destroyed.
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          /** @type {?} */
          var nativeElement = this._elementRef.nativeElement;
          clearTimeout(this._touchstartTimeout);

          if (this._overlayRef) {
            this._overlayRef.dispose();

            this._tooltipInstance = null;
          } // Clean up the event listeners set in the constructor


          nativeElement.removeEventListener('keydown', this._handleKeydown);

          this._passiveListeners.forEach(
          /**
          * @param {?} listener
          * @param {?} event
          * @return {?}
          */
          function (listener, event) {
            nativeElement.removeEventListener(event, listener, passiveListenerOptions);
          });

          this._passiveListeners.clear();

          this._destroyed.next();

          this._destroyed.complete();

          this._ariaDescriber.removeDescription(nativeElement, this.message);

          this._focusMonitor.stopMonitoring(nativeElement);
        }
        /**
         * Shows the tooltip after the delay in ms, defaults to tooltip-delay-show or 0ms if no input
         * @param {?=} delay
         * @return {?}
         */

      }, {
        key: "show",
        value: function show() {
          var _this12 = this;

          var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.showDelay;

          if (this.disabled || !this.message || this._isTooltipVisible() && !
          /** @type {?} */
          this._tooltipInstance._showTimeoutId && !
          /** @type {?} */
          this._tooltipInstance._hideTimeoutId) {
            return;
          }
          /** @type {?} */


          var overlayRef = this._createOverlay();

          this._detach();

          this._portal = this._portal || new _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_10__["ComponentPortal"](TooltipComponent, this._viewContainerRef);
          this._tooltipInstance = overlayRef.attach(this._portal).instance;

          this._tooltipInstance.afterHidden().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this12._detach();
          });

          this._setTooltipClass(this._tooltipClass);

          this._updateTooltipMessage();

          /** @type {?} */
          this._tooltipInstance.show(delay);
        }
        /**
         * Hides the tooltip after the delay in ms, defaults to tooltip-delay-hide or 0ms if no input
         * @param {?=} delay
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide() {
          var delay = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.hideDelay;

          if (this._tooltipInstance) {
            this._tooltipInstance.hide(delay);
          }
        }
        /**
         * Shows/hides the tooltip
         * @return {?}
         */

      }, {
        key: "toggle",
        value: function toggle() {
          this._isTooltipVisible() ? this.hide() : this.show();
        }
        /**
         * Returns true if the tooltip is currently visible to the user
         * @return {?}
         */

      }, {
        key: "_isTooltipVisible",
        value: function _isTooltipVisible() {
          return !!this._tooltipInstance && this._tooltipInstance.isVisible();
        }
        /**
         * Create the overlay config and position strategy
         * @private
         * @return {?}
         */

      }, {
        key: "_createOverlay",
        value: function _createOverlay() {
          var _this13 = this;

          if (this._overlayRef) {
            return this._overlayRef;
          }
          /** @type {?} */


          var scrollableAncestors = this._scrollDispatcher.getAncestorScrollContainers(this._elementRef); // Create connected position strategy that listens for scroll events to reposition.

          /** @type {?} */


          var strategy = this._overlay.position().flexibleConnectedTo(this._elementRef).withTransformOriginOn('.mat-tooltip').withFlexibleDimensions(false).withViewportMargin(8).withScrollableContainers(scrollableAncestors);

          strategy.positionChanges.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @param {?} change
          * @return {?}
          */
          function (change) {
            if (_this13._tooltipInstance) {
              if (change.scrollableViewProperties.isOverlayClipped && _this13._tooltipInstance.isVisible()) {
                // After position changes occur and the overlay is clipped by
                // a parent scrollable then close the tooltip.
                _this13._ngZone.run(
                /**
                * @return {?}
                */
                function () {
                  return _this13.hide(0);
                });
              }
            }
          });
          this._overlayRef = this._overlay.create({
            direction: this._dir,
            positionStrategy: strategy,
            panelClass: TOOLTIP_PANEL_CLASS,
            scrollStrategy: this._scrollStrategy()
          });

          this._updatePosition();

          this._overlayRef.detachments().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(
          /**
          * @return {?}
          */
          function () {
            return _this13._detach();
          });

          return this._overlayRef;
        }
        /**
         * Detaches the currently-attached tooltip.
         * @private
         * @return {?}
         */

      }, {
        key: "_detach",
        value: function _detach() {
          if (this._overlayRef && this._overlayRef.hasAttached()) {
            this._overlayRef.detach();
          }

          this._tooltipInstance = null;
        }
        /**
         * Updates the position of the current tooltip.
         * @private
         * @return {?}
         */

      }, {
        key: "_updatePosition",
        value: function _updatePosition() {
          /** @type {?} */
          var position =
          /** @type {?} */

          /** @type {?} */
          this._overlayRef.getConfig().positionStrategy;
          /** @type {?} */


          var origin = this._getOrigin();
          /** @type {?} */


          var overlay = this._getOverlayPosition();

          position.withPositions([Object.assign(Object.assign({}, origin.main), overlay.main), Object.assign(Object.assign({}, origin.fallback), overlay.fallback)]);
        }
        /**
         * Returns the origin position and a fallback position based on the user's position preference.
         * The fallback position is the inverse of the origin (e.g. `'below' -> 'above'`).
         * @return {?}
         */

      }, {
        key: "_getOrigin",
        value: function _getOrigin() {
          /** @type {?} */
          var isLtr = !this._dir || this._dir.value == 'ltr';
          /** @type {?} */

          var position = this.position;
          /** @type {?} */

          var originPosition;

          if (position == 'above' || position == 'below') {
            originPosition = {
              originX: 'center',
              originY: position == 'above' ? 'top' : 'bottom'
            };
          } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
            originPosition = {
              originX: 'start',
              originY: 'center'
            };
          } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
            originPosition = {
              originX: 'end',
              originY: 'center'
            };
          } else {
            throw getMatTooltipInvalidPositionError(position);
          }

          var _this$_invertPosition = this._invertPosition(originPosition.originX, originPosition.originY),
              x = _this$_invertPosition.x,
              y = _this$_invertPosition.y;

          return {
            main: originPosition,
            fallback: {
              originX: x,
              originY: y
            }
          };
        }
        /**
         * Returns the overlay position and a fallback position based on the user's preference
         * @return {?}
         */

      }, {
        key: "_getOverlayPosition",
        value: function _getOverlayPosition() {
          /** @type {?} */
          var isLtr = !this._dir || this._dir.value == 'ltr';
          /** @type {?} */

          var position = this.position;
          /** @type {?} */

          var overlayPosition;

          if (position == 'above') {
            overlayPosition = {
              overlayX: 'center',
              overlayY: 'bottom'
            };
          } else if (position == 'below') {
            overlayPosition = {
              overlayX: 'center',
              overlayY: 'top'
            };
          } else if (position == 'before' || position == 'left' && isLtr || position == 'right' && !isLtr) {
            overlayPosition = {
              overlayX: 'end',
              overlayY: 'center'
            };
          } else if (position == 'after' || position == 'right' && isLtr || position == 'left' && !isLtr) {
            overlayPosition = {
              overlayX: 'start',
              overlayY: 'center'
            };
          } else {
            throw getMatTooltipInvalidPositionError(position);
          }

          var _this$_invertPosition2 = this._invertPosition(overlayPosition.overlayX, overlayPosition.overlayY),
              x = _this$_invertPosition2.x,
              y = _this$_invertPosition2.y;

          return {
            main: overlayPosition,
            fallback: {
              overlayX: x,
              overlayY: y
            }
          };
        }
        /**
         * Updates the tooltip message and repositions the overlay according to the new message length
         * @private
         * @return {?}
         */

      }, {
        key: "_updateTooltipMessage",
        value: function _updateTooltipMessage() {
          var _this14 = this;

          // Must wait for the message to be painted to the tooltip so that the overlay can properly
          // calculate the correct positioning based on the size of the text.
          if (this._tooltipInstance) {
            this._tooltipInstance.message = this.message;

            this._tooltipInstance._markForCheck();

            this._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_13__["takeUntil"])(this._destroyed)).subscribe(
            /**
            * @return {?}
            */
            function () {
              if (_this14._tooltipInstance) {
                /** @type {?} */
                _this14._overlayRef.updatePosition();
              }
            });
          }
        }
        /**
         * Updates the tooltip class
         * @private
         * @param {?} tooltipClass
         * @return {?}
         */

      }, {
        key: "_setTooltipClass",
        value: function _setTooltipClass(tooltipClass) {
          if (this._tooltipInstance) {
            this._tooltipInstance.tooltipClass = tooltipClass;

            this._tooltipInstance._markForCheck();
          }
        }
        /**
         * Inverts an overlay position.
         * @private
         * @param {?} x
         * @param {?} y
         * @return {?}
         */

      }, {
        key: "_invertPosition",
        value: function _invertPosition(x, y) {
          if (this.position === 'above' || this.position === 'below') {
            if (y === 'top') {
              y = 'bottom';
            } else if (y === 'bottom') {
              y = 'top';
            }
          } else {
            if (x === 'end') {
              x = 'start';
            } else if (x === 'start') {
              x = 'end';
            }
          }

          return {
            x: x,
            y: y
          };
        }
        /**
         * Binds the pointer events to the tooltip trigger.
         * @private
         * @return {?}
         */

      }, {
        key: "_setupPointerEvents",
        value: function _setupPointerEvents() {
          var _this15 = this;

          // The mouse events shouldn't be bound on mobile devices, because they can prevent the
          // first tap from firing its click event or can cause the tooltip to open for clicks.
          if (!this._platform.IOS && !this._platform.ANDROID) {
            this._passiveListeners.set('mouseenter',
            /**
            * @return {?}
            */
            function () {
              return _this15.show();
            }).set('mouseleave',
            /**
            * @return {?}
            */
            function () {
              return _this15.hide();
            });
          } else if (this.touchGestures !== 'off') {
            this._disableNativeGesturesIfNecessary();
            /** @type {?} */


            var touchendListener =
            /**
            * @return {?}
            */
            function touchendListener() {
              clearTimeout(_this15._touchstartTimeout);

              _this15.hide(_this15._defaultOptions.touchendHideDelay);
            };

            this._passiveListeners.set('touchend', touchendListener).set('touchcancel', touchendListener).set('touchstart',
            /**
            * @return {?}
            */
            function () {
              // Note that it's important that we don't `preventDefault` here,
              // because it can prevent click events from firing on the element.
              clearTimeout(_this15._touchstartTimeout);
              _this15._touchstartTimeout = setTimeout(
              /**
              * @return {?}
              */
              function () {
                return _this15.show();
              }, LONGPRESS_DELAY);
            });
          }

          this._passiveListeners.forEach(
          /**
          * @param {?} listener
          * @param {?} event
          * @return {?}
          */
          function (listener, event) {
            _this15._elementRef.nativeElement.addEventListener(event, listener, passiveListenerOptions);
          });
        }
        /**
         * Disables the native browser gestures, based on how the tooltip has been configured.
         * @private
         * @return {?}
         */

      }, {
        key: "_disableNativeGesturesIfNecessary",
        value: function _disableNativeGesturesIfNecessary() {
          /** @type {?} */
          var element = this._elementRef.nativeElement;
          /** @type {?} */

          var style = element.style;
          /** @type {?} */

          var gestures = this.touchGestures;

          if (gestures !== 'off') {
            // If gestures are set to `auto`, we don't disable text selection on inputs and
            // textareas, because it prevents the user from typing into them on iOS Safari.
            if (gestures === 'on' || element.nodeName !== 'INPUT' && element.nodeName !== 'TEXTAREA') {
              style.userSelect = style.msUserSelect = style.webkitUserSelect =
              /** @type {?} */
              style.MozUserSelect = 'none';
            } // If we have `auto` gestures and the element uses native HTML dragging,
            // we don't set `-webkit-user-drag` because it prevents the native behavior.


            if (gestures === 'on' || !element.draggable) {
              /** @type {?} */
              style.webkitUserDrag = 'none';
            }

            style.touchAction = 'none';
            style.webkitTapHighlightColor = 'transparent';
          }
        }
      }, {
        key: "position",
        get: function get() {
          return this._position;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          if (value !== this._position) {
            this._position = value;

            if (this._overlayRef) {
              this._updatePosition();

              if (this._tooltipInstance) {
                /** @type {?} */
                this._tooltipInstance.show(0);
              }

              this._overlayRef.updatePosition();
            }
          }
        }
        /**
         * Disables the display of the tooltip.
         * @return {?}
         */

      }, {
        key: "disabled",
        get: function get() {
          return this._disabled;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._disabled = Object(_angular_cdk_coercion__WEBPACK_IMPORTED_MODULE_6__["coerceBooleanProperty"])(value); // If tooltip is disabled, hide immediately.

          if (this._disabled) {
            this.hide(0);
          }
        }
        /**
         * The message to be displayed in the tooltip
         * @return {?}
         */

      }, {
        key: "message",
        get: function get() {
          return this._message;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          var _this16 = this;

          this._ariaDescriber.removeDescription(this._elementRef.nativeElement, this._message); // If the message is not a string (e.g. number), convert it to a string and trim it.


          this._message = value != null ? "".concat(value).trim() : '';

          if (!this._message && this._isTooltipVisible()) {
            this.hide(0);
          } else {
            this._updateTooltipMessage();

            this._ngZone.runOutsideAngular(
            /**
            * @return {?}
            */
            function () {
              // The `AriaDescriber` has some functionality that avoids adding a description if it's the
              // same as the `aria-label` of an element, however we can't know whether the tooltip trigger
              // has a data-bound `aria-label` or when it'll be set for the first time. We can avoid the
              // issue by deferring the description by a tick so Angular has time to set the `aria-label`.
              Promise.resolve().then(
              /**
              * @return {?}
              */
              function () {
                _this16._ariaDescriber.describe(_this16._elementRef.nativeElement, _this16.message);
              });
            });
          }
        }
        /**
         * Classes to be passed to the tooltip. Supports the same syntax as `ngClass`.
         * @return {?}
         */

      }, {
        key: "tooltipClass",
        get: function get() {
          return this._tooltipClass;
        }
        /**
         * @param {?} value
         * @return {?}
         */
        ,
        set: function set(value) {
          this._tooltipClass = value;

          if (this._tooltipInstance) {
            this._setTooltipClass(this._tooltipClass);
          }
        }
      }]);

      return MatTooltip;
    }();

    MatTooltip.ɵfac = function MatTooltip_Factory(t) {
      return new (t || MatTooltip)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["ScrollDispatcher"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["AriaDescriber"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_TOOLTIP_SCROLL_STRATEGY), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"], 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](MAT_TOOLTIP_DEFAULT_OPTIONS, 8), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]));
    };

    MatTooltip.ɵdir = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineDirective"]({
      type: MatTooltip,
      selectors: [["", "matTooltip", ""]],
      inputs: {
        showDelay: ["matTooltipShowDelay", "showDelay"],
        hideDelay: ["matTooltipHideDelay", "hideDelay"],
        touchGestures: ["matTooltipTouchGestures", "touchGestures"],
        position: ["matTooltipPosition", "position"],
        disabled: ["matTooltipDisabled", "disabled"],
        message: ["matTooltip", "message"],
        tooltipClass: ["matTooltipClass", "tooltipClass"]
      },
      exportAs: ["matTooltip"]
    });
    /** @nocollapse */

    MatTooltip.ctorParameters = function () {
      return [{
        type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
      }, {
        type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["ScrollDispatcher"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
      }, {
        type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["AriaDescriber"]
      }, {
        type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_TOOLTIP_SCROLL_STRATEGY]
        }]
      }, {
        type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"],
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [MAT_TOOLTIP_DEFAULT_OPTIONS]
        }]
      }, {
        type: undefined,
        decorators: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
          args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]]
        }]
      }];
    };

    MatTooltip.propDecorators = {
      position: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['matTooltipPosition']
      }],
      disabled: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['matTooltipDisabled']
      }],
      showDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['matTooltipShowDelay']
      }],
      hideDelay: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['matTooltipHideDelay']
      }],
      touchGestures: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['matTooltipTouchGestures']
      }],
      message: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['matTooltip']
      }],
      tooltipClass: [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
        args: ['matTooltipClass']
      }]
    };
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatTooltip, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Directive"],
        args: [{
          selector: '[matTooltip]',
          exportAs: 'matTooltip'
        }]
      }], function () {
        return [{
          type: _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["Overlay"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]
        }, {
          type: _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_11__["ScrollDispatcher"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewContainerRef"]
        }, {
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgZone"]
        }, {
          type: _angular_cdk_platform__WEBPACK_IMPORTED_MODULE_9__["Platform"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["AriaDescriber"]
        }, {
          type: _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["FocusMonitor"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_TOOLTIP_SCROLL_STRATEGY]
          }]
        }, {
          type: _angular_cdk_bidi__WEBPACK_IMPORTED_MODULE_5__["Directionality"],
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Optional"]
          }, {
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [MAT_TOOLTIP_DEFAULT_OPTIONS]
          }]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Inject"],
            args: [_angular_core__WEBPACK_IMPORTED_MODULE_3__["ElementRef"]]
          }]
        }];
      }, {
        showDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matTooltipShowDelay']
        }],
        hideDelay: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matTooltipHideDelay']
        }],
        touchGestures: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matTooltipTouchGestures']
        }],
        position: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matTooltipPosition']
        }],
        disabled: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matTooltipDisabled']
        }],
        message: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matTooltip']
        }],
        tooltipClass: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"],
          args: ['matTooltipClass']
        }]
      });
    })();

    if (false) {}
    /**
     * Internal component that wraps the tooltip's content.
     * \@docs-private
     */


    var TooltipComponent =
    /*#__PURE__*/
    function () {
      /**
       * @param {?} _changeDetectorRef
       * @param {?} _breakpointObserver
       */
      function TooltipComponent(_changeDetectorRef, _breakpointObserver) {
        _classCallCheck(this, TooltipComponent);

        this._changeDetectorRef = _changeDetectorRef;
        this._breakpointObserver = _breakpointObserver;
        /**
         * Property watched by the animation framework to show or hide the tooltip
         */

        this._visibility = 'initial';
        /**
         * Whether interactions on the page should close the tooltip
         */

        this._closeOnInteraction = false;
        /**
         * Subject for notifying that the tooltip has been hidden from the view
         */

        this._onHide = new rxjs__WEBPACK_IMPORTED_MODULE_12__["Subject"]();
        /**
         * Stream that emits whether the user has a handset-sized display.
         */

        this._isHandset = this._breakpointObserver.observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["Breakpoints"].Handset);
      }
      /**
       * Shows the tooltip with an animation originating from the provided origin
       * @param {?} delay Amount of milliseconds to the delay showing the tooltip.
       * @return {?}
       */


      _createClass(TooltipComponent, [{
        key: "show",
        value: function show(delay) {
          var _this17 = this;

          // Cancel the delayed hide if it is scheduled
          if (this._hideTimeoutId) {
            clearTimeout(this._hideTimeoutId);
            this._hideTimeoutId = null;
          } // Body interactions should cancel the tooltip if there is a delay in showing.


          this._closeOnInteraction = true;
          this._showTimeoutId = setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this17._visibility = 'visible';
            _this17._showTimeoutId = null; // Mark for check so if any parent component has set the
            // ChangeDetectionStrategy to OnPush it will be checked anyways

            _this17._markForCheck();
          }, delay);
        }
        /**
         * Begins the animation to hide the tooltip after the provided delay in ms.
         * @param {?} delay Amount of milliseconds to delay showing the tooltip.
         * @return {?}
         */

      }, {
        key: "hide",
        value: function hide(delay) {
          var _this18 = this;

          // Cancel the delayed show if it is scheduled
          if (this._showTimeoutId) {
            clearTimeout(this._showTimeoutId);
            this._showTimeoutId = null;
          }

          this._hideTimeoutId = setTimeout(
          /**
          * @return {?}
          */
          function () {
            _this18._visibility = 'hidden';
            _this18._hideTimeoutId = null; // Mark for check so if any parent component has set the
            // ChangeDetectionStrategy to OnPush it will be checked anyways

            _this18._markForCheck();
          }, delay);
        }
        /**
         * Returns an observable that notifies when the tooltip has been hidden from view.
         * @return {?}
         */

      }, {
        key: "afterHidden",
        value: function afterHidden() {
          return this._onHide.asObservable();
        }
        /**
         * Whether the tooltip is being displayed.
         * @return {?}
         */

      }, {
        key: "isVisible",
        value: function isVisible() {
          return this._visibility === 'visible';
        }
        /**
         * @return {?}
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this._onHide.complete();
        }
        /**
         * @return {?}
         */

      }, {
        key: "_animationStart",
        value: function _animationStart() {
          this._closeOnInteraction = false;
        }
        /**
         * @param {?} event
         * @return {?}
         */

      }, {
        key: "_animationDone",
        value: function _animationDone(event) {
          /** @type {?} */
          var toState =
          /** @type {?} */
          event.toState;

          if (toState === 'hidden' && !this.isVisible()) {
            this._onHide.next();
          }

          if (toState === 'visible' || toState === 'hidden') {
            this._closeOnInteraction = true;
          }
        }
        /**
         * Interactions on the HTML body should close the tooltip immediately as defined in the
         * material design spec.
         * https://material.io/design/components/tooltips.html#behavior
         * @return {?}
         */

      }, {
        key: "_handleBodyInteraction",
        value: function _handleBodyInteraction() {
          if (this._closeOnInteraction) {
            this.hide(0);
          }
        }
        /**
         * Marks that the tooltip needs to be checked in the next change detection run.
         * Mainly used for rendering the initial text before positioning a tooltip, which
         * can be problematic in components with OnPush change detection.
         * @return {?}
         */

      }, {
        key: "_markForCheck",
        value: function _markForCheck() {
          this._changeDetectorRef.markForCheck();
        }
      }]);

      return TooltipComponent;
    }();

    TooltipComponent.ɵfac = function TooltipComponent_Factory(t) {
      return new (t || TooltipComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdirectiveInject"](_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["BreakpointObserver"]));
    };

    TooltipComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineComponent"]({
      type: TooltipComponent,
      selectors: [["mat-tooltip-component"]],
      hostAttrs: ["aria-hidden", "true"],
      hostVars: 2,
      hostBindings: function TooltipComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("click", function TooltipComponent_click_HostBindingHandler() {
            return ctx._handleBodyInteraction();
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵresolveBody"]);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵstyleProp"]("zoom", ctx._visibility === "visible" ? 1 : null);
        }
      },
      decls: 3,
      vars: 7,
      consts: [[1, "mat-tooltip", 3, "ngClass"]],
      template: function TooltipComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵlistener"]("@state.start", function TooltipComponent_Template_div_animation_state_start_0_listener() {
            return ctx._animationStart();
          })("@state.done", function TooltipComponent_Template_div_animation_state_done_0_listener($event) {
            return ctx._animationDone($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipe"](1, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var tmp_0_0 = null;
          var currVal_0 = (tmp_0_0 = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵpipeBind1"](1, 5, ctx._isHandset)) == null ? null : tmp_0_0.matches;

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵclassProp"]("mat-tooltip-handset", currVal_0);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵproperty"]("ngClass", ctx.tooltipClass)("@state", ctx._visibility);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵtextInterpolate"](ctx.message);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"]],
      styles: [".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"],
      encapsulation: 2,
      data: {
        animation: [matTooltipAnimations.tooltipState]
      },
      changeDetection: 0
    });
    /** @nocollapse */

    TooltipComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
      }, {
        type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["BreakpointObserver"]
      }];
    };
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](TooltipComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"],
        args: [{
          selector: 'mat-tooltip-component',
          template: "<div class=\"mat-tooltip\"\n     [ngClass]=\"tooltipClass\"\n     [class.mat-tooltip-handset]=\"(_isHandset | async)?.matches\"\n     [@state]=\"_visibility\"\n     (@state.start)=\"_animationStart()\"\n     (@state.done)=\"_animationDone($event)\">{{message}}</div>\n",
          encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewEncapsulation"].None,
          changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectionStrategy"].OnPush,
          animations: [matTooltipAnimations.tooltipState],
          host: {
            // Forces the element to have a layout in IE and Edge. This fixes issues where the element
            // won't be rendered if the animations are disabled or there is no web animations polyfill.
            '[style.zoom]': '_visibility === "visible" ? 1 : null',
            '(body:click)': 'this._handleBodyInteraction()',
            'aria-hidden': 'true'
          },
          styles: [".mat-tooltip-panel{pointer-events:none !important}.mat-tooltip{color:#fff;border-radius:4px;margin:14px;max-width:250px;padding-left:8px;padding-right:8px;overflow:hidden;text-overflow:ellipsis}.cdk-high-contrast-active .mat-tooltip{outline:solid 1px}.mat-tooltip-handset{margin:24px;padding-left:16px;padding-right:16px}\n"]
        }]
      }], function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ChangeDetectorRef"]
        }, {
          type: _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_8__["BreakpointObserver"]
        }];
      }, null);
    })();

    if (false) {}
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tooltip/tooltip-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */


    var MatTooltipModule = function MatTooltipModule() {
      _classCallCheck(this, MatTooltipModule);
    };

    MatTooltipModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
      type: MatTooltipModule
    });
    MatTooltipModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
      factory: function MatTooltipModule_Factory(t) {
        return new (t || MatTooltipModule)();
      },
      providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER],
      imports: [[_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](MatTooltipModule, {
        declarations: function declarations() {
          return [MatTooltip, TooltipComponent];
        },
        imports: function imports() {
          return [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]];
        },
        exports: function exports() {
          return [MatTooltip, TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]];
        }
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵsetClassMetadata"](MatTooltipModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"],
        args: [{
          imports: [_angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_1__["A11yModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_cdk_overlay__WEBPACK_IMPORTED_MODULE_0__["OverlayModule"], _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]],
          exports: [MatTooltip, TooltipComponent, _angular_material_core__WEBPACK_IMPORTED_MODULE_4__["MatCommonModule"]],
          declarations: [MatTooltip, TooltipComponent],
          entryComponents: [TooltipComponent],
          providers: [MAT_TOOLTIP_SCROLL_STRATEGY_FACTORY_PROVIDER]
        }]
      }], null, null);
    })();
    /**
     * @fileoverview added by tsickle
     * Generated from: src/material/tooltip/public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=tooltip.js.map

    /***/

  },

  /***/
  "./src/app/core/services/announcement.service.ts":
  /*!*******************************************************!*\
    !*** ./src/app/core/services/announcement.service.ts ***!
    \*******************************************************/

  /*! exports provided: AnnouncementService */

  /***/
  function srcAppCoreServicesAnnouncementServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnnouncementService", function () {
      return AnnouncementService;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var AnnouncementService =
    /*#__PURE__*/
    function () {
      function AnnouncementService(http) {
        _classCallCheck(this, AnnouncementService);

        this.http = http;
        this.checkedCourses = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([0]);
        this.sharedCheckedCourses = this.checkedCourses.asObservable();
        this.editCourses = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"]([{}]);
        this.sharedEditCourses = this.editCourses.asObservable();
      }

      _createClass(AnnouncementService, [{
        key: "nextCheckedCourses",
        value: function nextCheckedCourses(checkedCourses) {
          this.checkedCourses.next(checkedCourses);
        }
      }, {
        key: "nextEditCourses",
        value: function nextEditCourses(editCourses) {
          this.editCourses.next(editCourses);
        }
      }, {
        key: "createAnnouncement",
        value: function createAnnouncement(user, content, created, changed, user_id) {
          var announcement = {
            user: user,
            content: content,
            created: created,
            changed: changed,
            user_id: user_id
          };
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/announcements"), announcement);
        }
      }, {
        key: "fetchAnnouncements",
        value: function fetchAnnouncements() {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/announcements"));
        }
      }, {
        key: "fetchAnnouncementById",
        value: function fetchAnnouncementById(id) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/announcements/a/").concat(id));
        }
      }, {
        key: "fetchAnnouncementsByCourseId",
        value: function fetchAnnouncementsByCourseId(id) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/announcements/c/").concat(id));
        }
      }, {
        key: "updateAnnouncement",
        value: function updateAnnouncement(id, content, changed) {
          var announcement = {
            id: id,
            content: content,
            changed: changed
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/announcements/").concat(id), announcement);
        }
      }, {
        key: "deleteAnnouncement",
        value: function deleteAnnouncement(id) {
          return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/announcements/").concat(id));
        }
      }]);

      return AnnouncementService;
    }();

    AnnouncementService.ɵfac = function AnnouncementService_Factory(t) {
      return new (t || AnnouncementService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]));
    };

    AnnouncementService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: AnnouncementService,
      factory: AnnouncementService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnnouncementService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: 'root'
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/core/services/course-announcement.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/core/services/course-announcement.service.ts ***!
    \**************************************************************/

  /*! exports provided: CourseAnnouncementService */

  /***/
  function srcAppCoreServicesCourseAnnouncementServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CourseAnnouncementService", function () {
      return CourseAnnouncementService;
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

    var CourseAnnouncementService =
    /*#__PURE__*/
    function () {
      function CourseAnnouncementService(http) {
        _classCallCheck(this, CourseAnnouncementService);

        this.http = http;
      }

      _createClass(CourseAnnouncementService, [{
        key: "createCourseAnnouncement",
        value: function createCourseAnnouncement(course_id, announcement_id) {
          var courseAnnouncement = {
            course_id: course_id,
            announcement_id: announcement_id
          };
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/courseAnnouncements"), courseAnnouncement);
        }
      }, {
        key: "fetchCourseAnnouncements",
        value: function fetchCourseAnnouncements() {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/courseAnnouncements"));
        }
      }, {
        key: "fetchCourseAnnouncementById",
        value: function fetchCourseAnnouncementById(id) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/courseAnnouncements/").concat(id));
        }
      }, {
        key: "updateCourseAnnouncement",
        value: function updateCourseAnnouncement(id, course_id, announcement_id) {
          var courseAnnouncement = {
            course_id: course_id,
            announcement_id: announcement_id
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/courseAnnouncements/").concat(id), courseAnnouncement);
        }
      }, {
        key: "deleteCourseAnnouncement",
        value: function deleteCourseAnnouncement(id) {
          return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/courseAnnouncements/").concat(id));
        }
      }]);

      return CourseAnnouncementService;
    }();

    CourseAnnouncementService.ɵfac = function CourseAnnouncementService_Factory(t) {
      return new (t || CourseAnnouncementService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    CourseAnnouncementService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: CourseAnnouncementService,
      factory: CourseAnnouncementService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseAnnouncementService, [{
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

  },

  /***/
  "./src/app/core/services/discussion.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/core/services/discussion.service.ts ***!
    \*****************************************************/

  /*! exports provided: DiscussionService */

  /***/
  function srcAppCoreServicesDiscussionServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiscussionService", function () {
      return DiscussionService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var DiscussionService =
    /*#__PURE__*/
    function () {
      function DiscussionService(http) {
        _classCallCheck(this, DiscussionService);

        this.http = http;
      }

      _createClass(DiscussionService, [{
        key: "createDiscussion",
        value: function createDiscussion(user, post, created, changed, module_id, user_id) {
          var discussion = {
            user: user,
            post: post,
            created: created,
            changed: changed,
            module_id: module_id,
            user_id: user_id
          };
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/discussions"), discussion);
        }
      }, {
        key: "getDiscussionsInModule",
        value: function getDiscussionsInModule(moduleId) {
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/discussions/m/").concat(moduleId));
        }
      }, {
        key: "updateDiscussion",
        value: function updateDiscussion(post, changed, discussionId) {
          var discussion = {
            post: post,
            changed: changed
          };
          return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/discussions/").concat(discussionId), discussion);
        }
      }, {
        key: "deleteDiscussion",
        value: function deleteDiscussion(discussionId) {
          return this.http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/discussions/").concat(discussionId));
        }
      }]);

      return DiscussionService;
    }();

    DiscussionService.ɵfac = function DiscussionService_Factory(t) {
      return new (t || DiscussionService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    DiscussionService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: DiscussionService,
      factory: DiscussionService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiscussionService, [{
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

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
          return this.http.post("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/modules/").concat(courseId), moduleO);
        }
      }, {
        key: "getModuleById",
        value: function getModuleById(id) {
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/modules/m/").concat(id));
        }
      }, {
        key: "getModulesByCourseId",
        value: function getModulesByCourseId(id) {
          return this.http.get("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/modules/c/").concat(id));
        }
      }, {
        key: "updateModule",
        value: function updateModule(moduleId, number, title, lockedUntil) {
          var moduleO = {
            number: number,
            title: title,
            lockedUntil: lockedUntil
          };
          return this.http.put("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/modules/").concat(moduleId), moduleO);
        }
      }, {
        key: "deleteModule",
        value: function deleteModule(moduleId) {
          return this.http["delete"]("".concat(src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/modules/").concat(moduleId));
        }
      }]);

      return ModuleService;
    }();

    ModuleService.ɵfac = function ModuleService_Factory(t) {
      return new (t || ModuleService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    ModuleService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ModuleService,
      factory: ModuleService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModuleService, [{
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
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/pdfs"), formData);
        }
      }, {
        key: "fetchPDFs",
        value: function fetchPDFs(courseId) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/pdfs/").concat(courseId));
        }
      }, {
        key: "updatePDF",
        value: function updatePDF(pdfID, formData) {
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/pdfs/").concat(pdfID), formData);
        }
      }, {
        key: "deletePDF",
        value: function deletePDF(pdfID) {
          return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/pdfs/").concat(pdfID));
        }
      }]);

      return PdfService;
    }();

    PdfService.ɵfac = function PdfService_Factory(t) {
      return new (t || PdfService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    PdfService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: PdfService,
      factory: PdfService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](PdfService, [{
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

  },

  /***/
  "./src/app/core/services/survey.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/core/services/survey.service.ts ***!
    \*************************************************/

  /*! exports provided: SurveyService */

  /***/
  function srcAppCoreServicesSurveyServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SurveyService", function () {
      return SurveyService;
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

    var SurveyService =
    /*#__PURE__*/
    function () {
      function SurveyService(http) {
        _classCallCheck(this, SurveyService);

        this.http = http;
      }

      _createClass(SurveyService, [{
        key: "addSurvey",
        value: function addSurvey(name, link, module_id) {
          var survey = {
            name: name,
            link: link,
            module_id: module_id
          };
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/surveys"), survey);
        }
      }, {
        key: "fetchSurveys",
        value: function fetchSurveys(courseId) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/surveys/").concat(courseId));
        }
      }, {
        key: "updateSurvey",
        value: function updateSurvey(name, link, surveyId) {
          var survey = {
            name: name,
            link: link
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/surveys/").concat(surveyId), survey);
        }
      }, {
        key: "deleteSurvey",
        value: function deleteSurvey(surveyId) {
          return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/surveys/").concat(surveyId));
        }
      }]);

      return SurveyService;
    }();

    SurveyService.ɵfac = function SurveyService_Factory(t) {
      return new (t || SurveyService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    SurveyService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: SurveyService,
      factory: SurveyService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SurveyService, [{
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
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/videos"), video);
        }
      }, {
        key: "fetchVideos",
        value: function fetchVideos(courseId) {
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/videos/").concat(courseId));
        }
      }, {
        key: "updateVideo",
        value: function updateVideo(link, videoId) {
          var video = {
            link: link
          };
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/videos/").concat(videoId), video);
        }
      }, {
        key: "deleteVideo",
        value: function deleteVideo(videoId) {
          return this.http["delete"]("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].apiURL, "/videos/").concat(videoId));
        }
      }]);

      return VideoService;
    }();

    VideoService.ɵfac = function VideoService_Factory(t) {
      return new (t || VideoService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]));
    };

    VideoService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: VideoService,
      factory: VideoService.ɵfac,
      providedIn: 'root'
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](VideoService, [{
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

  },

  /***/
  "./src/app/modules/course/announcementsManagement/announcements/announcements.component.ts":
  /*!*************************************************************************************************!*\
    !*** ./src/app/modules/course/announcementsManagement/announcements/announcements.component.ts ***!
    \*************************************************************************************************/

  /*! exports provided: AnnouncementsComponent */

  /***/
  function srcAppModulesCourseAnnouncementsManagementAnnouncementsAnnouncementsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AnnouncementsComponent", function () {
      return AnnouncementsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_core_services_announcement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/core/services/announcement.service */
    "./src/app/core/services/announcement.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../sidebar/sidebar.component */
    "./src/app/modules/course/sidebar/sidebar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function AnnouncementsComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var announcement_r462 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", announcement_r462.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    var AnnouncementsComponent =
    /*#__PURE__*/
    function () {
      function AnnouncementsComponent(announcementService, route) {
        _classCallCheck(this, AnnouncementsComponent);

        this.announcementService = announcementService;
        this.route = route;
      }

      _createClass(AnnouncementsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.route.params.subscribe(function (params) {
            console.log(params.id);

            _this19.announcementService.fetchAnnouncementsByCourseId(params.id).subscribe(function (announcements) {
              _this19.announcements = Promise.resolve(announcements);
              console.log(announcements);
            });
          });
        }
      }]);

      return AnnouncementsComponent;
    }();

    AnnouncementsComponent.ɵfac = function AnnouncementsComponent_Factory(t) {
      return new (t || AnnouncementsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_announcement_service__WEBPACK_IMPORTED_MODULE_1__["AnnouncementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    AnnouncementsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AnnouncementsComponent,
      selectors: [["app-announcements"]],
      decls: 7,
      vars: 3,
      consts: [["id", "main"], [1, "flexbox-row"], [4, "ngFor", "ngForOf"], [1, "announcement", 3, "innerHTML"]],
      template: function AnnouncementsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Announcements");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AnnouncementsComponent_div_5_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 1, ctx.announcements));
        }
      },
      directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_3__["SidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY291cnNlL2Fubm91bmNlbWVudHNNYW5hZ2VtZW50L2Fubm91bmNlbWVudHMvYW5ub3VuY2VtZW50cy5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AnnouncementsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-announcements',
          templateUrl: './announcements.component.html',
          styleUrls: ['./announcements.component.scss']
        }]
      }], function () {
        return [{
          type: _app_core_services_announcement_service__WEBPACK_IMPORTED_MODULE_1__["AnnouncementService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/course/announcementsManagement/create-announcement/create-announcement.component.ts":
  /*!*************************************************************************************************************!*\
    !*** ./src/app/modules/course/announcementsManagement/create-announcement/create-announcement.component.ts ***!
    \*************************************************************************************************************/

  /*! exports provided: CreateAnnouncementComponent */

  /***/
  function srcAppModulesCourseAnnouncementsManagementCreateAnnouncementCreateAnnouncementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreateAnnouncementComponent", function () {
      return CreateAnnouncementComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-build-classic */
    "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _app_core_services_announcement_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/core/services/announcement.service */
    "./src/app/core/services/announcement.service.ts");
    /* harmony import */


    var _app_core_services_course_announcement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/core/services/course-announcement.service */
    "./src/app/core/services/course-announcement.service.ts");
    /* harmony import */


    var _app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");
    /* harmony import */


    var _app_core_services_course_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/core/services/course.service */
    "./src/app/core/services/course.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-angular */
    "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");

    function CreateAnnouncementComponent_div_4_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var course_r458 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](course_r458.name);
      }
    }

    function CreateAnnouncementComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateAnnouncementComponent_div_4_p_1_Template, 2, 1, "p", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var course_r458 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", course_r458);
      }
    }

    var CreateAnnouncementComponent =
    /*#__PURE__*/
    function () {
      function CreateAnnouncementComponent(announcementService, courseAnnouncementService, authenticationService, courseService, router) {
        var _this20 = this;

        _classCallCheck(this, CreateAnnouncementComponent);

        this.announcementService = announcementService;
        this.courseAnnouncementService = courseAnnouncementService;
        this.authenticationService = authenticationService;
        this.courseService = courseService;
        this.router = router;
        this.checkedCourses = [];
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__;
        this.editorData = "";
        this.courses = [];
        this.authenticationService.currentUser.subscribe(function (x) {
          return _this20.currentUser = x;
        });
      }

      _createClass(CreateAnnouncementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          //this.userPayload = decode(this.currentUser.token);
          console.log(this.currentUser.f_name);
          this.subscription = this.announcementService.sharedCheckedCourses.subscribe(function (checkedCourses) {
            _this21.checkedCourses = checkedCourses;
            console.log(checkedCourses);

            _this21.checkedCourses.forEach(function (courseId, i, arr) {
              _this21.courseService.getCourseById(courseId).subscribe(function (course) {
                _this21.courses[i] = course;
                console.log(course);
              });
            });
          }, function (error) {
            console.log(error);
          }, function () {
            console.log("complete");
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "onReady",
        value: function onReady(editor) {
          editor.setData("");
        }
      }, {
        key: "onChange",
        value: function onChange(_ref) {
          var editor = _ref.editor;
          this.editorData = editor.getData();

          if (this.isCleared) {
            editor.setData("");
            this.isCleared = false;
          }

          console.log(this.editorData);
        }
      }, {
        key: "createAnnouncement",
        value: function createAnnouncement() {
          var _this22 = this;

          var user = this.currentUser.f_name + " " + this.currentUser.l_name;
          var today = new Date();
          this.announcementService.createAnnouncement(user, this.editorData, today, today, this.currentUser.id).subscribe(function (announcement) {
            console.log(announcement);

            for (var i = 0; i < _this22.checkedCourses.length; i++) {
              var courseId = _this22.checkedCourses[i];

              _this22.courseAnnouncementService.createCourseAnnouncement(courseId, announcement.id).subscribe(function (courseAnnouncement) {
                console.log(courseAnnouncement);
              });
            }

            alert("Created announcement successfully");
          });
        }
      }]);

      return CreateAnnouncementComponent;
    }();

    CreateAnnouncementComponent.ɵfac = function CreateAnnouncementComponent_Factory(t) {
      return new (t || CreateAnnouncementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_announcement_service__WEBPACK_IMPORTED_MODULE_2__["AnnouncementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_course_announcement_service__WEBPACK_IMPORTED_MODULE_3__["CourseAnnouncementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_course_service__WEBPACK_IMPORTED_MODULE_5__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]));
    };

    CreateAnnouncementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreateAnnouncementComponent,
      selectors: [["app-create-announcement"]],
      decls: 16,
      vars: 4,
      consts: [[1, "flexbox-row", 2, "margin-top", "30px"], [1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "clamp-words", 3, "editor", "data", "change"], [1, "btn", "btn-primary", 2, "margin-right", "15px", 3, "click"], ["routerLink", "/courses", 1, "btn", "btn-secondary", 2, "margin-left", "15px"], [1, "fas", "fa-arrow-circle-left"], [1, "custom-font", "clamp-words", 2, "margin-top", "30px", 3, "innerHTML"], [1, "col-md-4"], [4, "ngIf"]],
      template: function CreateAnnouncementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create announcement for courses:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, CreateAnnouncementComponent_div_4_Template, 2, 1, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "ckeditor", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function CreateAnnouncementComponent_Template_ckeditor_change_5_listener($event) {
            return ctx.onChange($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateAnnouncementComponent_Template_button_click_7_listener() {
            return ctx.createAnnouncement();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Submit");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "i", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Go back");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "hr");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Announcement Preview");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.courses);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editor", ctx.Editor)("data", ctx.editorData);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx.editorData, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_8__["CKEditorComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY291cnNlL2Fubm91bmNlbWVudHNNYW5hZ2VtZW50L2NyZWF0ZS1hbm5vdW5jZW1lbnQvY3JlYXRlLWFubm91bmNlbWVudC5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateAnnouncementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-create-announcement',
          templateUrl: './create-announcement.component.html',
          styleUrls: ['./create-announcement.component.scss']
        }]
      }], function () {
        return [{
          type: _app_core_services_announcement_service__WEBPACK_IMPORTED_MODULE_2__["AnnouncementService"]
        }, {
          type: _app_core_services_course_announcement_service__WEBPACK_IMPORTED_MODULE_3__["CourseAnnouncementService"]
        }, {
          type: _app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
        }, {
          type: _app_core_services_course_service__WEBPACK_IMPORTED_MODULE_5__["CourseService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/course/announcementsManagement/edit-announcement/edit-announcement.component.ts":
  /*!*********************************************************************************************************!*\
    !*** ./src/app/modules/course/announcementsManagement/edit-announcement/edit-announcement.component.ts ***!
    \*********************************************************************************************************/

  /*! exports provided: EditAnnouncementComponent */

  /***/
  function srcAppModulesCourseAnnouncementsManagementEditAnnouncementEditAnnouncementComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditAnnouncementComponent", function () {
      return EditAnnouncementComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-build-classic */
    "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_core_services_announcement_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/core/services/announcement.service */
    "./src/app/core/services/announcement.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-angular */
    "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");

    function EditAnnouncementComponent_div_0_div_8_p_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var announcement_r466 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](announcement_r466.course_name);
      }
    }

    function EditAnnouncementComponent_div_0_div_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditAnnouncementComponent_div_0_div_8_p_1_Template, 2, 1, "p", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var announcement_r466 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", announcement_r466);
      }
    }

    function EditAnnouncementComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r470 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit announcement ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, " for courses:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, EditAnnouncementComponent_div_0_div_8_Template, 2, 1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "ckeditor", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function EditAnnouncementComponent_div_0_Template_ckeditor_change_10_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r470);

          var ctx_r469 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r469.onChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditAnnouncementComponent_div_0_Template_button_click_12_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r470);

          var ctx_r471 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r471.editAnnouncement();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "a", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Go back");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Announcement Preview");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var an_r464 = ctx.ngIf;

        var ctx_r463 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 5, ctx_r463.announcementId));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 7, ctx_r463.announcements));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editor", ctx_r463.Editor)("data", ctx_r463.editorData ? ctx_r463.editorData : an_r464.content);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r463.editorData ? ctx_r463.editorData : an_r464.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    var EditAnnouncementComponent =
    /*#__PURE__*/
    function () {
      function EditAnnouncementComponent(router, route, announcementService) {
        _classCallCheck(this, EditAnnouncementComponent);

        this.router = router;
        this.route = route;
        this.announcementService = announcementService;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__;
      }

      _createClass(EditAnnouncementComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this23 = this;

          this.route.params.subscribe(function (params) {
            _this23.announcementId = Promise.resolve(params.announcementId);
          });
          this.announcementId.then(function (id) {
            console.log(id);
            _this23.announcement = _this23.announcementService.fetchAnnouncementById(id);
          });
          this.subscription = this.announcementService.sharedEditCourses.subscribe(function (announcements) {
            console.log("announcements edit: \n");
            console.log(announcements);
            _this23.announcements = Promise.resolve(announcements);
          });
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscription.unsubscribe();
        }
      }, {
        key: "onChange",
        value: function onChange(_ref2) {
          var editor = _ref2.editor;
          this.editorData = editor.getData();
          console.log(this.editorData);
        }
      }, {
        key: "editAnnouncement",
        value: function editAnnouncement() {
          var _this24 = this;

          if (!this.editorData) {
            this.announcement.subscribe(function (announcement) {
              console.log(announcement.content);

              _this24.announcementId.then(function (id) {
                _this24.announcementService.updateAnnouncement(id, announcement.content, new Date()).subscribe(function () {
                  alert("Updated announcement");

                  _this24.router.navigate(['/courses/view-created-announcements']);
                });
              });
            });
          } else {
            this.announcementId.then(function (id) {
              _this24.announcementService.updateAnnouncement(id, _this24.editorData, new Date()).subscribe(function () {
                alert("Updated announcement");

                _this24.router.navigate(['/courses/view-created-announcements']);
              });
            });
          }
        }
      }]);

      return EditAnnouncementComponent;
    }();

    EditAnnouncementComponent.ɵfac = function EditAnnouncementComponent_Factory(t) {
      return new (t || EditAnnouncementComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_announcement_service__WEBPACK_IMPORTED_MODULE_3__["AnnouncementService"]));
    };

    EditAnnouncementComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditAnnouncementComponent,
      selectors: [["app-edit-announcement"]],
      decls: 2,
      vars: 3,
      consts: [["class", "flexbox-row", "style", "margin-top: 30px;", 4, "ngIf"], [1, "flexbox-row", 2, "margin-top", "30px"], [1, "row"], ["class", "col-md-4", 4, "ngFor", "ngForOf"], [1, "clamp-words", 3, "editor", "data", "change"], [1, "btn", "btn-primary", 2, "margin-right", "15px", 3, "click"], ["routerLink", "/courses/view-created-announcements", 1, "btn", "btn-secondary", 2, "margin-left", "15px"], [1, "fas", "fa-arrow-circle-left"], [1, "custom-font", "clamp-words", 2, "margin-top", "30px", 3, "innerHTML"], [1, "col-md-4"], [4, "ngIf"]],
      template: function EditAnnouncementComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditAnnouncementComponent_div_0_Template, 21, 9, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](1, "async");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](1, 1, ctx.announcement));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_5__["CKEditorComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY291cnNlL2Fubm91bmNlbWVudHNNYW5hZ2VtZW50L2VkaXQtYW5ub3VuY2VtZW50L2VkaXQtYW5ub3VuY2VtZW50LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditAnnouncementComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-announcement',
          templateUrl: './edit-announcement.component.html',
          styleUrls: ['./edit-announcement.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _app_core_services_announcement_service__WEBPACK_IMPORTED_MODULE_3__["AnnouncementService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/course/announcementsManagement/view-created-announcements/view-created-announcements.component.ts":
  /*!***************************************************************************************************************************!*\
    !*** ./src/app/modules/course/announcementsManagement/view-created-announcements/view-created-announcements.component.ts ***!
    \***************************************************************************************************************************/

  /*! exports provided: ViewCreatedAnnouncementsComponent */

  /***/
  function srcAppModulesCourseAnnouncementsManagementViewCreatedAnnouncementsViewCreatedAnnouncementsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewCreatedAnnouncementsComponent", function () {
      return ViewCreatedAnnouncementsComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_core_services_announcement_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/core/services/announcement.service */
    "./src/app/core/services/announcement.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ViewCreatedAnnouncementsComponent_div_3_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r475 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Total announcements: ", ctx_r475.groupedAnnouncements.size, "");
      }
    }

    function ViewCreatedAnnouncementsComponent_div_3_div_6_span_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, ",");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ViewCreatedAnnouncementsComponent_div_3_div_6_h4_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Announcement: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ViewCreatedAnnouncementsComponent_div_3_div_6_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 10);
      }

      if (rf & 2) {
        var announcementObj_r477 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", announcementObj_r477.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    function ViewCreatedAnnouncementsComponent_div_3_div_6_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r487 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewCreatedAnnouncementsComponent_div_3_div_6_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r487);

          var announcementObj_r477 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var announcements_r473 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r485 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r485.editAnnouncement(announcementObj_r477.announcement_id, announcements_r473.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ViewCreatedAnnouncementsComponent_div_3_div_6_button_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r491 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ViewCreatedAnnouncementsComponent_div_3_div_6_button_8_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r491);

          var announcementObj_r477 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r489 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r489.deleteAnnouncement(announcementObj_r477.announcement_id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ViewCreatedAnnouncementsComponent_div_3_div_6_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewCreatedAnnouncementsComponent_div_3_div_6_span_3_Template, 2, 0, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, ViewCreatedAnnouncementsComponent_div_3_div_6_h4_4_Template, 3, 0, "h4", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ViewCreatedAnnouncementsComponent_div_3_div_6_div_5_Template, 1, 1, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ViewCreatedAnnouncementsComponent_div_3_div_6_button_7_Template, 2, 0, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ViewCreatedAnnouncementsComponent_div_3_div_6_button_8_Template, 2, 0, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var announcementObj_r477 = ctx.$implicit;
        var aindex_r478 = ctx.index;

        var announcements_r473 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](announcementObj_r477.course_name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", aindex_r478 != announcements_r473.value.length - 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", aindex_r478 == announcements_r473.value.length - 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", aindex_r478 == announcements_r473.value.length - 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", aindex_r478 == announcements_r473.value.length - 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", aindex_r478 == announcements_r473.value.length - 1);
      }
    }

    function ViewCreatedAnnouncementsComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ViewCreatedAnnouncementsComponent_div_3_div_1_Template, 2, 1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h4");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Courses: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ViewCreatedAnnouncementsComponent_div_3_div_6_Template, 9, 6, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var announcements_r473 = ctx.$implicit;
        var gindex_r474 = ctx.index;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", gindex_r474 == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Id: ", announcements_r473.key, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", announcements_r473.value);
      }
    }

    var ViewCreatedAnnouncementsComponent =
    /*#__PURE__*/
    function () {
      function ViewCreatedAnnouncementsComponent(announcementService, router, route) {
        _classCallCheck(this, ViewCreatedAnnouncementsComponent);

        this.announcementService = announcementService;
        this.router = router;
        this.route = route;
        this.announcementSet = new Set();
        this.groupedAnnouncements = new Map();
      }

      _createClass(ViewCreatedAnnouncementsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          //this.announcements = this.announcementService.fetchAnnouncements();
          this.announcementService.fetchAnnouncements().subscribe(function (announcements) {
            announcements.forEach(function (value, i, arr) {
              _this25.announcementSet.add(value.announcement_id);

              var trimmedContent = value.content.substring(0, 25);
              value.content = trimmedContent;
            });
            _this25.announcements = announcements;
            console.log(announcements);

            _this25.announcementSet.forEach(function (announcementId) {
              console.log(announcementId);

              _this25.announcements.forEach(function (announcementObj, i) {
                if (announcementId == announcementObj.announcement_id) {
                  console.log("grouped");
                  console.log(announcementObj);

                  if (_this25.groupedAnnouncements.get(announcementId)) {
                    _this25.groupedAnnouncements.get(announcementId).push(announcementObj);
                  } else {
                    _this25.groupedAnnouncements.set(announcementId, [announcementObj]);
                  }

                  console.log(_this25.groupedAnnouncements.get(announcementId));
                }
              });
            });
          });
        }
      }, {
        key: "editAnnouncement",
        value: function editAnnouncement(announcementId, announcements) {
          console.log(announcementId);
          console.log("announcements: \n");
          console.log(announcements);
          this.announcementService.nextEditCourses(announcements);
          this.router.navigate(['../edit-announcement', announcementId], {
            relativeTo: this.route
          });
        }
      }, {
        key: "deleteAnnouncement",
        value: function deleteAnnouncement(announcementId) {
          var r = confirm("Delete announcement: " + announcementId + "\nAre you sure?");

          if (r) {
            console.log("deleted: " + announcementId);
            this.announcementService.deleteAnnouncement(announcementId).subscribe(function () {
              alert("Deleted announcement: " + announcementId);
            });
          }
        }
      }]);

      return ViewCreatedAnnouncementsComponent;
    }();

    ViewCreatedAnnouncementsComponent.ɵfac = function ViewCreatedAnnouncementsComponent_Factory(t) {
      return new (t || ViewCreatedAnnouncementsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_announcement_service__WEBPACK_IMPORTED_MODULE_1__["AnnouncementService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    ViewCreatedAnnouncementsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ViewCreatedAnnouncementsComponent,
      selectors: [["app-view-created-announcements"]],
      decls: 5,
      vars: 3,
      consts: [[1, "flexbox-row"], ["class", "announcement", 4, "ngFor", "ngForOf"], [1, "announcement"], ["style", "background-color:white; padding-bottom: 10px", 4, "ngIf"], [4, "ngFor", "ngForOf"], [2, "background-color", "white", "padding-bottom", "10px"], [4, "ngIf"], ["style", "padding-top:10px; background-color: lightgray", 3, "innerHTML", 4, "ngIf"], ["class", "btn btn-success", 3, "click", 4, "ngIf"], ["class", "btn btn-danger", 3, "click", 4, "ngIf"], [2, "padding-top", "10px", "background-color", "lightgray", 3, "innerHTML"], [1, "btn", "btn-success", 3, "click"], [1, "btn", "btn-danger", 3, "click"]],
      template: function ViewCreatedAnnouncementsComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Manage Announcements");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ViewCreatedAnnouncementsComponent_div_3_Template, 7, 3, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "keyvalue");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 1, ctx.groupedAnnouncements));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["KeyValuePipe"]],
      styles: ["hr[_ngcontent-%COMP%] {\n  border: 1px solid lightblue;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3Vyc2UvYW5ub3VuY2VtZW50c01hbmFnZW1lbnQvdmlldy1jcmVhdGVkLWFubm91bmNlbWVudHMvQzpcXFVzZXJzXFxKaW1teVxcRG9jdW1lbnRzXFxHaXRIdWJcXGxtcy1maXUtZmItY2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxjb3Vyc2VcXGFubm91bmNlbWVudHNNYW5hZ2VtZW50XFx2aWV3LWNyZWF0ZWQtYW5ub3VuY2VtZW50c1xcdmlldy1jcmVhdGVkLWFubm91bmNlbWVudHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvY291cnNlL2Fubm91bmNlbWVudHNNYW5hZ2VtZW50L3ZpZXctY3JlYXRlZC1hbm5vdW5jZW1lbnRzL3ZpZXctY3JlYXRlZC1hbm5vdW5jZW1lbnRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksMkJBQUE7QUNDSiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY291cnNlL2Fubm91bmNlbWVudHNNYW5hZ2VtZW50L3ZpZXctY3JlYXRlZC1hbm5vdW5jZW1lbnRzL3ZpZXctY3JlYXRlZC1hbm5vdW5jZW1lbnRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaHJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGJsdWU7XHJcbn0iLCJociB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Ymx1ZTtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ViewCreatedAnnouncementsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-view-created-announcements',
          templateUrl: './view-created-announcements.component.html',
          styleUrls: ['./view-created-announcements.component.scss']
        }]
      }], function () {
        return [{
          type: _app_core_services_announcement_service__WEBPACK_IMPORTED_MODULE_1__["AnnouncementService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/modules/course/dashboard/dashboard.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/modules/course/home/home.component.ts");
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


    var _home_edit_home_edit_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./home-edit/home-edit.component */
    "./src/app/modules/course/home-edit/home-edit.component.ts");
    /* harmony import */


    var _modulesDiscussion_discussion_discussion_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./modulesDiscussion/discussion/discussion.component */
    "./src/app/modules/course/modulesDiscussion/discussion/discussion.component.ts");
    /* harmony import */


    var _announcementsManagement_create_announcement_create_announcement_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./announcementsManagement/create-announcement/create-announcement.component */
    "./src/app/modules/course/announcementsManagement/create-announcement/create-announcement.component.ts");
    /* harmony import */


    var _announcementsManagement_announcements_announcements_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./announcementsManagement/announcements/announcements.component */
    "./src/app/modules/course/announcementsManagement/announcements/announcements.component.ts");
    /* harmony import */


    var _announcementsManagement_edit_announcement_edit_announcement_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./announcementsManagement/edit-announcement/edit-announcement.component */
    "./src/app/modules/course/announcementsManagement/edit-announcement/edit-announcement.component.ts");
    /* harmony import */


    var _announcementsManagement_view_created_announcements_view_created_announcements_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./announcementsManagement/view-created-announcements/view-created-announcements.component */
    "./src/app/modules/course/announcementsManagement/view-created-announcements/view-created-announcements.component.ts");
    /* harmony import */


    var _app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @app/core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");

    var routes = [{
      path: 'create-announcement',
      component: _announcementsManagement_create_announcement_create_announcement_component__WEBPACK_IMPORTED_MODULE_10__["CreateAnnouncementComponent"],
      canActivate: [_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"]],
      data: {
        expectedRole: 'admin'
      },
      pathMatch: 'full'
    }, {
      path: 'view-created-announcements',
      component: _announcementsManagement_view_created_announcements_view_created_announcements_component__WEBPACK_IMPORTED_MODULE_13__["ViewCreatedAnnouncementsComponent"],
      canActivate: [_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"]],
      data: {
        expectedRole: 'admin'
      },
      pathMatch: 'full'
    }, {
      path: 'edit-announcement/:announcementId',
      component: _announcementsManagement_edit_announcement_edit_announcement_component__WEBPACK_IMPORTED_MODULE_12__["EditAnnouncementComponent"],
      canActivate: [_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"]],
      data: {
        expectedRole: 'admin'
      },
      pathMatch: 'full'
    }, {
      path: '',
      component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"],
      canActivate: [_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"]],
      pathMatch: 'full'
    }, {
      path: ':id',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"],
      canActivate: [_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"]],
      pathMatch: 'full'
    }, {
      path: ':id/announcements',
      component: _announcementsManagement_announcements_announcements_component__WEBPACK_IMPORTED_MODULE_11__["AnnouncementsComponent"],
      canActivate: [_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"]]
    }, {
      path: ':id/modules',
      component: _modules_modules_component__WEBPACK_IMPORTED_MODULE_4__["ModulesComponent"],
      canActivate: [_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"]]
    }, {
      path: ':id/leaderboard',
      component: _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_5__["LeaderboardComponent"],
      canActivate: [_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"]]
    }, {
      path: ':id/create-module',
      component: _modulesManagement_create_module_create_module_component__WEBPACK_IMPORTED_MODULE_6__["CreateModuleComponent"],
      canActivate: [_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"]],
      data: {
        expectedRole: 'instructor'
      }
    }, {
      path: ':id/edit-module/:moduleId',
      component: _modulesManagement_edit_module_edit_module_component__WEBPACK_IMPORTED_MODULE_7__["EditModuleComponent"],
      canActivate: [_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"]],
      data: {
        expectedRole: 'instructor'
      }
    }, {
      path: ':id/edit-home',
      component: _home_edit_home_edit_component__WEBPACK_IMPORTED_MODULE_8__["HomeEditComponent"],
      canActivate: [_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"]],
      data: {
        expectedRole: 'instructor'
      }
    }, {
      path: ':id/discussion/:moduleId',
      component: _modulesDiscussion_discussion_discussion_component__WEBPACK_IMPORTED_MODULE_9__["DiscussionComponent"],
      canActivate: [_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_14__["AuthenticationService"]]
    }];

    var CourseRoutingModule = function CourseRoutingModule() {
      _classCallCheck(this, CourseRoutingModule);
    };

    CourseRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CourseRoutingModule
    });
    CourseRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CourseRoutingModule_Factory(t) {
        return new (t || CourseRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CourseRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [],
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-angular */
    "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");
    /* harmony import */


    var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tooltip */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./dashboard/dashboard.component */
    "./src/app/modules/course/dashboard/dashboard.component.ts");
    /* harmony import */


    var _course_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./course-routing.module */
    "./src/app/modules/course/course-routing.module.ts");
    /* harmony import */


    var _modules_modules_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./modules/modules.component */
    "./src/app/modules/course/modules/modules.component.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./sidebar/sidebar.component */
    "./src/app/modules/course/sidebar/sidebar.component.ts");
    /* harmony import */


    var _sidebar_button_sidebar_button_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./sidebar-button/sidebar-button.component */
    "./src/app/modules/course/sidebar-button/sidebar-button.component.ts");
    /* harmony import */


    var _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./leaderboard/leaderboard.component */
    "./src/app/modules/course/leaderboard/leaderboard.component.ts");
    /* harmony import */


    var _modulesManagement_create_module_create_module_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./modulesManagement/create-module/create-module.component */
    "./src/app/modules/course/modulesManagement/create-module/create-module.component.ts");
    /* harmony import */


    var _modulesManagement_edit_module_edit_module_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./modulesManagement/edit-module/edit-module.component */
    "./src/app/modules/course/modulesManagement/edit-module/edit-module.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/modules/course/home/home.component.ts");
    /* harmony import */


    var _home_edit_home_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./home-edit/home-edit.component */
    "./src/app/modules/course/home-edit/home-edit.component.ts");
    /* harmony import */


    var _modulesDiscussion_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./modulesDiscussion/create-post/create-post.component */
    "./src/app/modules/course/modulesDiscussion/create-post/create-post.component.ts");
    /* harmony import */


    var _modulesDiscussion_discussion_discussion_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./modulesDiscussion/discussion/discussion.component */
    "./src/app/modules/course/modulesDiscussion/discussion/discussion.component.ts");
    /* harmony import */


    var _modulesDiscussion_edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./modulesDiscussion/edit-post/edit-post.component */
    "./src/app/modules/course/modulesDiscussion/edit-post/edit-post.component.ts");
    /* harmony import */


    var _announcementsManagement_create_announcement_create_announcement_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./announcementsManagement/create-announcement/create-announcement.component */
    "./src/app/modules/course/announcementsManagement/create-announcement/create-announcement.component.ts");
    /* harmony import */


    var _announcementsManagement_announcements_announcements_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./announcementsManagement/announcements/announcements.component */
    "./src/app/modules/course/announcementsManagement/announcements/announcements.component.ts");
    /* harmony import */


    var _announcementsManagement_edit_announcement_edit_announcement_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./announcementsManagement/edit-announcement/edit-announcement.component */
    "./src/app/modules/course/announcementsManagement/edit-announcement/edit-announcement.component.ts");
    /* harmony import */


    var _announcementsManagement_view_created_announcements_view_created_announcements_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./announcementsManagement/view-created-announcements/view-created-announcements.component */
    "./src/app/modules/course/announcementsManagement/view-created-announcements/view-created-announcements.component.ts");

    var CourseModule = function CourseModule() {
      _classCallCheck(this, CourseModule);
    };

    CourseModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: CourseModule
    });
    CourseModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function CourseModule_Factory(t) {
        return new (t || CourseModule)();
      },
      imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _course_routing_module__WEBPACK_IMPORTED_MODULE_8__["CourseRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_4__["CKEditorModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](CourseModule, {
        declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], _modules_modules_component__WEBPACK_IMPORTED_MODULE_9__["ModulesComponent"], _modulesManagement_create_module_create_module_component__WEBPACK_IMPORTED_MODULE_13__["CreateModuleComponent"], _modulesManagement_edit_module_edit_module_component__WEBPACK_IMPORTED_MODULE_14__["EditModuleComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"], _sidebar_button_sidebar_button_component__WEBPACK_IMPORTED_MODULE_11__["SidebarButtonComponent"], _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_12__["LeaderboardComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"], _home_edit_home_edit_component__WEBPACK_IMPORTED_MODULE_16__["HomeEditComponent"], _modulesDiscussion_discussion_discussion_component__WEBPACK_IMPORTED_MODULE_18__["DiscussionComponent"], _modulesDiscussion_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_17__["CreatePostComponent"], _modulesDiscussion_edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_19__["EditPostComponent"], _announcementsManagement_create_announcement_create_announcement_component__WEBPACK_IMPORTED_MODULE_20__["CreateAnnouncementComponent"], _announcementsManagement_announcements_announcements_component__WEBPACK_IMPORTED_MODULE_21__["AnnouncementsComponent"], _announcementsManagement_edit_announcement_edit_announcement_component__WEBPACK_IMPORTED_MODULE_22__["EditAnnouncementComponent"], _announcementsManagement_view_created_announcements_view_created_announcements_component__WEBPACK_IMPORTED_MODULE_23__["ViewCreatedAnnouncementsComponent"]],
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _course_routing_module__WEBPACK_IMPORTED_MODULE_8__["CourseRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_4__["CKEditorModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CourseModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          declarations: [_dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["DashboardComponent"], _modules_modules_component__WEBPACK_IMPORTED_MODULE_9__["ModulesComponent"], _modulesManagement_create_module_create_module_component__WEBPACK_IMPORTED_MODULE_13__["CreateModuleComponent"], _modulesManagement_edit_module_edit_module_component__WEBPACK_IMPORTED_MODULE_14__["EditModuleComponent"], _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_10__["SidebarComponent"], _sidebar_button_sidebar_button_component__WEBPACK_IMPORTED_MODULE_11__["SidebarButtonComponent"], _leaderboard_leaderboard_component__WEBPACK_IMPORTED_MODULE_12__["LeaderboardComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_15__["HomeComponent"], _home_edit_home_edit_component__WEBPACK_IMPORTED_MODULE_16__["HomeEditComponent"], _modulesDiscussion_discussion_discussion_component__WEBPACK_IMPORTED_MODULE_18__["DiscussionComponent"], _modulesDiscussion_create_post_create_post_component__WEBPACK_IMPORTED_MODULE_17__["CreatePostComponent"], _modulesDiscussion_edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_19__["EditPostComponent"], _announcementsManagement_create_announcement_create_announcement_component__WEBPACK_IMPORTED_MODULE_20__["CreateAnnouncementComponent"], _announcementsManagement_announcements_announcements_component__WEBPACK_IMPORTED_MODULE_21__["AnnouncementsComponent"], _announcementsManagement_edit_announcement_edit_announcement_component__WEBPACK_IMPORTED_MODULE_22__["EditAnnouncementComponent"], _announcementsManagement_view_created_announcements_view_created_announcements_component__WEBPACK_IMPORTED_MODULE_23__["ViewCreatedAnnouncementsComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _course_routing_module__WEBPACK_IMPORTED_MODULE_8__["CourseRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_4__["CKEditorModule"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_5__["MatTooltipModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"]]
        }]
      }], null, null);
    })();
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
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/services/student-course.service */
    "./src/app/core/services/student-course.service.ts");
    /* harmony import */


    var _app_core_services_course_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/core/services/course.service */
    "./src/app/core/services/course.service.ts");
    /* harmony import */


    var _app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_core_services_announcement_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/core/services/announcement.service */
    "./src/app/core/services/announcement.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    function DashboardComponent_ng_container_3_ng_container_2_ng_container_1_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r178 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_ng_container_3_ng_container_2_ng_container_1_button_1_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r178);

          var ctx_r177 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r177.toggleDropCourse();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Toggle Course Drop");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "hideInfo": a0
      };
    };

    function DashboardComponent_ng_container_3_ng_container_2_ng_container_1_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r180 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_ng_container_3_ng_container_2_ng_container_1_button_2_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r180);

          var ctx_r179 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

          return ctx_r179.createAnnouncement();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Create Announcement ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r172 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("disabled", ctx_r172.checkedCourses.length <= 0)("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r172.checkedCourses.length <= 0));
      }
    }

    function DashboardComponent_ng_container_3_ng_container_2_ng_container_1_button_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, " add announcement info ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r173 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](2, _c0, ctx_r173.checkedCourses.length > 0))("disabled", ctx_r173.checkedCourses.length > 0);
      }
    }

    function DashboardComponent_ng_container_3_ng_container_2_ng_container_1_a_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "a", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Manage Announcements ");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    function DashboardComponent_ng_container_3_ng_container_2_ng_container_1_input_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](0, "input", 24);
      }

      if (rf & 2) {
        var index_r169 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).index;

        var ctx_r175 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("checked", ctx_r175.isChecked[index_r169]);
      }
    }

    function DashboardComponent_ng_container_3_ng_container_2_ng_container_1_button_16_Template(rf, ctx) {
      if (rf & 1) {
        var _r184 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "button", 25);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_ng_container_3_ng_container_2_ng_container_1_button_16_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r184);

          var course_r168 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2).$implicit;

          var ctx_r182 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r182.dropCourse(course_r168.course_id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "Drop Course");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "checked-color": a0
      };
    };

    var _c2 = function _c2(a0) {
      return [a0, "modules"];
    };

    function DashboardComponent_ng_container_3_ng_container_2_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r187 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DashboardComponent_ng_container_3_ng_container_2_ng_container_1_button_1_Template, 2, 0, "button", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DashboardComponent_ng_container_3_ng_container_2_ng_container_1_button_2_Template, 2, 4, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DashboardComponent_ng_container_3_ng_container_2_ng_container_1_button_3_Template, 2, 4, "button", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](4, DashboardComponent_ng_container_3_ng_container_2_ng_container_1_a_4_Template, 2, 0, "a", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function DashboardComponent_ng_container_3_ng_container_2_ng_container_1_Template_div_click_6_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵrestoreView"](_r187);

          var ctx_r186 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

          var index_r169 = ctx_r186.index;
          var course_r168 = ctx_r186.$implicit;

          var ctx_r185 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

          return ctx_r185.checkBox(index_r169, course_r168.course_id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](8, DashboardComponent_ng_container_3_ng_container_2_ng_container_1_input_8_Template, 1, 1, "input", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "h5", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Go to Course");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](16, DashboardComponent_ng_container_3_ng_container_2_ng_container_1_button_16_Template, 2, 0, "button", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r188 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        var index_r169 = ctx_r188.index;
        var course_r168 = ctx_r188.$implicit;

        var ctx_r170 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", index_r169 == 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", index_r169 == 0 && ctx_r170.isAdmin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", index_r169 == 0 && ctx_r170.isAdmin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", index_r169 == 0 && ctx_r170.isAdmin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](11, _c1, ctx_r170.isChecked[index_r169]));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r170.isAdmin);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](course_r168.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate"](course_r168.description);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](13, _c2, course_r168.course_id));

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r170.courseDrop);
      }
    }

    function DashboardComponent_ng_container_3_ng_container_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](1, DashboardComponent_ng_container_3_ng_container_2_ng_container_1_Template, 17, 15, "ng-container", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var course_r168 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", course_r168.enrollment_status == "enrolled");
      }
    }

    function DashboardComponent_ng_container_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](2, DashboardComponent_ng_container_3_ng_container_2_Template, 2, 1, "ng-container", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](3, "async");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var ctx_r164 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](3, 1, ctx_r164.listCourses));
      }
    }

    function DashboardComponent_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1, "You have no courses!");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "label");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Enroll in courses");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Enroll");

        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      }
    }

    var DashboardComponent =
    /*#__PURE__*/
    function () {
      function DashboardComponent(studentCourseService, courseService, authService, router, announcementService) {
        _classCallCheck(this, DashboardComponent);

        this.studentCourseService = studentCourseService;
        this.courseService = courseService;
        this.authService = authService;
        this.router = router;
        this.announcementService = announcementService;
        this.courses = [];
        this.courseDrop = false;
        this.checkedCourses = [];
        this.isChecked = [];
      }

      _createClass(DashboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.currentUser = this.authService.currentUserValue;

          if (this.currentUser) {
            //this.tokenPayload = decode(this.currentStudent.token);
            this.isAdmin = this.currentUser.role == 'admin';
            this.studentId = this.currentUser.id; //this.isAdmin = (this.tokenPayload.role == 'admin');      
            //this.studentId = this.tokenPayload.id;
            //this.hasCourses = this.asyncFetchStudentCourses(this.studentId);

            this.listCourses = this.studentCourseService.getCoursesByStudentId(this.studentId);
            console.log(this.studentId);
          }
        }
      }, {
        key: "fetchStudentCourses",
        value: function fetchStudentCourses(studentId) {
          var _this26 = this;

          //let returnValue: Boolean;
          return new Promise(function (resolve, reject) {
            _this26.studentCourseService.getCoursesByStudentId(studentId).subscribe(function (data) {
              for (var i = 0; i < data.length; i++) {
                if (data[i]) {
                  if (data[i].enrollment_status == "enrolled") {
                    _this26.courses.push(data[i]);

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
          })["catch"](function (error) {
            console.log('ERROR: ' + error);
            return false;
          }); //return returnValue;
        }
      }, {
        key: "asyncFetchStudentCourses",
        value: function asyncFetchStudentCourses(studentId) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0,
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
          var _this27 = this;

          this.courseService.getCourseById(courseId).subscribe(function (course) {
            _this27.course = course;
          });
          var r = confirm("Drop the course? Are you sure?");

          if (r) {
            this.studentCourseService.declineStudentEnrollment(this.studentId, courseId).subscribe(function () {
              alert("Dropped the course");

              _this27.courseService.updateCourseSeats(courseId, _this27.course.seats + 1).subscribe(function () {
                console.log("incremented seats by 1: " + (_this27.course.seats + 1));
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
      }, {
        key: "createAnnouncement",
        value: function createAnnouncement() {
          //console.log(this.checkedCourses);
          this.announcementService.nextCheckedCourses(this.checkedCourses);
          this.router.navigate(['/courses/create-announcement']);
        }
      }, {
        key: "checkBox",
        value: function checkBox(i, courseId) {
          var _this28 = this;

          if (this.currentUser.role != 'admin') {
            return;
          }

          if (this.isChecked[i]) {
            this.isChecked[i] = false; // remove course from array

            this.checkedCourses.forEach(function (value, index, arr) {
              if (value == courseId) {
                console.log(courseId + " " + index);

                _this28.checkedCourses.splice(index, 1);
              }
            });
          } else {
            this.isChecked[i] = true;
            console.log("courseId: " + courseId + " has been checked"); // add course to array

            this.checkedCourses.push(courseId);
          }

          console.log(this.isChecked[i]);
        }
      }]);

      return DashboardComponent;
    }();

    DashboardComponent.ɵfac = function DashboardComponent_Factory(t) {
      return new (t || DashboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_2__["StudentCourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_core_services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_app_core_services_announcement_service__WEBPACK_IMPORTED_MODULE_6__["AnnouncementService"]));
    };

    DashboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: DashboardComponent,
      selectors: [["app-dashboard"]],
      decls: 7,
      vars: 4,
      consts: [[1, "center-form", 2, "position", "relative"], [4, "ngIf", "ngIfElse"], ["class", "center-form"], ["elseBlock", ""], [1, "row"], [4, "ngFor", "ngForOf"], [4, "ngIf"], ["type", "button", "class", "btn btn-danger btn-sm center-form", "style", "position: absolute; top: 5px; left: 20px;", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-success btn-sm center-form", "style", "position: absolute; top: 5px; left: 170px;", "placement", "bottom", "ngbTooltip", "Click on courses (cards) to broadcast announcements to", 3, "disabled", "ngClass", "click", 4, "ngIf"], ["placement", "bottom", "ngbTooltip", "Click on courses (cards) to broadcast announcement to", "class", "btn btn-success btn-sm center-form", "style", "position: absolute; top: 5px; left: 170px;", "triggers", "click:blur", 3, "ngClass", "disabled", 4, "ngIf"], ["routerLink", "/courses/view-created-announcements", "class", "btn btn-info btn-sm center-form", "style", "position: absolute; top: 5px; left: 335px;", 4, "ngIf"], [1, "col"], [1, "card", 2, "max-width", "18rem", 3, "click"], [1, "card-body"], ["type", "checkbox", 3, "checked", 4, "ngIf"], [1, "card-title", "text-wrap", 2, "word-wrap", "break-word"], [1, "card-text", "text-wrap", 2, "word-wrap", "break-word"], [1, "flex-container"], [1, "btn", "btn-primary", "flex-item", 3, "routerLink"], ["type", "button", "class", "btn btn-danger btn-sm flex-item", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", "center-form", 2, "position", "absolute", "top", "5px", "left", "20px", 3, "click"], ["type", "button", "placement", "bottom", "ngbTooltip", "Click on courses (cards) to broadcast announcements to", 1, "btn", "btn-success", "btn-sm", "center-form", 2, "position", "absolute", "top", "5px", "left", "170px", 3, "disabled", "ngClass", "click"], ["placement", "bottom", "ngbTooltip", "Click on courses (cards) to broadcast announcement to", "triggers", "click:blur", 1, "btn", "btn-success", "btn-sm", "center-form", 2, "position", "absolute", "top", "5px", "left", "170px", 3, "ngClass", "disabled"], ["routerLink", "/courses/view-created-announcements", 1, "btn", "btn-info", "btn-sm", "center-form", 2, "position", "absolute", "top", "5px", "left", "335px"], ["type", "checkbox", 3, "checked"], ["type", "button", 1, "btn", "btn-danger", "btn-sm", "flex-item", 3, "click"], ["routerLink", "../course-library", 1, "btn", "btn-primary", 2, "margin-left", "10px"]],
      template: function DashboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Dashboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](3, DashboardComponent_ng_container_3_Template, 4, 3, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipe"](4, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](5, DashboardComponent_ng_template_5_Template, 6, 0, "ng-template", 2, 3, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          var _r165 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵreference"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpipeBind1"](4, 2, ctx.listCourses))("ngIfElse", _r165);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_8__["NgbTooltip"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgClass"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterLink"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["AsyncPipe"]],
      styles: [".flex-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n}\n\n.flex-item[_ngcontent-%COMP%] {\n  align-self: center;\n  margin: 10px;\n}\n\n.card[_ngcontent-%COMP%] {\n  transition: 0.7s;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);\n}\n\n.card[_ngcontent-%COMP%]:hover {\n  transition: 0.7s;\n  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.8), 0 6px 20px 0 rgba(0, 0, 0, 0.8);\n}\n\ninput.larger[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n}\n\n.checked-color[_ngcontent-%COMP%] {\n  background-color: lightgreen;\n}\n\n.hideInfo[_ngcontent-%COMP%] {\n  display: none;\n  z-index: -1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3Vyc2UvZGFzaGJvYXJkL0M6XFxVc2Vyc1xcSmltbXlcXERvY3VtZW50c1xcR2l0SHViXFxsbXMtZml1LWZiLWNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcY291cnNlXFxkYXNoYm9hcmRcXGRhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jb3Vyc2UvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7QUNDSjs7QURFQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSw0RUFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSwyRUFBQTtBQ0NKOztBREVBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7QUNDSjs7QURFQTtFQUNJLDRCQUFBO0FDQ0o7O0FERUE7RUFDSSxhQUFBO0VBQ0EsV0FBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb3Vyc2UvZGFzaGJvYXJkL2Rhc2hib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4LWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxufVxyXG5cclxuLmZsZXgtaXRlbSB7XHJcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkIHtcclxuICAgIHRyYW5zaXRpb246IDAuN3M7XHJcbiAgICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuMiksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTkpO1xyXG59XHJcblxyXG4uY2FyZDpob3ZlciB7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjdzO1xyXG4gICAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjgpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjgpO1xyXG59XHJcblxyXG5pbnB1dC5sYXJnZXIge1xyXG4gICAgd2lkdGg6IDUwcHg7XHJcbiAgICBoZWlnaHQ6IDUwcHg7XHJcbn1cclxuXHJcbi5jaGVja2VkLWNvbG9yIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Z3JlZW47XHJcbn1cclxuXHJcbi5oaWRlSW5mb3tcclxuICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB6LWluZGV4OiAtMTtcclxufSIsIi5mbGV4LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xufVxuXG4uZmxleC1pdGVtIHtcbiAgYWxpZ24tc2VsZjogY2VudGVyO1xuICBtYXJnaW46IDEwcHg7XG59XG5cbi5jYXJkIHtcbiAgdHJhbnNpdGlvbjogMC43cztcbiAgYm94LXNoYWRvdzogMCA0cHggOHB4IDAgcmdiYSgwLCAwLCAwLCAwLjIpLCAwIDZweCAyMHB4IDAgcmdiYSgwLCAwLCAwLCAwLjE5KTtcbn1cblxuLmNhcmQ6aG92ZXIge1xuICB0cmFuc2l0aW9uOiAwLjdzO1xuICBib3gtc2hhZG93OiAwIDRweCA4cHggMCByZ2JhKDAsIDAsIDAsIDAuOCksIDAgNnB4IDIwcHggMCByZ2JhKDAsIDAsIDAsIDAuOCk7XG59XG5cbmlucHV0LmxhcmdlciB7XG4gIHdpZHRoOiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG59XG5cbi5jaGVja2VkLWNvbG9yIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogbGlnaHRncmVlbjtcbn1cblxuLmhpZGVJbmZvIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgei1pbmRleDogLTE7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DashboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-dashboard',
          templateUrl: './dashboard.component.html',
          styleUrls: ['./dashboard.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_2__["StudentCourseService"]
        }, {
          type: _app_core_services_course_service__WEBPACK_IMPORTED_MODULE_3__["CourseService"]
        }, {
          type: _app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
        }, {
          type: _app_core_services_announcement_service__WEBPACK_IMPORTED_MODULE_6__["AnnouncementService"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/course/home-edit/home-edit.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/modules/course/home-edit/home-edit.component.ts ***!
    \*****************************************************************/

  /*! exports provided: HomeEditComponent */

  /***/
  function srcAppModulesCourseHomeEditHomeEditComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeEditComponent", function () {
      return HomeEditComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-build-classic */
    "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _app_core_services_course_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/core/services/course-details.service */
    "./src/app/core/services/course-details.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-angular */
    "./node_modules/@ckeditor/ckeditor5-angular/__ivy_ngcc__/fesm2015/ckeditor-ckeditor5-angular.js");

    function HomeEditComponent_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r444 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ckeditor", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function HomeEditComponent_ng_container_1_Template_ckeditor_change_1_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r444);

          var ctx_r443 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r443.onChange($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeEditComponent_ng_container_1_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r444);

          var content_r442 = ctx.ngIf;

          var ctx_r445 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r445.onSubmit(content_r442.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeEditComponent_ng_container_1_Template_button_click_5_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r444);

          var content_r442 = ctx.ngIf;

          var ctx_r446 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r446.onClearButtonClicked(content_r442.id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Clear and Submit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "i", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Go back");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "hr");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "h2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Preview");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "div", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var content_r442 = ctx.ngIf;

        var ctx_r441 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("editor", ctx_r441.Editor)("data", ctx_r441.editorData ? ctx_r441.editorData : content_r442.content);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/courses/", ctx_r441.courseId, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", ctx_r441.editorData ? ctx_r441.editorData : content_r442.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    var HomeEditComponent =
    /*#__PURE__*/
    function () {
      function HomeEditComponent(courseDetailsService, route, router) {
        _classCallCheck(this, HomeEditComponent);

        this.courseDetailsService = courseDetailsService;
        this.route = route;
        this.router = router;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__;
        this.isCleared = false;
      }

      _createClass(HomeEditComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          this.route.params.subscribe(function (params) {
            _this29.courseId = params.id; //console.log("Params id: " + params.id);
          });
          this.courseContent = this.courseDetailsService.getCourseDetails(this.courseId);
          this.courseDetailsService.getCourseDetails(this.courseId).subscribe(function (data) {
            _this29.courseDetails = data; //console.log(data);
          });
        }
      }, {
        key: "onReady",
        value: function onReady(editor) {
          editor.setData("");
        }
      }, {
        key: "onChange",
        value: function onChange(_ref3) {
          var editor = _ref3.editor;
          this.editorData = editor.getData();

          if (this.isCleared) {
            editor.setData("");
            this.isCleared = false;
          }

          console.log(this.editorData);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(id) {
          var _this30 = this;

          this.courseDetailsService.updateCourseDetails(id, this.editorData).subscribe(function () {
            alert("Submitted Content");

            _this30.router.navigate(['courses', _this30.courseId]);
          });
        }
      }, {
        key: "onClearButtonClicked",
        value: function onClearButtonClicked(id) {
          var _this31 = this;

          var r = confirm("Clear content; Are you sure?");

          if (r) {
            this.courseDetailsService.clearCourseDetails(id).subscribe(function () {
              alert("Cleared Content");
              _this31.isCleared = true;

              _this31.router.navigate(['courses', _this31.courseId]);
            });
          }
        }
      }]);

      return HomeEditComponent;
    }();

    HomeEditComponent.ɵfac = function HomeEditComponent_Factory(t) {
      return new (t || HomeEditComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_course_details_service__WEBPACK_IMPORTED_MODULE_2__["CourseDetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]));
    };

    HomeEditComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeEditComponent,
      selectors: [["app-home-edit"]],
      decls: 3,
      vars: 3,
      consts: [[1, "flexbox-row"], [4, "ngIf"], [1, "clamp-words", 3, "editor", "data", "change"], [1, "btn", "btn-primary", 2, "margin-right", "15px", 3, "click"], [1, "btn", "btn-warning", 2, "margin-left", "15px", 3, "click"], [1, "btn", "btn-secondary", 2, "margin-left", "15px", 3, "routerLink"], [1, "fas", "fa-arrow-circle-left"], [1, "custom-font", "clamp-words", 2, "margin-top", "30px", 3, "innerHTML"]],
      template: function HomeEditComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, HomeEditComponent_ng_container_1_Template, 14, 4, "ng-container", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 1, ctx.courseContent));
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ckeditor_ckeditor5_angular__WEBPACK_IMPORTED_MODULE_5__["CKEditorComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: [".flexbox-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3Vyc2UvaG9tZS1lZGl0L0M6XFxVc2Vyc1xcSmltbXlcXERvY3VtZW50c1xcR2l0SHViXFxsbXMtZml1LWZiLWNsaWVudC9zcmNcXGFwcFxcbW9kdWxlc1xcY291cnNlXFxob21lLWVkaXRcXGhvbWUtZWRpdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jb3Vyc2UvaG9tZS1lZGl0L2hvbWUtZWRpdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb3Vyc2UvaG9tZS1lZGl0L2hvbWUtZWRpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mbGV4Ym94LXJvdyB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn0iLCIuZmxleGJveC1yb3cge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeEditComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home-edit',
          templateUrl: './home-edit.component.html',
          styleUrls: ['./home-edit.component.scss']
        }]
      }], function () {
        return [{
          type: _app_core_services_course_details_service__WEBPACK_IMPORTED_MODULE_2__["CourseDetailsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/course/home/home.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/modules/course/home/home.component.ts ***!
    \*******************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppModulesCourseHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @ckeditor/ckeditor5-build-classic */
    "./node_modules/@ckeditor/ckeditor5-build-classic/build/ckeditor.js");
    /* harmony import */


    var _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1___default =
    /*#__PURE__*/
    __webpack_require__.n(_ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _app_core_services_course_details_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/core/services/course-details.service */
    "./src/app/core/services/course-details.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../sidebar/sidebar.component */
    "./src/app/modules/course/sidebar/sidebar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function HomeComponent_a_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "a", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r189 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/courses/", ctx_r189.courseId, "/edit-home");
      }
    }

    function HomeComponent_ng_container_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var content_r191 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("innerHTML", content_r191.content, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeHtml"]);
      }
    }

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(courseDetailsService, route, authenticationService) {
        var _this32 = this;

        _classCallCheck(this, HomeComponent);

        this.courseDetailsService = courseDetailsService;
        this.route = route;
        this.authenticationService = authenticationService;
        this.Editor = _ckeditor_ckeditor5_build_classic__WEBPACK_IMPORTED_MODULE_1__;
        this.isCleared = false;
        this.authenticationService.currentUser.subscribe(function (x) {
          return _this32.currentUser = x;
        });
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this33 = this;

          //this.tokenPayload = decode(this.currentUser.token);
          this.isAdmin = this.currentUser.role === "admin";
          this.isInstructor = this.currentUser.role === "instructor";
          this.isStudent = this.currentUser.role === "student";
          this.route.params.subscribe(function (params) {
            _this33.courseId = params.id; //console.log("Params id: " + params.id);
          });
          this.courseContent = this.courseDetailsService.getCourseDetails(this.courseId);
          this.courseDetailsService.getCourseDetails(this.courseId).subscribe(function (data) {
            _this33.courseDetails = data; //console.log(data);
          });
        }
      }, {
        key: "onReady",
        value: function onReady(editor) {
          editor.setData("");
        }
      }, {
        key: "onChange",
        value: function onChange(_ref4) {
          var editor = _ref4.editor;
          this.editorData = editor.getData();

          if (this.isCleared) {
            editor.setData("");
            this.isCleared = false;
          }

          console.log(this.editorData);
        }
      }, {
        key: "onSubmit",
        value: function onSubmit(id) {
          this.courseDetailsService.updateCourseDetails(id, this.editorData).subscribe(function () {
            alert("Submitted Content");
          });
        }
      }, {
        key: "onClearButtonClicked",
        value: function onClearButtonClicked(id) {
          var _this34 = this;

          var r = confirm("Clear content; Are you sure?");

          if (r) {
            this.courseDetailsService.clearCourseDetails(id).subscribe(function () {
              alert("Cleared Content");
              _this34.isCleared = true;
            });
          }
        }
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_course_details_service__WEBPACK_IMPORTED_MODULE_2__["CourseDetailsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]));
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 6,
      vars: 4,
      consts: [["id", "main"], [1, "flexbox-row"], ["class", "btn btn-primary", 3, "routerLink", 4, "ngIf"], [4, "ngIf"], [1, "btn", "btn-primary", 3, "routerLink"], [1, "custom-font", "clamp-words", 2, "margin-top", "30px", 3, "innerHTML"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, HomeComponent_a_3_Template, 2, 1, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, HomeComponent_ng_container_4_Template, 2, 1, "ng-container", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAdmin || ctx.isInstructor);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](5, 2, ctx.courseContent));
        }
      },
      directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_5__["SidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkWithHref"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["AsyncPipe"]],
      styles: [".flexbox-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n  position: relative;\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3Vyc2UvaG9tZS9DOlxcVXNlcnNcXEppbW15XFxEb2N1bWVudHNcXEdpdEh1YlxcbG1zLWZpdS1mYi1jbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXGNvdXJzZVxcaG9tZVxcaG9tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jb3Vyc2UvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvdXJzZS9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleGJveC1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG59IiwiLmZsZXhib3gtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufSJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-home',
          templateUrl: './home.component.html',
          styleUrls: ['./home.component.scss']
        }]
      }], function () {
        return [{
          type: _app_core_services_course_details_service__WEBPACK_IMPORTED_MODULE_2__["CourseDetailsService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
        }];
      }, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/app/core/services/student-course.service */
    "./src/app/core/services/student-course.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../sidebar/sidebar.component */
    "./src/app/modules/course/sidebar/sidebar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function LeaderboardComponent_div_10_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var student_r417 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r417.student_id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](student_r417.points);
      }
    }

    function LeaderboardComponent_span_12_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r416 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Class average: ", ctx_r416.average.average, "");
      }
    }

    var LeaderboardComponent =
    /*#__PURE__*/
    function () {
      function LeaderboardComponent(studentCourseService, router, route, authenticationService) {
        var _this35 = this;

        _classCallCheck(this, LeaderboardComponent);

        this.studentCourseService = studentCourseService;
        this.router = router;
        this.route = route;
        this.authenticationService = authenticationService;
        this.students = [];
        this.authenticationService.currentUser.subscribe(function (x) {
          return _this35.currentUser = x;
        });
      }

      _createClass(LeaderboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this36 = this;

          this.route.params.subscribe(function (params) {
            _this36.courseId = params.id;
            console.log("param id is: " + params.id);
          }); //this.userPayload = decode(this.currentUser.token);

          this.fetchStudents(this.courseId);
          this.getAvgStudentPoints(this.courseId, this.currentUser.id);
        } // Gets students from course ID

      }, {
        key: "fetchStudents",
        value: function fetchStudents(courseId) {
          var _this37 = this;

          console.log("fetching students");
          this.studentCourseService.getStudentsByCourseId(courseId).subscribe(function (data) {
            _this37.students = data;
            console.log(data);
          });
        }
      }, {
        key: "getAvgStudentPoints",
        value: function getAvgStudentPoints(courseId, studentId) {
          var _this38 = this;

          console.log("Called avgstudentpoints on student_id: " + studentId);
          this.studentCourseService.getAvgStudentPoints(courseId, studentId).subscribe(function (data) {
            _this38.average = data;
            console.log("avg: " + JSON.stringify(data));
            _this38.average.average = _this38.toFixed(_this38.average.average, 2);
          });
        }
      }, {
        key: "toFixed",
        value: function toFixed(value, precision) {
          var power = Math.pow(10, precision || 0);
          return String(Math.round(value * power) / power);
        }
      }]);

      return LeaderboardComponent;
    }();

    LeaderboardComponent.ɵfac = function LeaderboardComponent_Factory(t) {
      return new (t || LeaderboardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_1__["StudentCourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]));
    };

    LeaderboardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: LeaderboardComponent,
      selectors: [["app-leaderboard"]],
      decls: 13,
      vars: 2,
      consts: [[1, "main"], [1, "flexbox-row"], [1, "flexbox-container"], [1, "flexbox-cell", "left"], [1, "flexbox-cell", "right"], ["class", "flexbox-row", 4, "ngFor", "ngForOf"], [1, "center-form", 2, "margin-top", "15px"], [4, "ngIf"]],
      template: function LeaderboardComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Leaderboard ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "ID");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Points");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, LeaderboardComponent_div_10_Template, 6, 2, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, LeaderboardComponent_span_12_Template, 2, 1, "span", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.students);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.average);
        }
      },
      directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_4__["SidebarComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"]],
      styles: [".flexbox-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  \n  width: 600px;\n  padding: 20px;\n  justify-content: space-around;\n  align-items: center;\n  background-color: #ececec;\n  border-left: solid black 1px;\n  border-right: solid black 1px;\n  border-bottom: dotted gray 1px;\n}\n\n.flexbox-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.flexbox-column[_ngcontent-%COMP%] {\n  background-color: #d9deff;\n  display: flex;\n  flex-direction: row;\n  justify-content: space-evenly;\n  align-items: center;\n}\n\n.flexbox-cell[_ngcontent-%COMP%] {\n  width: 100px;\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3Vyc2UvbGVhZGVyYm9hcmQvQzpcXFVzZXJzXFxKaW1teVxcRG9jdW1lbnRzXFxHaXRIdWJcXGxtcy1maXUtZmItY2xpZW50L3NyY1xcYXBwXFxtb2R1bGVzXFxjb3Vyc2VcXGxlYWRlcmJvYXJkXFxsZWFkZXJib2FyZC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jb3Vyc2UvbGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsNkJBQUE7RUFDQSw4QkFBQTtBQ0NKOztBREVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNDSjs7QURFQTtFQUNJLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtBQ0NKOztBRENBO0VBQ0ksWUFBQTtFQUNBLGtCQUFBO0FDRUo7O0FEQUE7Ozs7Ozs7Ozs7OztDQUFBIiwiZmlsZSI6InNyYy9hcHAvbW9kdWxlcy9jb3Vyc2UvbGVhZGVyYm9hcmQvbGVhZGVyYm9hcmQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleGJveC1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93OyAvL01vZGlmaWVkIGZyb20gY29sdW1uXHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAvKmhlaWdodDogNTBweDsqL1xyXG4gICAgd2lkdGg6IDYwMHB4O1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kOyAvL01vZGlmaWVkIGZyb20gc3BhY2UtZXZlbmx5XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIzNiwgMjM2LCAyMzYpO1xyXG4gICAgYm9yZGVyLWxlZnQ6IHNvbGlkIGJsYWNrIDFweDtcclxuICAgIGJvcmRlci1yaWdodDogc29saWQgYmxhY2sgMXB4O1xyXG4gICAgYm9yZGVyLWJvdHRvbTogZG90dGVkIGdyYXkgMXB4O1xyXG59XHJcbi8vIExlYWRlcmJvYXJkIENTU1xyXG4uZmxleGJveC1yb3cge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5mbGV4Ym94LWNvbHVtbiB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZDlkZWZmO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLmZsZXhib3gtY2VsbHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4vKlxyXG4uZmxleGJveC1jZWxsLmxlZnQge1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxuLmZsZXhib3gtY2VsbC5jZW50ZXIge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4uZmxleGJveC1jZWxsLnJpZ2h0IHtcclxuICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG59XHJcbiovXHJcblxyXG5cclxuXHJcbiIsIi5mbGV4Ym94LWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLypoZWlnaHQ6IDUwcHg7Ki9cbiAgd2lkdGg6IDYwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VjZWNlYztcbiAgYm9yZGVyLWxlZnQ6IHNvbGlkIGJsYWNrIDFweDtcbiAgYm9yZGVyLXJpZ2h0OiBzb2xpZCBibGFjayAxcHg7XG4gIGJvcmRlci1ib3R0b206IGRvdHRlZCBncmF5IDFweDtcbn1cblxuLmZsZXhib3gtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZsZXhib3gtY29sdW1uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZGVmZjtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1ldmVubHk7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5mbGV4Ym94LWNlbGwge1xuICB3aWR0aDogMTAwcHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLypcbi5mbGV4Ym94LWNlbGwubGVmdCB7XG4gICAgdGV4dC1hbGlnbjogbGVmdDtcbn1cblxuLmZsZXhib3gtY2VsbC5jZW50ZXIge1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmZsZXhib3gtY2VsbC5yaWdodCB7XG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XG59XG4qLyJdfQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LeaderboardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-leaderboard',
          templateUrl: './leaderboard.component.html',
          styleUrls: ['./leaderboard.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_1__["StudentCourseService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }];
      }, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var src_app_core_services_module_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/core/services/module.service */
    "./src/app/core/services/module.service.ts");
    /* harmony import */


    var _app_core_services_video_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/core/services/video.service */
    "./src/app/core/services/video.service.ts");
    /* harmony import */


    var _app_core_services_pdf_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/services/pdf.service */
    "./src/app/core/services/pdf.service.ts");
    /* harmony import */


    var _app_core_services_survey_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @app/core/services/survey.service */
    "./src/app/core/services/survey.service.ts");
    /* harmony import */


    var _app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @app/core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");
    /* harmony import */


    var _app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @app/core/services/student-course.service */
    "./src/app/core/services/student-course.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../sidebar/sidebar.component */
    "./src/app/modules/course/sidebar/sidebar.component.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function ModulesComponent_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r195 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_14_Template_button_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r195);

          var ctx_r194 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r194.createModule(ctx_r194.courseId);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " Create Module");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_span_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 24);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var module_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("locked until: ", module_r196.lockedUntil, "");
      }
    }

    function ModulesComponent_div_15_ng_container_1_ng_template_2_span_0_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var module_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("locked until: ", module_r196.lockedUntil, "");
      }
    }

    function ModulesComponent_div_15_ng_container_1_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, ModulesComponent_div_15_ng_container_1_ng_template_2_span_0_Template, 2, 1, "span", 25);
      }

      if (rf & 2) {
        var ctx_r203 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r203.isAdmin || ctx_r203.isInstructor);
      }
    }

    function ModulesComponent_div_15_ng_container_1_ng_template_5_div_24_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Link is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_ng_template_5_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModulesComponent_div_15_ng_container_1_ng_template_5_div_24_div_1_Template, 2, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r223 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r223.v.link.errors.required);
      }
    }

    function ModulesComponent_div_15_ng_container_1_ng_template_5_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Valid youtube link ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_ng_template_5_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid Youtube Link ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_ng_template_5_button_27_Template(rf, ctx) {
      if (rf & 1) {
        var _r230 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_ng_template_5_button_27_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r230);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r222 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          var module_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r229 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r229.addVideo(_r222.value, module_r196.module_id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add Video");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_ng_template_5_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 49);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r227 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r227.error);
      }
    }

    var _c0 = function _c0(a0, a1) {
      return {
        "is-invalid": a0,
        "is-valid": a1
      };
    };

    function ModulesComponent_div_15_ng_container_1_ng_template_5_Template(rf, ctx) {
      if (rf & 1) {
        var _r234 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Youtube Video");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_ng_template_5_Template_button_click_3_listener() {
          var modal_r221 = ctx.$implicit;
          return modal_r221.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Valid youtube links are of the formats:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " https://youtu.be/*********** ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "And ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "https://www.youtube.com/watch?v=***********");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 36, 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ModulesComponent_div_15_ng_container_1_ng_template_5_Template_input_keyup_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r234);

          var ctx_r233 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r233.handleValidLink($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ModulesComponent_div_15_ng_container_1_ng_template_5_div_24_Template, 2, 1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ModulesComponent_div_15_ng_container_1_ng_template_5_div_25_Template, 2, 0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ModulesComponent_div_15_ng_container_1_ng_template_5_div_26_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](27, ModulesComponent_div_15_ng_container_1_ng_template_5_button_27_Template, 3, 0, "button", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ModulesComponent_div_15_ng_container_1_ng_template_5_div_28_Template, 2, 1, "div", 42);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_ng_template_5_Template_button_click_30_listener() {
          var modal_r221 = ctx.$implicit;
          return modal_r221.close("Close click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r205 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r205.videoForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](7, _c0, ctx_r205.submitted && ctx_r205.v.link.errors, ctx_r205.validLink));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r205.submitted && ctx_r205.v.link.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r205.validLink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r205.invalidLink && !ctx_r205.validLink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r205.isAdmin || ctx_r205.isInstructor);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r205.error);
      }
    }

    function ModulesComponent_div_15_ng_container_1_button_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r237 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_button_7_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r237);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r204 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](6);

          var ctx_r236 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r236.open(_r204);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Video");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_ng_template_8_div_15_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pdf is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_ng_template_8_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModulesComponent_div_15_ng_container_1_ng_template_8_div_15_div_1_Template, 2, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r240 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r240.p.pdf.errors.required);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "is-invalid": a0
      };
    };

    function ModulesComponent_div_15_ng_container_1_ng_template_8_Template(rf, ctx) {
      if (rf & 1) {
        var _r245 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add PDF File");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_ng_template_8_Template_button_click_3_listener() {
          var modal_r238 = ctx.$implicit;
          return modal_r238.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ModulesComponent_div_15_ng_container_1_ng_template_8_Template_form_ngSubmit_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r245);

          var module_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r243 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r243.addPdf(module_r196.module_id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Select a PDF File");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 52, 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ModulesComponent_div_15_ng_container_1_ng_template_8_Template_input_change_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r245);

          var ctx_r246 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r246.handleFileInput($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ModulesComponent_div_15_ng_container_1_ng_template_8_div_15_Template, 2, 1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Add PDF");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_ng_template_8_Template_button_click_20_listener() {
          var modal_r238 = ctx.$implicit;
          return modal_r238.close("Close click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r208 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r208.pdfForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r208.submitted && ctx_r208.p.pdf.errors));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r208.submitted && ctx_r208.p.pdf.errors);
      }
    }

    function ModulesComponent_div_15_ng_container_1_button_10_Template(rf, ctx) {
      if (rf & 1) {
        var _r249 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_button_10_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r249);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r207 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](9);

          var ctx_r248 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r248.open(_r207);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add PDF");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_ng_template_11_div_20_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_ng_template_11_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModulesComponent_div_15_ng_container_1_ng_template_11_div_20_div_1_Template, 2, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r252 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r252.s.name.errors.required);
      }
    }

    function ModulesComponent_div_15_ng_container_1_ng_template_11_div_28_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Link is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_ng_template_11_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModulesComponent_div_15_ng_container_1_ng_template_11_div_28_div_1_Template, 2, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r254 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r254.s.link.errors.required);
      }
    }

    function ModulesComponent_div_15_ng_container_1_ng_template_11_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Valid Qualtrics link ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_ng_template_11_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid Qualtrics Link ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_ng_template_11_button_31_Template(rf, ctx) {
      if (rf & 1) {
        var _r261 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_ng_template_11_button_31_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r261);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r251 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

          var _r253 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

          var module_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r260 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r260.addSurvey(_r251.value, _r253.value, module_r196.module_id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Add Quiz/Exam");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_ng_template_11_Template(rf, ctx) {
      if (rf & 1) {
        var _r265 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Add Qualtrics Quiz/Exam");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_ng_template_11_Template_button_click_3_listener() {
          var modal_r250 = ctx.$implicit;
          return modal_r250.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Valid Qualtrics links are of the formats:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " https://fiu.qualtrics.com/jfe/form/******************");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 56, 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ModulesComponent_div_15_ng_container_1_ng_template_11_div_20_Template, 2, 1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 58, 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ModulesComponent_div_15_ng_container_1_ng_template_11_Template_input_keyup_26_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r265);

          var ctx_r264 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

          return ctx_r264.handleValidQuiz($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ModulesComponent_div_15_ng_container_1_ng_template_11_div_28_Template, 2, 1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ModulesComponent_div_15_ng_container_1_ng_template_11_div_29_Template, 2, 0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ModulesComponent_div_15_ng_container_1_ng_template_11_div_30_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](31, ModulesComponent_div_15_ng_container_1_ng_template_11_button_31_Template, 3, 0, "button", 41);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_ng_template_11_Template_button_click_33_listener() {
          var modal_r250 = ctx.$implicit;
          return modal_r250.close("Close click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r211 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r211.surveyForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](8, _c1, ctx_r211.submitted && ctx_r211.s.name.errors));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r211.submitted && ctx_r211.s.name.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](10, _c0, ctx_r211.submitted && ctx_r211.s.link.errors, ctx_r211.validQuiz));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r211.submitted && ctx_r211.s.link.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r211.validQuiz);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r211.invalidQuiz && !ctx_r211.validQuiz);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r211.isAdmin || ctx_r211.isInstructor);
      }
    }

    function ModulesComponent_div_15_ng_container_1_button_13_Template(rf, ctx) {
      if (rf & 1) {
        var _r268 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_button_13_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r268);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var _r210 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          var ctx_r267 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

          return ctx_r267.open(_r210);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Add Quiz/Exam");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_14_Template(rf, ctx) {
      if (rf & 1) {
        var _r271 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_div_14_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r271);

          var index_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r269 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r269.openModule(index_r197);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var module_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Module ", module_r196.module_number, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("| ", module_r196.module_title, " ");
      }
    }

    function ModulesComponent_div_15_ng_container_1_ng_template_15_Template(rf, ctx) {
      if (rf & 1) {
        var _r275 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 59);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_ng_template_15_Template_div_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r275);

          var index_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).index;

          var ctx_r273 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r273.openModule(index_r197);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 61);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var module_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Module ", module_r196.module_number, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("| ", module_r196.module_title, " ");
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_1_div_1_div_1_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_div_17_div_1_div_1_div_1_ng_template_2_Template_button_click_3_listener() {
          var modal_r292 = ctx.$implicit;
          return modal_r292.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "iframe", 75);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_div_17_div_1_div_1_div_1_ng_template_2_Template_button_click_10_listener() {
          var modal_r292 = ctx.$implicit;
          return modal_r292.close("Close click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r296 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var j_r285 = ctx_r296.index;
        var innerpdf_r284 = ctx_r296.$implicit;

        var module_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", module_r196.module_title, " - Pdf ", j_r285 + 1, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", innerpdf_r284.pdf, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_1_div_1_div_1_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r299 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_div_17_div_1_div_1_div_1_button_6_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r299);

          var ctx_r298 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var innerpdf_r284 = ctx_r298.$implicit;
          var j_r285 = ctx_r298.index;

          var ctx_r297 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

          return ctx_r297.deletePDF(innerpdf_r284.pdf_id, j_r285);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete Pdf");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_1_div_1_div_1_ng_template_7_div_15_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Pdf is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_1_div_1_div_1_ng_template_7_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModulesComponent_div_15_ng_container_1_div_17_div_1_div_1_div_1_ng_template_7_div_15_div_1_Template, 2, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r302 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r302.pu.pdf.errors.required);
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_1_div_1_div_1_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r307 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit PDF");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_div_17_div_1_div_1_div_1_ng_template_7_Template_button_click_3_listener() {
          var modal_r300 = ctx.$implicit;
          return modal_r300.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 50);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function ModulesComponent_div_15_ng_container_1_div_17_div_1_div_1_div_1_ng_template_7_Template_form_ngSubmit_7_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r307);

          var innerpdf_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var module_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5).$implicit;

          var ctx_r305 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r305.updatePDF(innerpdf_r284.pdf_id, module_r196.module_id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 51);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Select a PDF File");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "input", 52, 53);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("change", function ModulesComponent_div_15_ng_container_1_div_17_div_1_div_1_div_1_ng_template_7_Template_input_change_13_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r307);

          var ctx_r309 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);

          return ctx_r309.handleFileInputUpdate($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ModulesComponent_div_15_ng_container_1_div_17_div_1_div_1_div_1_ng_template_7_div_15_Template, 2, 1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 54);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Update PDF");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_div_17_div_1_div_1_div_1_ng_template_7_Template_button_click_20_listener() {
          var modal_r300 = ctx.$implicit;
          return modal_r300.close("Close click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r290 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r290.updatePdfForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx_r290.submitted && ctx_r290.pu.pdf.errors));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r290.submitted && ctx_r290.pu.pdf.errors);
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_1_div_1_div_1_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r312 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_div_17_div_1_div_1_div_1_button_9_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r312);

          var innerpdf_r284 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var _r289 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r311 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

          return ctx_r311.openUpdatePDF(_r289, innerpdf_r284.rawPdf);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit PDF");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_1_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r315 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 67);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 68);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModulesComponent_div_15_ng_container_1_div_17_div_1_div_1_div_1_ng_template_2_Template, 12, 3, "ng-template", null, 69, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_div_17_div_1_div_1_div_1_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r315);

          var _r286 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r314 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

          return ctx_r314.open(_r286);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ModulesComponent_div_15_ng_container_1_div_17_div_1_div_1_div_1_button_6_Template, 2, 0, "button", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ModulesComponent_div_15_ng_container_1_div_17_div_1_div_1_div_1_ng_template_7_Template, 22, 5, "ng-template", null, 72, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ModulesComponent_div_15_ng_container_1_div_17_div_1_div_1_div_1_button_9_Template, 2, 0, "button", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var j_r285 = ctx.index;

        var ctx_r283 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("View Pdf ", j_r285 + 1, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r283.isAdmin || ctx_r283.isInstructor);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r283.isAdmin || ctx_r283.isInstructor);
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModulesComponent_div_15_ng_container_1_div_17_div_1_div_1_div_1_Template, 10, 3, "div", 66);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pdf_r280 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", pdf_r280.value);
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 65);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModulesComponent_div_15_ng_container_1_div_17_div_1_div_1_Template, 2, 1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var pdf_r280 = ctx.$implicit;

        var module_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", pdf_r280.key == module_r196.module_id);
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_3_div_1_div_1_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_div_17_div_3_div_1_div_1_ng_template_2_Template_button_click_3_listener() {
          var modal_r330 = ctx.$implicit;
          return modal_r330.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "iframe", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_div_17_div_3_div_1_div_1_ng_template_2_Template_button_click_10_listener() {
          var modal_r330 = ctx.$implicit;
          return modal_r330.close("Close click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r334 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        var j_r323 = ctx_r334.index;
        var innerlink_r322 = ctx_r334.$implicit;

        var module_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", module_r196.module_title, " - Video ", j_r323 + 1, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", innerlink_r322.videoUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_3_div_1_div_1_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r337 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_div_17_div_3_div_1_div_1_button_6_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r337);

          var ctx_r336 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var innerlink_r322 = ctx_r336.$implicit;
          var j_r323 = ctx_r336.index;

          var ctx_r335 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

          return ctx_r335.deleteVideo(innerlink_r322.video_id, j_r323);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete Video");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_3_div_1_div_1_ng_template_7_div_24_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Link is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_3_div_1_div_1_ng_template_7_div_24_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModulesComponent_div_15_ng_container_1_div_17_div_3_div_1_div_1_ng_template_7_div_24_div_1_Template, 2, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r340 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r340.vu.linkInput.errors.required);
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_3_div_1_div_1_ng_template_7_div_25_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Valid youtube link ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_3_div_1_div_1_ng_template_7_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid Youtube Link ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_3_div_1_div_1_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r346 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Youtube Video");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_div_17_div_3_div_1_div_1_ng_template_7_Template_button_click_3_listener() {
          var modal_r338 = ctx.$implicit;
          return modal_r338.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Valid youtube links are of the formats:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " https://youtu.be/*********** ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "And ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "https://www.youtube.com/watch?v=***********");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "label", 85);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "New Link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "input", 86, 87);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ModulesComponent_div_15_ng_container_1_div_17_div_3_div_1_div_1_ng_template_7_Template_input_keyup_22_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r346);

          var ctx_r345 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);

          return ctx_r345.handleValidLink($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](24, ModulesComponent_div_15_ng_container_1_div_17_div_3_div_1_div_1_ng_template_7_div_24_Template, 2, 1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](25, ModulesComponent_div_15_ng_container_1_div_17_div_3_div_1_div_1_ng_template_7_div_25_Template, 2, 0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, ModulesComponent_div_15_ng_container_1_div_17_div_3_div_1_div_1_ng_template_7_div_26_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_div_17_div_3_div_1_div_1_ng_template_7_Template_button_click_27_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r346);

          var _r339 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](23);

          var innerlink_r322 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r347 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

          return ctx_r347.updateVideo(_r339.value, innerlink_r322.video_id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Update Video");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_div_17_div_3_div_1_div_1_ng_template_7_Template_button_click_31_listener() {
          var modal_r338 = ctx.$implicit;
          return modal_r338.close("Close click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r328 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r328.updateVideoForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](5, _c0, ctx_r328.submitted && ctx_r328.vu.linkInput.errors, ctx_r328.validLink));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r328.submitted && ctx_r328.vu.linkInput.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r328.validLink);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r328.invalidLink && !ctx_r328.validLink);
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_3_div_1_div_1_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r351 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_div_17_div_3_div_1_div_1_button_9_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r351);

          var innerlink_r322 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var _r327 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r350 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

          return ctx_r350.openUpdateVideo(_r327, innerlink_r322.url);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Video");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_3_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r354 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 81);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModulesComponent_div_15_ng_container_1_div_17_div_3_div_1_div_1_ng_template_2_Template, 12, 3, "ng-template", null, 82, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_div_17_div_3_div_1_div_1_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r354);

          var _r324 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r353 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

          return ctx_r353.open(_r324);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ModulesComponent_div_15_ng_container_1_div_17_div_3_div_1_div_1_button_6_Template, 2, 0, "button", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ModulesComponent_div_15_ng_container_1_div_17_div_3_div_1_div_1_ng_template_7_Template, 33, 8, "ng-template", null, 83, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ModulesComponent_div_15_ng_container_1_div_17_div_3_div_1_div_1_button_9_Template, 2, 0, "button", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var j_r323 = ctx.index;

        var ctx_r321 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Watch Video ", j_r323 + 1, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r321.isAdmin || ctx_r321.isInstructor);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r321.isAdmin || ctx_r321.isInstructor);
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_3_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModulesComponent_div_15_ng_container_1_div_17_div_3_div_1_div_1_Template, 10, 3, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var link_r318 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", link_r318.value);
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModulesComponent_div_15_ng_container_1_div_17_div_3_div_1_Template, 2, 1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var link_r318 = ctx.$implicit;

        var module_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", link_r318.key == module_r196.module_id);
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_ng_template_2_Template_button_click_3_listener() {
          var modal_r369 = ctx.$implicit;
          return modal_r369.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 74);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "iframe", 84);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_ng_template_2_Template_button_click_10_listener() {
          var modal_r369 = ctx.$implicit;
          return modal_r369.close("Close click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var surveyObject_r361 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        var module_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](5).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"]("", module_r196.module_title, " - ", surveyObject_r361.name, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("src", surveyObject_r361.surveyUrl, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsanitizeResourceUrl"]);
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_button_6_Template(rf, ctx) {
      if (rf & 1) {
        var _r376 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 76);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_button_6_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r376);

          var ctx_r375 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          var surveyObject_r361 = ctx_r375.$implicit;
          var j_r362 = ctx_r375.index;

          var ctx_r374 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

          return ctx_r374.deleteSurvey(surveyObject_r361.survey_id, j_r362);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete Quiz/Exam");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_ng_template_7_div_20_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Name is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_ng_template_7_div_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_ng_template_7_div_20_div_1_Template, 2, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r379 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r379.su.name.errors.required);
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_ng_template_7_div_28_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Link is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_ng_template_7_div_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 45);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_ng_template_7_div_28_div_1_Template, 2, 0, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r381 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r381.su.link.errors.required);
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_ng_template_7_div_29_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 46);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Valid Qualtrics link ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_ng_template_7_div_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 47);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Invalid Qualtrics Link ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_ng_template_7_Template(rf, ctx) {
      if (rf & 1) {
        var _r388 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 27);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 28);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Quiz/Exam");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 29);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_ng_template_7_Template_button_click_3_listener() {
          var modal_r377 = ctx.$implicit;
          return modal_r377.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 30);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 31);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 32);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 33);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Valid Qualtrics links are of the formats:");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " https://fiu.qualtrics.com/jfe/form/******************");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "label", 55);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "New Name");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 91, 57);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_ng_template_7_div_20_Template, 2, 1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 34);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 35);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "*");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "New Link");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "input", 92, 37);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("keyup", function ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_ng_template_7_Template_input_keyup_26_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r388);

          var ctx_r387 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);

          return ctx_r387.handleValidQuiz($event);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_ng_template_7_div_28_Template, 2, 1, "div", 38);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](29, ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_ng_template_7_div_29_Template, 2, 0, "div", 39);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_ng_template_7_div_30_Template, 2, 0, "div", 40);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "button", 48);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_ng_template_7_Template_button_click_31_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r388);

          var _r378 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](19);

          var _r380 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](27);

          var surveyObject_r361 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r389 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

          return ctx_r389.updateSurvey(_r378.value, _r380.value, surveyObject_r361.survey_id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "i", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " Update Quiz/Exam");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "div", 43);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "button", 44);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_ng_template_7_Template_button_click_35_listener() {
          var modal_r377 = ctx.$implicit;
          return modal_r377.close("Close click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r367 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r367.updateSurveyForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](7, _c1, ctx_r367.submitted && ctx_r367.su.name.errors));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r367.submitted && ctx_r367.su.name.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction2"](9, _c0, ctx_r367.submitted && ctx_r367.su.link.errors, ctx_r367.validQuiz));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r367.submitted && ctx_r367.su.link.errors);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r367.validQuiz);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r367.invalidQuiz && !ctx_r367.validQuiz);
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r393 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 77);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_button_9_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r393);

          var surveyObject_r361 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var _r366 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

          var ctx_r392 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

          return ctx_r392.openUpdateSurvey(_r366, surveyObject_r361.name, surveyObject_r361.url);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Edit Quiz/Exam");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r396 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 80);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 88);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_ng_template_2_Template, 12, 3, "ng-template", null, 89, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 70);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_Template_button_click_4_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r396);

          var _r363 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

          var ctx_r395 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

          return ctx_r395.open(_r363);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_button_6_Template, 2, 0, "button", 71);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_ng_template_7_Template, 37, 12, "ng-template", null, 90, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_button_9_Template, 2, 0, "button", 73);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var j_r362 = ctx.index;

        var ctx_r360 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Take Quiz ", j_r362 + 1, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r360.isAdmin || ctx_r360.isInstructor);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r360.isAdmin || ctx_r360.isInstructor);
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_div_1_Template, 10, 3, "div", 79);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var survey_r357 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", survey_r357.value);
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 78);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModulesComponent_div_15_ng_container_1_div_17_div_5_div_1_Template, 2, 1, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var survey_r357 = ctx.$implicit;

        var module_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", survey_r357.key == module_r196.module_id);
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 62);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModulesComponent_div_15_ng_container_1_div_17_div_1_Template, 2, 1, "div", 63);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "keyvalue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, ModulesComponent_div_15_ng_container_1_div_17_div_3_Template, 2, 1, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "keyvalue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ModulesComponent_div_15_ng_container_1_div_17_div_5_Template, 2, 1, "div", 64);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "keyvalue");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r216 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 3, ctx_r216.safePdfs));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](4, 5, ctx_r216.safeLinks));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 7, ctx_r216.safeSurveys));
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_18_button_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r403 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_div_18_button_1_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r403);

          var module_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          var ctx_r401 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r401.editModule(module_r196.course_id, module_r196.module_id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 98);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Edit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_18_button_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r406 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 99);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_div_18_button_2_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r406);

          var module_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3).$implicit;

          var ctx_r404 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r404.deleteModule(module_r196.module_id, module_r196.module_number);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "i", 100);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Delete");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function ModulesComponent_div_15_ng_container_1_div_18_Template(rf, ctx) {
      if (rf & 1) {
        var _r409 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 93);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModulesComponent_div_15_ng_container_1_div_18_button_1_Template, 3, 0, "button", 94);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModulesComponent_div_15_ng_container_1_div_18_button_2_Template, 3, 0, "button", 95);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 96);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_container_1_div_18_Template_button_click_3_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r409);

          var module_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2).$implicit;

          var ctx_r407 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r407.viewDiscussion(module_r196.course_id, module_r196.module_id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "i", 97);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " View Discussion");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r217 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r217.isAdmin || ctx_r217.isInstructor);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r217.isAdmin || ctx_r217.isInstructor);
      }
    }

    function ModulesComponent_div_15_ng_container_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModulesComponent_div_15_ng_container_1_span_1_Template, 2, 1, "span", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModulesComponent_div_15_ng_container_1_ng_template_2_Template, 1, 1, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, ModulesComponent_div_15_ng_container_1_ng_template_5_Template, 32, 10, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, ModulesComponent_div_15_ng_container_1_button_7_Template, 2, 0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, ModulesComponent_div_15_ng_container_1_ng_template_8_Template, 22, 5, "ng-template", null, 18, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, ModulesComponent_div_15_ng_container_1_button_10_Template, 2, 0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](11, ModulesComponent_div_15_ng_container_1_ng_template_11_Template, 35, 13, "ng-template", null, 19, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, ModulesComponent_div_15_ng_container_1_button_13_Template, 2, 0, "button", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ModulesComponent_div_15_ng_container_1_div_14_Template, 5, 2, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ModulesComponent_div_15_ng_container_1_ng_template_15_Template, 5, 2, "ng-template", null, 21, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, ModulesComponent_div_15_ng_container_1_div_17_Template, 7, 9, "div", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, ModulesComponent_div_15_ng_container_1_div_18_Template, 6, 2, "div", 23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
      }

      if (rf & 2) {
        var _r202 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var _r214 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](16);

        var index_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

        var ctx_r198 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r198.moduleLocked[index_r197] && (ctx_r198.isAdmin || ctx_r198.isInstructor))("ngIfElse", _r202);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r198.isAdmin || ctx_r198.isInstructor);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r198.isAdmin || ctx_r198.isInstructor);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r198.isAdmin || ctx_r198.isInstructor);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r198.toggleContent[index_r197])("ngIfElse", _r214);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r198.toggleContent[index_r197]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r198.currentUser);
      }
    }

    function ModulesComponent_div_15_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        var _r413 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "span", 26);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 101);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function ModulesComponent_div_15_ng_template_2_Template_div_click_2_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r413);

          var index_r197 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().index;

          var ctx_r411 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r411.openModule(index_r197);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "i", 60);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var module_r196 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("locked until: ", module_r196.lockedUntil, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Module ", module_r196.module_number, " ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("| ", module_r196.module_title, " ");
      }
    }

    function ModulesComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, ModulesComponent_div_15_ng_container_1_Template, 19, 9, "ng-container", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, ModulesComponent_div_15_ng_template_2_Template, 7, 3, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var index_r197 = ctx.index;

        var _r199 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var ctx_r193 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx_r193.moduleLocked[index_r197] || ctx_r193.isAdmin || ctx_r193.isInstructor)("ngIfElse", _r199);
      }
    }

    var ModulesComponent =
    /*#__PURE__*/
    function () {
      function ModulesComponent(moduleService, videoService, pdfService, surveyService, authenticationService, studentCourseService, fb, router, route, sanitizer, modalService) {
        var _this39 = this;

        _classCallCheck(this, ModulesComponent);

        this.moduleService = moduleService;
        this.videoService = videoService;
        this.pdfService = pdfService;
        this.surveyService = surveyService;
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
        this.surveysFromDB = new Array();
        this.surveys = new Array();
        this.safeSurveys = new Map();
        this.resources = ['pdf1', 'pdf2', 'worddoc1'];
        this.quizzes = ['quiz1', 'quiz2', 'quiz3'];
        this.toggleContent = [];
        this.moduleVideosFetched = [];
        this.modulePDFsFetched = [];
        this.moduleSurveysFetched = [];
        this.submitted = false;
        this.error = '';
        this.invalidLink = false;
        this.validLink = false;
        this.invalidQuiz = false;
        this.validQuiz = false;
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
          return _this39.currentUser = x;
        });
        this.makeForms();
      }

      _createClass(ModulesComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this40 = this;

          this.route.params.subscribe(function (params) {
            _this40.courseId = params.id;
            console.log("param id is: " + params.id);
          });
          /*if(!this.currentUser){
            return;
          }*/

          this.todayDate = new Date(); //console.log(this.todayDate.toLocaleString());
          //this.tokenPayload = decode(this.currentUser.token);

          this.isAdmin = this.currentUser.role === "admin";
          this.isInstructor = this.currentUser.role === "instructor";
          this.isStudent = this.currentUser.role === "student";
          this.fetchModules(this.courseId);
          this.getAvgStudentPoints(this.courseId, this.currentUser.id); //this.waitForProgressBar();

          this.studentCourseService.getStudentsByCourseId(this.courseId).subscribe(function (data) {
            data.forEach(function (val, i, arr) {
              if (val.student_id == _this40.currentUser.id) {
                //console.log("Got student: " + JSON.stringify(val));
                _this40.points = val.points;
                console.log("Points: " + _this40.points); //document.getElementById('progressbar').style.width = this.points + "%";
              }
            });
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {} //clearTimeout(this.waitForProgressBarTimeout);
        // BEGIN UTILITY FUNCTIONS

      }, {
        key: "waitForProgressBar",
        value: function waitForProgressBar() {
          var _this41 = this;

          console.log("waiting for progress bar");

          if (document.getElementById('progressbarAvg')) {
            document.getElementById('progressbarAvg').style.width = this.averagePoints.average + "%";
          } else {
            this.waitForProgressBarTimeout = setTimeout(function () {
              _this41.waitForProgressBar();
            }, 1000);
          }
        }
      }, {
        key: "makeForms",
        value: function makeForms() {
          this.videoForm = this.fb.group({
            link: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.updateVideoForm = this.fb.group({
            linkInput: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.pdfForm = this.fb.group({
            pdf: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.updatePdfForm = this.fb.group({
            pdf: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.surveyForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            link: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
          this.updateSurveyForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            link: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        } // convenience gettera for easy access to form fields

      }, {
        key: "pushLinksToArray",
        value: function pushLinksToArray(linksFromDB, links) {
          linksFromDB.forEach(function (video) {
            var videoObject = {
              link: video.link,
              module_id: video.module_id,
              video_id: video.video_id
            };
            links.push(videoObject);
          });
        }
      }, {
        key: "updateVideoUrl",
        value: function updateVideoUrl(linksArr, moduleId) {
          var _this42 = this;

          linksArr.forEach(function (val) {
            if (val.module_id === moduleId) {
              _this42.moduleVideosFetched[moduleId] = true; //console.log("link: " + val.link);

              var len = val.link.length;
              var id;

              if (len >= 43) {
                id = val.link.substring(32, 43);
              } else if (len == 28) {
                id = val.link.substring(17, 28);
              }

              var videoUrl;
              var url;
              var videoObject = {};
              url = 'https://www.youtube.com/embed/' + id;
              videoUrl = _this42.sanitizer.bypassSecurityTrustResourceUrl(url);
              videoObject = {
                videoUrl: videoUrl,
                video_id: val.video_id,
                url: val.link
              };

              if (_this42.safeLinks.get(moduleId)) {
                _this42.safeLinks.get(moduleId).push(videoObject);
              } else {
                _this42.safeLinks.set(moduleId, [videoObject]);
              }
            }
          });
        }
      }, {
        key: "pushPDFsToArray",
        value: function pushPDFsToArray(pdfsFromDB, pdfs) {
          pdfsFromDB.forEach(function (val) {
            //console.log("val : " + i + " " + JSON.stringify(val));
            var pdfData = val.pdf.data; //console.log(Array.isArray(pdfData));

            var myBuffer = Uint8Array.from(pdfData); //console.log(myBuffer);

            var blob = new Blob([myBuffer.buffer], {
              type: 'application/pdf'
            }); //application/octet-stream
            //console.log(blob.size);
            //console.log(blob);

            var pdfObject = {
              module_id: val.module_id,
              pdf_id: val.pdf_id,
              pdf: blob
            };
            pdfs.push(pdfObject);
          });
        }
      }, {
        key: "updatePdfData",
        value: function updatePdfData(pdfsArr, moduleId) {
          var _this43 = this;

          pdfsArr.forEach(function (val) {
            if (val.module_id === moduleId) {
              _this43.modulePDFsFetched[moduleId] = true;
              var pdfObject = {};
              var cleanPDF;
              var pdfURL = URL.createObjectURL(val.pdf);
              cleanPDF = _this43.sanitizer.bypassSecurityTrustResourceUrl(pdfURL);
              pdfObject = {
                pdf_id: val.pdf_id,
                pdf: cleanPDF,
                rawPdf: val.pdf
              };

              if (_this43.safePdfs.get(moduleId)) {
                _this43.safePdfs.get(moduleId).push(pdfObject);
              } else {
                _this43.safePdfs.set(moduleId, [pdfObject]);
              }
            }
          });
        }
      }, {
        key: "pushSurveysToArray",
        value: function pushSurveysToArray(surveysFromDB, surveys) {
          surveysFromDB.forEach(function (survey) {
            var surveyObject = {
              name: survey.survey_name,
              link: survey.link,
              module_id: survey.module_id,
              survey_id: survey.survey_id
            };
            surveys.push(surveyObject);
          });
        }
      }, {
        key: "updateSurveyUrl",
        value: function updateSurveyUrl(surveysArr, moduleId) {
          var _this44 = this;

          surveysArr.forEach(function (survey) {
            if (survey.module_id === moduleId) {
              _this44.moduleSurveysFetched[moduleId] = true;
              var surveyUrl;
              surveyUrl = _this44.sanitizer.bypassSecurityTrustResourceUrl(survey.link);
              var surveyObject = {
                surveyUrl: surveyUrl,
                survey_id: survey.survey_id,
                name: survey.name,
                url: survey.link
              };

              if (_this44.safeSurveys.get(moduleId)) {
                _this44.safeSurveys.get(moduleId).push(surveyObject);
              } else {
                _this44.safeSurveys.set(moduleId, [surveyObject]);
              }
            }
          });
        }
      }, {
        key: "open",
        value: function open(content) {
          this.submitted = false;
          this.invalidLink = false;
          this.invalidQuiz = false;
          this.validLink = false;
          this.invalidQuiz = false;
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
          this.submitted = false;
          this.invalidLink = false;
          this.validLink = false;
          this.modalService.open(content, {
            size: 'lg',
            centered: true
          });
          this.updateVideoForm.get('linkInput').setValue(videoUrl);
        }
      }, {
        key: "openUpdatePDF",
        value: function openUpdatePDF(content, pdf) {
          this.submitted = false;
          this.modalService.open(content, {
            size: 'lg',
            centered: true
          });
          console.log("The updatePDF: " + pdf); //this.updatePdfForm.get('pdf').setValue(pdf);
        }
      }, {
        key: "openUpdateSurvey",
        value: function openUpdateSurvey(content, surveyName, surveyUrl) {
          this.submitted = false;
          this.invalidQuiz = false;
          this.validQuiz = false;
          this.modalService.open(content, {
            size: 'lg',
            centered: true
          });
          this.updateSurveyForm.get('name').setValue(surveyName);
          this.updateSurveyForm.get('link').setValue(surveyUrl);
        }
      }, {
        key: "getAvgStudentPoints",
        value: function getAvgStudentPoints(courseId, studentId) {
          var _this45 = this;

          console.log("Called avgstudentpoints on student_id: " + studentId);
          this.studentCourseService.getAvgStudentPoints(courseId, studentId).subscribe(function (data) {
            _this45.averagePoints = data;
            console.log("avg: " + JSON.stringify(data));
            _this45.averagePoints.average = _this45.toFixed(_this45.averagePoints.average, 2);
          });
        }
      }, {
        key: "toFixed",
        value: function toFixed(value, precision) {
          var power = Math.pow(10, precision || 0);
          return String(Math.round(value * power) / power);
        }
      }, {
        key: "viewDiscussion",
        value: function viewDiscussion(courseId, moduleId) {
          this.router.navigate(["courses/".concat(courseId, "/discussion/").concat(moduleId)]);
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
          var _this46 = this;

          this.moduleService.getModulesByCourseId(courseId).subscribe(function (data) {
            data.forEach(function (moduleO, i, arr) {
              //let lockedUntil = new Date(moduleO.lockedUntil.toString());
              var lockedUntil = new Date(moduleO.lockedUntil);
              var dd = String(lockedUntil.getDate() + 1).padStart(2, '0');
              var mm = String(lockedUntil.getMonth() + 1).padStart(2, '0'); //January is 0!

              var yyyy = lockedUntil.getFullYear();
              var givenDate = mm + '/' + dd + '/' + yyyy;
              _this46.moduleLocked[i] = false;

              if (_this46.todayDate < lockedUntil) {
                //console.log(this.todayDate.toLocaleDateString() + " < " + JSON.stringify(moduleO));
                _this46.moduleLocked[i] = true;
              }

              moduleO.lockedUntil = givenDate;
            });
            _this46.modules = data; //console.log(this.modules);

            _this46.fetchVideos(courseId, data);

            _this46.fetchPdfs(courseId, data);

            _this46.fetchSurveys(courseId, data);
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
        key: "handleValidLink",
        value: function handleValidLink(event) {
          //console.log(event.target.value);
          var input = event.target.value;
          var isYoutubeLink = false;
          var len = input.length;

          if (input.includes("https://www.youtube.com/watch?v=") || input.includes("https://youtu.be/")) {
            console.log("Includes youtube link");
            isYoutubeLink = true;
          } else {
            isYoutubeLink = false;
          }

          if ((len == 28 || len >= 43) && isYoutubeLink) {
            this.validLink = true;
            this.invalidLink = false;
          } else {
            this.validLink = false;
          }
        }
      }, {
        key: "addVideo",
        value: function addVideo(link, moduleId) {
          var _this47 = this;

          this.submitted = true;

          if (this.videoForm.invalid) {
            return;
          }

          if (!this.validLink) {
            this.invalidLink = true;
            return;
          }

          this.videoService.addVideo(link, moduleId).subscribe(function (data) {
            alert("Added video");
          }, function (error) {
            _this47.error = error;
          });
        }
      }, {
        key: "updateVideo",
        value: function updateVideo(link, videoId) {
          this.submitted = true;

          if (this.updateVideoForm.invalid) {
            return;
          }

          if (!this.validLink) {
            this.invalidLink = true;
            return;
          } //console.log("link: " + link + " " + "videoId: " + videoId);


          this.videoService.updateVideo(link, videoId).subscribe(function () {
            alert("Updated video");
          });
        }
      }, {
        key: "deleteVideo",
        value: function deleteVideo(videoId, videoNumber) {
          //console.log("Delete video: " + videoId);
          var r = confirm("Delete video " + (videoNumber + 1) + ": Are you sure?");

          if (r) {
            this.videoService.deleteVideo(videoId).subscribe(function () {
              alert("Deleted video");
            });
          }
        }
      }, {
        key: "fetchVideos",
        value: function fetchVideos(courseId, modules) {
          var _this48 = this;

          console.log("Fetching videos: " + courseId);
          this.videoService.fetchVideos(courseId).subscribe(function (data) {
            _this48.linksFromDB = data; //console.log("linksFromDB: " + JSON.stringify(this.linksFromDB));

            _this48.pushLinksToArray(data, _this48.links);

            modules.forEach(function (val, i, arr) {
              var moduleval = val;

              for (var _i = 0; _i < data.length; _i++) {
                var _val = data[_i];

                if (_val.module_id == moduleval.module_id) {
                  if (_this48.moduleVideosFetched[_val.module_id] == true) {
                    console.log("Modules videos fetched true");
                    break;
                  } else {
                    //console.log(val.module_id);
                    _this48.updateVideoUrl(_this48.links, _val.module_id);
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
          var _this49 = this;

          this.submitted = true;

          if (this.pdfForm.invalid) {
            return;
          } //console.log("fileName: " + this.pdfForm.get('pdf').value.name + " fileSize: " + this.pdfForm.get('pdf').value.size);


          var formData = new FormData();
          formData.append('fileKey', this.pdfForm.get('pdf').value);
          formData.append('fileKey', moduleId); //console.log(formData.getAll('fileKey'));

          this.pdfService.addPDF(formData).subscribe(function (res) {
            console.log(res);
            alert("Added PDF!");
          }, function (err) {
            console.log(err);
            _this49.error = err;
          });
        }
      }, {
        key: "fetchPdfs",
        value: function fetchPdfs(courseId, modules) {
          var _this50 = this;

          console.log("Fetching pdfs: " + courseId);
          this.pdfService.fetchPDFs(courseId).subscribe(function (data) {
            //console.log(data);
            _this50.pdfsFromDB = data;

            _this50.pushPDFsToArray(data, _this50.pdfs);

            modules.forEach(function (val, i, arr) {
              var moduleval = val;

              for (var _i2 = 0; _i2 < data.length; _i2++) {
                var _val2 = data[_i2];

                if (_val2.module_id == moduleval.module_id) {
                  if (_this50.modulePDFsFetched[_val2.module_id] == true) {
                    console.log("Modules pdfs fetched true");
                    break;
                  } else {
                    //console.log(val.module_id);
                    _this50.updatePdfData(_this50.pdfs, _val2.module_id);
                  }
                }
              }
            });
          });
        }
      }, {
        key: "updatePDF",
        value: function updatePDF(pdfId, moduleId) {
          this.submitted = true;

          if (this.updatePdfForm.invalid) {
            return;
          } //console.log("updatePDF");


          var formData = new FormData();
          formData.append('fileKey', this.updatePdfForm.get('pdf').value);
          formData.append('fileKey', moduleId);
          this.pdfService.updatePDF(pdfId, formData).subscribe(function () {
            alert("Updated pdf");
          });
        }
      }, {
        key: "deletePDF",
        value: function deletePDF(pdfId, pdfNumber) {
          //console.log("PDF ID: " + pdfId);
          var r = confirm("Delete PDF " + (pdfNumber + 1) + ": Are you sure?");

          if (r) {
            this.pdfService.deletePDF(pdfId).subscribe(function () {
              alert("Deleted pdf");
            });
          }
        } // END PDFS CRUD
        // BEGIN SURVEYS CRUD (QUIZZES/EXAMS)

      }, {
        key: "handleValidQuiz",
        value: function handleValidQuiz(event) {
          var input = event.target.value;
          var len = input.length;
          var isValidQuiz = false;

          if (input.includes("https://fiu.qualtrics.com/jfe/form/")) {
            isValidQuiz = true;
          } else {
            isValidQuiz = false;
          }

          if (len == 53 && isValidQuiz) {
            this.validQuiz = true;
            this.invalidQuiz = false;
          } else {
            this.validQuiz = false;
          }
        }
      }, {
        key: "addSurvey",
        value: function addSurvey(name, link, moduleId) {
          this.submitted = true;

          if (this.surveyForm.invalid) {
            return;
          }

          if (!this.validQuiz) {
            this.invalidQuiz = true;
            return;
          }

          this.surveyService.addSurvey(name, link, moduleId).subscribe(function () {
            alert("Added survey");
          });
        }
      }, {
        key: "fetchSurveys",
        value: function fetchSurveys(courseId, modules) {
          var _this51 = this;

          console.log("Fetching surveys: " + courseId);
          this.surveyService.fetchSurveys(courseId).subscribe(function (data) {
            _this51.surveysFromDB = data; //console.log("surveysFromDB: " + JSON.stringify(this.surveysFromDB));

            _this51.pushSurveysToArray(data, _this51.surveys);

            modules.forEach(function (val) {
              var moduleval = val;

              for (var i = 0; i < data.length; i++) {
                var _val3 = data[i];

                if (_val3.module_id == moduleval.module_id) {
                  if (_this51.moduleSurveysFetched[_val3.module_id] == true) {
                    console.log("Modules surveys fetched true");
                    break;
                  } else {
                    //console.log(val.module_id);
                    _this51.updateSurveyUrl(_this51.surveys, _val3.module_id);
                  }
                }
              }
            });
          });
        }
      }, {
        key: "updateSurvey",
        value: function updateSurvey(name, link, surveyId) {
          this.submitted = true;

          if (this.updateSurveyForm.invalid) {
            return;
          }

          if (!this.validQuiz) {
            this.invalidQuiz = true;
            return;
          } //console.log("link: " + link + " " + "videoId: " + videoId);


          this.surveyService.updateSurvey(name, link, surveyId).subscribe(function () {
            alert("Updated Quiz/Exam");
          });
        }
      }, {
        key: "deleteSurvey",
        value: function deleteSurvey(surveyId, surveyNumber) {
          //console.log("Delete video: " + videoId);
          var r = confirm("Delete Quiz/Exam " + (surveyNumber + 1) + ": Are you sure?");

          if (r) {
            this.surveyService.deleteSurvey(surveyId).subscribe(function () {
              alert("Deleted Quiz/Exam");
            });
          }
        }
      }, {
        key: "v",
        get: function get() {
          return this.videoForm.controls;
        }
      }, {
        key: "p",
        get: function get() {
          return this.pdfForm.controls;
        }
      }, {
        key: "s",
        get: function get() {
          return this.surveyForm.controls;
        }
      }, {
        key: "vu",
        get: function get() {
          return this.updateVideoForm.controls;
        }
      }, {
        key: "pu",
        get: function get() {
          return this.updatePdfForm.controls;
        }
      }, {
        key: "su",
        get: function get() {
          return this.updateSurveyForm.controls;
        }
      }]);

      return ModulesComponent;
    }();

    ModulesComponent.ɵfac = function ModulesComponent_Factory(t) {
      return new (t || ModulesComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_core_services_module_service__WEBPACK_IMPORTED_MODULE_2__["ModuleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_video_service__WEBPACK_IMPORTED_MODULE_3__["VideoService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_pdf_service__WEBPACK_IMPORTED_MODULE_4__["PdfService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_survey_service__WEBPACK_IMPORTED_MODULE_5__["SurveyService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_7__["StudentCourseService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"]));
    };

    ModulesComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: ModulesComponent,
      selectors: [["app-modules"]],
      decls: 16,
      vars: 8,
      consts: [["id", "main"], [1, "flexbox-row"], [1, "flexbox-top-container"], [1, "align-self-stretch"], ["type", "info", "textType", "white", "height", "30px", 3, "value", "showValue", "striped"], ["type", "primary", "textType", "white", "height", "30px", 3, "value", "showValue", "striped"], [4, "ngIf"], ["class", "flexbox-container", 4, "ngFor", "ngForOf"], [1, "btn", "btn-success", 3, "click"], [1, "fas", "fa-plus-circle"], [1, "flexbox-container"], [4, "ngIf", "ngIfElse"], ["lockedBlock", ""], ["style", "color: blue;", 4, "ngIf", "ngIfElse"], ["lockedBlock0", ""], [1, "flexbox-options"], ["contentVideoAdd", ""], ["class", "btn btn-success", 3, "click", 4, "ngIf"], ["contentPdfAdd", ""], ["contentSurveyAdd", ""], ["class", "flexbox-item", "style", "cursor:pointer", 3, "click", 4, "ngIf", "ngIfElse"], ["moduleBlock", ""], ["class", "flexbox-subcontainer", 4, "ngIf"], ["class", "flexbox-item-module-actions", 4, "ngIf"], [2, "color", "blue"], ["style", "color: red", 4, "ngIf"], [2, "color", "red"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-9", 3, "formGroup"], [1, "alert", "alert-info"], [1, "form-group"], ["for", "link"], ["type", "text", "required", "", "formControlName", "link", 1, "form-control", 3, "ngClass", "keyup"], ["link", ""], ["class", "invalid-feedback", 4, "ngIf"], ["class", "valid-feedback", 4, "ngIf"], ["class", "alert alert-danger", 4, "ngIf"], ["type", "submit", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["class", "alert alert-danger mt-3 mb-0", 4, "ngIf"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "invalid-feedback"], [1, "valid-feedback"], [1, "alert", "alert-danger"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [1, "alert", "alert-danger", "mt-3", "mb-0"], ["method", "POST", "enctype", "multipart/form-data", 1, "col-9", 3, "formGroup", "ngSubmit"], ["for", "pdf"], ["id", "theFile", "type", "file", "name", "pdf", "required", "", 1, "form-control", 3, "ngClass", "change"], ["file", ""], ["type", "submit", 1, "btn", "btn-primary"], ["for", "name"], ["type", "text", "formControlName", "name", "required", "", 1, "form-control", 3, "ngClass"], ["name", ""], ["type", "text", "formControlName", "link", "required", "", 1, "form-control", 3, "ngClass", "keyup"], [1, "flexbox-item", 2, "cursor", "pointer", 3, "click"], [1, "fas", "fa-caret-right"], [1, "fas", "fa-caret-down"], [1, "flexbox-subcontainer"], ["class", "flexbox-resources", 4, "ngFor", "ngForOf"], ["class", "flexbox-links", 4, "ngFor", "ngForOf"], [1, "flexbox-resources"], ["class", "flexbox-resources-inner", 4, "ngFor", "ngForOf"], [1, "flexbox-resources-inner"], [1, "fas", "fa-paperclip"], ["contentPdf", ""], [1, "btn", "btn-primary", 3, "click"], ["class", "btn btn-danger flexbox-module-options", 3, "click", 4, "ngIf"], ["contentPdfUpdate", ""], ["class", "btn btn-success flexbox-module-options", 3, "click", 4, "ngIf"], [1, "embed-responsive", "embed-responsive-16by9"], ["width", "780", "height", "480", 1, "embed-responsive-item", 3, "src"], [1, "btn", "btn-danger", "flexbox-module-options", 3, "click"], [1, "btn", "btn-success", "flexbox-module-options", 3, "click"], [1, "flexbox-links"], ["class", "flexbox-links-inner", 4, "ngFor", "ngForOf"], [1, "flexbox-links-inner"], [1, "fab", "fa-youtube"], ["contentVideo", ""], ["contentVideoUpdate", ""], ["width", "780", "height", "480", "frameborder", "0", "allow", "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture", "allowfullscreen", "", 1, "embed-responsive-item", 3, "src"], ["for", "linkInput"], ["type", "text", "formControlName", "linkInput", "required", "", 1, "form-control", "form-control-lg", 3, "ngClass", "keyup"], ["linkInput", ""], [1, "fas", "fa-paper-plane"], ["contentSurvey", ""], ["contentSurveyUpdate", ""], ["type", "text", "formControlName", "name", "required", "", 1, "form-control", "form-control-lg", 3, "ngClass"], ["type", "text", "formControlName", "link", "required", "", 1, "form-control", "form-control-lg", 3, "ngClass", "keyup"], [1, "flexbox-item-module-actions"], ["type", "button", "class", "btn btn-primary", 3, "click", 4, "ngIf"], ["type", "button", "class", "btn btn-danger", 3, "click", 4, "ngIf"], ["type", "button", 1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-comments"], [1, "fas", "fa-edit"], ["type", "button", 1, "btn", "btn-danger", 3, "click"], [1, "fas", "fa-minus-circle"], [1, "flexbox-item", 2, "cursor", "not-allowed", "opacity", "0.5", 3, "click"]],
      template: function ModulesComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-sidebar");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Class Average Points");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "ngb-progressbar", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "span");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Your points");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "ngb-progressbar", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, ModulesComponent_div_14_Template, 4, 0, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, ModulesComponent_div_15_Template, 4, 2, "div", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.averagePoints ? ctx.averagePoints.average : 0)("showValue", true)("striped", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.points ? ctx.points : 0)("showValue", true)("striped", true);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.currentUser && (ctx.isAdmin || ctx.isInstructor));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.modules);
        }
      },
      directives: [_sidebar_sidebar_component__WEBPACK_IMPORTED_MODULE_11__["SidebarComponent"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbProgressbar"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_12__["NgClass"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_12__["KeyValuePipe"]],
      styles: [".flexbox-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  justify-content: center;\n  align-items: center;\n}\n\n.flexbox-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  \n  width: 600px;\n  padding: 20px;\n  justify-content: space-evenly;\n  align-items: center;\n  background-color: #ececec;\n  border-left: solid black 1px;\n  border-right: solid black 1px;\n  border-bottom: dotted gray 1px;\n}\n\n.flexbox-options[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n  align-self: flex-end;\n}\n\n.flexbox-item[_ngcontent-%COMP%] {\n  align-self: stretch;\n  background-color: transparent;\n  border: solid #afafaf 1px;\n}\n\n.flexbox-top-container[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  flex-wrap: wrap;\n  \n  width: 600px;\n  padding: 20px;\n  justify-content: space-evenly;\n  align-items: center;\n  \n}\n\n.flexbox-top-container[_ngcontent-%COMP%]   .flexbox-top-options[_ngcontent-%COMP%] {\n  margin-bottom: 15px;\n}\n\n.flexbox-top-container[_ngcontent-%COMP%]   .flexbox-progress-bar[_ngcontent-%COMP%] {\n  align-self: stretch;\n  background-color: #dbdbdb;\n}\n\n.flexbox-item-module-actions[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  align-self: flex-end;\n  background-color: transparent;\n  border: solid black 1px;\n}\n\n.flexbox-subcontainer[_ngcontent-%COMP%] {\n  margin-top: 15px;\n  align-self: flex-start;\n  display: flex;\n  flex-direction: column;\n  width: 560px;\n  justify-content: center;\n  align-items: flex-start;\n  background-color: #fafafa;\n}\n\n.flexbox-module-options[_ngcontent-%COMP%] {\n  float: right;\n}\n\n.flexbox-links[_ngcontent-%COMP%] {\n  align-self: stretch;\n}\n\n.flexbox-links[_ngcontent-%COMP%]   .flexbox-links-inner[_ngcontent-%COMP%] {\n  align-self: stretch;\n  border: solid black 1px;\n}\n\n.flexbox-links[_ngcontent-%COMP%]   .flexbox-links-inner[_ngcontent-%COMP%]:hover {\n  background-color: #d9deff;\n}\n\n.flexbox-resources[_ngcontent-%COMP%] {\n  align-self: stretch;\n}\n\n.flexbox-resources[_ngcontent-%COMP%]   .flexbox-resources-inner[_ngcontent-%COMP%] {\n  align-self: stretch;\n  border: solid black 1px;\n}\n\n.flexbox-resources[_ngcontent-%COMP%]   .flexbox-resources-inner[_ngcontent-%COMP%]:hover {\n  background-color: #d9deff;\n}\n\n.flexbox-quizzes[_ngcontent-%COMP%] {\n  align-self: stretch;\n  border: solid black 1px;\n}\n\n.flexbox-quizzes[_ngcontent-%COMP%]:hover {\n  background-color: #d9deff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3Vyc2UvbW9kdWxlcy9DOlxcVXNlcnNcXEppbW15XFxEb2N1bWVudHNcXEdpdEh1YlxcbG1zLWZpdS1mYi1jbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXGNvdXJzZVxcbW9kdWxlc1xcbW9kdWxlcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jb3Vyc2UvbW9kdWxlcy9tb2R1bGVzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksYUFBQTtFQUNBLHNCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QUNESjs7QURJQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSw2QkFBQTtFQUNBLDhCQUFBO0FDREo7O0FESUE7RUFDSSxtQkFBQTtFQUNBLG9CQUFBO0FDREo7O0FESUE7RUFDSSxtQkFBQTtFQUNBLDZCQUFBO0VBQ0EseUJBQUE7QUNESjs7QURJQTtFQUNJLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLHVDQUFBO0FDREo7O0FER0k7RUFDSSxtQkFBQTtBQ0RSOztBRElJO0VBQ0ksbUJBQUE7RUFDQSx5QkFBQTtBQ0ZSOztBRE1BO0VBQ0ksZ0JBQUE7RUFDQSxvQkFBQTtFQUNBLDZCQUFBO0VBQ0EsdUJBQUE7QUNISjs7QURNQTtFQUNJLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0FDSEo7O0FETUE7RUFDSSxZQUFBO0FDSEo7O0FETUE7RUFDSSxtQkFBQTtBQ0hKOztBREtJO0VBQ0ksbUJBQUE7RUFDQSx1QkFBQTtBQ0hSOztBREtRO0VBQ0kseUJBdkZDO0FDb0ZiOztBRFFBO0VBQ0ksbUJBQUE7QUNMSjs7QURPSTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7QUNMUjs7QURPUTtFQUNJLHlCQXBHQztBQytGYjs7QURVQTtFQUNJLG1CQUFBO0VBQ0EsdUJBQUE7QUNQSjs7QURVQTtFQUNJLHlCQS9HUztBQ3dHYiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY291cnNlL21vZHVsZXMvbW9kdWxlcy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiRiYXNlLWNvbG9yOiAjZDlkZWZmO1xyXG5cclxuLmZsZXhib3gtcm93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uZmxleGJveC1jb250YWluZXJ7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgLypoZWlnaHQ6IDUwcHg7Ki9cclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjM2LCAyMzYsIDIzNik7XHJcbiAgICBib3JkZXItbGVmdDogc29saWQgYmxhY2sgMXB4O1xyXG4gICAgYm9yZGVyLXJpZ2h0OiBzb2xpZCBibGFjayAxcHg7XHJcbiAgICBib3JkZXItYm90dG9tOiBkb3R0ZWQgZ3JheSAxcHg7XHJcbn1cclxuXHJcbi5mbGV4Ym94LW9wdGlvbnMge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG59XHJcblxyXG4uZmxleGJveC1pdGVtIHtcclxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcclxuICAgIGJvcmRlcjogc29saWQgcmdiKDE3NSwgMTc1LCAxNzUpIDFweDtcclxufVxyXG5cclxuLmZsZXhib3gtdG9wLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OmZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgLypoZWlnaHQ6IDUwcHg7Ki9cclxuICAgIHdpZHRoOiA2MDBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAvKmJhY2tncm91bmQtY29sb3I6IHJnYig3MSwgMjUzLCAxMTcpOyovXHJcbiAgICBcclxuICAgIC5mbGV4Ym94LXRvcC1vcHRpb25zIHtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNXB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5mbGV4Ym94LXByb2dyZXNzLWJhciB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjE5LCAyMTksIDIxOSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbi5mbGV4Ym94LWl0ZW0tbW9kdWxlLWFjdGlvbnMge1xyXG4gICAgbWFyZ2luLXRvcDogMTVweDtcclxuICAgIGFsaWduLXNlbGY6IGZsZXgtZW5kO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxufVxyXG5cclxuLmZsZXhib3gtc3ViY29udGFpbmVyIHtcclxuICAgIG1hcmdpbi10b3A6IDE1cHg7XHJcbiAgICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogNTYwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDI1MCwgMjUwLCAyNTApO1xyXG59XHJcblxyXG4uZmxleGJveC1tb2R1bGUtb3B0aW9ucyB7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbn1cclxuXHJcbi5mbGV4Ym94LWxpbmtze1xyXG4gICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuXHJcbiAgICAuZmxleGJveC1saW5rcy1pbm5lciB7XHJcbiAgICAgICAgYWxpZ24tc2VsZjogc3RyZXRjaDtcclxuICAgICAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxuXHJcbiAgICAgICAgJjpob3ZlciB7XHJcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6ICRiYXNlLWNvbG9yO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLmZsZXhib3gtcmVzb3VyY2VzIHtcclxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcblxyXG4gICAgLmZsZXhib3gtcmVzb3VyY2VzLWlubmVyIHtcclxuICAgICAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG4gICAgICAgIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xyXG5cclxuICAgICAgICAmOmhvdmVyIHtcclxuICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGJhc2UtY29sb3I7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4uZmxleGJveC1xdWl6emVzIHtcclxuICAgIGFsaWduLXNlbGY6IHN0cmV0Y2g7XHJcbiAgICBib3JkZXI6IHNvbGlkIGJsYWNrIDFweDtcclxufVxyXG5cclxuLmZsZXhib3gtcXVpenplczpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkYmFzZS1jb2xvcjtcclxufVxyXG5cclxuIiwiLmZsZXhib3gtcm93IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLmZsZXhib3gtY29udGFpbmVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgZmxleC13cmFwOiB3cmFwO1xuICAvKmhlaWdodDogNTBweDsqL1xuICB3aWR0aDogNjAwcHg7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtZXZlbmx5O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWNlY2VjO1xuICBib3JkZXItbGVmdDogc29saWQgYmxhY2sgMXB4O1xuICBib3JkZXItcmlnaHQ6IHNvbGlkIGJsYWNrIDFweDtcbiAgYm9yZGVyLWJvdHRvbTogZG90dGVkIGdyYXkgMXB4O1xufVxuXG4uZmxleGJveC1vcHRpb25zIHtcbiAgbWFyZ2luLWJvdHRvbTogMTVweDtcbiAgYWxpZ24tc2VsZjogZmxleC1lbmQ7XG59XG5cbi5mbGV4Ym94LWl0ZW0ge1xuICBhbGlnbi1zZWxmOiBzdHJldGNoO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyOiBzb2xpZCAjYWZhZmFmIDFweDtcbn1cblxuLmZsZXhib3gtdG9wLWNvbnRhaW5lciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgLypoZWlnaHQ6IDUwcHg7Ki9cbiAgd2lkdGg6IDYwMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgLypiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzEsIDI1MywgMTE3KTsqL1xufVxuLmZsZXhib3gtdG9wLWNvbnRhaW5lciAuZmxleGJveC10b3Atb3B0aW9ucyB7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG4uZmxleGJveC10b3AtY29udGFpbmVyIC5mbGV4Ym94LXByb2dyZXNzLWJhciB7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkYmRiZGI7XG59XG5cbi5mbGV4Ym94LWl0ZW0tbW9kdWxlLWFjdGlvbnMge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBhbGlnbi1zZWxmOiBmbGV4LWVuZDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xufVxuXG4uZmxleGJveC1zdWJjb250YWluZXIge1xuICBtYXJnaW4tdG9wOiAxNXB4O1xuICBhbGlnbi1zZWxmOiBmbGV4LXN0YXJ0O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB3aWR0aDogNTYwcHg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZhZmFmYTtcbn1cblxuLmZsZXhib3gtbW9kdWxlLW9wdGlvbnMge1xuICBmbG9hdDogcmlnaHQ7XG59XG5cbi5mbGV4Ym94LWxpbmtzIHtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbn1cbi5mbGV4Ym94LWxpbmtzIC5mbGV4Ym94LWxpbmtzLWlubmVyIHtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XG59XG4uZmxleGJveC1saW5rcyAuZmxleGJveC1saW5rcy1pbm5lcjpob3ZlciB7XG4gIGJhY2tncm91bmQtY29sb3I6ICNkOWRlZmY7XG59XG5cbi5mbGV4Ym94LXJlc291cmNlcyB7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG59XG4uZmxleGJveC1yZXNvdXJjZXMgLmZsZXhib3gtcmVzb3VyY2VzLWlubmVyIHtcbiAgYWxpZ24tc2VsZjogc3RyZXRjaDtcbiAgYm9yZGVyOiBzb2xpZCBibGFjayAxcHg7XG59XG4uZmxleGJveC1yZXNvdXJjZXMgLmZsZXhib3gtcmVzb3VyY2VzLWlubmVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZGVmZjtcbn1cblxuLmZsZXhib3gtcXVpenplcyB7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG4gIGJvcmRlcjogc29saWQgYmxhY2sgMXB4O1xufVxuXG4uZmxleGJveC1xdWl6emVzOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Q5ZGVmZjtcbn0iXX0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ModulesComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-modules',
          templateUrl: './modules.component.html',
          styleUrls: ['./modules.component.scss']
        }]
      }], function () {
        return [{
          type: src_app_core_services_module_service__WEBPACK_IMPORTED_MODULE_2__["ModuleService"]
        }, {
          type: _app_core_services_video_service__WEBPACK_IMPORTED_MODULE_3__["VideoService"]
        }, {
          type: _app_core_services_pdf_service__WEBPACK_IMPORTED_MODULE_4__["PdfService"]
        }, {
          type: _app_core_services_survey_service__WEBPACK_IMPORTED_MODULE_5__["SurveyService"]
        }, {
          type: _app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
        }, {
          type: _app_core_services_student_course_service__WEBPACK_IMPORTED_MODULE_7__["StudentCourseService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_9__["DomSanitizer"]
        }, {
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbModal"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/course/modulesDiscussion/create-post/create-post.component.ts":
  /*!***************************************************************************************!*\
    !*** ./src/app/modules/course/modulesDiscussion/create-post/create-post.component.ts ***!
    \***************************************************************************************/

  /*! exports provided: CreatePostComponent */

  /***/
  function srcAppModulesCourseModulesDiscussionCreatePostCreatePostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CreatePostComponent", function () {
      return CreatePostComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_core_services_discussion_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/core/services/discussion.service */
    "./src/app/core/services/discussion.service.ts");
    /* harmony import */


    var _app_core_services_module_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/core/services/module.service */
    "./src/app/core/services/module.service.ts");
    /* harmony import */


    var _app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @app/core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/cdk/text-field */
    "./node_modules/@angular/cdk/__ivy_ngcc__/fesm2015/text-field.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    var _c0 = ["textArea"];

    function CreatePostComponent_div_5_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Post cannot be empty");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreatePostComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreatePostComponent_div_5_div_1_Template, 2, 0, "div", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r500 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r500.p.post.errors.required);
      }
    }

    var _c1 = function _c1(a0) {
      return {
        "is-invalid": a0
      };
    };

    var CreatePostComponent =
    /*#__PURE__*/
    function () {
      function CreatePostComponent(fb, discussionService, moduleService, authenticationService, route) {
        var _this52 = this;

        _classCallCheck(this, CreatePostComponent);

        this.fb = fb;
        this.discussionService = discussionService;
        this.moduleService = moduleService;
        this.authenticationService = authenticationService;
        this.route = route;
        this.module = null;
        this.submitted = false;
        this.authenticationService.currentUser.subscribe(function (x) {
          return _this52.currentUser = x;
        });
      }

      _createClass(CreatePostComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this53 = this;

          //this.userPayload = decode(this.currentUser.token);
          this.route.params.subscribe(function (params) {
            _this53.moduleService.getModuleById(params.moduleId).subscribe(function (moduleData) {
              _this53.module = new Promise(function (resolve, reject) {
                resolve(moduleData[0]);
              });
            });
          });
          this.createForm();
        }
      }, {
        key: "createForm",
        value: function createForm() {
          this.postForm = this.fb.group({
            post: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "createPost",
        value: function createPost(post) {
          var _this54 = this;

          this.submitted = true;

          if (!this.postForm.valid) {
            return;
          }

          this.module.then(function (moduleVal) {
            var userName = _this54.currentUser.f_name + " " + _this54.currentUser.l_name;
            var today = new Date();

            _this54.discussionService.createDiscussion(userName, post, today, today, moduleVal.id, _this54.currentUser.id).subscribe(function () {
              alert("Created post");
            });
          });
        }
      }, {
        key: "autoGrow",
        value: function autoGrow() {
          var textArea = this.textArea.nativeElement;
          textArea.style.overflow = 'hidden';
          textArea.style.height = '0px';
          textArea.style.height = textArea.scrollHeight + 'px';
        }
      }, {
        key: "p",
        get: function get() {
          return this.postForm.controls;
        }
      }]);

      return CreatePostComponent;
    }();

    CreatePostComponent.ɵfac = function CreatePostComponent_Factory(t) {
      return new (t || CreatePostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_discussion_service__WEBPACK_IMPORTED_MODULE_2__["DiscussionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_module_service__WEBPACK_IMPORTED_MODULE_3__["ModuleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]));
    };

    CreatePostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreatePostComponent,
      selectors: [["app-create-post"]],
      viewQuery: function CreatePostComponent_Query(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]);
        }

        if (rf & 2) {
          var _t;

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.textArea = _t.first);
        }
      },
      decls: 9,
      vars: 5,
      consts: [[1, "center-form", "announcement"], [3, "formGroup"], [1, "form-group"], ["rows", "2", "placeholder", "Add a post...", "required", "", "formControlName", "post", "matInput", "", "cdkTextareaAutosize", "", "cdkAutosizeMinRows", "2", 1, "form-control", 2, "width", "300px", 3, "ngClass"], ["post", ""], ["class", "invalid-feedback", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-plus-circle"], [1, "invalid-feedback"], [4, "ngIf"]],
      template: function CreatePostComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r502 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "textarea", 3, 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, CreatePostComponent_div_5_Template, 2, 1, "div", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreatePostComponent_Template_button_click_6_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r502);

            var _r499 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](4);

            return ctx.createPost(_r499.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "i", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Create Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.postForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c1, ctx.submitted && ctx.p.post.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.p.post.errors);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInput"], _angular_cdk_text_field__WEBPACK_IMPORTED_MODULE_7__["CdkTextareaAutosize"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY291cnNlL21vZHVsZXNEaXNjdXNzaW9uL2NyZWF0ZS1wb3N0L2NyZWF0ZS1wb3N0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreatePostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-create-post',
          templateUrl: './create-post.component.html',
          styleUrls: ['./create-post.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _app_core_services_discussion_service__WEBPACK_IMPORTED_MODULE_2__["DiscussionService"]
        }, {
          type: _app_core_services_module_service__WEBPACK_IMPORTED_MODULE_3__["ModuleService"]
        }, {
          type: _app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }];
      }, {
        textArea: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
          args: ['textArea', {
            read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]
          }]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/modules/course/modulesDiscussion/discussion/discussion.component.ts":
  /*!*************************************************************************************!*\
    !*** ./src/app/modules/course/modulesDiscussion/discussion/discussion.component.ts ***!
    \*************************************************************************************/

  /*! exports provided: DiscussionComponent */

  /***/
  function srcAppModulesCourseModulesDiscussionDiscussionDiscussionComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DiscussionComponent", function () {
      return DiscussionComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_core_services_discussion_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @app/core/services/discussion.service */
    "./src/app/core/services/discussion.service.ts");
    /* harmony import */


    var _app_core_services_module_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/core/services/module.service */
    "./src/app/core/services/module.service.ts");
    /* harmony import */


    var _app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/core/services/authentication.service */
    "./src/app/core/services/authentication.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../create-post/create-post.component */
    "./src/app/modules/course/modulesDiscussion/create-post/create-post.component.ts");
    /* harmony import */


    var _edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../edit-post/edit-post.component */
    "./src/app/modules/course/modulesDiscussion/edit-post/edit-post.component.ts");

    function DiscussionComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Discussion");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var md_r449 = ctx.ngIf;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Module ", md_r449.number, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](md_r449.title);
      }
    }

    function DiscussionComponent_div_3_app_edit_post_8_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-edit-post", 7);
      }

      if (rf & 2) {
        var post_r450 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("discussionData", post_r450);
      }
    }

    function DiscussionComponent_div_3_button_9_Template(rf, ctx) {
      if (rf & 1) {
        var _r456 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function DiscussionComponent_div_3_button_9_Template_button_click_0_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r456);

          var post_r450 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]().$implicit;

          var ctx_r454 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r454.deletePost(post_r450.discussion_id);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Delete Post");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function DiscussionComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "p");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](3, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](4, "date");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, DiscussionComponent_div_3_app_edit_post_8_Template, 1, 1, "app-edit-post", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, DiscussionComponent_div_3_button_9_Template, 2, 0, "button", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var post_r450 = ctx.$implicit;

        var ctx_r448 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate2"](" ", post_r450.user, " | ", post_r450.created >= post_r450.changed ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](3, 5, post_r450.created, "short") : _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](4, 8, post_r450.changed, "short"), "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", post_r450.post, "");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r450.user_id == ctx_r448.currentUser.id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", post_r450.user_id == ctx_r448.currentUser.id);
      }
    }

    var DiscussionComponent =
    /*#__PURE__*/
    function () {
      function DiscussionComponent(discussionService, moduleService, authenticationService, route) {
        var _this55 = this;

        _classCallCheck(this, DiscussionComponent);

        this.discussionService = discussionService;
        this.moduleService = moduleService;
        this.authenticationService = authenticationService;
        this.route = route;
        this.discussions = [];
        this.moduleDetails = {};
        this.authenticationService.currentUser.subscribe(function (x) {
          return _this55.currentUser = x;
        });
      }

      _createClass(DiscussionComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this56 = this;

          //this.userPayload = decode(this.currentUser.token);
          this.route.params.subscribe(function (params) {
            _this56.discussionService.getDiscussionsInModule(params.moduleId).subscribe(function (discussionsData) {
              console.log(discussionsData);
              _this56.discussions = discussionsData;
            });

            _this56.moduleService.getModuleById(params.moduleId).subscribe(function (moduleData) {
              console.log(moduleData[0]);
              _this56.moduleDetails = moduleData[0];
            });
          });
        }
      }, {
        key: "deletePost",
        value: function deletePost(discussionId) {
          var r = confirm("Delete post: Are you sure?");

          if (r) {
            this.discussionService.deleteDiscussion(discussionId).subscribe(function () {
              alert("Deleted post successfully");
            });
          }
        }
      }]);

      return DiscussionComponent;
    }();

    DiscussionComponent.ɵfac = function DiscussionComponent_Factory(t) {
      return new (t || DiscussionComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_discussion_service__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_module_service__WEBPACK_IMPORTED_MODULE_2__["ModuleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]));
    };

    DiscussionComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: DiscussionComponent,
      selectors: [["app-discussion"]],
      decls: 4,
      vars: 2,
      consts: [[1, "center-form"], [4, "ngIf"], ["class", "announcement", 4, "ngFor", "ngForOf"], [2, "text-align", "center"], [1, "announcement"], [3, "discussionData", 4, "ngIf"], ["type", "button", "class", "btn btn-danger", 3, "click", 4, "ngIf"], [3, "discussionData"], ["type", "button", 1, "btn", "btn-danger", 3, "click"]],
      template: function DiscussionComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, DiscussionComponent_div_1_Template, 7, 2, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-create-post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, DiscussionComponent_div_3_Template, 10, 11, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.moduleDetails);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.discussions);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _create_post_create_post_component__WEBPACK_IMPORTED_MODULE_6__["CreatePostComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"], _edit_post_edit_post_component__WEBPACK_IMPORTED_MODULE_7__["EditPostComponent"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DatePipe"]],
      styles: [".flex-row[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  background-color: lightblue;\n  margin: 15px;\n  max-width: -webkit-fit-content;\n  max-width: -moz-fit-content;\n  max-width: fit-content;\n}\n\n.flex-item[_ngcontent-%COMP%] {\n  align-self: stretch;\n}\n\n.announcement[_ngcontent-%COMP%] {\n  background-color: #ccf5ff;\n  width: 300px;\n  max-width: 300px;\n  margin-top: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3Vyc2UvbW9kdWxlc0Rpc2N1c3Npb24vZGlzY3Vzc2lvbi9DOlxcVXNlcnNcXEppbW15XFxEb2N1bWVudHNcXEdpdEh1YlxcbG1zLWZpdS1mYi1jbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXGNvdXJzZVxcbW9kdWxlc0Rpc2N1c3Npb25cXGRpc2N1c3Npb25cXGRpc2N1c3Npb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vZHVsZXMvY291cnNlL21vZHVsZXNEaXNjdXNzaW9uL2Rpc2N1c3Npb24vZGlzY3Vzc2lvbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSw4QkFBQTtFQUFBLDJCQUFBO0VBQUEsc0JBQUE7QUNDSjs7QURFQTtFQUNJLG1CQUFBO0FDQ0o7O0FERUE7RUFDSSx5QkFBQTtFQUNBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGdCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9tb2R1bGVzL2NvdXJzZS9tb2R1bGVzRGlzY3Vzc2lvbi9kaXNjdXNzaW9uL2Rpc2N1c3Npb24uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmxleC1yb3d7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGxpZ2h0Ymx1ZTtcclxuICAgIG1hcmdpbjogMTVweDtcclxuICAgIG1heC13aWR0aDogZml0LWNvbnRlbnQ7XHJcbn1cclxuXHJcbi5mbGV4LWl0ZW17XHJcbiAgICBhbGlnbi1zZWxmOiBzdHJldGNoO1xyXG59XHJcblxyXG4uYW5ub3VuY2VtZW50e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIwNCwgMjQ1LCAyNTUpO1xyXG4gICAgd2lkdGg6IDMwMHB4OyBcclxuICAgIG1heC13aWR0aDozMDBweDtcclxuICAgIG1hcmdpbi10b3A6MTVweDtcclxufSIsIi5mbGV4LXJvdyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBsaWdodGJsdWU7XG4gIG1hcmdpbjogMTVweDtcbiAgbWF4LXdpZHRoOiBmaXQtY29udGVudDtcbn1cblxuLmZsZXgtaXRlbSB7XG4gIGFsaWduLXNlbGY6IHN0cmV0Y2g7XG59XG5cbi5hbm5vdW5jZW1lbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2NmNWZmO1xuICB3aWR0aDogMzAwcHg7XG4gIG1heC13aWR0aDogMzAwcHg7XG4gIG1hcmdpbi10b3A6IDE1cHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](DiscussionComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-discussion',
          templateUrl: './discussion.component.html',
          styleUrls: ['./discussion.component.scss']
        }]
      }], function () {
        return [{
          type: _app_core_services_discussion_service__WEBPACK_IMPORTED_MODULE_1__["DiscussionService"]
        }, {
          type: _app_core_services_module_service__WEBPACK_IMPORTED_MODULE_2__["ModuleService"]
        }, {
          type: _app_core_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/modules/course/modulesDiscussion/edit-post/edit-post.component.ts":
  /*!***********************************************************************************!*\
    !*** ./src/app/modules/course/modulesDiscussion/edit-post/edit-post.component.ts ***!
    \***********************************************************************************/

  /*! exports provided: EditPostComponent */

  /***/
  function srcAppModulesCourseModulesDiscussionEditPostEditPostComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditPostComponent", function () {
      return EditPostComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _app_core_services_discussion_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/core/services/discussion.service */
    "./src/app/core/services/discussion.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function EditPostComponent_ng_template_0_div_13_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Post is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditPostComponent_ng_template_0_div_13_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditPostComponent_ng_template_0_div_13_div_1_Template, 2, 0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r507 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r507.up.post.errors.required);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    function EditPostComponent_ng_template_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r511 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h4", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Edit Your Post");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPostComponent_ng_template_0_Template_button_click_3_listener() {
          var modal_r505 = ctx.$implicit;
          return modal_r505.dismiss("Cross click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "span", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "\xD7");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "label", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Post");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "textarea", 10, 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, EditPostComponent_ng_template_0_div_13_Template, 2, 1, "div", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPostComponent_ng_template_0_Template_button_click_14_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r511);

          var _r506 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](12);

          var ctx_r510 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r510.updatePost(_r506.value);
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "i", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Update Post");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPostComponent_ng_template_0_Template_button_click_18_listener() {
          var modal_r505 = ctx.$implicit;
          return modal_r505.close("Close click");
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Close");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r504 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r504.editPostForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](3, _c0, ctx_r504.submitted && ctx_r504.up.post.errors));

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r504.submitted && ctx_r504.up.post.errors);
      }
    }

    var EditPostComponent =
    /*#__PURE__*/
    function () {
      function EditPostComponent(modalService, fb, discussionService) {
        _classCallCheck(this, EditPostComponent);

        this.modalService = modalService;
        this.fb = fb;
        this.discussionService = discussionService;
        this.submitted = false;
      }

      _createClass(EditPostComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.makeForm();
        }
      }, {
        key: "makeForm",
        value: function makeForm() {
          this.editPostForm = this.fb.group({
            post: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "open",
        value: function open(content) {
          this.editPostForm.get('post').setValue(this.discussionData.post);
          this.modalService.open(content, {
            size: 'lg',
            centered: true
          });
        }
      }, {
        key: "updatePost",
        value: function updatePost(post) {
          this.submitted = true;

          if (!this.editPostForm.valid) {
            return;
          }

          var today = new Date();
          this.discussionService.updateDiscussion(post, today, this.discussionData.discussion_id).subscribe(function () {
            alert("Updated post");
          });
        }
      }, {
        key: "up",
        get: function get() {
          return this.editPostForm.controls;
        }
      }]);

      return EditPostComponent;
    }();

    EditPostComponent.ɵfac = function EditPostComponent_Factory(t) {
      return new (t || EditPostComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_discussion_service__WEBPACK_IMPORTED_MODULE_3__["DiscussionService"]));
    };

    EditPostComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditPostComponent,
      selectors: [["app-edit-post"]],
      inputs: {
        discussionData: "discussionData"
      },
      decls: 4,
      vars: 0,
      consts: [["contentPostEdit", ""], [1, "btn", "btn-success", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "close", 3, "click"], ["aria-hidden", "true"], [1, "modal-body"], [1, "col-9", 3, "formGroup"], [1, "form-group"], ["for", "post"], ["rows", "3", "required", "", "formControlName", "post", 1, "form-control", 3, "ngClass"], ["post", ""], ["class", "invalid-feedback", 4, "ngIf"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-plus-circle"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-light", 3, "click"], [1, "invalid-feedback"], [4, "ngIf"]],
      template: function EditPostComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r513 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, EditPostComponent_ng_template_0_Template, 20, 5, "ng-template", null, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "button", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditPostComponent_Template_button_click_2_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r513);

            var _r503 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);

            return ctx.open(_r503);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Edit Post");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY291cnNlL21vZHVsZXNEaXNjdXNzaW9uL2VkaXQtcG9zdC9lZGl0LXBvc3QuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditPostComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-post',
          templateUrl: './edit-post.component.html',
          styleUrls: ['./edit-post.component.scss']
        }]
      }], function () {
        return [{
          type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModal"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _app_core_services_discussion_service__WEBPACK_IMPORTED_MODULE_3__["DiscussionService"]
        }];
      }, {
        discussionData: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"]
        }]
      });
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _app_core_services_module_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @app/core/services/module.service */
    "./src/app/core/services/module.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    function CreateModuleComponent_div_9_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Number is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateModuleComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateModuleComponent_div_9_div_1_Template, 2, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r420 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r420.m.number.errors.required);
      }
    }

    function CreateModuleComponent_div_15_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Title is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateModuleComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateModuleComponent_div_15_div_1_Template, 2, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r422 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r422.m.title.errors.required);
      }
    }

    function CreateModuleComponent_div_26_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Locked Until is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function CreateModuleComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, CreateModuleComponent_div_26_div_1_Template, 2, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r425 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r425.m.lockedUntil.errors.required);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

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
        this.submitted = false;
        this.todayDate = null;
        this.moduleForm = this.fb.group({
          number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
          lockedUntil: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
      }

      _createClass(CreateModuleComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this57 = this;

          this.route.params.subscribe(function (params) {
            _this57.courseId = params.id;
            console.log("params id create: " + params.id);
          });
          var today = new Date();
          var dd = String(today.getDate()).padStart(2, '0');
          var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

          var yyyy = today.getFullYear();
          this.todayDate = new Promise(function (resolve, reject) {
            resolve(mm + '/' + dd + '/' + yyyy);
          });
        }
      }, {
        key: "addModule",
        value: function addModule(number, title, lockedUntil) {
          this.submitted = true;
          var today = new Date(lockedUntil);
          var dd = String(today.getDate()).padStart(2, '0');
          var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

          var yyyy = today.getFullYear();
          lockedUntil = yyyy + '-' + mm + '-' + dd;
          console.log("going to submit lockedUntil: " + lockedUntil);

          if (!this.moduleForm.valid) {
            return;
          }

          this.moduleService.addModule(this.courseId, number, title, lockedUntil).subscribe(function () {
            //this.router.navigate(['/admin']);
            alert("Added module successfully!");
          });
        }
      }, {
        key: "onDateSelect",
        value: function onDateSelect(event) {
          this.todayDate = new Promise(function (resolve, reject) {
            resolve(String(event.month).padStart(2, '0') + '/' + String(event.day).padStart(2, '0') + '/' + event.year);
          });
        }
      }, {
        key: "m",
        get: function get() {
          return this.moduleForm.controls;
        }
      }]);

      return CreateModuleComponent;
    }();

    CreateModuleComponent.ɵfac = function CreateModuleComponent_Factory(t) {
      return new (t || CreateModuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_module_service__WEBPACK_IMPORTED_MODULE_3__["ModuleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    CreateModuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: CreateModuleComponent,
      selectors: [["app-create-module"]],
      decls: 30,
      vars: 16,
      consts: [[1, "center-form"], [1, "col-sm-4", 3, "formGroup"], [1, "form-group"], ["for", "number"], ["type", "text", "formControlName", "number", "required", "", 1, "form-control", 3, "ngClass"], ["number", ""], ["class", "invalid-feedback", 4, "ngIf"], ["for", "title"], ["formControlName", "title", "required", "", 1, "form-control", 3, "ngClass"], ["title", ""], ["for", "lockedUntil"], [1, "input-group"], ["placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", "formControlName", "lockedUntil", "readonly", "", "required", "", 1, "form-control", 3, "value", "ngClass", "dateSelect"], ["d", "ngbDatepicker", "lockedUntil", ""], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "far", "fa-calendar-alt", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-plus-circle"], [1, "invalid-feedback"], [4, "ngIf"]],
      template: function CreateModuleComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r429 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Create New Module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, CreateModuleComponent_div_9_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "textarea", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, CreateModuleComponent_div_15_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Locked Until");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateSelect", function CreateModuleComponent_Template_input_dateSelect_20_listener($event) {
            return ctx.onDateSelect($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateModuleComponent_Template_button_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r429);

            var _r423 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

            return _r423.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, CreateModuleComponent_div_26_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function CreateModuleComponent_Template_button_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r429);

            var _r419 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            var _r421 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

            var _r424 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return ctx.addModule(_r419.value, _r421.value, _r424.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Create Module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.moduleForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](10, _c0, ctx.submitted && ctx.m.number.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.m.number.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](12, _c0, ctx.submitted && ctx.m.title.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.m.title.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 8, ctx.todayDate))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](14, _c0, ctx.submitted && ctx.m.lockedUntil.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.m.lockedUntil.errors);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepicker"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY291cnNlL21vZHVsZXNNYW5hZ2VtZW50L2NyZWF0ZS1tb2R1bGUvY3JlYXRlLW1vZHVsZS5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](CreateModuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-create-module',
          templateUrl: './create-module.component.html',
          styleUrls: ['./create-module.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }, {
          type: _app_core_services_module_service__WEBPACK_IMPORTED_MODULE_3__["ModuleService"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _app_core_services_module_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @app/core/services/module.service */
    "./src/app/core/services/module.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    function EditModuleComponent_div_9_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Number is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditModuleComponent_div_9_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditModuleComponent_div_9_div_1_Template, 2, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r431 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r431.mu.number.errors.required);
      }
    }

    function EditModuleComponent_div_15_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Title is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditModuleComponent_div_15_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditModuleComponent_div_15_div_1_Template, 2, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r433 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r433.mu.title.errors.required);
      }
    }

    function EditModuleComponent_div_26_div_1_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Locked Until is required");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function EditModuleComponent_div_26_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, EditModuleComponent_div_26_div_1_Template, 2, 0, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r436 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r436.mu.lockedUntil.errors.required);
      }
    }

    var _c0 = function _c0(a0) {
      return {
        "is-invalid": a0
      };
    };

    var EditModuleComponent =
    /*#__PURE__*/
    function () {
      function EditModuleComponent(moduleService, router, route, fb) {
        _classCallCheck(this, EditModuleComponent);

        this.moduleService = moduleService;
        this.router = router;
        this.route = route;
        this.fb = fb;
        this.submitted = false;
        this.givenDate = null;
        this.CreateForm();
      }

      _createClass(EditModuleComponent, [{
        key: "CreateForm",
        value: function CreateForm() {
          this.updateForm = this.fb.group({
            number: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
            lockedUntil: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this58 = this;

          this.route.params.subscribe(function (params) {
            _this58.id = params.moduleId;

            _this58.moduleService.getModuleById(_this58.id).subscribe(function (res) {
              _this58.module = res[0];
              _this58.moduleNumber = _this58.module.number; //console.log(this.module);
              //console.log(this.module.id);

              _this58.updateForm.get('number').setValue(_this58.module.number);

              _this58.updateForm.get('title').setValue(_this58.module.title);

              _this58.updateForm.get('lockedUntil').setValue(_this58.module.lockedUntil); //this.givenDate = this.module.lockedUntil;


              var newDate = new Date(_this58.module.lockedUntil.toString());
              var dd = String(newDate.getDate() + 1).padStart(2, '0');
              var mm = String(newDate.getMonth() + 1).padStart(2, '0'); //January is 0!

              var yyyy = newDate.getFullYear();
              _this58.givenDate = new Promise(function (resolve, reject) {
                resolve(mm + '/' + dd + '/' + yyyy);
              });
              _this58.startDate = ("" + _this58.module.lockedUntil).split("-"); //console.log(this.startDate);
            });
          });
        }
      }, {
        key: "updateModule",
        value: function updateModule(number, title, lockedUntil) {
          this.submitted = true;
          var today = new Date(lockedUntil);
          var dd = String(today.getDate()).padStart(2, '0');
          var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!

          var yyyy = today.getFullYear();
          lockedUntil = yyyy + '-' + mm + '-' + dd; //console.log("going to submit lockedUntil: " + lockedUntil);

          if (!this.updateForm.valid) {
            return;
          }

          this.moduleService.updateModule(this.id, number, title, lockedUntil).subscribe(function (res) {
            alert('Module updated successfully');
          });
        }
      }, {
        key: "onDateSelect",
        value: function onDateSelect(event) {
          this.givenDate = new Promise(function (resolve, reject) {
            resolve(String(event.month).padStart(2, '0') + '/' + String(event.day).padStart(2, '0') + '/' + event.year);
          });
        }
      }, {
        key: "mu",
        get: function get() {
          return this.updateForm.controls;
        }
      }]);

      return EditModuleComponent;
    }();

    EditModuleComponent.ɵfac = function EditModuleComponent_Factory(t) {
      return new (t || EditModuleComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_app_core_services_module_service__WEBPACK_IMPORTED_MODULE_2__["ModuleService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]));
    };

    EditModuleComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: EditModuleComponent,
      selectors: [["app-edit-module"]],
      decls: 30,
      vars: 17,
      consts: [[1, "center-form"], [1, "col-sm-4", 3, "formGroup"], [1, "form-group"], ["for", "number"], ["type", "text", "formControlName", "number", "required", "", 1, "form-control", 3, "ngClass"], ["number", ""], ["class", "invalid-feedback", 4, "ngIf"], ["for", "title"], ["formControlName", "title", "required", "", 1, "form-control", 3, "ngClass"], ["title", ""], ["for", "lockedUntil"], [1, "input-group"], ["type", "text", "placeholder", "yyyy-mm-dd", "name", "dp", "ngbDatepicker", "", "readonly", "", "formControlName", "lockedUntil", "required", "", 1, "form-control", 3, "value", "ngClass", "dateSelect"], ["d", "ngbDatepicker", "lockedUntil", ""], [1, "input-group-append"], ["type", "button", 1, "btn", "btn-outline-secondary", "far", "fa-calendar-alt", 3, "click"], ["type", "submit", 1, "btn", "btn-primary", 3, "click"], [1, "fas", "fa-plus-circle"], [1, "invalid-feedback"], [4, "ngIf"]],
      template: function EditModuleComponent_Template(rf, ctx) {
        if (rf & 1) {
          var _r440 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "label", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Number");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 4, 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](9, EditModuleComponent_div_9_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Title");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "textarea", 8, 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](15, EditModuleComponent_div_15_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "label", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Locked Until");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "input", 12, 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("dateSelect", function EditModuleComponent_Template_input_dateSelect_20_listener($event) {
            return ctx.onDateSelect($event);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](23, "async");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "button", 15);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditModuleComponent_Template_button_click_25_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r440);

            var _r434 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

            return _r434.toggle();
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, EditModuleComponent_div_26_Template, 2, 1, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "button", 16);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function EditModuleComponent_Template_button_click_27_listener() {
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r440);

            var _r430 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);

            var _r432 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](14);

            var _r435 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](22);

            return ctx.updateModule(_r430.value, _r432.value, _r435.value);
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "i", 17);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Update Module");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Edit Module ", ctx.moduleNumber, "");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.updateForm);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](11, _c0, ctx.submitted && ctx.mu.number.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.mu.number.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](13, _c0, ctx.submitted && ctx.mu.title.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.mu.title.errors);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](23, 9, ctx.givenDate))("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](15, _c0, ctx.submitted && ctx.mu.lockedUntil.errors));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.submitted && ctx.mu.lockedUntil.errors);
        }
      },
      directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_5__["NgbInputDatepicker"]],
      pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["AsyncPipe"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY291cnNlL21vZHVsZXNNYW5hZ2VtZW50L2VkaXQtbW9kdWxlL2VkaXQtbW9kdWxlLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](EditModuleComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-edit-module',
          templateUrl: './edit-module.component.html',
          styleUrls: ['./edit-module.component.scss']
        }]
      }], function () {
        return [{
          type: _app_core_services_module_service__WEBPACK_IMPORTED_MODULE_2__["ModuleService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
        }, {
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }];
      }, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");

    function SidebarButtonComponent_div_0_Template(rf, ctx) {
      if (rf & 1) {
        var _r496 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarButtonComponent_div_0_Template_span_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r496);

          var ctx_r495 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r495.openNav();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function SidebarButtonComponent_div_1_Template(rf, ctx) {
      if (rf & 1) {
        var _r498 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "span", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function SidebarButtonComponent_div_1_Template_span_click_1_listener() {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r498);

          var ctx_r497 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r497.closeNav();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

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

    SidebarButtonComponent.ɵfac = function SidebarButtonComponent_Factory(t) {
      return new (t || SidebarButtonComponent)();
    };

    SidebarButtonComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarButtonComponent,
      selectors: [["app-sidebar-button"]],
      decls: 2,
      vars: 2,
      consts: [["class", "flexbox-row", 4, "ngIf"], [1, "flexbox-row"], [1, "flexbox-side", 2, "cursor", "pointer", 3, "click"], [1, "fas", "fa-angle-double-right", "fa-5x"], [1, "fas", "fa-angle-double-left", "fa-5x"]],
      template: function SidebarButtonComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, SidebarButtonComponent_div_0_Template, 3, 0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, SidebarButtonComponent_div_1_Template, 3, 0, "div", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sidebarIsOpen == false);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.sidebarIsOpen == true);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY291cnNlL3NpZGViYXItYnV0dG9uL3NpZGViYXItYnV0dG9uLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarButtonComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar-button',
          templateUrl: './sidebar-button.component.html',
          styleUrls: ['./sidebar-button.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");

    var _c0 = function _c0(a1) {
      return ["/courses", a1];
    };

    var SidebarComponent =
    /*#__PURE__*/
    function () {
      function SidebarComponent(route) {
        _classCallCheck(this, SidebarComponent);

        this.route = route;
      }

      _createClass(SidebarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this59 = this;

          this.route.params.subscribe(function (params) {
            _this59.courseId = params.id;
          });
          console.log("sidebar init");
        }
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          console.log("sidebar afterViewInit");
          document.getElementById("mySidenav").style.width = "250px";
          document.getElementById("main").style.marginLeft = "250px";
          document.getElementById("mySidenav").style.display = "block";
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          console.log("sidebar destroy");
          document.getElementById("mySidenav").style.display = "none";
          document.getElementById("mySidenav").style.width = "0";
          document.getElementById("main").style.marginLeft = "0";
        }
      }]);

      return SidebarComponent;
    }();

    SidebarComponent.ɵfac = function SidebarComponent_Factory(t) {
      return new (t || SidebarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]));
    };

    SidebarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SidebarComponent,
      selectors: [["app-sidebar"]],
      decls: 9,
      vars: 6,
      consts: [["id", "mySidenav", 1, "sidenav"], ["routerLinkActive", "active", 1, "nav-link", 3, "routerLink"]],
      template: function SidebarComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Announcements");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Leaderboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Modules");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c0, ctx.courseId));

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/courses/", ctx.courseId, "/announcements");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/courses/", ctx.courseId, "/leaderboard");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpropertyInterpolate1"]("routerLink", "/courses/", ctx.courseId, "/modules");
        }
      },
      directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterLinkActive"]],
      styles: [".sidenav[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 250px;\n  position: absolute;\n  z-index: 0;\n  top: 55px;\n  left: 0;\n  background-color: #425efd;\n  overflow-x: hidden;\n  transition: 0.5s;\n  display: block;\n}\n\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  padding: 10px;\n  text-decoration: none;\n  font-size: 25px;\n  color: #000000;\n  display: block;\n}\n\n.sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: #2d3d97;\n  color: #ffffff;\n}\n\n#main[_ngcontent-%COMP%] {\n  padding: 16px;\n}\n\n@media screen and (max-height: 450px) {\n  .sidenav[_ngcontent-%COMP%] {\n    padding-top: 15px;\n  }\n\n  .sidenav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n    font-size: 18px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbW9kdWxlcy9jb3Vyc2Uvc2lkZWJhci9DOlxcVXNlcnNcXEppbW15XFxEb2N1bWVudHNcXEdpdEh1YlxcbG1zLWZpdS1mYi1jbGllbnQvc3JjXFxhcHBcXG1vZHVsZXNcXGNvdXJzZVxcc2lkZWJhclxcc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvbW9kdWxlcy9jb3Vyc2Uvc2lkZWJhci9zaWRlYmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVFO0VBQ0UsWUFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFVBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLGNBQUE7QUNESjs7QURJRTtFQUNFLGFBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7RUFDQSxjQUFBO0VBQ0EsY0FBQTtBQ0RKOztBRElFO0VBQ0UseUJBQUE7RUFDQSxjQUFBO0FDREo7O0FESUU7RUFDRSxhQUFBO0FDREo7O0FES0U7RUFDRTtJQUFVLGlCQUFBO0VDRFo7O0VERUU7SUFBWSxlQUFBO0VDRWQ7QUFDRiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY291cnNlL3NpZGViYXIvc2lkZWJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4gIFxyXG4gIC5zaWRlbmF2IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHotaW5kZXg6IDA7XHJcbiAgICB0b3A6IDU1cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzQyNWVmZDtcclxuICAgIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICAgIHRyYW5zaXRpb246IDAuNXM7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLnNpZGVuYXYgYSB7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgZm9udC1zaXplOiAyNXB4O1xyXG4gICAgY29sb3I6ICMwMDAwMDA7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICB9XHJcbiAgXHJcbiAgLnNpZGVuYXYgYTpob3ZlciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzZDk3O1xyXG4gICAgY29sb3I6ICNmZmZmZmY7XHJcbiAgfVxyXG5cclxuICAjbWFpbiB7XHJcbiAgICBwYWRkaW5nOiAxNnB4O1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC1oZWlnaHQ6IDQ1MHB4KSB7XHJcbiAgICAuc2lkZW5hdiB7cGFkZGluZy10b3A6IDE1cHg7fVxyXG4gICAgLnNpZGVuYXYgYSB7Zm9udC1zaXplOiAxOHB4O31cclxuICB9XHJcbiAiLCIuc2lkZW5hdiB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IDI1MHB4O1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHotaW5kZXg6IDA7XG4gIHRvcDogNTVweDtcbiAgbGVmdDogMDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzQyNWVmZDtcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICB0cmFuc2l0aW9uOiAwLjVzO1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLnNpZGVuYXYgYSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5zaWRlbmF2IGE6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmQzZDk3O1xuICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuI21haW4ge1xuICBwYWRkaW5nOiAxNnB4O1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LWhlaWdodDogNDUwcHgpIHtcbiAgLnNpZGVuYXYge1xuICAgIHBhZGRpbmctdG9wOiAxNXB4O1xuICB9XG5cbiAgLnNpZGVuYXYgYSB7XG4gICAgZm9udC1zaXplOiAxOHB4O1xuICB9XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SidebarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-sidebar',
          templateUrl: './sidebar.component.html',
          styleUrls: ['./sidebar.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]
        }];
      }, null);
    })();
    /***/

  }
}]);
//# sourceMappingURL=modules-course-course-module-es5.js.map