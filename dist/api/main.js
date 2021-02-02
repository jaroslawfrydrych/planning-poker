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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("tslib");

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _lib_model_app_info_dto_interface__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8);
/* harmony import */ var _lib_model_vote_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(9);
/* harmony import */ var _lib_model_state_interface__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var _lib_model_room_info__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(11);
/* harmony import */ var _lib_model_player_interface__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(12);
/* harmony import */ var _lib_model_create_room_dto_interface__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(13);
/* harmony import */ var _lib_model_game_state_dto_interface__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
/* harmony import */ var _lib_model_game_state_broadcast_dto_interface__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(15);
/* harmony import */ var _lib_model_join_room_code_request_dto_interface__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(16);
/* harmony import */ var _lib_model_join_room_code_response_dto_interface__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(17);
/* harmony import */ var _lib_model_join_room_name_request_dto_interface__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(18);
/* harmony import */ var _lib_model_join_request_dto_interface__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(19);
/* harmony import */ var _lib_model_results_dto_interface__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(20);
/* harmony import */ var _lib_model_result_interface__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(21);
/* harmony import */ var _lib_model_users_response_dto_interface__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(22);
/* harmony import */ var _lib_model_voted_interface__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(23);
/* harmony import */ var _lib_enum_cards_enum__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(24);
/* harmony import */ var _lib_enum_game_states_enum__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(25);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "c", function() { return _lib_enum_game_states_enum__WEBPACK_IMPORTED_MODULE_17__["a"]; });

/* harmony import */ var _lib_enum_socket_events__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(26);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "j", function() { return _lib_enum_socket_events__WEBPACK_IMPORTED_MODULE_18__["a"]; });

/* harmony import */ var _lib_enum_player_statuses_enum__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(27);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "g", function() { return _lib_enum_player_statuses_enum__WEBPACK_IMPORTED_MODULE_19__["a"]; });

/* harmony import */ var _lib_enum_player_type_enum__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(28);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "h", function() { return _lib_enum_player_type_enum__WEBPACK_IMPORTED_MODULE_20__["a"]; });

/**
 * Model
 */
















/**
 * Enum
 */







/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/common");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("socket.io");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/websockets");

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokerService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _room__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(35);




let PokerService = class PokerService {
    constructor() {
        this.rooms = new Map();
        this.players = new Map();
    }
    toggleGameState(currentState) {
        switch (currentState) {
            case _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__[/* GameStates */ "c"].IN_PROGRESS:
                return _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__[/* GameStates */ "c"].REVIEW;
            case _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__[/* GameStates */ "c"].REVIEW:
                return _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__[/* GameStates */ "c"].IN_PROGRESS;
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
        const room = new _room__WEBPACK_IMPORTED_MODULE_3__[/* Room */ "a"]();
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
                status: _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__[/* PlayerStatuses */ "g"].WAITING
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
/* 6 */
/***/ (function(module, exports) {

module.exports = require("rxjs");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("rxjs/operators");

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 22 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";



/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export Cards */
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
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameStates; });
var GameStates;
(function (GameStates) {
    GameStates["IN_PROGRESS"] = "IN_PROGRESS";
    GameStates["REVIEW"] = "REVIEW";
})(GameStates || (GameStates = {}));


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketEvents; });
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
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerStatuses; });
var PlayerStatuses;
(function (PlayerStatuses) {
    PlayerStatuses["WAITING"] = "WAITING";
    PlayerStatuses["VOTED"] = "VOTED";
})(PlayerStatuses || (PlayerStatuses = {}));


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlayerType; });
var PlayerType;
(function (PlayerType) {
    PlayerType["VOTER"] = "VOTER";
    PlayerType["HOST"] = "HOST";
})(PlayerType || (PlayerType = {}));


/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("@nestjs/core");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _app_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(31);
/* harmony import */ var _poker_poker_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(32);




let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        imports: [_poker_poker_module__WEBPACK_IMPORTED_MODULE_3__[/* PokerModule */ "a"]],
        controllers: [_app_controller__WEBPACK_IMPORTED_MODULE_2__[/* AppController */ "a"]]
    })
], AppModule);



/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);


let AppController = class AppController {
};
AppController = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Controller"])()
], AppController);



/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _poker_controller__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(33);
/* harmony import */ var _poker_gateway__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(36);
/* harmony import */ var _poker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);





let PokerModule = class PokerModule {
};
PokerModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Module"])({
        controllers: [
            _poker_controller__WEBPACK_IMPORTED_MODULE_2__[/* PokerController */ "a"]
        ],
        providers: [
            _poker_gateway__WEBPACK_IMPORTED_MODULE_3__[/* PokerGateway */ "a"],
            _poker_service__WEBPACK_IMPORTED_MODULE_4__[/* PokerService */ "a"]
        ]
    })
], PokerModule);



/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokerController; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var _package_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(34);
var _package_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(34, 1);
/* harmony import */ var _poker_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
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
            type: _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_2__[/* PlayerType */ "h"].HOST
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
            info: 'version ' + _package_json__WEBPACK_IMPORTED_MODULE_3__[/* version */ "a"]
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
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_h = typeof _poker_service__WEBPACK_IMPORTED_MODULE_4__[/* PokerService */ "a"] !== "undefined" && _poker_service__WEBPACK_IMPORTED_MODULE_4__[/* PokerService */ "a"]) === "function" ? _h : Object])
], PokerController);



