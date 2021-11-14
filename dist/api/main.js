/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./apps/api/src/app/app.controller.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppController": () => (/* binding */ AppController)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let AppController = class AppController {
};
AppController = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Controller)()
], AppController);



/***/ }),

/***/ "./apps/api/src/app/app.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./apps/api/src/app/app.controller.ts");
/* harmony import */ var _poker_poker_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./apps/api/src/app/poker/poker.module.ts");




let AppModule = class AppModule {
};
AppModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Module)({
        imports: [_poker_poker_module__WEBPACK_IMPORTED_MODULE_3__.PokerModule],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_2__.AppController]
    })
], AppModule);



/***/ }),

/***/ "./apps/api/src/app/poker/poker.controller.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokerController": () => (/* binding */ PokerController)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./libs/api-interfaces/src/index.ts");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./package.json");
/* harmony import */ var _poker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./apps/api/src/app/poker/poker.service.ts");
var _a, _b, _c, _d, _e, _f, _g, _h;





let PokerController = class PokerController {
    constructor(pokerService) {
        this.pokerService = pokerService;
    }
    createRoom(request) {
        // todo create secure http only cookie here with client id
        if (!request || !request.clientId) {
            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__.HttpException('No clinet id is provided', _nestjs_common__WEBPACK_IMPORTED_MODULE_1__.HttpStatus.BAD_REQUEST);
        }
        const room = this.pokerService.createRoom();
        room.addPlayer({
            id: request.clientId,
            type: _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__.PlayerType.HOST
        });
        return {
            id: room.id,
            gameState: room.state
        };
    }
    joinRoomCode(request) {
        return {
            valid: this.pokerService.checkIsRoomExists(request.id)
        };
    }
    roomInfo(request) {
        return this.pokerService.getRoomInfo(request.id);
    }
    checkPlayerInRoom(playerId, roomNumber) {
        const room = this.pokerService.findPlayerRoom(playerId);
        return room ? room.id === roomNumber : false;
    }
    checkHostOfRoom(playerId, roomNumber) {
        const room = this.pokerService.getRoom(roomNumber);
        return room ? room.host.id === playerId : false;
    }
    getAppInfo() {
        return {
            info: 'version ' + _package_json__WEBPACK_IMPORTED_MODULE_3__.version
        };
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Post)('create-room'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Body)()),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_a = typeof _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__.CreateRoomDto !== "undefined" && _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__.CreateRoomDto) === "function" ? _a : Object]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", typeof (_b = typeof _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__.RoomInfo !== "undefined" && _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__.RoomInfo) === "function" ? _b : Object)
], PokerController.prototype, "createRoom", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Post)('join-room-code'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Body)()),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_c = typeof _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__.JoinRoomCodeRequestDto !== "undefined" && _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__.JoinRoomCodeRequestDto) === "function" ? _c : Object]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", typeof (_d = typeof _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__.JoinRoomCodeResponseDto !== "undefined" && _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__.JoinRoomCodeResponseDto) === "function" ? _d : Object)
], PokerController.prototype, "joinRoomCode", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Post)('room-info'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Body)()),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_e = typeof _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__.JoinRoomCodeRequestDto !== "undefined" && _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__.JoinRoomCodeRequestDto) === "function" ? _e : Object]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", typeof (_f = typeof _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__.RoomInfo !== "undefined" && _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__.RoomInfo) === "function" ? _f : Object)
], PokerController.prototype, "roomInfo", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Get)('check-player-in-room/:playerId/:roomNumber'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Param)('playerId')),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(1, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Param)('roomNumber')),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [String, String]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", Boolean)
], PokerController.prototype, "checkPlayerInRoom", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Get)('check-host-of-room/:playerId/:roomNumber'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(0, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Param)('playerId')),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__param)(1, (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Param)('roomNumber')),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [String, String]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", Boolean)
], PokerController.prototype, "checkHostOfRoom", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Get)('app-info'),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", []),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", typeof (_g = typeof _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__.AppInfoDtoInterface !== "undefined" && _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__.AppInfoDtoInterface) === "function" ? _g : Object)
], PokerController.prototype, "getAppInfo", null);
PokerController = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Controller)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_h = typeof _poker_service__WEBPACK_IMPORTED_MODULE_4__.PokerService !== "undefined" && _poker_service__WEBPACK_IMPORTED_MODULE_4__.PokerService) === "function" ? _h : Object])
], PokerController);



