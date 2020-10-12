(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["guest-guest-module"],{

/***/ "BefD":
/*!*****************************************************!*\
  !*** ./src/app/poker/guest/guest-routing.module.ts ***!
  \*****************************************************/
/*! exports provided: GuestRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestRoutingModule", function() { return GuestRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game/game.component */ "TiQZ");
/* harmony import */ var _game_game_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./game/game.guard */ "CN5D");
/* harmony import */ var _game_game_resolver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./game/game.resolver */ "G6iy");
/* harmony import */ var _room_code_room_code_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./room-code/room-code.component */ "z2fH");
/* harmony import */ var _room_code_room_code_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./room-code/room-code.guard */ "RXCX");
/* harmony import */ var _your_name_your_name_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./your-name/your-name.component */ "eOta");
/* harmony import */ var _your_name_your_name_guard__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./your-name/your-name.guard */ "O54e");











const routes = [
    {
        path: '',
        redirectTo: 'room-code'
    },
    {
        path: 'room-code',
        component: _room_code_room_code_component__WEBPACK_IMPORTED_MODULE_5__["RoomCodeComponent"],
        canActivate: [
            _room_code_room_code_guard__WEBPACK_IMPORTED_MODULE_6__["RoomCodeGuard"]
        ],
        data: {
            animation: 'RoomCodeComponent'
        }
    },
    {
        path: 'your-name',
        component: _your_name_your_name_component__WEBPACK_IMPORTED_MODULE_7__["YourNameComponent"],
        canActivate: [
            _your_name_your_name_guard__WEBPACK_IMPORTED_MODULE_8__["YourNameGuard"]
        ],
        data: {
            animation: 'YourNameComponent'
        }
    },
    {
        path: 'game',
        component: _game_game_component__WEBPACK_IMPORTED_MODULE_2__["GameComponent"],
        canActivate: [
            _game_game_guard__WEBPACK_IMPORTED_MODULE_3__["GameGuard"]
        ],
        resolve: {
            data: _game_game_resolver__WEBPACK_IMPORTED_MODULE_4__["GameResolver"]
        },
        data: {
            animation: 'GameComponent'
        }
    }
];
class GuestRoutingModule {
}
GuestRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: GuestRoutingModule });
GuestRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function GuestRoutingModule_Factory(t) { return new (t || GuestRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](GuestRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuestRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "CN5D":
/*!************************************************!*\
  !*** ./src/app/poker/guest/game/game.guard.ts ***!
  \************************************************/
/*! exports provided: GameGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameGuard", function() { return GameGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _guest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../guest.service */ "lQSW");






class GameGuard {
    constructor(guestService, router) {
        this.guestService = guestService;
        this.router = router;
    }
    canActivate() {
        const valid = !!this.guestService.roomId;
        if (!valid) {
            this.router.navigateByUrl('/');
        }
        return valid;
    }
}
GameGuard.ɵfac = function GameGuard_Factory(t) { return new (t || GameGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_guest_service__WEBPACK_IMPORTED_MODULE_2__["GuestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
GameGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameGuard, factory: GameGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _guest_service__WEBPACK_IMPORTED_MODULE_2__["GuestService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "G6iy":
/*!***************************************************!*\
  !*** ./src/app/poker/guest/game/game.resolver.ts ***!
  \***************************************************/
/*! exports provided: GameResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameResolver", function() { return GameResolver; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _guest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../guest.service */ "lQSW");




class GameResolver {
    constructor(guestService) {
        this.guestService = guestService;
    }
    resolve() {
        return this.guestService.getRoomInfo();
    }
}
GameResolver.ɵfac = function GameResolver_Factory(t) { return new (t || GameResolver)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_guest_service__WEBPACK_IMPORTED_MODULE_1__["GuestService"])); };
GameResolver.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GameResolver, factory: GameResolver.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameResolver, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _guest_service__WEBPACK_IMPORTED_MODULE_1__["GuestService"] }]; }, null); })();


/***/ }),

/***/ "GM61":
/*!*********************************************!*\
  !*** ./src/app/poker/guest/guest.module.ts ***!
  \*********************************************/
