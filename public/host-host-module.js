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
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HostModule, { declarations: [_board_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"], _wait_wait_component__WEBPACK_IMPORTED_MODULE_5__["WaitComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _host_routing_module__WEBPACK_IMPORTED_MODULE_4__["HostRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HostModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_board_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"], _wait_wait_component__WEBPACK_IMPORTED_MODULE_5__["WaitComponent"]],
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

/***/ "KBs0":
/*!****************************************************!*\
  !*** ./src/app/poker/host/board/board.resolver.ts ***!
  \****************************************************/
/*! exports provided: BoardResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BoardResolver", function() { return BoardResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _host_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../host.service */ "+cqM");




class BoardResolver {
    constructor(hostService) {
        this.hostService = hostService;
    }
    resolve() {
        return this.hostService.createRoom();
    }
}
BoardResolver.ɵfac = function BoardResolver_Factory(t) { return new (t || BoardResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_host_service__WEBPACK_IMPORTED_MODULE_1__["HostService"])); };
BoardResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: BoardResolver, factory: BoardResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _host_service__WEBPACK_IMPORTED_MODULE_1__["HostService"] }]; }, null); })();


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
/* harmony import */ var _shared_icon_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/icon/icon/icon.component */ "W79N");









class WaitComponent {
    constructor(router, $gaService) {
        this.router = router;
        this.$gaService = $gaService;
        this.destroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    ngOnInit() {
        this.$gaService.pageView('/host/board');
        this.handleWaitPage();
    }
    ngOnDestroy() {
        this.destroySubject.next(null);
    }
    handleWaitPage() {
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(null)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(1500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.destroySubject))
            .subscribe(() => {
            this.router.navigateByUrl('/host/board');
        });
    }
}
WaitComponent.ɵfac = function WaitComponent_Factory(t) { return new (t || WaitComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_google_analytics__WEBPACK_IMPORTED_MODULE_2__["GoogleAnalyticsService"])); };
WaitComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WaitComponent, selectors: [["planning-poker-wait"]], decls: 4, vars: 0, consts: [[1, "loop-loader"]], template: function WaitComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "planning-poker-icon", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, " loop\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Creating room...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_shared_icon_icon_icon_component__WEBPACK_IMPORTED_MODULE_5__["IconComponent"]], styles: ["@keyframes rotate {\n  0% {\n    transform: rotate(360deg);\n  }\n  50% {\n    transform: rotate(180deg);\n  }\n  100% {\n    transform: rotate(0deg);\n  }\n}\n[_nghost-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-direction: column;\n}\np[_ngcontent-%COMP%] {\n  color: #ffffff;\n  text-transform: uppercase;\n  font-size: 1em;\n  font-weight: 700;\n}\n.loop-loader[_ngcontent-%COMP%]     .material-icons {\n  font-size: 2.7777777778em;\n  animation-name: rotate;\n  animation-duration: 1s;\n  animation-iteration-count: infinite;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvcGxhbm5pbmctcG9rZXIvc3JjL3NoYXJlZC9Ac3R5bGVzL2FuaW1hdGlvbi9yb3RhdGUuc2NzcyIsImFwcHMvcGxhbm5pbmctcG9rZXIvc3JjL2FwcC9wb2tlci9ob3N0L3dhaXQvd2FpdC5jb21wb25lbnQuc2NzcyIsImFwcHMvcGxhbm5pbmctcG9rZXIvc3JjL3NoYXJlZC9Ac3R5bGVzL19jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFO0lBQ0UseUJBQUE7RUNDRjtFREVBO0lBQ0UseUJBQUE7RUNBRjtFREdBO0lBQ0UsdUJBQUE7RUNERjtBQUNGO0FBUEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLHNCQUFBO0FBU0Y7QUFOQTtFQUNFLGNDVGU7RURVZix5QkFBQTtFQUVFLGNBQUE7RUFDQSxnQkFBQTtBQVFKO0FBRkk7RUFDRSx5QkFBQTtFQUVFLHNCQUFBO0VBQ0Esc0JBQUE7RUFDQSxtQ0FBQTtBQUlSIiwiZmlsZSI6ImFwcHMvcGxhbm5pbmctcG9rZXIvc3JjL2FwcC9wb2tlci9ob3N0L3dhaXQvd2FpdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBrZXlmcmFtZXMgcm90YXRlIHtcbiAgMCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XG4gIH1cblxuICA1MCUge1xuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XG4gIH1cblxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgfVxufVxuIiwiQGltcG9ydCBcIkBzdHlsZXMvc2hhcmVkXCI7XG5AaW1wb3J0IFwiQHN0eWxlcy9hbmltYXRpb24vcm90YXRlXCI7XG5cbjpob3N0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbnAge1xuICBjb2xvcjogJGNvbG9yU2Vjb25kYXJ5O1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBmb250OiB7XG4gICAgc2l6ZTogZW0oMTgpO1xuICAgIHdlaWdodDogNzAwO1xuICB9XG59XG5cbi5sb29wLWxvYWRlciB7XG4gIDo6bmctZGVlcCB7XG4gICAgLm1hdGVyaWFsLWljb25zIHtcbiAgICAgIGZvbnQtc2l6ZTogZW0oNTApO1xuICAgICAgYW5pbWF0aW9uOiB7XG4gICAgICAgIG5hbWU6IHJvdGF0ZTtcbiAgICAgICAgZHVyYXRpb246IDFzO1xuICAgICAgICBpdGVyYXRpb24tY291bnQ6IGluZmluaXRlO1xuICAgICAgfTtcbiAgICB9XG4gIH1cbn1cbiIsIiRjb2xvckJhY2tncm91bmRQcmltYXJ5OiAjMWIxYzJhO1xuJGNvbG9yUHJpbWFyeTogI2YwY2EyMDtcbiRjb2xvclNlY29uZGFyeTogI2ZmZmZmZjtcbiRjb2xvckluYWN0aXZlOiAjNzE3MTcxO1xuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WaitComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'planning-poker-wait',
                templateUrl: './wait.component.html',
                styleUrls: ['./wait.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: ngx_google_analytics__WEBPACK_IMPORTED_MODULE_2__["GoogleAnalyticsService"] }]; }, null); })();


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
/* harmony import */ var _board_board_resolver__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./board/board.resolver */ "KBs0");
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
        resolve: {
            data: _board_board_resolver__WEBPACK_IMPORTED_MODULE_3__["BoardResolver"]
        },
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
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _shared_button_button_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/button/button.directive */ "M0Hd");
/* harmony import */ var _shared_card_card_card_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/card/card/card.component */ "M8cf");















