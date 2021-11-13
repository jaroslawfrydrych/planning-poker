(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./apps/api/src/app/app.controller.ts":
/*!********************************************!*\
  !*** ./apps/api/src/app/app.controller.ts ***!
  \********************************************/
/*! exports provided: AppController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppController", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let AppController = class AppController {
};
AppController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])()
], AppController);



/***/ }),

/***/ "./apps/api/src/app/app.module.ts":
/*!****************************************!*\
  !*** ./apps/api/src/app/app.module.ts ***!
  \****************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.controller */ "./apps/api/src/app/app.controller.ts");
/* harmony import */ var _poker_poker_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./poker/poker.module */ "./apps/api/src/app/poker/poker.module.ts");




let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_poker_poker_module__WEBPACK_IMPORTED_MODULE_3__["PokerModule"]],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_2__["AppController"]]
    })
], AppModule);



/***/ }),

/***/ "./apps/api/src/app/poker/poker.controller.ts":
/*!****************************************************!*\
  !*** ./apps/api/src/app/poker/poker.controller.ts ***!
  \****************************************************/
/*! exports provided: PokerController */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokerController", function() { return PokerController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @planning-poker/api-interfaces */ "./libs/api-interfaces/src/index.ts");
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../package.json */ "./package.json");
var _package_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../../../../package.json */ "./package.json", 1);
/* harmony import */ var _poker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./poker.service */ "./apps/api/src/app/poker/poker.service.ts");
var _a, _b, _c, _d, _e, _f, _g, _h;





let PokerController = class PokerController {
    constructor(pokerService) {
        this.pokerService = pokerService;
    }
    createRoom(request) {
        // todo create secure http only cookie here with client id
        if (!request || !request.clientId) {
            throw new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpException"]('No clinet id is provided', _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["HttpStatus"].BAD_REQUEST);
        }
        const room = this.pokerService.createRoom();
        room.addPlayer({
            id: request.clientId,
            type: _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["PlayerType"].HOST
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
            info: 'version ' + _package_json__WEBPACK_IMPORTED_MODULE_3__["version"]
        };
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('create-room'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["CreateRoomDto"] !== "undefined" && _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["CreateRoomDto"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["RoomInfo"] !== "undefined" && _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["RoomInfo"]) === "function" ? _b : Object)
], PokerController.prototype, "createRoom", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('join-room-code'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["JoinRoomCodeRequestDto"] !== "undefined" && _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["JoinRoomCodeRequestDto"]) === "function" ? _c : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_d = typeof _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["JoinRoomCodeResponseDto"] !== "undefined" && _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["JoinRoomCodeResponseDto"]) === "function" ? _d : Object)
], PokerController.prototype, "joinRoomCode", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('room-info'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_e = typeof _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["JoinRoomCodeRequestDto"] !== "undefined" && _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["JoinRoomCodeRequestDto"]) === "function" ? _e : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_f = typeof _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["RoomInfo"] !== "undefined" && _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["RoomInfo"]) === "function" ? _f : Object)
], PokerController.prototype, "roomInfo", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('check-player-in-room/:playerId/:roomNumber'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('playerId')), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('roomNumber')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Boolean)
], PokerController.prototype, "checkPlayerInRoom", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('check-host-of-room/:playerId/:roomNumber'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('playerId')), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Param"])('roomNumber')),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [String, String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", Boolean)
], PokerController.prototype, "checkHostOfRoom", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('app-info'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_g = typeof _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["AppInfoDtoInterface"] !== "undefined" && _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["AppInfoDtoInterface"]) === "function" ? _g : Object)
], PokerController.prototype, "getAppInfo", null);
PokerController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_h = typeof _poker_service__WEBPACK_IMPORTED_MODULE_4__["PokerService"] !== "undefined" && _poker_service__WEBPACK_IMPORTED_MODULE_4__["PokerService"]) === "function" ? _h : Object])
], PokerController);



/***/ }),

/***/ "./apps/api/src/app/poker/poker.gateway.ts":
/*!*************************************************!*\
  !*** ./apps/api/src/app/poker/poker.gateway.ts ***!
  \*************************************************/