/*! exports provided: GuestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestModule", function() { return GuestModule; });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../shared/shared.module */ "PCNd");
/* harmony import */ var _guest_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guest-routing.module */ "BefD");
/* harmony import */ var _room_code_room_code_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./room-code/room-code.component */ "z2fH");
/* harmony import */ var _your_name_your_name_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./your-name/your-name.component */ "eOta");
/* harmony import */ var _game_game_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./game/game.component */ "TiQZ");









class GuestModule {
}
GuestModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: GuestModule });
GuestModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function GuestModule_Factory(t) { return new (t || GuestModule)(); }, imports: [[
            _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
            _guest_routing_module__WEBPACK_IMPORTED_MODULE_4__["GuestRoutingModule"],
            _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](GuestModule, { declarations: [_room_code_room_code_component__WEBPACK_IMPORTED_MODULE_5__["RoomCodeComponent"], _your_name_your_name_component__WEBPACK_IMPORTED_MODULE_6__["YourNameComponent"], _game_game_component__WEBPACK_IMPORTED_MODULE_7__["GameComponent"]], imports: [_angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
        _guest_routing_module__WEBPACK_IMPORTED_MODULE_4__["GuestRoutingModule"],
        _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](GuestModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [_room_code_room_code_component__WEBPACK_IMPORTED_MODULE_5__["RoomCodeComponent"], _your_name_your_name_component__WEBPACK_IMPORTED_MODULE_6__["YourNameComponent"], _game_game_component__WEBPACK_IMPORTED_MODULE_7__["GameComponent"]],
                imports: [
                    _angular_common__WEBPACK_IMPORTED_MODULE_0__["CommonModule"],
                    _guest_routing_module__WEBPACK_IMPORTED_MODULE_4__["GuestRoutingModule"],
                    _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"]
                ]
            }]
    }], null, null); })();


/***/ }),

/***/ "O54e":
/*!**********************************************************!*\
  !*** ./src/app/poker/guest/your-name/your-name.guard.ts ***!
  \**********************************************************/
/*! exports provided: YourNameGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourNameGuard", function() { return YourNameGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _guest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../guest.service */ "lQSW");






