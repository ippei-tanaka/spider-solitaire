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
        var scene = _a.scene, x = _a.x, y = _a.y, suit = _a.suit, rank = _a.rank, name = _a.name;
        var _this = _super.call(this, scene, x, y) || this;
        _this._isHighLighted = false;
        _this.render(suit, rank);
        _this.name = name;
        _this._suit = suit;
        _this._rank = rank;
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
    /*
    getNewFrontCardGameObjectPosition ()
    {
      return {
        x: 0,
        y: !this._isSpread ? 0 : this._cardGameObjects.reduce((prev, cardGameObject) => {
          return prev + (cardGameObject.isFaceUp ? this._faceUpCardGap : this._faceDownCardGap);
        }, 0),
        depth: this._cardGameObjects.length
      }
    }
    */
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
    PileGameObject.prototype._getFrontGameObjects = function (_a) {
        var size = _a.size;
        return this._cardGameObjects.slice(-size);
    };
    PileGameObject.prototype._removeFrontGameObjects = function (_a) {
        var size = _a.size;
        var cardGameObjects = this._getFrontGameObjects({ size: size });
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
        var cardGameObjects = this._getFrontGameObjects({ size: size });
        this._removeFrontGameObjects({ size: size });
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
        var scene = _a.scene, deckPileId = _a.deckPileId, drawPilesIds = _a.drawPilesIds, tableauPilesIds = _a.tableauPilesIds, discardPilesIds = _a.discardPilesIds, dragPileId = _a.dragPileId, cardGameObjects = _a.cardGameObjects;
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
                x: 100 + index * 90,
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
        _this.add(_dragPileGameObject);
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

/***/ "./src/promise-queue/index.ts":
/*!************************************!*\
  !*** ./src/promise-queue/index.ts ***!
  \************************************/
/*! flagged exports */
/*! export PromiseQueue [provided] [no usage info] [missing usage info prevents renaming] */
/*! export __esModule [provided] [no usage info] [missing usage info prevents renaming] */
/*! other exports [not provided] [no usage info] */
/*! runtime requirements: __webpack_exports__ */
/***/ ((__unused_webpack_module, exports) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PromiseQueue = void 0;
var Deferred = /** @class */ (function () {
    function Deferred(_a) {
        var createPromise = _a.createPromise;
        this._callback = function () { };
        this._isDone = false;
        this._createPromise = createPromise;
    }
    Deferred.prototype.process = function () {
        var _this = this;
        if (!this._promise) {
            this._promise = this._createPromise();
            this._promise.catch(function () {
                console.error("Promise rejected!");
            }).then(function () {
                _this._callback();
                _this._isDone = true;
            });
        }
    };
    Deferred.prototype.finally = function (callback) {
        this._callback = callback;
    };
    Object.defineProperty(Deferred.prototype, "isDone", {
        get: function () {
            return this._isDone;
        },
        enumerable: false,
        configurable: true
    });
    return Deferred;
}());
var PromiseQueue = /** @class */ (function () {
    function PromiseQueue() {
    }
    Object.defineProperty(PromiseQueue.prototype, "isProcessing", {
        get: function () {
            return (this._latestDeferred && !this._latestDeferred.isDone);
        },
        enumerable: false,
        configurable: true
    });
    PromiseQueue.prototype.add = function (createPromise) {
        if (!this._latestDeferred || this._latestDeferred.isDone) {
            this._latestDeferred = new Deferred({ createPromise: createPromise });
            this._latestDeferred.process();
        }
        else {
            var deferred_1 = new Deferred({ createPromise: createPromise });
            this._latestDeferred.finally(function () {
                deferred_1.process();
            });
            this._latestDeferred = deferred_1;
        }
    };
    return PromiseQueue;
}());
exports.PromiseQueue = PromiseQueue;


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
var promise_queue_1 = __webpack_require__(/*! ../promise-queue */ "./src/promise-queue/index.ts");
var underscore_1 = __webpack_require__(/*! underscore */ "./node_modules/underscore/modules/index-all.js");
var MainScene = /** @class */ (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        var _this = _super.call(this, 'main') || this;
        _this._cardAnimationBetweenPilesQueue = new promise_queue_1.PromiseQueue();
        _this._dragPileAnimationQueue = new promise_queue_1.PromiseQueue();
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
            var undoButton, hintButton;
            var _this = this;
            return __generator(this, function (_a) {
                this.__table = new table_2.TableWithEvent({
                    numberOfTableauPiles: 6,
                    numberOfDrawPiles: 3,
                    cards: create_cards_1.createCardsWithEvents({
                        numberOfDecksUsed: 2,
                        numberOfSuits: 1
                    })
                });
                this.__tableGameObject = new table_1.TableGameObjectWithEvent({
                    scene: this,
                    deckPileId: this._table.deckPile.id,
                    drawPilesIds: this._table.drawPiles.map(function (p) { return p.id; }),
                    tableauPilesIds: this._table.tableauPiles.map(function (p) { return p.id; }),
                    discardPilesIds: this._table.discardPiles.map(function (p) { return p.id; }),
                    dragPileId: "drag-pile",
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
                undoButton.on('pointerdown', underscore_1.debounce(function () {
                    if (_this._cardAnimationBetweenPilesQueue.isProcessing)
                        return;
                    _this._table.undo();
                }, 100, true));
                this.children.add(undoButton);
                hintButton = new button_1.Button({
                    scene: this,
                    x: 250,
                    y: 600,
                    label: 'HINT'
                });
                hintButton.on('pointerdown', underscore_1.debounce(function () {
                    if (_this._cardAnimationBetweenPilesQueue.isProcessing)
                        return;
                    console.log(_this._table.getPossibleMovesBetweenTableauPiles());
                }, 100, true));
                this.children.add(hintButton);
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
                return [2 /*return*/];
            });
        });
    };
    MainScene.prototype.onCardPointerOver = function (_a) {
        var _this = this;
        var cardGameObject = _a.cardGameObject;
        if (!this._cardAnimationBetweenPilesQueue.isProcessing)
            this.addHighlightToCardGameObject({ cardGameObject: cardGameObject });
        else
            this._cardAnimationBetweenPilesQueue.add(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    this.addHighlightToCardGameObject({ cardGameObject: cardGameObject });
                    return [2 /*return*/];
                });
            }); });
        // const targetPile = this._table.getPileBy(pile => pile.cards.find(card => card.id === cardGameObject.name));
        //
        // if (cardGameObject.isFaceUp
        //   && this._table.tableauPiles.includes(targetPile))
        // {
        //   const fromPileGameObject = this._tableGameObject.getPileGameObjectBy(p => p.name === targetPile.id);
        //   const size = fromPileGameObject.cardGameObjects.length - fromPileGameObject.cardGameObjects.indexOf(cardGameObject);
        //
        //   if (Pile.checkIfCardsAreDescending({cards: targetPile.cards.slice(-size), faceUp: true, inSuit: true}))
        //   {
        //     if (!this._cardAnimationBetweenPilesQueue.isProcessing)
        //       cardGameObject.addHighlight();
        //     else
        //       this._cardAnimationBetweenPilesQueue.add(async () => {
        //         cardGameObject.addHighlight();
        //       });
        //   }
        // }
        // else if (this._table.frontDrawPile === targetPile)
        // {
        //   if (!this._cardAnimationBetweenPilesQueue.isProcessing)
        //     cardGameObject.addHighlight();
        //   else
        //     this._cardAnimationBetweenPilesQueue.add(async () => {
        //       cardGameObject.addHighlight();
        //     });
        // }
    };
    MainScene.prototype.addHighlightToCardGameObject = function (_a) {
        var cardGameObject = _a.cardGameObject;
        var targetPile = this._table.getPileBy(function (pile) { return pile.cards.find(function (card) { return card.id === cardGameObject.name; }); });
        if (cardGameObject.isFaceUp
            && this._table.tableauPiles.includes(targetPile)) {
            var fromPileGameObject = this._tableGameObject.getPileGameObjectBy(function (p) { return p.name === targetPile.id; });
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
        var _this = this;
        var cardGameObject = _a.cardGameObject;
        if (!this._cardAnimationBetweenPilesQueue.isProcessing)
            cardGameObject.removeHighlight();
        else
            this._cardAnimationBetweenPilesQueue.add(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    cardGameObject.removeHighlight();
                    return [2 /*return*/];
                });
            }); });
        // if (cardGameObject.isHighLighted) cardGameObject.removeHighlight();
    };
    MainScene.prototype.onCardPointerDown = function (_a) {
        var cardGameObject = _a.cardGameObject;
        if (!cardGameObject.isHighLighted)
            return;
        var targetPile = this._table.getPileBy(function (pile) { return pile.cards.find(function (card) { return card.id === cardGameObject.name; }); });
        if (this._table.frontDrawPile === targetPile) {
            cardGameObject.removeHighlight();
            this._table.dealCardsFromDrawPile();
        }
    };
    MainScene.prototype.onCardDragStart = function (_a) {
        var _this = this;
        var cardGameObject = _a.cardGameObject;
        if (!cardGameObject.isHighLighted)
            return;
        var targetPile = this._table.getPileBy(function (pile) { return pile.cards.find(function (card) { return card.id === cardGameObject.name; }); });
        if (cardGameObject.isFaceUp && this._table.tableauPiles.includes(targetPile)) {
            var fromPileGameObject = this._tableGameObject.getPileGameObjectBy(function (p) { return p.name === targetPile.id; });
            var size = fromPileGameObject.cardGameObjects.length - fromPileGameObject.cardGameObjects.indexOf(cardGameObject);
            if (pile_1.PileWithEvent.checkIfCardsAreDescending({ cards: targetPile.cards.slice(-size), faceUp: true, inSuit: true })) {
                var dragPileGameObject_1 = this._tableGameObject.dragPileGameObject;
                var y = cardGameObject.y;
                dragPileGameObject_1.setActive(true);
                this._tableGameObject.bringToTop(dragPileGameObject_1);
                dragPileGameObject_1.x = fromPileGameObject.x;
                dragPileGameObject_1.y = fromPileGameObject.y + y;
                dragPileGameObject_1.placeCardGameObjects({ cardGameObjects: fromPileGameObject.drawFrontCardGameObjects({ size: size }) });
                this._dragPileAnimationQueue.add(function () { return __awaiter(_this, void 0, void 0, function () {
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
        var targetPileGameObject = this._tableGameObject.getPileGameObjectBy(function (pile) { return pile.cardGameObjects.find(function (card) { return card === cardGameObject; }); });
        var dragPileGameObject = this._tableGameObject.dragPileGameObject;
        if (targetPileGameObject === dragPileGameObject && dragPileGameObject.active) {
            var deltaX = pointer.x - pointer.prevPosition.x;
            var deltaY = pointer.y - pointer.prevPosition.y;
            dragPileGameObject.x += deltaX;
            dragPileGameObject.y += deltaY;
        }
    };
    MainScene.prototype.onCardDrop = function (_a) {
        // console.log('onCardDrop');
        var _this = this;
        var zone = _a.zone, cardGameObject = _a.cardGameObject;
        // if (this._cardAnimationBetweenPilesQueue.isProcessing) return;
        var targetPileGameObject = this._tableGameObject.getPileGameObjectBy(function (pile) { return pile.cardGameObjects.find(function (card) { return card === cardGameObject; }); });
        var dragPileGameObject = this._tableGameObject.dragPileGameObject;
        if (targetPileGameObject === dragPileGameObject && dragPileGameObject.active) {
            var fromPile_1 = this._table.getPileBy(function (pile) { return pile.cards.find(function (card) { return card.id === cardGameObject.name; }); });
            var fromPileGameObject = this._tableGameObject.getPileGameObjectBy(function (p) { return p.name === fromPile_1.id; });
            var toPileGameObject_1 = this._tableGameObject.getPileGameObjectBy(function (p) { return p.zone === zone; });
            var toPile = this._table.getPileBy(function (pile) { return toPileGameObject_1.name === pile.id; });
            var size = dragPileGameObject.cardGameObjects.length;
            var cardGameObjects = dragPileGameObject.drawFrontCardGameObjects({ size: size });
            fromPileGameObject.placeCardGameObjects({ cardGameObjects: cardGameObjects });
            var _cards = cardGameObjects.map(function (cObj) {
                var card = _this._table.cards.find(function (c) { return cObj.name === c.id; });
                if (!card)
                    throw new Error("Couldn't find corresponding cards.");
                return card;
            });
            if (!toPile.frontCard || pile_1.PileWithEvent.checkIfCardsAreDescending({ cards: __spreadArrays([toPile.frontCard], _cards), faceUp: true })) {
                this._table.moveCardBetweenTableauPiles({
                    to: toPile,
                    from: fromPile_1,
                    size: size
                });
                dragPileGameObject.setActive(false);
            }
            else {
                fromPileGameObject.adjustCardGameObjectPositions();
            }
        }
    };
    MainScene.prototype.onCardDragEnd = function (_a) {
        // console.log('onCardDragEnd');
        var cardGameObject = _a.cardGameObject;
        // if (this._cardAnimationBetweenPilesQueue.isProcessing) return;
        var targetPileGameObject = this._tableGameObject.getPileGameObjectBy(function (p) {
            return p.cardGameObjects.find(function (c) { return c === cardGameObject; });
        });
        var dragPileGameObject = this._tableGameObject.dragPileGameObject;
        if (targetPileGameObject === dragPileGameObject && dragPileGameObject.active) {
            var size = dragPileGameObject.cardGameObjects.length;
            var fromPile_2 = this._table.getPileBy(function (pile) { return pile.cards.find(function (card) { return card.id === cardGameObject.name; }); });
            var fromPileGameObject = this._tableGameObject.getPileGameObjectBy(function (p) { return p.name === fromPile_2.id; });
            var cardGameObjects = dragPileGameObject.drawFrontCardGameObjects({ size: size });
            fromPileGameObject.placeCardGameObjects({ cardGameObjects: cardGameObjects });
            fromPileGameObject.adjustCardGameObjectPositions();
            dragPileGameObject.setActive(false);
        }
    };
    MainScene.prototype.onMoveCardsBetweenPiles = function (_a) {
        var _this = this;
        var from = _a.from, to = _a.to, size = _a.size;
        // console.log('onMoveCardsBetweenPiles');
        var fromPileGameObject = this._tableGameObject.getPileGameObjectBy(function (p) { return p.name === from.id; });
        var toPileGameObject = this._tableGameObject.getPileGameObjectBy(function (p) { return p.name === to.id; });
        this._cardAnimationBetweenPilesQueue.add(function () { return __awaiter(_this, void 0, void 0, function () {
            var cardGameObjects;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cardGameObjects = fromPileGameObject.drawFrontCardGameObjects({ size: size });
                        cardGameObjects.forEach(function (c) { return c.removeHighlight(); });
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
            this._cardAnimationBetweenPilesQueue.add(function () { return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    alert("You beat the game!!!");
                    return [2 /*return*/];
                });
            }); });
        }
    };
    MainScene.prototype.onFlipOverCard = function (_a) {
        var card = _a.card;
        var cardGarmObject = this._tableGameObject.cardGameObjects.find(function (cardCarmeObject) { return cardCarmeObject.name === card.id; });
        if (cardGarmObject) {
            this._cardAnimationBetweenPilesQueue.add(function () { return cardGarmObject.flipOver(card.isFaceUp); });
        }
        ;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL2V2ZW50LWVtaXR0ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9nYW1lLW9iamVjdHMtd2l0aC1ldmVudHMvY2FyZC50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL2dhbWUtb2JqZWN0cy13aXRoLWV2ZW50cy9lbWl0dGVyLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvZ2FtZS1vYmplY3RzLXdpdGgtZXZlbnRzL3RhYmxlLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvZ2FtZS1vYmplY3RzL2J1dHRvbi50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL2dhbWUtb2JqZWN0cy9jYXJkLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvZ2FtZS1vYmplY3RzL3BpbGUudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9nYW1lLW9iamVjdHMvdGFibGUudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9nYW1lLW9iamVjdHMvdHJhbnNmb3JtLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMtd2l0aC1ldmVudHMvY2FyZC50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL21vZGVscy13aXRoLWV2ZW50cy9jcmVhdGUtY2FyZHMudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMtd2l0aC1ldmVudHMvZW1pdHRlci50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL21vZGVscy13aXRoLWV2ZW50cy9waWxlLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvbW9kZWxzLXdpdGgtZXZlbnRzL3RhYmxlLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvbW9kZWxzL2NhcmQudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMvY3JlYXRlLWNhcmRzLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvbW9kZWxzL3BpbGUudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMvdGFibGUudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMvdW5kb2FibGUtYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL3Byb21pc2UtcXVldWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9zY2VuZXMvbWFpbi1zY2VuZS50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy9Vc2Vycy9pdGFuYWthL0RvY3VtZW50cy9Qcm9qZWN0cy9zcGlkZXItc29saXRhaXJlL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdHxzeW5jfG5vbnJlY3Vyc2l2ZXwvXlxcLlxcL2xvZyQvIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0ZBQW9DO0FBZXBDO0lBSUU7UUFFRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUkscUJBQVksRUFBRSxDQUFDO1FBQ2xDLHNDQUFzQztJQUN4QyxDQUFDO0lBRUQsb0JBQUUsR0FBRixVQUEyQixTQUFZLEVBQUUsRUFBd0I7UUFDL0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxxQkFBRyxHQUFILFVBQTRCLFNBQVksRUFBRSxFQUF3QjtRQUNoRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHNCQUFJLEdBQUosVUFBNkIsU0FBWSxFQUFFLE1BQVk7UUFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQztBQXJCWSwwQkFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZHBCLGtHQUFrQztBQUNsQywyRkFBd0U7QUFJeEU7SUFBNkMsMkNBQWM7SUFFekQsaUNBQWEsSUFBdUI7UUFBcEMsWUFFRSxrQkFBTSxJQUFJLENBQUMsU0FRWjtRQVBDLEtBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQUMsT0FBZSxJQUFLLHdCQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUMsY0FBYyxFQUFDLEtBQUksRUFBRSxPQUFPLFdBQUMsQ0FBQyxFQUFoRSxDQUFn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O1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0NKQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQztXQUNBO1dBQ0EsZ0JBQWdCLDJCQUEyQjtXQUMzQztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSxlQUFlLCtCQUErQjtXQUM5QztXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSwrQzs7OztVQzNGQTtVQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICdldmVudHMnO1xuXG50eXBlIF9FdmVudE1hcCA9IFJlY29yZDxzdHJpbmcsIGFueT47XG50eXBlIF9FdmVudEtleTxUIGV4dGVuZHMgX0V2ZW50TWFwPiA9IHN0cmluZyAmIGtleW9mIFQ7XG50eXBlIF9FdmVudFJlY2VpdmVyPFQ+ID0gKHBhcmFtczogVCkgPT4gdm9pZDtcblxuaW50ZXJmYWNlIF9FbWl0dGVyPFQgZXh0ZW5kcyBfRXZlbnRNYXA+IHtcbiAgb248SyBleHRlbmRzIF9FdmVudEtleTxUPj5cbiAgICAoZXZlbnROYW1lOiBLLCBmbjogX0V2ZW50UmVjZWl2ZXI8VFtLXT4pOiB2b2lkO1xuICBvZmY8SyBleHRlbmRzIF9FdmVudEtleTxUPj5cbiAgICAoZXZlbnROYW1lOiBLLCBmbjogX0V2ZW50UmVjZWl2ZXI8VFtLXT4pOiB2b2lkO1xuICBlbWl0PEsgZXh0ZW5kcyBfRXZlbnRLZXk8VD4+XG4gICAgKGV2ZW50TmFtZTogSywgcGFyYW1zOiBUW0tdKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIEVtaXR0ZXI8VCBleHRlbmRzIF9FdmVudE1hcD4gaW1wbGVtZW50cyBfRW1pdHRlcjxUPlxue1xuICBwcml2YXRlIGVtaXR0ZXI7XG5cbiAgY29uc3RydWN0b3IgKClcbiAge1xuICAgIHRoaXMuZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAvLyB0aGlzLmVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKDEwMDApO1xuICB9XG5cbiAgb248SyBleHRlbmRzIF9FdmVudEtleTxUPj4oZXZlbnROYW1lOiBLLCBmbjogX0V2ZW50UmVjZWl2ZXI8VFtLXT4pIHtcbiAgICB0aGlzLmVtaXR0ZXIub24oZXZlbnROYW1lLCBmbik7XG4gIH1cblxuICBvZmY8SyBleHRlbmRzIF9FdmVudEtleTxUPj4oZXZlbnROYW1lOiBLLCBmbjogX0V2ZW50UmVjZWl2ZXI8VFtLXT4pIHtcbiAgICB0aGlzLmVtaXR0ZXIub2ZmKGV2ZW50TmFtZSwgZm4pO1xuICB9XG5cbiAgZW1pdDxLIGV4dGVuZHMgX0V2ZW50S2V5PFQ+PihldmVudE5hbWU6IEssIHBhcmFtczogVFtLXSkge1xuICAgIHRoaXMuZW1pdHRlci5lbWl0KGV2ZW50TmFtZSwgcGFyYW1zKTtcbiAgfVxufVxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xuaW1wb3J0IHtlbWl0dGVyfSBmcm9tICcuL2VtaXR0ZXInO1xuaW1wb3J0IHtDYXJkR2FtZU9iamVjdCwgQ2FyZEdhbWVPYmplY3RBcmdzfSBmcm9tIFwiLi4vZ2FtZS1vYmplY3RzL2NhcmRcIjtcblxudHlwZSBQb2ludGVyID0gUGhhc2VyLklucHV0LlBvaW50ZXI7XG5cbmV4cG9ydCBjbGFzcyBDYXJkR2FtZU9iamVjdFdpdGhFdmVudCBleHRlbmRzIENhcmRHYW1lT2JqZWN0XG57XG4gIGNvbnN0cnVjdG9yIChhcmdzOkNhcmRHYW1lT2JqZWN0QXJncylcbiAge1xuICAgIHN1cGVyKGFyZ3MpO1xuICAgIHRoaXMub24oJ3BvaW50ZXJkb3duJywgKHBvaW50ZXI6UG9pbnRlcikgPT4gZW1pdHRlci5lbWl0KFwiQ0FSRF9QT0lOVEVSRE9XTlwiLCB7Y2FyZEdhbWVPYmplY3Q6dGhpcywgcG9pbnRlcn0pKTtcbiAgICB0aGlzLm9uKCdwb2ludGVyb3ZlcicsIChwb2ludGVyOlBvaW50ZXIpID0+IGVtaXR0ZXIuZW1pdChcIkNBUkRfUE9JTlRFUk9WRVJcIiwge2NhcmRHYW1lT2JqZWN0OnRoaXMsIHBvaW50ZXJ9KSk7XG4gICAgdGhpcy5vbigncG9pbnRlcm91dCcsIChwb2ludGVyOlBvaW50ZXIpID0+IGVtaXR0ZXIuZW1pdChcIkNBUkRfUE9JTlRFUk9VVFwiLCB7Y2FyZEdhbWVPYmplY3Q6dGhpcywgcG9pbnRlcn0pKTtcbiAgICB0aGlzLm9uKCdkcmFnc3RhcnQnLCAocG9pbnRlcjpQb2ludGVyKSA9PiBlbWl0dGVyLmVtaXQoXCJDQVJEX0RSQUdTVEFSVFwiLCB7Y2FyZEdhbWVPYmplY3Q6dGhpcywgcG9pbnRlcn0pKTtcbiAgICB0aGlzLm9uKCdkcmFnJywgKHBvaW50ZXI6UG9pbnRlcikgPT4gZW1pdHRlci5lbWl0KFwiQ0FSRF9EUkFHXCIsIHtjYXJkR2FtZU9iamVjdDp0aGlzLCBwb2ludGVyfSkpO1xuICAgIHRoaXMub24oJ2Ryb3AnLCAocG9pbnRlcjpQb2ludGVyLCB6b25lOlBoYXNlci5HYW1lT2JqZWN0cy5ab25lKSA9PiBlbWl0dGVyLmVtaXQoXCJDQVJEX0RST1BcIiwge2NhcmRHYW1lT2JqZWN0OnRoaXMsIHBvaW50ZXIsIHpvbmV9KSk7XG4gICAgdGhpcy5vbignZHJhZ2VuZCcsIChwb2ludGVyOlBvaW50ZXIpID0+IGVtaXR0ZXIuZW1pdChcIkNBUkRfRFJBR0VORFwiLCB7Y2FyZEdhbWVPYmplY3Q6dGhpcywgcG9pbnRlcn0pKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtFbWl0dGVyfSBmcm9tICcuLi9ldmVudC1lbWl0dGVyJztcbmltcG9ydCB7Vmlld0V2ZW50c30gZnJvbSAnLi9ldmVudHMnO1xuXG5leHBvcnQgY29uc3QgZW1pdHRlciA9IG5ldyBFbWl0dGVyPFZpZXdFdmVudHM+KCk7XG4iLCIvLyBpbXBvcnQge2VtaXR0ZXJ9IGZyb20gJy4vZW1pdHRlcic7XG5pbXBvcnQge1RhYmxlR2FtZU9iamVjdH0gZnJvbSBcIi4uL2dhbWUtb2JqZWN0cy90YWJsZVwiO1xuXG5leHBvcnQgY2xhc3MgVGFibGVHYW1lT2JqZWN0V2l0aEV2ZW50IGV4dGVuZHMgVGFibGVHYW1lT2JqZWN0XG57XG4gIC8vIGNvbnN0cnVjdG9yIChhcmdzOiBUYWJsZUdhbWVPYmplY3RTZXR0aW5ncylcbiAgLy8ge1xuICAvLyAgIHN1cGVyKGFyZ3MpO1xuICAvL1xuICAvLyAgIHRoaXMuZHJhd1BpbGVHYW1lT2JqZWN0cy5mb3JFYWNoKHBpbGVHYW1lT2JqZWN0ID0+IHtcbiAgLy8gICAgIHBpbGVHYW1lT2JqZWN0Lm9uKFwicG9pbnRlcmRvd25cIiwgKCkgPT4ge1xuICAvLyAgICAgICBlbWl0dGVyLmVtaXQoXCJEUkFXUElMRV9QT0lOVEVSRE9XTlwiLCB7cGlsZUdhbWVPYmplY3R9KTtcbiAgLy8gICAgIH0pO1xuICAvLyAgIH0pO1xuICAvLyB9XG59XG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gXCJwaGFzZXJcIjtcblxuY29uc3Qge1xuICBUZXh0LFxuICBDb250YWluZXJcbn0gPSBQaGFzZXIuR2FtZU9iamVjdHM7XG5cbmV4cG9ydCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBDb250YWluZXJcbntcbiAgY29uc3RydWN0b3IgKHtcbiAgICBzY2VuZSxcbiAgICB4LFxuICAgIHksXG4gICAgbGFiZWxcbiAgfTp7XG4gICAgc2NlbmU6UGhhc2VyLlNjZW5lLFxuICAgIHg6bnVtYmVyLFxuICAgIHk6bnVtYmVyLFxuICAgIGxhYmVsOnN0cmluZ1xuICB9KVxuICB7XG4gICAgc3VwZXIoc2NlbmUsIHgsIHkpO1xuICAgIHRoaXMucmVuZGVyKGxhYmVsKTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyIChsYWJlbDpzdHJpbmcpXG4gIHtcbiAgICBjb25zdCBzdWl0VGV4dCA9IG5ldyBUZXh0KHRoaXMuc2NlbmUsIDAsIDAsIGxhYmVsLCAge1xuICAgICAgZm9udFNpemU6IFwiMzVweFwiLFxuICAgICAgY29sb3I6ICcjMDAwMDAwJyxcbiAgICAgIGZvbnRGYW1pbHk6ICdHZW9yZ2lhLCBcIkdvdWR5IEJvb2tsZXR0ZXIgMTkxMVwiLCBUaW1lcywgc2VyaWYnXG4gICAgfSk7XG4gICAgc3VpdFRleHQueCAtPSBzdWl0VGV4dC53aWR0aCAvIDI7XG4gICAgc3VpdFRleHQueSAtPSBzdWl0VGV4dC5oZWlnaHQgLyAyO1xuICAgIHRoaXMuYWRkKHN1aXRUZXh0KTtcbiAgICB0aGlzLnNldFNpemUoc3VpdFRleHQud2lkdGgsIHN1aXRUZXh0LmhlaWdodCk7XG4gICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSgpO1xuICB9XG5cbn1cbiIsImltcG9ydCBQaGFzZXIgZnJvbSBcInBoYXNlclwiO1xuaW1wb3J0IHtTdWl0fSBmcm9tIFwiLi4vbW9kZWxzL2NhcmRcIjtcblxuY29uc3Qge1xuICBUZXh0LFxuICBSZWN0YW5nbGUsXG4gIENvbnRhaW5lclxufSA9IFBoYXNlci5HYW1lT2JqZWN0cztcblxuY29uc3QgZ2V0U3VpdFRleHQgPSAoc3VpdDpTdWl0KSA9Plxue1xuICBzd2l0Y2goc3VpdCkge1xuICAgIGNhc2UgU3VpdC5TcGFkZTpcbiAgICByZXR1cm4gJ+KZoCc7XG4gICAgY2FzZSBTdWl0LkNsdWI6XG4gICAgcmV0dXJuICfimaMnO1xuICAgIGNhc2UgU3VpdC5EaWFtb25kOlxuICAgIHJldHVybiAn4pmmJztcbiAgICBjYXNlIFN1aXQuSGVhcnQ6XG4gICAgcmV0dXJuICfimaUnO1xuICB9XG59XG5cbmNvbnN0IGdldFN1aXRDb2xvciA9IChzdWl0OlN1aXQpID0+XG57XG4gIHN3aXRjaChzdWl0KSB7XG4gICAgY2FzZSBTdWl0LlNwYWRlOlxuICAgIGNhc2UgU3VpdC5DbHViOlxuICAgIHJldHVybiAnIzAwMDAwMCc7XG4gICAgY2FzZSBTdWl0LkRpYW1vbmQ6XG4gICAgY2FzZSBTdWl0LkhlYXJ0OlxuICAgIHJldHVybiAnI2ZmMDAwMCc7XG4gIH1cbn1cblxuY29uc3QgZ2V0UmFua1RleHQgPSAocmFuazpudW1iZXIpID0+XG57XG4gIGlmIChyYW5rID09PSAxMSkge1xuICAgIHJldHVybiAnSic7XG4gIH0gZWxzZSBpZiAocmFuayA9PT0gMTIpIHtcbiAgICByZXR1cm4gJ1EnO1xuICB9IGVsc2UgaWYgKHJhbmsgPT09IDEzKSB7XG4gICAgcmV0dXJuICdLJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmFuay50b1N0cmluZygpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIENhcmRHYW1lT2JqZWN0QXJncyA9IHtcbiAgc2NlbmU6UGhhc2VyLlNjZW5lLFxuICB4Om51bWJlcixcbiAgeTpudW1iZXIsXG4gIHN1aXQ6U3VpdCxcbiAgcmFuazpudW1iZXIsXG4gIG5hbWU6c3RyaW5nXG59O1xuXG5leHBvcnQgY2xhc3MgQ2FyZEdhbWVPYmplY3QgZXh0ZW5kcyBDb250YWluZXJcbntcbiAgcHJpdmF0ZSBfZnJhbWU6UGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZSB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfYmFjazpQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyIHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIF9yYW5rOm51bWJlcjtcbiAgcHJpdmF0ZSBfc3VpdDpTdWl0O1xuICBwcml2YXRlIF9pc0hpZ2hMaWdodGVkOmJvb2xlYW4gPSBmYWxzZTtcblxuICBzdGF0aWMgV0lEVEg6bnVtYmVyID0gNzA7XG4gIHN0YXRpYyBIRUlHSFQ6bnVtYmVyID0gMTEwO1xuXG4gIGNvbnN0cnVjdG9yICh7XG4gICAgc2NlbmUsXG4gICAgeCxcbiAgICB5LFxuICAgIHN1aXQsXG4gICAgcmFuayxcbiAgICBuYW1lXG4gIH06Q2FyZEdhbWVPYmplY3RBcmdzKVxuICB7XG4gICAgc3VwZXIoc2NlbmUsIHgsIHkpO1xuICAgIHRoaXMucmVuZGVyKHN1aXQsIHJhbmspO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fc3VpdCA9IHN1aXQ7XG4gICAgdGhpcy5fcmFuayA9IHJhbms7XG4gIH1cblxuICBnZXQgc3VpdCAoKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuX3N1aXQ7XG4gIH1cblxuICBnZXQgcmFuayAoKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuX3Jhbms7XG4gIH1cblxuICBwcml2YXRlIGdldCBmcmFtZSAoKVxuICB7XG4gICAgaWYgKCF0aGlzLl9mcmFtZSlcbiAgICB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2ZyYW1lO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgYmFjayAoKVxuICB7XG4gICAgaWYgKCF0aGlzLl9iYWNrKVxuICAgIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fYmFjaztcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyIChzdWl0OlN1aXQsIHJhbms6bnVtYmVyKVxuICB7XG4gICAgY29uc3QgeCA9IDA7XG4gICAgY29uc3QgeSA9IDA7XG4gICAgY29uc3QgZnJhbWUgPSBuZXcgUmVjdGFuZ2xlKHRoaXMuc2NlbmUsIHgsIHksIENhcmRHYW1lT2JqZWN0LldJRFRILCBDYXJkR2FtZU9iamVjdC5IRUlHSFQsIDB4ZmZmZmZmKTtcbiAgICBmcmFtZS5zZXRTdHJva2VTdHlsZSgyLCAweDAwMDAwMCk7XG4gICAgdGhpcy5hZGQoZnJhbWUpO1xuICAgIHRoaXMuX2ZyYW1lID0gZnJhbWU7XG5cbiAgICBjb25zdCByYW5rVGV4dCA9IG5ldyBUZXh0KHRoaXMuc2NlbmUsIHggLSAzMywgeSAtIDU3LCAgZ2V0UmFua1RleHQocmFuaykgKyBnZXRTdWl0VGV4dChzdWl0KSwgIHtcbiAgICAgIGZvbnRTaXplOiBcIjI1cHhcIixcbiAgICAgIGNvbG9yOiBnZXRTdWl0Q29sb3Ioc3VpdCksXG4gICAgICBmb250RmFtaWx5OiAnR2VvcmdpYSwgXCJHb3VkeSBCb29rbGV0dGVyIDE5MTFcIiwgVGltZXMsIHNlcmlmJ1xuICAgIH0pO1xuICAgIC8vIHJhbmtUZXh0LnggPSByYW5rVGV4dC54IC0gcmFua1RleHQud2lkdGggLyAyO1xuICAgIHRoaXMuYWRkKHJhbmtUZXh0KTtcbiAgICAvLyB0aGlzLnNldEFscGhhKDAuMylcblxuICAgIC8vIGNvbnN0IHN1aXRUZXh0ID0gbmV3IFRleHQodGhpcy5zY2VuZSwgeCAtIDE0LCB5IC0gNTgsIGdldFN1aXRUZXh0KHN1aXQpLCAge1xuICAgIC8vICAgZm9udFNpemU6IFwiMjVweFwiLFxuICAgIC8vICAgY29sb3I6IGdldFN1aXRDb2xvcihzdWl0KSxcbiAgICAvLyAgIGZvbnRGYW1pbHk6ICdHZW9yZ2lhLCBcIkdvdWR5IEJvb2tsZXR0ZXIgMTkxMVwiLCBUaW1lcywgc2VyaWYnXG4gICAgLy8gfSk7XG4gICAgLy8gc3VpdFRleHQueCA9IHN1aXRUZXh0LnggLSBzdWl0VGV4dC53aWR0aCAvIDI7XG4gICAgLy8gdGhpcy5hZGQoc3VpdFRleHQpO1xuXG4gICAgLy8gY29uc3Qgc3VpdFRleHQgPSBuZXcgVGV4dCh0aGlzLnNjZW5lLCB4LCB5IC0gNDUsIGdldFN1aXRUZXh0KHN1aXQpLCAge1xuICAgIC8vICAgZm9udFNpemU6IFwiNDVweFwiLFxuICAgIC8vICAgY29sb3I6IGdldFN1aXRDb2xvcihzdWl0KSxcbiAgICAvLyAgIGZvbnRGYW1pbHk6ICdHZW9yZ2lhLCBcIkdvdWR5IEJvb2tsZXR0ZXIgMTkxMVwiLCBUaW1lcywgc2VyaWYnXG4gICAgLy8gfSk7XG4gICAgLy8gc3VpdFRleHQueCA9IHN1aXRUZXh0LnggLSBzdWl0VGV4dC53aWR0aCAvIDI7XG4gICAgLy8gdGhpcy5hZGQoc3VpdFRleHQpO1xuICAgIC8vXG4gICAgLy8gY29uc3QgcmFua1RleHQgPSBuZXcgVGV4dCh0aGlzLnNjZW5lLCB4LCB5IC0gMiwgIGdldFJhbmtUZXh0KHJhbmspLCAge1xuICAgIC8vICAgZm9udFNpemU6IFwiMzVweFwiLFxuICAgIC8vICAgY29sb3I6IGdldFN1aXRDb2xvcihzdWl0KSxcbiAgICAvLyAgIGZvbnRGYW1pbHk6ICdHZW9yZ2lhLCBcIkdvdWR5IEJvb2tsZXR0ZXIgMTkxMVwiLCBUaW1lcywgc2VyaWYnXG4gICAgLy8gfSk7XG4gICAgLy8gcmFua1RleHQueCA9IHJhbmtUZXh0LnggLSByYW5rVGV4dC53aWR0aCAvIDI7XG4gICAgLy8gdGhpcy5hZGQocmFua1RleHQpO1xuXG4gICAgdGhpcy5fYmFjayA9IG5ldyBDb250YWluZXIodGhpcy5zY2VuZSwgeCwgeSk7XG5cbiAgICBjb25zdCBiYWNrUGF0dGVybiA9IG5ldyBSZWN0YW5nbGUodGhpcy5zY2VuZSwgeCwgeSwgQ2FyZEdhbWVPYmplY3QuV0lEVEggLSAyMCwgQ2FyZEdhbWVPYmplY3QuSEVJR0hUIC0gMjAsIDB4YWFhYWFhKTtcbiAgICBiYWNrUGF0dGVybi5zZXRTdHJva2VTdHlsZSgzLCAweGFhYWFhYSk7XG4gICAgY29uc3QgYmFja1doaXRlID0gbmV3IFJlY3RhbmdsZSh0aGlzLnNjZW5lLCB4LCB5LCBDYXJkR2FtZU9iamVjdC5XSURUSCAtIDIsIENhcmRHYW1lT2JqZWN0LkhFSUdIVCAtIDIsIDB4ZmZmZmZmKTtcbiAgICB0aGlzLmJhY2suYWRkKGJhY2tXaGl0ZSk7XG4gICAgdGhpcy5iYWNrLmFkZChiYWNrUGF0dGVybik7XG4gICAgdGhpcy5hZGQodGhpcy5iYWNrKTtcblxuICAgIHRoaXMuc2V0U2l6ZShDYXJkR2FtZU9iamVjdC5XSURUSCwgQ2FyZEdhbWVPYmplY3QuSEVJR0hUKTtcbiAgICB0aGlzLnNldEludGVyYWN0aXZlKHtkcmFnZ2FibGU6IHRydWV9KTtcbiAgfVxuXG4gIGZsaXBPdmVyICh1cDpib29sZWFuKSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlPHZvaWQ+KHJlc29sdmUgPT4ge1xuICAgICAgY29uc3QgdGltZWxpbmUgPSB0aGlzLnNjZW5lLnR3ZWVucy5jcmVhdGVUaW1lbGluZSgpO1xuICAgICAgdGltZWxpbmUuYWRkKHtcbiAgICAgICAgdGFyZ2V0czogdGhpcyxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBzY2FsZVg6IDAsXG4gICAgICAgIH0sXG4gICAgICAgIGR1cmF0aW9uOiAzNSxcbiAgICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgIHRoaXMuYmFjay52aXNpYmxlID0gIXVwO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRpbWVsaW5lLmFkZCh7XG4gICAgICAgIHRhcmdldHM6IHRoaXMsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgc2NhbGVYOiAxLFxuICAgICAgICB9LFxuICAgICAgICBkdXJhdGlvbjogMzUsXG4gICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGltZWxpbmUucGxheSgpO1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0IGlzRmFjZVVwICgpXG4gIHtcbiAgICByZXR1cm4gIXRoaXMuYmFjay52aXNpYmxlO1xuICB9XG5cbiAgYWRkSGlnaGxpZ2h0ICgpXG4gIHtcbiAgICB0aGlzLmZyYW1lLnNldFN0cm9rZVN0eWxlKDIsIDB4ZmY1NTg4KTtcbiAgICB0aGlzLl9pc0hpZ2hMaWdodGVkID0gdHJ1ZTtcbiAgfVxuXG4gIHJlbW92ZUhpZ2hsaWdodCAoKVxuICB7XG4gICAgdGhpcy5mcmFtZS5zZXRTdHJva2VTdHlsZSgyLCAweDAwMDAwMCk7XG4gICAgdGhpcy5faXNIaWdoTGlnaHRlZCA9IGZhbHNlO1xuICB9XG5cbiAgZ2V0IGlzSGlnaExpZ2h0ZWQgKClcbiAge1xuICAgIHJldHVybiB0aGlzLl9pc0hpZ2hMaWdodGVkO1xuICB9XG59XG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gXCJwaGFzZXJcIjtcbmltcG9ydCB7Q2FyZEdhbWVPYmplY3R9IGZyb20gXCIuL2NhcmRcIjtcbmltcG9ydCB7Z2V0V29ybGRQb3NpdGlvbn0gZnJvbSAnLi90cmFuc2Zvcm0nO1xuXG5leHBvcnQgdHlwZSBQaWxlR2FtZU9iamVjdEFyZ3MgPSB7XG4gIHNjZW5lOlBoYXNlci5TY2VuZSxcbiAgeDpudW1iZXIsXG4gIHk6bnVtYmVyLFxuICBuYW1lOnN0cmluZyxcbiAgaXNTcHJlYWQ/OmJvb2xlYW4sXG4gIGlzRHJvcFRhcmdldD86Ym9vbGVhbixcbiAgbGFiZWw/OnN0cmluZ1xuICAvLyBpc0ludGVyYWN0aXZlPzpib29sZWFuXG59XG5cbmludGVyZmFjZSBDYXJkR2FtZU9iamVjdEFkanVzdGVkUG9zaXRpb24ge1xuICB4OiBudW1iZXIsXG4gIHk6IG51bWJlcixcbiAgY2FyZEdhbWVPYmplY3Q6IENhcmRHYW1lT2JqZWN0XG59XG5cbmV4cG9ydCBjbGFzcyBQaWxlR2FtZU9iamVjdCBleHRlbmRzIFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXJcbntcbiAgcHJpdmF0ZSBfbGFiZWw6c3RyaW5nO1xuICBwcml2YXRlIF9pc1NwcmVhZDpib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2NhcmRHYW1lT2JqZWN0czpDYXJkR2FtZU9iamVjdFtdID0gW107XG4gIHByaXZhdGUgX3pvbmU6UGhhc2VyLkdhbWVPYmplY3RzLlpvbmUgfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX3pvbmVSZWN0OlBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGUgfCB1bmRlZmluZWQ7XG4gIC8vIHByaXZhdGUgX2lzSW50ZXJhY3RpdmU6Ym9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9mYWNlRG93bkNhcmRHYXA6bnVtYmVyID0gMTU7XG4gIHByaXZhdGUgX2ZhY2VVcENhcmRHYXA6bnVtYmVyID0gMjY7XG4gIHByaXZhdGUgX21heEhlaWdodE9mR2FwczpudW1iZXIgPSAyMDA7XG5cbiAgY29uc3RydWN0b3IgKHtcbiAgICBzY2VuZSxcbiAgICB4LFxuICAgIHksXG4gICAgbmFtZSxcbiAgICBpc1NwcmVhZCxcbiAgICBpc0Ryb3BUYXJnZXQsXG4gICAgbGFiZWxcbiAgICAvLyBpc0ludGVyYWN0aXZlXG4gIH06UGlsZUdhbWVPYmplY3RBcmdzKVxuICB7XG4gICAgc3VwZXIoc2NlbmUsIHgsIHkpO1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5fbGFiZWwgPSBsYWJlbCB8fCAnJztcblxuICAgIGlmIChpc1NwcmVhZCkge1xuICAgICAgdGhpcy5faXNTcHJlYWQgPSB0cnVlO1xuICAgIH1cblxuICAgIGlmIChpc0Ryb3BUYXJnZXQpIHtcbiAgICAgIHRoaXMuX3pvbmUgPSB0aGlzLnJlbmRlclpvbmUoKTtcbiAgICAgIHRoaXMuX3pvbmVSZWN0ID0gdGhpcy5yZW5kZXJab25lUmVjdCgpO1xuICAgIH1cblxuICAgIC8vIGlmIChpc0ludGVyYWN0aXZlKVxuICAgIC8vIHtcbiAgICAvLyAgIHRoaXMuc2V0U2l6ZShDYXJkR2FtZU9iamVjdC5XSURUSCwgQ2FyZEdhbWVPYmplY3QuSEVJR0hUKTtcbiAgICAvLyAgIHRoaXMuc2V0SW50ZXJhY3RpdmUoKTtcbiAgICAvLyAgIHRoaXMuX2lzSW50ZXJhY3RpdmUgPSB0cnVlO1xuICAgIC8vIH1cbiAgfVxuXG4gIGdldCBsYWJlbCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJab25lICgpXG4gIHtcbiAgICBjb25zdCB6b25lID0gbmV3IFBoYXNlci5HYW1lT2JqZWN0cy5ab25lKHRoaXMuc2NlbmUsIDAsIDAsIDEsIDEpO1xuICAgIHRoaXMuYWRkKHpvbmUpO1xuICAgIHJldHVybiB6b25lO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXJab25lUmVjdCAoKVxuICB7XG4gICAgY29uc3QgcmVjdCA9IG5ldyBQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlKHRoaXMuc2NlbmUsIDAsIDAsIDEsIDEsIDB4Y2NjY2NjKTtcbiAgICB0aGlzLmFkZChyZWN0KTtcbiAgICByZXR1cm4gcmVjdDtcbiAgfVxuXG4gIHByaXZhdGUgcmVzaXplWm9uZSAoKVxuICB7XG4gICAgY29uc3Qgd2lkdGggPSBDYXJkR2FtZU9iamVjdC5XSURUSDtcbiAgICBjb25zdCBmcm9udENhcmRHYW1lT2JqZWN0ID0gdGhpcy5fY2FyZEdhbWVPYmplY3RzW3RoaXMuX2NhcmRHYW1lT2JqZWN0cy5sZW5ndGggLSAxXTtcbiAgICBjb25zdCBoZWlnaHQgPSBDYXJkR2FtZU9iamVjdC5IRUlHSFQgKyAoZnJvbnRDYXJkR2FtZU9iamVjdCA/IGZyb250Q2FyZEdhbWVPYmplY3QueSA6IDApO1xuICAgIGNvbnN0IHggPSAwO1xuICAgIGNvbnN0IHkgPSAoaGVpZ2h0IC8gMikgLSAoQ2FyZEdhbWVPYmplY3QuSEVJR0hUIC8gMik7XG5cbiAgICBpZiAodGhpcy5fem9uZSlcbiAgICB7XG4gICAgICB0aGlzLl96b25lLnggPSB4O1xuICAgICAgdGhpcy5fem9uZS55ID0geTtcbiAgICAgIHRoaXMuX3pvbmUud2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMuX3pvbmUuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgdGhpcy5fem9uZS5zZXRSZWN0YW5nbGVEcm9wWm9uZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgIHRoaXMuX3pvbmUuaW5wdXQuaGl0QXJlYS5zZXRTaXplKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgdGhpcy5fem9uZS5zZXRPcmlnaW4odGhpcy5fem9uZS5vcmlnaW5YLCB0aGlzLl96b25lLm9yaWdpblkpO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl96b25lUmVjdCkge1xuICAgICAgdGhpcy5fem9uZVJlY3QueCA9IHg7XG4gICAgICB0aGlzLl96b25lUmVjdC55ID0geTtcbiAgICAgIHRoaXMuX3pvbmVSZWN0LndpZHRoID0gd2lkdGg7XG4gICAgICB0aGlzLl96b25lUmVjdC5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICB0aGlzLl96b25lUmVjdC5zZXRPcmlnaW4odGhpcy5fem9uZVJlY3Qub3JpZ2luWCwgdGhpcy5fem9uZVJlY3Qub3JpZ2luWSk7XG4gICAgfVxuXG4gICAgLy8gaWYgKHRoaXMuX2lzSW50ZXJhY3RpdmUpXG4gICAgLy8ge1xuICAgIC8vICAgdGhpcy5pbnB1dC5oaXRBcmVhLnNldFNpemUod2lkdGgsIGhlaWdodClcbiAgICAvLyB9XG4gIH1cblxuICBnZXQgem9uZSAoKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuX3pvbmU7XG4gIH1cblxuICAvKlxuICBnZXROZXdGcm9udENhcmRHYW1lT2JqZWN0UG9zaXRpb24gKClcbiAge1xuICAgIHJldHVybiB7XG4gICAgICB4OiAwLFxuICAgICAgeTogIXRoaXMuX2lzU3ByZWFkID8gMCA6IHRoaXMuX2NhcmRHYW1lT2JqZWN0cy5yZWR1Y2UoKHByZXYsIGNhcmRHYW1lT2JqZWN0KSA9PiB7XG4gICAgICAgIHJldHVybiBwcmV2ICsgKGNhcmRHYW1lT2JqZWN0LmlzRmFjZVVwID8gdGhpcy5fZmFjZVVwQ2FyZEdhcCA6IHRoaXMuX2ZhY2VEb3duQ2FyZEdhcCk7XG4gICAgICB9LCAwKSxcbiAgICAgIGRlcHRoOiB0aGlzLl9jYXJkR2FtZU9iamVjdHMubGVuZ3RoXG4gICAgfVxuICB9XG4gICovXG5cbiAgcHJpdmF0ZSBfZ2V0QWRqdXN0ZWRDYXJkR2FtZU9iamVjdFBvc2l0aW9ucyAoKVxuICB7XG5cbiAgICBpZiAoIXRoaXMuX2lzU3ByZWFkIHx8IHRoaXMuX2NhcmRHYW1lT2JqZWN0cy5sZW5ndGggPD0gMSlcbiAgICB7XG4gICAgICByZXR1cm4gdGhpcy5fY2FyZEdhbWVPYmplY3RzLm1hcCgoY2FyZEdhbWVPYmplY3QsIGkpID0+ICh7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIGRlcHRoOiBpLFxuICAgICAgICBjYXJkR2FtZU9iamVjdFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGNvbnN0IG51bWJlck9mR2FwcyA9IHRoaXMuX2NhcmRHYW1lT2JqZWN0cy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IG51bWJlck9mRmFjZVVwQ2FyZEdhcHMgPSB0aGlzLl9jYXJkR2FtZU9iamVjdHMuc2xpY2UoMCwgLTEpLnJlZHVjZSgocHJlLCBjdXIpID0+IHByZSArIChjdXIuaXNGYWNlVXAgPyAxIDogMCksIDApO1xuICAgIGNvbnN0IG51bWJlck9mRmFjZURvd25DYXJkR2FwcyA9IG51bWJlck9mR2FwcyAtIG51bWJlck9mRmFjZVVwQ2FyZEdhcHM7XG4gICAgY29uc3QgaGVpaGd0T2ZHYXBzID0gbnVtYmVyT2ZGYWNlVXBDYXJkR2FwcyAqIHRoaXMuX2ZhY2VVcENhcmRHYXAgKyBudW1iZXJPZkZhY2VEb3duQ2FyZEdhcHMgKiB0aGlzLl9mYWNlRG93bkNhcmRHYXA7XG5cbiAgICBsZXQgZ2FwT2ZGYWNlVXBDYXJkID0gdGhpcy5fZmFjZVVwQ2FyZEdhcDtcbiAgICBsZXQgZ2FwT2ZGYWNlRG93bkNhcmQgPSB0aGlzLl9mYWNlRG93bkNhcmRHYXA7XG5cbiAgICBpZiAoaGVpaGd0T2ZHYXBzID4gdGhpcy5fbWF4SGVpZ2h0T2ZHYXBzKSB7XG4gICAgICBnYXBPZkZhY2VVcENhcmQgPSB0aGlzLl9tYXhIZWlnaHRPZkdhcHMgLyAobnVtYmVyT2ZGYWNlVXBDYXJkR2FwcyArIG51bWJlck9mRmFjZURvd25DYXJkR2FwcyAqIHRoaXMuX2ZhY2VEb3duQ2FyZEdhcCAvIHRoaXMuX2ZhY2VVcENhcmRHYXApO1xuICAgICAgZ2FwT2ZGYWNlRG93bkNhcmQgPSB0aGlzLl9tYXhIZWlnaHRPZkdhcHMgLyAobnVtYmVyT2ZGYWNlRG93bkNhcmRHYXBzICsgbnVtYmVyT2ZGYWNlVXBDYXJkR2FwcyAqIHRoaXMuX2ZhY2VVcENhcmRHYXAgLyB0aGlzLl9mYWNlRG93bkNhcmRHYXApO1xuICAgIH1cblxuICAgIGxldCBvZmZzZXQgPSAwO1xuICAgIGxldCBwb3NpdGlvbnM6Q2FyZEdhbWVPYmplY3RBZGp1c3RlZFBvc2l0aW9uW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NhcmRHYW1lT2JqZWN0cy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICBjb25zdCBjYXJkR2FtZU9iamVjdCA9IHRoaXMuX2NhcmRHYW1lT2JqZWN0c1tpXTtcbiAgICAgIHBvc2l0aW9ucyA9IFsuLi5wb3NpdGlvbnMsIHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogb2Zmc2V0LFxuICAgICAgICBjYXJkR2FtZU9iamVjdFxuICAgICAgfV07XG4gICAgICBvZmZzZXQgPSBvZmZzZXQgKyAoY2FyZEdhbWVPYmplY3QuaXNGYWNlVXAgPyBnYXBPZkZhY2VVcENhcmQgOiBnYXBPZkZhY2VEb3duQ2FyZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfVxuXG4gIGFzeW5jIGFkanVzdENhcmRHYW1lT2JqZWN0UG9zaXRpb25zV2l0aEFuaW1hdGlvbiAoKVxuICB7XG4gICAgY29uc3QgcG9zaXRpb25zID0gdGhpcy5fZ2V0QWRqdXN0ZWRDYXJkR2FtZU9iamVjdFBvc2l0aW9ucygpO1xuICAgIGF3YWl0IFByb21pc2UuYWxsKHBvc2l0aW9uc1xuICAgICAgLmZpbHRlcihwb3NpdGlvbiA9PiAocG9zaXRpb24ueCAhPT0gcG9zaXRpb24uY2FyZEdhbWVPYmplY3QueCB8fCBwb3NpdGlvbi55ICE9PSBwb3NpdGlvbi5jYXJkR2FtZU9iamVjdC55KSlcbiAgICAgIC5tYXAocG9zaXRpb24gPT4gbmV3IFByb21pc2UocmVzID0+IHtcbiAgICAgICAgdGhpcy5zY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgICAgICB0YXJnZXRzOiBwb3NpdGlvbi5jYXJkR2FtZU9iamVjdCxcbiAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgeDogcG9zaXRpb24ueCxcbiAgICAgICAgICAgIHk6IHBvc2l0aW9uLnlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGR1cmF0aW9uOiA3MCxcbiAgICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiByZXMoKVxuICAgICAgICB9KTtcbiAgICB9KSkpXG4gICAgLnRoZW4oKCkgPT4gdGhpcy5yZXNpemVab25lKCkpXG4gIH1cblxuICBhZGp1c3RDYXJkR2FtZU9iamVjdFBvc2l0aW9ucyAoKVxuICB7XG4gICAgY29uc3QgcG9zaXRpb25zID0gdGhpcy5fZ2V0QWRqdXN0ZWRDYXJkR2FtZU9iamVjdFBvc2l0aW9ucygpO1xuICAgIGZvciAobGV0IHBvc2l0aW9uIG9mIHBvc2l0aW9ucylcbiAgICB7XG4gICAgICBwb3NpdGlvbi5jYXJkR2FtZU9iamVjdC54ID0gcG9zaXRpb24ueDtcbiAgICAgIHBvc2l0aW9uLmNhcmRHYW1lT2JqZWN0LnkgPSBwb3NpdGlvbi55O1xuICAgIH1cbiAgICB0aGlzLnJlc2l6ZVpvbmUoKTtcbiAgfVxuXG4gIGFzeW5jIGV4cGFuZFdpdGhBbmltYXRpb24gKClcbiAge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5zY2FsZVggPSAxO1xuICAgICAgdGhpcy5zY2FsZVkgPSAxO1xuICAgICAgdGhpcy5zY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgICAgdGFyZ2V0czogdGhpcyxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBzY2FsZVg6IDEuMSxcbiAgICAgICAgICBzY2FsZVk6IDEuMVxuICAgICAgICB9LFxuICAgICAgICBkdXJhdGlvbjogNDAsXG4gICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHJlc29sdmUoKVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwbGFjZUNhcmRHYW1lT2JqZWN0cyAoe2NhcmRHYW1lT2JqZWN0c306IHtjYXJkR2FtZU9iamVjdHM6Q2FyZEdhbWVPYmplY3RbXX0pXG4gIHtcbiAgICBjb25zdCB3b3JsZFBvc2l0aW9uID0gZ2V0V29ybGRQb3NpdGlvbih0aGlzKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjYXJkR2FtZU9iamVjdHMubGVuZ3RoOyBpbmRleCsrKVxuICAgIHtcbiAgICAgIGNvbnN0IGNhcmRHYW1lT2JqZWN0ID0gY2FyZEdhbWVPYmplY3RzW2luZGV4XTtcbiAgICAgIGNhcmRHYW1lT2JqZWN0LnggPSBjYXJkR2FtZU9iamVjdC54IC0gd29ybGRQb3NpdGlvbi54O1xuICAgICAgY2FyZEdhbWVPYmplY3QueSA9IGNhcmRHYW1lT2JqZWN0LnkgLSB3b3JsZFBvc2l0aW9uLnk7XG4gICAgICB0aGlzLmFkZChjYXJkR2FtZU9iamVjdCk7XG4gICAgfVxuXG4gICAgdGhpcy5fY2FyZEdhbWVPYmplY3RzID0gWy4uLnRoaXMuX2NhcmRHYW1lT2JqZWN0cywgLi4uY2FyZEdhbWVPYmplY3RzXTtcbiAgfVxuXG4gIHByaXZhdGUgX2dldEZyb250R2FtZU9iamVjdHMgKHtzaXplfTp7c2l6ZTpudW1iZXJ9KVxuICB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcmRHYW1lT2JqZWN0cy5zbGljZSgtc2l6ZSk7XG4gIH1cblxuICBwcml2YXRlIF9yZW1vdmVGcm9udEdhbWVPYmplY3RzICh7c2l6ZX06e3NpemU6bnVtYmVyfSlcbiAge1xuICAgIGNvbnN0IGNhcmRHYW1lT2JqZWN0cyA9IHRoaXMuX2dldEZyb250R2FtZU9iamVjdHMoe3NpemV9KTtcbiAgICBjb25zdCB3b3JsZFBvc2l0aW9uID0gZ2V0V29ybGRQb3NpdGlvbih0aGlzKTtcbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2FyZEdhbWVPYmplY3RzLmxlbmd0aDsgaW5kZXgrKylcbiAgICB7XG4gICAgICBjb25zdCBjYXJkR2FtZU9iamVjdCA9IGNhcmRHYW1lT2JqZWN0c1tpbmRleF07XG4gICAgICBjYXJkR2FtZU9iamVjdC54ID0gY2FyZEdhbWVPYmplY3QueCArIHdvcmxkUG9zaXRpb24ueDtcbiAgICAgIGNhcmRHYW1lT2JqZWN0LnkgPSBjYXJkR2FtZU9iamVjdC55ICsgd29ybGRQb3NpdGlvbi55O1xuICAgICAgdGhpcy5yZW1vdmUoY2FyZEdhbWVPYmplY3QpO1xuICAgIH1cbiAgICB0aGlzLl9jYXJkR2FtZU9iamVjdHMgPSB0aGlzLl9jYXJkR2FtZU9iamVjdHMuc2xpY2UoMCwgdGhpcy5fY2FyZEdhbWVPYmplY3RzLmxlbmd0aCAtIHNpemUpO1xuICAgIHRoaXMucmVzaXplWm9uZSgpO1xuICB9XG5cbiAgZHJhd0Zyb250Q2FyZEdhbWVPYmplY3RzICh7c2l6ZX06e3NpemU6bnVtYmVyfSlcbiAge1xuICAgIGNvbnN0IGNhcmRHYW1lT2JqZWN0cyA9IHRoaXMuX2dldEZyb250R2FtZU9iamVjdHMoe3NpemV9KTtcbiAgICB0aGlzLl9yZW1vdmVGcm9udEdhbWVPYmplY3RzKHtzaXplfSk7XG4gICAgcmV0dXJuIGNhcmRHYW1lT2JqZWN0cztcbiAgfVxuXG4gIGdldCBjYXJkR2FtZU9iamVjdHMgKClcbiAge1xuICAgIHJldHVybiBbLi4udGhpcy5fY2FyZEdhbWVPYmplY3RzXTtcbiAgfVxufVxuIiwiaW1wb3J0IFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XG5pbXBvcnQge0NhcmRHYW1lT2JqZWN0fSBmcm9tICcuL2NhcmQnO1xuaW1wb3J0IHtQaWxlR2FtZU9iamVjdH0gZnJvbSAnLi9waWxlJztcblxuZXhwb3J0IHR5cGUgVGFibGVHYW1lT2JqZWN0U2V0dGluZ3MgPSB7XG4gIHNjZW5lOlBoYXNlci5TY2VuZSxcbiAgZGVja1BpbGVJZDpzdHJpbmcsXG4gIGRyYXdQaWxlc0lkczpzdHJpbmdbXSxcbiAgdGFibGVhdVBpbGVzSWRzOnN0cmluZ1tdLFxuICBkaXNjYXJkUGlsZXNJZHM6c3RyaW5nW10sXG4gIGRyYWdQaWxlSWQ6c3RyaW5nLFxuICBjYXJkR2FtZU9iamVjdHM6IENhcmRHYW1lT2JqZWN0W11cbn07XG5cbmV4cG9ydCBjbGFzcyBUYWJsZUdhbWVPYmplY3QgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyXG57XG4gIHByaXZhdGUgX2NhcmRHYW1lT2JqZWN0czpDYXJkR2FtZU9iamVjdFtdID0gW107XG4gIHByaXZhdGUgX3BpbGVHYW1lT2JqZWN0czpQaWxlR2FtZU9iamVjdFtdID0gW107XG4gIHByaXZhdGUgX2RlY2tQaWxlR2FtZU9iamVjdDpQaWxlR2FtZU9iamVjdDtcbiAgcHJpdmF0ZSBfZHJhd1BpbGVHYW1lT2JqZWN0czpQaWxlR2FtZU9iamVjdFtdID0gW107XG4gIHByaXZhdGUgX3RhYmxlYXVQaWxlR2FtZU9iamVjdHM6UGlsZUdhbWVPYmplY3RbXSA9IFtdO1xuICBwcml2YXRlIF9kaXNjYXJkUGlsZUdhbWVPYmplY3RzOlBpbGVHYW1lT2JqZWN0W10gPSBbXTtcbiAgcHJpdmF0ZSBfZHJhZ1BpbGVHYW1lT2JqZWN0OlBpbGVHYW1lT2JqZWN0O1xuXG4gIGNvbnN0cnVjdG9yICh7XG4gICAgc2NlbmUsXG4gICAgZGVja1BpbGVJZCxcbiAgICBkcmF3UGlsZXNJZHMsXG4gICAgdGFibGVhdVBpbGVzSWRzLFxuICAgIGRpc2NhcmRQaWxlc0lkcyxcbiAgICBkcmFnUGlsZUlkLFxuICAgIGNhcmRHYW1lT2JqZWN0c1xuICB9OlRhYmxlR2FtZU9iamVjdFNldHRpbmdzKVxuICB7XG4gICAgc3VwZXIoc2NlbmUsIDAsIDApO1xuXG4gICAgdGhpcy5fY2FyZEdhbWVPYmplY3RzID0gY2FyZEdhbWVPYmplY3RzO1xuXG4gICAgY29uc3QgX2RlY2tQaWxlID0gbmV3IFBpbGVHYW1lT2JqZWN0KHtcbiAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgICAgeDo1MDAsXG4gICAgICB5OjUwMCxcbiAgICAgIG5hbWU6IGRlY2tQaWxlSWQsXG4gICAgICBsYWJlbDogJ2RlY2snXG4gICAgfSk7XG4gICAgdGhpcy5fcGlsZUdhbWVPYmplY3RzID0gWy4uLnRoaXMuX3BpbGVHYW1lT2JqZWN0cywgX2RlY2tQaWxlXTtcbiAgICB0aGlzLl9kZWNrUGlsZUdhbWVPYmplY3QgPSBfZGVja1BpbGU7XG4gICAgdGhpcy5fZGVja1BpbGVHYW1lT2JqZWN0LnBsYWNlQ2FyZEdhbWVPYmplY3RzKHtjYXJkR2FtZU9iamVjdHN9KTtcbiAgICB0aGlzLl9kZWNrUGlsZUdhbWVPYmplY3QuYWRqdXN0Q2FyZEdhbWVPYmplY3RQb3NpdGlvbnMoKTtcbiAgICB0aGlzLmFkZChfZGVja1BpbGUpO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGRyYXdQaWxlc0lkcy5sZW5ndGg7IGluZGV4KyspXG4gICAge1xuICAgICAgY29uc3QgZHJhd1BpbGUgPSBuZXcgUGlsZUdhbWVPYmplY3Qoe1xuICAgICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICAgICAgeDo3MCArIGluZGV4ICogMjAsXG4gICAgICAgIHk6MTAwLFxuICAgICAgICBuYW1lOiBkcmF3UGlsZXNJZHNbaW5kZXhdLFxuICAgICAgICBsYWJlbDogJ2RyYXcnICsgaW5kZXhcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fcGlsZUdhbWVPYmplY3RzID0gWy4uLnRoaXMuX3BpbGVHYW1lT2JqZWN0cywgZHJhd1BpbGVdO1xuICAgICAgdGhpcy5fZHJhd1BpbGVHYW1lT2JqZWN0cyA9IFsuLi50aGlzLl9kcmF3UGlsZUdhbWVPYmplY3RzLCBkcmF3UGlsZV07XG4gICAgICB0aGlzLmFkZChkcmF3UGlsZSk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRhYmxlYXVQaWxlc0lkcy5sZW5ndGg7IGluZGV4KyspXG4gICAge1xuICAgICAgY29uc3QgdGFibGVhdVBpbGUgPSBuZXcgUGlsZUdhbWVPYmplY3Qoe1xuICAgICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICAgICAgeDoxMDAgKyBpbmRleCAqIDkwLFxuICAgICAgICB5OjI1MCxcbiAgICAgICAgbmFtZTogdGFibGVhdVBpbGVzSWRzW2luZGV4XSxcbiAgICAgICAgaXNTcHJlYWQ6IHRydWUsXG4gICAgICAgIGlzRHJvcFRhcmdldDogdHJ1ZSxcbiAgICAgICAgbGFiZWw6ICd0YWJsZWF1JyArIGluZGV4XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3BpbGVHYW1lT2JqZWN0cyA9IFsuLi50aGlzLl9waWxlR2FtZU9iamVjdHMsIHRhYmxlYXVQaWxlXTtcbiAgICAgIHRoaXMuX3RhYmxlYXVQaWxlR2FtZU9iamVjdHMgPSBbLi4udGhpcy5fdGFibGVhdVBpbGVHYW1lT2JqZWN0cywgdGFibGVhdVBpbGVdO1xuICAgICAgdGhpcy5hZGQodGFibGVhdVBpbGUpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkaXNjYXJkUGlsZXNJZHMubGVuZ3RoOyBpbmRleCsrKVxuICAgIHtcbiAgICAgIGNvbnN0IGRpc2NhcmRQaWxlID0gbmV3IFBpbGVHYW1lT2JqZWN0KHtcbiAgICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICAgIHg6MzAwICsgaW5kZXggKiA5MCxcbiAgICAgICAgeToxMDAsXG4gICAgICAgIG5hbWU6IGRpc2NhcmRQaWxlc0lkc1tpbmRleF0sXG4gICAgICAgIGxhYmVsOiAnZGlzY2FyZCcgKyBpbmRleFxuICAgICAgfSk7XG4gICAgICB0aGlzLl9waWxlR2FtZU9iamVjdHMgPSBbLi4udGhpcy5fcGlsZUdhbWVPYmplY3RzLCBkaXNjYXJkUGlsZV07XG4gICAgICB0aGlzLl9kaXNjYXJkUGlsZUdhbWVPYmplY3RzID0gWy4uLnRoaXMuX2Rpc2NhcmRQaWxlR2FtZU9iamVjdHMsIGRpc2NhcmRQaWxlXTtcbiAgICAgIHRoaXMuYWRkKGRpc2NhcmRQaWxlKTtcbiAgICB9XG5cbiAgICBjb25zdCBfZHJhZ1BpbGVHYW1lT2JqZWN0ID0gbmV3IFBpbGVHYW1lT2JqZWN0KHtcbiAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgICBuYW1lOiBkcmFnUGlsZUlkLFxuICAgICAgaXNTcHJlYWQ6IHRydWUsXG4gICAgICBsYWJlbDogJ2RyYWcnXG4gICAgfSk7XG4gICAgdGhpcy5fcGlsZUdhbWVPYmplY3RzID0gWy4uLnRoaXMuX3BpbGVHYW1lT2JqZWN0cywgX2RyYWdQaWxlR2FtZU9iamVjdF07XG4gICAgdGhpcy5fZHJhZ1BpbGVHYW1lT2JqZWN0ID0gX2RyYWdQaWxlR2FtZU9iamVjdDtcbiAgICB0aGlzLmFkZChfZHJhZ1BpbGVHYW1lT2JqZWN0KTtcbiAgfVxuXG4gIGdldCBjYXJkR2FtZU9iamVjdHMgKClcbiAge1xuICAgIHJldHVybiBbLi4udGhpcy5fY2FyZEdhbWVPYmplY3RzXTtcbiAgfVxuXG4gIGdldCBwaWxlR2FtZU9iamVjdHMgKClcbiAge1xuICAgIHJldHVybiBbLi4udGhpcy5fcGlsZUdhbWVPYmplY3RzXTtcbiAgfVxuXG4gIGdldFBpbGVHYW1lT2JqZWN0QnkgKHByZWRpY2F0ZToocDpQaWxlR2FtZU9iamVjdCkgPT4gYW55KVxuICB7XG4gICAgY29uc3QgcGlsZSA9IHRoaXMuX3BpbGVHYW1lT2JqZWN0cy5maW5kKHByZWRpY2F0ZSk7XG4gICAgaWYgKCFwaWxlKVxuICAgIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBwaWxlIGdhbWUgb2JqZWN0IGRvZXNuJ3QgZXhpc3QuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcGlsZTtcbiAgfVxuXG4gIGdldCBkZWNrUGlsZUdhbWVPYmplY3QgKClcbiAge1xuICAgIHJldHVybiB0aGlzLl9kZWNrUGlsZUdhbWVPYmplY3Q7XG4gIH1cblxuICBnZXQgZHJhd1BpbGVHYW1lT2JqZWN0cyAoKVxuICB7XG4gICAgcmV0dXJuIFsuLi50aGlzLl9kcmF3UGlsZUdhbWVPYmplY3RzXTtcbiAgfVxuXG4gIGdldCB0YWJsZWF1UGlsZUdhbWVPYmplY3RzICgpXG4gIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX3RhYmxlYXVQaWxlR2FtZU9iamVjdHNdO1xuICB9XG5cbiAgZ2V0IGRyYWdQaWxlR2FtZU9iamVjdCAoKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuX2RyYWdQaWxlR2FtZU9iamVjdDtcbiAgfVxufVxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xuXG5leHBvcnQgY29uc3QgZ2V0V29ybGRQb3NpdGlvbiA9IChjb250YWluZXI6IFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIpID0+XG57XG4gIGxldCBwYXJlbnQgPSBjb250YWluZXIucGFyZW50Q29udGFpbmVyO1xuICBsZXQgeCA9IGNvbnRhaW5lci54O1xuICBsZXQgeSA9IGNvbnRhaW5lci55O1xuICB3aGlsZSAocGFyZW50KVxuICB7XG4gICAgeCA9IHggKyBwYXJlbnQueDtcbiAgICB5ID0geSArIHBhcmVudC55O1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRDb250YWluZXI7XG4gIH1cbiAgcmV0dXJuIHt4LCB5fTtcbn07XG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gXCJwaGFzZXJcIjtcbi8vIGltcG9ydCBIZWxsb1dvcmxkU2NlbmUgZnJvbSBcIi4vc2NlbmVzL2hlbGxvLXdvcmxkLXNjZW5lXCI7XG5pbXBvcnQgTWFpblNjZW5lIGZyb20gXCIuL3NjZW5lcy9tYWluLXNjZW5lXCI7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgLy8gdGl0bGU6IFwiR2FtZSBPZiBMaWZlXCIsXG4gIC8vIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vZGlnaXRzZW5zaXRpdmUvcGhhc2VyMy10eXBlc2NyaXB0XCIsXG4gIC8vIHZlcnNpb246IFwiMS4wXCIsXG4gIHdpZHRoOiAxMDAwLFxuICBoZWlnaHQ6IDgwMCxcbiAgdHlwZTogUGhhc2VyLkFVVE8sXG4gIC8vIHBhcmVudDogXCJnYW1lXCIsXG4gIHNjZW5lOiBbTWFpblNjZW5lXSxcbiAgYmFja2dyb3VuZENvbG9yOiBcIiNlZGVkZWRcIixcbiAgLy8gcmVuZGVyOiB7IHBpeGVsQXJ0OiBmYWxzZSwgYW50aWFsaWFzOiB0cnVlIH1cbiAgLy8gcGh5c2ljczoge1xuICAvLyAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxuICAvLyAgIGFyY2FkZToge1xuICAvLyAgICAgZ3Jhdml0eTogeyB5OiAyMDAgfVxuICAvLyAgIH1cbiAgLy8gfSxcbn07XG5cbi8vIGV4cG9ydCBjbGFzcyBHYW1lIGV4dGVuZHMgUGhhc2VyLkdhbWUge1xuLy8gICBjb25zdHJ1Y3Rvcihjb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcpIHtcbi8vICAgICBzdXBlcihjb25maWcpO1xuLy8gICB9XG4vLyB9XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gIG5ldyBQaGFzZXIuR2FtZShjb25maWcpO1xufSk7XG4iLCJpbXBvcnQge2VtaXR0ZXJ9IGZyb20gJy4vZW1pdHRlcic7XG5pbXBvcnQge0NhcmR9IGZyb20gJy4uL21vZGVscy9jYXJkJztcblxuZXhwb3J0IGNsYXNzIENhcmRXaXRoRXZlbnQgZXh0ZW5kcyBDYXJkXG57XG4gIGZhY2VVcCAoKVxuICB7XG4gICAgc3VwZXIuZmFjZVVwKCk7XG4gICAgZW1pdHRlci5lbWl0KCdGTElQX09WRVJfQ0FSRCcsIHtcbiAgICAgIGNhcmQ6IHRoaXNcbiAgICB9KTtcbiAgfVxuXG4gIGZhY2VEb3duICgpXG4gIHtcbiAgICBzdXBlci5mYWNlRG93bigpO1xuICAgIGVtaXR0ZXIuZW1pdCgnRkxJUF9PVkVSX0NBUkQnLCB7XG4gICAgICBjYXJkOiB0aGlzXG4gICAgfSk7XG4gIH1cblxuICBmbGlwT3ZlciAoKVxuICB7XG4gICAgc3VwZXIuZmxpcE92ZXIoKTtcbiAgICBlbWl0dGVyLmVtaXQoJ0ZMSVBfT1ZFUl9DQVJEJywge1xuICAgICAgY2FyZDogdGhpc1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQge2NyZWF0ZUNhcmRzfSBmcm9tICcuLi9tb2RlbHMvY3JlYXRlLWNhcmRzJztcbmltcG9ydCB7Q2FyZFdpdGhFdmVudH0gZnJvbSAnLi9jYXJkJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNhcmRzV2l0aEV2ZW50cyA9ICh7XG4gIG51bWJlck9mRGVja3NVc2VkLFxuICBudW1iZXJPZlN1aXRzXG59OntcbiAgbnVtYmVyT2ZEZWNrc1VzZWQ6bnVtYmVyLFxuICBudW1iZXJPZlN1aXRzOm51bWJlclxufSkgPT5cbiAgY3JlYXRlQ2FyZHMoe1xuICAgIG51bWJlck9mRGVja3NVc2VkLFxuICAgIG51bWJlck9mU3VpdHNcbiAgfSkubWFwKGNhcmQgPT4gbmV3IENhcmRXaXRoRXZlbnQoe1xuICAgIHN1aXQ6IGNhcmQuc3VpdCxcbiAgICByYW5rOiBjYXJkLnJhbmssXG4gICAgaXNGYWNlVXA6IGNhcmQuaXNGYWNlVXBcbiAgfSkpO1xuIiwiaW1wb3J0IHtFbWl0dGVyfSBmcm9tICcuLi9ldmVudC1lbWl0dGVyJztcbmltcG9ydCB7TW9kZWxFdmVudHN9IGZyb20gJy4vZXZlbnRzJztcblxuZXhwb3J0IGNvbnN0IGVtaXR0ZXIgPSBuZXcgRW1pdHRlcjxNb2RlbEV2ZW50cz4oKTtcbiIsImltcG9ydCB7UGlsZX0gZnJvbSAnLi4vbW9kZWxzL3BpbGUnO1xuXG5leHBvcnQgY2xhc3MgUGlsZVdpdGhFdmVudCBleHRlbmRzIFBpbGUge1xuXG59XG4iLCJpbXBvcnQge2VtaXR0ZXJ9IGZyb20gJy4vZW1pdHRlcic7XG5pbXBvcnQge1BpbGV9IGZyb20gJy4uL21vZGVscy9waWxlJztcbmltcG9ydCB7VGFibGV9IGZyb20gJy4uL21vZGVscy90YWJsZSc7XG5cbmV4cG9ydCBjbGFzcyBUYWJsZVdpdGhFdmVudCBleHRlbmRzIFRhYmxlIHtcblxuICBwcm90ZWN0ZWQgX21vdmVDYXJkQmV0d2VlblBpbGVzICh7ZnJvbSwgdG8sIHNpemV9Ontmcm9tOlBpbGUsIHRvOlBpbGUsIHNpemU6bnVtYmVyfSlcbiAge1xuICAgIGNvbnN0IGNhcmRzID0gc3VwZXIuX21vdmVDYXJkQmV0d2VlblBpbGVzKHtmcm9tLCB0bywgc2l6ZX0pO1xuICAgIGVtaXR0ZXIuZW1pdCgnTU9WRV9DQVJEU19CRVRXRUVOX1BJTEVTJywge2Zyb20sIHRvLCBzaXplfSk7XG4gICAgcmV0dXJuIGNhcmRzO1xuICB9XG5cbn1cbiIsIi8vIGltcG9ydCB7ZXZlbnRIdWJ9IGZyb20gJy4uL2V2ZW50LWh1Yic7XG5pbXBvcnQge25hbm9pZH0gZnJvbSAnbmFub2lkJztcblxuZXhwb3J0IGVudW0gU3VpdCB7XG4gIFNwYWRlID0gJ+KZoCcsXG4gIENsdWIgPSAn4pmjJyxcbiAgRGlhbW9uZCA9ICfimaYnLFxuICBIZWFydCA9ICfimaUnXG59XG5cbmNvbnN0IGdldFJhbmtUZXh0ID0gKHJhbms6bnVtYmVyKSA9Plxue1xuICBpZiAocmFuayA8IDEgfHwgMTMgPCByYW5rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FyZCByYW5rIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgaWYgKHJhbmsgPT09IDExKSB7XG4gICAgcmV0dXJuICdKJztcbiAgfSBlbHNlIGlmIChyYW5rID09PSAxMikge1xuICAgIHJldHVybiAnUSc7XG4gIH0gZWxzZSBpZiAocmFuayA9PT0gMTMpIHtcbiAgICByZXR1cm4gJ0snO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByYW5rLnRvU3RyaW5nKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcmRcbntcbiAgcHJpdmF0ZSBfc3VpdDogU3VpdDtcbiAgcHJpdmF0ZSBfcmFuazogbnVtYmVyO1xuICBwcml2YXRlIF9pc0ZhY2VVcDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaWQ6c3RyaW5nID0gbmFub2lkKCk7XG5cbiAgY29uc3RydWN0b3IgKHtzdWl0LCByYW5rLCBpc0ZhY2VVcH06e3N1aXQ6U3VpdCwgcmFuazpudW1iZXIsIGlzRmFjZVVwPzpib29sZWFufSlcbiAge1xuICAgIHRoaXMuX3N1aXQgPSBzdWl0O1xuICAgIHRoaXMuX2lzRmFjZVVwID0gaXNGYWNlVXAgfHwgZmFsc2U7XG5cbiAgICBpZiAoMSA8PSByYW5rICYmIHJhbmsgPD0gMTMpIHtcbiAgICAgIHRoaXMuX3JhbmsgPSByYW5rO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBjYXJkIHJhbmsgJHtyYW5rfSBpcyBpbnZhbGlkLmApO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzdWl0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VpdDtcbiAgfVxuXG4gIGdldCBzdWl0TWFyayAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1aXQudG9TdHJpbmcoKVxuICB9XG5cbiAgZ2V0IHJhbmsgKCkge1xuICAgIHJldHVybiB0aGlzLl9yYW5rO1xuICB9XG5cbiAgZ2V0IHJhbmtNYXJrICgpIHtcbiAgICByZXR1cm4gZ2V0UmFua1RleHQodGhpcy5fcmFuaylcbiAgfVxuXG4gIGdldCBpc0ZhY2VVcCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzRmFjZVVwO1xuICB9XG5cbiAgZ2V0IGlkICgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICBmYWNlVXAgKClcbiAge1xuICAgIHRoaXMuX2lzRmFjZVVwID0gdHJ1ZTtcbiAgfVxuXG4gIGZhY2VEb3duICgpXG4gIHtcbiAgICB0aGlzLl9pc0ZhY2VVcCA9IGZhbHNlO1xuICB9XG5cbiAgZmxpcE92ZXIgKClcbiAge1xuICAgIHRoaXMuX2lzRmFjZVVwID0gIXRoaXMuX2lzRmFjZVVwO1xuICB9XG5cbiAgdG9TdHJpbmcgKClcbiAge1xuICAgIHJldHVybiB0aGlzLnN1aXRNYXJrICsgdGhpcy5yYW5rTWFyayArICh0aGlzLl9pc0ZhY2VVcCA/ICcrJyA6ICctJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7Q2FyZCwgU3VpdH0gZnJvbSAnLi9jYXJkJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNhcmRzID0gKHtcbiAgbnVtYmVyT2ZEZWNrc1VzZWQsXG4gIG51bWJlck9mU3VpdHNcbn06e1xuICBudW1iZXJPZkRlY2tzVXNlZDpudW1iZXIsXG4gIG51bWJlck9mU3VpdHM6bnVtYmVyXG59KSA9PiB7XG4gIGNvbnN0IGRlY2tDYXJkczpDYXJkW10gPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mRGVja3NVc2VkOyBpKyspXG4gIHtcbiAgICBmb3IgKGxldCByYW5rID0gMTsgcmFuayA8PSAxMzsgcmFuaysrKVxuICAgIHtcbiAgICAgIHN3aXRjaCAobnVtYmVyT2ZTdWl0cylcbiAgICAgIHtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGRlY2tDYXJkcy5wdXNoKG5ldyBDYXJkKHtzdWl0OlN1aXQuRGlhbW9uZCwgcmFuaywgaXNGYWNlVXA6IGZhbHNlfSkpO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgZGVja0NhcmRzLnB1c2gobmV3IENhcmQoe3N1aXQ6U3VpdC5DbHViLCByYW5rLCBpc0ZhY2VVcDogZmFsc2V9KSk7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBkZWNrQ2FyZHMucHVzaChuZXcgQ2FyZCh7c3VpdDpTdWl0LkhlYXJ0LCByYW5rLCBpc0ZhY2VVcDogZmFsc2V9KSk7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBkZWNrQ2FyZHMucHVzaChuZXcgQ2FyZCh7c3VpdDpTdWl0LlNwYWRlLCByYW5rLCBpc0ZhY2VVcDogZmFsc2V9KSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlY2tDYXJkcztcbn1cblxuZXhwb3J0IGNvbnN0IHJhbmRvbWl6ZUFycmF5ID0gPFQ+KHthcnJheX06e2FycmF5OlRbXX0pID0+IHtcbiAgY29uc3QgX2FyciA9IFsuLi5hcnJheV07XG4gIGZvciAobGV0IGkgPSBfYXJyLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pXG4gIHtcbiAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgIFtfYXJyW2ldLCBfYXJyW2pdXSA9IFtfYXJyW2pdLCBfYXJyW2ldXTtcbiAgfVxuICByZXR1cm4gX2Fycjtcbn1cbiIsImltcG9ydCB7Q2FyZH0gZnJvbSAnLi9jYXJkJztcbmltcG9ydCB7bmFub2lkfSBmcm9tICduYW5vaWQnO1xuXG50eXBlIFBpbGVBcmdzID0ge1xuICBjYXJkcz86IENhcmRbXSxcbiAgbGFiZWw/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNsYXNzIFBpbGVcbntcbiAgcHJvdGVjdGVkIF9jYXJkczpDYXJkW107XG4gIHByb3RlY3RlZCBfbGFiZWw6c3RyaW5nO1xuICBwcml2YXRlIF9pZDpzdHJpbmcgPSBuYW5vaWQoKTtcblxuICBjb25zdHJ1Y3RvciAoYXJnczpQaWxlQXJncyA9IHt9KVxuICB7XG4gICAgdGhpcy5fY2FyZHMgPSBhcmdzLmNhcmRzIHx8IFtdO1xuICAgIHRoaXMuX2xhYmVsID0gYXJncy5sYWJlbCB8fCAnJztcbiAgfVxuXG4gIGdldCBpZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgZ2V0IGxhYmVsICgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFiZWw7XG4gIH1cblxuICBnZXQgY2FyZHMgKClcbiAge1xuICAgIHJldHVybiBbLi4udGhpcy5fY2FyZHNdO1xuICB9XG5cbiAgZ2V0IGZyb250Q2FyZCAoKTpDYXJkfHVuZGVmaW5lZFxuICB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcmRzW3RoaXMuX2NhcmRzLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgZ2V0IGxhc3RDYXJkICgpOkNhcmR8dW5kZWZpbmVkXG4gIHtcbiAgICByZXR1cm4gdGhpcy5fY2FyZHNbMF07XG4gIH1cblxuICBnZXRGcm9udENhcmRzICh7c2l6ZX06e3NpemU6bnVtYmVyfSlcbiAge1xuICAgIGNvbnN0IGNhcmRzID0gdGhpcy5fY2FyZHM7XG4gICAgaWYgKGNhcmRzLmxlbmd0aCA9PT0gMCB8fCBzaXplIDwgMSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IF9zaXplID0gTWF0aC5taW4oY2FyZHMubGVuZ3RoLCBzaXplKTtcbiAgICByZXR1cm4gY2FyZHMuc2xpY2UoY2FyZHMubGVuZ3RoIC0gX3NpemUpO1xuICB9XG5cbiAgZHJhd0NhcmRzICh7c2l6ZX06e3NpemU6bnVtYmVyfSlcbiAge1xuICAgIGNvbnN0IGNhcmRzID0gdGhpcy5fY2FyZHM7XG4gICAgaWYgKGNhcmRzLmxlbmd0aCA9PT0gMCB8fCBzaXplIDwgMSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IF9zaXplID0gTWF0aC5taW4oY2FyZHMubGVuZ3RoLCBzaXplKTtcbiAgICBjb25zdCBkcmF3bkNhcmRzID0gY2FyZHMuc2xpY2UoY2FyZHMubGVuZ3RoIC0gX3NpemUpO1xuICAgIHRoaXMuX2NhcmRzID0gY2FyZHMuc2xpY2UoMCwgLXNpemUpO1xuICAgIHJldHVybiBkcmF3bkNhcmRzO1xuICB9XG5cbiAgcGxhY2VDYXJkcyAoe2NhcmRzfTp7Y2FyZHM6Q2FyZFtdfSlcbiAge1xuICAgIHRoaXMuX2NhcmRzID0gWy4uLnRoaXMuX2NhcmRzLCAuLi5jYXJkc107XG4gIH1cblxuICBnZXREZXNjZW5kaW5nSW5TdWl0RnJvbnRDYXJkcyAoKVxuICB7XG4gICAgcmV0dXJuIFBpbGUuZ2V0RGVzY2VuZGluZ0Zyb250Q2FyZHMoe1xuICAgICAgY2FyZHM6IHRoaXMuX2NhcmRzLFxuICAgICAgaW5TdWl0OiB0cnVlLFxuICAgICAgZmFjZVVwOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0RGVzY2VuZGluZ0Zyb250Q2FyZHMgKHtjYXJkcywgaW5TdWl0LCBmYWNlVXB9OntjYXJkczpDYXJkW10sIGluU3VpdD86Ym9vbGVhbiwgZmFjZVVwPzpib29sZWFufSlcbiAge1xuICAgIGNvbnN0IF9pblN1aXQgPSBpblN1aXQgfHwgZmFsc2U7XG4gICAgY29uc3QgX2ZhY2VVcCA9IGZhY2VVcCB8fCBmYWxzZTtcblxuICAgIGlmIChjYXJkcy5sZW5ndGggPT09IDApXG4gICAge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGxldCBwcmV2ID0gY2FyZHNbY2FyZHMubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAoX2ZhY2VVcCAmJiAhcHJldi5pc0ZhY2VVcClcbiAgICB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgbGV0IF9jYXJkczpDYXJkW10gPSBbcHJldl07XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IGNhcmRzLmxlbmd0aCAtIDI7IGluZGV4ID49IDA7IGluZGV4LS0pXG4gICAge1xuICAgICAgY29uc3QgY3VycmVudCA9IGNhcmRzW2luZGV4XTtcblxuICAgICAgaWYgKHByZXYucmFuayArIDEgIT09IGN1cnJlbnQucmFua1xuICAgICAgICB8fCAoX2luU3VpdCAmJiBwcmV2LnN1aXQgIT09IGN1cnJlbnQuc3VpdClcbiAgICAgICAgfHwgKF9mYWNlVXAgJiYgIWN1cnJlbnQuaXNGYWNlVXApKVxuICAgICAge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgX2NhcmRzID0gW2N1cnJlbnQsIC4uLl9jYXJkc107XG4gICAgICBwcmV2ID0gY3VycmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gX2NhcmRzO1xuICB9XG5cbiAgc3RhdGljIGNoZWNrSWZDYXJkc0FyZURlc2NlbmRpbmcgKHtjYXJkcywgaW5TdWl0LCBmYWNlVXB9OntjYXJkczpDYXJkW10sIGluU3VpdD86Ym9vbGVhbiwgZmFjZVVwPzpib29sZWFufSlcbiAge1xuICAgIHJldHVybiBQaWxlLmdldERlc2NlbmRpbmdGcm9udENhcmRzKHtjYXJkcywgaW5TdWl0LCBmYWNlVXB9KS5sZW5ndGggPT09IGNhcmRzLmxlbmd0aDtcbiAgfVxuXG4gIGNoZWNrSWZGcm9udENhcmRzQ29tcGxldGUgKClcbiAge1xuICAgIHJldHVybiB0aGlzLmNhcmRzLmxlbmd0aCA+PSAxMyAmJiBQaWxlLmNoZWNrSWZDYXJkc0FyZURlc2NlbmRpbmcoe1xuICAgICAgY2FyZHM6IHRoaXMuY2FyZHMuc2xpY2UoLTEzKSxcbiAgICAgIGluU3VpdDogdHJ1ZSxcbiAgICAgIGZhY2VVcDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgdG9TdHJpbmcgKClcbiAge1xuICAgIHJldHVybiB0aGlzLmNhcmRzLm1hcChjID0+IGMudG9TdHJpbmcoKSkuam9pbignICcpO1xuICB9XG59XG4iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XG5pbXBvcnQge1BpbGV9IGZyb20gJy4vcGlsZSc7XG4vLyBpbXBvcnQge1RhYmxlU2V0dGluZ3MsIFRhYmxlU2V0dGluZ0NvbmZpZ30gZnJvbSAnLi90YWJsZS1zZXR0aW5ncyc7XG5pbXBvcnQge1xuICBGQUNFX1VQX0NBUkQsXG4gIE1PVkVfQ0FSRCxcbiAgUEFVU0UsXG4gIFVuZG9hYmxlQWN0aW9uSGlzdG9yeVxufSBmcm9tICcuL3VuZG9hYmxlLWFjdGlvbnMnO1xuXG5leHBvcnQgdHlwZSBUYWJsZVNldHRpbmdzID0ge1xuICBudW1iZXJPZlRhYmxlYXVQaWxlczogbnVtYmVyLFxuICBudW1iZXJPZkRyYXdQaWxlczogbnVtYmVyLFxuICBjYXJkczogQ2FyZFtdXG59XG5cbmV4cG9ydCBjbGFzcyBUYWJsZVxue1xuICBwcml2YXRlIF9zZXR0aW5nczpUYWJsZVNldHRpbmdzO1xuICBwcml2YXRlIF9jYXJkczogQ2FyZFtdO1xuICBwcml2YXRlIF9kZWNrUGlsZTpQaWxlO1xuICBwcml2YXRlIF9kcmF3UGlsZXM6UGlsZVtdO1xuICBwcml2YXRlIF90YWJsZWF1UGlsZXM6UGlsZVtdO1xuICBwcml2YXRlIF9kaXNjYXJkUGlsZXM6UGlsZVtdO1xuICBwcml2YXRlIF9waWxlczpQaWxlW107XG4gIHByaXZhdGUgX2FjdGlvbkhpc3Rvcnk6VW5kb2FibGVBY3Rpb25IaXN0b3J5O1xuXG4gIGNvbnN0cnVjdG9yIChzZXR0aW5nczogVGFibGVTZXR0aW5ncylcbiAge1xuICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy5fY2FyZHMgPSBzZXR0aW5ncy5jYXJkcztcbiAgICB0aGlzLl9kZWNrUGlsZSA9IG5ldyBQaWxlKHtsYWJlbDogJ2RlY2snLCBjYXJkczogc2V0dGluZ3MuY2FyZHN9KTtcbiAgICB0aGlzLl9kcmF3UGlsZXMgPSBBcnJheS5mcm9tKHtsZW5ndGg6c2V0dGluZ3MubnVtYmVyT2ZEcmF3UGlsZXN9KS5tYXAoKF8sIGkpID0+IG5ldyBQaWxlKHtsYWJlbDogYGRyYXcke2l9YCwgY2FyZHM6IFtdfSkpO1xuICAgIHRoaXMuX3RhYmxlYXVQaWxlcyA9IEFycmF5LmZyb20oe2xlbmd0aDpzZXR0aW5ncy5udW1iZXJPZlRhYmxlYXVQaWxlc30pLm1hcCgoXywgaSkgPT4gbmV3IFBpbGUoe2xhYmVsOiBgdGFibCR7aX1gLCBjYXJkczogW119KSk7XG4gICAgdGhpcy5fZGlzY2FyZFBpbGVzID0gQXJyYXkuZnJvbSh7bGVuZ3RoOk1hdGguZmxvb3Ioc2V0dGluZ3MuY2FyZHMubGVuZ3RoIC8gMTMpfSkubWFwKChfLCBpKSA9PiBuZXcgUGlsZSh7bGFiZWw6IGBkaXNjJHtpfWAsIGNhcmRzOiBbXX0pKTtcbiAgICB0aGlzLl9waWxlcyA9IFt0aGlzLl9kZWNrUGlsZSwgLi4udGhpcy5fZHJhd1BpbGVzLCAuLi50aGlzLnRhYmxlYXVQaWxlcywgLi4udGhpcy5fZGlzY2FyZFBpbGVzXTtcbiAgICB0aGlzLl9hY3Rpb25IaXN0b3J5ID0gbmV3IFVuZG9hYmxlQWN0aW9uSGlzdG9yeSgpO1xuICB9XG5cbiAgZ2V0IGNhcmRzICgpXG4gIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX2NhcmRzXTtcbiAgfVxuXG4gIGdldCBwaWxlcyAoKVxuICB7XG4gICAgcmV0dXJuIFsuLi50aGlzLl9waWxlc107XG4gIH1cblxuICBnZXRQaWxlQnkgKHByZWRpY2F0ZToocDpQaWxlKSA9PiBhbnkpXG4gIHtcbiAgICBjb25zdCBwaWxlID0gdGhpcy5fcGlsZXMuZmluZChwcmVkaWNhdGUpO1xuICAgIGlmICghcGlsZSlcbiAgICB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcGlsZSBkb2Vzbid0IGV4aXN0LlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHBpbGU7XG4gIH1cblxuICBnZXQgZGVja1BpbGUgKClcbiAge1xuICAgIHJldHVybiB0aGlzLl9kZWNrUGlsZTtcbiAgfVxuXG4gIGdldCBkcmF3UGlsZXMgKClcbiAge1xuICAgIHJldHVybiBbLi4udGhpcy5fZHJhd1BpbGVzXTtcbiAgfVxuXG4gIGdldCB0YWJsZWF1UGlsZXMgKClcbiAge1xuICAgIHJldHVybiBbLi4udGhpcy5fdGFibGVhdVBpbGVzXTtcbiAgfVxuXG4gIGdldCBkaXNjYXJkUGlsZXMgKClcbiAge1xuICAgIHJldHVybiBbLi4udGhpcy5fZGlzY2FyZFBpbGVzXTtcbiAgfVxuXG4gIGdldCBpc0NsZWFyICgpXG4gIHtcbiAgICByZXR1cm4gIXRoaXMuX3RhYmxlYXVQaWxlcy5maW5kKHAgPT4gcC5jYXJkcy5sZW5ndGggPiAwKTtcbiAgfVxuXG4gIGdldFBvc3NpYmxlTW92ZXNCZXR3ZWVuVGFibGVhdVBpbGVzICgpXG4gIHtcbiAgICBsZXQgbW92ZXM6e3NpemU6bnVtYmVyLCBmcm9tOiBQaWxlLCB0bzogUGlsZX1bXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgZnJvbSBvZiB0aGlzLl90YWJsZWF1UGlsZXMpXG4gICAge1xuICAgICAgY29uc3QgZHJhd2FibGVDYXJkcyA9IGZyb20uZ2V0RGVzY2VuZGluZ0luU3VpdEZyb250Q2FyZHMoKTtcbiAgICAgIGlmIChkcmF3YWJsZUNhcmRzLmxlbmd0aCA9PT0gMCkgY29udGludWU7XG5cbiAgICAgIGZvciAobGV0IHRvIG9mIHRoaXMuX3RhYmxlYXVQaWxlcylcbiAgICAgIHtcbiAgICAgICAgaWYgKHRvID09PSBmcm9tKSBjb250aW51ZTtcblxuICAgICAgICBmb3IgKGxldCBzaXplID0gZHJhd2FibGVDYXJkcy5sZW5ndGg7IHNpemUgPiAwOyBzaXplLS0pXG4gICAgICAgIHtcbiAgICAgICAgICBpZiAodG8uZnJvbnRDYXJkICYmICFQaWxlLmNoZWNrSWZDYXJkc0FyZURlc2NlbmRpbmcoe1xuICAgICAgICAgICAgY2FyZHM6IFt0by5mcm9udENhcmQsIC4uLmRyYXdhYmxlQ2FyZHMuc2xpY2UoLXNpemUpXSxcbiAgICAgICAgICAgIGluU3VpdDogZmFsc2UsXG4gICAgICAgICAgICBmYWNlVXA6IHRydWVcbiAgICAgICAgICB9KSkgY29udGludWU7XG5cbiAgICAgICAgICBtb3ZlcyA9IFsuLi5tb3Zlcywge2Zyb20sIHRvLCBzaXplfV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbW92ZXM7XG4gIH1cblxuICBwcm90ZWN0ZWQgX21vdmVDYXJkQmV0d2VlblBpbGVzICh7ZnJvbSwgdG8sIHNpemV9Ontmcm9tOlBpbGUsIHRvOlBpbGUsIHNpemU6bnVtYmVyfSlcbiAge1xuICAgIGlmICghdGhpcy5fcGlsZXMuZmluZChwID0+IHAgPT09IGZyb20pKVxuICAgIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwiZnJvbVwiIHBpbGUgaXMgbm90IGJlIGluIHRoaXMgdGFibGUuYCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9waWxlcy5maW5kKHAgPT4gcCA9PT0gdG8pKVxuICAgIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwidG9cIiBwaWxlIGlzIG5vdCBiZSBpbiB0aGlzIHRhYmxlLmApO1xuICAgIH1cblxuICAgIGlmIChmcm9tLmdldEZyb250Q2FyZHMoe3NpemV9KS5sZW5ndGggIT09IHNpemUpXG4gICAge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgcGlsZSBcIiR7ZnJvbS5pZH1cIiBkb2Vzbid0IGhhdmUgJHtzaXplfSBjYXJkcyB0byBkcmF3LmApO1xuICAgIH1cblxuICAgIGNvbnN0IGNhcmRzID0gZnJvbS5kcmF3Q2FyZHMoe3NpemV9KTtcbiAgICB0by5wbGFjZUNhcmRzKHtjYXJkc30pO1xuICB9XG5cbiAgcHJpdmF0ZSBfZGVhbENhcmRzRnJvbURlY2tUb1RhYmxlYXVQaWxlcyAoKVxuICB7XG4gICAgY29uc3QgbnVtYmVyT2ZDYXJkcyA9IHRoaXMuX2RlY2tQaWxlLmNhcmRzLmxlbmd0aDtcbiAgICBjb25zdCBudW1iZXJPZkRyYXdDYXJkcyA9IHRoaXMuX3NldHRpbmdzLm51bWJlck9mVGFibGVhdVBpbGVzICogdGhpcy5fc2V0dGluZ3MubnVtYmVyT2ZEcmF3UGlsZXM7XG5cbiAgICBsZXQgY291bnRlciA9IDA7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IG51bWJlck9mQ2FyZHMgLSBudW1iZXJPZkRyYXdDYXJkczsgaW5kZXgrKylcbiAgICB7XG4gICAgICBjb25zdCBmcm9tID0gdGhpcy5fZGVja1BpbGU7XG4gICAgICBjb25zdCB0byA9IHRoaXMuX3RhYmxlYXVQaWxlc1tjb3VudGVyICUgdGhpcy50YWJsZWF1UGlsZXMubGVuZ3RoXTtcbiAgICAgIHRoaXMuX21vdmVDYXJkQmV0d2VlblBpbGVzKHtmcm9tLCB0bywgc2l6ZTogMX0pO1xuICAgICAgY291bnRlciA9IGNvdW50ZXIgKyAxO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2RlYWxDYXJkc0Zyb21EZWNrVG9EcmF3UGlsZXMgKClcbiAge1xuICAgIC8vIGNvbnN0IG51bWJlck9mRHJhd0NhcmRzID0gdGhpcy5fc2V0dGluZ3MubnVtYmVyT2ZUYWJsZWF1UGlsZXMgKiB0aGlzLl9zZXR0aW5ncy5udW1iZXJPZkRyYXdQaWxlcztcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl9zZXR0aW5ncy5udW1iZXJPZkRyYXdQaWxlczsgaW5kZXgrKylcbiAgICB7XG4gICAgICBjb25zdCBmcm9tID0gdGhpcy5fZGVja1BpbGU7XG4gICAgICBjb25zdCB0byA9IHRoaXMuX2RyYXdQaWxlc1tpbmRleF07XG4gICAgICB0aGlzLl9tb3ZlQ2FyZEJldHdlZW5QaWxlcyh7ZnJvbSwgdG8sIHNpemU6IHRoaXMuX3NldHRpbmdzLm51bWJlck9mVGFibGVhdVBpbGVzfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZmxpcFVwVGFibGVhdUZyb250Q2FyZHMgKClcbiAge1xuICAgIGZvciAobGV0IHRhYmxlYXVQaWxlIG9mIHRoaXMuX3RhYmxlYXVQaWxlcylcbiAgICB7XG4gICAgICBpZiAodGFibGVhdVBpbGUuZnJvbnRDYXJkKSB0aGlzLl9mYWNlVXBDYXJkKHtjYXJkOiB0YWJsZWF1UGlsZS5mcm9udENhcmR9KTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9mYWNlVXBDYXJkICh7Y2FyZH06e2NhcmQ6Q2FyZH0pXG4gIHtcbiAgICBpZiAoIWNhcmQuaXNGYWNlVXApXG4gICAge1xuICAgICAgY2FyZC5mYWNlVXAoKTtcbiAgICB9XG4gIH1cblxuICBzdGFydEdhbWUgKClcbiAge1xuICAgIHRoaXMuX2RlYWxDYXJkc0Zyb21EZWNrVG9UYWJsZWF1UGlsZXMoKTtcbiAgICB0aGlzLl9kZWFsQ2FyZHNGcm9tRGVja1RvRHJhd1BpbGVzKCk7XG4gICAgdGhpcy5fZmxpcFVwVGFibGVhdUZyb250Q2FyZHMoKTtcbiAgfVxuXG4gIG1vdmVDYXJkQmV0d2VlblRhYmxlYXVQaWxlcyAoe2Zyb20sIHRvLCBzaXplfTp7ZnJvbTpQaWxlLCB0bzpQaWxlLCBzaXplOm51bWJlcn0pXG4gIHtcbiAgICBpZiAoIXRoaXMuX3RhYmxlYXVQaWxlcy5maW5kKHAgPT4gcCA9PT0gZnJvbSkpXG4gICAge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJmcm9tXCIgcGlsZSBpcyBub3QgYSB0YWJsZWF1IHBpbGUuYCk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl90YWJsZWF1UGlsZXMuZmluZChwID0+IHAgPT09IHRvKSlcbiAgICB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcInRvXCIgcGlsZSBpcyBub3QgYSB0YWJsZWF1IHBpbGUuYCk7XG4gICAgfVxuXG4gICAgY29uc3QgY2FyZHMgPSBmcm9tLmdldEZyb250Q2FyZHMoe3NpemV9KTtcbiAgICBpZiAoY2FyZHMubGVuZ3RoICE9PSBzaXplKVxuICAgIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBpbGUgXCIke2Zyb20uaWR9XCIgZG9lc24ndCBoYXZlICR7c2l6ZX0gY2FyZHMgdG8gZHJhdy5gKTtcbiAgICB9XG5cbiAgICBpZiAodG8uZnJvbnRDYXJkICYmICFQaWxlLmNoZWNrSWZDYXJkc0FyZURlc2NlbmRpbmcoe1xuICAgICAgY2FyZHM6IFt0by5mcm9udENhcmQsIC4uLmNhcmRzXSxcbiAgICAgIGluU3VpdDogZmFsc2UsXG4gICAgICBmYWNlVXA6IHRydWVcbiAgICB9KSlcbiAgICB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFlvdSBjYW4ndCBwbGFjZSB0aG9zZSBjYXJkcyB0byB0aGUgXCJ0b1wiIHBpbGUuYCk7XG4gICAgfVxuXG4gICAgdGhpcy5fbW92ZUNhcmRCZXR3ZWVuUGlsZXMoe2Zyb20sIHRvLCBzaXplfSk7XG4gICAgdGhpcy5fYWN0aW9uSGlzdG9yeS5hZGQoe2Zyb20sIHRvLCBzaXplLCB0eXBlOiBNT1ZFX0NBUkR9KTtcblxuICAgIGlmIChmcm9tLmZyb250Q2FyZCAmJiAhZnJvbS5mcm9udENhcmQuaXNGYWNlVXApIHtcbiAgICAgIHRoaXMuX2ZhY2VVcENhcmQoe2NhcmQ6IGZyb20uZnJvbnRDYXJkfSk7XG4gICAgICB0aGlzLl9hY3Rpb25IaXN0b3J5LmFkZCh7Y2FyZDogZnJvbS5mcm9udENhcmQsIHR5cGU6IEZBQ0VfVVBfQ0FSRH0pO1xuICAgIH1cblxuICAgIGNvbnN0IGRpc2NhcmRlZFBpbGUgPSB0aGlzLl9kaXNjYXJkUGlsZXMuZmluZChwID0+IHAuY2FyZHMubGVuZ3RoID09PSAwKTtcblxuICAgIGlmICghZGlzY2FyZGVkUGlsZSlcbiAgICB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlcmUgYXJlbid0IGFueSBlbXB0eSBkaXNjYXJkZWQgcGlsZXMuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRvLmNoZWNrSWZGcm9udENhcmRzQ29tcGxldGUoKSlcbiAgICB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEzOyBpKyspXG4gICAgICB7XG4gICAgICAgIHRoaXMuX21vdmVDYXJkQmV0d2VlblBpbGVzKHtcbiAgICAgICAgICBmcm9tOiB0byxcbiAgICAgICAgICB0bzogZGlzY2FyZGVkUGlsZSxcbiAgICAgICAgICBzaXplOiAxXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLl9hY3Rpb25IaXN0b3J5LmFkZCh7XG4gICAgICAgICAgZnJvbTogdG8sXG4gICAgICAgICAgdG86IGRpc2NhcmRlZFBpbGUsXG4gICAgICAgICAgc2l6ZTogMSxcbiAgICAgICAgICB0eXBlOiBNT1ZFX0NBUkRcbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIGlmICh0by5mcm9udENhcmQgJiYgIXRvLmZyb250Q2FyZC5pc0ZhY2VVcCkge1xuICAgICAgICB0aGlzLl9mYWNlVXBDYXJkKHtjYXJkOiB0by5mcm9udENhcmR9KTtcbiAgICAgICAgdGhpcy5fYWN0aW9uSGlzdG9yeS5hZGQoe2NhcmQ6IHRvLmZyb250Q2FyZCwgdHlwZTogRkFDRV9VUF9DQVJEfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aW9uSGlzdG9yeS5hZGQoe3R5cGU6IFBBVVNFfSk7XG4gIH1cblxuICBnZXQgZnJvbnREcmF3UGlsZSAoKVxuICB7XG4gICAgbGV0IGRyYXdQaWxlOlBpbGUgfCB1bmRlZmluZWQ7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IHRoaXMuX2RyYXdQaWxlcy5sZW5ndGggLSAxOyBpbmRleCA+PSAwOyBpbmRleC0tKVxuICAgIHtcbiAgICAgIGlmICh0aGlzLl9kcmF3UGlsZXNbaW5kZXhdLmNhcmRzLmxlbmd0aCA9PT0gdGhpcy5fc2V0dGluZ3MubnVtYmVyT2ZUYWJsZWF1UGlsZXMpXG4gICAgICB7XG4gICAgICAgIGRyYXdQaWxlID0gdGhpcy5fZHJhd1BpbGVzW2luZGV4XTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGRyYXdQaWxlO1xuICB9XG5cbiAgZGVhbENhcmRzRnJvbURyYXdQaWxlICgpXG4gIHtcbiAgICBjb25zdCBkcmF3UGlsZSA9IHRoaXMuZnJvbnREcmF3UGlsZTtcblxuICAgIGlmICghZHJhd1BpbGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlcmUgYXJlIG5vIGNhcmRzIHRvIGRyYXcgZnJvbSBkcmF3IHBpbGVzLicpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLl90YWJsZWF1UGlsZXMubGVuZ3RoOyBpbmRleCsrKVxuICAgIHtcbiAgICAgIGNvbnN0IHRhYmxlYXVQaWxlID0gdGhpcy5fdGFibGVhdVBpbGVzW2luZGV4XTtcbiAgICAgIHRoaXMuX21vdmVDYXJkQmV0d2VlblBpbGVzKHtcbiAgICAgICAgZnJvbTogZHJhd1BpbGUsXG4gICAgICAgIHRvOiB0YWJsZWF1UGlsZSxcbiAgICAgICAgc2l6ZTogMVxuICAgICAgfSk7XG4gICAgICB0aGlzLl9hY3Rpb25IaXN0b3J5LmFkZCh7XG4gICAgICAgIGZyb206IGRyYXdQaWxlLFxuICAgICAgICB0bzogdGFibGVhdVBpbGUsXG4gICAgICAgIHNpemU6IDEsXG4gICAgICAgIHR5cGU6IE1PVkVfQ0FSRFxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgZm9yIChsZXQgdGFibGVhdVBpbGUgb2YgdGhpcy5fdGFibGVhdVBpbGVzKVxuICAgIHtcbiAgICAgIGlmICh0YWJsZWF1UGlsZS5mcm9udENhcmQgJiYgIXRhYmxlYXVQaWxlLmZyb250Q2FyZC5pc0ZhY2VVcCkge1xuICAgICAgICB0aGlzLl9mYWNlVXBDYXJkKHtjYXJkOnRhYmxlYXVQaWxlLmZyb250Q2FyZH0pO1xuICAgICAgICB0aGlzLl9hY3Rpb25IaXN0b3J5LmFkZCh7XG4gICAgICAgICAgY2FyZDogdGFibGVhdVBpbGUuZnJvbnRDYXJkLFxuICAgICAgICAgIHR5cGU6IEZBQ0VfVVBfQ0FSRFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB0aGlzLl9hY3Rpb25IaXN0b3J5LmFkZCh7dHlwZTogUEFVU0V9KTtcbiAgfVxuXG4gIHVuZG8gKClcbiAge1xuICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuX2FjdGlvbkhpc3RvcnkuYWN0aW9ucy5tYXAoKGEsIGluZGV4LCBfKSA9PiB7XG4gICAgLy8gICByZXR1cm4gKGEudHlwZSk7XG4gICAgLy8gfSkpO1xuXG4gICAgbG9vcERlbGV0ZVBhdXNlczogZm9yICg7OylcbiAgICB7XG4gICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLl9hY3Rpb25IaXN0b3J5LmxhdGVzdDtcblxuICAgICAgaWYgKCFhY3Rpb24pIGJyZWFrIGxvb3BEZWxldGVQYXVzZXM7XG5cbiAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpXG4gICAgICB7XG4gICAgICAgIGNhc2UgUEFVU0U6XG4gICAgICAgICAgdGhpcy5fYWN0aW9uSGlzdG9yeS5yZW1vdmUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhayBsb29wRGVsZXRlUGF1c2VzO1xuICAgICAgfTtcbiAgICB9O1xuXG4gICAgbG9vcEV4ZWN1dGVVbmRvQWN0aW9uczogZm9yICg7OylcbiAgICB7XG4gICAgICBjb25zdCBhY3Rpb24gPSB0aGlzLl9hY3Rpb25IaXN0b3J5LmxhdGVzdDtcblxuICAgICAgaWYgKCFhY3Rpb24pIGJyZWFrIGxvb3BFeGVjdXRlVW5kb0FjdGlvbnM7XG5cbiAgICAgIHN3aXRjaCAoYWN0aW9uLnR5cGUpXG4gICAgICB7XG4gICAgICAgIGNhc2UgRkFDRV9VUF9DQVJEOlxuICAgICAgICAgIGFjdGlvbi5jYXJkLmZhY2VEb3duKCk7XG4gICAgICAgICAgdGhpcy5fYWN0aW9uSGlzdG9yeS5yZW1vdmUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBNT1ZFX0NBUkQ6XG4gICAgICAgICAgdGhpcy5fbW92ZUNhcmRCZXR3ZWVuUGlsZXMoe1xuICAgICAgICAgICAgZnJvbTogYWN0aW9uLnRvLFxuICAgICAgICAgICAgdG86IGFjdGlvbi5mcm9tLFxuICAgICAgICAgICAgc2l6ZTogYWN0aW9uLnNpemVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICB0aGlzLl9hY3Rpb25IaXN0b3J5LnJlbW92ZSgpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFBBVVNFOlxuICAgICAgICAgIHRoaXMuX2FjdGlvbkhpc3RvcnkucmVtb3ZlKCk7XG4gICAgICAgICAgYnJlYWsgbG9vcEV4ZWN1dGVVbmRvQWN0aW9ucztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICBicmVhaztcbiAgICAgIH07XG4gICAgfVxuICB9XG5cbiAgdG9TdHJpbmcoKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuX3BpbGVzLm1hcChwID0+IHAubGFiZWwgKyBcIiBcIiArIHAudG9TdHJpbmcoKSkuam9pbignXFxuJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7Q2FyZH0gZnJvbSAnLi9jYXJkJztcbmltcG9ydCB7UGlsZX0gZnJvbSAnLi9waWxlJztcblxuZXhwb3J0IGNvbnN0IEZBQ0VfVVBfQ0FSRCA9ICdGQUNFX1VQX0NBUkQnO1xuZXhwb3J0IGNvbnN0IE1PVkVfQ0FSRCA9ICdNT1ZFX0NBUkQnO1xuZXhwb3J0IGNvbnN0IFBBVVNFID0gJ1BBVVNFJztcblxuaW50ZXJmYWNlIEZhY2VVcEFjdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBGQUNFX1VQX0NBUkQsXG4gIGNhcmQ6IENhcmRcbn1cblxuaW50ZXJmYWNlIE1vdmVDYXJkQWN0aW9uIHtcbiAgdHlwZTogdHlwZW9mIE1PVkVfQ0FSRCxcbiAgZnJvbTpQaWxlLFxuICB0bzpQaWxlLFxuICBzaXplOm51bWJlclxufVxuXG5pbnRlcmZhY2UgUGF1c2VBY3Rpb24ge1xuICB0eXBlOiB0eXBlb2YgUEFVU0Vcbn1cblxuZXhwb3J0IHR5cGUgVW5kb2FibGVBY3Rpb24gPSBGYWNlVXBBY3Rpb24gfCBNb3ZlQ2FyZEFjdGlvbiB8IFBhdXNlQWN0aW9uO1xuXG5leHBvcnQgY2xhc3MgVW5kb2FibGVBY3Rpb25IaXN0b3J5XG57XG4gIHByaXZhdGUgX2FjdGlvbnM6VW5kb2FibGVBY3Rpb25bXSA9IFtdO1xuXG4gIGFkZCAoYWN0aW9uOlVuZG9hYmxlQWN0aW9uKVxuICB7XG4gICAgdGhpcy5fYWN0aW9ucyA9IFsuLi50aGlzLl9hY3Rpb25zLCBhY3Rpb25dO1xuICB9XG5cbiAgcmVtb3ZlICgpXG4gIHtcbiAgICB0aGlzLl9hY3Rpb25zID0gdGhpcy5fYWN0aW9ucy5zbGljZSgwLCAtMSk7XG4gIH1cblxuICBnZXQgbGF0ZXN0ICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5fYWN0aW9ucy5sZW5ndGggPT09IDAgPyB1bmRlZmluZWQgOiB0aGlzLl9hY3Rpb25zW3RoaXMuX2FjdGlvbnMubGVuZ3RoIC0gMV07XG4gIH1cblxuICBnZXQgYWN0aW9ucyAoKVxuICB7XG4gICAgcmV0dXJuIFsuLi50aGlzLl9hY3Rpb25zXTtcbiAgfVxufVxuIiwiY2xhc3MgRGVmZXJyZWQ8VD4gIHtcblxuICBfY3JlYXRlUHJvbWlzZTogKCkgPT4gUHJvbWlzZTxUPjtcbiAgX3Byb21pc2U6IFByb21pc2U8VD4gfCB1bmRlZmluZWQ7XG4gIF9jYWxsYmFjazogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xuICBfaXNEb25lOiBib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IgKHtcbiAgICBjcmVhdGVQcm9taXNlXG4gIH06e1xuICAgIGNyZWF0ZVByb21pc2U6ICgpID0+IFByb21pc2U8VD5cbiAgfSlcbiAge1xuICAgIHRoaXMuX2NyZWF0ZVByb21pc2UgPSBjcmVhdGVQcm9taXNlO1xuICB9XG5cbiAgcHJvY2VzcyAoKVxuICB7XG4gICAgaWYgKCF0aGlzLl9wcm9taXNlKVxuICAgIHtcbiAgICAgIHRoaXMuX3Byb21pc2UgPSB0aGlzLl9jcmVhdGVQcm9taXNlKCk7XG4gICAgICB0aGlzLl9wcm9taXNlLmNhdGNoKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihcIlByb21pc2UgcmVqZWN0ZWQhXCIpO1xuICAgICAgfSkudGhlbigoKSA9PiB7XG4gICAgICAgIHRoaXMuX2NhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMuX2lzRG9uZSA9IHRydWU7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBmaW5hbGx5IChjYWxsYmFjazogKCkgPT4gdm9pZClcbiAge1xuICAgIHRoaXMuX2NhbGxiYWNrID0gY2FsbGJhY2s7XG4gIH1cblxuICBnZXQgaXNEb25lICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5faXNEb25lO1xuICB9XG59XG5cblxuZXhwb3J0IGNsYXNzIFByb21pc2VRdWV1ZTxUPlxue1xuICBwcml2YXRlIF9sYXRlc3REZWZlcnJlZDpEZWZlcnJlZDxUPiB8IHVuZGVmaW5lZDtcblxuICBnZXQgaXNQcm9jZXNzaW5nICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2xhdGVzdERlZmVycmVkICYmICF0aGlzLl9sYXRlc3REZWZlcnJlZC5pc0RvbmUpIGFzIGJvb2xlYW47XG4gIH1cblxuICBhZGQgKGNyZWF0ZVByb21pc2U6ICgpID0+IFByb21pc2U8VD4pXG4gIHtcbiAgICBpZiAoIXRoaXMuX2xhdGVzdERlZmVycmVkIHx8IHRoaXMuX2xhdGVzdERlZmVycmVkLmlzRG9uZSlcbiAgICB7XG4gICAgICB0aGlzLl9sYXRlc3REZWZlcnJlZCA9IG5ldyBEZWZlcnJlZCh7Y3JlYXRlUHJvbWlzZX0pO1xuICAgICAgdGhpcy5fbGF0ZXN0RGVmZXJyZWQucHJvY2VzcygpO1xuICAgIH1cbiAgICBlbHNlXG4gICAge1xuICAgICAgY29uc3QgZGVmZXJyZWQgPSBuZXcgRGVmZXJyZWQoe2NyZWF0ZVByb21pc2V9KTtcbiAgICAgIHRoaXMuX2xhdGVzdERlZmVycmVkLmZpbmFsbHkoKCkgPT4ge1xuICAgICAgICBkZWZlcnJlZC5wcm9jZXNzKCk7XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX2xhdGVzdERlZmVycmVkID0gZGVmZXJyZWQ7XG4gICAgfVxuICB9XG59XG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gXCJwaGFzZXJcIjtcbmltcG9ydCB7VGFibGVHYW1lT2JqZWN0V2l0aEV2ZW50IGFzIFRhYmxlR2FtZU9iamVjdH0gZnJvbSAnLi4vZ2FtZS1vYmplY3RzLXdpdGgtZXZlbnRzL3RhYmxlJztcbi8vIGltcG9ydCB7UGlsZUdhbWVPYmplY3RXaXRoRXZlbnQgYXMgUGlsZUdhbWVPYmplY3R9IGZyb20gJy4uL2dhbWUtb2JqZWN0cy13aXRoLWV2ZW50cy9waWxlJztcbmltcG9ydCB7Q2FyZEdhbWVPYmplY3RXaXRoRXZlbnQgYXMgQ2FyZEdhbWVPYmplY3R9IGZyb20gJy4uL2dhbWUtb2JqZWN0cy13aXRoLWV2ZW50cy9jYXJkJztcbmltcG9ydCB7ZW1pdHRlciBhcyBnYW1lT2JqZWN0RXZlbnRFbWl0dGVyfSBmcm9tICcuLi9nYW1lLW9iamVjdHMtd2l0aC1ldmVudHMvZW1pdHRlcic7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnLi4vZ2FtZS1vYmplY3RzL2J1dHRvbic7XG5pbXBvcnQge0NhcmRXaXRoRXZlbnQgYXMgQ2FyZH0gZnJvbSAnLi4vbW9kZWxzLXdpdGgtZXZlbnRzL2NhcmQnO1xuaW1wb3J0IHtQaWxlV2l0aEV2ZW50IGFzIFBpbGV9IGZyb20gJy4uL21vZGVscy13aXRoLWV2ZW50cy9waWxlJztcbmltcG9ydCB7VGFibGVXaXRoRXZlbnQgYXMgVGFibGV9IGZyb20gJy4uL21vZGVscy13aXRoLWV2ZW50cy90YWJsZSc7XG5pbXBvcnQge2NyZWF0ZUNhcmRzV2l0aEV2ZW50cyBhcyBjcmVhdGVDYXJkc30gZnJvbSAnLi4vbW9kZWxzLXdpdGgtZXZlbnRzL2NyZWF0ZS1jYXJkcyc7XG5pbXBvcnQge3JhbmRvbWl6ZUFycmF5fSBmcm9tICcuLi9tb2RlbHMvY3JlYXRlLWNhcmRzJztcbmltcG9ydCB7ZW1pdHRlciBhcyBtb2RlbEV2ZW50RW1pdHRlcn0gZnJvbSAnLi4vbW9kZWxzLXdpdGgtZXZlbnRzL2VtaXR0ZXInO1xuaW1wb3J0IHtQcm9taXNlUXVldWV9IGZyb20gJy4uL3Byb21pc2UtcXVldWUnO1xuaW1wb3J0IHtkZWJvdW5jZX0gZnJvbSAndW5kZXJzY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5TY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZVxue1xuICBwcml2YXRlIF9fdGFibGU6VGFibGUgfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX190YWJsZUdhbWVPYmplY3Q6VGFibGVHYW1lT2JqZWN0IHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIF9jYXJkQW5pbWF0aW9uQmV0d2VlblBpbGVzUXVldWU6UHJvbWlzZVF1ZXVlPHZvaWQ+ID0gbmV3IFByb21pc2VRdWV1ZTx2b2lkPigpO1xuICBwcml2YXRlIF9kcmFnUGlsZUFuaW1hdGlvblF1ZXVlOlByb21pc2VRdWV1ZTx2b2lkPiA9IG5ldyBQcm9taXNlUXVldWU8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoJ21haW4nKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF90YWJsZSAoKSB7XG4gICAgaWYgKCF0aGlzLl9fdGFibGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGFibGUgaXMgbm90IHJlYWR5LicpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fX3RhYmxlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3RhYmxlR2FtZU9iamVjdCAoKSB7XG4gICAgaWYgKCF0aGlzLl9fdGFibGVHYW1lT2JqZWN0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RhYmxlIEdhbWUgT2JqZWN0IGlzIG5vdCByZWFkeS4nKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX190YWJsZUdhbWVPYmplY3Q7XG4gIH1cblxuICBhc3luYyBjcmVhdGUgKClcbiAge1xuICAgIHRoaXMuX190YWJsZSA9IG5ldyBUYWJsZSh7XG4gICAgICBudW1iZXJPZlRhYmxlYXVQaWxlczogNixcbiAgICAgIG51bWJlck9mRHJhd1BpbGVzOiAzLFxuICAgICAgY2FyZHM6IGNyZWF0ZUNhcmRzKHtcbiAgICAgICAgbnVtYmVyT2ZEZWNrc1VzZWQ6IDIsXG4gICAgICAgIG51bWJlck9mU3VpdHM6IDFcbiAgICAgIH0pXG4gICAgfSk7XG5cbiAgICB0aGlzLl9fdGFibGVHYW1lT2JqZWN0ID0gbmV3IFRhYmxlR2FtZU9iamVjdCh7XG4gICAgICBzY2VuZTogdGhpcyxcbiAgICAgIGRlY2tQaWxlSWQ6IHRoaXMuX3RhYmxlLmRlY2tQaWxlLmlkLFxuICAgICAgZHJhd1BpbGVzSWRzOiB0aGlzLl90YWJsZS5kcmF3UGlsZXMubWFwKHAgPT4gcC5pZCksXG4gICAgICB0YWJsZWF1UGlsZXNJZHM6IHRoaXMuX3RhYmxlLnRhYmxlYXVQaWxlcy5tYXAocCA9PiBwLmlkKSxcbiAgICAgIGRpc2NhcmRQaWxlc0lkczogdGhpcy5fdGFibGUuZGlzY2FyZFBpbGVzLm1hcChwID0+IHAuaWQpLFxuICAgICAgZHJhZ1BpbGVJZDogXCJkcmFnLXBpbGVcIixcbiAgICAgIGNhcmRHYW1lT2JqZWN0czogdGhpcy5fdGFibGUuY2FyZHMubWFwKGNhcmQgPT4gbmV3IENhcmRHYW1lT2JqZWN0KHtcbiAgICAgICAgc2NlbmU6IHRoaXMsXG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHN1aXQ6IGNhcmQuc3VpdCxcbiAgICAgICAgcmFuazogY2FyZC5yYW5rLFxuICAgICAgICBuYW1lOiBjYXJkLmlkXG4gICAgICB9KSlcbiAgICB9KTtcblxuICAgIHRoaXMuY2hpbGRyZW4uYWRkKHRoaXMuX3RhYmxlR2FtZU9iamVjdCk7XG5cbiAgICBjb25zdCB1bmRvQnV0dG9uID0gbmV3IEJ1dHRvbih7XG4gICAgICBzY2VuZTogdGhpcyxcbiAgICAgIHg6IDEwMCxcbiAgICAgIHk6IDYwMCxcbiAgICAgIGxhYmVsOiAnVU5ETydcbiAgICB9KTtcbiAgICB1bmRvQnV0dG9uLm9uKCdwb2ludGVyZG93bicsIGRlYm91bmNlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jYXJkQW5pbWF0aW9uQmV0d2VlblBpbGVzUXVldWUuaXNQcm9jZXNzaW5nKSByZXR1cm47XG4gICAgICB0aGlzLl90YWJsZS51bmRvKCk7XG4gICAgfSwgMTAwLCB0cnVlKSk7XG4gICAgdGhpcy5jaGlsZHJlbi5hZGQodW5kb0J1dHRvbik7XG5cbiAgICBjb25zdCBoaW50QnV0dG9uID0gbmV3IEJ1dHRvbih7XG4gICAgICBzY2VuZTogdGhpcyxcbiAgICAgIHg6IDI1MCxcbiAgICAgIHk6IDYwMCxcbiAgICAgIGxhYmVsOiAnSElOVCdcbiAgICB9KTtcbiAgICBoaW50QnV0dG9uLm9uKCdwb2ludGVyZG93bicsIGRlYm91bmNlKCgpID0+IHtcbiAgICAgIGlmICh0aGlzLl9jYXJkQW5pbWF0aW9uQmV0d2VlblBpbGVzUXVldWUuaXNQcm9jZXNzaW5nKSByZXR1cm47XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLl90YWJsZS5nZXRQb3NzaWJsZU1vdmVzQmV0d2VlblRhYmxlYXVQaWxlcygpKTtcbiAgICB9LCAxMDAsIHRydWUpKTtcbiAgICB0aGlzLmNoaWxkcmVuLmFkZChoaW50QnV0dG9uKTtcblxuICAgIGdhbWVPYmplY3RFdmVudEVtaXR0ZXIub24oXCJDQVJEX1BPSU5URVJPVkVSXCIsIHRoaXMub25DYXJkUG9pbnRlck92ZXIuYmluZCh0aGlzKSk7XG4gICAgZ2FtZU9iamVjdEV2ZW50RW1pdHRlci5vbihcIkNBUkRfUE9JTlRFUk9VVFwiLCB0aGlzLm9uQ2FyZFBvaW50ZXJPdXQuYmluZCh0aGlzKSk7XG4gICAgZ2FtZU9iamVjdEV2ZW50RW1pdHRlci5vbihcIkNBUkRfUE9JTlRFUkRPV05cIiwgdGhpcy5vbkNhcmRQb2ludGVyRG93bi5iaW5kKHRoaXMpKTtcbiAgICBnYW1lT2JqZWN0RXZlbnRFbWl0dGVyLm9uKFwiQ0FSRF9EUkFHU1RBUlRcIiwgdGhpcy5vbkNhcmREcmFnU3RhcnQuYmluZCh0aGlzKSk7XG4gICAgZ2FtZU9iamVjdEV2ZW50RW1pdHRlci5vbihcIkNBUkRfRFJBR1wiLCB0aGlzLm9uQ2FyZERyYWcuYmluZCh0aGlzKSk7XG4gICAgZ2FtZU9iamVjdEV2ZW50RW1pdHRlci5vbihcIkNBUkRfRFJPUFwiLCB0aGlzLm9uQ2FyZERyb3AuYmluZCh0aGlzKSk7XG4gICAgZ2FtZU9iamVjdEV2ZW50RW1pdHRlci5vbihcIkNBUkRfRFJBR0VORFwiLCB0aGlzLm9uQ2FyZERyYWdFbmQuYmluZCh0aGlzKSk7XG4gICAgbW9kZWxFdmVudEVtaXR0ZXIub24oXCJNT1ZFX0NBUkRTX0JFVFdFRU5fUElMRVNcIiwgdGhpcy5vbk1vdmVDYXJkc0JldHdlZW5QaWxlcy5iaW5kKHRoaXMpKTtcbiAgICBtb2RlbEV2ZW50RW1pdHRlci5vbihcIkZMSVBfT1ZFUl9DQVJEXCIsIHRoaXMub25GbGlwT3ZlckNhcmQuYmluZCh0aGlzKSk7XG5cbiAgICB0aGlzLl90YWJsZS5zdGFydEdhbWUoKTtcbiAgfVxuXG4gIG9uQ2FyZFBvaW50ZXJPdmVyICh7Y2FyZEdhbWVPYmplY3R9OntjYXJkR2FtZU9iamVjdDpDYXJkR2FtZU9iamVjdH0pXG4gIHtcbiAgICBpZiAoIXRoaXMuX2NhcmRBbmltYXRpb25CZXR3ZWVuUGlsZXNRdWV1ZS5pc1Byb2Nlc3NpbmcpXG4gICAgICB0aGlzLmFkZEhpZ2hsaWdodFRvQ2FyZEdhbWVPYmplY3Qoe2NhcmRHYW1lT2JqZWN0fSk7XG4gICAgZWxzZVxuICAgICAgdGhpcy5fY2FyZEFuaW1hdGlvbkJldHdlZW5QaWxlc1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XG4gICAgICAgIHRoaXMuYWRkSGlnaGxpZ2h0VG9DYXJkR2FtZU9iamVjdCh7Y2FyZEdhbWVPYmplY3R9KTtcbiAgICAgIH0pO1xuXG4gICAgLy8gY29uc3QgdGFyZ2V0UGlsZSA9IHRoaXMuX3RhYmxlLmdldFBpbGVCeShwaWxlID0+IHBpbGUuY2FyZHMuZmluZChjYXJkID0+IGNhcmQuaWQgPT09IGNhcmRHYW1lT2JqZWN0Lm5hbWUpKTtcbiAgICAvL1xuICAgIC8vIGlmIChjYXJkR2FtZU9iamVjdC5pc0ZhY2VVcFxuICAgIC8vICAgJiYgdGhpcy5fdGFibGUudGFibGVhdVBpbGVzLmluY2x1ZGVzKHRhcmdldFBpbGUpKVxuICAgIC8vIHtcbiAgICAvLyAgIGNvbnN0IGZyb21QaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5nZXRQaWxlR2FtZU9iamVjdEJ5KHAgPT4gcC5uYW1lID09PSB0YXJnZXRQaWxlLmlkKTtcbiAgICAvLyAgIGNvbnN0IHNpemUgPSBmcm9tUGlsZUdhbWVPYmplY3QuY2FyZEdhbWVPYmplY3RzLmxlbmd0aCAtIGZyb21QaWxlR2FtZU9iamVjdC5jYXJkR2FtZU9iamVjdHMuaW5kZXhPZihjYXJkR2FtZU9iamVjdCk7XG4gICAgLy9cbiAgICAvLyAgIGlmIChQaWxlLmNoZWNrSWZDYXJkc0FyZURlc2NlbmRpbmcoe2NhcmRzOiB0YXJnZXRQaWxlLmNhcmRzLnNsaWNlKC1zaXplKSwgZmFjZVVwOiB0cnVlLCBpblN1aXQ6IHRydWV9KSlcbiAgICAvLyAgIHtcbiAgICAvLyAgICAgaWYgKCF0aGlzLl9jYXJkQW5pbWF0aW9uQmV0d2VlblBpbGVzUXVldWUuaXNQcm9jZXNzaW5nKVxuICAgIC8vICAgICAgIGNhcmRHYW1lT2JqZWN0LmFkZEhpZ2hsaWdodCgpO1xuICAgIC8vICAgICBlbHNlXG4gICAgLy8gICAgICAgdGhpcy5fY2FyZEFuaW1hdGlvbkJldHdlZW5QaWxlc1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XG4gICAgLy8gICAgICAgICBjYXJkR2FtZU9iamVjdC5hZGRIaWdobGlnaHQoKTtcbiAgICAvLyAgICAgICB9KTtcbiAgICAvLyAgIH1cbiAgICAvLyB9XG4gICAgLy8gZWxzZSBpZiAodGhpcy5fdGFibGUuZnJvbnREcmF3UGlsZSA9PT0gdGFyZ2V0UGlsZSlcbiAgICAvLyB7XG4gICAgLy8gICBpZiAoIXRoaXMuX2NhcmRBbmltYXRpb25CZXR3ZWVuUGlsZXNRdWV1ZS5pc1Byb2Nlc3NpbmcpXG4gICAgLy8gICAgIGNhcmRHYW1lT2JqZWN0LmFkZEhpZ2hsaWdodCgpO1xuICAgIC8vICAgZWxzZVxuICAgIC8vICAgICB0aGlzLl9jYXJkQW5pbWF0aW9uQmV0d2VlblBpbGVzUXVldWUuYWRkKGFzeW5jICgpID0+IHtcbiAgICAvLyAgICAgICBjYXJkR2FtZU9iamVjdC5hZGRIaWdobGlnaHQoKTtcbiAgICAvLyAgICAgfSk7XG4gICAgLy8gfVxuICB9XG5cbiAgYWRkSGlnaGxpZ2h0VG9DYXJkR2FtZU9iamVjdCAoe2NhcmRHYW1lT2JqZWN0fTp7Y2FyZEdhbWVPYmplY3Q6Q2FyZEdhbWVPYmplY3R9KVxuICB7XG4gICAgY29uc3QgdGFyZ2V0UGlsZSA9IHRoaXMuX3RhYmxlLmdldFBpbGVCeShwaWxlID0+IHBpbGUuY2FyZHMuZmluZChjYXJkID0+IGNhcmQuaWQgPT09IGNhcmRHYW1lT2JqZWN0Lm5hbWUpKTtcblxuICAgIGlmIChjYXJkR2FtZU9iamVjdC5pc0ZhY2VVcFxuICAgICAgJiYgdGhpcy5fdGFibGUudGFibGVhdVBpbGVzLmluY2x1ZGVzKHRhcmdldFBpbGUpKVxuICAgIHtcbiAgICAgIGNvbnN0IGZyb21QaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5nZXRQaWxlR2FtZU9iamVjdEJ5KHAgPT4gcC5uYW1lID09PSB0YXJnZXRQaWxlLmlkKTtcbiAgICAgIGNvbnN0IHNpemUgPSBmcm9tUGlsZUdhbWVPYmplY3QuY2FyZEdhbWVPYmplY3RzLmxlbmd0aCAtIGZyb21QaWxlR2FtZU9iamVjdC5jYXJkR2FtZU9iamVjdHMuaW5kZXhPZihjYXJkR2FtZU9iamVjdCk7XG5cbiAgICAgIGlmIChQaWxlLmNoZWNrSWZDYXJkc0FyZURlc2NlbmRpbmcoe2NhcmRzOiB0YXJnZXRQaWxlLmNhcmRzLnNsaWNlKC1zaXplKSwgZmFjZVVwOiB0cnVlLCBpblN1aXQ6IHRydWV9KSlcbiAgICAgIHtcbiAgICAgICAgY2FyZEdhbWVPYmplY3QuYWRkSGlnaGxpZ2h0KCk7XG4gICAgICB9XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuX3RhYmxlLmZyb250RHJhd1BpbGUgPT09IHRhcmdldFBpbGUpXG4gICAge1xuICAgICAgY2FyZEdhbWVPYmplY3QuYWRkSGlnaGxpZ2h0KCk7XG4gICAgfVxuICB9XG5cbiAgb25DYXJkUG9pbnRlck91dCAoe2NhcmRHYW1lT2JqZWN0fTp7Y2FyZEdhbWVPYmplY3Q6Q2FyZEdhbWVPYmplY3R9KVxuICB7XG4gICAgaWYgKCF0aGlzLl9jYXJkQW5pbWF0aW9uQmV0d2VlblBpbGVzUXVldWUuaXNQcm9jZXNzaW5nKVxuICAgICAgY2FyZEdhbWVPYmplY3QucmVtb3ZlSGlnaGxpZ2h0KCk7XG4gICAgZWxzZVxuICAgICAgdGhpcy5fY2FyZEFuaW1hdGlvbkJldHdlZW5QaWxlc1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XG4gICAgICAgIGNhcmRHYW1lT2JqZWN0LnJlbW92ZUhpZ2hsaWdodCgpO1xuICAgICAgfSk7XG4gICAgLy8gaWYgKGNhcmRHYW1lT2JqZWN0LmlzSGlnaExpZ2h0ZWQpIGNhcmRHYW1lT2JqZWN0LnJlbW92ZUhpZ2hsaWdodCgpO1xuICB9XG5cbiAgb25DYXJkUG9pbnRlckRvd24gKHtjYXJkR2FtZU9iamVjdH06e2NhcmRHYW1lT2JqZWN0OkNhcmRHYW1lT2JqZWN0fSlcbiAge1xuICAgIGlmICghY2FyZEdhbWVPYmplY3QuaXNIaWdoTGlnaHRlZCkgcmV0dXJuO1xuXG4gICAgY29uc3QgdGFyZ2V0UGlsZSA9IHRoaXMuX3RhYmxlLmdldFBpbGVCeShwaWxlID0+IHBpbGUuY2FyZHMuZmluZChjYXJkID0+IGNhcmQuaWQgPT09IGNhcmRHYW1lT2JqZWN0Lm5hbWUpKTtcblxuICAgIGlmICh0aGlzLl90YWJsZS5mcm9udERyYXdQaWxlID09PSB0YXJnZXRQaWxlKVxuICAgIHtcbiAgICAgIGNhcmRHYW1lT2JqZWN0LnJlbW92ZUhpZ2hsaWdodCgpO1xuICAgICAgdGhpcy5fdGFibGUuZGVhbENhcmRzRnJvbURyYXdQaWxlKCk7XG4gICAgfVxuICB9XG5cbiAgb25DYXJkRHJhZ1N0YXJ0ICh7Y2FyZEdhbWVPYmplY3R9OntjYXJkR2FtZU9iamVjdDpDYXJkR2FtZU9iamVjdH0pXG4gIHtcbiAgICBpZiAoIWNhcmRHYW1lT2JqZWN0LmlzSGlnaExpZ2h0ZWQpIHJldHVybjtcblxuICAgIGNvbnN0IHRhcmdldFBpbGUgPSB0aGlzLl90YWJsZS5nZXRQaWxlQnkocGlsZSA9PiBwaWxlLmNhcmRzLmZpbmQoY2FyZCA9PiBjYXJkLmlkID09PSBjYXJkR2FtZU9iamVjdC5uYW1lKSk7XG5cbiAgICBpZiAoY2FyZEdhbWVPYmplY3QuaXNGYWNlVXAgJiYgdGhpcy5fdGFibGUudGFibGVhdVBpbGVzLmluY2x1ZGVzKHRhcmdldFBpbGUpKVxuICAgIHtcbiAgICAgIGNvbnN0IGZyb21QaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5nZXRQaWxlR2FtZU9iamVjdEJ5KHAgPT4gcC5uYW1lID09PSB0YXJnZXRQaWxlLmlkKTtcbiAgICAgIGNvbnN0IHNpemUgPSBmcm9tUGlsZUdhbWVPYmplY3QuY2FyZEdhbWVPYmplY3RzLmxlbmd0aCAtIGZyb21QaWxlR2FtZU9iamVjdC5jYXJkR2FtZU9iamVjdHMuaW5kZXhPZihjYXJkR2FtZU9iamVjdCk7XG5cbiAgICAgIGlmIChQaWxlLmNoZWNrSWZDYXJkc0FyZURlc2NlbmRpbmcoe2NhcmRzOiB0YXJnZXRQaWxlLmNhcmRzLnNsaWNlKC1zaXplKSwgZmFjZVVwOiB0cnVlLCBpblN1aXQ6IHRydWV9KSlcbiAgICAgIHtcbiAgICAgICAgY29uc3QgZHJhZ1BpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmRyYWdQaWxlR2FtZU9iamVjdDtcbiAgICAgICAgY29uc3QgeSA9IGNhcmRHYW1lT2JqZWN0Lnk7XG4gICAgICAgIGRyYWdQaWxlR2FtZU9iamVjdC5zZXRBY3RpdmUodHJ1ZSk7XG4gICAgICAgIHRoaXMuX3RhYmxlR2FtZU9iamVjdC5icmluZ1RvVG9wKGRyYWdQaWxlR2FtZU9iamVjdCk7XG4gICAgICAgIGRyYWdQaWxlR2FtZU9iamVjdC54ID0gZnJvbVBpbGVHYW1lT2JqZWN0Lng7XG4gICAgICAgIGRyYWdQaWxlR2FtZU9iamVjdC55ID0gZnJvbVBpbGVHYW1lT2JqZWN0LnkgKyB5O1xuICAgICAgICBkcmFnUGlsZUdhbWVPYmplY3QucGxhY2VDYXJkR2FtZU9iamVjdHMoe2NhcmRHYW1lT2JqZWN0czogZnJvbVBpbGVHYW1lT2JqZWN0LmRyYXdGcm9udENhcmRHYW1lT2JqZWN0cyh7c2l6ZX0pfSk7XG4gICAgICAgIHRoaXMuX2RyYWdQaWxlQW5pbWF0aW9uUXVldWUuYWRkKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBkcmFnUGlsZUdhbWVPYmplY3QuYWRqdXN0Q2FyZEdhbWVPYmplY3RQb3NpdGlvbnNXaXRoQW5pbWF0aW9uKCksXG4gICAgICAgICAgICBkcmFnUGlsZUdhbWVPYmplY3QuZXhwYW5kV2l0aEFuaW1hdGlvbigpXG4gICAgICAgICAgXSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DYXJkRHJhZyAoe3BvaW50ZXIsIGNhcmRHYW1lT2JqZWN0fTp7cG9pbnRlcjpQaGFzZXIuSW5wdXQuUG9pbnRlciwgY2FyZEdhbWVPYmplY3Q6Q2FyZEdhbWVPYmplY3R9KVxuICB7XG4gICAgaWYgKCFjYXJkR2FtZU9iamVjdC5pc0hpZ2hMaWdodGVkKSByZXR1cm47XG5cbiAgICBjb25zdCB0YXJnZXRQaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5nZXRQaWxlR2FtZU9iamVjdEJ5KHBpbGUgPT4gcGlsZS5jYXJkR2FtZU9iamVjdHMuZmluZChjYXJkID0+IGNhcmQgPT09IGNhcmRHYW1lT2JqZWN0KSk7XG5cbiAgICBjb25zdCBkcmFnUGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZHJhZ1BpbGVHYW1lT2JqZWN0O1xuICAgIGlmICh0YXJnZXRQaWxlR2FtZU9iamVjdCA9PT0gZHJhZ1BpbGVHYW1lT2JqZWN0ICYmIGRyYWdQaWxlR2FtZU9iamVjdC5hY3RpdmUpXG4gICAge1xuICAgICAgY29uc3QgZGVsdGFYID0gcG9pbnRlci54IC0gcG9pbnRlci5wcmV2UG9zaXRpb24ueDtcbiAgICAgIGNvbnN0IGRlbHRhWSA9IHBvaW50ZXIueSAtIHBvaW50ZXIucHJldlBvc2l0aW9uLnk7XG4gICAgICBkcmFnUGlsZUdhbWVPYmplY3QueCArPSBkZWx0YVg7XG4gICAgICBkcmFnUGlsZUdhbWVPYmplY3QueSArPSBkZWx0YVk7XG4gICAgfVxuICB9XG5cbiAgb25DYXJkRHJvcCAoe3pvbmUsIGNhcmRHYW1lT2JqZWN0fTp7em9uZTpQaGFzZXIuR2FtZU9iamVjdHMuWm9uZSwgY2FyZEdhbWVPYmplY3Q6Q2FyZEdhbWVPYmplY3R9KVxuICB7XG4gICAgLy8gY29uc29sZS5sb2coJ29uQ2FyZERyb3AnKTtcblxuICAgIC8vIGlmICh0aGlzLl9jYXJkQW5pbWF0aW9uQmV0d2VlblBpbGVzUXVldWUuaXNQcm9jZXNzaW5nKSByZXR1cm47XG5cbiAgICBjb25zdCB0YXJnZXRQaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5nZXRQaWxlR2FtZU9iamVjdEJ5KHBpbGUgPT4gcGlsZS5jYXJkR2FtZU9iamVjdHMuZmluZChjYXJkID0+IGNhcmQgPT09IGNhcmRHYW1lT2JqZWN0KSk7XG5cbiAgICBjb25zdCBkcmFnUGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZHJhZ1BpbGVHYW1lT2JqZWN0O1xuICAgIGlmICh0YXJnZXRQaWxlR2FtZU9iamVjdCA9PT0gZHJhZ1BpbGVHYW1lT2JqZWN0ICYmIGRyYWdQaWxlR2FtZU9iamVjdC5hY3RpdmUpXG4gICAge1xuICAgICAgY29uc3QgZnJvbVBpbGUgPSB0aGlzLl90YWJsZS5nZXRQaWxlQnkocGlsZSA9PiBwaWxlLmNhcmRzLmZpbmQoY2FyZCA9PiBjYXJkLmlkID09PSBjYXJkR2FtZU9iamVjdC5uYW1lKSk7XG4gICAgICBjb25zdCBmcm9tUGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZ2V0UGlsZUdhbWVPYmplY3RCeShwID0+IHAubmFtZSA9PT0gZnJvbVBpbGUuaWQpO1xuICAgICAgY29uc3QgdG9QaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5nZXRQaWxlR2FtZU9iamVjdEJ5KHAgPT4gcC56b25lID09PSB6b25lKTtcbiAgICAgIGNvbnN0IHRvUGlsZSA9IHRoaXMuX3RhYmxlLmdldFBpbGVCeShwaWxlID0+IHRvUGlsZUdhbWVPYmplY3QubmFtZSA9PT0gcGlsZS5pZCk7XG4gICAgICBjb25zdCBzaXplID0gZHJhZ1BpbGVHYW1lT2JqZWN0LmNhcmRHYW1lT2JqZWN0cy5sZW5ndGg7XG4gICAgICBjb25zdCBjYXJkR2FtZU9iamVjdHMgPSBkcmFnUGlsZUdhbWVPYmplY3QuZHJhd0Zyb250Q2FyZEdhbWVPYmplY3RzKHtzaXplfSk7XG4gICAgICBmcm9tUGlsZUdhbWVPYmplY3QucGxhY2VDYXJkR2FtZU9iamVjdHMoe2NhcmRHYW1lT2JqZWN0c30pO1xuXG4gICAgICBjb25zdCBfY2FyZHMgPSBjYXJkR2FtZU9iamVjdHMubWFwKGNPYmogPT4ge1xuICAgICAgICBjb25zdCBjYXJkID0gdGhpcy5fdGFibGUuY2FyZHMuZmluZChjID0+IGNPYmoubmFtZSA9PT0gYy5pZCk7XG4gICAgICAgIGlmICghY2FyZCkgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBjb3JyZXNwb25kaW5nIGNhcmRzLlwiKTtcbiAgICAgICAgcmV0dXJuIGNhcmQ7XG4gICAgICB9KTtcblxuICAgICAgaWYgKCF0b1BpbGUuZnJvbnRDYXJkIHx8IFBpbGUuY2hlY2tJZkNhcmRzQXJlRGVzY2VuZGluZyh7Y2FyZHM6IFt0b1BpbGUuZnJvbnRDYXJkLCAuLi5fY2FyZHNdLCBmYWNlVXA6IHRydWV9KSlcbiAgICAgIHtcbiAgICAgICAgdGhpcy5fdGFibGUubW92ZUNhcmRCZXR3ZWVuVGFibGVhdVBpbGVzKHtcbiAgICAgICAgICB0bzogdG9QaWxlLFxuICAgICAgICAgIGZyb206IGZyb21QaWxlLFxuICAgICAgICAgIHNpemVcbiAgICAgICAgfSk7XG4gICAgICAgIGRyYWdQaWxlR2FtZU9iamVjdC5zZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZnJvbVBpbGVHYW1lT2JqZWN0LmFkanVzdENhcmRHYW1lT2JqZWN0UG9zaXRpb25zKCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DYXJkRHJhZ0VuZCAoe2NhcmRHYW1lT2JqZWN0fTp7Y2FyZEdhbWVPYmplY3Q6Q2FyZEdhbWVPYmplY3R9KVxuICB7XG4gICAgLy8gY29uc29sZS5sb2coJ29uQ2FyZERyYWdFbmQnKTtcblxuICAgIC8vIGlmICh0aGlzLl9jYXJkQW5pbWF0aW9uQmV0d2VlblBpbGVzUXVldWUuaXNQcm9jZXNzaW5nKSByZXR1cm47XG5cbiAgICBjb25zdCB0YXJnZXRQaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5nZXRQaWxlR2FtZU9iamVjdEJ5KHAgPT4ge1xuICAgICAgcmV0dXJuIHAuY2FyZEdhbWVPYmplY3RzLmZpbmQoYyA9PiBjID09PSBjYXJkR2FtZU9iamVjdCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBkcmFnUGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZHJhZ1BpbGVHYW1lT2JqZWN0O1xuICAgIGlmICh0YXJnZXRQaWxlR2FtZU9iamVjdCA9PT0gZHJhZ1BpbGVHYW1lT2JqZWN0ICYmIGRyYWdQaWxlR2FtZU9iamVjdC5hY3RpdmUpXG4gICAge1xuICAgICAgY29uc3Qgc2l6ZSA9IGRyYWdQaWxlR2FtZU9iamVjdC5jYXJkR2FtZU9iamVjdHMubGVuZ3RoO1xuICAgICAgY29uc3QgZnJvbVBpbGUgPSB0aGlzLl90YWJsZS5nZXRQaWxlQnkocGlsZSA9PiBwaWxlLmNhcmRzLmZpbmQoY2FyZCA9PiBjYXJkLmlkID09PSBjYXJkR2FtZU9iamVjdC5uYW1lKSk7XG4gICAgICBjb25zdCBmcm9tUGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZ2V0UGlsZUdhbWVPYmplY3RCeShwID0+IHAubmFtZSA9PT0gZnJvbVBpbGUuaWQpO1xuICAgICAgY29uc3QgY2FyZEdhbWVPYmplY3RzID0gZHJhZ1BpbGVHYW1lT2JqZWN0LmRyYXdGcm9udENhcmRHYW1lT2JqZWN0cyh7c2l6ZX0pO1xuICAgICAgZnJvbVBpbGVHYW1lT2JqZWN0LnBsYWNlQ2FyZEdhbWVPYmplY3RzKHtjYXJkR2FtZU9iamVjdHN9KTtcbiAgICAgIGZyb21QaWxlR2FtZU9iamVjdC5hZGp1c3RDYXJkR2FtZU9iamVjdFBvc2l0aW9ucygpO1xuICAgICAgZHJhZ1BpbGVHYW1lT2JqZWN0LnNldEFjdGl2ZShmYWxzZSk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3ZlQ2FyZHNCZXR3ZWVuUGlsZXMgKHtmcm9tLCB0bywgc2l6ZX06e2Zyb206UGlsZSwgdG86UGlsZSwgc2l6ZTpudW1iZXJ9KSB7XG4gICAgLy8gY29uc29sZS5sb2coJ29uTW92ZUNhcmRzQmV0d2VlblBpbGVzJyk7XG4gICAgY29uc3QgZnJvbVBpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnkocCA9PiBwLm5hbWUgPT09IGZyb20uaWQpO1xuICAgIGNvbnN0IHRvUGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZ2V0UGlsZUdhbWVPYmplY3RCeShwID0+IHAubmFtZSA9PT0gdG8uaWQpO1xuXG4gICAgdGhpcy5fY2FyZEFuaW1hdGlvbkJldHdlZW5QaWxlc1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBjYXJkR2FtZU9iamVjdHMgPSBmcm9tUGlsZUdhbWVPYmplY3QuZHJhd0Zyb250Q2FyZEdhbWVPYmplY3RzKHtzaXplfSk7XG4gICAgICBjYXJkR2FtZU9iamVjdHMuZm9yRWFjaChjID0+IGMucmVtb3ZlSGlnaGxpZ2h0KCkpO1xuICAgICAgdG9QaWxlR2FtZU9iamVjdC5wbGFjZUNhcmRHYW1lT2JqZWN0cyh7Y2FyZEdhbWVPYmplY3RzfSk7XG4gICAgICB0aGlzLl90YWJsZUdhbWVPYmplY3QuYnJpbmdUb1RvcCh0b1BpbGVHYW1lT2JqZWN0KTtcbiAgICAgIGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgdG9QaWxlR2FtZU9iamVjdC5hZGp1c3RDYXJkR2FtZU9iamVjdFBvc2l0aW9uc1dpdGhBbmltYXRpb24oKSxcbiAgICAgICAgZnJvbVBpbGVHYW1lT2JqZWN0LmFkanVzdENhcmRHYW1lT2JqZWN0UG9zaXRpb25zV2l0aEFuaW1hdGlvbigpXG4gICAgICBdKTtcbiAgICB9KTtcblxuICAgIGlmICh0aGlzLl90YWJsZS5pc0NsZWFyKSB7XG4gICAgICB0aGlzLl9jYXJkQW5pbWF0aW9uQmV0d2VlblBpbGVzUXVldWUuYWRkKGFzeW5jICgpID0+IHtcbiAgICAgICAgYWxlcnQoXCJZb3UgYmVhdCB0aGUgZ2FtZSEhIVwiKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfVxuXG4gIG9uRmxpcE92ZXJDYXJkICh7Y2FyZH06e2NhcmQ6Q2FyZH0pIHtcbiAgICBjb25zdCBjYXJkR2FybU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5jYXJkR2FtZU9iamVjdHMuZmluZChjYXJkQ2FybWVPYmplY3QgPT4gY2FyZENhcm1lT2JqZWN0Lm5hbWUgPT09IGNhcmQuaWQpO1xuICAgIGlmIChjYXJkR2FybU9iamVjdCkge1xuICAgICAgdGhpcy5fY2FyZEFuaW1hdGlvbkJldHdlZW5QaWxlc1F1ZXVlLmFkZCgoKSA9PiBjYXJkR2FybU9iamVjdC5mbGlwT3ZlcihjYXJkLmlzRmFjZVVwKSk7XG4gICAgfTtcbiAgfVxuXG59XG4iLCJ2YXIgbWFwID0ge1xuXHRcIi4vbG9nXCI6IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3QvbG9nLmpzXCJcbn07XG5cblxuZnVuY3Rpb24gd2VicGFja0NvbnRleHQocmVxKSB7XG5cdHZhciBpZCA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpO1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG59XG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dFJlc29sdmUocmVxKSB7XG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8obWFwLCByZXEpKSB7XG5cdFx0dmFyIGUgPSBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiICsgcmVxICsgXCInXCIpO1xuXHRcdGUuY29kZSA9ICdNT0RVTEVfTk9UX0ZPVU5EJztcblx0XHR0aHJvdyBlO1xuXHR9XG5cdHJldHVybiBtYXBbcmVxXTtcbn1cbndlYnBhY2tDb250ZXh0LmtleXMgPSBmdW5jdGlvbiB3ZWJwYWNrQ29udGV4dEtleXMoKSB7XG5cdHJldHVybiBPYmplY3Qua2V5cyhtYXApO1xufTtcbndlYnBhY2tDb250ZXh0LnJlc29sdmUgPSB3ZWJwYWNrQ29udGV4dFJlc29sdmU7XG5tb2R1bGUuZXhwb3J0cyA9IHdlYnBhY2tDb250ZXh0O1xud2VicGFja0NvbnRleHQuaWQgPSBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90IHN5bmMgXlxcXFwuXFxcXC9sb2ckXCI7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdGxvYWRlZDogZmFsc2UsXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuXHRtb2R1bGUubG9hZGVkID0gdHJ1ZTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmcgPSAoZnVuY3Rpb24oKSB7XG5cdGlmICh0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcpIHJldHVybiBnbG9iYWxUaGlzO1xuXHR0cnkge1xuXHRcdHJldHVybiB0aGlzIHx8IG5ldyBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0aWYgKHR5cGVvZiB3aW5kb3cgPT09ICdvYmplY3QnKSByZXR1cm4gd2luZG93O1xuXHR9XG59KSgpOyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5ubWQgPSAobW9kdWxlKSA9PiB7XG5cdG1vZHVsZS5wYXRocyA9IFtdO1xuXHRpZiAoIW1vZHVsZS5jaGlsZHJlbikgbW9kdWxlLmNoaWxkcmVuID0gW107XG5cdHJldHVybiBtb2R1bGU7XG59OyIsIi8vIG5vIGJhc2VVUklcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gUHJvbWlzZSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSB7XG5cdFwiYXBwXCI6IDBcbn07XG5cbnZhciBkZWZlcnJlZE1vZHVsZXMgPSBbXG5cdFtcIi4vc3JjL2luZGV4LnRzXCIsXCJ2ZW5kb3JzXCJdLFxuXHRbXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L2luZGV4LmpzP2h0dHA6Ly9sb2NhbGhvc3Q6ODA4MFwiLFwidmVuZG9yc1wiXVxuXTtcbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbnZhciBjaGVja0RlZmVycmVkTW9kdWxlcyA9ICgpID0+IHtcblxufTtcbmZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCgpIHtcblx0dmFyIHJlc3VsdDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcblx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuXHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG5cdFx0fVxuXHR9XG5cdGlmKGRlZmVycmVkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gcmVzZXQgc3RhcnR1cCBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgY2FsbGVkIGFnYWluIHdoZW4gbW9yZSBzdGFydHVwIGNvZGUgaXMgYWRkZWRcblx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXG5cdH1cblx0Y2h1bmtMb2FkaW5nR2xvYmFsID0gY2h1bmtMb2FkaW5nR2xvYmFsLnNsaWNlKCk7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0xvYWRpbmdHbG9iYWwubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGNodW5rTG9hZGluZ0dsb2JhbFtpXSk7XG5cdHJldHVybiAoY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwpKCk7XG59O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lLCBleGVjdXRlTW9kdWxlc10gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG5cdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuXHR9XG5cblx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuXHRpZihleGVjdXRlTW9kdWxlcykgZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG5cblx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG5cdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3NwaWRlcl9zb2xpdGFpcmVcIl0gPSBzZWxmW1wid2VicGFja0NodW5rc3BpZGVyX3NvbGl0YWlyZVwiXSB8fCBbXTtcbnZhciBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiA9IGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7IiwiLy8gcnVuIHN0YXJ0dXBcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=