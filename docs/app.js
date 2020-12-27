/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/event-emitter/index.ts":
/*!************************************!*\
  !*** ./src/event-emitter/index.ts ***!
  \************************************/
/*! flagged exports */
/*! export Emitter [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Emitter = void 0;
var events_1 = __webpack_require__(/*! events */ "./node_modules/events/events.js");
var Emitter = /** @class */ (function () {
    function Emitter() {
        this.emitter = new events_1.EventEmitter();
        // this.emitter.setMaxListeners(1000);
    }
    Emitter.prototype.on = function (eventName, fn) {
        this.emitter.on(eventName, fn);
    };
    Emitter.prototype.off = function (eventName, fn) {
        this.emitter.off(eventName, fn);
    };
    Emitter.prototype.emit = function (eventName, params) {
        this.emitter.emit(eventName, params);
    };
    return Emitter;
}());
exports.Emitter = Emitter;


/***/ }),

/***/ "./src/game-objects-with-events/card.ts":
/*!**********************************************!*\
  !*** ./src/game-objects-with-events/card.ts ***!
  \**********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardGameObjectWithEvent = void 0;
var emitter_1 = __webpack_require__(/*! ./emitter */ "./src/game-objects-with-events/emitter.ts");
var card_1 = __webpack_require__(/*! ../game-objects/card */ "./src/game-objects/card.ts");
var CardGameObjectWithEvent = /** @class */ (function (_super) {
    __extends(CardGameObjectWithEvent, _super);
    function CardGameObjectWithEvent(args) {
        var _this = _super.call(this, args) || this;
        _this.on('pointerdown', function (pointer) { return emitter_1.emitter.emit("CARD_POINTERDOWN", { cardGameObject: _this, pointer: pointer }); });
        _this.on('pointerover', function (pointer) { return emitter_1.emitter.emit("CARD_POINTEROVER", { cardGameObject: _this, pointer: pointer }); });
        _this.on('pointerout', function (pointer) { return emitter_1.emitter.emit("CARD_POINTEROUT", { cardGameObject: _this, pointer: pointer }); });
        _this.on('dragstart', function (pointer) { return emitter_1.emitter.emit("CARD_DRAGSTART", { cardGameObject: _this, pointer: pointer }); });
        _this.on('drag', function (pointer) { return emitter_1.emitter.emit("CARD_DRAG", { cardGameObject: _this, pointer: pointer }); });
        _this.on('drop', function (pointer, zone) { return emitter_1.emitter.emit("CARD_DROP", { cardGameObject: _this, pointer: pointer, zone: zone }); });
        _this.on('dragend', function (pointer) { return emitter_1.emitter.emit("CARD_DRAGEND", { cardGameObject: _this, pointer: pointer }); });
        return _this;
    }
    return CardGameObjectWithEvent;
}(card_1.CardGameObject));
exports.CardGameObjectWithEvent = CardGameObjectWithEvent;


/***/ }),

/***/ "./src/game-objects-with-events/emitter.ts":
/*!*************************************************!*\
  !*** ./src/game-objects-with-events/emitter.ts ***!
  \*************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export emitter [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.emitter = void 0;
var event_emitter_1 = __webpack_require__(/*! ../event-emitter */ "./src/event-emitter/index.ts");
exports.emitter = new event_emitter_1.Emitter();


/***/ }),

/***/ "./src/game-objects-with-events/table.ts":
/*!***********************************************!*\
  !*** ./src/game-objects-with-events/table.ts ***!
  \***********************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TableGameObjectWithEvent = void 0;
// import {emitter} from './emitter';
var table_1 = __webpack_require__(/*! ../game-objects/table */ "./src/game-objects/table.ts");
var TableGameObjectWithEvent = /** @class */ (function (_super) {
    __extends(TableGameObjectWithEvent, _super);
    function TableGameObjectWithEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return TableGameObjectWithEvent;
}(table_1.TableGameObject));
exports.TableGameObjectWithEvent = TableGameObjectWithEvent;


/***/ }),

/***/ "./src/game-objects/button.ts":
/*!************************************!*\
  !*** ./src/game-objects/button.ts ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Button = void 0;
var phaser_1 = __importDefault(__webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js"));
var _a = phaser_1.default.GameObjects, Text = _a.Text, Container = _a.Container;
var Button = /** @class */ (function (_super) {
    __extends(Button, _super);
    function Button(_a) {
        var scene = _a.scene, x = _a.x, y = _a.y, label = _a.label;
        var _this = _super.call(this, scene, x, y) || this;
        _this.render(label);
        return _this;
    }
    Button.prototype.render = function (label) {
        var suitText = new Text(this.scene, 0, 0, label, {
            fontSize: "35px",
            color: '#000000',
            fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'
        });
        suitText.x -= suitText.width / 2;
        suitText.y -= suitText.height / 2;
        this.add(suitText);
        this.setSize(suitText.width, suitText.height);
        this.setInteractive();
    };
    return Button;
}(Container));
exports.Button = Button;


/***/ }),

