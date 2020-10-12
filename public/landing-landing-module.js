(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["landing-landing-module"],{

/***/ "Tnap":
/*!*************************************************!*\
  !*** ./src/app/poker/landing/landing.module.ts ***!
  \*************************************************/
/*! exports provided: LandingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingModule", function() { return LandingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _landing_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-routing.module */ "x+rX");
/* harmony import */ var _lading_lading_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lading/lading.component */ "tsq8");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shared/shared.module */ "PCNd");






class LandingModule {
}
LandingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: LandingModule });
LandingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function LandingModule_Factory(t) { return new (t || LandingModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
            _landing_routing_module__WEBPACK_IMPORTED_MODULE_2__["LandingRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](LandingModule, { declarations: [_lading_lading_component__WEBPACK_IMPORTED_MODULE_3__["LadingComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
        _landing_routing_module__WEBPACK_IMPORTED_MODULE_2__["LandingRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LandingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _lading_lading_component__WEBPACK_IMPORTED_MODULE_3__["LadingComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                    _landing_routing_module__WEBPACK_IMPORTED_MODULE_2__["LandingRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "tsq8":
/*!**********************************************************!*\
  !*** ./src/app/poker/landing/lading/lading.component.ts ***!
  \**********************************************************/
/*! exports provided: LadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LadingComponent", function() { return LadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-google-analytics */ "PKRn");
/* harmony import */ var _shared_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/layout/layout/layout.component */ "rqBn");
/* harmony import */ var _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/layout/header/header.component */ "6EaX");
/* harmony import */ var _shared_layout_content_content_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/layout/content/content.component */ "hi3J");
/* harmony import */ var _shared_button_button_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/button/button.directive */ "M0Hd");










class LadingComponent {
    constructor(router, $gaService) {
        this.router = router;
        this.$gaService = $gaService;
    }
    ngOnInit() {
        this.$gaService.pageView('/');
    }
    goToGuestPath() {
        this.router.navigateByUrl('/guest');
    }
    goToHostPath() {
        this.router.navigateByUrl('/host');
    }
}
LadingComponent.ɵfac = function LadingComponent_Factory(t) { return new (t || LadingComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_google_analytics__WEBPACK_IMPORTED_MODULE_2__["GoogleAnalyticsService"])); };
LadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LadingComponent, selectors: [["planning-poker-lading"]], decls: 17, vars: 0, consts: [["planningPokerButton", "", "buttonColor", "secondary", 3, "click"], ["planningPokerButton", "", 3, "click"], [1, "poker-footer"], ["href", "http://haxit.pl/", "target", "_blank"]], template: function LadingComponent_Template(rf, ctx) { if (rf & 1) {
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
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LadingComponent_Template_button_click_7_listener() { return ctx.goToGuestPath(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Join existing room ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "or");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LadingComponent_Template_button_click_11_listener() { return ctx.goToHostPath(); });
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
    } }, directives: [_shared_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_3__["LayoutComponent"], _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], _shared_layout_content_content_component__WEBPACK_IMPORTED_MODULE_5__["ContentComponent"], _shared_button_button_directive__WEBPACK_IMPORTED_MODULE_6__["ButtonDirective"]], styles: ["planning-poker-content[_ngcontent-%COMP%] {\n  font-weight: 700;\n}\nplanning-poker-content[_ngcontent-%COMP%]    > *[_ngcontent-%COMP%] {\n  margin: 0 0.8333333333em;\n}\nplanning-poker-header[_ngcontent-%COMP%] {\n  position: relative;\n}\nplanning-poker-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 2.2222222222em;\n  display: flex;\n  width: 100%;\n}\n.poker-footer[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  text-align: center;\n  text-transform: uppercase;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 0.7777777778em;\n  color: #717171;\n  padding-bottom: 0.8333333333em;\n  margin-top: auto;\n  margin-bottom: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvcGxhbm5pbmctcG9rZXIvc3JjL2FwcC9wb2tlci9sYW5kaW5nL2xhZGluZy9sYWRpbmcuY29tcG9uZW50LnNjc3MiLCJhcHBzL3BsYW5uaW5nLXBva2VyL3NyYy9zaGFyZWQvQHN0eWxlcy9fY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxnQkFBQTtBQURGO0FBR0U7RUFDRSx3QkFBQTtBQURKO0FBS0E7RUFDRSxrQkFBQTtBQUZGO0FBSUU7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFGSjtBQU1BO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUVFLGtCQUFBO0VBQ0EseUJBQUE7RUFFRixhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsY0M5QmM7RUQrQmQsOEJBQUE7RUFFRSxnQkFBQTtFQUNBLGdCQUFBO0FBTkoiLCJmaWxlIjoiYXBwcy9wbGFubmluZy1wb2tlci9zcmMvYXBwL3Bva2VyL2xhbmRpbmcvbGFkaW5nL2xhZGluZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJAc3R5bGVzL3NoYXJlZFwiO1xuXG5wbGFubmluZy1wb2tlci1jb250ZW50IHtcbiAgZm9udC13ZWlnaHQ6IDcwMDtcblxuICA+ICoge1xuICAgIG1hcmdpbjogMCBlbSgxNSk7XG4gIH1cbn1cblxucGxhbm5pbmctcG9rZXItaGVhZGVyIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuXG4gIGgyIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiBlbSg0MCk7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxufVxuXG4ucG9rZXItZm9vdGVyIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICBib3R0b206IDA7XG4gIHdpZHRoOiAxMDAlO1xuICB0ZXh0OiB7XG4gICAgYWxpZ246IGNlbnRlcjtcbiAgICB0cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgfVxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgZm9udC1zaXplOiBlbSgxNCk7XG4gIGNvbG9yOiAkY29sb3JJbmFjdGl2ZTtcbiAgcGFkZGluZy1ib3R0b206IGVtKDE1KTtcbiAgbWFyZ2luOiB7XG4gICAgdG9wOiBhdXRvO1xuICAgIGJvdHRvbTogMDtcbiAgfVxufVxuIiwiJGNvbG9yQmFja2dyb3VuZFByaW1hcnk6ICMxYjFjMmE7XG4kY29sb3JQcmltYXJ5OiAjZjBjYTIwO1xuJGNvbG9yU2Vjb25kYXJ5OiAjZmZmZmZmO1xuJGNvbG9ySW5hY3RpdmU6ICM3MTcxNzE7XG4iXX0= */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LadingComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'planning-poker-lading',
                templateUrl: './lading.component.html',
                styleUrls: ['./lading.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: ngx_google_analytics__WEBPACK_IMPORTED_MODULE_2__["GoogleAnalyticsService"] }]; }, null); })();


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
/* harmony import */ var _lading_lading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lading/lading.component */ "tsq8");





const routes = [
    {
        path: '',
        component: _lading_lading_component__WEBPACK_IMPORTED_MODULE_2__["LadingComponent"]
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