/*! exports provided: PokerGateway */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokerGateway", function() { return PokerGateway; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/websockets */ "@nestjs/websockets");
/* harmony import */ var _nestjs_websockets__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "rxjs/operators");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! socket.io */ "socket.io");
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @planning-poker/api-interfaces */ "./libs/api-interfaces/src/index.ts");
/* harmony import */ var _poker_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./poker.service */ "./apps/api/src/app/poker/poker.service.ts");
var PokerGateway_1, _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;








let PokerGateway = PokerGateway_1 = class PokerGateway {
    constructor(pokerService) {
        this.pokerService = pokerService;
        this.clientConnectedSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.logger = new _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"](PokerGateway_1.name);
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
        Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(client.id)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["delay"])(15000), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.untilClientReconnect$(client.id)))
            .subscribe((id) => {
            if (player && player.type === _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__["PlayerType"].HOST) {
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
        if (!room || room.state === _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__["GameStates"].REVIEW) {
            return;
        }
        room.patchPlayer(client.id, {
            card,
            status: _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__["PlayerStatuses"].VOTED
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
        this.serverEmitTo(roomNumber, _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__["SocketEvents"].STATE, broadcastMessage);
        if (state === _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__["GameStates"].IN_PROGRESS) {
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
        this.serverEmitTo(roomNumber, _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__["SocketEvents"].PLAYERS, { players });
    }
    onRoomJoined(client) {
        const room = this.pokerService.findPlayerRoom(client.id);
        if (room.state === _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__["GameStates"].REVIEW) {
            const results = this.getRoomResults(room.id);
            this.serverEmitTo(client.id, _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__["SocketEvents"].RESULTS, results);
        }
    }
    emitResultsToRoom(roomNumber) {
        const results = this.getRoomResults(roomNumber);
        this.serverEmitTo(roomNumber, _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__["SocketEvents"].RESULTS, results);
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
        this.serverEmitTo(roomNumber, _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__["SocketEvents"].ROOM_REMOVED);
    }
    emitPlayerVoted(room, clientId) {
        this.server.to(room.host.id).emit(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__["SocketEvents"].VOTED, clientId);
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
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["filter"])((id) => id === clientId));
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["WebSocketServer"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof socket_io__WEBPACK_IMPORTED_MODULE_5__["Server"] !== "undefined" && socket_io__WEBPACK_IMPORTED_MODULE_5__["Server"]) === "function" ? _a : Object)
], PokerGateway.prototype, "server", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["SubscribeMessage"])(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__["SocketEvents"].VOTE),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"] !== "undefined" && socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"]) === "function" ? _b : Object, typeof (_c = typeof _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__["Vote"] !== "undefined" && _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__["Vote"]) === "function" ? _c : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], PokerGateway.prototype, "onVote", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["SubscribeMessage"])(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__["SocketEvents"].STATE),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_d = typeof socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"] !== "undefined" && socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"]) === "function" ? _d : Object, String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], PokerGateway.prototype, "onState", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["SubscribeMessage"])(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__["SocketEvents"].JOIN),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_e = typeof socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"] !== "undefined" && socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"]) === "function" ? _e : Object, typeof (_f = typeof _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__["JoinRequestDto"] !== "undefined" && _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__["JoinRequestDto"]) === "function" ? _f : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], PokerGateway.prototype, "onJoin", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["SubscribeMessage"])(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__["SocketEvents"].LEAVE),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_g = typeof socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"] !== "undefined" && socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"]) === "function" ? _g : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], PokerGateway.prototype, "onLeave", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["SubscribeMessage"])(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__["SocketEvents"].CLOSE_ROOM),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_h = typeof socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"] !== "undefined" && socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"]) === "function" ? _h : Object, String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], PokerGateway.prototype, "onCloseRoom", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["SubscribeMessage"])(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__["SocketEvents"].ROOM_JOINED),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_j = typeof socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"] !== "undefined" && socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"]) === "function" ? _j : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], PokerGateway.prototype, "onRoomJoined", null);
PokerGateway = PokerGateway_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["WebSocketGateway"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_k = typeof _poker_service__WEBPACK_IMPORTED_MODULE_7__["PokerService"] !== "undefined" && _poker_service__WEBPACK_IMPORTED_MODULE_7__["PokerService"]) === "function" ? _k : Object])
], PokerGateway);



/***/ }),

/***/ "./apps/api/src/app/poker/poker.module.ts":
/*!************************************************!*\
  !*** ./apps/api/src/app/poker/poker.module.ts ***!
  \************************************************/