/***/ }),

/***/ "./apps/api/src/app/poker/poker.gateway.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokerGateway": () => (/* binding */ PokerGateway)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@nestjs/websockets");
/* harmony import */ var _nestjs_websockets__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("socket.io");
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./libs/api-interfaces/src/index.ts");
/* harmony import */ var _poker_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./apps/api/src/app/poker/poker.service.ts");
var PokerGateway_1, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;








let PokerGateway = PokerGateway_1 = class PokerGateway {
    constructor(pokerService) {
        this.pokerService = pokerService;
        this.clientConnectedSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__.Subject();
        this.logger = new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Logger(PokerGateway_1.name);
    }
    handleConnection(client) {
        this.logger.log('on connect ' + client.id);
        this.clientConnectedSubject$.next(client.id);
        this.pokerService.addPlayer({
            id: client.id
        });
    }
    handleDisconnect(client) {
        this.logger.log('on disconnect ' + client.id);
        const room = this.pokerService.findPlayerRoom(client.id);
        if (!room) {
            return;
        }
        const player = room.getPlayer(client.id);
        (0,rxjs__WEBPACK_IMPORTED_MODULE_3__.of)(client.id)
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.delay)(15000), (0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.takeUntil)(this.untilClientReconnect$(client.id)))
            .subscribe((id) => {
            if (player && player.type === _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__.PlayerType.HOST) {
                this.onHostDisconnect(room, id);
            }
            else if (room) {
                this.onPlayerDisconnect(room, id);
            }
        });
    }
    /**
     * On user vote.
     * @param client
     * @param card
     * @param roomNumber
     */
    onVote(client, { card, roomNumber }) {
        const room = this.pokerService.findPlayerRoom(client.id);
        if (!room || room.state === _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__.GameStates.REVIEW) {
            return;
        }
        room.patchPlayer(client.id, {
            card,
            status: _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__.PlayerStatuses.VOTED
        });
        this.emitPlayerVoted(room, client.id);
    }
    /**
     * On host change game state.
     * @param client
     * @param roomNumber
     */
    onState(client, roomNumber) {
        this.pokerService.toggleRoomGameState(roomNumber);
        const state = this.pokerService.getRoomGameState(roomNumber);
        const broadcastMessage = {
            state
        };
        this.serverEmitTo(roomNumber, _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__.SocketEvents.STATE, broadcastMessage);
        if (state === _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__.GameStates.IN_PROGRESS) {
            this.pokerService.resetVotingForRoom(roomNumber);
        }
        else {
            this.emitResultsToRoom(roomNumber);
        }
    }
    /**
     * On user join to room.
     * @param client
     * @param message
     */
    onJoin(client, message) {
        const roomNumber = message.room;
        const room = this.pokerService.getRoom(roomNumber);
        room.addPlayer({
            id: client.id,
            name: message.name,
            type: message.type
        });
        client.join(roomNumber);
        this.emitPlayersChangeToRoom(roomNumber);
    }
    /**
     * On player leave room.
     * @param client
     */
    onLeave(client) {
        const room = this.pokerService.findPlayerRoom(client.id);
        if (!room) {
            return;
        }
        client.leave(room.id);
        room.removePlayer(client.id);
        this.emitPlayersChangeToRoom(room.id);
    }
    /**
     * On host close room.
     * @param client
     * @param roomNumber
     */
    onCloseRoom(client, roomNumber) {
        this.removeRoom(roomNumber);
    }
    emitPlayersChangeToRoom(roomNumber) {
        const room = this.pokerService.getRoom(roomNumber);
        if (!room) {
            return;
        }
        const players = room.players
            .map((player) => {
            return {
                id: player.id,
                name: player.name
            };
        });
        this.serverEmitTo(roomNumber, _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__.SocketEvents.PLAYERS, { players });
    }
    onRoomJoined(client) {
        const room = this.pokerService.findPlayerRoom(client.id);
        if (room.state === _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__.GameStates.REVIEW) {
            const results = this.getRoomResults(room.id);
            this.serverEmitTo(client.id, _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__.SocketEvents.RESULTS, results);
        }
    }
    emitResultsToRoom(roomNumber) {
        const results = this.getRoomResults(roomNumber);
        this.serverEmitTo(roomNumber, _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__.SocketEvents.RESULTS, results);
    }
    getRoomResults(roomNumber) {
        const room = this.pokerService.getRoom(roomNumber);
        const results = {};
        room.players.forEach((player) => {
            results[player.id] = {
                card: player.card,
                name: player.name
            };
        });
        return results;
    }
    serverEmitTo(roomNumber, socketEvent, payload) {
        return this.server.to(roomNumber).emit(socketEvent, payload);
    }
    removeRoom(roomNumber) {
        this.pokerService.removeRoom(roomNumber);
        this.emitRoomRemoved(roomNumber);
    }
    emitRoomRemoved(roomNumber) {
        this.serverEmitTo(roomNumber, _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__.SocketEvents.ROOM_REMOVED);
    }
    emitPlayerVoted(room, clientId) {
        this.server.to(room.host.id).emit(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__.SocketEvents.VOTED, clientId);
    }
    onHostDisconnect(room, id) {
        this.removeRoom(room.id);
        this.pokerService.removePlayer(id);
        this.emitPlayersChangeToRoom(id);
    }
    onPlayerDisconnect(room, id) {
        room.removePlayer(id);
        this.pokerService.removePlayer(id);
        this.emitPlayersChangeToRoom(room.id);
    }
    untilClientReconnect$(clientId) {
        return this.clientConnectedSubject$
            .pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_4__.filter)((id) => id === clientId));
    }
};
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__.WebSocketServer)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", typeof (_a = typeof socket_io__WEBPACK_IMPORTED_MODULE_5__.Server !== "undefined" && socket_io__WEBPACK_IMPORTED_MODULE_5__.Server) === "function" ? _a : Object)
], PokerGateway.prototype, "server", void 0);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__.SubscribeMessage)(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__.SocketEvents.VOTE),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_b = typeof socket_io__WEBPACK_IMPORTED_MODULE_5__.Socket !== "undefined" && socket_io__WEBPACK_IMPORTED_MODULE_5__.Socket) === "function" ? _b : Object, typeof (_c = typeof _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__.Vote !== "undefined" && _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__.Vote) === "function" ? _c : Object]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", void 0)
], PokerGateway.prototype, "onVote", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__.SubscribeMessage)(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__.SocketEvents.STATE),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_d = typeof socket_io__WEBPACK_IMPORTED_MODULE_5__.Socket !== "undefined" && socket_io__WEBPACK_IMPORTED_MODULE_5__.Socket) === "function" ? _d : Object, String]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", void 0)
], PokerGateway.prototype, "onState", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__.SubscribeMessage)(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__.SocketEvents.JOIN),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_e = typeof socket_io__WEBPACK_IMPORTED_MODULE_5__.Socket !== "undefined" && socket_io__WEBPACK_IMPORTED_MODULE_5__.Socket) === "function" ? _e : Object, typeof (_f = typeof _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__.JoinRequestDto !== "undefined" && _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__.JoinRequestDto) === "function" ? _f : Object]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", void 0)
], PokerGateway.prototype, "onJoin", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__.SubscribeMessage)(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__.SocketEvents.LEAVE),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_g = typeof socket_io__WEBPACK_IMPORTED_MODULE_5__.Socket !== "undefined" && socket_io__WEBPACK_IMPORTED_MODULE_5__.Socket) === "function" ? _g : Object]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", void 0)
], PokerGateway.prototype, "onLeave", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__.SubscribeMessage)(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__.SocketEvents.CLOSE_ROOM),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_h = typeof socket_io__WEBPACK_IMPORTED_MODULE_5__.Socket !== "undefined" && socket_io__WEBPACK_IMPORTED_MODULE_5__.Socket) === "function" ? _h : Object, String]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", void 0)
], PokerGateway.prototype, "onCloseRoom", null);
(0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__.SubscribeMessage)(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__.SocketEvents.ROOM_JOINED),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:type", Function),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_j = typeof socket_io__WEBPACK_IMPORTED_MODULE_5__.Socket !== "undefined" && socket_io__WEBPACK_IMPORTED_MODULE_5__.Socket) === "function" ? _j : Object]),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:returntype", void 0)
], PokerGateway.prototype, "onRoomJoined", null);
PokerGateway = PokerGateway_1 = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__.WebSocketGateway)(),
    (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__metadata)("design:paramtypes", [typeof (_k = typeof _poker_service__WEBPACK_IMPORTED_MODULE_7__.PokerService !== "undefined" && _poker_service__WEBPACK_IMPORTED_MODULE_7__.PokerService) === "function" ? _k : Object])
], PokerGateway);



