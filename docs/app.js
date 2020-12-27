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
        // const targetPile = this._table.getPileBy(pile => pile.cards.find(card => card.id === cardGameObject.name));
        var targetPile = this._table.getPileByCardId(cardGameObject.name);
        if (cardGameObject.isFaceUp
            && this._table.tableauPiles.includes(targetPile)) {
            // const fromPileGameObject = this._tableGameObject.getPileGameObjectBy(p => p.name === targetPile.id);
            var fromPileGameObject = this._tableGameObject.getPileGameObjectByName(targetPile.id);
            var size = fromPileGameObject.cardGameObjects.length - fromPileGameObject.cardGameObjects.indexOf(cardGameObject);
            if (pile_1.PileWithEvent.checkIfCardsAreDescending({ cards: targetPile.cards.slice(-size), faceUp: true, inSuit: true })) {
                cardGameObject.addHighlight();
            }
        }
        else if (this._table.frontDrawPile === targetPile) {
            cardGameObject.addHighlight();
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
        // const targetPile = this._table.getPileBy(pile => pile.cards.find(card => card.id === cardGameObject.name));
        var targetPile = this._table.getPileByCardId(cardGameObject.name);
        if (this._table.frontDrawPile === targetPile) {
            this._table.dealCardsFromDrawPile();
        }
    };
    MainScene.prototype.onCardDragStart = function (_a) {
        var _this = this;
        var cardGameObject = _a.cardGameObject;
        if (!cardGameObject.isHighLighted)
            return;
        // const targetPile = this._table.getPileBy(pile => pile.cards.find(card => card.id === cardGameObject.name));
        var targetPile = this._table.getPileByCardId(cardGameObject.name);
        var dragPileGameObject = this._tableGameObject.dragPileGameObject;
        if (cardGameObject.isFaceUp
            && this._table.tableauPiles.includes(targetPile)
            && !dragPileGameObject.active) {
            // const fromPileGameObject = this._tableGameObject.getPileGameObjectBy(p => p.name === targetPile.id);
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
            hintPileGameObject.drawFrontCardGameObjects({ size: hintPileGameObject.cardGameObjects.length });
            hintPileGameObject.x = -100000;
            hintPileGameObject.y = -100000;
        };
        var _loop_1 = function (from, to, size) {
            this_1._hintAnimationQueue.add(function (onQueueCancel) { return __awaiter(_this, void 0, void 0, function () {
                var fromPileGameObject, toPileGameObject, originalFrontCardGameObjects;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            fromPileGameObject = this._tableGameObject.getPileGameObjectByName(from.id);
                            toPileGameObject = this._tableGameObject.getPileGameObjectByName(to.id);
                            originalFrontCardGameObjects = fromPileGameObject.getFrontGameObjects({ size: size });
                            hintPileGameObject.x = fromPileGameObject.x;
                            hintPileGameObject.y = fromPileGameObject.y + originalFrontCardGameObjects[originalFrontCardGameObjects.length - 1].y;
                            hintPileGameObject.placeCardGameObjects({ cardGameObjects: originalFrontCardGameObjects.map(function (c, index) {
                                    var cardGameObject = new card_1.CardGameObjectWithEvent({
                                        x: c.x,
                                        y: c.y,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL2V2ZW50LWVtaXR0ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9nYW1lLW9iamVjdHMtd2l0aC1ldmVudHMvY2FyZC50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL2dhbWUtb2JqZWN0cy13aXRoLWV2ZW50cy9lbWl0dGVyLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvZ2FtZS1vYmplY3RzLXdpdGgtZXZlbnRzL3RhYmxlLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvZ2FtZS1vYmplY3RzL2J1dHRvbi50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL2dhbWUtb2JqZWN0cy9jYXJkLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvZ2FtZS1vYmplY3RzL3BpbGUudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9nYW1lLW9iamVjdHMvdGFibGUudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9nYW1lLW9iamVjdHMvdHJhbnNmb3JtLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9qb2ItcXVldWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMtd2l0aC1ldmVudHMvY2FyZC50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL21vZGVscy13aXRoLWV2ZW50cy9jcmVhdGUtY2FyZHMudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMtd2l0aC1ldmVudHMvZW1pdHRlci50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL21vZGVscy13aXRoLWV2ZW50cy9waWxlLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvbW9kZWxzLXdpdGgtZXZlbnRzL3RhYmxlLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvbW9kZWxzL2NhcmQudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMvY3JlYXRlLWNhcmRzLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvbW9kZWxzL3BpbGUudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMvdGFibGUudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMvdW5kb2FibGUtYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL3NjZW5lcy9tYWluLXNjZW5lLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvL1VzZXJzL2l0YW5ha2EvRG9jdW1lbnRzL1Byb2plY3RzL3NwaWRlci1zb2xpdGFpcmUvbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90fHN5bmN8bm9ucmVjdXJzaXZlfC9eXFwuXFwvbG9nJC8iLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvRkFBb0M7QUFlcEM7SUFJRTtRQUVFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxxQkFBWSxFQUFFLENBQUM7UUFDbEMsc0NBQXNDO0lBQ3hDLENBQUM7SUFFRCxvQkFBRSxHQUFGLFVBQTJCLFNBQVksRUFBRSxFQUF3QjtRQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELHFCQUFHLEdBQUgsVUFBNEIsU0FBWSxFQUFFLEVBQXdCO1FBQ2hFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsc0JBQUksR0FBSixVQUE2QixTQUFZLEVBQUUsTUFBWTtRQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDO0FBckJZLDBCQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkcEIsa0dBQWtDO0FBQ2xDLDJGQUF3RTtBQUl4RTtJQUE2QywyQ0FBYztJQUV6RCxpQ0FBYSxJQUF1QjtRQUFwQyxZQUVFLGtCQUFNLElBQUksQ0FBQyxTQVFaO1FBUEMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBQyxPQUFlLElBQUssd0JBQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBQyxjQUFjLEVBQUMsS0FBSSxFQUFFLE9BQU8sV0FBQyxDQUFDLEVBQWhFLENBQWdFLENB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V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSwrQzs7OztVQzNGQTtVQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICdldmVudHMnO1xuXG50eXBlIF9FdmVudE1hcCA9IFJlY29yZDxzdHJpbmcsIGFueT47XG50eXBlIF9FdmVudEtleTxUIGV4dGVuZHMgX0V2ZW50TWFwPiA9IHN0cmluZyAmIGtleW9mIFQ7XG50eXBlIF9FdmVudFJlY2VpdmVyPFQ+ID0gKHBhcmFtczogVCkgPT4gdm9pZDtcblxuaW50ZXJmYWNlIF9FbWl0dGVyPFQgZXh0ZW5kcyBfRXZlbnRNYXA+IHtcbiAgb248SyBleHRlbmRzIF9FdmVudEtleTxUPj5cbiAgICAoZXZlbnROYW1lOiBLLCBmbjogX0V2ZW50UmVjZWl2ZXI8VFtLXT4pOiB2b2lkO1xuICBvZmY8SyBleHRlbmRzIF9FdmVudEtleTxUPj5cbiAgICAoZXZlbnROYW1lOiBLLCBmbjogX0V2ZW50UmVjZWl2ZXI8VFtLXT4pOiB2b2lkO1xuICBlbWl0PEsgZXh0ZW5kcyBfRXZlbnRLZXk8VD4+XG4gICAgKGV2ZW50TmFtZTogSywgcGFyYW1zOiBUW0tdKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIEVtaXR0ZXI8VCBleHRlbmRzIF9FdmVudE1hcD4gaW1wbGVtZW50cyBfRW1pdHRlcjxUPlxue1xuICBwcml2YXRlIGVtaXR0ZXI7XG5cbiAgY29uc3RydWN0b3IgKClcbiAge1xuICAgIHRoaXMuZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAvLyB0aGlzLmVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKDEwMDApO1xuICB9XG5cbiAgb248SyBleHRlbmRzIF9FdmVudEtleTxUPj4oZXZlbnROYW1lOiBLLCBmbjogX0V2ZW50UmVjZWl2ZXI8VFtLXT4pIHtcbiAgICB0aGlzLmVtaXR0ZXIub24oZXZlbnROYW1lLCBmbik7XG4gIH1cblxuICBvZmY8SyBleHRlbmRzIF9FdmVudEtleTxUPj4oZXZlbnROYW1lOiBLLCBmbjogX0V2ZW50UmVjZWl2ZXI8VFtLXT4pIHtcbiAgICB0aGlzLmVtaXR0ZXIub2ZmKGV2ZW50TmFtZSwgZm4pO1xuICB9XG5cbiAgZW1pdDxLIGV4dGVuZHMgX0V2ZW50S2V5PFQ+PihldmVudE5hbWU6IEssIHBhcmFtczogVFtLXSkge1xuICAgIHRoaXMuZW1pdHRlci5lbWl0KGV2ZW50TmFtZSwgcGFyYW1zKTtcbiAgfVxufVxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xuaW1wb3J0IHtlbWl0dGVyfSBmcm9tICcuL2VtaXR0ZXInO1xuaW1wb3J0IHtDYXJkR2FtZU9iamVjdCwgQ2FyZEdhbWVPYmplY3RBcmdzfSBmcm9tIFwiLi4vZ2FtZS1vYmplY3RzL2NhcmRcIjtcblxudHlwZSBQb2ludGVyID0gUGhhc2VyLklucHV0LlBvaW50ZXI7XG5cbmV4cG9ydCBjbGFzcyBDYXJkR2FtZU9iamVjdFdpdGhFdmVudCBleHRlbmRzIENhcmRHYW1lT2JqZWN0XG57XG4gIGNvbnN0cnVjdG9yIChhcmdzOkNhcmRHYW1lT2JqZWN0QXJncylcbiAge1xuICAgIHN1cGVyKGFyZ3MpO1xuICAgIHRoaXMub24oJ3BvaW50ZXJkb3duJywgKHBvaW50ZXI6UG9pbnRlcikgPT4gZW1pdHRlci5lbWl0KFwiQ0FSRF9QT0lOVEVSRE9XTlwiLCB7Y2FyZEdhbWVPYmplY3Q6dGhpcywgcG9pbnRlcn0pKTtcbiAgICB0aGlzLm9uKCdwb2ludGVyb3ZlcicsIChwb2ludGVyOlBvaW50ZXIpID0+IGVtaXR0ZXIuZW1pdChcIkNBUkRfUE9JTlRFUk9WRVJcIiwge2NhcmRHYW1lT2JqZWN0OnRoaXMsIHBvaW50ZXJ9KSk7XG4gICAgdGhpcy5vbigncG9pbnRlcm91dCcsIChwb2ludGVyOlBvaW50ZXIpID0+IGVtaXR0ZXIuZW1pdChcIkNBUkRfUE9JTlRFUk9VVFwiLCB7Y2FyZEdhbWVPYmplY3Q6dGhpcywgcG9pbnRlcn0pKTtcbiAgICB0aGlzLm9uKCdkcmFnc3RhcnQnLCAocG9pbnRlcjpQb2ludGVyKSA9PiBlbWl0dGVyLmVtaXQoXCJDQVJEX0RSQUdTVEFSVFwiLCB7Y2FyZEdhbWVPYmplY3Q6dGhpcywgcG9pbnRlcn0pKTtcbiAgICB0aGlzLm9uKCdkcmFnJywgKHBvaW50ZXI6UG9pbnRlcikgPT4gZW1pdHRlci5lbWl0KFwiQ0FSRF9EUkFHXCIsIHtjYXJkR2FtZU9iamVjdDp0aGlzLCBwb2ludGVyfSkpO1xuICAgIHRoaXMub24oJ2Ryb3AnLCAocG9pbnRlcjpQb2ludGVyLCB6b25lOlBoYXNlci5HYW1lT2JqZWN0cy5ab25lKSA9PiBlbWl0dGVyLmVtaXQoXCJDQVJEX0RST1BcIiwge2NhcmRHYW1lT2JqZWN0OnRoaXMsIHBvaW50ZXIsIHpvbmV9KSk7XG4gICAgdGhpcy5vbignZHJhZ2VuZCcsIChwb2ludGVyOlBvaW50ZXIpID0+IGVtaXR0ZXIuZW1pdChcIkNBUkRfRFJBR0VORFwiLCB7Y2FyZEdhbWVPYmplY3Q6dGhpcywgcG9pbnRlcn0pKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtFbWl0dGVyfSBmcm9tICcuLi9ldmVudC1lbWl0dGVyJztcbmltcG9ydCB7Vmlld0V2ZW50c30gZnJvbSAnLi9ldmVudHMnO1xuXG5leHBvcnQgY29uc3QgZW1pdHRlciA9IG5ldyBFbWl0dGVyPFZpZXdFdmVudHM+KCk7XG4iLCIvLyBpbXBvcnQge2VtaXR0ZXJ9IGZyb20gJy4vZW1pdHRlcic7XG5pbXBvcnQge1RhYmxlR2FtZU9iamVjdH0gZnJvbSBcIi4uL2dhbWUtb2JqZWN0cy90YWJsZVwiO1xuXG5leHBvcnQgY2xhc3MgVGFibGVHYW1lT2JqZWN0V2l0aEV2ZW50IGV4dGVuZHMgVGFibGVHYW1lT2JqZWN0XG57XG4gIC8vIGNvbnN0cnVjdG9yIChhcmdzOiBUYWJsZUdhbWVPYmplY3RTZXR0aW5ncylcbiAgLy8ge1xuICAvLyAgIHN1cGVyKGFyZ3MpO1xuICAvL1xuICAvLyAgIHRoaXMuZHJhd1BpbGVHYW1lT2JqZWN0cy5mb3JFYWNoKHBpbGVHYW1lT2JqZWN0ID0+IHtcbiAgLy8gICAgIHBpbGVHYW1lT2JqZWN0Lm9uKFwicG9pbnRlcmRvd25cIiwgKCkgPT4ge1xuICAvLyAgICAgICBlbWl0dGVyLmVtaXQoXCJEUkFXUElMRV9QT0lOVEVSRE9XTlwiLCB7cGlsZUdhbWVPYmplY3R9KTtcbiAgLy8gICAgIH0pO1xuICAvLyAgIH0pO1xuICAvLyB9XG59XG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gXCJwaGFzZXJcIjtcblxuY29uc3Qge1xuICBUZXh0LFxuICBDb250YWluZXJcbn0gPSBQaGFzZXIuR2FtZU9iamVjdHM7XG5cbmV4cG9ydCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBDb250YWluZXJcbntcbiAgY29uc3RydWN0b3IgKHtcbiAgICBzY2VuZSxcbiAgICB4LFxuICAgIHksXG4gICAgbGFiZWxcbiAgfTp7XG4gICAgc2NlbmU6UGhhc2VyLlNjZW5lLFxuICAgIHg6bnVtYmVyLFxuICAgIHk6bnVtYmVyLFxuICAgIGxhYmVsOnN0cmluZ1xuICB9KVxuICB7XG4gICAgc3VwZXIoc2NlbmUsIHgsIHkpO1xuICAgIHRoaXMucmVuZGVyKGxhYmVsKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyIChsYWJlbDpzdHJpbmcpXG4gIHtcbiAgICBjb25zdCBzdWl0VGV4dCA9IG5ldyBUZXh0KHRoaXMuc2NlbmUsIDAsIDAsIGxhYmVsLCAge1xuICAgICAgZm9udFNpemU6IFwiMzVweFwiLFxuICAgICAgY29sb3I6ICcjMDAwMDAwJyxcbiAgICAgIGZvbnRGYW1pbHk6ICdHZW9yZ2lhLCBcIkdvdWR5IEJvb2tsZXR0ZXIgMTkxMVwiLCBUaW1lcywgc2VyaWYnXG4gICAgfSk7XG4gICAgc3VpdFRleHQueCAtPSBzdWl0VGV4dC53aWR0aCAvIDI7XG4gICAgc3VpdFRleHQueSAtPSBzdWl0VGV4dC5oZWlnaHQgLyAyO1xuICAgIHRoaXMuYWRkKHN1aXRUZXh0KTtcbiAgICB0aGlzLnNldFNpemUoc3VpdFRleHQud2lkdGgsIHN1aXRUZXh0LmhlaWdodCk7XG4gICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSgpO1xuICB9XG5cbn1cbiIsImltcG9ydCBQaGFzZXIgZnJvbSBcInBoYXNlclwiO1xuaW1wb3J0IHtTdWl0fSBmcm9tIFwiLi4vbW9kZWxzL2NhcmRcIjtcblxuY29uc3Qge1xuICBUZXh0LFxuICBSZWN0YW5nbGUsXG4gIENvbnRhaW5lclxufSA9IFBoYXNlci5HYW1lT2JqZWN0cztcblxuY29uc3QgZ2V0U3VpdFRleHQgPSAoc3VpdDpTdWl0KSA9Plxue1xuICBzd2l0Y2goc3VpdCkge1xuICAgIGNhc2UgU3VpdC5TcGFkZTpcbiAgICByZXR1cm4gJ+KZoCc7XG4gICAgY2FzZSBTdWl0LkNsdWI6XG4gICAgcmV0dXJuICfimaMnO1xuICAgIGNhc2UgU3VpdC5EaWFtb25kOlxuICAgIHJldHVybiAn4pmmJztcbiAgICBjYXNlIFN1aXQuSGVhcnQ6XG4gICAgcmV0dXJuICfimaUnO1xuICB9XG59XG5cbmNvbnN0IGdldFN1aXRDb2xvciA9IChzdWl0OlN1aXQpID0+XG57XG4gIHN3aXRjaChzdWl0KSB7XG4gICAgY2FzZSBTdWl0LlNwYWRlOlxuICAgIGNhc2UgU3VpdC5DbHViOlxuICAgIHJldHVybiAnIzAwMDAwMCc7XG4gICAgY2FzZSBTdWl0LkRpYW1vbmQ6XG4gICAgY2FzZSBTdWl0LkhlYXJ0OlxuICAgIHJldHVybiAnI2ZmMDAwMCc7XG4gIH1cbn1cblxuY29uc3QgZ2V0UmFua1RleHQgPSAocmFuazpudW1iZXIpID0+XG57XG4gIGlmIChyYW5rID09PSAxMSkge1xuICAgIHJldHVybiAnSic7XG4gIH0gZWxzZSBpZiAocmFuayA9PT0gMTIpIHtcbiAgICByZXR1cm4gJ1EnO1xuICB9IGVsc2UgaWYgKHJhbmsgPT09IDEzKSB7XG4gICAgcmV0dXJuICdLJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmFuay50b1N0cmluZygpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIENhcmRHYW1lT2JqZWN0QXJncyA9IHtcbiAgc2NlbmU6UGhhc2VyLlNjZW5lLFxuICB4Om51bWJlcixcbiAgeTpudW1iZXIsXG4gIHN1aXQ6U3VpdCxcbiAgcmFuazpudW1iZXIsXG4gIGlzRmFjZVVwPzogYm9vbGVhbixcbiAgbmFtZTpzdHJpbmdcbn07XG5cbmV4cG9ydCBjbGFzcyBDYXJkR2FtZU9iamVjdCBleHRlbmRzIENvbnRhaW5lclxue1xuICBwcml2YXRlIF9mcmFtZTpQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlIHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIF9iYWNrOlBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIgfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX3Jhbms6bnVtYmVyO1xuICBwcml2YXRlIF9zdWl0OlN1aXQ7XG4gIHByaXZhdGUgX2lzSGlnaExpZ2h0ZWQ6Ym9vbGVhbiA9IGZhbHNlO1xuXG4gIHN0YXRpYyBXSURUSDpudW1iZXIgPSA3MDtcbiAgc3RhdGljIEhFSUdIVDpudW1iZXIgPSAxMTA7XG5cbiAgY29uc3RydWN0b3IgKHtcbiAgICBzY2VuZSxcbiAgICB4LFxuICAgIHksXG4gICAgc3VpdCxcbiAgICByYW5rLFxuICAgIGlzRmFjZVVwLFxuICAgIG5hbWVcbiAgfTpDYXJkR2FtZU9iamVjdEFyZ3MpXG4gIHtcbiAgICBzdXBlcihzY2VuZSwgeCwgeSk7XG4gICAgdGhpcy5yZW5kZXIoc3VpdCwgcmFuayk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9zdWl0ID0gc3VpdDtcbiAgICB0aGlzLl9yYW5rID0gcmFuaztcbiAgICB0aGlzLmJhY2sudmlzaWJsZSA9ICFpc0ZhY2VVcDtcbiAgfVxuXG4gIGdldCBzdWl0ICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5fc3VpdDtcbiAgfVxuXG4gIGdldCByYW5rICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5fcmFuaztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGZyYW1lICgpXG4gIHtcbiAgICBpZiAoIXRoaXMuX2ZyYW1lKVxuICAgIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZnJhbWU7XG4gIH1cblxuICBwcml2YXRlIGdldCBiYWNrICgpXG4gIHtcbiAgICBpZiAoIXRoaXMuX2JhY2spXG4gICAge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9iYWNrO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIgKHN1aXQ6U3VpdCwgcmFuazpudW1iZXIpXG4gIHtcbiAgICBjb25zdCB4ID0gMDtcbiAgICBjb25zdCB5ID0gMDtcbiAgICBjb25zdCBmcmFtZSA9IG5ldyBSZWN0YW5nbGUodGhpcy5zY2VuZSwgeCwgeSwgQ2FyZEdhbWVPYmplY3QuV0lEVEgsIENhcmRHYW1lT2JqZWN0LkhFSUdIVCwgMHhmZmZmZmYpO1xuICAgIGZyYW1lLnNldFN0cm9rZVN0eWxlKDIsIDB4MDAwMDAwKTtcbiAgICB0aGlzLmFkZChmcmFtZSk7XG4gICAgdGhpcy5fZnJhbWUgPSBmcmFtZTtcblxuICAgIGNvbnN0IHJhbmtUZXh0ID0gbmV3IFRleHQodGhpcy5zY2VuZSwgeCAtIDMzLCB5IC0gNTcsICBnZXRSYW5rVGV4dChyYW5rKSArIGdldFN1aXRUZXh0KHN1aXQpLCAge1xuICAgICAgZm9udFNpemU6IFwiMjVweFwiLFxuICAgICAgY29sb3I6IGdldFN1aXRDb2xvcihzdWl0KSxcbiAgICAgIGZvbnRGYW1pbHk6ICdHZW9yZ2lhLCBcIkdvdWR5IEJvb2tsZXR0ZXIgMTkxMVwiLCBUaW1lcywgc2VyaWYnXG4gICAgfSk7XG4gICAgLy8gcmFua1RleHQueCA9IHJhbmtUZXh0LnggLSByYW5rVGV4dC53aWR0aCAvIDI7XG4gICAgdGhpcy5hZGQocmFua1RleHQpO1xuICAgIC8vIHRoaXMuc2V0QWxwaGEoMC4zKVxuXG4gICAgLy8gY29uc3Qgc3VpdFRleHQgPSBuZXcgVGV4dCh0aGlzLnNjZW5lLCB4IC0gMTQsIHkgLSA1OCwgZ2V0U3VpdFRleHQoc3VpdCksICB7XG4gICAgLy8gICBmb250U2l6ZTogXCIyNXB4XCIsXG4gICAgLy8gICBjb2xvcjogZ2V0U3VpdENvbG9yKHN1aXQpLFxuICAgIC8vICAgZm9udEZhbWlseTogJ0dlb3JnaWEsIFwiR291ZHkgQm9va2xldHRlciAxOTExXCIsIFRpbWVzLCBzZXJpZidcbiAgICAvLyB9KTtcbiAgICAvLyBzdWl0VGV4dC54ID0gc3VpdFRleHQueCAtIHN1aXRUZXh0LndpZHRoIC8gMjtcbiAgICAvLyB0aGlzLmFkZChzdWl0VGV4dCk7XG5cbiAgICAvLyBjb25zdCBzdWl0VGV4dCA9IG5ldyBUZXh0KHRoaXMuc2NlbmUsIHgsIHkgLSA0NSwgZ2V0U3VpdFRleHQoc3VpdCksICB7XG4gICAgLy8gICBmb250U2l6ZTogXCI0NXB4XCIsXG4gICAgLy8gICBjb2xvcjogZ2V0U3VpdENvbG9yKHN1aXQpLFxuICAgIC8vICAgZm9udEZhbWlseTogJ0dlb3JnaWEsIFwiR291ZHkgQm9va2xldHRlciAxOTExXCIsIFRpbWVzLCBzZXJpZidcbiAgICAvLyB9KTtcbiAgICAvLyBzdWl0VGV4dC54ID0gc3VpdFRleHQueCAtIHN1aXRUZXh0LndpZHRoIC8gMjtcbiAgICAvLyB0aGlzLmFkZChzdWl0VGV4dCk7XG4gICAgLy9cbiAgICAvLyBjb25zdCByYW5rVGV4dCA9IG5ldyBUZXh0KHRoaXMuc2NlbmUsIHgsIHkgLSAyLCAgZ2V0UmFua1RleHQocmFuayksICB7XG4gICAgLy8gICBmb250U2l6ZTogXCIzNXB4XCIsXG4gICAgLy8gICBjb2xvcjogZ2V0U3VpdENvbG9yKHN1aXQpLFxuICAgIC8vICAgZm9udEZhbWlseTogJ0dlb3JnaWEsIFwiR291ZHkgQm9va2xldHRlciAxOTExXCIsIFRpbWVzLCBzZXJpZidcbiAgICAvLyB9KTtcbiAgICAvLyByYW5rVGV4dC54ID0gcmFua1RleHQueCAtIHJhbmtUZXh0LndpZHRoIC8gMjtcbiAgICAvLyB0aGlzLmFkZChyYW5rVGV4dCk7XG5cbiAgICB0aGlzLl9iYWNrID0gbmV3IENvbnRhaW5lcih0aGlzLnNjZW5lLCB4LCB5KTtcblxuICAgIGNvbnN0IGJhY2tQYXR0ZXJuID0gbmV3IFJlY3RhbmdsZSh0aGlzLnNjZW5lLCB4LCB5LCBDYXJkR2FtZU9iamVjdC5XSURUSCAtIDIwLCBDYXJkR2FtZU9iamVjdC5IRUlHSFQgLSAyMCwgMHhhYWFhYWEpO1xuICAgIGJhY2tQYXR0ZXJuLnNldFN0cm9rZVN0eWxlKDMsIDB4YWFhYWFhKTtcbiAgICBjb25zdCBiYWNrV2hpdGUgPSBuZXcgUmVjdGFuZ2xlKHRoaXMuc2NlbmUsIHgsIHksIENhcmRHYW1lT2JqZWN0LldJRFRIIC0gMiwgQ2FyZEdhbWVPYmplY3QuSEVJR0hUIC0gMiwgMHhmZmZmZmYpO1xuICAgIHRoaXMuYmFjay5hZGQoYmFja1doaXRlKTtcbiAgICB0aGlzLmJhY2suYWRkKGJhY2tQYXR0ZXJuKTtcbiAgICB0aGlzLmFkZCh0aGlzLmJhY2spO1xuXG4gICAgdGhpcy5zZXRTaXplKENhcmRHYW1lT2JqZWN0LldJRFRILCBDYXJkR2FtZU9iamVjdC5IRUlHSFQpO1xuICAgIHRoaXMuc2V0SW50ZXJhY3RpdmUoe2RyYWdnYWJsZTogdHJ1ZX0pO1xuICB9XG5cbiAgZmxpcE92ZXIgKHVwOmJvb2xlYW4pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XG4gICAgICBjb25zdCB0aW1lbGluZSA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZVRpbWVsaW5lKCk7XG4gICAgICB0aW1lbGluZS5hZGQoe1xuICAgICAgICB0YXJnZXRzOiB0aGlzLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIHNjYWxlWDogMCxcbiAgICAgICAgfSxcbiAgICAgICAgZHVyYXRpb246IDM1LFxuICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5iYWNrLnZpc2libGUgPSAhdXA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGltZWxpbmUuYWRkKHtcbiAgICAgICAgdGFyZ2V0czogdGhpcyxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBzY2FsZVg6IDEsXG4gICAgICAgIH0sXG4gICAgICAgIGR1cmF0aW9uOiAzNSxcbiAgICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aW1lbGluZS5wbGF5KCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgaXNGYWNlVXAgKClcbiAge1xuICAgIHJldHVybiAhdGhpcy5iYWNrLnZpc2libGU7XG4gIH1cblxuICBhZGRIaWdobGlnaHQgKClcbiAge1xuICAgIHRoaXMuZnJhbWUuc2V0U3Ryb2tlU3R5bGUoMiwgMHhmZjU1ODgpO1xuICAgIHRoaXMuX2lzSGlnaExpZ2h0ZWQgPSB0cnVlO1xuICB9XG5cbiAgcmVtb3ZlSGlnaGxpZ2h0ICgpXG4gIHtcbiAgICB0aGlzLmZyYW1lLnNldFN0cm9rZVN0eWxlKDIsIDB4MDAwMDAwKTtcbiAgICB0aGlzLl9pc0hpZ2hMaWdodGVkID0gZmFsc2U7XG4gIH1cblxuICBnZXQgaXNIaWdoTGlnaHRlZCAoKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuX2lzSGlnaExpZ2h0ZWQ7XG4gIH1cbn1cbiIsImltcG9ydCBQaGFzZXIgZnJvbSBcInBoYXNlclwiO1xuaW1wb3J0IHtDYXJkR2FtZU9iamVjdH0gZnJvbSBcIi4vY2FyZFwiO1xuaW1wb3J0IHtnZXRXb3JsZFBvc2l0aW9ufSBmcm9tICcuL3RyYW5zZm9ybSc7XG5cbmV4cG9ydCB0eXBlIFBpbGVHYW1lT2JqZWN0QXJncyA9IHtcbiAgc2NlbmU6UGhhc2VyLlNjZW5lLFxuICB4Om51bWJlcixcbiAgeTpudW1iZXIsXG4gIG5hbWU6c3RyaW5nLFxuICBpc1NwcmVhZD86Ym9vbGVhbixcbiAgaXNEcm9wVGFyZ2V0Pzpib29sZWFuLFxuICBsYWJlbD86c3RyaW5nXG4gIC8vIGlzSW50ZXJhY3RpdmU/OmJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIENhcmRHYW1lT2JqZWN0QWRqdXN0ZWRQb3NpdGlvbiB7XG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyLFxuICBjYXJkR2FtZU9iamVjdDogQ2FyZEdhbWVPYmplY3Rcbn1cblxuZXhwb3J0IGNsYXNzIFBpbGVHYW1lT2JqZWN0IGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lclxue1xuICBwcml2YXRlIF9sYWJlbDpzdHJpbmc7XG4gIHByaXZhdGUgX2lzU3ByZWFkOmJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY2FyZEdhbWVPYmplY3RzOkNhcmRHYW1lT2JqZWN0W10gPSBbXTtcbiAgcHJpdmF0ZSBfem9uZTpQaGFzZXIuR2FtZU9iamVjdHMuWm9uZSB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfem9uZVJlY3Q6UGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZSB8IHVuZGVmaW5lZDtcbiAgLy8gcHJpdmF0ZSBfaXNJbnRlcmFjdGl2ZTpib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2ZhY2VEb3duQ2FyZEdhcDpudW1iZXIgPSAxNTtcbiAgcHJpdmF0ZSBfZmFjZVVwQ2FyZEdhcDpudW1iZXIgPSAyNjtcbiAgcHJpdmF0ZSBfbWF4SGVpZ2h0T2ZHYXBzOm51bWJlciA9IDIwMDtcblxuICBjb25zdHJ1Y3RvciAoe1xuICAgIHNjZW5lLFxuICAgIHgsXG4gICAgeSxcbiAgICBuYW1lLFxuICAgIGlzU3ByZWFkLFxuICAgIGlzRHJvcFRhcmdldCxcbiAgICBsYWJlbFxuICAgIC8vIGlzSW50ZXJhY3RpdmVcbiAgfTpQaWxlR2FtZU9iamVjdEFyZ3MpXG4gIHtcbiAgICBzdXBlcihzY2VuZSwgeCwgeSk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9sYWJlbCA9IGxhYmVsIHx8ICcnO1xuXG4gICAgaWYgKGlzU3ByZWFkKSB7XG4gICAgICB0aGlzLl9pc1NwcmVhZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGlzRHJvcFRhcmdldCkge1xuICAgICAgdGhpcy5fem9uZSA9IHRoaXMucmVuZGVyWm9uZSgpO1xuICAgICAgdGhpcy5fem9uZVJlY3QgPSB0aGlzLnJlbmRlclpvbmVSZWN0KCk7XG4gICAgfVxuXG4gICAgLy8gaWYgKGlzSW50ZXJhY3RpdmUpXG4gICAgLy8ge1xuICAgIC8vICAgdGhpcy5zZXRTaXplKENhcmRHYW1lT2JqZWN0LldJRFRILCBDYXJkR2FtZU9iamVjdC5IRUlHSFQpO1xuICAgIC8vICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSgpO1xuICAgIC8vICAgdGhpcy5faXNJbnRlcmFjdGl2ZSA9IHRydWU7XG4gICAgLy8gfVxuICB9XG5cbiAgZ2V0IGxhYmVsICgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFiZWw7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclpvbmUgKClcbiAge1xuICAgIGNvbnN0IHpvbmUgPSBuZXcgUGhhc2VyLkdhbWVPYmplY3RzLlpvbmUodGhpcy5zY2VuZSwgMCwgMCwgMSwgMSk7XG4gICAgdGhpcy5hZGQoem9uZSk7XG4gICAgcmV0dXJuIHpvbmU7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclpvbmVSZWN0ICgpXG4gIHtcbiAgICBjb25zdCByZWN0ID0gbmV3IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGUodGhpcy5zY2VuZSwgMCwgMCwgMSwgMSwgMHhjY2NjY2MpO1xuICAgIHRoaXMuYWRkKHJlY3QpO1xuICAgIHJldHVybiByZWN0O1xuICB9XG5cbiAgcHJpdmF0ZSByZXNpemVab25lICgpXG4gIHtcbiAgICBjb25zdCB3aWR0aCA9IENhcmRHYW1lT2JqZWN0LldJRFRIO1xuICAgIGNvbnN0IGZyb250Q2FyZEdhbWVPYmplY3QgPSB0aGlzLl9jYXJkR2FtZU9iamVjdHNbdGhpcy5fY2FyZEdhbWVPYmplY3RzLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGhlaWdodCA9IENhcmRHYW1lT2JqZWN0LkhFSUdIVCArIChmcm9udENhcmRHYW1lT2JqZWN0ID8gZnJvbnRDYXJkR2FtZU9iamVjdC55IDogMCk7XG4gICAgY29uc3QgeCA9IDA7XG4gICAgY29uc3QgeSA9IChoZWlnaHQgLyAyKSAtIChDYXJkR2FtZU9iamVjdC5IRUlHSFQgLyAyKTtcblxuICAgIGlmICh0aGlzLl96b25lKVxuICAgIHtcbiAgICAgIHRoaXMuX3pvbmUueCA9IHg7XG4gICAgICB0aGlzLl96b25lLnkgPSB5O1xuICAgICAgdGhpcy5fem9uZS53aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5fem9uZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICB0aGlzLl96b25lLnNldFJlY3RhbmdsZURyb3Bab25lKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgdGhpcy5fem9uZS5pbnB1dC5oaXRBcmVhLnNldFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICB0aGlzLl96b25lLnNldE9yaWdpbih0aGlzLl96b25lLm9yaWdpblgsIHRoaXMuX3pvbmUub3JpZ2luWSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3pvbmVSZWN0KSB7XG4gICAgICB0aGlzLl96b25lUmVjdC54ID0geDtcbiAgICAgIHRoaXMuX3pvbmVSZWN0LnkgPSB5O1xuICAgICAgdGhpcy5fem9uZVJlY3Qud2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMuX3pvbmVSZWN0LmhlaWdodCA9IGhlaWdodDtcbiAgICAgIHRoaXMuX3pvbmVSZWN0LnNldE9yaWdpbih0aGlzLl96b25lUmVjdC5vcmlnaW5YLCB0aGlzLl96b25lUmVjdC5vcmlnaW5ZKTtcbiAgICB9XG5cbiAgICAvLyBpZiAodGhpcy5faXNJbnRlcmFjdGl2ZSlcbiAgICAvLyB7XG4gICAgLy8gICB0aGlzLmlucHV0LmhpdEFyZWEuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KVxuICAgIC8vIH1cbiAgfVxuXG4gIGdldCB6b25lICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5fem9uZTtcbiAgfVxuXG4gIGdldE5ld0Zyb250Q2FyZEdhbWVPYmplY3RQb3NpdGlvbiAoKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAhdGhpcy5faXNTcHJlYWQgPyAwIDogdGhpcy5fY2FyZEdhbWVPYmplY3RzLnJlZHVjZSgocHJldiwgY2FyZEdhbWVPYmplY3QpID0+IHtcbiAgICAgICAgcmV0dXJuIHByZXYgKyAoY2FyZEdhbWVPYmplY3QuaXNGYWNlVXAgPyB0aGlzLl9mYWNlVXBDYXJkR2FwIDogdGhpcy5fZmFjZURvd25DYXJkR2FwKTtcbiAgICAgIH0sIDApXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0QWRqdXN0ZWRDYXJkR2FtZU9iamVjdFBvc2l0aW9ucyAoKVxuICB7XG5cbiAgICBpZiAoIXRoaXMuX2lzU3ByZWFkIHx8IHRoaXMuX2NhcmRHYW1lT2JqZWN0cy5sZW5ndGggPD0gMSlcbiAgICB7XG4gICAgICByZXR1cm4gdGhpcy5fY2FyZEdhbWVPYmplY3RzLm1hcCgoY2FyZEdhbWVPYmplY3QsIGkpID0+ICh7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIGRlcHRoOiBpLFxuICAgICAgICBjYXJkR2FtZU9iamVjdFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGNvbnN0IG51bWJlck9mR2FwcyA9IHRoaXMuX2NhcmRHYW1lT2JqZWN0cy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IG51bWJlck9mRmFjZVVwQ2FyZEdhcHMgPSB0aGlzLl9jYXJkR2FtZU9iamVjdHMuc2xpY2UoMCwgLTEpLnJlZHVjZSgocHJlLCBjdXIpID0+IHByZSArIChjdXIuaXNGYWNlVXAgPyAxIDogMCksIDApO1xuICAgIGNvbnN0IG51bWJlck9mRmFjZURvd25DYXJkR2FwcyA9IG51bWJlck9mR2FwcyAtIG51bWJlck9mRmFjZVVwQ2FyZEdhcHM7XG4gICAgY29uc3QgaGVpaGd0T2ZHYXBzID0gbnVtYmVyT2ZGYWNlVXBDYXJkR2FwcyAqIHRoaXMuX2ZhY2VVcENhcmRHYXAgKyBudW1iZXJPZkZhY2VEb3duQ2FyZEdhcHMgKiB0aGlzLl9mYWNlRG93bkNhcmRHYXA7XG5cbiAgICBsZXQgZ2FwT2ZGYWNlVXBDYXJkID0gdGhpcy5fZmFjZVVwQ2FyZEdhcDtcbiAgICBsZXQgZ2FwT2ZGYWNlRG93bkNhcmQgPSB0aGlzLl9mYWNlRG93bkNhcmRHYXA7XG5cbiAgICBpZiAoaGVpaGd0T2ZHYXBzID4gdGhpcy5fbWF4SGVpZ2h0T2ZHYXBzKSB7XG4gICAgICBnYXBPZkZhY2VVcENhcmQgPSB0aGlzLl9tYXhIZWlnaHRPZkdhcHMgLyAobnVtYmVyT2ZGYWNlVXBDYXJkR2FwcyArIG51bWJlck9mRmFjZURvd25DYXJkR2FwcyAqIHRoaXMuX2ZhY2VEb3duQ2FyZEdhcCAvIHRoaXMuX2ZhY2VVcENhcmRHYXApO1xuICAgICAgZ2FwT2ZGYWNlRG93bkNhcmQgPSB0aGlzLl9tYXhIZWlnaHRPZkdhcHMgLyAobnVtYmVyT2ZGYWNlRG93bkNhcmRHYXBzICsgbnVtYmVyT2ZGYWNlVXBDYXJkR2FwcyAqIHRoaXMuX2ZhY2VVcENhcmRHYXAgLyB0aGlzLl9mYWNlRG93bkNhcmRHYXApO1xuICAgIH1cblxuICAgIGxldCBvZmZzZXQgPSAwO1xuICAgIGxldCBwb3NpdGlvbnM6Q2FyZEdhbWVPYmplY3RBZGp1c3RlZFBvc2l0aW9uW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NhcmRHYW1lT2JqZWN0cy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICBjb25zdCBjYXJkR2FtZU9iamVjdCA9IHRoaXMuX2NhcmRHYW1lT2JqZWN0c1tpXTtcbiAgICAgIHBvc2l0aW9ucyA9IFsuLi5wb3NpdGlvbnMsIHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogb2Zmc2V0LFxuICAgICAgICBjYXJkR2FtZU9iamVjdFxuICAgICAgfV07XG4gICAgICBvZmZzZXQgPSBvZmZzZXQgKyAoY2FyZEdhbWVPYmplY3QuaXNGYWNlVXAgPyBnYXBPZkZhY2VVcENhcmQgOiBnYXBPZkZhY2VEb3duQ2FyZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfVxuXG4gIGFzeW5jIGFkanVzdENhcmRHYW1lT2JqZWN0UG9zaXRpb25zV2l0aEFuaW1hdGlvbiAoKVxuICB7XG4gICAgY29uc3QgcG9zaXRpb25zID0gdGhpcy5fZ2V0QWRqdXN0ZWRDYXJkR2FtZU9iamVjdFBvc2l0aW9ucygpO1xuICAgIGF3YWl0IFByb21pc2UuYWxsKHBvc2l0aW9uc1xuICAgICAgLmZpbHRlcihwb3NpdGlvbiA9PiAocG9zaXRpb24ueCAhPT0gcG9zaXRpb24uY2FyZEdhbWVPYmplY3QueCB8fCBwb3NpdGlvbi55ICE9PSBwb3NpdGlvbi5jYXJkR2FtZU9iamVjdC55KSlcbiAgICAgIC5tYXAocG9zaXRpb24gPT4gbmV3IFByb21pc2UocmVzID0+IHtcbiAgICAgICAgdGhpcy5zY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgICAgICB0YXJnZXRzOiBwb3NpdGlvbi5jYXJkR2FtZU9iamVjdCxcbiAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgeDogcG9zaXRpb24ueCxcbiAgICAgICAgICAgIHk6IHBvc2l0aW9uLnlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGR1cmF0aW9uOiA3MCxcbiAgICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiByZXMoKVxuICAgICAgICB9KTtcbiAgICB9KSkpXG4gICAgLnRoZW4oKCkgPT4gdGhpcy5yZXNpemVab25lKCkpXG4gIH1cblxuICBhZGp1c3RDYXJkR2FtZU9iamVjdFBvc2l0aW9ucyAoKVxuICB7XG4gICAgY29uc3QgcG9zaXRpb25zID0gdGhpcy5fZ2V0QWRqdXN0ZWRDYXJkR2FtZU9iamVjdFBvc2l0aW9ucygpO1xuICAgIGZvciAobGV0IHBvc2l0aW9uIG9mIHBvc2l0aW9ucylcbiAgICB7XG4gICAgICBwb3NpdGlvbi5jYXJkR2FtZU9iamVjdC54ID0gcG9zaXRpb24ueDtcbiAgICAgIHBvc2l0aW9uLmNhcmRHYW1lT2JqZWN0LnkgPSBwb3NpdGlvbi55O1xuICAgIH1cbiAgICB0aGlzLnJlc2l6ZVpvbmUoKTtcbiAgfVxuXG4gIGFzeW5jIGV4cGFuZFdpdGhBbmltYXRpb24gKClcbiAge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5zY2FsZVggPSAxO1xuICAgICAgdGhpcy5zY2FsZVkgPSAxO1xuICAgICAgdGhpcy5zY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgICAgdGFyZ2V0czogdGhpcyxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBzY2FsZVg6IDEuMSxcbiAgICAgICAgICBzY2FsZVk6IDEuMVxuICAgICAgICB9LFxuICAgICAgICBkdXJhdGlvbjogNDAsXG4gICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHJlc29sdmUoKVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwbGFjZUNhcmRHYW1lT2JqZWN0cyAoe2NhcmRHYW1lT2JqZWN0c306IHtjYXJkR2FtZU9iamVjdHM6Q2FyZEdhbWVPYmplY3RbXX0pXG4gIHtcbiAgICBjb25zdCB3b3JsZFBvc2l0aW9uID0gZ2V0V29ybGRQb3NpdGlvbih0aGlzKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjYXJkR2FtZU9iamVjdHMubGVuZ3RoOyBpbmRleCsrKVxuICAgIHtcbiAgICAgIGNvbnN0IGNhcmRHYW1lT2JqZWN0ID0gY2FyZEdhbWVPYmplY3RzW2luZGV4XTtcbiAgICAgIGNhcmRHYW1lT2JqZWN0LnggPSBjYXJkR2FtZU9iamVjdC54IC0gd29ybGRQb3NpdGlvbi54O1xuICAgICAgY2FyZEdhbWVPYmplY3QueSA9IGNhcmRHYW1lT2JqZWN0LnkgLSB3b3JsZFBvc2l0aW9uLnk7XG4gICAgICB0aGlzLmFkZChjYXJkR2FtZU9iamVjdCk7XG4gICAgfVxuXG4gICAgdGhpcy5fY2FyZEdhbWVPYmplY3RzID0gWy4uLnRoaXMuX2NhcmRHYW1lT2JqZWN0cywgLi4uY2FyZEdhbWVPYmplY3RzXTtcbiAgfVxuXG4gIGdldEZyb250R2FtZU9iamVjdHMgKHtzaXplfTp7c2l6ZTpudW1iZXJ9KVxuICB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcmRHYW1lT2JqZWN0cy5zbGljZSgtc2l6ZSk7XG4gIH1cblxuICByZW1vdmVGcm9udEdhbWVPYmplY3RzICh7c2l6ZX06e3NpemU6bnVtYmVyfSlcbiAge1xuICAgIGNvbnN0IGNhcmRHYW1lT2JqZWN0cyA9IHRoaXMuZ2V0RnJvbnRHYW1lT2JqZWN0cyh7c2l6ZX0pO1xuICAgIGNvbnN0IHdvcmxkUG9zaXRpb24gPSBnZXRXb3JsZFBvc2l0aW9uKHRoaXMpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjYXJkR2FtZU9iamVjdHMubGVuZ3RoOyBpbmRleCsrKVxuICAgIHtcbiAgICAgIGNvbnN0IGNhcmRHYW1lT2JqZWN0ID0gY2FyZEdhbWVPYmplY3RzW2luZGV4XTtcbiAgICAgIGNhcmRHYW1lT2JqZWN0LnggPSBjYXJkR2FtZU9iamVjdC54ICsgd29ybGRQb3NpdGlvbi54O1xuICAgICAgY2FyZEdhbWVPYmplY3QueSA9IGNhcmRHYW1lT2JqZWN0LnkgKyB3b3JsZFBvc2l0aW9uLnk7XG4gICAgICB0aGlzLnJlbW92ZShjYXJkR2FtZU9iamVjdCk7XG4gICAgfVxuICAgIHRoaXMuX2NhcmRHYW1lT2JqZWN0cyA9IHRoaXMuX2NhcmRHYW1lT2JqZWN0cy5zbGljZSgwLCB0aGlzLl9jYXJkR2FtZU9iamVjdHMubGVuZ3RoIC0gc2l6ZSk7XG4gICAgdGhpcy5yZXNpemVab25lKCk7XG4gIH1cblxuICBkcmF3RnJvbnRDYXJkR2FtZU9iamVjdHMgKHtzaXplfTp7c2l6ZTpudW1iZXJ9KVxuICB7XG4gICAgY29uc3QgY2FyZEdhbWVPYmplY3RzID0gdGhpcy5nZXRGcm9udEdhbWVPYmplY3RzKHtzaXplfSk7XG4gICAgdGhpcy5yZW1vdmVGcm9udEdhbWVPYmplY3RzKHtzaXplfSk7XG4gICAgcmV0dXJuIGNhcmRHYW1lT2JqZWN0cztcbiAgfVxuXG4gIGdldCBjYXJkR2FtZU9iamVjdHMgKClcbiAge1xuICAgIHJldHVybiBbLi4udGhpcy5fY2FyZEdhbWVPYmplY3RzXTtcbiAgfVxufVxuIiwiaW1wb3J0IFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XG5pbXBvcnQge0NhcmRHYW1lT2JqZWN0fSBmcm9tICcuL2NhcmQnO1xuaW1wb3J0IHtQaWxlR2FtZU9iamVjdH0gZnJvbSAnLi9waWxlJztcblxuZXhwb3J0IHR5cGUgVGFibGVHYW1lT2JqZWN0U2V0dGluZ3MgPSB7XG4gIHNjZW5lOlBoYXNlci5TY2VuZSxcbiAgZGVja1BpbGVJZDpzdHJpbmcsXG4gIGRyYXdQaWxlc0lkczpzdHJpbmdbXSxcbiAgdGFibGVhdVBpbGVzSWRzOnN0cmluZ1tdLFxuICBkaXNjYXJkUGlsZXNJZHM6c3RyaW5nW10sXG4gIGRyYWdQaWxlSWQ6c3RyaW5nLFxuICBoaW50UGlsZUlkOnN0cmluZyxcbiAgY2FyZEdhbWVPYmplY3RzOiBDYXJkR2FtZU9iamVjdFtdXG59O1xuXG5leHBvcnQgY2xhc3MgVGFibGVHYW1lT2JqZWN0IGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lclxue1xuICBwcml2YXRlIF9jYXJkR2FtZU9iamVjdHM6Q2FyZEdhbWVPYmplY3RbXSA9IFtdO1xuICBwcml2YXRlIF9waWxlR2FtZU9iamVjdHM6UGlsZUdhbWVPYmplY3RbXSA9IFtdO1xuICBwcml2YXRlIF9kZWNrUGlsZUdhbWVPYmplY3Q6UGlsZUdhbWVPYmplY3Q7XG4gIHByaXZhdGUgX2RyYXdQaWxlR2FtZU9iamVjdHM6UGlsZUdhbWVPYmplY3RbXSA9IFtdO1xuICBwcml2YXRlIF90YWJsZWF1UGlsZUdhbWVPYmplY3RzOlBpbGVHYW1lT2JqZWN0W10gPSBbXTtcbiAgcHJpdmF0ZSBfZGlzY2FyZFBpbGVHYW1lT2JqZWN0czpQaWxlR2FtZU9iamVjdFtdID0gW107XG4gIHByaXZhdGUgX2RyYWdQaWxlR2FtZU9iamVjdDpQaWxlR2FtZU9iamVjdDtcbiAgcHJpdmF0ZSBfaGludFBpbGVHYW1lT2JqZWN0OlBpbGVHYW1lT2JqZWN0O1xuXG4gIGNvbnN0cnVjdG9yICh7XG4gICAgc2NlbmUsXG4gICAgZGVja1BpbGVJZCxcbiAgICBkcmF3UGlsZXNJZHMsXG4gICAgdGFibGVhdVBpbGVzSWRzLFxuICAgIGRpc2NhcmRQaWxlc0lkcyxcbiAgICBkcmFnUGlsZUlkLFxuICAgIGhpbnRQaWxlSWQsXG4gICAgY2FyZEdhbWVPYmplY3RzXG4gIH06VGFibGVHYW1lT2JqZWN0U2V0dGluZ3MpXG4gIHtcbiAgICBzdXBlcihzY2VuZSwgMCwgMCk7XG5cbiAgICB0aGlzLl9jYXJkR2FtZU9iamVjdHMgPSBjYXJkR2FtZU9iamVjdHM7XG5cbiAgICBjb25zdCBfZGVja1BpbGUgPSBuZXcgUGlsZUdhbWVPYmplY3Qoe1xuICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICB4OjUwMCxcbiAgICAgIHk6NTAwLFxuICAgICAgbmFtZTogZGVja1BpbGVJZCxcbiAgICAgIGxhYmVsOiAnZGVjaydcbiAgICB9KTtcbiAgICB0aGlzLl9waWxlR2FtZU9iamVjdHMgPSBbLi4udGhpcy5fcGlsZUdhbWVPYmplY3RzLCBfZGVja1BpbGVdO1xuICAgIHRoaXMuX2RlY2tQaWxlR2FtZU9iamVjdCA9IF9kZWNrUGlsZTtcbiAgICB0aGlzLl9kZWNrUGlsZUdhbWVPYmplY3QucGxhY2VDYXJkR2FtZU9iamVjdHMoe2NhcmRHYW1lT2JqZWN0c30pO1xuICAgIHRoaXMuX2RlY2tQaWxlR2FtZU9iamVjdC5hZGp1c3RDYXJkR2FtZU9iamVjdFBvc2l0aW9ucygpO1xuICAgIHRoaXMuYWRkKF9kZWNrUGlsZSk7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZHJhd1BpbGVzSWRzLmxlbmd0aDsgaW5kZXgrKylcbiAgICB7XG4gICAgICBjb25zdCBkcmF3UGlsZSA9IG5ldyBQaWxlR2FtZU9iamVjdCh7XG4gICAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgICAgICB4OjcwICsgaW5kZXggKiAyMCxcbiAgICAgICAgeToxMDAsXG4gICAgICAgIG5hbWU6IGRyYXdQaWxlc0lkc1tpbmRleF0sXG4gICAgICAgIGxhYmVsOiAnZHJhdycgKyBpbmRleFxuICAgICAgfSk7XG4gICAgICB0aGlzLl9waWxlR2FtZU9iamVjdHMgPSBbLi4udGhpcy5fcGlsZUdhbWVPYmplY3RzLCBkcmF3UGlsZV07XG4gICAgICB0aGlzLl9kcmF3UGlsZUdhbWVPYmplY3RzID0gWy4uLnRoaXMuX2RyYXdQaWxlR2FtZU9iamVjdHMsIGRyYXdQaWxlXTtcbiAgICAgIHRoaXMuYWRkKGRyYXdQaWxlKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGFibGVhdVBpbGVzSWRzLmxlbmd0aDsgaW5kZXgrKylcbiAgICB7XG4gICAgICBjb25zdCB0YWJsZWF1UGlsZSA9IG5ldyBQaWxlR2FtZU9iamVjdCh7XG4gICAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgICAgICB4OjcwICsgaW5kZXggKiA5MCxcbiAgICAgICAgeToyNTAsXG4gICAgICAgIG5hbWU6IHRhYmxlYXVQaWxlc0lkc1tpbmRleF0sXG4gICAgICAgIGlzU3ByZWFkOiB0cnVlLFxuICAgICAgICBpc0Ryb3BUYXJnZXQ6IHRydWUsXG4gICAgICAgIGxhYmVsOiAndGFibGVhdScgKyBpbmRleFxuICAgICAgfSk7XG4gICAgICB0aGlzLl9waWxlR2FtZU9iamVjdHMgPSBbLi4udGhpcy5fcGlsZUdhbWVPYmplY3RzLCB0YWJsZWF1UGlsZV07XG4gICAgICB0aGlzLl90YWJsZWF1UGlsZUdhbWVPYmplY3RzID0gWy4uLnRoaXMuX3RhYmxlYXVQaWxlR2FtZU9iamVjdHMsIHRhYmxlYXVQaWxlXTtcbiAgICAgIHRoaXMuYWRkKHRhYmxlYXVQaWxlKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGlzY2FyZFBpbGVzSWRzLmxlbmd0aDsgaW5kZXgrKylcbiAgICB7XG4gICAgICBjb25zdCBkaXNjYXJkUGlsZSA9IG5ldyBQaWxlR2FtZU9iamVjdCh7XG4gICAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgICAgICB4OjMwMCArIGluZGV4ICogOTAsXG4gICAgICAgIHk6MTAwLFxuICAgICAgICBuYW1lOiBkaXNjYXJkUGlsZXNJZHNbaW5kZXhdLFxuICAgICAgICBsYWJlbDogJ2Rpc2NhcmQnICsgaW5kZXhcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fcGlsZUdhbWVPYmplY3RzID0gWy4uLnRoaXMuX3BpbGVHYW1lT2JqZWN0cywgZGlzY2FyZFBpbGVdO1xuICAgICAgdGhpcy5fZGlzY2FyZFBpbGVHYW1lT2JqZWN0cyA9IFsuLi50aGlzLl9kaXNjYXJkUGlsZUdhbWVPYmplY3RzLCBkaXNjYXJkUGlsZV07XG4gICAgICB0aGlzLmFkZChkaXNjYXJkUGlsZSk7XG4gICAgfVxuXG4gICAgY29uc3QgX2RyYWdQaWxlR2FtZU9iamVjdCA9IG5ldyBQaWxlR2FtZU9iamVjdCh7XG4gICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgICAgbmFtZTogZHJhZ1BpbGVJZCxcbiAgICAgIGlzU3ByZWFkOiB0cnVlLFxuICAgICAgbGFiZWw6ICdkcmFnJ1xuICAgIH0pO1xuICAgIHRoaXMuX3BpbGVHYW1lT2JqZWN0cyA9IFsuLi50aGlzLl9waWxlR2FtZU9iamVjdHMsIF9kcmFnUGlsZUdhbWVPYmplY3RdO1xuICAgIHRoaXMuX2RyYWdQaWxlR2FtZU9iamVjdCA9IF9kcmFnUGlsZUdhbWVPYmplY3Q7XG4gICAgdGhpcy5fZHJhZ1BpbGVHYW1lT2JqZWN0LnNldEFjdGl2ZShmYWxzZSk7XG4gICAgdGhpcy5hZGQoX2RyYWdQaWxlR2FtZU9iamVjdCk7XG5cbiAgICBjb25zdCBfaGludFBpbGVHYW1lT2JqZWN0ID0gbmV3IFBpbGVHYW1lT2JqZWN0KHtcbiAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgICBuYW1lOiBoaW50UGlsZUlkLFxuICAgICAgaXNTcHJlYWQ6IHRydWUsXG4gICAgICBsYWJlbDogJ2hpbnQnXG4gICAgfSk7XG4gICAgdGhpcy5fcGlsZUdhbWVPYmplY3RzID0gWy4uLnRoaXMuX3BpbGVHYW1lT2JqZWN0cywgX2hpbnRQaWxlR2FtZU9iamVjdF07XG4gICAgdGhpcy5faGludFBpbGVHYW1lT2JqZWN0ID0gX2hpbnRQaWxlR2FtZU9iamVjdDtcbiAgICB0aGlzLl9oaW50UGlsZUdhbWVPYmplY3Quc2V0QWN0aXZlKGZhbHNlKTtcbiAgICB0aGlzLmFkZChfaGludFBpbGVHYW1lT2JqZWN0KTtcbiAgfVxuXG4gIGdldCBjYXJkR2FtZU9iamVjdHMgKClcbiAge1xuICAgIHJldHVybiBbLi4udGhpcy5fY2FyZEdhbWVPYmplY3RzXTtcbiAgfVxuXG4gIGdldCBwaWxlR2FtZU9iamVjdHMgKClcbiAge1xuICAgIHJldHVybiBbLi4udGhpcy5fcGlsZUdhbWVPYmplY3RzXTtcbiAgfVxuXG4gIGdldFBpbGVHYW1lT2JqZWN0QnkgKHByZWRpY2F0ZToocDpQaWxlR2FtZU9iamVjdCkgPT4gYW55KVxuICB7XG4gICAgY29uc3QgcGlsZSA9IHRoaXMuX3BpbGVHYW1lT2JqZWN0cy5maW5kKHByZWRpY2F0ZSk7XG4gICAgaWYgKCFwaWxlKVxuICAgIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBwaWxlIGdhbWUgb2JqZWN0IGRvZXNuJ3QgZXhpc3QuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcGlsZTtcbiAgfVxuXG4gIGdldFBpbGVHYW1lT2JqZWN0QnlOYW1lIChuYW1lOnN0cmluZylcbiAge1xuICAgIHJldHVybiB0aGlzLmdldFBpbGVHYW1lT2JqZWN0QnkocCA9PiBwLm5hbWUgPT09IG5hbWUpO1xuICB9XG5cbiAgZ2V0UGlsZUdhbWVPYmplY3RCeUNhcmRHYW1lT2JqZWN0TmFtZSAobmFtZTpzdHJpbmcpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQaWxlR2FtZU9iamVjdEJ5KHAgPT4gcC5jYXJkR2FtZU9iamVjdHMuZmluZChjID0+IGMubmFtZSA9PT0gbmFtZSkpO1xuICB9XG5cbiAgZ2V0IGRlY2tQaWxlR2FtZU9iamVjdCAoKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuX2RlY2tQaWxlR2FtZU9iamVjdDtcbiAgfVxuXG4gIGdldCBkcmF3UGlsZUdhbWVPYmplY3RzICgpXG4gIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX2RyYXdQaWxlR2FtZU9iamVjdHNdO1xuICB9XG5cbiAgZ2V0IHRhYmxlYXVQaWxlR2FtZU9iamVjdHMgKClcbiAge1xuICAgIHJldHVybiBbLi4udGhpcy5fdGFibGVhdVBpbGVHYW1lT2JqZWN0c107XG4gIH1cblxuICBnZXQgZHJhZ1BpbGVHYW1lT2JqZWN0ICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5fZHJhZ1BpbGVHYW1lT2JqZWN0O1xuICB9XG5cbiAgZ2V0IGhpbnRQaWxlR2FtZU9iamVjdCAoKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuX2hpbnRQaWxlR2FtZU9iamVjdDtcbiAgfVxufVxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xuXG5leHBvcnQgY29uc3QgZ2V0V29ybGRQb3NpdGlvbiA9IChjb250YWluZXI6IFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIpID0+XG57XG4gIGxldCBwYXJlbnQgPSBjb250YWluZXIucGFyZW50Q29udGFpbmVyO1xuICBsZXQgeCA9IGNvbnRhaW5lci54O1xuICBsZXQgeSA9IGNvbnRhaW5lci55O1xuICB3aGlsZSAocGFyZW50KVxuICB7XG4gICAgeCA9IHggKyBwYXJlbnQueDtcbiAgICB5ID0geSArIHBhcmVudC55O1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRDb250YWluZXI7XG4gIH1cbiAgcmV0dXJuIHt4LCB5fTtcbn07XG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gXCJwaGFzZXJcIjtcbi8vIGltcG9ydCBIZWxsb1dvcmxkU2NlbmUgZnJvbSBcIi4vc2NlbmVzL2hlbGxvLXdvcmxkLXNjZW5lXCI7XG5pbXBvcnQgTWFpblNjZW5lIGZyb20gXCIuL3NjZW5lcy9tYWluLXNjZW5lXCI7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgLy8gdGl0bGU6IFwiR2FtZSBPZiBMaWZlXCIsXG4gIC8vIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vZGlnaXRzZW5zaXRpdmUvcGhhc2VyMy10eXBlc2NyaXB0XCIsXG4gIC8vIHZlcnNpb246IFwiMS4wXCIsXG4gIHdpZHRoOiAxMDAwLFxuICBoZWlnaHQ6IDgwMCxcbiAgdHlwZTogUGhhc2VyLkFVVE8sXG4gIC8vIHBhcmVudDogXCJnYW1lXCIsXG4gIHNjZW5lOiBbTWFpblNjZW5lXSxcbiAgYmFja2dyb3VuZENvbG9yOiBcIiNlZGVkZWRcIixcbiAgLy8gcmVuZGVyOiB7IHBpeGVsQXJ0OiBmYWxzZSwgYW50aWFsaWFzOiB0cnVlIH1cbiAgLy8gcGh5c2ljczoge1xuICAvLyAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxuICAvLyAgIGFyY2FkZToge1xuICAvLyAgICAgZ3Jhdml0eTogeyB5OiAyMDAgfVxuICAvLyAgIH1cbiAgLy8gfSxcbn07XG5cbi8vIGV4cG9ydCBjbGFzcyBHYW1lIGV4dGVuZHMgUGhhc2VyLkdhbWUge1xuLy8gICBjb25zdHJ1Y3Rvcihjb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcpIHtcbi8vICAgICBzdXBlcihjb25maWcpO1xuLy8gICB9XG4vLyB9XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gIG5ldyBQaGFzZXIuR2FtZShjb25maWcpO1xufSk7XG4iLCJpbXBvcnQge0VtaXR0ZXJ9IGZyb20gJy4uL2V2ZW50LWVtaXR0ZXInO1xuaW1wb3J0IHtKb2JRdWV1ZUV2ZW50c30gZnJvbSAnLi9ldmVudHMnO1xuXG50eXBlIEpvYlByb21pc2VDcmVhdG9yPFQ+ID0gKFxuICBvblF1ZXVlQ2FuY2VsOiAoY2FsbGJhY2s6KCkgPT4gdm9pZCkgPT4gdm9pZFxuKSA9PiBQcm9taXNlPFQ+O1xuXG5jbGFzcyBKb2I8VD4gIHtcblxuICBwcml2YXRlIF9qb2JQcm9taXNlQ3JlYXRvcjogSm9iUHJvbWlzZUNyZWF0b3I8VD47XG4gIHByaXZhdGUgX29uU3RhcnRDYWxsYmFjazogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xuICBwcml2YXRlIF9vbkVuZENhbGxiYWNrOiAodmFsdWU6VCkgPT4gdm9pZCA9ICgpID0+IHt9O1xuICBwcml2YXRlIF9vbkZhaWxDYWxsYmFjazogKHJlYXNvbjphbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgcHJpdmF0ZSBfb25RdWV1ZUNhbmNlbENhbGxiYWNrOiAoKSA9PiB2b2lkID0gKCkgPT4ge307XG4gIHByaXZhdGUgX3N0YXR1czogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3RvciAoam9iUHJvbWlzZUNyZWF0b3I6IEpvYlByb21pc2VDcmVhdG9yPFQ+KVxuICB7XG4gICAgdGhpcy5fam9iUHJvbWlzZUNyZWF0b3IgPSBqb2JQcm9taXNlQ3JlYXRvcjtcbiAgfVxuXG4gIHN0YXJ0ICgpXG4gIHtcbiAgICBpZiAodGhpcy5pc1VudG91Y2hlZClcbiAgICB7XG4gICAgICBjb25zdCBwcm9taXNlID1cbiAgICAgICAgdGhpcy5fam9iUHJvbWlzZUNyZWF0b3IoXG4gICAgICAgICAgY2FsbGJhY2sgPT4gdGhpcy5fb25RdWV1ZUNhbmNlbENhbGxiYWNrID0gY2FsbGJhY2tcbiAgICAgICAgKTtcbiAgICAgIHRoaXMuX3N0YXR1cyA9IDE7XG4gICAgICB0aGlzLl9vblN0YXJ0Q2FsbGJhY2soKTtcbiAgICAgIHByb21pc2UudGhlbigodmFsdWU6VCkgPT4ge1xuICAgICAgICB0aGlzLl9zdGF0dXMgPSAyO1xuICAgICAgICB0aGlzLl9vbkVuZENhbGxiYWNrKHZhbHVlKTtcbiAgICAgIH0pLmNhdGNoKChyZWFzb246YW55KSA9PiB7XG4gICAgICAgIHRoaXMuX3N0YXR1cyA9IDI7XG4gICAgICAgIHRoaXMuX29uRmFpbENhbGxiYWNrKHJlYXNvbik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzZXQgb25TdGFydENhbGxiYWNrIChjYWxsYmFjazogKCkgPT4gdm9pZClcbiAge1xuICAgIHRoaXMuX29uU3RhcnRDYWxsYmFjayA9IGNhbGxiYWNrO1xuICB9XG5cbiAgc2V0IG9uRW5kQ2FsbGJhY2sgKGNhbGxiYWNrOiAodmFsdWU6VCkgPT4gdm9pZClcbiAge1xuICAgIHRoaXMuX29uRW5kQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgfVxuXG4gIHNldCBvbkZhaWxDYWxsYmFjayAoY2FsbGJhY2s6IChyZWFzb246YW55KSA9PiB2b2lkKVxuICB7XG4gICAgdGhpcy5fb25GYWlsQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgfVxuXG4gIHJ1blF1ZXVlQ2FuY2VsQ2FsbGJhY2sgKClcbiAge1xuICAgIHRoaXMuX29uUXVldWVDYW5jZWxDYWxsYmFjaygpO1xuICB9XG5cbiAgZ2V0IGlzVW50b3VjaGVkICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzID09PSAwO1xuICB9XG5cbiAgZ2V0IGlzUHJvY2Vzc2luZyAoKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXR1cyA9PT0gMTtcbiAgfVxuXG4gIGdldCBpc0RvbmUgKClcbiAge1xuICAgIHJldHVybiB0aGlzLl9zdGF0dXMgPT09IDI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEpvYlF1ZXVlPFQ+XG57XG4gIHByaXZhdGUgX2hhc1N0YXJ0ZWQ6Ym9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9jdXJyZW50SW5kZXg6bnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfam9iUXVldWU6Sm9iPFQ+W10gPSBbXTtcbiAgcHJpdmF0ZSBfZW1pdHRlcjogRW1pdHRlcjxKb2JRdWV1ZUV2ZW50czxUPj4gPSBuZXcgRW1pdHRlcjxKb2JRdWV1ZUV2ZW50czxUPj4oKTtcblxuICBnZXQgaXNQcm9jZXNzaW5nICgpIHtcbiAgICByZXR1cm4gdGhpcy5faGFzU3RhcnRlZDtcbiAgfVxuXG4gIGFkZCAoam9iQ3JlYXRvcjogSm9iUHJvbWlzZUNyZWF0b3I8VD4pXG4gIHtcbiAgICBjb25zdCBqb2IgPSBuZXcgSm9iKGpvYkNyZWF0b3IpO1xuICAgIGpvYi5vblN0YXJ0Q2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbWl0dGVyLmVtaXQoXCJKT0JfU1RBUlRcIiwge30pO1xuICAgIH07XG4gICAgam9iLm9uRW5kQ2FsbGJhY2sgPSAodmFsdWUpID0+IHtcbiAgICAgIHRoaXMuX2VtaXR0ZXIuZW1pdChcIkpPQl9FTkRcIiwge3ZhbHVlfSk7XG4gICAgICB0aGlzLl9jdXJyZW50SW5kZXggPSB0aGlzLl9jdXJyZW50SW5kZXggKyAxO1xuICAgICAgdGhpcy5fcHJvY2VzcygpO1xuICAgIH07XG4gICAgam9iLm9uRmFpbENhbGxiYWNrID0gKHJlYXNvbikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihyZWFzb24pO1xuICAgIH07XG4gICAgdGhpcy5fam9iUXVldWUgPSBbXG4gICAgICAuLi50aGlzLl9qb2JRdWV1ZSxcbiAgICAgIGpvYlxuICAgIF07XG4gICAgdGhpcy5fcHJvY2VzcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcHJvY2VzcyAoKVxuICB7XG4gICAgaWYgKCF0aGlzLl9oYXNTdGFydGVkKVxuICAgIHtcbiAgICAgIHRoaXMuX2hhc1N0YXJ0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fZW1pdHRlci5lbWl0KFwiUVVFVUVfU1RBUlRcIiwge30pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9jdXJyZW50SW5kZXggPCB0aGlzLl9qb2JRdWV1ZS5sZW5ndGgpXG4gICAge1xuICAgICAgY29uc3Qgam9iID0gdGhpcy5fam9iUXVldWVbdGhpcy5fY3VycmVudEluZGV4XTtcbiAgICAgIGlmIChqb2IgJiYgam9iLmlzVW50b3VjaGVkKVxuICAgICAge1xuICAgICAgICBqb2Iuc3RhcnQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGFzU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fam9iUXVldWUgPSBbXTtcbiAgICAgIHRoaXMuX2N1cnJlbnRJbmRleCA9IDA7XG4gICAgICB0aGlzLl9lbWl0dGVyLmVtaXQoXCJRVUVVRV9FTkRcIiwge30pO1xuICAgIH1cbiAgfVxuXG4gIGNhbmNlbCAoKVxuICB7XG4gICAgY29uc3QgaGFzU3RhcnRlZCA9IHRoaXMuX2hhc1N0YXJ0ZWQ7XG4gICAgY29uc3Qgam9iID0gdGhpcy5fam9iUXVldWVbdGhpcy5fY3VycmVudEluZGV4XTtcblxuICAgIHRoaXMuX2hhc1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9qb2JRdWV1ZSA9IFtdO1xuICAgIHRoaXMuX2N1cnJlbnRJbmRleCA9IDA7XG5cbiAgICBpZiAoIWhhc1N0YXJ0ZWQgfHwgIWpvYiB8fCAham9iLmlzUHJvY2Vzc2luZykge1xuICAgICAgdGhpcy5fZW1pdHRlci5lbWl0KFwiUVVFVUVfQ0FOQ0VMXCIsIHt3YXNQcm9jZXNzaW5nOiBmYWxzZX0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBqb2Iub25FbmRDYWxsYmFjayA9ICgpID0+IHt9O1xuICAgICAgam9iLnJ1blF1ZXVlQ2FuY2VsQ2FsbGJhY2soKTtcbiAgICAgIHRoaXMuX2VtaXR0ZXIuZW1pdChcIlFVRVVFX0NBTkNFTFwiLCB7d2FzUHJvY2Vzc2luZzogdHJ1ZX0pO1xuICAgIH1cbiAgfVxuXG4gIG9uUXVldWVTdGFydCAoY2FsbGJhY2s6ICgpID0+IHZvaWQpXG4gIHtcbiAgICB0aGlzLl9lbWl0dGVyLm9uKCdRVUVVRV9TVEFSVCcsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIG9uUXVldWVFbmQgKGNhbGxiYWNrOiAoKSA9PiB2b2lkKVxuICB7XG4gICAgdGhpcy5fZW1pdHRlci5vbignUVVFVUVfRU5EJywgY2FsbGJhY2spO1xuICB9XG5cbiAgb25RdWV1ZUNhbmNlbCAoY2FsbGJhY2s6ICgpID0+IHZvaWQpXG4gIHtcbiAgICB0aGlzLl9lbWl0dGVyLm9uKCdRVUVVRV9DQU5DRUwnLCBjYWxsYmFjayk7XG4gIH1cblxuICBvbkpvYlN0YXJ0IChjYWxsYmFjazogKCkgPT4gdm9pZClcbiAge1xuICAgIHRoaXMuX2VtaXR0ZXIub24oJ0pPQl9TVEFSVCcsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIG9uSm9iRW5kIChjYWxsYmFjazogKHt2YWx1ZX06e3ZhbHVlOlR9KSA9PiB2b2lkKVxuICB7XG4gICAgdGhpcy5fZW1pdHRlci5vbignSk9CX0VORCcsIGNhbGxiYWNrKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtlbWl0dGVyfSBmcm9tICcuL2VtaXR0ZXInO1xuaW1wb3J0IHtDYXJkfSBmcm9tICcuLi9tb2RlbHMvY2FyZCc7XG5cbmV4cG9ydCBjbGFzcyBDYXJkV2l0aEV2ZW50IGV4dGVuZHMgQ2FyZFxue1xuICBmYWNlVXAgKClcbiAge1xuICAgIHN1cGVyLmZhY2VVcCgpO1xuICAgIGVtaXR0ZXIuZW1pdCgnRkxJUF9PVkVSX0NBUkQnLCB7XG4gICAgICBjYXJkOiB0aGlzXG4gICAgfSk7XG4gIH1cblxuICBmYWNlRG93biAoKVxuICB7XG4gICAgc3VwZXIuZmFjZURvd24oKTtcbiAgICBlbWl0dGVyLmVtaXQoJ0ZMSVBfT1ZFUl9DQVJEJywge1xuICAgICAgY2FyZDogdGhpc1xuICAgIH0pO1xuICB9XG5cbiAgZmxpcE92ZXIgKClcbiAge1xuICAgIHN1cGVyLmZsaXBPdmVyKCk7XG4gICAgZW1pdHRlci5lbWl0KCdGTElQX09WRVJfQ0FSRCcsIHtcbiAgICAgIGNhcmQ6IHRoaXNcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtjcmVhdGVDYXJkc30gZnJvbSAnLi4vbW9kZWxzL2NyZWF0ZS1jYXJkcyc7XG5pbXBvcnQge0NhcmRXaXRoRXZlbnR9IGZyb20gJy4vY2FyZCc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDYXJkc1dpdGhFdmVudHMgPSAoe1xuICBudW1iZXJPZkRlY2tzVXNlZCxcbiAgbnVtYmVyT2ZTdWl0c1xufTp7XG4gIG51bWJlck9mRGVja3NVc2VkOm51bWJlcixcbiAgbnVtYmVyT2ZTdWl0czpudW1iZXJcbn0pID0+XG4gIGNyZWF0ZUNhcmRzKHtcbiAgICBudW1iZXJPZkRlY2tzVXNlZCxcbiAgICBudW1iZXJPZlN1aXRzXG4gIH0pLm1hcChjYXJkID0+IG5ldyBDYXJkV2l0aEV2ZW50KHtcbiAgICBzdWl0OiBjYXJkLnN1aXQsXG4gICAgcmFuazogY2FyZC5yYW5rLFxuICAgIGlzRmFjZVVwOiBjYXJkLmlzRmFjZVVwXG4gIH0pKTtcbiIsImltcG9ydCB7RW1pdHRlcn0gZnJvbSAnLi4vZXZlbnQtZW1pdHRlcic7XG5pbXBvcnQge01vZGVsRXZlbnRzfSBmcm9tICcuL2V2ZW50cyc7XG5cbmV4cG9ydCBjb25zdCBlbWl0dGVyID0gbmV3IEVtaXR0ZXI8TW9kZWxFdmVudHM+KCk7XG4iLCJpbXBvcnQge1BpbGV9IGZyb20gJy4uL21vZGVscy9waWxlJztcblxuZXhwb3J0IGNsYXNzIFBpbGVXaXRoRXZlbnQgZXh0ZW5kcyBQaWxlIHtcblxufVxuIiwiaW1wb3J0IHtlbWl0dGVyfSBmcm9tICcuL2VtaXR0ZXInO1xuaW1wb3J0IHtQaWxlfSBmcm9tICcuLi9tb2RlbHMvcGlsZSc7XG5pbXBvcnQge1RhYmxlfSBmcm9tICcuLi9tb2RlbHMvdGFibGUnO1xuXG5leHBvcnQgY2xhc3MgVGFibGVXaXRoRXZlbnQgZXh0ZW5kcyBUYWJsZSB7XG5cbiAgcHJvdGVjdGVkIF9tb3ZlQ2FyZEJldHdlZW5QaWxlcyAoe2Zyb20sIHRvLCBzaXplfTp7ZnJvbTpQaWxlLCB0bzpQaWxlLCBzaXplOm51bWJlcn0pXG4gIHtcbiAgICBjb25zdCBjYXJkcyA9IHN1cGVyLl9tb3ZlQ2FyZEJldHdlZW5QaWxlcyh7ZnJvbSwgdG8sIHNpemV9KTtcbiAgICBlbWl0dGVyLmVtaXQoJ01PVkVfQ0FSRFNfQkVUV0VFTl9QSUxFUycsIHtmcm9tLCB0bywgc2l6ZX0pO1xuICAgIHJldHVybiBjYXJkcztcbiAgfVxuXG59XG4iLCIvLyBpbXBvcnQge2V2ZW50SHVifSBmcm9tICcuLi9ldmVudC1odWInO1xuaW1wb3J0IHtuYW5vaWR9IGZyb20gJ25hbm9pZCc7XG5cbmV4cG9ydCBlbnVtIFN1aXQge1xuICBTcGFkZSA9ICfimaAnLFxuICBDbHViID0gJ+KZoycsXG4gIERpYW1vbmQgPSAn4pmmJyxcbiAgSGVhcnQgPSAn4pmlJ1xufVxuXG5jb25zdCBnZXRSYW5rVGV4dCA9IChyYW5rOm51bWJlcikgPT5cbntcbiAgaWYgKHJhbmsgPCAxIHx8IDEzIDwgcmFuaykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhcmQgcmFuayBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIGlmIChyYW5rID09PSAxMSkge1xuICAgIHJldHVybiAnSic7XG4gIH0gZWxzZSBpZiAocmFuayA9PT0gMTIpIHtcbiAgICByZXR1cm4gJ1EnO1xuICB9IGVsc2UgaWYgKHJhbmsgPT09IDEzKSB7XG4gICAgcmV0dXJuICdLJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmFuay50b1N0cmluZygpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJkXG57XG4gIHByaXZhdGUgX3N1aXQ6IFN1aXQ7XG4gIHByaXZhdGUgX3Jhbms6IG51bWJlcjtcbiAgcHJpdmF0ZSBfaXNGYWNlVXA6IGJvb2xlYW47XG4gIHByaXZhdGUgX2lkOnN0cmluZyA9IG5hbm9pZCgpO1xuXG4gIGNvbnN0cnVjdG9yICh7c3VpdCwgcmFuaywgaXNGYWNlVXB9OntzdWl0OlN1aXQsIHJhbms6bnVtYmVyLCBpc0ZhY2VVcD86Ym9vbGVhbn0pXG4gIHtcbiAgICB0aGlzLl9zdWl0ID0gc3VpdDtcbiAgICB0aGlzLl9pc0ZhY2VVcCA9IGlzRmFjZVVwIHx8IGZhbHNlO1xuXG4gICAgaWYgKDEgPD0gcmFuayAmJiByYW5rIDw9IDEzKSB7XG4gICAgICB0aGlzLl9yYW5rID0gcmFuaztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgY2FyZCByYW5rICR7cmFua30gaXMgaW52YWxpZC5gKTtcbiAgICB9XG4gIH1cblxuICBnZXQgc3VpdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1aXQ7XG4gIH1cblxuICBnZXQgc3VpdE1hcmsgKCkge1xuICAgIHJldHVybiB0aGlzLl9zdWl0LnRvU3RyaW5nKClcbiAgfVxuXG4gIGdldCByYW5rICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmFuaztcbiAgfVxuXG4gIGdldCByYW5rTWFyayAoKSB7XG4gICAgcmV0dXJuIGdldFJhbmtUZXh0KHRoaXMuX3JhbmspXG4gIH1cblxuICBnZXQgaXNGYWNlVXAgKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0ZhY2VVcDtcbiAgfVxuXG4gIGdldCBpZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgZmFjZVVwICgpXG4gIHtcbiAgICB0aGlzLl9pc0ZhY2VVcCA9IHRydWU7XG4gIH1cblxuICBmYWNlRG93biAoKVxuICB7XG4gICAgdGhpcy5faXNGYWNlVXAgPSBmYWxzZTtcbiAgfVxuXG4gIGZsaXBPdmVyICgpXG4gIHtcbiAgICB0aGlzLl9pc0ZhY2VVcCA9ICF0aGlzLl9pc0ZhY2VVcDtcbiAgfVxuXG4gIHRvU3RyaW5nICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5zdWl0TWFyayArIHRoaXMucmFua01hcmsgKyAodGhpcy5faXNGYWNlVXAgPyAnKycgOiAnLScpO1xuICB9XG59XG4iLCJpbXBvcnQge0NhcmQsIFN1aXR9IGZyb20gJy4vY2FyZCc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDYXJkcyA9ICh7XG4gIG51bWJlck9mRGVja3NVc2VkLFxuICBudW1iZXJPZlN1aXRzXG59OntcbiAgbnVtYmVyT2ZEZWNrc1VzZWQ6bnVtYmVyLFxuICBudW1iZXJPZlN1aXRzOm51bWJlclxufSkgPT4ge1xuICBjb25zdCBkZWNrQ2FyZHM6Q2FyZFtdID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZkRlY2tzVXNlZDsgaSsrKVxuICB7XG4gICAgZm9yIChsZXQgcmFuayA9IDE7IHJhbmsgPD0gMTM7IHJhbmsrKylcbiAgICB7XG4gICAgICBzd2l0Y2ggKG51bWJlck9mU3VpdHMpXG4gICAgICB7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBkZWNrQ2FyZHMucHVzaChuZXcgQ2FyZCh7c3VpdDpTdWl0LkRpYW1vbmQsIHJhbmssIGlzRmFjZVVwOiBmYWxzZX0pKTtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGRlY2tDYXJkcy5wdXNoKG5ldyBDYXJkKHtzdWl0OlN1aXQuQ2x1YiwgcmFuaywgaXNGYWNlVXA6IGZhbHNlfSkpO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgZGVja0NhcmRzLnB1c2gobmV3IENhcmQoe3N1aXQ6U3VpdC5IZWFydCwgcmFuaywgaXNGYWNlVXA6IGZhbHNlfSkpO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgZGVja0NhcmRzLnB1c2gobmV3IENhcmQoe3N1aXQ6U3VpdC5TcGFkZSwgcmFuaywgaXNGYWNlVXA6IGZhbHNlfSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZWNrQ2FyZHM7XG59XG5cbmV4cG9ydCBjb25zdCByYW5kb21pemVBcnJheSA9IDxUPih7YXJyYXl9OnthcnJheTpUW119KSA9PiB7XG4gIGNvbnN0IF9hcnIgPSBbLi4uYXJyYXldO1xuICBmb3IgKGxldCBpID0gX2Fyci5sZW5ndGggLSAxOyBpID4gMDsgaS0tKVxuICB7XG4gICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICBbX2FycltpXSwgX2FycltqXV0gPSBbX2FycltqXSwgX2FycltpXV07XG4gIH1cbiAgcmV0dXJuIF9hcnI7XG59XG4iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XG5pbXBvcnQge25hbm9pZH0gZnJvbSAnbmFub2lkJztcblxudHlwZSBQaWxlQXJncyA9IHtcbiAgY2FyZHM/OiBDYXJkW10sXG4gIGxhYmVsPzogc3RyaW5nXG59XG5cbmV4cG9ydCBjbGFzcyBQaWxlXG57XG4gIHByb3RlY3RlZCBfY2FyZHM6Q2FyZFtdO1xuICBwcm90ZWN0ZWQgX2xhYmVsOnN0cmluZztcbiAgcHJpdmF0ZSBfaWQ6c3RyaW5nID0gbmFub2lkKCk7XG5cbiAgY29uc3RydWN0b3IgKGFyZ3M6UGlsZUFyZ3MgPSB7fSlcbiAge1xuICAgIHRoaXMuX2NhcmRzID0gYXJncy5jYXJkcyB8fCBbXTtcbiAgICB0aGlzLl9sYWJlbCA9IGFyZ3MubGFiZWwgfHwgJyc7XG4gIH1cblxuICBnZXQgaWQgKCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIGdldCBsYWJlbCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xuICB9XG5cbiAgZ2V0IGNhcmRzICgpXG4gIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX2NhcmRzXTtcbiAgfVxuXG4gIGdldCBmcm9udENhcmQgKCk6Q2FyZHx1bmRlZmluZWRcbiAge1xuICAgIHJldHVybiB0aGlzLl9jYXJkc1t0aGlzLl9jYXJkcy5sZW5ndGggLSAxXTtcbiAgfVxuXG4gIGdldCBsYXN0Q2FyZCAoKTpDYXJkfHVuZGVmaW5lZFxuICB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcmRzWzBdO1xuICB9XG5cbiAgZ2V0RnJvbnRDYXJkcyAoe3NpemV9OntzaXplOm51bWJlcn0pXG4gIHtcbiAgICBjb25zdCBjYXJkcyA9IHRoaXMuX2NhcmRzO1xuICAgIGlmIChjYXJkcy5sZW5ndGggPT09IDAgfHwgc2l6ZSA8IDEpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBfc2l6ZSA9IE1hdGgubWluKGNhcmRzLmxlbmd0aCwgc2l6ZSk7XG4gICAgcmV0dXJuIGNhcmRzLnNsaWNlKGNhcmRzLmxlbmd0aCAtIF9zaXplKTtcbiAgfVxuXG4gIGRyYXdDYXJkcyAoe3NpemV9OntzaXplOm51bWJlcn0pXG4gIHtcbiAgICBjb25zdCBjYXJkcyA9IHRoaXMuX2NhcmRzO1xuICAgIGlmIChjYXJkcy5sZW5ndGggPT09IDAgfHwgc2l6ZSA8IDEpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBfc2l6ZSA9IE1hdGgubWluKGNhcmRzLmxlbmd0aCwgc2l6ZSk7XG4gICAgY29uc3QgZHJhd25DYXJkcyA9IGNhcmRzLnNsaWNlKGNhcmRzLmxlbmd0aCAtIF9zaXplKTtcbiAgICB0aGlzLl9jYXJkcyA9IGNhcmRzLnNsaWNlKDAsIC1zaXplKTtcbiAgICByZXR1cm4gZHJhd25DYXJkcztcbiAgfVxuXG4gIHBsYWNlQ2FyZHMgKHtjYXJkc306e2NhcmRzOkNhcmRbXX0pXG4gIHtcbiAgICB0aGlzLl9jYXJkcyA9IFsuLi50aGlzLl9jYXJkcywgLi4uY2FyZHNdO1xuICB9XG5cbiAgZ2V0RGVzY2VuZGluZ0luU3VpdEZyb250Q2FyZHMgKClcbiAge1xuICAgIHJldHVybiBQaWxlLmdldERlc2NlbmRpbmdGcm9udENhcmRzKHtcbiAgICAgIGNhcmRzOiB0aGlzLl9jYXJkcyxcbiAgICAgIGluU3VpdDogdHJ1ZSxcbiAgICAgIGZhY2VVcDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldERlc2NlbmRpbmdGcm9udENhcmRzICh7Y2FyZHMsIGluU3VpdCwgZmFjZVVwfTp7Y2FyZHM6Q2FyZFtdLCBpblN1aXQ/OmJvb2xlYW4sIGZhY2VVcD86Ym9vbGVhbn0pXG4gIHtcbiAgICBjb25zdCBfaW5TdWl0ID0gaW5TdWl0IHx8IGZhbHNlO1xuICAgIGNvbnN0IF9mYWNlVXAgPSBmYWNlVXAgfHwgZmFsc2U7XG5cbiAgICBpZiAoY2FyZHMubGVuZ3RoID09PSAwKVxuICAgIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBsZXQgcHJldiA9IGNhcmRzW2NhcmRzLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKF9mYWNlVXAgJiYgIXByZXYuaXNGYWNlVXApXG4gICAge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGxldCBfY2FyZHM6Q2FyZFtdID0gW3ByZXZdO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSBjYXJkcy5sZW5ndGggLSAyOyBpbmRleCA+PSAwOyBpbmRleC0tKVxuICAgIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBjYXJkc1tpbmRleF07XG5cbiAgICAgIGlmIChwcmV2LnJhbmsgKyAxICE9PSBjdXJyZW50LnJhbmtcbiAgICAgICAgfHwgKF9pblN1aXQgJiYgcHJldi5zdWl0ICE9PSBjdXJyZW50LnN1aXQpXG4gICAgICAgIHx8IChfZmFjZVVwICYmICFjdXJyZW50LmlzRmFjZVVwKSlcbiAgICAgIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIF9jYXJkcyA9IFtjdXJyZW50LCAuLi5fY2FyZHNdO1xuICAgICAgcHJldiA9IGN1cnJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9jYXJkcztcbiAgfVxuXG4gIHN0YXRpYyBjaGVja0lmQ2FyZHNBcmVEZXNjZW5kaW5nICh7Y2FyZHMsIGluU3VpdCwgZmFjZVVwfTp7Y2FyZHM6Q2FyZFtdLCBpblN1aXQ/OmJvb2xlYW4sIGZhY2VVcD86Ym9vbGVhbn0pXG4gIHtcbiAgICByZXR1cm4gUGlsZS5nZXREZXNjZW5kaW5nRnJvbnRDYXJkcyh7Y2FyZHMsIGluU3VpdCwgZmFjZVVwfSkubGVuZ3RoID09PSBjYXJkcy5sZW5ndGg7XG4gIH1cblxuICBjaGVja0lmRnJvbnRDYXJkc0NvbXBsZXRlICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5jYXJkcy5sZW5ndGggPj0gMTMgJiYgUGlsZS5jaGVja0lmQ2FyZHNBcmVEZXNjZW5kaW5nKHtcbiAgICAgIGNhcmRzOiB0aGlzLmNhcmRzLnNsaWNlKC0xMyksXG4gICAgICBpblN1aXQ6IHRydWUsXG4gICAgICBmYWNlVXA6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIHRvU3RyaW5nICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5jYXJkcy5tYXAoYyA9PiBjLnRvU3RyaW5nKCkpLmpvaW4oJyAnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xuaW1wb3J0IHtQaWxlfSBmcm9tICcuL3BpbGUnO1xuLy8gaW1wb3J0IHtUYWJsZVNldHRpbmdzLCBUYWJsZVNldHRpbmdDb25maWd9IGZyb20gJy4vdGFibGUtc2V0dGluZ3MnO1xuaW1wb3J0IHtcbiAgRkFDRV9VUF9DQVJELFxuICBNT1ZFX0NBUkQsXG4gIFBBVVNFLFxuICBVbmRvYWJsZUFjdGlvbkhpc3Rvcnlcbn0gZnJvbSAnLi91bmRvYWJsZS1hY3Rpb25zJztcblxuZXhwb3J0IHR5cGUgVGFibGVTZXR0aW5ncyA9IHtcbiAgbnVtYmVyT2ZUYWJsZWF1UGlsZXM6IG51bWJlcixcbiAgbnVtYmVyT2ZEcmF3UGlsZXM6IG51bWJlcixcbiAgY2FyZHM6IENhcmRbXVxufVxuXG5leHBvcnQgY2xhc3MgVGFibGVcbntcbiAgcHJpdmF0ZSBfc2V0dGluZ3M6VGFibGVTZXR0aW5ncztcbiAgcHJpdmF0ZSBfY2FyZHM6IENhcmRbXTtcbiAgcHJpdmF0ZSBfZGVja1BpbGU6UGlsZTtcbiAgcHJpdmF0ZSBfZHJhd1BpbGVzOlBpbGVbXTtcbiAgcHJpdmF0ZSBfdGFibGVhdVBpbGVzOlBpbGVbXTtcbiAgcHJpdmF0ZSBfZGlzY2FyZFBpbGVzOlBpbGVbXTtcbiAgcHJpdmF0ZSBfcGlsZXM6UGlsZVtdO1xuICBwcml2YXRlIF9hY3Rpb25IaXN0b3J5OlVuZG9hYmxlQWN0aW9uSGlzdG9yeTtcblxuICBjb25zdHJ1Y3RvciAoc2V0dGluZ3M6IFRhYmxlU2V0dGluZ3MpXG4gIHtcbiAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMuX2NhcmRzID0gc2V0dGluZ3MuY2FyZHM7XG4gICAgdGhpcy5fZGVja1BpbGUgPSBuZXcgUGlsZSh7bGFiZWw6ICdkZWNrJywgY2FyZHM6IHNldHRpbmdzLmNhcmRzfSk7XG4gICAgdGhpcy5fZHJhd1BpbGVzID0gQXJyYXkuZnJvbSh7bGVuZ3RoOnNldHRpbmdzLm51bWJlck9mRHJhd1BpbGVzfSkubWFwKChfLCBpKSA9PiBuZXcgUGlsZSh7bGFiZWw6IGBkcmF3JHtpfWAsIGNhcmRzOiBbXX0pKTtcbiAgICB0aGlzLl90YWJsZWF1UGlsZXMgPSBBcnJheS5mcm9tKHtsZW5ndGg6c2V0dGluZ3MubnVtYmVyT2ZUYWJsZWF1UGlsZXN9KS5tYXAoKF8sIGkpID0+IG5ldyBQaWxlKHtsYWJlbDogYHRhYmwke2l9YCwgY2FyZHM6IFtdfSkpO1xuICAgIHRoaXMuX2Rpc2NhcmRQaWxlcyA9IEFycmF5LmZyb20oe2xlbmd0aDpNYXRoLmZsb29yKHNldHRpbmdzLmNhcmRzLmxlbmd0aCAvIDEzKX0pLm1hcCgoXywgaSkgPT4gbmV3IFBpbGUoe2xhYmVsOiBgZGlzYyR7aX1gLCBjYXJkczogW119KSk7XG4gICAgdGhpcy5fcGlsZXMgPSBbdGhpcy5fZGVja1BpbGUsIC4uLnRoaXMuX2RyYXdQaWxlcywgLi4udGhpcy50YWJsZWF1UGlsZXMsIC4uLnRoaXMuX2Rpc2NhcmRQaWxlc107XG4gICAgdGhpcy5fYWN0aW9uSGlzdG9yeSA9IG5ldyBVbmRvYWJsZUFjdGlvbkhpc3RvcnkoKTtcbiAgfVxuXG4gIGdldCBjYXJkcyAoKVxuICB7XG4gICAgcmV0dXJuIFsuLi50aGlzLl9jYXJkc107XG4gIH1cblxuICBnZXQgcGlsZXMgKClcbiAge1xuICAgIHJldHVybiBbLi4udGhpcy5fcGlsZXNdO1xuICB9XG5cbiAgZ2V0UGlsZUJ5IChwcmVkaWNhdGU6KHA6UGlsZSkgPT4gYW55KVxuICB7XG4gICAgY29uc3QgcGlsZSA9IHRoaXMuX3BpbGVzLmZpbmQocHJlZGljYXRlKTtcbiAgICBpZiAoIXBpbGUpXG4gICAge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHBpbGUgZG9lc24ndCBleGlzdC5cIik7XG4gICAgfVxuICAgIHJldHVybiBwaWxlO1xuICB9XG5cbiAgZ2V0UGlsZUJ5SWQgKGlkOnN0cmluZylcbiAge1xuICAgIHJldHVybiB0aGlzLmdldFBpbGVCeShwID0+IHAuaWQgPT09IGlkKTtcbiAgfVxuXG4gIGdldFBpbGVCeUNhcmRJZCAoaWQ6c3RyaW5nKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UGlsZUJ5KHAgPT4gcC5jYXJkcy5maW5kKGMgPT4gYy5pZCA9PT0gaWQpKTtcbiAgfVxuXG4gIGdldCBkZWNrUGlsZSAoKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuX2RlY2tQaWxlO1xuICB9XG5cbiAgZ2V0IGRyYXdQaWxlcyAoKVxuICB7XG4gICAgcmV0dXJuIFsuLi50aGlzLl9kcmF3UGlsZXNdO1xuICB9XG5cbiAgZ2V0IHRhYmxlYXVQaWxlcyAoKVxuICB7XG4gICAgcmV0dXJuIFsuLi50aGlzLl90YWJsZWF1UGlsZXNdO1xuICB9XG5cbiAgZ2V0IGRpc2NhcmRQaWxlcyAoKVxuICB7XG4gICAgcmV0dXJuIFsuLi50aGlzLl9kaXNjYXJkUGlsZXNdO1xuICB9XG5cbiAgZ2V0IGlzQ2xlYXIgKClcbiAge1xuICAgIHJldHVybiAhdGhpcy5fdGFibGVhdVBpbGVzLmZpbmQocCA9PiBwLmNhcmRzLmxlbmd0aCA+IDApO1xuICB9XG5cbiAgZ2V0UG9zc2libGVNb3Zlc0JldHdlZW5UYWJsZWF1UGlsZXMgKClcbiAge1xuICAgIGxldCBtb3Zlczp7c2l6ZTpudW1iZXIsIGZyb206IFBpbGUsIHRvOiBQaWxlfVtdID0gW107XG5cbiAgICBmb3IgKGxldCBmcm9tIG9mIHRoaXMuX3RhYmxlYXVQaWxlcylcbiAgICB7XG4gICAgICBjb25zdCBkcmF3YWJsZUNhcmRzID0gZnJvbS5nZXREZXNjZW5kaW5nSW5TdWl0RnJvbnRDYXJkcygpO1xuICAgICAgaWYgKGRyYXdhYmxlQ2FyZHMubGVuZ3RoID09PSAwKSBjb250aW51ZTtcblxuICAgICAgZm9yIChsZXQgdG8gb2YgdGhpcy5fdGFibGVhdVBpbGVzKVxuICAgICAge1xuICAgICAgICBpZiAodG8gPT09IGZyb20pIGNvbnRpbnVlO1xuXG4gICAgICAgIGZvciAobGV0IHNpemUgPSBkcmF3YWJsZUNhcmRzLmxlbmd0aDsgc2l6ZSA+IDA7IHNpemUtLSlcbiAgICAgICAge1xuICAgICAgICAgIGlmICh0by5mcm9udENhcmQgJiYgIVBpbGUuY2hlY2tJZkNhcmRzQXJlRGVzY2VuZGluZyh7XG4gICAgICAgICAgICBjYXJkczogW3RvLmZyb250Q2FyZCwgLi4uZHJhd2FibGVDYXJkcy5zbGljZSgtc2l6ZSldLFxuICAgICAgICAgICAgaW5TdWl0OiBmYWxzZSxcbiAgICAgICAgICAgIGZhY2VVcDogdHJ1ZVxuICAgICAgICAgIH0pKSBjb250aW51ZTtcblxuICAgICAgICAgIG1vdmVzID0gWy4uLm1vdmVzLCB7ZnJvbSwgdG8sIHNpemV9XTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBtb3ZlcztcbiAgfVxuXG4gIHByb3RlY3RlZCBfbW92ZUNhcmRCZXR3ZWVuUGlsZXMgKHtmcm9tLCB0bywgc2l6ZX06e2Zyb206UGlsZSwgdG86UGlsZSwgc2l6ZTpudW1iZXJ9KVxuICB7XG4gICAgaWYgKCF0aGlzLl9waWxlcy5maW5kKHAgPT4gcCA9PT0gZnJvbSkpXG4gICAge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJmcm9tXCIgcGlsZSBpcyBub3QgYmUgaW4gdGhpcyB0YWJsZS5gKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX3BpbGVzLmZpbmQocCA9PiBwID09PSB0bykpXG4gICAge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJ0b1wiIHBpbGUgaXMgbm90IGJlIGluIHRoaXMgdGFibGUuYCk7XG4gICAgfVxuXG4gICAgaWYgKGZyb20uZ2V0RnJvbnRDYXJkcyh7c2l6ZX0pLmxlbmd0aCAhPT0gc2l6ZSlcbiAgICB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwaWxlIFwiJHtmcm9tLmlkfVwiIGRvZXNuJ3QgaGF2ZSAke3NpemV9IGNhcmRzIHRvIGRyYXcuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgY2FyZHMgPSBmcm9tLmRyYXdDYXJkcyh7c2l6ZX0pO1xuICAgIHRvLnBsYWNlQ2FyZHMoe2NhcmRzfSk7XG4gIH1cblxuICBwcml2YXRlIF9kZWFsQ2FyZHNGcm9tRGVja1RvVGFibGVhdVBpbGVzICgpXG4gIHtcbiAgICBjb25zdCBudW1iZXJPZkNhcmRzID0gdGhpcy5fZGVja1BpbGUuY2FyZHMubGVuZ3RoO1xuICAgIGNvbnN0IG51bWJlck9mRHJhd0NhcmRzID0gdGhpcy5fc2V0dGluZ3MubnVtYmVyT2ZUYWJsZWF1UGlsZXMgKiB0aGlzLl9zZXR0aW5ncy5udW1iZXJPZkRyYXdQaWxlcztcblxuICAgIGxldCBjb3VudGVyID0gMDtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgbnVtYmVyT2ZDYXJkcyAtIG51bWJlck9mRHJhd0NhcmRzOyBpbmRleCsrKVxuICAgIHtcbiAgICAgIGNvbnN0IGZyb20gPSB0aGlzLl9kZWNrUGlsZTtcbiAgICAgIGNvbnN0IHRvID0gdGhpcy5fdGFibGVhdVBpbGVzW2NvdW50ZXIgJSB0aGlzLnRhYmxlYXVQaWxlcy5sZW5ndGhdO1xuICAgICAgdGhpcy5fbW92ZUNhcmRCZXR3ZWVuUGlsZXMoe2Zyb20sIHRvLCBzaXplOiAxfSk7XG4gICAgICBjb3VudGVyID0gY291bnRlciArIDE7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZGVhbENhcmRzRnJvbURlY2tUb0RyYXdQaWxlcyAoKVxuICB7XG4gICAgLy8gY29uc3QgbnVtYmVyT2ZEcmF3Q2FyZHMgPSB0aGlzLl9zZXR0aW5ncy5udW1iZXJPZlRhYmxlYXVQaWxlcyAqIHRoaXMuX3NldHRpbmdzLm51bWJlck9mRHJhd1BpbGVzO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX3NldHRpbmdzLm51bWJlck9mRHJhd1BpbGVzOyBpbmRleCsrKVxuICAgIHtcbiAgICAgIGNvbnN0IGZyb20gPSB0aGlzLl9kZWNrUGlsZTtcbiAgICAgIGNvbnN0IHRvID0gdGhpcy5fZHJhd1BpbGVzW2luZGV4XTtcbiAgICAgIHRoaXMuX21vdmVDYXJkQmV0d2VlblBpbGVzKHtmcm9tLCB0bywgc2l6ZTogdGhpcy5fc2V0dGluZ3MubnVtYmVyT2ZUYWJsZWF1UGlsZXN9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9mbGlwVXBUYWJsZWF1RnJvbnRDYXJkcyAoKVxuICB7XG4gICAgZm9yIChsZXQgdGFibGVhdVBpbGUgb2YgdGhpcy5fdGFibGVhdVBpbGVzKVxuICAgIHtcbiAgICAgIGlmICh0YWJsZWF1UGlsZS5mcm9udENhcmQpIHRoaXMuX2ZhY2VVcENhcmQoe2NhcmQ6IHRhYmxlYXVQaWxlLmZyb250Q2FyZH0pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2ZhY2VVcENhcmQgKHtjYXJkfTp7Y2FyZDpDYXJkfSlcbiAge1xuICAgIGlmICghY2FyZC5pc0ZhY2VVcClcbiAgICB7XG4gICAgICBjYXJkLmZhY2VVcCgpO1xuICAgIH1cbiAgfVxuXG4gIHN0YXJ0R2FtZSAoKVxuICB7XG4gICAgdGhpcy5fZGVhbENhcmRzRnJvbURlY2tUb1RhYmxlYXVQaWxlcygpO1xuICAgIHRoaXMuX2RlYWxDYXJkc0Zyb21EZWNrVG9EcmF3UGlsZXMoKTtcbiAgICB0aGlzLl9mbGlwVXBUYWJsZWF1RnJvbnRDYXJkcygpO1xuICB9XG5cbiAgbW92ZUNhcmRCZXR3ZWVuVGFibGVhdVBpbGVzICh7ZnJvbSwgdG8sIHNpemV9Ontmcm9tOlBpbGUsIHRvOlBpbGUsIHNpemU6bnVtYmVyfSlcbiAge1xuICAgIGlmICghdGhpcy5fdGFibGVhdVBpbGVzLmZpbmQocCA9PiBwID09PSBmcm9tKSlcbiAgICB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcImZyb21cIiBwaWxlIGlzIG5vdCBhIHRhYmxlYXUgcGlsZS5gKTtcbiAgICB9XG5cbiAgICBpZiAoIXRoaXMuX3RhYmxlYXVQaWxlcy5maW5kKHAgPT4gcCA9PT0gdG8pKVxuICAgIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwidG9cIiBwaWxlIGlzIG5vdCBhIHRhYmxlYXUgcGlsZS5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYXJkcyA9IGZyb20uZ2V0RnJvbnRDYXJkcyh7c2l6ZX0pO1xuICAgIGlmIChjYXJkcy5sZW5ndGggIT09IHNpemUpXG4gICAge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcGlsZSBcIiR7ZnJvbS5pZH1cIiBkb2Vzbid0IGhhdmUgJHtzaXplfSBjYXJkcyB0byBkcmF3LmApO1xuICAgIH1cblxuICAgIGlmICh0by5mcm9udENhcmQgJiYgIVBpbGUuY2hlY2tJZkNhcmRzQXJlRGVzY2VuZGluZyh7XG4gICAgICBjYXJkczogW3RvLmZyb250Q2FyZCwgLi4uY2FyZHNdLFxuICAgICAgaW5TdWl0OiBmYWxzZSxcbiAgICAgIGZhY2VVcDogdHJ1ZVxuICAgIH0pKVxuICAgIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgWW91IGNhbid0IHBsYWNlIHRob3NlIGNhcmRzIHRvIHRoZSBcInRvXCIgcGlsZS5gKTtcbiAgICB9XG5cbiAgICB0aGlzLl9tb3ZlQ2FyZEJldHdlZW5QaWxlcyh7ZnJvbSwgdG8sIHNpemV9KTtcbiAgICB0aGlzLl9hY3Rpb25IaXN0b3J5LmFkZCh7ZnJvbSwgdG8sIHNpemUsIHR5cGU6IE1PVkVfQ0FSRH0pO1xuXG4gICAgaWYgKGZyb20uZnJvbnRDYXJkICYmICFmcm9tLmZyb250Q2FyZC5pc0ZhY2VVcCkge1xuICAgICAgdGhpcy5fZmFjZVVwQ2FyZCh7Y2FyZDogZnJvbS5mcm9udENhcmR9KTtcbiAgICAgIHRoaXMuX2FjdGlvbkhpc3RvcnkuYWRkKHtjYXJkOiBmcm9tLmZyb250Q2FyZCwgdHlwZTogRkFDRV9VUF9DQVJEfSk7XG4gICAgfVxuXG4gICAgY29uc3QgZGlzY2FyZGVkUGlsZSA9IHRoaXMuX2Rpc2NhcmRQaWxlcy5maW5kKHAgPT4gcC5jYXJkcy5sZW5ndGggPT09IDApO1xuXG4gICAgaWYgKCFkaXNjYXJkZWRQaWxlKVxuICAgIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGVyZSBhcmVuJ3QgYW55IGVtcHR5IGRpc2NhcmRlZCBwaWxlcy5gKTtcbiAgICB9XG5cbiAgICBpZiAodG8uY2hlY2tJZkZyb250Q2FyZHNDb21wbGV0ZSgpKVxuICAgIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTM7IGkrKylcbiAgICAgIHtcbiAgICAgICAgdGhpcy5fbW92ZUNhcmRCZXR3ZWVuUGlsZXMoe1xuICAgICAgICAgIGZyb206IHRvLFxuICAgICAgICAgIHRvOiBkaXNjYXJkZWRQaWxlLFxuICAgICAgICAgIHNpemU6IDFcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuX2FjdGlvbkhpc3RvcnkuYWRkKHtcbiAgICAgICAgICBmcm9tOiB0byxcbiAgICAgICAgICB0bzogZGlzY2FyZGVkUGlsZSxcbiAgICAgICAgICBzaXplOiAxLFxuICAgICAgICAgIHR5cGU6IE1PVkVfQ0FSRFxuICAgICAgICB9KTtcbiAgICAgIH1cblxuICAgICAgaWYgKHRvLmZyb250Q2FyZCAmJiAhdG8uZnJvbnRDYXJkLmlzRmFjZVVwKSB7XG4gICAgICAgIHRoaXMuX2ZhY2VVcENhcmQoe2NhcmQ6IHRvLmZyb250Q2FyZH0pO1xuICAgICAgICB0aGlzLl9hY3Rpb25IaXN0b3J5LmFkZCh7Y2FyZDogdG8uZnJvbnRDYXJkLCB0eXBlOiBGQUNFX1VQX0NBUkR9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9hY3Rpb25IaXN0b3J5LmFkZCh7dHlwZTogUEFVU0V9KTtcbiAgfVxuXG4gIGdldCBmcm9udERyYXdQaWxlICgpXG4gIHtcbiAgICBsZXQgZHJhd1BpbGU6UGlsZSB8IHVuZGVmaW5lZDtcblxuICAgIGZvciAobGV0IGluZGV4ID0gdGhpcy5fZHJhd1BpbGVzLmxlbmd0aCAtIDE7IGluZGV4ID49IDA7IGluZGV4LS0pXG4gICAge1xuICAgICAgaWYgKHRoaXMuX2RyYXdQaWxlc1tpbmRleF0uY2FyZHMubGVuZ3RoID09PSB0aGlzLl9zZXR0aW5ncy5udW1iZXJPZlRhYmxlYXVQaWxlcylcbiAgICAgIHtcbiAgICAgICAgZHJhd1BpbGUgPSB0aGlzLl9kcmF3UGlsZXNbaW5kZXhdO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gZHJhd1BpbGU7XG4gIH1cblxuICBkZWFsQ2FyZHNGcm9tRHJhd1BpbGUgKClcbiAge1xuICAgIGNvbnN0IGRyYXdQaWxlID0gdGhpcy5mcm9udERyYXdQaWxlO1xuXG4gICAgaWYgKCFkcmF3UGlsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGVyZSBhcmUgbm8gY2FyZHMgdG8gZHJhdyBmcm9tIGRyYXcgcGlsZXMuJyk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuX3RhYmxlYXVQaWxlcy5sZW5ndGg7IGluZGV4KyspXG4gICAge1xuICAgICAgY29uc3QgdGFibGVhdVBpbGUgPSB0aGlzLl90YWJsZWF1UGlsZXNbaW5kZXhdO1xuICAgICAgdGhpcy5fbW92ZUNhcmRCZXR3ZWVuUGlsZXMoe1xuICAgICAgICBmcm9tOiBkcmF3UGlsZSxcbiAgICAgICAgdG86IHRhYmxlYXVQaWxlLFxuICAgICAgICBzaXplOiAxXG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2FjdGlvbkhpc3RvcnkuYWRkKHtcbiAgICAgICAgZnJvbTogZHJhd1BpbGUsXG4gICAgICAgIHRvOiB0YWJsZWF1UGlsZSxcbiAgICAgICAgc2l6ZTogMSxcbiAgICAgICAgdHlwZTogTU9WRV9DQVJEXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCB0YWJsZWF1UGlsZSBvZiB0aGlzLl90YWJsZWF1UGlsZXMpXG4gICAge1xuICAgICAgaWYgKHRhYmxlYXVQaWxlLmZyb250Q2FyZCAmJiAhdGFibGVhdVBpbGUuZnJvbnRDYXJkLmlzRmFjZVVwKSB7XG4gICAgICAgIHRoaXMuX2ZhY2VVcENhcmQoe2NhcmQ6dGFibGVhdVBpbGUuZnJvbnRDYXJkfSk7XG4gICAgICAgIHRoaXMuX2FjdGlvbkhpc3RvcnkuYWRkKHtcbiAgICAgICAgICBjYXJkOiB0YWJsZWF1UGlsZS5mcm9udENhcmQsXG4gICAgICAgICAgdHlwZTogRkFDRV9VUF9DQVJEXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2FjdGlvbkhpc3RvcnkuYWRkKHt0eXBlOiBQQVVTRX0pO1xuICB9XG5cbiAgdW5kbyAoKVxuICB7XG4gICAgLy8gY29uc29sZS5sb2codGhpcy5fYWN0aW9uSGlzdG9yeS5hY3Rpb25zLm1hcCgoYSwgaW5kZXgsIF8pID0+IHtcbiAgICAvLyAgIHJldHVybiAoYS50eXBlKTtcbiAgICAvLyB9KSk7XG5cbiAgICBsb29wRGVsZXRlUGF1c2VzOiBmb3IgKDs7KVxuICAgIHtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuX2FjdGlvbkhpc3RvcnkubGF0ZXN0O1xuXG4gICAgICBpZiAoIWFjdGlvbikgYnJlYWsgbG9vcERlbGV0ZVBhdXNlcztcblxuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSlcbiAgICAgIHtcbiAgICAgICAgY2FzZSBQQVVTRTpcbiAgICAgICAgICB0aGlzLl9hY3Rpb25IaXN0b3J5LnJlbW92ZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrIGxvb3BEZWxldGVQYXVzZXM7XG4gICAgICB9O1xuICAgIH07XG5cbiAgICBsb29wRXhlY3V0ZVVuZG9BY3Rpb25zOiBmb3IgKDs7KVxuICAgIHtcbiAgICAgIGNvbnN0IGFjdGlvbiA9IHRoaXMuX2FjdGlvbkhpc3RvcnkubGF0ZXN0O1xuXG4gICAgICBpZiAoIWFjdGlvbikgYnJlYWsgbG9vcEV4ZWN1dGVVbmRvQWN0aW9ucztcblxuICAgICAgc3dpdGNoIChhY3Rpb24udHlwZSlcbiAgICAgIHtcbiAgICAgICAgY2FzZSBGQUNFX1VQX0NBUkQ6XG4gICAgICAgICAgYWN0aW9uLmNhcmQuZmFjZURvd24oKTtcbiAgICAgICAgICB0aGlzLl9hY3Rpb25IaXN0b3J5LnJlbW92ZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIE1PVkVfQ0FSRDpcbiAgICAgICAgICB0aGlzLl9tb3ZlQ2FyZEJldHdlZW5QaWxlcyh7XG4gICAgICAgICAgICBmcm9tOiBhY3Rpb24udG8sXG4gICAgICAgICAgICB0bzogYWN0aW9uLmZyb20sXG4gICAgICAgICAgICBzaXplOiBhY3Rpb24uc2l6ZVxuICAgICAgICAgIH0pO1xuICAgICAgICAgIHRoaXMuX2FjdGlvbkhpc3RvcnkucmVtb3ZlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgUEFVU0U6XG4gICAgICAgICAgdGhpcy5fYWN0aW9uSGlzdG9yeS5yZW1vdmUoKTtcbiAgICAgICAgICBicmVhayBsb29wRXhlY3V0ZVVuZG9BY3Rpb25zO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGJyZWFrO1xuICAgICAgfTtcbiAgICB9XG4gIH1cblxuICB0b1N0cmluZygpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5fcGlsZXMubWFwKHAgPT4gcC5sYWJlbCArIFwiIFwiICsgcC50b1N0cmluZygpKS5qb2luKCdcXG4nKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xuaW1wb3J0IHtQaWxlfSBmcm9tICcuL3BpbGUnO1xuXG5leHBvcnQgY29uc3QgRkFDRV9VUF9DQVJEID0gJ0ZBQ0VfVVBfQ0FSRCc7XG5leHBvcnQgY29uc3QgTU9WRV9DQVJEID0gJ01PVkVfQ0FSRCc7XG5leHBvcnQgY29uc3QgUEFVU0UgPSAnUEFVU0UnO1xuXG5pbnRlcmZhY2UgRmFjZVVwQWN0aW9uIHtcbiAgdHlwZTogdHlwZW9mIEZBQ0VfVVBfQ0FSRCxcbiAgY2FyZDogQ2FyZFxufVxuXG5pbnRlcmZhY2UgTW92ZUNhcmRBY3Rpb24ge1xuICB0eXBlOiB0eXBlb2YgTU9WRV9DQVJELFxuICBmcm9tOlBpbGUsXG4gIHRvOlBpbGUsXG4gIHNpemU6bnVtYmVyXG59XG5cbmludGVyZmFjZSBQYXVzZUFjdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBQQVVTRVxufVxuXG5leHBvcnQgdHlwZSBVbmRvYWJsZUFjdGlvbiA9IEZhY2VVcEFjdGlvbiB8IE1vdmVDYXJkQWN0aW9uIHwgUGF1c2VBY3Rpb247XG5cbmV4cG9ydCBjbGFzcyBVbmRvYWJsZUFjdGlvbkhpc3RvcnlcbntcbiAgcHJpdmF0ZSBfYWN0aW9uczpVbmRvYWJsZUFjdGlvbltdID0gW107XG5cbiAgYWRkIChhY3Rpb246VW5kb2FibGVBY3Rpb24pXG4gIHtcbiAgICB0aGlzLl9hY3Rpb25zID0gWy4uLnRoaXMuX2FjdGlvbnMsIGFjdGlvbl07XG4gIH1cblxuICByZW1vdmUgKClcbiAge1xuICAgIHRoaXMuX2FjdGlvbnMgPSB0aGlzLl9hY3Rpb25zLnNsaWNlKDAsIC0xKTtcbiAgfVxuXG4gIGdldCBsYXRlc3QgKClcbiAge1xuICAgIHJldHVybiB0aGlzLl9hY3Rpb25zLmxlbmd0aCA9PT0gMCA/IHVuZGVmaW5lZCA6IHRoaXMuX2FjdGlvbnNbdGhpcy5fYWN0aW9ucy5sZW5ndGggLSAxXTtcbiAgfVxuXG4gIGdldCBhY3Rpb25zICgpXG4gIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX2FjdGlvbnNdO1xuICB9XG59XG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gXCJwaGFzZXJcIjtcbmltcG9ydCB7VGFibGVHYW1lT2JqZWN0V2l0aEV2ZW50IGFzIFRhYmxlR2FtZU9iamVjdH0gZnJvbSAnLi4vZ2FtZS1vYmplY3RzLXdpdGgtZXZlbnRzL3RhYmxlJztcbi8vIGltcG9ydCB7UGlsZUdhbWVPYmplY3RXaXRoRXZlbnQgYXMgUGlsZUdhbWVPYmplY3R9IGZyb20gJy4uL2dhbWUtb2JqZWN0cy13aXRoLWV2ZW50cy9waWxlJztcbmltcG9ydCB7Q2FyZEdhbWVPYmplY3RXaXRoRXZlbnQgYXMgQ2FyZEdhbWVPYmplY3R9IGZyb20gJy4uL2dhbWUtb2JqZWN0cy13aXRoLWV2ZW50cy9jYXJkJztcbmltcG9ydCB7ZW1pdHRlciBhcyBnYW1lT2JqZWN0RXZlbnRFbWl0dGVyfSBmcm9tICcuLi9nYW1lLW9iamVjdHMtd2l0aC1ldmVudHMvZW1pdHRlcic7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnLi4vZ2FtZS1vYmplY3RzL2J1dHRvbic7XG5pbXBvcnQge0NhcmRXaXRoRXZlbnQgYXMgQ2FyZH0gZnJvbSAnLi4vbW9kZWxzLXdpdGgtZXZlbnRzL2NhcmQnO1xuaW1wb3J0IHtQaWxlV2l0aEV2ZW50IGFzIFBpbGV9IGZyb20gJy4uL21vZGVscy13aXRoLWV2ZW50cy9waWxlJztcbmltcG9ydCB7VGFibGVXaXRoRXZlbnQgYXMgVGFibGV9IGZyb20gJy4uL21vZGVscy13aXRoLWV2ZW50cy90YWJsZSc7XG5pbXBvcnQge2NyZWF0ZUNhcmRzV2l0aEV2ZW50cyBhcyBjcmVhdGVDYXJkc30gZnJvbSAnLi4vbW9kZWxzLXdpdGgtZXZlbnRzL2NyZWF0ZS1jYXJkcyc7XG5pbXBvcnQge3JhbmRvbWl6ZUFycmF5fSBmcm9tICcuLi9tb2RlbHMvY3JlYXRlLWNhcmRzJztcbmltcG9ydCB7ZW1pdHRlciBhcyBtb2RlbEV2ZW50RW1pdHRlcn0gZnJvbSAnLi4vbW9kZWxzLXdpdGgtZXZlbnRzL2VtaXR0ZXInO1xuaW1wb3J0IHtKb2JRdWV1ZX0gZnJvbSAnLi4vam9iLXF1ZXVlJztcbi8vIGltcG9ydCB7ZGVib3VuY2V9IGZyb20gJ3VuZGVyc2NvcmUnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNYWluU2NlbmUgZXh0ZW5kcyBQaGFzZXIuU2NlbmVcbntcbiAgcHJpdmF0ZSBfX3RhYmxlOlRhYmxlIHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIF9fdGFibGVHYW1lT2JqZWN0OlRhYmxlR2FtZU9iamVjdCB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfY2FyZEFuaW1hdGlvblF1ZXVlOkpvYlF1ZXVlPHZvaWQ+ID0gbmV3IEpvYlF1ZXVlPHZvaWQ+KCk7XG4gIHByaXZhdGUgX2hpbnRBbmltYXRpb25RdWV1ZTpKb2JRdWV1ZTx2b2lkPiA9IG5ldyBKb2JRdWV1ZTx2b2lkPigpO1xuICAvLyBwcml2YXRlIF9kcmFnUGlsZUFuaW1hdGlvblF1ZXVlOlByb21pc2VRdWV1ZTx2b2lkPiA9IG5ldyBQcm9taXNlUXVldWU8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoJ21haW4nKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF90YWJsZSAoKSB7XG4gICAgaWYgKCF0aGlzLl9fdGFibGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGFibGUgaXMgbm90IHJlYWR5LicpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fX3RhYmxlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3RhYmxlR2FtZU9iamVjdCAoKSB7XG4gICAgaWYgKCF0aGlzLl9fdGFibGVHYW1lT2JqZWN0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RhYmxlIEdhbWUgT2JqZWN0IGlzIG5vdCByZWFkeS4nKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX190YWJsZUdhbWVPYmplY3Q7XG4gIH1cblxuICBhc3luYyBjcmVhdGUgKClcbiAge1xuICAgIHRoaXMuX190YWJsZSA9IG5ldyBUYWJsZSh7XG4gICAgICBudW1iZXJPZlRhYmxlYXVQaWxlczogMTAsXG4gICAgICBudW1iZXJPZkRyYXdQaWxlczogNSxcbiAgICAgIGNhcmRzOiBjcmVhdGVDYXJkcyh7XG4gICAgICAgIG51bWJlck9mRGVja3NVc2VkOiA0LFxuICAgICAgICBudW1iZXJPZlN1aXRzOiAyXG4gICAgICB9KVxuICAgIH0pO1xuXG4gICAgdGhpcy5fX3RhYmxlR2FtZU9iamVjdCA9IG5ldyBUYWJsZUdhbWVPYmplY3Qoe1xuICAgICAgc2NlbmU6IHRoaXMsXG4gICAgICBkZWNrUGlsZUlkOiB0aGlzLl90YWJsZS5kZWNrUGlsZS5pZCxcbiAgICAgIGRyYXdQaWxlc0lkczogdGhpcy5fdGFibGUuZHJhd1BpbGVzLm1hcChwID0+IHAuaWQpLFxuICAgICAgdGFibGVhdVBpbGVzSWRzOiB0aGlzLl90YWJsZS50YWJsZWF1UGlsZXMubWFwKHAgPT4gcC5pZCksXG4gICAgICBkaXNjYXJkUGlsZXNJZHM6IHRoaXMuX3RhYmxlLmRpc2NhcmRQaWxlcy5tYXAocCA9PiBwLmlkKSxcbiAgICAgIGRyYWdQaWxlSWQ6IFwiZHJhZy1waWxlXCIsXG4gICAgICBoaW50UGlsZUlkOiBcImhpbnQtcGlsZVwiLFxuICAgICAgY2FyZEdhbWVPYmplY3RzOiB0aGlzLl90YWJsZS5jYXJkcy5tYXAoY2FyZCA9PiBuZXcgQ2FyZEdhbWVPYmplY3Qoe1xuICAgICAgICBzY2VuZTogdGhpcyxcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogMCxcbiAgICAgICAgc3VpdDogY2FyZC5zdWl0LFxuICAgICAgICByYW5rOiBjYXJkLnJhbmssXG4gICAgICAgIG5hbWU6IGNhcmQuaWRcbiAgICAgIH0pKVxuICAgIH0pO1xuXG4gICAgdGhpcy5jaGlsZHJlbi5hZGQodGhpcy5fdGFibGVHYW1lT2JqZWN0KTtcblxuICAgIGNvbnN0IHVuZG9CdXR0b24gPSBuZXcgQnV0dG9uKHtcbiAgICAgIHNjZW5lOiB0aGlzLFxuICAgICAgeDogMTAwLFxuICAgICAgeTogNjAwLFxuICAgICAgbGFiZWw6ICdVTkRPJ1xuICAgIH0pO1xuICAgIHVuZG9CdXR0b24ub24oJ3BvaW50ZXJkb3duJywgKCkgPT4ge1xuICAgICAgaWYgKHVuZG9CdXR0b24uYWN0aXZlKSB0aGlzLl90YWJsZS51bmRvKCk7XG4gICAgfSk7XG4gICAgdGhpcy5jaGlsZHJlbi5hZGQodW5kb0J1dHRvbik7XG4gICAgdGhpcy5fY2FyZEFuaW1hdGlvblF1ZXVlLm9uUXVldWVTdGFydCgoKSA9PiB7XG4gICAgICB1bmRvQnV0dG9uLnNldEFjdGl2ZShmYWxzZSk7XG4gICAgICB1bmRvQnV0dG9uLnNldEFscGhhKDAuNSk7XG4gICAgfSk7XG4gICAgdGhpcy5fY2FyZEFuaW1hdGlvblF1ZXVlLm9uUXVldWVFbmQoKCkgPT4ge1xuICAgICAgdW5kb0J1dHRvbi5zZXRBY3RpdmUodHJ1ZSk7XG4gICAgICB1bmRvQnV0dG9uLnNldEFscGhhKDEpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgdUtleSA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5VKTtcbiAgICB1S2V5Lm9uKCdkb3duJywgKGV2ZW50OktleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGlmICh1bmRvQnV0dG9uLmFjdGl2ZSkgdGhpcy5fdGFibGUudW5kbygpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaGludEJ1dHRvbiA9IG5ldyBCdXR0b24oe1xuICAgICAgc2NlbmU6IHRoaXMsXG4gICAgICB4OiAyNTAsXG4gICAgICB5OiA2MDAsXG4gICAgICBsYWJlbDogJ0hJTlQnXG4gICAgfSk7XG4gICAgaGludEJ1dHRvbi5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XG4gICAgICBpZiAoaGludEJ1dHRvbi5hY3RpdmUpIHtcbiAgICAgICAgdGhpcy5zaG93SGludHMoKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgICB0aGlzLmNoaWxkcmVuLmFkZChoaW50QnV0dG9uKTtcbiAgICB0aGlzLl9jYXJkQW5pbWF0aW9uUXVldWUub25RdWV1ZVN0YXJ0KCgpID0+IHtcbiAgICAgIGhpbnRCdXR0b24uc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgIGhpbnRCdXR0b24uc2V0QWxwaGEoMC41KTtcbiAgICB9KTtcbiAgICB0aGlzLl9jYXJkQW5pbWF0aW9uUXVldWUub25RdWV1ZUVuZCgoKSA9PiB7XG4gICAgICBoaW50QnV0dG9uLnNldEFjdGl2ZSh0cnVlKTtcbiAgICAgIGhpbnRCdXR0b24uc2V0QWxwaGEoMSk7XG4gICAgfSk7XG5cbiAgICBnYW1lT2JqZWN0RXZlbnRFbWl0dGVyLm9uKFwiQ0FSRF9QT0lOVEVST1ZFUlwiLCB0aGlzLm9uQ2FyZFBvaW50ZXJPdmVyLmJpbmQodGhpcykpO1xuICAgIGdhbWVPYmplY3RFdmVudEVtaXR0ZXIub24oXCJDQVJEX1BPSU5URVJPVVRcIiwgdGhpcy5vbkNhcmRQb2ludGVyT3V0LmJpbmQodGhpcykpO1xuICAgIGdhbWVPYmplY3RFdmVudEVtaXR0ZXIub24oXCJDQVJEX1BPSU5URVJET1dOXCIsIHRoaXMub25DYXJkUG9pbnRlckRvd24uYmluZCh0aGlzKSk7XG4gICAgZ2FtZU9iamVjdEV2ZW50RW1pdHRlci5vbihcIkNBUkRfRFJBR1NUQVJUXCIsIHRoaXMub25DYXJkRHJhZ1N0YXJ0LmJpbmQodGhpcykpO1xuICAgIGdhbWVPYmplY3RFdmVudEVtaXR0ZXIub24oXCJDQVJEX0RSQUdcIiwgdGhpcy5vbkNhcmREcmFnLmJpbmQodGhpcykpO1xuICAgIGdhbWVPYmplY3RFdmVudEVtaXR0ZXIub24oXCJDQVJEX0RST1BcIiwgdGhpcy5vbkNhcmREcm9wLmJpbmQodGhpcykpO1xuICAgIGdhbWVPYmplY3RFdmVudEVtaXR0ZXIub24oXCJDQVJEX0RSQUdFTkRcIiwgdGhpcy5vbkNhcmREcmFnRW5kLmJpbmQodGhpcykpO1xuICAgIG1vZGVsRXZlbnRFbWl0dGVyLm9uKFwiTU9WRV9DQVJEU19CRVRXRUVOX1BJTEVTXCIsIHRoaXMub25Nb3ZlQ2FyZHNCZXR3ZWVuUGlsZXMuYmluZCh0aGlzKSk7XG4gICAgbW9kZWxFdmVudEVtaXR0ZXIub24oXCJGTElQX09WRVJfQ0FSRFwiLCB0aGlzLm9uRmxpcE92ZXJDYXJkLmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5fdGFibGUuc3RhcnRHYW1lKCk7XG5cbiAgICB0aGlzLmlucHV0Lm9uKCdwb2ludGVyZG93bicsIChwb2ludGVyOlBoYXNlci5JbnB1dC5Qb2ludGVyKSA9PiB7XG4gICAgICBpZighdGhpcy5pbnB1dC5oaXRUZXN0UG9pbnRlcihwb2ludGVyKS5pbmNsdWRlcyhoaW50QnV0dG9uKSlcbiAgICAgIHtcbiAgICAgICAgdGhpcy5faGludEFuaW1hdGlvblF1ZXVlLmNhbmNlbCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgb25DYXJkUG9pbnRlck92ZXIgKHtjYXJkR2FtZU9iamVjdCwgcG9pbnRlcn06e2NhcmRHYW1lT2JqZWN0OkNhcmRHYW1lT2JqZWN0LCBwb2ludGVyOlBoYXNlci5JbnB1dC5Qb2ludGVyfSlcbiAge1xuICAgIGlmICghdGhpcy5fY2FyZEFuaW1hdGlvblF1ZXVlLmlzUHJvY2Vzc2luZykge1xuICAgICAgdGhpcy5hZGRIaWdobGlnaHRUb0NhcmRHYW1lT2JqZWN0KHtjYXJkR2FtZU9iamVjdH0pO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl9jYXJkQW5pbWF0aW9uUXVldWUuYWRkKGFzeW5jICgpID0+IHtcbiAgICAgICAgaWYodGhpcy5pbnB1dC5oaXRUZXN0UG9pbnRlcihwb2ludGVyKVswXSA9PT0gY2FyZEdhbWVPYmplY3QpIHtcbiAgICAgICAgICB0aGlzLmFkZEhpZ2hsaWdodFRvQ2FyZEdhbWVPYmplY3Qoe2NhcmRHYW1lT2JqZWN0fSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIGFkZEhpZ2hsaWdodFRvQ2FyZEdhbWVPYmplY3QgKHtjYXJkR2FtZU9iamVjdH06e2NhcmRHYW1lT2JqZWN0OkNhcmRHYW1lT2JqZWN0fSlcbiAge1xuICAgIC8vIGNvbnN0IHRhcmdldFBpbGUgPSB0aGlzLl90YWJsZS5nZXRQaWxlQnkocGlsZSA9PiBwaWxlLmNhcmRzLmZpbmQoY2FyZCA9PiBjYXJkLmlkID09PSBjYXJkR2FtZU9iamVjdC5uYW1lKSk7XG4gICAgY29uc3QgdGFyZ2V0UGlsZSA9IHRoaXMuX3RhYmxlLmdldFBpbGVCeUNhcmRJZChjYXJkR2FtZU9iamVjdC5uYW1lKTtcblxuICAgIGlmIChjYXJkR2FtZU9iamVjdC5pc0ZhY2VVcFxuICAgICAgJiYgdGhpcy5fdGFibGUudGFibGVhdVBpbGVzLmluY2x1ZGVzKHRhcmdldFBpbGUpKVxuICAgIHtcbiAgICAgIC8vIGNvbnN0IGZyb21QaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5nZXRQaWxlR2FtZU9iamVjdEJ5KHAgPT4gcC5uYW1lID09PSB0YXJnZXRQaWxlLmlkKTtcbiAgICAgIGNvbnN0IGZyb21QaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5nZXRQaWxlR2FtZU9iamVjdEJ5TmFtZSh0YXJnZXRQaWxlLmlkKTtcbiAgICAgIGNvbnN0IHNpemUgPSBmcm9tUGlsZUdhbWVPYmplY3QuY2FyZEdhbWVPYmplY3RzLmxlbmd0aCAtIGZyb21QaWxlR2FtZU9iamVjdC5jYXJkR2FtZU9iamVjdHMuaW5kZXhPZihjYXJkR2FtZU9iamVjdCk7XG5cbiAgICAgIGlmIChQaWxlLmNoZWNrSWZDYXJkc0FyZURlc2NlbmRpbmcoe2NhcmRzOiB0YXJnZXRQaWxlLmNhcmRzLnNsaWNlKC1zaXplKSwgZmFjZVVwOiB0cnVlLCBpblN1aXQ6IHRydWV9KSlcbiAgICAgIHtcbiAgICAgICAgY2FyZEdhbWVPYmplY3QuYWRkSGlnaGxpZ2h0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuX3RhYmxlLmZyb250RHJhd1BpbGUgPT09IHRhcmdldFBpbGUpXG4gICAge1xuICAgICAgY2FyZEdhbWVPYmplY3QuYWRkSGlnaGxpZ2h0KCk7XG4gICAgfVxuICB9XG5cbiAgb25DYXJkUG9pbnRlck91dCAoe2NhcmRHYW1lT2JqZWN0fTp7Y2FyZEdhbWVPYmplY3Q6Q2FyZEdhbWVPYmplY3R9KVxuICB7XG4gICAgY2FyZEdhbWVPYmplY3QucmVtb3ZlSGlnaGxpZ2h0KCk7XG4gIH1cblxuICBvbkNhcmRQb2ludGVyRG93biAoe2NhcmRHYW1lT2JqZWN0fTp7Y2FyZEdhbWVPYmplY3Q6Q2FyZEdhbWVPYmplY3R9KVxuICB7XG4gICAgaWYgKCFjYXJkR2FtZU9iamVjdC5pc0hpZ2hMaWdodGVkKSByZXR1cm47XG5cbiAgICAvLyBjb25zdCB0YXJnZXRQaWxlID0gdGhpcy5fdGFibGUuZ2V0UGlsZUJ5KHBpbGUgPT4gcGlsZS5jYXJkcy5maW5kKGNhcmQgPT4gY2FyZC5pZCA9PT0gY2FyZEdhbWVPYmplY3QubmFtZSkpO1xuICAgIFxuICAgIGNvbnN0IHRhcmdldFBpbGUgPSB0aGlzLl90YWJsZS5nZXRQaWxlQnlDYXJkSWQoY2FyZEdhbWVPYmplY3QubmFtZSk7XG5cbiAgICBpZiAodGhpcy5fdGFibGUuZnJvbnREcmF3UGlsZSA9PT0gdGFyZ2V0UGlsZSlcbiAgICB7XG4gICAgICB0aGlzLl90YWJsZS5kZWFsQ2FyZHNGcm9tRHJhd1BpbGUoKTtcbiAgICB9XG4gIH1cblxuICBvbkNhcmREcmFnU3RhcnQgKHtjYXJkR2FtZU9iamVjdH06e2NhcmRHYW1lT2JqZWN0OkNhcmRHYW1lT2JqZWN0fSlcbiAge1xuICAgIGlmICghY2FyZEdhbWVPYmplY3QuaXNIaWdoTGlnaHRlZCkgcmV0dXJuO1xuXG4gICAgLy8gY29uc3QgdGFyZ2V0UGlsZSA9IHRoaXMuX3RhYmxlLmdldFBpbGVCeShwaWxlID0+IHBpbGUuY2FyZHMuZmluZChjYXJkID0+IGNhcmQuaWQgPT09IGNhcmRHYW1lT2JqZWN0Lm5hbWUpKTtcbiAgICBjb25zdCB0YXJnZXRQaWxlID0gdGhpcy5fdGFibGUuZ2V0UGlsZUJ5Q2FyZElkKGNhcmRHYW1lT2JqZWN0Lm5hbWUpO1xuICAgIGNvbnN0IGRyYWdQaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5kcmFnUGlsZUdhbWVPYmplY3Q7XG5cbiAgICBpZiAoY2FyZEdhbWVPYmplY3QuaXNGYWNlVXBcbiAgICAgICYmIHRoaXMuX3RhYmxlLnRhYmxlYXVQaWxlcy5pbmNsdWRlcyh0YXJnZXRQaWxlKVxuICAgICAgJiYgIWRyYWdQaWxlR2FtZU9iamVjdC5hY3RpdmUpXG4gICAge1xuICAgICAgLy8gY29uc3QgZnJvbVBpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnkocCA9PiBwLm5hbWUgPT09IHRhcmdldFBpbGUuaWQpO1xuICAgICAgY29uc3QgZnJvbVBpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnlOYW1lKHRhcmdldFBpbGUuaWQpO1xuICAgICAgY29uc3Qgc2l6ZSA9IGZyb21QaWxlR2FtZU9iamVjdC5jYXJkR2FtZU9iamVjdHMubGVuZ3RoIC0gZnJvbVBpbGVHYW1lT2JqZWN0LmNhcmRHYW1lT2JqZWN0cy5pbmRleE9mKGNhcmRHYW1lT2JqZWN0KTtcblxuICAgICAgaWYgKFBpbGUuY2hlY2tJZkNhcmRzQXJlRGVzY2VuZGluZyh7Y2FyZHM6IHRhcmdldFBpbGUuY2FyZHMuc2xpY2UoLXNpemUpLCBmYWNlVXA6IHRydWUsIGluU3VpdDogdHJ1ZX0pKVxuICAgICAge1xuICAgICAgICBjb25zdCBkcmFnUGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZHJhZ1BpbGVHYW1lT2JqZWN0O1xuICAgICAgICBjb25zdCB5ID0gY2FyZEdhbWVPYmplY3QueTtcbiAgICAgICAgZHJhZ1BpbGVHYW1lT2JqZWN0LnNldEFjdGl2ZSh0cnVlKTtcbiAgICAgICAgdGhpcy5fdGFibGVHYW1lT2JqZWN0LmJyaW5nVG9Ub3AoZHJhZ1BpbGVHYW1lT2JqZWN0KTtcbiAgICAgICAgZHJhZ1BpbGVHYW1lT2JqZWN0LnggPSBmcm9tUGlsZUdhbWVPYmplY3QueDtcbiAgICAgICAgZHJhZ1BpbGVHYW1lT2JqZWN0LnkgPSBmcm9tUGlsZUdhbWVPYmplY3QueSArIHk7XG4gICAgICAgIGRyYWdQaWxlR2FtZU9iamVjdC5wbGFjZUNhcmRHYW1lT2JqZWN0cyh7Y2FyZEdhbWVPYmplY3RzOiBmcm9tUGlsZUdhbWVPYmplY3QuZHJhd0Zyb250Q2FyZEdhbWVPYmplY3RzKHtzaXplfSl9KTtcbiAgICAgICAgdGhpcy5fY2FyZEFuaW1hdGlvblF1ZXVlLmFkZChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZHJhZ1BpbGVHYW1lT2JqZWN0LmFkanVzdENhcmRHYW1lT2JqZWN0UG9zaXRpb25zV2l0aEFuaW1hdGlvbigpLFxuICAgICAgICAgICAgZHJhZ1BpbGVHYW1lT2JqZWN0LmV4cGFuZFdpdGhBbmltYXRpb24oKVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2FyZERyYWcgKHtwb2ludGVyLCBjYXJkR2FtZU9iamVjdH06e3BvaW50ZXI6UGhhc2VyLklucHV0LlBvaW50ZXIsIGNhcmRHYW1lT2JqZWN0OkNhcmRHYW1lT2JqZWN0fSlcbiAge1xuICAgIGlmICghY2FyZEdhbWVPYmplY3QuaXNIaWdoTGlnaHRlZCkgcmV0dXJuO1xuXG4gICAgY29uc3QgdGFyZ2V0UGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZ2V0UGlsZUdhbWVPYmplY3RCeUNhcmRHYW1lT2JqZWN0TmFtZShjYXJkR2FtZU9iamVjdC5uYW1lKTtcblxuICAgIGNvbnN0IGRyYWdQaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5kcmFnUGlsZUdhbWVPYmplY3Q7XG4gICAgaWYgKHRhcmdldFBpbGVHYW1lT2JqZWN0ID09PSBkcmFnUGlsZUdhbWVPYmplY3QgJiYgZHJhZ1BpbGVHYW1lT2JqZWN0LmFjdGl2ZSlcbiAgICB7XG4gICAgICBjb25zdCBkZWx0YVggPSBwb2ludGVyLnggLSBwb2ludGVyLnByZXZQb3NpdGlvbi54O1xuICAgICAgY29uc3QgZGVsdGFZID0gcG9pbnRlci55IC0gcG9pbnRlci5wcmV2UG9zaXRpb24ueTtcbiAgICAgIGRyYWdQaWxlR2FtZU9iamVjdC54ICs9IGRlbHRhWDtcbiAgICAgIGRyYWdQaWxlR2FtZU9iamVjdC55ICs9IGRlbHRhWTtcbiAgICB9XG4gIH1cblxuICBvbkNhcmREcm9wICh7em9uZSwgY2FyZEdhbWVPYmplY3R9Ont6b25lOlBoYXNlci5HYW1lT2JqZWN0cy5ab25lLCBjYXJkR2FtZU9iamVjdDpDYXJkR2FtZU9iamVjdH0pXG4gIHtcbiAgICBjb25zdCB0YXJnZXRQaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5nZXRQaWxlR2FtZU9iamVjdEJ5Q2FyZEdhbWVPYmplY3ROYW1lKGNhcmRHYW1lT2JqZWN0Lm5hbWUpO1xuICAgIGNvbnN0IGRyYWdQaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5kcmFnUGlsZUdhbWVPYmplY3Q7XG4gICAgaWYgKHRhcmdldFBpbGVHYW1lT2JqZWN0ID09PSBkcmFnUGlsZUdhbWVPYmplY3QgJiYgZHJhZ1BpbGVHYW1lT2JqZWN0LmFjdGl2ZSlcbiAgICB7XG4gICAgICBjb25zdCBmcm9tUGlsZSA9IHRoaXMuX3RhYmxlLmdldFBpbGVCeUNhcmRJZChjYXJkR2FtZU9iamVjdC5uYW1lKTtcbiAgICAgIGNvbnN0IGZyb21QaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5nZXRQaWxlR2FtZU9iamVjdEJ5TmFtZShmcm9tUGlsZS5pZCk7XG4gICAgICBjb25zdCB0b1BpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnkocCA9PiBwLnpvbmUgPT09IHpvbmUpO1xuICAgICAgY29uc3QgdG9QaWxlID0gdGhpcy5fdGFibGUuZ2V0UGlsZUJ5SWQodG9QaWxlR2FtZU9iamVjdC5uYW1lKTtcbiAgICAgIGNvbnN0IHNpemUgPSBkcmFnUGlsZUdhbWVPYmplY3QuY2FyZEdhbWVPYmplY3RzLmxlbmd0aDtcbiAgICAgIGNvbnN0IGNhcmRHYW1lT2JqZWN0cyA9IGRyYWdQaWxlR2FtZU9iamVjdC5kcmF3RnJvbnRDYXJkR2FtZU9iamVjdHMoe3NpemV9KTtcbiAgICAgIGZyb21QaWxlR2FtZU9iamVjdC5wbGFjZUNhcmRHYW1lT2JqZWN0cyh7Y2FyZEdhbWVPYmplY3RzfSk7XG5cbiAgICAgIGNvbnN0IF9jYXJkcyA9IGNhcmRHYW1lT2JqZWN0cy5tYXAoY09iaiA9PiB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLl90YWJsZS5jYXJkcy5maW5kKGMgPT4gY09iai5uYW1lID09PSBjLmlkKTtcbiAgICAgICAgaWYgKCFjYXJkKSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGNvcnJlc3BvbmRpbmcgY2FyZHMuXCIpO1xuICAgICAgICByZXR1cm4gY2FyZDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXRvUGlsZS5mcm9udENhcmRcbiAgICAgICAgfHwgUGlsZS5jaGVja0lmQ2FyZHNBcmVEZXNjZW5kaW5nKHtjYXJkczogW3RvUGlsZS5mcm9udENhcmQsIC4uLl9jYXJkc10sIGZhY2VVcDogdHJ1ZX0pKVxuICAgICAge1xuICAgICAgICB0aGlzLl90YWJsZS5tb3ZlQ2FyZEJldHdlZW5UYWJsZWF1UGlsZXMoe1xuICAgICAgICAgIHRvOiB0b1BpbGUsXG4gICAgICAgICAgZnJvbTogZnJvbVBpbGUsXG4gICAgICAgICAgc2l6ZVxuICAgICAgICB9KTtcbiAgICAgICAgZHJhZ1BpbGVHYW1lT2JqZWN0LnNldEFjdGl2ZShmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jYXJkQW5pbWF0aW9uUXVldWUuYWRkKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBhd2FpdCBmcm9tUGlsZUdhbWVPYmplY3QuYWRqdXN0Q2FyZEdhbWVPYmplY3RQb3NpdGlvbnNXaXRoQW5pbWF0aW9uKCk7XG4gICAgICAgICAgZHJhZ1BpbGVHYW1lT2JqZWN0LnNldEFjdGl2ZShmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2FyZERyYWdFbmQgKHtjYXJkR2FtZU9iamVjdH06e2NhcmRHYW1lT2JqZWN0OkNhcmRHYW1lT2JqZWN0fSlcbiAge1xuICAgIGNvbnN0IHRhcmdldFBpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnlDYXJkR2FtZU9iamVjdE5hbWUoY2FyZEdhbWVPYmplY3QubmFtZSk7XG4gICAgY29uc3QgZHJhZ1BpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmRyYWdQaWxlR2FtZU9iamVjdDtcbiAgICBpZiAodGFyZ2V0UGlsZUdhbWVPYmplY3QgPT09IGRyYWdQaWxlR2FtZU9iamVjdCAmJiBkcmFnUGlsZUdhbWVPYmplY3QuYWN0aXZlKVxuICAgIHtcbiAgICAgIGNvbnN0IHNpemUgPSBkcmFnUGlsZUdhbWVPYmplY3QuY2FyZEdhbWVPYmplY3RzLmxlbmd0aDtcbiAgICAgIGNvbnN0IGZyb21QaWxlID0gdGhpcy5fdGFibGUuZ2V0UGlsZUJ5Q2FyZElkKGNhcmRHYW1lT2JqZWN0Lm5hbWUpO1xuICAgICAgY29uc3QgZnJvbVBpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnlOYW1lKGZyb21QaWxlLmlkKTtcbiAgICAgIGNvbnN0IGNhcmRHYW1lT2JqZWN0cyA9IGRyYWdQaWxlR2FtZU9iamVjdC5kcmF3RnJvbnRDYXJkR2FtZU9iamVjdHMoe3NpemV9KTtcbiAgICAgIGZyb21QaWxlR2FtZU9iamVjdC5wbGFjZUNhcmRHYW1lT2JqZWN0cyh7Y2FyZEdhbWVPYmplY3RzfSk7XG4gICAgICB0aGlzLl9jYXJkQW5pbWF0aW9uUXVldWUuYWRkKGFzeW5jICgpID0+IHtcbiAgICAgICAgYXdhaXQgZnJvbVBpbGVHYW1lT2JqZWN0LmFkanVzdENhcmRHYW1lT2JqZWN0UG9zaXRpb25zV2l0aEFuaW1hdGlvbigpO1xuICAgICAgICBkcmFnUGlsZUdhbWVPYmplY3Quc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uTW92ZUNhcmRzQmV0d2VlblBpbGVzICh7ZnJvbSwgdG8sIHNpemV9Ontmcm9tOlBpbGUsIHRvOlBpbGUsIHNpemU6bnVtYmVyfSkge1xuICAgIGNvbnN0IGZyb21QaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5nZXRQaWxlR2FtZU9iamVjdEJ5TmFtZShmcm9tLmlkKTtcbiAgICBjb25zdCB0b1BpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnlOYW1lKHRvLmlkKTtcblxuICAgIHRoaXMuX2NhcmRBbmltYXRpb25RdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgY2FyZEdhbWVPYmplY3RzID0gZnJvbVBpbGVHYW1lT2JqZWN0LmRyYXdGcm9udENhcmRHYW1lT2JqZWN0cyh7c2l6ZX0pO1xuICAgICAgdG9QaWxlR2FtZU9iamVjdC5wbGFjZUNhcmRHYW1lT2JqZWN0cyh7Y2FyZEdhbWVPYmplY3RzfSk7XG4gICAgICB0aGlzLl90YWJsZUdhbWVPYmplY3QuYnJpbmdUb1RvcCh0b1BpbGVHYW1lT2JqZWN0KTtcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgdG9QaWxlR2FtZU9iamVjdC5hZGp1c3RDYXJkR2FtZU9iamVjdFBvc2l0aW9uc1dpdGhBbmltYXRpb24oKSxcbiAgICAgICAgZnJvbVBpbGVHYW1lT2JqZWN0LmFkanVzdENhcmRHYW1lT2JqZWN0UG9zaXRpb25zV2l0aEFuaW1hdGlvbigpXG4gICAgICBdKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLl90YWJsZS5pc0NsZWFyKSB7XG4gICAgICB0aGlzLl9jYXJkQW5pbWF0aW9uUXVldWUuYWRkKGFzeW5jICgpID0+IHtcbiAgICAgICAgYWxlcnQoXCJZb3UgYmVhdCB0aGUgZ2FtZSEhIVwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uRmxpcE92ZXJDYXJkICh7Y2FyZH06e2NhcmQ6Q2FyZH0pIHtcbiAgICBjb25zdCBjYXJkR2FybU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5jYXJkR2FtZU9iamVjdHMuZmluZChjID0+IGMubmFtZSA9PT0gY2FyZC5pZCk7XG4gICAgaWYgKGNhcmRHYXJtT2JqZWN0KSB7XG4gICAgICB0aGlzLl9jYXJkQW5pbWF0aW9uUXVldWUuYWRkKCgpID0+IGNhcmRHYXJtT2JqZWN0LmZsaXBPdmVyKGNhcmQuaXNGYWNlVXApKTtcbiAgICB9O1xuICB9XG5cbiAgc2hvd0hpbnRzICgpXG4gIHtcbiAgICBjb25zdCBtb3ZlcyA9IHRoaXMuX3RhYmxlLmdldFBvc3NpYmxlTW92ZXNCZXR3ZWVuVGFibGVhdVBpbGVzKCk7XG4gICAgY29uc3QgaGludFBpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmhpbnRQaWxlR2FtZU9iamVjdDtcbiAgICBjb25zdCBjbGVhckhpbnRQaWxlR2FtZU9iamVjdCA9ICgpID0+IHtcbiAgICAgIGhpbnRQaWxlR2FtZU9iamVjdC5kcmF3RnJvbnRDYXJkR2FtZU9iamVjdHMoe3NpemU6IGhpbnRQaWxlR2FtZU9iamVjdC5jYXJkR2FtZU9iamVjdHMubGVuZ3RofSk7XG4gICAgICBoaW50UGlsZUdhbWVPYmplY3QueCA9IC0xMDAwMDA7XG4gICAgICBoaW50UGlsZUdhbWVPYmplY3QueSA9IC0xMDAwMDA7XG4gICAgfTtcblxuICAgIGZvciAobGV0IHtmcm9tLCB0bywgc2l6ZX0gb2YgbW92ZXMpXG4gICAge1xuICAgICAgdGhpcy5faGludEFuaW1hdGlvblF1ZXVlLmFkZChhc3luYyAob25RdWV1ZUNhbmNlbCkgPT5cbiAgICAgIHtcbiAgICAgICAgY29uc3QgZnJvbVBpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnlOYW1lKGZyb20uaWQpO1xuICAgICAgICBjb25zdCB0b1BpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnlOYW1lKHRvLmlkKTtcbiAgICAgICAgY29uc3Qgb3JpZ2luYWxGcm9udENhcmRHYW1lT2JqZWN0cyA9IGZyb21QaWxlR2FtZU9iamVjdC5nZXRGcm9udEdhbWVPYmplY3RzKHtzaXplfSk7XG5cbiAgICAgICAgaGludFBpbGVHYW1lT2JqZWN0LnggPSBmcm9tUGlsZUdhbWVPYmplY3QueDtcbiAgICAgICAgaGludFBpbGVHYW1lT2JqZWN0LnkgPSBmcm9tUGlsZUdhbWVPYmplY3QueSArIG9yaWdpbmFsRnJvbnRDYXJkR2FtZU9iamVjdHNbb3JpZ2luYWxGcm9udENhcmRHYW1lT2JqZWN0cy5sZW5ndGggLSAxXS55O1xuICAgICAgICBoaW50UGlsZUdhbWVPYmplY3QucGxhY2VDYXJkR2FtZU9iamVjdHMoe2NhcmRHYW1lT2JqZWN0czogb3JpZ2luYWxGcm9udENhcmRHYW1lT2JqZWN0cy5tYXAoKGMsIGluZGV4KSA9PiB7XG4gICAgICAgICAgY29uc3QgY2FyZEdhbWVPYmplY3QgPSBuZXcgQ2FyZEdhbWVPYmplY3Qoe1xuICAgICAgICAgICAgeDogYy54LFxuICAgICAgICAgICAgeTogYy55LFxuICAgICAgICAgICAgcmFuazogYy5yYW5rLFxuICAgICAgICAgICAgc3VpdDogYy5zdWl0LFxuICAgICAgICAgICAgaXNGYWNlVXA6IGMuaXNGYWNlVXAsXG4gICAgICAgICAgICBuYW1lOiAnJyxcbiAgICAgICAgICAgIHNjZW5lOiB0aGlzXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgcmV0dXJuIGNhcmRHYW1lT2JqZWN0O1xuICAgICAgICB9KX0pO1xuXG4gICAgICAgIGhpbnRQaWxlR2FtZU9iamVjdC5hZGp1c3RDYXJkR2FtZU9iamVjdFBvc2l0aW9ucygpO1xuICAgICAgICBoaW50UGlsZUdhbWVPYmplY3Quc2V0QWxwaGEoMC44KTtcbiAgICAgICAgdGhpcy5fdGFibGVHYW1lT2JqZWN0LmJyaW5nVG9Ub3AoaGludFBpbGVHYW1lT2JqZWN0KTtcblxuICAgICAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgICAgICBjb25zdCB0d2VlbiA9IHRoaXMudHdlZW5zLmFkZCh7XG4gICAgICAgICAgICB0YXJnZXRzOiBoaW50UGlsZUdhbWVPYmplY3QsXG4gICAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgICB4OiB0b1BpbGVHYW1lT2JqZWN0LngsXG4gICAgICAgICAgICAgIHk6IHRvUGlsZUdhbWVPYmplY3QueSArIHRvUGlsZUdhbWVPYmplY3QuZ2V0TmV3RnJvbnRDYXJkR2FtZU9iamVjdFBvc2l0aW9uKCkueVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGR1cmF0aW9uOiA4MDAsXG4gICAgICAgICAgICBjb21wbGV0ZURlbGF5OiA0MDAsXG4gICAgICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgICAgY2xlYXJIaW50UGlsZUdhbWVPYmplY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgICAgICBvblF1ZXVlQ2FuY2VsKCgpID0+IHtcbiAgICAgICAgICAgIHR3ZWVuLnN0b3AoKTtcbiAgICAgICAgICAgIGNsZWFySGludFBpbGVHYW1lT2JqZWN0KCk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxufVxuIiwidmFyIG1hcCA9IHtcblx0XCIuL2xvZ1wiOiBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy5qc1wiXG59O1xuXG5cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0KHJlcSkge1xuXHR2YXIgaWQgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKTtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xufVxuZnVuY3Rpb24gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSkge1xuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1hcCwgcmVxKSkge1xuXHRcdHZhciBlID0gbmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIiArIHJlcSArIFwiJ1wiKTtcblx0XHRlLmNvZGUgPSAnTU9EVUxFX05PVF9GT1VORCc7XG5cdFx0dGhyb3cgZTtcblx0fVxuXHRyZXR1cm4gbWFwW3JlcV07XG59XG53ZWJwYWNrQ29udGV4dC5rZXlzID0gZnVuY3Rpb24gd2VicGFja0NvbnRleHRLZXlzKCkge1xuXHRyZXR1cm4gT2JqZWN0LmtleXMobWFwKTtcbn07XG53ZWJwYWNrQ29udGV4dC5yZXNvbHZlID0gd2VicGFja0NvbnRleHRSZXNvbHZlO1xubW9kdWxlLmV4cG9ydHMgPSB3ZWJwYWNrQ29udGV4dDtcbndlYnBhY2tDb250ZXh0LmlkID0gXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdCBzeW5jIF5cXFxcLlxcXFwvbG9nJFwiOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdGlmKF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0pIHtcblx0XHRyZXR1cm4gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHRsb2FkZWQ6IGZhbHNlLFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcblx0bW9kdWxlLmxvYWRlZCA9IHRydWU7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubm1kID0gKG1vZHVsZSkgPT4ge1xuXHRtb2R1bGUucGF0aHMgPSBbXTtcblx0aWYgKCFtb2R1bGUuY2hpbGRyZW4pIG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRyZXR1cm4gbW9kdWxlO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImFwcFwiOiAwXG59O1xuXG52YXIgZGVmZXJyZWRNb2R1bGVzID0gW1xuXHRbXCIuL3NyYy9pbmRleC50c1wiLFwidmVuZG9yc1wiXSxcblx0W1wiLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC9pbmRleC5qcz9odHRwOi8vbG9jYWxob3N0OjgwODBcIixcInZlbmRvcnNcIl1cbl07XG4vLyBubyBjaHVuayBvbiBkZW1hbmQgbG9hZGluZ1xuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWRcblxuLy8gbm8gSE1SXG5cbi8vIG5vIEhNUiBtYW5pZmVzdFxuXG52YXIgY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSAoKSA9PiB7XG5cbn07XG5mdW5jdGlvbiBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwoKSB7XG5cdHZhciByZXN1bHQ7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBkZWZlcnJlZE1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgZGVmZXJyZWRNb2R1bGUgPSBkZWZlcnJlZE1vZHVsZXNbaV07XG5cdFx0dmFyIGZ1bGZpbGxlZCA9IHRydWU7XG5cdFx0Zm9yKHZhciBqID0gMTsgaiA8IGRlZmVycmVkTW9kdWxlLmxlbmd0aDsgaisrKSB7XG5cdFx0XHR2YXIgZGVwSWQgPSBkZWZlcnJlZE1vZHVsZVtqXTtcblx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tkZXBJZF0gIT09IDApIGZ1bGZpbGxlZCA9IGZhbHNlO1xuXHRcdH1cblx0XHRpZihmdWxmaWxsZWQpIHtcblx0XHRcdGRlZmVycmVkTW9kdWxlcy5zcGxpY2UoaS0tLCAxKTtcblx0XHRcdHJlc3VsdCA9IF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gZGVmZXJyZWRNb2R1bGVbMF0pO1xuXHRcdH1cblx0fVxuXHRpZihkZWZlcnJlZE1vZHVsZXMubGVuZ3RoID09PSAwKSB7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXG5cdFx0fVxuXHR9XG5cdHJldHVybiByZXN1bHQ7XG59XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cdC8vIHJlc2V0IHN0YXJ0dXAgZnVuY3Rpb24gc28gaXQgY2FuIGJlIGNhbGxlZCBhZ2FpbiB3aGVuIG1vcmUgc3RhcnR1cCBjb2RlIGlzIGFkZGVkXG5cdF9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblxuXHR9XG5cdGNodW5rTG9hZGluZ0dsb2JhbCA9IGNodW5rTG9hZGluZ0dsb2JhbC5zbGljZSgpO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtMb2FkaW5nR2xvYmFsLmxlbmd0aDsgaSsrKSB3ZWJwYWNrSnNvbnBDYWxsYmFjayhjaHVua0xvYWRpbmdHbG9iYWxbaV0pO1xuXHRyZXR1cm4gKGNoZWNrRGVmZXJyZWRNb2R1bGVzID0gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKSgpO1xufTtcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAoZGF0YSkgPT4ge1xuXHR2YXIgW2NodW5rSWRzLCBtb3JlTW9kdWxlcywgcnVudGltZSwgZXhlY3V0ZU1vZHVsZXNdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwLCByZXNvbHZlcyA9IFtdO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdHJlc29sdmVzLnB1c2goaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdWzBdKTtcblx0XHR9XG5cdFx0aW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gMDtcblx0fVxuXHRmb3IobW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHR9XG5cdH1cblx0aWYocnVudGltZSkgcnVudGltZShfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblx0cGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24oZGF0YSk7XG5cdHdoaWxlKHJlc29sdmVzLmxlbmd0aCkge1xuXHRcdHJlc29sdmVzLnNoaWZ0KCkoKTtcblx0fVxuXG5cdC8vIGFkZCBlbnRyeSBtb2R1bGVzIGZyb20gbG9hZGVkIGNodW5rIHRvIGRlZmVycmVkIGxpc3Rcblx0aWYoZXhlY3V0ZU1vZHVsZXMpIGRlZmVycmVkTW9kdWxlcy5wdXNoLmFwcGx5KGRlZmVycmVkTW9kdWxlcywgZXhlY3V0ZU1vZHVsZXMpO1xuXG5cdC8vIHJ1biBkZWZlcnJlZCBtb2R1bGVzIHdoZW4gYWxsIGNodW5rcyByZWFkeVxuXHRyZXR1cm4gY2hlY2tEZWZlcnJlZE1vZHVsZXMoKTtcbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzcGlkZXJfc29saXRhaXJlXCJdID0gc2VsZltcIndlYnBhY2tDaHVua3NwaWRlcl9zb2xpdGFpcmVcIl0gfHwgW107XG52YXIgcGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24gPSBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCk7XG5jaHVua0xvYWRpbmdHbG9iYWwucHVzaCA9IHdlYnBhY2tKc29ucENhbGxiYWNrOyIsIi8vIHJ1biBzdGFydHVwXG5yZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy54KCk7XG4iXSwic291cmNlUm9vdCI6IiJ9