(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["common"],{

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