/***/ }),

/***/ "./apps/api/src/app/poker/poker.module.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokerModule": () => (/* binding */ PokerModule)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _poker_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./apps/api/src/app/poker/poker.controller.ts");
/* harmony import */ var _poker_gateway__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./apps/api/src/app/poker/poker.gateway.ts");
/* harmony import */ var _poker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./apps/api/src/app/poker/poker.service.ts");





let PokerModule = class PokerModule {
};
PokerModule = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Module)({
        controllers: [
            _poker_controller__WEBPACK_IMPORTED_MODULE_2__.PokerController
        ],
        providers: [
            _poker_gateway__WEBPACK_IMPORTED_MODULE_3__.PokerGateway,
            _poker_service__WEBPACK_IMPORTED_MODULE_4__.PokerService
        ]
    })
], PokerModule);



/***/ }),

/***/ "./apps/api/src/app/poker/poker.service.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PokerService": () => (/* binding */ PokerService)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./libs/api-interfaces/src/index.ts");
/* harmony import */ var _room__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./apps/api/src/app/poker/room.ts");




let PokerService = class PokerService {
    constructor() {
        this.rooms = new Map();
        this.players = new Map();
    }
    toggleGameState(currentState) {
        switch (currentState) {
            case _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__.GameStates.IN_PROGRESS:
                return _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__.GameStates.REVIEW;
            case _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__.GameStates.REVIEW:
                return _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__.GameStates.IN_PROGRESS;
        }
    }
    toggleRoomGameState(roomNumber) {
        const room = this.rooms.get(roomNumber);
        if (!room) {
            return;
        }
        room.state = this.toggleGameState(room.state);
        this.rooms.set(roomNumber, room);
    }
    getRoomGameState(roomNumber) {
        const room = this.rooms.get(roomNumber);
        return room.state;
    }
    createRoom() {
        const room = new _room__WEBPACK_IMPORTED_MODULE_3__.Room();
        if (this.checkIsRoomExists(room.id)) {
            while (!this.checkIsRoomExists(room.id)) {
                room.generateRoomNumber();
            }
        }
        this.rooms.set(room.id, room);
        return room;
    }
    removeRoom(id) {
        this.rooms.delete(id);
    }
    addPlayer(player) {
        this.players.set(player.id, player);
    }
    removePlayer(id) {
        this.players.delete(id);
    }
    checkIsRoomExists(id) {
        return this.rooms.has(id);
    }
    resetVotingForRoom(roomNumber) {
        const room = this.getRoom(roomNumber);
        room.players.forEach((player) => {
            room.patchPlayer(player.id, {
                card: null,
                status: _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__.PlayerStatuses.WAITING
            });
        });
    }
    getRoom(roomNumber) {
        return this.rooms.get(roomNumber);
    }
    findPlayerRoom(playerId) {
        const roomsArray = Array.from(this.rooms.values());
        const foundRoom = roomsArray.find((room) => room.hasRoomPlayer(playerId));
        return foundRoom || null;
    }
    getRoomInfo(roomNumber) {
        const room = this.getRoom(roomNumber);
        return {
            id: room.id,
            gameState: room.state
        };
    }
};
PokerService = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Injectable)()
], PokerService);



