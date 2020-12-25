/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
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
/*! CommonJS bailout: this is used directly at 2:17-21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
/*! CommonJS bailout: this is used directly at 2:17-21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:17-21 */
/*! CommonJS bailout: this is used directly at 24:19-23 */
/*! CommonJS bailout: this is used directly at 51:22-26 */
/*! CommonJS bailout: this is used directly at 58:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
/*! CommonJS bailout: this is used directly at 2:17-21 */
/*! CommonJS bailout: this is used directly at 15:22-26 */
/*! CommonJS bailout: this is used directly at 22:23-27 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
/*! CommonJS bailout: this is used directly at 2:17-21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
/*! CommonJS bailout: this is used directly at 2:17-21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
/*! CommonJS bailout: this is used directly at 2:17-21 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
/*! CommonJS bailout: this is used directly at 2:22-26 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
/*! CommonJS bailout: this is used directly at 2:22-26 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
/*! CommonJS bailout: this is used directly at 2:22-26 */
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


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
/*! CommonJS bailout: this is used directly at 2:22-26 */
/***/ (function(__unused_webpack_module, exports) {


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
var card_1 = __webpack_require__(/*! ../game-objects-with-events/card */ "./src/game-objects-with-events/card.ts");
var emitter_1 = __webpack_require__(/*! ../game-objects-with-events/emitter */ "./src/game-objects-with-events/emitter.ts");
var button_1 = __webpack_require__(/*! ../game-objects/button */ "./src/game-objects/button.ts");
var pile_1 = __webpack_require__(/*! ../models-with-events/pile */ "./src/models-with-events/pile.ts");
var table_2 = __webpack_require__(/*! ../models-with-events/table */ "./src/models-with-events/table.ts");
var create_cards_1 = __webpack_require__(/*! ../models-with-events/create-cards */ "./src/models-with-events/create-cards.ts");
var emitter_2 = __webpack_require__(/*! ../models-with-events/emitter */ "./src/models-with-events/emitter.ts");
// import {TweenQueue} from '../game-objects/tween-queue';
var promise_queue_1 = __webpack_require__(/*! ../promise-queue */ "./src/promise-queue/index.ts");
var MainScene = /** @class */ (function (_super) {
    __extends(MainScene, _super);
    // private _isAnimating:boolean = false;
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
                    if (_this._cardAnimationBetweenPilesQueue.isProcessing)
                        return;
                    _this._table.undo();
                });
                this.children.add(undoButton);
                hintButton = new button_1.Button({
                    scene: this,
                    x: 250,
                    y: 600,
                    label: 'HINT'
                });
                hintButton.on('pointerdown', function () {
                    if (_this._cardAnimationBetweenPilesQueue.isProcessing)
                        return;
                    console.log(_this._table.getPossibleMovesBetweenTableauPiles());
                });
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
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 			["./src/index.ts","vendors"]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL2V2ZW50LWVtaXR0ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9nYW1lLW9iamVjdHMtd2l0aC1ldmVudHMvY2FyZC50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL2dhbWUtb2JqZWN0cy13aXRoLWV2ZW50cy9lbWl0dGVyLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvZ2FtZS1vYmplY3RzLXdpdGgtZXZlbnRzL3RhYmxlLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvZ2FtZS1vYmplY3RzL2J1dHRvbi50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL2dhbWUtb2JqZWN0cy9jYXJkLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvZ2FtZS1vYmplY3RzL3BpbGUudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9nYW1lLW9iamVjdHMvdGFibGUudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9nYW1lLW9iamVjdHMvdHJhbnNmb3JtLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMtd2l0aC1ldmVudHMvY2FyZC50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL21vZGVscy13aXRoLWV2ZW50cy9jcmVhdGUtY2FyZHMudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMtd2l0aC1ldmVudHMvZW1pdHRlci50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL21vZGVscy13aXRoLWV2ZW50cy9waWxlLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvbW9kZWxzLXdpdGgtZXZlbnRzL3RhYmxlLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvbW9kZWxzL2NhcmQudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMvY3JlYXRlLWNhcmRzLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvbW9kZWxzL3BpbGUudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMvdGFibGUudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMvdW5kb2FibGUtYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL3Byb21pc2UtcXVldWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9zY2VuZXMvbWFpbi1zY2VuZS50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvRkFBb0M7QUFlcEM7SUFJRTtRQUVFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxxQkFBWSxFQUFFLENB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dHRlcn0gZnJvbSAnZXZlbnRzJztcblxudHlwZSBfRXZlbnRNYXAgPSBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xudHlwZSBfRXZlbnRLZXk8VCBleHRlbmRzIF9FdmVudE1hcD4gPSBzdHJpbmcgJiBrZXlvZiBUO1xudHlwZSBfRXZlbnRSZWNlaXZlcjxUPiA9IChwYXJhbXM6IFQpID0+IHZvaWQ7XG5cbmludGVyZmFjZSBfRW1pdHRlcjxUIGV4dGVuZHMgX0V2ZW50TWFwPiB7XG4gIG9uPEsgZXh0ZW5kcyBfRXZlbnRLZXk8VD4+XG4gICAgKGV2ZW50TmFtZTogSywgZm46IF9FdmVudFJlY2VpdmVyPFRbS10+KTogdm9pZDtcbiAgb2ZmPEsgZXh0ZW5kcyBfRXZlbnRLZXk8VD4+XG4gICAgKGV2ZW50TmFtZTogSywgZm46IF9FdmVudFJlY2VpdmVyPFRbS10+KTogdm9pZDtcbiAgZW1pdDxLIGV4dGVuZHMgX0V2ZW50S2V5PFQ+PlxuICAgIChldmVudE5hbWU6IEssIHBhcmFtczogVFtLXSk6IHZvaWQ7XG59XG5cbmV4cG9ydCBjbGFzcyBFbWl0dGVyPFQgZXh0ZW5kcyBfRXZlbnRNYXA+IGltcGxlbWVudHMgX0VtaXR0ZXI8VD5cbntcbiAgcHJpdmF0ZSBlbWl0dGVyO1xuXG4gIGNvbnN0cnVjdG9yICgpXG4gIHtcbiAgICB0aGlzLmVtaXR0ZXIgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgLy8gdGhpcy5lbWl0dGVyLnNldE1heExpc3RlbmVycygxMDAwKTtcbiAgfVxuXG4gIG9uPEsgZXh0ZW5kcyBfRXZlbnRLZXk8VD4+KGV2ZW50TmFtZTogSywgZm46IF9FdmVudFJlY2VpdmVyPFRbS10+KSB7XG4gICAgdGhpcy5lbWl0dGVyLm9uKGV2ZW50TmFtZSwgZm4pO1xuICB9XG5cbiAgb2ZmPEsgZXh0ZW5kcyBfRXZlbnRLZXk8VD4+KGV2ZW50TmFtZTogSywgZm46IF9FdmVudFJlY2VpdmVyPFRbS10+KSB7XG4gICAgdGhpcy5lbWl0dGVyLm9mZihldmVudE5hbWUsIGZuKTtcbiAgfVxuXG4gIGVtaXQ8SyBleHRlbmRzIF9FdmVudEtleTxUPj4oZXZlbnROYW1lOiBLLCBwYXJhbXM6IFRbS10pIHtcbiAgICB0aGlzLmVtaXR0ZXIuZW1pdChldmVudE5hbWUsIHBhcmFtcyk7XG4gIH1cbn1cbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcbmltcG9ydCB7ZW1pdHRlcn0gZnJvbSAnLi9lbWl0dGVyJztcbmltcG9ydCB7Q2FyZEdhbWVPYmplY3QsIENhcmRHYW1lT2JqZWN0QXJnc30gZnJvbSBcIi4uL2dhbWUtb2JqZWN0cy9jYXJkXCI7XG5cbnR5cGUgUG9pbnRlciA9IFBoYXNlci5JbnB1dC5Qb2ludGVyO1xuXG5leHBvcnQgY2xhc3MgQ2FyZEdhbWVPYmplY3RXaXRoRXZlbnQgZXh0ZW5kcyBDYXJkR2FtZU9iamVjdFxue1xuICBjb25zdHJ1Y3RvciAoYXJnczpDYXJkR2FtZU9iamVjdEFyZ3MpXG4gIHtcbiAgICBzdXBlcihhcmdzKTtcbiAgICB0aGlzLm9uKCdwb2ludGVyZG93bicsIChwb2ludGVyOlBvaW50ZXIpID0+IGVtaXR0ZXIuZW1pdChcIkNBUkRfUE9JTlRFUkRPV05cIiwge2NhcmRHYW1lT2JqZWN0OnRoaXMsIHBvaW50ZXJ9KSk7XG4gICAgdGhpcy5vbigncG9pbnRlcm92ZXInLCAocG9pbnRlcjpQb2ludGVyKSA9PiBlbWl0dGVyLmVtaXQoXCJDQVJEX1BPSU5URVJPVkVSXCIsIHtjYXJkR2FtZU9iamVjdDp0aGlzLCBwb2ludGVyfSkpO1xuICAgIHRoaXMub24oJ3BvaW50ZXJvdXQnLCAocG9pbnRlcjpQb2ludGVyKSA9PiBlbWl0dGVyLmVtaXQoXCJDQVJEX1BPSU5URVJPVVRcIiwge2NhcmRHYW1lT2JqZWN0OnRoaXMsIHBvaW50ZXJ9KSk7XG4gICAgdGhpcy5vbignZHJhZ3N0YXJ0JywgKHBvaW50ZXI6UG9pbnRlcikgPT4gZW1pdHRlci5lbWl0KFwiQ0FSRF9EUkFHU1RBUlRcIiwge2NhcmRHYW1lT2JqZWN0OnRoaXMsIHBvaW50ZXJ9KSk7XG4gICAgdGhpcy5vbignZHJhZycsIChwb2ludGVyOlBvaW50ZXIpID0+IGVtaXR0ZXIuZW1pdChcIkNBUkRfRFJBR1wiLCB7Y2FyZEdhbWVPYmplY3Q6dGhpcywgcG9pbnRlcn0pKTtcbiAgICB0aGlzLm9uKCdkcm9wJywgKHBvaW50ZXI6UG9pbnRlciwgem9uZTpQaGFzZXIuR2FtZU9iamVjdHMuWm9uZSkgPT4gZW1pdHRlci5lbWl0KFwiQ0FSRF9EUk9QXCIsIHtjYXJkR2FtZU9iamVjdDp0aGlzLCBwb2ludGVyLCB6b25lfSkpO1xuICAgIHRoaXMub24oJ2RyYWdlbmQnLCAocG9pbnRlcjpQb2ludGVyKSA9PiBlbWl0dGVyLmVtaXQoXCJDQVJEX0RSQUdFTkRcIiwge2NhcmRHYW1lT2JqZWN0OnRoaXMsIHBvaW50ZXJ9KSk7XG4gIH1cbn1cbiIsImltcG9ydCB7RW1pdHRlcn0gZnJvbSAnLi4vZXZlbnQtZW1pdHRlcic7XG5pbXBvcnQge1ZpZXdFdmVudHN9IGZyb20gJy4vZXZlbnRzJztcblxuZXhwb3J0IGNvbnN0IGVtaXR0ZXIgPSBuZXcgRW1pdHRlcjxWaWV3RXZlbnRzPigpO1xuIiwiLy8gaW1wb3J0IHtlbWl0dGVyfSBmcm9tICcuL2VtaXR0ZXInO1xuaW1wb3J0IHtUYWJsZUdhbWVPYmplY3R9IGZyb20gXCIuLi9nYW1lLW9iamVjdHMvdGFibGVcIjtcblxuZXhwb3J0IGNsYXNzIFRhYmxlR2FtZU9iamVjdFdpdGhFdmVudCBleHRlbmRzIFRhYmxlR2FtZU9iamVjdFxue1xuICAvLyBjb25zdHJ1Y3RvciAoYXJnczogVGFibGVHYW1lT2JqZWN0U2V0dGluZ3MpXG4gIC8vIHtcbiAgLy8gICBzdXBlcihhcmdzKTtcbiAgLy9cbiAgLy8gICB0aGlzLmRyYXdQaWxlR2FtZU9iamVjdHMuZm9yRWFjaChwaWxlR2FtZU9iamVjdCA9PiB7XG4gIC8vICAgICBwaWxlR2FtZU9iamVjdC5vbihcInBvaW50ZXJkb3duXCIsICgpID0+IHtcbiAgLy8gICAgICAgZW1pdHRlci5lbWl0KFwiRFJBV1BJTEVfUE9JTlRFUkRPV05cIiwge3BpbGVHYW1lT2JqZWN0fSk7XG4gIC8vICAgICB9KTtcbiAgLy8gICB9KTtcbiAgLy8gfVxufVxuIiwiaW1wb3J0IFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XG5cbmNvbnN0IHtcbiAgVGV4dCxcbiAgQ29udGFpbmVyXG59ID0gUGhhc2VyLkdhbWVPYmplY3RzO1xuXG5leHBvcnQgY2xhc3MgQnV0dG9uIGV4dGVuZHMgQ29udGFpbmVyXG57XG4gIGNvbnN0cnVjdG9yICh7XG4gICAgc2NlbmUsXG4gICAgeCxcbiAgICB5LFxuICAgIGxhYmVsXG4gIH06e1xuICAgIHNjZW5lOlBoYXNlci5TY2VuZSxcbiAgICB4Om51bWJlcixcbiAgICB5Om51bWJlcixcbiAgICBsYWJlbDpzdHJpbmdcbiAgfSlcbiAge1xuICAgIHN1cGVyKHNjZW5lLCB4LCB5KTtcbiAgICB0aGlzLnJlbmRlcihsYWJlbCk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlciAobGFiZWw6c3RyaW5nKVxuICB7XG4gICAgY29uc3Qgc3VpdFRleHQgPSBuZXcgVGV4dCh0aGlzLnNjZW5lLCAwLCAwLCBsYWJlbCwgIHtcbiAgICAgIGZvbnRTaXplOiBcIjM1cHhcIixcbiAgICAgIGNvbG9yOiAnIzAwMDAwMCcsXG4gICAgICBmb250RmFtaWx5OiAnR2VvcmdpYSwgXCJHb3VkeSBCb29rbGV0dGVyIDE5MTFcIiwgVGltZXMsIHNlcmlmJ1xuICAgIH0pO1xuICAgIHN1aXRUZXh0LnggLT0gc3VpdFRleHQud2lkdGggLyAyO1xuICAgIHN1aXRUZXh0LnkgLT0gc3VpdFRleHQuaGVpZ2h0IC8gMjtcbiAgICB0aGlzLmFkZChzdWl0VGV4dCk7XG4gICAgdGhpcy5zZXRTaXplKHN1aXRUZXh0LndpZHRoLCBzdWl0VGV4dC5oZWlnaHQpO1xuICAgIHRoaXMuc2V0SW50ZXJhY3RpdmUoKTtcbiAgfVxuXG59XG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gXCJwaGFzZXJcIjtcbmltcG9ydCB7U3VpdH0gZnJvbSBcIi4uL21vZGVscy9jYXJkXCI7XG5cbmNvbnN0IHtcbiAgVGV4dCxcbiAgUmVjdGFuZ2xlLFxuICBDb250YWluZXJcbn0gPSBQaGFzZXIuR2FtZU9iamVjdHM7XG5cbmNvbnN0IGdldFN1aXRUZXh0ID0gKHN1aXQ6U3VpdCkgPT5cbntcbiAgc3dpdGNoKHN1aXQpIHtcbiAgICBjYXNlIFN1aXQuU3BhZGU6XG4gICAgcmV0dXJuICfimaAnO1xuICAgIGNhc2UgU3VpdC5DbHViOlxuICAgIHJldHVybiAn4pmjJztcbiAgICBjYXNlIFN1aXQuRGlhbW9uZDpcbiAgICByZXR1cm4gJ+KZpic7XG4gICAgY2FzZSBTdWl0LkhlYXJ0OlxuICAgIHJldHVybiAn4pmlJztcbiAgfVxufVxuXG5jb25zdCBnZXRTdWl0Q29sb3IgPSAoc3VpdDpTdWl0KSA9Plxue1xuICBzd2l0Y2goc3VpdCkge1xuICAgIGNhc2UgU3VpdC5TcGFkZTpcbiAgICBjYXNlIFN1aXQuQ2x1YjpcbiAgICByZXR1cm4gJyMwMDAwMDAnO1xuICAgIGNhc2UgU3VpdC5EaWFtb25kOlxuICAgIGNhc2UgU3VpdC5IZWFydDpcbiAgICByZXR1cm4gJyNmZjAwMDAnO1xuICB9XG59XG5cbmNvbnN0IGdldFJhbmtUZXh0ID0gKHJhbms6bnVtYmVyKSA9Plxue1xuICBpZiAocmFuayA9PT0gMTEpIHtcbiAgICByZXR1cm4gJ0onO1xuICB9IGVsc2UgaWYgKHJhbmsgPT09IDEyKSB7XG4gICAgcmV0dXJuICdRJztcbiAgfSBlbHNlIGlmIChyYW5rID09PSAxMykge1xuICAgIHJldHVybiAnSyc7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHJhbmsudG9TdHJpbmcoKTtcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBDYXJkR2FtZU9iamVjdEFyZ3MgPSB7XG4gIHNjZW5lOlBoYXNlci5TY2VuZSxcbiAgeDpudW1iZXIsXG4gIHk6bnVtYmVyLFxuICBzdWl0OlN1aXQsXG4gIHJhbms6bnVtYmVyLFxuICBuYW1lOnN0cmluZ1xufTtcblxuZXhwb3J0IGNsYXNzIENhcmRHYW1lT2JqZWN0IGV4dGVuZHMgQ29udGFpbmVyXG57XG4gIHByaXZhdGUgX2ZyYW1lOlBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGUgfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX2JhY2s6UGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lciB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfcmFuazpudW1iZXI7XG4gIHByaXZhdGUgX3N1aXQ6U3VpdDtcbiAgcHJpdmF0ZSBfaXNIaWdoTGlnaHRlZDpib29sZWFuID0gZmFsc2U7XG5cbiAgc3RhdGljIFdJRFRIOm51bWJlciA9IDcwO1xuICBzdGF0aWMgSEVJR0hUOm51bWJlciA9IDExMDtcblxuICBjb25zdHJ1Y3RvciAoe1xuICAgIHNjZW5lLFxuICAgIHgsXG4gICAgeSxcbiAgICBzdWl0LFxuICAgIHJhbmssXG4gICAgbmFtZVxuICB9OkNhcmRHYW1lT2JqZWN0QXJncylcbiAge1xuICAgIHN1cGVyKHNjZW5lLCB4LCB5KTtcbiAgICB0aGlzLnJlbmRlcihzdWl0LCByYW5rKTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuX3N1aXQgPSBzdWl0O1xuICAgIHRoaXMuX3JhbmsgPSByYW5rO1xuICB9XG5cbiAgZ2V0IHN1aXQgKClcbiAge1xuICAgIHJldHVybiB0aGlzLl9zdWl0O1xuICB9XG5cbiAgZ2V0IHJhbmsgKClcbiAge1xuICAgIHJldHVybiB0aGlzLl9yYW5rO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgZnJhbWUgKClcbiAge1xuICAgIGlmICghdGhpcy5fZnJhbWUpXG4gICAge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9mcmFtZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGJhY2sgKClcbiAge1xuICAgIGlmICghdGhpcy5fYmFjaylcbiAgICB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX2JhY2s7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlciAoc3VpdDpTdWl0LCByYW5rOm51bWJlcilcbiAge1xuICAgIGNvbnN0IHggPSAwO1xuICAgIGNvbnN0IHkgPSAwO1xuICAgIGNvbnN0IGZyYW1lID0gbmV3IFJlY3RhbmdsZSh0aGlzLnNjZW5lLCB4LCB5LCBDYXJkR2FtZU9iamVjdC5XSURUSCwgQ2FyZEdhbWVPYmplY3QuSEVJR0hULCAweGZmZmZmZik7XG4gICAgZnJhbWUuc2V0U3Ryb2tlU3R5bGUoMiwgMHgwMDAwMDApO1xuICAgIHRoaXMuYWRkKGZyYW1lKTtcbiAgICB0aGlzLl9mcmFtZSA9IGZyYW1lO1xuXG4gICAgY29uc3QgcmFua1RleHQgPSBuZXcgVGV4dCh0aGlzLnNjZW5lLCB4IC0gMzMsIHkgLSA1NywgIGdldFJhbmtUZXh0KHJhbmspICsgZ2V0U3VpdFRleHQoc3VpdCksICB7XG4gICAgICBmb250U2l6ZTogXCIyNXB4XCIsXG4gICAgICBjb2xvcjogZ2V0U3VpdENvbG9yKHN1aXQpLFxuICAgICAgZm9udEZhbWlseTogJ0dlb3JnaWEsIFwiR291ZHkgQm9va2xldHRlciAxOTExXCIsIFRpbWVzLCBzZXJpZidcbiAgICB9KTtcbiAgICAvLyByYW5rVGV4dC54ID0gcmFua1RleHQueCAtIHJhbmtUZXh0LndpZHRoIC8gMjtcbiAgICB0aGlzLmFkZChyYW5rVGV4dCk7XG4gICAgLy8gdGhpcy5zZXRBbHBoYSgwLjMpXG5cbiAgICAvLyBjb25zdCBzdWl0VGV4dCA9IG5ldyBUZXh0KHRoaXMuc2NlbmUsIHggLSAxNCwgeSAtIDU4LCBnZXRTdWl0VGV4dChzdWl0KSwgIHtcbiAgICAvLyAgIGZvbnRTaXplOiBcIjI1cHhcIixcbiAgICAvLyAgIGNvbG9yOiBnZXRTdWl0Q29sb3Ioc3VpdCksXG4gICAgLy8gICBmb250RmFtaWx5OiAnR2VvcmdpYSwgXCJHb3VkeSBCb29rbGV0dGVyIDE5MTFcIiwgVGltZXMsIHNlcmlmJ1xuICAgIC8vIH0pO1xuICAgIC8vIHN1aXRUZXh0LnggPSBzdWl0VGV4dC54IC0gc3VpdFRleHQud2lkdGggLyAyO1xuICAgIC8vIHRoaXMuYWRkKHN1aXRUZXh0KTtcblxuICAgIC8vIGNvbnN0IHN1aXRUZXh0ID0gbmV3IFRleHQodGhpcy5zY2VuZSwgeCwgeSAtIDQ1LCBnZXRTdWl0VGV4dChzdWl0KSwgIHtcbiAgICAvLyAgIGZvbnRTaXplOiBcIjQ1cHhcIixcbiAgICAvLyAgIGNvbG9yOiBnZXRTdWl0Q29sb3Ioc3VpdCksXG4gICAgLy8gICBmb250RmFtaWx5OiAnR2VvcmdpYSwgXCJHb3VkeSBCb29rbGV0dGVyIDE5MTFcIiwgVGltZXMsIHNlcmlmJ1xuICAgIC8vIH0pO1xuICAgIC8vIHN1aXRUZXh0LnggPSBzdWl0VGV4dC54IC0gc3VpdFRleHQud2lkdGggLyAyO1xuICAgIC8vIHRoaXMuYWRkKHN1aXRUZXh0KTtcbiAgICAvL1xuICAgIC8vIGNvbnN0IHJhbmtUZXh0ID0gbmV3IFRleHQodGhpcy5zY2VuZSwgeCwgeSAtIDIsICBnZXRSYW5rVGV4dChyYW5rKSwgIHtcbiAgICAvLyAgIGZvbnRTaXplOiBcIjM1cHhcIixcbiAgICAvLyAgIGNvbG9yOiBnZXRTdWl0Q29sb3Ioc3VpdCksXG4gICAgLy8gICBmb250RmFtaWx5OiAnR2VvcmdpYSwgXCJHb3VkeSBCb29rbGV0dGVyIDE5MTFcIiwgVGltZXMsIHNlcmlmJ1xuICAgIC8vIH0pO1xuICAgIC8vIHJhbmtUZXh0LnggPSByYW5rVGV4dC54IC0gcmFua1RleHQud2lkdGggLyAyO1xuICAgIC8vIHRoaXMuYWRkKHJhbmtUZXh0KTtcblxuICAgIHRoaXMuX2JhY2sgPSBuZXcgQ29udGFpbmVyKHRoaXMuc2NlbmUsIHgsIHkpO1xuXG4gICAgY29uc3QgYmFja1BhdHRlcm4gPSBuZXcgUmVjdGFuZ2xlKHRoaXMuc2NlbmUsIHgsIHksIENhcmRHYW1lT2JqZWN0LldJRFRIIC0gMjAsIENhcmRHYW1lT2JqZWN0LkhFSUdIVCAtIDIwLCAweGFhYWFhYSk7XG4gICAgYmFja1BhdHRlcm4uc2V0U3Ryb2tlU3R5bGUoMywgMHhhYWFhYWEpO1xuICAgIGNvbnN0IGJhY2tXaGl0ZSA9IG5ldyBSZWN0YW5nbGUodGhpcy5zY2VuZSwgeCwgeSwgQ2FyZEdhbWVPYmplY3QuV0lEVEggLSAyLCBDYXJkR2FtZU9iamVjdC5IRUlHSFQgLSAyLCAweGZmZmZmZik7XG4gICAgdGhpcy5iYWNrLmFkZChiYWNrV2hpdGUpO1xuICAgIHRoaXMuYmFjay5hZGQoYmFja1BhdHRlcm4pO1xuICAgIHRoaXMuYWRkKHRoaXMuYmFjayk7XG5cbiAgICB0aGlzLnNldFNpemUoQ2FyZEdhbWVPYmplY3QuV0lEVEgsIENhcmRHYW1lT2JqZWN0LkhFSUdIVCk7XG4gICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSh7ZHJhZ2dhYmxlOiB0cnVlfSk7XG4gIH1cblxuICBmbGlwT3ZlciAodXA6Ym9vbGVhbikge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZTx2b2lkPihyZXNvbHZlID0+IHtcbiAgICAgIGNvbnN0IHRpbWVsaW5lID0gdGhpcy5zY2VuZS50d2VlbnMuY3JlYXRlVGltZWxpbmUoKTtcbiAgICAgIHRpbWVsaW5lLmFkZCh7XG4gICAgICAgIHRhcmdldHM6IHRoaXMsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgc2NhbGVYOiAwLFxuICAgICAgICB9LFxuICAgICAgICBkdXJhdGlvbjogMzUsXG4gICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcbiAgICAgICAgICB0aGlzLmJhY2sudmlzaWJsZSA9ICF1cDtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aW1lbGluZS5hZGQoe1xuICAgICAgICB0YXJnZXRzOiB0aGlzLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIHNjYWxlWDogMSxcbiAgICAgICAgfSxcbiAgICAgICAgZHVyYXRpb246IDM1LFxuICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgcmVzb2x2ZSgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICAgIHRpbWVsaW5lLnBsYXkoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGdldCBpc0ZhY2VVcCAoKVxuICB7XG4gICAgcmV0dXJuICF0aGlzLmJhY2sudmlzaWJsZTtcbiAgfVxuXG4gIGFkZEhpZ2hsaWdodCAoKVxuICB7XG4gICAgdGhpcy5mcmFtZS5zZXRTdHJva2VTdHlsZSgyLCAweGZmNTU4OCk7XG4gICAgdGhpcy5faXNIaWdoTGlnaHRlZCA9IHRydWU7XG4gIH1cblxuICByZW1vdmVIaWdobGlnaHQgKClcbiAge1xuICAgIHRoaXMuZnJhbWUuc2V0U3Ryb2tlU3R5bGUoMiwgMHgwMDAwMDApO1xuICAgIHRoaXMuX2lzSGlnaExpZ2h0ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIGdldCBpc0hpZ2hMaWdodGVkICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5faXNIaWdoTGlnaHRlZDtcbiAgfVxufVxuIiwiaW1wb3J0IFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XG5pbXBvcnQge0NhcmRHYW1lT2JqZWN0fSBmcm9tIFwiLi9jYXJkXCI7XG5pbXBvcnQge2dldFdvcmxkUG9zaXRpb259IGZyb20gJy4vdHJhbnNmb3JtJztcblxuZXhwb3J0IHR5cGUgUGlsZUdhbWVPYmplY3RBcmdzID0ge1xuICBzY2VuZTpQaGFzZXIuU2NlbmUsXG4gIHg6bnVtYmVyLFxuICB5Om51bWJlcixcbiAgbmFtZTpzdHJpbmcsXG4gIGlzU3ByZWFkPzpib29sZWFuLFxuICBpc0Ryb3BUYXJnZXQ/OmJvb2xlYW4sXG4gIGxhYmVsPzpzdHJpbmdcbiAgLy8gaXNJbnRlcmFjdGl2ZT86Ym9vbGVhblxufVxuXG5pbnRlcmZhY2UgQ2FyZEdhbWVPYmplY3RBZGp1c3RlZFBvc2l0aW9uIHtcbiAgeDogbnVtYmVyLFxuICB5OiBudW1iZXIsXG4gIGNhcmRHYW1lT2JqZWN0OiBDYXJkR2FtZU9iamVjdFxufVxuXG5leHBvcnQgY2xhc3MgUGlsZUdhbWVPYmplY3QgZXh0ZW5kcyBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyXG57XG4gIHByaXZhdGUgX2xhYmVsOnN0cmluZztcbiAgcHJpdmF0ZSBfaXNTcHJlYWQ6Ym9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9jYXJkR2FtZU9iamVjdHM6Q2FyZEdhbWVPYmplY3RbXSA9IFtdO1xuICBwcml2YXRlIF96b25lOlBoYXNlci5HYW1lT2JqZWN0cy5ab25lIHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIF96b25lUmVjdDpQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlIHwgdW5kZWZpbmVkO1xuICAvLyBwcml2YXRlIF9pc0ludGVyYWN0aXZlOmJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfZmFjZURvd25DYXJkR2FwOm51bWJlciA9IDE1O1xuICBwcml2YXRlIF9mYWNlVXBDYXJkR2FwOm51bWJlciA9IDI2O1xuICBwcml2YXRlIF9tYXhIZWlnaHRPZkdhcHM6bnVtYmVyID0gMjAwO1xuXG4gIGNvbnN0cnVjdG9yICh7XG4gICAgc2NlbmUsXG4gICAgeCxcbiAgICB5LFxuICAgIG5hbWUsXG4gICAgaXNTcHJlYWQsXG4gICAgaXNEcm9wVGFyZ2V0LFxuICAgIGxhYmVsXG4gICAgLy8gaXNJbnRlcmFjdGl2ZVxuICB9OlBpbGVHYW1lT2JqZWN0QXJncylcbiAge1xuICAgIHN1cGVyKHNjZW5lLCB4LCB5KTtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuX2xhYmVsID0gbGFiZWwgfHwgJyc7XG5cbiAgICBpZiAoaXNTcHJlYWQpIHtcbiAgICAgIHRoaXMuX2lzU3ByZWFkID0gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoaXNEcm9wVGFyZ2V0KSB7XG4gICAgICB0aGlzLl96b25lID0gdGhpcy5yZW5kZXJab25lKCk7XG4gICAgICB0aGlzLl96b25lUmVjdCA9IHRoaXMucmVuZGVyWm9uZVJlY3QoKTtcbiAgICB9XG5cbiAgICAvLyBpZiAoaXNJbnRlcmFjdGl2ZSlcbiAgICAvLyB7XG4gICAgLy8gICB0aGlzLnNldFNpemUoQ2FyZEdhbWVPYmplY3QuV0lEVEgsIENhcmRHYW1lT2JqZWN0LkhFSUdIVCk7XG4gICAgLy8gICB0aGlzLnNldEludGVyYWN0aXZlKCk7XG4gICAgLy8gICB0aGlzLl9pc0ludGVyYWN0aXZlID0gdHJ1ZTtcbiAgICAvLyB9XG4gIH1cblxuICBnZXQgbGFiZWwgKCkge1xuICAgIHJldHVybiB0aGlzLl9sYWJlbDtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyWm9uZSAoKVxuICB7XG4gICAgY29uc3Qgem9uZSA9IG5ldyBQaGFzZXIuR2FtZU9iamVjdHMuWm9uZSh0aGlzLnNjZW5lLCAwLCAwLCAxLCAxKTtcbiAgICB0aGlzLmFkZCh6b25lKTtcbiAgICByZXR1cm4gem9uZTtcbiAgfVxuXG4gIHByaXZhdGUgcmVuZGVyWm9uZVJlY3QgKClcbiAge1xuICAgIGNvbnN0IHJlY3QgPSBuZXcgUGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZSh0aGlzLnNjZW5lLCAwLCAwLCAxLCAxLCAweGNjY2NjYyk7XG4gICAgdGhpcy5hZGQocmVjdCk7XG4gICAgcmV0dXJuIHJlY3Q7XG4gIH1cblxuICBwcml2YXRlIHJlc2l6ZVpvbmUgKClcbiAge1xuICAgIGNvbnN0IHdpZHRoID0gQ2FyZEdhbWVPYmplY3QuV0lEVEg7XG4gICAgY29uc3QgZnJvbnRDYXJkR2FtZU9iamVjdCA9IHRoaXMuX2NhcmRHYW1lT2JqZWN0c1t0aGlzLl9jYXJkR2FtZU9iamVjdHMubGVuZ3RoIC0gMV07XG4gICAgY29uc3QgaGVpZ2h0ID0gQ2FyZEdhbWVPYmplY3QuSEVJR0hUICsgKGZyb250Q2FyZEdhbWVPYmplY3QgPyBmcm9udENhcmRHYW1lT2JqZWN0LnkgOiAwKTtcbiAgICBjb25zdCB4ID0gMDtcbiAgICBjb25zdCB5ID0gKGhlaWdodCAvIDIpIC0gKENhcmRHYW1lT2JqZWN0LkhFSUdIVCAvIDIpO1xuXG4gICAgaWYgKHRoaXMuX3pvbmUpXG4gICAge1xuICAgICAgdGhpcy5fem9uZS54ID0geDtcbiAgICAgIHRoaXMuX3pvbmUueSA9IHk7XG4gICAgICB0aGlzLl96b25lLndpZHRoID0gd2lkdGg7XG4gICAgICB0aGlzLl96b25lLmhlaWdodCA9IGhlaWdodDtcbiAgICAgIHRoaXMuX3pvbmUuc2V0UmVjdGFuZ2xlRHJvcFpvbmUod2lkdGgsIGhlaWdodCk7XG4gICAgICB0aGlzLl96b25lLmlucHV0LmhpdEFyZWEuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgICAgIHRoaXMuX3pvbmUuc2V0T3JpZ2luKHRoaXMuX3pvbmUub3JpZ2luWCwgdGhpcy5fem9uZS5vcmlnaW5ZKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fem9uZVJlY3QpIHtcbiAgICAgIHRoaXMuX3pvbmVSZWN0LnggPSB4O1xuICAgICAgdGhpcy5fem9uZVJlY3QueSA9IHk7XG4gICAgICB0aGlzLl96b25lUmVjdC53aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5fem9uZVJlY3QuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgdGhpcy5fem9uZVJlY3Quc2V0T3JpZ2luKHRoaXMuX3pvbmVSZWN0Lm9yaWdpblgsIHRoaXMuX3pvbmVSZWN0Lm9yaWdpblkpO1xuICAgIH1cblxuICAgIC8vIGlmICh0aGlzLl9pc0ludGVyYWN0aXZlKVxuICAgIC8vIHtcbiAgICAvLyAgIHRoaXMuaW5wdXQuaGl0QXJlYS5zZXRTaXplKHdpZHRoLCBoZWlnaHQpXG4gICAgLy8gfVxuICB9XG5cbiAgZ2V0IHpvbmUgKClcbiAge1xuICAgIHJldHVybiB0aGlzLl96b25lO1xuICB9XG5cbiAgLypcbiAgZ2V0TmV3RnJvbnRDYXJkR2FtZU9iamVjdFBvc2l0aW9uICgpXG4gIHtcbiAgICByZXR1cm4ge1xuICAgICAgeDogMCxcbiAgICAgIHk6ICF0aGlzLl9pc1NwcmVhZCA/IDAgOiB0aGlzLl9jYXJkR2FtZU9iamVjdHMucmVkdWNlKChwcmV2LCBjYXJkR2FtZU9iamVjdCkgPT4ge1xuICAgICAgICByZXR1cm4gcHJldiArIChjYXJkR2FtZU9iamVjdC5pc0ZhY2VVcCA/IHRoaXMuX2ZhY2VVcENhcmRHYXAgOiB0aGlzLl9mYWNlRG93bkNhcmRHYXApO1xuICAgICAgfSwgMCksXG4gICAgICBkZXB0aDogdGhpcy5fY2FyZEdhbWVPYmplY3RzLmxlbmd0aFxuICAgIH1cbiAgfVxuICAqL1xuXG4gIHByaXZhdGUgX2dldEFkanVzdGVkQ2FyZEdhbWVPYmplY3RQb3NpdGlvbnMgKClcbiAge1xuXG4gICAgaWYgKCF0aGlzLl9pc1NwcmVhZCB8fCB0aGlzLl9jYXJkR2FtZU9iamVjdHMubGVuZ3RoIDw9IDEpXG4gICAge1xuICAgICAgcmV0dXJuIHRoaXMuX2NhcmRHYW1lT2JqZWN0cy5tYXAoKGNhcmRHYW1lT2JqZWN0LCBpKSA9PiAoe1xuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICBkZXB0aDogaSxcbiAgICAgICAgY2FyZEdhbWVPYmplY3RcbiAgICAgIH0pKTtcbiAgICB9XG5cbiAgICBjb25zdCBudW1iZXJPZkdhcHMgPSB0aGlzLl9jYXJkR2FtZU9iamVjdHMubGVuZ3RoIC0gMTtcbiAgICBjb25zdCBudW1iZXJPZkZhY2VVcENhcmRHYXBzID0gdGhpcy5fY2FyZEdhbWVPYmplY3RzLnNsaWNlKDAsIC0xKS5yZWR1Y2UoKHByZSwgY3VyKSA9PiBwcmUgKyAoY3VyLmlzRmFjZVVwID8gMSA6IDApLCAwKTtcbiAgICBjb25zdCBudW1iZXJPZkZhY2VEb3duQ2FyZEdhcHMgPSBudW1iZXJPZkdhcHMgLSBudW1iZXJPZkZhY2VVcENhcmRHYXBzO1xuICAgIGNvbnN0IGhlaWhndE9mR2FwcyA9IG51bWJlck9mRmFjZVVwQ2FyZEdhcHMgKiB0aGlzLl9mYWNlVXBDYXJkR2FwICsgbnVtYmVyT2ZGYWNlRG93bkNhcmRHYXBzICogdGhpcy5fZmFjZURvd25DYXJkR2FwO1xuXG4gICAgbGV0IGdhcE9mRmFjZVVwQ2FyZCA9IHRoaXMuX2ZhY2VVcENhcmRHYXA7XG4gICAgbGV0IGdhcE9mRmFjZURvd25DYXJkID0gdGhpcy5fZmFjZURvd25DYXJkR2FwO1xuXG4gICAgaWYgKGhlaWhndE9mR2FwcyA+IHRoaXMuX21heEhlaWdodE9mR2Fwcykge1xuICAgICAgZ2FwT2ZGYWNlVXBDYXJkID0gdGhpcy5fbWF4SGVpZ2h0T2ZHYXBzIC8gKG51bWJlck9mRmFjZVVwQ2FyZEdhcHMgKyBudW1iZXJPZkZhY2VEb3duQ2FyZEdhcHMgKiB0aGlzLl9mYWNlRG93bkNhcmRHYXAgLyB0aGlzLl9mYWNlVXBDYXJkR2FwKTtcbiAgICAgIGdhcE9mRmFjZURvd25DYXJkID0gdGhpcy5fbWF4SGVpZ2h0T2ZHYXBzIC8gKG51bWJlck9mRmFjZURvd25DYXJkR2FwcyArIG51bWJlck9mRmFjZVVwQ2FyZEdhcHMgKiB0aGlzLl9mYWNlVXBDYXJkR2FwIC8gdGhpcy5fZmFjZURvd25DYXJkR2FwKTtcbiAgICB9XG5cbiAgICBsZXQgb2Zmc2V0ID0gMDtcbiAgICBsZXQgcG9zaXRpb25zOkNhcmRHYW1lT2JqZWN0QWRqdXN0ZWRQb3NpdGlvbltdID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9jYXJkR2FtZU9iamVjdHMubGVuZ3RoOyBpKyspXG4gICAge1xuICAgICAgY29uc3QgY2FyZEdhbWVPYmplY3QgPSB0aGlzLl9jYXJkR2FtZU9iamVjdHNbaV07XG4gICAgICBwb3NpdGlvbnMgPSBbLi4ucG9zaXRpb25zLCB7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IG9mZnNldCxcbiAgICAgICAgY2FyZEdhbWVPYmplY3RcbiAgICAgIH1dO1xuICAgICAgb2Zmc2V0ID0gb2Zmc2V0ICsgKGNhcmRHYW1lT2JqZWN0LmlzRmFjZVVwID8gZ2FwT2ZGYWNlVXBDYXJkIDogZ2FwT2ZGYWNlRG93bkNhcmQpO1xuICAgIH1cblxuICAgIHJldHVybiBwb3NpdGlvbnM7XG4gIH1cblxuICBhc3luYyBhZGp1c3RDYXJkR2FtZU9iamVjdFBvc2l0aW9uc1dpdGhBbmltYXRpb24gKClcbiAge1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IHRoaXMuX2dldEFkanVzdGVkQ2FyZEdhbWVPYmplY3RQb3NpdGlvbnMoKTtcbiAgICBhd2FpdCBQcm9taXNlLmFsbChwb3NpdGlvbnNcbiAgICAgIC5maWx0ZXIocG9zaXRpb24gPT4gKHBvc2l0aW9uLnggIT09IHBvc2l0aW9uLmNhcmRHYW1lT2JqZWN0LnggfHwgcG9zaXRpb24ueSAhPT0gcG9zaXRpb24uY2FyZEdhbWVPYmplY3QueSkpXG4gICAgICAubWFwKHBvc2l0aW9uID0+IG5ldyBQcm9taXNlKHJlcyA9PiB7XG4gICAgICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICAgICAgdGFyZ2V0czogcG9zaXRpb24uY2FyZEdhbWVPYmplY3QsXG4gICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgIHg6IHBvc2l0aW9uLngsXG4gICAgICAgICAgICB5OiBwb3NpdGlvbi55XG4gICAgICAgICAgfSxcbiAgICAgICAgICBkdXJhdGlvbjogNzAsXG4gICAgICAgICAgb25Db21wbGV0ZTogKCkgPT4gcmVzKClcbiAgICAgICAgfSk7XG4gICAgfSkpKVxuICAgIC50aGVuKCgpID0+IHRoaXMucmVzaXplWm9uZSgpKVxuICB9XG5cbiAgYWRqdXN0Q2FyZEdhbWVPYmplY3RQb3NpdGlvbnMgKClcbiAge1xuICAgIGNvbnN0IHBvc2l0aW9ucyA9IHRoaXMuX2dldEFkanVzdGVkQ2FyZEdhbWVPYmplY3RQb3NpdGlvbnMoKTtcbiAgICBmb3IgKGxldCBwb3NpdGlvbiBvZiBwb3NpdGlvbnMpXG4gICAge1xuICAgICAgcG9zaXRpb24uY2FyZEdhbWVPYmplY3QueCA9IHBvc2l0aW9uLng7XG4gICAgICBwb3NpdGlvbi5jYXJkR2FtZU9iamVjdC55ID0gcG9zaXRpb24ueTtcbiAgICB9XG4gICAgdGhpcy5yZXNpemVab25lKCk7XG4gIH1cblxuICBhc3luYyBleHBhbmRXaXRoQW5pbWF0aW9uICgpXG4gIHtcbiAgICBhd2FpdCBuZXcgUHJvbWlzZShyZXNvbHZlID0+IHtcbiAgICAgIHRoaXMuc2NhbGVYID0gMTtcbiAgICAgIHRoaXMuc2NhbGVZID0gMTtcbiAgICAgIHRoaXMuc2NlbmUudHdlZW5zLmFkZCh7XG4gICAgICAgIHRhcmdldHM6IHRoaXMsXG4gICAgICAgIHByb3BzOiB7XG4gICAgICAgICAgc2NhbGVYOiAxLjEsXG4gICAgICAgICAgc2NhbGVZOiAxLjFcbiAgICAgICAgfSxcbiAgICAgICAgZHVyYXRpb246IDQwLFxuICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiByZXNvbHZlKClcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgcGxhY2VDYXJkR2FtZU9iamVjdHMgKHtjYXJkR2FtZU9iamVjdHN9OiB7Y2FyZEdhbWVPYmplY3RzOkNhcmRHYW1lT2JqZWN0W119KVxuICB7XG4gICAgY29uc3Qgd29ybGRQb3NpdGlvbiA9IGdldFdvcmxkUG9zaXRpb24odGhpcyk7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgY2FyZEdhbWVPYmplY3RzLmxlbmd0aDsgaW5kZXgrKylcbiAgICB7XG4gICAgICBjb25zdCBjYXJkR2FtZU9iamVjdCA9IGNhcmRHYW1lT2JqZWN0c1tpbmRleF07XG4gICAgICBjYXJkR2FtZU9iamVjdC54ID0gY2FyZEdhbWVPYmplY3QueCAtIHdvcmxkUG9zaXRpb24ueDtcbiAgICAgIGNhcmRHYW1lT2JqZWN0LnkgPSBjYXJkR2FtZU9iamVjdC55IC0gd29ybGRQb3NpdGlvbi55O1xuICAgICAgdGhpcy5hZGQoY2FyZEdhbWVPYmplY3QpO1xuICAgIH1cblxuICAgIHRoaXMuX2NhcmRHYW1lT2JqZWN0cyA9IFsuLi50aGlzLl9jYXJkR2FtZU9iamVjdHMsIC4uLmNhcmRHYW1lT2JqZWN0c107XG4gIH1cblxuICBwcml2YXRlIF9nZXRGcm9udEdhbWVPYmplY3RzICh7c2l6ZX06e3NpemU6bnVtYmVyfSlcbiAge1xuICAgIHJldHVybiB0aGlzLl9jYXJkR2FtZU9iamVjdHMuc2xpY2UoLXNpemUpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcmVtb3ZlRnJvbnRHYW1lT2JqZWN0cyAoe3NpemV9OntzaXplOm51bWJlcn0pXG4gIHtcbiAgICBjb25zdCBjYXJkR2FtZU9iamVjdHMgPSB0aGlzLl9nZXRGcm9udEdhbWVPYmplY3RzKHtzaXplfSk7XG4gICAgY29uc3Qgd29ybGRQb3NpdGlvbiA9IGdldFdvcmxkUG9zaXRpb24odGhpcyk7XG4gICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGNhcmRHYW1lT2JqZWN0cy5sZW5ndGg7IGluZGV4KyspXG4gICAge1xuICAgICAgY29uc3QgY2FyZEdhbWVPYmplY3QgPSBjYXJkR2FtZU9iamVjdHNbaW5kZXhdO1xuICAgICAgY2FyZEdhbWVPYmplY3QueCA9IGNhcmRHYW1lT2JqZWN0LnggKyB3b3JsZFBvc2l0aW9uLng7XG4gICAgICBjYXJkR2FtZU9iamVjdC55ID0gY2FyZEdhbWVPYmplY3QueSArIHdvcmxkUG9zaXRpb24ueTtcbiAgICAgIHRoaXMucmVtb3ZlKGNhcmRHYW1lT2JqZWN0KTtcbiAgICB9XG4gICAgdGhpcy5fY2FyZEdhbWVPYmplY3RzID0gdGhpcy5fY2FyZEdhbWVPYmplY3RzLnNsaWNlKDAsIHRoaXMuX2NhcmRHYW1lT2JqZWN0cy5sZW5ndGggLSBzaXplKTtcbiAgICB0aGlzLnJlc2l6ZVpvbmUoKTtcbiAgfVxuXG4gIGRyYXdGcm9udENhcmRHYW1lT2JqZWN0cyAoe3NpemV9OntzaXplOm51bWJlcn0pXG4gIHtcbiAgICBjb25zdCBjYXJkR2FtZU9iamVjdHMgPSB0aGlzLl9nZXRGcm9udEdhbWVPYmplY3RzKHtzaXplfSk7XG4gICAgdGhpcy5fcmVtb3ZlRnJvbnRHYW1lT2JqZWN0cyh7c2l6ZX0pO1xuICAgIHJldHVybiBjYXJkR2FtZU9iamVjdHM7XG4gIH1cblxuICBnZXQgY2FyZEdhbWVPYmplY3RzICgpXG4gIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX2NhcmRHYW1lT2JqZWN0c107XG4gIH1cbn1cbiIsImltcG9ydCBQaGFzZXIgZnJvbSBcInBoYXNlclwiO1xuaW1wb3J0IHtDYXJkR2FtZU9iamVjdH0gZnJvbSAnLi9jYXJkJztcbmltcG9ydCB7UGlsZUdhbWVPYmplY3R9IGZyb20gJy4vcGlsZSc7XG5cbmV4cG9ydCB0eXBlIFRhYmxlR2FtZU9iamVjdFNldHRpbmdzID0ge1xuICBzY2VuZTpQaGFzZXIuU2NlbmUsXG4gIGRlY2tQaWxlSWQ6c3RyaW5nLFxuICBkcmF3UGlsZXNJZHM6c3RyaW5nW10sXG4gIHRhYmxlYXVQaWxlc0lkczpzdHJpbmdbXSxcbiAgZGlzY2FyZFBpbGVzSWRzOnN0cmluZ1tdLFxuICBkcmFnUGlsZUlkOnN0cmluZyxcbiAgY2FyZEdhbWVPYmplY3RzOiBDYXJkR2FtZU9iamVjdFtdXG59O1xuXG5leHBvcnQgY2xhc3MgVGFibGVHYW1lT2JqZWN0IGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lclxue1xuICBwcml2YXRlIF9jYXJkR2FtZU9iamVjdHM6Q2FyZEdhbWVPYmplY3RbXSA9IFtdO1xuICBwcml2YXRlIF9waWxlR2FtZU9iamVjdHM6UGlsZUdhbWVPYmplY3RbXSA9IFtdO1xuICBwcml2YXRlIF9kZWNrUGlsZUdhbWVPYmplY3Q6UGlsZUdhbWVPYmplY3Q7XG4gIHByaXZhdGUgX2RyYXdQaWxlR2FtZU9iamVjdHM6UGlsZUdhbWVPYmplY3RbXSA9IFtdO1xuICBwcml2YXRlIF90YWJsZWF1UGlsZUdhbWVPYmplY3RzOlBpbGVHYW1lT2JqZWN0W10gPSBbXTtcbiAgcHJpdmF0ZSBfZGlzY2FyZFBpbGVHYW1lT2JqZWN0czpQaWxlR2FtZU9iamVjdFtdID0gW107XG4gIHByaXZhdGUgX2RyYWdQaWxlR2FtZU9iamVjdDpQaWxlR2FtZU9iamVjdDtcblxuICBjb25zdHJ1Y3RvciAoe1xuICAgIHNjZW5lLFxuICAgIGRlY2tQaWxlSWQsXG4gICAgZHJhd1BpbGVzSWRzLFxuICAgIHRhYmxlYXVQaWxlc0lkcyxcbiAgICBkaXNjYXJkUGlsZXNJZHMsXG4gICAgZHJhZ1BpbGVJZCxcbiAgICBjYXJkR2FtZU9iamVjdHNcbiAgfTpUYWJsZUdhbWVPYmplY3RTZXR0aW5ncylcbiAge1xuICAgIHN1cGVyKHNjZW5lLCAwLCAwKTtcblxuICAgIHRoaXMuX2NhcmRHYW1lT2JqZWN0cyA9IGNhcmRHYW1lT2JqZWN0cztcblxuICAgIGNvbnN0IF9kZWNrUGlsZSA9IG5ldyBQaWxlR2FtZU9iamVjdCh7XG4gICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICAgIHg6NTAwLFxuICAgICAgeTo1MDAsXG4gICAgICBuYW1lOiBkZWNrUGlsZUlkLFxuICAgICAgbGFiZWw6ICdkZWNrJ1xuICAgIH0pO1xuICAgIHRoaXMuX3BpbGVHYW1lT2JqZWN0cyA9IFsuLi50aGlzLl9waWxlR2FtZU9iamVjdHMsIF9kZWNrUGlsZV07XG4gICAgdGhpcy5fZGVja1BpbGVHYW1lT2JqZWN0ID0gX2RlY2tQaWxlO1xuICAgIHRoaXMuX2RlY2tQaWxlR2FtZU9iamVjdC5wbGFjZUNhcmRHYW1lT2JqZWN0cyh7Y2FyZEdhbWVPYmplY3RzfSk7XG4gICAgdGhpcy5fZGVja1BpbGVHYW1lT2JqZWN0LmFkanVzdENhcmRHYW1lT2JqZWN0UG9zaXRpb25zKCk7XG4gICAgdGhpcy5hZGQoX2RlY2tQaWxlKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBkcmF3UGlsZXNJZHMubGVuZ3RoOyBpbmRleCsrKVxuICAgIHtcbiAgICAgIGNvbnN0IGRyYXdQaWxlID0gbmV3IFBpbGVHYW1lT2JqZWN0KHtcbiAgICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICAgIHg6NzAgKyBpbmRleCAqIDIwLFxuICAgICAgICB5OjEwMCxcbiAgICAgICAgbmFtZTogZHJhd1BpbGVzSWRzW2luZGV4XSxcbiAgICAgICAgbGFiZWw6ICdkcmF3JyArIGluZGV4XG4gICAgICB9KTtcbiAgICAgIHRoaXMuX3BpbGVHYW1lT2JqZWN0cyA9IFsuLi50aGlzLl9waWxlR2FtZU9iamVjdHMsIGRyYXdQaWxlXTtcbiAgICAgIHRoaXMuX2RyYXdQaWxlR2FtZU9iamVjdHMgPSBbLi4udGhpcy5fZHJhd1BpbGVHYW1lT2JqZWN0cywgZHJhd1BpbGVdO1xuICAgICAgdGhpcy5hZGQoZHJhd1BpbGUpO1xuICAgIH1cblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0YWJsZWF1UGlsZXNJZHMubGVuZ3RoOyBpbmRleCsrKVxuICAgIHtcbiAgICAgIGNvbnN0IHRhYmxlYXVQaWxlID0gbmV3IFBpbGVHYW1lT2JqZWN0KHtcbiAgICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICAgIHg6MTAwICsgaW5kZXggKiA5MCxcbiAgICAgICAgeToyNTAsXG4gICAgICAgIG5hbWU6IHRhYmxlYXVQaWxlc0lkc1tpbmRleF0sXG4gICAgICAgIGlzU3ByZWFkOiB0cnVlLFxuICAgICAgICBpc0Ryb3BUYXJnZXQ6IHRydWUsXG4gICAgICAgIGxhYmVsOiAndGFibGVhdScgKyBpbmRleFxuICAgICAgfSk7XG4gICAgICB0aGlzLl9waWxlR2FtZU9iamVjdHMgPSBbLi4udGhpcy5fcGlsZUdhbWVPYmplY3RzLCB0YWJsZWF1UGlsZV07XG4gICAgICB0aGlzLl90YWJsZWF1UGlsZUdhbWVPYmplY3RzID0gWy4uLnRoaXMuX3RhYmxlYXVQaWxlR2FtZU9iamVjdHMsIHRhYmxlYXVQaWxlXTtcbiAgICAgIHRoaXMuYWRkKHRhYmxlYXVQaWxlKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGlzY2FyZFBpbGVzSWRzLmxlbmd0aDsgaW5kZXgrKylcbiAgICB7XG4gICAgICBjb25zdCBkaXNjYXJkUGlsZSA9IG5ldyBQaWxlR2FtZU9iamVjdCh7XG4gICAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgICAgICB4OjMwMCArIGluZGV4ICogOTAsXG4gICAgICAgIHk6MTAwLFxuICAgICAgICBuYW1lOiBkaXNjYXJkUGlsZXNJZHNbaW5kZXhdLFxuICAgICAgICBsYWJlbDogJ2Rpc2NhcmQnICsgaW5kZXhcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fcGlsZUdhbWVPYmplY3RzID0gWy4uLnRoaXMuX3BpbGVHYW1lT2JqZWN0cywgZGlzY2FyZFBpbGVdO1xuICAgICAgdGhpcy5fZGlzY2FyZFBpbGVHYW1lT2JqZWN0cyA9IFsuLi50aGlzLl9kaXNjYXJkUGlsZUdhbWVPYmplY3RzLCBkaXNjYXJkUGlsZV07XG4gICAgICB0aGlzLmFkZChkaXNjYXJkUGlsZSk7XG4gICAgfVxuXG4gICAgY29uc3QgX2RyYWdQaWxlR2FtZU9iamVjdCA9IG5ldyBQaWxlR2FtZU9iamVjdCh7XG4gICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgICAgbmFtZTogZHJhZ1BpbGVJZCxcbiAgICAgIGlzU3ByZWFkOiB0cnVlLFxuICAgICAgbGFiZWw6ICdkcmFnJ1xuICAgIH0pO1xuICAgIHRoaXMuX3BpbGVHYW1lT2JqZWN0cyA9IFsuLi50aGlzLl9waWxlR2FtZU9iamVjdHMsIF9kcmFnUGlsZUdhbWVPYmplY3RdO1xuICAgIHRoaXMuX2RyYWdQaWxlR2FtZU9iamVjdCA9IF9kcmFnUGlsZUdhbWVPYmplY3Q7XG4gICAgdGhpcy5hZGQoX2RyYWdQaWxlR2FtZU9iamVjdCk7XG4gIH1cblxuICBnZXQgY2FyZEdhbWVPYmplY3RzICgpXG4gIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX2NhcmRHYW1lT2JqZWN0c107XG4gIH1cblxuICBnZXQgcGlsZUdhbWVPYmplY3RzICgpXG4gIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX3BpbGVHYW1lT2JqZWN0c107XG4gIH1cblxuICBnZXRQaWxlR2FtZU9iamVjdEJ5IChwcmVkaWNhdGU6KHA6UGlsZUdhbWVPYmplY3QpID0+IGFueSlcbiAge1xuICAgIGNvbnN0IHBpbGUgPSB0aGlzLl9waWxlR2FtZU9iamVjdHMuZmluZChwcmVkaWNhdGUpO1xuICAgIGlmICghcGlsZSlcbiAgICB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcGlsZSBnYW1lIG9iamVjdCBkb2Vzbid0IGV4aXN0LlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHBpbGU7XG4gIH1cblxuICBnZXQgZGVja1BpbGVHYW1lT2JqZWN0ICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5fZGVja1BpbGVHYW1lT2JqZWN0O1xuICB9XG5cbiAgZ2V0IGRyYXdQaWxlR2FtZU9iamVjdHMgKClcbiAge1xuICAgIHJldHVybiBbLi4udGhpcy5fZHJhd1BpbGVHYW1lT2JqZWN0c107XG4gIH1cblxuICBnZXQgdGFibGVhdVBpbGVHYW1lT2JqZWN0cyAoKVxuICB7XG4gICAgcmV0dXJuIFsuLi50aGlzLl90YWJsZWF1UGlsZUdhbWVPYmplY3RzXTtcbiAgfVxuXG4gIGdldCBkcmFnUGlsZUdhbWVPYmplY3QgKClcbiAge1xuICAgIHJldHVybiB0aGlzLl9kcmFnUGlsZUdhbWVPYmplY3Q7XG4gIH1cbn1cbiIsImltcG9ydCBQaGFzZXIgZnJvbSAncGhhc2VyJztcblxuZXhwb3J0IGNvbnN0IGdldFdvcmxkUG9zaXRpb24gPSAoY29udGFpbmVyOiBQaGFzZXIuR2FtZU9iamVjdHMuQ29udGFpbmVyKSA9Plxue1xuICBsZXQgcGFyZW50ID0gY29udGFpbmVyLnBhcmVudENvbnRhaW5lcjtcbiAgbGV0IHggPSBjb250YWluZXIueDtcbiAgbGV0IHkgPSBjb250YWluZXIueTtcbiAgd2hpbGUgKHBhcmVudClcbiAge1xuICAgIHggPSB4ICsgcGFyZW50Lng7XG4gICAgeSA9IHkgKyBwYXJlbnQueTtcbiAgICBwYXJlbnQgPSBwYXJlbnQucGFyZW50Q29udGFpbmVyO1xuICB9XG4gIHJldHVybiB7eCwgeX07XG59O1xuIiwiaW1wb3J0IFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XG4vLyBpbXBvcnQgSGVsbG9Xb3JsZFNjZW5lIGZyb20gXCIuL3NjZW5lcy9oZWxsby13b3JsZC1zY2VuZVwiO1xuaW1wb3J0IE1haW5TY2VuZSBmcm9tIFwiLi9zY2VuZXMvbWFpbi1zY2VuZVwiO1xuXG5jb25zdCBjb25maWcgPSB7XG4gIC8vIHRpdGxlOiBcIkdhbWUgT2YgTGlmZVwiLFxuICAvLyB1cmw6IFwiaHR0cHM6Ly9naXRodWIuY29tL2RpZ2l0c2Vuc2l0aXZlL3BoYXNlcjMtdHlwZXNjcmlwdFwiLFxuICAvLyB2ZXJzaW9uOiBcIjEuMFwiLFxuICB3aWR0aDogMTAwMCxcbiAgaGVpZ2h0OiA4MDAsXG4gIHR5cGU6IFBoYXNlci5BVVRPLFxuICAvLyBwYXJlbnQ6IFwiZ2FtZVwiLFxuICBzY2VuZTogW01haW5TY2VuZV0sXG4gIGJhY2tncm91bmRDb2xvcjogXCIjZWRlZGVkXCIsXG4gIC8vIHJlbmRlcjogeyBwaXhlbEFydDogZmFsc2UsIGFudGlhbGlhczogdHJ1ZSB9XG4gIC8vIHBoeXNpY3M6IHtcbiAgLy8gICBkZWZhdWx0OiAnYXJjYWRlJyxcbiAgLy8gICBhcmNhZGU6IHtcbiAgLy8gICAgIGdyYXZpdHk6IHsgeTogMjAwIH1cbiAgLy8gICB9XG4gIC8vIH0sXG59O1xuXG4vLyBleHBvcnQgY2xhc3MgR2FtZSBleHRlbmRzIFBoYXNlci5HYW1lIHtcbi8vICAgY29uc3RydWN0b3IoY29uZmlnOiBQaGFzZXIuVHlwZXMuQ29yZS5HYW1lQ29uZmlnKSB7XG4vLyAgICAgc3VwZXIoY29uZmlnKTtcbi8vICAgfVxuLy8gfVxuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcImxvYWRcIiwgKCkgPT4ge1xuICBuZXcgUGhhc2VyLkdhbWUoY29uZmlnKTtcbn0pO1xuIiwiaW1wb3J0IHtlbWl0dGVyfSBmcm9tICcuL2VtaXR0ZXInO1xuaW1wb3J0IHtDYXJkfSBmcm9tICcuLi9tb2RlbHMvY2FyZCc7XG5cbmV4cG9ydCBjbGFzcyBDYXJkV2l0aEV2ZW50IGV4dGVuZHMgQ2FyZFxue1xuICBmYWNlVXAgKClcbiAge1xuICAgIHN1cGVyLmZhY2VVcCgpO1xuICAgIGVtaXR0ZXIuZW1pdCgnRkxJUF9PVkVSX0NBUkQnLCB7XG4gICAgICBjYXJkOiB0aGlzXG4gICAgfSk7XG4gIH1cblxuICBmYWNlRG93biAoKVxuICB7XG4gICAgc3VwZXIuZmFjZURvd24oKTtcbiAgICBlbWl0dGVyLmVtaXQoJ0ZMSVBfT1ZFUl9DQVJEJywge1xuICAgICAgY2FyZDogdGhpc1xuICAgIH0pO1xuICB9XG5cbiAgZmxpcE92ZXIgKClcbiAge1xuICAgIHN1cGVyLmZsaXBPdmVyKCk7XG4gICAgZW1pdHRlci5lbWl0KCdGTElQX09WRVJfQ0FSRCcsIHtcbiAgICAgIGNhcmQ6IHRoaXNcbiAgICB9KTtcbiAgfVxufVxuIiwiaW1wb3J0IHtjcmVhdGVDYXJkc30gZnJvbSAnLi4vbW9kZWxzL2NyZWF0ZS1jYXJkcyc7XG5pbXBvcnQge0NhcmRXaXRoRXZlbnR9IGZyb20gJy4vY2FyZCc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDYXJkc1dpdGhFdmVudHMgPSAoe1xuICBudW1iZXJPZkRlY2tzVXNlZCxcbiAgbnVtYmVyT2ZTdWl0c1xufTp7XG4gIG51bWJlck9mRGVja3NVc2VkOm51bWJlcixcbiAgbnVtYmVyT2ZTdWl0czpudW1iZXJcbn0pID0+XG4gIGNyZWF0ZUNhcmRzKHtcbiAgICBudW1iZXJPZkRlY2tzVXNlZCxcbiAgICBudW1iZXJPZlN1aXRzXG4gIH0pLm1hcChjYXJkID0+IG5ldyBDYXJkV2l0aEV2ZW50KHtcbiAgICBzdWl0OiBjYXJkLnN1aXQsXG4gICAgcmFuazogY2FyZC5yYW5rLFxuICAgIGlzRmFjZVVwOiBjYXJkLmlzRmFjZVVwXG4gIH0pKTtcbiIsImltcG9ydCB7RW1pdHRlcn0gZnJvbSAnLi4vZXZlbnQtZW1pdHRlcic7XG5pbXBvcnQge01vZGVsRXZlbnRzfSBmcm9tICcuL2V2ZW50cyc7XG5cbmV4cG9ydCBjb25zdCBlbWl0dGVyID0gbmV3IEVtaXR0ZXI8TW9kZWxFdmVudHM+KCk7XG4iLCJpbXBvcnQge1BpbGV9IGZyb20gJy4uL21vZGVscy9waWxlJztcblxuZXhwb3J0IGNsYXNzIFBpbGVXaXRoRXZlbnQgZXh0ZW5kcyBQaWxlIHtcblxufVxuIiwiaW1wb3J0IHtlbWl0dGVyfSBmcm9tICcuL2VtaXR0ZXInO1xuaW1wb3J0IHtQaWxlfSBmcm9tICcuLi9tb2RlbHMvcGlsZSc7XG5pbXBvcnQge1RhYmxlfSBmcm9tICcuLi9tb2RlbHMvdGFibGUnO1xuXG5leHBvcnQgY2xhc3MgVGFibGVXaXRoRXZlbnQgZXh0ZW5kcyBUYWJsZSB7XG5cbiAgcHJvdGVjdGVkIF9tb3ZlQ2FyZEJldHdlZW5QaWxlcyAoe2Zyb20sIHRvLCBzaXplfTp7ZnJvbTpQaWxlLCB0bzpQaWxlLCBzaXplOm51bWJlcn0pXG4gIHtcbiAgICBjb25zdCBjYXJkcyA9IHN1cGVyLl9tb3ZlQ2FyZEJldHdlZW5QaWxlcyh7ZnJvbSwgdG8sIHNpemV9KTtcbiAgICBlbWl0dGVyLmVtaXQoJ01PVkVfQ0FSRFNfQkVUV0VFTl9QSUxFUycsIHtmcm9tLCB0bywgc2l6ZX0pO1xuICAgIHJldHVybiBjYXJkcztcbiAgfVxuXG59XG4iLCIvLyBpbXBvcnQge2V2ZW50SHVifSBmcm9tICcuLi9ldmVudC1odWInO1xuaW1wb3J0IHtuYW5vaWR9IGZyb20gJ25hbm9pZCc7XG5cbmV4cG9ydCBlbnVtIFN1aXQge1xuICBTcGFkZSA9ICfimaAnLFxuICBDbHViID0gJ+KZoycsXG4gIERpYW1vbmQgPSAn4pmmJyxcbiAgSGVhcnQgPSAn4pmlJ1xufVxuXG5jb25zdCBnZXRSYW5rVGV4dCA9IChyYW5rOm51bWJlcikgPT5cbntcbiAgaWYgKHJhbmsgPCAxIHx8IDEzIDwgcmFuaykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNhcmQgcmFuayBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIGlmIChyYW5rID09PSAxMSkge1xuICAgIHJldHVybiAnSic7XG4gIH0gZWxzZSBpZiAocmFuayA9PT0gMTIpIHtcbiAgICByZXR1cm4gJ1EnO1xuICB9IGVsc2UgaWYgKHJhbmsgPT09IDEzKSB7XG4gICAgcmV0dXJuICdLJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmFuay50b1N0cmluZygpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBDYXJkXG57XG4gIHByaXZhdGUgX3N1aXQ6IFN1aXQ7XG4gIHByaXZhdGUgX3Jhbms6IG51bWJlcjtcbiAgcHJpdmF0ZSBfaXNGYWNlVXA6IGJvb2xlYW47XG4gIHByaXZhdGUgX2lkOnN0cmluZyA9IG5hbm9pZCgpO1xuXG4gIGNvbnN0cnVjdG9yICh7c3VpdCwgcmFuaywgaXNGYWNlVXB9OntzdWl0OlN1aXQsIHJhbms6bnVtYmVyLCBpc0ZhY2VVcD86Ym9vbGVhbn0pXG4gIHtcbiAgICB0aGlzLl9zdWl0ID0gc3VpdDtcbiAgICB0aGlzLl9pc0ZhY2VVcCA9IGlzRmFjZVVwIHx8IGZhbHNlO1xuXG4gICAgaWYgKDEgPD0gcmFuayAmJiByYW5rIDw9IDEzKSB7XG4gICAgICB0aGlzLl9yYW5rID0gcmFuaztcbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgY2FyZCByYW5rICR7cmFua30gaXMgaW52YWxpZC5gKTtcbiAgICB9XG4gIH1cblxuICBnZXQgc3VpdCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1aXQ7XG4gIH1cblxuICBnZXQgc3VpdE1hcmsgKCkge1xuICAgIHJldHVybiB0aGlzLl9zdWl0LnRvU3RyaW5nKClcbiAgfVxuXG4gIGdldCByYW5rICgpIHtcbiAgICByZXR1cm4gdGhpcy5fcmFuaztcbiAgfVxuXG4gIGdldCByYW5rTWFyayAoKSB7XG4gICAgcmV0dXJuIGdldFJhbmtUZXh0KHRoaXMuX3JhbmspXG4gIH1cblxuICBnZXQgaXNGYWNlVXAgKCkge1xuICAgIHJldHVybiB0aGlzLl9pc0ZhY2VVcDtcbiAgfVxuXG4gIGdldCBpZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgZmFjZVVwICgpXG4gIHtcbiAgICB0aGlzLl9pc0ZhY2VVcCA9IHRydWU7XG4gIH1cblxuICBmYWNlRG93biAoKVxuICB7XG4gICAgdGhpcy5faXNGYWNlVXAgPSBmYWxzZTtcbiAgfVxuXG4gIGZsaXBPdmVyICgpXG4gIHtcbiAgICB0aGlzLl9pc0ZhY2VVcCA9ICF0aGlzLl9pc0ZhY2VVcDtcbiAgfVxuXG4gIHRvU3RyaW5nICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5zdWl0TWFyayArIHRoaXMucmFua01hcmsgKyAodGhpcy5faXNGYWNlVXAgPyAnKycgOiAnLScpO1xuICB9XG59XG4iLCJpbXBvcnQge0NhcmQsIFN1aXR9IGZyb20gJy4vY2FyZCc7XG5cbmV4cG9ydCBjb25zdCBjcmVhdGVDYXJkcyA9ICh7XG4gIG51bWJlck9mRGVja3NVc2VkLFxuICBudW1iZXJPZlN1aXRzXG59OntcbiAgbnVtYmVyT2ZEZWNrc1VzZWQ6bnVtYmVyLFxuICBudW1iZXJPZlN1aXRzOm51bWJlclxufSkgPT4ge1xuICBjb25zdCBkZWNrQ2FyZHM6Q2FyZFtdID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBudW1iZXJPZkRlY2tzVXNlZDsgaSsrKVxuICB7XG4gICAgZm9yIChsZXQgcmFuayA9IDE7IHJhbmsgPD0gMTM7IHJhbmsrKylcbiAgICB7XG4gICAgICBzd2l0Y2ggKG51bWJlck9mU3VpdHMpXG4gICAgICB7XG4gICAgICAgIGNhc2UgNDpcbiAgICAgICAgICBkZWNrQ2FyZHMucHVzaChuZXcgQ2FyZCh7c3VpdDpTdWl0LkRpYW1vbmQsIHJhbmssIGlzRmFjZVVwOiBmYWxzZX0pKTtcbiAgICAgICAgY2FzZSAzOlxuICAgICAgICAgIGRlY2tDYXJkcy5wdXNoKG5ldyBDYXJkKHtzdWl0OlN1aXQuQ2x1YiwgcmFuaywgaXNGYWNlVXA6IGZhbHNlfSkpO1xuICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgZGVja0NhcmRzLnB1c2gobmV3IENhcmQoe3N1aXQ6U3VpdC5IZWFydCwgcmFuaywgaXNGYWNlVXA6IGZhbHNlfSkpO1xuICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgZGVja0NhcmRzLnB1c2gobmV3IENhcmQoe3N1aXQ6U3VpdC5TcGFkZSwgcmFuaywgaXNGYWNlVXA6IGZhbHNlfSkpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBkZWNrQ2FyZHM7XG59XG5cbmV4cG9ydCBjb25zdCByYW5kb21pemVBcnJheSA9IDxUPih7YXJyYXl9OnthcnJheTpUW119KSA9PiB7XG4gIGNvbnN0IF9hcnIgPSBbLi4uYXJyYXldO1xuICBmb3IgKGxldCBpID0gX2Fyci5sZW5ndGggLSAxOyBpID4gMDsgaS0tKVxuICB7XG4gICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICBbX2FycltpXSwgX2FycltqXV0gPSBbX2FycltqXSwgX2FycltpXV07XG4gIH1cbiAgcmV0dXJuIF9hcnI7XG59XG4iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XG5pbXBvcnQge25hbm9pZH0gZnJvbSAnbmFub2lkJztcblxudHlwZSBQaWxlQXJncyA9IHtcbiAgY2FyZHM/OiBDYXJkW10sXG4gIGxhYmVsPzogc3RyaW5nXG59XG5cbmV4cG9ydCBjbGFzcyBQaWxlXG57XG4gIHByb3RlY3RlZCBfY2FyZHM6Q2FyZFtdO1xuICBwcm90ZWN0ZWQgX2xhYmVsOnN0cmluZztcbiAgcHJpdmF0ZSBfaWQ6c3RyaW5nID0gbmFub2lkKCk7XG5cbiAgY29uc3RydWN0b3IgKGFyZ3M6UGlsZUFyZ3MgPSB7fSlcbiAge1xuICAgIHRoaXMuX2NhcmRzID0gYXJncy5jYXJkcyB8fCBbXTtcbiAgICB0aGlzLl9sYWJlbCA9IGFyZ3MubGFiZWwgfHwgJyc7XG4gIH1cblxuICBnZXQgaWQgKCkge1xuICAgIHJldHVybiB0aGlzLl9pZDtcbiAgfVxuXG4gIGdldCBsYWJlbCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2xhYmVsO1xuICB9XG5cbiAgZ2V0IGNhcmRzICgpXG4gIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX2NhcmRzXTtcbiAgfVxuXG4gIGdldCBmcm9udENhcmQgKCk6Q2FyZHx1bmRlZmluZWRcbiAge1xuICAgIHJldHVybiB0aGlzLl9jYXJkc1t0aGlzLl9jYXJkcy5sZW5ndGggLSAxXTtcbiAgfVxuXG4gIGdldCBsYXN0Q2FyZCAoKTpDYXJkfHVuZGVmaW5lZFxuICB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcmRzWzBdO1xuICB9XG5cbiAgZ2V0RnJvbnRDYXJkcyAoe3NpemV9OntzaXplOm51bWJlcn0pXG4gIHtcbiAgICBjb25zdCBjYXJkcyA9IHRoaXMuX2NhcmRzO1xuICAgIGlmIChjYXJkcy5sZW5ndGggPT09IDAgfHwgc2l6ZSA8IDEpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBfc2l6ZSA9IE1hdGgubWluKGNhcmRzLmxlbmd0aCwgc2l6ZSk7XG4gICAgcmV0dXJuIGNhcmRzLnNsaWNlKGNhcmRzLmxlbmd0aCAtIF9zaXplKTtcbiAgfVxuXG4gIGRyYXdDYXJkcyAoe3NpemV9OntzaXplOm51bWJlcn0pXG4gIHtcbiAgICBjb25zdCBjYXJkcyA9IHRoaXMuX2NhcmRzO1xuICAgIGlmIChjYXJkcy5sZW5ndGggPT09IDAgfHwgc2l6ZSA8IDEpIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBjb25zdCBfc2l6ZSA9IE1hdGgubWluKGNhcmRzLmxlbmd0aCwgc2l6ZSk7XG4gICAgY29uc3QgZHJhd25DYXJkcyA9IGNhcmRzLnNsaWNlKGNhcmRzLmxlbmd0aCAtIF9zaXplKTtcbiAgICB0aGlzLl9jYXJkcyA9IGNhcmRzLnNsaWNlKDAsIC1zaXplKTtcbiAgICByZXR1cm4gZHJhd25DYXJkcztcbiAgfVxuXG4gIHBsYWNlQ2FyZHMgKHtjYXJkc306e2NhcmRzOkNhcmRbXX0pXG4gIHtcbiAgICB0aGlzLl9jYXJkcyA9IFsuLi50aGlzLl9jYXJkcywgLi4uY2FyZHNdO1xuICB9XG5cbiAgZ2V0RGVzY2VuZGluZ0luU3VpdEZyb250Q2FyZHMgKClcbiAge1xuICAgIHJldHVybiBQaWxlLmdldERlc2NlbmRpbmdGcm9udENhcmRzKHtcbiAgICAgIGNhcmRzOiB0aGlzLl9jYXJkcyxcbiAgICAgIGluU3VpdDogdHJ1ZSxcbiAgICAgIGZhY2VVcDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgc3RhdGljIGdldERlc2NlbmRpbmdGcm9udENhcmRzICh7Y2FyZHMsIGluU3VpdCwgZmFjZVVwfTp7Y2FyZHM6Q2FyZFtdLCBpblN1aXQ/OmJvb2xlYW4sIGZhY2VVcD86Ym9vbGVhbn0pXG4gIHtcbiAgICBjb25zdCBfaW5TdWl0ID0gaW5TdWl0IHx8IGZhbHNlO1xuICAgIGNvbnN0IF9mYWNlVXAgPSBmYWNlVXAgfHwgZmFsc2U7XG5cbiAgICBpZiAoY2FyZHMubGVuZ3RoID09PSAwKVxuICAgIHtcbiAgICAgIHJldHVybiBbXTtcbiAgICB9XG5cbiAgICBsZXQgcHJldiA9IGNhcmRzW2NhcmRzLmxlbmd0aCAtIDFdO1xuXG4gICAgaWYgKF9mYWNlVXAgJiYgIXByZXYuaXNGYWNlVXApXG4gICAge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGxldCBfY2FyZHM6Q2FyZFtdID0gW3ByZXZdO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSBjYXJkcy5sZW5ndGggLSAyOyBpbmRleCA+PSAwOyBpbmRleC0tKVxuICAgIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBjYXJkc1tpbmRleF07XG5cbiAgICAgIGlmIChwcmV2LnJhbmsgKyAxICE9PSBjdXJyZW50LnJhbmtcbiAgICAgICAgfHwgKF9pblN1aXQgJiYgcHJldi5zdWl0ICE9PSBjdXJyZW50LnN1aXQpXG4gICAgICAgIHx8IChfZmFjZVVwICYmICFjdXJyZW50LmlzRmFjZVVwKSlcbiAgICAgIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG5cbiAgICAgIF9jYXJkcyA9IFtjdXJyZW50LCAuLi5fY2FyZHNdO1xuICAgICAgcHJldiA9IGN1cnJlbnQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIF9jYXJkcztcbiAgfVxuXG4gIHN0YXRpYyBjaGVja0lmQ2FyZHNBcmVEZXNjZW5kaW5nICh7Y2FyZHMsIGluU3VpdCwgZmFjZVVwfTp7Y2FyZHM6Q2FyZFtdLCBpblN1aXQ/OmJvb2xlYW4sIGZhY2VVcD86Ym9vbGVhbn0pXG4gIHtcbiAgICByZXR1cm4gUGlsZS5nZXREZXNjZW5kaW5nRnJvbnRDYXJkcyh7Y2FyZHMsIGluU3VpdCwgZmFjZVVwfSkubGVuZ3RoID09PSBjYXJkcy5sZW5ndGg7XG4gIH1cblxuICBjaGVja0lmRnJvbnRDYXJkc0NvbXBsZXRlICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5jYXJkcy5sZW5ndGggPj0gMTMgJiYgUGlsZS5jaGVja0lmQ2FyZHNBcmVEZXNjZW5kaW5nKHtcbiAgICAgIGNhcmRzOiB0aGlzLmNhcmRzLnNsaWNlKC0xMyksXG4gICAgICBpblN1aXQ6IHRydWUsXG4gICAgICBmYWNlVXA6IHRydWVcbiAgICB9KTtcbiAgfVxuXG4gIHRvU3RyaW5nICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5jYXJkcy5tYXAoYyA9PiBjLnRvU3RyaW5nKCkpLmpvaW4oJyAnKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtDYXJkfSBmcm9tICcuL2NhcmQnO1xuaW1wb3J0IHtQaWxlfSBmcm9tICcuL3BpbGUnO1xuLy8gaW1wb3J0IHtUYWJsZVNldHRpbmdzLCBUYWJsZVNldHRpbmdDb25maWd9IGZyb20gJy4vdGFibGUtc2V0dGluZ3MnO1xuaW1wb3J0IHtcbiAgRkFDRV9VUF9DQVJELFxuICBNT1ZFX0NBUkQsXG4gIFBBVVNFLFxuICBVbmRvYWJsZUFjdGlvbkhpc3Rvcnlcbn0gZnJvbSAnLi91bmRvYWJsZS1hY3Rpb25zJztcblxuZXhwb3J0IHR5cGUgVGFibGVTZXR0aW5ncyA9IHtcbiAgbnVtYmVyT2ZUYWJsZWF1UGlsZXM6IG51bWJlcixcbiAgbnVtYmVyT2ZEcmF3UGlsZXM6IG51bWJlcixcbiAgY2FyZHM6IENhcmRbXVxufVxuXG5leHBvcnQgY2xhc3MgVGFibGVcbntcbiAgcHJpdmF0ZSBfc2V0dGluZ3M6VGFibGVTZXR0aW5ncztcbiAgcHJpdmF0ZSBfY2FyZHM6IENhcmRbXTtcbiAgcHJpdmF0ZSBfZGVja1BpbGU6UGlsZTtcbiAgcHJpdmF0ZSBfZHJhd1BpbGVzOlBpbGVbXTtcbiAgcHJpdmF0ZSBfdGFibGVhdVBpbGVzOlBpbGVbXTtcbiAgcHJpdmF0ZSBfZGlzY2FyZFBpbGVzOlBpbGVbXTtcbiAgcHJpdmF0ZSBfcGlsZXM6UGlsZVtdO1xuICBwcml2YXRlIF9hY3Rpb25IaXN0b3J5OlVuZG9hYmxlQWN0aW9uSGlzdG9yeTtcblxuICBjb25zdHJ1Y3RvciAoc2V0dGluZ3M6IFRhYmxlU2V0dGluZ3MpXG4gIHtcbiAgICB0aGlzLl9zZXR0aW5ncyA9IHNldHRpbmdzO1xuICAgIHRoaXMuX2NhcmRzID0gc2V0dGluZ3MuY2FyZHM7XG4gICAgdGhpcy5fZGVja1BpbGUgPSBuZXcgUGlsZSh7bGFiZWw6ICdkZWNrJywgY2FyZHM6IHNldHRpbmdzLmNhcmRzfSk7XG4gICAgdGhpcy5fZHJhd1BpbGVzID0gQXJyYXkuZnJvbSh7bGVuZ3RoOnNldHRpbmdzLm51bWJlck9mRHJhd1BpbGVzfSkubWFwKChfLCBpKSA9PiBuZXcgUGlsZSh7bGFiZWw6IGBkcmF3JHtpfWAsIGNhcmRzOiBbXX0pKTtcbiAgICB0aGlzLl90YWJsZWF1UGlsZXMgPSBBcnJheS5mcm9tKHtsZW5ndGg6c2V0dGluZ3MubnVtYmVyT2ZUYWJsZWF1UGlsZXN9KS5tYXAoKF8sIGkpID0+IG5ldyBQaWxlKHtsYWJlbDogYHRhYmwke2l9YCwgY2FyZHM6IFtdfSkpO1xuICAgIHRoaXMuX2Rpc2NhcmRQaWxlcyA9IEFycmF5LmZyb20oe2xlbmd0aDpNYXRoLmZsb29yKHNldHRpbmdzLmNhcmRzLmxlbmd0aCAvIDEzKX0pLm1hcCgoXywgaSkgPT4gbmV3IFBpbGUoe2xhYmVsOiBgZGlzYyR7aX1gLCBjYXJkczogW119KSk7XG4gICAgdGhpcy5fcGlsZXMgPSBbdGhpcy5fZGVja1BpbGUsIC4uLnRoaXMuX2RyYXdQaWxlcywgLi4udGhpcy50YWJsZWF1UGlsZXMsIC4uLnRoaXMuX2Rpc2NhcmRQaWxlc107XG4gICAgdGhpcy5fYWN0aW9uSGlzdG9yeSA9IG5ldyBVbmRvYWJsZUFjdGlvbkhpc3RvcnkoKTtcbiAgfVxuXG4gIGdldCBjYXJkcyAoKVxuICB7XG4gICAgcmV0dXJuIFsuLi50aGlzLl9jYXJkc107XG4gIH1cblxuICBnZXQgcGlsZXMgKClcbiAge1xuICAgIHJldHVybiBbLi4udGhpcy5fcGlsZXNdO1xuICB9XG5cbiAgZ2V0UGlsZUJ5IChwcmVkaWNhdGU6KHA6UGlsZSkgPT4gYW55KVxuICB7XG4gICAgY29uc3QgcGlsZSA9IHRoaXMuX3BpbGVzLmZpbmQocHJlZGljYXRlKTtcbiAgICBpZiAoIXBpbGUpXG4gICAge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHBpbGUgZG9lc24ndCBleGlzdC5cIik7XG4gICAgfVxuICAgIHJldHVybiBwaWxlO1xuICB9XG5cbiAgZ2V0IGRlY2tQaWxlICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5fZGVja1BpbGU7XG4gIH1cblxuICBnZXQgZHJhd1BpbGVzICgpXG4gIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX2RyYXdQaWxlc107XG4gIH1cblxuICBnZXQgdGFibGVhdVBpbGVzICgpXG4gIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX3RhYmxlYXVQaWxlc107XG4gIH1cblxuICBnZXQgZGlzY2FyZFBpbGVzICgpXG4gIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX2Rpc2NhcmRQaWxlc107XG4gIH1cblxuICBnZXQgaXNDbGVhciAoKVxuICB7XG4gICAgcmV0dXJuICF0aGlzLl90YWJsZWF1UGlsZXMuZmluZChwID0+IHAuY2FyZHMubGVuZ3RoID4gMCk7XG4gIH1cblxuICBnZXRQb3NzaWJsZU1vdmVzQmV0d2VlblRhYmxlYXVQaWxlcyAoKVxuICB7XG4gICAgbGV0IG1vdmVzOntzaXplOm51bWJlciwgZnJvbTogUGlsZSwgdG86IFBpbGV9W10gPSBbXTtcblxuICAgIGZvciAobGV0IGZyb20gb2YgdGhpcy5fdGFibGVhdVBpbGVzKVxuICAgIHtcbiAgICAgIGNvbnN0IGRyYXdhYmxlQ2FyZHMgPSBmcm9tLmdldERlc2NlbmRpbmdJblN1aXRGcm9udENhcmRzKCk7XG4gICAgICBpZiAoZHJhd2FibGVDYXJkcy5sZW5ndGggPT09IDApIGNvbnRpbnVlO1xuXG4gICAgICBmb3IgKGxldCB0byBvZiB0aGlzLl90YWJsZWF1UGlsZXMpXG4gICAgICB7XG4gICAgICAgIGlmICh0byA9PT0gZnJvbSkgY29udGludWU7XG5cbiAgICAgICAgZm9yIChsZXQgc2l6ZSA9IGRyYXdhYmxlQ2FyZHMubGVuZ3RoOyBzaXplID4gMDsgc2l6ZS0tKVxuICAgICAgICB7XG4gICAgICAgICAgaWYgKHRvLmZyb250Q2FyZCAmJiAhUGlsZS5jaGVja0lmQ2FyZHNBcmVEZXNjZW5kaW5nKHtcbiAgICAgICAgICAgIGNhcmRzOiBbdG8uZnJvbnRDYXJkLCAuLi5kcmF3YWJsZUNhcmRzLnNsaWNlKC1zaXplKV0sXG4gICAgICAgICAgICBpblN1aXQ6IGZhbHNlLFxuICAgICAgICAgICAgZmFjZVVwOiB0cnVlXG4gICAgICAgICAgfSkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgbW92ZXMgPSBbLi4ubW92ZXMsIHtmcm9tLCB0bywgc2l6ZX1dO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vdmVzO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9tb3ZlQ2FyZEJldHdlZW5QaWxlcyAoe2Zyb20sIHRvLCBzaXplfTp7ZnJvbTpQaWxlLCB0bzpQaWxlLCBzaXplOm51bWJlcn0pXG4gIHtcbiAgICBpZiAoIXRoaXMuX3BpbGVzLmZpbmQocCA9PiBwID09PSBmcm9tKSlcbiAgICB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcImZyb21cIiBwaWxlIGlzIG5vdCBiZSBpbiB0aGlzIHRhYmxlLmApO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fcGlsZXMuZmluZChwID0+IHAgPT09IHRvKSlcbiAgICB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcInRvXCIgcGlsZSBpcyBub3QgYmUgaW4gdGhpcyB0YWJsZS5gKTtcbiAgICB9XG5cbiAgICBpZiAoZnJvbS5nZXRGcm9udENhcmRzKHtzaXplfSkubGVuZ3RoICE9PSBzaXplKVxuICAgIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBpbGUgXCIke2Zyb20uaWR9XCIgZG9lc24ndCBoYXZlICR7c2l6ZX0gY2FyZHMgdG8gZHJhdy5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYXJkcyA9IGZyb20uZHJhd0NhcmRzKHtzaXplfSk7XG4gICAgdG8ucGxhY2VDYXJkcyh7Y2FyZHN9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2RlYWxDYXJkc0Zyb21EZWNrVG9UYWJsZWF1UGlsZXMgKClcbiAge1xuICAgIGNvbnN0IG51bWJlck9mQ2FyZHMgPSB0aGlzLl9kZWNrUGlsZS5jYXJkcy5sZW5ndGg7XG4gICAgY29uc3QgbnVtYmVyT2ZEcmF3Q2FyZHMgPSB0aGlzLl9zZXR0aW5ncy5udW1iZXJPZlRhYmxlYXVQaWxlcyAqIHRoaXMuX3NldHRpbmdzLm51bWJlck9mRHJhd1BpbGVzO1xuXG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBudW1iZXJPZkNhcmRzIC0gbnVtYmVyT2ZEcmF3Q2FyZHM7IGluZGV4KyspXG4gICAge1xuICAgICAgY29uc3QgZnJvbSA9IHRoaXMuX2RlY2tQaWxlO1xuICAgICAgY29uc3QgdG8gPSB0aGlzLl90YWJsZWF1UGlsZXNbY291bnRlciAlIHRoaXMudGFibGVhdVBpbGVzLmxlbmd0aF07XG4gICAgICB0aGlzLl9tb3ZlQ2FyZEJldHdlZW5QaWxlcyh7ZnJvbSwgdG8sIHNpemU6IDF9KTtcbiAgICAgIGNvdW50ZXIgPSBjb3VudGVyICsgMTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9kZWFsQ2FyZHNGcm9tRGVja1RvRHJhd1BpbGVzICgpXG4gIHtcbiAgICAvLyBjb25zdCBudW1iZXJPZkRyYXdDYXJkcyA9IHRoaXMuX3NldHRpbmdzLm51bWJlck9mVGFibGVhdVBpbGVzICogdGhpcy5fc2V0dGluZ3MubnVtYmVyT2ZEcmF3UGlsZXM7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fc2V0dGluZ3MubnVtYmVyT2ZEcmF3UGlsZXM7IGluZGV4KyspXG4gICAge1xuICAgICAgY29uc3QgZnJvbSA9IHRoaXMuX2RlY2tQaWxlO1xuICAgICAgY29uc3QgdG8gPSB0aGlzLl9kcmF3UGlsZXNbaW5kZXhdO1xuICAgICAgdGhpcy5fbW92ZUNhcmRCZXR3ZWVuUGlsZXMoe2Zyb20sIHRvLCBzaXplOiB0aGlzLl9zZXR0aW5ncy5udW1iZXJPZlRhYmxlYXVQaWxlc30pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2ZsaXBVcFRhYmxlYXVGcm9udENhcmRzICgpXG4gIHtcbiAgICBmb3IgKGxldCB0YWJsZWF1UGlsZSBvZiB0aGlzLl90YWJsZWF1UGlsZXMpXG4gICAge1xuICAgICAgaWYgKHRhYmxlYXVQaWxlLmZyb250Q2FyZCkgdGhpcy5fZmFjZVVwQ2FyZCh7Y2FyZDogdGFibGVhdVBpbGUuZnJvbnRDYXJkfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZmFjZVVwQ2FyZCAoe2NhcmR9OntjYXJkOkNhcmR9KVxuICB7XG4gICAgaWYgKCFjYXJkLmlzRmFjZVVwKVxuICAgIHtcbiAgICAgIGNhcmQuZmFjZVVwKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRHYW1lICgpXG4gIHtcbiAgICB0aGlzLl9kZWFsQ2FyZHNGcm9tRGVja1RvVGFibGVhdVBpbGVzKCk7XG4gICAgdGhpcy5fZGVhbENhcmRzRnJvbURlY2tUb0RyYXdQaWxlcygpO1xuICAgIHRoaXMuX2ZsaXBVcFRhYmxlYXVGcm9udENhcmRzKCk7XG4gIH1cblxuICBtb3ZlQ2FyZEJldHdlZW5UYWJsZWF1UGlsZXMgKHtmcm9tLCB0bywgc2l6ZX06e2Zyb206UGlsZSwgdG86UGlsZSwgc2l6ZTpudW1iZXJ9KVxuICB7XG4gICAgaWYgKCF0aGlzLl90YWJsZWF1UGlsZXMuZmluZChwID0+IHAgPT09IGZyb20pKVxuICAgIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwiZnJvbVwiIHBpbGUgaXMgbm90IGEgdGFibGVhdSBwaWxlLmApO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fdGFibGVhdVBpbGVzLmZpbmQocCA9PiBwID09PSB0bykpXG4gICAge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJ0b1wiIHBpbGUgaXMgbm90IGEgdGFibGVhdSBwaWxlLmApO1xuICAgIH1cblxuICAgIGNvbnN0IGNhcmRzID0gZnJvbS5nZXRGcm9udENhcmRzKHtzaXplfSk7XG4gICAgaWYgKGNhcmRzLmxlbmd0aCAhPT0gc2l6ZSlcbiAgICB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwaWxlIFwiJHtmcm9tLmlkfVwiIGRvZXNuJ3QgaGF2ZSAke3NpemV9IGNhcmRzIHRvIGRyYXcuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRvLmZyb250Q2FyZCAmJiAhUGlsZS5jaGVja0lmQ2FyZHNBcmVEZXNjZW5kaW5nKHtcbiAgICAgIGNhcmRzOiBbdG8uZnJvbnRDYXJkLCAuLi5jYXJkc10sXG4gICAgICBpblN1aXQ6IGZhbHNlLFxuICAgICAgZmFjZVVwOiB0cnVlXG4gICAgfSkpXG4gICAge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgY2FuJ3QgcGxhY2UgdGhvc2UgY2FyZHMgdG8gdGhlIFwidG9cIiBwaWxlLmApO1xuICAgIH1cblxuICAgIHRoaXMuX21vdmVDYXJkQmV0d2VlblBpbGVzKHtmcm9tLCB0bywgc2l6ZX0pO1xuICAgIHRoaXMuX2FjdGlvbkhpc3RvcnkuYWRkKHtmcm9tLCB0bywgc2l6ZSwgdHlwZTogTU9WRV9DQVJEfSk7XG5cbiAgICBpZiAoZnJvbS5mcm9udENhcmQgJiYgIWZyb20uZnJvbnRDYXJkLmlzRmFjZVVwKSB7XG4gICAgICB0aGlzLl9mYWNlVXBDYXJkKHtjYXJkOiBmcm9tLmZyb250Q2FyZH0pO1xuICAgICAgdGhpcy5fYWN0aW9uSGlzdG9yeS5hZGQoe2NhcmQ6IGZyb20uZnJvbnRDYXJkLCB0eXBlOiBGQUNFX1VQX0NBUkR9KTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNjYXJkZWRQaWxlID0gdGhpcy5fZGlzY2FyZFBpbGVzLmZpbmQocCA9PiBwLmNhcmRzLmxlbmd0aCA9PT0gMCk7XG5cbiAgICBpZiAoIWRpc2NhcmRlZFBpbGUpXG4gICAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGFyZW4ndCBhbnkgZW1wdHkgZGlzY2FyZGVkIHBpbGVzLmApO1xuICAgIH1cblxuICAgIGlmICh0by5jaGVja0lmRnJvbnRDYXJkc0NvbXBsZXRlKCkpXG4gICAge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMzsgaSsrKVxuICAgICAge1xuICAgICAgICB0aGlzLl9tb3ZlQ2FyZEJldHdlZW5QaWxlcyh7XG4gICAgICAgICAgZnJvbTogdG8sXG4gICAgICAgICAgdG86IGRpc2NhcmRlZFBpbGUsXG4gICAgICAgICAgc2l6ZTogMVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fYWN0aW9uSGlzdG9yeS5hZGQoe1xuICAgICAgICAgIGZyb206IHRvLFxuICAgICAgICAgIHRvOiBkaXNjYXJkZWRQaWxlLFxuICAgICAgICAgIHNpemU6IDEsXG4gICAgICAgICAgdHlwZTogTU9WRV9DQVJEXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodG8uZnJvbnRDYXJkICYmICF0by5mcm9udENhcmQuaXNGYWNlVXApIHtcbiAgICAgICAgdGhpcy5fZmFjZVVwQ2FyZCh7Y2FyZDogdG8uZnJvbnRDYXJkfSk7XG4gICAgICAgIHRoaXMuX2FjdGlvbkhpc3RvcnkuYWRkKHtjYXJkOiB0by5mcm9udENhcmQsIHR5cGU6IEZBQ0VfVVBfQ0FSRH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2FjdGlvbkhpc3RvcnkuYWRkKHt0eXBlOiBQQVVTRX0pO1xuICB9XG5cbiAgZ2V0IGZyb250RHJhd1BpbGUgKClcbiAge1xuICAgIGxldCBkcmF3UGlsZTpQaWxlIHwgdW5kZWZpbmVkO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSB0aGlzLl9kcmF3UGlsZXMubGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSlcbiAgICB7XG4gICAgICBpZiAodGhpcy5fZHJhd1BpbGVzW2luZGV4XS5jYXJkcy5sZW5ndGggPT09IHRoaXMuX3NldHRpbmdzLm51bWJlck9mVGFibGVhdVBpbGVzKVxuICAgICAge1xuICAgICAgICBkcmF3UGlsZSA9IHRoaXMuX2RyYXdQaWxlc1tpbmRleF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkcmF3UGlsZTtcbiAgfVxuXG4gIGRlYWxDYXJkc0Zyb21EcmF3UGlsZSAoKVxuICB7XG4gICAgY29uc3QgZHJhd1BpbGUgPSB0aGlzLmZyb250RHJhd1BpbGU7XG5cbiAgICBpZiAoIWRyYXdQaWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIGFyZSBubyBjYXJkcyB0byBkcmF3IGZyb20gZHJhdyBwaWxlcy4nKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fdGFibGVhdVBpbGVzLmxlbmd0aDsgaW5kZXgrKylcbiAgICB7XG4gICAgICBjb25zdCB0YWJsZWF1UGlsZSA9IHRoaXMuX3RhYmxlYXVQaWxlc1tpbmRleF07XG4gICAgICB0aGlzLl9tb3ZlQ2FyZEJldHdlZW5QaWxlcyh7XG4gICAgICAgIGZyb206IGRyYXdQaWxlLFxuICAgICAgICB0bzogdGFibGVhdVBpbGUsXG4gICAgICAgIHNpemU6IDFcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fYWN0aW9uSGlzdG9yeS5hZGQoe1xuICAgICAgICBmcm9tOiBkcmF3UGlsZSxcbiAgICAgICAgdG86IHRhYmxlYXVQaWxlLFxuICAgICAgICBzaXplOiAxLFxuICAgICAgICB0eXBlOiBNT1ZFX0NBUkRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZvciAobGV0IHRhYmxlYXVQaWxlIG9mIHRoaXMuX3RhYmxlYXVQaWxlcylcbiAgICB7XG4gICAgICBpZiAodGFibGVhdVBpbGUuZnJvbnRDYXJkICYmICF0YWJsZWF1UGlsZS5mcm9udENhcmQuaXNGYWNlVXApIHtcbiAgICAgICAgdGhpcy5fZmFjZVVwQ2FyZCh7Y2FyZDp0YWJsZWF1UGlsZS5mcm9udENhcmR9KTtcbiAgICAgICAgdGhpcy5fYWN0aW9uSGlzdG9yeS5hZGQoe1xuICAgICAgICAgIGNhcmQ6IHRhYmxlYXVQaWxlLmZyb250Q2FyZCxcbiAgICAgICAgICB0eXBlOiBGQUNFX1VQX0NBUkRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aW9uSGlzdG9yeS5hZGQoe3R5cGU6IFBBVVNFfSk7XG4gIH1cblxuICB1bmRvICgpXG4gIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9hY3Rpb25IaXN0b3J5LmFjdGlvbnMubWFwKChhLCBpbmRleCwgXykgPT4ge1xuICAgIC8vICAgcmV0dXJuIChhLnR5cGUpO1xuICAgIC8vIH0pKTtcblxuICAgIGxvb3BEZWxldGVQYXVzZXM6IGZvciAoOzspXG4gICAge1xuICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5fYWN0aW9uSGlzdG9yeS5sYXRlc3Q7XG5cbiAgICAgIGlmICghYWN0aW9uKSBicmVhayBsb29wRGVsZXRlUGF1c2VzO1xuXG4gICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKVxuICAgICAge1xuICAgICAgICBjYXNlIFBBVVNFOlxuICAgICAgICAgIHRoaXMuX2FjdGlvbkhpc3RvcnkucmVtb3ZlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWsgbG9vcERlbGV0ZVBhdXNlcztcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGxvb3BFeGVjdXRlVW5kb0FjdGlvbnM6IGZvciAoOzspXG4gICAge1xuICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5fYWN0aW9uSGlzdG9yeS5sYXRlc3Q7XG5cbiAgICAgIGlmICghYWN0aW9uKSBicmVhayBsb29wRXhlY3V0ZVVuZG9BY3Rpb25zO1xuXG4gICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKVxuICAgICAge1xuICAgICAgICBjYXNlIEZBQ0VfVVBfQ0FSRDpcbiAgICAgICAgICBhY3Rpb24uY2FyZC5mYWNlRG93bigpO1xuICAgICAgICAgIHRoaXMuX2FjdGlvbkhpc3RvcnkucmVtb3ZlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgTU9WRV9DQVJEOlxuICAgICAgICAgIHRoaXMuX21vdmVDYXJkQmV0d2VlblBpbGVzKHtcbiAgICAgICAgICAgIGZyb206IGFjdGlvbi50byxcbiAgICAgICAgICAgIHRvOiBhY3Rpb24uZnJvbSxcbiAgICAgICAgICAgIHNpemU6IGFjdGlvbi5zaXplXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5fYWN0aW9uSGlzdG9yeS5yZW1vdmUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBQQVVTRTpcbiAgICAgICAgICB0aGlzLl9hY3Rpb25IaXN0b3J5LnJlbW92ZSgpO1xuICAgICAgICAgIGJyZWFrIGxvb3BFeGVjdXRlVW5kb0FjdGlvbnM7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHRvU3RyaW5nKClcbiAge1xuICAgIHJldHVybiB0aGlzLl9waWxlcy5tYXAocCA9PiBwLmxhYmVsICsgXCIgXCIgKyBwLnRvU3RyaW5nKCkpLmpvaW4oJ1xcbicpO1xuICB9XG59XG4iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XG5pbXBvcnQge1BpbGV9IGZyb20gJy4vcGlsZSc7XG5cbmV4cG9ydCBjb25zdCBGQUNFX1VQX0NBUkQgPSAnRkFDRV9VUF9DQVJEJztcbmV4cG9ydCBjb25zdCBNT1ZFX0NBUkQgPSAnTU9WRV9DQVJEJztcbmV4cG9ydCBjb25zdCBQQVVTRSA9ICdQQVVTRSc7XG5cbmludGVyZmFjZSBGYWNlVXBBY3Rpb24ge1xuICB0eXBlOiB0eXBlb2YgRkFDRV9VUF9DQVJELFxuICBjYXJkOiBDYXJkXG59XG5cbmludGVyZmFjZSBNb3ZlQ2FyZEFjdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBNT1ZFX0NBUkQsXG4gIGZyb206UGlsZSxcbiAgdG86UGlsZSxcbiAgc2l6ZTpudW1iZXJcbn1cblxuaW50ZXJmYWNlIFBhdXNlQWN0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFBBVVNFXG59XG5cbmV4cG9ydCB0eXBlIFVuZG9hYmxlQWN0aW9uID0gRmFjZVVwQWN0aW9uIHwgTW92ZUNhcmRBY3Rpb24gfCBQYXVzZUFjdGlvbjtcblxuZXhwb3J0IGNsYXNzIFVuZG9hYmxlQWN0aW9uSGlzdG9yeVxue1xuICBwcml2YXRlIF9hY3Rpb25zOlVuZG9hYmxlQWN0aW9uW10gPSBbXTtcblxuICBhZGQgKGFjdGlvbjpVbmRvYWJsZUFjdGlvbilcbiAge1xuICAgIHRoaXMuX2FjdGlvbnMgPSBbLi4udGhpcy5fYWN0aW9ucywgYWN0aW9uXTtcbiAgfVxuXG4gIHJlbW92ZSAoKVxuICB7XG4gICAgdGhpcy5fYWN0aW9ucyA9IHRoaXMuX2FjdGlvbnMuc2xpY2UoMCwgLTEpO1xuICB9XG5cbiAgZ2V0IGxhdGVzdCAoKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGlvbnMubGVuZ3RoID09PSAwID8gdW5kZWZpbmVkIDogdGhpcy5fYWN0aW9uc1t0aGlzLl9hY3Rpb25zLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgZ2V0IGFjdGlvbnMgKClcbiAge1xuICAgIHJldHVybiBbLi4udGhpcy5fYWN0aW9uc107XG4gIH1cbn1cbiIsImNsYXNzIERlZmVycmVkPFQ+ICB7XG5cbiAgX2NyZWF0ZVByb21pc2U6ICgpID0+IFByb21pc2U8VD47XG4gIF9wcm9taXNlOiBQcm9taXNlPFQ+IHwgdW5kZWZpbmVkO1xuICBfY2FsbGJhY2s6ICgpID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgX2lzRG9uZTogYm9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yICh7XG4gICAgY3JlYXRlUHJvbWlzZVxuICB9OntcbiAgICBjcmVhdGVQcm9taXNlOiAoKSA9PiBQcm9taXNlPFQ+XG4gIH0pXG4gIHtcbiAgICB0aGlzLl9jcmVhdGVQcm9taXNlID0gY3JlYXRlUHJvbWlzZTtcbiAgfVxuXG4gIHByb2Nlc3MgKClcbiAge1xuICAgIGlmICghdGhpcy5fcHJvbWlzZSlcbiAgICB7XG4gICAgICB0aGlzLl9wcm9taXNlID0gdGhpcy5fY3JlYXRlUHJvbWlzZSgpO1xuICAgICAgdGhpcy5fcHJvbWlzZS5jYXRjaCgoKSA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJQcm9taXNlIHJlamVjdGVkIVwiKTtcbiAgICAgIH0pLnRoZW4oKCkgPT4ge1xuICAgICAgICB0aGlzLl9jYWxsYmFjaygpO1xuICAgICAgICB0aGlzLl9pc0RvbmUgPSB0cnVlO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgZmluYWxseSAoY2FsbGJhY2s6ICgpID0+IHZvaWQpXG4gIHtcbiAgICB0aGlzLl9jYWxsYmFjayA9IGNhbGxiYWNrO1xuICB9XG5cbiAgZ2V0IGlzRG9uZSAoKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuX2lzRG9uZTtcbiAgfVxufVxuXG5cbmV4cG9ydCBjbGFzcyBQcm9taXNlUXVldWU8VD5cbntcbiAgcHJpdmF0ZSBfbGF0ZXN0RGVmZXJyZWQ6RGVmZXJyZWQ8VD4gfCB1bmRlZmluZWQ7XG5cbiAgZ2V0IGlzUHJvY2Vzc2luZyAoKSB7XG4gICAgcmV0dXJuICh0aGlzLl9sYXRlc3REZWZlcnJlZCAmJiAhdGhpcy5fbGF0ZXN0RGVmZXJyZWQuaXNEb25lKSBhcyBib29sZWFuO1xuICB9XG5cbiAgYWRkIChjcmVhdGVQcm9taXNlOiAoKSA9PiBQcm9taXNlPFQ+KVxuICB7XG4gICAgaWYgKCF0aGlzLl9sYXRlc3REZWZlcnJlZCB8fCB0aGlzLl9sYXRlc3REZWZlcnJlZC5pc0RvbmUpXG4gICAge1xuICAgICAgdGhpcy5fbGF0ZXN0RGVmZXJyZWQgPSBuZXcgRGVmZXJyZWQoe2NyZWF0ZVByb21pc2V9KTtcbiAgICAgIHRoaXMuX2xhdGVzdERlZmVycmVkLnByb2Nlc3MoKTtcbiAgICB9XG4gICAgZWxzZVxuICAgIHtcbiAgICAgIGNvbnN0IGRlZmVycmVkID0gbmV3IERlZmVycmVkKHtjcmVhdGVQcm9taXNlfSk7XG4gICAgICB0aGlzLl9sYXRlc3REZWZlcnJlZC5maW5hbGx5KCgpID0+IHtcbiAgICAgICAgZGVmZXJyZWQucHJvY2VzcygpO1xuICAgICAgfSk7XG4gICAgICB0aGlzLl9sYXRlc3REZWZlcnJlZCA9IGRlZmVycmVkO1xuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XG5pbXBvcnQge1RhYmxlR2FtZU9iamVjdFdpdGhFdmVudCBhcyBUYWJsZUdhbWVPYmplY3R9IGZyb20gJy4uL2dhbWUtb2JqZWN0cy13aXRoLWV2ZW50cy90YWJsZSc7XG5pbXBvcnQge1BpbGVHYW1lT2JqZWN0V2l0aEV2ZW50IGFzIFBpbGVHYW1lT2JqZWN0fSBmcm9tICcuLi9nYW1lLW9iamVjdHMtd2l0aC1ldmVudHMvcGlsZSc7XG5pbXBvcnQge0NhcmRHYW1lT2JqZWN0V2l0aEV2ZW50IGFzIENhcmRHYW1lT2JqZWN0fSBmcm9tICcuLi9nYW1lLW9iamVjdHMtd2l0aC1ldmVudHMvY2FyZCc7XG5pbXBvcnQge2VtaXR0ZXIgYXMgZ2FtZU9iamVjdEV2ZW50RW1pdHRlcn0gZnJvbSAnLi4vZ2FtZS1vYmplY3RzLXdpdGgtZXZlbnRzL2VtaXR0ZXInO1xuaW1wb3J0IHtCdXR0b259IGZyb20gJy4uL2dhbWUtb2JqZWN0cy9idXR0b24nO1xuaW1wb3J0IHtDYXJkV2l0aEV2ZW50IGFzIENhcmR9IGZyb20gJy4uL21vZGVscy13aXRoLWV2ZW50cy9jYXJkJztcbmltcG9ydCB7UGlsZVdpdGhFdmVudCBhcyBQaWxlfSBmcm9tICcuLi9tb2RlbHMtd2l0aC1ldmVudHMvcGlsZSc7XG5pbXBvcnQge1RhYmxlV2l0aEV2ZW50IGFzIFRhYmxlfSBmcm9tICcuLi9tb2RlbHMtd2l0aC1ldmVudHMvdGFibGUnO1xuaW1wb3J0IHtjcmVhdGVDYXJkc1dpdGhFdmVudHMgYXMgY3JlYXRlQ2FyZHN9IGZyb20gJy4uL21vZGVscy13aXRoLWV2ZW50cy9jcmVhdGUtY2FyZHMnO1xuaW1wb3J0IHtyYW5kb21pemVBcnJheX0gZnJvbSAnLi4vbW9kZWxzL2NyZWF0ZS1jYXJkcyc7XG5pbXBvcnQge2VtaXR0ZXIgYXMgbW9kZWxFdmVudEVtaXR0ZXJ9IGZyb20gJy4uL21vZGVscy13aXRoLWV2ZW50cy9lbWl0dGVyJztcbi8vIGltcG9ydCB7VHdlZW5RdWV1ZX0gZnJvbSAnLi4vZ2FtZS1vYmplY3RzL3R3ZWVuLXF1ZXVlJztcbmltcG9ydCB7UHJvbWlzZVF1ZXVlfSBmcm9tICcuLi9wcm9taXNlLXF1ZXVlJztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTWFpblNjZW5lIGV4dGVuZHMgUGhhc2VyLlNjZW5lXG57XG4gIHByaXZhdGUgX190YWJsZTpUYWJsZSB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfX3RhYmxlR2FtZU9iamVjdDpUYWJsZUdhbWVPYmplY3QgfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX2NhcmRBbmltYXRpb25CZXR3ZWVuUGlsZXNRdWV1ZTpQcm9taXNlUXVldWU8dm9pZD4gPSBuZXcgUHJvbWlzZVF1ZXVlPHZvaWQ+KCk7XG4gIHByaXZhdGUgX2RyYWdQaWxlQW5pbWF0aW9uUXVldWU6UHJvbWlzZVF1ZXVlPHZvaWQ+ID0gbmV3IFByb21pc2VRdWV1ZTx2b2lkPigpO1xuICAvLyBwcml2YXRlIF9pc0FuaW1hdGluZzpib29sZWFuID0gZmFsc2U7XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHN1cGVyKCdtYWluJyk7XG4gIH1cblxuICBwcml2YXRlIGdldCBfdGFibGUgKCkge1xuICAgIGlmICghdGhpcy5fX3RhYmxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RhYmxlIGlzIG5vdCByZWFkeS4nKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuX190YWJsZTtcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IF90YWJsZUdhbWVPYmplY3QgKCkge1xuICAgIGlmICghdGhpcy5fX3RhYmxlR2FtZU9iamVjdCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUYWJsZSBHYW1lIE9iamVjdCBpcyBub3QgcmVhZHkuJyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9fdGFibGVHYW1lT2JqZWN0O1xuICB9XG5cbiAgYXN5bmMgY3JlYXRlICgpXG4gIHtcbiAgICB0aGlzLl9fdGFibGUgPSBuZXcgVGFibGUoe1xuICAgICAgbnVtYmVyT2ZUYWJsZWF1UGlsZXM6IDYsXG4gICAgICBudW1iZXJPZkRyYXdQaWxlczogMyxcbiAgICAgIGNhcmRzOiBjcmVhdGVDYXJkcyh7XG4gICAgICAgIG51bWJlck9mRGVja3NVc2VkOiAyLFxuICAgICAgICBudW1iZXJPZlN1aXRzOiAxXG4gICAgICB9KVxuICAgIH0pO1xuXG4gICAgdGhpcy5fX3RhYmxlR2FtZU9iamVjdCA9IG5ldyBUYWJsZUdhbWVPYmplY3Qoe1xuICAgICAgc2NlbmU6IHRoaXMsXG4gICAgICBkZWNrUGlsZUlkOiB0aGlzLl90YWJsZS5kZWNrUGlsZS5pZCxcbiAgICAgIGRyYXdQaWxlc0lkczogdGhpcy5fdGFibGUuZHJhd1BpbGVzLm1hcChwID0+IHAuaWQpLFxuICAgICAgdGFibGVhdVBpbGVzSWRzOiB0aGlzLl90YWJsZS50YWJsZWF1UGlsZXMubWFwKHAgPT4gcC5pZCksXG4gICAgICBkaXNjYXJkUGlsZXNJZHM6IHRoaXMuX3RhYmxlLmRpc2NhcmRQaWxlcy5tYXAocCA9PiBwLmlkKSxcbiAgICAgIGRyYWdQaWxlSWQ6IFwiZHJhZy1waWxlXCIsXG4gICAgICBjYXJkR2FtZU9iamVjdHM6IHRoaXMuX3RhYmxlLmNhcmRzLm1hcChjYXJkID0+IG5ldyBDYXJkR2FtZU9iamVjdCh7XG4gICAgICAgIHNjZW5lOiB0aGlzLFxuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICBzdWl0OiBjYXJkLnN1aXQsXG4gICAgICAgIHJhbms6IGNhcmQucmFuayxcbiAgICAgICAgbmFtZTogY2FyZC5pZFxuICAgICAgfSkpXG4gICAgfSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmFkZCh0aGlzLl90YWJsZUdhbWVPYmplY3QpO1xuXG4gICAgY29uc3QgdW5kb0J1dHRvbiA9IG5ldyBCdXR0b24oe1xuICAgICAgc2NlbmU6IHRoaXMsXG4gICAgICB4OiAxMDAsXG4gICAgICB5OiA2MDAsXG4gICAgICBsYWJlbDogJ1VORE8nXG4gICAgfSk7XG4gICAgdW5kb0J1dHRvbi5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY2FyZEFuaW1hdGlvbkJldHdlZW5QaWxlc1F1ZXVlLmlzUHJvY2Vzc2luZykgcmV0dXJuO1xuICAgICAgdGhpcy5fdGFibGUudW5kbygpO1xuICAgIH0pO1xuICAgIHRoaXMuY2hpbGRyZW4uYWRkKHVuZG9CdXR0b24pO1xuXG4gICAgY29uc3QgaGludEJ1dHRvbiA9IG5ldyBCdXR0b24oe1xuICAgICAgc2NlbmU6IHRoaXMsXG4gICAgICB4OiAyNTAsXG4gICAgICB5OiA2MDAsXG4gICAgICBsYWJlbDogJ0hJTlQnXG4gICAgfSk7XG4gICAgaGludEJ1dHRvbi5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB7XG4gICAgICBpZiAodGhpcy5fY2FyZEFuaW1hdGlvbkJldHdlZW5QaWxlc1F1ZXVlLmlzUHJvY2Vzc2luZykgcmV0dXJuO1xuICAgICAgY29uc29sZS5sb2codGhpcy5fdGFibGUuZ2V0UG9zc2libGVNb3Zlc0JldHdlZW5UYWJsZWF1UGlsZXMoKSk7XG4gICAgfSk7XG4gICAgdGhpcy5jaGlsZHJlbi5hZGQoaGludEJ1dHRvbik7XG5cbiAgICBnYW1lT2JqZWN0RXZlbnRFbWl0dGVyLm9uKFwiQ0FSRF9QT0lOVEVST1ZFUlwiLCB0aGlzLm9uQ2FyZFBvaW50ZXJPdmVyLmJpbmQodGhpcykpO1xuICAgIGdhbWVPYmplY3RFdmVudEVtaXR0ZXIub24oXCJDQVJEX1BPSU5URVJPVVRcIiwgdGhpcy5vbkNhcmRQb2ludGVyT3V0LmJpbmQodGhpcykpO1xuICAgIGdhbWVPYmplY3RFdmVudEVtaXR0ZXIub24oXCJDQVJEX1BPSU5URVJET1dOXCIsIHRoaXMub25DYXJkUG9pbnRlckRvd24uYmluZCh0aGlzKSk7XG4gICAgZ2FtZU9iamVjdEV2ZW50RW1pdHRlci5vbihcIkNBUkRfRFJBR1NUQVJUXCIsIHRoaXMub25DYXJkRHJhZ1N0YXJ0LmJpbmQodGhpcykpO1xuICAgIGdhbWVPYmplY3RFdmVudEVtaXR0ZXIub24oXCJDQVJEX0RSQUdcIiwgdGhpcy5vbkNhcmREcmFnLmJpbmQodGhpcykpO1xuICAgIGdhbWVPYmplY3RFdmVudEVtaXR0ZXIub24oXCJDQVJEX0RST1BcIiwgdGhpcy5vbkNhcmREcm9wLmJpbmQodGhpcykpO1xuICAgIGdhbWVPYmplY3RFdmVudEVtaXR0ZXIub24oXCJDQVJEX0RSQUdFTkRcIiwgdGhpcy5vbkNhcmREcmFnRW5kLmJpbmQodGhpcykpO1xuICAgIG1vZGVsRXZlbnRFbWl0dGVyLm9uKFwiTU9WRV9DQVJEU19CRVRXRUVOX1BJTEVTXCIsIHRoaXMub25Nb3ZlQ2FyZHNCZXR3ZWVuUGlsZXMuYmluZCh0aGlzKSk7XG4gICAgbW9kZWxFdmVudEVtaXR0ZXIub24oXCJGTElQX09WRVJfQ0FSRFwiLCB0aGlzLm9uRmxpcE92ZXJDYXJkLmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5fdGFibGUuc3RhcnRHYW1lKCk7XG4gIH1cblxuICBvbkNhcmRQb2ludGVyT3ZlciAoe2NhcmRHYW1lT2JqZWN0fTp7Y2FyZEdhbWVPYmplY3Q6Q2FyZEdhbWVPYmplY3R9KVxuICB7XG4gICAgaWYgKCF0aGlzLl9jYXJkQW5pbWF0aW9uQmV0d2VlblBpbGVzUXVldWUuaXNQcm9jZXNzaW5nKVxuICAgICAgdGhpcy5hZGRIaWdobGlnaHRUb0NhcmRHYW1lT2JqZWN0KHtjYXJkR2FtZU9iamVjdH0pO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuX2NhcmRBbmltYXRpb25CZXR3ZWVuUGlsZXNRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xuICAgICAgICB0aGlzLmFkZEhpZ2hsaWdodFRvQ2FyZEdhbWVPYmplY3Qoe2NhcmRHYW1lT2JqZWN0fSk7XG4gICAgICB9KTtcblxuICAgIC8vIGNvbnN0IHRhcmdldFBpbGUgPSB0aGlzLl90YWJsZS5nZXRQaWxlQnkocGlsZSA9PiBwaWxlLmNhcmRzLmZpbmQoY2FyZCA9PiBjYXJkLmlkID09PSBjYXJkR2FtZU9iamVjdC5uYW1lKSk7XG4gICAgLy9cbiAgICAvLyBpZiAoY2FyZEdhbWVPYmplY3QuaXNGYWNlVXBcbiAgICAvLyAgICYmIHRoaXMuX3RhYmxlLnRhYmxlYXVQaWxlcy5pbmNsdWRlcyh0YXJnZXRQaWxlKSlcbiAgICAvLyB7XG4gICAgLy8gICBjb25zdCBmcm9tUGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZ2V0UGlsZUdhbWVPYmplY3RCeShwID0+IHAubmFtZSA9PT0gdGFyZ2V0UGlsZS5pZCk7XG4gICAgLy8gICBjb25zdCBzaXplID0gZnJvbVBpbGVHYW1lT2JqZWN0LmNhcmRHYW1lT2JqZWN0cy5sZW5ndGggLSBmcm9tUGlsZUdhbWVPYmplY3QuY2FyZEdhbWVPYmplY3RzLmluZGV4T2YoY2FyZEdhbWVPYmplY3QpO1xuICAgIC8vXG4gICAgLy8gICBpZiAoUGlsZS5jaGVja0lmQ2FyZHNBcmVEZXNjZW5kaW5nKHtjYXJkczogdGFyZ2V0UGlsZS5jYXJkcy5zbGljZSgtc2l6ZSksIGZhY2VVcDogdHJ1ZSwgaW5TdWl0OiB0cnVlfSkpXG4gICAgLy8gICB7XG4gICAgLy8gICAgIGlmICghdGhpcy5fY2FyZEFuaW1hdGlvbkJldHdlZW5QaWxlc1F1ZXVlLmlzUHJvY2Vzc2luZylcbiAgICAvLyAgICAgICBjYXJkR2FtZU9iamVjdC5hZGRIaWdobGlnaHQoKTtcbiAgICAvLyAgICAgZWxzZVxuICAgIC8vICAgICAgIHRoaXMuX2NhcmRBbmltYXRpb25CZXR3ZWVuUGlsZXNRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xuICAgIC8vICAgICAgICAgY2FyZEdhbWVPYmplY3QuYWRkSGlnaGxpZ2h0KCk7XG4gICAgLy8gICAgICAgfSk7XG4gICAgLy8gICB9XG4gICAgLy8gfVxuICAgIC8vIGVsc2UgaWYgKHRoaXMuX3RhYmxlLmZyb250RHJhd1BpbGUgPT09IHRhcmdldFBpbGUpXG4gICAgLy8ge1xuICAgIC8vICAgaWYgKCF0aGlzLl9jYXJkQW5pbWF0aW9uQmV0d2VlblBpbGVzUXVldWUuaXNQcm9jZXNzaW5nKVxuICAgIC8vICAgICBjYXJkR2FtZU9iamVjdC5hZGRIaWdobGlnaHQoKTtcbiAgICAvLyAgIGVsc2VcbiAgICAvLyAgICAgdGhpcy5fY2FyZEFuaW1hdGlvbkJldHdlZW5QaWxlc1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XG4gICAgLy8gICAgICAgY2FyZEdhbWVPYmplY3QuYWRkSGlnaGxpZ2h0KCk7XG4gICAgLy8gICAgIH0pO1xuICAgIC8vIH1cbiAgfVxuXG4gIGFkZEhpZ2hsaWdodFRvQ2FyZEdhbWVPYmplY3QgKHtjYXJkR2FtZU9iamVjdH06e2NhcmRHYW1lT2JqZWN0OkNhcmRHYW1lT2JqZWN0fSlcbiAge1xuICAgIGNvbnN0IHRhcmdldFBpbGUgPSB0aGlzLl90YWJsZS5nZXRQaWxlQnkocGlsZSA9PiBwaWxlLmNhcmRzLmZpbmQoY2FyZCA9PiBjYXJkLmlkID09PSBjYXJkR2FtZU9iamVjdC5uYW1lKSk7XG5cbiAgICBpZiAoY2FyZEdhbWVPYmplY3QuaXNGYWNlVXBcbiAgICAgICYmIHRoaXMuX3RhYmxlLnRhYmxlYXVQaWxlcy5pbmNsdWRlcyh0YXJnZXRQaWxlKSlcbiAgICB7XG4gICAgICBjb25zdCBmcm9tUGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZ2V0UGlsZUdhbWVPYmplY3RCeShwID0+IHAubmFtZSA9PT0gdGFyZ2V0UGlsZS5pZCk7XG4gICAgICBjb25zdCBzaXplID0gZnJvbVBpbGVHYW1lT2JqZWN0LmNhcmRHYW1lT2JqZWN0cy5sZW5ndGggLSBmcm9tUGlsZUdhbWVPYmplY3QuY2FyZEdhbWVPYmplY3RzLmluZGV4T2YoY2FyZEdhbWVPYmplY3QpO1xuXG4gICAgICBpZiAoUGlsZS5jaGVja0lmQ2FyZHNBcmVEZXNjZW5kaW5nKHtjYXJkczogdGFyZ2V0UGlsZS5jYXJkcy5zbGljZSgtc2l6ZSksIGZhY2VVcDogdHJ1ZSwgaW5TdWl0OiB0cnVlfSkpXG4gICAgICB7XG4gICAgICAgIGNhcmRHYW1lT2JqZWN0LmFkZEhpZ2hsaWdodCgpO1xuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLl90YWJsZS5mcm9udERyYXdQaWxlID09PSB0YXJnZXRQaWxlKVxuICAgIHtcbiAgICAgIGNhcmRHYW1lT2JqZWN0LmFkZEhpZ2hsaWdodCgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2FyZFBvaW50ZXJPdXQgKHtjYXJkR2FtZU9iamVjdH06e2NhcmRHYW1lT2JqZWN0OkNhcmRHYW1lT2JqZWN0fSlcbiAge1xuICAgIGlmICghdGhpcy5fY2FyZEFuaW1hdGlvbkJldHdlZW5QaWxlc1F1ZXVlLmlzUHJvY2Vzc2luZylcbiAgICAgIGNhcmRHYW1lT2JqZWN0LnJlbW92ZUhpZ2hsaWdodCgpO1xuICAgIGVsc2VcbiAgICAgIHRoaXMuX2NhcmRBbmltYXRpb25CZXR3ZWVuUGlsZXNRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xuICAgICAgICBjYXJkR2FtZU9iamVjdC5yZW1vdmVIaWdobGlnaHQoKTtcbiAgICAgIH0pO1xuICAgIC8vIGlmIChjYXJkR2FtZU9iamVjdC5pc0hpZ2hMaWdodGVkKSBjYXJkR2FtZU9iamVjdC5yZW1vdmVIaWdobGlnaHQoKTtcbiAgfVxuXG4gIG9uQ2FyZFBvaW50ZXJEb3duICh7Y2FyZEdhbWVPYmplY3R9OntjYXJkR2FtZU9iamVjdDpDYXJkR2FtZU9iamVjdH0pXG4gIHtcbiAgICBpZiAoIWNhcmRHYW1lT2JqZWN0LmlzSGlnaExpZ2h0ZWQpIHJldHVybjtcblxuICAgIGNvbnN0IHRhcmdldFBpbGUgPSB0aGlzLl90YWJsZS5nZXRQaWxlQnkocGlsZSA9PiBwaWxlLmNhcmRzLmZpbmQoY2FyZCA9PiBjYXJkLmlkID09PSBjYXJkR2FtZU9iamVjdC5uYW1lKSk7XG5cbiAgICBpZiAodGhpcy5fdGFibGUuZnJvbnREcmF3UGlsZSA9PT0gdGFyZ2V0UGlsZSlcbiAgICB7XG4gICAgICBjYXJkR2FtZU9iamVjdC5yZW1vdmVIaWdobGlnaHQoKTtcbiAgICAgIHRoaXMuX3RhYmxlLmRlYWxDYXJkc0Zyb21EcmF3UGlsZSgpO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2FyZERyYWdTdGFydCAoe2NhcmRHYW1lT2JqZWN0fTp7Y2FyZEdhbWVPYmplY3Q6Q2FyZEdhbWVPYmplY3R9KVxuICB7XG4gICAgaWYgKCFjYXJkR2FtZU9iamVjdC5pc0hpZ2hMaWdodGVkKSByZXR1cm47XG5cbiAgICBjb25zdCB0YXJnZXRQaWxlID0gdGhpcy5fdGFibGUuZ2V0UGlsZUJ5KHBpbGUgPT4gcGlsZS5jYXJkcy5maW5kKGNhcmQgPT4gY2FyZC5pZCA9PT0gY2FyZEdhbWVPYmplY3QubmFtZSkpO1xuXG4gICAgaWYgKGNhcmRHYW1lT2JqZWN0LmlzRmFjZVVwICYmIHRoaXMuX3RhYmxlLnRhYmxlYXVQaWxlcy5pbmNsdWRlcyh0YXJnZXRQaWxlKSlcbiAgICB7XG4gICAgICBjb25zdCBmcm9tUGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZ2V0UGlsZUdhbWVPYmplY3RCeShwID0+IHAubmFtZSA9PT0gdGFyZ2V0UGlsZS5pZCk7XG4gICAgICBjb25zdCBzaXplID0gZnJvbVBpbGVHYW1lT2JqZWN0LmNhcmRHYW1lT2JqZWN0cy5sZW5ndGggLSBmcm9tUGlsZUdhbWVPYmplY3QuY2FyZEdhbWVPYmplY3RzLmluZGV4T2YoY2FyZEdhbWVPYmplY3QpO1xuXG4gICAgICBpZiAoUGlsZS5jaGVja0lmQ2FyZHNBcmVEZXNjZW5kaW5nKHtjYXJkczogdGFyZ2V0UGlsZS5jYXJkcy5zbGljZSgtc2l6ZSksIGZhY2VVcDogdHJ1ZSwgaW5TdWl0OiB0cnVlfSkpXG4gICAgICB7XG4gICAgICAgIGNvbnN0IGRyYWdQaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5kcmFnUGlsZUdhbWVPYmplY3Q7XG4gICAgICAgIGNvbnN0IHkgPSBjYXJkR2FtZU9iamVjdC55O1xuICAgICAgICBkcmFnUGlsZUdhbWVPYmplY3Quc2V0QWN0aXZlKHRydWUpO1xuICAgICAgICB0aGlzLl90YWJsZUdhbWVPYmplY3QuYnJpbmdUb1RvcChkcmFnUGlsZUdhbWVPYmplY3QpO1xuICAgICAgICBkcmFnUGlsZUdhbWVPYmplY3QueCA9IGZyb21QaWxlR2FtZU9iamVjdC54O1xuICAgICAgICBkcmFnUGlsZUdhbWVPYmplY3QueSA9IGZyb21QaWxlR2FtZU9iamVjdC55ICsgeTtcbiAgICAgICAgZHJhZ1BpbGVHYW1lT2JqZWN0LnBsYWNlQ2FyZEdhbWVPYmplY3RzKHtjYXJkR2FtZU9iamVjdHM6IGZyb21QaWxlR2FtZU9iamVjdC5kcmF3RnJvbnRDYXJkR2FtZU9iamVjdHMoe3NpemV9KX0pO1xuICAgICAgICB0aGlzLl9kcmFnUGlsZUFuaW1hdGlvblF1ZXVlLmFkZChhc3luYyAoKSA9PiB7XG4gICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgZHJhZ1BpbGVHYW1lT2JqZWN0LmFkanVzdENhcmRHYW1lT2JqZWN0UG9zaXRpb25zV2l0aEFuaW1hdGlvbigpLFxuICAgICAgICAgICAgZHJhZ1BpbGVHYW1lT2JqZWN0LmV4cGFuZFdpdGhBbmltYXRpb24oKVxuICAgICAgICAgIF0pXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2FyZERyYWcgKHtwb2ludGVyLCBjYXJkR2FtZU9iamVjdH06e3BvaW50ZXI6UGhhc2VyLklucHV0LlBvaW50ZXIsIGNhcmRHYW1lT2JqZWN0OkNhcmRHYW1lT2JqZWN0fSlcbiAge1xuICAgIGlmICghY2FyZEdhbWVPYmplY3QuaXNIaWdoTGlnaHRlZCkgcmV0dXJuO1xuXG4gICAgY29uc3QgdGFyZ2V0UGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZ2V0UGlsZUdhbWVPYmplY3RCeShwaWxlID0+IHBpbGUuY2FyZEdhbWVPYmplY3RzLmZpbmQoY2FyZCA9PiBjYXJkID09PSBjYXJkR2FtZU9iamVjdCkpO1xuXG4gICAgY29uc3QgZHJhZ1BpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmRyYWdQaWxlR2FtZU9iamVjdDtcbiAgICBpZiAodGFyZ2V0UGlsZUdhbWVPYmplY3QgPT09IGRyYWdQaWxlR2FtZU9iamVjdCAmJiBkcmFnUGlsZUdhbWVPYmplY3QuYWN0aXZlKVxuICAgIHtcbiAgICAgIGNvbnN0IGRlbHRhWCA9IHBvaW50ZXIueCAtIHBvaW50ZXIucHJldlBvc2l0aW9uLng7XG4gICAgICBjb25zdCBkZWx0YVkgPSBwb2ludGVyLnkgLSBwb2ludGVyLnByZXZQb3NpdGlvbi55O1xuICAgICAgZHJhZ1BpbGVHYW1lT2JqZWN0LnggKz0gZGVsdGFYO1xuICAgICAgZHJhZ1BpbGVHYW1lT2JqZWN0LnkgKz0gZGVsdGFZO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2FyZERyb3AgKHt6b25lLCBjYXJkR2FtZU9iamVjdH06e3pvbmU6UGhhc2VyLkdhbWVPYmplY3RzLlpvbmUsIGNhcmRHYW1lT2JqZWN0OkNhcmRHYW1lT2JqZWN0fSlcbiAge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbkNhcmREcm9wJyk7XG5cbiAgICAvLyBpZiAodGhpcy5fY2FyZEFuaW1hdGlvbkJldHdlZW5QaWxlc1F1ZXVlLmlzUHJvY2Vzc2luZykgcmV0dXJuO1xuXG4gICAgY29uc3QgdGFyZ2V0UGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZ2V0UGlsZUdhbWVPYmplY3RCeShwaWxlID0+IHBpbGUuY2FyZEdhbWVPYmplY3RzLmZpbmQoY2FyZCA9PiBjYXJkID09PSBjYXJkR2FtZU9iamVjdCkpO1xuXG4gICAgY29uc3QgZHJhZ1BpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmRyYWdQaWxlR2FtZU9iamVjdDtcbiAgICBpZiAodGFyZ2V0UGlsZUdhbWVPYmplY3QgPT09IGRyYWdQaWxlR2FtZU9iamVjdCAmJiBkcmFnUGlsZUdhbWVPYmplY3QuYWN0aXZlKVxuICAgIHtcbiAgICAgIGNvbnN0IGZyb21QaWxlID0gdGhpcy5fdGFibGUuZ2V0UGlsZUJ5KHBpbGUgPT4gcGlsZS5jYXJkcy5maW5kKGNhcmQgPT4gY2FyZC5pZCA9PT0gY2FyZEdhbWVPYmplY3QubmFtZSkpO1xuICAgICAgY29uc3QgZnJvbVBpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnkocCA9PiBwLm5hbWUgPT09IGZyb21QaWxlLmlkKTtcbiAgICAgIGNvbnN0IHRvUGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZ2V0UGlsZUdhbWVPYmplY3RCeShwID0+IHAuem9uZSA9PT0gem9uZSk7XG4gICAgICBjb25zdCB0b1BpbGUgPSB0aGlzLl90YWJsZS5nZXRQaWxlQnkocGlsZSA9PiB0b1BpbGVHYW1lT2JqZWN0Lm5hbWUgPT09IHBpbGUuaWQpO1xuICAgICAgY29uc3Qgc2l6ZSA9IGRyYWdQaWxlR2FtZU9iamVjdC5jYXJkR2FtZU9iamVjdHMubGVuZ3RoO1xuICAgICAgY29uc3QgY2FyZEdhbWVPYmplY3RzID0gZHJhZ1BpbGVHYW1lT2JqZWN0LmRyYXdGcm9udENhcmRHYW1lT2JqZWN0cyh7c2l6ZX0pO1xuICAgICAgZnJvbVBpbGVHYW1lT2JqZWN0LnBsYWNlQ2FyZEdhbWVPYmplY3RzKHtjYXJkR2FtZU9iamVjdHN9KTtcblxuICAgICAgY29uc3QgX2NhcmRzID0gY2FyZEdhbWVPYmplY3RzLm1hcChjT2JqID0+IHtcbiAgICAgICAgY29uc3QgY2FyZCA9IHRoaXMuX3RhYmxlLmNhcmRzLmZpbmQoYyA9PiBjT2JqLm5hbWUgPT09IGMuaWQpO1xuICAgICAgICBpZiAoIWNhcmQpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgY29ycmVzcG9uZGluZyBjYXJkcy5cIik7XG4gICAgICAgIHJldHVybiBjYXJkO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICghdG9QaWxlLmZyb250Q2FyZCB8fCBQaWxlLmNoZWNrSWZDYXJkc0FyZURlc2NlbmRpbmcoe2NhcmRzOiBbdG9QaWxlLmZyb250Q2FyZCwgLi4uX2NhcmRzXSwgZmFjZVVwOiB0cnVlfSkpXG4gICAgICB7XG4gICAgICAgIHRoaXMuX3RhYmxlLm1vdmVDYXJkQmV0d2VlblRhYmxlYXVQaWxlcyh7XG4gICAgICAgICAgdG86IHRvUGlsZSxcbiAgICAgICAgICBmcm9tOiBmcm9tUGlsZSxcbiAgICAgICAgICBzaXplXG4gICAgICAgIH0pO1xuICAgICAgICBkcmFnUGlsZUdhbWVPYmplY3Quc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZyb21QaWxlR2FtZU9iamVjdC5hZGp1c3RDYXJkR2FtZU9iamVjdFBvc2l0aW9ucygpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2FyZERyYWdFbmQgKHtjYXJkR2FtZU9iamVjdH06e2NhcmRHYW1lT2JqZWN0OkNhcmRHYW1lT2JqZWN0fSlcbiAge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbkNhcmREcmFnRW5kJyk7XG5cbiAgICAvLyBpZiAodGhpcy5fY2FyZEFuaW1hdGlvbkJldHdlZW5QaWxlc1F1ZXVlLmlzUHJvY2Vzc2luZykgcmV0dXJuO1xuXG4gICAgY29uc3QgdGFyZ2V0UGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZ2V0UGlsZUdhbWVPYmplY3RCeShwID0+IHtcbiAgICAgIHJldHVybiBwLmNhcmRHYW1lT2JqZWN0cy5maW5kKGMgPT4gYyA9PT0gY2FyZEdhbWVPYmplY3QpO1xuICAgIH0pO1xuXG4gICAgY29uc3QgZHJhZ1BpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmRyYWdQaWxlR2FtZU9iamVjdDtcbiAgICBpZiAodGFyZ2V0UGlsZUdhbWVPYmplY3QgPT09IGRyYWdQaWxlR2FtZU9iamVjdCAmJiBkcmFnUGlsZUdhbWVPYmplY3QuYWN0aXZlKVxuICAgIHtcbiAgICAgIGNvbnN0IHNpemUgPSBkcmFnUGlsZUdhbWVPYmplY3QuY2FyZEdhbWVPYmplY3RzLmxlbmd0aDtcbiAgICAgIGNvbnN0IGZyb21QaWxlID0gdGhpcy5fdGFibGUuZ2V0UGlsZUJ5KHBpbGUgPT4gcGlsZS5jYXJkcy5maW5kKGNhcmQgPT4gY2FyZC5pZCA9PT0gY2FyZEdhbWVPYmplY3QubmFtZSkpO1xuICAgICAgY29uc3QgZnJvbVBpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnkocCA9PiBwLm5hbWUgPT09IGZyb21QaWxlLmlkKTtcbiAgICAgIGNvbnN0IGNhcmRHYW1lT2JqZWN0cyA9IGRyYWdQaWxlR2FtZU9iamVjdC5kcmF3RnJvbnRDYXJkR2FtZU9iamVjdHMoe3NpemV9KTtcbiAgICAgIGZyb21QaWxlR2FtZU9iamVjdC5wbGFjZUNhcmRHYW1lT2JqZWN0cyh7Y2FyZEdhbWVPYmplY3RzfSk7XG4gICAgICBmcm9tUGlsZUdhbWVPYmplY3QuYWRqdXN0Q2FyZEdhbWVPYmplY3RQb3NpdGlvbnMoKTtcbiAgICAgIGRyYWdQaWxlR2FtZU9iamVjdC5zZXRBY3RpdmUoZmFsc2UpO1xuICAgIH1cbiAgfVxuXG4gIG9uTW92ZUNhcmRzQmV0d2VlblBpbGVzICh7ZnJvbSwgdG8sIHNpemV9Ontmcm9tOlBpbGUsIHRvOlBpbGUsIHNpemU6bnVtYmVyfSkge1xuICAgIC8vIGNvbnNvbGUubG9nKCdvbk1vdmVDYXJkc0JldHdlZW5QaWxlcycpO1xuICAgIGNvbnN0IGZyb21QaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5nZXRQaWxlR2FtZU9iamVjdEJ5KHAgPT4gcC5uYW1lID09PSBmcm9tLmlkKTtcbiAgICBjb25zdCB0b1BpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnkocCA9PiBwLm5hbWUgPT09IHRvLmlkKTtcblxuICAgIHRoaXMuX2NhcmRBbmltYXRpb25CZXR3ZWVuUGlsZXNRdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xuICAgICAgY29uc3QgY2FyZEdhbWVPYmplY3RzID0gZnJvbVBpbGVHYW1lT2JqZWN0LmRyYXdGcm9udENhcmRHYW1lT2JqZWN0cyh7c2l6ZX0pO1xuICAgICAgY2FyZEdhbWVPYmplY3RzLmZvckVhY2goYyA9PiBjLnJlbW92ZUhpZ2hsaWdodCgpKTtcbiAgICAgIHRvUGlsZUdhbWVPYmplY3QucGxhY2VDYXJkR2FtZU9iamVjdHMoe2NhcmRHYW1lT2JqZWN0c30pO1xuICAgICAgdGhpcy5fdGFibGVHYW1lT2JqZWN0LmJyaW5nVG9Ub3AodG9QaWxlR2FtZU9iamVjdCk7XG4gICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgIHRvUGlsZUdhbWVPYmplY3QuYWRqdXN0Q2FyZEdhbWVPYmplY3RQb3NpdGlvbnNXaXRoQW5pbWF0aW9uKCksXG4gICAgICAgIGZyb21QaWxlR2FtZU9iamVjdC5hZGp1c3RDYXJkR2FtZU9iamVjdFBvc2l0aW9uc1dpdGhBbmltYXRpb24oKVxuICAgICAgXSk7XG4gICAgfSk7XG5cbiAgICBpZiAodGhpcy5fdGFibGUuaXNDbGVhcikge1xuICAgICAgdGhpcy5fY2FyZEFuaW1hdGlvbkJldHdlZW5QaWxlc1F1ZXVlLmFkZChhc3luYyAoKSA9PiB7XG4gICAgICAgIGFsZXJ0KFwiWW91IGJlYXQgdGhlIGdhbWUhISFcIik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBvbkZsaXBPdmVyQ2FyZCAoe2NhcmR9OntjYXJkOkNhcmR9KSB7XG4gICAgY29uc3QgY2FyZEdhcm1PYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuY2FyZEdhbWVPYmplY3RzLmZpbmQoY2FyZENhcm1lT2JqZWN0ID0+IGNhcmRDYXJtZU9iamVjdC5uYW1lID09PSBjYXJkLmlkKTtcbiAgICBpZiAoY2FyZEdhcm1PYmplY3QpIHtcbiAgICAgIHRoaXMuX2NhcmRBbmltYXRpb25CZXR3ZWVuUGlsZXNRdWV1ZS5hZGQoKCkgPT4gY2FyZEdhcm1PYmplY3QuZmxpcE92ZXIoY2FyZC5pc0ZhY2VVcCkpO1xuICAgIH07XG4gIH1cblxufVxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0aWYoX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSkge1xuXHRcdHJldHVybiBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFByb21pc2UgPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcImFwcFwiOiAwXG59O1xuXG52YXIgZGVmZXJyZWRNb2R1bGVzID0gW1xuXHRbXCIuL3NyYy9pbmRleC50c1wiLFwidmVuZG9yc1wiXVxuXTtcbi8vIG5vIGNodW5rIG9uIGRlbWFuZCBsb2FkaW5nXG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG4vLyBubyBITVJcblxuLy8gbm8gSE1SIG1hbmlmZXN0XG5cbnZhciBjaGVja0RlZmVycmVkTW9kdWxlcyA9ICgpID0+IHtcblxufTtcbmZ1bmN0aW9uIGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCgpIHtcblx0dmFyIHJlc3VsdDtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGRlZmVycmVkTW9kdWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciBkZWZlcnJlZE1vZHVsZSA9IGRlZmVycmVkTW9kdWxlc1tpXTtcblx0XHR2YXIgZnVsZmlsbGVkID0gdHJ1ZTtcblx0XHRmb3IodmFyIGogPSAxOyBqIDwgZGVmZXJyZWRNb2R1bGUubGVuZ3RoOyBqKyspIHtcblx0XHRcdHZhciBkZXBJZCA9IGRlZmVycmVkTW9kdWxlW2pdO1xuXHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtzW2RlcElkXSAhPT0gMCkgZnVsZmlsbGVkID0gZmFsc2U7XG5cdFx0fVxuXHRcdGlmKGZ1bGZpbGxlZCkge1xuXHRcdFx0ZGVmZXJyZWRNb2R1bGVzLnNwbGljZShpLS0sIDEpO1xuXHRcdFx0cmVzdWx0ID0gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBkZWZlcnJlZE1vZHVsZVswXSk7XG5cdFx0fVxuXHR9XG5cdGlmKGRlZmVycmVkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cblx0XHR9XG5cdH1cblx0cmV0dXJuIHJlc3VsdDtcbn1cbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0Ly8gcmVzZXQgc3RhcnR1cCBmdW5jdGlvbiBzbyBpdCBjYW4gYmUgY2FsbGVkIGFnYWluIHdoZW4gbW9yZSBzdGFydHVwIGNvZGUgaXMgYWRkZWRcblx0X193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXG5cdH1cblx0Y2h1bmtMb2FkaW5nR2xvYmFsID0gY2h1bmtMb2FkaW5nR2xvYmFsLnNsaWNlKCk7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBjaHVua0xvYWRpbmdHbG9iYWwubGVuZ3RoOyBpKyspIHdlYnBhY2tKc29ucENhbGxiYWNrKGNodW5rTG9hZGluZ0dsb2JhbFtpXSk7XG5cdHJldHVybiAoY2hlY2tEZWZlcnJlZE1vZHVsZXMgPSBjaGVja0RlZmVycmVkTW9kdWxlc0ltcGwpKCk7XG59O1xuXG4vLyBpbnN0YWxsIGEgSlNPTlAgY2FsbGJhY2sgZm9yIGNodW5rIGxvYWRpbmdcbnZhciB3ZWJwYWNrSnNvbnBDYWxsYmFjayA9IChkYXRhKSA9PiB7XG5cdHZhciBbY2h1bmtJZHMsIG1vcmVNb2R1bGVzLCBydW50aW1lLCBleGVjdXRlTW9kdWxlc10gPSBkYXRhO1xuXHQvLyBhZGQgXCJtb3JlTW9kdWxlc1wiIHRvIHRoZSBtb2R1bGVzIG9iamVjdCxcblx0Ly8gdGhlbiBmbGFnIGFsbCBcImNodW5rSWRzXCIgYXMgbG9hZGVkIGFuZCBmaXJlIGNhbGxiYWNrXG5cdHZhciBtb2R1bGVJZCwgY2h1bmtJZCwgaSA9IDAsIHJlc29sdmVzID0gW107XG5cdGZvcig7aSA8IGNodW5rSWRzLmxlbmd0aDsgaSsrKSB7XG5cdFx0Y2h1bmtJZCA9IGNodW5rSWRzW2ldO1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSkge1xuXHRcdFx0cmVzb2x2ZXMucHVzaChpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF1bMF0pO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhtb3JlTW9kdWxlcywgbW9kdWxlSWQpKSB7XG5cdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bbW9kdWxlSWRdID0gbW9yZU1vZHVsZXNbbW9kdWxlSWRdO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBydW50aW1lKF9fd2VicGFja19yZXF1aXJlX18pO1xuXHRwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbihkYXRhKTtcblx0d2hpbGUocmVzb2x2ZXMubGVuZ3RoKSB7XG5cdFx0cmVzb2x2ZXMuc2hpZnQoKSgpO1xuXHR9XG5cblx0Ly8gYWRkIGVudHJ5IG1vZHVsZXMgZnJvbSBsb2FkZWQgY2h1bmsgdG8gZGVmZXJyZWQgbGlzdFxuXHRpZihleGVjdXRlTW9kdWxlcykgZGVmZXJyZWRNb2R1bGVzLnB1c2guYXBwbHkoZGVmZXJyZWRNb2R1bGVzLCBleGVjdXRlTW9kdWxlcyk7XG5cblx0Ly8gcnVuIGRlZmVycmVkIG1vZHVsZXMgd2hlbiBhbGwgY2h1bmtzIHJlYWR5XG5cdHJldHVybiBjaGVja0RlZmVycmVkTW9kdWxlcygpO1xufVxuXG52YXIgY2h1bmtMb2FkaW5nR2xvYmFsID0gc2VsZltcIndlYnBhY2tDaHVua3NwaWRlcl9zb2xpdGFpcmVcIl0gPSBzZWxmW1wid2VicGFja0NodW5rc3BpZGVyX3NvbGl0YWlyZVwiXSB8fCBbXTtcbnZhciBwYXJlbnRDaHVua0xvYWRpbmdGdW5jdGlvbiA9IGNodW5rTG9hZGluZ0dsb2JhbC5wdXNoLmJpbmQoY2h1bmtMb2FkaW5nR2xvYmFsKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2s7IiwiLy8gcnVuIHN0YXJ0dXBcbnJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLngoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=