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
/* harmony import */ var _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @planning-poker/api-interfaces */ "./libs/api-interfaces/src/index.ts");
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");
var _a, _b;




let AppController = class AppController {
    constructor(appService) {
        this.appService = appService;
    }
    getData() {
        return this.appService.getData();
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Get"])('hello'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", []),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_a = typeof _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["Message"] !== "undefined" && _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["Message"]) === "function" ? _a : Object)
], AppController.prototype, "getData", null);
AppController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"] !== "undefined" && _app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]) === "function" ? _b : Object])
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
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.service */ "./apps/api/src/app/app.service.ts");
/* harmony import */ var _poker_poker_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./poker/poker.module */ "./apps/api/src/app/poker/poker.module.ts");





let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_poker_poker_module__WEBPACK_IMPORTED_MODULE_4__["PokerModule"]],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_2__["AppController"]],
        providers: [_app_service__WEBPACK_IMPORTED_MODULE_3__["AppService"]],
    })
], AppModule);



/***/ }),

/***/ "./apps/api/src/app/app.service.ts":
/*!*****************************************!*\
  !*** ./apps/api/src/app/app.service.ts ***!
  \*****************************************/
/*! exports provided: AppService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppService", function() { return AppService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "tslib");
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/common */ "@nestjs/common");
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let AppService = class AppService {
    getData() {
        return { message: 'Welcome to api!' };
    }
};
AppService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AppService);



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
/* harmony import */ var _poker_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./poker.service */ "./apps/api/src/app/poker/poker.service.ts");
var _a, _b, _c, _d, _e;




let PokerController = class PokerController {
    constructor(pokerService) {
        this.pokerService = pokerService;
    }
    createRoom(request) {
        const room = this.pokerService.createRoom();
        this.pokerService.setClientAsHost(request.clientId);
        this.pokerService.assignClientToRoom(request.clientId, room.id);
        return {
            id: room.id,
            state: room.state
        };
    }
    joinRoomCode(request) {
        return {
            valid: this.pokerService.checkIsRoomExists(request.id)
        };
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('create-room'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_a = typeof _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["CreateRoomDto"] !== "undefined" && _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["CreateRoomDto"]) === "function" ? _a : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_b = typeof _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["RoomInfoInterface"] !== "undefined" && _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["RoomInfoInterface"]) === "function" ? _b : Object)
], PokerController.prototype, "createRoom", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Post"])('join-room-code'),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(0, Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Body"])()),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_c = typeof _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["JoinRoomCodeRequestDto"] !== "undefined" && _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["JoinRoomCodeRequestDto"]) === "function" ? _c : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", typeof (_d = typeof _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["JoinRoomCodeResponseDto"] !== "undefined" && _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["JoinRoomCodeResponseDto"]) === "function" ? _d : Object)
], PokerController.prototype, "joinRoomCode", null);
PokerController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_e = typeof _poker_service__WEBPACK_IMPORTED_MODULE_3__["PokerService"] !== "undefined" && _poker_service__WEBPACK_IMPORTED_MODULE_3__["PokerService"]) === "function" ? _e : Object])
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
/* harmony import */ var _nestjs_websockets__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @nestjs/websockets */ "@nestjs/websockets");
/* harmony import */ var _nestjs_websockets__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @planning-poker/api-interfaces */ "./libs/api-interfaces/src/index.ts");
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! socket.io */ "socket.io");
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _poker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./poker.service */ "./apps/api/src/app/poker/poker.service.ts");
var _a, _b, _c, _d, _e, _f, _g;





