(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

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
        this.hostRoomSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    get hostRoom() {
        return this.hostRoomSubject$.getValue();
    }
    set hostRoom(value) {
        this.hostRoomSubject$.next(value);
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["startWith"])(null), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(() => new Date()));
    }
    createRoom() {
        return this.pokerService.createRoom()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((roomInfo) => this.hostRoom = roomInfo.id));
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
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "+kfY");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "0Wlh");
/* harmony import */ var _services_poker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/poker.service */ "oG0g");







class GuestService {
    constructor(pokerService) {
        this.pokerService = pokerService;
        this.guestRoomSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    get guestRoom() {
        return this.guestRoomSubject$.getValue();
    }
    set guestRoom(value) {
        this.guestRoomSubject$.next(value);
    }
    checkCode(code) {
        return this.pokerService.checkRoomCode(code)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["delay"])(500), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])((response) => {
            if (response.valid) {
                this.guestRoom = code;
            }
        }));
    }
    sendCard(card) {
        this.pokerService.sendVote({
            card,
            room: this.guestRoom
        });
    }
    getGameState() {
        return this.pokerService.receiveGameState();
    }
    joinRoom(name) {
        this.pokerService.joinRoom(this.guestRoom, _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_1__["ClientType"].VOTER, name);
    }
    getRoomInfo() {
        return this.pokerService.getRoomInfo(this.guestRoom);
    }
    onRoomRemove() {
        return this.pokerService.onRoomRemove();
    }
}
GuestService.ɵfac = function GuestService_Factory(t) { return new (t || GuestService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_services_poker_service__WEBPACK_IMPORTED_MODULE_4__["PokerService"])); };
GuestService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: GuestService, factory: GuestService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuestService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _services_poker_service__WEBPACK_IMPORTED_MODULE_4__["PokerService"] }]; }, null); })();


/***/ }),

/***/ "oG0g":
/*!*************************************************!*\
  !*** ./src/app/poker/services/poker.service.ts ***!
  \*************************************************/
/*! exports provided: PokerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokerService", function() { return PokerService; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "vobO");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "EM62");
/* harmony import */ var _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @planning-poker/api-interfaces */ "l3rL");
/* harmony import */ var ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-socket-io */ "d7Fm");







class PokerService {
    constructor(socket, httpClient) {
        this.socket = socket;
        this.httpClient = httpClient;
    }
    createRoom() {
        return this.httpClient
            .post('/api/create-room', {
            clientId: this.socket.ioSocket.id
        });
    }
    sendVote(vote) {
        this.socket.emit(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["SocketEvents"].VOTE, vote);
    }
    changeGameState(state) {
        const stateMessage = {
            state
        };
        this.socket.emit(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["SocketEvents"].STATE, stateMessage);
    }
    toggleGameState(roomId) {
        this.socket.emit(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["SocketEvents"].STATE, roomId);
    }
    receiveVote() {
        return this.socket.fromEvent(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["SocketEvents"].VOTED);
    }
    receiveGameState() {
        return this.socket.fromEvent(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["SocketEvents"].STATE);
    }
    getUsers() {
        return this.socket.fromEvent(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["SocketEvents"].USERS);
    }
    joinRoom(room, type, name) {
        const request = {
            name,
            room,
            type
        };
        this.socket.emit(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["SocketEvents"].JOIN, request);
    }
    checkRoomCode(code) {
        const request = {
            id: code
        };
        return this.httpClient.post('/api/join-room-code', request);
    }
    getRoomInfo(code) {
        const request = {
            id: code
        };
        return this.httpClient.post('/api/room-info', request);
    }
    onRoomRemove() {
        return this.socket.fromEvent(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["SocketEvents"].ROOM_REMOVED);
    }
}
PokerService.ɵfac = function PokerService_Factory(t) { return new (t || PokerService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"])); };
PokerService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: PokerService, factory: PokerService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](PokerService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: ngx_socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClient"] }]; }, null); })();


/***/ })

}]);
//# sourceMappingURL=common.js.map