function BoardComponent_ng_container_8_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "planning-poker-card", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](2, "async");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const user_r3 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("boardCard", true)("review", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](2, 5, ctx_r0.reviewCardsSubject$))("card", user_r3.card)("label", user_r3.name)("playerReady", user_r3.status === ctx_r0.userStatues.VOTED);
} }
function BoardComponent_ng_container_13_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "New voting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
function BoardComponent_ng_container_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Finish Voting");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} }
class BoardComponent {
    constructor(hostService, activatedRoute, $gaService) {
        this.hostService = hostService;
        this.activatedRoute = activatedRoute;
        this.$gaService = $gaService;
        this.userStatues = _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["UserStatuses"];
        this.gameStates = _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["GameStates"];
        this.buttonColors = _shared_button_button_color_enum__WEBPACK_IMPORTED_MODULE_3__["ButtonColor"];
        this.reviewCardsSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["BehaviorSubject"](false);
        this.onDestroySubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
    }
    ngOnInit() {
        this.$gaService.pageView('/host/board');
        const resolverData = this.activatedRoute.snapshot.data.data;
        this.roomId = resolverData.id;
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
        this.onDestroySubject.next(null);
    }
    toggleGameState() {
        this.hostService.toggleGameState(this.roomId);
        this.$gaService.event('toggle_game_state', 'host', 'Toggle game state');
    }
    handleGameStateChange(gameState) {
        this.reviewCardsSubject$.next(gameState === _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["GameStates"].REVIEW);
    }
}
BoardComponent.ɵfac = function BoardComponent_Factory(t) { return new (t || BoardComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_host_service__WEBPACK_IMPORTED_MODULE_7__["HostService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_google_analytics__WEBPACK_IMPORTED_MODULE_4__["GoogleAnalyticsService"])); };
BoardComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BoardComponent, selectors: [["planning-poker-board"]], decls: 15, vars: 15, consts: [[1, "clock"], [1, "cards"], [4, "ngFor", "ngForOf"], ["planningPokerButton", "", 1, "toggle-game-state", 3, "buttonColor", "ngSwitch", "click"], [4, "ngSwitchCase"], [4, "ngSwitchDefault"], [3, "boardCard", "review", "card", "label", "playerReady"]], template: function BoardComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](5, "date");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](6, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](8, BoardComponent_ng_container_8_Template, 3, 7, "ng-container", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](9, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BoardComponent_Template_button_click_11_listener() { return ctx.toggleGameState(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](12, "async");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](13, BoardComponent_ng_container_13_Template, 2, 0, "ng-container", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, BoardComponent_ng_container_14_Template, 2, 0, "ng-container", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("ROOM ID: ", ctx.roomId, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](5, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](6, 9, ctx.currentTime$), "HH:mm"));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](9, 11, ctx.users$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("buttonColor", ctx.buttonColors.SECONDARY)("ngSwitch", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind1"](12, 13, ctx.gameState$));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngSwitchCase", ctx.gameStates.REVIEW);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _shared_button_button_directive__WEBPACK_IMPORTED_MODULE_9__["ButtonDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchDefault"], _shared_card_card_card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  padding: 1.6666666667em 1.6666666667em 7.2222222222em;\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  height: 100%;\n}\n\nheader[_ngcontent-%COMP%] {\n  padding: 0 0 2.2222222222em;\n  margin: 0 1%;\n  display: flex;\n}\n\nheader[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: #ffffff;\n  font-size: 2.6666666667em;\n  font-weight: 700;\n}\n\n.cards[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: flex-start;\n  align-items: flex-start;\n  overflow: auto;\n  padding: 0 1.6666666667em;\n  margin-left: -1.6666666667em;\n  margin-right: -1.6666666667em;\n}\n\n.cards[_ngcontent-%COMP%]   planning-poker-card[_ngcontent-%COMP%] {\n  margin: 2.7777777778em 1% 1% 1%;\n}\n\nfooter[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  width: 100%;\n  padding: 1.6666666667em;\n  background: #1b1c2a;\n}\n\nfooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvcGxhbm5pbmctcG9rZXIvc3JjL2FwcC9wb2tlci9ob3N0L2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIiwiYXBwcy9wbGFubmluZy1wb2tlci9zcmMvc2hhcmVkL0BzdHlsZXMvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscURBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQURGOztBQUdFO0VBQ0UsaUJBQUE7RUFDQSxjQ2ZhO0VEaUJYLHlCQUFBO0VBQ0EsZ0JBQUE7QUFGTjs7QUFPQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSx5QkFBQTtFQUNBLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0VBRUUsNEJBQUE7RUFDQSw2QkFBQTtBQUxKOztBQVFFO0VBQ0UsK0JBQUE7QUFOSjs7QUFTQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQ3BEdUI7QUQ4Q3pCOztBQVFFO0VBQ0UsWUFBQTtBQU5KIiwiZmlsZSI6ImFwcHMvcGxhbm5pbmctcG9rZXIvc3JjL2FwcC9wb2tlci9ob3N0L2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIkBzdHlsZXMvc2hhcmVkXCI7XG5cbjpob3N0IHtcbiAgcGFkZGluZzogZW0oMzApIGVtKDMwKSBlbSgxMzApO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5oZWFkZXIge1xuICBwYWRkaW5nOiAwIDAgZW0oNDApO1xuICBtYXJnaW46IDAgMSU7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgLmNsb2NrIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBjb2xvcjogJGNvbG9yU2Vjb25kYXJ5O1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IGVtKCRoMUZvbnRTaXplKTtcbiAgICAgIHdlaWdodDogNzAwO1xuICAgIH1cbiAgfVxufVxuXG4uY2FyZHMge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1jb250ZW50OiBmbGV4LXN0YXJ0O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgb3ZlcmZsb3c6IGF1dG87XG4gIHBhZGRpbmc6IDAgZW0oMzApO1xuICBtYXJnaW46IHtcbiAgICBsZWZ0OiBuZWdhdGl2ZShlbSgzMCkpO1xuICAgIHJpZ2h0OiBuZWdhdGl2ZShlbSgzMCkpO1xuICB9O1xuXG4gIHBsYW5uaW5nLXBva2VyLWNhcmQge1xuICAgIG1hcmdpbjogZW0oNTApIDElIDElIDElO1xuICB9XG59XG5mb290ZXIge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7XG4gIGxlZnQ6IDA7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiAxMDAlO1xuICBwYWRkaW5nOiBlbSgzMCk7XG4gIGJhY2tncm91bmQ6ICRjb2xvckJhY2tncm91bmRQcmltYXJ5O1xuXG4gIGJ1dHRvbiB7XG4gICAgbWFyZ2luOiAwIDElO1xuICB9XG59XG4iLCIkY29sb3JCYWNrZ3JvdW5kUHJpbWFyeTogIzFiMWMyYTtcbiRjb2xvclByaW1hcnk6ICNmMGNhMjA7XG4kY29sb3JTZWNvbmRhcnk6ICNmZmZmZmY7XG4kY29sb3JJbmFjdGl2ZTogIzcxNzE3MTtcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BoardComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'planning-poker-board',
                templateUrl: './board.component.html',
                styleUrls: ['./board.component.scss']
            }]
    }], function () { return [{ type: _host_service__WEBPACK_IMPORTED_MODULE_7__["HostService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: ngx_google_analytics__WEBPACK_IMPORTED_MODULE_4__["GoogleAnalyticsService"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=host-host-module.js.map