let PokerGateway = class PokerGateway {
    constructor(pokerService) {
        this.pokerService = pokerService;
    }
    handleConnection(client) {
        this.pokerService.addClient({
            id: client.id
        });
    }
    handleDisconnect(client) {
        const clientId = client.id;
        if (this.pokerService.isClientHost(clientId)) {
            const clientData = this.pokerService.getClientById(clientId);
            this.pokerService.removeRoom(clientData.room);
            this.server.emit(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["SocketEvents"].ROOM_REMOVED, clientData.room);
        }
        this.pokerService.removeClient(client.id);
        this.emitUsersChange();
    }
    onVote(client, message) {
        this.pokerService.setClientCard(client.id, message.card);
        this.emitUsersChange();
    }
    onState(client) {
        const clientData = this.pokerService.getClientById(client.id);
        const state = this.pokerService.toggleRoomGameState(clientData.room);
        const broadcastMessage = {
            state,
            room: clientData.room
        };
        this.server.emit(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["SocketEvents"].STATE, broadcastMessage);
        if (state === _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["GameStates"].IN_PROGRESS) {
            this.pokerService.resetVotingForRoom(clientData.room);
            this.emitUsersChange();
        }
    }
    onJoin(client, message) {
        this.pokerService.setClientName(client.id, message.name);
        this.pokerService.assignClientToRoom(client.id, message.room);
        this.pokerService.setClientAsVoter(client.id);
        this.emitUsersChange();
    }
    emitUsersChange() {
        const clients = Array.from(this.pokerService.clients.values())
            .sort((clientA, clientB) => clientA.date - clientB.date);
        const clientsResponse = {
            clients
        };
        this.server.emit(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["SocketEvents"].USERS, clientsResponse);
    }
};
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_1__["WebSocketServer"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", typeof (_a = typeof socket_io__WEBPACK_IMPORTED_MODULE_3__["Server"] !== "undefined" && socket_io__WEBPACK_IMPORTED_MODULE_3__["Server"]) === "function" ? _a : Object)
], PokerGateway.prototype, "server", void 0);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_1__["SubscribeMessage"])(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["SocketEvents"].VOTE),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"] !== "undefined" && socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"]) === "function" ? _b : Object, typeof (_c = typeof _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["Vote"] !== "undefined" && _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["Vote"]) === "function" ? _c : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], PokerGateway.prototype, "onVote", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_1__["SubscribeMessage"])(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["SocketEvents"].STATE),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_d = typeof socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"] !== "undefined" && socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"]) === "function" ? _d : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], PokerGateway.prototype, "onState", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_1__["SubscribeMessage"])(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["SocketEvents"].JOIN),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_e = typeof socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"] !== "undefined" && socket_io__WEBPACK_IMPORTED_MODULE_3__["Socket"]) === "function" ? _e : Object, typeof (_f = typeof _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["JoinRequestDto"] !== "undefined" && _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["JoinRequestDto"]) === "function" ? _f : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], PokerGateway.prototype, "onJoin", null);
PokerGateway = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_1__["WebSocketGateway"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_g = typeof _poker_service__WEBPACK_IMPORTED_MODULE_4__["PokerService"] !== "undefined" && _poker_service__WEBPACK_IMPORTED_MODULE_4__["PokerService"]) === "function" ? _g : Object])
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
        this.clients = new Map();
        this.rooms = new Map();
    }
    toggleGameState(currentState) {
        switch (currentState) {
            case _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["GameStates"].IN_PROGRESS:
                return _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["GameStates"].REVIEW;
            case _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["GameStates"].REVIEW:
                return _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["GameStates"].IN_PROGRESS;
        }
    }
    toggleRoomGameState(roomId) {
        const room = this.rooms.get(roomId);
        room.state = this.toggleGameState(room.state);
        this.rooms.set(roomId, room);
        return room.state;
    }
    createRoom() {
        const room = new _room__WEBPACK_IMPORTED_MODULE_3__["Room"]();
        if (this.checkIsRoomExists(room.id)) {
            while (!this.checkIsRoomExists(room.id)) {
                room.regenerateId();
            }
        }
        this.rooms.set(room.id, room);
        return room;
    }
    removeRoom(id) {
        this.rooms.delete(id);
    }
    addClient(client) {
        this.clients.set(client.id, client);
    }
    removeClient(id) {
        this.clients.delete(id);
    }
    isClientHost(id) {
        return this.clients.get(id).type === _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["ClientType"].HOST;
    }
    assignClientToRoom(clientId, roomId) {
        const client = this.getClientById(clientId);
        client.room = roomId;
        this.clients.set(clientId, client);
    }
    setClientAsHost(clientId) {
        const client = this.getClientById(clientId);
        client.type = _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["ClientType"].HOST;
        this.clients.set(clientId, client);
    }
    setClientAsVoter(clientId) {
        const client = this.getClientById(clientId);
        client.type = _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["ClientType"].VOTER;
        this.clients.set(clientId, client);
    }
    getClientById(id) {
        return this.clients.get(id);
    }
    checkIsRoomExists(id) {
        return this.rooms.has(id);
    }
    setClientName(id, name) {
        const client = this.getClientById(id);
        client.name = name;
        client.date = new Date().getTime();
        this.clients.set(id, client);
    }
    setClientCard(id, card) {
        const client = this.getClientById(id);
        client.card = card;
        client.status = _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["UserStatuses"].VOTED;
        this.clients.set(id, client);
    }
    resetVotingForRoom(room) {
        this.clients.forEach((client) => {
            console.log(client);
            if (client.room === room) {
                client.card = null;
                client.status = _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__["UserStatuses"].WAITING;
                this.clients.set(client.id, client);
            }
        });
    }
};
PokerService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
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
/* harmony import */ var _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @planning-poker/api-interfaces */ "./libs/api-interfaces/src/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "rxjs");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_1__);