/***/ }),

/***/ "./apps/api/src/app/poker/room.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Room": () => (/* binding */ Room)
/* harmony export */ });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./libs/api-interfaces/src/index.ts");


class Room {
    constructor() {
        this.playersMap = new Map();
        this.stateSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__.BehaviorSubject(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_1__.GameStates.IN_PROGRESS);
        this.generateRoomNumber();
    }
    static generateRandomNumber() {
        const calculation = Math.floor(Math.random() * 90000) + 10000;
        return calculation.toString();
    }
    get state() {
        return this.stateSubject$.getValue();
    }
    set state(roomState) {
        this.stateSubject$.next(roomState);
    }
    get players() {
        return this.allPlayersArray
            .filter((player) => player.type === _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_1__.PlayerType.VOTER)
            .sort((firstPlayer, secondPlayer) => secondPlayer.date - firstPlayer.date);
    }
    get host() {
        return this.allPlayersArray
            .find((player) => player.type === _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_1__.PlayerType.HOST);
    }
    generateRoomNumber() {
        this.id = Room.generateRandomNumber();
    }
    addPlayer(player) {
        this.playersMap.set(player.id, player);
    }
    getPlayer(playerId) {
        return this.playersMap.get(playerId);
    }
    removePlayer(playerId) {
        this.playersMap.delete(playerId);
    }
    patchPlayer(playerId, patchData) {
        const player = this.playersMap.get(playerId);
        this.playersMap.set(playerId, Object.assign(Object.assign({}, player), patchData));
    }
    hasRoomPlayer(playerId) {
        return this.playersMap.has(playerId);
    }
    get allPlayersArray() {
        return Array.from(this.playersMap.values());
    }
}


