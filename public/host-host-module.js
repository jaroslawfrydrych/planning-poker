(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["host-host-module"],{

/***/ "+cqM":
/*!********************************************!*\
  !*** ./src/app/poker/host/host.service.ts ***!
  \********************************************/
/*! exports provided: HostService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HostService", function() { return HostService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @planning-poker/api-interfaces */ "l3rL");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _services_poker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/poker.service */ "oG0g");







class HostService {
    constructor(pokerService) {
        this.pokerService = pokerService;
        this.gameStateSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_1__["GameStates"].IN_PROGRESS);
        this.gameState$ = this.gameStateSubject$.asObservable();
    }
    getUsers() {
        return this.pokerService.getUsers()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((response) => {
            return response.clients;
        }));
    }
    toggleGameState(roomId) {
        this.pokerService.toggleGameState(roomId);
    }
    currentTime() {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["interval"])(1000)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => new Date()));
    }
    createRoom() {
        return this.pokerService.createRoom();
    }
    getGameState() {
        return this.pokerService.receiveGameState();
    }
    joinRoom(room) {
        this.pokerService.joinRoom(room, _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_1__["ClientType"].HOST);
    }
}
HostService.ɵfac = function HostService_Factory(t) { return new (t || HostService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_poker_service__WEBPACK_IMPORTED_MODULE_4__["PokerService"])); };
HostService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: HostService, factory: HostService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HostService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_poker_service__WEBPACK_IMPORTED_MODULE_4__["PokerService"] }]; }, null); })();


/***/ }),

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






class HostModule {
}
HostModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: HostModule });
HostModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function HostModule_Factory(t) { return new (t || HostModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _host_routing_module__WEBPACK_IMPORTED_MODULE_4__["HostRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](HostModule, { declarations: [_board_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _host_routing_module__WEBPACK_IMPORTED_MODULE_4__["HostRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](HostModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_board_board_component__WEBPACK_IMPORTED_MODULE_3__["BoardComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _host_routing_module__WEBPACK_IMPORTED_MODULE_4__["HostRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_2__["SharedModule"]
                ]
            }]
    }], null, null); })();


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






const routes = [
    {
        path: '',
        component: _board_board_component__WEBPACK_IMPORTED_MODULE_2__["BoardComponent"],
        resolve: {
            data: _board_board_resolver__WEBPACK_IMPORTED_MODULE_3__["BoardResolver"]
        },
        data: {
            animation: 'BoardComponent'
        }
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
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["NgForOf"], _shared_button_button_directive__WEBPACK_IMPORTED_MODULE_9__["ButtonDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitch"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchCase"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["NgSwitchDefault"], _shared_card_card_card_component__WEBPACK_IMPORTED_MODULE_10__["CardComponent"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_8__["DatePipe"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["AsyncPipe"]], styles: ["[_nghost-%COMP%] {\n  padding: 1.6666666667em 1.6666666667em 7.2222222222em;\n  display: flex;\n  width: 100%;\n  flex-direction: column;\n  height: 100%;\n}\n\nheader[_ngcontent-%COMP%] {\n  padding: 0 0 2.2222222222em;\n  margin: 0 1%;\n  display: flex;\n}\n\nheader[_ngcontent-%COMP%]   .clock[_ngcontent-%COMP%] {\n  margin-left: auto;\n  color: #ffffff;\n  font-size: 2.6666666667em;\n  font-weight: 700;\n}\n\n.cards[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 100%;\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: flex-start;\n  align-content: flex-start;\n  align-items: flex-start;\n}\n\n.cards[_ngcontent-%COMP%]   planning-poker-card[_ngcontent-%COMP%] {\n  margin: 2.7777777778em 1% 1% 1%;\n}\n\nfooter[_ngcontent-%COMP%] {\n  position: absolute;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  display: flex;\n  width: 100%;\n  padding: 1.6666666667em;\n  background: #1b1c2a;\n}\n\nfooter[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  margin: 0 1%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvcGxhbm5pbmctcG9rZXIvc3JjL2FwcC9wb2tlci9ob3N0L2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIiwiYXBwcy9wbGFubmluZy1wb2tlci9zcmMvc2hhcmVkL0BzdHlsZXMvX2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0UscURBQUE7RUFDQSxhQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0VBQ0EsWUFBQTtBQURGOztBQUlBO0VBQ0UsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtBQURGOztBQUdFO0VBQ0UsaUJBQUE7RUFDQSxjQ2ZhO0VEaUJYLHlCQUFBO0VBQ0EsZ0JBQUE7QUFGTjs7QUFPQTtFQUNFLFdBQUE7RUFDQSxZQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLDJCQUFBO0VBQ0EseUJBQUE7RUFDQSx1QkFBQTtBQUpGOztBQU1FO0VBQ0UsK0JBQUE7QUFKSjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxPQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG1CQy9DdUI7QUQyQ3pCOztBQU1FO0VBQ0UsWUFBQTtBQUpKIiwiZmlsZSI6ImFwcHMvcGxhbm5pbmctcG9rZXIvc3JjL2FwcC9wb2tlci9ob3N0L2JvYXJkL2JvYXJkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIkBzdHlsZXMvc2hhcmVkXCI7XG5cbjpob3N0IHtcbiAgcGFkZGluZzogZW0oMzApIGVtKDMwKSBlbSgxMzApO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogMTAwJTtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgaGVpZ2h0OiAxMDAlO1xufVxuXG5oZWFkZXIge1xuICBwYWRkaW5nOiAwIDAgZW0oNDApO1xuICBtYXJnaW46IDAgMSU7XG4gIGRpc3BsYXk6IGZsZXg7XG5cbiAgLmNsb2NrIHtcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBjb2xvcjogJGNvbG9yU2Vjb25kYXJ5O1xuICAgIGZvbnQ6IHtcbiAgICAgIHNpemU6IGVtKCRoMUZvbnRTaXplKTtcbiAgICAgIHdlaWdodDogNzAwO1xuICAgIH1cbiAgfVxufVxuXG4uY2FyZHMge1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG5cbiAgcGxhbm5pbmctcG9rZXItY2FyZCB7XG4gICAgbWFyZ2luOiBlbSg1MCkgMSUgMSUgMSU7XG4gIH1cbn1cbmZvb3RlciB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgcmlnaHQ6IDA7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IGVtKDMwKTtcbiAgYmFja2dyb3VuZDogJGNvbG9yQmFja2dyb3VuZFByaW1hcnk7XG5cbiAgYnV0dG9uIHtcbiAgICBtYXJnaW46IDAgMSU7XG4gIH1cbn1cbiIsIiRjb2xvckJhY2tncm91bmRQcmltYXJ5OiAjMWIxYzJhO1xuJGNvbG9yUHJpbWFyeTogI2YwY2EyMDtcbiRjb2xvclNlY29uZGFyeTogI2ZmZmZmZjtcbiRjb2xvckluYWN0aXZlOiAjNzE3MTcxO1xuIl19 */"] });
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