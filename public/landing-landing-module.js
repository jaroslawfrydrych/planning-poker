(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-landing-module"],{

/***/ "H2c/":
/*!***********************************************************!*\
  !*** ./src/app/poker/landing/lading/landing.component.ts ***!
  \***********************************************************/
/*! exports provided: LandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingComponent", function() { return LandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-google-analytics */ "PKRn");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "d7Fm");
/* harmony import */ var _guest_guest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../guest/guest.service */ "lQSW");
/* harmony import */ var _host_host_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../host/host.service */ "+cqM");
/* harmony import */ var _shared_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/layout/layout/layout.component */ "rqBn");
/* harmony import */ var _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/layout/header/header.component */ "6EaX");
/* harmony import */ var _shared_layout_content_content_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/layout/content/content.component */ "hi3J");
/* harmony import */ var _shared_button_button_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/button/button.directive */ "M0Hd");
















class LandingComponent {
    constructor(router, socket, guestService, hostService, $gaService) {
        this.router = router;
        this.socket = socket;
        this.guestService = guestService;
        this.hostService = hostService;
        this.$gaService = $gaService;
    }
    ngOnInit() {
        this.$gaService.pageView('/');
        this.guestService.guestRoom = null;
        this.hostService.hostRoom = null;
    }
    goToGuestPath() {
        this.router.navigateByUrl('/guest');
    }
    goToHostPath() {
        this.router.navigateByUrl('/host');
    }
}
LandingComponent.ɵfac = function LandingComponent_Factory(t) { return new (t || LandingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_guest_guest_service__WEBPACK_IMPORTED_MODULE_4__["GuestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_host_host_service__WEBPACK_IMPORTED_MODULE_5__["HostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_google_analytics__WEBPACK_IMPORTED_MODULE_2__["GoogleAnalyticsService"])); };
LandingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LandingComponent, selectors: [["planning-poker-landing"]], decls: 17, vars: 0, consts: [["planningPokerButton", "", "buttonColor", "secondary", 3, "click"], ["planningPokerButton", "", 3, "click"], [1, "poker-footer"], ["href", "http://haxit.pl/", "target", "_blank"]], template: function LandingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "planning-poker-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "planning-poker-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Planning Poker");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Scrum Game");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "planning-poker-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "button", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_7_listener() { return ctx.goToGuestPath(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Join existing room ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "or");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LandingComponent_Template_button_click_11_listener() { return ctx.goToHostPath(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Create new one ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, " Created by\u00A0");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "haxit");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_6__["LayoutComponent"], _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"], _shared_layout_content_content_component__WEBPACK_IMPORTED_MODULE_8__["ContentComponent"], _shared_button_button_directive__WEBPACK_IMPORTED_MODULE_9__["ButtonDirective"]], styles: ["planning-poker-content[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\nplanning-poker-content[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 0.8333333333em;\n}\nplanning-poker-header[_ngcontent-%COMP%] {\n  position: relative;\n}\nplanning-poker-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2.2222222222em;\n  display: flex;\n  width: 100%;\n}\n.poker-footer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.7777777778em;\n  color: #717171;\n  padding-bottom: 0.8333333333em;\n  margin-top: auto;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvcGxhbm5pbmctcG9rZXIvc3JjL2FwcC9wb2tlci9sYW5kaW5nL2xhZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwiYXBwcy9wbGFubmluZy1wb2tlci9zcmMvc2hhcmVkL0BzdHlsZXMvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UsZ0JBQUE7QUFERjtBQUdFO0VBQ0Usd0JBQUE7QUFESjtBQUtBO0VBQ0Usa0JBQUE7QUFGRjtBQUlFO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxXQUFBO0FBRko7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLFdBQUE7RUFFRSxrQkFBQTtFQUNBLHlCQUFBO0VBRUYsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGNDOUJjO0VEK0JkLDhCQUFBO0VBRUUsZ0JBQUE7RUFDQSxnQkFBQTtBQU5KIiwiZmlsZSI6ImFwcHMvcGxhbm5pbmctcG9rZXIvc3JjL2FwcC9wb2tlci9sYW5kaW5nL2xhZGluZy9sYW5kaW5nLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIkBzdHlsZXMvc2hhcmVkXCI7XG5cbnBsYW5uaW5nLXBva2VyLWNvbnRlbnQge1xuICBmb250LXdlaWdodDogNzAwO1xuXG4gID4gKiB7XG4gICAgbWFyZ2luOiAwIGVtKDE1KTtcbiAgfVxufVxuXG5wbGFubmluZy1wb2tlci1oZWFkZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgaDIge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IGVtKDQwKTtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG59XG5cbi5wb2tlci1mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIGJvdHRvbTogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRleHQ6IHtcbiAgICBhbGlnbjogY2VudGVyO1xuICAgIHRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICB9XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBmb250LXNpemU6IGVtKDE0KTtcbiAgY29sb3I6ICRjb2xvckluYWN0aXZlO1xuICBwYWRkaW5nLWJvdHRvbTogZW0oMTUpO1xuICBtYXJnaW46IHtcbiAgICB0b3A6IGF1dG87XG4gICAgYm90dG9tOiAwO1xuICB9XG59XG4iLCIkY29sb3JCYWNrZ3JvdW5kUHJpbWFyeTogIzFiMWMyYTtcbiRjb2xvclByaW1hcnk6ICNmMGNhMjA7XG4kY29sb3JTZWNvbmRhcnk6ICNmZmZmZmY7XG4kY29sb3JJbmFjdGl2ZTogIzcxNzE3MTtcbiJdfQ== */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'planning-poker-landing',
                templateUrl: './landing.component.html',
                styleUrls: ['./landing.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"] }, { type: _guest_guest_service__WEBPACK_IMPORTED_MODULE_4__["GuestService"] }, { type: _host_host_service__WEBPACK_IMPORTED_MODULE_5__["HostService"] }, { type: ngx_google_analytics__WEBPACK_IMPORTED_MODULE_2__["GoogleAnalyticsService"] }]; }, null); })();


/***/ }),

/***/ "Tnap":
/*!*************************************************!*\
  !*** ./src/app/poker/landing/landing.module.ts ***!
  \*************************************************/
/*! exports provided: LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/shared.module */ "PCNd");
/* harmony import */ var _lading_landing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lading/landing.component */ "H2c/");
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./landing-routing.module */ "x+rX");






class LandingModule {
}
LandingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: LandingModule });
LandingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function LandingModule_Factory(t) { return new (t || LandingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _landing_routing_module__WEBPACK_IMPORTED_MODULE_4__["LandingRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LandingModule, { declarations: [_lading_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _landing_routing_module__WEBPACK_IMPORTED_MODULE_4__["LandingRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](LandingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _lading_landing_component__WEBPACK_IMPORTED_MODULE_3__["LandingComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _landing_routing_module__WEBPACK_IMPORTED_MODULE_4__["LandingRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "x+rX":
/*!*********************************************************!*\
  !*** ./src/app/poker/landing/landing-routing.module.ts ***!
  \*********************************************************/
/*! exports provided: LandingRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingRoutingModule", function() { return LandingRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _lading_landing_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lading/landing.component */ "H2c/");





const routes = [
    {
        path: '',
        component: _lading_landing_component__WEBPACK_IMPORTED_MODULE_2__["LandingComponent"],
        data: {
            animation: 'LandingComponent'
        }
    }
];
class LandingRoutingModule {
}
LandingRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LandingRoutingModule });
LandingRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LandingRoutingModule_Factory(t) { return new (t || LandingRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ })

}]);
//# sourceMappingURL=landing-landing-module.js.map