/***/ }),

/***/ "./apps/api/src/frontend-redirect.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NotFoundExceptionFilter": () => (/* binding */ NotFoundExceptionFilter)
/* harmony export */ });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);



let NotFoundExceptionFilter = class NotFoundExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        response.sendFile(path__WEBPACK_IMPORTED_MODULE_2__.resolve('./public/index.html'));
    }
};
NotFoundExceptionFilter = (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__decorate)([
    (0,_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Catch)(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__.NotFoundException)
], NotFoundExceptionFilter);



/***/ }),

/***/ "./libs/api-interfaces/src/index.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cards": () => (/* reexport safe */ _lib_enum_cards_enum__WEBPACK_IMPORTED_MODULE_16__.Cards),
/* harmony export */   "GameStates": () => (/* reexport safe */ _lib_enum_game_states_enum__WEBPACK_IMPORTED_MODULE_17__.GameStates),
/* harmony export */   "SocketEvents": () => (/* reexport safe */ _lib_enum_socket_events__WEBPACK_IMPORTED_MODULE_18__.SocketEvents),
/* harmony export */   "PlayerStatuses": () => (/* reexport safe */ _lib_enum_player_statuses_enum__WEBPACK_IMPORTED_MODULE_19__.PlayerStatuses),
/* harmony export */   "PlayerType": () => (/* reexport safe */ _lib_enum_player_type_enum__WEBPACK_IMPORTED_MODULE_20__.PlayerType)
/* harmony export */ });
/* harmony import */ var _lib_model_app_info_dto_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("./libs/api-interfaces/src/lib/model/app-info-dto.interface.ts");
/* harmony import */ var _lib_model_vote_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("./libs/api-interfaces/src/lib/model/vote.interface.ts");
/* harmony import */ var _lib_model_state_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("./libs/api-interfaces/src/lib/model/state.interface.ts");
/* harmony import */ var _lib_model_room_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./libs/api-interfaces/src/lib/model/room.info.ts");
/* harmony import */ var _lib_model_player_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./libs/api-interfaces/src/lib/model/player.interface.ts");
/* harmony import */ var _lib_model_create_room_dto_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("./libs/api-interfaces/src/lib/model/create-room-dto.interface.ts");
/* harmony import */ var _lib_model_game_state_dto_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__("./libs/api-interfaces/src/lib/model/game-state-dto.interface.ts");
/* harmony import */ var _lib_model_game_state_broadcast_dto_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__("./libs/api-interfaces/src/lib/model/game-state-broadcast-dto.interface.ts");
/* harmony import */ var _lib_model_join_room_code_request_dto_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__("./libs/api-interfaces/src/lib/model/join-room-code-request-dto.interface.ts");
/* harmony import */ var _lib_model_join_room_code_response_dto_interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__("./libs/api-interfaces/src/lib/model/join-room-code-response-dto.interface.ts");
/* harmony import */ var _lib_model_join_room_name_request_dto_interface__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__("./libs/api-interfaces/src/lib/model/join-room-name-request-dto.interface.ts");
/* harmony import */ var _lib_model_join_request_dto_interface__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__("./libs/api-interfaces/src/lib/model/join-request-dto.interface.ts");
/* harmony import */ var _lib_model_results_dto_interface__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__("./libs/api-interfaces/src/lib/model/results-dto.interface.ts");
/* harmony import */ var _lib_model_result_interface__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__("./libs/api-interfaces/src/lib/model/result.interface.ts");
/* harmony import */ var _lib_model_users_response_dto_interface__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__("./libs/api-interfaces/src/lib/model/users-response-dto.interface.ts");
/* harmony import */ var _lib_model_voted_interface__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__("./libs/api-interfaces/src/lib/model/voted.interface.ts");
/* harmony import */ var _lib_enum_cards_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__("./libs/api-interfaces/src/lib/enum/cards.enum.ts");
/* harmony import */ var _lib_enum_game_states_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__("./libs/api-interfaces/src/lib/enum/game-states.enum.ts");
/* harmony import */ var _lib_enum_socket_events__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__("./libs/api-interfaces/src/lib/enum/socket.events.ts");
/* harmony import */ var _lib_enum_player_statuses_enum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__("./libs/api-interfaces/src/lib/enum/player-statuses.enum.ts");
/* harmony import */ var _lib_enum_player_type_enum__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__("./libs/api-interfaces/src/lib/enum/player-type.enum.ts");
/**
 * Model
 */
