/*! exports provided: PokerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokerModule", function() { return PokerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _poker_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./poker.controller */ "./apps/api/src/app/poker/poker.controller.ts");
/* harmony import */ var _poker_gateway__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./poker.gateway */ "./apps/api/src/app/poker/poker.gateway.ts");
/* harmony import */ var _poker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./poker.service */ "./apps/api/src/app/poker/poker.service.ts");





let PokerModule = class PokerModule {
};
PokerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        controllers: [
            _poker_controller__WEBPACK_IMPORTED_MODULE_2__["PokerController"]
        ],
        providers: [
            _poker_gateway__WEBPACK_IMPORTED_MODULE_3__["PokerGateway"],
            _poker_service__WEBPACK_IMPORTED_MODULE_4__["PokerService"]
        ]
    })
], PokerModule);



/***/ }),

/***/ "./apps/api/src/app/poker/poker.service.ts":
/*!*************************************************!*\
  !*** ./apps/api/src/app/poker/poker.service.ts ***!
  \*************************************************/
/*! exports provided: PokerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PokerService", function() { return PokerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @planning-poker/api-interfaces */ "./libs/api-interfaces/src/index.ts");
/* harmony import */ var _room__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./room */ "./apps/api/src/app/poker/room.ts");




let PokerService = class PokerService {
    constructor() {
        this.rooms = new Map();
        this.players = new Map();
    }
    toggleGameState(currentState) {
        switch (currentState) {
            case _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["GameStates"].IN_PROGRESS:
                return _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["GameStates"].REVIEW;
            case _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["GameStates"].REVIEW:
                return _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["GameStates"].IN_PROGRESS;
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
        const room = new _room__WEBPACK_IMPORTED_MODULE_3__["Room"]();
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
                status: _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["PlayerStatuses"].WAITING
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
PokerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], PokerService);



/***/ }),

/***/ "./apps/api/src/app/poker/room.ts":
/*!****************************************!*\
  !*** ./apps/api/src/app/poker/room.ts ***!
  \****************************************/
/*! exports provided: Room */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Room", function() { return Room; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @planning-poker/api-interfaces */ "./libs/api-interfaces/src/index.ts");


class Room {
    constructor() {
        this.playersMap = new Map();
        this.stateSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_1__["GameStates"].IN_PROGRESS);
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
            .filter((player) => player.type === _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_1__["PlayerType"].VOTER)
            .sort((firstPlayer, secondPlayer) => secondPlayer.date - firstPlayer.date);
    }
    get host() {
        return this.allPlayersArray
            .find((player) => player.type === _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_1__["PlayerType"].HOST);
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
/*!*******************************************!*\
  !*** ./apps/api/src/frontend-redirect.ts ***!
  \*******************************************/
/*! exports provided: NotFoundExceptionFilter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundExceptionFilter", function() { return NotFoundExceptionFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_2__);



let NotFoundExceptionFilter = class NotFoundExceptionFilter {
    catch(exception, host) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse();
        response.sendFile(path__WEBPACK_IMPORTED_MODULE_2__["resolve"]('./public/index.html'));
    }
};
NotFoundExceptionFilter = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Catch"])(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["NotFoundException"])
], NotFoundExceptionFilter);



/***/ }),

/***/ "./apps/api/src/main.ts":
/*!******************************!*\
  !*** ./apps/api/src/main.ts ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @nestjs/core */ "@nestjs/core");
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./apps/api/src/app/app.module.ts");
/* harmony import */ var _frontend_redirect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./frontend-redirect */ "./apps/api/src/frontend-redirect.ts");
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */





function bootstrap() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_2__["NestFactory"].create(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        app.useGlobalFilters(new _frontend_redirect__WEBPACK_IMPORTED_MODULE_4__["NotFoundExceptionFilter"]());
        yield app.listen(port, () => {
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].log('Listening at http://localhost:' + port + '/' + globalPrefix);
        });
    });
}
bootstrap();


/***/ }),

/***/ "./libs/api-interfaces/src/index.ts":
/*!******************************************!*\
  !*** ./libs/api-interfaces/src/index.ts ***!
  \******************************************/