class Room {
    constructor() {
        this.stateSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_0__["GameStates"].IN_PROGRESS);
        this.id = this.generateId();
        console.log('create room', this.id);
    }
    get state() {
        return this.stateSubject$.getValue();
    }
    set state(roomState) {
        this.stateSubject$.next(roomState);
    }
    regenerateId() {
        this.id = this.generateId();
    }
    generateId() {
        const calculation = Math.floor(Math.random() * 90000) + 10000;
        return calculation.toString();
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
/*! exports provided: Cards, GameStates, SocketEvents, UserStatuses, ClientType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_api_interfaces__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/api-interfaces */ "./libs/api-interfaces/src/lib/api-interfaces.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_model_vote_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./lib/model/vote.interface */ "./libs/api-interfaces/src/lib/model/vote.interface.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_model_state_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./lib/model/state.interface */ "./libs/api-interfaces/src/lib/model/state.interface.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_model_room_info_interface__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lib/model/room-info.interface */ "./libs/api-interfaces/src/lib/model/room-info.interface.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_model_client_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./lib/model/client.interface */ "./libs/api-interfaces/src/lib/model/client.interface.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_model_create_room_dto_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./lib/model/create-room-dto.interface */ "./libs/api-interfaces/src/lib/model/create-room-dto.interface.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_model_game_state_dto_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./lib/model/game-state-dto.interface */ "./libs/api-interfaces/src/lib/model/game-state-dto.interface.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_model_game_state_broadcast_dto_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./lib/model/game-state-broadcast-dto.interface */ "./libs/api-interfaces/src/lib/model/game-state-broadcast-dto.interface.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_model_join_room_code_request_dto_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./lib/model/join-room-code-request-dto.interface */ "./libs/api-interfaces/src/lib/model/join-room-code-request-dto.interface.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_model_join_room_code_response_dto_interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./lib/model/join-room-code-response-dto.interface */ "./libs/api-interfaces/src/lib/model/join-room-code-response-dto.interface.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_model_join_room_name_request_dto_interface__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./lib/model/join-room-name-request-dto.interface */ "./libs/api-interfaces/src/lib/model/join-room-name-request-dto.interface.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_model_join_request_dto_interface__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./lib/model/join-request-dto.interface */ "./libs/api-interfaces/src/lib/model/join-request-dto.interface.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_model_users_response_dto_interface__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./lib/model/users-response-dto.interface */ "./libs/api-interfaces/src/lib/model/users-response-dto.interface.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_model_voted_interface__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./lib/model/voted.interface */ "./libs/api-interfaces/src/lib/model/voted.interface.ts");
/* empty/unused harmony star reexport *//* harmony import */ var _lib_enum_cards_enum__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./lib/enum/cards.enum */ "./libs/api-interfaces/src/lib/enum/cards.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Cards", function() { return _lib_enum_cards_enum__WEBPACK_IMPORTED_MODULE_14__["Cards"]; });