/**
 * Enum
 */







/***/ }),

/***/ "./libs/api-interfaces/src/lib/enum/cards.enum.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cards": () => (/* binding */ Cards)
/* harmony export */ });
var Cards;
(function (Cards) {
    Cards[Cards["ZERO"] = 0] = "ZERO";
    Cards["HALF"] = "1/2";
    Cards[Cards["ONE"] = 1] = "ONE";
    Cards[Cards["TWO"] = 2] = "TWO";
    Cards[Cards["THREE"] = 3] = "THREE";
    Cards[Cards["FIVE"] = 5] = "FIVE";
    Cards[Cards["EIGHT"] = 8] = "EIGHT";
    Cards[Cards["THIRTEEN"] = 13] = "THIRTEEN";
    Cards[Cards["TWENTY"] = 20] = "TWENTY";
    Cards[Cards["FORTY"] = 40] = "FORTY";
    Cards[Cards["HUNDRED"] = 100] = "HUNDRED";
    Cards["QUESTION_MARK"] = "?";
    Cards["COFFEE"] = "coffee";
    Cards["INFINITE"] = "infinite";
})(Cards || (Cards = {}));


/***/ }),

/***/ "./libs/api-interfaces/src/lib/enum/game-states.enum.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GameStates": () => (/* binding */ GameStates)
/* harmony export */ });
var GameStates;
(function (GameStates) {
    GameStates["IN_PROGRESS"] = "IN_PROGRESS";
    GameStates["REVIEW"] = "REVIEW";
})(GameStates || (GameStates = {}));