class YourNameGuard {
    constructor(guestService, router) {
        this.guestService = guestService;
        this.router = router;
    }
    canActivate() {
        const valid = !!this.guestService.roomId;
        if (!valid) {
            this.router.navigateByUrl('/');
        }
        return valid;
    }
}
YourNameGuard.ɵfac = function YourNameGuard_Factory(t) { return new (t || YourNameGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_guest_service__WEBPACK_IMPORTED_MODULE_2__["GuestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
YourNameGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: YourNameGuard, factory: YourNameGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YourNameGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _guest_service__WEBPACK_IMPORTED_MODULE_2__["GuestService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "RXCX":
/*!**********************************************************!*\
  !*** ./src/app/poker/guest/room-code/room-code.guard.ts ***!
  \**********************************************************/
/*! exports provided: RoomCodeGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomCodeGuard", function() { return RoomCodeGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _guest_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../guest.service */ "lQSW");






class RoomCodeGuard {
    constructor(guestService, router) {
        this.guestService = guestService;
        this.router = router;
    }
    canActivate() {
        const valid = !this.guestService.roomId;
        if (!valid) {
            this.router.navigateByUrl('/');
        }
        return valid;
    }
}
RoomCodeGuard.ɵfac = function RoomCodeGuard_Factory(t) { return new (t || RoomCodeGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_guest_service__WEBPACK_IMPORTED_MODULE_2__["GuestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
RoomCodeGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: RoomCodeGuard, factory: RoomCodeGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomCodeGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _guest_service__WEBPACK_IMPORTED_MODULE_2__["GuestService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "TiQZ":
/*!****************************************************!*\
  !*** ./src/app/poker/guest/game/game.component.ts ***!
  \****************************************************/
/*! exports provided: GameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameComponent", function() { return GameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @planning-poker/api-interfaces */ "l3rL");
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-google-analytics */ "PKRn");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _guest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../guest.service */ "lQSW");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "2kYt");
/* harmony import */ var _shared_card_card_card_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/card/card/card.component */ "M8cf");













function GameComponent_ng_container_1_Template(rf, ctx) { if (rf & 1) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerStart"](0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "planning-poker-card", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("cardClick", function GameComponent_ng_container_1_Template_planning_poker_card_cardClick_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r3); const card_r1 = ctx.$implicit; const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r2.onCardClick(card_r1); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementContainerEnd"]();
} if (rf & 2) {
    const card_r1 = ctx.$implicit;
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("card", card_r1)("selected$", ctx_r0.selectedCard$);
} }
class GameComponent {
    constructor(guestService, changeDetectorRef, activatedRoute, router, $gaService) {
        this.guestService = guestService;
        this.changeDetectorRef = changeDetectorRef;
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.$gaService = $gaService;
        this.inReview = false;
        this.cards = [
            _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["Cards"].ZERO,
            _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["Cards"].HALF,
            _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["Cards"].ONE,
            _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["Cards"].TWO,
            _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["Cards"].THREE,
            _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["Cards"].FIVE,
            _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["Cards"].EIGHT,
            _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["Cards"].THIRTEEN,
            _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["Cards"].TWENTY,
            _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["Cards"].FORTY,
            _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["Cards"].HUNDRED,
            _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["Cards"].QUESTION_MARK,
            _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["Cards"].COFFEE,
            _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["Cards"].INFINITE
        ];
        this.selectedCardValueSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](null);
        this.destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.selectedCard$ = this.selectedCardValueSubject$.asObservable();
    }
    ngOnInit() {
        this.$gaService.pageView('/game');
        const roomInfo = this.activatedRoute.snapshot.data.data;
        this.inReview = roomInfo.state === _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["GameStates"].REVIEW;
        this.guestService.getGameState()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroySubject$))
            .subscribe((gameState) => this.handleGameState(gameState));
        this.guestService.onRoomRemove()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroySubject$))
            .subscribe(() => this.handleRoomRemove());
    }
    ngOnDestroy() {
        this.destroySubject$.next(null);
    }
    set selectedCard(value) {
        if (this.inReview) {
            return;
        }
        this.selectedCardValueSubject$.next(value);
        this.guestService.sendCard(value);
    }
    onCardClick(card) {
        this.$gaService.event('user_voted', 'guest', 'User voted');
        this.selectedCard = card;
    }
    handleGameState(gameState) {
        this.inReview = gameState.state === _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["GameStates"].REVIEW;
        if (gameState.state === _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["GameStates"].IN_PROGRESS) {
            this.selectedCardValueSubject$.next(null);
            this.changeDetectorRef.detectChanges();
        }
    }
    handleRoomRemove() {
        this.router.navigateByUrl('/');
        this.guestService.roomId = null;
    }
}
GameComponent.ɵfac = function GameComponent_Factory(t) { return new (t || GameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_guest_service__WEBPACK_IMPORTED_MODULE_6__["GuestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_google_analytics__WEBPACK_IMPORTED_MODULE_3__["GoogleAnalyticsService"])); };
GameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GameComponent, selectors: [["planning-poker-game"]], decls: 4, vars: 1, consts: [[1, "cards"], [4, "ngFor", "ngForOf"], [1, "sidebar"], [3, "card", "selected$", "cardClick"]], template: function GameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, GameComponent_ng_container_1_Template, 2, 2, "ng-container", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, " TODO :)\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.cards);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgForOf"], _shared_card_card_card_component__WEBPACK_IMPORTED_MODULE_8__["CardComponent"]], styles: ["[_nghost-%COMP%] {\n  padding: 1.6666666667em;\n  display: flex;\n  align-items: flex-start;\n  width: 100%;\n  height: 100%;\n}\n\n.cards[_ngcontent-%COMP%] {\n  display: flex;\n  width: 65%;\n  flex-direction: row;\n  flex-wrap: wrap;\n}\n\n.cards[_ngcontent-%COMP%]   planning-poker-card[_ngcontent-%COMP%] {\n  margin: 1%;\n}\n\n.sidebar[_ngcontent-%COMP%] {\n  width: 35%;\n  padding: 1.3888888889em;\n}\n\n.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1.1111111111em 0;\n  display: block;\n}\n\n.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0.1111111111em 0;\n  display: block;\n  list-style: none;\n}\n\n.sidebar[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:before {\n  content: \"- \";\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcHMvcGxhbm5pbmctcG9rZXIvc3JjL2FwcC9wb2tlci9ndWVzdC9nYW1lL2dhbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBREY7O0FBSUE7RUFDRSxhQUFBO0VBQ0EsVUFBQTtFQUVFLG1CQUFBO0VBQ0EsZUFBQTtBQUZKOztBQUtFO0VBQ0UsVUFBQTtBQUhKOztBQU9BO0VBQ0UsVUFBQTtFQUNBLHVCQUFBO0FBSkY7O0FBTUU7RUFDRSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0FBSko7O0FBTUk7RUFDRSxTQUFBO0VBQ0EseUJBQUE7RUFDQSxjQUFBO0VBQ0EsZ0JBQUE7QUFKTjs7QUFNTTtFQUNFLGFBQUE7QUFKUiIsImZpbGUiOiJhcHBzL3BsYW5uaW5nLXBva2VyL3NyYy9hcHAvcG9rZXIvZ3Vlc3QvZ2FtZS9nYW1lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIkBzdHlsZXMvc2hhcmVkXCI7XG5cbjpob3N0IHtcbiAgcGFkZGluZzogZW0oMzApO1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuLmNhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IDY1JTtcbiAgZmxleDoge1xuICAgIGRpcmVjdGlvbjogcm93O1xuICAgIHdyYXA6IHdyYXA7XG4gIH1cblxuICBwbGFubmluZy1wb2tlci1jYXJkIHtcbiAgICBtYXJnaW46IDElO1xuICB9XG59XG5cbi5zaWRlYmFyIHtcbiAgd2lkdGg6IDM1JTtcbiAgcGFkZGluZzogZW0oMjUpO1xuXG4gIHVsIHtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogZW0oMjApIDA7XG4gICAgZGlzcGxheTogYmxvY2s7XG5cbiAgICBsaSB7XG4gICAgICBtYXJnaW46IDA7XG4gICAgICBwYWRkaW5nOiBlbSgyKSAwO1xuICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICBsaXN0LXN0eWxlOiBub25lO1xuXG4gICAgICAmOmJlZm9yZSB7XG4gICAgICAgIGNvbnRlbnQ6ICctICc7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'planning-poker-game',
                templateUrl: './game.component.html',
                styleUrls: ['./game.component.scss']
            }]
    }], function () { return [{ type: _guest_service__WEBPACK_IMPORTED_MODULE_6__["GuestService"] }, { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectorRef"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: ngx_google_analytics__WEBPACK_IMPORTED_MODULE_3__["GoogleAnalyticsService"] }]; }, null); })();


/***/ }),

/***/ "eOta":
/*!**************************************************************!*\
  !*** ./src/app/poker/guest/your-name/your-name.component.ts ***!
  \**************************************************************/
/*! exports provided: YourNameComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YourNameComponent", function() { return YourNameComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "nIj0");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-google-analytics */ "PKRn");
/* harmony import */ var _guest_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../guest.service */ "lQSW");
/* harmony import */ var _shared_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/layout/layout/layout.component */ "rqBn");
/* harmony import */ var _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../shared/layout/header/header.component */ "6EaX");
/* harmony import */ var _shared_layout_content_content_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/layout/content/content.component */ "hi3J");
/* harmony import */ var _shared_form_form_container_form_container_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/form/form-container/form-container.component */ "dN4T");
/* harmony import */ var _shared_form_focus_focus_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/form/focus/focus.directive */ "sRyt");
/* harmony import */ var _shared_form_input_input_directive__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../shared/form/input/input.directive */ "d7z7");
/* harmony import */ var _shared_button_button_directive__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../../shared/button/button.directive */ "M0Hd");
/* harmony import */ var _shared_icon_icon_icon_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../../shared/icon/icon/icon.component */ "W79N");


















