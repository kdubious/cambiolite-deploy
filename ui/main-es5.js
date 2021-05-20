function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./src/app/Help/about/about.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/Help/about/about.component.ts ***!
    \***********************************************/

  /*! exports provided: AboutComponent */

  /***/
  function srcAppHelpAboutAboutComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutComponent", function () {
      return AboutComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AboutComponent =
    /*#__PURE__*/
    function () {
      function AboutComponent() {
        _classCallCheck(this, AboutComponent);
      }

      _createClass(AboutComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutComponent;
    }();

    AboutComponent.ɵfac = function AboutComponent_Factory(t) {
      return new (t || AboutComponent)();
    };

    AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AboutComponent,
      selectors: [["app-about"]],
      decls: 24,
      vars: 0,
      consts: [["id", "section-help", 1, "container", "flex-fill"]],
      template: function AboutComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "There is no 'i' in team.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "The device you're controlling was not built in a vacuum.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Special thanks go out to:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "ul");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Dave Davenport \u2014 My Yoda. He fielded most questions with excellent answers, and a few with \"you gotta try it.\"");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "Dmitriy Sidorovich \u2014 Guru of the circuit board. He designed, or improved upon, many of the circuits in use today.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "My family and friends. Life is easier with people who believe in you.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Coming Soon");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "We have tons of new stuff planned");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "At Musica Pristina, we never stop innovating.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Stay tuned for exciting new features to be rolled out in future product updates.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0hlbHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-about',
          templateUrl: './about.component.html',
          styleUrls: ['./about.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/Help/support/support.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/Help/support/support.component.ts ***!
    \***************************************************/

  /*! exports provided: SupportComponent */

  /***/
  function srcAppHelpSupportSupportComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SupportComponent", function () {
      return SupportComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SupportComponent =
    /*#__PURE__*/
    function () {
      function SupportComponent() {
        _classCallCheck(this, SupportComponent);
      }

      _createClass(SupportComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SupportComponent;
    }();

    SupportComponent.ɵfac = function SupportComponent_Factory(t) {
      return new (t || SupportComponent)();
    };

    SupportComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: SupportComponent,
      selectors: [["app-support"]],
      decls: 20,
      vars: 0,
      consts: [["id", "section-network", 1, "container", "flex-fill"], ["href", "tel:919.494.1800"], ["href", "mailto:alwayslistening@musicapristina.com"]],
      template: function SupportComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h2");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Contact Musica Pristina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "P: ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "a", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "919.494.1800");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "E-Mail:");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "alwayslistening@musicapristina.com");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "strong");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "Remote Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Most issues that could arise can be addressed with a little email or telephone troubleshooting. If your issue is with a network connected device, we can share screens and access your system remotely (with your permission) to work out any issues you may be experiencing.");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0hlbHAvc3VwcG9ydC9zdXBwb3J0LmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SupportComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-support',
          templateUrl: './support.component.html',
          styleUrls: ['./support.component.scss']
        }]
      }], function () {
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
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


    var _audio_setup_audio_setup_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./audio-setup/audio-setup.component */
    "./src/app/audio-setup/audio-setup.component.ts");
    /* harmony import */


    var _Help_about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Help/about/about.component */
    "./src/app/Help/about/about.component.ts");
    /* harmony import */


    var _Help_support_support_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Help/support/support.component */
    "./src/app/Help/support/support.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _network_network_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./network/network.component */
    "./src/app/network/network.component.ts");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./registration/registration.component */
    "./src/app/registration/registration.component.ts");
    /* harmony import */


    var _update_update_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./update/update.component */
    "./src/app/update/update.component.ts");

    var routes = [{
      path: '',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
    }, {
      path: 'audio-setup',
      component: _audio_setup_audio_setup_component__WEBPACK_IMPORTED_MODULE_2__["AudioSetupComponent"]
    }, {
      path: 'help',
      children: [{
        path: '',
        component: _Help_support_support_component__WEBPACK_IMPORTED_MODULE_4__["SupportComponent"]
      }, {
        path: 'about',
        component: _Help_about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]
      }]
    }, {
      path: 'network',
      component: _network_network_component__WEBPACK_IMPORTED_MODULE_6__["NetworkComponent"]
    }, {
      path: 'registration',
      component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_7__["RegistrationComponent"]
    }, {
      path: 'update',
      component: _update_update_component__WEBPACK_IMPORTED_MODULE_8__["UpdateComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
      type: AppRoutingModule
    });
    AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
      factory: function AppRoutingModule_Factory(t) {
        return new (t || AppRoutingModule)();
      },
      imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");

    var _c0 = function _c0() {
      return ["/"];
    };

    var _c1 = function _c1() {
      return ["active"];
    };

    var _c2 = function _c2() {
      return ["/audio-setup"];
    };

    var _c3 = function _c3() {
      return ["/network"];
    };

    var _c4 = function _c4() {
      return ["/registration"];
    };

    var _c5 = function _c5() {
      return ["/update"];
    };

    var _c6 = function _c6() {
      return ["/help"];
    };

    var _c7 = function _c7() {
      return {
        exact: true
      };
    };

    var _c8 = function _c8() {
      return ["/help/about"];
    };

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(route) {
        _classCallCheck(this, AppComponent);

        this.route = route;
        this.navbarCollapsed = true;
        this.isMobile = false;
        console.log(route);
      }

      _createClass(AppComponent, [{
        key: "onResize",
        value: function onResize(event) {
          this.isMobile = window.innerWidth < 992;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ɵfac = function AppComponent_Factory(t) {
      return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]));
    };

    AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
      type: AppComponent,
      selectors: [["app-root"]],
      hostBindings: function AppComponent_HostBindings(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("resize", function AppComponent_resize_HostBindingHandler($event) {
            return ctx.onResize($event);
          }, false, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵresolveWindow"]);
        }
      },
      decls: 29,
      vars: 35,
      consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark", "bg-dark"], [1, "container"], [1, "navbar-brand", 3, "routerLink"], ["src", "assets/logo.png", 1, "logo"], ["type", "button", "aria-controls", "navbarContent", "aria-label", "Toggle navigation", 1, "navbar-toggler", "navbar-toggler-right", 3, "click"], [1, "navbar-toggler-icon"], ["id", "navbarContent", 1, "navbar-collapse", 3, "ngbCollapse"], [1, "navbar-nav", "mr-auto"], [1, "nav-item", "ml-1", 3, "routerLinkActive"], [1, "nav-link", 3, "routerLink", "click"], ["ngbDropdown", "", 1, "nav-item", "ml-1", 3, "routerLinkActive"], ["id", "help", "ngbDropdownToggle", "", "role", "button", 1, "nav-link", 2, "cursor", "pointer"], ["ngbDropdownMenu", "", "aria-labelledby", "help", 1, "dropdown-menu", "navbar-dark"], ["ngbDropdownItem", "", 1, "nav-item", "nav-link", 3, "routerLink", "routerLinkActive", "routerLinkActiveOptions"], ["ngbDropdownItem", "", 1, "nav-link", 3, "routerLink", "routerLinkActive", "routerLinkActiveOptions"]],
      template: function AppComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "a", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](3, "img", 3);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_button_click_4_listener($event) {
            return ctx.navbarCollapsed = !ctx.navbarCollapsed;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 5);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 6);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "ul", 7);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_a_click_9_listener($event) {
            return ctx.navbarCollapsed = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Audio Setup");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_a_click_12_listener($event) {
            return ctx.navbarCollapsed = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Network Setup");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_a_click_15_listener($event) {
            return ctx.navbarCollapsed = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Registration");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 8);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "a", 9);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function AppComponent_Template_a_click_18_listener($event) {
            return ctx.navbarCollapsed = true;
          });

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Update");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "li", 10);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 11);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, "Help");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "div", 12);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "a", 13);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, "Support");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "a", 14);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](27, "About");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](28, "router-outlet");
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](19, _c0));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵattribute"]("aria-expanded", !ctx.navbarCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngbCollapse", ctx.navbarCollapsed);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@smoothCollapse", ctx.isMobile ? ctx.navbarCollapsed ? "initial" : "final" : "");

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](20, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](21, _c2));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](22, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](23, _c3));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](24, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](25, _c4));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](26, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](27, _c5));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](28, _c1));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](4);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](29, _c6))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](30, _c1))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](31, _c7));

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](32, _c8))("routerLinkActive", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](33, _c1))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction0"](34, _c7));
        }
      },
      directives: [_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbNavbar"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbCollapse"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdown"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownToggle"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownMenu"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbDropdownItem"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"],
      data: {
        animation: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('smoothCollapse', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          height: '0px',
          overflow: 'hidden',
          opacity: '0'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
          height: '180px',
          //overflow: 'auto',
          opacity: '1'
        })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('initial=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('450ms ease-out')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('final=>initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('750ms'))])]
      }
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"],
        args: [{
          selector: 'app-root',
          templateUrl: './app.component.html',
          styleUrls: ['./app.component.scss'],
          animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('smoothCollapse', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            height: '0px',
            overflow: 'hidden',
            opacity: '0'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
            height: '180px',
            //overflow: 'auto',
            opacity: '1'
          })), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('initial=>final', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('450ms ease-out')), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('final=>initial', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('750ms'))])]
        }]
      }], function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
        }];
      }, {
        onResize: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"],
          args: ['window:resize', ['$event']]
        }]
      });
    })();
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _audio_setup_audio_setup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./audio-setup/audio-setup.component */
    "./src/app/audio-setup/audio-setup.component.ts");
    /* harmony import */


    var _bottom_sheet_data_bottom_sheet_data_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./bottom-sheet-data/bottom-sheet-data.component */
    "./src/app/bottom-sheet-data/bottom-sheet-data.component.ts");
    /* harmony import */


    var _Help_about_about_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./Help/about/about.component */
    "./src/app/Help/about/about.component.ts");
    /* harmony import */


    var _Help_support_support_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./Help/support/support.component */
    "./src/app/Help/support/support.component.ts");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _network_network_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./network/network.component */
    "./src/app/network/network.component.ts");
    /* harmony import */


    var _registration_registration_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./registration/registration.component */
    "./src/app/registration/registration.component.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _services_http_interceptors_barrel__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./services/http-interceptors-barrel */
    "./src/app/services/http-interceptors-barrel.ts");
    /* harmony import */


    var _update_update_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./update/update.component */
    "./src/app/update/update.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
      type: AppModule,
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
    });
    AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
      factory: function AppModule_Factory(t) {
        return new (t || AppModule)();
      },
      providers: [{
        provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],
        useValue: {}
      }, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheet"], _services_api_service__WEBPACK_IMPORTED_MODULE_24__["ApiService"], _services_http_interceptors_barrel__WEBPACK_IMPORTED_MODULE_25__["httpInterceptorProviders"]],
      imports: [[_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]]]
    });

    (function () {
      (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, {
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"], _audio_setup_audio_setup_component__WEBPACK_IMPORTED_MODULE_17__["AudioSetupComponent"], _bottom_sheet_data_bottom_sheet_data_component__WEBPACK_IMPORTED_MODULE_18__["BottomSheetDataComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_23__["RegistrationComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"], _network_network_component__WEBPACK_IMPORTED_MODULE_22__["NetworkComponent"], _Help_about_about_component__WEBPACK_IMPORTED_MODULE_19__["AboutComponent"], _Help_support_support_component__WEBPACK_IMPORTED_MODULE_20__["SupportComponent"], _update_update_component__WEBPACK_IMPORTED_MODULE_26__["UpdateComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]]
      });
    })();
    /*@__PURE__*/


    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
          declarations: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"], _audio_setup_audio_setup_component__WEBPACK_IMPORTED_MODULE_17__["AudioSetupComponent"], _bottom_sheet_data_bottom_sheet_data_component__WEBPACK_IMPORTED_MODULE_18__["BottomSheetDataComponent"], _registration_registration_component__WEBPACK_IMPORTED_MODULE_23__["RegistrationComponent"], _home_home_component__WEBPACK_IMPORTED_MODULE_21__["HomeComponent"], _network_network_component__WEBPACK_IMPORTED_MODULE_22__["NetworkComponent"], _Help_about_about_component__WEBPACK_IMPORTED_MODULE_19__["AboutComponent"], _Help_support_support_component__WEBPACK_IMPORTED_MODULE_20__["SupportComponent"], _update_update_component__WEBPACK_IMPORTED_MODULE_26__["UpdateComponent"]],
          imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_12__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_15__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_14__["NgbModule"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_4__["MatCheckboxModule"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormFieldModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_9__["MatProgressBarModule"], _angular_material_select__WEBPACK_IMPORTED_MODULE_10__["MatSelectModule"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_11__["MatSliderModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"]],
          providers: [{
            provide: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"],
            useValue: {}
          }, _angular_material_dialog__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"], _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheet"], _services_api_service__WEBPACK_IMPORTED_MODULE_24__["ApiService"], _services_http_interceptors_barrel__WEBPACK_IMPORTED_MODULE_25__["httpInterceptorProviders"]],
          bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_16__["AppComponent"]]
        }]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/audio-setup/audio-setup.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/audio-setup/audio-setup.component.ts ***!
    \******************************************************/

  /*! exports provided: AudioSetupComponent */

  /***/
  function srcAppAudioSetupAudioSetupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AudioSetupComponent", function () {
      return AudioSetupComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _bottom_sheet_data_bottom_sheet_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../bottom-sheet-data/bottom-sheet-data.component */
    "./src/app/bottom-sheet-data/bottom-sheet-data.component.ts");
    /* harmony import */


    var _forms_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../forms/form-validation */
    "./src/app/forms/form-validation.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/slider.js");
    /* harmony import */


    var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/material/checkbox */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/checkbox.js");

    function AudioSetupComponent_form_3_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Select between the I");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "sup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "S based audio outputs and the USB output. Unless you are using a USB DAC, you should choose ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "I");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "sup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "S + AES/EBU + AES3id + S/PDIF");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ". ");
      }
    }

    function AudioSetupComponent_form_3_ng_template_20_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Set the number of milliseconds of buffering that should happen in the A Cappella III. Note that ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "0.04");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " is the typical setting. Use a larger value if you experience clicks, pops or dropouts. ");
      }
    }

    function AudioSetupComponent_form_3_ng_template_30_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "If your DAC accepts Native DSD over USB, uncheck this box. If your DAC accepts DoP over I");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "sup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "S, AES/EBU, AES3id or S/PDIF then check this box. ");
      }
    }

    function AudioSetupComponent_form_3_ng_template_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Check this box to enable ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "digital volume control");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " through the Roon interface. Doing so make the audio signal bit perfect only at 100% volume in Roon. ");
      }
    }

    function AudioSetupComponent_form_3_ng_template_46_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Select 32 unless you know your DAC is limited to 24 bits. ");
      }
    }

    function AudioSetupComponent_form_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AudioSetupComponent_form_3_Template_form_ngSubmit_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r12.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, AudioSetupComponent_form_3_ng_template_2_Template, 10, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Output Interface");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "info");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-select", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "I");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "sup");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "2");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "S + AES/EBU + AES3id + S/PDIF");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "mat-option", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "USB");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](20, AudioSetupComponent_form_3_ng_template_20_Template, 4, 0, "ng-template", null, 10, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "label", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Audio Buffer");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, "info");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](28, "mat-slider", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](30, AudioSetupComponent_form_3_ng_template_30_Template, 4, 0, "ng-template", null, 13, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "mat-checkbox", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "DSD Over PCM (DoP)");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "info");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, AudioSetupComponent_form_3_ng_template_38_Template, 4, 0, "ng-template", null, 15, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "mat-checkbox", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](41, "Roon Volume Control ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "info");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](46, AudioSetupComponent_form_3_ng_template_46_Template, 1, 0, "ng-template", null, 16, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "mat-select", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "mat-option", 17);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "32 bit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "mat-option", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](53, "24 bit");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "mat-checkbox", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](55, "Roon Max Bits ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "span", 14);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](57, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, "info");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "div", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](60, "button", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AudioSetupComponent_form_3_Template_button_click_60_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r13);

          var ctx_r14 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r14.undo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, "Reset");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Save and apply");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var _r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](21);

        var _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](31);

        var _r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](39);

        var _r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](47);

        var ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r1.theForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbPopover", _r2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.output);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbPopover", _r4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.bufferDuration);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.dop);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbPopover", _r6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.volume);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbPopover", _r8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r1.maxBits);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbPopover", _r10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r1.save_disabled);
      }
    }

    var AudioSetupComponent =
    /*#__PURE__*/
    function () {
      function AudioSetupComponent(fb, service, // public dialogRef: MatDialogRef<AudioSetupComponent>,
      bottomSheet, data) {
        _classCallCheck(this, AudioSetupComponent);

        this.fb = fb;
        this.service = service;
        this.bottomSheet = bottomSheet;
        this.data = data;
        this.saving = false;
      }

      _createClass(AudioSetupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.service.getAudioConfig$().subscribe(function (result) {
            _this.createForm(result.data);
          }, function (error) {
            console.log(error);

            _this.createForm(null);
          });
        }
      }, {
        key: "cancel",
        value: function cancel() {// this.dialogRef.close();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this2 = this;

          if (this.theForm.valid) {
            this.saving = true;
            this.service.putAudioConfig$(this.getFormValues()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err, caught) {
              _forms_form_validation__WEBPACK_IMPORTED_MODULE_5__["FormValidation"].parseSubmitErrors(err, _this2.theForm);

              _this2.saving = false;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            })).subscribe(function (result) {
              if (result.success) {
                _this2.bottomSheet.open(_bottom_sheet_data_bottom_sheet_data_component__WEBPACK_IMPORTED_MODULE_4__["BottomSheetDataComponent"], {
                  data: {
                    message: "The audio settings have been updated.",
                    progress: false
                  }
                }); // this.dialogRef.close();

              } else {
                _this2.bottomSheet.open(_bottom_sheet_data_bottom_sheet_data_component__WEBPACK_IMPORTED_MODULE_4__["BottomSheetDataComponent"], {
                  data: {
                    message: result.message,
                    progress: false
                  }
                });
              }

              _this2.saving = false;
            });
          } else {
            _forms_form_validation__WEBPACK_IMPORTED_MODULE_5__["FormValidation"].validateAllFormFields(this.theForm);
          }
        }
      }, {
        key: "createForm",
        value: function createForm(model) {
          if (this.theForm) {
            this.model = model;
            this.theForm.reset(this.getModelValues());
          } else {
            if (model) {
              this.theForm = this.fb.group({
                output: model.output,
                dop: model.dop,
                volume: model.volume,
                bufferDuration: model.bufferDuration,
                maxBits: model.maxBits
              }); // console.log(model.xo);
              // this.setXOIndex(model.xo);
            } else {
              this.theForm = this.fb.group({
                output: 0,
                dop: false,
                volume: false,
                bufferDuration: 0.04,
                maxBits: 32
              });
            }

            this.model = model;
          }
        }
      }, {
        key: "getFormValues",
        value: function getFormValues() {
          var formModel = this.theForm.value;
          var saveModel = {
            output: formModel.output,
            dop: formModel.dop,
            volume: formModel.volume,
            bufferDuration: formModel.bufferDuration,
            maxBits: formModel.maxBits
          };
          return saveModel;
        }
      }, {
        key: "getModelValues",
        value: function getModelValues() {
          return {
            output: this.model.output,
            dop: this.model.dop,
            volume: this.model.volume,
            bufferDuration: this.model.bufferDuration,
            maxBits: this.model.maxBits
          };
        }
      }, {
        key: "undo",
        value: function undo() {
          this.theForm.reset(this.model);
        } // Form Control Helpers

      }, {
        key: "onoff",
        value: function onoff(value) {
          return value ? "ON" : "OFF";
        }
      }, {
        key: "output",
        get: function get() {
          return this.theForm.get("output");
        }
      }, {
        key: "dop",
        get: function get() {
          return this.theForm.get("dop");
        }
      }, {
        key: "volume",
        get: function get() {
          return this.theForm.get("volume");
        }
      }, {
        key: "bufferDuration",
        get: function get() {
          return this.theForm.get("bufferDuration");
        }
      }, {
        key: "maxBits",
        get: function get() {
          return this.theForm.get("maxBits");
        }
      }, {
        key: "save_disabled",
        get: function get() {
          return this.theForm.pristine || this.saving;
        }
      }]);

      return AudioSetupComponent;
    }();

    AudioSetupComponent.ɵfac = function AudioSetupComponent_Factory(t) {
      return new (t || AudioSetupComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheet"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]));
    };

    AudioSetupComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: AudioSetupComponent,
      selectors: [["app-audio-setup"]],
      decls: 4,
      vars: 1,
      consts: [["id", "section-audio", 1, "container", "flex-fill"], [3, "formGroup", "ngSubmit", 4, "ngIf"], [3, "formGroup", "ngSubmit"], [1, "form-group", "mt-3"], ["popoverOutput", ""], ["for", "audio-output", "id", "audio-outputlabel"], ["placement", "bottom", 1, "ml-1", 3, "ngbPopover"], [3, "formControl"], ["value", "hw:0"], ["value", "hw:1"], ["popoverBuffer", ""], ["for", "audio-buffer-duration", "id", "audio-buffer-durationlabel"], ["thumbLabel", "", "tickInterval", "0.25", "min", "0.01", "max", "0.1", "step", ".01", 3, "formControl"], ["popoverDOP", ""], ["placement", "top", 1, "ml-1", 3, "ngbPopover"], ["popoverVolume", ""], ["popoverMaxBits", ""], ["value", "32"], ["value", "24"], [1, "form-group", "form-actions"], ["type", "button", 1, "btn", "btn-secondary", "btn-lg", "mr-2", 3, "click"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", 3, "disabled"]],
      template: function AudioSetupComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Audio Setup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, AudioSetupComponent_form_3_Template, 64, 12, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroupDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPopover"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControlDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_slider__WEBPACK_IMPORTED_MODULE_15__["MatSlider"], _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckbox"]],
      styles: ["div[tabindex][_ngcontent-%COMP%] {\n  padding: 8px;\n  height: 120px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9ob21lL2tkdWJpb3VzL2NvZGUvY2FtYmlvbGl0ZS91aS9zcmMvYXBwL2F1ZGlvLXNldHVwL2F1ZGlvLXNldHVwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hdWRpby1zZXR1cC9hdWRpby1zZXR1cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSxhQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9hdWRpby1zZXR1cC9hdWRpby1zZXR1cC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbImRpdlt0YWJpbmRleF0ge1xuICAgIHBhZGRpbmc6IDhweDtcbiAgICBoZWlnaHQ6IDEyMHB4O1xufSIsImRpdlt0YWJpbmRleF0ge1xuICBwYWRkaW5nOiA4cHg7XG4gIGhlaWdodDogMTIwcHg7XG59Il19 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AudioSetupComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-audio-setup",
          templateUrl: "./audio-setup.component.html",
          styleUrls: ["./audio-setup.component.scss"]
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
        }, {
          type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheet"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/bottom-sheet-data/bottom-sheet-data.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/bottom-sheet-data/bottom-sheet-data.component.ts ***!
    \******************************************************************/

  /*! exports provided: BottomSheetDataComponent */

  /***/
  function srcAppBottomSheetDataBottomSheetDataComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BottomSheetDataComponent", function () {
      return BottomSheetDataComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    function BottomSheetDataComponent_mat_progress_bar_4_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "mat-progress-bar", 1);
      }
    }

    var BottomSheetDataComponent =
    /*#__PURE__*/
    function () {
      function BottomSheetDataComponent(data) {
        _classCallCheck(this, BottomSheetDataComponent);

        this.data = data;
      }

      _createClass(BottomSheetDataComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          console.log('BottomSheetDataComponent');
          console.log(this.data);
          console.log(this.data.message);
          this.showProgress = this.data.progress;
        }
      }]);

      return BottomSheetDataComponent;
    }();

    BottomSheetDataComponent.ɵfac = function BottomSheetDataComponent_Factory(t) {
      return new (t || BottomSheetDataComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"]));
    };

    BottomSheetDataComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: BottomSheetDataComponent,
      selectors: [["app-bottom-sheet-data"]],
      decls: 5,
      vars: 2,
      consts: [["mode", "indeterminate", 4, "ngIf"], ["mode", "indeterminate"]],
      template: function BottomSheetDataComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h3");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Notification");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, BottomSheetDataComponent_mat_progress_bar_4_Template, 1, 0, "mat-progress-bar", 0);
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.data.message, "\n");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.showProgress);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_3__["MatProgressBar"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JvdHRvbS1zaGVldC1kYXRhL2JvdHRvbS1zaGVldC1kYXRhLmNvbXBvbmVudC5zY3NzIn0= */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BottomSheetDataComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-bottom-sheet-data',
          templateUrl: './bottom-sheet-data.component.html',
          styleUrls: ['./bottom-sheet-data.component.scss']
        }]
      }], function () {
        return [{
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_1__["MAT_BOTTOM_SHEET_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/errors/webapi.ts":
  /*!**********************************!*\
    !*** ./src/app/errors/webapi.ts ***!
    \**********************************/

  /*! exports provided: WebApi */

  /***/
  function srcAppErrorsWebapiTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WebApi", function () {
      return WebApi;
    });

    var WebApi =
    /*#__PURE__*/
    function () {
      function WebApi() {// this.hasSucceeded = json.hasSucceeded;
        // this.messageAutoHide = json.messageAutoHide;
        // this.messages = json.messages;
        // this.modelState = json.modelState;

        _classCallCheck(this, WebApi);
      }

      _createClass(WebApi, null, [{
        key: "parseError",
        value: function parseError(error) {
          var ret = JSON.parse(JSON.stringify(error));
          return ret;
        }
      }]);

      return WebApi;
    }();
    /***/

  },

  /***/
  "./src/app/forms/form-validation.ts":
  /*!******************************************!*\
    !*** ./src/app/forms/form-validation.ts ***!
    \******************************************/

  /*! exports provided: FormValidation */

  /***/
  function srcAppFormsFormValidationTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FormValidation", function () {
      return FormValidation;
    });
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _errors_webapi__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ../errors/webapi */
    "./src/app/errors/webapi.ts");

    var FormValidation =
    /*#__PURE__*/
    function () {
      function FormValidation() {
        _classCallCheck(this, FormValidation);
      }

      _createClass(FormValidation, [{
        key: "fetchFieldErrors",
        value: function fetchFieldErrors(data, field) {
          var errors = {};
          data[field].forEach(function (e) {
            var name = e.error;
            delete e.error;
            errors[name] = e;
          });
          return errors;
        }
      }], [{
        key: "getErrors",
        value: function getErrors(control) {
          return Object.keys(control.errors).filter(function (error) {
            return control.errors[error];
          }).map(function (error) {
            var params = control.errors[error];
            return {
              error: error,
              params: params === true || params == {} ? null : params
            };
          });
        }
      }, {
        key: "findFieldControl",
        value: function findFieldControl(field, theForm) {
          var control;

          if (field === 'base') {
            control = theForm;
          } else if (theForm.contains(field)) {
            control = theForm.get(field);
          } else if (field.match(/_id$/) && theForm.contains(field.substring(0, field.length - 3))) {
            control = theForm.get(field.substring(0, field.length - 3));
          } else if (field.indexOf('.') > 0) {
            var group = theForm;
            field.split('.').forEach(function (f) {
              if (group.contains(f)) {
                control = group.get(f);
                if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) group = control;
              } else {
                control = group;
              }
            });
          } else {
            // Field is not defined in form but there is a validation error for it, set it globally
            control = theForm;
          }

          return control;
        }
      }, {
        key: "validateAllFormFields",
        value: function validateAllFormFields(formGroup) {
          Object.keys(formGroup.controls).forEach(function (field) {
            var control = formGroup.get(field);

            if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormControl"]) {
              control.markAsTouched({
                onlySelf: true
              });
            } else if (control instanceof _angular_forms__WEBPACK_IMPORTED_MODULE_0__["FormGroup"]) {
              FormValidation.validateAllFormFields(control);
            }
          });
        }
      }, {
        key: "parseSubmitErrors",
        value: function parseSubmitErrors(reason, theForm) {
          var err = _errors_webapi__WEBPACK_IMPORTED_MODULE_1__["WebApi"].parseError(reason.error);

          Object.keys(err.modelState).forEach(function (key) {
            var notice = {};
            notice[key] = err.modelState[key][0];
            var control = FormValidation.findFieldControl(key, theForm);
            control.setErrors(notice);
          });
        }
      }]);

      return FormValidation;
    }();
    /***/

  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
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

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent.ɵfac = function HomeComponent_Factory(t) {
      return new (t || HomeComponent)();
    };

    HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: HomeComponent,
      selectors: [["app-home"]],
      decls: 8,
      vars: 0,
      consts: [[1, "hero"], [1, "container"]],
      template: function HomeComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Welcome to");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "your Musica Pristina");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "A Cappella III");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }
      },
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2hvbWUvaG9tZS5jb21wb25lbnQuc2NzcyJ9 */"]
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
        return [];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/models/enum-subnet-mask.ts":
  /*!********************************************!*\
    !*** ./src/app/models/enum-subnet-mask.ts ***!
    \********************************************/

  /*! exports provided: SubnetMask */

  /***/
  function srcAppModelsEnumSubnetMaskTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubnetMask", function () {
      return SubnetMask;
    });

    var SubnetMask;

    (function (SubnetMask) {
      SubnetMask[SubnetMask["128.0.0.0"] = 1] = "128.0.0.0";
      SubnetMask[SubnetMask["192.0.0.0"] = 2] = "192.0.0.0";
      SubnetMask[SubnetMask["224.0.0.0"] = 3] = "224.0.0.0";
      SubnetMask[SubnetMask["240.0.0.0"] = 4] = "240.0.0.0";
      SubnetMask[SubnetMask["248.0.0.0"] = 5] = "248.0.0.0";
      SubnetMask[SubnetMask["252.0.0.0"] = 6] = "252.0.0.0";
      SubnetMask[SubnetMask["254.0.0.0"] = 7] = "254.0.0.0";
      SubnetMask[SubnetMask["255.0.0.0"] = 8] = "255.0.0.0";
      SubnetMask[SubnetMask["255.128.0.0"] = 9] = "255.128.0.0";
      SubnetMask[SubnetMask["255.192.0.0"] = 10] = "255.192.0.0";
      SubnetMask[SubnetMask["255.224.0.0"] = 11] = "255.224.0.0";
      SubnetMask[SubnetMask["255.240.0.0"] = 12] = "255.240.0.0";
      SubnetMask[SubnetMask["255.248.0.0"] = 13] = "255.248.0.0";
      SubnetMask[SubnetMask["255.252.0.0"] = 14] = "255.252.0.0";
      SubnetMask[SubnetMask["255.254.0.0"] = 15] = "255.254.0.0";
      SubnetMask[SubnetMask["255.255.0.0"] = 16] = "255.255.0.0";
      SubnetMask[SubnetMask["255.255.128.0"] = 17] = "255.255.128.0";
      SubnetMask[SubnetMask["255.255.192.0"] = 18] = "255.255.192.0";
      SubnetMask[SubnetMask["255.255.224.0"] = 19] = "255.255.224.0";
      SubnetMask[SubnetMask["255.255.240.0"] = 20] = "255.255.240.0";
      SubnetMask[SubnetMask["255.255.248.0"] = 21] = "255.255.248.0";
      SubnetMask[SubnetMask["255.255.252.0"] = 22] = "255.255.252.0";
      SubnetMask[SubnetMask["255.255.254.0"] = 23] = "255.255.254.0";
      SubnetMask[SubnetMask["255.255.255.0"] = 24] = "255.255.255.0";
      SubnetMask[SubnetMask["255.255.255.128"] = 25] = "255.255.255.128";
      SubnetMask[SubnetMask["255.255.255.192"] = 26] = "255.255.255.192";
      SubnetMask[SubnetMask["255.255.255.224"] = 27] = "255.255.255.224";
      SubnetMask[SubnetMask["255.255.255.240"] = 28] = "255.255.255.240";
      SubnetMask[SubnetMask["255.255.255.248"] = 29] = "255.255.255.248";
      SubnetMask[SubnetMask["255.255.255.252"] = 30] = "255.255.255.252";
      SubnetMask[SubnetMask["255.255.255.254"] = 31] = "255.255.255.254";
      SubnetMask[SubnetMask["255.255.255.255"] = 32] = "255.255.255.255";
    })(SubnetMask || (SubnetMask = {}));
    /***/

  },

  /***/
  "./src/app/models/output.ts":
  /*!**********************************!*\
    !*** ./src/app/models/output.ts ***!
    \**********************************/

  /*! exports provided: Output */

  /***/
  function srcAppModelsOutputTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Output", function () {
      return Output;
    });

    var Output = function Output(jsonData) {
      _classCallCheck(this, Output);

      this.output = "";
      this.dop = false;
      this.volume = false;
      this.bufferDuration = 0.04;
      this.maxBits = 32;
      Object.assign(this, jsonData);
    };
    /***/

  },

  /***/
  "./src/app/network/network.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/network/network.component.ts ***!
    \**********************************************/

  /*! exports provided: NetworkComponent */

  /***/
  function srcAppNetworkNetworkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NetworkComponent", function () {
      return NetworkComponent;
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


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _bottom_sheet_data_bottom_sheet_data_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../bottom-sheet-data/bottom-sheet-data.component */
    "./src/app/bottom-sheet-data/bottom-sheet-data.component.ts");
    /* harmony import */


    var _forms_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../forms/form-validation */
    "./src/app/forms/form-validation.ts");
    /* harmony import */


    var _models_enum_subnet_mask__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../models/enum-subnet-mask */
    "./src/app/models/enum-subnet-mask.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_select__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/select */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/select.js");
    /* harmony import */


    var _angular_material_core__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! @angular/material/core */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    function NetworkComponent_form_3_ng_template_2_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Select between ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "DHCP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, ", where your router assigns the A Cappella III an IP Address, and ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Static");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ", where you assign the IP address manually. ");
      }
    }

    function NetworkComponent_form_3_ng_template_17_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Enter your desired ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "IP Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " when the network type is set to ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Static");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ". (Note: When set to ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "DHCP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ", this field is disabled and the current IP address is seen here. ");
      }
    }

    function NetworkComponent_form_3_ng_template_28_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Enter your desired ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Subnet Mask");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " when the network type is set to ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Static");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ". (Note: When set to ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "DHCP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ", this field is disabled and the current ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Subnet Mask");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " is seen here. ");
      }
    }

    function NetworkComponent_form_3_mat_option_38_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "mat-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var mask_r27 = ctx.$implicit;

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", mask_r27.value);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](mask_r27.value);
      }
    }

    function NetworkComponent_form_3_ng_template_40_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Enter your desired ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Gateway");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " when the network type is set to ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Static");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ". (Note: When set to ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "DHCP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ", this field is disabled and the current ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Gateway");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " is seen here. ");
      }
    }

    function NetworkComponent_form_3_ng_template_51_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](0, "Enter your desired ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "DNS Server");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " when the network type is set to ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Static");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, ". (Note: When set to ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "DHCP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, ", this field is disabled and the current ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "DNS Server");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " is seen here. ");
      }
    }

    function NetworkComponent_form_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r29 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function NetworkComponent_form_3_Template_form_ngSubmit_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r28 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r28.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](2, NetworkComponent_form_3_ng_template_2_Template, 7, 0, "ng-template", null, 4, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Network Type");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "info");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-select", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "DHCP");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-option", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Static");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, NetworkComponent_form_3_ng_template_17_Template, 10, 0, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "IP Address");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "info");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "input", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](28, NetworkComponent_form_3_ng_template_28_Template, 13, 0, "ng-template", null, 12, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "label", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, "Subnet Mask");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "info");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "mat-select", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](38, NetworkComponent_form_3_mat_option_38_Template, 2, 2, "mat-option", 13);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](40, NetworkComponent_form_3_ng_template_40_Template, 13, 0, "ng-template", null, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "label", 15);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Gateway");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "info");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](47, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "input", 16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](51, NetworkComponent_form_3_ng_template_51_Template, 13, 0, "ng-template", null, 17, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "label", 18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "DNS Server");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "span", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "mat-icon");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "info");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](58, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "input", 19);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "button", 21);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NetworkComponent_form_3_Template_button_click_62_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r29);

          var ctx_r30 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r30.undo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, "Reset");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "button", 22);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, "Save and apply");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var _r16 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](3);

        var _r18 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](18);

        var _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](29);

        var _r23 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](41);

        var ctx_r15 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r15.theForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbPopover", _r16);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r15.type);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 0);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", 1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbPopover", _r18);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r15.ip);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbPopover", _r20);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r15.sm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx_r15.masks);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbPopover", _r23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r15.gw);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngbPopover", _r23);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r15.dns_1);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r15.save_disabled);
      }
    }

    var NetworkComponent =
    /*#__PURE__*/
    function () {
      function NetworkComponent(fb, service, // public dialogRef: MatDialogRef<NetworkComponent>,
      bottomSheet) {
        _classCallCheck(this, NetworkComponent);

        this.fb = fb;
        this.service = service;
        this.bottomSheet = bottomSheet;
        this.masks = [];
        this.saving = false;
        var values = Object.keys(_models_enum_subnet_mask__WEBPACK_IMPORTED_MODULE_6__["SubnetMask"]).filter(function (key) {
          return !isNaN(Number(key));
        }).map(function (key) {
          var value = _models_enum_subnet_mask__WEBPACK_IMPORTED_MODULE_6__["SubnetMask"][key]; // let kvp = { key, val } (KeyValue<number, string>)

          return {
            key: key,
            value: value
          };
        });
        this.masks = values;
      }

      _createClass(NetworkComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.service.network$().subscribe(function (result) {
            _this3.createForm(result.data);
          }, function (error) {
            console.log(error);

            _this3.createForm(null);
          });
        }
      }, {
        key: "cancel",
        value: function cancel() {// this.dialogRef.close();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this4 = this;

          if (this.theForm.valid) {
            this.saving = true;
            this.model = this.getFormValues();
            this.service.networkSave$(this.model).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(function (err, caught) {
              _forms_form_validation__WEBPACK_IMPORTED_MODULE_5__["FormValidation"].parseSubmitErrors(err, _this4.theForm);

              _this4.saving = false;
              return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
            })).subscribe(function (result) {
              if (result.success) {
                if (_this4.model.type === 0
                /* DHCP */
                ) {
                    var msg = "We're unable to get the new IP Address when you change to DHCP. We'll try taking you to 'mp.local', but you may need to look up the IP in your router.";

                    _this4.bottomSheet.open(_bottom_sheet_data_bottom_sheet_data_component__WEBPACK_IMPORTED_MODULE_4__["BottomSheetDataComponent"], {
                      data: {
                        message: msg,
                        progress: true
                      }
                    });

                    setTimeout(function () {
                      window.location.href = 'http://mp.local';
                    }, 2000);
                  } else {
                  if (result.data.ip !== window.location.hostname) {
                    var _msg = "We're updating the ip address to '".concat(result.data.ip, "'. We'll redirect you there shortly.");

                    _this4.bottomSheet.open(_bottom_sheet_data_bottom_sheet_data_component__WEBPACK_IMPORTED_MODULE_4__["BottomSheetDataComponent"], {
                      data: {
                        message: _msg,
                        progress: true
                      }
                    });

                    setTimeout(function () {
                      window.location.href = 'http://' + result.data.ip;
                    }, 2000);
                  } else {
                    _this4.bottomSheet.open(_bottom_sheet_data_bottom_sheet_data_component__WEBPACK_IMPORTED_MODULE_4__["BottomSheetDataComponent"], {
                      data: {
                        message: 'The network settings have been updated.',
                        progress: false
                      }
                    });
                  }
                }
              } else {
                _this4.bottomSheet.open(_bottom_sheet_data_bottom_sheet_data_component__WEBPACK_IMPORTED_MODULE_4__["BottomSheetDataComponent"], {
                  data: {
                    message: result.message,
                    progress: false
                  }
                });
              }

              _this4.saving = false;
            });
          } else {
            _forms_form_validation__WEBPACK_IMPORTED_MODULE_5__["FormValidation"].validateAllFormFields(this.theForm);
          }
        }
      }, {
        key: "createForm",
        value: function createForm(model) {
          var _this5 = this;

          if (this.theForm) {
            this.model = model;
            this.theForm.reset(this.getModelValues());
          } else {
            if (model) {
              this.theForm = this.fb.group({
                ip: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                  value: model.ip,
                  disabled: model.type === 0
                  /* DHCP */

                }),
                sm: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                  value: model.sm,
                  disabled: model.type === 0
                  /* DHCP */

                }),
                gw: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                  value: model.gw,
                  disabled: model.type === 0
                  /* DHCP */

                }),
                dns_1: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                  value: model.dns_1,
                  disabled: model.type === 0
                  /* DHCP */

                }),
                dns_2: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({
                  value: model.dns_2,
                  disabled: model.type === 0
                  /* DHCP */

                }),
                type: model.type
              });
              this.type.valueChanges.subscribe(function (result) {
                _this5.setControlState(_this5.type.value === 1
                /* Static */
                );
              });
            } else {
              this.theForm = this.fb.group({
                ip: '',
                sm: '',
                gw: '',
                dns_1: '',
                dns_2: '',
                type: 0
              });
            }

            this.model = model;
          }
        }
      }, {
        key: "getFormValues",
        value: function getFormValues() {
          var formModel = this.theForm.value;
          var saveModel = {
            ip: formModel.ip,
            // sm: SubnetMask[formModel.sm],
            sm: formModel.sm,
            gw: formModel.gw,
            dns_1: formModel.dns_1,
            dns_2: formModel.dns_2,
            type: formModel.type
          };
          return saveModel;
        }
      }, {
        key: "getModelValues",
        value: function getModelValues() {
          return {
            ip: this.model.ip,
            sm: this.model.sm,
            gw: this.model.gw,
            dns_1: this.model.dns_1,
            dns_2: this.model.dns_2,
            type: this.model.type
          };
        }
      }, {
        key: "undo",
        value: function undo() {
          this.theForm.reset(this.model);
        }
      }, {
        key: "setControlState",
        value: function setControlState(enable) {
          if (enable) {
            this.ip.enable();
            this.sm.enable();
            this.gw.enable();
            this.dns_1.enable();
          } else {
            this.ip.disable();
            this.sm.disable();
            this.gw.disable();
            this.dns_1.disable();
          }
        } // Form Control Helpers

      }, {
        key: "static",
        get: function get() {
          return this.type.value === 1;
        }
      }, {
        key: "ip",
        get: function get() {
          return this.theForm.get('ip');
        }
      }, {
        key: "sm",
        get: function get() {
          return this.theForm.get('sm');
        }
      }, {
        key: "gw",
        get: function get() {
          return this.theForm.get('gw');
        }
      }, {
        key: "dns_1",
        get: function get() {
          return this.theForm.get('dns_1');
        }
      }, {
        key: "dns_2",
        get: function get() {
          return this.theForm.get('dns_2');
        }
      }, {
        key: "type",
        get: function get() {
          return this.theForm.get('type');
        }
      }, {
        key: "save_disabled",
        get: function get() {
          return this.theForm.pristine || this.saving;
        }
      }]);

      return NetworkComponent;
    }();

    NetworkComponent.ɵfac = function NetworkComponent_Factory(t) {
      return new (t || NetworkComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheet"]));
    };

    NetworkComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: NetworkComponent,
      selectors: [["app-network"]],
      decls: 4,
      vars: 1,
      consts: [["id", "section-network", 1, "container", "flex-fill"], ["class", "detail-component", "novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["novalidate", "", 1, "detail-component", 3, "formGroup", "ngSubmit"], [1, "form-group", "mt-3"], ["popoverType", ""], ["for", "type", "id", "typelabel"], ["placement", "bottom", 1, "ml-1", 3, "ngbPopover"], [3, "formControl"], [3, "value"], ["popoverIP", ""], ["matInput", "", 3, "formControl"], [1, "-form-group"], ["popoverSM", ""], [3, "value", 4, "ngFor", "ngForOf"], ["popoverGW", ""], ["for", "gw", "id", "gwlabel"], ["matInput", "", "name", "gw", 3, "formControl"], ["popoverDNS", ""], ["for", "dns", "id", "dnslabel"], ["matInput", "", "name", "dns", 3, "formControl"], [1, "form-group", "form-actions", "mt-3"], ["type", "button", 1, "btn", "btn-secondary", "btn-lg", "mr-2", 3, "click"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", 3, "disabled"]],
      template: function NetworkComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Network Setup");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, NetworkComponent_form_3_Template, 66, 15, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_10__["NgbPopover"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_11__["MatIcon"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_12__["MatFormField"], _angular_material_select__WEBPACK_IMPORTED_MODULE_13__["MatSelect"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"], _angular_material_core__WEBPACK_IMPORTED_MODULE_14__["MatOption"], _angular_material_input__WEBPACK_IMPORTED_MODULE_15__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25ldHdvcmsvbmV0d29yay5jb21wb25lbnQuc2NzcyJ9 */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NetworkComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-network',
          templateUrl: './network.component.html',
          styleUrls: ['./network.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_7__["ApiService"]
        }, {
          type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheet"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/registration/registration.component.ts":
  /*!********************************************************!*\
    !*** ./src/app/registration/registration.component.ts ***!
    \********************************************************/

  /*! exports provided: RegistrationComponent */

  /***/
  function srcAppRegistrationRegistrationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function () {
      return RegistrationComponent;
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


    var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/dialog */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/dialog.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _forms_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../forms/form-validation */
    "./src/app/forms/form-validation.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/form-field */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");

    function RegistrationComponent_form_3_Template(rf, ctx) {
      if (rf & 1) {
        var _r33 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function RegistrationComponent_form_3_Template_form_ngSubmit_0_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var ctx_r32 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r32.onSubmit();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "input", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "input", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "input", 6);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "input", 8);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "mat-form-field");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 10);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegistrationComponent_form_3_Template_button_click_17_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r33);

          var ctx_r34 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r34.undo();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Reset");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Save and apply");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r31 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx_r31.theForm);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r31.name);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r31.email);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r31.purchase_date);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r31.serial_number);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r31.device_id);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r31.firmware);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formControl", ctx_r31.unitmodel);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r31.save_disabled);
      }
    }

    var RegistrationComponent =
    /*#__PURE__*/
    function () {
      function RegistrationComponent(fb, service, data) {
        _classCallCheck(this, RegistrationComponent);

        this.fb = fb;
        this.service = service;
        this.data = data;
        this.saving = false;
      }

      _createClass(RegistrationComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this6 = this;

          this.service.registration$().subscribe(function (result) {
            _this6.createForm(result.data);
          });
        }
      }, {
        key: "cancel",
        value: function cancel() {} // save() {
        //   const data = new Registration();
        //   data.name = this.name;
        //   data.email = this.email;
        //   console.log("registration save");
        //   console.log(data);
        //   this.service.registrationSave$(data).subscribe(result => {
        //     console.log(result);
        //   })
        //   //TODO: notify
        //   this.dialogRef.close();
        // }

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this7 = this;

          if (this.theForm.valid) {
            this.saving = true; // this.errorMessages = null;
            // this.saving$ = true;
            // this.submitted$ = true;

            this.service.registrationSave$(this.getFormValues()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (err, caught) {
              _forms_form_validation__WEBPACK_IMPORTED_MODULE_5__["FormValidation"].parseSubmitErrors(err, _this7.theForm);

              _this7.saving = false; // return Observable.empty();

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null);
            })).subscribe(function (savedData) {
              if (savedData.success) {
                console.log(savedData); // TODO: notify
              } else {
                console.log('.subscribe(savedData => { HAS NO DATA???');
                console.log(savedData);
              }

              _this7.saving = false;
            });
          } else {
            _forms_form_validation__WEBPACK_IMPORTED_MODULE_5__["FormValidation"].validateAllFormFields(this.theForm);
          }
        }
      }, {
        key: "createForm",
        value: function createForm(_model) {
          if (this.theForm) {
            this.model = _model;
            this.theForm.reset(this.getModelValues());
          } else {
            this.theForm = this.fb.group({
              name: [_model.name, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              email: [_model.email, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              purchase_date: [{
                value: _model.purchase_date,
                disabled: !_model.first_use
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              serial_number: [{
                value: _model.serial_number,
                disabled: !_model.first_use
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              device_id: [{
                value: _model.device_id,
                disabled: !_model.first_use
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              firmware: [{
                value: _model.firmware,
                disabled: !_model.first_use
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required],
              model: [{
                value: _model.model,
                disabled: !_model.first_use
              }, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
            });
            this.model = _model;
          }
        }
      }, {
        key: "getFormValues",
        value: function getFormValues() {
          var formModel = this.theForm.value;
          var saveModel;

          if (this.model.first_use) {
            saveModel = {
              name: formModel.name,
              email: formModel.email,
              purchase_date: formModel.purchase_date,
              serial_number: formModel.serial_number,
              device_id: formModel.device_id,
              firmware: formModel.firmware,
              model: formModel.model,
              first_use: false
            };
          } else {
            saveModel = {
              name: formModel.name,
              email: formModel.email,
              purchase_date: this.model.purchase_date,
              serial_number: this.model.serial_number,
              device_id: this.model.device_id,
              firmware: this.model.firmware,
              model: this.model.model,
              first_use: false
            };
          }

          return saveModel;
        }
      }, {
        key: "getModelValues",
        value: function getModelValues() {
          return {
            name: this.model.name,
            email: this.model.email,
            purchaseDate: this.model.purchase_date,
            serialNumber: this.model.serial_number,
            device_id: this.model.device_id,
            firmware: this.model.firmware,
            model: this.model.model,
            first_use: false
          };
        }
      }, {
        key: "undo",
        value: function undo() {
          this.theForm.reset(this.model);
        } // Form Control Helpers

      }, {
        key: "name",
        get: function get() {
          return this.theForm.get('name');
        }
      }, {
        key: "email",
        get: function get() {
          return this.theForm.get('email');
        }
      }, {
        key: "purchase_date",
        get: function get() {
          return this.theForm.get('purchase_date');
        }
      }, {
        key: "serial_number",
        get: function get() {
          return this.theForm.get('serial_number');
        }
      }, {
        key: "device_id",
        get: function get() {
          return this.theForm.get('device_id');
        }
      }, {
        key: "firmware",
        get: function get() {
          return this.theForm.get('firmware');
        }
      }, {
        key: "unitmodel",
        get: function get() {
          return this.theForm.get('model');
        }
      }, {
        key: "save_disabled",
        get: function get() {
          return this.theForm.pristine || this.saving;
        }
      }]);

      return RegistrationComponent;
    }();

    RegistrationComponent.ɵfac = function RegistrationComponent_Factory(t) {
      return new (t || RegistrationComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]));
    };

    RegistrationComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: RegistrationComponent,
      selectors: [["app-registration"]],
      decls: 4,
      vars: 1,
      consts: [["id", "section-network", 1, "container", "flex-fill"], ["class", "detail-component", "novalidate", "", 3, "formGroup", "ngSubmit", 4, "ngIf"], ["novalidate", "", 1, "detail-component", 3, "formGroup", "ngSubmit"], ["matInput", "", "placeholder", "Owner's Name", 3, "formControl"], ["matInput", "", "placeholder", "Owner's Email", 3, "formControl"], ["matInput", "", "placeholder", "Purchase Date", 3, "formControl"], ["matInput", "", "placeholder", "Serial #", 3, "formControl"], ["matInput", "", "placeholder", "Device ID", 3, "formControl"], ["matInput", "", "placeholder", "Firmware Version", 3, "formControl"], ["matInput", "", "placeholder", "Model", 3, "formControl"], [1, "form-group", "form-actions"], ["type", "button", 1, "btn", "btn-secondary", "btn-lg", "mr-2", 3, "click"], ["type", "submit", 1, "btn", "btn-lg", "btn-primary", 3, "disabled"]],
      template: function RegistrationComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Registration ");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, RegistrationComponent_form_3_Template, 21, 9, "form", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.model);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormField"], _angular_material_input__WEBPACK_IMPORTED_MODULE_9__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlDirective"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3JlZ2lzdHJhdGlvbi9yZWdpc3RyYXRpb24uY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegistrationComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: 'app-registration',
          templateUrl: './registration.component.html',
          styleUrls: ['./registration.component.scss']
        }]
      }], function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]
        }, {
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_6__["ApiService"]
        }, {
          type: undefined,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"],
            args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]]
          }]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/api.service.ts":
  /*!*****************************************!*\
    !*** ./src/app/services/api.service.ts ***!
    \*****************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _models_output__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../models/output */
    "./src/app/models/output.ts");
    /* harmony import */


    var _service_result__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./service-result */
    "./src/app/services/service-result.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");

    var ApiService =
    /*#__PURE__*/
    function () {
      /**
       * Construct a new Base Service for a Type (Table) and its ReadOnly partner.
       */
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
      }

      _createClass(ApiService, [{
        key: "getMaxRate$",
        value: function getMaxRate$() {
          throw new Error("Method not implemented.");
        } // public home$(): Observable<MPConfig> {
        //   return this.http.get<ServiceResult<MPConfig>>('/api/home')
        //     .pipe(
        //       map(result => {
        //         this.log('GET: /api/home', result);
        //         return new MPConfig(result.data);
        //       })
        //     );
        // }

      }, {
        key: "getMotd$",
        value: function getMotd$() {
          var _this8 = this;

          return this.http.get("/api/system/motd", {
            responseType: "text"
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this8.log("GET: /api/system/motd", result);

            return result;
          }));
        }
      }, {
        key: "getUpdateRequired$",
        value: function getUpdateRequired$() {
          var _this9 = this;

          return this.http.get("/api/system/update").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this9.log("GET: /api/system/update", result);

            return result;
          }));
        }
      }, {
        key: "doUpdate$",
        value: function doUpdate$() {
          var _this10 = this;

          return this.http.post("/api/system/update", null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this10.log("POST: /api/system/update", result);

            return result;
          }));
        }
      }, {
        key: "network$",
        value: function network$() {
          var _this11 = this;

          return this.http.get("/api/network/config").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this11.log("GET: /api/network/config", result);

            return new _service_result__WEBPACK_IMPORTED_MODULE_4__["ServiceResult"](result, "", true);
          }));
        }
      }, {
        key: "networkSave$",
        value: function networkSave$(data) {
          var _this12 = this;

          return this.http.post("/api/network/config", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this12.log("POST: /api/network/config", result); // let data = new Network(result.data);
            // let msg = result.message;
            // let success = result.success;
            // return new ServiceResult<Network>(data, msg, success);


            return new _service_result__WEBPACK_IMPORTED_MODULE_4__["ServiceResult"](result, "", true);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("PUT: /api/network/config")));
        }
      }, {
        key: "registration$",
        value: function registration$() {
          var _this13 = this;

          // const reg = new Registration({
          //   first_use: false,
          //   name: 'Musica Pristina',
          //   email: 'alwayslistening@musicapristina.com',
          //   serial_number: '01197520',
          //   purchase_date: '2020-01-01',
          //   firmware: 'v3.0.1',
          //   device_id: 'ad4ed521-ac25-4ab2-92fa-829f9cb65f34',
          //   model: 'A Cappella III',
          // });
          // const rslt = new ServiceResult(reg);
          // return of(rslt);
          return this.http.get("/api/system/registration").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this13.log("GET: /api/system/registration", result);

            return new _service_result__WEBPACK_IMPORTED_MODULE_4__["ServiceResult"](result, "", true);
          }));
        }
      }, {
        key: "registrationSave$",
        value: function registrationSave$(data) {
          var _this14 = this;

          return this.http.post("/api/system/registration", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this14.log("POST: /api/system/registration", result); // const data = new Registration(result.data);
            // const msg = 'You\'ve successfully updated your registration.';
            // const success = true;


            return new _service_result__WEBPACK_IMPORTED_MODULE_4__["ServiceResult"](result, "", true);
          }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(this.handleError("POST: /api/system/registration")));
        }
      }, {
        key: "getAudioConfig$",
        value: function getAudioConfig$() {
          var _this15 = this;

          return this.http.get("/api/audio/config").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this15.log("GET: /api/audio/config", result);

            return new _service_result__WEBPACK_IMPORTED_MODULE_4__["ServiceResult"](result, "", true);
          }));
        }
      }, {
        key: "putAudioConfig$",
        value: function putAudioConfig$(data) {
          var _this16 = this;

          return this.http.post("/api/audio/config", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this16.log("POST: /api/audio/config", result);

            return result;
          }));
        }
      }, {
        key: "ouput1$",
        value: function ouput1$() {
          var ret = new _models_output__WEBPACK_IMPORTED_MODULE_3__["Output"]();
          var result = new _service_result__WEBPACK_IMPORTED_MODULE_4__["ServiceResult"]();
          result.data = ret;
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
        }
      }, {
        key: "oscOCXO$",
        value: function oscOCXO$() {
          var _this17 = this;

          return this.http.get("/api/ocxo").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this17.log("GET: /api/ocxo", result);

            return result.data;
          }));
        }
      }, {
        key: "oscDFXO$",
        value: function oscDFXO$() {
          var _this18 = this;

          return this.http.get("/api/dfxo").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (result) {
            _this18.log("GET: /api/dfxo", result);

            return result.data;
          }));
        }
      }, {
        key: "log",
        value: function log(message, data) {
          if (true) {
            console.log(message);
            console.log(data);
          }
        }
        /**
         * Handle Http operation that failed.
         * Let the app continue.
         * @param operation - name of the operation that failed
         * @param result - optional value to return as the observable result
         */

      }, {
        key: "handleError",
        value: function handleError() {
          var _this19 = this;

          var operation = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "operation";
          var result = arguments.length > 1 ? arguments[1] : undefined;
          return function (error) {
            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead
            // TODO: better job of transforming error for user consumption

            _this19.log("".concat(operation, " failed: ").concat(error.message), result); // Let the app keep running by returning an empty result.


            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(result);
          };
        }
      }]);

      return ApiService;
    }();

    ApiService.ɵfac = function ApiService_Factory(t) {
      return new (t || ApiService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]));
    };

    ApiService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ApiService,
      factory: ApiService.ɵfac,
      providedIn: "root"
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ApiService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
          providedIn: "root"
        }]
      }], function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/app/services/http-interceptors-barrel.ts":
  /*!******************************************************!*\
    !*** ./src/app/services/http-interceptors-barrel.ts ***!
    \******************************************************/

  /*! exports provided: httpInterceptorProviders */

  /***/
  function srcAppServicesHttpInterceptorsBarrelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "httpInterceptorProviders", function () {
      return httpInterceptorProviders;
    });
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _serviceurl_interceptor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./serviceurl-interceptor */
    "./src/app/services/serviceurl-interceptor.ts");
    /* "Barrel" of Http Interceptors */

    /** Http interceptor providers in outside-in order */


    var httpInterceptorProviders = [{
      provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HTTP_INTERCEPTORS"],
      useClass: _serviceurl_interceptor__WEBPACK_IMPORTED_MODULE_1__["ServiceURLInterceptor"],
      multi: true
    }];
    /***/
  },

  /***/
  "./src/app/services/service-result.ts":
  /*!********************************************!*\
    !*** ./src/app/services/service-result.ts ***!
    \********************************************/

  /*! exports provided: ServiceResult */

  /***/
  function srcAppServicesServiceResultTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceResult", function () {
      return ServiceResult;
    });

    var ServiceResult = function ServiceResult(data) {
      var message = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
      var success = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

      _classCallCheck(this, ServiceResult);

      this.data = data;
      this.message = message;
      this.success = success;
    };
    /***/

  },

  /***/
  "./src/app/services/serviceurl-interceptor.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/serviceurl-interceptor.ts ***!
    \****************************************************/

  /*! exports provided: ServiceURLInterceptor */

  /***/
  function srcAppServicesServiceurlInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ServiceURLInterceptor", function () {
      return ServiceURLInterceptor;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! src/environments/environment */
    "./src/environments/environment.ts");
    /** Pass untouched request through to the next request handler. */


    var ServiceURLInterceptor =
    /*#__PURE__*/
    function () {
      function ServiceURLInterceptor() {
        _classCallCheck(this, ServiceURLInterceptor);
      }

      _createClass(ServiceURLInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          // clone request and replace 'http://' with 'https://' at the same time
          console.log(req.url);
          var secureReq = req.clone({
            url: (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production ? window.location.origin : src_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].prefixURL) + req.url
          }); // send the cloned, "secure" request to the next handler.

          return next.handle(secureReq);
        }
      }]);

      return ServiceURLInterceptor;
    }();

    ServiceURLInterceptor.ɵfac = function ServiceURLInterceptor_Factory(t) {
      return new (t || ServiceURLInterceptor)();
    };

    ServiceURLInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      token: ServiceURLInterceptor,
      factory: ServiceURLInterceptor.ɵfac
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ServiceURLInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
      }], null, null);
    })();
    /***/

  },

  /***/
  "./src/app/update/update.component.ts":
  /*!********************************************!*\
    !*** ./src/app/update/update.component.ts ***!
    \********************************************/

  /*! exports provided: UpdateComponent */

  /***/
  function srcAppUpdateUpdateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UpdateComponent", function () {
      return UpdateComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _bottom_sheet_data_bottom_sheet_data_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../bottom-sheet-data/bottom-sheet-data.component */
    "./src/app/bottom-sheet-data/bottom-sheet-data.component.ts");
    /* harmony import */


    var _services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/api.service */
    "./src/app/services/api.service.ts");
    /* harmony import */


    var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/material/bottom-sheet */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/bottom-sheet.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/progress-bar */
    "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/progress-bar.js");

    function UpdateComponent_div_3_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Checking for updates... ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "br");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "mat-progress-bar", 3);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    function UpdateComponent_div_4_Template(rf, ctx) {
      if (rf & 1) {
        var _r39 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " We found an update. Click the button below to update your system. Please note: ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "ul");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "This may take a while: 2 minutes is not unlikely.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Losing power now would be bad: please wait to update if there's a risk of a power outage.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Updates are good: we roll out new features and fixes through our updates.");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "button", 4);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function UpdateComponent_div_4_Template_button_click_9_listener($event) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r39);

          var ctx_r38 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

          return ctx_r38.doUpdate();
        });

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Update Now");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }

      if (rf & 2) {
        var ctx_r36 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](9);

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", ctx_r36.updating);
      }
    }

    function UpdateComponent_div_5_Template(rf, ctx) {
      if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " Looks like you're up to date. ");

        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
      }
    }

    var UpdateComponent =
    /*#__PURE__*/
    function () {
      function UpdateComponent(service, bottomSheet) {
        _classCallCheck(this, UpdateComponent);

        this.service = service;
        this.bottomSheet = bottomSheet;
        this.isUpdateRequired = false;
        this.isCheckingUpdateRequired = true;
        this.motd = "";
        this.updating = false;
      }

      _createClass(UpdateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this20 = this;

          var sub1 = this.service.getUpdateRequired$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (result) {
            _this20.isUpdateRequired = result;
            _this20.isCheckingUpdateRequired = false;
          })).subscribe(function (result) {}, function (error) {
            console.log(error);
          });
          this.subs.push(sub1);
          var sub2 = this.service.getMotd$().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["tap"])(function (result) {
            _this20.motd = result;
          })).subscribe(function (result) {}, function (error) {
            console.log(error);
          });
          this.subs.push(sub2);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subs.forEach(function (sub) {
            sub.unsubscribe();
          });
        }
      }, {
        key: "doUpdate",
        value: function doUpdate() {
          var _this21 = this;

          this.updating = true;
          this.service.doUpdate$().subscribe(function (result) {
            var msg = "";

            if (result) {
              msg = "We got the update and are applying it now. We'll refresh the page, but if the update takes a long time, you may need to refresh the page yourself in about 2 minutes.";
            } else {
              msg = "Seems like you might already be up to date. We're going to refresh the page and check again.";
            }

            _this21.bottomSheet.open(_bottom_sheet_data_bottom_sheet_data_component__WEBPACK_IMPORTED_MODULE_2__["BottomSheetDataComponent"], {
              data: {
                message: msg,
                progress: true
              }
            });

            setTimeout(function () {
              _this21.updating = true;
              window.location.reload();
            }, 2000);
          }, function (error) {
            console.log(error);
          });
        }
      }]);

      return UpdateComponent;
    }();

    UpdateComponent.ɵfac = function UpdateComponent_Factory(t) {
      return new (t || UpdateComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheet"]));
    };

    UpdateComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
      type: UpdateComponent,
      selectors: [["app-update"]],
      decls: 8,
      vars: 4,
      consts: [["id", "section-network", 1, "container", "flex-fill"], [4, "ngIf"], [1, "mt-5"], ["mode", "indeterminate"], ["type", "button", 1, "btn", "btn-primary", 3, "disabled", "click"]],
      template: function UpdateComponent_Template(rf, ctx) {
        if (rf & 1) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "section", 0);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Check for Updates");

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](3, UpdateComponent_div_3_Template, 5, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, UpdateComponent_div_4_Template, 11, 1, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, UpdateComponent_div_5_Template, 2, 0, "div", 1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "pre", 2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        }

        if (rf & 2) {
          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isCheckingUpdateRequired);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCheckingUpdateRequired && ctx.isUpdateRequired);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isCheckingUpdateRequired && !ctx.isUpdateRequired);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

          _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.motd);
        }
      },
      directives: [_angular_common__WEBPACK_IMPORTED_MODULE_5__["NgIf"], _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_6__["MatProgressBar"]],
      styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3VwZGF0ZS91cGRhdGUuY29tcG9uZW50LnNjc3MifQ== */"]
    });
    /*@__PURE__*/

    (function () {
      _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](UpdateComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
          selector: "app-update",
          templateUrl: "./update.component.html",
          styleUrls: ["./update.component.scss"]
        }]
      }], function () {
        return [{
          type: _services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]
        }, {
          type: _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheet"]
        }];
      }, null);
    })();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      prefixURL: 'http://10.0.0.57'
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! /home/kdubious/code/cambiolite/ui/src/main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map