/***/ }),

/***/ "./libs/api-interfaces/src/lib/enum/player-statuses.enum.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerStatuses": () => (/* binding */ PlayerStatuses)
/* harmony export */ });
var PlayerStatuses;
(function (PlayerStatuses) {
    PlayerStatuses["WAITING"] = "WAITING";
    PlayerStatuses["VOTED"] = "VOTED";
})(PlayerStatuses || (PlayerStatuses = {}));


/***/ }),

/***/ "./libs/api-interfaces/src/lib/enum/player-type.enum.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PlayerType": () => (/* binding */ PlayerType)
/* harmony export */ });
var PlayerType;
(function (PlayerType) {
    PlayerType["VOTER"] = "VOTER";
    PlayerType["HOST"] = "HOST";
})(PlayerType || (PlayerType = {}));


/***/ }),

/***/ "./libs/api-interfaces/src/lib/enum/socket.events.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SocketEvents": () => (/* binding */ SocketEvents)
/* harmony export */ });
var SocketEvents;
(function (SocketEvents) {
    SocketEvents["VOTE"] = "VOTE";
    SocketEvents["PLAYERS"] = "PLAYERS";
    SocketEvents["STATE"] = "STATE";
    SocketEvents["JOIN"] = "JOIN";
    SocketEvents["ROOM_JOINED"] = "ROOM_JOINED";
    SocketEvents["LEAVE"] = "LEAVE";
    SocketEvents["CLOSE_ROOM"] = "CLOSE_ROOM";
    SocketEvents["ROOM_REMOVED"] = "ROOM_REMOVED";
    SocketEvents["VOTED"] = "VOTED";
    SocketEvents["RESULTS"] = "RESULTS";
})(SocketEvents || (SocketEvents = {}));