class YourNameComponent {
    constructor(formBuilder, guestService, router, $gaService) {
        this.formBuilder = formBuilder;
        this.guestService = guestService;
        this.router = router;
        this.$gaService = $gaService;
    }
    ngOnInit() {
        this.$gaService.pageView('/your-name');
        this.formGroup = this.formBuilder.group({
            name: this.formBuilder.control(null, [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required])
        });
    }
    get nameFormControl() {
        return this.formGroup.get('name');
    }
    submit() {
        if (this.formGroup.valid) {
            this.guestService.joinRoom(this.nameFormControl.value);
            this.router.navigateByUrl('/guest/game');
        }
    }
}
YourNameComponent.ɵfac = function YourNameComponent_Factory(t) { return new (t || YourNameComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_guest_service__WEBPACK_IMPORTED_MODULE_4__["GuestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_google_analytics__WEBPACK_IMPORTED_MODULE_3__["GoogleAnalyticsService"])); };
YourNameComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: YourNameComponent, selectors: [["planning-poker-your-name"]], decls: 11, vars: 1, consts: [[3, "formGroup"], ["type", "text", "formControlName", "name", "planningPokerFocus", "", "planningPokerInput", ""], ["planningPokerButton", "", 3, "click"]], template: function YourNameComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "planning-poker-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "planning-poker-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Introduce yourself");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "planning-poker-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "planning-poker-form-container");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "form", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](7, "input", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function YourNameComponent_Template_button_click_8_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "planning-poker-icon");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " arrow_forward ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.formGroup);
    } }, directives: [_shared_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_5__["LayoutComponent"], _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_6__["HeaderComponent"], _shared_layout_content_content_component__WEBPACK_IMPORTED_MODULE_7__["ContentComponent"], _shared_form_form_container_form_container_component__WEBPACK_IMPORTED_MODULE_8__["FormContainerComponent"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _shared_form_focus_focus_directive__WEBPACK_IMPORTED_MODULE_9__["FocusDirective"], _shared_form_input_input_directive__WEBPACK_IMPORTED_MODULE_10__["InputDirective"], _shared_button_button_directive__WEBPACK_IMPORTED_MODULE_11__["ButtonDirective"], _shared_icon_icon_icon_component__WEBPACK_IMPORTED_MODULE_12__["IconComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL3BsYW5uaW5nLXBva2VyL3NyYy9hcHAvcG9rZXIvZ3Vlc3QveW91ci1uYW1lL3lvdXItbmFtZS5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](YourNameComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'planning-poker-your-name',
                templateUrl: './your-name.component.html',
                styleUrls: ['./your-name.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"] }, { type: _guest_service__WEBPACK_IMPORTED_MODULE_4__["GuestService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }, { type: ngx_google_analytics__WEBPACK_IMPORTED_MODULE_3__["GoogleAnalyticsService"] }]; }, null); })();


/***/ }),

/***/ "lQSW":
/*!**********************************************!*\
  !*** ./src/app/poker/guest/guest.service.ts ***!
  \**********************************************/
/*! exports provided: GuestService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuestService", function() { return GuestService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @planning-poker/api-interfaces */ "l3rL");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _services_poker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/poker.service */ "oG0g");