/***/ "./src/game-objects/card.ts":
/*!**********************************!*\
  !*** ./src/game-objects/card.ts ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardGameObject = void 0;
var phaser_1 = __importDefault(__webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js"));
var card_1 = __webpack_require__(/*! ../models/card */ "./src/models/card.ts");
var _a = phaser_1.default.GameObjects, Text = _a.Text, Rectangle = _a.Rectangle, Container = _a.Container;
var getSuitText = function (suit) {
    switch (suit) {
        case card_1.Suit.Spade:
            return '♠';
        case card_1.Suit.Club:
            return '♣';
        case card_1.Suit.Diamond:
            return '♦';
        case card_1.Suit.Heart:
            return '♥';
    }
};
var getSuitColor = function (suit) {
    switch (suit) {
        case card_1.Suit.Spade:
        case card_1.Suit.Club:
            return '#000000';
        case card_1.Suit.Diamond:
        case card_1.Suit.Heart:
            return '#ff0000';
    }
};
var getRankText = function (rank) {
    if (rank === 11) {
        return 'J';
    }
    else if (rank === 12) {
        return 'Q';
    }
    else if (rank === 13) {
        return 'K';
    }
    else {
        return rank.toString();
    }
};
var CardGameObject = /** @class */ (function (_super) {
    __extends(CardGameObject, _super);
    function CardGameObject(_a) {
        var scene = _a.scene, x = _a.x, y = _a.y, suit = _a.suit, rank = _a.rank, isFaceUp = _a.isFaceUp, name = _a.name;
        var _this = _super.call(this, scene, x, y) || this;
        _this._isHighLighted = false;
        _this.render(suit, rank);
        _this.name = name;
        _this._suit = suit;
        _this._rank = rank;
        _this.back.visible = !isFaceUp;
        return _this;
    }
    Object.defineProperty(CardGameObject.prototype, "suit", {
        get: function () {
            return this._suit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardGameObject.prototype, "rank", {
        get: function () {
            return this._rank;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardGameObject.prototype, "frame", {
        get: function () {
            if (!this._frame) {
                throw new Error();
            }
            return this._frame;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(CardGameObject.prototype, "back", {
        get: function () {
            if (!this._back) {
                throw new Error();
            }
            return this._back;
        },
        enumerable: false,
        configurable: true
    });
    CardGameObject.prototype.render = function (suit, rank) {
        var x = 0;
        var y = 0;
        var frame = new Rectangle(this.scene, x, y, CardGameObject.WIDTH, CardGameObject.HEIGHT, 0xffffff);
        frame.setStrokeStyle(2, 0x000000);
        this.add(frame);
        this._frame = frame;
        var rankText = new Text(this.scene, x - 33, y - 57, getRankText(rank) + getSuitText(suit), {
            fontSize: "25px",
            color: getSuitColor(suit),
            fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'
        });
        // rankText.x = rankText.x - rankText.width / 2;
        this.add(rankText);
        // this.setAlpha(0.3)
        // const suitText = new Text(this.scene, x - 14, y - 58, getSuitText(suit),  {
        //   fontSize: "25px",
        //   color: getSuitColor(suit),
        //   fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'
        // });
        // suitText.x = suitText.x - suitText.width / 2;
        // this.add(suitText);
        // const suitText = new Text(this.scene, x, y - 45, getSuitText(suit),  {
        //   fontSize: "45px",
        //   color: getSuitColor(suit),
        //   fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'
        // });
        // suitText.x = suitText.x - suitText.width / 2;
        // this.add(suitText);
        //
        // const rankText = new Text(this.scene, x, y - 2,  getRankText(rank),  {
        //   fontSize: "35px",
        //   color: getSuitColor(suit),
        //   fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'
        // });
        // rankText.x = rankText.x - rankText.width / 2;
        // this.add(rankText);
        this._back = new Container(this.scene, x, y);
        var backPattern = new Rectangle(this.scene, x, y, CardGameObject.WIDTH - 20, CardGameObject.HEIGHT - 20, 0xaaaaaa);
        backPattern.setStrokeStyle(3, 0xaaaaaa);
        var backWhite = new Rectangle(this.scene, x, y, CardGameObject.WIDTH - 2, CardGameObject.HEIGHT - 2, 0xffffff);
        this.back.add(backWhite);
        this.back.add(backPattern);
        this.add(this.back);
        this.setSize(CardGameObject.WIDTH, CardGameObject.HEIGHT);
        this.setInteractive({ draggable: true });
    };
    CardGameObject.prototype.flipOver = function (up) {
        var _this = this;
        return new Promise(function (resolve) {
            var timeline = _this.scene.tweens.createTimeline();
            timeline.add({
                targets: _this,
                props: {
                    scaleX: 0,
                },
                duration: 35,
                onComplete: function () {
                    _this.back.visible = !up;
                }
            });
            timeline.add({
                targets: _this,
                props: {
                    scaleX: 1,
                },
                duration: 35,
                onComplete: function () {
                    resolve();
                }
            });
            timeline.play();
        });
    };
    Object.defineProperty(CardGameObject.prototype, "isFaceUp", {
        get: function () {
            return !this.back.visible;
        },
        enumerable: false,
        configurable: true
    });
    CardGameObject.prototype.addHighlight = function () {
        this.frame.setStrokeStyle(2, 0xff5588);
        this._isHighLighted = true;
    };
    CardGameObject.prototype.removeHighlight = function () {
        this.frame.setStrokeStyle(2, 0x000000);
        this._isHighLighted = false;
    };
    Object.defineProperty(CardGameObject.prototype, "isHighLighted", {
        get: function () {
            return this._isHighLighted;
        },
        enumerable: false,
        configurable: true
    });
    CardGameObject.WIDTH = 70;
    CardGameObject.HEIGHT = 110;
    return CardGameObject;
}(Container));
exports.CardGameObject = CardGameObject;


/***/ }),

/***/ "./src/game-objects/pile.ts":
/*!**********************************!*\
  !*** ./src/game-objects/pile.ts ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PileGameObject = void 0;
var phaser_1 = __importDefault(__webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js"));
var card_1 = __webpack_require__(/*! ./card */ "./src/game-objects/card.ts");
var transform_1 = __webpack_require__(/*! ./transform */ "./src/game-objects/transform.ts");
var PileGameObject = /** @class */ (function (_super) {
    __extends(PileGameObject, _super);
    function PileGameObject(_a) {
        var scene = _a.scene, x = _a.x, y = _a.y, name = _a.name, isSpread = _a.isSpread, isDropTarget = _a.isDropTarget, label = _a.label
        // isInteractive
        ;
        var _this = _super.call(this, scene, x, y) || this;
        _this._isSpread = false;
        _this._cardGameObjects = [];
        // private _isInteractive:boolean = false;
        _this._faceDownCardGap = 15;
        _this._faceUpCardGap = 26;
        _this._maxHeightOfGaps = 200;
        _this.name = name;
        _this._label = label || '';
        if (isSpread) {
            _this._isSpread = true;
        }
        if (isDropTarget) {
            _this._zone = _this.renderZone();
            _this._zoneRect = _this.renderZoneRect();
        }
        return _this;
        // if (isInteractive)
        // {
        //   this.setSize(CardGameObject.WIDTH, CardGameObject.HEIGHT);
        //   this.setInteractive();
        //   this._isInteractive = true;
        // }
    }
    Object.defineProperty(PileGameObject.prototype, "label", {
        get: function () {
            return this._label;
        },
        enumerable: false,
        configurable: true
    });
    PileGameObject.prototype.renderZone = function () {
        var zone = new phaser_1.default.GameObjects.Zone(this.scene, 0, 0, 1, 1);
        this.add(zone);
        return zone;
    };
    PileGameObject.prototype.renderZoneRect = function () {
        var rect = new phaser_1.default.GameObjects.Rectangle(this.scene, 0, 0, 1, 1, 0xcccccc);
        this.add(rect);
        return rect;
    };
    PileGameObject.prototype.resizeZone = function () {
        var width = card_1.CardGameObject.WIDTH;
        var frontCardGameObject = this._cardGameObjects[this._cardGameObjects.length - 1];
        var height = card_1.CardGameObject.HEIGHT + (frontCardGameObject ? frontCardGameObject.y : 0);
        var x = 0;
        var y = (height / 2) - (card_1.CardGameObject.HEIGHT / 2);
        if (this._zone) {
            this._zone.x = x;
            this._zone.y = y;
            this._zone.width = width;
            this._zone.height = height;
            this._zone.setRectangleDropZone(width, height);
            this._zone.input.hitArea.setSize(width, height);
            this._zone.setOrigin(this._zone.originX, this._zone.originY);
        }
        if (this._zoneRect) {
            this._zoneRect.x = x;
            this._zoneRect.y = y;
            this._zoneRect.width = width;
            this._zoneRect.height = height;
            this._zoneRect.setOrigin(this._zoneRect.originX, this._zoneRect.originY);
        }
        // if (this._isInteractive)
        // {
        //   this.input.hitArea.setSize(width, height)
        // }
    };
    Object.defineProperty(PileGameObject.prototype, "zone", {
        get: function () {
            return this._zone;
        },
        enumerable: false,
        configurable: true
    });
    PileGameObject.prototype.getNewFrontCardGameObjectPosition = function () {
        var _this = this;
        return {
            x: 0,
            y: !this._isSpread ? 0 : this._cardGameObjects.reduce(function (prev, cardGameObject) {
                return prev + (cardGameObject.isFaceUp ? _this._faceUpCardGap : _this._faceDownCardGap);
            }, 0)
        };
    };
    PileGameObject.prototype._getAdjustedCardGameObjectPositions = function () {
        if (!this._isSpread || this._cardGameObjects.length <= 1) {
            return this._cardGameObjects.map(function (cardGameObject, i) { return ({
                x: 0,
                y: 0,
                depth: i,
                cardGameObject: cardGameObject
            }); });
        }
        var numberOfGaps = this._cardGameObjects.length - 1;
        var numberOfFaceUpCardGaps = this._cardGameObjects.slice(0, -1).reduce(function (pre, cur) { return pre + (cur.isFaceUp ? 1 : 0); }, 0);
        var numberOfFaceDownCardGaps = numberOfGaps - numberOfFaceUpCardGaps;
        var heihgtOfGaps = numberOfFaceUpCardGaps * this._faceUpCardGap + numberOfFaceDownCardGaps * this._faceDownCardGap;
        var gapOfFaceUpCard = this._faceUpCardGap;
        var gapOfFaceDownCard = this._faceDownCardGap;
        if (heihgtOfGaps > this._maxHeightOfGaps) {
            gapOfFaceUpCard = this._maxHeightOfGaps / (numberOfFaceUpCardGaps + numberOfFaceDownCardGaps * this._faceDownCardGap / this._faceUpCardGap);
            gapOfFaceDownCard = this._maxHeightOfGaps / (numberOfFaceDownCardGaps + numberOfFaceUpCardGaps * this._faceUpCardGap / this._faceDownCardGap);
        }
        var offset = 0;
        var positions = [];
        for (var i = 0; i < this._cardGameObjects.length; i++) {
            var cardGameObject = this._cardGameObjects[i];
            positions = __spreadArrays(positions, [{
                    x: 0,
                    y: offset,
                    cardGameObject: cardGameObject
                }]);
            offset = offset + (cardGameObject.isFaceUp ? gapOfFaceUpCard : gapOfFaceDownCard);
        }
        return positions;
    };
    PileGameObject.prototype.adjustCardGameObjectPositionsWithAnimation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var positions;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        positions = this._getAdjustedCardGameObjectPositions();
                        return [4 /*yield*/, Promise.all(positions
                                .filter(function (position) { return (position.x !== position.cardGameObject.x || position.y !== position.cardGameObject.y); })
                                .map(function (position) { return new Promise(function (res) {
                                _this.scene.tweens.add({
                                    targets: position.cardGameObject,
                                    props: {
                                        x: position.x,
                                        y: position.y
                                    },
                                    duration: 70,
                                    onComplete: function () { return res(); }
                                });
                            }); }))
                                .then(function () { return _this.resizeZone(); })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PileGameObject.prototype.adjustCardGameObjectPositions = function () {
        var positions = this._getAdjustedCardGameObjectPositions();
        for (var _i = 0, positions_1 = positions; _i < positions_1.length; _i++) {
            var position = positions_1[_i];
            position.cardGameObject.x = position.x;
            position.cardGameObject.y = position.y;
        }
        this.resizeZone();
    };
    PileGameObject.prototype.expandWithAnimation = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, new Promise(function (resolve) {
                            _this.scaleX = 1;
                            _this.scaleY = 1;
                            _this.scene.tweens.add({
                                targets: _this,
                                props: {
                                    scaleX: 1.1,
                                    scaleY: 1.1
                                },
                                duration: 40,
                                onComplete: function () { return resolve(); }
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    PileGameObject.prototype.placeCardGameObjects = function (_a) {
        var cardGameObjects = _a.cardGameObjects;
        var worldPosition = transform_1.getWorldPosition(this);
        for (var index = 0; index < cardGameObjects.length; index++) {
            var cardGameObject = cardGameObjects[index];
            cardGameObject.x = cardGameObject.x - worldPosition.x;
            cardGameObject.y = cardGameObject.y - worldPosition.y;
            this.add(cardGameObject);
        }
        this._cardGameObjects = __spreadArrays(this._cardGameObjects, cardGameObjects);
    };
    PileGameObject.prototype.getFrontGameObjects = function (_a) {
        var size = _a.size;
        return this._cardGameObjects.slice(-size);
    };
    PileGameObject.prototype.removeFrontGameObjects = function (_a) {
        var size = _a.size;
        var cardGameObjects = this.getFrontGameObjects({ size: size });
        var worldPosition = transform_1.getWorldPosition(this);
        for (var index = 0; index < cardGameObjects.length; index++) {
            var cardGameObject = cardGameObjects[index];
            cardGameObject.x = cardGameObject.x + worldPosition.x;
            cardGameObject.y = cardGameObject.y + worldPosition.y;
            this.remove(cardGameObject);
        }
        this._cardGameObjects = this._cardGameObjects.slice(0, this._cardGameObjects.length - size);
        this.resizeZone();
    };
    PileGameObject.prototype.drawFrontCardGameObjects = function (_a) {
        var size = _a.size;
        var cardGameObjects = this.getFrontGameObjects({ size: size });
        this.removeFrontGameObjects({ size: size });
        return cardGameObjects;
    };
    Object.defineProperty(PileGameObject.prototype, "cardGameObjects", {
        get: function () {
            return __spreadArrays(this._cardGameObjects);
        },
        enumerable: false,
        configurable: true
    });
    return PileGameObject;
}(phaser_1.default.GameObjects.Container));
exports.PileGameObject = PileGameObject;


/***/ }),

/***/ "./src/game-objects/table.ts":
/*!***********************************!*\
  !*** ./src/game-objects/table.ts ***!
  \***********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TableGameObject = void 0;
var phaser_1 = __importDefault(__webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js"));
var pile_1 = __webpack_require__(/*! ./pile */ "./src/game-objects/pile.ts");
var TableGameObject = /** @class */ (function (_super) {
    __extends(TableGameObject, _super);
    function TableGameObject(_a) {
        var scene = _a.scene, deckPileId = _a.deckPileId, drawPilesIds = _a.drawPilesIds, tableauPilesIds = _a.tableauPilesIds, discardPilesIds = _a.discardPilesIds, dragPileId = _a.dragPileId, hintPileId = _a.hintPileId, cardGameObjects = _a.cardGameObjects;
        var _this = _super.call(this, scene, 0, 0) || this;
        _this._cardGameObjects = [];
        _this._pileGameObjects = [];
        _this._drawPileGameObjects = [];
        _this._tableauPileGameObjects = [];
        _this._discardPileGameObjects = [];
        _this._cardGameObjects = cardGameObjects;
        var _deckPile = new pile_1.PileGameObject({
            scene: _this.scene,
            x: 500,
            y: 500,
            name: deckPileId,
            label: 'deck'
        });
        _this._pileGameObjects = __spreadArrays(_this._pileGameObjects, [_deckPile]);
        _this._deckPileGameObject = _deckPile;
        _this._deckPileGameObject.placeCardGameObjects({ cardGameObjects: cardGameObjects });
        _this._deckPileGameObject.adjustCardGameObjectPositions();
        _this.add(_deckPile);
        for (var index = 0; index < drawPilesIds.length; index++) {
            var drawPile = new pile_1.PileGameObject({
                scene: _this.scene,
                x: 70 + index * 20,
                y: 100,
                name: drawPilesIds[index],
                label: 'draw' + index
            });
            _this._pileGameObjects = __spreadArrays(_this._pileGameObjects, [drawPile]);
            _this._drawPileGameObjects = __spreadArrays(_this._drawPileGameObjects, [drawPile]);
            _this.add(drawPile);
        }
        for (var index = 0; index < tableauPilesIds.length; index++) {
            var tableauPile = new pile_1.PileGameObject({
                scene: _this.scene,
                x: 70 + index * 90,
                y: 250,
                name: tableauPilesIds[index],
                isSpread: true,
                isDropTarget: true,
                label: 'tableau' + index
            });
            _this._pileGameObjects = __spreadArrays(_this._pileGameObjects, [tableauPile]);
            _this._tableauPileGameObjects = __spreadArrays(_this._tableauPileGameObjects, [tableauPile]);
            _this.add(tableauPile);
        }
        for (var index = 0; index < discardPilesIds.length; index++) {
            var discardPile = new pile_1.PileGameObject({
                scene: _this.scene,
                x: 300 + index * 90,
                y: 100,
                name: discardPilesIds[index],
                label: 'discard' + index
            });
            _this._pileGameObjects = __spreadArrays(_this._pileGameObjects, [discardPile]);
            _this._discardPileGameObjects = __spreadArrays(_this._discardPileGameObjects, [discardPile]);
            _this.add(discardPile);
        }
        var _dragPileGameObject = new pile_1.PileGameObject({
            scene: _this.scene,
            x: 0,
            y: 0,
            name: dragPileId,
            isSpread: true,
            label: 'drag'
        });
        _this._pileGameObjects = __spreadArrays(_this._pileGameObjects, [_dragPileGameObject]);
        _this._dragPileGameObject = _dragPileGameObject;
        _this._dragPileGameObject.setActive(false);
        _this.add(_dragPileGameObject);
        var _hintPileGameObject = new pile_1.PileGameObject({
            scene: _this.scene,
            x: 0,
            y: 0,
            name: hintPileId,
            isSpread: true,
            label: 'hint'
        });
        _this._pileGameObjects = __spreadArrays(_this._pileGameObjects, [_hintPileGameObject]);
        _this._hintPileGameObject = _hintPileGameObject;
        _this._hintPileGameObject.setActive(false);
        _this.add(_hintPileGameObject);
        return _this;
    }
    Object.defineProperty(TableGameObject.prototype, "cardGameObjects", {
        get: function () {
            return __spreadArrays(this._cardGameObjects);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableGameObject.prototype, "pileGameObjects", {
        get: function () {
            return __spreadArrays(this._pileGameObjects);
        },
        enumerable: false,
        configurable: true
    });
    TableGameObject.prototype.getPileGameObjectBy = function (predicate) {
        var pile = this._pileGameObjects.find(predicate);
        if (!pile) {
            throw new Error("The pile game object doesn't exist.");
        }
        return pile;
    };
    TableGameObject.prototype.getPileGameObjectByName = function (name) {
        return this.getPileGameObjectBy(function (p) { return p.name === name; });
    };
    TableGameObject.prototype.getPileGameObjectByCardGameObjectName = function (name) {
        return this.getPileGameObjectBy(function (p) { return p.cardGameObjects.find(function (c) { return c.name === name; }); });
    };
    Object.defineProperty(TableGameObject.prototype, "deckPileGameObject", {
        get: function () {
            return this._deckPileGameObject;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableGameObject.prototype, "drawPileGameObjects", {
        get: function () {
            return __spreadArrays(this._drawPileGameObjects);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableGameObject.prototype, "tableauPileGameObjects", {
        get: function () {
            return __spreadArrays(this._tableauPileGameObjects);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableGameObject.prototype, "dragPileGameObject", {
        get: function () {
            return this._dragPileGameObject;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(TableGameObject.prototype, "hintPileGameObject", {
        get: function () {
            return this._hintPileGameObject;
        },
        enumerable: false,
        configurable: true
    });
    return TableGameObject;
}(phaser_1.default.GameObjects.Container));
exports.TableGameObject = TableGameObject;


/***/ }),

/***/ "./src/game-objects/transform.ts":
/*!***************************************!*\
  !*** ./src/game-objects/transform.ts ***!
  \***************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export getWorldPosition [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getWorldPosition = void 0;
exports.getWorldPosition = function (container) {
    var parent = container.parentContainer;
    var x = container.x;
    var y = container.y;
    while (parent) {
        x = x + parent.x;
        y = y + parent.y;
        parent = parent.parentContainer;
    }
    return { x: x, y: y };
};


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var phaser_1 = __importDefault(__webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js"));
// import HelloWorldScene from "./scenes/hello-world-scene";
var main_scene_1 = __importDefault(__webpack_require__(/*! ./scenes/main-scene */ "./src/scenes/main-scene.ts"));
var config = {
    // title: "Game Of Life",
    // url: "https://github.com/digitsensitive/phaser3-typescript",
    // version: "1.0",
    width: 1000,
    height: 800,
    type: phaser_1.default.AUTO,
    // parent: "game",
    scene: [main_scene_1.default],
    backgroundColor: "#ededed",
};
// export class Game extends Phaser.Game {
//   constructor(config: Phaser.Types.Core.GameConfig) {
//     super(config);
//   }
// }
window.addEventListener("load", function () {
    new phaser_1.default.Game(config);
});


/***/ }),

/***/ "./src/job-queue/index.ts":
/*!********************************!*\
  !*** ./src/job-queue/index.ts ***!
  \********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.JobQueue = void 0;
var event_emitter_1 = __webpack_require__(/*! ../event-emitter */ "./src/event-emitter/index.ts");
var Job = /** @class */ (function () {
    function Job(jobPromiseCreator) {
        this._onStartCallback = function () { };
        this._onEndCallback = function () { };
        this._onFailCallback = function () { };
        this._onQueueCancelCallback = function () { };
        this._status = 0;
        this._jobPromiseCreator = jobPromiseCreator;
    }
    Job.prototype.start = function () {
        var _this = this;
        if (this.isUntouched) {
            var promise = this._jobPromiseCreator(function (callback) { return _this._onQueueCancelCallback = callback; });
            this._status = 1;
            this._onStartCallback();
            promise.then(function (value) {
                _this._status = 2;
                _this._onEndCallback(value);
            }).catch(function (reason) {
                _this._status = 2;
                _this._onFailCallback(reason);
            });
        }
    };
    Object.defineProperty(Job.prototype, "onStartCallback", {
        set: function (callback) {
            this._onStartCallback = callback;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Job.prototype, "onEndCallback", {
        set: function (callback) {
            this._onEndCallback = callback;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Job.prototype, "onFailCallback", {
        set: function (callback) {
            this._onFailCallback = callback;
        },
        enumerable: false,
        configurable: true
    });
    Job.prototype.runQueueCancelCallback = function () {
        this._onQueueCancelCallback();
    };
    Object.defineProperty(Job.prototype, "isUntouched", {
        get: function () {
            return this._status === 0;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Job.prototype, "isProcessing", {
        get: function () {
            return this._status === 1;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Job.prototype, "isDone", {
        get: function () {
            return this._status === 2;
        },
        enumerable: false,
        configurable: true
    });
    return Job;
}());
var JobQueue = /** @class */ (function () {
    function JobQueue() {
        this._hasStarted = false;
        this._currentIndex = 0;
        this._jobQueue = [];
        this._emitter = new event_emitter_1.Emitter();
    }
    Object.defineProperty(JobQueue.prototype, "isProcessing", {
        get: function () {
            return this._hasStarted;
        },
        enumerable: false,
        configurable: true
    });
    JobQueue.prototype.add = function (jobCreator) {
        var _this = this;
        var job = new Job(jobCreator);
        job.onStartCallback = function () {
            _this._emitter.emit("JOB_START", {});
        };
        job.onEndCallback = function (value) {
            _this._emitter.emit("JOB_END", { value: value });
            _this._currentIndex = _this._currentIndex + 1;
            _this._process();
        };
        job.onFailCallback = function (reason) {
            console.error(reason);
        };
        this._jobQueue = __spreadArrays(this._jobQueue, [
            job
        ]);
        this._process();
    };
    JobQueue.prototype._process = function () {
        if (!this._hasStarted) {
            this._hasStarted = true;
            this._emitter.emit("QUEUE_START", {});
        }
        if (this._currentIndex < this._jobQueue.length) {
            var job = this._jobQueue[this._currentIndex];
            if (job && job.isUntouched) {
                job.start();
            }
        }
        else {
            this._hasStarted = false;
            this._jobQueue = [];
            this._currentIndex = 0;
            this._emitter.emit("QUEUE_END", {});
        }
    };
    JobQueue.prototype.cancel = function () {
        var hasStarted = this._hasStarted;
        var job = this._jobQueue[this._currentIndex];
        this._hasStarted = false;
        this._jobQueue = [];
        this._currentIndex = 0;
        if (!hasStarted || !job || !job.isProcessing) {
            this._emitter.emit("QUEUE_CANCEL", { wasProcessing: false });
        }
        else {
            job.onEndCallback = function () { };
            job.runQueueCancelCallback();
            this._emitter.emit("QUEUE_CANCEL", { wasProcessing: true });
        }
    };
    JobQueue.prototype.onQueueStart = function (callback) {
        this._emitter.on('QUEUE_START', callback);
    };
    JobQueue.prototype.onQueueEnd = function (callback) {
        this._emitter.on('QUEUE_END', callback);
    };
    JobQueue.prototype.onQueueCancel = function (callback) {
        this._emitter.on('QUEUE_CANCEL', callback);
    };
    JobQueue.prototype.onJobStart = function (callback) {
        this._emitter.on('JOB_START', callback);
    };
    JobQueue.prototype.onJobEnd = function (callback) {
        this._emitter.on('JOB_END', callback);
    };
    return JobQueue;
}());
exports.JobQueue = JobQueue;


/***/ }),

/***/ "./src/models-with-events/card.ts":
/*!****************************************!*\
  !*** ./src/models-with-events/card.ts ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CardWithEvent = void 0;
var emitter_1 = __webpack_require__(/*! ./emitter */ "./src/models-with-events/emitter.ts");
var card_1 = __webpack_require__(/*! ../models/card */ "./src/models/card.ts");
var CardWithEvent = /** @class */ (function (_super) {
    __extends(CardWithEvent, _super);
    function CardWithEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CardWithEvent.prototype.faceUp = function () {
        _super.prototype.faceUp.call(this);
        emitter_1.emitter.emit('FLIP_OVER_CARD', {
            card: this
        });
    };
    CardWithEvent.prototype.faceDown = function () {
        _super.prototype.faceDown.call(this);
        emitter_1.emitter.emit('FLIP_OVER_CARD', {
            card: this
        });
    };
    CardWithEvent.prototype.flipOver = function () {
        _super.prototype.flipOver.call(this);
        emitter_1.emitter.emit('FLIP_OVER_CARD', {
            card: this
        });
    };
    return CardWithEvent;
}(card_1.Card));
exports.CardWithEvent = CardWithEvent;


/***/ }),

/***/ "./src/models-with-events/create-cards.ts":
/*!************************************************!*\
  !*** ./src/models-with-events/create-cards.ts ***!
  \************************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export createCardsWithEvents [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.createCardsWithEvents = void 0;
var create_cards_1 = __webpack_require__(/*! ../models/create-cards */ "./src/models/create-cards.ts");
var card_1 = __webpack_require__(/*! ./card */ "./src/models-with-events/card.ts");
exports.createCardsWithEvents = function (_a) {
    var numberOfDecksUsed = _a.numberOfDecksUsed, numberOfSuits = _a.numberOfSuits;
    return create_cards_1.createCards({
        numberOfDecksUsed: numberOfDecksUsed,
        numberOfSuits: numberOfSuits
    }).map(function (card) { return new card_1.CardWithEvent({
        suit: card.suit,
        rank: card.rank,
        isFaceUp: card.isFaceUp
    }); });
};


/***/ }),

/***/ "./src/models-with-events/emitter.ts":
/*!*******************************************!*\
  !*** ./src/models-with-events/emitter.ts ***!
  \*******************************************/
/*! flagged exports */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! export emitter [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.emitter = void 0;
var event_emitter_1 = __webpack_require__(/*! ../event-emitter */ "./src/event-emitter/index.ts");
exports.emitter = new event_emitter_1.Emitter();


/***/ }),

/***/ "./src/models-with-events/pile.ts":
/*!****************************************!*\
  !*** ./src/models-with-events/pile.ts ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PileWithEvent = void 0;
var pile_1 = __webpack_require__(/*! ../models/pile */ "./src/models/pile.ts");
var PileWithEvent = /** @class */ (function (_super) {
    __extends(PileWithEvent, _super);
    function PileWithEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return PileWithEvent;
}(pile_1.Pile));
exports.PileWithEvent = PileWithEvent;


/***/ }),

/***/ "./src/models-with-events/table.ts":
/*!*****************************************!*\
  !*** ./src/models-with-events/table.ts ***!
  \*****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.TableWithEvent = void 0;
var emitter_1 = __webpack_require__(/*! ./emitter */ "./src/models-with-events/emitter.ts");
var table_1 = __webpack_require__(/*! ../models/table */ "./src/models/table.ts");
var TableWithEvent = /** @class */ (function (_super) {
    __extends(TableWithEvent, _super);
    function TableWithEvent() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    TableWithEvent.prototype._moveCardBetweenPiles = function (_a) {
        var from = _a.from, to = _a.to, size = _a.size;
        var cards = _super.prototype._moveCardBetweenPiles.call(this, { from: from, to: to, size: size });
        emitter_1.emitter.emit('MOVE_CARDS_BETWEEN_PILES', { from: from, to: to, size: size });
        return cards;
    };
    return TableWithEvent;
}(table_1.Table));
exports.TableWithEvent = TableWithEvent;


/***/ }),

/***/ "./src/models/card.ts":
/*!****************************!*\
  !*** ./src/models/card.ts ***!
  \****************************/
/*! flagged exports */
/*! export Card [provided] [no usage info] [missing usage info prevents renaming] */
/*! export Suit [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Card = exports.Suit = void 0;
// import {eventHub} from '../event-hub';
var nanoid_1 = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
var Suit;
(function (Suit) {
    Suit["Spade"] = "\u2660";
    Suit["Club"] = "\u2663";
    Suit["Diamond"] = "\u2666";
    Suit["Heart"] = "\u2665";
})(Suit = exports.Suit || (exports.Suit = {}));
var getRankText = function (rank) {
    if (rank < 1 || 13 < rank) {
        throw new Error("Card rank is invalid.");
    }
    if (rank === 11) {
        return 'J';
    }
    else if (rank === 12) {
        return 'Q';
    }
    else if (rank === 13) {
        return 'K';
    }
    else {
        return rank.toString();
    }
};
var Card = /** @class */ (function () {
    function Card(_a) {
        var suit = _a.suit, rank = _a.rank, isFaceUp = _a.isFaceUp;
        this._id = nanoid_1.nanoid();
        this._suit = suit;
        this._isFaceUp = isFaceUp || false;
        if (1 <= rank && rank <= 13) {
            this._rank = rank;
        }
        else {
            throw new Error("The card rank " + rank + " is invalid.");
        }
    }
    Object.defineProperty(Card.prototype, "suit", {
        get: function () {
            return this._suit;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "suitMark", {
        get: function () {
            return this._suit.toString();
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "rank", {
        get: function () {
            return this._rank;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "rankMark", {
        get: function () {
            return getRankText(this._rank);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "isFaceUp", {
        get: function () {
            return this._isFaceUp;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Card.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Card.prototype.faceUp = function () {
        this._isFaceUp = true;
    };
    Card.prototype.faceDown = function () {
        this._isFaceUp = false;
    };
    Card.prototype.flipOver = function () {
        this._isFaceUp = !this._isFaceUp;
    };
    Card.prototype.toString = function () {
        return this.suitMark + this.rankMark + (this._isFaceUp ? '+' : '-');
    };
    return Card;
}());
exports.Card = Card;


/***/ }),

/***/ "./src/models/create-cards.ts":
/*!************************************!*\
  !*** ./src/models/create-cards.ts ***!
  \************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.randomizeArray = exports.createCards = void 0;
var card_1 = __webpack_require__(/*! ./card */ "./src/models/card.ts");
exports.createCards = function (_a) {
    var numberOfDecksUsed = _a.numberOfDecksUsed, numberOfSuits = _a.numberOfSuits;
    var deckCards = [];
    for (var i = 0; i < numberOfDecksUsed; i++) {
        for (var rank = 1; rank <= 13; rank++) {
            switch (numberOfSuits) {
                case 4:
                    deckCards.push(new card_1.Card({ suit: card_1.Suit.Diamond, rank: rank, isFaceUp: false }));
                case 3:
                    deckCards.push(new card_1.Card({ suit: card_1.Suit.Club, rank: rank, isFaceUp: false }));
                case 2:
                    deckCards.push(new card_1.Card({ suit: card_1.Suit.Heart, rank: rank, isFaceUp: false }));
                case 1:
                    deckCards.push(new card_1.Card({ suit: card_1.Suit.Spade, rank: rank, isFaceUp: false }));
            }
        }
    }
    return deckCards;
};
exports.randomizeArray = function (_a) {
    var _b;
    var array = _a.array;
    var _arr = __spreadArrays(array);
    for (var i = _arr.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        _b = [_arr[j], _arr[i]], _arr[i] = _b[0], _arr[j] = _b[1];
    }
    return _arr;
};


/***/ }),

/***/ "./src/models/pile.ts":
/*!****************************!*\
  !*** ./src/models/pile.ts ***!
  \****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Pile = void 0;
var nanoid_1 = __webpack_require__(/*! nanoid */ "./node_modules/nanoid/index.browser.js");
var Pile = /** @class */ (function () {
    function Pile(args) {
        if (args === void 0) { args = {}; }
        this._id = nanoid_1.nanoid();
        this._cards = args.cards || [];
        this._label = args.label || '';
    }
    Object.defineProperty(Pile.prototype, "id", {
        get: function () {
            return this._id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pile.prototype, "label", {
        get: function () {
            return this._label;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pile.prototype, "cards", {
        get: function () {
            return __spreadArrays(this._cards);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pile.prototype, "frontCard", {
        get: function () {
            return this._cards[this._cards.length - 1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Pile.prototype, "lastCard", {
        get: function () {
            return this._cards[0];
        },
        enumerable: false,
        configurable: true
    });
    Pile.prototype.getFrontCards = function (_a) {
        var size = _a.size;
        var cards = this._cards;
        if (cards.length === 0 || size < 1) {
            return [];
        }
        var _size = Math.min(cards.length, size);
        return cards.slice(cards.length - _size);
    };
    Pile.prototype.drawCards = function (_a) {
        var size = _a.size;
        var cards = this._cards;
        if (cards.length === 0 || size < 1) {
            return [];
        }
        var _size = Math.min(cards.length, size);
        var drawnCards = cards.slice(cards.length - _size);
        this._cards = cards.slice(0, -size);
        return drawnCards;
    };
    Pile.prototype.placeCards = function (_a) {
        var cards = _a.cards;
        this._cards = __spreadArrays(this._cards, cards);
    };
    Pile.prototype.getDescendingInSuitFrontCards = function () {
        return Pile.getDescendingFrontCards({
            cards: this._cards,
            inSuit: true,
            faceUp: true
        });
    };
    Pile.getDescendingFrontCards = function (_a) {
        var cards = _a.cards, inSuit = _a.inSuit, faceUp = _a.faceUp;
        var _inSuit = inSuit || false;
        var _faceUp = faceUp || false;
        if (cards.length === 0) {
            return [];
        }
        var prev = cards[cards.length - 1];
        if (_faceUp && !prev.isFaceUp) {
            return [];
        }
        var _cards = [prev];
        for (var index = cards.length - 2; index >= 0; index--) {
            var current = cards[index];
            if (prev.rank + 1 !== current.rank
                || (_inSuit && prev.suit !== current.suit)
                || (_faceUp && !current.isFaceUp)) {
                break;
            }
            _cards = __spreadArrays([current], _cards);
            prev = current;
        }
        return _cards;
    };
    Pile.checkIfCardsAreDescending = function (_a) {
        var cards = _a.cards, inSuit = _a.inSuit, faceUp = _a.faceUp;
        return Pile.getDescendingFrontCards({ cards: cards, inSuit: inSuit, faceUp: faceUp }).length === cards.length;
    };
    Pile.prototype.checkIfFrontCardsComplete = function () {
        return this.cards.length >= 13 && Pile.checkIfCardsAreDescending({
            cards: this.cards.slice(-13),
            inSuit: true,
            faceUp: true
        });
    };
    Pile.prototype.toString = function () {
        return this.cards.map(function (c) { return c.toString(); }).join(' ');
    };
    return Pile;
}());
exports.Pile = Pile;


/***/ }),

/***/ "./src/models/table.ts":
/*!*****************************!*\
  !*** ./src/models/table.ts ***!
  \*****************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Table = void 0;
var pile_1 = __webpack_require__(/*! ./pile */ "./src/models/pile.ts");
// import {TableSettings, TableSettingConfig} from './table-settings';
var undoable_actions_1 = __webpack_require__(/*! ./undoable-actions */ "./src/models/undoable-actions.ts");
var Table = /** @class */ (function () {
    function Table(settings) {
        this._settings = settings;
        this._cards = settings.cards;
        this._deckPile = new pile_1.Pile({ label: 'deck', cards: settings.cards });
        this._drawPiles = Array.from({ length: settings.numberOfDrawPiles }).map(function (_, i) { return new pile_1.Pile({ label: "draw" + i, cards: [] }); });
        this._tableauPiles = Array.from({ length: settings.numberOfTableauPiles }).map(function (_, i) { return new pile_1.Pile({ label: "tabl" + i, cards: [] }); });
        this._discardPiles = Array.from({ length: Math.floor(settings.cards.length / 13) }).map(function (_, i) { return new pile_1.Pile({ label: "disc" + i, cards: [] }); });
        this._piles = __spreadArrays([this._deckPile], this._drawPiles, this.tableauPiles, this._discardPiles);
        this._actionHistory = new undoable_actions_1.UndoableActionHistory();
    }
    Object.defineProperty(Table.prototype, "cards", {
        get: function () {
            return __spreadArrays(this._cards);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "piles", {
        get: function () {
            return __spreadArrays(this._piles);
        },
        enumerable: false,
        configurable: true
    });
    Table.prototype.getPileBy = function (predicate) {
        var pile = this._piles.find(predicate);
        if (!pile) {
            throw new Error("The pile doesn't exist.");
        }
        return pile;
    };
    Table.prototype.getPileById = function (id) {
        return this.getPileBy(function (p) { return p.id === id; });
    };
    Table.prototype.getPileByCardId = function (id) {
        return this.getPileBy(function (p) { return p.cards.find(function (c) { return c.id === id; }); });
    };
    Object.defineProperty(Table.prototype, "deckPile", {
        get: function () {
            return this._deckPile;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "drawPiles", {
        get: function () {
            return __spreadArrays(this._drawPiles);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "tableauPiles", {
        get: function () {
            return __spreadArrays(this._tableauPiles);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "discardPiles", {
        get: function () {
            return __spreadArrays(this._discardPiles);
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Table.prototype, "isClear", {
        get: function () {
            return !this._tableauPiles.find(function (p) { return p.cards.length > 0; });
        },
        enumerable: false,
        configurable: true
    });
    Table.prototype.getPossibleMovesBetweenTableauPiles = function () {
        var moves = [];
        for (var _i = 0, _a = this._tableauPiles; _i < _a.length; _i++) {
            var from = _a[_i];
            var drawableCards = from.getDescendingInSuitFrontCards();
            if (drawableCards.length === 0)
                continue;
            for (var _b = 0, _c = this._tableauPiles; _b < _c.length; _b++) {
                var to = _c[_b];
                if (to === from)
                    continue;
                for (var size = drawableCards.length; size > 0; size--) {
                    if (to.frontCard && !pile_1.Pile.checkIfCardsAreDescending({
                        cards: __spreadArrays([to.frontCard], drawableCards.slice(-size)),
                        inSuit: false,
                        faceUp: true
                    }))
                        continue;
                    moves = __spreadArrays(moves, [{ from: from, to: to, size: size }]);
                }
            }
        }
        return moves;
    };
    Table.prototype._moveCardBetweenPiles = function (_a) {
        var from = _a.from, to = _a.to, size = _a.size;
        if (!this._piles.find(function (p) { return p === from; })) {
            throw new Error("The \"from\" pile is not be in this table.");
        }
        if (!this._piles.find(function (p) { return p === to; })) {
            throw new Error("The \"to\" pile is not be in this table.");
        }
        if (from.getFrontCards({ size: size }).length !== size) {
            throw new Error("The pile \"" + from.id + "\" doesn't have " + size + " cards to draw.");
        }
        var cards = from.drawCards({ size: size });
        to.placeCards({ cards: cards });
    };
    Table.prototype._dealCardsFromDeckToTableauPiles = function () {
        var numberOfCards = this._deckPile.cards.length;
        var numberOfDrawCards = this._settings.numberOfTableauPiles * this._settings.numberOfDrawPiles;
        var counter = 0;
        for (var index = 0; index < numberOfCards - numberOfDrawCards; index++) {
            var from = this._deckPile;
            var to = this._tableauPiles[counter % this.tableauPiles.length];
            this._moveCardBetweenPiles({ from: from, to: to, size: 1 });
            counter = counter + 1;
        }
    };
    Table.prototype._dealCardsFromDeckToDrawPiles = function () {
        // const numberOfDrawCards = this._settings.numberOfTableauPiles * this._settings.numberOfDrawPiles;
        for (var index = 0; index < this._settings.numberOfDrawPiles; index++) {
            var from = this._deckPile;
            var to = this._drawPiles[index];
            this._moveCardBetweenPiles({ from: from, to: to, size: this._settings.numberOfTableauPiles });
        }
    };
    Table.prototype._flipUpTableauFrontCards = function () {
        for (var _i = 0, _a = this._tableauPiles; _i < _a.length; _i++) {
            var tableauPile = _a[_i];
            if (tableauPile.frontCard)
                this._faceUpCard({ card: tableauPile.frontCard });
        }
    };
    Table.prototype._faceUpCard = function (_a) {
        var card = _a.card;
        if (!card.isFaceUp) {
            card.faceUp();
        }
    };
    Table.prototype.startGame = function () {
        this._dealCardsFromDeckToTableauPiles();
        this._dealCardsFromDeckToDrawPiles();
        this._flipUpTableauFrontCards();
    };
    Table.prototype.moveCardBetweenTableauPiles = function (_a) {
        var from = _a.from, to = _a.to, size = _a.size;
        if (!this._tableauPiles.find(function (p) { return p === from; })) {
            throw new Error("The \"from\" pile is not a tableau pile.");
        }
        if (!this._tableauPiles.find(function (p) { return p === to; })) {
            throw new Error("The \"to\" pile is not a tableau pile.");
        }
        var cards = from.getFrontCards({ size: size });
        if (cards.length !== size) {
            throw new Error("The pile \"" + from.id + "\" doesn't have " + size + " cards to draw.");
        }
        if (to.frontCard && !pile_1.Pile.checkIfCardsAreDescending({
            cards: __spreadArrays([to.frontCard], cards),
            inSuit: false,
            faceUp: true
        })) {
            throw new Error("You can't place those cards to the \"to\" pile.");
        }
        this._moveCardBetweenPiles({ from: from, to: to, size: size });
        this._actionHistory.add({ from: from, to: to, size: size, type: undoable_actions_1.MOVE_CARD });
        if (from.frontCard && !from.frontCard.isFaceUp) {
            this._faceUpCard({ card: from.frontCard });
            this._actionHistory.add({ card: from.frontCard, type: undoable_actions_1.FACE_UP_CARD });
        }
        var discardedPile = this._discardPiles.find(function (p) { return p.cards.length === 0; });
        if (!discardedPile) {
            throw new Error("There aren't any empty discarded piles.");
        }
        if (to.checkIfFrontCardsComplete()) {
            for (var i = 0; i < 13; i++) {
                this._moveCardBetweenPiles({
                    from: to,
                    to: discardedPile,
                    size: 1
                });
                this._actionHistory.add({
                    from: to,
                    to: discardedPile,
                    size: 1,
                    type: undoable_actions_1.MOVE_CARD
                });
            }
            if (to.frontCard && !to.frontCard.isFaceUp) {
                this._faceUpCard({ card: to.frontCard });
                this._actionHistory.add({ card: to.frontCard, type: undoable_actions_1.FACE_UP_CARD });
            }
        }
        this._actionHistory.add({ type: undoable_actions_1.PAUSE });
    };
    Object.defineProperty(Table.prototype, "frontDrawPile", {
        get: function () {
            var drawPile;
            for (var index = this._drawPiles.length - 1; index >= 0; index--) {
                if (this._drawPiles[index].cards.length === this._settings.numberOfTableauPiles) {
                    drawPile = this._drawPiles[index];
                    break;
                }
            }
            return drawPile;
        },
        enumerable: false,
        configurable: true
    });
    Table.prototype.dealCardsFromDrawPile = function () {
        var drawPile = this.frontDrawPile;
        if (!drawPile) {
            throw new Error('There are no cards to draw from draw piles.');
        }
        for (var index = 0; index < this._tableauPiles.length; index++) {
            var tableauPile = this._tableauPiles[index];
            this._moveCardBetweenPiles({
                from: drawPile,
                to: tableauPile,
                size: 1
            });
            this._actionHistory.add({
                from: drawPile,
                to: tableauPile,
                size: 1,
                type: undoable_actions_1.MOVE_CARD
            });
        }
        for (var _i = 0, _a = this._tableauPiles; _i < _a.length; _i++) {
            var tableauPile = _a[_i];
            if (tableauPile.frontCard && !tableauPile.frontCard.isFaceUp) {
                this._faceUpCard({ card: tableauPile.frontCard });
                this._actionHistory.add({
                    card: tableauPile.frontCard,
                    type: undoable_actions_1.FACE_UP_CARD
                });
            }
        }
        this._actionHistory.add({ type: undoable_actions_1.PAUSE });
    };
    Table.prototype.undo = function () {
        // console.log(this._actionHistory.actions.map((a, index, _) => {
        //   return (a.type);
        // }));
        loopDeletePauses: for (;;) {
            var action = this._actionHistory.latest;
            if (!action)
                break loopDeletePauses;
            switch (action.type) {
                case undoable_actions_1.PAUSE:
                    this._actionHistory.remove();
                    break;
                default:
                    break loopDeletePauses;
            }
            ;
        }
        ;
        loopExecuteUndoActions: for (;;) {
            var action = this._actionHistory.latest;
            if (!action)
                break loopExecuteUndoActions;
            switch (action.type) {
                case undoable_actions_1.FACE_UP_CARD:
                    action.card.faceDown();
                    this._actionHistory.remove();
                    break;
                case undoable_actions_1.MOVE_CARD:
                    this._moveCardBetweenPiles({
                        from: action.to,
                        to: action.from,
                        size: action.size
                    });
                    this._actionHistory.remove();
                    break;
                case undoable_actions_1.PAUSE:
                    this._actionHistory.remove();
                    break loopExecuteUndoActions;
                default:
                    break;
            }
            ;
        }
    };
    Table.prototype.toString = function () {
        return this._piles.map(function (p) { return p.label + " " + p.toString(); }).join('\n');
    };
    return Table;
}());
exports.Table = Table;


/***/ }),

/***/ "./src/models/undoable-actions.ts":
/*!****************************************!*\
  !*** ./src/models/undoable-actions.ts ***!
  \****************************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__ */
/***/ (function(__unused_webpack_module, exports) {

"use strict";

var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.UndoableActionHistory = exports.PAUSE = exports.MOVE_CARD = exports.FACE_UP_CARD = void 0;
exports.FACE_UP_CARD = 'FACE_UP_CARD';
exports.MOVE_CARD = 'MOVE_CARD';
exports.PAUSE = 'PAUSE';
var UndoableActionHistory = /** @class */ (function () {
    function UndoableActionHistory() {
        this._actions = [];
    }
    UndoableActionHistory.prototype.add = function (action) {
        this._actions = __spreadArrays(this._actions, [action]);
    };
    UndoableActionHistory.prototype.remove = function () {
        this._actions = this._actions.slice(0, -1);
    };
    Object.defineProperty(UndoableActionHistory.prototype, "latest", {
        get: function () {
            return this._actions.length === 0 ? undefined : this._actions[this._actions.length - 1];
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(UndoableActionHistory.prototype, "actions", {
        get: function () {
            return __spreadArrays(this._actions);
        },
        enumerable: false,
        configurable: true
    });
    return UndoableActionHistory;
}());
exports.UndoableActionHistory = UndoableActionHistory;


/***/ }),

/***/ "./src/scenes/main-scene.ts":
/*!**********************************!*\
  !*** ./src/scenes/main-scene.ts ***!
  \**********************************/
/*! unknown exports (runtime-defined) */
/*! runtime requirements: top-level-this-exports, __webpack_exports__, __webpack_require__ */
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:17-21 */
/*! CommonJS bailout: this is used directly at 24:19-23 */
/*! CommonJS bailout: this is used directly at 51:22-26 */
/*! CommonJS bailout: this is used directly at 58:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
var phaser_1 = __importDefault(__webpack_require__(/*! phaser */ "./node_modules/phaser/dist/phaser.js"));
var table_1 = __webpack_require__(/*! ../game-objects-with-events/table */ "./src/game-objects-with-events/table.ts");
// import {PileGameObjectWithEvent as PileGameObject} from '../game-objects-with-events/pile';
var card_1 = __webpack_require__(/*! ../game-objects-with-events/card */ "./src/game-objects-with-events/card.ts");
var emitter_1 = __webpack_require__(/*! ../game-objects-with-events/emitter */ "./src/game-objects-with-events/emitter.ts");
var button_1 = __webpack_require__(/*! ../game-objects/button */ "./src/game-objects/button.ts");
var pile_1 = __webpack_require__(/*! ../models-with-events/pile */ "./src/models-with-events/pile.ts");
var table_2 = __webpack_require__(/*! ../models-with-events/table */ "./src/models-with-events/table.ts");
var create_cards_1 = __webpack_require__(/*! ../models-with-events/create-cards */ "./src/models-with-events/create-cards.ts");
var emitter_2 = __webpack_require__(/*! ../models-with-events/emitter */ "./src/models-with-events/emitter.ts");
var job_queue_1 = __webpack_require__(/*! ../job-queue */ "./src/job-queue/index.ts");
// import {debounce} from 'underscore';
var MainScene = /** @class */ (function (_super) {
    __extends(MainScene, _super);
    // private _dragPileAnimationQueue:PromiseQueue<void> = new PromiseQueue<void>();
    function MainScene() {
        var _this = _super.call(this, 'main') || this;
        _this._cardAnimationQueue = new job_queue_1.JobQueue();
        _this._hintAnimationQueue = new job_queue_1.JobQueue();
        return _this;
    }
    Object.defineProperty(MainScene.prototype, "_table", {
        get: function () {
            if (!this.__table) {
                throw new Error('Table is not ready.');
            }
            return this.__table;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(MainScene.prototype, "_tableGameObject", {
        get: function () {
            if (!this.__tableGameObject) {
                throw new Error('Table Game Object is not ready.');
            }
            return this.__tableGameObject;
        },
        enumerable: false,
        configurable: true
    });
    MainScene.prototype.create = function () {
        return __awaiter(this, void 0, void 0, function () {
            var undoButton, uKey, hintButton;
            var _this = this;
            return __generator(this, function (_a) {
                this.__table = new table_2.TableWithEvent({
                    numberOfTableauPiles: 10,
                    numberOfDrawPiles: 5,
                    cards: create_cards_1.createCardsWithEvents({
                        numberOfDecksUsed: 4,
                        numberOfSuits: 2
                    })
                });
                this.__tableGameObject = new table_1.TableGameObjectWithEvent({
                    scene: this,
                    deckPileId: this._table.deckPile.id,
                    drawPilesIds: this._table.drawPiles.map(function (p) { return p.id; }),
                    tableauPilesIds: this._table.tableauPiles.map(function (p) { return p.id; }),
                    discardPilesIds: this._table.discardPiles.map(function (p) { return p.id; }),
                    dragPileId: "drag-pile",
                    hintPileId: "hint-pile",
                    cardGameObjects: this._table.cards.map(function (card) { return new card_1.CardGameObjectWithEvent({
                        scene: _this,
                        x: 0,
                        y: 0,
                        suit: card.suit,
                        rank: card.rank,
                        name: card.id
                    }); })
                });
                this.children.add(this._tableGameObject);
                undoButton = new button_1.Button({
                    scene: this,
                    x: 100,
                    y: 600,
                    label: 'UNDO'
                });
                undoButton.on('pointerdown', function () {
                    if (undoButton.active)
                        _this._table.undo();
                });
                this.children.add(undoButton);
                this._cardAnimationQueue.onQueueStart(function () {
                    undoButton.setActive(false);
                    undoButton.setAlpha(0.5);
                });
                this._cardAnimationQueue.onQueueEnd(function () {
                    undoButton.setActive(true);
                    undoButton.setAlpha(1);
                });
                uKey = this.input.keyboard.addKey(phaser_1.default.Input.Keyboard.KeyCodes.U);
                uKey.on('down', function (event) {
                    if (undoButton.active)
                        _this._table.undo();
                });
                hintButton = new button_1.Button({
                    scene: this,
                    x: 250,
                    y: 600,
                    label: 'HINT'
                });
                hintButton.on('pointerdown', function () {
                    if (hintButton.active) {
                        _this.showHints();
                    }
                });
                this.children.add(hintButton);
                this._cardAnimationQueue.onQueueStart(function () {
                    hintButton.setActive(false);
                    hintButton.setAlpha(0.5);
                });
                this._cardAnimationQueue.onQueueEnd(function () {
                    hintButton.setActive(true);
                    hintButton.setAlpha(1);
                });
                this._hintAnimationQueue.onQueueStart(function () {
                    hintButton.setActive(false);
                    hintButton.setAlpha(0.5);
                });
                this._hintAnimationQueue.onQueueEnd(function () {
                    hintButton.setActive(true);
                    hintButton.setAlpha(1);
                });
                this._hintAnimationQueue.onQueueCancel(function () {
                    hintButton.setActive(true);
                    hintButton.setAlpha(1);
                });
                emitter_1.emitter.on("CARD_POINTEROVER", this.onCardPointerOver.bind(this));
                emitter_1.emitter.on("CARD_POINTEROUT", this.onCardPointerOut.bind(this));
                emitter_1.emitter.on("CARD_POINTERDOWN", this.onCardPointerDown.bind(this));
                emitter_1.emitter.on("CARD_DRAGSTART", this.onCardDragStart.bind(this));
                emitter_1.emitter.on("CARD_DRAG", this.onCardDrag.bind(this));
                emitter_1.emitter.on("CARD_DROP", this.onCardDrop.bind(this));
                emitter_1.emitter.on("CARD_DRAGEND", this.onCardDragEnd.bind(this));
                emitter_2.emitter.on("MOVE_CARDS_BETWEEN_PILES", this.onMoveCardsBetweenPiles.bind(this));
                emitter_2.emitter.on("FLIP_OVER_CARD", this.onFlipOverCard.bind(this));
                this._table.startGame();
                this.input.on('pointerdown', function (pointer) {
                    if (!_this.input.hitTestPointer(pointer).includes(hintButton)) {
                        _this._hintAnimationQueue.cancel();
                    }
                });
                return [2 /*return*/];
            });
        });
    };
    MainScene.prototype.onCardPointerOver = function (_a) {
        var _this = this;
        var cardGameObject = _a.cardGameObject, pointer = _a.pointer;
        if (!this._cardAnimationQueue.isProcessing) {
            this.addHighlightToCardGameObject({ cardGameObject: cardGameObject });
        }
        else {
            this._cardAnimationQueue.add(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    if (this.input.hitTestPointer(pointer)[0] === cardGameObject) {
                        this.addHighlightToCardGameObject({ cardGameObject: cardGameObject });
                    }
                    return [2 /*return*/];
                });
            }); });
        }
    };
    MainScene.prototype.addHighlightToCardGameObject = function (_a) {
        var cardGameObject = _a.cardGameObject;
        var targetPileGameObject = this._tableGameObject.getPileGameObjectByCardGameObjectName(cardGameObject.name);
        if (cardGameObject.isFaceUp
            && this._tableGameObject.tableauPileGameObjects.includes(targetPileGameObject)) {
            var targetPile = this._table.getPileByCardId(cardGameObject.name);
            var fromPileGameObject = this._tableGameObject.getPileGameObjectByName(targetPile.id);
            var size = fromPileGameObject.cardGameObjects.length - fromPileGameObject.cardGameObjects.indexOf(cardGameObject);
            if (pile_1.PileWithEvent.checkIfCardsAreDescending({ cards: targetPile.cards.slice(-size), faceUp: true, inSuit: true })) {
                cardGameObject.addHighlight();
            }
        }
        else if (this._table.frontDrawPile) {
            var frontDrawPileGameObject = this._tableGameObject.getPileGameObjectByName(this._table.frontDrawPile.id);
            if (targetPileGameObject === frontDrawPileGameObject) {
                cardGameObject.addHighlight();
            }
        }
    };
    MainScene.prototype.onCardPointerOut = function (_a) {
        var cardGameObject = _a.cardGameObject;
        cardGameObject.removeHighlight();
    };
    MainScene.prototype.onCardPointerDown = function (_a) {
        var cardGameObject = _a.cardGameObject;
        if (!cardGameObject.isHighLighted)
            return;
        var targetPileGameObject = this._tableGameObject.getPileGameObjectByCardGameObjectName(cardGameObject.name);
        if (this._table.frontDrawPile) {
            var frontDrawPileGameObject = this._tableGameObject.getPileGameObjectByName(this._table.frontDrawPile.id);
            if (frontDrawPileGameObject === targetPileGameObject) {
                this._table.dealCardsFromDrawPile();
            }
        }
    };
    MainScene.prototype.onCardDragStart = function (_a) {
        var _this = this;
        var cardGameObject = _a.cardGameObject;
        if (!cardGameObject.isHighLighted)
            return;
        var targetPileGameObject = this._tableGameObject.getPileGameObjectByCardGameObjectName(cardGameObject.name);
        var dragPileGameObject = this._tableGameObject.dragPileGameObject;
        if (cardGameObject.isFaceUp
            && this._tableGameObject.tableauPileGameObjects.includes(targetPileGameObject)
            && !dragPileGameObject.active) {
            var targetPile = this._table.getPileByCardId(cardGameObject.name);
            var fromPileGameObject = this._tableGameObject.getPileGameObjectByName(targetPile.id);
            var size = fromPileGameObject.cardGameObjects.length - fromPileGameObject.cardGameObjects.indexOf(cardGameObject);
            if (pile_1.PileWithEvent.checkIfCardsAreDescending({ cards: targetPile.cards.slice(-size), faceUp: true, inSuit: true })) {
                var dragPileGameObject_1 = this._tableGameObject.dragPileGameObject;
                var y = cardGameObject.y;
                dragPileGameObject_1.setActive(true);
                this._tableGameObject.bringToTop(dragPileGameObject_1);
                dragPileGameObject_1.x = fromPileGameObject.x;
                dragPileGameObject_1.y = fromPileGameObject.y + y;
                dragPileGameObject_1.placeCardGameObjects({ cardGameObjects: fromPileGameObject.drawFrontCardGameObjects({ size: size }) });
                this._cardAnimationQueue.add(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, Promise.all([
                                    dragPileGameObject_1.adjustCardGameObjectPositionsWithAnimation(),
                                    dragPileGameObject_1.expandWithAnimation()
                                ])];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
        }
    };
    MainScene.prototype.onCardDrag = function (_a) {
        var pointer = _a.pointer, cardGameObject = _a.cardGameObject;
        if (!cardGameObject.isHighLighted)
            return;
        var targetPileGameObject = this._tableGameObject.getPileGameObjectByCardGameObjectName(cardGameObject.name);
        var dragPileGameObject = this._tableGameObject.dragPileGameObject;
        if (targetPileGameObject === dragPileGameObject && dragPileGameObject.active) {
            var deltaX = pointer.x - pointer.prevPosition.x;
            var deltaY = pointer.y - pointer.prevPosition.y;
            dragPileGameObject.x += deltaX;
            dragPileGameObject.y += deltaY;
        }
    };
    MainScene.prototype.onCardDrop = function (_a) {
        var _this = this;
        var zone = _a.zone, cardGameObject = _a.cardGameObject;
        var targetPileGameObject = this._tableGameObject.getPileGameObjectByCardGameObjectName(cardGameObject.name);
        var dragPileGameObject = this._tableGameObject.dragPileGameObject;
        if (targetPileGameObject === dragPileGameObject && dragPileGameObject.active) {
            var fromPile = this._table.getPileByCardId(cardGameObject.name);
            var fromPileGameObject_1 = this._tableGameObject.getPileGameObjectByName(fromPile.id);
            var toPileGameObject = this._tableGameObject.getPileGameObjectBy(function (p) { return p.zone === zone; });
            var toPile = this._table.getPileById(toPileGameObject.name);
            var size = dragPileGameObject.cardGameObjects.length;
            var cardGameObjects = dragPileGameObject.drawFrontCardGameObjects({ size: size });
            fromPileGameObject_1.placeCardGameObjects({ cardGameObjects: cardGameObjects });
            var _cards = cardGameObjects.map(function (cObj) {
                var card = _this._table.cards.find(function (c) { return cObj.name === c.id; });
                if (!card)
                    throw new Error("Couldn't find corresponding cards.");
                return card;
            });
            if (!toPile.frontCard
                || pile_1.PileWithEvent.checkIfCardsAreDescending({ cards: __spreadArrays([toPile.frontCard], _cards), faceUp: true })) {
                this._table.moveCardBetweenTableauPiles({
                    to: toPile,
                    from: fromPile,
                    size: size
                });
                dragPileGameObject.setActive(false);
            }
            else {
                this._cardAnimationQueue.add(function () { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, fromPileGameObject_1.adjustCardGameObjectPositionsWithAnimation()];
                            case 1:
                                _a.sent();
                                dragPileGameObject.setActive(false);
                                return [2 /*return*/];
                        }
                    });
                }); });
            }
        }
    };
    MainScene.prototype.onCardDragEnd = function (_a) {
        var _this = this;
        var cardGameObject = _a.cardGameObject;
        var targetPileGameObject = this._tableGameObject.getPileGameObjectByCardGameObjectName(cardGameObject.name);
        var dragPileGameObject = this._tableGameObject.dragPileGameObject;
        if (targetPileGameObject === dragPileGameObject && dragPileGameObject.active) {
            var size = dragPileGameObject.cardGameObjects.length;
            var fromPile = this._table.getPileByCardId(cardGameObject.name);
            var fromPileGameObject_2 = this._tableGameObject.getPileGameObjectByName(fromPile.id);
            var cardGameObjects = dragPileGameObject.drawFrontCardGameObjects({ size: size });
            fromPileGameObject_2.placeCardGameObjects({ cardGameObjects: cardGameObjects });
            this._cardAnimationQueue.add(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, fromPileGameObject_2.adjustCardGameObjectPositionsWithAnimation()];
                        case 1:
                            _a.sent();
                            dragPileGameObject.setActive(false);
                            return [2 /*return*/];
                    }
                });
            }); });
        }
    };
    MainScene.prototype.onMoveCardsBetweenPiles = function (_a) {
        var _this = this;
        var from = _a.from, to = _a.to, size = _a.size;
        var fromPileGameObject = this._tableGameObject.getPileGameObjectByName(from.id);
        var toPileGameObject = this._tableGameObject.getPileGameObjectByName(to.id);
        this._cardAnimationQueue.add(function () { return __awaiter(_this, void 0, void 0, function () {
            var cardGameObjects;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cardGameObjects = fromPileGameObject.drawFrontCardGameObjects({ size: size });
                        toPileGameObject.placeCardGameObjects({ cardGameObjects: cardGameObjects });
                        this._tableGameObject.bringToTop(toPileGameObject);
                        return [4 /*yield*/, Promise.all([
                                toPileGameObject.adjustCardGameObjectPositionsWithAnimation(),
                                fromPileGameObject.adjustCardGameObjectPositionsWithAnimation()
                            ])];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); });
        if (this._table.isClear) {
            this._cardAnimationQueue.add(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    alert("You beat the game!!!");
                    return [2 /*return*/];
                });
            }); });
        }
    };
    MainScene.prototype.onFlipOverCard = function (_a) {
        var card = _a.card;
        var cardGarmObject = this._tableGameObject.cardGameObjects.find(function (c) { return c.name === card.id; });
        if (cardGarmObject) {
            this._cardAnimationQueue.add(function () { return cardGarmObject.flipOver(card.isFaceUp); });
        }
        ;
    };
    MainScene.prototype.showHints = function () {
        var _this = this;
        var moves = this._table.getPossibleMovesBetweenTableauPiles();
        var hintPileGameObject = this._tableGameObject.hintPileGameObject;
        var clearHintPileGameObject = function () {
            var cardGameObjects = hintPileGameObject
                .drawFrontCardGameObjects({ size: hintPileGameObject.cardGameObjects.length });
            cardGameObjects.forEach(function (c) { return c.destroy(); });
            // hintPileGameObject.x = -100000;
            // hintPileGameObject.y = -100000;
        };
        var _loop_1 = function (from, to, size) {
            this_1._hintAnimationQueue.add(function (onQueueCancel) { return __awaiter(_this, void 0, void 0, function () {
                var fromPileGameObject, toPileGameObject, frontCardGameObjects;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            fromPileGameObject = this._tableGameObject.getPileGameObjectByName(from.id);
                            toPileGameObject = this._tableGameObject.getPileGameObjectByName(to.id);
                            frontCardGameObjects = fromPileGameObject.getFrontGameObjects({ size: size });
                            hintPileGameObject.x = fromPileGameObject.x;
                            hintPileGameObject.y = fromPileGameObject.y + frontCardGameObjects[0].y;
                            hintPileGameObject.placeCardGameObjects({ cardGameObjects: frontCardGameObjects.map(function (c) {
                                    var cardGameObject = new card_1.CardGameObjectWithEvent({
                                        x: 0,
                                        y: 0,
                                        rank: c.rank,
                                        suit: c.suit,
                                        isFaceUp: c.isFaceUp,
                                        name: '',
                                        scene: _this
                                    });
                                    return cardGameObject;
                                }) });
                            hintPileGameObject.adjustCardGameObjectPositions();
                            hintPileGameObject.setAlpha(0.8);
                            this._tableGameObject.bringToTop(hintPileGameObject);
                            return [4 /*yield*/, new Promise(function (resolve) {
                                    var tween = _this.tweens.add({
                                        targets: hintPileGameObject,
                                        props: {
                                            x: toPileGameObject.x,
                                            y: toPileGameObject.y + toPileGameObject.getNewFrontCardGameObjectPosition().y
                                        },
                                        duration: 800,
                                        completeDelay: 400,
                                        onComplete: function () {
                                            resolve();
                                            clearHintPileGameObject();
                                        }
                                    });
                                    onQueueCancel(function () {
                                        tween.stop();
                                        clearHintPileGameObject();
                                    });
                                })];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); });
        };
        var this_1 = this;
        for (var _i = 0, moves_1 = moves; _i < moves_1.length; _i++) {
            var _a = moves_1[_i], from = _a.from, to = _a.to, size = _a.size;
            _loop_1(from, to, size);
        }
    };
    return MainScene;
}(phaser_1.default.Scene));
exports.default = MainScene;


/***/ }),

/***/ "./node_modules/webpack/hot sync ^\\.\\/log$":
/*!***************************************************************!*\
  !*** ./node_modules/webpack/hot/ sync nonrecursive ^\.\/log$ ***!
  \***************************************************************/
/*! default exports */
/*! exports [not provided] [no usage info] */
/*! runtime requirements: module, __webpack_require__.o, __webpack_require__ */
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var map = {
	"./log": "./node_modules/webpack/hot/log.js"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "./node_modules/webpack/hot sync ^\\.\\/log$";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			loaded: false,
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/node module decorator */
/******/ 	(() => {
/******/ 		__webpack_require__.nmd = (module) => {
/******/ 			module.paths = [];
/******/ 			if (!module.children) module.children = [];
/******/ 			return module;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// Promise = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"app": 0
/******/ 		};
/******/ 		
/******/ 		var deferredModules = [
/******/ 			["./src/index.ts","vendors"],
/******/ 			["./node_modules/webpack-dev-server/client/index.js?http://localhost:8080","vendors"]
/******/ 		];
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		var checkDeferredModules = () => {
/******/ 		
/******/ 		};
/******/ 		function checkDeferredModulesImpl() {
/******/ 			var result;
/******/ 			for(var i = 0; i < deferredModules.length; i++) {
/******/ 				var deferredModule = deferredModules[i];
/******/ 				var fulfilled = true;
/******/ 				for(var j = 1; j < deferredModule.length; j++) {
/******/ 					var depId = deferredModule[j];
/******/ 					if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferredModules.splice(i--, 1);
/******/ 					result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 				}
/******/ 			}
/******/ 			if(deferredModules.length === 0) {
/******/ 				__webpack_require__.x();
/******/ 				__webpack_require__.x = () => {
/******/ 		
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		}
/******/ 		__webpack_require__.x = () => {
/******/ 			// reset startup function so it can be called again when more startup code is added
/******/ 			__webpack_require__.x = () => {
/******/ 		
/******/ 			}
/******/ 			chunkLoadingGlobal = chunkLoadingGlobal.slice();
/******/ 			for(var i = 0; i < chunkLoadingGlobal.length; i++) webpackJsonpCallback(chunkLoadingGlobal[i]);
/******/ 			return (checkDeferredModules = checkDeferredModulesImpl)();
/******/ 		};
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (data) => {
/******/ 			var [chunkIds, moreModules, runtime, executeModules] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0, resolves = [];
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					resolves.push(installedChunks[chunkId][0]);
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			for(moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 				}
/******/ 			}
/******/ 			if(runtime) runtime(__webpack_require__);
/******/ 			parentChunkLoadingFunction(data);
/******/ 			while(resolves.length) {
/******/ 				resolves.shift()();
/******/ 			}
/******/ 		
/******/ 			// add entry modules from loaded chunk to deferred list
/******/ 			if(executeModules) deferredModules.push.apply(deferredModules, executeModules);
/******/ 		
/******/ 			// run deferred modules when all chunks ready
/******/ 			return checkDeferredModules();
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunkspider_solitaire"] = self["webpackChunkspider_solitaire"] || [];
/******/ 		var parentChunkLoadingFunction = chunkLoadingGlobal.push.bind(chunkLoadingGlobal);
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run startup
/******/ 	return __webpack_require__.x();
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL2V2ZW50LWVtaXR0ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9nYW1lLW9iamVjdHMtd2l0aC1ldmVudHMvY2FyZC50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL2dhbWUtb2JqZWN0cy13aXRoLWV2ZW50cy9lbWl0dGVyLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvZ2FtZS1vYmplY3RzLXdpdGgtZXZlbnRzL3RhYmxlLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvZ2FtZS1vYmplY3RzL2J1dHRvbi50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL2dhbWUtb2JqZWN0cy9jYXJkLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvZ2FtZS1vYmplY3RzL3BpbGUudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9nYW1lLW9iamVjdHMvdGFibGUudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9nYW1lLW9iamVjdHMvdHJhbnNmb3JtLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9qb2ItcXVldWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMtd2l0aC1ldmVudHMvY2FyZC50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL21vZGVscy13aXRoLWV2ZW50cy9jcmVhdGUtY2FyZHMudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMtd2l0aC1ldmVudHMvZW1pdHRlci50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL21vZGVscy13aXRoLWV2ZW50cy9waWxlLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvbW9kZWxzLXdpdGgtZXZlbnRzL3RhYmxlLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvbW9kZWxzL2NhcmQudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMvY3JlYXRlLWNhcmRzLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvbW9kZWxzL3BpbGUudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMvdGFibGUudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMvdW5kb2FibGUtYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL3NjZW5lcy9tYWluLXNjZW5lLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvL1VzZXJzL2l0YW5ha2EvRG9jdW1lbnRzL1Byb2plY3RzL3NwaWRlci1zb2xpdGFpcmUvbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90fHN5bmN8bm9ucmVjdXJzaXZlfC9eXFwuXFwvbG9nJC8iLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvRkFBb0M7QUFlcEM7SUFJRTtRQUVFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxxQkFBWSxFQUFFLENBQUM7UUFDbEMsc0NBQXNDO0lBQ3hDLENBQUM7SUFFRCxvQkFBRSxHQUFGLFVBQTJCLFNBQVksRUFBRSxFQUF3QjtRQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELHFCQUFHLEdBQUgsVUFBNEIsU0FBWSxFQUFFLEVBQXdCO1FBQ2hFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsc0JBQUksR0FBSixVQUE2QixTQUFZLEVBQUUsTUFBWTtRQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDO0FBckJZLDBCQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkcEIsa0dBQWtDO0FBQ2xDLDJGQUF3RTtBQUl4RTtJQUE2QywyQ0FBYztJQUV6RCxpQ0FBYSxJQUF1QjtRQUFwQyxZQUVFLGtCQUFNLElBQUksQ0FBQyxTQVFaO1FBUEMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBQyxPQUFlLElBQUssd0JBQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBQyxjQUFjLEVBQUMsS0FBSSxFQUFFLE9BQU8sV0FBQyxDQUFDLEVBQWhFLENBQWdFLENB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bSAnZXZlbnRzJztcblxudHlwZSBfRXZlbnRNYXAgPSBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xudHlwZSBfRXZlbnRLZXk8VCBleHRlbmRzIF9FdmVudE1hcD4gPSBzdHJpbmcgJiBrZXlvZiBUO1xudHlwZSBfRXZlbnRSZWNlaXZlcjxUPiA9IChwYXJhbXM6IFQpID0+IHZvaWQ7XG5cbmludGVyZmFjZSBfRW1pdHRlcjxUIGV4dGVuZHMgX0V2ZW50TWFwPiB7XG4gIG9uPEsgZXh0ZW5kcyBfRXZlbnRLZXk8VD4+XG4gICAgKGV2ZW50TmFtZTogSywgZm46IF9FdmVudFJlY2VpdmVyPFRbS10+KTogdm9pZDtcbiAgb2ZmPEsgZXh0ZW5kcyBfRXZlbnRLZXk8VD4+XG4gICAgKGV2ZW50TmFtZTogSywgZm46IF9FdmVudFJlY2VpdmVyPFRbS10+KTogdm9pZDtcbiAgZW1pdDxLIGV4dGVuZHMgX0V2ZW50S2V5PFQ+PlxuICAgIChldmVudE5hbWU6IEssIHBhcmFtczogVFtLXSk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBFbWl0dGVyPFQgZXh0ZW5kcyBfRXZlbnRNYXA+IGltcGxlbWVudHMgX0VtaXR0ZXI8VD5cbntcbiAgcHJpdmF0ZSBlbWl0dGVyO1xuXG4gIGNvbnN0cnVjdG9yICgpXG4gIHtcbiAgICB0aGlzLmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgLy8gdGhpcy5lbWl0dGVyLnNldE1heExpc3RlbmVycygxMDAwKTtcbiAgfVxuXG4gIG9uPEsgZXh0ZW5kcyBfRXZlbnRLZXk8VD4+KGV2ZW50TmFtZTogSywgZm46IF9FdmVudFJlY2VpdmVyPFRbS10+KSB7XG4gICAgdGhpcy5lbWl0dGVyLm9uKGV2ZW50TmFtZSwgZm4pO1xuICB9XG5cbiAgb2ZmPEsgZXh0ZW5kcyBfRXZlbnRLZXk8VD4+KGV2ZW50TmFtZTogSywgZm46IF9FdmVudFJlY2VpdmVyPFRbS10+KSB7XG4gICAgdGhpcy5lbWl0dGVyLm9mZihldmVudE5hbWUsIGZuKTtcbiAgfVxuXG4gIGVtaXQ8SyBleHRlbmRzIF9FdmVudEtleTxUPj4oZXZlbnROYW1lOiBLLCBwYXJhbXM6IFRbS10pIHtcbiAgICB0aGlzLmVtaXR0ZXIuZW1pdChldmVudE5hbWUsIHBhcmFtcyk7XG4gIH1cbn1cbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcbmltcG9ydCB7ZW1pdHRlcn0gZnJvbSAnLi9lbWl0dGVyJztcbmltcG9ydCB7Q2FyZEdhbWVPYmplY3QsIENhcmRHYW1lT2JqZWN0QXJnc30gZnJvbSBcIi4uL2dhbWUtb2JqZWN0cy9jYXJkXCI7XG5cbnR5cGUgUG9pbnRlciA9IFBoYXNlci5JbnB1dC5Qb2ludGVyO1xuXG5leHBvcnQgY2xhc3MgQ2FyZEdhbWVPYmplY3RXaXRoRXZlbnQgZXh0ZW5kcyBDYXJkR2FtZU9iamVjdFxue1xuICBjb25zdHJ1Y3RvciAoYXJnczpDYXJkR2FtZU9iamVjdEFyZ3MpXG4gIHtcbiAgICBzdXBlcihhcmdzKTtcbiAgICB0aGlzLm9uKCdwb2ludGVyZG93bicsIChwb2ludGVyOlBvaW50ZXIpID0+IGVtaXR0ZXIuZW1pdChcIkNBUkRfUE9JTlRFUkRPV05cIiwge2NhcmRHYW1lT2JqZWN0OnRoaXMsIHBvaW50ZXJ9KSk7XG4gICAgdGhpcy5vbigncG9pbnRlcm92ZXInLCAocG9pbnRlcjpQb2ludGVyKSA9PiBlbWl0dGVyLmVtaXQoXCJDQVJEX1BPSU5URVJPVkVSXCIsIHtjYXJkR2FtZU9iamVjdDp0aGlzLCBwb2ludGVyfSkpO1xuICAgIHRoaXMub24oJ3BvaW50ZXJvdXQnLCAocG9pbnRlcjpQb2ludGVyKSA9PiBlbWl0dGVyLmVtaXQoXCJDQVJEX1BPSU5URVJPVVRcIiwge2NhcmRHYW1lT2JqZWN0OnRoaXMsIHBvaW50ZXJ9KSk7XG4gICAgdGhpcy5vbignZHJhZ3N0YXJ0JywgKHBvaW50ZXI6UG9pbnRlcikgPT4gZW1pdHRlci5lbWl0KFwiQ0FSRF9EUkFHU1RBUlRcIiwge2NhcmRHYW1lT2JqZWN0OnRoaXMsIHBvaW50ZXJ9KSk7XG4gICAgdGhpcy5vbignZHJhZycsIChwb2ludGVyOlBvaW50ZXIpID0+IGVtaXR0ZXIuZW1pdChcIkNBUkRfRFJBR1wiLCB7Y2FyZEdhbWVPYmplY3Q6dGhpcywgcG9pbnRlcn0pKTtcbiAgICB0aGlzLm9uKCdkcm9wJywgKHBvaW50ZXI6UG9pbnRlciwgem9uZTpQaGFzZXIuR2FtZU9iamVjdHMuWm9uZSkgPT4gZW1pdHRlci5lbWl0KFwiQ0FSRF9EUk9QXCIsIHtjYXJkR2FtZU9iamVjdDp0aGlzLCBwb2ludGVyLCB6b25lfSkpO1xuICAgIHRoaXMub24oJ2RyYWdlbmQnLCAocG9pbnRlcjpQb2ludGVyKSA9PiBlbWl0dGVyLmVtaXQoXCJDQVJEX0RSQUdFTkRcIiwge2NhcmRHYW1lT2JqZWN0OnRoaXMsIHBvaW50ZXJ9KSk7XG4gIH1cbn1cbiIsImltcG9ydCB7RW1pdHRlcn0gZnJvbSAnLi4vZXZlbnQtZW1pdHRlcic7XG5pbXBvcnQge1ZpZXdFdmVudHN9IGZyb20gJy4vZXZlbnRzJztcblxuZXhwb3J0IGNvbnN0IGVtaXR0ZXIgPSBuZXcgRW1pdHRlcjxWaWV3RXZlbnRzPigpO1xuIiwiLy8gaW1wb3J0IHtlbWl0dGVyfSBmcm9tICcuL2VtaXR0ZXInO1xuaW1wb3J0IHtUYWJsZUdhbWVPYmplY3R9IGZyb20gXCIuLi9nYW1lLW9iamVjdHMvdGFibGVcIjtcblxuZXhwb3J0IGNsYXNzIFRhYmxlR2FtZU9iamVjdFdpdGhFdmVudCBleHRlbmRzIFRhYmxlR2FtZU9iamVjdFxue1xuICAvLyBjb25zdHJ1Y3RvciAoYXJnczogVGFibGVHYW1lT2JqZWN0U2V0dGluZ3MpXG4gIC8vIHtcbiAgLy8gICBzdXBlcihhcmdzKTtcbiAgLy9cbiAgLy8gICB0aGlzLmRyYXdQaWxlR2FtZU9iamVjdHMuZm9yRWFjaChwaWxlR2FtZU9iamVjdCA9PiB7XG4gIC8vICAgICBwaWxlR2FtZU9iamVjdC5vbihcInBvaW50ZXJkb3duXCIsICgpID0+IHtcbiAgLy8gICAgICAgZW1pdHRlci5lbWl0KFwiRFJBV1BJTEVfUE9JTlRFUkRPV05cIiwge3BpbGVHYW1lT2JqZWN0fSk7XG4gIC8vICAgICB9KTtcbiAgLy8gICB9KTtcbiAgLy8gfVxufVxuIiwiaW1wb3J0IFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XG5cbmNvbnN0IHtcbiAgVGV4dCxcbiAgQ29udGFpbmVyXG59ID0gUGhhc2VyLkdhbWVPYmplY3RzO1xuXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29udGFpbmVyXG57XG4gIGNvbnN0cnVjdG9yICh7XG4gICAgc2NlbmUsXG4gICAgeCxcbiAgICB5LFxuICAgIGxhYmVsXG4gIH06e1xuICAgIHNjZW5lOlBoYXNlci5TY2VuZSxcbiAgICB4Om51bWJlcixcbiAgICB5Om51bWJlcixcbiAgICBsYWJlbDpzdHJpbmdcbiAgfSlcbiAge1xuICAgIHN1cGVyKHNjZW5lLCB4LCB5KTtcbiAgICB0aGlzLnJlbmRlcihsYWJlbCk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlciAobGFiZWw6c3RyaW5nKVxuICB7XG4gICAgY29uc3Qgc3VpdFRleHQgPSBuZXcgVGV4dCh0aGlzLnNjZW5lLCAwLCAwLCBsYWJlbCwgIHtcbiAgICAgIGZvbnRTaXplOiBcIjM1cHhcIixcbiAgICAgIGNvbG9yOiAnIzAwMDAwMCcsXG4gICAgICBmb250RmFtaWx5OiAnR2VvcmdpYSwgXCJHb3VkeSBCb29rbGV0dGVyIDE5MTFcIiwgVGltZXMsIHNlcmlmJ1xuICAgIH0pO1xuICAgIHN1aXRUZXh0LnggLT0gc3VpdFRleHQud2lkdGggLyAyO1xuICAgIHN1aXRUZXh0LnkgLT0gc3VpdFRleHQuaGVpZ2h0IC8gMjtcbiAgICB0aGlzLmFkZChzdWl0VGV4dCk7XG4gICAgdGhpcy5zZXRTaXplKHN1aXRUZXh0LndpZHRoLCBzdWl0VGV4dC5oZWlnaHQpO1xuICAgIHRoaXMuc2V0SW50ZXJhY3RpdmUoKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gXCJwaGFzZXJcIjtcbmltcG9ydCB7U3VpdH0gZnJvbSBcIi4uL21vZGVscy9jYXJkXCI7XG5cbmNvbnN0IHtcbiAgVGV4dCxcbiAgUmVjdGFuZ2xlLFxuICBDb250YWluZXJcbn0gPSBQaGFzZXIuR2FtZU9iamVjdHM7XG5cbmNvbnN0IGdldFN1aXRUZXh0ID0gKHN1aXQ6U3VpdCkgPT5cbntcbiAgc3dpdGNoKHN1aXQpIHtcbiAgICBjYXNlIFN1aXQuU3BhZGU6XG4gICAgcmV0dXJuICfimaAnO1xuICAgIGNhc2UgU3VpdC5DbHViOlxuICAgIHJldHVybiAn4pmjJztcbiAgICBjYXNlIFN1aXQuRGlhbW9uZDpcbiAgICByZXR1cm4gJ+KZpic7XG4gICAgY2FzZSBTdWl0LkhlYXJ0OlxuICAgIHJldHVybiAn4pmlJztcbiAgfVxufVxuXG5jb25zdCBnZXRTdWl0Q29sb3IgPSAoc3VpdDpTdWl0KSA9Plxue1xuICBzd2l0Y2goc3VpdCkge1xuICAgIGNhc2UgU3VpdC5TcGFkZTpcbiAgICBjYXNlIFN1aXQuQ2x1YjpcbiAgICByZXR1cm4gJyMwMDAwMDAnO1xuICAgIGNhc2UgU3VpdC5EaWFtb25kOlxuICAgIGNhc2UgU3VpdC5IZWFydDpcbiAgICByZXR1cm4gJyNmZjAwMDAnO1xuICB9XG59XG5cbmNvbnN0IGdldFJhbmtUZXh0ID0gKHJhbms6bnVtYmVyKSA9Plxue1xuICBpZiAocmFuayA9PT0gMTEpIHtcbiAgICByZXR1cm4gJ0onO1xuICB9IGVsc2UgaWYgKHJhbmsgPT09IDEyKSB7XG4gICAgcmV0dXJuICdRJztcbiAgfSBlbHNlIGlmIChyYW5rID09PSAxMykge1xuICAgIHJldHVybiAnSyc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJhbmsudG9TdHJpbmcoKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDYXJkR2FtZU9iamVjdEFyZ3MgPSB7XG4gIHNjZW5lOlBoYXNlci5TY2VuZSxcbiAgeDpudW1iZXIsXG4gIHk6bnVtYmVyLFxuICBzdWl0OlN1aXQsXG4gIHJhbms6bnVtYmVyLFxuICBpc0ZhY2VVcD86IGJvb2xlYW4sXG4gIG5hbWU6c3RyaW5nXG59O1xuXG5leHBvcnQgY2xhc3MgQ2FyZEdhbWVPYmplY3QgZXh0ZW5kcyBDb250YWluZXJcbntcbiAgcHJpdmF0ZSBfZnJhbWU6UGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZSB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfYmFjazpQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyIHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIF9yYW5rOm51bWJlcjtcbiAgcHJpdmF0ZSBfc3VpdDpTdWl0O1xuICBwcml2YXRlIF9pc0hpZ2hMaWdodGVkOmJvb2xlYW4gPSBmYWxzZTtcblxuICBzdGF0aWMgV0lEVEg6bnVtYmVyID0gNzA7XG4gIHN0YXRpYyBIRUlHSFQ6bnVtYmVyID0gMTEwO1xuXG4gIGNvbnN0cnVjdG9yICh7XG4gICAgc2NlbmUsXG4gICAgeCxcbiAgICB5LFxuICAgIHN1aXQsXG4gICAgcmFuayxcbiAgICBpc0ZhY2VVcCxcbiAgICBuYW1lXG4gIH06Q2FyZEdhbWVPYmplY3RBcmdzKVxuICB7XG4gICAgc3VwZXIoc2NlbmUsIHgsIHkpO1xuICAgIHRoaXMucmVuZGVyKHN1aXQsIHJhbmspO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fc3VpdCA9IHN1aXQ7XG4gICAgdGhpcy5fcmFuayA9IHJhbms7XG4gICAgdGhpcy5iYWNrLnZpc2libGUgPSAhaXNGYWNlVXA7XG4gIH1cblxuICBnZXQgc3VpdCAoKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuX3N1aXQ7XG4gIH1cblxuICBnZXQgcmFuayAoKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuX3Jhbms7XG4gIH1cblxuICBwcml2YXRlIGdldCBmcmFtZSAoKVxuICB7XG4gICAgaWYgKCF0aGlzLl9mcmFtZSlcbiAgICB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2ZyYW1lO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgYmFjayAoKVxuICB7XG4gICAgaWYgKCF0aGlzLl9iYWNrKVxuICAgIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fYmFjaztcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyIChzdWl0OlN1aXQsIHJhbms6bnVtYmVyKVxuICB7XG4gICAgY29uc3QgeCA9IDA7XG4gICAgY29uc3QgeSA9IDA7XG4gICAgY29uc3QgZnJhbWUgPSBuZXcgUmVjdGFuZ2xlKHRoaXMuc2NlbmUsIHgsIHksIENhcmRHYW1lT2JqZWN0LldJRFRILCBDYXJkR2FtZU9iamVjdC5IRUlHSFQsIDB4ZmZmZmZmKTtcbiAgICBmcmFtZS5zZXRTdHJva2VTdHlsZSgyLCAweDAwMDAwMCk7XG4gICAgdGhpcy5hZGQoZnJhbWUpO1xuICAgIHRoaXMuX2ZyYW1lID0gZnJhbWU7XG5cbiAgICBjb25zdCByYW5rVGV4dCA9IG5ldyBUZXh0KHRoaXMuc2NlbmUsIHggLSAzMywgeSAtIDU3LCAgZ2V0UmFua1RleHQocmFuaykgKyBnZXRTdWl0VGV4dChzdWl0KSwgIHtcbiAgICAgIGZvbnRTaXplOiBcIjI1cHhcIixcbiAgICAgIGNvbG9yOiBnZXRTdWl0Q29sb3Ioc3VpdCksXG4gICAgICBmb250RmFtaWx5OiAnR2VvcmdpYSwgXCJHb3VkeSBCb29rbGV0dGVyIDE5MTFcIiwgVGltZXMsIHNlcmlmJ1xuICAgIH0pO1xuICAgIC8vIHJhbmtUZXh0LnggPSByYW5rVGV4dC54IC0gcmFua1RleHQud2lkdGggLyAyO1xuICAgIHRoaXMuYWRkKHJhbmtUZXh0KTtcbiAgICAvLyB0aGlzLnNldEFscGhhKDAuMylcblxuICAgIC8vIGNvbnN0IHN1aXRUZXh0ID0gbmV3IFRleHQodGhpcy5zY2VuZSwgeCAtIDE0LCB5IC0gNTgsIGdldFN1aXRUZXh0KHN1aXQpLCAge1xuICAgIC8vICAgZm9udFNpemU6IFwiMjVweFwiLFxuICAgIC8vICAgY29sb3I6IGdldFN1aXRDb2xvcihzdWl0KSxcbiAgICAvLyAgIGZvbnRGYW1pbHk6ICdHZW9yZ2lhLCBcIkdvdWR5IEJvb2tsZXR0ZXIgMTkxMVwiLCBUaW1lcywgc2VyaWYnXG4gICAgLy8gfSk7XG4gICAgLy8gc3VpdFRleHQueCA9IHN1aXRUZXh0LnggLSBzdWl0VGV4dC53aWR0aCAvIDI7XG4gICAgLy8gdGhpcy5hZGQoc3VpdFRleHQpO1xuXG4gICAgLy8gY29uc3Qgc3VpdFRleHQgPSBuZXcgVGV4dCh0aGlzLnNjZW5lLCB4LCB5IC0gNDUsIGdldFN1aXRUZXh0KHN1aXQpLCAge1xuICAgIC8vICAgZm9udFNpemU6IFwiNDVweFwiLFxuICAgIC8vICAgY29sb3I6IGdldFN1aXRDb2xvcihzdWl0KSxcbiAgICAvLyAgIGZvbnRGYW1pbHk6ICdHZW9yZ2lhLCBcIkdvdWR5IEJvb2tsZXR0ZXIgMTkxMVwiLCBUaW1lcywgc2VyaWYnXG4gICAgLy8gfSk7XG4gICAgLy8gc3VpdFRleHQueCA9IHN1aXRUZXh0LnggLSBzdWl0VGV4dC53aWR0aCAvIDI7XG4gICAgLy8gdGhpcy5hZGQoc3VpdFRleHQpO1xuICAgIC8vXG4gICAgLy8gY29uc3QgcmFua1RleHQgPSBuZXcgVGV4dCh0aGlzLnNjZW5lLCB4LCB5IC0gMiwgIGdldFJhbmtUZXh0KHJhbmspLCAge1xuICAgIC8vICAgZm9udFNpemU6IFwiMzVweFwiLFxuICAgIC8vICAgY29sb3I6IGdldFN1aXRDb2xvcihzdWl0KSxcbiAgICAvLyAgIGZvbnRGYW1pbHk6ICdHZW9yZ2lhLCBcIkdvdWR5IEJvb2tsZXR0ZXIgMTkxMVwiLCBUaW1lcywgc2VyaWYnXG4gICAgLy8gfSk7XG4gICAgLy8gcmFua1RleHQueCA9IHJhbmtUZXh0LnggLSByYW5rVGV4dC53aWR0aCAvIDI7XG4gICAgLy8gdGhpcy5hZGQocmFua1RleHQpO1xuXG4gICAgdGhpcy5fYmFjayA9IG5ldyBDb250YWluZXIodGhpcy5zY2VuZSwgeCwgeSk7XG5cbiAgICBjb25zdCBiYWNrUGF0dGVybiA9IG5ldyBSZWN0YW5nbGUodGhpcy5zY2VuZSwgeCwgeSwgQ2FyZEdhbWVPYmplY3QuV0lEVEggLSAyMCwgQ2FyZEdhbWVPYmplY3QuSEVJR0hUIC0gMjAsIDB4YWFhYWFhKTtcbiAgICBiYWNrUGF0dGVybi5zZXRTdHJva2VTdHlsZSgzLCAweGFhYWFhYSk7XG4gICAgY29uc3QgYmFja1doaXRlID0gbmV3IFJlY3RhbmdsZSh0aGlzLnNjZW5lLCB4LCB5LCBDYXJkR2FtZU9iamVjdC5XSURUSCAtIDIsIENhcmRHYW1lT2JqZWN0LkhFSUdIVCAtIDIsIDB4ZmZmZmZmKTtcbiAgICB0aGlzLmJhY2suYWRkKGJhY2tXaGl0ZSk7XG4gICAgdGhpcy5iYWNrLmFkZChiYWNrUGF0dGVybik7XG4gICAgdGhpcy5hZGQodGhpcy5iYWNrKTtcblxuICAgIHRoaXMuc2V0U2l6ZShDYXJkR2FtZU9iamVjdC5XSURUSCwgQ2FyZEdhbWVPYmplY3QuSEVJR0hUKTtcbiAgICB0aGlzLnNldEludGVyYWN0aXZlKHtkcmFnZ2FibGU6IHRydWV9KTtcbiAgfVxuXG4gIGZsaXBPdmVyICh1cDpib29sZWFuKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4ge1xuICAgICAgY29uc3QgdGltZWxpbmUgPSB0aGlzLnNjZW5lLnR3ZWVucy5jcmVhdGVUaW1lbGluZSgpO1xuICAgICAgdGltZWxpbmUuYWRkKHtcbiAgICAgICAgdGFyZ2V0czogdGhpcyxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBzY2FsZVg6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIGR1cmF0aW9uOiAzNSxcbiAgICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYmFjay52aXNpYmxlID0gIXVwO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRpbWVsaW5lLmFkZCh7XG4gICAgICAgIHRhcmdldHM6IHRoaXMsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgc2NhbGVYOiAxLFxuICAgICAgICB9LFxuICAgICAgICBkdXJhdGlvbjogMzUsXG4gICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGltZWxpbmUucGxheSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGlzRmFjZVVwICgpXG4gIHtcbiAgICByZXR1cm4gIXRoaXMuYmFjay52aXNpYmxlO1xuICB9XG5cbiAgYWRkSGlnaGxpZ2h0ICgpXG4gIHtcbiAgICB0aGlzLmZyYW1lLnNldFN0cm9rZVN0eWxlKDIsIDB4ZmY1NTg4KTtcbiAgICB0aGlzLl9pc0hpZ2hMaWdodGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHJlbW92ZUhpZ2hsaWdodCAoKVxuICB7XG4gICAgdGhpcy5mcmFtZS5zZXRTdHJva2VTdHlsZSgyLCAweDAwMDAwMCk7XG4gICAgdGhpcy5faXNIaWdoTGlnaHRlZCA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGlzSGlnaExpZ2h0ZWQgKClcbiAge1xuICAgIHJldHVybiB0aGlzLl9pc0hpZ2hMaWdodGVkO1xuICB9XG59XG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gXCJwaGFzZXJcIjtcbmltcG9ydCB7Q2FyZEdhbWVPYmplY3R9IGZyb20gXCIuL2NhcmRcIjtcbmltcG9ydCB7Z2V0V29ybGRQb3NpdGlvbn0gZnJvbSAnLi90cmFuc2Zvcm0nO1xuXG5leHBvcnQgdHlwZSBQaWxlR2FtZU9iamVjdEFyZ3MgPSB7XG4gIHNjZW5lOlBoYXNlci5TY2VuZSxcbiAgeDpudW1iZXIsXG4gIHk6bnVtYmVyLFxuICBuYW1lOnN0cmluZyxcbiAgaXNTcHJlYWQ/OmJvb2xlYW4sXG4gIGlzRHJvcFRhcmdldD86Ym9vbGVhbixcbiAgbGFiZWw/OnN0cmluZ1xuICAvLyBpc0ludGVyYWN0aXZlPzpib29sZWFuXG59XG5cbmludGVyZmFjZSBDYXJkR2FtZU9iamVjdEFkanVzdGVkUG9zaXRpb24ge1xuICB4OiBudW1iZXIsXG4gIHk6IG51bWJlcixcbiAgY2FyZEdhbWVPYmplY3Q6IENhcmRHYW1lT2JqZWN0XG59XG5cbmV4cG9ydCBjbGFzcyBQaWxlR2FtZU9iamVjdCBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXJcbntcbiAgcHJpdmF0ZSBfbGFiZWw6c3RyaW5nO1xuICBwcml2YXRlIF9pc1NwcmVhZDpib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2NhcmRHYW1lT2JqZWN0czpDYXJkR2FtZU9iamVjdFtdID0gW107XG4gIHByaXZhdGUgX3pvbmU6UGhhc2VyLkdhbWVPYmplY3RzLlpvbmUgfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX3pvbmVSZWN0OlBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGUgfCB1bmRlZmluZWQ7XG4gIC8vIHByaXZhdGUgX2lzSW50ZXJhY3RpdmU6Ym9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9mYWNlRG93bkNhcmRHYXA6bnVtYmVyID0gMTU7XG4gIHByaXZhdGUgX2ZhY2VVcENhcmRHYXA6bnVtYmVyID0gMjY7XG4gIHByaXZhdGUgX21heEhlaWdodE9mR2FwczpudW1iZXIgPSAyMDA7XG5cbiAgY29uc3RydWN0b3IgKHtcbiAgICBzY2VuZSxcbiAgICB4LFxuICAgIHksXG4gICAgbmFtZSxcbiAgICBpc1NwcmVhZCxcbiAgICBpc0Ryb3BUYXJnZXQsXG4gICAgbGFiZWxcbiAgICAvLyBpc0ludGVyYWN0aXZlXG4gIH06UGlsZUdhbWVPYmplY3RBcmdzKVxuICB7XG4gICAgc3VwZXIoc2NlbmUsIHgsIHkpO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fbGFiZWwgPSBsYWJlbCB8fCAnJztcblxuICAgIGlmIChpc1NwcmVhZCkge1xuICAgICAgdGhpcy5faXNTcHJlYWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChpc0Ryb3BUYXJnZXQpIHtcbiAgICAgIHRoaXMuX3pvbmUgPSB0aGlzLnJlbmRlclpvbmUoKTtcbiAgICAgIHRoaXMuX3pvbmVSZWN0ID0gdGhpcy5yZW5kZXJab25lUmVjdCgpO1xuICAgIH1cblxuICAgIC8vIGlmIChpc0ludGVyYWN0aXZlKVxuICAgIC8vIHtcbiAgICAvLyAgIHRoaXMuc2V0U2l6ZShDYXJkR2FtZU9iamVjdC5XSURUSCwgQ2FyZEdhbWVPYmplY3QuSEVJR0hUKTtcbiAgICAvLyAgIHRoaXMuc2V0SW50ZXJhY3RpdmUoKTtcbiAgICAvLyAgIHRoaXMuX2lzSW50ZXJhY3RpdmUgPSB0cnVlO1xuICAgIC8vIH1cbiAgfVxuXG4gIGdldCBsYWJlbCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJab25lICgpXG4gIHtcbiAgICBjb25zdCB6b25lID0gbmV3IFBoYXNlci5HYW1lT2JqZWN0cy5ab25lKHRoaXMuc2NlbmUsIDAsIDAsIDEsIDEpO1xuICAgIHRoaXMuYWRkKHpvbmUpO1xuICAgIHJldHVybiB6b25lO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJab25lUmVjdCAoKVxuICB7XG4gICAgY29uc3QgcmVjdCA9IG5ldyBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlKHRoaXMuc2NlbmUsIDAsIDAsIDEsIDEsIDB4Y2NjY2NjKTtcbiAgICB0aGlzLmFkZChyZWN0KTtcbiAgICByZXR1cm4gcmVjdDtcbiAgfVxuXG4gIHByaXZhdGUgcmVzaXplWm9uZSAoKVxuICB7XG4gICAgY29uc3Qgd2lkdGggPSBDYXJkR2FtZU9iamVjdC5XSURUSDtcbiAgICBjb25zdCBmcm9udENhcmRHYW1lT2JqZWN0ID0gdGhpcy5fY2FyZEdhbWVPYmplY3RzW3RoaXMuX2NhcmRHYW1lT2JqZWN0cy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBoZWlnaHQgPSBDYXJkR2FtZU9iamVjdC5IRUlHSFQgKyAoZnJvbnRDYXJkR2FtZU9iamVjdCA/IGZyb250Q2FyZEdhbWVPYmplY3QueSA6IDApO1xuICAgIGNvbnN0IHggPSAwO1xuICAgIGNvbnN0IHkgPSAoaGVpZ2h0IC8gMikgLSAoQ2FyZEdhbWVPYmplY3QuSEVJR0hUIC8gMik7XG5cbiAgICBpZiAodGhpcy5fem9uZSlcbiAgICB7XG4gICAgICB0aGlzLl96b25lLnggPSB4O1xuICAgICAgdGhpcy5fem9uZS55ID0geTtcbiAgICAgIHRoaXMuX3pvbmUud2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMuX3pvbmUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgdGhpcy5fem9uZS5zZXRSZWN0YW5nbGVEcm9wWm9uZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgIHRoaXMuX3pvbmUuaW5wdXQuaGl0QXJlYS5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgdGhpcy5fem9uZS5zZXRPcmlnaW4odGhpcy5fem9uZS5vcmlnaW5YLCB0aGlzLl96b25lLm9yaWdpblkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl96b25lUmVjdCkge1xuICAgICAgdGhpcy5fem9uZVJlY3QueCA9IHg7XG4gICAgICB0aGlzLl96b25lUmVjdC55ID0geTtcbiAgICAgIHRoaXMuX3pvbmVSZWN0LndpZHRoID0gd2lkdGg7XG4gICAgICB0aGlzLl96b25lUmVjdC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICB0aGlzLl96b25lUmVjdC5zZXRPcmlnaW4odGhpcy5fem9uZVJlY3Qub3JpZ2luWCwgdGhpcy5fem9uZVJlY3Qub3JpZ2luWSk7XG4gICAgfVxuXG4gICAgLy8gaWYgKHRoaXMuX2lzSW50ZXJhY3RpdmUpXG4gICAgLy8ge1xuICAgIC8vICAgdGhpcy5pbnB1dC5oaXRBcmVhLnNldFNpemUod2lkdGgsIGhlaWdodClcbiAgICAvLyB9XG4gIH1cblxuICBnZXQgem9uZSAoKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuX3pvbmU7XG4gIH1cblxuICBnZXROZXdGcm9udENhcmRHYW1lT2JqZWN0UG9zaXRpb24gKClcbiAge1xuICAgIHJldHVybiB7XG4gICAgICB4OiAwLFxuICAgICAgeTogIXRoaXMuX2lzU3ByZWFkID8gMCA6IHRoaXMuX2NhcmRHYW1lT2JqZWN0cy5yZWR1Y2UoKHByZXYsIGNhcmRHYW1lT2JqZWN0KSA9PiB7XG4gICAgICAgIHJldHVybiBwcmV2ICsgKGNhcmRHYW1lT2JqZWN0LmlzRmFjZVVwID8gdGhpcy5fZmFjZVVwQ2FyZEdhcCA6IHRoaXMuX2ZhY2VEb3duQ2FyZEdhcCk7XG4gICAgICB9LCAwKVxuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2dldEFkanVzdGVkQ2FyZEdhbWVPYmplY3RQb3NpdGlvbnMgKClcbiAge1xuXG4gICAgaWYgKCF0aGlzLl9pc1NwcmVhZCB8fCB0aGlzLl9jYXJkR2FtZU9iamVjdHMubGVuZ3RoIDw9IDEpXG4gICAge1xuICAgICAgcmV0dXJuIHRoaXMuX2NhcmRHYW1lT2JqZWN0cy5tYXAoKGNhcmRHYW1lT2JqZWN0LCBpKSA9PiAoe1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICBkZXB0aDogaSxcbiAgICAgICAgY2FyZEdhbWVPYmplY3RcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBjb25zdCBudW1iZXJPZkdhcHMgPSB0aGlzLl9jYXJkR2FtZU9iamVjdHMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBudW1iZXJPZkZhY2VVcENhcmRHYXBzID0gdGhpcy5fY2FyZEdhbWVPYmplY3RzLnNsaWNlKDAsIC0xKS5yZWR1Y2UoKHByZSwgY3VyKSA9PiBwcmUgKyAoY3VyLmlzRmFjZVVwID8gMSA6IDApLCAwKTtcbiAgICBjb25zdCBudW1iZXJPZkZhY2VEb3duQ2FyZEdhcHMgPSBudW1iZXJPZkdhcHMgLSBudW1iZXJPZkZhY2VVcENhcmRHYXBzO1xuICAgIGNvbnN0IGhlaWhndE9mR2FwcyA9IG51bWJlck9mRmFjZVVwQ2FyZEdhcHMgKiB0aGlzLl9mYWNlVXBDYXJkR2FwICsgbnVtYmVyT2ZGYWNlRG93bkNhcmRHYXBzICogdGhpcy5fZmFjZURvd25DYXJkR2FwO1xuXG4gICAgbGV0IGdhcE9mRmFjZVVwQ2FyZCA9IHRoaXMuX2ZhY2VVcENhcmRHYXA7XG4gICAgbGV0IGdhcE9mRmFjZURvd25DYXJkID0gdGhpcy5fZmFjZURvd25DYXJkR2FwO1xuXG4gICAgaWYgKGhlaWhndE9mR2FwcyA+IHRoaXMuX21heEhlaWdodE9mR2Fwcykge1xuICAgICAgZ2FwT2ZGYWNlVXBDYXJkID0gdGhpcy5fbWF4SGVpZ2h0T2ZHYXBzIC8gKG51bWJlck9mRmFjZVVwQ2FyZEdhcHMgKyBudW1iZXJPZkZhY2VEb3duQ2FyZEdhcHMgKiB0aGlzLl9mYWNlRG93bkNhcmRHYXAgLyB0aGlzLl9mYWNlVXBDYXJkR2FwKTtcbiAgICAgIGdhcE9mRmFjZURvd25DYXJkID0gdGhpcy5fbWF4SGVpZ2h0T2ZHYXBzIC8gKG51bWJlck9mRmFjZURvd25DYXJkR2FwcyArIG51bWJlck9mRmFjZVVwQ2FyZEdhcHMgKiB0aGlzLl9mYWNlVXBDYXJkR2FwIC8gdGhpcy5fZmFjZURvd25DYXJkR2FwKTtcbiAgICB9XG5cbiAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICBsZXQgcG9zaXRpb25zOkNhcmRHYW1lT2JqZWN0QWRqdXN0ZWRQb3NpdGlvbltdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jYXJkR2FtZU9iamVjdHMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgY29uc3QgY2FyZEdhbWVPYmplY3QgPSB0aGlzLl9jYXJkR2FtZU9iamVjdHNbaV07XG4gICAgICBwb3NpdGlvbnMgPSBbLi4ucG9zaXRpb25zLCB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IG9mZnNldCxcbiAgICAgICAgY2FyZEdhbWVPYmplY3RcbiAgICAgIH1dO1xuICAgICAgb2Zmc2V0ID0gb2Zmc2V0ICsgKGNhcmRHYW1lT2JqZWN0LmlzRmFjZVVwID8gZ2FwT2ZGYWNlVXBDYXJkIDogZ2FwT2ZGYWNlRG93bkNhcmQpO1xuICAgIH1cblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH1cblxuICBhc3luYyBhZGp1c3RDYXJkR2FtZU9iamVjdFBvc2l0aW9uc1dpdGhBbmltYXRpb24gKClcbiAge1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IHRoaXMuX2dldEFkanVzdGVkQ2FyZEdhbWVPYmplY3RQb3NpdGlvbnMoKTtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChwb3NpdGlvbnNcbiAgICAgIC5maWx0ZXIocG9zaXRpb24gPT4gKHBvc2l0aW9uLnggIT09IHBvc2l0aW9uLmNhcmRHYW1lT2JqZWN0LnggfHwgcG9zaXRpb24ueSAhPT0gcG9zaXRpb24uY2FyZEdhbWVPYmplY3QueSkpXG4gICAgICAubWFwKHBvc2l0aW9uID0+IG5ldyBQcm9taXNlKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICAgICAgdGFyZ2V0czogcG9zaXRpb24uY2FyZEdhbWVPYmplY3QsXG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHg6IHBvc2l0aW9uLngsXG4gICAgICAgICAgICB5OiBwb3NpdGlvbi55XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkdXJhdGlvbjogNzAsXG4gICAgICAgICAgb25Db21wbGV0ZTogKCkgPT4gcmVzKClcbiAgICAgICAgfSk7XG4gICAgfSkpKVxuICAgIC50aGVuKCgpID0+IHRoaXMucmVzaXplWm9uZSgpKVxuICB9XG5cbiAgYWRqdXN0Q2FyZEdhbWVPYmplY3RQb3NpdGlvbnMgKClcbiAge1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IHRoaXMuX2dldEFkanVzdGVkQ2FyZEdhbWVPYmplY3RQb3NpdGlvbnMoKTtcbiAgICBmb3IgKGxldCBwb3NpdGlvbiBvZiBwb3NpdGlvbnMpXG4gICAge1xuICAgICAgcG9zaXRpb24uY2FyZEdhbWVPYmplY3QueCA9IHBvc2l0aW9uLng7XG4gICAgICBwb3NpdGlvbi5jYXJkR2FtZU9iamVjdC55ID0gcG9zaXRpb24ueTtcbiAgICB9XG4gICAgdGhpcy5yZXNpemVab25lKCk7XG4gIH1cblxuICBhc3luYyBleHBhbmRXaXRoQW5pbWF0aW9uICgpXG4gIHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuc2NhbGVYID0gMTtcbiAgICAgIHRoaXMuc2NhbGVZID0gMTtcbiAgICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICAgIHRhcmdldHM6IHRoaXMsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgc2NhbGVYOiAxLjEsXG4gICAgICAgICAgc2NhbGVZOiAxLjFcbiAgICAgICAgfSxcbiAgICAgICAgZHVyYXRpb246IDQwLFxuICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiByZXNvbHZlKClcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcGxhY2VDYXJkR2FtZU9iamVjdHMgKHtjYXJkR2FtZU9iamVjdHN9OiB7Y2FyZEdhbWVPYmplY3RzOkNhcmRHYW1lT2JqZWN0W119KVxuICB7XG4gICAgY29uc3Qgd29ybGRQb3NpdGlvbiA9IGdldFdvcmxkUG9zaXRpb24odGhpcyk7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2FyZEdhbWVPYmplY3RzLmxlbmd0aDsgaW5kZXgrKylcbiAgICB7XG4gICAgICBjb25zdCBjYXJkR2FtZU9iamVjdCA9IGNhcmRHYW1lT2JqZWN0c1tpbmRleF07XG4gICAgICBjYXJkR2FtZU9iamVjdC54ID0gY2FyZEdhbWVPYmplY3QueCAtIHdvcmxkUG9zaXRpb24ueDtcbiAgICAgIGNhcmRHYW1lT2JqZWN0LnkgPSBjYXJkR2FtZU9iamVjdC55IC0gd29ybGRQb3NpdGlvbi55O1xuICAgICAgdGhpcy5hZGQoY2FyZEdhbWVPYmplY3QpO1xuICAgIH1cblxuICAgIHRoaXMuX2NhcmRHYW1lT2JqZWN0cyA9IFsuLi50aGlzLl9jYXJkR2FtZU9iamVjdHMsIC4uLmNhcmRHYW1lT2JqZWN0c107XG4gIH1cblxuICBnZXRGcm9udEdhbWVPYmplY3RzICh7c2l6ZX06e3NpemU6bnVtYmVyfSlcbiAge1xuICAgIHJldHVybiB0aGlzLl9jYXJkR2FtZU9iamVjdHMuc2xpY2UoLXNpemUpO1xuICB9XG5cbiAgcmVtb3ZlRnJvbnRHYW1lT2JqZWN0cyAoe3NpemV9OntzaXplOm51bWJlcn0pXG4gIHtcbiAgICBjb25zdCBjYXJkR2FtZU9iamVjdHMgPSB0aGlzLmdldEZyb250R2FtZU9iamVjdHMoe3NpemV9KTtcbiAgICBjb25zdCB3b3JsZFBvc2l0aW9uID0gZ2V0V29ybGRQb3NpdGlvbih0aGlzKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2FyZEdhbWVPYmplY3RzLmxlbmd0aDsgaW5kZXgrKylcbiAgICB7XG4gICAgICBjb25zdCBjYXJkR2FtZU9iamVjdCA9IGNhcmRHYW1lT2JqZWN0c1tpbmRleF07XG4gICAgICBjYXJkR2FtZU9iamVjdC54ID0gY2FyZEdhbWVPYmplY3QueCArIHdvcmxkUG9zaXRpb24ueDtcbiAgICAgIGNhcmRHYW1lT2JqZWN0LnkgPSBjYXJkR2FtZU9iamVjdC55ICsgd29ybGRQb3NpdGlvbi55O1xuICAgICAgdGhpcy5yZW1vdmUoY2FyZEdhbWVPYmplY3QpO1xuICAgIH1cbiAgICB0aGlzLl9jYXJkR2FtZU9iamVjdHMgPSB0aGlzLl9jYXJkR2FtZU9iamVjdHMuc2xpY2UoMCwgdGhpcy5fY2FyZEdhbWVPYmplY3RzLmxlbmd0aCAtIHNpemUpO1xuICAgIHRoaXMucmVzaXplWm9uZSgpO1xuICB9XG5cbiAgZHJhd0Zyb250Q2FyZEdhbWVPYmplY3RzICh7c2l6ZX06e3NpemU6bnVtYmVyfSlcbiAge1xuICAgIGNvbnN0IGNhcmRHYW1lT2JqZWN0cyA9IHRoaXMuZ2V0RnJvbnRHYW1lT2JqZWN0cyh7c2l6ZX0pO1xuICAgIHRoaXMucmVtb3ZlRnJvbnRHYW1lT2JqZWN0cyh7c2l6ZX0pO1xuICAgIHJldHVybiBjYXJkR2FtZU9iamVjdHM7XG4gIH1cblxuICBnZXQgY2FyZEdhbWVPYmplY3RzICgpXG4gIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX2NhcmRHYW1lT2JqZWN0c107XG4gIH1cbn1cbiIsImltcG9ydCBQaGFzZXIgZnJvbSBcInBoYXNlclwiO1xuaW1wb3J0IHtDYXJkR2FtZU9iamVjdH0gZnJvbSAnLi9jYXJkJztcbmltcG9ydCB7UGlsZUdhbWVPYmplY3R9IGZyb20gJy4vcGlsZSc7XG5cbmV4cG9ydCB0eXBlIFRhYmxlR2FtZU9iamVjdFNldHRpbmdzID0ge1xuICBzY2VuZTpQaGFzZXIuU2NlbmUsXG4gIGRlY2tQaWxlSWQ6c3RyaW5nLFxuICBkcmF3UGlsZXNJZHM6c3RyaW5nW10sXG4gIHRhYmxlYXVQaWxlc0lkczpzdHJpbmdbXSxcbiAgZGlzY2FyZFBpbGVzSWRzOnN0cmluZ1tdLFxuICBkcmFnUGlsZUlkOnN0cmluZyxcbiAgaGludFBpbGVJZDpzdHJpbmcsXG4gIGNhcmRHYW1lT2JqZWN0czogQ2FyZEdhbWVPYmplY3RbXVxufTtcblxuZXhwb3J0IGNsYXNzIFRhYmxlR2FtZU9iamVjdCBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXJcbntcbiAgcHJpdmF0ZSBfY2FyZEdhbWVPYmplY3RzOkNhcmRHYW1lT2JqZWN0W10gPSBbXTtcbiAgcHJpdmF0ZSBfcGlsZUdhbWVPYmplY3RzOlBpbGVHYW1lT2JqZWN0W10gPSBbXTtcbiAgcHJpdmF0ZSBfZGVja1BpbGVHYW1lT2JqZWN0OlBpbGVHYW1lT2JqZWN0O1xuICBwcml2YXRlIF9kcmF3UGlsZUdhbWVPYmplY3RzOlBpbGVHYW1lT2JqZWN0W10gPSBbXTtcbiAgcHJpdmF0ZSBfdGFibGVhdVBpbGVHYW1lT2JqZWN0czpQaWxlR2FtZU9iamVjdFtdID0gW107XG4gIHByaXZhdGUgX2Rpc2NhcmRQaWxlR2FtZU9iamVjdHM6UGlsZUdhbWVPYmplY3RbXSA9IFtdO1xuICBwcml2YXRlIF9kcmFnUGlsZUdhbWVPYmplY3Q6UGlsZUdhbWVPYmplY3Q7XG4gIHByaXZhdGUgX2hpbnRQaWxlR2FtZU9iamVjdDpQaWxlR2FtZU9iamVjdDtcblxuICBjb25zdHJ1Y3RvciAoe1xuICAgIHNjZW5lLFxuICAgIGRlY2tQaWxlSWQsXG4gICAgZHJhd1BpbGVzSWRzLFxuICAgIHRhYmxlYXVQaWxlc0lkcyxcbiAgICBkaXNjYXJkUGlsZXNJZHMsXG4gICAgZHJhZ1BpbGVJZCxcbiAgICBoaW50UGlsZUlkLFxuICAgIGNhcmRHYW1lT2JqZWN0c1xuICB9OlRhYmxlR2FtZU9iamVjdFNldHRpbmdzKVxuICB7XG4gICAgc3VwZXIoc2NlbmUsIDAsIDApO1xuXG4gICAgdGhpcy5fY2FyZEdhbWVPYmplY3RzID0gY2FyZEdhbWVPYmplY3RzO1xuXG4gICAgY29uc3QgX2RlY2tQaWxlID0gbmV3IFBpbGVHYW1lT2JqZWN0KHtcbiAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgICAgeDo1MDAsXG4gICAgICB5OjUwMCxcbiAgICAgIG5hbWU6IGRlY2tQaWxlSWQsXG4gICAgICBsYWJlbDogJ2RlY2snXG4gICAgfSk7XG4gICAgdGhpcy5fcGlsZUdhbWVPYmplY3RzID0gWy4uLnRoaXMuX3BpbGVHYW1lT2JqZWN0cywgX2RlY2tQaWxlXTtcbiAgICB0aGlzLl9kZWNrUGlsZUdhbWVPYmplY3QgPSBfZGVja1BpbGU7XG4gICAgdGhpcy5fZGVja1BpbGVHYW1lT2JqZWN0LnBsYWNlQ2FyZEdhbWVPYmplY3RzKHtjYXJkR2FtZU9iamVjdHN9KTtcbiAgICB0aGlzLl9kZWNrUGlsZUdhbWVPYmplY3QuYWRqdXN0Q2FyZEdhbWVPYmplY3RQb3NpdGlvbnMoKTtcbiAgICB0aGlzLmFkZChfZGVja1BpbGUpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRyYXdQaWxlc0lkcy5sZW5ndGg7IGluZGV4KyspXG4gICAge1xuICAgICAgY29uc3QgZHJhd1BpbGUgPSBuZXcgUGlsZUdhbWVPYmplY3Qoe1xuICAgICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICAgICAgeDo3MCArIGluZGV4ICogMjAsXG4gICAgICAgIHk6MTAwLFxuICAgICAgICBuYW1lOiBkcmF3UGlsZXNJZHNbaW5kZXhdLFxuICAgICAgICBsYWJlbDogJ2RyYXcnICsgaW5kZXhcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fcGlsZUdhbWVPYmplY3RzID0gWy4uLnRoaXMuX3BpbGVHYW1lT2JqZWN0cywgZHJhd1BpbGVdO1xuICAgICAgdGhpcy5fZHJhd1BpbGVHYW1lT2JqZWN0cyA9IFsuLi50aGlzLl9kcmF3UGlsZUdhbWVPYmplY3RzLCBkcmF3UGlsZV07XG4gICAgICB0aGlzLmFkZChkcmF3UGlsZSk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRhYmxlYXVQaWxlc0lkcy5sZW5ndGg7IGluZGV4KyspXG4gICAge1xuICAgICAgY29uc3QgdGFibGVhdVBpbGUgPSBuZXcgUGlsZUdhbWVPYmplY3Qoe1xuICAgICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICAgICAgeDo3MCArIGluZGV4ICogOTAsXG4gICAgICAgIHk6MjUwLFxuICAgICAgICBuYW1lOiB0YWJsZWF1UGlsZXNJZHNbaW5kZXhdLFxuICAgICAgICBpc1NwcmVhZDogdHJ1ZSxcbiAgICAgICAgaXNEcm9wVGFyZ2V0OiB0cnVlLFxuICAgICAgICBsYWJlbDogJ3RhYmxlYXUnICsgaW5kZXhcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fcGlsZUdhbWVPYmplY3RzID0gWy4uLnRoaXMuX3BpbGVHYW1lT2JqZWN0cywgdGFibGVhdVBpbGVdO1xuICAgICAgdGhpcy5fdGFibGVhdVBpbGVHYW1lT2JqZWN0cyA9IFsuLi50aGlzLl90YWJsZWF1UGlsZUdhbWVPYmplY3RzLCB0YWJsZWF1UGlsZV07XG4gICAgICB0aGlzLmFkZCh0YWJsZWF1UGlsZSk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRpc2NhcmRQaWxlc0lkcy5sZW5ndGg7IGluZGV4KyspXG4gICAge1xuICAgICAgY29uc3QgZGlzY2FyZFBpbGUgPSBuZXcgUGlsZUdhbWVPYmplY3Qoe1xuICAgICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICAgICAgeDozMDAgKyBpbmRleCAqIDkwLFxuICAgICAgICB5OjEwMCxcbiAgICAgICAgbmFtZTogZGlzY2FyZFBpbGVzSWRzW2luZGV4XSxcbiAgICAgICAgbGFiZWw6ICdkaXNjYXJkJyArIGluZGV4XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3BpbGVHYW1lT2JqZWN0cyA9IFsuLi50aGlzLl9waWxlR2FtZU9iamVjdHMsIGRpc2NhcmRQaWxlXTtcbiAgICAgIHRoaXMuX2Rpc2NhcmRQaWxlR2FtZU9iamVjdHMgPSBbLi4udGhpcy5fZGlzY2FyZFBpbGVHYW1lT2JqZWN0cywgZGlzY2FyZFBpbGVdO1xuICAgICAgdGhpcy5hZGQoZGlzY2FyZFBpbGUpO1xuICAgIH1cblxuICAgIGNvbnN0IF9kcmFnUGlsZUdhbWVPYmplY3QgPSBuZXcgUGlsZUdhbWVPYmplY3Qoe1xuICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICB4OiAwLFxuICAgICAgeTogMCxcbiAgICAgIG5hbWU6IGRyYWdQaWxlSWQsXG4gICAgICBpc1NwcmVhZDogdHJ1ZSxcbiAgICAgIGxhYmVsOiAnZHJhZydcbiAgICB9KTtcbiAgICB0aGlzLl9waWxlR2FtZU9iamVjdHMgPSBbLi4udGhpcy5fcGlsZUdhbWVPYmplY3RzLCBfZHJhZ1BpbGVHYW1lT2JqZWN0XTtcbiAgICB0aGlzLl9kcmFnUGlsZUdhbWVPYmplY3QgPSBfZHJhZ1BpbGVHYW1lT2JqZWN0O1xuICAgIHRoaXMuX2RyYWdQaWxlR2FtZU9iamVjdC5zZXRBY3RpdmUoZmFsc2UpO1xuICAgIHRoaXMuYWRkKF9kcmFnUGlsZUdhbWVPYmplY3QpO1xuXG4gICAgY29uc3QgX2hpbnRQaWxlR2FtZU9iamVjdCA9IG5ldyBQaWxlR2FtZU9iamVjdCh7XG4gICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgICAgbmFtZTogaGludFBpbGVJZCxcbiAgICAgIGlzU3ByZWFkOiB0cnVlLFxuICAgICAgbGFiZWw6ICdoaW50J1xuICAgIH0pO1xuICAgIHRoaXMuX3BpbGVHYW1lT2JqZWN0cyA9IFsuLi50aGlzLl9waWxlR2FtZU9iamVjdHMsIF9oaW50UGlsZUdhbWVPYmplY3RdO1xuICAgIHRoaXMuX2hpbnRQaWxlR2FtZU9iamVjdCA9IF9oaW50UGlsZUdhbWVPYmplY3Q7XG4gICAgdGhpcy5faGludFBpbGVHYW1lT2JqZWN0LnNldEFjdGl2ZShmYWxzZSk7XG4gICAgdGhpcy5hZGQoX2hpbnRQaWxlR2FtZU9iamVjdCk7XG4gIH1cblxuICBnZXQgY2FyZEdhbWVPYmplY3RzICgpXG4gIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX2NhcmRHYW1lT2JqZWN0c107XG4gIH1cblxuICBnZXQgcGlsZUdhbWVPYmplY3RzICgpXG4gIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX3BpbGVHYW1lT2JqZWN0c107XG4gIH1cblxuICBnZXRQaWxlR2FtZU9iamVjdEJ5IChwcmVkaWNhdGU6KHA6UGlsZUdhbWVPYmplY3QpID0+IGFueSlcbiAge1xuICAgIGNvbnN0IHBpbGUgPSB0aGlzLl9waWxlR2FtZU9iamVjdHMuZmluZChwcmVkaWNhdGUpO1xuICAgIGlmICghcGlsZSlcbiAgICB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcGlsZSBnYW1lIG9iamVjdCBkb2Vzbid0IGV4aXN0LlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHBpbGU7XG4gIH1cblxuICBnZXRQaWxlR2FtZU9iamVjdEJ5TmFtZSAobmFtZTpzdHJpbmcpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQaWxlR2FtZU9iamVjdEJ5KHAgPT4gcC5uYW1lID09PSBuYW1lKTtcbiAgfVxuXG4gIGdldFBpbGVHYW1lT2JqZWN0QnlDYXJkR2FtZU9iamVjdE5hbWUgKG5hbWU6c3RyaW5nKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UGlsZUdhbWVPYmplY3RCeShwID0+IHAuY2FyZEdhbWVPYmplY3RzLmZpbmQoYyA9PiBjLm5hbWUgPT09IG5hbWUpKTtcbiAgfVxuXG4gIGdldCBkZWNrUGlsZUdhbWVPYmplY3QgKClcbiAge1xuICAgIHJldHVybiB0aGlzLl9kZWNrUGlsZUdhbWVPYmplY3Q7XG4gIH1cblxuICBnZXQgZHJhd1BpbGVHYW1lT2JqZWN0cyAoKVxuICB7XG4gICAgcmV0dXJuIFsuLi50aGlzLl9kcmF3UGlsZUdhbWVPYmplY3RzXTtcbiAgfVxuXG4gIGdldCB0YWJsZWF1UGlsZUdhbWVPYmplY3RzICgpXG4gIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX3RhYmxlYXVQaWxlR2FtZU9iamVjdHNdO1xuICB9XG5cbiAgZ2V0IGRyYWdQaWxlR2FtZU9iamVjdCAoKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuX2RyYWdQaWxlR2FtZU9iamVjdDtcbiAgfVxuXG4gIGdldCBoaW50UGlsZUdhbWVPYmplY3QgKClcbiAge1xuICAgIHJldHVybiB0aGlzLl9oaW50UGlsZUdhbWVPYmplY3Q7XG4gIH1cbn1cbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcblxuZXhwb3J0IGNvbnN0IGdldFdvcmxkUG9zaXRpb24gPSAoY29udGFpbmVyOiBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyKSA9Plxue1xuICBsZXQgcGFyZW50ID0gY29udGFpbmVyLnBhcmVudENvbnRhaW5lcjtcbiAgbGV0IHggPSBjb250YWluZXIueDtcbiAgbGV0IHkgPSBjb250YWluZXIueTtcbiAgd2hpbGUgKHBhcmVudClcbiAge1xuICAgIHggPSB4ICsgcGFyZW50Lng7XG4gICAgeSA9IHkgKyBwYXJlbnQueTtcbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Q29udGFpbmVyO1xuICB9XG4gIHJldHVybiB7eCwgeX07XG59O1xuIiwiaW1wb3J0IFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XG4vLyBpbXBvcnQgSGVsbG9Xb3JsZFNjZW5lIGZyb20gXCIuL3NjZW5lcy9oZWxsby13b3JsZC1zY2VuZVwiO1xuaW1wb3J0IE1haW5TY2VuZSBmcm9tIFwiLi9zY2VuZXMvbWFpbi1zY2VuZVwiO1xuXG5jb25zdCBjb25maWcgPSB7XG4gIC8vIHRpdGxlOiBcIkdhbWUgT2YgTGlmZVwiLFxuICAvLyB1cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2RpZ2l0c2Vuc2l0aXZlL3BoYXNlcjMtdHlwZXNjcmlwdFwiLFxuICAvLyB2ZXJzaW9uOiBcIjEuMFwiLFxuICB3aWR0aDogMTAwMCxcbiAgaGVpZ2h0OiA4MDAsXG4gIHR5cGU6IFBoYXNlci5BVVRPLFxuICAvLyBwYXJlbnQ6IFwiZ2FtZVwiLFxuICBzY2VuZTogW01haW5TY2VuZV0sXG4gIGJhY2tncm91bmRDb2xvcjogXCIjZWRlZGVkXCIsXG4gIC8vIHJlbmRlcjogeyBwaXhlbEFydDogZmFsc2UsIGFudGlhbGlhczogdHJ1ZSB9XG4gIC8vIHBoeXNpY3M6IHtcbiAgLy8gICBkZWZhdWx0OiAnYXJjYWRlJyxcbiAgLy8gICBhcmNhZGU6IHtcbiAgLy8gICAgIGdyYXZpdHk6IHsgeTogMjAwIH1cbiAgLy8gICB9XG4gIC8vIH0sXG59O1xuXG4vLyBleHBvcnQgY2xhc3MgR2FtZSBleHRlbmRzIFBoYXNlci5HYW1lIHtcbi8vICAgY29uc3RydWN0b3IoY29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnKSB7XG4vLyAgICAgc3VwZXIoY29uZmlnKTtcbi8vICAgfVxuLy8gfVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICBuZXcgUGhhc2VyLkdhbWUoY29uZmlnKTtcbn0pO1xuIiwiaW1wb3J0IHtFbWl0dGVyfSBmcm9tICcuLi9ldmVudC1lbWl0dGVyJztcbmltcG9ydCB7Sm9iUXVldWVFdmVudHN9IGZyb20gJy4vZXZlbnRzJztcblxudHlwZSBKb2JQcm9taXNlQ3JlYXRvcjxUPiA9IChcbiAgb25RdWV1ZUNhbmNlbDogKGNhbGxiYWNrOigpID0+IHZvaWQpID0+IHZvaWRcbikgPT4gUHJvbWlzZTxUPjtcblxuY2xhc3MgSm9iPFQ+ICB7XG5cbiAgcHJpdmF0ZSBfam9iUHJvbWlzZUNyZWF0b3I6IEpvYlByb21pc2VDcmVhdG9yPFQ+O1xuICBwcml2YXRlIF9vblN0YXJ0Q2FsbGJhY2s6ICgpID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgcHJpdmF0ZSBfb25FbmRDYWxsYmFjazogKHZhbHVlOlQpID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgcHJpdmF0ZSBfb25GYWlsQ2FsbGJhY2s6IChyZWFzb246YW55KSA9PiB2b2lkID0gKCkgPT4ge307XG4gIHByaXZhdGUgX29uUXVldWVDYW5jZWxDYWxsYmFjazogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xuICBwcml2YXRlIF9zdGF0dXM6IG51bWJlciA9IDA7XG5cbiAgY29uc3RydWN0b3IgKGpvYlByb21pc2VDcmVhdG9yOiBKb2JQcm9taXNlQ3JlYXRvcjxUPilcbiAge1xuICAgIHRoaXMuX2pvYlByb21pc2VDcmVhdG9yID0gam9iUHJvbWlzZUNyZWF0b3I7XG4gIH1cblxuICBzdGFydCAoKVxuICB7XG4gICAgaWYgKHRoaXMuaXNVbnRvdWNoZWQpXG4gICAge1xuICAgICAgY29uc3QgcHJvbWlzZSA9XG4gICAgICAgIHRoaXMuX2pvYlByb21pc2VDcmVhdG9yKFxuICAgICAgICAgIGNhbGxiYWNrID0+IHRoaXMuX29uUXVldWVDYW5jZWxDYWxsYmFjayA9IGNhbGxiYWNrXG4gICAgICAgICk7XG4gICAgICB0aGlzLl9zdGF0dXMgPSAxO1xuICAgICAgdGhpcy5fb25TdGFydENhbGxiYWNrKCk7XG4gICAgICBwcm9taXNlLnRoZW4oKHZhbHVlOlQpID0+IHtcbiAgICAgICAgdGhpcy5fc3RhdHVzID0gMjtcbiAgICAgICAgdGhpcy5fb25FbmRDYWxsYmFjayh2YWx1ZSk7XG4gICAgICB9KS5jYXRjaCgocmVhc29uOmFueSkgPT4ge1xuICAgICAgICB0aGlzLl9zdGF0dXMgPSAyO1xuICAgICAgICB0aGlzLl9vbkZhaWxDYWxsYmFjayhyZWFzb24pO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2V0IG9uU3RhcnRDYWxsYmFjayAoY2FsbGJhY2s6ICgpID0+IHZvaWQpXG4gIHtcbiAgICB0aGlzLl9vblN0YXJ0Q2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgfVxuXG4gIHNldCBvbkVuZENhbGxiYWNrIChjYWxsYmFjazogKHZhbHVlOlQpID0+IHZvaWQpXG4gIHtcbiAgICB0aGlzLl9vbkVuZENhbGxiYWNrID0gY2FsbGJhY2s7XG4gIH1cblxuICBzZXQgb25GYWlsQ2FsbGJhY2sgKGNhbGxiYWNrOiAocmVhc29uOmFueSkgPT4gdm9pZClcbiAge1xuICAgIHRoaXMuX29uRmFpbENhbGxiYWNrID0gY2FsbGJhY2s7XG4gIH1cblxuICBydW5RdWV1ZUNhbmNlbENhbGxiYWNrICgpXG4gIHtcbiAgICB0aGlzLl9vblF1ZXVlQ2FuY2VsQ2FsbGJhY2soKTtcbiAgfVxuXG4gIGdldCBpc1VudG91Y2hlZCAoKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXR1cyA9PT0gMDtcbiAgfVxuXG4gIGdldCBpc1Byb2Nlc3NpbmcgKClcbiAge1xuICAgIHJldHVybiB0aGlzLl9zdGF0dXMgPT09IDE7XG4gIH1cblxuICBnZXQgaXNEb25lICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzID09PSAyO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBKb2JRdWV1ZTxUPlxue1xuICBwcml2YXRlIF9oYXNTdGFydGVkOmJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY3VycmVudEluZGV4Om51bWJlciA9IDA7XG4gIHByaXZhdGUgX2pvYlF1ZXVlOkpvYjxUPltdID0gW107XG4gIHByaXZhdGUgX2VtaXR0ZXI6IEVtaXR0ZXI8Sm9iUXVldWVFdmVudHM8VD4+ID0gbmV3IEVtaXR0ZXI8Sm9iUXVldWVFdmVudHM8VD4+KCk7XG5cbiAgZ2V0IGlzUHJvY2Vzc2luZyAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2hhc1N0YXJ0ZWQ7XG4gIH1cblxuICBhZGQgKGpvYkNyZWF0b3I6IEpvYlByb21pc2VDcmVhdG9yPFQ+KVxuICB7XG4gICAgY29uc3Qgam9iID0gbmV3IEpvYihqb2JDcmVhdG9yKTtcbiAgICBqb2Iub25TdGFydENhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgdGhpcy5fZW1pdHRlci5lbWl0KFwiSk9CX1NUQVJUXCIsIHt9KTtcbiAgICB9O1xuICAgIGpvYi5vbkVuZENhbGxiYWNrID0gKHZhbHVlKSA9PiB7XG4gICAgICB0aGlzLl9lbWl0dGVyLmVtaXQoXCJKT0JfRU5EXCIsIHt2YWx1ZX0pO1xuICAgICAgdGhpcy5fY3VycmVudEluZGV4ID0gdGhpcy5fY3VycmVudEluZGV4ICsgMTtcbiAgICAgIHRoaXMuX3Byb2Nlc3MoKTtcbiAgICB9O1xuICAgIGpvYi5vbkZhaWxDYWxsYmFjayA9IChyZWFzb24pID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IocmVhc29uKTtcbiAgICB9O1xuICAgIHRoaXMuX2pvYlF1ZXVlID0gW1xuICAgICAgLi4udGhpcy5fam9iUXVldWUsXG4gICAgICBqb2JcbiAgICBdO1xuICAgIHRoaXMuX3Byb2Nlc3MoKTtcbiAgfVxuXG4gIHByaXZhdGUgX3Byb2Nlc3MgKClcbiAge1xuICAgIGlmICghdGhpcy5faGFzU3RhcnRlZClcbiAgICB7XG4gICAgICB0aGlzLl9oYXNTdGFydGVkID0gdHJ1ZTtcbiAgICAgIHRoaXMuX2VtaXR0ZXIuZW1pdChcIlFVRVVFX1NUQVJUXCIsIHt9KTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fY3VycmVudEluZGV4IDwgdGhpcy5fam9iUXVldWUubGVuZ3RoKVxuICAgIHtcbiAgICAgIGNvbnN0IGpvYiA9IHRoaXMuX2pvYlF1ZXVlW3RoaXMuX2N1cnJlbnRJbmRleF07XG4gICAgICBpZiAoam9iICYmIGpvYi5pc1VudG91Y2hlZClcbiAgICAgIHtcbiAgICAgICAgam9iLnN0YXJ0KCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2hhc1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuX2pvYlF1ZXVlID0gW107XG4gICAgICB0aGlzLl9jdXJyZW50SW5kZXggPSAwO1xuICAgICAgdGhpcy5fZW1pdHRlci5lbWl0KFwiUVVFVUVfRU5EXCIsIHt9KTtcbiAgICB9XG4gIH1cblxuICBjYW5jZWwgKClcbiAge1xuICAgIGNvbnN0IGhhc1N0YXJ0ZWQgPSB0aGlzLl9oYXNTdGFydGVkO1xuICAgIGNvbnN0IGpvYiA9IHRoaXMuX2pvYlF1ZXVlW3RoaXMuX2N1cnJlbnRJbmRleF07XG5cbiAgICB0aGlzLl9oYXNTdGFydGVkID0gZmFsc2U7XG4gICAgdGhpcy5fam9iUXVldWUgPSBbXTtcbiAgICB0aGlzLl9jdXJyZW50SW5kZXggPSAwO1xuXG4gICAgaWYgKCFoYXNTdGFydGVkIHx8ICFqb2IgfHwgIWpvYi5pc1Byb2Nlc3NpbmcpIHtcbiAgICAgIHRoaXMuX2VtaXR0ZXIuZW1pdChcIlFVRVVFX0NBTkNFTFwiLCB7d2FzUHJvY2Vzc2luZzogZmFsc2V9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgam9iLm9uRW5kQ2FsbGJhY2sgPSAoKSA9PiB7fTtcbiAgICAgIGpvYi5ydW5RdWV1ZUNhbmNlbENhbGxiYWNrKCk7XG4gICAgICB0aGlzLl9lbWl0dGVyLmVtaXQoXCJRVUVVRV9DQU5DRUxcIiwge3dhc1Byb2Nlc3Npbmc6IHRydWV9KTtcbiAgICB9XG4gIH1cblxuICBvblF1ZXVlU3RhcnQgKGNhbGxiYWNrOiAoKSA9PiB2b2lkKVxuICB7XG4gICAgdGhpcy5fZW1pdHRlci5vbignUVVFVUVfU1RBUlQnLCBjYWxsYmFjayk7XG4gIH1cblxuICBvblF1ZXVlRW5kIChjYWxsYmFjazogKCkgPT4gdm9pZClcbiAge1xuICAgIHRoaXMuX2VtaXR0ZXIub24oJ1FVRVVFX0VORCcsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIG9uUXVldWVDYW5jZWwgKGNhbGxiYWNrOiAoKSA9PiB2b2lkKVxuICB7XG4gICAgdGhpcy5fZW1pdHRlci5vbignUVVFVUVfQ0FOQ0VMJywgY2FsbGJhY2spO1xuICB9XG5cbiAgb25Kb2JTdGFydCAoY2FsbGJhY2s6ICgpID0+IHZvaWQpXG4gIHtcbiAgICB0aGlzLl9lbWl0dGVyLm9uKCdKT0JfU1RBUlQnLCBjYWxsYmFjayk7XG4gIH1cblxuICBvbkpvYkVuZCAoY2FsbGJhY2s6ICh7dmFsdWV9Ont2YWx1ZTpUfSkgPT4gdm9pZClcbiAge1xuICAgIHRoaXMuX2VtaXR0ZXIub24oJ0pPQl9FTkQnLCBjYWxsYmFjayk7XG4gIH1cbn1cbiIsImltcG9ydCB7ZW1pdHRlcn0gZnJvbSAnLi9lbWl0dGVyJztcbmltcG9ydCB7Q2FyZH0gZnJvbSAnLi4vbW9kZWxzL2NhcmQnO1xuXG5leHBvcnQgY2xhc3MgQ2FyZFdpdGhFdmVudCBleHRlbmRzIENhcmRcbntcbiAgZmFjZVVwICgpXG4gIHtcbiAgICBzdXBlci5mYWNlVXAoKTtcbiAgICBlbWl0dGVyLmVtaXQoJ0ZMSVBfT1ZFUl9DQVJEJywge1xuICAgICAgY2FyZDogdGhpc1xuICAgIH0pO1xuICB9XG5cbiAgZmFjZURvd24gKClcbiAge1xuICAgIHN1cGVyLmZhY2VEb3duKCk7XG4gICAgZW1pdHRlci5lbWl0KCdGTElQX09WRVJfQ0FSRCcsIHtcbiAgICAgIGNhcmQ6IHRoaXNcbiAgICB9KTtcbiAgfVxuXG4gIGZsaXBPdmVyICgpXG4gIHtcbiAgICBzdXBlci5mbGlwT3ZlcigpO1xuICAgIGVtaXR0ZXIuZW1pdCgnRkxJUF9PVkVSX0NBUkQnLCB7XG4gICAgICBjYXJkOiB0aGlzXG4gICAgfSk7XG4gIH1cbn1cbiIsImltcG9ydCB7Y3JlYXRlQ2FyZHN9IGZyb20gJy4uL21vZGVscy9jcmVhdGUtY2FyZHMnO1xuaW1wb3J0IHtDYXJkV2l0aEV2ZW50fSBmcm9tICcuL2NhcmQnO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQ2FyZHNXaXRoRXZlbnRzID0gKHtcbiAgbnVtYmVyT2ZEZWNrc1VzZWQsXG4gIG51bWJlck9mU3VpdHNcbn06e1xuICBudW1iZXJPZkRlY2tzVXNlZDpudW1iZXIsXG4gIG51bWJlck9mU3VpdHM6bnVtYmVyXG59KSA9PlxuICBjcmVhdGVDYXJkcyh7XG4gICAgbnVtYmVyT2ZEZWNrc1VzZWQsXG4gICAgbnVtYmVyT2ZTdWl0c1xuICB9KS5tYXAoY2FyZCA9PiBuZXcgQ2FyZFdpdGhFdmVudCh7XG4gICAgc3VpdDogY2FyZC5zdWl0LFxuICAgIHJhbms6IGNhcmQucmFuayxcbiAgICBpc0ZhY2VVcDogY2FyZC5pc0ZhY2VVcFxuICB9KSk7XG4iLCJpbXBvcnQge0VtaXR0ZXJ9IGZyb20gJy4uL2V2ZW50LWVtaXR0ZXInO1xuaW1wb3J0IHtNb2RlbEV2ZW50c30gZnJvbSAnLi9ldmVudHMnO1xuXG5leHBvcnQgY29uc3QgZW1pdHRlciA9IG5ldyBFbWl0dGVyPE1vZGVsRXZlbnRzPigpO1xuIiwiaW1wb3J0IHtQaWxlfSBmcm9tICcuLi9tb2RlbHMvcGlsZSc7XG5cbmV4cG9ydCBjbGFzcyBQaWxlV2l0aEV2ZW50IGV4dGVuZHMgUGlsZSB7XG5cbn1cbiIsImltcG9ydCB7ZW1pdHRlcn0gZnJvbSAnLi9lbWl0dGVyJztcbmltcG9ydCB7UGlsZX0gZnJvbSAnLi4vbW9kZWxzL3BpbGUnO1xuaW1wb3J0IHtUYWJsZX0gZnJvbSAnLi4vbW9kZWxzL3RhYmxlJztcblxuZXhwb3J0IGNsYXNzIFRhYmxlV2l0aEV2ZW50IGV4dGVuZHMgVGFibGUge1xuXG4gIHByb3RlY3RlZCBfbW92ZUNhcmRCZXR3ZWVuUGlsZXMgKHtmcm9tLCB0bywgc2l6ZX06e2Zyb206UGlsZSwgdG86UGlsZSwgc2l6ZTpudW1iZXJ9KVxuICB7XG4gICAgY29uc3QgY2FyZHMgPSBzdXBlci5fbW92ZUNhcmRCZXR3ZWVuUGlsZXMoe2Zyb20sIHRvLCBzaXplfSk7XG4gICAgZW1pdHRlci5lbWl0KCdNT1ZFX0NBUkRTX0JFVFdFRU5fUElMRVMnLCB7ZnJvbSwgdG8sIHNpemV9KTtcbiAgICByZXR1cm4gY2FyZHM7XG4gIH1cblxufVxuIiwiLy8gaW1wb3J0IHtldmVudEh1Yn0gZnJvbSAnLi4vZXZlbnQtaHViJztcbmltcG9ydCB7bmFub2lkfSBmcm9tICduYW5vaWQnO1xuXG5leHBvcnQgZW51bSBTdWl0IHtcbiAgU3BhZGUgPSAn4pmgJyxcbiAgQ2x1YiA9ICfimaMnLFxuICBEaWFtb25kID0gJ+KZpicsXG4gIEhlYXJ0ID0gJ+KZpSdcbn1cblxuY29uc3QgZ2V0UmFua1RleHQgPSAocmFuazpudW1iZXIpID0+XG57XG4gIGlmIChyYW5rIDwgMSB8fCAxMyA8IHJhbmspIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYXJkIHJhbmsgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICBpZiAocmFuayA9PT0gMTEpIHtcbiAgICByZXR1cm4gJ0onO1xuICB9IGVsc2UgaWYgKHJhbmsgPT09IDEyKSB7XG4gICAgcmV0dXJuICdRJztcbiAgfSBlbHNlIGlmIChyYW5rID09PSAxMykge1xuICAgIHJldHVybiAnSyc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJhbmsudG9TdHJpbmcoKTtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgQ2FyZFxue1xuICBwcml2YXRlIF9zdWl0OiBTdWl0O1xuICBwcml2YXRlIF9yYW5rOiBudW1iZXI7XG4gIHByaXZhdGUgX2lzRmFjZVVwOiBib29sZWFuO1xuICBwcml2YXRlIF9pZDpzdHJpbmcgPSBuYW5vaWQoKTtcblxuICBjb25zdHJ1Y3RvciAoe3N1aXQsIHJhbmssIGlzRmFjZVVwfTp7c3VpdDpTdWl0LCByYW5rOm51bWJlciwgaXNGYWNlVXA/OmJvb2xlYW59KVxuICB7XG4gICAgdGhpcy5fc3VpdCA9IHN1aXQ7XG4gICAgdGhpcy5faXNGYWNlVXAgPSBpc0ZhY2VVcCB8fCBmYWxzZTtcblxuICAgIGlmICgxIDw9IHJhbmsgJiYgcmFuayA8PSAxMykge1xuICAgICAgdGhpcy5fcmFuayA9IHJhbms7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIGNhcmQgcmFuayAke3Jhbmt9IGlzIGludmFsaWQuYCk7XG4gICAgfVxuICB9XG5cbiAgZ2V0IHN1aXQgKCkge1xuICAgIHJldHVybiB0aGlzLl9zdWl0O1xuICB9XG5cbiAgZ2V0IHN1aXRNYXJrICgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VpdC50b1N0cmluZygpXG4gIH1cblxuICBnZXQgcmFuayAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3Jhbms7XG4gIH1cblxuICBnZXQgcmFua01hcmsgKCkge1xuICAgIHJldHVybiBnZXRSYW5rVGV4dCh0aGlzLl9yYW5rKVxuICB9XG5cbiAgZ2V0IGlzRmFjZVVwICgpIHtcbiAgICByZXR1cm4gdGhpcy5faXNGYWNlVXA7XG4gIH1cblxuICBnZXQgaWQgKCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIGZhY2VVcCAoKVxuICB7XG4gICAgdGhpcy5faXNGYWNlVXAgPSB0cnVlO1xuICB9XG5cbiAgZmFjZURvd24gKClcbiAge1xuICAgIHRoaXMuX2lzRmFjZVVwID0gZmFsc2U7XG4gIH1cblxuICBmbGlwT3ZlciAoKVxuICB7XG4gICAgdGhpcy5faXNGYWNlVXAgPSAhdGhpcy5faXNGYWNlVXA7XG4gIH1cblxuICB0b1N0cmluZyAoKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuc3VpdE1hcmsgKyB0aGlzLnJhbmtNYXJrICsgKHRoaXMuX2lzRmFjZVVwID8gJysnIDogJy0nKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtDYXJkLCBTdWl0fSBmcm9tICcuL2NhcmQnO1xuXG5leHBvcnQgY29uc3QgY3JlYXRlQ2FyZHMgPSAoe1xuICBudW1iZXJPZkRlY2tzVXNlZCxcbiAgbnVtYmVyT2ZTdWl0c1xufTp7XG4gIG51bWJlck9mRGVja3NVc2VkOm51bWJlcixcbiAgbnVtYmVyT2ZTdWl0czpudW1iZXJcbn0pID0+IHtcbiAgY29uc3QgZGVja0NhcmRzOkNhcmRbXSA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbnVtYmVyT2ZEZWNrc1VzZWQ7IGkrKylcbiAge1xuICAgIGZvciAobGV0IHJhbmsgPSAxOyByYW5rIDw9IDEzOyByYW5rKyspXG4gICAge1xuICAgICAgc3dpdGNoIChudW1iZXJPZlN1aXRzKVxuICAgICAge1xuICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgZGVja0NhcmRzLnB1c2gobmV3IENhcmQoe3N1aXQ6U3VpdC5EaWFtb25kLCByYW5rLCBpc0ZhY2VVcDogZmFsc2V9KSk7XG4gICAgICAgIGNhc2UgMzpcbiAgICAgICAgICBkZWNrQ2FyZHMucHVzaChuZXcgQ2FyZCh7c3VpdDpTdWl0LkNsdWIsIHJhbmssIGlzRmFjZVVwOiBmYWxzZX0pKTtcbiAgICAgICAgY2FzZSAyOlxuICAgICAgICAgIGRlY2tDYXJkcy5wdXNoKG5ldyBDYXJkKHtzdWl0OlN1aXQuSGVhcnQsIHJhbmssIGlzRmFjZVVwOiBmYWxzZX0pKTtcbiAgICAgICAgY2FzZSAxOlxuICAgICAgICAgIGRlY2tDYXJkcy5wdXNoKG5ldyBDYXJkKHtzdWl0OlN1aXQuU3BhZGUsIHJhbmssIGlzRmFjZVVwOiBmYWxzZX0pKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICByZXR1cm4gZGVja0NhcmRzO1xufVxuXG5leHBvcnQgY29uc3QgcmFuZG9taXplQXJyYXkgPSA8VD4oe2FycmF5fTp7YXJyYXk6VFtdfSkgPT4ge1xuICBjb25zdCBfYXJyID0gWy4uLmFycmF5XTtcbiAgZm9yIChsZXQgaSA9IF9hcnIubGVuZ3RoIC0gMTsgaSA+IDA7IGktLSlcbiAge1xuICAgICAgY29uc3QgaiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChpICsgMSkpO1xuICAgICAgW19hcnJbaV0sIF9hcnJbal1dID0gW19hcnJbal0sIF9hcnJbaV1dO1xuICB9XG4gIHJldHVybiBfYXJyO1xufVxuIiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xuaW1wb3J0IHtuYW5vaWR9IGZyb20gJ25hbm9pZCc7XG5cbnR5cGUgUGlsZUFyZ3MgPSB7XG4gIGNhcmRzPzogQ2FyZFtdLFxuICBsYWJlbD86IHN0cmluZ1xufVxuXG5leHBvcnQgY2xhc3MgUGlsZVxue1xuICBwcm90ZWN0ZWQgX2NhcmRzOkNhcmRbXTtcbiAgcHJvdGVjdGVkIF9sYWJlbDpzdHJpbmc7XG4gIHByaXZhdGUgX2lkOnN0cmluZyA9IG5hbm9pZCgpO1xuXG4gIGNvbnN0cnVjdG9yIChhcmdzOlBpbGVBcmdzID0ge30pXG4gIHtcbiAgICB0aGlzLl9jYXJkcyA9IGFyZ3MuY2FyZHMgfHwgW107XG4gICAgdGhpcy5fbGFiZWwgPSBhcmdzLmxhYmVsIHx8ICcnO1xuICB9XG5cbiAgZ2V0IGlkICgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICBnZXQgbGFiZWwgKCkge1xuICAgIHJldHVybiB0aGlzLl9sYWJlbDtcbiAgfVxuXG4gIGdldCBjYXJkcyAoKVxuICB7XG4gICAgcmV0dXJuIFsuLi50aGlzLl9jYXJkc107XG4gIH1cblxuICBnZXQgZnJvbnRDYXJkICgpOkNhcmR8dW5kZWZpbmVkXG4gIHtcbiAgICByZXR1cm4gdGhpcy5fY2FyZHNbdGhpcy5fY2FyZHMubGVuZ3RoIC0gMV07XG4gIH1cblxuICBnZXQgbGFzdENhcmQgKCk6Q2FyZHx1bmRlZmluZWRcbiAge1xuICAgIHJldHVybiB0aGlzLl9jYXJkc1swXTtcbiAgfVxuXG4gIGdldEZyb250Q2FyZHMgKHtzaXplfTp7c2l6ZTpudW1iZXJ9KVxuICB7XG4gICAgY29uc3QgY2FyZHMgPSB0aGlzLl9jYXJkcztcbiAgICBpZiAoY2FyZHMubGVuZ3RoID09PSAwIHx8IHNpemUgPCAxKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgX3NpemUgPSBNYXRoLm1pbihjYXJkcy5sZW5ndGgsIHNpemUpO1xuICAgIHJldHVybiBjYXJkcy5zbGljZShjYXJkcy5sZW5ndGggLSBfc2l6ZSk7XG4gIH1cblxuICBkcmF3Q2FyZHMgKHtzaXplfTp7c2l6ZTpudW1iZXJ9KVxuICB7XG4gICAgY29uc3QgY2FyZHMgPSB0aGlzLl9jYXJkcztcbiAgICBpZiAoY2FyZHMubGVuZ3RoID09PSAwIHx8IHNpemUgPCAxKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgX3NpemUgPSBNYXRoLm1pbihjYXJkcy5sZW5ndGgsIHNpemUpO1xuICAgIGNvbnN0IGRyYXduQ2FyZHMgPSBjYXJkcy5zbGljZShjYXJkcy5sZW5ndGggLSBfc2l6ZSk7XG4gICAgdGhpcy5fY2FyZHMgPSBjYXJkcy5zbGljZSgwLCAtc2l6ZSk7XG4gICAgcmV0dXJuIGRyYXduQ2FyZHM7XG4gIH1cblxuICBwbGFjZUNhcmRzICh7Y2FyZHN9OntjYXJkczpDYXJkW119KVxuICB7XG4gICAgdGhpcy5fY2FyZHMgPSBbLi4udGhpcy5fY2FyZHMsIC4uLmNhcmRzXTtcbiAgfVxuXG4gIGdldERlc2NlbmRpbmdJblN1aXRGcm9udENhcmRzICgpXG4gIHtcbiAgICByZXR1cm4gUGlsZS5nZXREZXNjZW5kaW5nRnJvbnRDYXJkcyh7XG4gICAgICBjYXJkczogdGhpcy5fY2FyZHMsXG4gICAgICBpblN1aXQ6IHRydWUsXG4gICAgICBmYWNlVXA6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIHN0YXRpYyBnZXREZXNjZW5kaW5nRnJvbnRDYXJkcyAoe2NhcmRzLCBpblN1aXQsIGZhY2VVcH06e2NhcmRzOkNhcmRbXSwgaW5TdWl0Pzpib29sZWFuLCBmYWNlVXA/OmJvb2xlYW59KVxuICB7XG4gICAgY29uc3QgX2luU3VpdCA9IGluU3VpdCB8fCBmYWxzZTtcbiAgICBjb25zdCBfZmFjZVVwID0gZmFjZVVwIHx8IGZhbHNlO1xuXG4gICAgaWYgKGNhcmRzLmxlbmd0aCA9PT0gMClcbiAgICB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgbGV0IHByZXYgPSBjYXJkc1tjYXJkcy5sZW5ndGggLSAxXTtcblxuICAgIGlmIChfZmFjZVVwICYmICFwcmV2LmlzRmFjZVVwKVxuICAgIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBsZXQgX2NhcmRzOkNhcmRbXSA9IFtwcmV2XTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gY2FyZHMubGVuZ3RoIC0gMjsgaW5kZXggPj0gMDsgaW5kZXgtLSlcbiAgICB7XG4gICAgICBjb25zdCBjdXJyZW50ID0gY2FyZHNbaW5kZXhdO1xuXG4gICAgICBpZiAocHJldi5yYW5rICsgMSAhPT0gY3VycmVudC5yYW5rXG4gICAgICAgIHx8IChfaW5TdWl0ICYmIHByZXYuc3VpdCAhPT0gY3VycmVudC5zdWl0KVxuICAgICAgICB8fCAoX2ZhY2VVcCAmJiAhY3VycmVudC5pc0ZhY2VVcCkpXG4gICAgICB7XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuXG4gICAgICBfY2FyZHMgPSBbY3VycmVudCwgLi4uX2NhcmRzXTtcbiAgICAgIHByZXYgPSBjdXJyZW50O1xuICAgIH1cblxuICAgIHJldHVybiBfY2FyZHM7XG4gIH1cblxuICBzdGF0aWMgY2hlY2tJZkNhcmRzQXJlRGVzY2VuZGluZyAoe2NhcmRzLCBpblN1aXQsIGZhY2VVcH06e2NhcmRzOkNhcmRbXSwgaW5TdWl0Pzpib29sZWFuLCBmYWNlVXA/OmJvb2xlYW59KVxuICB7XG4gICAgcmV0dXJuIFBpbGUuZ2V0RGVzY2VuZGluZ0Zyb250Q2FyZHMoe2NhcmRzLCBpblN1aXQsIGZhY2VVcH0pLmxlbmd0aCA9PT0gY2FyZHMubGVuZ3RoO1xuICB9XG5cbiAgY2hlY2tJZkZyb250Q2FyZHNDb21wbGV0ZSAoKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuY2FyZHMubGVuZ3RoID49IDEzICYmIFBpbGUuY2hlY2tJZkNhcmRzQXJlRGVzY2VuZGluZyh7XG4gICAgICBjYXJkczogdGhpcy5jYXJkcy5zbGljZSgtMTMpLFxuICAgICAgaW5TdWl0OiB0cnVlLFxuICAgICAgZmFjZVVwOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICB0b1N0cmluZyAoKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuY2FyZHMubWFwKGMgPT4gYy50b1N0cmluZygpKS5qb2luKCcgJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7Q2FyZH0gZnJvbSAnLi9jYXJkJztcbmltcG9ydCB7UGlsZX0gZnJvbSAnLi9waWxlJztcbi8vIGltcG9ydCB7VGFibGVTZXR0aW5ncywgVGFibGVTZXR0aW5nQ29uZmlnfSBmcm9tICcuL3RhYmxlLXNldHRpbmdzJztcbmltcG9ydCB7XG4gIEZBQ0VfVVBfQ0FSRCxcbiAgTU9WRV9DQVJELFxuICBQQVVTRSxcbiAgVW5kb2FibGVBY3Rpb25IaXN0b3J5XG59IGZyb20gJy4vdW5kb2FibGUtYWN0aW9ucyc7XG5cbmV4cG9ydCB0eXBlIFRhYmxlU2V0dGluZ3MgPSB7XG4gIG51bWJlck9mVGFibGVhdVBpbGVzOiBudW1iZXIsXG4gIG51bWJlck9mRHJhd1BpbGVzOiBudW1iZXIsXG4gIGNhcmRzOiBDYXJkW11cbn1cblxuZXhwb3J0IGNsYXNzIFRhYmxlXG57XG4gIHByaXZhdGUgX3NldHRpbmdzOlRhYmxlU2V0dGluZ3M7XG4gIHByaXZhdGUgX2NhcmRzOiBDYXJkW107XG4gIHByaXZhdGUgX2RlY2tQaWxlOlBpbGU7XG4gIHByaXZhdGUgX2RyYXdQaWxlczpQaWxlW107XG4gIHByaXZhdGUgX3RhYmxlYXVQaWxlczpQaWxlW107XG4gIHByaXZhdGUgX2Rpc2NhcmRQaWxlczpQaWxlW107XG4gIHByaXZhdGUgX3BpbGVzOlBpbGVbXTtcbiAgcHJpdmF0ZSBfYWN0aW9uSGlzdG9yeTpVbmRvYWJsZUFjdGlvbkhpc3Rvcnk7XG5cbiAgY29uc3RydWN0b3IgKHNldHRpbmdzOiBUYWJsZVNldHRpbmdzKVxuICB7XG4gICAgdGhpcy5fc2V0dGluZ3MgPSBzZXR0aW5ncztcbiAgICB0aGlzLl9jYXJkcyA9IHNldHRpbmdzLmNhcmRzO1xuICAgIHRoaXMuX2RlY2tQaWxlID0gbmV3IFBpbGUoe2xhYmVsOiAnZGVjaycsIGNhcmRzOiBzZXR0aW5ncy5jYXJkc30pO1xuICAgIHRoaXMuX2RyYXdQaWxlcyA9IEFycmF5LmZyb20oe2xlbmd0aDpzZXR0aW5ncy5udW1iZXJPZkRyYXdQaWxlc30pLm1hcCgoXywgaSkgPT4gbmV3IFBpbGUoe2xhYmVsOiBgZHJhdyR7aX1gLCBjYXJkczogW119KSk7XG4gICAgdGhpcy5fdGFibGVhdVBpbGVzID0gQXJyYXkuZnJvbSh7bGVuZ3RoOnNldHRpbmdzLm51bWJlck9mVGFibGVhdVBpbGVzfSkubWFwKChfLCBpKSA9PiBuZXcgUGlsZSh7bGFiZWw6IGB0YWJsJHtpfWAsIGNhcmRzOiBbXX0pKTtcbiAgICB0aGlzLl9kaXNjYXJkUGlsZXMgPSBBcnJheS5mcm9tKHtsZW5ndGg6TWF0aC5mbG9vcihzZXR0aW5ncy5jYXJkcy5sZW5ndGggLyAxMyl9KS5tYXAoKF8sIGkpID0+IG5ldyBQaWxlKHtsYWJlbDogYGRpc2Mke2l9YCwgY2FyZHM6IFtdfSkpO1xuICAgIHRoaXMuX3BpbGVzID0gW3RoaXMuX2RlY2tQaWxlLCAuLi50aGlzLl9kcmF3UGlsZXMsIC4uLnRoaXMudGFibGVhdVBpbGVzLCAuLi50aGlzLl9kaXNjYXJkUGlsZXNdO1xuICAgIHRoaXMuX2FjdGlvbkhpc3RvcnkgPSBuZXcgVW5kb2FibGVBY3Rpb25IaXN0b3J5KCk7XG4gIH1cblxuICBnZXQgY2FyZHMgKClcbiAge1xuICAgIHJldHVybiBbLi4udGhpcy5fY2FyZHNdO1xuICB9XG5cbiAgZ2V0IHBpbGVzICgpXG4gIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX3BpbGVzXTtcbiAgfVxuXG4gIGdldFBpbGVCeSAocHJlZGljYXRlOihwOlBpbGUpID0+IGFueSlcbiAge1xuICAgIGNvbnN0IHBpbGUgPSB0aGlzLl9waWxlcy5maW5kKHByZWRpY2F0ZSk7XG4gICAgaWYgKCFwaWxlKVxuICAgIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBwaWxlIGRvZXNuJ3QgZXhpc3QuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcGlsZTtcbiAgfVxuXG4gIGdldFBpbGVCeUlkIChpZDpzdHJpbmcpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQaWxlQnkocCA9PiBwLmlkID09PSBpZCk7XG4gIH1cblxuICBnZXRQaWxlQnlDYXJkSWQgKGlkOnN0cmluZylcbiAge1xuICAgIHJldHVybiB0aGlzLmdldFBpbGVCeShwID0+IHAuY2FyZHMuZmluZChjID0+IGMuaWQgPT09IGlkKSk7XG4gIH1cblxuICBnZXQgZGVja1BpbGUgKClcbiAge1xuICAgIHJldHVybiB0aGlzLl9kZWNrUGlsZTtcbiAgfVxuXG4gIGdldCBkcmF3UGlsZXMgKClcbiAge1xuICAgIHJldHVybiBbLi4udGhpcy5fZHJhd1BpbGVzXTtcbiAgfVxuXG4gIGdldCB0YWJsZWF1UGlsZXMgKClcbiAge1xuICAgIHJldHVybiBbLi4udGhpcy5fdGFibGVhdVBpbGVzXTtcbiAgfVxuXG4gIGdldCBkaXNjYXJkUGlsZXMgKClcbiAge1xuICAgIHJldHVybiBbLi4udGhpcy5fZGlzY2FyZFBpbGVzXTtcbiAgfVxuXG4gIGdldCBpc0NsZWFyICgpXG4gIHtcbiAgICByZXR1cm4gIXRoaXMuX3RhYmxlYXVQaWxlcy5maW5kKHAgPT4gcC5jYXJkcy5sZW5ndGggPiAwKTtcbiAgfVxuXG4gIGdldFBvc3NpYmxlTW92ZXNCZXR3ZWVuVGFibGVhdVBpbGVzICgpXG4gIHtcbiAgICBsZXQgbW92ZXM6e3NpemU6bnVtYmVyLCBmcm9tOiBQaWxlLCB0bzogUGlsZX1bXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgZnJvbSBvZiB0aGlzLl90YWJsZWF1UGlsZXMpXG4gICAge1xuICAgICAgY29uc3QgZHJhd2FibGVDYXJkcyA9IGZyb20uZ2V0RGVzY2VuZGluZ0luU3VpdEZyb250Q2FyZHMoKTtcbiAgICAgIGlmIChkcmF3YWJsZUNhcmRzLmxlbmd0aCA9PT0gMCkgY29udGludWU7XG5cbiAgICAgIGZvciAobGV0IHRvIG9mIHRoaXMuX3RhYmxlYXVQaWxlcylcbiAgICAgIHtcbiAgICAgICAgaWYgKHRvID09PSBmcm9tKSBjb250aW51ZTtcblxuICAgICAgICBmb3IgKGxldCBzaXplID0gZHJhd2FibGVDYXJkcy5sZW5ndGg7IHNpemUgPiAwOyBzaXplLS0pXG4gICAgICAgIHtcbiAgICAgICAgICBpZiAodG8uZnJvbnRDYXJkICYmICFQaWxlLmNoZWNrSWZDYXJkc0FyZURlc2NlbmRpbmcoe1xuICAgICAgICAgICAgY2FyZHM6IFt0by5mcm9udENhcmQsIC4uLmRyYXdhYmxlQ2FyZHMuc2xpY2UoLXNpemUpXSxcbiAgICAgICAgICAgIGluU3VpdDogZmFsc2UsXG4gICAgICAgICAgICBmYWNlVXA6IHRydWVcbiAgICAgICAgICB9KSkgY29udGludWU7XG5cbiAgICAgICAgICBtb3ZlcyA9IFsuLi5tb3Zlcywge2Zyb20sIHRvLCBzaXplfV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbW92ZXM7XG4gIH1cblxuICBwcm90ZWN0ZWQgX21vdmVDYXJkQmV0d2VlblBpbGVzICh7ZnJvbSwgdG8sIHNpemV9Ontmcm9tOlBpbGUsIHRvOlBpbGUsIHNpemU6bnVtYmVyfSlcbiAge1xuICAgIGlmICghdGhpcy5fcGlsZXMuZmluZChwID0+IHAgPT09IGZyb20pKVxuICAgIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwiZnJvbVwiIHBpbGUgaXMgbm90IGJlIGluIHRoaXMgdGFibGUuYCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9waWxlcy5maW5kKHAgPT4gcCA9PT0gdG8pKVxuICAgIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwidG9cIiBwaWxlIGlzIG5vdCBiZSBpbiB0aGlzIHRhYmxlLmApO1xuICAgIH1cblxuICAgIGlmIChmcm9tLmdldEZyb250Q2FyZHMoe3NpemV9KS5sZW5ndGggIT09IHNpemUpXG4gICAge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcGlsZSBcIiR7ZnJvbS5pZH1cIiBkb2Vzbid0IGhhdmUgJHtzaXplfSBjYXJkcyB0byBkcmF3LmApO1xuICAgIH1cblxuICAgIGNvbnN0IGNhcmRzID0gZnJvbS5kcmF3Q2FyZHMoe3NpemV9KTtcbiAgICB0by5wbGFjZUNhcmRzKHtjYXJkc30pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVhbENhcmRzRnJvbURlY2tUb1RhYmxlYXVQaWxlcyAoKVxuICB7XG4gICAgY29uc3QgbnVtYmVyT2ZDYXJkcyA9IHRoaXMuX2RlY2tQaWxlLmNhcmRzLmxlbmd0aDtcbiAgICBjb25zdCBudW1iZXJPZkRyYXdDYXJkcyA9IHRoaXMuX3NldHRpbmdzLm51bWJlck9mVGFibGVhdVBpbGVzICogdGhpcy5fc2V0dGluZ3MubnVtYmVyT2ZEcmF3UGlsZXM7XG5cbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG51bWJlck9mQ2FyZHMgLSBudW1iZXJPZkRyYXdDYXJkczsgaW5kZXgrKylcbiAgICB7XG4gICAgICBjb25zdCBmcm9tID0gdGhpcy5fZGVja1BpbGU7XG4gICAgICBjb25zdCB0byA9IHRoaXMuX3RhYmxlYXVQaWxlc1tjb3VudGVyICUgdGhpcy50YWJsZWF1UGlsZXMubGVuZ3RoXTtcbiAgICAgIHRoaXMuX21vdmVDYXJkQmV0d2VlblBpbGVzKHtmcm9tLCB0bywgc2l6ZTogMX0pO1xuICAgICAgY291bnRlciA9IGNvdW50ZXIgKyAxO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2RlYWxDYXJkc0Zyb21EZWNrVG9EcmF3UGlsZXMgKClcbiAge1xuICAgIC8vIGNvbnN0IG51bWJlck9mRHJhd0NhcmRzID0gdGhpcy5fc2V0dGluZ3MubnVtYmVyT2ZUYWJsZWF1UGlsZXMgKiB0aGlzLl9zZXR0aW5ncy5udW1iZXJPZkRyYXdQaWxlcztcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9zZXR0aW5ncy5udW1iZXJPZkRyYXdQaWxlczsgaW5kZXgrKylcbiAgICB7XG4gICAgICBjb25zdCBmcm9tID0gdGhpcy5fZGVja1BpbGU7XG4gICAgICBjb25zdCB0byA9IHRoaXMuX2RyYXdQaWxlc1tpbmRleF07XG4gICAgICB0aGlzLl9tb3ZlQ2FyZEJldHdlZW5QaWxlcyh7ZnJvbSwgdG8sIHNpemU6IHRoaXMuX3NldHRpbmdzLm51bWJlck9mVGFibGVhdVBpbGVzfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZmxpcFVwVGFibGVhdUZyb250Q2FyZHMgKClcbiAge1xuICAgIGZvciAobGV0IHRhYmxlYXVQaWxlIG9mIHRoaXMuX3RhYmxlYXVQaWxlcylcbiAgICB7XG4gICAgICBpZiAodGFibGVhdVBpbGUuZnJvbnRDYXJkKSB0aGlzLl9mYWNlVXBDYXJkKHtjYXJkOiB0YWJsZWF1UGlsZS5mcm9udENhcmR9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9mYWNlVXBDYXJkICh7Y2FyZH06e2NhcmQ6Q2FyZH0pXG4gIHtcbiAgICBpZiAoIWNhcmQuaXNGYWNlVXApXG4gICAge1xuICAgICAgY2FyZC5mYWNlVXAoKTtcbiAgICB9XG4gIH1cblxuICBzdGFydEdhbWUgKClcbiAge1xuICAgIHRoaXMuX2RlYWxDYXJkc0Zyb21EZWNrVG9UYWJsZWF1UGlsZXMoKTtcbiAgICB0aGlzLl9kZWFsQ2FyZHNGcm9tRGVja1RvRHJhd1BpbGVzKCk7XG4gICAgdGhpcy5fZmxpcFVwVGFibGVhdUZyb250Q2FyZHMoKTtcbiAgfVxuXG4gIG1vdmVDYXJkQmV0d2VlblRhYmxlYXVQaWxlcyAoe2Zyb20sIHRvLCBzaXplfTp7ZnJvbTpQaWxlLCB0bzpQaWxlLCBzaXplOm51bWJlcn0pXG4gIHtcbiAgICBpZiAoIXRoaXMuX3RhYmxlYXVQaWxlcy5maW5kKHAgPT4gcCA9PT0gZnJvbSkpXG4gICAge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJmcm9tXCIgcGlsZSBpcyBub3QgYSB0YWJsZWF1IHBpbGUuYCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl90YWJsZWF1UGlsZXMuZmluZChwID0+IHAgPT09IHRvKSlcbiAgICB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcInRvXCIgcGlsZSBpcyBub3QgYSB0YWJsZWF1IHBpbGUuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgY2FyZHMgPSBmcm9tLmdldEZyb250Q2FyZHMoe3NpemV9KTtcbiAgICBpZiAoY2FyZHMubGVuZ3RoICE9PSBzaXplKVxuICAgIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBpbGUgXCIke2Zyb20uaWR9XCIgZG9lc24ndCBoYXZlICR7c2l6ZX0gY2FyZHMgdG8gZHJhdy5gKTtcbiAgICB9XG5cbiAgICBpZiAodG8uZnJvbnRDYXJkICYmICFQaWxlLmNoZWNrSWZDYXJkc0FyZURlc2NlbmRpbmcoe1xuICAgICAgY2FyZHM6IFt0by5mcm9udENhcmQsIC4uLmNhcmRzXSxcbiAgICAgIGluU3VpdDogZmFsc2UsXG4gICAgICBmYWNlVXA6IHRydWVcbiAgICB9KSlcbiAgICB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBjYW4ndCBwbGFjZSB0aG9zZSBjYXJkcyB0byB0aGUgXCJ0b1wiIHBpbGUuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5fbW92ZUNhcmRCZXR3ZWVuUGlsZXMoe2Zyb20sIHRvLCBzaXplfSk7XG4gICAgdGhpcy5fYWN0aW9uSGlzdG9yeS5hZGQoe2Zyb20sIHRvLCBzaXplLCB0eXBlOiBNT1ZFX0NBUkR9KTtcblxuICAgIGlmIChmcm9tLmZyb250Q2FyZCAmJiAhZnJvbS5mcm9udENhcmQuaXNGYWNlVXApIHtcbiAgICAgIHRoaXMuX2ZhY2VVcENhcmQoe2NhcmQ6IGZyb20uZnJvbnRDYXJkfSk7XG4gICAgICB0aGlzLl9hY3Rpb25IaXN0b3J5LmFkZCh7Y2FyZDogZnJvbS5mcm9udENhcmQsIHR5cGU6IEZBQ0VfVVBfQ0FSRH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGRpc2NhcmRlZFBpbGUgPSB0aGlzLl9kaXNjYXJkUGlsZXMuZmluZChwID0+IHAuY2FyZHMubGVuZ3RoID09PSAwKTtcblxuICAgIGlmICghZGlzY2FyZGVkUGlsZSlcbiAgICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgYXJlbid0IGFueSBlbXB0eSBkaXNjYXJkZWQgcGlsZXMuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRvLmNoZWNrSWZGcm9udENhcmRzQ29tcGxldGUoKSlcbiAgICB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEzOyBpKyspXG4gICAgICB7XG4gICAgICAgIHRoaXMuX21vdmVDYXJkQmV0d2VlblBpbGVzKHtcbiAgICAgICAgICBmcm9tOiB0byxcbiAgICAgICAgICB0bzogZGlzY2FyZGVkUGlsZSxcbiAgICAgICAgICBzaXplOiAxXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9hY3Rpb25IaXN0b3J5LmFkZCh7XG4gICAgICAgICAgZnJvbTogdG8sXG4gICAgICAgICAgdG86IGRpc2NhcmRlZFBpbGUsXG4gICAgICAgICAgc2l6ZTogMSxcbiAgICAgICAgICB0eXBlOiBNT1ZFX0NBUkRcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0by5mcm9udENhcmQgJiYgIXRvLmZyb250Q2FyZC5pc0ZhY2VVcCkge1xuICAgICAgICB0aGlzLl9mYWNlVXBDYXJkKHtjYXJkOiB0by5mcm9udENhcmR9KTtcbiAgICAgICAgdGhpcy5fYWN0aW9uSGlzdG9yeS5hZGQoe2NhcmQ6IHRvLmZyb250Q2FyZCwgdHlwZTogRkFDRV9VUF9DQVJEfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aW9uSGlzdG9yeS5hZGQoe3R5cGU6IFBBVVNFfSk7XG4gIH1cblxuICBnZXQgZnJvbnREcmF3UGlsZSAoKVxuICB7XG4gICAgbGV0IGRyYXdQaWxlOlBpbGUgfCB1bmRlZmluZWQ7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IHRoaXMuX2RyYXdQaWxlcy5sZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKVxuICAgIHtcbiAgICAgIGlmICh0aGlzLl9kcmF3UGlsZXNbaW5kZXhdLmNhcmRzLmxlbmd0aCA9PT0gdGhpcy5fc2V0dGluZ3MubnVtYmVyT2ZUYWJsZWF1UGlsZXMpXG4gICAgICB7XG4gICAgICAgIGRyYXdQaWxlID0gdGhpcy5fZHJhd1BpbGVzW2luZGV4XTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRyYXdQaWxlO1xuICB9XG5cbiAgZGVhbENhcmRzRnJvbURyYXdQaWxlICgpXG4gIHtcbiAgICBjb25zdCBkcmF3UGlsZSA9IHRoaXMuZnJvbnREcmF3UGlsZTtcblxuICAgIGlmICghZHJhd1BpbGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlcmUgYXJlIG5vIGNhcmRzIHRvIGRyYXcgZnJvbSBkcmF3IHBpbGVzLicpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl90YWJsZWF1UGlsZXMubGVuZ3RoOyBpbmRleCsrKVxuICAgIHtcbiAgICAgIGNvbnN0IHRhYmxlYXVQaWxlID0gdGhpcy5fdGFibGVhdVBpbGVzW2luZGV4XTtcbiAgICAgIHRoaXMuX21vdmVDYXJkQmV0d2VlblBpbGVzKHtcbiAgICAgICAgZnJvbTogZHJhd1BpbGUsXG4gICAgICAgIHRvOiB0YWJsZWF1UGlsZSxcbiAgICAgICAgc2l6ZTogMVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9hY3Rpb25IaXN0b3J5LmFkZCh7XG4gICAgICAgIGZyb206IGRyYXdQaWxlLFxuICAgICAgICB0bzogdGFibGVhdVBpbGUsXG4gICAgICAgIHNpemU6IDEsXG4gICAgICAgIHR5cGU6IE1PVkVfQ0FSRFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgdGFibGVhdVBpbGUgb2YgdGhpcy5fdGFibGVhdVBpbGVzKVxuICAgIHtcbiAgICAgIGlmICh0YWJsZWF1UGlsZS5mcm9udENhcmQgJiYgIXRhYmxlYXVQaWxlLmZyb250Q2FyZC5pc0ZhY2VVcCkge1xuICAgICAgICB0aGlzLl9mYWNlVXBDYXJkKHtjYXJkOnRhYmxlYXVQaWxlLmZyb250Q2FyZH0pO1xuICAgICAgICB0aGlzLl9hY3Rpb25IaXN0b3J5LmFkZCh7XG4gICAgICAgICAgY2FyZDogdGFibGVhdVBpbGUuZnJvbnRDYXJkLFxuICAgICAgICAgIHR5cGU6IEZBQ0VfVVBfQ0FSRFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9hY3Rpb25IaXN0b3J5LmFkZCh7dHlwZTogUEFVU0V9KTtcbiAgfVxuXG4gIHVuZG8gKClcbiAge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2FjdGlvbkhpc3RvcnkuYWN0aW9ucy5tYXAoKGEsIGluZGV4LCBfKSA9PiB7XG4gICAgLy8gICByZXR1cm4gKGEudHlwZSk7XG4gICAgLy8gfSkpO1xuXG4gICAgbG9vcERlbGV0ZVBhdXNlczogZm9yICg7OylcbiAgICB7XG4gICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLl9hY3Rpb25IaXN0b3J5LmxhdGVzdDtcblxuICAgICAgaWYgKCFhY3Rpb24pIGJyZWFrIGxvb3BEZWxldGVQYXVzZXM7XG5cbiAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpXG4gICAgICB7XG4gICAgICAgIGNhc2UgUEFVU0U6XG4gICAgICAgICAgdGhpcy5fYWN0aW9uSGlzdG9yeS5yZW1vdmUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhayBsb29wRGVsZXRlUGF1c2VzO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgbG9vcEV4ZWN1dGVVbmRvQWN0aW9uczogZm9yICg7OylcbiAgICB7XG4gICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLl9hY3Rpb25IaXN0b3J5LmxhdGVzdDtcblxuICAgICAgaWYgKCFhY3Rpb24pIGJyZWFrIGxvb3BFeGVjdXRlVW5kb0FjdGlvbnM7XG5cbiAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpXG4gICAgICB7XG4gICAgICAgIGNhc2UgRkFDRV9VUF9DQVJEOlxuICAgICAgICAgIGFjdGlvbi5jYXJkLmZhY2VEb3duKCk7XG4gICAgICAgICAgdGhpcy5fYWN0aW9uSGlzdG9yeS5yZW1vdmUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBNT1ZFX0NBUkQ6XG4gICAgICAgICAgdGhpcy5fbW92ZUNhcmRCZXR3ZWVuUGlsZXMoe1xuICAgICAgICAgICAgZnJvbTogYWN0aW9uLnRvLFxuICAgICAgICAgICAgdG86IGFjdGlvbi5mcm9tLFxuICAgICAgICAgICAgc2l6ZTogYWN0aW9uLnNpemVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLl9hY3Rpb25IaXN0b3J5LnJlbW92ZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFBBVVNFOlxuICAgICAgICAgIHRoaXMuX2FjdGlvbkhpc3RvcnkucmVtb3ZlKCk7XG4gICAgICAgICAgYnJlYWsgbG9vcEV4ZWN1dGVVbmRvQWN0aW9ucztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgdG9TdHJpbmcoKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuX3BpbGVzLm1hcChwID0+IHAubGFiZWwgKyBcIiBcIiArIHAudG9TdHJpbmcoKSkuam9pbignXFxuJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7Q2FyZH0gZnJvbSAnLi9jYXJkJztcbmltcG9ydCB7UGlsZX0gZnJvbSAnLi9waWxlJztcblxuZXhwb3J0IGNvbnN0IEZBQ0VfVVBfQ0FSRCA9ICdGQUNFX1VQX0NBUkQnO1xuZXhwb3J0IGNvbnN0IE1PVkVfQ0FSRCA9ICdNT1ZFX0NBUkQnO1xuZXhwb3J0IGNvbnN0IFBBVVNFID0gJ1BBVVNFJztcblxuaW50ZXJmYWNlIEZhY2VVcEFjdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBGQUNFX1VQX0NBUkQsXG4gIGNhcmQ6IENhcmRcbn1cblxuaW50ZXJmYWNlIE1vdmVDYXJkQWN0aW9uIHtcbiAgdHlwZTogdHlwZW9mIE1PVkVfQ0FSRCxcbiAgZnJvbTpQaWxlLFxuICB0bzpQaWxlLFxuICBzaXplOm51bWJlclxufVxuXG5pbnRlcmZhY2UgUGF1c2VBY3Rpb24ge1xuICB0eXBlOiB0eXBlb2YgUEFVU0Vcbn1cblxuZXhwb3J0IHR5cGUgVW5kb2FibGVBY3Rpb24gPSBGYWNlVXBBY3Rpb24gfCBNb3ZlQ2FyZEFjdGlvbiB8IFBhdXNlQWN0aW9uO1xuXG5leHBvcnQgY2xhc3MgVW5kb2FibGVBY3Rpb25IaXN0b3J5XG57XG4gIHByaXZhdGUgX2FjdGlvbnM6VW5kb2FibGVBY3Rpb25bXSA9IFtdO1xuXG4gIGFkZCAoYWN0aW9uOlVuZG9hYmxlQWN0aW9uKVxuICB7XG4gICAgdGhpcy5fYWN0aW9ucyA9IFsuLi50aGlzLl9hY3Rpb25zLCBhY3Rpb25dO1xuICB9XG5cbiAgcmVtb3ZlICgpXG4gIHtcbiAgICB0aGlzLl9hY3Rpb25zID0gdGhpcy5fYWN0aW9ucy5zbGljZSgwLCAtMSk7XG4gIH1cblxuICBnZXQgbGF0ZXN0ICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aW9ucy5sZW5ndGggPT09IDAgPyB1bmRlZmluZWQgOiB0aGlzLl9hY3Rpb25zW3RoaXMuX2FjdGlvbnMubGVuZ3RoIC0gMV07XG4gIH1cblxuICBnZXQgYWN0aW9ucyAoKVxuICB7XG4gICAgcmV0dXJuIFsuLi50aGlzLl9hY3Rpb25zXTtcbiAgfVxufVxuIiwiaW1wb3J0IFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XG5pbXBvcnQge1RhYmxlR2FtZU9iamVjdFdpdGhFdmVudCBhcyBUYWJsZUdhbWVPYmplY3R9IGZyb20gJy4uL2dhbWUtb2JqZWN0cy13aXRoLWV2ZW50cy90YWJsZSc7XG4vLyBpbXBvcnQge1BpbGVHYW1lT2JqZWN0V2l0aEV2ZW50IGFzIFBpbGVHYW1lT2JqZWN0fSBmcm9tICcuLi9nYW1lLW9iamVjdHMtd2l0aC1ldmVudHMvcGlsZSc7XG5pbXBvcnQge0NhcmRHYW1lT2JqZWN0V2l0aEV2ZW50IGFzIENhcmRHYW1lT2JqZWN0fSBmcm9tICcuLi9nYW1lLW9iamVjdHMtd2l0aC1ldmVudHMvY2FyZCc7XG5pbXBvcnQge2VtaXR0ZXIgYXMgZ2FtZU9iamVjdEV2ZW50RW1pdHRlcn0gZnJvbSAnLi4vZ2FtZS1vYmplY3RzLXdpdGgtZXZlbnRzL2VtaXR0ZXInO1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4uL2dhbWUtb2JqZWN0cy9idXR0b24nO1xuaW1wb3J0IHtDYXJkV2l0aEV2ZW50IGFzIENhcmR9IGZyb20gJy4uL21vZGVscy13aXRoLWV2ZW50cy9jYXJkJztcbmltcG9ydCB7UGlsZVdpdGhFdmVudCBhcyBQaWxlfSBmcm9tICcuLi9tb2RlbHMtd2l0aC1ldmVudHMvcGlsZSc7XG5pbXBvcnQge1RhYmxlV2l0aEV2ZW50IGFzIFRhYmxlfSBmcm9tICcuLi9tb2RlbHMtd2l0aC1ldmVudHMvdGFibGUnO1xuaW1wb3J0IHtjcmVhdGVDYXJkc1dpdGhFdmVudHMgYXMgY3JlYXRlQ2FyZHN9IGZyb20gJy4uL21vZGVscy13aXRoLWV2ZW50cy9jcmVhdGUtY2FyZHMnO1xuaW1wb3J0IHtyYW5kb21pemVBcnJheX0gZnJvbSAnLi4vbW9kZWxzL2NyZWF0ZS1jYXJkcyc7XG5pbXBvcnQge2VtaXR0ZXIgYXMgbW9kZWxFdmVudEVtaXR0ZXJ9IGZyb20gJy4uL21vZGVscy13aXRoLWV2ZW50cy9lbWl0dGVyJztcbmltcG9ydCB7Sm9iUXVldWV9IGZyb20gJy4uL2pvYi1xdWV1ZSc7XG4vLyBpbXBvcnQge2RlYm91bmNlfSBmcm9tICd1bmRlcnNjb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lXG57XG4gIHByaXZhdGUgX190YWJsZTpUYWJsZSB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfX3RhYmxlR2FtZU9iamVjdDpUYWJsZUdhbWVPYmplY3QgfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX2NhcmRBbmltYXRpb25RdWV1ZTpKb2JRdWV1ZTx2b2lkPiA9IG5ldyBKb2JRdWV1ZTx2b2lkPigpO1xuICBwcml2YXRlIF9oaW50QW5pbWF0aW9uUXVldWU6Sm9iUXVldWU8dm9pZD4gPSBuZXcgSm9iUXVldWU8dm9pZD4oKTtcbiAgLy8gcHJpdmF0ZSBfZHJhZ1BpbGVBbmltYXRpb25RdWV1ZTpQcm9taXNlUXVldWU8dm9pZD4gPSBuZXcgUHJvbWlzZVF1ZXVlPHZvaWQ+KCk7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKCdtYWluJyk7XG4gIH1cblxuICBwcml2YXRlIGdldCBfdGFibGUgKCkge1xuICAgIGlmICghdGhpcy5fX3RhYmxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RhYmxlIGlzIG5vdCByZWFkeS4nKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX190YWJsZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF90YWJsZUdhbWVPYmplY3QgKCkge1xuICAgIGlmICghdGhpcy5fX3RhYmxlR2FtZU9iamVjdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUYWJsZSBHYW1lIE9iamVjdCBpcyBub3QgcmVhZHkuJyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9fdGFibGVHYW1lT2JqZWN0O1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlICgpXG4gIHtcbiAgICB0aGlzLl9fdGFibGUgPSBuZXcgVGFibGUoe1xuICAgICAgbnVtYmVyT2ZUYWJsZWF1UGlsZXM6IDEwLFxuICAgICAgbnVtYmVyT2ZEcmF3UGlsZXM6IDUsXG4gICAgICBjYXJkczogY3JlYXRlQ2FyZHMoe1xuICAgICAgICBudW1iZXJPZkRlY2tzVXNlZDogNCxcbiAgICAgICAgbnVtYmVyT2ZTdWl0czogMlxuICAgICAgfSlcbiAgICB9KTtcblxuICAgIHRoaXMuX190YWJsZUdhbWVPYmplY3QgPSBuZXcgVGFibGVHYW1lT2JqZWN0KHtcbiAgICAgIHNjZW5lOiB0aGlzLFxuICAgICAgZGVja1BpbGVJZDogdGhpcy5fdGFibGUuZGVja1BpbGUuaWQsXG4gICAgICBkcmF3UGlsZXNJZHM6IHRoaXMuX3RhYmxlLmRyYXdQaWxlcy5tYXAocCA9PiBwLmlkKSxcbiAgICAgIHRhYmxlYXVQaWxlc0lkczogdGhpcy5fdGFibGUudGFibGVhdVBpbGVzLm1hcChwID0+IHAuaWQpLFxuICAgICAgZGlzY2FyZFBpbGVzSWRzOiB0aGlzLl90YWJsZS5kaXNjYXJkUGlsZXMubWFwKHAgPT4gcC5pZCksXG4gICAgICBkcmFnUGlsZUlkOiBcImRyYWctcGlsZVwiLFxuICAgICAgaGludFBpbGVJZDogXCJoaW50LXBpbGVcIixcbiAgICAgIGNhcmRHYW1lT2JqZWN0czogdGhpcy5fdGFibGUuY2FyZHMubWFwKGNhcmQgPT4gbmV3IENhcmRHYW1lT2JqZWN0KHtcbiAgICAgICAgc2NlbmU6IHRoaXMsXG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHN1aXQ6IGNhcmQuc3VpdCxcbiAgICAgICAgcmFuazogY2FyZC5yYW5rLFxuICAgICAgICBuYW1lOiBjYXJkLmlkXG4gICAgICB9KSlcbiAgICB9KTtcblxuICAgIHRoaXMuY2hpbGRyZW4uYWRkKHRoaXMuX3RhYmxlR2FtZU9iamVjdCk7XG5cbiAgICBjb25zdCB1bmRvQnV0dG9uID0gbmV3IEJ1dHRvbih7XG4gICAgICBzY2VuZTogdGhpcyxcbiAgICAgIHg6IDEwMCxcbiAgICAgIHk6IDYwMCxcbiAgICAgIGxhYmVsOiAnVU5ETydcbiAgICB9KTtcbiAgICB1bmRvQnV0dG9uLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcbiAgICAgIGlmICh1bmRvQnV0dG9uLmFjdGl2ZSkgdGhpcy5fdGFibGUudW5kbygpO1xuICAgIH0pO1xuICAgIHRoaXMuY2hpbGRyZW4uYWRkKHVuZG9CdXR0b24pO1xuICAgIHRoaXMuX2NhcmRBbmltYXRpb25RdWV1ZS5vblF1ZXVlU3RhcnQoKCkgPT4ge1xuICAgICAgdW5kb0J1dHRvbi5zZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgdW5kb0J1dHRvbi5zZXRBbHBoYSgwLjUpO1xuICAgIH0pO1xuICAgIHRoaXMuX2NhcmRBbmltYXRpb25RdWV1ZS5vblF1ZXVlRW5kKCgpID0+IHtcbiAgICAgIHVuZG9CdXR0b24uc2V0QWN0aXZlKHRydWUpO1xuICAgICAgdW5kb0J1dHRvbi5zZXRBbHBoYSgxKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IHVLZXkgPSB0aGlzLmlucHV0LmtleWJvYXJkLmFkZEtleShQaGFzZXIuSW5wdXQuS2V5Ym9hcmQuS2V5Q29kZXMuVSk7XG4gICAgdUtleS5vbignZG93bicsIChldmVudDpLZXlib2FyZEV2ZW50KSA9PiB7XG4gICAgICBpZiAodW5kb0J1dHRvbi5hY3RpdmUpIHRoaXMuX3RhYmxlLnVuZG8oKTtcbiAgICB9KTtcblxuICAgIGNvbnN0IGhpbnRCdXR0b24gPSBuZXcgQnV0dG9uKHtcbiAgICAgIHNjZW5lOiB0aGlzLFxuICAgICAgeDogMjUwLFxuICAgICAgeTogNjAwLFxuICAgICAgbGFiZWw6ICdISU5UJ1xuICAgIH0pO1xuICAgIGhpbnRCdXR0b24ub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xuICAgICAgaWYgKGhpbnRCdXR0b24uYWN0aXZlKSB7XG4gICAgICAgIHRoaXMuc2hvd0hpbnRzKCk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgdGhpcy5jaGlsZHJlbi5hZGQoaGludEJ1dHRvbik7XG4gICAgdGhpcy5fY2FyZEFuaW1hdGlvblF1ZXVlLm9uUXVldWVTdGFydCgoKSA9PiB7XG4gICAgICBoaW50QnV0dG9uLnNldEFjdGl2ZShmYWxzZSk7XG4gICAgICBoaW50QnV0dG9uLnNldEFscGhhKDAuNSk7XG4gICAgfSk7XG4gICAgdGhpcy5fY2FyZEFuaW1hdGlvblF1ZXVlLm9uUXVldWVFbmQoKCkgPT4ge1xuICAgICAgaGludEJ1dHRvbi5zZXRBY3RpdmUodHJ1ZSk7XG4gICAgICBoaW50QnV0dG9uLnNldEFscGhhKDEpO1xuICAgIH0pO1xuICAgIHRoaXMuX2hpbnRBbmltYXRpb25RdWV1ZS5vblF1ZXVlU3RhcnQoKCkgPT4ge1xuICAgICAgaGludEJ1dHRvbi5zZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgaGludEJ1dHRvbi5zZXRBbHBoYSgwLjUpO1xuICAgIH0pO1xuICAgIHRoaXMuX2hpbnRBbmltYXRpb25RdWV1ZS5vblF1ZXVlRW5kKCgpID0+IHtcbiAgICAgIGhpbnRCdXR0b24uc2V0QWN0aXZlKHRydWUpO1xuICAgICAgaGludEJ1dHRvbi5zZXRBbHBoYSgxKTtcbiAgICB9KTtcbiAgICB0aGlzLl9oaW50QW5pbWF0aW9uUXVldWUub25RdWV1ZUNhbmNlbCgoKSA9PiB7XG4gICAgICBoaW50QnV0dG9uLnNldEFjdGl2ZSh0cnVlKTtcbiAgICAgIGhpbnRCdXR0b24uc2V0QWxwaGEoMSk7XG4gICAgfSk7XG5cbiAgICBnYW1lT2JqZWN0RXZlbnRFbWl0dGVyLm9uKFwiQ0FSRF9QT0lOVEVST1ZFUlwiLCB0aGlzLm9uQ2FyZFBvaW50ZXJPdmVyLmJpbmQodGhpcykpO1xuICAgIGdhbWVPYmplY3RFdmVudEVtaXR0ZXIub24oXCJDQVJEX1BPSU5URVJPVVRcIiwgdGhpcy5vbkNhcmRQb2ludGVyT3V0LmJpbmQodGhpcykpO1xuICAgIGdhbWVPYmplY3RFdmVudEVtaXR0ZXIub24oXCJDQVJEX1BPSU5URVJET1dOXCIsIHRoaXMub25DYXJkUG9pbnRlckRvd24uYmluZCh0aGlzKSk7XG4gICAgZ2FtZU9iamVjdEV2ZW50RW1pdHRlci5vbihcIkNBUkRfRFJBR1NUQVJUXCIsIHRoaXMub25DYXJkRHJhZ1N0YXJ0LmJpbmQodGhpcykpO1xuICAgIGdhbWVPYmplY3RFdmVudEVtaXR0ZXIub24oXCJDQVJEX0RSQUdcIiwgdGhpcy5vbkNhcmREcmFnLmJpbmQodGhpcykpO1xuICAgIGdhbWVPYmplY3RFdmVudEVtaXR0ZXIub24oXCJDQVJEX0RST1BcIiwgdGhpcy5vbkNhcmREcm9wLmJpbmQodGhpcykpO1xuICAgIGdhbWVPYmplY3RFdmVudEVtaXR0ZXIub24oXCJDQVJEX0RSQUdFTkRcIiwgdGhpcy5vbkNhcmREcmFnRW5kLmJpbmQodGhpcykpO1xuICAgIG1vZGVsRXZlbnRFbWl0dGVyLm9uKFwiTU9WRV9DQVJEU19CRVRXRUVOX1BJTEVTXCIsIHRoaXMub25Nb3ZlQ2FyZHNCZXR3ZWVuUGlsZXMuYmluZCh0aGlzKSk7XG4gICAgbW9kZWxFdmVudEVtaXR0ZXIub24oXCJGTElQX09WRVJfQ0FSRFwiLCB0aGlzLm9uRmxpcE92ZXJDYXJkLmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5fdGFibGUuc3RhcnRHYW1lKCk7XG5cbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVyZG93bicsIChwb2ludGVyOlBoYXNlci5JbnB1dC5Qb2ludGVyKSA9PiB7XG4gICAgICBpZighdGhpcy5pbnB1dC5oaXRUZXN0UG9pbnRlcihwb2ludGVyKS5pbmNsdWRlcyhoaW50QnV0dG9uKSlcbiAgICAgIHtcbiAgICAgICAgdGhpcy5faGludEFuaW1hdGlvblF1ZXVlLmNhbmNlbCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb25DYXJkUG9pbnRlck92ZXIgKHtjYXJkR2FtZU9iamVjdCwgcG9pbnRlcn06e2NhcmRHYW1lT2JqZWN0OkNhcmRHYW1lT2JqZWN0LCBwb2ludGVyOlBoYXNlci5JbnB1dC5Qb2ludGVyfSlcbiAge1xuICAgIGlmICghdGhpcy5fY2FyZEFuaW1hdGlvblF1ZXVlLmlzUHJvY2Vzc2luZykge1xuICAgICAgdGhpcy5hZGRIaWdobGlnaHRUb0NhcmRHYW1lT2JqZWN0KHtjYXJkR2FtZU9iamVjdH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jYXJkQW5pbWF0aW9uUXVldWUuYWRkKGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYodGhpcy5pbnB1dC5oaXRUZXN0UG9pbnRlcihwb2ludGVyKVswXSA9PT0gY2FyZEdhbWVPYmplY3QpIHtcbiAgICAgICAgICB0aGlzLmFkZEhpZ2hsaWdodFRvQ2FyZEdhbWVPYmplY3Qoe2NhcmRHYW1lT2JqZWN0fSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFkZEhpZ2hsaWdodFRvQ2FyZEdhbWVPYmplY3QgKHtjYXJkR2FtZU9iamVjdH06e2NhcmRHYW1lT2JqZWN0OkNhcmRHYW1lT2JqZWN0fSlcbiAge1xuICAgIGNvbnN0IHRhcmdldFBpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnlDYXJkR2FtZU9iamVjdE5hbWUoY2FyZEdhbWVPYmplY3QubmFtZSk7XG5cbiAgICBpZiAoY2FyZEdhbWVPYmplY3QuaXNGYWNlVXBcbiAgICAgICYmIHRoaXMuX3RhYmxlR2FtZU9iamVjdC50YWJsZWF1UGlsZUdhbWVPYmplY3RzLmluY2x1ZGVzKHRhcmdldFBpbGVHYW1lT2JqZWN0KSlcbiAgICB7XG4gICAgICBjb25zdCB0YXJnZXRQaWxlID0gdGhpcy5fdGFibGUuZ2V0UGlsZUJ5Q2FyZElkKGNhcmRHYW1lT2JqZWN0Lm5hbWUpO1xuICAgICAgY29uc3QgZnJvbVBpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnlOYW1lKHRhcmdldFBpbGUuaWQpO1xuICAgICAgY29uc3Qgc2l6ZSA9IGZyb21QaWxlR2FtZU9iamVjdC5jYXJkR2FtZU9iamVjdHMubGVuZ3RoIC0gZnJvbVBpbGVHYW1lT2JqZWN0LmNhcmRHYW1lT2JqZWN0cy5pbmRleE9mKGNhcmRHYW1lT2JqZWN0KTtcbiAgICAgIGlmIChQaWxlLmNoZWNrSWZDYXJkc0FyZURlc2NlbmRpbmcoe2NhcmRzOiB0YXJnZXRQaWxlLmNhcmRzLnNsaWNlKC1zaXplKSwgZmFjZVVwOiB0cnVlLCBpblN1aXQ6IHRydWV9KSlcbiAgICAgIHtcbiAgICAgICAgY2FyZEdhbWVPYmplY3QuYWRkSGlnaGxpZ2h0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuX3RhYmxlLmZyb250RHJhd1BpbGUpXG4gICAge1xuICAgICAgY29uc3QgZnJvbnREcmF3UGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZ2V0UGlsZUdhbWVPYmplY3RCeU5hbWUodGhpcy5fdGFibGUuZnJvbnREcmF3UGlsZS5pZCk7XG4gICAgICBpZiAodGFyZ2V0UGlsZUdhbWVPYmplY3QgPT09IGZyb250RHJhd1BpbGVHYW1lT2JqZWN0KVxuICAgICAge1xuICAgICAgICBjYXJkR2FtZU9iamVjdC5hZGRIaWdobGlnaHQoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNhcmRQb2ludGVyT3V0ICh7Y2FyZEdhbWVPYmplY3R9OntjYXJkR2FtZU9iamVjdDpDYXJkR2FtZU9iamVjdH0pXG4gIHtcbiAgICBjYXJkR2FtZU9iamVjdC5yZW1vdmVIaWdobGlnaHQoKTtcbiAgfVxuXG4gIG9uQ2FyZFBvaW50ZXJEb3duICh7Y2FyZEdhbWVPYmplY3R9OntjYXJkR2FtZU9iamVjdDpDYXJkR2FtZU9iamVjdH0pXG4gIHtcbiAgICBpZiAoIWNhcmRHYW1lT2JqZWN0LmlzSGlnaExpZ2h0ZWQpIHJldHVybjtcbiAgICBjb25zdCB0YXJnZXRQaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5nZXRQaWxlR2FtZU9iamVjdEJ5Q2FyZEdhbWVPYmplY3ROYW1lKGNhcmRHYW1lT2JqZWN0Lm5hbWUpO1xuICAgIGlmICh0aGlzLl90YWJsZS5mcm9udERyYXdQaWxlKVxuICAgIHtcbiAgICAgIGNvbnN0IGZyb250RHJhd1BpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnlOYW1lKHRoaXMuX3RhYmxlLmZyb250RHJhd1BpbGUuaWQpO1xuICAgICAgaWYgKGZyb250RHJhd1BpbGVHYW1lT2JqZWN0ID09PSB0YXJnZXRQaWxlR2FtZU9iamVjdClcbiAgICAgIHtcbiAgICAgICAgdGhpcy5fdGFibGUuZGVhbENhcmRzRnJvbURyYXdQaWxlKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DYXJkRHJhZ1N0YXJ0ICh7Y2FyZEdhbWVPYmplY3R9OntjYXJkR2FtZU9iamVjdDpDYXJkR2FtZU9iamVjdH0pXG4gIHtcbiAgICBpZiAoIWNhcmRHYW1lT2JqZWN0LmlzSGlnaExpZ2h0ZWQpIHJldHVybjtcblxuICAgIGNvbnN0IHRhcmdldFBpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnlDYXJkR2FtZU9iamVjdE5hbWUoY2FyZEdhbWVPYmplY3QubmFtZSk7XG4gICAgY29uc3QgZHJhZ1BpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmRyYWdQaWxlR2FtZU9iamVjdDtcblxuICAgIGlmIChjYXJkR2FtZU9iamVjdC5pc0ZhY2VVcFxuICAgICAgJiYgdGhpcy5fdGFibGVHYW1lT2JqZWN0LnRhYmxlYXVQaWxlR2FtZU9iamVjdHMuaW5jbHVkZXModGFyZ2V0UGlsZUdhbWVPYmplY3QpXG4gICAgICAmJiAhZHJhZ1BpbGVHYW1lT2JqZWN0LmFjdGl2ZSlcbiAgICB7XG4gICAgICBjb25zdCB0YXJnZXRQaWxlID0gdGhpcy5fdGFibGUuZ2V0UGlsZUJ5Q2FyZElkKGNhcmRHYW1lT2JqZWN0Lm5hbWUpO1xuICAgICAgY29uc3QgZnJvbVBpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnlOYW1lKHRhcmdldFBpbGUuaWQpO1xuICAgICAgY29uc3Qgc2l6ZSA9IGZyb21QaWxlR2FtZU9iamVjdC5jYXJkR2FtZU9iamVjdHMubGVuZ3RoIC0gZnJvbVBpbGVHYW1lT2JqZWN0LmNhcmRHYW1lT2JqZWN0cy5pbmRleE9mKGNhcmRHYW1lT2JqZWN0KTtcblxuICAgICAgaWYgKFBpbGUuY2hlY2tJZkNhcmRzQXJlRGVzY2VuZGluZyh7Y2FyZHM6IHRhcmdldFBpbGUuY2FyZHMuc2xpY2UoLXNpemUpLCBmYWNlVXA6IHRydWUsIGluU3VpdDogdHJ1ZX0pKVxuICAgICAge1xuICAgICAgICBjb25zdCBkcmFnUGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZHJhZ1BpbGVHYW1lT2JqZWN0O1xuICAgICAgICBjb25zdCB5ID0gY2FyZEdhbWVPYmplY3QueTtcbiAgICAgICAgZHJhZ1BpbGVHYW1lT2JqZWN0LnNldEFjdGl2ZSh0cnVlKTtcbiAgICAgICAgdGhpcy5fdGFibGVHYW1lT2JqZWN0LmJyaW5nVG9Ub3AoZHJhZ1BpbGVHYW1lT2JqZWN0KTtcbiAgICAgICAgZHJhZ1BpbGVHYW1lT2JqZWN0LnggPSBmcm9tUGlsZUdhbWVPYmplY3QueDtcbiAgICAgICAgZHJhZ1BpbGVHYW1lT2JqZWN0LnkgPSBmcm9tUGlsZUdhbWVPYmplY3QueSArIHk7XG4gICAgICAgIGRyYWdQaWxlR2FtZU9iamVjdC5wbGFjZUNhcmRHYW1lT2JqZWN0cyh7Y2FyZEdhbWVPYmplY3RzOiBmcm9tUGlsZUdhbWVPYmplY3QuZHJhd0Zyb250Q2FyZEdhbWVPYmplY3RzKHtzaXplfSl9KTtcbiAgICAgICAgdGhpcy5fY2FyZEFuaW1hdGlvblF1ZXVlLmFkZChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZHJhZ1BpbGVHYW1lT2JqZWN0LmFkanVzdENhcmRHYW1lT2JqZWN0UG9zaXRpb25zV2l0aEFuaW1hdGlvbigpLFxuICAgICAgICAgICAgZHJhZ1BpbGVHYW1lT2JqZWN0LmV4cGFuZFdpdGhBbmltYXRpb24oKVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2FyZERyYWcgKHtwb2ludGVyLCBjYXJkR2FtZU9iamVjdH06e3BvaW50ZXI6UGhhc2VyLklucHV0LlBvaW50ZXIsIGNhcmRHYW1lT2JqZWN0OkNhcmRHYW1lT2JqZWN0fSlcbiAge1xuICAgIGlmICghY2FyZEdhbWVPYmplY3QuaXNIaWdoTGlnaHRlZCkgcmV0dXJuO1xuXG4gICAgY29uc3QgdGFyZ2V0UGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZ2V0UGlsZUdhbWVPYmplY3RCeUNhcmRHYW1lT2JqZWN0TmFtZShjYXJkR2FtZU9iamVjdC5uYW1lKTtcblxuICAgIGNvbnN0IGRyYWdQaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5kcmFnUGlsZUdhbWVPYmplY3Q7XG4gICAgaWYgKHRhcmdldFBpbGVHYW1lT2JqZWN0ID09PSBkcmFnUGlsZUdhbWVPYmplY3QgJiYgZHJhZ1BpbGVHYW1lT2JqZWN0LmFjdGl2ZSlcbiAgICB7XG4gICAgICBjb25zdCBkZWx0YVggPSBwb2ludGVyLnggLSBwb2ludGVyLnByZXZQb3NpdGlvbi54O1xuICAgICAgY29uc3QgZGVsdGFZID0gcG9pbnRlci55IC0gcG9pbnRlci5wcmV2UG9zaXRpb24ueTtcbiAgICAgIGRyYWdQaWxlR2FtZU9iamVjdC54ICs9IGRlbHRhWDtcbiAgICAgIGRyYWdQaWxlR2FtZU9iamVjdC55ICs9IGRlbHRhWTtcbiAgICB9XG4gIH1cblxuICBvbkNhcmREcm9wICh7em9uZSwgY2FyZEdhbWVPYmplY3R9Ont6b25lOlBoYXNlci5HYW1lT2JqZWN0cy5ab25lLCBjYXJkR2FtZU9iamVjdDpDYXJkR2FtZU9iamVjdH0pXG4gIHtcbiAgICBjb25zdCB0YXJnZXRQaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5nZXRQaWxlR2FtZU9iamVjdEJ5Q2FyZEdhbWVPYmplY3ROYW1lKGNhcmRHYW1lT2JqZWN0Lm5hbWUpO1xuICAgIGNvbnN0IGRyYWdQaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5kcmFnUGlsZUdhbWVPYmplY3Q7XG4gICAgaWYgKHRhcmdldFBpbGVHYW1lT2JqZWN0ID09PSBkcmFnUGlsZUdhbWVPYmplY3QgJiYgZHJhZ1BpbGVHYW1lT2JqZWN0LmFjdGl2ZSlcbiAgICB7XG4gICAgICBjb25zdCBmcm9tUGlsZSA9IHRoaXMuX3RhYmxlLmdldFBpbGVCeUNhcmRJZChjYXJkR2FtZU9iamVjdC5uYW1lKTtcbiAgICAgIGNvbnN0IGZyb21QaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5nZXRQaWxlR2FtZU9iamVjdEJ5TmFtZShmcm9tUGlsZS5pZCk7XG4gICAgICBjb25zdCB0b1BpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnkocCA9PiBwLnpvbmUgPT09IHpvbmUpO1xuICAgICAgY29uc3QgdG9QaWxlID0gdGhpcy5fdGFibGUuZ2V0UGlsZUJ5SWQodG9QaWxlR2FtZU9iamVjdC5uYW1lKTtcbiAgICAgIGNvbnN0IHNpemUgPSBkcmFnUGlsZUdhbWVPYmplY3QuY2FyZEdhbWVPYmplY3RzLmxlbmd0aDtcbiAgICAgIGNvbnN0IGNhcmRHYW1lT2JqZWN0cyA9IGRyYWdQaWxlR2FtZU9iamVjdC5kcmF3RnJvbnRDYXJkR2FtZU9iamVjdHMoe3NpemV9KTtcbiAgICAgIGZyb21QaWxlR2FtZU9iamVjdC5wbGFjZUNhcmRHYW1lT2JqZWN0cyh7Y2FyZEdhbWVPYmplY3RzfSk7XG5cbiAgICAgIGNvbnN0IF9jYXJkcyA9IGNhcmRHYW1lT2JqZWN0cy5tYXAoY09iaiA9PiB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLl90YWJsZS5jYXJkcy5maW5kKGMgPT4gY09iai5uYW1lID09PSBjLmlkKTtcbiAgICAgICAgaWYgKCFjYXJkKSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGNvcnJlc3BvbmRpbmcgY2FyZHMuXCIpO1xuICAgICAgICByZXR1cm4gY2FyZDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXRvUGlsZS5mcm9udENhcmRcbiAgICAgICAgfHwgUGlsZS5jaGVja0lmQ2FyZHNBcmVEZXNjZW5kaW5nKHtjYXJkczogW3RvUGlsZS5mcm9udENhcmQsIC4uLl9jYXJkc10sIGZhY2VVcDogdHJ1ZX0pKVxuICAgICAge1xuICAgICAgICB0aGlzLl90YWJsZS5tb3ZlQ2FyZEJldHdlZW5UYWJsZWF1UGlsZXMoe1xuICAgICAgICAgIHRvOiB0b1BpbGUsXG4gICAgICAgICAgZnJvbTogZnJvbVBpbGUsXG4gICAgICAgICAgc2l6ZVxuICAgICAgICB9KTtcbiAgICAgICAgZHJhZ1BpbGVHYW1lT2JqZWN0LnNldEFjdGl2ZShmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jYXJkQW5pbWF0aW9uUXVldWUuYWRkKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBhd2FpdCBmcm9tUGlsZUdhbWVPYmplY3QuYWRqdXN0Q2FyZEdhbWVPYmplY3RQb3NpdGlvbnNXaXRoQW5pbWF0aW9uKCk7XG4gICAgICAgICAgZHJhZ1BpbGVHYW1lT2JqZWN0LnNldEFjdGl2ZShmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2FyZERyYWdFbmQgKHtjYXJkR2FtZU9iamVjdH06e2NhcmRHYW1lT2JqZWN0OkNhcmRHYW1lT2JqZWN0fSlcbiAge1xuICAgIGNvbnN0IHRhcmdldFBpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnlDYXJkR2FtZU9iamVjdE5hbWUoY2FyZEdhbWVPYmplY3QubmFtZSk7XG4gICAgY29uc3QgZHJhZ1BpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmRyYWdQaWxlR2FtZU9iamVjdDtcbiAgICBpZiAodGFyZ2V0UGlsZUdhbWVPYmplY3QgPT09IGRyYWdQaWxlR2FtZU9iamVjdCAmJiBkcmFnUGlsZUdhbWVPYmplY3QuYWN0aXZlKVxuICAgIHtcbiAgICAgIGNvbnN0IHNpemUgPSBkcmFnUGlsZUdhbWVPYmplY3QuY2FyZEdhbWVPYmplY3RzLmxlbmd0aDtcbiAgICAgIGNvbnN0IGZyb21QaWxlID0gdGhpcy5fdGFibGUuZ2V0UGlsZUJ5Q2FyZElkKGNhcmRHYW1lT2JqZWN0Lm5hbWUpO1xuICAgICAgY29uc3QgZnJvbVBpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnlOYW1lKGZyb21QaWxlLmlkKTtcbiAgICAgIGNvbnN0IGNhcmRHYW1lT2JqZWN0cyA9IGRyYWdQaWxlR2FtZU9iamVjdC5kcmF3RnJvbnRDYXJkR2FtZU9iamVjdHMoe3NpemV9KTtcbiAgICAgIGZyb21QaWxlR2FtZU9iamVjdC5wbGFjZUNhcmRHYW1lT2JqZWN0cyh7Y2FyZEdhbWVPYmplY3RzfSk7XG4gICAgICB0aGlzLl9jYXJkQW5pbWF0aW9uUXVldWUuYWRkKGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgZnJvbVBpbGVHYW1lT2JqZWN0LmFkanVzdENhcmRHYW1lT2JqZWN0UG9zaXRpb25zV2l0aEFuaW1hdGlvbigpO1xuICAgICAgICBkcmFnUGlsZUdhbWVPYmplY3Quc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uTW92ZUNhcmRzQmV0d2VlblBpbGVzICh7ZnJvbSwgdG8sIHNpemV9Ontmcm9tOlBpbGUsIHRvOlBpbGUsIHNpemU6bnVtYmVyfSkge1xuICAgIGNvbnN0IGZyb21QaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5nZXRQaWxlR2FtZU9iamVjdEJ5TmFtZShmcm9tLmlkKTtcbiAgICBjb25zdCB0b1BpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnlOYW1lKHRvLmlkKTtcblxuICAgIHRoaXMuX2NhcmRBbmltYXRpb25RdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgY2FyZEdhbWVPYmplY3RzID0gZnJvbVBpbGVHYW1lT2JqZWN0LmRyYXdGcm9udENhcmRHYW1lT2JqZWN0cyh7c2l6ZX0pO1xuICAgICAgdG9QaWxlR2FtZU9iamVjdC5wbGFjZUNhcmRHYW1lT2JqZWN0cyh7Y2FyZEdhbWVPYmplY3RzfSk7XG4gICAgICB0aGlzLl90YWJsZUdhbWVPYmplY3QuYnJpbmdUb1RvcCh0b1BpbGVHYW1lT2JqZWN0KTtcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgdG9QaWxlR2FtZU9iamVjdC5hZGp1c3RDYXJkR2FtZU9iamVjdFBvc2l0aW9uc1dpdGhBbmltYXRpb24oKSxcbiAgICAgICAgZnJvbVBpbGVHYW1lT2JqZWN0LmFkanVzdENhcmRHYW1lT2JqZWN0UG9zaXRpb25zV2l0aEFuaW1hdGlvbigpXG4gICAgICBdKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLl90YWJsZS5pc0NsZWFyKSB7XG4gICAgICB0aGlzLl9jYXJkQW5pbWF0aW9uUXVldWUuYWRkKGFzeW5jICgpID0+IHtcbiAgICAgICAgYWxlcnQoXCJZb3UgYmVhdCB0aGUgZ2FtZSEhIVwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uRmxpcE92ZXJDYXJkICh7Y2FyZH06e2NhcmQ6Q2FyZH0pIHtcbiAgICBjb25zdCBjYXJkR2FybU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5jYXJkR2FtZU9iamVjdHMuZmluZChjID0+IGMubmFtZSA9PT0gY2FyZC5pZCk7XG4gICAgaWYgKGNhcmRHYXJtT2JqZWN0KSB7XG4gICAgICB0aGlzLl9jYXJkQW5pbWF0aW9uUXVldWUuYWRkKCgpID0+IGNhcmRHYXJtT2JqZWN0LmZsaXBPdmVyKGNhcmQuaXNGYWNlVXApKTtcbiAgICB9O1xuICB9XG5cbiAgc2hvd0hpbnRzICgpXG4gIHtcbiAgICBjb25zdCBtb3ZlcyA9IHRoaXMuX3RhYmxlLmdldFBvc3NpYmxlTW92ZXNCZXR3ZWVuVGFibGVhdVBpbGVzKCk7XG4gICAgY29uc3QgaGludFBpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmhpbnRQaWxlR2FtZU9iamVjdDtcbiAgICBjb25zdCBjbGVhckhpbnRQaWxlR2FtZU9iamVjdCA9ICgpID0+IHtcbiAgICAgIGNvbnN0IGNhcmRHYW1lT2JqZWN0cyA9IGhpbnRQaWxlR2FtZU9iamVjdFxuICAgICAgICAuZHJhd0Zyb250Q2FyZEdhbWVPYmplY3RzKHtzaXplOiBoaW50UGlsZUdhbWVPYmplY3QuY2FyZEdhbWVPYmplY3RzLmxlbmd0aH0pO1xuICAgICAgY2FyZEdhbWVPYmplY3RzLmZvckVhY2goYyA9PiBjLmRlc3Ryb3koKSk7XG4gICAgICAvLyBoaW50UGlsZUdhbWVPYmplY3QueCA9IC0xMDAwMDA7XG4gICAgICAvLyBoaW50UGlsZUdhbWVPYmplY3QueSA9IC0xMDAwMDA7XG4gICAgfTtcblxuICAgIGZvciAobGV0IHtmcm9tLCB0bywgc2l6ZX0gb2YgbW92ZXMpXG4gICAge1xuICAgICAgdGhpcy5faGludEFuaW1hdGlvblF1ZXVlLmFkZChhc3luYyAob25RdWV1ZUNhbmNlbCkgPT5cbiAgICAgIHtcbiAgICAgICAgY29uc3QgZnJvbVBpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnlOYW1lKGZyb20uaWQpO1xuICAgICAgICBjb25zdCB0b1BpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnlOYW1lKHRvLmlkKTtcbiAgICAgICAgY29uc3QgZnJvbnRDYXJkR2FtZU9iamVjdHMgPSBmcm9tUGlsZUdhbWVPYmplY3QuZ2V0RnJvbnRHYW1lT2JqZWN0cyh7c2l6ZX0pO1xuXG4gICAgICAgIGhpbnRQaWxlR2FtZU9iamVjdC54ID0gZnJvbVBpbGVHYW1lT2JqZWN0Lng7XG4gICAgICAgIGhpbnRQaWxlR2FtZU9iamVjdC55ID0gZnJvbVBpbGVHYW1lT2JqZWN0LnkgKyBmcm9udENhcmRHYW1lT2JqZWN0c1swXS55O1xuICAgICAgICBoaW50UGlsZUdhbWVPYmplY3QucGxhY2VDYXJkR2FtZU9iamVjdHMoe2NhcmRHYW1lT2JqZWN0czogZnJvbnRDYXJkR2FtZU9iamVjdHMubWFwKChjKSA9PiB7XG4gICAgICAgICAgY29uc3QgY2FyZEdhbWVPYmplY3QgPSBuZXcgQ2FyZEdhbWVPYmplY3Qoe1xuICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgIHk6IDAsXG4gICAgICAgICAgICByYW5rOiBjLnJhbmssXG4gICAgICAgICAgICBzdWl0OiBjLnN1aXQsXG4gICAgICAgICAgICBpc0ZhY2VVcDogYy5pc0ZhY2VVcCxcbiAgICAgICAgICAgIG5hbWU6ICcnLFxuICAgICAgICAgICAgc2NlbmU6IHRoaXNcbiAgICAgICAgICB9KTtcbiAgICAgICAgICByZXR1cm4gY2FyZEdhbWVPYmplY3Q7XG4gICAgICAgIH0pfSk7XG5cbiAgICAgICAgaGludFBpbGVHYW1lT2JqZWN0LmFkanVzdENhcmRHYW1lT2JqZWN0UG9zaXRpb25zKCk7XG4gICAgICAgIGhpbnRQaWxlR2FtZU9iamVjdC5zZXRBbHBoYSgwLjgpO1xuICAgICAgICB0aGlzLl90YWJsZUdhbWVPYmplY3QuYnJpbmdUb1RvcChoaW50UGlsZUdhbWVPYmplY3QpO1xuXG4gICAgICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgICAgIGNvbnN0IHR3ZWVuID0gdGhpcy50d2VlbnMuYWRkKHtcbiAgICAgICAgICAgIHRhcmdldHM6IGhpbnRQaWxlR2FtZU9iamVjdCxcbiAgICAgICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgICAgIHg6IHRvUGlsZUdhbWVPYmplY3QueCxcbiAgICAgICAgICAgICAgeTogdG9QaWxlR2FtZU9iamVjdC55ICsgdG9QaWxlR2FtZU9iamVjdC5nZXROZXdGcm9udENhcmRHYW1lT2JqZWN0UG9zaXRpb24oKS55XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZHVyYXRpb246IDgwMCxcbiAgICAgICAgICAgIGNvbXBsZXRlRGVsYXk6IDQwMCxcbiAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICAgICAgICBjbGVhckhpbnRQaWxlR2FtZU9iamVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIG9uUXVldWVDYW5jZWwoKCkgPT4ge1xuICAgICAgICAgICAgdHdlZW4uc3RvcCgpO1xuICAgICAgICAgICAgY2xlYXJIaW50UGlsZUdhbWVPYmplY3QoKTtcbiAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG59XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vbG9nXCI6IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3QvbG9nLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90IHN5bmMgXlxcXFwuXFxcXC9sb2ckXCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYXBwXCI6IDBcbn07XG5cbnZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXG5cdFtcIi4vc3JjL2luZGV4LnRzXCIsXCJ2ZW5kb3JzXCJdLFxuXHRbXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L2luZGV4LmpzP2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiLFwidmVuZG9yc1wiXVxuXTtcbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbnZhciBjaGVja0RlZmVycmVkTW9kdWxlcyA9ICgpID0+IHtcblxufTtcbmZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCgpIHtcblx0dmFyIHJlc3VsdDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcblx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuXHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG5cdFx0fVxuXHR9XG5cdGlmKGRlZmVycmVkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gcmVzZXQgc3RhcnR1cCBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgY2FsbGVkIGFnYWluIHdoZW4gbW9yZSBzdGFydHVwIGNvZGUgaXMgYWRkZWRcblx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXG5cdH1cblx0Y2h1bmtMb2FkaW5nR2xvYmFsID0gY2h1bmtMb2FkaW5nR2xvYmFsLnNsaWNlKCk7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0xvYWRpbmdHbG9iYWwubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGNodW5rTG9hZGluZ0dsb2JhbFtpXSk7XG5cdHJldHVybiAoY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwpKCk7XG59O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lLCBleGVjdXRlTW9kdWxlc10gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG5cdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuXHR9XG5cblx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuXHRpZihleGVjdXRlTW9kdWxlcykgZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG5cblx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG5cdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3NwaWRlcl9zb2xpdGFpcmVcIl0gPSBzZWxmW1wid2VicGFja0NodW5rc3BpZGVyX3NvbGl0YWlyZVwiXSB8fCBbXTtcbnZhciBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiA9IGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7IiwiLy8gcnVuIHN0YXJ0dXBcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=