/***/ }),
/* 34 */
/***/ (function(module) {

module.exports = JSON.parse("{\"a\":\"1.2.0\"}");

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Room; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


class Room {
    constructor() {
        this.playersMap = new Map();
        this.stateSubject$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* GameStates */ "c"].IN_PROGRESS);
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
            .filter((player) => player.type === _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* PlayerType */ "h"].VOTER)
            .sort((firstPlayer, secondPlayer) => secondPlayer.date - firstPlayer.date);
    }
    get host() {
        return this.allPlayersArray
            .find((player) => player.type === _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_1__[/* PlayerType */ "h"].HOST);
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
/* 36 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PokerGateway; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4);
/* harmony import */ var _nestjs_websockets__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(7);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var socket_io__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(socket_io__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(1);
/* harmony import */ var _poker_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(5);
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
            if (player && player.type === _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__[/* PlayerType */ "h"].HOST) {
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
        if (!room || room.state === _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__[/* GameStates */ "c"].REVIEW) {
            return;
        }
        room.patchPlayer(client.id, {
            card,
            status: _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__[/* PlayerStatuses */ "g"].VOTED
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
        this.serverEmitTo(roomNumber, _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__[/* SocketEvents */ "j"].STATE, broadcastMessage);
        if (state === _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__[/* GameStates */ "c"].IN_PROGRESS) {
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
        this.serverEmitTo(roomNumber, _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__[/* SocketEvents */ "j"].PLAYERS, { players });
    }
    onRoomJoined(client) {
        const room = this.pokerService.findPlayerRoom(client.id);
        if (room.state === _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__[/* GameStates */ "c"].REVIEW) {
            const results = this.getRoomResults(room.id);
            this.serverEmitTo(client.id, _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__[/* SocketEvents */ "j"].RESULTS, results);
        }
    }
    emitResultsToRoom(roomNumber) {
        const results = this.getRoomResults(roomNumber);
        this.serverEmitTo(roomNumber, _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__[/* SocketEvents */ "j"].RESULTS, results);
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
        this.serverEmitTo(roomNumber, _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__[/* SocketEvents */ "j"].ROOM_REMOVED);
    }
    emitPlayerVoted(room, clientId) {
        this.server.to(room.host.id).emit(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__[/* SocketEvents */ "j"].VOTED, clientId);
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
    Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["SubscribeMessage"])(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__[/* SocketEvents */ "j"].VOTE),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_b = typeof socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"] !== "undefined" && socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"]) === "function" ? _b : Object, typeof (_c = typeof _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__["Vote"] !== "undefined" && _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__["Vote"]) === "function" ? _c : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], PokerGateway.prototype, "onVote", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["SubscribeMessage"])(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__[/* SocketEvents */ "j"].STATE),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_d = typeof socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"] !== "undefined" && socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"]) === "function" ? _d : Object, String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], PokerGateway.prototype, "onState", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["SubscribeMessage"])(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__[/* SocketEvents */ "j"].JOIN),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_e = typeof socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"] !== "undefined" && socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"]) === "function" ? _e : Object, typeof (_f = typeof _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__["JoinRequestDto"] !== "undefined" && _planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__["JoinRequestDto"]) === "function" ? _f : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], PokerGateway.prototype, "onJoin", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["SubscribeMessage"])(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__[/* SocketEvents */ "j"].LEAVE),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_g = typeof socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"] !== "undefined" && socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"]) === "function" ? _g : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], PokerGateway.prototype, "onLeave", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["SubscribeMessage"])(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__[/* SocketEvents */ "j"].CLOSE_ROOM),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_h = typeof socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"] !== "undefined" && socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"]) === "function" ? _h : Object, String]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], PokerGateway.prototype, "onCloseRoom", null);
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["SubscribeMessage"])(_planning_poker_api_interfaces__WEBPACK_IMPORTED_MODULE_6__[/* SocketEvents */ "j"].ROOM_JOINED),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Function),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_j = typeof socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"] !== "undefined" && socket_io__WEBPACK_IMPORTED_MODULE_5__["Socket"]) === "function" ? _j : Object]),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:returntype", void 0)
], PokerGateway.prototype, "onRoomJoined", null);
PokerGateway = PokerGateway_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_nestjs_websockets__WEBPACK_IMPORTED_MODULE_2__["WebSocketGateway"])(),
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [typeof (_k = typeof _poker_service__WEBPACK_IMPORTED_MODULE_7__[/* PokerService */ "a"] !== "undefined" && _poker_service__WEBPACK_IMPORTED_MODULE_7__[/* PokerService */ "a"]) === "function" ? _k : Object])
], PokerGateway);



/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NotFoundExceptionFilter; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(38);
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
/* 38 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(40);


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(tslib__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _nestjs_common__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_nestjs_common__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(29);
/* harmony import */ var _nestjs_core__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_nestjs_core__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(30);
/* harmony import */ var _frontend_redirect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(37);
/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */





function bootstrap() {
    return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
        const app = yield _nestjs_core__WEBPACK_IMPORTED_MODULE_2__["NestFactory"].create(_app_app_module__WEBPACK_IMPORTED_MODULE_3__[/* AppModule */ "a"]);
        const globalPrefix = 'api';
        app.setGlobalPrefix(globalPrefix);
        const port = process.env.PORT || 3333;
        app.useGlobalFilters(new _frontend_redirect__WEBPACK_IMPORTED_MODULE_4__[/* NotFoundExceptionFilter */ "a"]());
        yield app.listen(port, () => {
            _nestjs_common__WEBPACK_IMPORTED_MODULE_1__["Logger"].log('Listening at http://localhost:' + port + '/' + globalPrefix);
        });
    });
}
bootstrap();


/***/ })
/******/ ])));
//# sourceMappingURL=main.js.map