class GuestService {
    constructor(pokerService) {
        this.pokerService = pokerService;
    }
    checkCode(code) {
        return this.pokerService.checkRoomCode(code)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["delay"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((response) => {
            if (response.valid) {
                this.roomId = code;
            }
        }));
    }
    sendCard(card) {
        this.pokerService.sendVote({
            card,
            room: this.roomId
        });
    }
    getGameState() {
        return this.pokerService.receiveGameState();
    }
    joinRoom(name) {
        this.pokerService.joinRoom(this.roomId, _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_1__["ClientType"].VOTER, name);
    }
    getRoomInfo() {
        return this.pokerService.getRoomInfo(this.roomId);
    }
    onRoomRemove() {
        return this.pokerService.onRoomRemove();
    }
}
GuestService.ɵfac = function GuestService_Factory(t) { return new (t || GuestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_poker_service__WEBPACK_IMPORTED_MODULE_3__["PokerService"])); };
GuestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GuestService, factory: GuestService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_poker_service__WEBPACK_IMPORTED_MODULE_3__["PokerService"] }]; }, null); })();


/***/ }),

/***/ "z2fH":
/*!**************************************************************!*\
  !*** ./src/app/poker/guest/room-code/room-code.component.ts ***!
  \**************************************************************/
/*! exports provided: RoomCodeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoomCodeComponent", function() { return RoomCodeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "sEIs");
/* harmony import */ var _shared_form_code_code_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shared/form/code/code.component */ "ur7N");
/* harmony import */ var ngx_google_analytics__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-google-analytics */ "PKRn");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _guest_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../guest.service */ "lQSW");
/* harmony import */ var _shared_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/layout/layout/layout.component */ "rqBn");
/* harmony import */ var _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../shared/layout/header/header.component */ "6EaX");
/* harmony import */ var _shared_layout_content_content_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../../shared/layout/content/content.component */ "hi3J");