/*! exports provided: Cards, GameStates, SocketEvents, PlayerStatuses, PlayerType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_model_app_info_dto_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/model/app-info-dto.interface */ "./libs/api-interfaces/src/lib/model/app-info-dto.interface.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_model_vote_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/model/vote.interface */ "./libs/api-interfaces/src/lib/model/vote.interface.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_model_state_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/model/state.interface */ "./libs/api-interfaces/src/lib/model/state.interface.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_model_room_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/model/room.info */ "./libs/api-interfaces/src/lib/model/room.info.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_model_player_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/model/player.interface */ "./libs/api-interfaces/src/lib/model/player.interface.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_model_create_room_dto_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/model/create-room-dto.interface */ "./libs/api-interfaces/src/lib/model/create-room-dto.interface.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_model_game_state_dto_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/model/game-state-dto.interface */ "./libs/api-interfaces/src/lib/model/game-state-dto.interface.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_model_game_state_broadcast_dto_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/model/game-state-broadcast-dto.interface */ "./libs/api-interfaces/src/lib/model/game-state-broadcast-dto.interface.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_model_join_room_code_request_dto_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/model/join-room-code-request-dto.interface */ "./libs/api-interfaces/src/lib/model/join-room-code-request-dto.interface.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_model_join_room_code_response_dto_interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/model/join-room-code-response-dto.interface */ "./libs/api-interfaces/src/lib/model/join-room-code-response-dto.interface.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_model_join_room_name_request_dto_interface__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/model/join-room-name-request-dto.interface */ "./libs/api-interfaces/src/lib/model/join-room-name-request-dto.interface.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_model_join_request_dto_interface__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/model/join-request-dto.interface */ "./libs/api-interfaces/src/lib/model/join-request-dto.interface.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_model_results_dto_interface__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/model/results-dto.interface */ "./libs/api-interfaces/src/lib/model/results-dto.interface.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_model_result_interface__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/model/result.interface */ "./libs/api-interfaces/src/lib/model/result.interface.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_model_users_response_dto_interface__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/model/users-response-dto.interface */ "./libs/api-interfaces/src/lib/model/users-response-dto.interface.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_model_voted_interface__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/model/voted.interface */ "./libs/api-interfaces/src/lib/model/voted.interface.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_enum_cards_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/enum/cards.enum */ "./libs/api-interfaces/src/lib/enum/cards.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cards", function() { return _lib_enum_cards_enum__WEBPACK_IMPORTED_MODULE_16__["Cards"]; });

/* harmony import */ var _lib_enum_game_states_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/enum/game-states.enum */ "./libs/api-interfaces/src/lib/enum/game-states.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameStates", function() { return _lib_enum_game_states_enum__WEBPACK_IMPORTED_MODULE_17__["GameStates"]; });

/* harmony import */ var _lib_enum_socket_events__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/enum/socket.events */ "./libs/api-interfaces/src/lib/enum/socket.events.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocketEvents", function() { return _lib_enum_socket_events__WEBPACK_IMPORTED_MODULE_18__["SocketEvents"]; });

/* harmony import */ var _lib_enum_player_statuses_enum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./lib/enum/player-statuses.enum */ "./libs/api-interfaces/src/lib/enum/player-statuses.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayerStatuses", function() { return _lib_enum_player_statuses_enum__WEBPACK_IMPORTED_MODULE_19__["PlayerStatuses"]; });

/* harmony import */ var _lib_enum_player_type_enum__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./lib/enum/player-type.enum */ "./libs/api-interfaces/src/lib/enum/player-type.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PlayerType", function() { return _lib_enum_player_type_enum__WEBPACK_IMPORTED_MODULE_20__["PlayerType"]; });

/**
 * Model
 */
















/**
 * Enum
 */







/***/ }),

/***/ "./libs/api-interfaces/src/lib/enum/cards.enum.ts":
/*!********************************************************!*\
  !*** ./libs/api-interfaces/src/lib/enum/cards.enum.ts ***!
  \********************************************************/
/*! exports provided: Cards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cards", function() { return Cards; });
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
/*!**************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/enum/game-states.enum.ts ***!
  \**************************************************************/
/*! exports provided: GameStates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameStates", function() { return GameStates; });
var GameStates;
(function (GameStates) {
    GameStates["IN_PROGRESS"] = "IN_PROGRESS";
    GameStates["REVIEW"] = "REVIEW";
})(GameStates || (GameStates = {}));


/***/ }),

