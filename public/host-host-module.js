(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["host-host-module"],{

/***/ "1FB5":
/*!*******************************************!*\
  !*** ./src/app/poker/host/host.module.ts ***!
  \*******************************************/
/*! exports provided: HostModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostModule", function() { return HostModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board/board.component */ "n5hc");
/* harmony import */ var _host_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./host-routing.module */ "euhf");
/* harmony import */ var _wait_wait_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wait/wait.component */ "eBqT");







class HostModule {
}
HostModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HostModule });
HostModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HostModule_Factory(t) { return new (t || HostModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _host_routing_module__WEBPACK_IMPORTED_MODULE_4__["HostRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HostModule, { declarations: [_board_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"],
        _wait_wait_component__WEBPACK_IMPORTED_MODULE_5__["WaitComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _host_routing_module__WEBPACK_IMPORTED_MODULE_4__["HostRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HostModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _board_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"],
                    _wait_wait_component__WEBPACK_IMPORTED_MODULE_5__["WaitComponent"]
                ],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _host_routing_module__WEBPACK_IMPORTED_MODULE_4__["HostRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "FPR1":
/*!***********************************************!*\
  !*** ./src/app/poker/host/wait/wait.guard.ts ***!
  \***********************************************/
/*! exports provided: WaitGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitGuard", function() { return WaitGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _host_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../host.service */ "+cqM");






class WaitGuard {
    constructor(hostService, router) {
        this.hostService = hostService;
        this.router = router;
    }
    canActivate() {
        const hasHostRoom = !!this.hostService.hostRoom;
        if (hasHostRoom) {
            this.router.navigateByUrl('/');
        }
        return !hasHostRoom;
    }
}
WaitGuard.ɵfac = function WaitGuard_Factory(t) { return new (t || WaitGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
WaitGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: WaitGuard, factory: WaitGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WaitGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _host_service__WEBPACK_IMPORTED_MODULE_2__["HostService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "eBqT":
/*!***************************************************!*\
  !*** ./src/app/poker/host/wait/wait.component.ts ***!
  \***************************************************/
/*! exports provided: WaitComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WaitComponent", function() { return WaitComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-google-analytics */ "PKRn");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _host_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../host.service */ "+cqM");
/* harmony import */ var _shared_icon_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/icon/icon/icon.component */ "W79N");











class WaitComponent {
    constructor(router, $gaService, hostService) {
        this.router = router;
        this.$gaService = $gaService;
        this.hostService = hostService;
        this.destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.$gaService.pageView('/host/board');
        this.hostService.createRoom()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroySubject))
            .subscribe((roomInfo) => {
            this.hostService.hostRoom = roomInfo.id;
            this.hostService.gameState = roomInfo.state;
            this.router.navigateByUrl('/host/board');
        });
    }
    ngOnDestroy() {
        this.destroySubject.next(null);
    }
}
WaitComponent.ɵfac = function WaitComponent_Factory(t) { return new (t || WaitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_google_analytics__WEBPACK_IMPORTED_MODULE_2__["GoogleAnalyticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_host_service__WEBPACK_IMPORTED_MODULE_5__["HostService"])); };
WaitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WaitComponent, selectors: [["planning-poker-wait"]], decls: 4, vars: 0, consts: [[1, "loop-loader"]], template: function WaitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "planning-poker-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " loop\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Creating room...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_icon_icon_icon_component__WEBPACK_IMPORTED_MODULE_6__["IconComponent"]], styles: ["@keyframes rotate {\n  0% {\n    transform: rotate(360deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\np[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 1em;\n  font-weight: 700;\n}\n.loop-loader[_ngcontent-%COMP%]     .material-icons {\n  font-size: 2.7777777778em;\n  animation-name: rotate;\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvcGxhbm5pbmctcG9rZXIvc3JjL3NoYXJlZC9Ac3R5bGVzL2FuaW1hdGlvbi9yb3RhdGUuc2NzcyIsImFwcHMvcGxhbm5pbmctcG9rZXIvc3JjL2FwcC9wb2tlci9ob3N0L3dhaXQvd2FpdC5jb21wb25lbnQuc2NzcyIsImFwcHMvcGxhbm5pbmctcG9rZXIvc3JjL3NoYXJlZC9Ac3R5bGVzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UseUJBQUE7RUNDRjtFREVBO0lBQ0UseUJBQUE7RUNBRjtFREdBO0lBQ0UsdUJBQUE7RUNERjtBQUNGO0FBUEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBU0Y7QUFOQTtFQUNFLGNDVGU7RURVZix5QkFBQTtFQUVFLGNBQUE7RUFDQSxnQkFBQTtBQVFKO0FBRkk7RUFDRSx5QkFBQTtFQUVFLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtBQUlSIiwiZmlsZSI6ImFwcHMvcGxhbm5pbmctcG9rZXIvc3JjL2FwcC9wb2tlci9ob3N0L3dhaXQvd2FpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxufVxuIiwiQGltcG9ydCBcIkBzdHlsZXMvc2hhcmVkXCI7XG5AaW1wb3J0IFwiQHN0eWxlcy9hbmltYXRpb24vcm90YXRlXCI7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbnAge1xuICBjb2xvcjogJGNvbG9yU2Vjb25kYXJ5O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250OiB7XG4gICAgc2l6ZTogZW0oMTgpO1xuICAgIHdlaWdodDogNzAwO1xuICB9XG59XG5cbi5sb29wLWxvYWRlciB7XG4gIDo6bmctZGVlcCB7XG4gICAgLm1hdGVyaWFsLWljb25zIHtcbiAgICAgIGZvbnQtc2l6ZTogZW0oNTApO1xuICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgIG5hbWU6IHJvdGF0ZTtcbiAgICAgICAgZHVyYXRpb246IDFzO1xuICAgICAgICBpdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cbiIsIiRjb2xvckJhY2tncm91bmRQcmltYXJ5OiAjMWIxYzJhO1xuJGNvbG9yUHJpbWFyeTogI2YwY2EyMDtcbiRjb2xvclNlY29uZGFyeTogI2ZmZmZmZjtcbiRjb2xvckluYWN0aXZlOiAjNzE3MTcxO1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WaitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'planning-poker-wait',
                templateUrl: './wait.component.html',
                styleUrls: ['./wait.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: ngx_google_analytics__WEBPACK_IMPORTED_MODULE_2__["GoogleAnalyticsService"] }, { type: _host_service__WEBPACK_IMPORTED_MODULE_5__["HostService"] }]; }, null); })();


/***/ }),

/***/ "euhf":
/*!***************************************************!*\
  !*** ./src/app/poker/host/host-routing.module.ts ***!
  \***************************************************/
/*! exports provided: HostRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostRoutingModule", function() { return HostRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _board_board_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./board/board.component */ "n5hc");
/* harmony import */ var _board_board_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board/board.guard */ "umnY");
/* harmony import */ var _wait_wait_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./wait/wait.component */ "eBqT");
/* harmony import */ var _wait_wait_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./wait/wait.guard */ "FPR1");