class RoomCodeComponent {
    constructor(router, guestService, $gaService) {
        this.router = router;
        this.guestService = guestService;
        this.$gaService = $gaService;
        this.loadingSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.successSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.errorSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["BehaviorSubject"](false);
        this.destroySubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
        this.loading$ = this.loadingSubject$.asObservable();
        this.success$ = this.successSubject$.asObservable();
        this.error$ = this.errorSubject$.asObservable();
    }
    ngOnInit() {
        this.$gaService.pageView('/room-code');
    }
    ngOnDestroy() {
        this.destroySubject$.next(null);
    }
    onCodeSubmit(code) {
        if (this.loadingSubject$.getValue()) {
            return;
        }
        this.loadingSubject$.next(true);
        this.guestService.checkCode(code)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroySubject$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["finalize"])(() => this.loadingSubject$.next(false)), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])((response) => {
            this.loadingSubject$.next(false);
            if (response.valid) {
                this.successSubject$.next(true);
            }
            else {
                this.errorSubject$.next(true);
            }
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["delay"])(1000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(() => this.errorSubject$.next(false)))
            .subscribe((response) => {
            if (response.valid) {
                this.router.navigateByUrl('/guest/your-name');
                this.$gaService.event('code_enter_valid', 'guest', 'Enter code valid');
            }
            else {
                this.codeComponent.reset();
                this.$gaService.event('code_enter_invalid', 'guest', 'Enter code invalid');
            }
        });
    }
}
RoomCodeComponent.ɵfac = function RoomCodeComponent_Factory(t) { return new (t || RoomCodeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_guest_service__WEBPACK_IMPORTED_MODULE_6__["GuestService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_google_analytics__WEBPACK_IMPORTED_MODULE_3__["GoogleAnalyticsService"])); };
RoomCodeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RoomCodeComponent, selectors: [["planning-poker-room-code"]], viewQuery: function RoomCodeComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_shared_form_code_code_component__WEBPACK_IMPORTED_MODULE_2__["CodeComponent"], true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.codeComponent = _t.first);
    } }, decls: 6, vars: 4, consts: [[3, "codeLength", "isLoading$", "isSuccess$", "isError$", "codeSubmit"]], template: function RoomCodeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "planning-poker-layout");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "planning-poker-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Join to exsiting room");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "planning-poker-content");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "planning-poker-code", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("codeSubmit", function RoomCodeComponent_Template_planning_poker_code_codeSubmit_5_listener($event) { return ctx.onCodeSubmit($event); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("codeLength", 5)("isLoading$", ctx.loading$)("isSuccess$", ctx.success$)("isError$", ctx.error$);
    } }, directives: [_shared_layout_layout_layout_component__WEBPACK_IMPORTED_MODULE_7__["LayoutComponent"], _shared_layout_header_header_component__WEBPACK_IMPORTED_MODULE_8__["HeaderComponent"], _shared_layout_content_content_component__WEBPACK_IMPORTED_MODULE_9__["ContentComponent"], _shared_form_code_code_component__WEBPACK_IMPORTED_MODULE_2__["CodeComponent"]], styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHBzL3BsYW5uaW5nLXBva2VyL3NyYy9hcHAvcG9rZXIvZ3Vlc3Qvcm9vbS1jb2RlL3Jvb20tY29kZS5jb21wb25lbnQuc2NzcyJ9 */"], changeDetection: 0 });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RoomCodeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'planning-poker-room-code',
                templateUrl: './room-code.component.html',
                styleUrls: ['./room-code.component.scss'],
                changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _guest_service__WEBPACK_IMPORTED_MODULE_6__["GuestService"] }, { type: ngx_google_analytics__WEBPACK_IMPORTED_MODULE_3__["GoogleAnalyticsService"] }]; }, { codeComponent: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: [_shared_form_code_code_component__WEBPACK_IMPORTED_MODULE_2__["CodeComponent"]]
        }] }); })();


/***/ })

}]);
//# sourceMappingURL=guest-guest-module.js.map