/***/ "./libs/api-interfaces/src/lib/enum/player-statuses.enum.ts":
/*!******************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/enum/player-statuses.enum.ts ***!
  \******************************************************************/
/*! exports provided: PlayerStatuses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerStatuses", function() { return PlayerStatuses; });
var PlayerStatuses;
(function (PlayerStatuses) {
    PlayerStatuses["WAITING"] = "WAITING";
    PlayerStatuses["VOTED"] = "VOTED";
})(PlayerStatuses || (PlayerStatuses = {}));


/***/ }),

/***/ "./libs/api-interfaces/src/lib/enum/player-type.enum.ts":
/*!**************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/enum/player-type.enum.ts ***!
  \**************************************************************/
/*! exports provided: PlayerType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerType", function() { return PlayerType; });
var PlayerType;
(function (PlayerType) {
    PlayerType["VOTER"] = "VOTER";
    PlayerType["HOST"] = "HOST";
})(PlayerType || (PlayerType = {}));


/***/ }),

/***/ "./libs/api-interfaces/src/lib/enum/socket.events.ts":
/*!***********************************************************!*\
  !*** ./libs/api-interfaces/src/lib/enum/socket.events.ts ***!
  \***********************************************************/
/*! exports provided: SocketEvents */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketEvents", function() { return SocketEvents; });
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
/*!*********************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/model/app-info-dto.interface.ts ***!
  \*********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/create-room-dto.interface.ts":
/*!************************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/model/create-room-dto.interface.ts ***!
  \************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/game-state-broadcast-dto.interface.ts":
/*!*********************************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/model/game-state-broadcast-dto.interface.ts ***!
  \*********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/game-state-dto.interface.ts":
/*!***********************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/model/game-state-dto.interface.ts ***!
  \***********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/join-request-dto.interface.ts":
/*!*************************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/model/join-request-dto.interface.ts ***!
  \*************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/join-room-code-request-dto.interface.ts":
/*!***********************************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/model/join-room-code-request-dto.interface.ts ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/join-room-code-response-dto.interface.ts":
/*!************************************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/model/join-room-code-response-dto.interface.ts ***!
  \************************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/join-room-name-request-dto.interface.ts":
/*!***********************************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/model/join-room-name-request-dto.interface.ts ***!
  \***********************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/player.interface.ts":
/*!***************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/model/player.interface.ts ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/result.interface.ts":
/*!***************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/model/result.interface.ts ***!
  \***************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/results-dto.interface.ts":
/*!********************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/model/results-dto.interface.ts ***!
  \********************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/room.info.ts":
/*!********************************************************!*\
  !*** ./libs/api-interfaces/src/lib/model/room.info.ts ***!
  \********************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/state.interface.ts":
/*!**************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/model/state.interface.ts ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/users-response-dto.interface.ts":
/*!***************************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/model/users-response-dto.interface.ts ***!
  \***************************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/vote.interface.ts":
/*!*************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/model/vote.interface.ts ***!
  \*************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/voted.interface.ts":
/*!**************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/model/voted.interface.ts ***!
  \**************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



/***/ }),

/***/ "./package.json":
/*!**********************!*\
  !*** ./package.json ***!
  \**********************/
