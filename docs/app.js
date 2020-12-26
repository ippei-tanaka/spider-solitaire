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
        _this._dragPileGameObject.setActive(false);
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
/*! runtime requirements: __webpack_exports__, __webpack_require__ */
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.PromiseQueue = void 0;
var event_emitter_1 = __webpack_require__(/*! ../event-emitter */ "./src/event-emitter/index.ts");
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
                _this._isDone = true;
                _this._callback();
            });
        }
    };
    Object.defineProperty(Deferred.prototype, "doneCallback", {
        set: function (callback) {
            this._callback = callback;
        },
        enumerable: false,
        configurable: true
    });
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
        this._emitter = new event_emitter_1.Emitter();
    }
    Object.defineProperty(PromiseQueue.prototype, "isProcessing", {
        get: function () {
            return (this._latestDeferred && !this._latestDeferred.isDone);
        },
        enumerable: false,
        configurable: true
    });
    PromiseQueue.prototype.add = function (createPromise) {
        var _this = this;
        if (!this._latestDeferred || this._latestDeferred.isDone) {
            this._latestDeferred = new Deferred({ createPromise: createPromise });
            this._emitter.emit("QUEUE_PROCESS_START", {});
            this._latestDeferred.doneCallback = function () {
                _this._emitter.emit("QUEUE_PROCESS_END", {});
            };
            this._latestDeferred.process();
        }
        else {
            var deferred_1 = new Deferred({ createPromise: createPromise });
            this._latestDeferred.doneCallback = function () {
                deferred_1.process();
            };
            deferred_1.doneCallback = function () {
                _this._emitter.emit("QUEUE_PROCESS_END", {});
            };
            this._latestDeferred = deferred_1;
        }
    };
    PromiseQueue.prototype.onStart = function (callback) {
        this._emitter.on('QUEUE_PROCESS_START', callback);
    };
    PromiseQueue.prototype.onComplete = function (callback) {
        this._emitter.on('QUEUE_PROCESS_END', callback);
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
// import {debounce} from 'underscore';
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
                undoButton.on('pointerdown', function () {
                    _this._table.undo();
                });
                this.children.add(undoButton);
                this._cardAnimationBetweenPilesQueue.onStart(function () {
                    undoButton.setActive(false);
                    undoButton.setAlpha(0.5);
                });
                this._cardAnimationBetweenPilesQueue.onComplete(function () {
                    undoButton.setActive(true);
                    undoButton.setAlpha(1);
                });
                hintButton = new button_1.Button({
                    scene: this,
                    x: 250,
                    y: 600,
                    label: 'HINT'
                });
                hintButton.on('pointerdown', function () {
                    console.log(_this._table.getPossibleMovesBetweenTableauPiles());
                });
                this.children.add(hintButton);
                this._cardAnimationBetweenPilesQueue.onStart(function () {
                    hintButton.setActive(false);
                    hintButton.setAlpha(0.5);
                });
                this._cardAnimationBetweenPilesQueue.onComplete(function () {
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
                return [2 /*return*/];
            });
        });
    };
    MainScene.prototype.onCardPointerOver = function (_a) {
        var _this = this;
        var cardGameObject = _a.cardGameObject, pointer = _a.pointer;
        if (!this._cardAnimationBetweenPilesQueue.isProcessing) {
            this.addHighlightToCardGameObject({ cardGameObject: cardGameObject });
        }
        else {
            this._cardAnimationBetweenPilesQueue.add(function () { return __awaiter(_this, void 0, void 0, function () {
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
        var cardGameObject = _a.cardGameObject;
        cardGameObject.removeHighlight();
    };
    MainScene.prototype.onCardPointerDown = function (_a) {
        var cardGameObject = _a.cardGameObject;
        if (!cardGameObject.isHighLighted)
            return;
        var targetPile = this._table.getPileBy(function (pile) { return pile.cards.find(function (card) { return card.id === cardGameObject.name; }); });
        if (this._table.frontDrawPile === targetPile) {
            this._table.dealCardsFromDrawPile();
        }
    };
    MainScene.prototype.onCardDragStart = function (_a) {
        var _this = this;
        var cardGameObject = _a.cardGameObject;
        if (!cardGameObject.isHighLighted)
            return;
        var targetPile = this._table.getPileBy(function (pile) { return pile.cards.find(function (card) { return card.id === cardGameObject.name; }); });
        var dragPileGameObject = this._tableGameObject.dragPileGameObject;
        if (cardGameObject.isFaceUp
            && this._table.tableauPiles.includes(targetPile)
            && !dragPileGameObject.active) {
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
        var _this = this;
        var zone = _a.zone, cardGameObject = _a.cardGameObject;
        var targetPileGameObject = this._tableGameObject.getPileGameObjectBy(function (pile) { return pile.cardGameObjects.find(function (card) { return card === cardGameObject; }); });
        var dragPileGameObject = this._tableGameObject.dragPileGameObject;
        if (targetPileGameObject === dragPileGameObject && dragPileGameObject.active) {
            var fromPile_1 = this._table.getPileBy(function (pile) { return pile.cards.find(function (card) { return card.id === cardGameObject.name; }); });
            var fromPileGameObject_1 = this._tableGameObject.getPileGameObjectBy(function (p) { return p.name === fromPile_1.id; });
            var toPileGameObject_1 = this._tableGameObject.getPileGameObjectBy(function (p) { return p.zone === zone; });
            var toPile = this._table.getPileBy(function (pile) { return toPileGameObject_1.name === pile.id; });
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
                    from: fromPile_1,
                    size: size
                });
                dragPileGameObject.setActive(false);
            }
            else {
                this._cardAnimationBetweenPilesQueue.add(function () { return __awaiter(_this, void 0, void 0, function () {
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
        var cardGameObject = _a.cardGameObject, pointer = _a.pointer;
        var targetPileGameObject = this._tableGameObject.getPileGameObjectBy(function (p) {
            return p.cardGameObjects.find(function (c) { return c === cardGameObject; });
        });
        var dragPileGameObject = this._tableGameObject.dragPileGameObject;
        if (targetPileGameObject === dragPileGameObject && dragPileGameObject.active) {
            var size = dragPileGameObject.cardGameObjects.length;
            var fromPile_2 = this._table.getPileBy(function (pile) { return pile.cards.find(function (card) { return card.id === cardGameObject.name; }); });
            var fromPileGameObject_2 = this._tableGameObject.getPileGameObjectBy(function (p) { return p.name === fromPile_2.id; });
            var cardGameObjects = dragPileGameObject.drawFrontCardGameObjects({ size: size });
            fromPileGameObject_2.placeCardGameObjects({ cardGameObjects: cardGameObjects });
            this._cardAnimationBetweenPilesQueue.add(function () { return __awaiter(_this, void 0, void 0, function () {
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
        var fromPileGameObject = this._tableGameObject.getPileGameObjectBy(function (p) { return p.name === from.id; });
        var toPileGameObject = this._tableGameObject.getPileGameObjectBy(function (p) { return p.name === to.id; });
        this._cardAnimationBetweenPilesQueue.add(function () { return __awaiter(_this, void 0, void 0, function () {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL2V2ZW50LWVtaXR0ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9nYW1lLW9iamVjdHMtd2l0aC1ldmVudHMvY2FyZC50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL2dhbWUtb2JqZWN0cy13aXRoLWV2ZW50cy9lbWl0dGVyLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvZ2FtZS1vYmplY3RzLXdpdGgtZXZlbnRzL3RhYmxlLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvZ2FtZS1vYmplY3RzL2J1dHRvbi50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL2dhbWUtb2JqZWN0cy9jYXJkLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvZ2FtZS1vYmplY3RzL3BpbGUudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9nYW1lLW9iamVjdHMvdGFibGUudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9nYW1lLW9iamVjdHMvdHJhbnNmb3JtLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMtd2l0aC1ldmVudHMvY2FyZC50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL21vZGVscy13aXRoLWV2ZW50cy9jcmVhdGUtY2FyZHMudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMtd2l0aC1ldmVudHMvZW1pdHRlci50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL21vZGVscy13aXRoLWV2ZW50cy9waWxlLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvbW9kZWxzLXdpdGgtZXZlbnRzL3RhYmxlLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvbW9kZWxzL2NhcmQudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMvY3JlYXRlLWNhcmRzLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvbW9kZWxzL3BpbGUudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMvdGFibGUudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMvdW5kb2FibGUtYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL3Byb21pc2UtcXVldWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9zY2VuZXMvbWFpbi1zY2VuZS50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy9Vc2Vycy9pdGFuYWthL0RvY3VtZW50cy9Qcm9qZWN0cy9zcGlkZXItc29saXRhaXJlL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdHxzeW5jfG5vbnJlY3Vyc2l2ZXwvXlxcLlxcL2xvZyQvIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS93ZWJwYWNrL3J1bnRpbWUvbm9kZSBtb2R1bGUgZGVjb3JhdG9yIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvd2VicGFjay9ydW50aW1lL2pzb25wIGNodW5rIGxvYWRpbmciLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS93ZWJwYWNrL3N0YXJ0dXAiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsb0ZBQW9DO0FBZXBDO0lBSUU7UUFFRSxJQUFJLENBQUMsT0FBTyxHQUFHLElBQUkscUJBQVksRUFBRSxDQUFDO1FBQ2xDLHNDQUFzQztJQUN4QyxDQUFDO0lBRUQsb0JBQUUsR0FBRixVQUEyQixTQUFZLEVBQUUsRUFBd0I7UUFDL0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFFLENBQUMsU0FBUyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFFRCxxQkFBRyxHQUFILFVBQTRCLFNBQVksRUFBRSxFQUF3QjtRQUNoRSxJQUFJLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDbEMsQ0FBQztJQUVELHNCQUFJLEdBQUosVUFBNkIsU0FBWSxFQUFFLE1BQVk7UUFDckQsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLE1BQU0sQ0FBQyxDQUFDO0lBQ3ZDLENBQUM7SUFDSCxjQUFDO0FBQUQsQ0FBQztBQXJCWSwwQkFBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZHBCLGtHQUFrQztBQUNsQywyRkFBd0U7QUFJeEU7SUFBNkMsMkNBQWM7SUFFekQsaUNBQWEsSUFBdUI7UUFBcEMsWUFFRSxrQkFBTSxJQUFJLENBQUMsU0FRWjtRQVBDLEtBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLFVBQUMsT0FBZSxJQUFLLHdCQUFPLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFLEVBQUMsY0FBYyxFQUFDLEtBQUksRUFBRSxPQUFPLFdBQUMsQ0FBQyxFQUFoRSxDQUFn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RUE7O1dBRUE7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0EsZUFBZSw0QkFBNEI7V0FDM0M7V0FDQTtXQUNBLGdCQUFnQiwyQkFBMkI7V0FDM0M7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsZUFBZSwrQkFBK0I7V0FDOUM7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLG9CQUFvQjtXQUMxQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0EsK0M7Ozs7VUMzRkE7VUFDQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0V2ZW50RW1pdHRlcn0gZnJvbSAnZXZlbnRzJztcblxudHlwZSBfRXZlbnRNYXAgPSBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xudHlwZSBfRXZlbnRLZXk8VCBleHRlbmRzIF9FdmVudE1hcD4gPSBzdHJpbmcgJiBrZXlvZiBUO1xudHlwZSBfRXZlbnRSZWNlaXZlcjxUPiA9IChwYXJhbXM6IFQpID0+IHZvaWQ7XG5cbmludGVyZmFjZSBfRW1pdHRlcjxUIGV4dGVuZHMgX0V2ZW50TWFwPiB7XG4gIG9uPEsgZXh0ZW5kcyBfRXZlbnRLZXk8VD4+XG4gICAgKGV2ZW50TmFtZTogSywgZm46IF9FdmVudFJlY2VpdmVyPFRbS10+KTogdm9pZDtcbiAgb2ZmPEsgZXh0ZW5kcyBfRXZlbnRLZXk8VD4+XG4gICAgKGV2ZW50TmFtZTogSywgZm46IF9FdmVudFJlY2VpdmVyPFRbS10+KTogdm9pZDtcbiAgZW1pdDxLIGV4dGVuZHMgX0V2ZW50S2V5PFQ+PlxuICAgIChldmVudE5hbWU6IEssIHBhcmFtczogVFtLXSk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBFbWl0dGVyPFQgZXh0ZW5kcyBfRXZlbnRNYXA+IGltcGxlbWVudHMgX0VtaXR0ZXI8VD5cbntcbiAgcHJpdmF0ZSBlbWl0dGVyO1xuXG4gIGNvbnN0cnVjdG9yICgpXG4gIHtcbiAgICB0aGlzLmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgLy8gdGhpcy5lbWl0dGVyLnNldE1heExpc3RlbmVycygxMDAwKTtcbiAgfVxuXG4gIG9uPEsgZXh0ZW5kcyBfRXZlbnRLZXk8VD4+KGV2ZW50TmFtZTogSywgZm46IF9FdmVudFJlY2VpdmVyPFRbS10+KSB7XG4gICAgdGhpcy5lbWl0dGVyLm9uKGV2ZW50TmFtZSwgZm4pO1xuICB9XG5cbiAgb2ZmPEsgZXh0ZW5kcyBfRXZlbnRLZXk8VD4+KGV2ZW50TmFtZTogSywgZm46IF9FdmVudFJlY2VpdmVyPFRbS10+KSB7XG4gICAgdGhpcy5lbWl0dGVyLm9mZihldmVudE5hbWUsIGZuKTtcbiAgfVxuXG4gIGVtaXQ8SyBleHRlbmRzIF9FdmVudEtleTxUPj4oZXZlbnROYW1lOiBLLCBwYXJhbXM6IFRbS10pIHtcbiAgICB0aGlzLmVtaXR0ZXIuZW1pdChldmVudE5hbWUsIHBhcmFtcyk7XG4gIH1cbn1cbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcbmltcG9ydCB7ZW1pdHRlcn0gZnJvbSAnLi9lbWl0dGVyJztcbmltcG9ydCB7Q2FyZEdhbWVPYmplY3QsIENhcmRHYW1lT2JqZWN0QXJnc30gZnJvbSBcIi4uL2dhbWUtb2JqZWN0cy9jYXJkXCI7XG5cbnR5cGUgUG9pbnRlciA9IFBoYXNlci5JbnB1dC5Qb2ludGVyO1xuXG5leHBvcnQgY2xhc3MgQ2FyZEdhbWVPYmplY3RXaXRoRXZlbnQgZXh0ZW5kcyBDYXJkR2FtZU9iamVjdFxue1xuICBjb25zdHJ1Y3RvciAoYXJnczpDYXJkR2FtZU9iamVjdEFyZ3MpXG4gIHtcbiAgICBzdXBlcihhcmdzKTtcbiAgICB0aGlzLm9uKCdwb2ludGVyZG93bicsIChwb2ludGVyOlBvaW50ZXIpID0+IGVtaXR0ZXIuZW1pdChcIkNBUkRfUE9JTlRFUkRPV05cIiwge2NhcmRHYW1lT2JqZWN0OnRoaXMsIHBvaW50ZXJ9KSk7XG4gICAgdGhpcy5vbigncG9pbnRlcm92ZXInLCAocG9pbnRlcjpQb2ludGVyKSA9PiBlbWl0dGVyLmVtaXQoXCJDQVJEX1BPSU5URVJPVkVSXCIsIHtjYXJkR2FtZU9iamVjdDp0aGlzLCBwb2ludGVyfSkpO1xuICAgIHRoaXMub24oJ3BvaW50ZXJvdXQnLCAocG9pbnRlcjpQb2ludGVyKSA9PiBlbWl0dGVyLmVtaXQoXCJDQVJEX1BPSU5URVJPVVRcIiwge2NhcmRHYW1lT2JqZWN0OnRoaXMsIHBvaW50ZXJ9KSk7XG4gICAgdGhpcy5vbignZHJhZ3N0YXJ0JywgKHBvaW50ZXI6UG9pbnRlcikgPT4gZW1pdHRlci5lbWl0KFwiQ0FSRF9EUkFHU1RBUlRcIiwge2NhcmRHYW1lT2JqZWN0OnRoaXMsIHBvaW50ZXJ9KSk7XG4gICAgdGhpcy5vbignZHJhZycsIChwb2ludGVyOlBvaW50ZXIpID0+IGVtaXR0ZXIuZW1pdChcIkNBUkRfRFJBR1wiLCB7Y2FyZEdhbWVPYmplY3Q6dGhpcywgcG9pbnRlcn0pKTtcbiAgICB0aGlzLm9uKCdkcm9wJywgKHBvaW50ZXI6UG9pbnRlciwgem9uZTpQaGFzZXIuR2FtZU9iamVjdHMuWm9uZSkgPT4gZW1pdHRlci5lbWl0KFwiQ0FSRF9EUk9QXCIsIHtjYXJkR2FtZU9iamVjdDp0aGlzLCBwb2ludGVyLCB6b25lfSkpO1xuICAgIHRoaXMub24oJ2RyYWdlbmQnLCAocG9pbnRlcjpQb2ludGVyKSA9PiBlbWl0dGVyLmVtaXQoXCJDQVJEX0RSQUdFTkRcIiwge2NhcmRHYW1lT2JqZWN0OnRoaXMsIHBvaW50ZXJ9KSk7XG4gIH1cbn1cbiIsImltcG9ydCB7RW1pdHRlcn0gZnJvbSAnLi4vZXZlbnQtZW1pdHRlcic7XG5pbXBvcnQge1ZpZXdFdmVudHN9IGZyb20gJy4vZXZlbnRzJztcblxuZXhwb3J0IGNvbnN0IGVtaXR0ZXIgPSBuZXcgRW1pdHRlcjxWaWV3RXZlbnRzPigpO1xuIiwiLy8gaW1wb3J0IHtlbWl0dGVyfSBmcm9tICcuL2VtaXR0ZXInO1xuaW1wb3J0IHtUYWJsZUdhbWVPYmplY3R9IGZyb20gXCIuLi9nYW1lLW9iamVjdHMvdGFibGVcIjtcblxuZXhwb3J0IGNsYXNzIFRhYmxlR2FtZU9iamVjdFdpdGhFdmVudCBleHRlbmRzIFRhYmxlR2FtZU9iamVjdFxue1xuICAvLyBjb25zdHJ1Y3RvciAoYXJnczogVGFibGVHYW1lT2JqZWN0U2V0dGluZ3MpXG4gIC8vIHtcbiAgLy8gICBzdXBlcihhcmdzKTtcbiAgLy9cbiAgLy8gICB0aGlzLmRyYXdQaWxlR2FtZU9iamVjdHMuZm9yRWFjaChwaWxlR2FtZU9iamVjdCA9PiB7XG4gIC8vICAgICBwaWxlR2FtZU9iamVjdC5vbihcInBvaW50ZXJkb3duXCIsICgpID0+IHtcbiAgLy8gICAgICAgZW1pdHRlci5lbWl0KFwiRFJBV1BJTEVfUE9JTlRFUkRPV05cIiwge3BpbGVHYW1lT2JqZWN0fSk7XG4gIC8vICAgICB9KTtcbiAgLy8gICB9KTtcbiAgLy8gfVxufVxuIiwiaW1wb3J0IFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XG5cbmNvbnN0IHtcbiAgVGV4dCxcbiAgQ29udGFpbmVyXG59ID0gUGhhc2VyLkdhbWVPYmplY3RzO1xuXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29udGFpbmVyXG57XG4gIGNvbnN0cnVjdG9yICh7XG4gICAgc2NlbmUsXG4gICAgeCxcbiAgICB5LFxuICAgIGxhYmVsXG4gIH06e1xuICAgIHNjZW5lOlBoYXNlci5TY2VuZSxcbiAgICB4Om51bWJlcixcbiAgICB5Om51bWJlcixcbiAgICBsYWJlbDpzdHJpbmdcbiAgfSlcbiAge1xuICAgIHN1cGVyKHNjZW5lLCB4LCB5KTtcbiAgICB0aGlzLnJlbmRlcihsYWJlbCk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlciAobGFiZWw6c3RyaW5nKVxuICB7XG4gICAgY29uc3Qgc3VpdFRleHQgPSBuZXcgVGV4dCh0aGlzLnNjZW5lLCAwLCAwLCBsYWJlbCwgIHtcbiAgICAgIGZvbnRTaXplOiBcIjM1cHhcIixcbiAgICAgIGNvbG9yOiAnIzAwMDAwMCcsXG4gICAgICBmb250RmFtaWx5OiAnR2VvcmdpYSwgXCJHb3VkeSBCb29rbGV0dGVyIDE5MTFcIiwgVGltZXMsIHNlcmlmJ1xuICAgIH0pO1xuICAgIHN1aXRUZXh0LnggLT0gc3VpdFRleHQud2lkdGggLyAyO1xuICAgIHN1aXRUZXh0LnkgLT0gc3VpdFRleHQuaGVpZ2h0IC8gMjtcbiAgICB0aGlzLmFkZChzdWl0VGV4dCk7XG4gICAgdGhpcy5zZXRTaXplKHN1aXRUZXh0LndpZHRoLCBzdWl0VGV4dC5oZWlnaHQpO1xuICAgIHRoaXMuc2V0SW50ZXJhY3RpdmUoKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gXCJwaGFzZXJcIjtcbmltcG9ydCB7U3VpdH0gZnJvbSBcIi4uL21vZGVscy9jYXJkXCI7XG5cbmNvbnN0IHtcbiAgVGV4dCxcbiAgUmVjdGFuZ2xlLFxuICBDb250YWluZXJcbn0gPSBQaGFzZXIuR2FtZU9iamVjdHM7XG5cbmNvbnN0IGdldFN1aXRUZXh0ID0gKHN1aXQ6U3VpdCkgPT5cbntcbiAgc3dpdGNoKHN1aXQpIHtcbiAgICBjYXNlIFN1aXQuU3BhZGU6XG4gICAgcmV0dXJuICfimaAnO1xuICAgIGNhc2UgU3VpdC5DbHViOlxuICAgIHJldHVybiAn4pmjJztcbiAgICBjYXNlIFN1aXQuRGlhbW9uZDpcbiAgICByZXR1cm4gJ+KZpic7XG4gICAgY2FzZSBTdWl0LkhlYXJ0OlxuICAgIHJldHVybiAn4pmlJztcbiAgfVxufVxuXG5jb25zdCBnZXRTdWl0Q29sb3IgPSAoc3VpdDpTdWl0KSA9Plxue1xuICBzd2l0Y2goc3VpdCkge1xuICAgIGNhc2UgU3VpdC5TcGFkZTpcbiAgICBjYXNlIFN1aXQuQ2x1YjpcbiAgICByZXR1cm4gJyMwMDAwMDAnO1xuICAgIGNhc2UgU3VpdC5EaWFtb25kOlxuICAgIGNhc2UgU3VpdC5IZWFydDpcbiAgICByZXR1cm4gJyNmZjAwMDAnO1xuICB9XG59XG5cbmNvbnN0IGdldFJhbmtUZXh0ID0gKHJhbms6bnVtYmVyKSA9Plxue1xuICBpZiAocmFuayA9PT0gMTEpIHtcbiAgICByZXR1cm4gJ0onO1xuICB9IGVsc2UgaWYgKHJhbmsgPT09IDEyKSB7XG4gICAgcmV0dXJuICdRJztcbiAgfSBlbHNlIGlmIChyYW5rID09PSAxMykge1xuICAgIHJldHVybiAnSyc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJhbmsudG9TdHJpbmcoKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDYXJkR2FtZU9iamVjdEFyZ3MgPSB7XG4gIHNjZW5lOlBoYXNlci5TY2VuZSxcbiAgeDpudW1iZXIsXG4gIHk6bnVtYmVyLFxuICBzdWl0OlN1aXQsXG4gIHJhbms6bnVtYmVyLFxuICBuYW1lOnN0cmluZ1xufTtcblxuZXhwb3J0IGNsYXNzIENhcmRHYW1lT2JqZWN0IGV4dGVuZHMgQ29udGFpbmVyXG57XG4gIHByaXZhdGUgX2ZyYW1lOlBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGUgfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX2JhY2s6UGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lciB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfcmFuazpudW1iZXI7XG4gIHByaXZhdGUgX3N1aXQ6U3VpdDtcbiAgcHJpdmF0ZSBfaXNIaWdoTGlnaHRlZDpib29sZWFuID0gZmFsc2U7XG5cbiAgc3RhdGljIFdJRFRIOm51bWJlciA9IDcwO1xuICBzdGF0aWMgSEVJR0hUOm51bWJlciA9IDExMDtcblxuICBjb25zdHJ1Y3RvciAoe1xuICAgIHNjZW5lLFxuICAgIHgsXG4gICAgeSxcbiAgICBzdWl0LFxuICAgIHJhbmssXG4gICAgbmFtZVxuICB9OkNhcmRHYW1lT2JqZWN0QXJncylcbiAge1xuICAgIHN1cGVyKHNjZW5lLCB4LCB5KTtcbiAgICB0aGlzLnJlbmRlcihzdWl0LCByYW5rKTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuX3N1aXQgPSBzdWl0O1xuICAgIHRoaXMuX3JhbmsgPSByYW5rO1xuICB9XG5cbiAgZ2V0IHN1aXQgKClcbiAge1xuICAgIHJldHVybiB0aGlzLl9zdWl0O1xuICB9XG5cbiAgZ2V0IHJhbmsgKClcbiAge1xuICAgIHJldHVybiB0aGlzLl9yYW5rO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgZnJhbWUgKClcbiAge1xuICAgIGlmICghdGhpcy5fZnJhbWUpXG4gICAge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9mcmFtZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGJhY2sgKClcbiAge1xuICAgIGlmICghdGhpcy5fYmFjaylcbiAgICB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2JhY2s7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlciAoc3VpdDpTdWl0LCByYW5rOm51bWJlcilcbiAge1xuICAgIGNvbnN0IHggPSAwO1xuICAgIGNvbnN0IHkgPSAwO1xuICAgIGNvbnN0IGZyYW1lID0gbmV3IFJlY3RhbmdsZSh0aGlzLnNjZW5lLCB4LCB5LCBDYXJkR2FtZU9iamVjdC5XSURUSCwgQ2FyZEdhbWVPYmplY3QuSEVJR0hULCAweGZmZmZmZik7XG4gICAgZnJhbWUuc2V0U3Ryb2tlU3R5bGUoMiwgMHgwMDAwMDApO1xuICAgIHRoaXMuYWRkKGZyYW1lKTtcbiAgICB0aGlzLl9mcmFtZSA9IGZyYW1lO1xuXG4gICAgY29uc3QgcmFua1RleHQgPSBuZXcgVGV4dCh0aGlzLnNjZW5lLCB4IC0gMzMsIHkgLSA1NywgIGdldFJhbmtUZXh0KHJhbmspICsgZ2V0U3VpdFRleHQoc3VpdCksICB7XG4gICAgICBmb250U2l6ZTogXCIyNXB4XCIsXG4gICAgICBjb2xvcjogZ2V0U3VpdENvbG9yKHN1aXQpLFxuICAgICAgZm9udEZhbWlseTogJ0dlb3JnaWEsIFwiR291ZHkgQm9va2xldHRlciAxOTExXCIsIFRpbWVzLCBzZXJpZidcbiAgICB9KTtcbiAgICAvLyByYW5rVGV4dC54ID0gcmFua1RleHQueCAtIHJhbmtUZXh0LndpZHRoIC8gMjtcbiAgICB0aGlzLmFkZChyYW5rVGV4dCk7XG4gICAgLy8gdGhpcy5zZXRBbHBoYSgwLjMpXG5cbiAgICAvLyBjb25zdCBzdWl0VGV4dCA9IG5ldyBUZXh0KHRoaXMuc2NlbmUsIHggLSAxNCwgeSAtIDU4LCBnZXRTdWl0VGV4dChzdWl0KSwgIHtcbiAgICAvLyAgIGZvbnRTaXplOiBcIjI1cHhcIixcbiAgICAvLyAgIGNvbG9yOiBnZXRTdWl0Q29sb3Ioc3VpdCksXG4gICAgLy8gICBmb250RmFtaWx5OiAnR2VvcmdpYSwgXCJHb3VkeSBCb29rbGV0dGVyIDE5MTFcIiwgVGltZXMsIHNlcmlmJ1xuICAgIC8vIH0pO1xuICAgIC8vIHN1aXRUZXh0LnggPSBzdWl0VGV4dC54IC0gc3VpdFRleHQud2lkdGggLyAyO1xuICAgIC8vIHRoaXMuYWRkKHN1aXRUZXh0KTtcblxuICAgIC8vIGNvbnN0IHN1aXRUZXh0ID0gbmV3IFRleHQodGhpcy5zY2VuZSwgeCwgeSAtIDQ1LCBnZXRTdWl0VGV4dChzdWl0KSwgIHtcbiAgICAvLyAgIGZvbnRTaXplOiBcIjQ1cHhcIixcbiAgICAvLyAgIGNvbG9yOiBnZXRTdWl0Q29sb3Ioc3VpdCksXG4gICAgLy8gICBmb250RmFtaWx5OiAnR2VvcmdpYSwgXCJHb3VkeSBCb29rbGV0dGVyIDE5MTFcIiwgVGltZXMsIHNlcmlmJ1xuICAgIC8vIH0pO1xuICAgIC8vIHN1aXRUZXh0LnggPSBzdWl0VGV4dC54IC0gc3VpdFRleHQud2lkdGggLyAyO1xuICAgIC8vIHRoaXMuYWRkKHN1aXRUZXh0KTtcbiAgICAvL1xuICAgIC8vIGNvbnN0IHJhbmtUZXh0ID0gbmV3IFRleHQodGhpcy5zY2VuZSwgeCwgeSAtIDIsICBnZXRSYW5rVGV4dChyYW5rKSwgIHtcbiAgICAvLyAgIGZvbnRTaXplOiBcIjM1cHhcIixcbiAgICAvLyAgIGNvbG9yOiBnZXRTdWl0Q29sb3Ioc3VpdCksXG4gICAgLy8gICBmb250RmFtaWx5OiAnR2VvcmdpYSwgXCJHb3VkeSBCb29rbGV0dGVyIDE5MTFcIiwgVGltZXMsIHNlcmlmJ1xuICAgIC8vIH0pO1xuICAgIC8vIHJhbmtUZXh0LnggPSByYW5rVGV4dC54IC0gcmFua1RleHQud2lkdGggLyAyO1xuICAgIC8vIHRoaXMuYWRkKHJhbmtUZXh0KTtcblxuICAgIHRoaXMuX2JhY2sgPSBuZXcgQ29udGFpbmVyKHRoaXMuc2NlbmUsIHgsIHkpO1xuXG4gICAgY29uc3QgYmFja1BhdHRlcm4gPSBuZXcgUmVjdGFuZ2xlKHRoaXMuc2NlbmUsIHgsIHksIENhcmRHYW1lT2JqZWN0LldJRFRIIC0gMjAsIENhcmRHYW1lT2JqZWN0LkhFSUdIVCAtIDIwLCAweGFhYWFhYSk7XG4gICAgYmFja1BhdHRlcm4uc2V0U3Ryb2tlU3R5bGUoMywgMHhhYWFhYWEpO1xuICAgIGNvbnN0IGJhY2tXaGl0ZSA9IG5ldyBSZWN0YW5nbGUodGhpcy5zY2VuZSwgeCwgeSwgQ2FyZEdhbWVPYmplY3QuV0lEVEggLSAyLCBDYXJkR2FtZU9iamVjdC5IRUlHSFQgLSAyLCAweGZmZmZmZik7XG4gICAgdGhpcy5iYWNrLmFkZChiYWNrV2hpdGUpO1xuICAgIHRoaXMuYmFjay5hZGQoYmFja1BhdHRlcm4pO1xuICAgIHRoaXMuYWRkKHRoaXMuYmFjayk7XG5cbiAgICB0aGlzLnNldFNpemUoQ2FyZEdhbWVPYmplY3QuV0lEVEgsIENhcmRHYW1lT2JqZWN0LkhFSUdIVCk7XG4gICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSh7ZHJhZ2dhYmxlOiB0cnVlfSk7XG4gIH1cblxuICBmbGlwT3ZlciAodXA6Ym9vbGVhbikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IHRpbWVsaW5lID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlVGltZWxpbmUoKTtcbiAgICAgIHRpbWVsaW5lLmFkZCh7XG4gICAgICAgIHRhcmdldHM6IHRoaXMsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgc2NhbGVYOiAwLFxuICAgICAgICB9LFxuICAgICAgICBkdXJhdGlvbjogMzUsXG4gICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmJhY2sudmlzaWJsZSA9ICF1cDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aW1lbGluZS5hZGQoe1xuICAgICAgICB0YXJnZXRzOiB0aGlzLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIHNjYWxlWDogMSxcbiAgICAgICAgfSxcbiAgICAgICAgZHVyYXRpb246IDM1LFxuICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRpbWVsaW5lLnBsYXkoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBpc0ZhY2VVcCAoKVxuICB7XG4gICAgcmV0dXJuICF0aGlzLmJhY2sudmlzaWJsZTtcbiAgfVxuXG4gIGFkZEhpZ2hsaWdodCAoKVxuICB7XG4gICAgdGhpcy5mcmFtZS5zZXRTdHJva2VTdHlsZSgyLCAweGZmNTU4OCk7XG4gICAgdGhpcy5faXNIaWdoTGlnaHRlZCA9IHRydWU7XG4gIH1cblxuICByZW1vdmVIaWdobGlnaHQgKClcbiAge1xuICAgIHRoaXMuZnJhbWUuc2V0U3Ryb2tlU3R5bGUoMiwgMHgwMDAwMDApO1xuICAgIHRoaXMuX2lzSGlnaExpZ2h0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGdldCBpc0hpZ2hMaWdodGVkICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5faXNIaWdoTGlnaHRlZDtcbiAgfVxufVxuIiwiaW1wb3J0IFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XG5pbXBvcnQge0NhcmRHYW1lT2JqZWN0fSBmcm9tIFwiLi9jYXJkXCI7XG5pbXBvcnQge2dldFdvcmxkUG9zaXRpb259IGZyb20gJy4vdHJhbnNmb3JtJztcblxuZXhwb3J0IHR5cGUgUGlsZUdhbWVPYmplY3RBcmdzID0ge1xuICBzY2VuZTpQaGFzZXIuU2NlbmUsXG4gIHg6bnVtYmVyLFxuICB5Om51bWJlcixcbiAgbmFtZTpzdHJpbmcsXG4gIGlzU3ByZWFkPzpib29sZWFuLFxuICBpc0Ryb3BUYXJnZXQ/OmJvb2xlYW4sXG4gIGxhYmVsPzpzdHJpbmdcbiAgLy8gaXNJbnRlcmFjdGl2ZT86Ym9vbGVhblxufVxuXG5pbnRlcmZhY2UgQ2FyZEdhbWVPYmplY3RBZGp1c3RlZFBvc2l0aW9uIHtcbiAgeDogbnVtYmVyLFxuICB5OiBudW1iZXIsXG4gIGNhcmRHYW1lT2JqZWN0OiBDYXJkR2FtZU9iamVjdFxufVxuXG5leHBvcnQgY2xhc3MgUGlsZUdhbWVPYmplY3QgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyXG57XG4gIHByaXZhdGUgX2xhYmVsOnN0cmluZztcbiAgcHJpdmF0ZSBfaXNTcHJlYWQ6Ym9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9jYXJkR2FtZU9iamVjdHM6Q2FyZEdhbWVPYmplY3RbXSA9IFtdO1xuICBwcml2YXRlIF96b25lOlBoYXNlci5HYW1lT2JqZWN0cy5ab25lIHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIF96b25lUmVjdDpQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlIHwgdW5kZWZpbmVkO1xuICAvLyBwcml2YXRlIF9pc0ludGVyYWN0aXZlOmJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZmFjZURvd25DYXJkR2FwOm51bWJlciA9IDE1O1xuICBwcml2YXRlIF9mYWNlVXBDYXJkR2FwOm51bWJlciA9IDI2O1xuICBwcml2YXRlIF9tYXhIZWlnaHRPZkdhcHM6bnVtYmVyID0gMjAwO1xuXG4gIGNvbnN0cnVjdG9yICh7XG4gICAgc2NlbmUsXG4gICAgeCxcbiAgICB5LFxuICAgIG5hbWUsXG4gICAgaXNTcHJlYWQsXG4gICAgaXNEcm9wVGFyZ2V0LFxuICAgIGxhYmVsXG4gICAgLy8gaXNJbnRlcmFjdGl2ZVxuICB9OlBpbGVHYW1lT2JqZWN0QXJncylcbiAge1xuICAgIHN1cGVyKHNjZW5lLCB4LCB5KTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuX2xhYmVsID0gbGFiZWwgfHwgJyc7XG5cbiAgICBpZiAoaXNTcHJlYWQpIHtcbiAgICAgIHRoaXMuX2lzU3ByZWFkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNEcm9wVGFyZ2V0KSB7XG4gICAgICB0aGlzLl96b25lID0gdGhpcy5yZW5kZXJab25lKCk7XG4gICAgICB0aGlzLl96b25lUmVjdCA9IHRoaXMucmVuZGVyWm9uZVJlY3QoKTtcbiAgICB9XG5cbiAgICAvLyBpZiAoaXNJbnRlcmFjdGl2ZSlcbiAgICAvLyB7XG4gICAgLy8gICB0aGlzLnNldFNpemUoQ2FyZEdhbWVPYmplY3QuV0lEVEgsIENhcmRHYW1lT2JqZWN0LkhFSUdIVCk7XG4gICAgLy8gICB0aGlzLnNldEludGVyYWN0aXZlKCk7XG4gICAgLy8gICB0aGlzLl9pc0ludGVyYWN0aXZlID0gdHJ1ZTtcbiAgICAvLyB9XG4gIH1cblxuICBnZXQgbGFiZWwgKCkge1xuICAgIHJldHVybiB0aGlzLl9sYWJlbDtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyWm9uZSAoKVxuICB7XG4gICAgY29uc3Qgem9uZSA9IG5ldyBQaGFzZXIuR2FtZU9iamVjdHMuWm9uZSh0aGlzLnNjZW5lLCAwLCAwLCAxLCAxKTtcbiAgICB0aGlzLmFkZCh6b25lKTtcbiAgICByZXR1cm4gem9uZTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyWm9uZVJlY3QgKClcbiAge1xuICAgIGNvbnN0IHJlY3QgPSBuZXcgUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZSh0aGlzLnNjZW5lLCAwLCAwLCAxLCAxLCAweGNjY2NjYyk7XG4gICAgdGhpcy5hZGQocmVjdCk7XG4gICAgcmV0dXJuIHJlY3Q7XG4gIH1cblxuICBwcml2YXRlIHJlc2l6ZVpvbmUgKClcbiAge1xuICAgIGNvbnN0IHdpZHRoID0gQ2FyZEdhbWVPYmplY3QuV0lEVEg7XG4gICAgY29uc3QgZnJvbnRDYXJkR2FtZU9iamVjdCA9IHRoaXMuX2NhcmRHYW1lT2JqZWN0c1t0aGlzLl9jYXJkR2FtZU9iamVjdHMubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgaGVpZ2h0ID0gQ2FyZEdhbWVPYmplY3QuSEVJR0hUICsgKGZyb250Q2FyZEdhbWVPYmplY3QgPyBmcm9udENhcmRHYW1lT2JqZWN0LnkgOiAwKTtcbiAgICBjb25zdCB4ID0gMDtcbiAgICBjb25zdCB5ID0gKGhlaWdodCAvIDIpIC0gKENhcmRHYW1lT2JqZWN0LkhFSUdIVCAvIDIpO1xuXG4gICAgaWYgKHRoaXMuX3pvbmUpXG4gICAge1xuICAgICAgdGhpcy5fem9uZS54ID0geDtcbiAgICAgIHRoaXMuX3pvbmUueSA9IHk7XG4gICAgICB0aGlzLl96b25lLndpZHRoID0gd2lkdGg7XG4gICAgICB0aGlzLl96b25lLmhlaWdodCA9IGhlaWdodDtcbiAgICAgIHRoaXMuX3pvbmUuc2V0UmVjdGFuZ2xlRHJvcFpvbmUod2lkdGgsIGhlaWdodCk7XG4gICAgICB0aGlzLl96b25lLmlucHV0LmhpdEFyZWEuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgIHRoaXMuX3pvbmUuc2V0T3JpZ2luKHRoaXMuX3pvbmUub3JpZ2luWCwgdGhpcy5fem9uZS5vcmlnaW5ZKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fem9uZVJlY3QpIHtcbiAgICAgIHRoaXMuX3pvbmVSZWN0LnggPSB4O1xuICAgICAgdGhpcy5fem9uZVJlY3QueSA9IHk7XG4gICAgICB0aGlzLl96b25lUmVjdC53aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5fem9uZVJlY3QuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgdGhpcy5fem9uZVJlY3Quc2V0T3JpZ2luKHRoaXMuX3pvbmVSZWN0Lm9yaWdpblgsIHRoaXMuX3pvbmVSZWN0Lm9yaWdpblkpO1xuICAgIH1cblxuICAgIC8vIGlmICh0aGlzLl9pc0ludGVyYWN0aXZlKVxuICAgIC8vIHtcbiAgICAvLyAgIHRoaXMuaW5wdXQuaGl0QXJlYS5zZXRTaXplKHdpZHRoLCBoZWlnaHQpXG4gICAgLy8gfVxuICB9XG5cbiAgZ2V0IHpvbmUgKClcbiAge1xuICAgIHJldHVybiB0aGlzLl96b25lO1xuICB9XG5cbiAgLypcbiAgZ2V0TmV3RnJvbnRDYXJkR2FtZU9iamVjdFBvc2l0aW9uICgpXG4gIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogMCxcbiAgICAgIHk6ICF0aGlzLl9pc1NwcmVhZCA/IDAgOiB0aGlzLl9jYXJkR2FtZU9iamVjdHMucmVkdWNlKChwcmV2LCBjYXJkR2FtZU9iamVjdCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJldiArIChjYXJkR2FtZU9iamVjdC5pc0ZhY2VVcCA/IHRoaXMuX2ZhY2VVcENhcmRHYXAgOiB0aGlzLl9mYWNlRG93bkNhcmRHYXApO1xuICAgICAgfSwgMCksXG4gICAgICBkZXB0aDogdGhpcy5fY2FyZEdhbWVPYmplY3RzLmxlbmd0aFxuICAgIH1cbiAgfVxuICAqL1xuXG4gIHByaXZhdGUgX2dldEFkanVzdGVkQ2FyZEdhbWVPYmplY3RQb3NpdGlvbnMgKClcbiAge1xuXG4gICAgaWYgKCF0aGlzLl9pc1NwcmVhZCB8fCB0aGlzLl9jYXJkR2FtZU9iamVjdHMubGVuZ3RoIDw9IDEpXG4gICAge1xuICAgICAgcmV0dXJuIHRoaXMuX2NhcmRHYW1lT2JqZWN0cy5tYXAoKGNhcmRHYW1lT2JqZWN0LCBpKSA9PiAoe1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICBkZXB0aDogaSxcbiAgICAgICAgY2FyZEdhbWVPYmplY3RcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBjb25zdCBudW1iZXJPZkdhcHMgPSB0aGlzLl9jYXJkR2FtZU9iamVjdHMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBudW1iZXJPZkZhY2VVcENhcmRHYXBzID0gdGhpcy5fY2FyZEdhbWVPYmplY3RzLnNsaWNlKDAsIC0xKS5yZWR1Y2UoKHByZSwgY3VyKSA9PiBwcmUgKyAoY3VyLmlzRmFjZVVwID8gMSA6IDApLCAwKTtcbiAgICBjb25zdCBudW1iZXJPZkZhY2VEb3duQ2FyZEdhcHMgPSBudW1iZXJPZkdhcHMgLSBudW1iZXJPZkZhY2VVcENhcmRHYXBzO1xuICAgIGNvbnN0IGhlaWhndE9mR2FwcyA9IG51bWJlck9mRmFjZVVwQ2FyZEdhcHMgKiB0aGlzLl9mYWNlVXBDYXJkR2FwICsgbnVtYmVyT2ZGYWNlRG93bkNhcmRHYXBzICogdGhpcy5fZmFjZURvd25DYXJkR2FwO1xuXG4gICAgbGV0IGdhcE9mRmFjZVVwQ2FyZCA9IHRoaXMuX2ZhY2VVcENhcmRHYXA7XG4gICAgbGV0IGdhcE9mRmFjZURvd25DYXJkID0gdGhpcy5fZmFjZURvd25DYXJkR2FwO1xuXG4gICAgaWYgKGhlaWhndE9mR2FwcyA+IHRoaXMuX21heEhlaWdodE9mR2Fwcykge1xuICAgICAgZ2FwT2ZGYWNlVXBDYXJkID0gdGhpcy5fbWF4SGVpZ2h0T2ZHYXBzIC8gKG51bWJlck9mRmFjZVVwQ2FyZEdhcHMgKyBudW1iZXJPZkZhY2VEb3duQ2FyZEdhcHMgKiB0aGlzLl9mYWNlRG93bkNhcmRHYXAgLyB0aGlzLl9mYWNlVXBDYXJkR2FwKTtcbiAgICAgIGdhcE9mRmFjZURvd25DYXJkID0gdGhpcy5fbWF4SGVpZ2h0T2ZHYXBzIC8gKG51bWJlck9mRmFjZURvd25DYXJkR2FwcyArIG51bWJlck9mRmFjZVVwQ2FyZEdhcHMgKiB0aGlzLl9mYWNlVXBDYXJkR2FwIC8gdGhpcy5fZmFjZURvd25DYXJkR2FwKTtcbiAgICB9XG5cbiAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICBsZXQgcG9zaXRpb25zOkNhcmRHYW1lT2JqZWN0QWRqdXN0ZWRQb3NpdGlvbltdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jYXJkR2FtZU9iamVjdHMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgY29uc3QgY2FyZEdhbWVPYmplY3QgPSB0aGlzLl9jYXJkR2FtZU9iamVjdHNbaV07XG4gICAgICBwb3NpdGlvbnMgPSBbLi4ucG9zaXRpb25zLCB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IG9mZnNldCxcbiAgICAgICAgY2FyZEdhbWVPYmplY3RcbiAgICAgIH1dO1xuICAgICAgb2Zmc2V0ID0gb2Zmc2V0ICsgKGNhcmRHYW1lT2JqZWN0LmlzRmFjZVVwID8gZ2FwT2ZGYWNlVXBDYXJkIDogZ2FwT2ZGYWNlRG93bkNhcmQpO1xuICAgIH1cblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH1cblxuICBhc3luYyBhZGp1c3RDYXJkR2FtZU9iamVjdFBvc2l0aW9uc1dpdGhBbmltYXRpb24gKClcbiAge1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IHRoaXMuX2dldEFkanVzdGVkQ2FyZEdhbWVPYmplY3RQb3NpdGlvbnMoKTtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChwb3NpdGlvbnNcbiAgICAgIC5maWx0ZXIocG9zaXRpb24gPT4gKHBvc2l0aW9uLnggIT09IHBvc2l0aW9uLmNhcmRHYW1lT2JqZWN0LnggfHwgcG9zaXRpb24ueSAhPT0gcG9zaXRpb24uY2FyZEdhbWVPYmplY3QueSkpXG4gICAgICAubWFwKHBvc2l0aW9uID0+IG5ldyBQcm9taXNlKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICAgICAgdGFyZ2V0czogcG9zaXRpb24uY2FyZEdhbWVPYmplY3QsXG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHg6IHBvc2l0aW9uLngsXG4gICAgICAgICAgICB5OiBwb3NpdGlvbi55XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkdXJhdGlvbjogNzAsXG4gICAgICAgICAgb25Db21wbGV0ZTogKCkgPT4gcmVzKClcbiAgICAgICAgfSk7XG4gICAgfSkpKVxuICAgIC50aGVuKCgpID0+IHRoaXMucmVzaXplWm9uZSgpKVxuICB9XG5cbiAgYWRqdXN0Q2FyZEdhbWVPYmplY3RQb3NpdGlvbnMgKClcbiAge1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IHRoaXMuX2dldEFkanVzdGVkQ2FyZEdhbWVPYmplY3RQb3NpdGlvbnMoKTtcbiAgICBmb3IgKGxldCBwb3NpdGlvbiBvZiBwb3NpdGlvbnMpXG4gICAge1xuICAgICAgcG9zaXRpb24uY2FyZEdhbWVPYmplY3QueCA9IHBvc2l0aW9uLng7XG4gICAgICBwb3NpdGlvbi5jYXJkR2FtZU9iamVjdC55ID0gcG9zaXRpb24ueTtcbiAgICB9XG4gICAgdGhpcy5yZXNpemVab25lKCk7XG4gIH1cblxuICBhc3luYyBleHBhbmRXaXRoQW5pbWF0aW9uICgpXG4gIHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuc2NhbGVYID0gMTtcbiAgICAgIHRoaXMuc2NhbGVZID0gMTtcbiAgICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICAgIHRhcmdldHM6IHRoaXMsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgc2NhbGVYOiAxLjEsXG4gICAgICAgICAgc2NhbGVZOiAxLjFcbiAgICAgICAgfSxcbiAgICAgICAgZHVyYXRpb246IDQwLFxuICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiByZXNvbHZlKClcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcGxhY2VDYXJkR2FtZU9iamVjdHMgKHtjYXJkR2FtZU9iamVjdHN9OiB7Y2FyZEdhbWVPYmplY3RzOkNhcmRHYW1lT2JqZWN0W119KVxuICB7XG4gICAgY29uc3Qgd29ybGRQb3NpdGlvbiA9IGdldFdvcmxkUG9zaXRpb24odGhpcyk7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2FyZEdhbWVPYmplY3RzLmxlbmd0aDsgaW5kZXgrKylcbiAgICB7XG4gICAgICBjb25zdCBjYXJkR2FtZU9iamVjdCA9IGNhcmRHYW1lT2JqZWN0c1tpbmRleF07XG4gICAgICBjYXJkR2FtZU9iamVjdC54ID0gY2FyZEdhbWVPYmplY3QueCAtIHdvcmxkUG9zaXRpb24ueDtcbiAgICAgIGNhcmRHYW1lT2JqZWN0LnkgPSBjYXJkR2FtZU9iamVjdC55IC0gd29ybGRQb3NpdGlvbi55O1xuICAgICAgdGhpcy5hZGQoY2FyZEdhbWVPYmplY3QpO1xuICAgIH1cblxuICAgIHRoaXMuX2NhcmRHYW1lT2JqZWN0cyA9IFsuLi50aGlzLl9jYXJkR2FtZU9iamVjdHMsIC4uLmNhcmRHYW1lT2JqZWN0c107XG4gIH1cblxuICBwcml2YXRlIF9nZXRGcm9udEdhbWVPYmplY3RzICh7c2l6ZX06e3NpemU6bnVtYmVyfSlcbiAge1xuICAgIHJldHVybiB0aGlzLl9jYXJkR2FtZU9iamVjdHMuc2xpY2UoLXNpemUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlRnJvbnRHYW1lT2JqZWN0cyAoe3NpemV9OntzaXplOm51bWJlcn0pXG4gIHtcbiAgICBjb25zdCBjYXJkR2FtZU9iamVjdHMgPSB0aGlzLl9nZXRGcm9udEdhbWVPYmplY3RzKHtzaXplfSk7XG4gICAgY29uc3Qgd29ybGRQb3NpdGlvbiA9IGdldFdvcmxkUG9zaXRpb24odGhpcyk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNhcmRHYW1lT2JqZWN0cy5sZW5ndGg7IGluZGV4KyspXG4gICAge1xuICAgICAgY29uc3QgY2FyZEdhbWVPYmplY3QgPSBjYXJkR2FtZU9iamVjdHNbaW5kZXhdO1xuICAgICAgY2FyZEdhbWVPYmplY3QueCA9IGNhcmRHYW1lT2JqZWN0LnggKyB3b3JsZFBvc2l0aW9uLng7XG4gICAgICBjYXJkR2FtZU9iamVjdC55ID0gY2FyZEdhbWVPYmplY3QueSArIHdvcmxkUG9zaXRpb24ueTtcbiAgICAgIHRoaXMucmVtb3ZlKGNhcmRHYW1lT2JqZWN0KTtcbiAgICB9XG4gICAgdGhpcy5fY2FyZEdhbWVPYmplY3RzID0gdGhpcy5fY2FyZEdhbWVPYmplY3RzLnNsaWNlKDAsIHRoaXMuX2NhcmRHYW1lT2JqZWN0cy5sZW5ndGggLSBzaXplKTtcbiAgICB0aGlzLnJlc2l6ZVpvbmUoKTtcbiAgfVxuXG4gIGRyYXdGcm9udENhcmRHYW1lT2JqZWN0cyAoe3NpemV9OntzaXplOm51bWJlcn0pXG4gIHtcbiAgICBjb25zdCBjYXJkR2FtZU9iamVjdHMgPSB0aGlzLl9nZXRGcm9udEdhbWVPYmplY3RzKHtzaXplfSk7XG4gICAgdGhpcy5fcmVtb3ZlRnJvbnRHYW1lT2JqZWN0cyh7c2l6ZX0pO1xuICAgIHJldHVybiBjYXJkR2FtZU9iamVjdHM7XG4gIH1cblxuICBnZXQgY2FyZEdhbWVPYmplY3RzICgpXG4gIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX2NhcmRHYW1lT2JqZWN0c107XG4gIH1cbn1cbiIsImltcG9ydCBQaGFzZXIgZnJvbSBcInBoYXNlclwiO1xuaW1wb3J0IHtDYXJkR2FtZU9iamVjdH0gZnJvbSAnLi9jYXJkJztcbmltcG9ydCB7UGlsZUdhbWVPYmplY3R9IGZyb20gJy4vcGlsZSc7XG5cbmV4cG9ydCB0eXBlIFRhYmxlR2FtZU9iamVjdFNldHRpbmdzID0ge1xuICBzY2VuZTpQaGFzZXIuU2NlbmUsXG4gIGRlY2tQaWxlSWQ6c3RyaW5nLFxuICBkcmF3UGlsZXNJZHM6c3RyaW5nW10sXG4gIHRhYmxlYXVQaWxlc0lkczpzdHJpbmdbXSxcbiAgZGlzY2FyZFBpbGVzSWRzOnN0cmluZ1tdLFxuICBkcmFnUGlsZUlkOnN0cmluZyxcbiAgY2FyZEdhbWVPYmplY3RzOiBDYXJkR2FtZU9iamVjdFtdXG59O1xuXG5leHBvcnQgY2xhc3MgVGFibGVHYW1lT2JqZWN0IGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lclxue1xuICBwcml2YXRlIF9jYXJkR2FtZU9iamVjdHM6Q2FyZEdhbWVPYmplY3RbXSA9IFtdO1xuICBwcml2YXRlIF9waWxlR2FtZU9iamVjdHM6UGlsZUdhbWVPYmplY3RbXSA9IFtdO1xuICBwcml2YXRlIF9kZWNrUGlsZUdhbWVPYmplY3Q6UGlsZUdhbWVPYmplY3Q7XG4gIHByaXZhdGUgX2RyYXdQaWxlR2FtZU9iamVjdHM6UGlsZUdhbWVPYmplY3RbXSA9IFtdO1xuICBwcml2YXRlIF90YWJsZWF1UGlsZUdhbWVPYmplY3RzOlBpbGVHYW1lT2JqZWN0W10gPSBbXTtcbiAgcHJpdmF0ZSBfZGlzY2FyZFBpbGVHYW1lT2JqZWN0czpQaWxlR2FtZU9iamVjdFtdID0gW107XG4gIHByaXZhdGUgX2RyYWdQaWxlR2FtZU9iamVjdDpQaWxlR2FtZU9iamVjdDtcblxuICBjb25zdHJ1Y3RvciAoe1xuICAgIHNjZW5lLFxuICAgIGRlY2tQaWxlSWQsXG4gICAgZHJhd1BpbGVzSWRzLFxuICAgIHRhYmxlYXVQaWxlc0lkcyxcbiAgICBkaXNjYXJkUGlsZXNJZHMsXG4gICAgZHJhZ1BpbGVJZCxcbiAgICBjYXJkR2FtZU9iamVjdHNcbiAgfTpUYWJsZUdhbWVPYmplY3RTZXR0aW5ncylcbiAge1xuICAgIHN1cGVyKHNjZW5lLCAwLCAwKTtcblxuICAgIHRoaXMuX2NhcmRHYW1lT2JqZWN0cyA9IGNhcmRHYW1lT2JqZWN0cztcblxuICAgIGNvbnN0IF9kZWNrUGlsZSA9IG5ldyBQaWxlR2FtZU9iamVjdCh7XG4gICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICAgIHg6NTAwLFxuICAgICAgeTo1MDAsXG4gICAgICBuYW1lOiBkZWNrUGlsZUlkLFxuICAgICAgbGFiZWw6ICdkZWNrJ1xuICAgIH0pO1xuICAgIHRoaXMuX3BpbGVHYW1lT2JqZWN0cyA9IFsuLi50aGlzLl9waWxlR2FtZU9iamVjdHMsIF9kZWNrUGlsZV07XG4gICAgdGhpcy5fZGVja1BpbGVHYW1lT2JqZWN0ID0gX2RlY2tQaWxlO1xuICAgIHRoaXMuX2RlY2tQaWxlR2FtZU9iamVjdC5wbGFjZUNhcmRHYW1lT2JqZWN0cyh7Y2FyZEdhbWVPYmplY3RzfSk7XG4gICAgdGhpcy5fZGVja1BpbGVHYW1lT2JqZWN0LmFkanVzdENhcmRHYW1lT2JqZWN0UG9zaXRpb25zKCk7XG4gICAgdGhpcy5hZGQoX2RlY2tQaWxlKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkcmF3UGlsZXNJZHMubGVuZ3RoOyBpbmRleCsrKVxuICAgIHtcbiAgICAgIGNvbnN0IGRyYXdQaWxlID0gbmV3IFBpbGVHYW1lT2JqZWN0KHtcbiAgICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICAgIHg6NzAgKyBpbmRleCAqIDIwLFxuICAgICAgICB5OjEwMCxcbiAgICAgICAgbmFtZTogZHJhd1BpbGVzSWRzW2luZGV4XSxcbiAgICAgICAgbGFiZWw6ICdkcmF3JyArIGluZGV4XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3BpbGVHYW1lT2JqZWN0cyA9IFsuLi50aGlzLl9waWxlR2FtZU9iamVjdHMsIGRyYXdQaWxlXTtcbiAgICAgIHRoaXMuX2RyYXdQaWxlR2FtZU9iamVjdHMgPSBbLi4udGhpcy5fZHJhd1BpbGVHYW1lT2JqZWN0cywgZHJhd1BpbGVdO1xuICAgICAgdGhpcy5hZGQoZHJhd1BpbGUpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0YWJsZWF1UGlsZXNJZHMubGVuZ3RoOyBpbmRleCsrKVxuICAgIHtcbiAgICAgIGNvbnN0IHRhYmxlYXVQaWxlID0gbmV3IFBpbGVHYW1lT2JqZWN0KHtcbiAgICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICAgIHg6MTAwICsgaW5kZXggKiA5MCxcbiAgICAgICAgeToyNTAsXG4gICAgICAgIG5hbWU6IHRhYmxlYXVQaWxlc0lkc1tpbmRleF0sXG4gICAgICAgIGlzU3ByZWFkOiB0cnVlLFxuICAgICAgICBpc0Ryb3BUYXJnZXQ6IHRydWUsXG4gICAgICAgIGxhYmVsOiAndGFibGVhdScgKyBpbmRleFxuICAgICAgfSk7XG4gICAgICB0aGlzLl9waWxlR2FtZU9iamVjdHMgPSBbLi4udGhpcy5fcGlsZUdhbWVPYmplY3RzLCB0YWJsZWF1UGlsZV07XG4gICAgICB0aGlzLl90YWJsZWF1UGlsZUdhbWVPYmplY3RzID0gWy4uLnRoaXMuX3RhYmxlYXVQaWxlR2FtZU9iamVjdHMsIHRhYmxlYXVQaWxlXTtcbiAgICAgIHRoaXMuYWRkKHRhYmxlYXVQaWxlKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGlzY2FyZFBpbGVzSWRzLmxlbmd0aDsgaW5kZXgrKylcbiAgICB7XG4gICAgICBjb25zdCBkaXNjYXJkUGlsZSA9IG5ldyBQaWxlR2FtZU9iamVjdCh7XG4gICAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgICAgICB4OjMwMCArIGluZGV4ICogOTAsXG4gICAgICAgIHk6MTAwLFxuICAgICAgICBuYW1lOiBkaXNjYXJkUGlsZXNJZHNbaW5kZXhdLFxuICAgICAgICBsYWJlbDogJ2Rpc2NhcmQnICsgaW5kZXhcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fcGlsZUdhbWVPYmplY3RzID0gWy4uLnRoaXMuX3BpbGVHYW1lT2JqZWN0cywgZGlzY2FyZFBpbGVdO1xuICAgICAgdGhpcy5fZGlzY2FyZFBpbGVHYW1lT2JqZWN0cyA9IFsuLi50aGlzLl9kaXNjYXJkUGlsZUdhbWVPYmplY3RzLCBkaXNjYXJkUGlsZV07XG4gICAgICB0aGlzLmFkZChkaXNjYXJkUGlsZSk7XG4gICAgfVxuXG4gICAgY29uc3QgX2RyYWdQaWxlR2FtZU9iamVjdCA9IG5ldyBQaWxlR2FtZU9iamVjdCh7XG4gICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgICAgbmFtZTogZHJhZ1BpbGVJZCxcbiAgICAgIGlzU3ByZWFkOiB0cnVlLFxuICAgICAgbGFiZWw6ICdkcmFnJ1xuICAgIH0pO1xuICAgIHRoaXMuX3BpbGVHYW1lT2JqZWN0cyA9IFsuLi50aGlzLl9waWxlR2FtZU9iamVjdHMsIF9kcmFnUGlsZUdhbWVPYmplY3RdO1xuICAgIHRoaXMuX2RyYWdQaWxlR2FtZU9iamVjdCA9IF9kcmFnUGlsZUdhbWVPYmplY3Q7XG4gICAgdGhpcy5fZHJhZ1BpbGVHYW1lT2JqZWN0LnNldEFjdGl2ZShmYWxzZSk7XG4gICAgdGhpcy5hZGQoX2RyYWdQaWxlR2FtZU9iamVjdCk7XG4gIH1cblxuICBnZXQgY2FyZEdhbWVPYmplY3RzICgpXG4gIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX2NhcmRHYW1lT2JqZWN0c107XG4gIH1cblxuICBnZXQgcGlsZUdhbWVPYmplY3RzICgpXG4gIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX3BpbGVHYW1lT2JqZWN0c107XG4gIH1cblxuICBnZXRQaWxlR2FtZU9iamVjdEJ5IChwcmVkaWNhdGU6KHA6UGlsZUdhbWVPYmplY3QpID0+IGFueSlcbiAge1xuICAgIGNvbnN0IHBpbGUgPSB0aGlzLl9waWxlR2FtZU9iamVjdHMuZmluZChwcmVkaWNhdGUpO1xuICAgIGlmICghcGlsZSlcbiAgICB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcGlsZSBnYW1lIG9iamVjdCBkb2Vzbid0IGV4aXN0LlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHBpbGU7XG4gIH1cblxuICBnZXQgZGVja1BpbGVHYW1lT2JqZWN0ICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5fZGVja1BpbGVHYW1lT2JqZWN0O1xuICB9XG5cbiAgZ2V0IGRyYXdQaWxlR2FtZU9iamVjdHMgKClcbiAge1xuICAgIHJldHVybiBbLi4udGhpcy5fZHJhd1BpbGVHYW1lT2JqZWN0c107XG4gIH1cblxuICBnZXQgdGFibGVhdVBpbGVHYW1lT2JqZWN0cyAoKVxuICB7XG4gICAgcmV0dXJuIFsuLi50aGlzLl90YWJsZWF1UGlsZUdhbWVPYmplY3RzXTtcbiAgfVxuXG4gIGdldCBkcmFnUGlsZUdhbWVPYmplY3QgKClcbiAge1xuICAgIHJldHVybiB0aGlzLl9kcmFnUGlsZUdhbWVPYmplY3Q7XG4gIH1cbn1cbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcblxuZXhwb3J0IGNvbnN0IGdldFdvcmxkUG9zaXRpb24gPSAoY29udGFpbmVyOiBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyKSA9Plxue1xuICBsZXQgcGFyZW50ID0gY29udGFpbmVyLnBhcmVudENvbnRhaW5lcjtcbiAgbGV0IHggPSBjb250YWluZXIueDtcbiAgbGV0IHkgPSBjb250YWluZXIueTtcbiAgd2hpbGUgKHBhcmVudClcbiAge1xuICAgIHggPSB4ICsgcGFyZW50Lng7XG4gICAgeSA9IHkgKyBwYXJlbnQueTtcbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Q29udGFpbmVyO1xuICB9XG4gIHJldHVybiB7eCwgeX07XG59O1xuIiwiaW1wb3J0IFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XG4vLyBpbXBvcnQgSGVsbG9Xb3JsZFNjZW5lIGZyb20gXCIuL3NjZW5lcy9oZWxsby13b3JsZC1zY2VuZVwiO1xuaW1wb3J0IE1haW5TY2VuZSBmcm9tIFwiLi9zY2VuZXMvbWFpbi1zY2VuZVwiO1xuXG5jb25zdCBjb25maWcgPSB7XG4gIC8vIHRpdGxlOiBcIkdhbWUgT2YgTGlmZVwiLFxuICAvLyB1cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2RpZ2l0c2Vuc2l0aXZlL3BoYXNlcjMtdHlwZXNjcmlwdFwiLFxuICAvLyB2ZXJzaW9uOiBcIjEuMFwiLFxuICB3aWR0aDogMTAwMCxcbiAgaGVpZ2h0OiA4MDAsXG4gIHR5cGU6IFBoYXNlci5BVVRPLFxuICAvLyBwYXJlbnQ6IFwiZ2FtZVwiLFxuICBzY2VuZTogW01haW5TY2VuZV0sXG4gIGJhY2tncm91bmRDb2xvcjogXCIjZWRlZGVkXCIsXG4gIC8vIHJlbmRlcjogeyBwaXhlbEFydDogZmFsc2UsIGFudGlhbGlhczogdHJ1ZSB9XG4gIC8vIHBoeXNpY3M6IHtcbiAgLy8gICBkZWZhdWx0OiAnYXJjYWRlJyxcbiAgLy8gICBhcmNhZGU6IHtcbiAgLy8gICAgIGdyYXZpdHk6IHsgeTogMjAwIH1cbiAgLy8gICB9XG4gIC8vIH0sXG59O1xuXG4vLyBleHBvcnQgY2xhc3MgR2FtZSBleHRlbmRzIFBoYXNlci5HYW1lIHtcbi8vICAgY29uc3RydWN0b3IoY29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnKSB7XG4vLyAgICAgc3VwZXIoY29uZmlnKTtcbi8vICAgfVxuLy8gfVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICBuZXcgUGhhc2VyLkdhbWUoY29uZmlnKTtcbn0pO1xuIiwiaW1wb3J0IHtlbWl0dGVyfSBmcm9tICcuL2VtaXR0ZXInO1xuaW1wb3J0IHtDYXJkfSBmcm9tICcuLi9tb2RlbHMvY2FyZCc7XG5cbmV4cG9ydCBjbGFzcyBDYXJkV2l0aEV2ZW50IGV4dGVuZHMgQ2FyZFxue1xuICBmYWNlVXAgKClcbiAge1xuICAgIHN1cGVyLmZhY2VVcCgpO1xuICAgIGVtaXR0ZXIuZW1pdCgnRkxJUF9PVkVSX0NBUkQnLCB7XG4gICAgICBjYXJkOiB0aGlzXG4gICAgfSk7XG4gIH1cblxuICBmYWNlRG93biAoKVxuICB7XG4gICAgc3VwZXIuZmFjZURvd24oKTtcbiAgICBlbWl0dGVyLmVtaXQoJ0ZMSVBfT1ZFUl9DQVJEJywge1xuICAgICAgY2FyZDogdGhpc1xuICAgIH0pO1xuICB9XG5cbiAgZmxpcE92ZXIgKClcbiAge1xuICAgIHN1cGVyLmZsaXBPdmVyKCk7XG4gICAgZW1pdHRlci5lbWl0KCdGTElQX09WRVJfQ0FSRCcsIHtcbiAgICAgIGNhcmQ6IHRoaXNcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtjcmVhdGVDYXJkc30gZnJvbSAnLi4vbW9kZWxzL2NyZWF0ZS1jYXJkcyc7XG5pbXBvcnQge0NhcmRXaXRoRXZlbnR9IGZyb20gJy4vY2FyZCc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDYXJkc1dpdGhFdmVudHMgPSAoe1xuICBudW1iZXJPZkRlY2tzVXNlZCxcbiAgbnVtYmVyT2ZTdWl0c1xufTp7XG4gIG51bWJlck9mRGVja3NVc2VkOm51bWJlcixcbiAgbnVtYmVyT2ZTdWl0czpudW1iZXJcbn0pID0+XG4gIGNyZWF0ZUNhcmRzKHtcbiAgICBudW1iZXJPZkRlY2tzVXNlZCxcbiAgICBudW1iZXJPZlN1aXRzXG4gIH0pLm1hcChjYXJkID0+IG5ldyBDYXJkV2l0aEV2ZW50KHtcbiAgICBzdWl0OiBjYXJkLnN1aXQsXG4gICAgcmFuazogY2FyZC5yYW5rLFxuICAgIGlzRmFjZVVwOiBjYXJkLmlzRmFjZVVwXG4gIH0pKTtcbiIsImltcG9ydCB7RW1pdHRlcn0gZnJvbSAnLi4vZXZlbnQtZW1pdHRlcic7XG5pbXBvcnQge01vZGVsRXZlbnRzfSBmcm9tICcuL2V2ZW50cyc7XG5cbmV4cG9ydCBjb25zdCBlbWl0dGVyID0gbmV3IEVtaXR0ZXI8TW9kZWxFdmVudHM+KCk7XG4iLCJpbXBvcnQge1BpbGV9IGZyb20gJy4uL21vZGVscy9waWxlJztcblxuZXhwb3J0IGNsYXNzIFBpbGVXaXRoRXZlbnQgZXh0ZW5kcyBQaWxlIHtcblxufVxuIiwiaW1wb3J0IHtlbWl0dGVyfSBmcm9tICcuL2VtaXR0ZXInO1xuaW1wb3J0IHtQaWxlfSBmcm9tICcuLi9tb2RlbHMvcGlsZSc7XG5pbXBvcnQge1RhYmxlfSBmcm9tICcuLi9tb2RlbHMvdGFibGUnO1xuXG5leHBvcnQgY2xhc3MgVGFibGVXaXRoRXZlbnQgZXh0ZW5kcyBUYWJsZSB7XG5cbiAgcHJvdGVjdGVkIF9tb3ZlQ2FyZEJldHdlZW5QaWxlcyAoe2Zyb20sIHRvLCBzaXplfTp7ZnJvbTpQaWxlLCB0bzpQaWxlLCBzaXplOm51bWJlcn0pXG4gIHtcbiAgICBjb25zdCBjYXJkcyA9IHN1cGVyLl9tb3ZlQ2FyZEJldHdlZW5QaWxlcyh7ZnJvbSwgdG8sIHNpemV9KTtcbiAgICBlbWl0dGVyLmVtaXQoJ01PVkVfQ0FSRFNfQkVUV0VFTl9QSUxFUycsIHtmcm9tLCB0bywgc2l6ZX0pO1xuICAgIHJldHVybiBjYXJkcztcbiAgfVxuXG59XG4iLCIvLyBpbXBvcnQge2V2ZW50SHVifSBmcm9tICcuLi9ldmVudC1odWInO1xuaW1wb3J0IHtuYW5vaWR9IGZyb20gJ25hbm9pZCc7XG5cbmV4cG9ydCBlbnVtIFN1aXQge1xuICBTcGFkZSA9ICfimaAnLFxuICBDbHViID0gJ+KZoycsXG4gIERpYW1vbmQgPSAn4pmmJyxcbiAgSGVhcnQgPSAn4pmlJ1xufVxuXG5jb25zdCBnZXRSYW5rVGV4dCA9IChyYW5rOm51bWJlcikgPT5cbntcbiAgaWYgKHJhbmsgPCAxIHx8IDEzIDwgcmFuaykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhcmQgcmFuayBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIGlmIChyYW5rID09PSAxMSkge1xuICAgIHJldHVybiAnSic7XG4gIH0gZWxzZSBpZiAocmFuayA9PT0gMTIpIHtcbiAgICByZXR1cm4gJ1EnO1xuICB9IGVsc2UgaWYgKHJhbmsgPT09IDEzKSB7XG4gICAgcmV0dXJuICdLJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmFuay50b1N0cmluZygpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJkXG57XG4gIHByaXZhdGUgX3N1aXQ6IFN1aXQ7XG4gIHByaXZhdGUgX3Jhbms6IG51bWJlcjtcbiAgcHJpdmF0ZSBfaXNGYWNlVXA6IGJvb2xlYW47XG4gIHByaXZhdGUgX2lkOnN0cmluZyA9IG5hbm9pZCgpO1xuXG4gIGNvbnN0cnVjdG9yICh7c3VpdCwgcmFuaywgaXNGYWNlVXB9OntzdWl0OlN1aXQsIHJhbms6bnVtYmVyLCBpc0ZhY2VVcD86Ym9vbGVhbn0pXG4gIHtcbiAgICB0aGlzLl9zdWl0ID0gc3VpdDtcbiAgICB0aGlzLl9pc0ZhY2VVcCA9IGlzRmFjZVVwIHx8IGZhbHNlO1xuXG4gICAgaWYgKDEgPD0gcmFuayAmJiByYW5rIDw9IDEzKSB7XG4gICAgICB0aGlzLl9yYW5rID0gcmFuaztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgY2FyZCByYW5rICR7cmFua30gaXMgaW52YWxpZC5gKTtcbiAgICB9XG4gIH1cblxuICBnZXQgc3VpdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1aXQ7XG4gIH1cblxuICBnZXQgc3VpdE1hcmsgKCkge1xuICAgIHJldHVybiB0aGlzLl9zdWl0LnRvU3RyaW5nKClcbiAgfVxuXG4gIGdldCByYW5rICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmFuaztcbiAgfVxuXG4gIGdldCByYW5rTWFyayAoKSB7XG4gICAgcmV0dXJuIGdldFJhbmtUZXh0KHRoaXMuX3JhbmspXG4gIH1cblxuICBnZXQgaXNGYWNlVXAgKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0ZhY2VVcDtcbiAgfVxuXG4gIGdldCBpZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgZmFjZVVwICgpXG4gIHtcbiAgICB0aGlzLl9pc0ZhY2VVcCA9IHRydWU7XG4gIH1cblxuICBmYWNlRG93biAoKVxuICB7XG4gICAgdGhpcy5faXNGYWNlVXAgPSBmYWxzZTtcbiAgfVxuXG4gIGZsaXBPdmVyICgpXG4gIHtcbiAgICB0aGlzLl9pc0ZhY2VVcCA9ICF0aGlzLl9pc0ZhY2VVcDtcbiAgfVxuXG4gIHRvU3RyaW5nICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5zdWl0TWFyayArIHRoaXMucmFua01hcmsgKyAodGhpcy5faXNGYWNlVXAgPyAnKycgOiAnLScpO1xuICB9XG59XG4iLCJpbXBvcnQge0NhcmQsIFN1aXR9IGZyb20gJy4vY2FyZCc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDYXJkcyA9ICh7XG4gIG51bWJlck9mRGVja3NVc2VkLFxuICBudW1iZXJPZlN1aXRzXG59OntcbiAgbnVtYmVyT2ZEZWNrc1VzZWQ6bnVtYmVyLFxuICBudW1iZXJPZlN1aXRzOm51bWJlclxufSkgPT4ge1xuICBjb25zdCBkZWNrQ2FyZHM6Q2FyZFtdID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZkRlY2tzVXNlZDsgaSsrKVxuICB7XG4gICAgZm9yIChsZXQgcmFuayA9IDE7IHJhbmsgPD0gMTM7IHJhbmsrKylcbiAgICB7XG4gICAgICBzd2l0Y2ggKG51bWJlck9mU3VpdHMpXG4gICAgICB7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBkZWNrQ2FyZHMucHVzaChuZXcgQ2FyZCh7c3VpdDpTdWl0LkRpYW1vbmQsIHJhbmssIGlzRmFjZVVwOiBmYWxzZX0pKTtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGRlY2tDYXJkcy5wdXNoKG5ldyBDYXJkKHtzdWl0OlN1aXQuQ2x1YiwgcmFuaywgaXNGYWNlVXA6IGZhbHNlfSkpO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgZGVja0NhcmRzLnB1c2gobmV3IENhcmQoe3N1aXQ6U3VpdC5IZWFydCwgcmFuaywgaXNGYWNlVXA6IGZhbHNlfSkpO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgZGVja0NhcmRzLnB1c2gobmV3IENhcmQoe3N1aXQ6U3VpdC5TcGFkZSwgcmFuaywgaXNGYWNlVXA6IGZhbHNlfSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZWNrQ2FyZHM7XG59XG5cbmV4cG9ydCBjb25zdCByYW5kb21pemVBcnJheSA9IDxUPih7YXJyYXl9OnthcnJheTpUW119KSA9PiB7XG4gIGNvbnN0IF9hcnIgPSBbLi4uYXJyYXldO1xuICBmb3IgKGxldCBpID0gX2Fyci5sZW5ndGggLSAxOyBpID4gMDsgaS0tKVxuICB7XG4gICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICBbX2FycltpXSwgX2FycltqXV0gPSBbX2FycltqXSwgX2FycltpXV07XG4gIH1cbiAgcmV0dXJuIF9hcnI7XG59XG4iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XG5pbXBvcnQge25hbm9pZH0gZnJvbSAnbmFub2lkJztcblxudHlwZSBQaWxlQXJncyA9IHtcbiAgY2FyZHM/OiBDYXJkW10sXG4gIGxhYmVsPzogc3RyaW5nXG59XG5cbmV4cG9ydCBjbGFzcyBQaWxlXG57XG4gIHByb3RlY3RlZCBfY2FyZHM6Q2FyZFtdO1xuICBwcm90ZWN0ZWQgX2xhYmVsOnN0cmluZztcbiAgcHJpdmF0ZSBfaWQ6c3RyaW5nID0gbmFub2lkKCk7XG5cbiAgY29uc3RydWN0b3IgKGFyZ3M6UGlsZUFyZ3MgPSB7fSlcbiAge1xuICAgIHRoaXMuX2NhcmRzID0gYXJncy5jYXJkcyB8fCBbXTtcbiAgICB0aGlzLl9sYWJlbCA9IGFyZ3MubGFiZWwgfHwgJyc7XG4gIH1cblxuICBnZXQgaWQgKCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIGdldCBsYWJlbCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xuICB9XG5cbiAgZ2V0IGNhcmRzICgpXG4gIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX2NhcmRzXTtcbiAgfVxuXG4gIGdldCBmcm9udENhcmQgKCk6Q2FyZHx1bmRlZmluZWRcbiAge1xuICAgIHJldHVybiB0aGlzLl9jYXJkc1t0aGlzLl9jYXJkcy5sZW5ndGggLSAxXTtcbiAgfVxuXG4gIGdldCBsYXN0Q2FyZCAoKTpDYXJkfHVuZGVmaW5lZFxuICB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcmRzWzBdO1xuICB9XG5cbiAgZ2V0RnJvbnRDYXJkcyAoe3NpemV9OntzaXplOm51bWJlcn0pXG4gIHtcbiAgICBjb25zdCBjYXJkcyA9IHRoaXMuX2NhcmRzO1xuICAgIGlmIChjYXJkcy5sZW5ndGggPT09IDAgfHwgc2l6ZSA8IDEpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBfc2l6ZSA9IE1hdGgubWluKGNhcmRzLmxlbmd0aCwgc2l6ZSk7XG4gICAgcmV0dXJuIGNhcmRzLnNsaWNlKGNhcmRzLmxlbmd0aCAtIF9zaXplKTtcbiAgfVxuXG4gIGRyYXdDYXJkcyAoe3NpemV9OntzaXplOm51bWJlcn0pXG4gIHtcbiAgICBjb25zdCBjYXJkcyA9IHRoaXMuX2NhcmRzO1xuICAgIGlmIChjYXJkcy5sZW5ndGggPT09IDAgfHwgc2l6ZSA8IDEpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBfc2l6ZSA9IE1hdGgubWluKGNhcmRzLmxlbmd0aCwgc2l6ZSk7XG4gICAgY29uc3QgZHJhd25DYXJkcyA9IGNhcmRzLnNsaWNlKGNhcmRzLmxlbmd0aCAtIF9zaXplKTtcbiAgICB0aGlzLl9jYXJkcyA9IGNhcmRzLnNsaWNlKDAsIC1zaXplKTtcbiAgICByZXR1cm4gZHJhd25DYXJkcztcbiAgfVxuXG4gIHBsYWNlQ2FyZHMgKHtjYXJkc306e2NhcmRzOkNhcmRbXX0pXG4gIHtcbiAgICB0aGlzLl9jYXJkcyA9IFsuLi50aGlzLl9jYXJkcywgLi4uY2FyZHNdO1xuICB9XG5cbiAgZ2V0RGVzY2VuZGluZ0luU3VpdEZyb250Q2FyZHMgKClcbiAge1xuICAgIHJldHVybiBQaWxlLmdldERlc2NlbmRpbmdGcm9udENhcmRzKHtcbiAgICAgIGNhcmRzOiB0aGlzLl9jYXJkcyxcbiAgICAgIGluU3VpdDogdHJ1ZSxcbiAgICAgIGZhY2VVcDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldERlc2NlbmRpbmdGcm9udENhcmRzICh7Y2FyZHMsIGluU3VpdCwgZmFjZVVwfTp7Y2FyZHM6Q2FyZFtdLCBpblN1aXQ/OmJvb2xlYW4sIGZhY2VVcD86Ym9vbGVhbn0pXG4gIHtcbiAgICBjb25zdCBfaW5TdWl0ID0gaW5TdWl0IHx8IGZhbHNlO1xuICAgIGNvbnN0IF9mYWNlVXAgPSBmYWNlVXAgfHwgZmFsc2U7XG5cbiAgICBpZiAoY2FyZHMubGVuZ3RoID09PSAwKVxuICAgIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBsZXQgcHJldiA9IGNhcmRzW2NhcmRzLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKF9mYWNlVXAgJiYgIXByZXYuaXNGYWNlVXApXG4gICAge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGxldCBfY2FyZHM6Q2FyZFtdID0gW3ByZXZdO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSBjYXJkcy5sZW5ndGggLSAyOyBpbmRleCA+PSAwOyBpbmRleC0tKVxuICAgIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBjYXJkc1tpbmRleF07XG5cbiAgICAgIGlmIChwcmV2LnJhbmsgKyAxICE9PSBjdXJyZW50LnJhbmtcbiAgICAgICAgfHwgKF9pblN1aXQgJiYgcHJldi5zdWl0ICE9PSBjdXJyZW50LnN1aXQpXG4gICAgICAgIHx8IChfZmFjZVVwICYmICFjdXJyZW50LmlzRmFjZVVwKSlcbiAgICAgIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIF9jYXJkcyA9IFtjdXJyZW50LCAuLi5fY2FyZHNdO1xuICAgICAgcHJldiA9IGN1cnJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9jYXJkcztcbiAgfVxuXG4gIHN0YXRpYyBjaGVja0lmQ2FyZHNBcmVEZXNjZW5kaW5nICh7Y2FyZHMsIGluU3VpdCwgZmFjZVVwfTp7Y2FyZHM6Q2FyZFtdLCBpblN1aXQ/OmJvb2xlYW4sIGZhY2VVcD86Ym9vbGVhbn0pXG4gIHtcbiAgICByZXR1cm4gUGlsZS5nZXREZXNjZW5kaW5nRnJvbnRDYXJkcyh7Y2FyZHMsIGluU3VpdCwgZmFjZVVwfSkubGVuZ3RoID09PSBjYXJkcy5sZW5ndGg7XG4gIH1cblxuICBjaGVja0lmRnJvbnRDYXJkc0NvbXBsZXRlICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5jYXJkcy5sZW5ndGggPj0gMTMgJiYgUGlsZS5jaGVja0lmQ2FyZHNBcmVEZXNjZW5kaW5nKHtcbiAgICAgIGNhcmRzOiB0aGlzLmNhcmRzLnNsaWNlKC0xMyksXG4gICAgICBpblN1aXQ6IHRydWUsXG4gICAgICBmYWNlVXA6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIHRvU3RyaW5nICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5jYXJkcy5tYXAoYyA9PiBjLnRvU3RyaW5nKCkpLmpvaW4oJyAnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xuaW1wb3J0IHtQaWxlfSBmcm9tICcuL3BpbGUnO1xuLy8gaW1wb3J0IHtUYWJsZVNldHRpbmdzLCBUYWJsZVNldHRpbmdDb25maWd9IGZyb20gJy4vdGFibGUtc2V0dGluZ3MnO1xuaW1wb3J0IHtcbiAgRkFDRV9VUF9DQVJELFxuICBNT1ZFX0NBUkQsXG4gIFBBVVNFLFxuICBVbmRvYWJsZUFjdGlvbkhpc3Rvcnlcbn0gZnJvbSAnLi91bmRvYWJsZS1hY3Rpb25zJztcblxuZXhwb3J0IHR5cGUgVGFibGVTZXR0aW5ncyA9IHtcbiAgbnVtYmVyT2ZUYWJsZWF1UGlsZXM6IG51bWJlcixcbiAgbnVtYmVyT2ZEcmF3UGlsZXM6IG51bWJlcixcbiAgY2FyZHM6IENhcmRbXVxufVxuXG5leHBvcnQgY2xhc3MgVGFibGVcbntcbiAgcHJpdmF0ZSBfc2V0dGluZ3M6VGFibGVTZXR0aW5ncztcbiAgcHJpdmF0ZSBfY2FyZHM6IENhcmRbXTtcbiAgcHJpdmF0ZSBfZGVja1BpbGU6UGlsZTtcbiAgcHJpdmF0ZSBfZHJhd1BpbGVzOlBpbGVbXTtcbiAgcHJpdmF0ZSBfdGFibGVhdVBpbGVzOlBpbGVbXTtcbiAgcHJpdmF0ZSBfZGlzY2FyZFBpbGVzOlBpbGVbXTtcbiAgcHJpdmF0ZSBfcGlsZXM6UGlsZVtdO1xuICBwcml2YXRlIF9hY3Rpb25IaXN0b3J5OlVuZG9hYmxlQWN0aW9uSGlzdG9yeTtcblxuICBjb25zdHJ1Y3RvciAoc2V0dGluZ3M6IFRhYmxlU2V0dGluZ3MpXG4gIHtcbiAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMuX2NhcmRzID0gc2V0dGluZ3MuY2FyZHM7XG4gICAgdGhpcy5fZGVja1BpbGUgPSBuZXcgUGlsZSh7bGFiZWw6ICdkZWNrJywgY2FyZHM6IHNldHRpbmdzLmNhcmRzfSk7XG4gICAgdGhpcy5fZHJhd1BpbGVzID0gQXJyYXkuZnJvbSh7bGVuZ3RoOnNldHRpbmdzLm51bWJlck9mRHJhd1BpbGVzfSkubWFwKChfLCBpKSA9PiBuZXcgUGlsZSh7bGFiZWw6IGBkcmF3JHtpfWAsIGNhcmRzOiBbXX0pKTtcbiAgICB0aGlzLl90YWJsZWF1UGlsZXMgPSBBcnJheS5mcm9tKHtsZW5ndGg6c2V0dGluZ3MubnVtYmVyT2ZUYWJsZWF1UGlsZXN9KS5tYXAoKF8sIGkpID0+IG5ldyBQaWxlKHtsYWJlbDogYHRhYmwke2l9YCwgY2FyZHM6IFtdfSkpO1xuICAgIHRoaXMuX2Rpc2NhcmRQaWxlcyA9IEFycmF5LmZyb20oe2xlbmd0aDpNYXRoLmZsb29yKHNldHRpbmdzLmNhcmRzLmxlbmd0aCAvIDEzKX0pLm1hcCgoXywgaSkgPT4gbmV3IFBpbGUoe2xhYmVsOiBgZGlzYyR7aX1gLCBjYXJkczogW119KSk7XG4gICAgdGhpcy5fcGlsZXMgPSBbdGhpcy5fZGVja1BpbGUsIC4uLnRoaXMuX2RyYXdQaWxlcywgLi4udGhpcy50YWJsZWF1UGlsZXMsIC4uLnRoaXMuX2Rpc2NhcmRQaWxlc107XG4gICAgdGhpcy5fYWN0aW9uSGlzdG9yeSA9IG5ldyBVbmRvYWJsZUFjdGlvbkhpc3RvcnkoKTtcbiAgfVxuXG4gIGdldCBjYXJkcyAoKVxuICB7XG4gICAgcmV0dXJuIFsuLi50aGlzLl9jYXJkc107XG4gIH1cblxuICBnZXQgcGlsZXMgKClcbiAge1xuICAgIHJldHVybiBbLi4udGhpcy5fcGlsZXNdO1xuICB9XG5cbiAgZ2V0UGlsZUJ5IChwcmVkaWNhdGU6KHA6UGlsZSkgPT4gYW55KVxuICB7XG4gICAgY29uc3QgcGlsZSA9IHRoaXMuX3BpbGVzLmZpbmQocHJlZGljYXRlKTtcbiAgICBpZiAoIXBpbGUpXG4gICAge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHBpbGUgZG9lc24ndCBleGlzdC5cIik7XG4gICAgfVxuICAgIHJldHVybiBwaWxlO1xuICB9XG5cbiAgZ2V0IGRlY2tQaWxlICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5fZGVja1BpbGU7XG4gIH1cblxuICBnZXQgZHJhd1BpbGVzICgpXG4gIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX2RyYXdQaWxlc107XG4gIH1cblxuICBnZXQgdGFibGVhdVBpbGVzICgpXG4gIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX3RhYmxlYXVQaWxlc107XG4gIH1cblxuICBnZXQgZGlzY2FyZFBpbGVzICgpXG4gIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX2Rpc2NhcmRQaWxlc107XG4gIH1cblxuICBnZXQgaXNDbGVhciAoKVxuICB7XG4gICAgcmV0dXJuICF0aGlzLl90YWJsZWF1UGlsZXMuZmluZChwID0+IHAuY2FyZHMubGVuZ3RoID4gMCk7XG4gIH1cblxuICBnZXRQb3NzaWJsZU1vdmVzQmV0d2VlblRhYmxlYXVQaWxlcyAoKVxuICB7XG4gICAgbGV0IG1vdmVzOntzaXplOm51bWJlciwgZnJvbTogUGlsZSwgdG86IFBpbGV9W10gPSBbXTtcblxuICAgIGZvciAobGV0IGZyb20gb2YgdGhpcy5fdGFibGVhdVBpbGVzKVxuICAgIHtcbiAgICAgIGNvbnN0IGRyYXdhYmxlQ2FyZHMgPSBmcm9tLmdldERlc2NlbmRpbmdJblN1aXRGcm9udENhcmRzKCk7XG4gICAgICBpZiAoZHJhd2FibGVDYXJkcy5sZW5ndGggPT09IDApIGNvbnRpbnVlO1xuXG4gICAgICBmb3IgKGxldCB0byBvZiB0aGlzLl90YWJsZWF1UGlsZXMpXG4gICAgICB7XG4gICAgICAgIGlmICh0byA9PT0gZnJvbSkgY29udGludWU7XG5cbiAgICAgICAgZm9yIChsZXQgc2l6ZSA9IGRyYXdhYmxlQ2FyZHMubGVuZ3RoOyBzaXplID4gMDsgc2l6ZS0tKVxuICAgICAgICB7XG4gICAgICAgICAgaWYgKHRvLmZyb250Q2FyZCAmJiAhUGlsZS5jaGVja0lmQ2FyZHNBcmVEZXNjZW5kaW5nKHtcbiAgICAgICAgICAgIGNhcmRzOiBbdG8uZnJvbnRDYXJkLCAuLi5kcmF3YWJsZUNhcmRzLnNsaWNlKC1zaXplKV0sXG4gICAgICAgICAgICBpblN1aXQ6IGZhbHNlLFxuICAgICAgICAgICAgZmFjZVVwOiB0cnVlXG4gICAgICAgICAgfSkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgbW92ZXMgPSBbLi4ubW92ZXMsIHtmcm9tLCB0bywgc2l6ZX1dO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vdmVzO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9tb3ZlQ2FyZEJldHdlZW5QaWxlcyAoe2Zyb20sIHRvLCBzaXplfTp7ZnJvbTpQaWxlLCB0bzpQaWxlLCBzaXplOm51bWJlcn0pXG4gIHtcbiAgICBpZiAoIXRoaXMuX3BpbGVzLmZpbmQocCA9PiBwID09PSBmcm9tKSlcbiAgICB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcImZyb21cIiBwaWxlIGlzIG5vdCBiZSBpbiB0aGlzIHRhYmxlLmApO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fcGlsZXMuZmluZChwID0+IHAgPT09IHRvKSlcbiAgICB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcInRvXCIgcGlsZSBpcyBub3QgYmUgaW4gdGhpcyB0YWJsZS5gKTtcbiAgICB9XG5cbiAgICBpZiAoZnJvbS5nZXRGcm9udENhcmRzKHtzaXplfSkubGVuZ3RoICE9PSBzaXplKVxuICAgIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBpbGUgXCIke2Zyb20uaWR9XCIgZG9lc24ndCBoYXZlICR7c2l6ZX0gY2FyZHMgdG8gZHJhdy5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYXJkcyA9IGZyb20uZHJhd0NhcmRzKHtzaXplfSk7XG4gICAgdG8ucGxhY2VDYXJkcyh7Y2FyZHN9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2RlYWxDYXJkc0Zyb21EZWNrVG9UYWJsZWF1UGlsZXMgKClcbiAge1xuICAgIGNvbnN0IG51bWJlck9mQ2FyZHMgPSB0aGlzLl9kZWNrUGlsZS5jYXJkcy5sZW5ndGg7XG4gICAgY29uc3QgbnVtYmVyT2ZEcmF3Q2FyZHMgPSB0aGlzLl9zZXR0aW5ncy5udW1iZXJPZlRhYmxlYXVQaWxlcyAqIHRoaXMuX3NldHRpbmdzLm51bWJlck9mRHJhd1BpbGVzO1xuXG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBudW1iZXJPZkNhcmRzIC0gbnVtYmVyT2ZEcmF3Q2FyZHM7IGluZGV4KyspXG4gICAge1xuICAgICAgY29uc3QgZnJvbSA9IHRoaXMuX2RlY2tQaWxlO1xuICAgICAgY29uc3QgdG8gPSB0aGlzLl90YWJsZWF1UGlsZXNbY291bnRlciAlIHRoaXMudGFibGVhdVBpbGVzLmxlbmd0aF07XG4gICAgICB0aGlzLl9tb3ZlQ2FyZEJldHdlZW5QaWxlcyh7ZnJvbSwgdG8sIHNpemU6IDF9KTtcbiAgICAgIGNvdW50ZXIgPSBjb3VudGVyICsgMTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9kZWFsQ2FyZHNGcm9tRGVja1RvRHJhd1BpbGVzICgpXG4gIHtcbiAgICAvLyBjb25zdCBudW1iZXJPZkRyYXdDYXJkcyA9IHRoaXMuX3NldHRpbmdzLm51bWJlck9mVGFibGVhdVBpbGVzICogdGhpcy5fc2V0dGluZ3MubnVtYmVyT2ZEcmF3UGlsZXM7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fc2V0dGluZ3MubnVtYmVyT2ZEcmF3UGlsZXM7IGluZGV4KyspXG4gICAge1xuICAgICAgY29uc3QgZnJvbSA9IHRoaXMuX2RlY2tQaWxlO1xuICAgICAgY29uc3QgdG8gPSB0aGlzLl9kcmF3UGlsZXNbaW5kZXhdO1xuICAgICAgdGhpcy5fbW92ZUNhcmRCZXR3ZWVuUGlsZXMoe2Zyb20sIHRvLCBzaXplOiB0aGlzLl9zZXR0aW5ncy5udW1iZXJPZlRhYmxlYXVQaWxlc30pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2ZsaXBVcFRhYmxlYXVGcm9udENhcmRzICgpXG4gIHtcbiAgICBmb3IgKGxldCB0YWJsZWF1UGlsZSBvZiB0aGlzLl90YWJsZWF1UGlsZXMpXG4gICAge1xuICAgICAgaWYgKHRhYmxlYXVQaWxlLmZyb250Q2FyZCkgdGhpcy5fZmFjZVVwQ2FyZCh7Y2FyZDogdGFibGVhdVBpbGUuZnJvbnRDYXJkfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZmFjZVVwQ2FyZCAoe2NhcmR9OntjYXJkOkNhcmR9KVxuICB7XG4gICAgaWYgKCFjYXJkLmlzRmFjZVVwKVxuICAgIHtcbiAgICAgIGNhcmQuZmFjZVVwKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRHYW1lICgpXG4gIHtcbiAgICB0aGlzLl9kZWFsQ2FyZHNGcm9tRGVja1RvVGFibGVhdVBpbGVzKCk7XG4gICAgdGhpcy5fZGVhbENhcmRzRnJvbURlY2tUb0RyYXdQaWxlcygpO1xuICAgIHRoaXMuX2ZsaXBVcFRhYmxlYXVGcm9udENhcmRzKCk7XG4gIH1cblxuICBtb3ZlQ2FyZEJldHdlZW5UYWJsZWF1UGlsZXMgKHtmcm9tLCB0bywgc2l6ZX06e2Zyb206UGlsZSwgdG86UGlsZSwgc2l6ZTpudW1iZXJ9KVxuICB7XG4gICAgaWYgKCF0aGlzLl90YWJsZWF1UGlsZXMuZmluZChwID0+IHAgPT09IGZyb20pKVxuICAgIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwiZnJvbVwiIHBpbGUgaXMgbm90IGEgdGFibGVhdSBwaWxlLmApO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fdGFibGVhdVBpbGVzLmZpbmQocCA9PiBwID09PSB0bykpXG4gICAge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJ0b1wiIHBpbGUgaXMgbm90IGEgdGFibGVhdSBwaWxlLmApO1xuICAgIH1cblxuICAgIGNvbnN0IGNhcmRzID0gZnJvbS5nZXRGcm9udENhcmRzKHtzaXplfSk7XG4gICAgaWYgKGNhcmRzLmxlbmd0aCAhPT0gc2l6ZSlcbiAgICB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwaWxlIFwiJHtmcm9tLmlkfVwiIGRvZXNuJ3QgaGF2ZSAke3NpemV9IGNhcmRzIHRvIGRyYXcuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRvLmZyb250Q2FyZCAmJiAhUGlsZS5jaGVja0lmQ2FyZHNBcmVEZXNjZW5kaW5nKHtcbiAgICAgIGNhcmRzOiBbdG8uZnJvbnRDYXJkLCAuLi5jYXJkc10sXG4gICAgICBpblN1aXQ6IGZhbHNlLFxuICAgICAgZmFjZVVwOiB0cnVlXG4gICAgfSkpXG4gICAge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgY2FuJ3QgcGxhY2UgdGhvc2UgY2FyZHMgdG8gdGhlIFwidG9cIiBwaWxlLmApO1xuICAgIH1cblxuICAgIHRoaXMuX21vdmVDYXJkQmV0d2VlblBpbGVzKHtmcm9tLCB0bywgc2l6ZX0pO1xuICAgIHRoaXMuX2FjdGlvbkhpc3RvcnkuYWRkKHtmcm9tLCB0bywgc2l6ZSwgdHlwZTogTU9WRV9DQVJEfSk7XG5cbiAgICBpZiAoZnJvbS5mcm9udENhcmQgJiYgIWZyb20uZnJvbnRDYXJkLmlzRmFjZVVwKSB7XG4gICAgICB0aGlzLl9mYWNlVXBDYXJkKHtjYXJkOiBmcm9tLmZyb250Q2FyZH0pO1xuICAgICAgdGhpcy5fYWN0aW9uSGlzdG9yeS5hZGQoe2NhcmQ6IGZyb20uZnJvbnRDYXJkLCB0eXBlOiBGQUNFX1VQX0NBUkR9KTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNjYXJkZWRQaWxlID0gdGhpcy5fZGlzY2FyZFBpbGVzLmZpbmQocCA9PiBwLmNhcmRzLmxlbmd0aCA9PT0gMCk7XG5cbiAgICBpZiAoIWRpc2NhcmRlZFBpbGUpXG4gICAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGFyZW4ndCBhbnkgZW1wdHkgZGlzY2FyZGVkIHBpbGVzLmApO1xuICAgIH1cblxuICAgIGlmICh0by5jaGVja0lmRnJvbnRDYXJkc0NvbXBsZXRlKCkpXG4gICAge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMzsgaSsrKVxuICAgICAge1xuICAgICAgICB0aGlzLl9tb3ZlQ2FyZEJldHdlZW5QaWxlcyh7XG4gICAgICAgICAgZnJvbTogdG8sXG4gICAgICAgICAgdG86IGRpc2NhcmRlZFBpbGUsXG4gICAgICAgICAgc2l6ZTogMVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fYWN0aW9uSGlzdG9yeS5hZGQoe1xuICAgICAgICAgIGZyb206IHRvLFxuICAgICAgICAgIHRvOiBkaXNjYXJkZWRQaWxlLFxuICAgICAgICAgIHNpemU6IDEsXG4gICAgICAgICAgdHlwZTogTU9WRV9DQVJEXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodG8uZnJvbnRDYXJkICYmICF0by5mcm9udENhcmQuaXNGYWNlVXApIHtcbiAgICAgICAgdGhpcy5fZmFjZVVwQ2FyZCh7Y2FyZDogdG8uZnJvbnRDYXJkfSk7XG4gICAgICAgIHRoaXMuX2FjdGlvbkhpc3RvcnkuYWRkKHtjYXJkOiB0by5mcm9udENhcmQsIHR5cGU6IEZBQ0VfVVBfQ0FSRH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2FjdGlvbkhpc3RvcnkuYWRkKHt0eXBlOiBQQVVTRX0pO1xuICB9XG5cbiAgZ2V0IGZyb250RHJhd1BpbGUgKClcbiAge1xuICAgIGxldCBkcmF3UGlsZTpQaWxlIHwgdW5kZWZpbmVkO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSB0aGlzLl9kcmF3UGlsZXMubGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSlcbiAgICB7XG4gICAgICBpZiAodGhpcy5fZHJhd1BpbGVzW2luZGV4XS5jYXJkcy5sZW5ndGggPT09IHRoaXMuX3NldHRpbmdzLm51bWJlck9mVGFibGVhdVBpbGVzKVxuICAgICAge1xuICAgICAgICBkcmF3UGlsZSA9IHRoaXMuX2RyYXdQaWxlc1tpbmRleF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkcmF3UGlsZTtcbiAgfVxuXG4gIGRlYWxDYXJkc0Zyb21EcmF3UGlsZSAoKVxuICB7XG4gICAgY29uc3QgZHJhd1BpbGUgPSB0aGlzLmZyb250RHJhd1BpbGU7XG5cbiAgICBpZiAoIWRyYXdQaWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIGFyZSBubyBjYXJkcyB0byBkcmF3IGZyb20gZHJhdyBwaWxlcy4nKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fdGFibGVhdVBpbGVzLmxlbmd0aDsgaW5kZXgrKylcbiAgICB7XG4gICAgICBjb25zdCB0YWJsZWF1UGlsZSA9IHRoaXMuX3RhYmxlYXVQaWxlc1tpbmRleF07XG4gICAgICB0aGlzLl9tb3ZlQ2FyZEJldHdlZW5QaWxlcyh7XG4gICAgICAgIGZyb206IGRyYXdQaWxlLFxuICAgICAgICB0bzogdGFibGVhdVBpbGUsXG4gICAgICAgIHNpemU6IDFcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fYWN0aW9uSGlzdG9yeS5hZGQoe1xuICAgICAgICBmcm9tOiBkcmF3UGlsZSxcbiAgICAgICAgdG86IHRhYmxlYXVQaWxlLFxuICAgICAgICBzaXplOiAxLFxuICAgICAgICB0eXBlOiBNT1ZFX0NBUkRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZvciAobGV0IHRhYmxlYXVQaWxlIG9mIHRoaXMuX3RhYmxlYXVQaWxlcylcbiAgICB7XG4gICAgICBpZiAodGFibGVhdVBpbGUuZnJvbnRDYXJkICYmICF0YWJsZWF1UGlsZS5mcm9udENhcmQuaXNGYWNlVXApIHtcbiAgICAgICAgdGhpcy5fZmFjZVVwQ2FyZCh7Y2FyZDp0YWJsZWF1UGlsZS5mcm9udENhcmR9KTtcbiAgICAgICAgdGhpcy5fYWN0aW9uSGlzdG9yeS5hZGQoe1xuICAgICAgICAgIGNhcmQ6IHRhYmxlYXVQaWxlLmZyb250Q2FyZCxcbiAgICAgICAgICB0eXBlOiBGQUNFX1VQX0NBUkRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aW9uSGlzdG9yeS5hZGQoe3R5cGU6IFBBVVNFfSk7XG4gIH1cblxuICB1bmRvICgpXG4gIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9hY3Rpb25IaXN0b3J5LmFjdGlvbnMubWFwKChhLCBpbmRleCwgXykgPT4ge1xuICAgIC8vICAgcmV0dXJuIChhLnR5cGUpO1xuICAgIC8vIH0pKTtcblxuICAgIGxvb3BEZWxldGVQYXVzZXM6IGZvciAoOzspXG4gICAge1xuICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5fYWN0aW9uSGlzdG9yeS5sYXRlc3Q7XG5cbiAgICAgIGlmICghYWN0aW9uKSBicmVhayBsb29wRGVsZXRlUGF1c2VzO1xuXG4gICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKVxuICAgICAge1xuICAgICAgICBjYXNlIFBBVVNFOlxuICAgICAgICAgIHRoaXMuX2FjdGlvbkhpc3RvcnkucmVtb3ZlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWsgbG9vcERlbGV0ZVBhdXNlcztcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGxvb3BFeGVjdXRlVW5kb0FjdGlvbnM6IGZvciAoOzspXG4gICAge1xuICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5fYWN0aW9uSGlzdG9yeS5sYXRlc3Q7XG5cbiAgICAgIGlmICghYWN0aW9uKSBicmVhayBsb29wRXhlY3V0ZVVuZG9BY3Rpb25zO1xuXG4gICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKVxuICAgICAge1xuICAgICAgICBjYXNlIEZBQ0VfVVBfQ0FSRDpcbiAgICAgICAgICBhY3Rpb24uY2FyZC5mYWNlRG93bigpO1xuICAgICAgICAgIHRoaXMuX2FjdGlvbkhpc3RvcnkucmVtb3ZlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgTU9WRV9DQVJEOlxuICAgICAgICAgIHRoaXMuX21vdmVDYXJkQmV0d2VlblBpbGVzKHtcbiAgICAgICAgICAgIGZyb206IGFjdGlvbi50byxcbiAgICAgICAgICAgIHRvOiBhY3Rpb24uZnJvbSxcbiAgICAgICAgICAgIHNpemU6IGFjdGlvbi5zaXplXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5fYWN0aW9uSGlzdG9yeS5yZW1vdmUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBQQVVTRTpcbiAgICAgICAgICB0aGlzLl9hY3Rpb25IaXN0b3J5LnJlbW92ZSgpO1xuICAgICAgICAgIGJyZWFrIGxvb3BFeGVjdXRlVW5kb0FjdGlvbnM7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHRvU3RyaW5nKClcbiAge1xuICAgIHJldHVybiB0aGlzLl9waWxlcy5tYXAocCA9PiBwLmxhYmVsICsgXCIgXCIgKyBwLnRvU3RyaW5nKCkpLmpvaW4oJ1xcbicpO1xuICB9XG59XG4iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XG5pbXBvcnQge1BpbGV9IGZyb20gJy4vcGlsZSc7XG5cbmV4cG9ydCBjb25zdCBGQUNFX1VQX0NBUkQgPSAnRkFDRV9VUF9DQVJEJztcbmV4cG9ydCBjb25zdCBNT1ZFX0NBUkQgPSAnTU9WRV9DQVJEJztcbmV4cG9ydCBjb25zdCBQQVVTRSA9ICdQQVVTRSc7XG5cbmludGVyZmFjZSBGYWNlVXBBY3Rpb24ge1xuICB0eXBlOiB0eXBlb2YgRkFDRV9VUF9DQVJELFxuICBjYXJkOiBDYXJkXG59XG5cbmludGVyZmFjZSBNb3ZlQ2FyZEFjdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBNT1ZFX0NBUkQsXG4gIGZyb206UGlsZSxcbiAgdG86UGlsZSxcbiAgc2l6ZTpudW1iZXJcbn1cblxuaW50ZXJmYWNlIFBhdXNlQWN0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFBBVVNFXG59XG5cbmV4cG9ydCB0eXBlIFVuZG9hYmxlQWN0aW9uID0gRmFjZVVwQWN0aW9uIHwgTW92ZUNhcmRBY3Rpb24gfCBQYXVzZUFjdGlvbjtcblxuZXhwb3J0IGNsYXNzIFVuZG9hYmxlQWN0aW9uSGlzdG9yeVxue1xuICBwcml2YXRlIF9hY3Rpb25zOlVuZG9hYmxlQWN0aW9uW10gPSBbXTtcblxuICBhZGQgKGFjdGlvbjpVbmRvYWJsZUFjdGlvbilcbiAge1xuICAgIHRoaXMuX2FjdGlvbnMgPSBbLi4udGhpcy5fYWN0aW9ucywgYWN0aW9uXTtcbiAgfVxuXG4gIHJlbW92ZSAoKVxuICB7XG4gICAgdGhpcy5fYWN0aW9ucyA9IHRoaXMuX2FjdGlvbnMuc2xpY2UoMCwgLTEpO1xuICB9XG5cbiAgZ2V0IGxhdGVzdCAoKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGlvbnMubGVuZ3RoID09PSAwID8gdW5kZWZpbmVkIDogdGhpcy5fYWN0aW9uc1t0aGlzLl9hY3Rpb25zLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgZ2V0IGFjdGlvbnMgKClcbiAge1xuICAgIHJldHVybiBbLi4udGhpcy5fYWN0aW9uc107XG4gIH1cbn1cbiIsImltcG9ydCB7RW1pdHRlcn0gZnJvbSAnLi4vZXZlbnQtZW1pdHRlcic7XG5pbXBvcnQge1Byb21pc2VRdWV1ZUV2ZW50c30gZnJvbSAnLi9ldmVudHMnO1xuXG5jbGFzcyBEZWZlcnJlZDxUPiAge1xuXG4gIHByaXZhdGUgX2NyZWF0ZVByb21pc2U6ICgpID0+IFByb21pc2U8VD47XG4gIHByaXZhdGUgX3Byb21pc2U6IFByb21pc2U8VD4gfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX2NhbGxiYWNrOiAoKSA9PiB2b2lkID0gKCkgPT4ge307XG4gIHByaXZhdGUgX2lzRG9uZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yICh7XG4gICAgY3JlYXRlUHJvbWlzZVxuICB9OntcbiAgICBjcmVhdGVQcm9taXNlOiAoKSA9PiBQcm9taXNlPFQ+XG4gIH0pXG4gIHtcbiAgICB0aGlzLl9jcmVhdGVQcm9taXNlID0gY3JlYXRlUHJvbWlzZTtcbiAgfVxuXG4gIHByb2Nlc3MgKClcbiAge1xuICAgIGlmICghdGhpcy5fcHJvbWlzZSlcbiAgICB7XG4gICAgICB0aGlzLl9wcm9taXNlID0gdGhpcy5fY3JlYXRlUHJvbWlzZSgpO1xuICAgICAgdGhpcy5fcHJvbWlzZS5jYXRjaCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQcm9taXNlIHJlamVjdGVkIVwiKTtcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLl9pc0RvbmUgPSB0cnVlO1xuICAgICAgICB0aGlzLl9jYWxsYmFjaygpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgc2V0IGRvbmVDYWxsYmFjayAoY2FsbGJhY2s6ICgpID0+IHZvaWQpXG4gIHtcbiAgICB0aGlzLl9jYWxsYmFjayA9IGNhbGxiYWNrO1xuICB9XG5cbiAgZ2V0IGlzRG9uZSAoKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuX2lzRG9uZTtcbiAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBQcm9taXNlUXVldWU8VD5cbntcbiAgcHJpdmF0ZSBfbGF0ZXN0RGVmZXJyZWQ6RGVmZXJyZWQ8VD4gfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX2VtaXR0ZXI6IEVtaXR0ZXI8UHJvbWlzZVF1ZXVlRXZlbnRzPiA9IG5ldyBFbWl0dGVyPFByb21pc2VRdWV1ZUV2ZW50cz4oKTtcblxuICBnZXQgaXNQcm9jZXNzaW5nICgpIHtcbiAgICByZXR1cm4gKHRoaXMuX2xhdGVzdERlZmVycmVkICYmICF0aGlzLl9sYXRlc3REZWZlcnJlZC5pc0RvbmUpIGFzIGJvb2xlYW47XG4gIH1cblxuICBhZGQgKGNyZWF0ZVByb21pc2U6ICgpID0+IFByb21pc2U8VD4pXG4gIHtcbiAgICBpZiAoIXRoaXMuX2xhdGVzdERlZmVycmVkIHx8IHRoaXMuX2xhdGVzdERlZmVycmVkLmlzRG9uZSlcbiAgICB7XG4gICAgICB0aGlzLl9sYXRlc3REZWZlcnJlZCA9IG5ldyBEZWZlcnJlZCh7Y3JlYXRlUHJvbWlzZX0pO1xuICAgICAgdGhpcy5fZW1pdHRlci5lbWl0KFwiUVVFVUVfUFJPQ0VTU19TVEFSVFwiLCB7fSk7XG4gICAgICB0aGlzLl9sYXRlc3REZWZlcnJlZC5kb25lQ2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICAgIHRoaXMuX2VtaXR0ZXIuZW1pdChcIlFVRVVFX1BST0NFU1NfRU5EXCIsIHt9KTtcbiAgICAgIH07XG4gICAgICB0aGlzLl9sYXRlc3REZWZlcnJlZC5wcm9jZXNzKCk7XG4gICAgfVxuICAgIGVsc2VcbiAgICB7XG4gICAgICBjb25zdCBkZWZlcnJlZCA9IG5ldyBEZWZlcnJlZCh7Y3JlYXRlUHJvbWlzZX0pO1xuICAgICAgdGhpcy5fbGF0ZXN0RGVmZXJyZWQuZG9uZUNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICBkZWZlcnJlZC5wcm9jZXNzKCk7XG4gICAgICB9O1xuICAgICAgZGVmZXJyZWQuZG9uZUNhbGxiYWNrID0gKCkgPT4ge1xuICAgICAgICB0aGlzLl9lbWl0dGVyLmVtaXQoXCJRVUVVRV9QUk9DRVNTX0VORFwiLCB7fSk7XG4gICAgICB9O1xuICAgICAgdGhpcy5fbGF0ZXN0RGVmZXJyZWQgPSBkZWZlcnJlZDtcbiAgICB9XG4gIH1cblxuICBvblN0YXJ0IChjYWxsYmFjazogKCkgPT4gdm9pZClcbiAge1xuICAgIHRoaXMuX2VtaXR0ZXIub24oJ1FVRVVFX1BST0NFU1NfU1RBUlQnLCBjYWxsYmFjayk7XG4gIH1cblxuICBvbkNvbXBsZXRlIChjYWxsYmFjazogKCkgPT4gdm9pZClcbiAge1xuICAgIHRoaXMuX2VtaXR0ZXIub24oJ1FVRVVFX1BST0NFU1NfRU5EJywgY2FsbGJhY2spO1xuICB9XG59XG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gXCJwaGFzZXJcIjtcbmltcG9ydCB7VGFibGVHYW1lT2JqZWN0V2l0aEV2ZW50IGFzIFRhYmxlR2FtZU9iamVjdH0gZnJvbSAnLi4vZ2FtZS1vYmplY3RzLXdpdGgtZXZlbnRzL3RhYmxlJztcbi8vIGltcG9ydCB7UGlsZUdhbWVPYmplY3RXaXRoRXZlbnQgYXMgUGlsZUdhbWVPYmplY3R9IGZyb20gJy4uL2dhbWUtb2JqZWN0cy13aXRoLWV2ZW50cy9waWxlJztcbmltcG9ydCB7Q2FyZEdhbWVPYmplY3RXaXRoRXZlbnQgYXMgQ2FyZEdhbWVPYmplY3R9IGZyb20gJy4uL2dhbWUtb2JqZWN0cy13aXRoLWV2ZW50cy9jYXJkJztcbmltcG9ydCB7ZW1pdHRlciBhcyBnYW1lT2JqZWN0RXZlbnRFbWl0dGVyfSBmcm9tICcuLi9nYW1lLW9iamVjdHMtd2l0aC1ldmVudHMvZW1pdHRlcic7XG5pbXBvcnQge0J1dHRvbn0gZnJvbSAnLi4vZ2FtZS1vYmplY3RzL2J1dHRvbic7XG5pbXBvcnQge0NhcmRXaXRoRXZlbnQgYXMgQ2FyZH0gZnJvbSAnLi4vbW9kZWxzLXdpdGgtZXZlbnRzL2NhcmQnO1xuaW1wb3J0IHtQaWxlV2l0aEV2ZW50IGFzIFBpbGV9IGZyb20gJy4uL21vZGVscy13aXRoLWV2ZW50cy9waWxlJztcbmltcG9ydCB7VGFibGVXaXRoRXZlbnQgYXMgVGFibGV9IGZyb20gJy4uL21vZGVscy13aXRoLWV2ZW50cy90YWJsZSc7XG5pbXBvcnQge2NyZWF0ZUNhcmRzV2l0aEV2ZW50cyBhcyBjcmVhdGVDYXJkc30gZnJvbSAnLi4vbW9kZWxzLXdpdGgtZXZlbnRzL2NyZWF0ZS1jYXJkcyc7XG5pbXBvcnQge3JhbmRvbWl6ZUFycmF5fSBmcm9tICcuLi9tb2RlbHMvY3JlYXRlLWNhcmRzJztcbmltcG9ydCB7ZW1pdHRlciBhcyBtb2RlbEV2ZW50RW1pdHRlcn0gZnJvbSAnLi4vbW9kZWxzLXdpdGgtZXZlbnRzL2VtaXR0ZXInO1xuaW1wb3J0IHtQcm9taXNlUXVldWV9IGZyb20gJy4uL3Byb21pc2UtcXVldWUnO1xuLy8gaW1wb3J0IHtkZWJvdW5jZX0gZnJvbSAndW5kZXJzY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5TY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZVxue1xuICBwcml2YXRlIF9fdGFibGU6VGFibGUgfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX190YWJsZUdhbWVPYmplY3Q6VGFibGVHYW1lT2JqZWN0IHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIF9jYXJkQW5pbWF0aW9uQmV0d2VlblBpbGVzUXVldWU6UHJvbWlzZVF1ZXVlPHZvaWQ+ID0gbmV3IFByb21pc2VRdWV1ZTx2b2lkPigpO1xuICBwcml2YXRlIF9kcmFnUGlsZUFuaW1hdGlvblF1ZXVlOlByb21pc2VRdWV1ZTx2b2lkPiA9IG5ldyBQcm9taXNlUXVldWU8dm9pZD4oKTtcblxuICBjb25zdHJ1Y3RvciAoKSB7XG4gICAgc3VwZXIoJ21haW4nKTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF90YWJsZSAoKSB7XG4gICAgaWYgKCF0aGlzLl9fdGFibGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGFibGUgaXMgbm90IHJlYWR5LicpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fX3RhYmxlO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3RhYmxlR2FtZU9iamVjdCAoKSB7XG4gICAgaWYgKCF0aGlzLl9fdGFibGVHYW1lT2JqZWN0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RhYmxlIEdhbWUgT2JqZWN0IGlzIG5vdCByZWFkeS4nKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX190YWJsZUdhbWVPYmplY3Q7XG4gIH1cblxuICBhc3luYyBjcmVhdGUgKClcbiAge1xuICAgIHRoaXMuX190YWJsZSA9IG5ldyBUYWJsZSh7XG4gICAgICBudW1iZXJPZlRhYmxlYXVQaWxlczogNixcbiAgICAgIG51bWJlck9mRHJhd1BpbGVzOiAzLFxuICAgICAgY2FyZHM6IGNyZWF0ZUNhcmRzKHtcbiAgICAgICAgbnVtYmVyT2ZEZWNrc1VzZWQ6IDIsXG4gICAgICAgIG51bWJlck9mU3VpdHM6IDFcbiAgICAgIH0pXG4gICAgfSk7XG5cbiAgICB0aGlzLl9fdGFibGVHYW1lT2JqZWN0ID0gbmV3IFRhYmxlR2FtZU9iamVjdCh7XG4gICAgICBzY2VuZTogdGhpcyxcbiAgICAgIGRlY2tQaWxlSWQ6IHRoaXMuX3RhYmxlLmRlY2tQaWxlLmlkLFxuICAgICAgZHJhd1BpbGVzSWRzOiB0aGlzLl90YWJsZS5kcmF3UGlsZXMubWFwKHAgPT4gcC5pZCksXG4gICAgICB0YWJsZWF1UGlsZXNJZHM6IHRoaXMuX3RhYmxlLnRhYmxlYXVQaWxlcy5tYXAocCA9PiBwLmlkKSxcbiAgICAgIGRpc2NhcmRQaWxlc0lkczogdGhpcy5fdGFibGUuZGlzY2FyZFBpbGVzLm1hcChwID0+IHAuaWQpLFxuICAgICAgZHJhZ1BpbGVJZDogXCJkcmFnLXBpbGVcIixcbiAgICAgIGNhcmRHYW1lT2JqZWN0czogdGhpcy5fdGFibGUuY2FyZHMubWFwKGNhcmQgPT4gbmV3IENhcmRHYW1lT2JqZWN0KHtcbiAgICAgICAgc2NlbmU6IHRoaXMsXG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIHN1aXQ6IGNhcmQuc3VpdCxcbiAgICAgICAgcmFuazogY2FyZC5yYW5rLFxuICAgICAgICBuYW1lOiBjYXJkLmlkXG4gICAgICB9KSlcbiAgICB9KTtcblxuICAgIHRoaXMuY2hpbGRyZW4uYWRkKHRoaXMuX3RhYmxlR2FtZU9iamVjdCk7XG5cbiAgICBjb25zdCB1bmRvQnV0dG9uID0gbmV3IEJ1dHRvbih7XG4gICAgICBzY2VuZTogdGhpcyxcbiAgICAgIHg6IDEwMCxcbiAgICAgIHk6IDYwMCxcbiAgICAgIGxhYmVsOiAnVU5ETydcbiAgICB9KTtcbiAgICB1bmRvQnV0dG9uLm9uKCdwb2ludGVyZG93bicsICgpID0+IHtcbiAgICAgIHRoaXMuX3RhYmxlLnVuZG8oKTtcbiAgICB9KTtcbiAgICB0aGlzLmNoaWxkcmVuLmFkZCh1bmRvQnV0dG9uKTtcbiAgICB0aGlzLl9jYXJkQW5pbWF0aW9uQmV0d2VlblBpbGVzUXVldWUub25TdGFydCgoKSA9PiB7XG4gICAgICB1bmRvQnV0dG9uLnNldEFjdGl2ZShmYWxzZSk7XG4gICAgICB1bmRvQnV0dG9uLnNldEFscGhhKDAuNSk7XG4gICAgfSk7XG4gICAgdGhpcy5fY2FyZEFuaW1hdGlvbkJldHdlZW5QaWxlc1F1ZXVlLm9uQ29tcGxldGUoKCkgPT4ge1xuICAgICAgdW5kb0J1dHRvbi5zZXRBY3RpdmUodHJ1ZSk7XG4gICAgICB1bmRvQnV0dG9uLnNldEFscGhhKDEpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgaGludEJ1dHRvbiA9IG5ldyBCdXR0b24oe1xuICAgICAgc2NlbmU6IHRoaXMsXG4gICAgICB4OiAyNTAsXG4gICAgICB5OiA2MDAsXG4gICAgICBsYWJlbDogJ0hJTlQnXG4gICAgfSk7XG4gICAgaGludEJ1dHRvbi5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyh0aGlzLl90YWJsZS5nZXRQb3NzaWJsZU1vdmVzQmV0d2VlblRhYmxlYXVQaWxlcygpKTtcbiAgICB9KTtcbiAgICB0aGlzLmNoaWxkcmVuLmFkZChoaW50QnV0dG9uKTtcbiAgICB0aGlzLl9jYXJkQW5pbWF0aW9uQmV0d2VlblBpbGVzUXVldWUub25TdGFydCgoKSA9PiB7XG4gICAgICBoaW50QnV0dG9uLnNldEFjdGl2ZShmYWxzZSk7XG4gICAgICBoaW50QnV0dG9uLnNldEFscGhhKDAuNSk7XG4gICAgfSk7XG4gICAgdGhpcy5fY2FyZEFuaW1hdGlvbkJldHdlZW5QaWxlc1F1ZXVlLm9uQ29tcGxldGUoKCkgPT4ge1xuICAgICAgaGludEJ1dHRvbi5zZXRBY3RpdmUodHJ1ZSk7XG4gICAgICBoaW50QnV0dG9uLnNldEFscGhhKDEpO1xuICAgIH0pO1xuXG4gICAgZ2FtZU9iamVjdEV2ZW50RW1pdHRlci5vbihcIkNBUkRfUE9JTlRFUk9WRVJcIiwgdGhpcy5vbkNhcmRQb2ludGVyT3Zlci5iaW5kKHRoaXMpKTtcbiAgICBnYW1lT2JqZWN0RXZlbnRFbWl0dGVyLm9uKFwiQ0FSRF9QT0lOVEVST1VUXCIsIHRoaXMub25DYXJkUG9pbnRlck91dC5iaW5kKHRoaXMpKTtcbiAgICBnYW1lT2JqZWN0RXZlbnRFbWl0dGVyLm9uKFwiQ0FSRF9QT0lOVEVSRE9XTlwiLCB0aGlzLm9uQ2FyZFBvaW50ZXJEb3duLmJpbmQodGhpcykpO1xuICAgIGdhbWVPYmplY3RFdmVudEVtaXR0ZXIub24oXCJDQVJEX0RSQUdTVEFSVFwiLCB0aGlzLm9uQ2FyZERyYWdTdGFydC5iaW5kKHRoaXMpKTtcbiAgICBnYW1lT2JqZWN0RXZlbnRFbWl0dGVyLm9uKFwiQ0FSRF9EUkFHXCIsIHRoaXMub25DYXJkRHJhZy5iaW5kKHRoaXMpKTtcbiAgICBnYW1lT2JqZWN0RXZlbnRFbWl0dGVyLm9uKFwiQ0FSRF9EUk9QXCIsIHRoaXMub25DYXJkRHJvcC5iaW5kKHRoaXMpKTtcbiAgICBnYW1lT2JqZWN0RXZlbnRFbWl0dGVyLm9uKFwiQ0FSRF9EUkFHRU5EXCIsIHRoaXMub25DYXJkRHJhZ0VuZC5iaW5kKHRoaXMpKTtcbiAgICBtb2RlbEV2ZW50RW1pdHRlci5vbihcIk1PVkVfQ0FSRFNfQkVUV0VFTl9QSUxFU1wiLCB0aGlzLm9uTW92ZUNhcmRzQmV0d2VlblBpbGVzLmJpbmQodGhpcykpO1xuICAgIG1vZGVsRXZlbnRFbWl0dGVyLm9uKFwiRkxJUF9PVkVSX0NBUkRcIiwgdGhpcy5vbkZsaXBPdmVyQ2FyZC5iaW5kKHRoaXMpKTtcblxuICAgIHRoaXMuX3RhYmxlLnN0YXJ0R2FtZSgpO1xuXG5cblxuICAgIC8vIHRoaXMuaW5wdXQuYWRkTGlzdGVuZXIoJ3BvaW50ZXJvdXQnLCAoKSA9PiB7XG4gICAgLy8gICBjb25zb2xlLmxvZyg2NjY2Nik7XG4gICAgLy8gfSlcbiAgfVxuXG4gIG9uQ2FyZFBvaW50ZXJPdmVyICh7Y2FyZEdhbWVPYmplY3QsIHBvaW50ZXJ9OntjYXJkR2FtZU9iamVjdDpDYXJkR2FtZU9iamVjdCwgcG9pbnRlcjpQaGFzZXIuSW5wdXQuUG9pbnRlcn0pXG4gIHtcbiAgICBpZiAoIXRoaXMuX2NhcmRBbmltYXRpb25CZXR3ZWVuUGlsZXNRdWV1ZS5pc1Byb2Nlc3NpbmcpIHtcbiAgICAgIHRoaXMuYWRkSGlnaGxpZ2h0VG9DYXJkR2FtZU9iamVjdCh7Y2FyZEdhbWVPYmplY3R9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5fY2FyZEFuaW1hdGlvbkJldHdlZW5QaWxlc1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XG4gICAgICAgIGlmKHRoaXMuaW5wdXQuaGl0VGVzdFBvaW50ZXIocG9pbnRlcilbMF0gPT09IGNhcmRHYW1lT2JqZWN0KSB7XG4gICAgICAgICAgdGhpcy5hZGRIaWdobGlnaHRUb0NhcmRHYW1lT2JqZWN0KHtjYXJkR2FtZU9iamVjdH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBhZGRIaWdobGlnaHRUb0NhcmRHYW1lT2JqZWN0ICh7Y2FyZEdhbWVPYmplY3R9OntjYXJkR2FtZU9iamVjdDpDYXJkR2FtZU9iamVjdH0pXG4gIHtcbiAgICBjb25zdCB0YXJnZXRQaWxlID0gdGhpcy5fdGFibGUuZ2V0UGlsZUJ5KHBpbGUgPT4gcGlsZS5jYXJkcy5maW5kKGNhcmQgPT4gY2FyZC5pZCA9PT0gY2FyZEdhbWVPYmplY3QubmFtZSkpO1xuXG4gICAgaWYgKGNhcmRHYW1lT2JqZWN0LmlzRmFjZVVwXG4gICAgICAmJiB0aGlzLl90YWJsZS50YWJsZWF1UGlsZXMuaW5jbHVkZXModGFyZ2V0UGlsZSkpXG4gICAge1xuICAgICAgY29uc3QgZnJvbVBpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnkocCA9PiBwLm5hbWUgPT09IHRhcmdldFBpbGUuaWQpO1xuICAgICAgY29uc3Qgc2l6ZSA9IGZyb21QaWxlR2FtZU9iamVjdC5jYXJkR2FtZU9iamVjdHMubGVuZ3RoIC0gZnJvbVBpbGVHYW1lT2JqZWN0LmNhcmRHYW1lT2JqZWN0cy5pbmRleE9mKGNhcmRHYW1lT2JqZWN0KTtcblxuICAgICAgaWYgKFBpbGUuY2hlY2tJZkNhcmRzQXJlRGVzY2VuZGluZyh7Y2FyZHM6IHRhcmdldFBpbGUuY2FyZHMuc2xpY2UoLXNpemUpLCBmYWNlVXA6IHRydWUsIGluU3VpdDogdHJ1ZX0pKVxuICAgICAge1xuICAgICAgICBjYXJkR2FtZU9iamVjdC5hZGRIaWdobGlnaHQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5fdGFibGUuZnJvbnREcmF3UGlsZSA9PT0gdGFyZ2V0UGlsZSlcbiAgICB7XG4gICAgICBjYXJkR2FtZU9iamVjdC5hZGRIaWdobGlnaHQoKTtcbiAgICB9XG4gIH1cblxuICBvbkNhcmRQb2ludGVyT3V0ICh7Y2FyZEdhbWVPYmplY3R9OntjYXJkR2FtZU9iamVjdDpDYXJkR2FtZU9iamVjdH0pXG4gIHtcbiAgICBjYXJkR2FtZU9iamVjdC5yZW1vdmVIaWdobGlnaHQoKTtcbiAgfVxuXG4gIG9uQ2FyZFBvaW50ZXJEb3duICh7Y2FyZEdhbWVPYmplY3R9OntjYXJkR2FtZU9iamVjdDpDYXJkR2FtZU9iamVjdH0pXG4gIHtcbiAgICBpZiAoIWNhcmRHYW1lT2JqZWN0LmlzSGlnaExpZ2h0ZWQpIHJldHVybjtcblxuICAgIGNvbnN0IHRhcmdldFBpbGUgPSB0aGlzLl90YWJsZS5nZXRQaWxlQnkocGlsZSA9PiBwaWxlLmNhcmRzLmZpbmQoY2FyZCA9PiBjYXJkLmlkID09PSBjYXJkR2FtZU9iamVjdC5uYW1lKSk7XG5cbiAgICBpZiAodGhpcy5fdGFibGUuZnJvbnREcmF3UGlsZSA9PT0gdGFyZ2V0UGlsZSlcbiAgICB7XG4gICAgICB0aGlzLl90YWJsZS5kZWFsQ2FyZHNGcm9tRHJhd1BpbGUoKTtcbiAgICB9XG4gIH1cblxuICBvbkNhcmREcmFnU3RhcnQgKHtjYXJkR2FtZU9iamVjdH06e2NhcmRHYW1lT2JqZWN0OkNhcmRHYW1lT2JqZWN0fSlcbiAge1xuICAgIGlmICghY2FyZEdhbWVPYmplY3QuaXNIaWdoTGlnaHRlZCkgcmV0dXJuO1xuXG4gICAgY29uc3QgdGFyZ2V0UGlsZSA9IHRoaXMuX3RhYmxlLmdldFBpbGVCeShwaWxlID0+IHBpbGUuY2FyZHMuZmluZChjYXJkID0+IGNhcmQuaWQgPT09IGNhcmRHYW1lT2JqZWN0Lm5hbWUpKTtcbiAgICBjb25zdCBkcmFnUGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZHJhZ1BpbGVHYW1lT2JqZWN0O1xuXG4gICAgaWYgKGNhcmRHYW1lT2JqZWN0LmlzRmFjZVVwXG4gICAgICAmJiB0aGlzLl90YWJsZS50YWJsZWF1UGlsZXMuaW5jbHVkZXModGFyZ2V0UGlsZSlcbiAgICAgICYmICFkcmFnUGlsZUdhbWVPYmplY3QuYWN0aXZlKVxuICAgIHtcbiAgICAgIGNvbnN0IGZyb21QaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5nZXRQaWxlR2FtZU9iamVjdEJ5KHAgPT4gcC5uYW1lID09PSB0YXJnZXRQaWxlLmlkKTtcbiAgICAgIGNvbnN0IHNpemUgPSBmcm9tUGlsZUdhbWVPYmplY3QuY2FyZEdhbWVPYmplY3RzLmxlbmd0aCAtIGZyb21QaWxlR2FtZU9iamVjdC5jYXJkR2FtZU9iamVjdHMuaW5kZXhPZihjYXJkR2FtZU9iamVjdCk7XG5cbiAgICAgIGlmIChQaWxlLmNoZWNrSWZDYXJkc0FyZURlc2NlbmRpbmcoe2NhcmRzOiB0YXJnZXRQaWxlLmNhcmRzLnNsaWNlKC1zaXplKSwgZmFjZVVwOiB0cnVlLCBpblN1aXQ6IHRydWV9KSlcbiAgICAgIHtcbiAgICAgICAgY29uc3QgZHJhZ1BpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmRyYWdQaWxlR2FtZU9iamVjdDtcbiAgICAgICAgY29uc3QgeSA9IGNhcmRHYW1lT2JqZWN0Lnk7XG4gICAgICAgIGRyYWdQaWxlR2FtZU9iamVjdC5zZXRBY3RpdmUodHJ1ZSk7XG4gICAgICAgIHRoaXMuX3RhYmxlR2FtZU9iamVjdC5icmluZ1RvVG9wKGRyYWdQaWxlR2FtZU9iamVjdCk7XG4gICAgICAgIGRyYWdQaWxlR2FtZU9iamVjdC54ID0gZnJvbVBpbGVHYW1lT2JqZWN0Lng7XG4gICAgICAgIGRyYWdQaWxlR2FtZU9iamVjdC55ID0gZnJvbVBpbGVHYW1lT2JqZWN0LnkgKyB5O1xuICAgICAgICBkcmFnUGlsZUdhbWVPYmplY3QucGxhY2VDYXJkR2FtZU9iamVjdHMoe2NhcmRHYW1lT2JqZWN0czogZnJvbVBpbGVHYW1lT2JqZWN0LmRyYXdGcm9udENhcmRHYW1lT2JqZWN0cyh7c2l6ZX0pfSk7XG4gICAgICAgIHRoaXMuX2RyYWdQaWxlQW5pbWF0aW9uUXVldWUuYWRkKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBkcmFnUGlsZUdhbWVPYmplY3QuYWRqdXN0Q2FyZEdhbWVPYmplY3RQb3NpdGlvbnNXaXRoQW5pbWF0aW9uKCksXG4gICAgICAgICAgICBkcmFnUGlsZUdhbWVPYmplY3QuZXhwYW5kV2l0aEFuaW1hdGlvbigpXG4gICAgICAgICAgXSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DYXJkRHJhZyAoe3BvaW50ZXIsIGNhcmRHYW1lT2JqZWN0fTp7cG9pbnRlcjpQaGFzZXIuSW5wdXQuUG9pbnRlciwgY2FyZEdhbWVPYmplY3Q6Q2FyZEdhbWVPYmplY3R9KVxuICB7XG4gICAgaWYgKCFjYXJkR2FtZU9iamVjdC5pc0hpZ2hMaWdodGVkKSByZXR1cm47XG5cbiAgICBjb25zdCB0YXJnZXRQaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5nZXRQaWxlR2FtZU9iamVjdEJ5KHBpbGUgPT4gcGlsZS5jYXJkR2FtZU9iamVjdHMuZmluZChjYXJkID0+IGNhcmQgPT09IGNhcmRHYW1lT2JqZWN0KSk7XG5cbiAgICBjb25zdCBkcmFnUGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZHJhZ1BpbGVHYW1lT2JqZWN0O1xuICAgIGlmICh0YXJnZXRQaWxlR2FtZU9iamVjdCA9PT0gZHJhZ1BpbGVHYW1lT2JqZWN0ICYmIGRyYWdQaWxlR2FtZU9iamVjdC5hY3RpdmUpXG4gICAge1xuICAgICAgY29uc3QgZGVsdGFYID0gcG9pbnRlci54IC0gcG9pbnRlci5wcmV2UG9zaXRpb24ueDtcbiAgICAgIGNvbnN0IGRlbHRhWSA9IHBvaW50ZXIueSAtIHBvaW50ZXIucHJldlBvc2l0aW9uLnk7XG4gICAgICBkcmFnUGlsZUdhbWVPYmplY3QueCArPSBkZWx0YVg7XG4gICAgICBkcmFnUGlsZUdhbWVPYmplY3QueSArPSBkZWx0YVk7XG4gICAgfVxuICB9XG5cbiAgb25DYXJkRHJvcCAoe3pvbmUsIGNhcmRHYW1lT2JqZWN0fTp7em9uZTpQaGFzZXIuR2FtZU9iamVjdHMuWm9uZSwgY2FyZEdhbWVPYmplY3Q6Q2FyZEdhbWVPYmplY3R9KVxuICB7XG4gICAgY29uc3QgdGFyZ2V0UGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZ2V0UGlsZUdhbWVPYmplY3RCeShwaWxlID0+IHBpbGUuY2FyZEdhbWVPYmplY3RzLmZpbmQoY2FyZCA9PiBjYXJkID09PSBjYXJkR2FtZU9iamVjdCkpO1xuICAgIGNvbnN0IGRyYWdQaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5kcmFnUGlsZUdhbWVPYmplY3Q7XG4gICAgaWYgKHRhcmdldFBpbGVHYW1lT2JqZWN0ID09PSBkcmFnUGlsZUdhbWVPYmplY3QgJiYgZHJhZ1BpbGVHYW1lT2JqZWN0LmFjdGl2ZSlcbiAgICB7XG4gICAgICBjb25zdCBmcm9tUGlsZSA9IHRoaXMuX3RhYmxlLmdldFBpbGVCeShwaWxlID0+IHBpbGUuY2FyZHMuZmluZChjYXJkID0+IGNhcmQuaWQgPT09IGNhcmRHYW1lT2JqZWN0Lm5hbWUpKTtcbiAgICAgIGNvbnN0IGZyb21QaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5nZXRQaWxlR2FtZU9iamVjdEJ5KHAgPT4gcC5uYW1lID09PSBmcm9tUGlsZS5pZCk7XG4gICAgICBjb25zdCB0b1BpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnkocCA9PiBwLnpvbmUgPT09IHpvbmUpO1xuICAgICAgY29uc3QgdG9QaWxlID0gdGhpcy5fdGFibGUuZ2V0UGlsZUJ5KHBpbGUgPT4gdG9QaWxlR2FtZU9iamVjdC5uYW1lID09PSBwaWxlLmlkKTtcbiAgICAgIGNvbnN0IHNpemUgPSBkcmFnUGlsZUdhbWVPYmplY3QuY2FyZEdhbWVPYmplY3RzLmxlbmd0aDtcbiAgICAgIGNvbnN0IGNhcmRHYW1lT2JqZWN0cyA9IGRyYWdQaWxlR2FtZU9iamVjdC5kcmF3RnJvbnRDYXJkR2FtZU9iamVjdHMoe3NpemV9KTtcbiAgICAgIGZyb21QaWxlR2FtZU9iamVjdC5wbGFjZUNhcmRHYW1lT2JqZWN0cyh7Y2FyZEdhbWVPYmplY3RzfSk7XG5cbiAgICAgIGNvbnN0IF9jYXJkcyA9IGNhcmRHYW1lT2JqZWN0cy5tYXAoY09iaiA9PiB7XG4gICAgICAgIGNvbnN0IGNhcmQgPSB0aGlzLl90YWJsZS5jYXJkcy5maW5kKGMgPT4gY09iai5uYW1lID09PSBjLmlkKTtcbiAgICAgICAgaWYgKCFjYXJkKSB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGNvcnJlc3BvbmRpbmcgY2FyZHMuXCIpO1xuICAgICAgICByZXR1cm4gY2FyZDtcbiAgICAgIH0pO1xuXG4gICAgICBpZiAoIXRvUGlsZS5mcm9udENhcmRcbiAgICAgICAgfHwgUGlsZS5jaGVja0lmQ2FyZHNBcmVEZXNjZW5kaW5nKHtjYXJkczogW3RvUGlsZS5mcm9udENhcmQsIC4uLl9jYXJkc10sIGZhY2VVcDogdHJ1ZX0pKVxuICAgICAge1xuICAgICAgICB0aGlzLl90YWJsZS5tb3ZlQ2FyZEJldHdlZW5UYWJsZWF1UGlsZXMoe1xuICAgICAgICAgIHRvOiB0b1BpbGUsXG4gICAgICAgICAgZnJvbTogZnJvbVBpbGUsXG4gICAgICAgICAgc2l6ZVxuICAgICAgICB9KTtcbiAgICAgICAgZHJhZ1BpbGVHYW1lT2JqZWN0LnNldEFjdGl2ZShmYWxzZSk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLl9jYXJkQW5pbWF0aW9uQmV0d2VlblBpbGVzUXVldWUuYWRkKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBhd2FpdCBmcm9tUGlsZUdhbWVPYmplY3QuYWRqdXN0Q2FyZEdhbWVPYmplY3RQb3NpdGlvbnNXaXRoQW5pbWF0aW9uKCk7XG4gICAgICAgICAgZHJhZ1BpbGVHYW1lT2JqZWN0LnNldEFjdGl2ZShmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2FyZERyYWdFbmQgKHtjYXJkR2FtZU9iamVjdCwgcG9pbnRlcn06e2NhcmRHYW1lT2JqZWN0OkNhcmRHYW1lT2JqZWN0LCBwb2ludGVyOlBoYXNlci5JbnB1dC5Qb2ludGVyfSlcbiAge1xuICAgIGNvbnN0IHRhcmdldFBpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnkocCA9PiB7XG4gICAgICByZXR1cm4gcC5jYXJkR2FtZU9iamVjdHMuZmluZChjID0+IGMgPT09IGNhcmRHYW1lT2JqZWN0KTtcbiAgICB9KTtcbiAgICBjb25zdCBkcmFnUGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZHJhZ1BpbGVHYW1lT2JqZWN0O1xuICAgIGlmICh0YXJnZXRQaWxlR2FtZU9iamVjdCA9PT0gZHJhZ1BpbGVHYW1lT2JqZWN0ICYmIGRyYWdQaWxlR2FtZU9iamVjdC5hY3RpdmUpXG4gICAge1xuICAgICAgY29uc3Qgc2l6ZSA9IGRyYWdQaWxlR2FtZU9iamVjdC5jYXJkR2FtZU9iamVjdHMubGVuZ3RoO1xuICAgICAgY29uc3QgZnJvbVBpbGUgPSB0aGlzLl90YWJsZS5nZXRQaWxlQnkocGlsZSA9PiBwaWxlLmNhcmRzLmZpbmQoY2FyZCA9PiBjYXJkLmlkID09PSBjYXJkR2FtZU9iamVjdC5uYW1lKSk7XG4gICAgICBjb25zdCBmcm9tUGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZ2V0UGlsZUdhbWVPYmplY3RCeShwID0+IHAubmFtZSA9PT0gZnJvbVBpbGUuaWQpO1xuICAgICAgY29uc3QgY2FyZEdhbWVPYmplY3RzID0gZHJhZ1BpbGVHYW1lT2JqZWN0LmRyYXdGcm9udENhcmRHYW1lT2JqZWN0cyh7c2l6ZX0pO1xuICAgICAgZnJvbVBpbGVHYW1lT2JqZWN0LnBsYWNlQ2FyZEdhbWVPYmplY3RzKHtjYXJkR2FtZU9iamVjdHN9KTtcbiAgICAgIHRoaXMuX2NhcmRBbmltYXRpb25CZXR3ZWVuUGlsZXNRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBmcm9tUGlsZUdhbWVPYmplY3QuYWRqdXN0Q2FyZEdhbWVPYmplY3RQb3NpdGlvbnNXaXRoQW5pbWF0aW9uKCk7XG4gICAgICAgIGRyYWdQaWxlR2FtZU9iamVjdC5zZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3ZlQ2FyZHNCZXR3ZWVuUGlsZXMgKHtmcm9tLCB0bywgc2l6ZX06e2Zyb206UGlsZSwgdG86UGlsZSwgc2l6ZTpudW1iZXJ9KSB7XG4gICAgY29uc3QgZnJvbVBpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnkocCA9PiBwLm5hbWUgPT09IGZyb20uaWQpO1xuICAgIGNvbnN0IHRvUGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZ2V0UGlsZUdhbWVPYmplY3RCeShwID0+IHAubmFtZSA9PT0gdG8uaWQpO1xuXG4gICAgdGhpcy5fY2FyZEFuaW1hdGlvbkJldHdlZW5QaWxlc1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBjYXJkR2FtZU9iamVjdHMgPSBmcm9tUGlsZUdhbWVPYmplY3QuZHJhd0Zyb250Q2FyZEdhbWVPYmplY3RzKHtzaXplfSk7XG4gICAgICB0b1BpbGVHYW1lT2JqZWN0LnBsYWNlQ2FyZEdhbWVPYmplY3RzKHtjYXJkR2FtZU9iamVjdHN9KTtcbiAgICAgIHRoaXMuX3RhYmxlR2FtZU9iamVjdC5icmluZ1RvVG9wKHRvUGlsZUdhbWVPYmplY3QpO1xuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0b1BpbGVHYW1lT2JqZWN0LmFkanVzdENhcmRHYW1lT2JqZWN0UG9zaXRpb25zV2l0aEFuaW1hdGlvbigpLFxuICAgICAgICBmcm9tUGlsZUdhbWVPYmplY3QuYWRqdXN0Q2FyZEdhbWVPYmplY3RQb3NpdGlvbnNXaXRoQW5pbWF0aW9uKClcbiAgICAgIF0pO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuX3RhYmxlLmlzQ2xlYXIpIHtcbiAgICAgIHRoaXMuX2NhcmRBbmltYXRpb25CZXR3ZWVuUGlsZXNRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xuICAgICAgICBhbGVydChcIllvdSBiZWF0IHRoZSBnYW1lISEhXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25GbGlwT3ZlckNhcmQgKHtjYXJkfTp7Y2FyZDpDYXJkfSkge1xuICAgIGNvbnN0IGNhcmRHYXJtT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmNhcmRHYW1lT2JqZWN0cy5maW5kKGNhcmRDYXJtZU9iamVjdCA9PiBjYXJkQ2FybWVPYmplY3QubmFtZSA9PT0gY2FyZC5pZCk7XG4gICAgaWYgKGNhcmRHYXJtT2JqZWN0KSB7XG4gICAgICB0aGlzLl9jYXJkQW5pbWF0aW9uQmV0d2VlblBpbGVzUXVldWUuYWRkKCgpID0+IGNhcmRHYXJtT2JqZWN0LmZsaXBPdmVyKGNhcmQuaXNGYWNlVXApKTtcbiAgICB9O1xuICB9XG5cbn1cbiIsInZhciBtYXAgPSB7XG5cdFwiLi9sb2dcIjogXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9sb2cuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3Qgc3luYyBeXFxcXC5cXFxcL2xvZyRcIjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJhcHBcIjogMFxufTtcblxudmFyIGRlZmVycmVkTW9kdWxlcyA9IFtcblx0W1wiLi9zcmMvaW5kZXgudHNcIixcInZlbmRvcnNcIl0sXG5cdFtcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2stZGV2LXNlcnZlci9jbGllbnQvaW5kZXguanM/aHR0cDovL2xvY2FsaG9zdDo4MDgwXCIsXCJ2ZW5kb3JzXCJdXG5dO1xuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxudmFyIGNoZWNrRGVmZXJyZWRNb2R1bGVzID0gKCkgPT4ge1xuXG59O1xuZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKCkge1xuXHR2YXIgcmVzdWx0O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuXHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG5cdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcblx0XHR9XG5cdH1cblx0aWYoZGVmZXJyZWRNb2R1bGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblxuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHQvLyByZXNldCBzdGFydHVwIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBjYWxsZWQgYWdhaW4gd2hlbiBtb3JlIHN0YXJ0dXAgY29kZSBpcyBhZGRlZFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cblx0fVxuXHRjaHVua0xvYWRpbmdHbG9iYWwgPSBjaHVua0xvYWRpbmdHbG9iYWwuc2xpY2UoKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rTG9hZGluZ0dsb2JhbC5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soY2h1bmtMb2FkaW5nR2xvYmFsW2ldKTtcblx0cmV0dXJuIChjaGVja0RlZmVycmVkTW9kdWxlcyA9IGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCkoKTtcbn07XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWUsIGV4ZWN1dGVNb2R1bGVzXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcblx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG5cdH1cblxuXHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG5cdGlmKGV4ZWN1dGVNb2R1bGVzKSBkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcblxuXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcblx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rc3BpZGVyX3NvbGl0YWlyZVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzcGlkZXJfc29saXRhaXJlXCJdIHx8IFtdO1xudmFyIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uID0gY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjazsiLCIvLyBydW4gc3RhcnR1cFxucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==