/* harmony import */ var _lib_enum_game_states_enum__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./lib/enum/game-states.enum */ "./libs/api-interfaces/src/lib/enum/game-states.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GameStates", function() { return _lib_enum_game_states_enum__WEBPACK_IMPORTED_MODULE_15__["GameStates"]; });

/* harmony import */ var _lib_enum_socket_events__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./lib/enum/socket.events */ "./libs/api-interfaces/src/lib/enum/socket.events.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocketEvents", function() { return _lib_enum_socket_events__WEBPACK_IMPORTED_MODULE_16__["SocketEvents"]; });

/* harmony import */ var _lib_enum_user_statuses_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./lib/enum/user-statuses.enum */ "./libs/api-interfaces/src/lib/enum/user-statuses.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UserStatuses", function() { return _lib_enum_user_statuses_enum__WEBPACK_IMPORTED_MODULE_17__["UserStatuses"]; });

/* harmony import */ var _lib_enum_client_type_enum__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./lib/enum/client-type.enum */ "./libs/api-interfaces/src/lib/enum/client-type.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ClientType", function() { return _lib_enum_client_type_enum__WEBPACK_IMPORTED_MODULE_18__["ClientType"]; });

/**
 * Model
 */














/**
 * Enum
 */







/***/ }),

/***/ "./libs/api-interfaces/src/lib/api-interfaces.ts":
/*!*******************************************************!*\
  !*** ./libs/api-interfaces/src/lib/api-interfaces.ts ***!
  \*******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);



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

/***/ "./libs/api-interfaces/src/lib/enum/client-type.enum.ts":
/*!**************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/enum/client-type.enum.ts ***!
  \**************************************************************/
/*! exports provided: ClientType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClientType", function() { return ClientType; });
var ClientType;
(function (ClientType) {
    ClientType["VOTER"] = "VOTER";
    ClientType["HOST"] = "HOST";
})(ClientType || (ClientType = {}));


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
    SocketEvents["USERS"] = "USERS";
    SocketEvents["STATE"] = "STATE";
    SocketEvents["JOIN"] = "JOIN";
    SocketEvents["ROOM_REMOVED"] = "ROOM_REMOVED";
    SocketEvents["VOTED"] = "VOTED";
})(SocketEvents || (SocketEvents = {}));


/***/ }),

/***/ "./libs/api-interfaces/src/lib/enum/user-statuses.enum.ts":
/*!****************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/enum/user-statuses.enum.ts ***!
  \****************************************************************/
/*! exports provided: UserStatuses */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStatuses", function() { return UserStatuses; });
var UserStatuses;
(function (UserStatuses) {
    UserStatuses["WAITING"] = "WAITING";
    UserStatuses["VOTED"] = "VOTED";
})(UserStatuses || (UserStatuses = {}));


/***/ }),

/***/ "./libs/api-interfaces/src/lib/model/client.interface.ts":
/*!***************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/model/client.interface.ts ***!
  \***************************************************************/
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

/***/ "./libs/api-interfaces/src/lib/model/room-info.interface.ts":
/*!******************************************************************!*\
  !*** ./libs/api-interfaces/src/lib/model/room-info.interface.ts ***!
  \******************************************************************/
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