const routes = [
    {
        path: 'wait',
        component: _wait_wait_component__WEBPACK_IMPORTED_MODULE_4__["WaitComponent"],
        canActivate: [
            _wait_wait_guard__WEBPACK_IMPORTED_MODULE_5__["WaitGuard"]
        ],
        data: {
            animation: 'WaitComponent'
        }
    },
    {
        path: 'board',
        component: _board_board_component__WEBPACK_IMPORTED_MODULE_2__["BoardComponent"],
        canActivate: [
            _board_board_guard__WEBPACK_IMPORTED_MODULE_3__["BoardGuard"]
        ],
        canDeactivate: [
            _board_board_guard__WEBPACK_IMPORTED_MODULE_3__["BoardGuard"]
        ],
        data: {
            animation: 'BoardComponent'
        }
    },
    {
        path: '**',
        redirectTo: 'wait'
    }
];
class HostRoutingModule {
}
HostRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: HostRoutingModule });
HostRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function HostRoutingModule_Factory(t) { return new (t || HostRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](HostRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HostRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "n5hc":
/*!*****************************************************!*\
  !*** ./src/app/poker/host/board/board.component.ts ***!
  \*****************************************************/
/*! exports provided: BoardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardComponent", function() { return BoardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @planning-poker/api-interfaces */ "l3rL");
/* harmony import */ var _shared_button_button_color_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shared/button/button-color.enum */ "ybPn");
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-google-analytics */ "PKRn");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _host_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../host.service */ "+cqM");
/* harmony import */ var _board_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./board.guard */ "umnY");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _shared_text_fixed_width_text_fixed_width_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/text-fixed-width/text-fixed-width.directive */ "eM/n");
/* harmony import */ var _shared_text_fixed_width_text_fixed_width_text_fixed_width_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/text-fixed-width/text-fixed-width/text-fixed-width.component */ "zpDr");
/* harmony import */ var _shared_button_button_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/button/button.directive */ "M0Hd");
/* harmony import */ var _shared_card_card_card_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../../shared/card/card/card.component */ "M8cf");



