/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/app-info-dto.interface.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/create-room-dto.interface.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/game-state-broadcast-dto.interface.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/game-state-dto.interface.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/join-request-dto.interface.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/join-room-code-request-dto.interface.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/join-room-code-response-dto.interface.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/join-room-name-request-dto.interface.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/player.interface.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/result.interface.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/results-dto.interface.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/room.info.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/state.interface.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/users-response-dto.interface.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/vote.interface.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/voted.interface.ts":
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "@nestjs/common":
/***/ ((module) => {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/***/ ((module) => {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/websockets":
/***/ ((module) => {

module.exports = require("@nestjs/websockets");

/***/ }),

/***/ "rxjs":
/***/ ((module) => {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/***/ ((module) => {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "socket.io":
/***/ ((module) => {

module.exports = require("socket.io");

/***/ }),

/***/ "tslib":
/***/ ((module) => {

module.exports = require("tslib");

/***/ }),

/***/ "path":
/***/ ((module) => {

module.exports = require("path");

/***/ }),

/***/ "./package.json":
/***/ ((module) => {

module.exports = JSON.parse('{"name":"planning-poker","version":"1.2.0","license":"MIT","scripts":{"ng":"nx","postinstall":"node ./decorate-angular-cli.js && ngcc --properties es2015 browser module main --first-only --create-ivy-entry-points","nx":"nx","start":"ng serve","start:frontend":"npm run start","start:backend":"npm run nx serve api","build":"ng build","build:frontend:prod":"ng lint && ng build --configuration production","build:backend:prod":"ng lint api && ng build api --configuration production","test":"ng test","lint":"nx workspace-lint && ng lint","e2e":"ng e2e","affected:apps":"nx affected:apps","affected:libs":"nx affected:libs","affected:build":"nx affected:build","affected:e2e":"nx affected:e2e","affected:test":"nx affected:test","affected:lint":"nx affected:lint","affected:dep-graph":"nx affected:dep-graph","affected":"nx affected","format":"nx format:write","format:write":"nx format:write","format:check":"nx format:check","update":"ng update @nrwl/workspace","workspace-schematic":"nx workspace-schematic","dep-graph":"nx dep-graph","help":"nx help"},"private":true,"dependencies":{"@angular/animations":"^13.0.1","@angular/common":"^13.0.1","@angular/compiler":"^13.0.1","@angular/core":"^13.0.1","@angular/forms":"^13.0.1","@angular/platform-browser":"^13.0.1","@angular/platform-browser-dynamic":"^13.0.1","@angular/router":"^13.0.1","@nestjs/common":"^7.0.0","@nestjs/core":"^7.0.0","@nestjs/platform-express":"^7.0.0","@nestjs/platform-socket.io":"^7.4.4","@nestjs/websockets":"^7.4.4","@ngxs/store":"^3.7.0","@ngxs/websocket-plugin":"^3.7.0","@nrwl/angular":"13.1.4","@rx-angular/state":"^1.4.1","@rx-angular/template":"^1.0.0-beta.28","ngx-cookie-service":"^11.0.2","ngx-google-analytics":"^9.0.1","ngx-socket-io":"^3.2.0","normalize.css":"^8.0.1","reflect-metadata":"^0.1.13","rxjs":"^7.4.0","zone.js":"~0.11.4"},"devDependencies":{"@angular-devkit/build-angular":"~13.0.2","@angular/cli":"~13.0.2","@angular/compiler-cli":"^13.0.1","@angular/language-service":"^13.0.1","@nestjs/schematics":"^7.0.0","@nestjs/testing":"^7.0.0","@ngxs/devtools-plugin":"^3.7.0","@ngxs/logger-plugin":"^3.7.0","@nrwl/cli":"13.1.4","@nrwl/cypress":"13.1.4","@nrwl/jest":"13.1.4","@nrwl/nest":"13.1.4","@nrwl/node":"13.1.4","@nrwl/workspace":"13.1.4","@types/jest":"26.0.8","@types/node":"~8.9.4","@types/socket.io":"^2.1.11","codelyzer":"^6.0.0","cypress":"^4.1.0","dotenv":"6.2.0","eslint":"7.10.0","jest":"26.2.2","jest-preset-angular":"8.3.1","prettier":"2.4.1","ts-jest":"26.4.0","ts-node":"~7.0.0","tslint":"~6.1.3","typescript":"~4.4.4"}}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("./apps/api/src/app/app.module.ts");
/* harmony import */ var _frontend_redirect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("./apps/api/src/frontend-redirect.ts");
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */





function bootstrap() {
    return (0,tslib__WEBPACK_IMPORTED_MODULE_0__.__awaiter)(this, void 0, void 0, function* () {
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_2__.NestFactory.create(_app_app_module__WEBPACK_IMPORTED_MODULE_3__.AppModule);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        app.useGlobalFilters(new _frontend_redirect__WEBPACK_IMPORTED_MODULE_4__.NotFoundExceptionFilter());
        yield app.listen(port, () => {
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__.Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
        });
    });
}
bootstrap();

})();

var __webpack_export_target__ = exports;
for(var i in __webpack_exports__) __webpack_export_target__[i] = __webpack_exports__[i];
if(__webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;
//# sourceMappingURL=main.js.map