/*! exports provided: name, version, license, scripts, private, dependencies, devDependencies, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"name\":\"planning-poker\",\"version\":\"1.2.0\",\"license\":\"MIT\",\"scripts\":{\"ng\":\"nx\",\"postinstall\":\"node ./decorate-angular-cli.js && ngcc --properties es2015 browser module main --first-only --create-ivy-entry-points\",\"nx\":\"nx\",\"start\":\"ng serve\",\"start:frontend\":\"npm run start\",\"start:backend\":\"npm run nx serve api\",\"build\":\"ng build\",\"build:frontend:prod\":\"ng lint && ng build --configuration production\",\"build:backend:prod\":\"ng lint api && ng build api --configuration production\",\"test\":\"ng test\",\"lint\":\"nx workspace-lint && ng lint\",\"e2e\":\"ng e2e\",\"affected:apps\":\"nx affected:apps\",\"affected:libs\":\"nx affected:libs\",\"affected:build\":\"nx affected:build\",\"affected:e2e\":\"nx affected:e2e\",\"affected:test\":\"nx affected:test\",\"affected:lint\":\"nx affected:lint\",\"affected:dep-graph\":\"nx affected:dep-graph\",\"affected\":\"nx affected\",\"format\":\"nx format:write\",\"format:write\":\"nx format:write\",\"format:check\":\"nx format:check\",\"update\":\"ng update @nrwl/workspace\",\"workspace-schematic\":\"nx workspace-schematic\",\"dep-graph\":\"nx dep-graph\",\"help\":\"nx help\"},\"private\":true,\"dependencies\":{\"@angular/animations\":\"^13.0.1\",\"@angular/common\":\"^13.0.1\",\"@angular/compiler\":\"^13.0.1\",\"@angular/core\":\"^13.0.1\",\"@angular/forms\":\"^13.0.1\",\"@angular/platform-browser\":\"^13.0.1\",\"@angular/platform-browser-dynamic\":\"^13.0.1\",\"@angular/router\":\"^13.0.1\",\"@nestjs/common\":\"^7.0.0\",\"@nestjs/core\":\"^7.0.0\",\"@nestjs/platform-express\":\"^7.0.0\",\"@nestjs/platform-socket.io\":\"^7.4.4\",\"@nestjs/websockets\":\"^7.4.4\",\"@ngxs/store\":\"^3.7.0\",\"@ngxs/websocket-plugin\":\"^3.7.0\",\"@nrwl/angular\":\"13.1.4\",\"@rx-angular/state\":\"^1.4.1\",\"@rx-angular/template\":\"^1.0.0-beta.0\",\"ngx-cookie-service\":\"^11.0.2\",\"ngx-google-analytics\":\"^9.0.1\",\"ngx-socket-io\":\"^3.2.0\",\"normalize.css\":\"^8.0.1\",\"reflect-metadata\":\"^0.1.13\",\"rxjs\":\"~6.5.5\",\"zone.js\":\"~0.11.4\"},\"devDependencies\":{\"@angular-devkit/build-angular\":\"~13.0.2\",\"@angular/cli\":\"~13.0.2\",\"@angular/compiler-cli\":\"^13.0.1\",\"@angular/language-service\":\"^13.0.1\",\"@nestjs/schematics\":\"^7.0.0\",\"@nestjs/testing\":\"^7.0.0\",\"@ngxs/devtools-plugin\":\"^3.7.0\",\"@ngxs/logger-plugin\":\"^3.7.0\",\"@nrwl/cli\":\"10.3.0\",\"@nrwl/cypress\":\"10.3.0\",\"@nrwl/jest\":\"10.3.0\",\"@nrwl/nest\":\"10.3.0\",\"@nrwl/node\":\"10.3.0\",\"@nrwl/workspace\":\"10.3.0\",\"@types/jest\":\"26.0.8\",\"@types/node\":\"~8.9.4\",\"@types/socket.io\":\"^2.1.11\",\"codelyzer\":\"^6.0.0\",\"cypress\":\"^4.1.0\",\"dotenv\":\"6.2.0\",\"eslint\":\"7.10.0\",\"jest\":\"26.2.2\",\"jest-preset-angular\":\"8.3.1\",\"prettier\":\"2.0.4\",\"ts-jest\":\"26.4.0\",\"ts-node\":\"~7.0.0\",\"tslint\":\"~6.1.3\",\"typescript\":\"~4.4.4\"}}");

/***/ }),

/***/ 0:
/*!************************************!*\
  !*** multi ./apps/api/src/main.ts ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/jarek/Projects/planning-poker/apps/api/src/main.ts */"./apps/api/src/main.ts");


/***/ }),

/***/ "@nestjs/common":
/*!*********************************!*\
  !*** external "@nestjs/common" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),

/***/ "@nestjs/core":
/*!*******************************!*\
  !*** external "@nestjs/core" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),

/***/ "@nestjs/websockets":
/*!*************************************!*\
  !*** external "@nestjs/websockets" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@nestjs/websockets");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "rxjs":
/*!***********************!*\
  !*** external "rxjs" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),

/***/ "rxjs/operators":
/*!*********************************!*\
  !*** external "rxjs/operators" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ }),

/***/ "socket.io":
/*!****************************!*\
  !*** external "socket.io" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),

/***/ "tslib":
/*!************************!*\
  !*** external "tslib" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ })

/******/ })));
//# sourceMappingURL=main.js.map