const _c0 = ["roomLinkInput"];
function BoardComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "planning-poker-card", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const user_r7 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("boardCard", true)("review", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx_r0.reviewCardsSubject$))("card", user_r7.card)("label", user_r7.name)("playerReady", user_r7.status === ctx_r0.userStatues.VOTED);
} }
function BoardComponent_ng_container_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New voting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function BoardComponent_ng_container_18_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Finish Voting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function BoardComponent_ng_container_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Get room link");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function BoardComponent_ng_container_22_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Link copied");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function BoardComponent_div_26_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div", 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Are you sure to end this session? ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "footer", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_div_26_Template_button_click_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.leaveModalAction(true); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " YES ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_div_26_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r10.leaveModalAction(false); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " NO ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttonColor", ctx_r6.buttonColors.ACCENT);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttonColor", ctx_r6.buttonColors.ACCENT);
} }
class BoardComponent {
    constructor(hostService, activatedRoute, $gaService, boardGuard, router) {
        this.hostService = hostService;
        this.activatedRoute = activatedRoute;
        this.$gaService = $gaService;
        this.boardGuard = boardGuard;
        this.router = router;
        this.userStatues = _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["UserStatuses"];
        this.gameStates = _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["GameStates"];
        this.buttonColors = _shared_button_button_color_enum__WEBPACK_IMPORTED_MODULE_3__["ButtonColor"];
        this.reviewCardsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.leaveModalVisibilitySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.leaveModalVisibility$ = this.leaveModalVisibilitySubject$.asObservable();
        this.linkCopiedSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.linkCopied$ = this.linkCopiedSubject$.asObservable();
    }
    ngOnInit() {
        this.$gaService.pageView('/host/board');
        this.roomId = this.hostService.hostRoom;
        this.roomLink = window.location.origin + '/guest/room-code?code=' + this.roomId;
        this.hostService.joinRoom(this.roomId);
        this.users$ = this.hostService.getUsers()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((users) => {
            return users.filter((user) => user.type === _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["ClientType"].VOTER);
        }));
        this.currentTime$ = this.hostService.currentTime();
        this.gameState$ = this.hostService.getGameState()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])((data) => data.state), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["tap"])((gameState) => this.handleGameStateChange(gameState)));
    }
    ngOnDestroy() {
        this.destroySubject$.next(null);
    }
    beforeUnloadHandler(event) {
        return false;
    }
    get leaveModalVisibility() {
        return this.leaveModalVisibilitySubject$.getValue();
    }
    set leaveModalVisibility(value) {
        this.leaveModalVisibilitySubject$.next(value);
    }
    toggleGameState() {
        this.hostService.toggleGameState(this.roomId);
        this.$gaService.event('toggle_game_state', 'host', 'Toggle game state');
    }
    getRoomLink() {
        this.roomLinkInput.nativeElement.select();
        this.roomLinkInput.nativeElement.setSelectionRange(0, 99999);
        document.execCommand("copy");
        this.roomLinkInput.nativeElement.blur();
        this.linkCopiedSubject$.next(true);
        setTimeout(() => {
            this.linkCopiedSubject$.next(false);
        }, 2000);
    }
    closeRoom() {
        this.router.navigateByUrl('/');
    }
    showLeaveModal() {
        this.leaveModalVisibility = true;
    }
    closeLeaveModal() {
        this.leaveModalVisibility = false;
    }
    leaveModalAction(result) {
        if (result) {
            this.boardGuard.discard();
        }
        else {
            this.boardGuard.keep();
        }
        this.closeLeaveModal();
    }
    handleGameStateChange(gameState) {
        this.reviewCardsSubject$.next(gameState === _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["GameStates"].REVIEW);
    }
}
BoardComponent.ɵfac = function BoardComponent_Factory(t) { return new (t || BoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_host_service__WEBPACK_IMPORTED_MODULE_7__["HostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_google_analytics__WEBPACK_IMPORTED_MODULE_4__["GoogleAnalyticsService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_board_guard__WEBPACK_IMPORTED_MODULE_8__["BoardGuard"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["planning-poker-board"]], viewQuery: function BoardComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.roomLinkInput = _t.first);
    } }, hostBindings: function BoardComponent_HostBindings(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("beforeunload", function BoardComponent_beforeunload_HostBindingHandler() { return ctx.beforeUnloadHandler(); }, false, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵresolveWindow"]);
    } }, decls: 28, vars: 25, consts: [[1, "cards"], [4, "ngFor", "ngForOf"], [1, "sidebar"], [1, "sidebar-header"], ["planningPokerTextFixedWidth", ""], [1, "room-link-input", 3, "value"], ["roomLinkInput", ""], [1, "clock", 3, "value"], [1, "sidebar-footer"], ["planningPokerButton", "", 1, "toggle-game-state", 3, "buttonColor", "ngSwitch", "click"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], ["planningPokerButton", "", 3, "buttonColor", "ngSwitch", "click"], ["planningPokerButton", "", 3, "buttonColor", "click"], ["class", "modal-container", 4, "ngIf"], [3, "boardCard", "review", "card", "label", "playerReady"], [1, "modal-container"], [1, "modal-overlay"], [1, "modal-content"], [1, "modal-footer"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, BoardComponent_ng_container_1_Template, 3, 7, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "header", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "ROOM ID:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 5, 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](11, "planning-poker-text-fixed-width", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](13, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "footer", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_15_listener() { return ctx.toggleGameState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](16, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, BoardComponent_ng_container_17_Template, 2, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](18, BoardComponent_ng_container_18_Template, 2, 0, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_19_listener() { return ctx.getRoomLink(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](20, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, BoardComponent_ng_container_21_Template, 2, 0, "ng-container", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, BoardComponent_ng_container_22_Template, 2, 0, "ng-container", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_23_listener() { return ctx.closeRoom(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Close room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](26, BoardComponent_div_26_Template, 10, 2, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](27, "async");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 12, ctx.users$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.roomId);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", ctx.roomLink);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("value", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](12, 14, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](13, 17, ctx.currentTime$), "HH:mm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttonColor", ctx.buttonColors.PRIMARY)("ngSwitch", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](16, 19, ctx.gameState$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.gameStates.REVIEW);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttonColor", ctx.buttonColors.SECONDARY)("ngSwitch", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](20, 21, ctx.linkCopied$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", true);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttonColor", ctx.buttonColors.INACTIVE);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](27, 23, ctx.leaveModalVisibility$));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["NgForOf"], _shared_text_fixed_width_text_fixed_width_directive__WEBPACK_IMPORTED_MODULE_10__["TextFixedWidthDirective"], _shared_text_fixed_width_text_fixed_width_text_fixed_width_component__WEBPACK_IMPORTED_MODULE_11__["TextFixedWidthComponent"], _shared_button_button_directive__WEBPACK_IMPORTED_MODULE_12__["ButtonDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgSwitchDefault"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["NgIf"], _shared_card_card_card_component__WEBPACK_IMPORTED_MODULE_13__["CardComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_9__["AsyncPipe"], _angular_common__WEBPACK_IMPORTED_MODULE_9__["DatePipe"]], styles: ["[_nghost-%COMP%] {\n  padding: 0 1.1111111111em;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: flex-start;\n}\n\n.room-link-input[_ngcontent-%COMP%] {\n  opacity: 0;\n}\n\n.cards[_ngcontent-%COMP%] {\n  order: 0;\n  flex: 1 1 auto;\n  align-self: auto;\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: flex-start;\n  align-items: flex-start;\n  overflow: auto;\n  padding-right: 0.8333333333em;\n}\n\n.cards[_ngcontent-%COMP%]   planning-poker-card[_ngcontent-%COMP%] {\n  margin: 2.7777777778em 1% 1% 1%;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  order: 0;\n  flex: 0 0 27%;\n  align-self: auto;\n  display: flex;\n  flex-direction: column;\n  flex-wrap: nowrap;\n  justify-content: flex-start;\n  align-content: stretch;\n  align-items: flex-start;\n  height: 100%;\n  padding-top: 2.5em;\n  padding-left: 0.8333333333em;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%] {\n  order: 0;\n  flex: 1 1 auto;\n  align-self: auto;\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  font-size: 1.8333333333em;\n  letter-spacing: 0.0833333333em;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%] {\n  font-size: 2.8888888889em;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-header[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%] {\n  margin-top: auto;\n  margin-left: auto;\n  color: #ffffff;\n  font-size: 1.8333333333em;\n  font-weight: 700;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%] {\n  order: 0;\n  flex: 0 1 auto;\n  align-self: flex-start;\n  width: 100%;\n}\n\n.sidebar[_ngcontent-%COMP%]   .sidebar-footer[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 1.6666666667em 0;\n  width: 100%;\n}\n\n.modal-container[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 99;\n}\n\n.modal-container[_ngcontent-%COMP%]   .modal-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(27, 28, 42, 0.8);\n}\n\n.modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%] {\n  position: relative;\n  background-color: #f0ca20;\n  color: #1b1c2a;\n  height: 11.1111111111em;\n  width: 27.7777777778em;\n  padding: 1.6666666667em;\n  align-items: center;\n  justify-content: center;\n  display: flex;\n  flex-direction: column;\n}\n\n.modal-container[_ngcontent-%COMP%]   .modal-content[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  font-size: 1.1111111111em;\n  text-transform: uppercase;\n  font-weight: 700;\n}\n\n.modal-container[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  margin-top: auto;\n}\n\n.modal-container[_ngcontent-%COMP%]   .modal-footer[_ngcontent-%COMP%]   button.planning-poker-button[_ngcontent-%COMP%] {\n  margin: 0 0.8333333333em;\n  min-width: 10em;\n  height: 3.3333333333em;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvcGxhbm5pbmctcG9rZXIvc3JjL2FwcC9wb2tlci9ob3N0L2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIiwiYXBwcy9wbGFubmluZy1wb2tlci9zcmMvc2hhcmVkL0BzdHlsZXMvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UseUJBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0FBREY7O0FBSUE7RUFDRSxVQUFBO0FBREY7O0FBSUE7RUFDRSxRQUFBO0VBQ0EsY0FBQTtFQUNBLGdCQUFBO0VBQ0EsWUFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLDZCQUFBO0FBREY7O0FBR0U7RUFDRSwrQkFBQTtBQURKOztBQUtBO0VBQ0UsUUFBQTtFQUNBLGFBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUNBLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSxzQkFBQTtFQUNBLHVCQUFBO0VBQ0EsWUFBQTtFQUVFLGtCQUFBO0VBQ0EsNEJBQUE7QUFISjs7QUFNRTtFQUNFLFFBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7RUFDQSxhQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBSko7O0FBTUk7RUFDRSx5QkFBQTtFQUNBLDhCQUFBO0FBSk47O0FBT0k7RUFDRSx5QkFBQTtBQUxOOztBQVFJO0VBRUksZ0JBQUE7RUFDQSxpQkFBQTtFQUVGLGNDMUVXO0VENEVULHlCQUFBO0VBQ0EsZ0JBQUE7QUFUUjs7QUFjRTtFQUNFLFFBQUE7RUFDQSxjQUFBO0VBQ0Esc0JBQUE7RUFDQSxXQUFBO0FBWko7O0FBY0k7RUFDRSx3QkFBQTtFQUNBLFdBQUE7QUFaTjs7QUFpQkE7RUFDRSxlQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsV0FBQTtBQWRGOztBQWdCRTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0EsT0FBQTtFQUNBLGlDQUFBO0FBZEo7O0FBaUJFO0VBQ0Usa0JBQUE7RUFDQSx5QkN0SFc7RUR1SFgsY0N4SHFCO0VEeUhyQix1QkFBQTtFQUNBLHNCQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLHNCQUFBO0FBZko7O0FBaUJJO0VBQ0UseUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FBZk47O0FBbUJFO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxnQkFBQTtBQWpCSjs7QUFvQk07RUFDRSx3QkFBQTtFQUNBLGVBQUE7RUFDQSxzQkFBQTtBQWxCUiIsImZpbGUiOiJhcHBzL3BsYW5uaW5nLXBva2VyL3NyYy9hcHAvcG9rZXIvaG9zdC9ib2FyZC9ib2FyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCJAc3R5bGVzL3NoYXJlZFwiO1xuXG46aG9zdCB7XG4gIHBhZGRpbmc6IDAgZW0oMjApO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1jb250ZW50OiBzdHJldGNoO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cblxuLnJvb20tbGluay1pbnB1dCB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbi5jYXJkcyB7XG4gIG9yZGVyOiAwO1xuICBmbGV4OiAxIDEgYXV0bztcbiAgYWxpZ24tc2VsZjogYXV0bztcbiAgaGVpZ2h0OiAxMDAlO1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcbiAgZmxleC13cmFwOiB3cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBvdmVyZmxvdzogYXV0bztcbiAgcGFkZGluZy1yaWdodDogZW0oMTUpO1xuXG4gIHBsYW5uaW5nLXBva2VyLWNhcmQge1xuICAgIG1hcmdpbjogZW0oNTApIDElIDElIDElO1xuICB9XG59XG5cbi5zaWRlYmFyIHtcbiAgb3JkZXI6IDA7XG4gIGZsZXg6IDAgMCAyNyU7XG4gIGFsaWduLXNlbGY6IGF1dG87XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gIGFsaWduLWNvbnRlbnQ6IHN0cmV0Y2g7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICBoZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmc6IHtcbiAgICB0b3A6IGVtKDQ1KTtcbiAgICBsZWZ0OiBlbSgxNSk7XG4gIH1cblxuICAuc2lkZWJhci1oZWFkZXIge1xuICAgIG9yZGVyOiAwO1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIGFsaWduLXNlbGY6IGF1dG87XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIHdpZHRoOiAxMDAlO1xuXG4gICAgaDEge1xuICAgICAgZm9udC1zaXplOiBlbSgkaDFTZWNvbmRGb250U2l6ZSk7XG4gICAgICBsZXR0ZXItc3BhY2luZzogZW0oMS41KTtcbiAgICB9XG5cbiAgICBoMiB7XG4gICAgICBmb250LXNpemU6IGVtKCRoMUZvbnRTaXplICsgNCk7XG4gICAgfVxuXG4gICAgLmNsb2NrIHtcbiAgICAgIG1hcmdpbjoge1xuICAgICAgICB0b3A6IGF1dG87XG4gICAgICAgIGxlZnQ6IGF1dG87XG4gICAgICB9XG4gICAgICBjb2xvcjogJGNvbG9yU2Vjb25kYXJ5O1xuICAgICAgZm9udDoge1xuICAgICAgICBzaXplOiBlbSgkaDFTZWNvbmRGb250U2l6ZSk7XG4gICAgICAgIHdlaWdodDogNzAwO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC5zaWRlYmFyLWZvb3RlciB7XG4gICAgb3JkZXI6IDA7XG4gICAgZmxleDogMCAxIGF1dG87XG4gICAgYWxpZ24tc2VsZjogZmxleC1zdGFydDtcbiAgICB3aWR0aDogMTAwJTtcblxuICAgIGJ1dHRvbiB7XG4gICAgICBtYXJnaW46IGVtKDMwKSAwO1xuICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuICB9XG59XG5cbi5tb2RhbC1jb250YWluZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHRvcDogMDtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIHotaW5kZXg6IDk5O1xuXG4gIC5tb2RhbC1vdmVybGF5IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAwO1xuICAgIHJpZ2h0OiAwO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQ6IHJnYmEoJGNvbG9yQmFja2dyb3VuZFByaW1hcnksIC44KTtcbiAgfVxuXG4gIC5tb2RhbC1jb250ZW50IHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yUHJpbWFyeTtcbiAgICBjb2xvcjogJGNvbG9yQmFja2dyb3VuZFByaW1hcnk7XG4gICAgaGVpZ2h0OiBlbSgyMDApO1xuICAgIHdpZHRoOiBlbSg1MDApO1xuICAgIHBhZGRpbmc6IGVtKDMwKTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICAgIHAge1xuICAgICAgZm9udC1zaXplOiBlbSgyMCk7XG4gICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICB9XG4gIH1cblxuICAubW9kYWwtZm9vdGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLXRvcDogYXV0bztcblxuICAgIGJ1dHRvbiB7XG4gICAgICAmLnBsYW5uaW5nLXBva2VyLWJ1dHRvbiB7XG4gICAgICAgIG1hcmdpbjogMCBlbSgxNSk7XG4gICAgICAgIG1pbi13aWR0aDogZW0oMTgwKTtcbiAgICAgICAgaGVpZ2h0OiBlbSg2MCk7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iLCIkY29sb3JCYWNrZ3JvdW5kUHJpbWFyeTogIzFiMWMyYTtcbiRjb2xvclByaW1hcnk6ICNmMGNhMjA7XG4kY29sb3JTZWNvbmRhcnk6ICNmZmZmZmY7XG4kY29sb3JJbmFjdGl2ZTogIzcxNzE3MTtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'planning-poker-board',
                templateUrl: './board.component.html',
                styleUrls: ['./board.component.scss']
            }]
    }], function () { return [{ type: _host_service__WEBPACK_IMPORTED_MODULE_7__["HostService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: ngx_google_analytics__WEBPACK_IMPORTED_MODULE_4__["GoogleAnalyticsService"] }, { type: _board_guard__WEBPACK_IMPORTED_MODULE_8__["BoardGuard"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, { roomLinkInput: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['roomLinkInput']
        }], beforeUnloadHandler: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"],
            args: ['window:beforeunload']
        }] }); })();


/***/ }),

/***/ "umnY":
/*!*************************************************!*\
  !*** ./src/app/poker/host/board/board.guard.ts ***!
  \*************************************************/
/*! exports provided: BoardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardGuard", function() { return BoardGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _host_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../host.service */ "+cqM");








class BoardGuard {
    constructor(router, hostService) {
        this.router = router;
        this.hostService = hostService;
        this.discardSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
    }
    canActivate() {
        const hasHostRoom = !!this.hostService.hostRoom;
        if (!hasHostRoom) {
            this.router.navigateByUrl('/');
        }
        return !!this.hostService.hostRoom;
    }
    canDeactivate(component) {
        component.showLeaveModal();
        return this.discardSubject.asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])());
    }
    discard() {
        this.discardSubject.next(true);
        setTimeout(() => {
            this.discardSubject.next(true);
        });
    }
    keep() {
        this.discardSubject.next(false);
    }
}
BoardGuard.ɵfac = function BoardGuard_Factory(t) { return new (t || BoardGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_host_service__WEBPACK_IMPORTED_MODULE_4__["HostService"])); };
BoardGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BoardGuard, factory: BoardGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _host_service__WEBPACK_IMPORTED_MODULE_4__["HostService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=host-host-module.js.map