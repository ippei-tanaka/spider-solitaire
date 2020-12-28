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
        _this._disabled = false;
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
    Button.prototype.disable = function () {
        this._disabled = true;
        this.setAlpha(0.5);
        this.disableInteractive();
    };
    Button.prototype.enable = function () {
        this._disabled = false;
        this.setAlpha(1);
        this.setInteractive();
    };
    Object.defineProperty(Button.prototype, "isDisabled", {
        get: function () {
            return this._disabled;
        },
        enumerable: false,
        configurable: true
    });
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
            this._emitter.emit("QUEUE_CANCEL", { actuallyCancelled: false });
        }
        else {
            job.onEndCallback = function () { };
            job.runQueueCancelCallback();
            this._emitter.emit("QUEUE_CANCEL", { actuallyCancelled: true });
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
            var undoButton, uKey, hintButton, hKey;
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
                undoButton.on('pointerdown', function () { return _this._table.undo(); });
                this.children.add(undoButton);
                this._cardAnimationQueue.onQueueStart(function () { return undoButton.disable(); });
                this._cardAnimationQueue.onQueueEnd(function () { return undoButton.enable(); });
                this._cardAnimationQueue.onQueueCancel(function () { return undoButton.enable(); });
                this._hintAnimationQueue.onQueueStart(function () { return undoButton.disable(); });
                this._hintAnimationQueue.onQueueEnd(function () { return undoButton.enable(); });
                this._hintAnimationQueue.onQueueCancel(function () { return undoButton.enable(); });
                uKey = this.input.keyboard.addKey(phaser_1.default.Input.Keyboard.KeyCodes.U);
                uKey.on('down', function (event) {
                    if (!undoButton.isDisabled)
                        _this._table.undo();
                });
                hintButton = new button_1.Button({
                    scene: this,
                    x: 250,
                    y: 600,
                    label: 'HINT'
                });
                hintButton.on('pointerdown', function () { return _this.showHints(); });
                this.children.add(hintButton);
                this._cardAnimationQueue.onQueueStart(function () { return hintButton.disable(); });
                this._cardAnimationQueue.onQueueEnd(function () { return hintButton.enable(); });
                this._cardAnimationQueue.onQueueCancel(function () { return hintButton.enable(); });
                this._hintAnimationQueue.onQueueStart(function () { return hintButton.disable(); });
                this._hintAnimationQueue.onQueueEnd(function () { return hintButton.enable(); });
                this._hintAnimationQueue.onQueueCancel(function () { return hintButton.enable(); });
                hKey = this.input.keyboard.addKey(phaser_1.default.Input.Keyboard.KeyCodes.H);
                hKey.on('down', function (event) {
                    if (!hintButton.isDisabled)
                        _this.showHints();
                });
                this.input.on('pointerdown', function (pointer, gameObjects) {
                    if (!gameObjects.includes(hintButton) && _this._hintAnimationQueue.isProcessing) {
                        _this._hintAnimationQueue.cancel();
                    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL2V2ZW50LWVtaXR0ZXIvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9nYW1lLW9iamVjdHMtd2l0aC1ldmVudHMvY2FyZC50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL2dhbWUtb2JqZWN0cy13aXRoLWV2ZW50cy9lbWl0dGVyLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvZ2FtZS1vYmplY3RzLXdpdGgtZXZlbnRzL3RhYmxlLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvZ2FtZS1vYmplY3RzL2J1dHRvbi50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL2dhbWUtb2JqZWN0cy9jYXJkLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvZ2FtZS1vYmplY3RzL3BpbGUudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9nYW1lLW9iamVjdHMvdGFibGUudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9nYW1lLW9iamVjdHMvdHJhbnNmb3JtLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9qb2ItcXVldWUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMtd2l0aC1ldmVudHMvY2FyZC50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL21vZGVscy13aXRoLWV2ZW50cy9jcmVhdGUtY2FyZHMudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMtd2l0aC1ldmVudHMvZW1pdHRlci50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL21vZGVscy13aXRoLWV2ZW50cy9waWxlLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvbW9kZWxzLXdpdGgtZXZlbnRzL3RhYmxlLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvbW9kZWxzL2NhcmQudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMvY3JlYXRlLWNhcmRzLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvLi9zcmMvbW9kZWxzL3BpbGUudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMvdGFibGUudHMiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS8uL3NyYy9tb2RlbHMvdW5kb2FibGUtYWN0aW9ucy50cyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlLy4vc3JjL3NjZW5lcy9tYWluLXNjZW5lLnRzIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvL1VzZXJzL2l0YW5ha2EvRG9jdW1lbnRzL1Byb2plY3RzL3NwaWRlci1zb2xpdGFpcmUvbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90fHN5bmN8bm9ucmVjdXJzaXZlfC9eXFwuXFwvbG9nJC8iLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL3NwaWRlci1zb2xpdGFpcmUvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlL3dlYnBhY2svcnVudGltZS9ub2RlIG1vZHVsZSBkZWNvcmF0b3IiLCJ3ZWJwYWNrOi8vc3BpZGVyLXNvbGl0YWlyZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9zcGlkZXItc29saXRhaXJlL3dlYnBhY2svc3RhcnR1cCJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvRkFBb0M7QUFlcEM7SUFJRTtRQUVFLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxxQkFBWSxFQUFFLENBQUM7UUFDbEMsc0NBQXNDO0lBQ3hDLENBQUM7SUFFRCxvQkFBRSxHQUFGLFVBQTJCLFNBQVksRUFBRSxFQUF3QjtRQUMvRCxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxTQUFTLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUVELHFCQUFHLEdBQUgsVUFBNEIsU0FBWSxFQUFFLEVBQXdCO1FBQ2hFLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLFNBQVMsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUNsQyxDQUFDO0lBRUQsc0JBQUksR0FBSixVQUE2QixTQUFZLEVBQUUsTUFBWTtRQUNyRCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUNILGNBQUM7QUFBRCxDQUFDO0FBckJZLDBCQUFPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkcEIsa0dBQWtDO0FBQ2xDLDJGQUF3RTtBQUl4RTtJQUE2QywyQ0FBYztJQUV6RCxpQ0FBYSxJQUF1QjtRQUFwQyxZQUVFLGtCQUFNLElBQUksQ0FBQyxTQVFaO1FBUEMsS0FBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsVUFBQyxPQUFlLElBQUssd0JBQU8sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUUsRUFBQyxjQUFjLEVBQUMsS0FBSSxFQUFFLE9BQU8sV0FBQyxDQUFDLEVBQWhFLENBQWdFLENB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O1dBQ0E7V0FDQTtXQUNBO1dBQ0EsRTs7Ozs7V0NKQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxlQUFlLDRCQUE0QjtXQUMzQztXQUNBO1dBQ0EsZ0JBQWdCLDJCQUEyQjtXQUMzQztXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSxlQUFlLCtCQUErQjtXQUM5QztXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU0sb0JBQW9CO1dBQzFCO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQSwrQzs7OztVQzNGQTtVQUNBIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7RXZlbnRFbWl0dGVyfSBmcm9tICdldmVudHMnO1xuXG50eXBlIF9FdmVudE1hcCA9IFJlY29yZDxzdHJpbmcsIGFueT47XG50eXBlIF9FdmVudEtleTxUIGV4dGVuZHMgX0V2ZW50TWFwPiA9IHN0cmluZyAmIGtleW9mIFQ7XG50eXBlIF9FdmVudFJlY2VpdmVyPFQ+ID0gKHBhcmFtczogVCkgPT4gdm9pZDtcblxuaW50ZXJmYWNlIF9FbWl0dGVyPFQgZXh0ZW5kcyBfRXZlbnRNYXA+IHtcbiAgb248SyBleHRlbmRzIF9FdmVudEtleTxUPj5cbiAgICAoZXZlbnROYW1lOiBLLCBmbjogX0V2ZW50UmVjZWl2ZXI8VFtLXT4pOiB2b2lkO1xuICBvZmY8SyBleHRlbmRzIF9FdmVudEtleTxUPj5cbiAgICAoZXZlbnROYW1lOiBLLCBmbjogX0V2ZW50UmVjZWl2ZXI8VFtLXT4pOiB2b2lkO1xuICBlbWl0PEsgZXh0ZW5kcyBfRXZlbnRLZXk8VD4+XG4gICAgKGV2ZW50TmFtZTogSywgcGFyYW1zOiBUW0tdKTogdm9pZDtcbn1cblxuZXhwb3J0IGNsYXNzIEVtaXR0ZXI8VCBleHRlbmRzIF9FdmVudE1hcD4gaW1wbGVtZW50cyBfRW1pdHRlcjxUPlxue1xuICBwcml2YXRlIGVtaXR0ZXI7XG5cbiAgY29uc3RydWN0b3IgKClcbiAge1xuICAgIHRoaXMuZW1pdHRlciA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAvLyB0aGlzLmVtaXR0ZXIuc2V0TWF4TGlzdGVuZXJzKDEwMDApO1xuICB9XG5cbiAgb248SyBleHRlbmRzIF9FdmVudEtleTxUPj4oZXZlbnROYW1lOiBLLCBmbjogX0V2ZW50UmVjZWl2ZXI8VFtLXT4pIHtcbiAgICB0aGlzLmVtaXR0ZXIub24oZXZlbnROYW1lLCBmbik7XG4gIH1cblxuICBvZmY8SyBleHRlbmRzIF9FdmVudEtleTxUPj4oZXZlbnROYW1lOiBLLCBmbjogX0V2ZW50UmVjZWl2ZXI8VFtLXT4pIHtcbiAgICB0aGlzLmVtaXR0ZXIub2ZmKGV2ZW50TmFtZSwgZm4pO1xuICB9XG5cbiAgZW1pdDxLIGV4dGVuZHMgX0V2ZW50S2V5PFQ+PihldmVudE5hbWU6IEssIHBhcmFtczogVFtLXSkge1xuICAgIHRoaXMuZW1pdHRlci5lbWl0KGV2ZW50TmFtZSwgcGFyYW1zKTtcbiAgfVxufVxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xuaW1wb3J0IHtlbWl0dGVyfSBmcm9tICcuL2VtaXR0ZXInO1xuaW1wb3J0IHtDYXJkR2FtZU9iamVjdCwgQ2FyZEdhbWVPYmplY3RBcmdzfSBmcm9tIFwiLi4vZ2FtZS1vYmplY3RzL2NhcmRcIjtcblxudHlwZSBQb2ludGVyID0gUGhhc2VyLklucHV0LlBvaW50ZXI7XG5cbmV4cG9ydCBjbGFzcyBDYXJkR2FtZU9iamVjdFdpdGhFdmVudCBleHRlbmRzIENhcmRHYW1lT2JqZWN0XG57XG4gIGNvbnN0cnVjdG9yIChhcmdzOkNhcmRHYW1lT2JqZWN0QXJncylcbiAge1xuICAgIHN1cGVyKGFyZ3MpO1xuICAgIHRoaXMub24oJ3BvaW50ZXJkb3duJywgKHBvaW50ZXI6UG9pbnRlcikgPT4gZW1pdHRlci5lbWl0KFwiQ0FSRF9QT0lOVEVSRE9XTlwiLCB7Y2FyZEdhbWVPYmplY3Q6dGhpcywgcG9pbnRlcn0pKTtcbiAgICB0aGlzLm9uKCdwb2ludGVyb3ZlcicsIChwb2ludGVyOlBvaW50ZXIpID0+IGVtaXR0ZXIuZW1pdChcIkNBUkRfUE9JTlRFUk9WRVJcIiwge2NhcmRHYW1lT2JqZWN0OnRoaXMsIHBvaW50ZXJ9KSk7XG4gICAgdGhpcy5vbigncG9pbnRlcm91dCcsIChwb2ludGVyOlBvaW50ZXIpID0+IGVtaXR0ZXIuZW1pdChcIkNBUkRfUE9JTlRFUk9VVFwiLCB7Y2FyZEdhbWVPYmplY3Q6dGhpcywgcG9pbnRlcn0pKTtcbiAgICB0aGlzLm9uKCdkcmFnc3RhcnQnLCAocG9pbnRlcjpQb2ludGVyKSA9PiBlbWl0dGVyLmVtaXQoXCJDQVJEX0RSQUdTVEFSVFwiLCB7Y2FyZEdhbWVPYmplY3Q6dGhpcywgcG9pbnRlcn0pKTtcbiAgICB0aGlzLm9uKCdkcmFnJywgKHBvaW50ZXI6UG9pbnRlcikgPT4gZW1pdHRlci5lbWl0KFwiQ0FSRF9EUkFHXCIsIHtjYXJkR2FtZU9iamVjdDp0aGlzLCBwb2ludGVyfSkpO1xuICAgIHRoaXMub24oJ2Ryb3AnLCAocG9pbnRlcjpQb2ludGVyLCB6b25lOlBoYXNlci5HYW1lT2JqZWN0cy5ab25lKSA9PiBlbWl0dGVyLmVtaXQoXCJDQVJEX0RST1BcIiwge2NhcmRHYW1lT2JqZWN0OnRoaXMsIHBvaW50ZXIsIHpvbmV9KSk7XG4gICAgdGhpcy5vbignZHJhZ2VuZCcsIChwb2ludGVyOlBvaW50ZXIpID0+IGVtaXR0ZXIuZW1pdChcIkNBUkRfRFJBR0VORFwiLCB7Y2FyZEdhbWVPYmplY3Q6dGhpcywgcG9pbnRlcn0pKTtcbiAgfVxufVxuIiwiaW1wb3J0IHtFbWl0dGVyfSBmcm9tICcuLi9ldmVudC1lbWl0dGVyJztcbmltcG9ydCB7Vmlld0V2ZW50c30gZnJvbSAnLi9ldmVudHMnO1xuXG5leHBvcnQgY29uc3QgZW1pdHRlciA9IG5ldyBFbWl0dGVyPFZpZXdFdmVudHM+KCk7XG4iLCIvLyBpbXBvcnQge2VtaXR0ZXJ9IGZyb20gJy4vZW1pdHRlcic7XG5pbXBvcnQge1RhYmxlR2FtZU9iamVjdH0gZnJvbSBcIi4uL2dhbWUtb2JqZWN0cy90YWJsZVwiO1xuXG5leHBvcnQgY2xhc3MgVGFibGVHYW1lT2JqZWN0V2l0aEV2ZW50IGV4dGVuZHMgVGFibGVHYW1lT2JqZWN0XG57XG4gIC8vIGNvbnN0cnVjdG9yIChhcmdzOiBUYWJsZUdhbWVPYmplY3RTZXR0aW5ncylcbiAgLy8ge1xuICAvLyAgIHN1cGVyKGFyZ3MpO1xuICAvL1xuICAvLyAgIHRoaXMuZHJhd1BpbGVHYW1lT2JqZWN0cy5mb3JFYWNoKHBpbGVHYW1lT2JqZWN0ID0+IHtcbiAgLy8gICAgIHBpbGVHYW1lT2JqZWN0Lm9uKFwicG9pbnRlcmRvd25cIiwgKCkgPT4ge1xuICAvLyAgICAgICBlbWl0dGVyLmVtaXQoXCJEUkFXUElMRV9QT0lOVEVSRE9XTlwiLCB7cGlsZUdhbWVPYmplY3R9KTtcbiAgLy8gICAgIH0pO1xuICAvLyAgIH0pO1xuICAvLyB9XG59XG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gXCJwaGFzZXJcIjtcblxuY29uc3Qge1xuICBUZXh0LFxuICBDb250YWluZXJcbn0gPSBQaGFzZXIuR2FtZU9iamVjdHM7XG5cbmV4cG9ydCBjbGFzcyBCdXR0b24gZXh0ZW5kcyBDb250YWluZXJcbntcbiAgcHJpdmF0ZSBfZGlzYWJsZWQ6Ym9vbGVhbiA9IGZhbHNlO1xuXG4gIGNvbnN0cnVjdG9yICh7XG4gICAgc2NlbmUsXG4gICAgeCxcbiAgICB5LFxuICAgIGxhYmVsXG4gIH06e1xuICAgIHNjZW5lOlBoYXNlci5TY2VuZSxcbiAgICB4Om51bWJlcixcbiAgICB5Om51bWJlcixcbiAgICBsYWJlbDpzdHJpbmdcbiAgfSlcbiAge1xuICAgIHN1cGVyKHNjZW5lLCB4LCB5KTtcbiAgICB0aGlzLnJlbmRlcihsYWJlbCk7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlciAobGFiZWw6c3RyaW5nKVxuICB7XG4gICAgY29uc3Qgc3VpdFRleHQgPSBuZXcgVGV4dCh0aGlzLnNjZW5lLCAwLCAwLCBsYWJlbCwgIHtcbiAgICAgIGZvbnRTaXplOiBcIjM1cHhcIixcbiAgICAgIGNvbG9yOiAnIzAwMDAwMCcsXG4gICAgICBmb250RmFtaWx5OiAnR2VvcmdpYSwgXCJHb3VkeSBCb29rbGV0dGVyIDE5MTFcIiwgVGltZXMsIHNlcmlmJ1xuICAgIH0pO1xuICAgIHN1aXRUZXh0LnggLT0gc3VpdFRleHQud2lkdGggLyAyO1xuICAgIHN1aXRUZXh0LnkgLT0gc3VpdFRleHQuaGVpZ2h0IC8gMjtcbiAgICB0aGlzLmFkZChzdWl0VGV4dCk7XG4gICAgdGhpcy5zZXRTaXplKHN1aXRUZXh0LndpZHRoLCBzdWl0VGV4dC5oZWlnaHQpO1xuICAgIHRoaXMuc2V0SW50ZXJhY3RpdmUoKTtcbiAgfVxuXG4gIGRpc2FibGUgKClcbiAge1xuICAgIHRoaXMuX2Rpc2FibGVkID0gdHJ1ZTtcbiAgICB0aGlzLnNldEFscGhhKDAuNSk7XG4gICAgdGhpcy5kaXNhYmxlSW50ZXJhY3RpdmUoKTtcbiAgfVxuXG4gIGVuYWJsZSAoKVxuICB7XG4gICAgdGhpcy5fZGlzYWJsZWQgPSBmYWxzZTtcbiAgICB0aGlzLnNldEFscGhhKDEpO1xuICAgIHRoaXMuc2V0SW50ZXJhY3RpdmUoKTtcbiAgfVxuXG4gIGdldCBpc0Rpc2FibGVkICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5fZGlzYWJsZWQ7XG4gIH1cbn1cbiIsImltcG9ydCBQaGFzZXIgZnJvbSBcInBoYXNlclwiO1xuaW1wb3J0IHtTdWl0fSBmcm9tIFwiLi4vbW9kZWxzL2NhcmRcIjtcblxuY29uc3Qge1xuICBUZXh0LFxuICBSZWN0YW5nbGUsXG4gIENvbnRhaW5lclxufSA9IFBoYXNlci5HYW1lT2JqZWN0cztcblxuY29uc3QgZ2V0U3VpdFRleHQgPSAoc3VpdDpTdWl0KSA9Plxue1xuICBzd2l0Y2goc3VpdCkge1xuICAgIGNhc2UgU3VpdC5TcGFkZTpcbiAgICByZXR1cm4gJ+KZoCc7XG4gICAgY2FzZSBTdWl0LkNsdWI6XG4gICAgcmV0dXJuICfimaMnO1xuICAgIGNhc2UgU3VpdC5EaWFtb25kOlxuICAgIHJldHVybiAn4pmmJztcbiAgICBjYXNlIFN1aXQuSGVhcnQ6XG4gICAgcmV0dXJuICfimaUnO1xuICB9XG59XG5cbmNvbnN0IGdldFN1aXRDb2xvciA9IChzdWl0OlN1aXQpID0+XG57XG4gIHN3aXRjaChzdWl0KSB7XG4gICAgY2FzZSBTdWl0LlNwYWRlOlxuICAgIGNhc2UgU3VpdC5DbHViOlxuICAgIHJldHVybiAnIzAwMDAwMCc7XG4gICAgY2FzZSBTdWl0LkRpYW1vbmQ6XG4gICAgY2FzZSBTdWl0LkhlYXJ0OlxuICAgIHJldHVybiAnI2ZmMDAwMCc7XG4gIH1cbn1cblxuY29uc3QgZ2V0UmFua1RleHQgPSAocmFuazpudW1iZXIpID0+XG57XG4gIGlmIChyYW5rID09PSAxMSkge1xuICAgIHJldHVybiAnSic7XG4gIH0gZWxzZSBpZiAocmFuayA9PT0gMTIpIHtcbiAgICByZXR1cm4gJ1EnO1xuICB9IGVsc2UgaWYgKHJhbmsgPT09IDEzKSB7XG4gICAgcmV0dXJuICdLJztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcmFuay50b1N0cmluZygpO1xuICB9XG59XG5cbmV4cG9ydCB0eXBlIENhcmRHYW1lT2JqZWN0QXJncyA9IHtcbiAgc2NlbmU6UGhhc2VyLlNjZW5lLFxuICB4Om51bWJlcixcbiAgeTpudW1iZXIsXG4gIHN1aXQ6U3VpdCxcbiAgcmFuazpudW1iZXIsXG4gIGlzRmFjZVVwPzogYm9vbGVhbixcbiAgbmFtZTpzdHJpbmdcbn07XG5cbmV4cG9ydCBjbGFzcyBDYXJkR2FtZU9iamVjdCBleHRlbmRzIENvbnRhaW5lclxue1xuICBwcml2YXRlIF9mcmFtZTpQaGFzZXIuR2FtZU9iamVjdHMuUmVjdGFuZ2xlIHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIF9iYWNrOlBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIgfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX3Jhbms6bnVtYmVyO1xuICBwcml2YXRlIF9zdWl0OlN1aXQ7XG4gIHByaXZhdGUgX2lzSGlnaExpZ2h0ZWQ6Ym9vbGVhbiA9IGZhbHNlO1xuXG4gIHN0YXRpYyBXSURUSDpudW1iZXIgPSA3MDtcbiAgc3RhdGljIEhFSUdIVDpudW1iZXIgPSAxMTA7XG5cbiAgY29uc3RydWN0b3IgKHtcbiAgICBzY2VuZSxcbiAgICB4LFxuICAgIHksXG4gICAgc3VpdCxcbiAgICByYW5rLFxuICAgIGlzRmFjZVVwLFxuICAgIG5hbWVcbiAgfTpDYXJkR2FtZU9iamVjdEFyZ3MpXG4gIHtcbiAgICBzdXBlcihzY2VuZSwgeCwgeSk7XG4gICAgdGhpcy5yZW5kZXIoc3VpdCwgcmFuayk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9zdWl0ID0gc3VpdDtcbiAgICB0aGlzLl9yYW5rID0gcmFuaztcbiAgICB0aGlzLmJhY2sudmlzaWJsZSA9ICFpc0ZhY2VVcDtcbiAgfVxuXG4gIGdldCBzdWl0ICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5fc3VpdDtcbiAgfVxuXG4gIGdldCByYW5rICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5fcmFuaztcbiAgfVxuXG4gIHByaXZhdGUgZ2V0IGZyYW1lICgpXG4gIHtcbiAgICBpZiAoIXRoaXMuX2ZyYW1lKVxuICAgIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fZnJhbWU7XG4gIH1cblxuICBwcml2YXRlIGdldCBiYWNrICgpXG4gIHtcbiAgICBpZiAoIXRoaXMuX2JhY2spXG4gICAge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9iYWNrO1xuICB9XG5cbiAgcHJpdmF0ZSByZW5kZXIgKHN1aXQ6U3VpdCwgcmFuazpudW1iZXIpXG4gIHtcbiAgICBjb25zdCB4ID0gMDtcbiAgICBjb25zdCB5ID0gMDtcbiAgICBjb25zdCBmcmFtZSA9IG5ldyBSZWN0YW5nbGUodGhpcy5zY2VuZSwgeCwgeSwgQ2FyZEdhbWVPYmplY3QuV0lEVEgsIENhcmRHYW1lT2JqZWN0LkhFSUdIVCwgMHhmZmZmZmYpO1xuICAgIGZyYW1lLnNldFN0cm9rZVN0eWxlKDIsIDB4MDAwMDAwKTtcbiAgICB0aGlzLmFkZChmcmFtZSk7XG4gICAgdGhpcy5fZnJhbWUgPSBmcmFtZTtcblxuICAgIGNvbnN0IHJhbmtUZXh0ID0gbmV3IFRleHQodGhpcy5zY2VuZSwgeCAtIDMzLCB5IC0gNTcsICBnZXRSYW5rVGV4dChyYW5rKSArIGdldFN1aXRUZXh0KHN1aXQpLCAge1xuICAgICAgZm9udFNpemU6IFwiMjVweFwiLFxuICAgICAgY29sb3I6IGdldFN1aXRDb2xvcihzdWl0KSxcbiAgICAgIGZvbnRGYW1pbHk6ICdHZW9yZ2lhLCBcIkdvdWR5IEJvb2tsZXR0ZXIgMTkxMVwiLCBUaW1lcywgc2VyaWYnXG4gICAgfSk7XG4gICAgLy8gcmFua1RleHQueCA9IHJhbmtUZXh0LnggLSByYW5rVGV4dC53aWR0aCAvIDI7XG4gICAgdGhpcy5hZGQocmFua1RleHQpO1xuICAgIC8vIHRoaXMuc2V0QWxwaGEoMC4zKVxuXG4gICAgLy8gY29uc3Qgc3VpdFRleHQgPSBuZXcgVGV4dCh0aGlzLnNjZW5lLCB4IC0gMTQsIHkgLSA1OCwgZ2V0U3VpdFRleHQoc3VpdCksICB7XG4gICAgLy8gICBmb250U2l6ZTogXCIyNXB4XCIsXG4gICAgLy8gICBjb2xvcjogZ2V0U3VpdENvbG9yKHN1aXQpLFxuICAgIC8vICAgZm9udEZhbWlseTogJ0dlb3JnaWEsIFwiR291ZHkgQm9va2xldHRlciAxOTExXCIsIFRpbWVzLCBzZXJpZidcbiAgICAvLyB9KTtcbiAgICAvLyBzdWl0VGV4dC54ID0gc3VpdFRleHQueCAtIHN1aXRUZXh0LndpZHRoIC8gMjtcbiAgICAvLyB0aGlzLmFkZChzdWl0VGV4dCk7XG5cbiAgICAvLyBjb25zdCBzdWl0VGV4dCA9IG5ldyBUZXh0KHRoaXMuc2NlbmUsIHgsIHkgLSA0NSwgZ2V0U3VpdFRleHQoc3VpdCksICB7XG4gICAgLy8gICBmb250U2l6ZTogXCI0NXB4XCIsXG4gICAgLy8gICBjb2xvcjogZ2V0U3VpdENvbG9yKHN1aXQpLFxuICAgIC8vICAgZm9udEZhbWlseTogJ0dlb3JnaWEsIFwiR291ZHkgQm9va2xldHRlciAxOTExXCIsIFRpbWVzLCBzZXJpZidcbiAgICAvLyB9KTtcbiAgICAvLyBzdWl0VGV4dC54ID0gc3VpdFRleHQueCAtIHN1aXRUZXh0LndpZHRoIC8gMjtcbiAgICAvLyB0aGlzLmFkZChzdWl0VGV4dCk7XG4gICAgLy9cbiAgICAvLyBjb25zdCByYW5rVGV4dCA9IG5ldyBUZXh0KHRoaXMuc2NlbmUsIHgsIHkgLSAyLCAgZ2V0UmFua1RleHQocmFuayksICB7XG4gICAgLy8gICBmb250U2l6ZTogXCIzNXB4XCIsXG4gICAgLy8gICBjb2xvcjogZ2V0U3VpdENvbG9yKHN1aXQpLFxuICAgIC8vICAgZm9udEZhbWlseTogJ0dlb3JnaWEsIFwiR291ZHkgQm9va2xldHRlciAxOTExXCIsIFRpbWVzLCBzZXJpZidcbiAgICAvLyB9KTtcbiAgICAvLyByYW5rVGV4dC54ID0gcmFua1RleHQueCAtIHJhbmtUZXh0LndpZHRoIC8gMjtcbiAgICAvLyB0aGlzLmFkZChyYW5rVGV4dCk7XG5cbiAgICB0aGlzLl9iYWNrID0gbmV3IENvbnRhaW5lcih0aGlzLnNjZW5lLCB4LCB5KTtcblxuICAgIGNvbnN0IGJhY2tQYXR0ZXJuID0gbmV3IFJlY3RhbmdsZSh0aGlzLnNjZW5lLCB4LCB5LCBDYXJkR2FtZU9iamVjdC5XSURUSCAtIDIwLCBDYXJkR2FtZU9iamVjdC5IRUlHSFQgLSAyMCwgMHhhYWFhYWEpO1xuICAgIGJhY2tQYXR0ZXJuLnNldFN0cm9rZVN0eWxlKDMsIDB4YWFhYWFhKTtcbiAgICBjb25zdCBiYWNrV2hpdGUgPSBuZXcgUmVjdGFuZ2xlKHRoaXMuc2NlbmUsIHgsIHksIENhcmRHYW1lT2JqZWN0LldJRFRIIC0gMiwgQ2FyZEdhbWVPYmplY3QuSEVJR0hUIC0gMiwgMHhmZmZmZmYpO1xuICAgIHRoaXMuYmFjay5hZGQoYmFja1doaXRlKTtcbiAgICB0aGlzLmJhY2suYWRkKGJhY2tQYXR0ZXJuKTtcbiAgICB0aGlzLmFkZCh0aGlzLmJhY2spO1xuXG4gICAgdGhpcy5zZXRTaXplKENhcmRHYW1lT2JqZWN0LldJRFRILCBDYXJkR2FtZU9iamVjdC5IRUlHSFQpO1xuICAgIHRoaXMuc2V0SW50ZXJhY3RpdmUoe2RyYWdnYWJsZTogdHJ1ZX0pO1xuICB9XG5cbiAgZmxpcE92ZXIgKHVwOmJvb2xlYW4pIHtcbiAgICByZXR1cm4gbmV3IFByb21pc2U8dm9pZD4ocmVzb2x2ZSA9PiB7XG4gICAgICBjb25zdCB0aW1lbGluZSA9IHRoaXMuc2NlbmUudHdlZW5zLmNyZWF0ZVRpbWVsaW5lKCk7XG4gICAgICB0aW1lbGluZS5hZGQoe1xuICAgICAgICB0YXJnZXRzOiB0aGlzLFxuICAgICAgICBwcm9wczoge1xuICAgICAgICAgIHNjYWxlWDogMCxcbiAgICAgICAgfSxcbiAgICAgICAgZHVyYXRpb246IDM1LFxuICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5iYWNrLnZpc2libGUgPSAhdXA7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgdGltZWxpbmUuYWRkKHtcbiAgICAgICAgdGFyZ2V0czogdGhpcyxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBzY2FsZVg6IDEsXG4gICAgICAgIH0sXG4gICAgICAgIGR1cmF0aW9uOiAzNSxcbiAgICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICB0aW1lbGluZS5wbGF5KCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXQgaXNGYWNlVXAgKClcbiAge1xuICAgIHJldHVybiAhdGhpcy5iYWNrLnZpc2libGU7XG4gIH1cblxuICBhZGRIaWdobGlnaHQgKClcbiAge1xuICAgIHRoaXMuZnJhbWUuc2V0U3Ryb2tlU3R5bGUoMiwgMHhmZjU1ODgpO1xuICAgIHRoaXMuX2lzSGlnaExpZ2h0ZWQgPSB0cnVlO1xuICB9XG5cbiAgcmVtb3ZlSGlnaGxpZ2h0ICgpXG4gIHtcbiAgICB0aGlzLmZyYW1lLnNldFN0cm9rZVN0eWxlKDIsIDB4MDAwMDAwKTtcbiAgICB0aGlzLl9pc0hpZ2hMaWdodGVkID0gZmFsc2U7XG4gIH1cblxuICBnZXQgaXNIaWdoTGlnaHRlZCAoKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuX2lzSGlnaExpZ2h0ZWQ7XG4gIH1cbn1cbiIsImltcG9ydCBQaGFzZXIgZnJvbSBcInBoYXNlclwiO1xuaW1wb3J0IHtDYXJkR2FtZU9iamVjdH0gZnJvbSBcIi4vY2FyZFwiO1xuaW1wb3J0IHtnZXRXb3JsZFBvc2l0aW9ufSBmcm9tICcuL3RyYW5zZm9ybSc7XG5cbmV4cG9ydCB0eXBlIFBpbGVHYW1lT2JqZWN0QXJncyA9IHtcbiAgc2NlbmU6UGhhc2VyLlNjZW5lLFxuICB4Om51bWJlcixcbiAgeTpudW1iZXIsXG4gIG5hbWU6c3RyaW5nLFxuICBpc1NwcmVhZD86Ym9vbGVhbixcbiAgaXNEcm9wVGFyZ2V0Pzpib29sZWFuLFxuICBsYWJlbD86c3RyaW5nXG4gIC8vIGlzSW50ZXJhY3RpdmU/OmJvb2xlYW5cbn1cblxuaW50ZXJmYWNlIENhcmRHYW1lT2JqZWN0QWRqdXN0ZWRQb3NpdGlvbiB7XG4gIHg6IG51bWJlcixcbiAgeTogbnVtYmVyLFxuICBjYXJkR2FtZU9iamVjdDogQ2FyZEdhbWVPYmplY3Rcbn1cblxuZXhwb3J0IGNsYXNzIFBpbGVHYW1lT2JqZWN0IGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lclxue1xuICBwcml2YXRlIF9sYWJlbDpzdHJpbmc7XG4gIHByaXZhdGUgX2lzU3ByZWFkOmJvb2xlYW4gPSBmYWxzZTtcbiAgcHJpdmF0ZSBfY2FyZEdhbWVPYmplY3RzOkNhcmRHYW1lT2JqZWN0W10gPSBbXTtcbiAgcHJpdmF0ZSBfem9uZTpQaGFzZXIuR2FtZU9iamVjdHMuWm9uZSB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSBfem9uZVJlY3Q6UGhhc2VyLkdhbWVPYmplY3RzLlJlY3RhbmdsZSB8IHVuZGVmaW5lZDtcbiAgLy8gcHJpdmF0ZSBfaXNJbnRlcmFjdGl2ZTpib29sZWFuID0gZmFsc2U7XG4gIHByaXZhdGUgX2ZhY2VEb3duQ2FyZEdhcDpudW1iZXIgPSAxNTtcbiAgcHJpdmF0ZSBfZmFjZVVwQ2FyZEdhcDpudW1iZXIgPSAyNjtcbiAgcHJpdmF0ZSBfbWF4SGVpZ2h0T2ZHYXBzOm51bWJlciA9IDIwMDtcblxuICBjb25zdHJ1Y3RvciAoe1xuICAgIHNjZW5lLFxuICAgIHgsXG4gICAgeSxcbiAgICBuYW1lLFxuICAgIGlzU3ByZWFkLFxuICAgIGlzRHJvcFRhcmdldCxcbiAgICBsYWJlbFxuICAgIC8vIGlzSW50ZXJhY3RpdmVcbiAgfTpQaWxlR2FtZU9iamVjdEFyZ3MpXG4gIHtcbiAgICBzdXBlcihzY2VuZSwgeCwgeSk7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLl9sYWJlbCA9IGxhYmVsIHx8ICcnO1xuXG4gICAgaWYgKGlzU3ByZWFkKSB7XG4gICAgICB0aGlzLl9pc1NwcmVhZCA9IHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGlzRHJvcFRhcmdldCkge1xuICAgICAgdGhpcy5fem9uZSA9IHRoaXMucmVuZGVyWm9uZSgpO1xuICAgICAgdGhpcy5fem9uZVJlY3QgPSB0aGlzLnJlbmRlclpvbmVSZWN0KCk7XG4gICAgfVxuXG4gICAgLy8gaWYgKGlzSW50ZXJhY3RpdmUpXG4gICAgLy8ge1xuICAgIC8vICAgdGhpcy5zZXRTaXplKENhcmRHYW1lT2JqZWN0LldJRFRILCBDYXJkR2FtZU9iamVjdC5IRUlHSFQpO1xuICAgIC8vICAgdGhpcy5zZXRJbnRlcmFjdGl2ZSgpO1xuICAgIC8vICAgdGhpcy5faXNJbnRlcmFjdGl2ZSA9IHRydWU7XG4gICAgLy8gfVxuICB9XG5cbiAgZ2V0IGxhYmVsICgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFiZWw7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclpvbmUgKClcbiAge1xuICAgIGNvbnN0IHpvbmUgPSBuZXcgUGhhc2VyLkdhbWVPYmplY3RzLlpvbmUodGhpcy5zY2VuZSwgMCwgMCwgMSwgMSk7XG4gICAgdGhpcy5hZGQoem9uZSk7XG4gICAgcmV0dXJuIHpvbmU7XG4gIH1cblxuICBwcml2YXRlIHJlbmRlclpvbmVSZWN0ICgpXG4gIHtcbiAgICBjb25zdCByZWN0ID0gbmV3IFBoYXNlci5HYW1lT2JqZWN0cy5SZWN0YW5nbGUodGhpcy5zY2VuZSwgMCwgMCwgMSwgMSwgMHhjY2NjY2MpO1xuICAgIHRoaXMuYWRkKHJlY3QpO1xuICAgIHJldHVybiByZWN0O1xuICB9XG5cbiAgcHJpdmF0ZSByZXNpemVab25lICgpXG4gIHtcbiAgICBjb25zdCB3aWR0aCA9IENhcmRHYW1lT2JqZWN0LldJRFRIO1xuICAgIGNvbnN0IGZyb250Q2FyZEdhbWVPYmplY3QgPSB0aGlzLl9jYXJkR2FtZU9iamVjdHNbdGhpcy5fY2FyZEdhbWVPYmplY3RzLmxlbmd0aCAtIDFdO1xuICAgIGNvbnN0IGhlaWdodCA9IENhcmRHYW1lT2JqZWN0LkhFSUdIVCArIChmcm9udENhcmRHYW1lT2JqZWN0ID8gZnJvbnRDYXJkR2FtZU9iamVjdC55IDogMCk7XG4gICAgY29uc3QgeCA9IDA7XG4gICAgY29uc3QgeSA9IChoZWlnaHQgLyAyKSAtIChDYXJkR2FtZU9iamVjdC5IRUlHSFQgLyAyKTtcblxuICAgIGlmICh0aGlzLl96b25lKVxuICAgIHtcbiAgICAgIHRoaXMuX3pvbmUueCA9IHg7XG4gICAgICB0aGlzLl96b25lLnkgPSB5O1xuICAgICAgdGhpcy5fem9uZS53aWR0aCA9IHdpZHRoO1xuICAgICAgdGhpcy5fem9uZS5oZWlnaHQgPSBoZWlnaHQ7XG4gICAgICB0aGlzLl96b25lLnNldFJlY3RhbmdsZURyb3Bab25lKHdpZHRoLCBoZWlnaHQpO1xuICAgICAgdGhpcy5fem9uZS5pbnB1dC5oaXRBcmVhLnNldFNpemUod2lkdGgsIGhlaWdodCk7XG4gICAgICB0aGlzLl96b25lLnNldE9yaWdpbih0aGlzLl96b25lLm9yaWdpblgsIHRoaXMuX3pvbmUub3JpZ2luWSk7XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3pvbmVSZWN0KSB7XG4gICAgICB0aGlzLl96b25lUmVjdC54ID0geDtcbiAgICAgIHRoaXMuX3pvbmVSZWN0LnkgPSB5O1xuICAgICAgdGhpcy5fem9uZVJlY3Qud2lkdGggPSB3aWR0aDtcbiAgICAgIHRoaXMuX3pvbmVSZWN0LmhlaWdodCA9IGhlaWdodDtcbiAgICAgIHRoaXMuX3pvbmVSZWN0LnNldE9yaWdpbih0aGlzLl96b25lUmVjdC5vcmlnaW5YLCB0aGlzLl96b25lUmVjdC5vcmlnaW5ZKTtcbiAgICB9XG5cbiAgICAvLyBpZiAodGhpcy5faXNJbnRlcmFjdGl2ZSlcbiAgICAvLyB7XG4gICAgLy8gICB0aGlzLmlucHV0LmhpdEFyZWEuc2V0U2l6ZSh3aWR0aCwgaGVpZ2h0KVxuICAgIC8vIH1cbiAgfVxuXG4gIGdldCB6b25lICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5fem9uZTtcbiAgfVxuXG4gIGdldE5ld0Zyb250Q2FyZEdhbWVPYmplY3RQb3NpdGlvbiAoKVxuICB7XG4gICAgcmV0dXJuIHtcbiAgICAgIHg6IDAsXG4gICAgICB5OiAhdGhpcy5faXNTcHJlYWQgPyAwIDogdGhpcy5fY2FyZEdhbWVPYmplY3RzLnJlZHVjZSgocHJldiwgY2FyZEdhbWVPYmplY3QpID0+IHtcbiAgICAgICAgcmV0dXJuIHByZXYgKyAoY2FyZEdhbWVPYmplY3QuaXNGYWNlVXAgPyB0aGlzLl9mYWNlVXBDYXJkR2FwIDogdGhpcy5fZmFjZURvd25DYXJkR2FwKTtcbiAgICAgIH0sIDApXG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZ2V0QWRqdXN0ZWRDYXJkR2FtZU9iamVjdFBvc2l0aW9ucyAoKVxuICB7XG5cbiAgICBpZiAoIXRoaXMuX2lzU3ByZWFkIHx8IHRoaXMuX2NhcmRHYW1lT2JqZWN0cy5sZW5ndGggPD0gMSlcbiAgICB7XG4gICAgICByZXR1cm4gdGhpcy5fY2FyZEdhbWVPYmplY3RzLm1hcCgoY2FyZEdhbWVPYmplY3QsIGkpID0+ICh7XG4gICAgICAgIHg6IDAsXG4gICAgICAgIHk6IDAsXG4gICAgICAgIGRlcHRoOiBpLFxuICAgICAgICBjYXJkR2FtZU9iamVjdFxuICAgICAgfSkpO1xuICAgIH1cblxuICAgIGNvbnN0IG51bWJlck9mR2FwcyA9IHRoaXMuX2NhcmRHYW1lT2JqZWN0cy5sZW5ndGggLSAxO1xuICAgIGNvbnN0IG51bWJlck9mRmFjZVVwQ2FyZEdhcHMgPSB0aGlzLl9jYXJkR2FtZU9iamVjdHMuc2xpY2UoMCwgLTEpLnJlZHVjZSgocHJlLCBjdXIpID0+IHByZSArIChjdXIuaXNGYWNlVXAgPyAxIDogMCksIDApO1xuICAgIGNvbnN0IG51bWJlck9mRmFjZURvd25DYXJkR2FwcyA9IG51bWJlck9mR2FwcyAtIG51bWJlck9mRmFjZVVwQ2FyZEdhcHM7XG4gICAgY29uc3QgaGVpaGd0T2ZHYXBzID0gbnVtYmVyT2ZGYWNlVXBDYXJkR2FwcyAqIHRoaXMuX2ZhY2VVcENhcmRHYXAgKyBudW1iZXJPZkZhY2VEb3duQ2FyZEdhcHMgKiB0aGlzLl9mYWNlRG93bkNhcmRHYXA7XG5cbiAgICBsZXQgZ2FwT2ZGYWNlVXBDYXJkID0gdGhpcy5fZmFjZVVwQ2FyZEdhcDtcbiAgICBsZXQgZ2FwT2ZGYWNlRG93bkNhcmQgPSB0aGlzLl9mYWNlRG93bkNhcmRHYXA7XG5cbiAgICBpZiAoaGVpaGd0T2ZHYXBzID4gdGhpcy5fbWF4SGVpZ2h0T2ZHYXBzKSB7XG4gICAgICBnYXBPZkZhY2VVcENhcmQgPSB0aGlzLl9tYXhIZWlnaHRPZkdhcHMgLyAobnVtYmVyT2ZGYWNlVXBDYXJkR2FwcyArIG51bWJlck9mRmFjZURvd25DYXJkR2FwcyAqIHRoaXMuX2ZhY2VEb3duQ2FyZEdhcCAvIHRoaXMuX2ZhY2VVcENhcmRHYXApO1xuICAgICAgZ2FwT2ZGYWNlRG93bkNhcmQgPSB0aGlzLl9tYXhIZWlnaHRPZkdhcHMgLyAobnVtYmVyT2ZGYWNlRG93bkNhcmRHYXBzICsgbnVtYmVyT2ZGYWNlVXBDYXJkR2FwcyAqIHRoaXMuX2ZhY2VVcENhcmRHYXAgLyB0aGlzLl9mYWNlRG93bkNhcmRHYXApO1xuICAgIH1cblxuICAgIGxldCBvZmZzZXQgPSAwO1xuICAgIGxldCBwb3NpdGlvbnM6Q2FyZEdhbWVPYmplY3RBZGp1c3RlZFBvc2l0aW9uW10gPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX2NhcmRHYW1lT2JqZWN0cy5sZW5ndGg7IGkrKylcbiAgICB7XG4gICAgICBjb25zdCBjYXJkR2FtZU9iamVjdCA9IHRoaXMuX2NhcmRHYW1lT2JqZWN0c1tpXTtcbiAgICAgIHBvc2l0aW9ucyA9IFsuLi5wb3NpdGlvbnMsIHtcbiAgICAgICAgeDogMCxcbiAgICAgICAgeTogb2Zmc2V0LFxuICAgICAgICBjYXJkR2FtZU9iamVjdFxuICAgICAgfV07XG4gICAgICBvZmZzZXQgPSBvZmZzZXQgKyAoY2FyZEdhbWVPYmplY3QuaXNGYWNlVXAgPyBnYXBPZkZhY2VVcENhcmQgOiBnYXBPZkZhY2VEb3duQ2FyZCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfVxuXG4gIGFzeW5jIGFkanVzdENhcmRHYW1lT2JqZWN0UG9zaXRpb25zV2l0aEFuaW1hdGlvbiAoKVxuICB7XG4gICAgY29uc3QgcG9zaXRpb25zID0gdGhpcy5fZ2V0QWRqdXN0ZWRDYXJkR2FtZU9iamVjdFBvc2l0aW9ucygpO1xuICAgIGF3YWl0IFByb21pc2UuYWxsKHBvc2l0aW9uc1xuICAgICAgLmZpbHRlcihwb3NpdGlvbiA9PiAocG9zaXRpb24ueCAhPT0gcG9zaXRpb24uY2FyZEdhbWVPYmplY3QueCB8fCBwb3NpdGlvbi55ICE9PSBwb3NpdGlvbi5jYXJkR2FtZU9iamVjdC55KSlcbiAgICAgIC5tYXAocG9zaXRpb24gPT4gbmV3IFByb21pc2UocmVzID0+IHtcbiAgICAgICAgdGhpcy5zY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgICAgICB0YXJnZXRzOiBwb3NpdGlvbi5jYXJkR2FtZU9iamVjdCxcbiAgICAgICAgICBwcm9wczoge1xuICAgICAgICAgICAgeDogcG9zaXRpb24ueCxcbiAgICAgICAgICAgIHk6IHBvc2l0aW9uLnlcbiAgICAgICAgICB9LFxuICAgICAgICAgIGR1cmF0aW9uOiA3MCxcbiAgICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiByZXMoKVxuICAgICAgICB9KTtcbiAgICB9KSkpXG4gICAgLnRoZW4oKCkgPT4gdGhpcy5yZXNpemVab25lKCkpXG4gIH1cblxuICBhZGp1c3RDYXJkR2FtZU9iamVjdFBvc2l0aW9ucyAoKVxuICB7XG4gICAgY29uc3QgcG9zaXRpb25zID0gdGhpcy5fZ2V0QWRqdXN0ZWRDYXJkR2FtZU9iamVjdFBvc2l0aW9ucygpO1xuICAgIGZvciAobGV0IHBvc2l0aW9uIG9mIHBvc2l0aW9ucylcbiAgICB7XG4gICAgICBwb3NpdGlvbi5jYXJkR2FtZU9iamVjdC54ID0gcG9zaXRpb24ueDtcbiAgICAgIHBvc2l0aW9uLmNhcmRHYW1lT2JqZWN0LnkgPSBwb3NpdGlvbi55O1xuICAgIH1cbiAgICB0aGlzLnJlc2l6ZVpvbmUoKTtcbiAgfVxuXG4gIGFzeW5jIGV4cGFuZFdpdGhBbmltYXRpb24gKClcbiAge1xuICAgIGF3YWl0IG5ldyBQcm9taXNlKHJlc29sdmUgPT4ge1xuICAgICAgdGhpcy5zY2FsZVggPSAxO1xuICAgICAgdGhpcy5zY2FsZVkgPSAxO1xuICAgICAgdGhpcy5zY2VuZS50d2VlbnMuYWRkKHtcbiAgICAgICAgdGFyZ2V0czogdGhpcyxcbiAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICBzY2FsZVg6IDEuMSxcbiAgICAgICAgICBzY2FsZVk6IDEuMVxuICAgICAgICB9LFxuICAgICAgICBkdXJhdGlvbjogNDAsXG4gICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHJlc29sdmUoKVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICBwbGFjZUNhcmRHYW1lT2JqZWN0cyAoe2NhcmRHYW1lT2JqZWN0c306IHtjYXJkR2FtZU9iamVjdHM6Q2FyZEdhbWVPYmplY3RbXX0pXG4gIHtcbiAgICBjb25zdCB3b3JsZFBvc2l0aW9uID0gZ2V0V29ybGRQb3NpdGlvbih0aGlzKTtcblxuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjYXJkR2FtZU9iamVjdHMubGVuZ3RoOyBpbmRleCsrKVxuICAgIHtcbiAgICAgIGNvbnN0IGNhcmRHYW1lT2JqZWN0ID0gY2FyZEdhbWVPYmplY3RzW2luZGV4XTtcbiAgICAgIGNhcmRHYW1lT2JqZWN0LnggPSBjYXJkR2FtZU9iamVjdC54IC0gd29ybGRQb3NpdGlvbi54O1xuICAgICAgY2FyZEdhbWVPYmplY3QueSA9IGNhcmRHYW1lT2JqZWN0LnkgLSB3b3JsZFBvc2l0aW9uLnk7XG4gICAgICB0aGlzLmFkZChjYXJkR2FtZU9iamVjdCk7XG4gICAgfVxuXG4gICAgdGhpcy5fY2FyZEdhbWVPYmplY3RzID0gWy4uLnRoaXMuX2NhcmRHYW1lT2JqZWN0cywgLi4uY2FyZEdhbWVPYmplY3RzXTtcbiAgfVxuXG4gIGdldEZyb250R2FtZU9iamVjdHMgKHtzaXplfTp7c2l6ZTpudW1iZXJ9KVxuICB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcmRHYW1lT2JqZWN0cy5zbGljZSgtc2l6ZSk7XG4gIH1cblxuICByZW1vdmVGcm9udEdhbWVPYmplY3RzICh7c2l6ZX06e3NpemU6bnVtYmVyfSlcbiAge1xuICAgIGNvbnN0IGNhcmRHYW1lT2JqZWN0cyA9IHRoaXMuZ2V0RnJvbnRHYW1lT2JqZWN0cyh7c2l6ZX0pO1xuICAgIGNvbnN0IHdvcmxkUG9zaXRpb24gPSBnZXRXb3JsZFBvc2l0aW9uKHRoaXMpO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBjYXJkR2FtZU9iamVjdHMubGVuZ3RoOyBpbmRleCsrKVxuICAgIHtcbiAgICAgIGNvbnN0IGNhcmRHYW1lT2JqZWN0ID0gY2FyZEdhbWVPYmplY3RzW2luZGV4XTtcbiAgICAgIGNhcmRHYW1lT2JqZWN0LnggPSBjYXJkR2FtZU9iamVjdC54ICsgd29ybGRQb3NpdGlvbi54O1xuICAgICAgY2FyZEdhbWVPYmplY3QueSA9IGNhcmRHYW1lT2JqZWN0LnkgKyB3b3JsZFBvc2l0aW9uLnk7XG4gICAgICB0aGlzLnJlbW92ZShjYXJkR2FtZU9iamVjdCk7XG4gICAgfVxuICAgIHRoaXMuX2NhcmRHYW1lT2JqZWN0cyA9IHRoaXMuX2NhcmRHYW1lT2JqZWN0cy5zbGljZSgwLCB0aGlzLl9jYXJkR2FtZU9iamVjdHMubGVuZ3RoIC0gc2l6ZSk7XG4gICAgdGhpcy5yZXNpemVab25lKCk7XG4gIH1cblxuICBkcmF3RnJvbnRDYXJkR2FtZU9iamVjdHMgKHtzaXplfTp7c2l6ZTpudW1iZXJ9KVxuICB7XG4gICAgY29uc3QgY2FyZEdhbWVPYmplY3RzID0gdGhpcy5nZXRGcm9udEdhbWVPYmplY3RzKHtzaXplfSk7XG4gICAgdGhpcy5yZW1vdmVGcm9udEdhbWVPYmplY3RzKHtzaXplfSk7XG4gICAgcmV0dXJuIGNhcmRHYW1lT2JqZWN0cztcbiAgfVxuXG4gIGdldCBjYXJkR2FtZU9iamVjdHMgKClcbiAge1xuICAgIHJldHVybiBbLi4udGhpcy5fY2FyZEdhbWVPYmplY3RzXTtcbiAgfVxufVxuIiwiaW1wb3J0IFBoYXNlciBmcm9tIFwicGhhc2VyXCI7XG5pbXBvcnQge0NhcmRHYW1lT2JqZWN0fSBmcm9tICcuL2NhcmQnO1xuaW1wb3J0IHtQaWxlR2FtZU9iamVjdH0gZnJvbSAnLi9waWxlJztcblxuZXhwb3J0IHR5cGUgVGFibGVHYW1lT2JqZWN0U2V0dGluZ3MgPSB7XG4gIHNjZW5lOlBoYXNlci5TY2VuZSxcbiAgZGVja1BpbGVJZDpzdHJpbmcsXG4gIGRyYXdQaWxlc0lkczpzdHJpbmdbXSxcbiAgdGFibGVhdVBpbGVzSWRzOnN0cmluZ1tdLFxuICBkaXNjYXJkUGlsZXNJZHM6c3RyaW5nW10sXG4gIGRyYWdQaWxlSWQ6c3RyaW5nLFxuICBoaW50UGlsZUlkOnN0cmluZyxcbiAgY2FyZEdhbWVPYmplY3RzOiBDYXJkR2FtZU9iamVjdFtdXG59O1xuXG5leHBvcnQgY2xhc3MgVGFibGVHYW1lT2JqZWN0IGV4dGVuZHMgUGhhc2VyLkdhbWVPYmplY3RzLkNvbnRhaW5lclxue1xuICBwcml2YXRlIF9jYXJkR2FtZU9iamVjdHM6Q2FyZEdhbWVPYmplY3RbXSA9IFtdO1xuICBwcml2YXRlIF9waWxlR2FtZU9iamVjdHM6UGlsZUdhbWVPYmplY3RbXSA9IFtdO1xuICBwcml2YXRlIF9kZWNrUGlsZUdhbWVPYmplY3Q6UGlsZUdhbWVPYmplY3Q7XG4gIHByaXZhdGUgX2RyYXdQaWxlR2FtZU9iamVjdHM6UGlsZUdhbWVPYmplY3RbXSA9IFtdO1xuICBwcml2YXRlIF90YWJsZWF1UGlsZUdhbWVPYmplY3RzOlBpbGVHYW1lT2JqZWN0W10gPSBbXTtcbiAgcHJpdmF0ZSBfZGlzY2FyZFBpbGVHYW1lT2JqZWN0czpQaWxlR2FtZU9iamVjdFtdID0gW107XG4gIHByaXZhdGUgX2RyYWdQaWxlR2FtZU9iamVjdDpQaWxlR2FtZU9iamVjdDtcbiAgcHJpdmF0ZSBfaGludFBpbGVHYW1lT2JqZWN0OlBpbGVHYW1lT2JqZWN0O1xuXG4gIGNvbnN0cnVjdG9yICh7XG4gICAgc2NlbmUsXG4gICAgZGVja1BpbGVJZCxcbiAgICBkcmF3UGlsZXNJZHMsXG4gICAgdGFibGVhdVBpbGVzSWRzLFxuICAgIGRpc2NhcmRQaWxlc0lkcyxcbiAgICBkcmFnUGlsZUlkLFxuICAgIGhpbnRQaWxlSWQsXG4gICAgY2FyZEdhbWVPYmplY3RzXG4gIH06VGFibGVHYW1lT2JqZWN0U2V0dGluZ3MpXG4gIHtcbiAgICBzdXBlcihzY2VuZSwgMCwgMCk7XG5cbiAgICB0aGlzLl9jYXJkR2FtZU9iamVjdHMgPSBjYXJkR2FtZU9iamVjdHM7XG5cbiAgICBjb25zdCBfZGVja1BpbGUgPSBuZXcgUGlsZUdhbWVPYmplY3Qoe1xuICAgICAgc2NlbmU6IHRoaXMuc2NlbmUsXG4gICAgICB4OjUwMCxcbiAgICAgIHk6NTAwLFxuICAgICAgbmFtZTogZGVja1BpbGVJZCxcbiAgICAgIGxhYmVsOiAnZGVjaydcbiAgICB9KTtcbiAgICB0aGlzLl9waWxlR2FtZU9iamVjdHMgPSBbLi4udGhpcy5fcGlsZUdhbWVPYmplY3RzLCBfZGVja1BpbGVdO1xuICAgIHRoaXMuX2RlY2tQaWxlR2FtZU9iamVjdCA9IF9kZWNrUGlsZTtcbiAgICB0aGlzLl9kZWNrUGlsZUdhbWVPYmplY3QucGxhY2VDYXJkR2FtZU9iamVjdHMoe2NhcmRHYW1lT2JqZWN0c30pO1xuICAgIHRoaXMuX2RlY2tQaWxlR2FtZU9iamVjdC5hZGp1c3RDYXJkR2FtZU9iamVjdFBvc2l0aW9ucygpO1xuICAgIHRoaXMuYWRkKF9kZWNrUGlsZSk7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZHJhd1BpbGVzSWRzLmxlbmd0aDsgaW5kZXgrKylcbiAgICB7XG4gICAgICBjb25zdCBkcmF3UGlsZSA9IG5ldyBQaWxlR2FtZU9iamVjdCh7XG4gICAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgICAgICB4OjcwICsgaW5kZXggKiAyMCxcbiAgICAgICAgeToxMDAsXG4gICAgICAgIG5hbWU6IGRyYXdQaWxlc0lkc1tpbmRleF0sXG4gICAgICAgIGxhYmVsOiAnZHJhdycgKyBpbmRleFxuICAgICAgfSk7XG4gICAgICB0aGlzLl9waWxlR2FtZU9iamVjdHMgPSBbLi4udGhpcy5fcGlsZUdhbWVPYmplY3RzLCBkcmF3UGlsZV07XG4gICAgICB0aGlzLl9kcmF3UGlsZUdhbWVPYmplY3RzID0gWy4uLnRoaXMuX2RyYXdQaWxlR2FtZU9iamVjdHMsIGRyYXdQaWxlXTtcbiAgICAgIHRoaXMuYWRkKGRyYXdQaWxlKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGFibGVhdVBpbGVzSWRzLmxlbmd0aDsgaW5kZXgrKylcbiAgICB7XG4gICAgICBjb25zdCB0YWJsZWF1UGlsZSA9IG5ldyBQaWxlR2FtZU9iamVjdCh7XG4gICAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgICAgICB4OjcwICsgaW5kZXggKiA5MCxcbiAgICAgICAgeToyNTAsXG4gICAgICAgIG5hbWU6IHRhYmxlYXVQaWxlc0lkc1tpbmRleF0sXG4gICAgICAgIGlzU3ByZWFkOiB0cnVlLFxuICAgICAgICBpc0Ryb3BUYXJnZXQ6IHRydWUsXG4gICAgICAgIGxhYmVsOiAndGFibGVhdScgKyBpbmRleFxuICAgICAgfSk7XG4gICAgICB0aGlzLl9waWxlR2FtZU9iamVjdHMgPSBbLi4udGhpcy5fcGlsZUdhbWVPYmplY3RzLCB0YWJsZWF1UGlsZV07XG4gICAgICB0aGlzLl90YWJsZWF1UGlsZUdhbWVPYmplY3RzID0gWy4uLnRoaXMuX3RhYmxlYXVQaWxlR2FtZU9iamVjdHMsIHRhYmxlYXVQaWxlXTtcbiAgICAgIHRoaXMuYWRkKHRhYmxlYXVQaWxlKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZGlzY2FyZFBpbGVzSWRzLmxlbmd0aDsgaW5kZXgrKylcbiAgICB7XG4gICAgICBjb25zdCBkaXNjYXJkUGlsZSA9IG5ldyBQaWxlR2FtZU9iamVjdCh7XG4gICAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgICAgICB4OjMwMCArIGluZGV4ICogOTAsXG4gICAgICAgIHk6MTAwLFxuICAgICAgICBuYW1lOiBkaXNjYXJkUGlsZXNJZHNbaW5kZXhdLFxuICAgICAgICBsYWJlbDogJ2Rpc2NhcmQnICsgaW5kZXhcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fcGlsZUdhbWVPYmplY3RzID0gWy4uLnRoaXMuX3BpbGVHYW1lT2JqZWN0cywgZGlzY2FyZFBpbGVdO1xuICAgICAgdGhpcy5fZGlzY2FyZFBpbGVHYW1lT2JqZWN0cyA9IFsuLi50aGlzLl9kaXNjYXJkUGlsZUdhbWVPYmplY3RzLCBkaXNjYXJkUGlsZV07XG4gICAgICB0aGlzLmFkZChkaXNjYXJkUGlsZSk7XG4gICAgfVxuXG4gICAgY29uc3QgX2RyYWdQaWxlR2FtZU9iamVjdCA9IG5ldyBQaWxlR2FtZU9iamVjdCh7XG4gICAgICBzY2VuZTogdGhpcy5zY2VuZSxcbiAgICAgIHg6IDAsXG4gICAgICB5OiAwLFxuICAgICAgbmFtZTogZHJhZ1BpbGVJZCxcbiAgICAgIGlzU3ByZWFkOiB0cnVlLFxuICAgICAgbGFiZWw6ICdkcmFnJ1xuICAgIH0pO1xuICAgIHRoaXMuX3BpbGVHYW1lT2JqZWN0cyA9IFsuLi50aGlzLl9waWxlR2FtZU9iamVjdHMsIF9kcmFnUGlsZUdhbWVPYmplY3RdO1xuICAgIHRoaXMuX2RyYWdQaWxlR2FtZU9iamVjdCA9IF9kcmFnUGlsZUdhbWVPYmplY3Q7XG4gICAgdGhpcy5fZHJhZ1BpbGVHYW1lT2JqZWN0LnNldEFjdGl2ZShmYWxzZSk7XG4gICAgdGhpcy5hZGQoX2RyYWdQaWxlR2FtZU9iamVjdCk7XG5cbiAgICBjb25zdCBfaGludFBpbGVHYW1lT2JqZWN0ID0gbmV3IFBpbGVHYW1lT2JqZWN0KHtcbiAgICAgIHNjZW5lOiB0aGlzLnNjZW5lLFxuICAgICAgeDogMCxcbiAgICAgIHk6IDAsXG4gICAgICBuYW1lOiBoaW50UGlsZUlkLFxuICAgICAgaXNTcHJlYWQ6IHRydWUsXG4gICAgICBsYWJlbDogJ2hpbnQnXG4gICAgfSk7XG4gICAgdGhpcy5fcGlsZUdhbWVPYmplY3RzID0gWy4uLnRoaXMuX3BpbGVHYW1lT2JqZWN0cywgX2hpbnRQaWxlR2FtZU9iamVjdF07XG4gICAgdGhpcy5faGludFBpbGVHYW1lT2JqZWN0ID0gX2hpbnRQaWxlR2FtZU9iamVjdDtcbiAgICB0aGlzLl9oaW50UGlsZUdhbWVPYmplY3Quc2V0QWN0aXZlKGZhbHNlKTtcbiAgICB0aGlzLmFkZChfaGludFBpbGVHYW1lT2JqZWN0KTtcbiAgfVxuXG4gIGdldCBjYXJkR2FtZU9iamVjdHMgKClcbiAge1xuICAgIHJldHVybiBbLi4udGhpcy5fY2FyZEdhbWVPYmplY3RzXTtcbiAgfVxuXG4gIGdldCBwaWxlR2FtZU9iamVjdHMgKClcbiAge1xuICAgIHJldHVybiBbLi4udGhpcy5fcGlsZUdhbWVPYmplY3RzXTtcbiAgfVxuXG4gIGdldFBpbGVHYW1lT2JqZWN0QnkgKHByZWRpY2F0ZToocDpQaWxlR2FtZU9iamVjdCkgPT4gYW55KVxuICB7XG4gICAgY29uc3QgcGlsZSA9IHRoaXMuX3BpbGVHYW1lT2JqZWN0cy5maW5kKHByZWRpY2F0ZSk7XG4gICAgaWYgKCFwaWxlKVxuICAgIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIlRoZSBwaWxlIGdhbWUgb2JqZWN0IGRvZXNuJ3QgZXhpc3QuXCIpO1xuICAgIH1cbiAgICByZXR1cm4gcGlsZTtcbiAgfVxuXG4gIGdldFBpbGVHYW1lT2JqZWN0QnlOYW1lIChuYW1lOnN0cmluZylcbiAge1xuICAgIHJldHVybiB0aGlzLmdldFBpbGVHYW1lT2JqZWN0QnkocCA9PiBwLm5hbWUgPT09IG5hbWUpO1xuICB9XG5cbiAgZ2V0UGlsZUdhbWVPYmplY3RCeUNhcmRHYW1lT2JqZWN0TmFtZSAobmFtZTpzdHJpbmcpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQaWxlR2FtZU9iamVjdEJ5KHAgPT4gcC5jYXJkR2FtZU9iamVjdHMuZmluZChjID0+IGMubmFtZSA9PT0gbmFtZSkpO1xuICB9XG5cbiAgZ2V0IGRlY2tQaWxlR2FtZU9iamVjdCAoKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuX2RlY2tQaWxlR2FtZU9iamVjdDtcbiAgfVxuXG4gIGdldCBkcmF3UGlsZUdhbWVPYmplY3RzICgpXG4gIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX2RyYXdQaWxlR2FtZU9iamVjdHNdO1xuICB9XG5cbiAgZ2V0IHRhYmxlYXVQaWxlR2FtZU9iamVjdHMgKClcbiAge1xuICAgIHJldHVybiBbLi4udGhpcy5fdGFibGVhdVBpbGVHYW1lT2JqZWN0c107XG4gIH1cblxuICBnZXQgZHJhZ1BpbGVHYW1lT2JqZWN0ICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5fZHJhZ1BpbGVHYW1lT2JqZWN0O1xuICB9XG5cbiAgZ2V0IGhpbnRQaWxlR2FtZU9iamVjdCAoKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuX2hpbnRQaWxlR2FtZU9iamVjdDtcbiAgfVxufVxuIiwiaW1wb3J0IFBoYXNlciBmcm9tICdwaGFzZXInO1xuXG5leHBvcnQgY29uc3QgZ2V0V29ybGRQb3NpdGlvbiA9IChjb250YWluZXI6IFBoYXNlci5HYW1lT2JqZWN0cy5Db250YWluZXIpID0+XG57XG4gIGxldCBwYXJlbnQgPSBjb250YWluZXIucGFyZW50Q29udGFpbmVyO1xuICBsZXQgeCA9IGNvbnRhaW5lci54O1xuICBsZXQgeSA9IGNvbnRhaW5lci55O1xuICB3aGlsZSAocGFyZW50KVxuICB7XG4gICAgeCA9IHggKyBwYXJlbnQueDtcbiAgICB5ID0geSArIHBhcmVudC55O1xuICAgIHBhcmVudCA9IHBhcmVudC5wYXJlbnRDb250YWluZXI7XG4gIH1cbiAgcmV0dXJuIHt4LCB5fTtcbn07XG4iLCJpbXBvcnQgUGhhc2VyIGZyb20gXCJwaGFzZXJcIjtcbi8vIGltcG9ydCBIZWxsb1dvcmxkU2NlbmUgZnJvbSBcIi4vc2NlbmVzL2hlbGxvLXdvcmxkLXNjZW5lXCI7XG5pbXBvcnQgTWFpblNjZW5lIGZyb20gXCIuL3NjZW5lcy9tYWluLXNjZW5lXCI7XG5cbmNvbnN0IGNvbmZpZyA9IHtcbiAgLy8gdGl0bGU6IFwiR2FtZSBPZiBMaWZlXCIsXG4gIC8vIHVybDogXCJodHRwczovL2dpdGh1Yi5jb20vZGlnaXRzZW5zaXRpdmUvcGhhc2VyMy10eXBlc2NyaXB0XCIsXG4gIC8vIHZlcnNpb246IFwiMS4wXCIsXG4gIHdpZHRoOiAxMDAwLFxuICBoZWlnaHQ6IDgwMCxcbiAgdHlwZTogUGhhc2VyLkFVVE8sXG4gIC8vIHBhcmVudDogXCJnYW1lXCIsXG4gIHNjZW5lOiBbTWFpblNjZW5lXSxcbiAgYmFja2dyb3VuZENvbG9yOiBcIiNlZGVkZWRcIixcbiAgLy8gcmVuZGVyOiB7IHBpeGVsQXJ0OiBmYWxzZSwgYW50aWFsaWFzOiB0cnVlIH1cbiAgLy8gcGh5c2ljczoge1xuICAvLyAgIGRlZmF1bHQ6ICdhcmNhZGUnLFxuICAvLyAgIGFyY2FkZToge1xuICAvLyAgICAgZ3Jhdml0eTogeyB5OiAyMDAgfVxuICAvLyAgIH1cbiAgLy8gfSxcbn07XG5cbi8vIGV4cG9ydCBjbGFzcyBHYW1lIGV4dGVuZHMgUGhhc2VyLkdhbWUge1xuLy8gICBjb25zdHJ1Y3Rvcihjb25maWc6IFBoYXNlci5UeXBlcy5Db3JlLkdhbWVDb25maWcpIHtcbi8vICAgICBzdXBlcihjb25maWcpO1xuLy8gICB9XG4vLyB9XG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwibG9hZFwiLCAoKSA9PiB7XG4gIG5ldyBQaGFzZXIuR2FtZShjb25maWcpO1xufSk7XG4iLCJpbXBvcnQge0VtaXR0ZXJ9IGZyb20gJy4uL2V2ZW50LWVtaXR0ZXInO1xuaW1wb3J0IHtKb2JRdWV1ZUV2ZW50c30gZnJvbSAnLi9ldmVudHMnO1xuXG50eXBlIEpvYlByb21pc2VDcmVhdG9yPFQ+ID0gKFxuICBvblF1ZXVlQ2FuY2VsOiAoY2FsbGJhY2s6KCkgPT4gdm9pZCkgPT4gdm9pZFxuKSA9PiBQcm9taXNlPFQ+O1xuXG5jbGFzcyBKb2I8VD4gIHtcblxuICBwcml2YXRlIF9qb2JQcm9taXNlQ3JlYXRvcjogSm9iUHJvbWlzZUNyZWF0b3I8VD47XG4gIHByaXZhdGUgX29uU3RhcnRDYWxsYmFjazogKCkgPT4gdm9pZCA9ICgpID0+IHt9O1xuICBwcml2YXRlIF9vbkVuZENhbGxiYWNrOiAodmFsdWU6VCkgPT4gdm9pZCA9ICgpID0+IHt9O1xuICBwcml2YXRlIF9vbkZhaWxDYWxsYmFjazogKHJlYXNvbjphbnkpID0+IHZvaWQgPSAoKSA9PiB7fTtcbiAgcHJpdmF0ZSBfb25RdWV1ZUNhbmNlbENhbGxiYWNrOiAoKSA9PiB2b2lkID0gKCkgPT4ge307XG4gIHByaXZhdGUgX3N0YXR1czogbnVtYmVyID0gMDtcblxuICBjb25zdHJ1Y3RvciAoam9iUHJvbWlzZUNyZWF0b3I6IEpvYlByb21pc2VDcmVhdG9yPFQ+KVxuICB7XG4gICAgdGhpcy5fam9iUHJvbWlzZUNyZWF0b3IgPSBqb2JQcm9taXNlQ3JlYXRvcjtcbiAgfVxuXG4gIHN0YXJ0ICgpXG4gIHtcbiAgICBpZiAodGhpcy5pc1VudG91Y2hlZClcbiAgICB7XG4gICAgICBjb25zdCBwcm9taXNlID1cbiAgICAgICAgdGhpcy5fam9iUHJvbWlzZUNyZWF0b3IoXG4gICAgICAgICAgY2FsbGJhY2sgPT4gdGhpcy5fb25RdWV1ZUNhbmNlbENhbGxiYWNrID0gY2FsbGJhY2tcbiAgICAgICAgKTtcbiAgICAgIHRoaXMuX3N0YXR1cyA9IDE7XG4gICAgICB0aGlzLl9vblN0YXJ0Q2FsbGJhY2soKTtcbiAgICAgIHByb21pc2UudGhlbigodmFsdWU6VCkgPT4ge1xuICAgICAgICB0aGlzLl9zdGF0dXMgPSAyO1xuICAgICAgICB0aGlzLl9vbkVuZENhbGxiYWNrKHZhbHVlKTtcbiAgICAgIH0pLmNhdGNoKChyZWFzb246YW55KSA9PiB7XG4gICAgICAgIHRoaXMuX3N0YXR1cyA9IDI7XG4gICAgICAgIHRoaXMuX29uRmFpbENhbGxiYWNrKHJlYXNvbik7XG4gICAgICB9KTtcbiAgICB9XG4gIH1cblxuICBzZXQgb25TdGFydENhbGxiYWNrIChjYWxsYmFjazogKCkgPT4gdm9pZClcbiAge1xuICAgIHRoaXMuX29uU3RhcnRDYWxsYmFjayA9IGNhbGxiYWNrO1xuICB9XG5cbiAgc2V0IG9uRW5kQ2FsbGJhY2sgKGNhbGxiYWNrOiAodmFsdWU6VCkgPT4gdm9pZClcbiAge1xuICAgIHRoaXMuX29uRW5kQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgfVxuXG4gIHNldCBvbkZhaWxDYWxsYmFjayAoY2FsbGJhY2s6IChyZWFzb246YW55KSA9PiB2b2lkKVxuICB7XG4gICAgdGhpcy5fb25GYWlsQ2FsbGJhY2sgPSBjYWxsYmFjaztcbiAgfVxuXG4gIHJ1blF1ZXVlQ2FuY2VsQ2FsbGJhY2sgKClcbiAge1xuICAgIHRoaXMuX29uUXVldWVDYW5jZWxDYWxsYmFjaygpO1xuICB9XG5cbiAgZ2V0IGlzVW50b3VjaGVkICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzID09PSAwO1xuICB9XG5cbiAgZ2V0IGlzUHJvY2Vzc2luZyAoKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuX3N0YXR1cyA9PT0gMTtcbiAgfVxuXG4gIGdldCBpc0RvbmUgKClcbiAge1xuICAgIHJldHVybiB0aGlzLl9zdGF0dXMgPT09IDI7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIEpvYlF1ZXVlPFQ+XG57XG4gIHByaXZhdGUgX2hhc1N0YXJ0ZWQ6Ym9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9jdXJyZW50SW5kZXg6bnVtYmVyID0gMDtcbiAgcHJpdmF0ZSBfam9iUXVldWU6Sm9iPFQ+W10gPSBbXTtcbiAgcHJpdmF0ZSBfZW1pdHRlcjogRW1pdHRlcjxKb2JRdWV1ZUV2ZW50czxUPj4gPSBuZXcgRW1pdHRlcjxKb2JRdWV1ZUV2ZW50czxUPj4oKTtcblxuICBnZXQgaXNQcm9jZXNzaW5nICgpIHtcbiAgICByZXR1cm4gdGhpcy5faGFzU3RhcnRlZDtcbiAgfVxuXG4gIGFkZCAoam9iQ3JlYXRvcjogSm9iUHJvbWlzZUNyZWF0b3I8VD4pXG4gIHtcbiAgICBjb25zdCBqb2IgPSBuZXcgSm9iKGpvYkNyZWF0b3IpO1xuICAgIGpvYi5vblN0YXJ0Q2FsbGJhY2sgPSAoKSA9PiB7XG4gICAgICB0aGlzLl9lbWl0dGVyLmVtaXQoXCJKT0JfU1RBUlRcIiwge30pO1xuICAgIH07XG4gICAgam9iLm9uRW5kQ2FsbGJhY2sgPSAodmFsdWUpID0+IHtcbiAgICAgIHRoaXMuX2VtaXR0ZXIuZW1pdChcIkpPQl9FTkRcIiwge3ZhbHVlfSk7XG4gICAgICB0aGlzLl9jdXJyZW50SW5kZXggPSB0aGlzLl9jdXJyZW50SW5kZXggKyAxO1xuICAgICAgdGhpcy5fcHJvY2VzcygpO1xuICAgIH07XG4gICAgam9iLm9uRmFpbENhbGxiYWNrID0gKHJlYXNvbikgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihyZWFzb24pO1xuICAgIH07XG4gICAgdGhpcy5fam9iUXVldWUgPSBbXG4gICAgICAuLi50aGlzLl9qb2JRdWV1ZSxcbiAgICAgIGpvYlxuICAgIF07XG4gICAgdGhpcy5fcHJvY2VzcygpO1xuICB9XG5cbiAgcHJpdmF0ZSBfcHJvY2VzcyAoKVxuICB7XG4gICAgaWYgKCF0aGlzLl9oYXNTdGFydGVkKVxuICAgIHtcbiAgICAgIHRoaXMuX2hhc1N0YXJ0ZWQgPSB0cnVlO1xuICAgICAgdGhpcy5fZW1pdHRlci5lbWl0KFwiUVVFVUVfU1RBUlRcIiwge30pO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9jdXJyZW50SW5kZXggPCB0aGlzLl9qb2JRdWV1ZS5sZW5ndGgpXG4gICAge1xuICAgICAgY29uc3Qgam9iID0gdGhpcy5fam9iUXVldWVbdGhpcy5fY3VycmVudEluZGV4XTtcbiAgICAgIGlmIChqb2IgJiYgam9iLmlzVW50b3VjaGVkKVxuICAgICAge1xuICAgICAgICBqb2Iuc3RhcnQoKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5faGFzU3RhcnRlZCA9IGZhbHNlO1xuICAgICAgdGhpcy5fam9iUXVldWUgPSBbXTtcbiAgICAgIHRoaXMuX2N1cnJlbnRJbmRleCA9IDA7XG4gICAgICB0aGlzLl9lbWl0dGVyLmVtaXQoXCJRVUVVRV9FTkRcIiwge30pO1xuICAgIH1cbiAgfVxuXG4gIGNhbmNlbCAoKVxuICB7XG4gICAgY29uc3QgaGFzU3RhcnRlZCA9IHRoaXMuX2hhc1N0YXJ0ZWQ7XG4gICAgY29uc3Qgam9iID0gdGhpcy5fam9iUXVldWVbdGhpcy5fY3VycmVudEluZGV4XTtcblxuICAgIHRoaXMuX2hhc1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICB0aGlzLl9qb2JRdWV1ZSA9IFtdO1xuICAgIHRoaXMuX2N1cnJlbnRJbmRleCA9IDA7XG5cbiAgICBpZiAoIWhhc1N0YXJ0ZWQgfHwgIWpvYiB8fCAham9iLmlzUHJvY2Vzc2luZykge1xuICAgICAgdGhpcy5fZW1pdHRlci5lbWl0KFwiUVVFVUVfQ0FOQ0VMXCIsIHthY3R1YWxseUNhbmNlbGxlZDogZmFsc2V9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgam9iLm9uRW5kQ2FsbGJhY2sgPSAoKSA9PiB7fTtcbiAgICAgIGpvYi5ydW5RdWV1ZUNhbmNlbENhbGxiYWNrKCk7XG4gICAgICB0aGlzLl9lbWl0dGVyLmVtaXQoXCJRVUVVRV9DQU5DRUxcIiwge2FjdHVhbGx5Q2FuY2VsbGVkOiB0cnVlfSk7XG4gICAgfVxuICB9XG5cbiAgb25RdWV1ZVN0YXJ0IChjYWxsYmFjazogKCkgPT4gdm9pZClcbiAge1xuICAgIHRoaXMuX2VtaXR0ZXIub24oJ1FVRVVFX1NUQVJUJywgY2FsbGJhY2spO1xuICB9XG5cbiAgb25RdWV1ZUVuZCAoY2FsbGJhY2s6ICgpID0+IHZvaWQpXG4gIHtcbiAgICB0aGlzLl9lbWl0dGVyLm9uKCdRVUVVRV9FTkQnLCBjYWxsYmFjayk7XG4gIH1cblxuICBvblF1ZXVlQ2FuY2VsIChjYWxsYmFjazogKHthY3R1YWxseUNhbmNlbGxlZH06e2FjdHVhbGx5Q2FuY2VsbGVkOiBib29sZWFufSkgPT4gdm9pZClcbiAge1xuICAgIHRoaXMuX2VtaXR0ZXIub24oJ1FVRVVFX0NBTkNFTCcsIGNhbGxiYWNrKTtcbiAgfVxuXG4gIG9uSm9iU3RhcnQgKGNhbGxiYWNrOiAoKSA9PiB2b2lkKVxuICB7XG4gICAgdGhpcy5fZW1pdHRlci5vbignSk9CX1NUQVJUJywgY2FsbGJhY2spO1xuICB9XG5cbiAgb25Kb2JFbmQgKGNhbGxiYWNrOiAoe3ZhbHVlfTp7dmFsdWU6VH0pID0+IHZvaWQpXG4gIHtcbiAgICB0aGlzLl9lbWl0dGVyLm9uKCdKT0JfRU5EJywgY2FsbGJhY2spO1xuICB9XG59XG4iLCJpbXBvcnQge2VtaXR0ZXJ9IGZyb20gJy4vZW1pdHRlcic7XG5pbXBvcnQge0NhcmR9IGZyb20gJy4uL21vZGVscy9jYXJkJztcblxuZXhwb3J0IGNsYXNzIENhcmRXaXRoRXZlbnQgZXh0ZW5kcyBDYXJkXG57XG4gIGZhY2VVcCAoKVxuICB7XG4gICAgc3VwZXIuZmFjZVVwKCk7XG4gICAgZW1pdHRlci5lbWl0KCdGTElQX09WRVJfQ0FSRCcsIHtcbiAgICAgIGNhcmQ6IHRoaXNcbiAgICB9KTtcbiAgfVxuXG4gIGZhY2VEb3duICgpXG4gIHtcbiAgICBzdXBlci5mYWNlRG93bigpO1xuICAgIGVtaXR0ZXIuZW1pdCgnRkxJUF9PVkVSX0NBUkQnLCB7XG4gICAgICBjYXJkOiB0aGlzXG4gICAgfSk7XG4gIH1cblxuICBmbGlwT3ZlciAoKVxuICB7XG4gICAgc3VwZXIuZmxpcE92ZXIoKTtcbiAgICBlbWl0dGVyLmVtaXQoJ0ZMSVBfT1ZFUl9DQVJEJywge1xuICAgICAgY2FyZDogdGhpc1xuICAgIH0pO1xuICB9XG59XG4iLCJpbXBvcnQge2NyZWF0ZUNhcmRzfSBmcm9tICcuLi9tb2RlbHMvY3JlYXRlLWNhcmRzJztcbmltcG9ydCB7Q2FyZFdpdGhFdmVudH0gZnJvbSAnLi9jYXJkJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNhcmRzV2l0aEV2ZW50cyA9ICh7XG4gIG51bWJlck9mRGVja3NVc2VkLFxuICBudW1iZXJPZlN1aXRzXG59OntcbiAgbnVtYmVyT2ZEZWNrc1VzZWQ6bnVtYmVyLFxuICBudW1iZXJPZlN1aXRzOm51bWJlclxufSkgPT5cbiAgY3JlYXRlQ2FyZHMoe1xuICAgIG51bWJlck9mRGVja3NVc2VkLFxuICAgIG51bWJlck9mU3VpdHNcbiAgfSkubWFwKGNhcmQgPT4gbmV3IENhcmRXaXRoRXZlbnQoe1xuICAgIHN1aXQ6IGNhcmQuc3VpdCxcbiAgICByYW5rOiBjYXJkLnJhbmssXG4gICAgaXNGYWNlVXA6IGNhcmQuaXNGYWNlVXBcbiAgfSkpO1xuIiwiaW1wb3J0IHtFbWl0dGVyfSBmcm9tICcuLi9ldmVudC1lbWl0dGVyJztcbmltcG9ydCB7TW9kZWxFdmVudHN9IGZyb20gJy4vZXZlbnRzJztcblxuZXhwb3J0IGNvbnN0IGVtaXR0ZXIgPSBuZXcgRW1pdHRlcjxNb2RlbEV2ZW50cz4oKTtcbiIsImltcG9ydCB7UGlsZX0gZnJvbSAnLi4vbW9kZWxzL3BpbGUnO1xuXG5leHBvcnQgY2xhc3MgUGlsZVdpdGhFdmVudCBleHRlbmRzIFBpbGUge1xuXG59XG4iLCJpbXBvcnQge2VtaXR0ZXJ9IGZyb20gJy4vZW1pdHRlcic7XG5pbXBvcnQge1BpbGV9IGZyb20gJy4uL21vZGVscy9waWxlJztcbmltcG9ydCB7VGFibGV9IGZyb20gJy4uL21vZGVscy90YWJsZSc7XG5cbmV4cG9ydCBjbGFzcyBUYWJsZVdpdGhFdmVudCBleHRlbmRzIFRhYmxlIHtcblxuICBwcm90ZWN0ZWQgX21vdmVDYXJkQmV0d2VlblBpbGVzICh7ZnJvbSwgdG8sIHNpemV9Ontmcm9tOlBpbGUsIHRvOlBpbGUsIHNpemU6bnVtYmVyfSlcbiAge1xuICAgIGNvbnN0IGNhcmRzID0gc3VwZXIuX21vdmVDYXJkQmV0d2VlblBpbGVzKHtmcm9tLCB0bywgc2l6ZX0pO1xuICAgIGVtaXR0ZXIuZW1pdCgnTU9WRV9DQVJEU19CRVRXRUVOX1BJTEVTJywge2Zyb20sIHRvLCBzaXplfSk7XG4gICAgcmV0dXJuIGNhcmRzO1xuICB9XG5cbn1cbiIsIi8vIGltcG9ydCB7ZXZlbnRIdWJ9IGZyb20gJy4uL2V2ZW50LWh1Yic7XG5pbXBvcnQge25hbm9pZH0gZnJvbSAnbmFub2lkJztcblxuZXhwb3J0IGVudW0gU3VpdCB7XG4gIFNwYWRlID0gJ+KZoCcsXG4gIENsdWIgPSAn4pmjJyxcbiAgRGlhbW9uZCA9ICfimaYnLFxuICBIZWFydCA9ICfimaUnXG59XG5cbmNvbnN0IGdldFJhbmtUZXh0ID0gKHJhbms6bnVtYmVyKSA9Plxue1xuICBpZiAocmFuayA8IDEgfHwgMTMgPCByYW5rKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ2FyZCByYW5rIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgaWYgKHJhbmsgPT09IDExKSB7XG4gICAgcmV0dXJuICdKJztcbiAgfSBlbHNlIGlmIChyYW5rID09PSAxMikge1xuICAgIHJldHVybiAnUSc7XG4gIH0gZWxzZSBpZiAocmFuayA9PT0gMTMpIHtcbiAgICByZXR1cm4gJ0snO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiByYW5rLnRvU3RyaW5nKCk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIENhcmRcbntcbiAgcHJpdmF0ZSBfc3VpdDogU3VpdDtcbiAgcHJpdmF0ZSBfcmFuazogbnVtYmVyO1xuICBwcml2YXRlIF9pc0ZhY2VVcDogYm9vbGVhbjtcbiAgcHJpdmF0ZSBfaWQ6c3RyaW5nID0gbmFub2lkKCk7XG5cbiAgY29uc3RydWN0b3IgKHtzdWl0LCByYW5rLCBpc0ZhY2VVcH06e3N1aXQ6U3VpdCwgcmFuazpudW1iZXIsIGlzRmFjZVVwPzpib29sZWFufSlcbiAge1xuICAgIHRoaXMuX3N1aXQgPSBzdWl0O1xuICAgIHRoaXMuX2lzRmFjZVVwID0gaXNGYWNlVXAgfHwgZmFsc2U7XG5cbiAgICBpZiAoMSA8PSByYW5rICYmIHJhbmsgPD0gMTMpIHtcbiAgICAgIHRoaXMuX3JhbmsgPSByYW5rO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBjYXJkIHJhbmsgJHtyYW5rfSBpcyBpbnZhbGlkLmApO1xuICAgIH1cbiAgfVxuXG4gIGdldCBzdWl0ICgpIHtcbiAgICByZXR1cm4gdGhpcy5fc3VpdDtcbiAgfVxuXG4gIGdldCBzdWl0TWFyayAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX3N1aXQudG9TdHJpbmcoKVxuICB9XG5cbiAgZ2V0IHJhbmsgKCkge1xuICAgIHJldHVybiB0aGlzLl9yYW5rO1xuICB9XG5cbiAgZ2V0IHJhbmtNYXJrICgpIHtcbiAgICByZXR1cm4gZ2V0UmFua1RleHQodGhpcy5fcmFuaylcbiAgfVxuXG4gIGdldCBpc0ZhY2VVcCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lzRmFjZVVwO1xuICB9XG5cbiAgZ2V0IGlkICgpIHtcbiAgICByZXR1cm4gdGhpcy5faWQ7XG4gIH1cblxuICBmYWNlVXAgKClcbiAge1xuICAgIHRoaXMuX2lzRmFjZVVwID0gdHJ1ZTtcbiAgfVxuXG4gIGZhY2VEb3duICgpXG4gIHtcbiAgICB0aGlzLl9pc0ZhY2VVcCA9IGZhbHNlO1xuICB9XG5cbiAgZmxpcE92ZXIgKClcbiAge1xuICAgIHRoaXMuX2lzRmFjZVVwID0gIXRoaXMuX2lzRmFjZVVwO1xuICB9XG5cbiAgdG9TdHJpbmcgKClcbiAge1xuICAgIHJldHVybiB0aGlzLnN1aXRNYXJrICsgdGhpcy5yYW5rTWFyayArICh0aGlzLl9pc0ZhY2VVcCA/ICcrJyA6ICctJyk7XG4gIH1cbn1cbiIsImltcG9ydCB7Q2FyZCwgU3VpdH0gZnJvbSAnLi9jYXJkJztcblxuZXhwb3J0IGNvbnN0IGNyZWF0ZUNhcmRzID0gKHtcbiAgbnVtYmVyT2ZEZWNrc1VzZWQsXG4gIG51bWJlck9mU3VpdHNcbn06e1xuICBudW1iZXJPZkRlY2tzVXNlZDpudW1iZXIsXG4gIG51bWJlck9mU3VpdHM6bnVtYmVyXG59KSA9PiB7XG4gIGNvbnN0IGRlY2tDYXJkczpDYXJkW10gPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IG51bWJlck9mRGVja3NVc2VkOyBpKyspXG4gIHtcbiAgICBmb3IgKGxldCByYW5rID0gMTsgcmFuayA8PSAxMzsgcmFuaysrKVxuICAgIHtcbiAgICAgIHN3aXRjaCAobnVtYmVyT2ZTdWl0cylcbiAgICAgIHtcbiAgICAgICAgY2FzZSA0OlxuICAgICAgICAgIGRlY2tDYXJkcy5wdXNoKG5ldyBDYXJkKHtzdWl0OlN1aXQuRGlhbW9uZCwgcmFuaywgaXNGYWNlVXA6IGZhbHNlfSkpO1xuICAgICAgICBjYXNlIDM6XG4gICAgICAgICAgZGVja0NhcmRzLnB1c2gobmV3IENhcmQoe3N1aXQ6U3VpdC5DbHViLCByYW5rLCBpc0ZhY2VVcDogZmFsc2V9KSk7XG4gICAgICAgIGNhc2UgMjpcbiAgICAgICAgICBkZWNrQ2FyZHMucHVzaChuZXcgQ2FyZCh7c3VpdDpTdWl0LkhlYXJ0LCByYW5rLCBpc0ZhY2VVcDogZmFsc2V9KSk7XG4gICAgICAgIGNhc2UgMTpcbiAgICAgICAgICBkZWNrQ2FyZHMucHVzaChuZXcgQ2FyZCh7c3VpdDpTdWl0LlNwYWRlLCByYW5rLCBpc0ZhY2VVcDogZmFsc2V9KSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGRlY2tDYXJkcztcbn1cblxuZXhwb3J0IGNvbnN0IHJhbmRvbWl6ZUFycmF5ID0gPFQ+KHthcnJheX06e2FycmF5OlRbXX0pID0+IHtcbiAgY29uc3QgX2FyciA9IFsuLi5hcnJheV07XG4gIGZvciAobGV0IGkgPSBfYXJyLmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pXG4gIHtcbiAgICAgIGNvbnN0IGogPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgIFtfYXJyW2ldLCBfYXJyW2pdXSA9IFtfYXJyW2pdLCBfYXJyW2ldXTtcbiAgfVxuICByZXR1cm4gX2Fycjtcbn1cbiIsImltcG9ydCB7Q2FyZH0gZnJvbSAnLi9jYXJkJztcbmltcG9ydCB7bmFub2lkfSBmcm9tICduYW5vaWQnO1xuXG50eXBlIFBpbGVBcmdzID0ge1xuICBjYXJkcz86IENhcmRbXSxcbiAgbGFiZWw/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGNsYXNzIFBpbGVcbntcbiAgcHJvdGVjdGVkIF9jYXJkczpDYXJkW107XG4gIHByb3RlY3RlZCBfbGFiZWw6c3RyaW5nO1xuICBwcml2YXRlIF9pZDpzdHJpbmcgPSBuYW5vaWQoKTtcblxuICBjb25zdHJ1Y3RvciAoYXJnczpQaWxlQXJncyA9IHt9KVxuICB7XG4gICAgdGhpcy5fY2FyZHMgPSBhcmdzLmNhcmRzIHx8IFtdO1xuICAgIHRoaXMuX2xhYmVsID0gYXJncy5sYWJlbCB8fCAnJztcbiAgfVxuXG4gIGdldCBpZCAoKSB7XG4gICAgcmV0dXJuIHRoaXMuX2lkO1xuICB9XG5cbiAgZ2V0IGxhYmVsICgpIHtcbiAgICByZXR1cm4gdGhpcy5fbGFiZWw7XG4gIH1cblxuICBnZXQgY2FyZHMgKClcbiAge1xuICAgIHJldHVybiBbLi4udGhpcy5fY2FyZHNdO1xuICB9XG5cbiAgZ2V0IGZyb250Q2FyZCAoKTpDYXJkfHVuZGVmaW5lZFxuICB7XG4gICAgcmV0dXJuIHRoaXMuX2NhcmRzW3RoaXMuX2NhcmRzLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgZ2V0IGxhc3RDYXJkICgpOkNhcmR8dW5kZWZpbmVkXG4gIHtcbiAgICByZXR1cm4gdGhpcy5fY2FyZHNbMF07XG4gIH1cblxuICBnZXRGcm9udENhcmRzICh7c2l6ZX06e3NpemU6bnVtYmVyfSlcbiAge1xuICAgIGNvbnN0IGNhcmRzID0gdGhpcy5fY2FyZHM7XG4gICAgaWYgKGNhcmRzLmxlbmd0aCA9PT0gMCB8fCBzaXplIDwgMSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IF9zaXplID0gTWF0aC5taW4oY2FyZHMubGVuZ3RoLCBzaXplKTtcbiAgICByZXR1cm4gY2FyZHMuc2xpY2UoY2FyZHMubGVuZ3RoIC0gX3NpemUpO1xuICB9XG5cbiAgZHJhd0NhcmRzICh7c2l6ZX06e3NpemU6bnVtYmVyfSlcbiAge1xuICAgIGNvbnN0IGNhcmRzID0gdGhpcy5fY2FyZHM7XG4gICAgaWYgKGNhcmRzLmxlbmd0aCA9PT0gMCB8fCBzaXplIDwgMSkge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGNvbnN0IF9zaXplID0gTWF0aC5taW4oY2FyZHMubGVuZ3RoLCBzaXplKTtcbiAgICBjb25zdCBkcmF3bkNhcmRzID0gY2FyZHMuc2xpY2UoY2FyZHMubGVuZ3RoIC0gX3NpemUpO1xuICAgIHRoaXMuX2NhcmRzID0gY2FyZHMuc2xpY2UoMCwgLXNpemUpO1xuICAgIHJldHVybiBkcmF3bkNhcmRzO1xuICB9XG5cbiAgcGxhY2VDYXJkcyAoe2NhcmRzfTp7Y2FyZHM6Q2FyZFtdfSlcbiAge1xuICAgIHRoaXMuX2NhcmRzID0gWy4uLnRoaXMuX2NhcmRzLCAuLi5jYXJkc107XG4gIH1cblxuICBnZXREZXNjZW5kaW5nSW5TdWl0RnJvbnRDYXJkcyAoKVxuICB7XG4gICAgcmV0dXJuIFBpbGUuZ2V0RGVzY2VuZGluZ0Zyb250Q2FyZHMoe1xuICAgICAgY2FyZHM6IHRoaXMuX2NhcmRzLFxuICAgICAgaW5TdWl0OiB0cnVlLFxuICAgICAgZmFjZVVwOiB0cnVlXG4gICAgfSk7XG4gIH1cblxuICBzdGF0aWMgZ2V0RGVzY2VuZGluZ0Zyb250Q2FyZHMgKHtjYXJkcywgaW5TdWl0LCBmYWNlVXB9OntjYXJkczpDYXJkW10sIGluU3VpdD86Ym9vbGVhbiwgZmFjZVVwPzpib29sZWFufSlcbiAge1xuICAgIGNvbnN0IF9pblN1aXQgPSBpblN1aXQgfHwgZmFsc2U7XG4gICAgY29uc3QgX2ZhY2VVcCA9IGZhY2VVcCB8fCBmYWxzZTtcblxuICAgIGlmIChjYXJkcy5sZW5ndGggPT09IDApXG4gICAge1xuICAgICAgcmV0dXJuIFtdO1xuICAgIH1cblxuICAgIGxldCBwcmV2ID0gY2FyZHNbY2FyZHMubGVuZ3RoIC0gMV07XG5cbiAgICBpZiAoX2ZhY2VVcCAmJiAhcHJldi5pc0ZhY2VVcClcbiAgICB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgbGV0IF9jYXJkczpDYXJkW10gPSBbcHJldl07XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IGNhcmRzLmxlbmd0aCAtIDI7IGluZGV4ID49IDA7IGluZGV4LS0pXG4gICAge1xuICAgICAgY29uc3QgY3VycmVudCA9IGNhcmRzW2luZGV4XTtcblxuICAgICAgaWYgKHByZXYucmFuayArIDEgIT09IGN1cnJlbnQucmFua1xuICAgICAgICB8fCAoX2luU3VpdCAmJiBwcmV2LnN1aXQgIT09IGN1cnJlbnQuc3VpdClcbiAgICAgICAgfHwgKF9mYWNlVXAgJiYgIWN1cnJlbnQuaXNGYWNlVXApKVxuICAgICAge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cblxuICAgICAgX2NhcmRzID0gW2N1cnJlbnQsIC4uLl9jYXJkc107XG4gICAgICBwcmV2ID0gY3VycmVudDtcbiAgICB9XG5cbiAgICByZXR1cm4gX2NhcmRzO1xuICB9XG5cbiAgc3RhdGljIGNoZWNrSWZDYXJkc0FyZURlc2NlbmRpbmcgKHtjYXJkcywgaW5TdWl0LCBmYWNlVXB9OntjYXJkczpDYXJkW10sIGluU3VpdD86Ym9vbGVhbiwgZmFjZVVwPzpib29sZWFufSlcbiAge1xuICAgIHJldHVybiBQaWxlLmdldERlc2NlbmRpbmdGcm9udENhcmRzKHtjYXJkcywgaW5TdWl0LCBmYWNlVXB9KS5sZW5ndGggPT09IGNhcmRzLmxlbmd0aDtcbiAgfVxuXG4gIGNoZWNrSWZGcm9udENhcmRzQ29tcGxldGUgKClcbiAge1xuICAgIHJldHVybiB0aGlzLmNhcmRzLmxlbmd0aCA+PSAxMyAmJiBQaWxlLmNoZWNrSWZDYXJkc0FyZURlc2NlbmRpbmcoe1xuICAgICAgY2FyZHM6IHRoaXMuY2FyZHMuc2xpY2UoLTEzKSxcbiAgICAgIGluU3VpdDogdHJ1ZSxcbiAgICAgIGZhY2VVcDogdHJ1ZVxuICAgIH0pO1xuICB9XG5cbiAgdG9TdHJpbmcgKClcbiAge1xuICAgIHJldHVybiB0aGlzLmNhcmRzLm1hcChjID0+IGMudG9TdHJpbmcoKSkuam9pbignICcpO1xuICB9XG59XG4iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XG5pbXBvcnQge1BpbGV9IGZyb20gJy4vcGlsZSc7XG4vLyBpbXBvcnQge1RhYmxlU2V0dGluZ3MsIFRhYmxlU2V0dGluZ0NvbmZpZ30gZnJvbSAnLi90YWJsZS1zZXR0aW5ncyc7XG5pbXBvcnQge1xuICBGQUNFX1VQX0NBUkQsXG4gIE1PVkVfQ0FSRCxcbiAgUEFVU0UsXG4gIFVuZG9hYmxlQWN0aW9uSGlzdG9yeVxufSBmcm9tICcuL3VuZG9hYmxlLWFjdGlvbnMnO1xuXG5leHBvcnQgdHlwZSBUYWJsZVNldHRpbmdzID0ge1xuICBudW1iZXJPZlRhYmxlYXVQaWxlczogbnVtYmVyLFxuICBudW1iZXJPZkRyYXdQaWxlczogbnVtYmVyLFxuICBjYXJkczogQ2FyZFtdXG59XG5cbmV4cG9ydCBjbGFzcyBUYWJsZVxue1xuICBwcml2YXRlIF9zZXR0aW5nczpUYWJsZVNldHRpbmdzO1xuICBwcml2YXRlIF9jYXJkczogQ2FyZFtdO1xuICBwcml2YXRlIF9kZWNrUGlsZTpQaWxlO1xuICBwcml2YXRlIF9kcmF3UGlsZXM6UGlsZVtdO1xuICBwcml2YXRlIF90YWJsZWF1UGlsZXM6UGlsZVtdO1xuICBwcml2YXRlIF9kaXNjYXJkUGlsZXM6UGlsZVtdO1xuICBwcml2YXRlIF9waWxlczpQaWxlW107XG4gIHByaXZhdGUgX2FjdGlvbkhpc3Rvcnk6VW5kb2FibGVBY3Rpb25IaXN0b3J5O1xuXG4gIGNvbnN0cnVjdG9yIChzZXR0aW5nczogVGFibGVTZXR0aW5ncylcbiAge1xuICAgIHRoaXMuX3NldHRpbmdzID0gc2V0dGluZ3M7XG4gICAgdGhpcy5fY2FyZHMgPSBzZXR0aW5ncy5jYXJkcztcbiAgICB0aGlzLl9kZWNrUGlsZSA9IG5ldyBQaWxlKHtsYWJlbDogJ2RlY2snLCBjYXJkczogc2V0dGluZ3MuY2FyZHN9KTtcbiAgICB0aGlzLl9kcmF3UGlsZXMgPSBBcnJheS5mcm9tKHtsZW5ndGg6c2V0dGluZ3MubnVtYmVyT2ZEcmF3UGlsZXN9KS5tYXAoKF8sIGkpID0+IG5ldyBQaWxlKHtsYWJlbDogYGRyYXcke2l9YCwgY2FyZHM6IFtdfSkpO1xuICAgIHRoaXMuX3RhYmxlYXVQaWxlcyA9IEFycmF5LmZyb20oe2xlbmd0aDpzZXR0aW5ncy5udW1iZXJPZlRhYmxlYXVQaWxlc30pLm1hcCgoXywgaSkgPT4gbmV3IFBpbGUoe2xhYmVsOiBgdGFibCR7aX1gLCBjYXJkczogW119KSk7XG4gICAgdGhpcy5fZGlzY2FyZFBpbGVzID0gQXJyYXkuZnJvbSh7bGVuZ3RoOk1hdGguZmxvb3Ioc2V0dGluZ3MuY2FyZHMubGVuZ3RoIC8gMTMpfSkubWFwKChfLCBpKSA9PiBuZXcgUGlsZSh7bGFiZWw6IGBkaXNjJHtpfWAsIGNhcmRzOiBbXX0pKTtcbiAgICB0aGlzLl9waWxlcyA9IFt0aGlzLl9kZWNrUGlsZSwgLi4udGhpcy5fZHJhd1BpbGVzLCAuLi50aGlzLnRhYmxlYXVQaWxlcywgLi4udGhpcy5fZGlzY2FyZFBpbGVzXTtcbiAgICB0aGlzLl9hY3Rpb25IaXN0b3J5ID0gbmV3IFVuZG9hYmxlQWN0aW9uSGlzdG9yeSgpO1xuICB9XG5cbiAgZ2V0IGNhcmRzICgpXG4gIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX2NhcmRzXTtcbiAgfVxuXG4gIGdldCBwaWxlcyAoKVxuICB7XG4gICAgcmV0dXJuIFsuLi50aGlzLl9waWxlc107XG4gIH1cblxuICBnZXRQaWxlQnkgKHByZWRpY2F0ZToocDpQaWxlKSA9PiBhbnkpXG4gIHtcbiAgICBjb25zdCBwaWxlID0gdGhpcy5fcGlsZXMuZmluZChwcmVkaWNhdGUpO1xuICAgIGlmICghcGlsZSlcbiAgICB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJUaGUgcGlsZSBkb2Vzbid0IGV4aXN0LlwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHBpbGU7XG4gIH1cblxuICBnZXRQaWxlQnlJZCAoaWQ6c3RyaW5nKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuZ2V0UGlsZUJ5KHAgPT4gcC5pZCA9PT0gaWQpO1xuICB9XG5cbiAgZ2V0UGlsZUJ5Q2FyZElkIChpZDpzdHJpbmcpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5nZXRQaWxlQnkocCA9PiBwLmNhcmRzLmZpbmQoYyA9PiBjLmlkID09PSBpZCkpO1xuICB9XG5cbiAgZ2V0IGRlY2tQaWxlICgpXG4gIHtcbiAgICByZXR1cm4gdGhpcy5fZGVja1BpbGU7XG4gIH1cblxuICBnZXQgZHJhd1BpbGVzICgpXG4gIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX2RyYXdQaWxlc107XG4gIH1cblxuICBnZXQgdGFibGVhdVBpbGVzICgpXG4gIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX3RhYmxlYXVQaWxlc107XG4gIH1cblxuICBnZXQgZGlzY2FyZFBpbGVzICgpXG4gIHtcbiAgICByZXR1cm4gWy4uLnRoaXMuX2Rpc2NhcmRQaWxlc107XG4gIH1cblxuICBnZXQgaXNDbGVhciAoKVxuICB7XG4gICAgcmV0dXJuICF0aGlzLl90YWJsZWF1UGlsZXMuZmluZChwID0+IHAuY2FyZHMubGVuZ3RoID4gMCk7XG4gIH1cblxuICBnZXRQb3NzaWJsZU1vdmVzQmV0d2VlblRhYmxlYXVQaWxlcyAoKVxuICB7XG4gICAgbGV0IG1vdmVzOntzaXplOm51bWJlciwgZnJvbTogUGlsZSwgdG86IFBpbGV9W10gPSBbXTtcblxuICAgIGZvciAobGV0IGZyb20gb2YgdGhpcy5fdGFibGVhdVBpbGVzKVxuICAgIHtcbiAgICAgIGNvbnN0IGRyYXdhYmxlQ2FyZHMgPSBmcm9tLmdldERlc2NlbmRpbmdJblN1aXRGcm9udENhcmRzKCk7XG4gICAgICBpZiAoZHJhd2FibGVDYXJkcy5sZW5ndGggPT09IDApIGNvbnRpbnVlO1xuXG4gICAgICBmb3IgKGxldCB0byBvZiB0aGlzLl90YWJsZWF1UGlsZXMpXG4gICAgICB7XG4gICAgICAgIGlmICh0byA9PT0gZnJvbSkgY29udGludWU7XG5cbiAgICAgICAgZm9yIChsZXQgc2l6ZSA9IGRyYXdhYmxlQ2FyZHMubGVuZ3RoOyBzaXplID4gMDsgc2l6ZS0tKVxuICAgICAgICB7XG4gICAgICAgICAgaWYgKHRvLmZyb250Q2FyZCAmJiAhUGlsZS5jaGVja0lmQ2FyZHNBcmVEZXNjZW5kaW5nKHtcbiAgICAgICAgICAgIGNhcmRzOiBbdG8uZnJvbnRDYXJkLCAuLi5kcmF3YWJsZUNhcmRzLnNsaWNlKC1zaXplKV0sXG4gICAgICAgICAgICBpblN1aXQ6IGZhbHNlLFxuICAgICAgICAgICAgZmFjZVVwOiB0cnVlXG4gICAgICAgICAgfSkpIGNvbnRpbnVlO1xuXG4gICAgICAgICAgbW92ZXMgPSBbLi4ubW92ZXMsIHtmcm9tLCB0bywgc2l6ZX1dO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG1vdmVzO1xuICB9XG5cbiAgcHJvdGVjdGVkIF9tb3ZlQ2FyZEJldHdlZW5QaWxlcyAoe2Zyb20sIHRvLCBzaXplfTp7ZnJvbTpQaWxlLCB0bzpQaWxlLCBzaXplOm51bWJlcn0pXG4gIHtcbiAgICBpZiAoIXRoaXMuX3BpbGVzLmZpbmQocCA9PiBwID09PSBmcm9tKSlcbiAgICB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcImZyb21cIiBwaWxlIGlzIG5vdCBiZSBpbiB0aGlzIHRhYmxlLmApO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fcGlsZXMuZmluZChwID0+IHAgPT09IHRvKSlcbiAgICB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBcInRvXCIgcGlsZSBpcyBub3QgYmUgaW4gdGhpcyB0YWJsZS5gKTtcbiAgICB9XG5cbiAgICBpZiAoZnJvbS5nZXRGcm9udENhcmRzKHtzaXplfSkubGVuZ3RoICE9PSBzaXplKVxuICAgIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIHBpbGUgXCIke2Zyb20uaWR9XCIgZG9lc24ndCBoYXZlICR7c2l6ZX0gY2FyZHMgdG8gZHJhdy5gKTtcbiAgICB9XG5cbiAgICBjb25zdCBjYXJkcyA9IGZyb20uZHJhd0NhcmRzKHtzaXplfSk7XG4gICAgdG8ucGxhY2VDYXJkcyh7Y2FyZHN9KTtcbiAgfVxuXG4gIHByaXZhdGUgX2RlYWxDYXJkc0Zyb21EZWNrVG9UYWJsZWF1UGlsZXMgKClcbiAge1xuICAgIGNvbnN0IG51bWJlck9mQ2FyZHMgPSB0aGlzLl9kZWNrUGlsZS5jYXJkcy5sZW5ndGg7XG4gICAgY29uc3QgbnVtYmVyT2ZEcmF3Q2FyZHMgPSB0aGlzLl9zZXR0aW5ncy5udW1iZXJPZlRhYmxlYXVQaWxlcyAqIHRoaXMuX3NldHRpbmdzLm51bWJlck9mRHJhd1BpbGVzO1xuXG4gICAgbGV0IGNvdW50ZXIgPSAwO1xuICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBudW1iZXJPZkNhcmRzIC0gbnVtYmVyT2ZEcmF3Q2FyZHM7IGluZGV4KyspXG4gICAge1xuICAgICAgY29uc3QgZnJvbSA9IHRoaXMuX2RlY2tQaWxlO1xuICAgICAgY29uc3QgdG8gPSB0aGlzLl90YWJsZWF1UGlsZXNbY291bnRlciAlIHRoaXMudGFibGVhdVBpbGVzLmxlbmd0aF07XG4gICAgICB0aGlzLl9tb3ZlQ2FyZEJldHdlZW5QaWxlcyh7ZnJvbSwgdG8sIHNpemU6IDF9KTtcbiAgICAgIGNvdW50ZXIgPSBjb3VudGVyICsgMTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIF9kZWFsQ2FyZHNGcm9tRGVja1RvRHJhd1BpbGVzICgpXG4gIHtcbiAgICAvLyBjb25zdCBudW1iZXJPZkRyYXdDYXJkcyA9IHRoaXMuX3NldHRpbmdzLm51bWJlck9mVGFibGVhdVBpbGVzICogdGhpcy5fc2V0dGluZ3MubnVtYmVyT2ZEcmF3UGlsZXM7XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fc2V0dGluZ3MubnVtYmVyT2ZEcmF3UGlsZXM7IGluZGV4KyspXG4gICAge1xuICAgICAgY29uc3QgZnJvbSA9IHRoaXMuX2RlY2tQaWxlO1xuICAgICAgY29uc3QgdG8gPSB0aGlzLl9kcmF3UGlsZXNbaW5kZXhdO1xuICAgICAgdGhpcy5fbW92ZUNhcmRCZXR3ZWVuUGlsZXMoe2Zyb20sIHRvLCBzaXplOiB0aGlzLl9zZXR0aW5ncy5udW1iZXJPZlRhYmxlYXVQaWxlc30pO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgX2ZsaXBVcFRhYmxlYXVGcm9udENhcmRzICgpXG4gIHtcbiAgICBmb3IgKGxldCB0YWJsZWF1UGlsZSBvZiB0aGlzLl90YWJsZWF1UGlsZXMpXG4gICAge1xuICAgICAgaWYgKHRhYmxlYXVQaWxlLmZyb250Q2FyZCkgdGhpcy5fZmFjZVVwQ2FyZCh7Y2FyZDogdGFibGVhdVBpbGUuZnJvbnRDYXJkfSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZmFjZVVwQ2FyZCAoe2NhcmR9OntjYXJkOkNhcmR9KVxuICB7XG4gICAgaWYgKCFjYXJkLmlzRmFjZVVwKVxuICAgIHtcbiAgICAgIGNhcmQuZmFjZVVwKCk7XG4gICAgfVxuICB9XG5cbiAgc3RhcnRHYW1lICgpXG4gIHtcbiAgICB0aGlzLl9kZWFsQ2FyZHNGcm9tRGVja1RvVGFibGVhdVBpbGVzKCk7XG4gICAgdGhpcy5fZGVhbENhcmRzRnJvbURlY2tUb0RyYXdQaWxlcygpO1xuICAgIHRoaXMuX2ZsaXBVcFRhYmxlYXVGcm9udENhcmRzKCk7XG4gIH1cblxuICBtb3ZlQ2FyZEJldHdlZW5UYWJsZWF1UGlsZXMgKHtmcm9tLCB0bywgc2l6ZX06e2Zyb206UGlsZSwgdG86UGlsZSwgc2l6ZTpudW1iZXJ9KVxuICB7XG4gICAgaWYgKCF0aGlzLl90YWJsZWF1UGlsZXMuZmluZChwID0+IHAgPT09IGZyb20pKVxuICAgIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgVGhlIFwiZnJvbVwiIHBpbGUgaXMgbm90IGEgdGFibGVhdSBwaWxlLmApO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5fdGFibGVhdVBpbGVzLmZpbmQocCA9PiBwID09PSB0bykpXG4gICAge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBUaGUgXCJ0b1wiIHBpbGUgaXMgbm90IGEgdGFibGVhdSBwaWxlLmApO1xuICAgIH1cblxuICAgIGNvbnN0IGNhcmRzID0gZnJvbS5nZXRGcm9udENhcmRzKHtzaXplfSk7XG4gICAgaWYgKGNhcmRzLmxlbmd0aCAhPT0gc2l6ZSlcbiAgICB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZSBwaWxlIFwiJHtmcm9tLmlkfVwiIGRvZXNuJ3QgaGF2ZSAke3NpemV9IGNhcmRzIHRvIGRyYXcuYCk7XG4gICAgfVxuXG4gICAgaWYgKHRvLmZyb250Q2FyZCAmJiAhUGlsZS5jaGVja0lmQ2FyZHNBcmVEZXNjZW5kaW5nKHtcbiAgICAgIGNhcmRzOiBbdG8uZnJvbnRDYXJkLCAuLi5jYXJkc10sXG4gICAgICBpblN1aXQ6IGZhbHNlLFxuICAgICAgZmFjZVVwOiB0cnVlXG4gICAgfSkpXG4gICAge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBZb3UgY2FuJ3QgcGxhY2UgdGhvc2UgY2FyZHMgdG8gdGhlIFwidG9cIiBwaWxlLmApO1xuICAgIH1cblxuICAgIHRoaXMuX21vdmVDYXJkQmV0d2VlblBpbGVzKHtmcm9tLCB0bywgc2l6ZX0pO1xuICAgIHRoaXMuX2FjdGlvbkhpc3RvcnkuYWRkKHtmcm9tLCB0bywgc2l6ZSwgdHlwZTogTU9WRV9DQVJEfSk7XG5cbiAgICBpZiAoZnJvbS5mcm9udENhcmQgJiYgIWZyb20uZnJvbnRDYXJkLmlzRmFjZVVwKSB7XG4gICAgICB0aGlzLl9mYWNlVXBDYXJkKHtjYXJkOiBmcm9tLmZyb250Q2FyZH0pO1xuICAgICAgdGhpcy5fYWN0aW9uSGlzdG9yeS5hZGQoe2NhcmQ6IGZyb20uZnJvbnRDYXJkLCB0eXBlOiBGQUNFX1VQX0NBUkR9KTtcbiAgICB9XG5cbiAgICBjb25zdCBkaXNjYXJkZWRQaWxlID0gdGhpcy5fZGlzY2FyZFBpbGVzLmZpbmQocCA9PiBwLmNhcmRzLmxlbmd0aCA9PT0gMCk7XG5cbiAgICBpZiAoIWRpc2NhcmRlZFBpbGUpXG4gICAge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFRoZXJlIGFyZW4ndCBhbnkgZW1wdHkgZGlzY2FyZGVkIHBpbGVzLmApO1xuICAgIH1cblxuICAgIGlmICh0by5jaGVja0lmRnJvbnRDYXJkc0NvbXBsZXRlKCkpXG4gICAge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMzsgaSsrKVxuICAgICAge1xuICAgICAgICB0aGlzLl9tb3ZlQ2FyZEJldHdlZW5QaWxlcyh7XG4gICAgICAgICAgZnJvbTogdG8sXG4gICAgICAgICAgdG86IGRpc2NhcmRlZFBpbGUsXG4gICAgICAgICAgc2l6ZTogMVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5fYWN0aW9uSGlzdG9yeS5hZGQoe1xuICAgICAgICAgIGZyb206IHRvLFxuICAgICAgICAgIHRvOiBkaXNjYXJkZWRQaWxlLFxuICAgICAgICAgIHNpemU6IDEsXG4gICAgICAgICAgdHlwZTogTU9WRV9DQVJEXG4gICAgICAgIH0pO1xuICAgICAgfVxuXG4gICAgICBpZiAodG8uZnJvbnRDYXJkICYmICF0by5mcm9udENhcmQuaXNGYWNlVXApIHtcbiAgICAgICAgdGhpcy5fZmFjZVVwQ2FyZCh7Y2FyZDogdG8uZnJvbnRDYXJkfSk7XG4gICAgICAgIHRoaXMuX2FjdGlvbkhpc3RvcnkuYWRkKHtjYXJkOiB0by5mcm9udENhcmQsIHR5cGU6IEZBQ0VfVVBfQ0FSRH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuX2FjdGlvbkhpc3RvcnkuYWRkKHt0eXBlOiBQQVVTRX0pO1xuICB9XG5cbiAgZ2V0IGZyb250RHJhd1BpbGUgKClcbiAge1xuICAgIGxldCBkcmF3UGlsZTpQaWxlIHwgdW5kZWZpbmVkO1xuXG4gICAgZm9yIChsZXQgaW5kZXggPSB0aGlzLl9kcmF3UGlsZXMubGVuZ3RoIC0gMTsgaW5kZXggPj0gMDsgaW5kZXgtLSlcbiAgICB7XG4gICAgICBpZiAodGhpcy5fZHJhd1BpbGVzW2luZGV4XS5jYXJkcy5sZW5ndGggPT09IHRoaXMuX3NldHRpbmdzLm51bWJlck9mVGFibGVhdVBpbGVzKVxuICAgICAge1xuICAgICAgICBkcmF3UGlsZSA9IHRoaXMuX2RyYXdQaWxlc1tpbmRleF07XG4gICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBkcmF3UGlsZTtcbiAgfVxuXG4gIGRlYWxDYXJkc0Zyb21EcmF3UGlsZSAoKVxuICB7XG4gICAgY29uc3QgZHJhd1BpbGUgPSB0aGlzLmZyb250RHJhd1BpbGU7XG5cbiAgICBpZiAoIWRyYXdQaWxlKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZXJlIGFyZSBubyBjYXJkcyB0byBkcmF3IGZyb20gZHJhdyBwaWxlcy4nKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5fdGFibGVhdVBpbGVzLmxlbmd0aDsgaW5kZXgrKylcbiAgICB7XG4gICAgICBjb25zdCB0YWJsZWF1UGlsZSA9IHRoaXMuX3RhYmxlYXVQaWxlc1tpbmRleF07XG4gICAgICB0aGlzLl9tb3ZlQ2FyZEJldHdlZW5QaWxlcyh7XG4gICAgICAgIGZyb206IGRyYXdQaWxlLFxuICAgICAgICB0bzogdGFibGVhdVBpbGUsXG4gICAgICAgIHNpemU6IDFcbiAgICAgIH0pO1xuICAgICAgdGhpcy5fYWN0aW9uSGlzdG9yeS5hZGQoe1xuICAgICAgICBmcm9tOiBkcmF3UGlsZSxcbiAgICAgICAgdG86IHRhYmxlYXVQaWxlLFxuICAgICAgICBzaXplOiAxLFxuICAgICAgICB0eXBlOiBNT1ZFX0NBUkRcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGZvciAobGV0IHRhYmxlYXVQaWxlIG9mIHRoaXMuX3RhYmxlYXVQaWxlcylcbiAgICB7XG4gICAgICBpZiAodGFibGVhdVBpbGUuZnJvbnRDYXJkICYmICF0YWJsZWF1UGlsZS5mcm9udENhcmQuaXNGYWNlVXApIHtcbiAgICAgICAgdGhpcy5fZmFjZVVwQ2FyZCh7Y2FyZDp0YWJsZWF1UGlsZS5mcm9udENhcmR9KTtcbiAgICAgICAgdGhpcy5fYWN0aW9uSGlzdG9yeS5hZGQoe1xuICAgICAgICAgIGNhcmQ6IHRhYmxlYXVQaWxlLmZyb250Q2FyZCxcbiAgICAgICAgICB0eXBlOiBGQUNFX1VQX0NBUkRcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgdGhpcy5fYWN0aW9uSGlzdG9yeS5hZGQoe3R5cGU6IFBBVVNFfSk7XG4gIH1cblxuICB1bmRvICgpXG4gIHtcbiAgICAvLyBjb25zb2xlLmxvZyh0aGlzLl9hY3Rpb25IaXN0b3J5LmFjdGlvbnMubWFwKChhLCBpbmRleCwgXykgPT4ge1xuICAgIC8vICAgcmV0dXJuIChhLnR5cGUpO1xuICAgIC8vIH0pKTtcblxuICAgIGxvb3BEZWxldGVQYXVzZXM6IGZvciAoOzspXG4gICAge1xuICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5fYWN0aW9uSGlzdG9yeS5sYXRlc3Q7XG5cbiAgICAgIGlmICghYWN0aW9uKSBicmVhayBsb29wRGVsZXRlUGF1c2VzO1xuXG4gICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKVxuICAgICAge1xuICAgICAgICBjYXNlIFBBVVNFOlxuICAgICAgICAgIHRoaXMuX2FjdGlvbkhpc3RvcnkucmVtb3ZlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWsgbG9vcERlbGV0ZVBhdXNlcztcbiAgICAgIH07XG4gICAgfTtcblxuICAgIGxvb3BFeGVjdXRlVW5kb0FjdGlvbnM6IGZvciAoOzspXG4gICAge1xuICAgICAgY29uc3QgYWN0aW9uID0gdGhpcy5fYWN0aW9uSGlzdG9yeS5sYXRlc3Q7XG5cbiAgICAgIGlmICghYWN0aW9uKSBicmVhayBsb29wRXhlY3V0ZVVuZG9BY3Rpb25zO1xuXG4gICAgICBzd2l0Y2ggKGFjdGlvbi50eXBlKVxuICAgICAge1xuICAgICAgICBjYXNlIEZBQ0VfVVBfQ0FSRDpcbiAgICAgICAgICBhY3Rpb24uY2FyZC5mYWNlRG93bigpO1xuICAgICAgICAgIHRoaXMuX2FjdGlvbkhpc3RvcnkucmVtb3ZlKCk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgTU9WRV9DQVJEOlxuICAgICAgICAgIHRoaXMuX21vdmVDYXJkQmV0d2VlblBpbGVzKHtcbiAgICAgICAgICAgIGZyb206IGFjdGlvbi50byxcbiAgICAgICAgICAgIHRvOiBhY3Rpb24uZnJvbSxcbiAgICAgICAgICAgIHNpemU6IGFjdGlvbi5zaXplXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgdGhpcy5fYWN0aW9uSGlzdG9yeS5yZW1vdmUoKTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBQQVVTRTpcbiAgICAgICAgICB0aGlzLl9hY3Rpb25IaXN0b3J5LnJlbW92ZSgpO1xuICAgICAgICAgIGJyZWFrIGxvb3BFeGVjdXRlVW5kb0FjdGlvbnM7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9O1xuICAgIH1cbiAgfVxuXG4gIHRvU3RyaW5nKClcbiAge1xuICAgIHJldHVybiB0aGlzLl9waWxlcy5tYXAocCA9PiBwLmxhYmVsICsgXCIgXCIgKyBwLnRvU3RyaW5nKCkpLmpvaW4oJ1xcbicpO1xuICB9XG59XG4iLCJpbXBvcnQge0NhcmR9IGZyb20gJy4vY2FyZCc7XG5pbXBvcnQge1BpbGV9IGZyb20gJy4vcGlsZSc7XG5cbmV4cG9ydCBjb25zdCBGQUNFX1VQX0NBUkQgPSAnRkFDRV9VUF9DQVJEJztcbmV4cG9ydCBjb25zdCBNT1ZFX0NBUkQgPSAnTU9WRV9DQVJEJztcbmV4cG9ydCBjb25zdCBQQVVTRSA9ICdQQVVTRSc7XG5cbmludGVyZmFjZSBGYWNlVXBBY3Rpb24ge1xuICB0eXBlOiB0eXBlb2YgRkFDRV9VUF9DQVJELFxuICBjYXJkOiBDYXJkXG59XG5cbmludGVyZmFjZSBNb3ZlQ2FyZEFjdGlvbiB7XG4gIHR5cGU6IHR5cGVvZiBNT1ZFX0NBUkQsXG4gIGZyb206UGlsZSxcbiAgdG86UGlsZSxcbiAgc2l6ZTpudW1iZXJcbn1cblxuaW50ZXJmYWNlIFBhdXNlQWN0aW9uIHtcbiAgdHlwZTogdHlwZW9mIFBBVVNFXG59XG5cbmV4cG9ydCB0eXBlIFVuZG9hYmxlQWN0aW9uID0gRmFjZVVwQWN0aW9uIHwgTW92ZUNhcmRBY3Rpb24gfCBQYXVzZUFjdGlvbjtcblxuZXhwb3J0IGNsYXNzIFVuZG9hYmxlQWN0aW9uSGlzdG9yeVxue1xuICBwcml2YXRlIF9hY3Rpb25zOlVuZG9hYmxlQWN0aW9uW10gPSBbXTtcblxuICBhZGQgKGFjdGlvbjpVbmRvYWJsZUFjdGlvbilcbiAge1xuICAgIHRoaXMuX2FjdGlvbnMgPSBbLi4udGhpcy5fYWN0aW9ucywgYWN0aW9uXTtcbiAgfVxuXG4gIHJlbW92ZSAoKVxuICB7XG4gICAgdGhpcy5fYWN0aW9ucyA9IHRoaXMuX2FjdGlvbnMuc2xpY2UoMCwgLTEpO1xuICB9XG5cbiAgZ2V0IGxhdGVzdCAoKVxuICB7XG4gICAgcmV0dXJuIHRoaXMuX2FjdGlvbnMubGVuZ3RoID09PSAwID8gdW5kZWZpbmVkIDogdGhpcy5fYWN0aW9uc1t0aGlzLl9hY3Rpb25zLmxlbmd0aCAtIDFdO1xuICB9XG5cbiAgZ2V0IGFjdGlvbnMgKClcbiAge1xuICAgIHJldHVybiBbLi4udGhpcy5fYWN0aW9uc107XG4gIH1cbn1cbiIsImltcG9ydCBQaGFzZXIgZnJvbSBcInBoYXNlclwiO1xuaW1wb3J0IHtUYWJsZUdhbWVPYmplY3RXaXRoRXZlbnQgYXMgVGFibGVHYW1lT2JqZWN0fSBmcm9tICcuLi9nYW1lLW9iamVjdHMtd2l0aC1ldmVudHMvdGFibGUnO1xuLy8gaW1wb3J0IHtQaWxlR2FtZU9iamVjdFdpdGhFdmVudCBhcyBQaWxlR2FtZU9iamVjdH0gZnJvbSAnLi4vZ2FtZS1vYmplY3RzLXdpdGgtZXZlbnRzL3BpbGUnO1xuaW1wb3J0IHtDYXJkR2FtZU9iamVjdFdpdGhFdmVudCBhcyBDYXJkR2FtZU9iamVjdH0gZnJvbSAnLi4vZ2FtZS1vYmplY3RzLXdpdGgtZXZlbnRzL2NhcmQnO1xuaW1wb3J0IHtlbWl0dGVyIGFzIGdhbWVPYmplY3RFdmVudEVtaXR0ZXJ9IGZyb20gJy4uL2dhbWUtb2JqZWN0cy13aXRoLWV2ZW50cy9lbWl0dGVyJztcbmltcG9ydCB7QnV0dG9ufSBmcm9tICcuLi9nYW1lLW9iamVjdHMvYnV0dG9uJztcbmltcG9ydCB7Q2FyZFdpdGhFdmVudCBhcyBDYXJkfSBmcm9tICcuLi9tb2RlbHMtd2l0aC1ldmVudHMvY2FyZCc7XG5pbXBvcnQge1BpbGVXaXRoRXZlbnQgYXMgUGlsZX0gZnJvbSAnLi4vbW9kZWxzLXdpdGgtZXZlbnRzL3BpbGUnO1xuaW1wb3J0IHtUYWJsZVdpdGhFdmVudCBhcyBUYWJsZX0gZnJvbSAnLi4vbW9kZWxzLXdpdGgtZXZlbnRzL3RhYmxlJztcbmltcG9ydCB7Y3JlYXRlQ2FyZHNXaXRoRXZlbnRzIGFzIGNyZWF0ZUNhcmRzfSBmcm9tICcuLi9tb2RlbHMtd2l0aC1ldmVudHMvY3JlYXRlLWNhcmRzJztcbmltcG9ydCB7cmFuZG9taXplQXJyYXl9IGZyb20gJy4uL21vZGVscy9jcmVhdGUtY2FyZHMnO1xuaW1wb3J0IHtlbWl0dGVyIGFzIG1vZGVsRXZlbnRFbWl0dGVyfSBmcm9tICcuLi9tb2RlbHMtd2l0aC1ldmVudHMvZW1pdHRlcic7XG5pbXBvcnQge0pvYlF1ZXVlfSBmcm9tICcuLi9qb2ItcXVldWUnO1xuLy8gaW1wb3J0IHtkZWJvdW5jZX0gZnJvbSAndW5kZXJzY29yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW5TY2VuZSBleHRlbmRzIFBoYXNlci5TY2VuZVxue1xuICBwcml2YXRlIF9fdGFibGU6VGFibGUgfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgX190YWJsZUdhbWVPYmplY3Q6VGFibGVHYW1lT2JqZWN0IHwgdW5kZWZpbmVkO1xuICBwcml2YXRlIF9jYXJkQW5pbWF0aW9uUXVldWU6Sm9iUXVldWU8dm9pZD4gPSBuZXcgSm9iUXVldWU8dm9pZD4oKTtcbiAgcHJpdmF0ZSBfaGludEFuaW1hdGlvblF1ZXVlOkpvYlF1ZXVlPHZvaWQ+ID0gbmV3IEpvYlF1ZXVlPHZvaWQ+KCk7XG4gIC8vIHByaXZhdGUgX2RyYWdQaWxlQW5pbWF0aW9uUXVldWU6UHJvbWlzZVF1ZXVlPHZvaWQ+ID0gbmV3IFByb21pc2VRdWV1ZTx2b2lkPigpO1xuXG4gIGNvbnN0cnVjdG9yICgpIHtcbiAgICBzdXBlcignbWFpbicpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXQgX3RhYmxlICgpIHtcbiAgICBpZiAoIXRoaXMuX190YWJsZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdUYWJsZSBpcyBub3QgcmVhZHkuJyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLl9fdGFibGU7XG4gIH1cblxuICBwcml2YXRlIGdldCBfdGFibGVHYW1lT2JqZWN0ICgpIHtcbiAgICBpZiAoIXRoaXMuX190YWJsZUdhbWVPYmplY3QpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGFibGUgR2FtZSBPYmplY3QgaXMgbm90IHJlYWR5LicpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5fX3RhYmxlR2FtZU9iamVjdDtcbiAgfVxuXG4gIGFzeW5jIGNyZWF0ZSAoKVxuICB7XG4gICAgdGhpcy5fX3RhYmxlID0gbmV3IFRhYmxlKHtcbiAgICAgIG51bWJlck9mVGFibGVhdVBpbGVzOiAxMCxcbiAgICAgIG51bWJlck9mRHJhd1BpbGVzOiA1LFxuICAgICAgY2FyZHM6IGNyZWF0ZUNhcmRzKHtcbiAgICAgICAgbnVtYmVyT2ZEZWNrc1VzZWQ6IDQsXG4gICAgICAgIG51bWJlck9mU3VpdHM6IDJcbiAgICAgIH0pXG4gICAgfSk7XG5cbiAgICB0aGlzLl9fdGFibGVHYW1lT2JqZWN0ID0gbmV3IFRhYmxlR2FtZU9iamVjdCh7XG4gICAgICBzY2VuZTogdGhpcyxcbiAgICAgIGRlY2tQaWxlSWQ6IHRoaXMuX3RhYmxlLmRlY2tQaWxlLmlkLFxuICAgICAgZHJhd1BpbGVzSWRzOiB0aGlzLl90YWJsZS5kcmF3UGlsZXMubWFwKHAgPT4gcC5pZCksXG4gICAgICB0YWJsZWF1UGlsZXNJZHM6IHRoaXMuX3RhYmxlLnRhYmxlYXVQaWxlcy5tYXAocCA9PiBwLmlkKSxcbiAgICAgIGRpc2NhcmRQaWxlc0lkczogdGhpcy5fdGFibGUuZGlzY2FyZFBpbGVzLm1hcChwID0+IHAuaWQpLFxuICAgICAgZHJhZ1BpbGVJZDogXCJkcmFnLXBpbGVcIixcbiAgICAgIGhpbnRQaWxlSWQ6IFwiaGludC1waWxlXCIsXG4gICAgICBjYXJkR2FtZU9iamVjdHM6IHRoaXMuX3RhYmxlLmNhcmRzLm1hcChjYXJkID0+IG5ldyBDYXJkR2FtZU9iamVjdCh7XG4gICAgICAgIHNjZW5lOiB0aGlzLFxuICAgICAgICB4OiAwLFxuICAgICAgICB5OiAwLFxuICAgICAgICBzdWl0OiBjYXJkLnN1aXQsXG4gICAgICAgIHJhbms6IGNhcmQucmFuayxcbiAgICAgICAgbmFtZTogY2FyZC5pZFxuICAgICAgfSkpXG4gICAgfSk7XG5cbiAgICB0aGlzLmNoaWxkcmVuLmFkZCh0aGlzLl90YWJsZUdhbWVPYmplY3QpO1xuXG4gICAgY29uc3QgdW5kb0J1dHRvbiA9IG5ldyBCdXR0b24oe1xuICAgICAgc2NlbmU6IHRoaXMsXG4gICAgICB4OiAxMDAsXG4gICAgICB5OiA2MDAsXG4gICAgICBsYWJlbDogJ1VORE8nXG4gICAgfSk7XG4gICAgdW5kb0J1dHRvbi5vbigncG9pbnRlcmRvd24nLCAoKSA9PiB0aGlzLl90YWJsZS51bmRvKCkpO1xuICAgIHRoaXMuY2hpbGRyZW4uYWRkKHVuZG9CdXR0b24pO1xuICAgIHRoaXMuX2NhcmRBbmltYXRpb25RdWV1ZS5vblF1ZXVlU3RhcnQoKCkgPT4gdW5kb0J1dHRvbi5kaXNhYmxlKCkpO1xuICAgIHRoaXMuX2NhcmRBbmltYXRpb25RdWV1ZS5vblF1ZXVlRW5kKCgpID0+IHVuZG9CdXR0b24uZW5hYmxlKCkpO1xuICAgIHRoaXMuX2NhcmRBbmltYXRpb25RdWV1ZS5vblF1ZXVlQ2FuY2VsKCgpID0+IHVuZG9CdXR0b24uZW5hYmxlKCkpO1xuICAgIHRoaXMuX2hpbnRBbmltYXRpb25RdWV1ZS5vblF1ZXVlU3RhcnQoKCkgPT4gdW5kb0J1dHRvbi5kaXNhYmxlKCkpO1xuICAgIHRoaXMuX2hpbnRBbmltYXRpb25RdWV1ZS5vblF1ZXVlRW5kKCgpID0+IHVuZG9CdXR0b24uZW5hYmxlKCkpO1xuICAgIHRoaXMuX2hpbnRBbmltYXRpb25RdWV1ZS5vblF1ZXVlQ2FuY2VsKCgpID0+IHVuZG9CdXR0b24uZW5hYmxlKCkpO1xuXG4gICAgY29uc3QgdUtleSA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5VKTtcbiAgICB1S2V5Lm9uKCdkb3duJywgKGV2ZW50OktleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGlmICghdW5kb0J1dHRvbi5pc0Rpc2FibGVkKSB0aGlzLl90YWJsZS51bmRvKCk7XG4gICAgfSk7XG5cbiAgICBjb25zdCBoaW50QnV0dG9uID0gbmV3IEJ1dHRvbih7XG4gICAgICBzY2VuZTogdGhpcyxcbiAgICAgIHg6IDI1MCxcbiAgICAgIHk6IDYwMCxcbiAgICAgIGxhYmVsOiAnSElOVCdcbiAgICB9KTtcbiAgICBoaW50QnV0dG9uLm9uKCdwb2ludGVyZG93bicsICgpID0+IHRoaXMuc2hvd0hpbnRzKCkpO1xuICAgIHRoaXMuY2hpbGRyZW4uYWRkKGhpbnRCdXR0b24pO1xuICAgIHRoaXMuX2NhcmRBbmltYXRpb25RdWV1ZS5vblF1ZXVlU3RhcnQoKCkgPT4gaGludEJ1dHRvbi5kaXNhYmxlKCkpO1xuICAgIHRoaXMuX2NhcmRBbmltYXRpb25RdWV1ZS5vblF1ZXVlRW5kKCgpID0+IGhpbnRCdXR0b24uZW5hYmxlKCkpO1xuICAgIHRoaXMuX2NhcmRBbmltYXRpb25RdWV1ZS5vblF1ZXVlQ2FuY2VsKCgpID0+IGhpbnRCdXR0b24uZW5hYmxlKCkpO1xuICAgIHRoaXMuX2hpbnRBbmltYXRpb25RdWV1ZS5vblF1ZXVlU3RhcnQoKCkgPT4gaGludEJ1dHRvbi5kaXNhYmxlKCkpO1xuICAgIHRoaXMuX2hpbnRBbmltYXRpb25RdWV1ZS5vblF1ZXVlRW5kKCgpID0+IGhpbnRCdXR0b24uZW5hYmxlKCkpO1xuICAgIHRoaXMuX2hpbnRBbmltYXRpb25RdWV1ZS5vblF1ZXVlQ2FuY2VsKCgpID0+IGhpbnRCdXR0b24uZW5hYmxlKCkpO1xuXG4gICAgY29uc3QgaEtleSA9IHRoaXMuaW5wdXQua2V5Ym9hcmQuYWRkS2V5KFBoYXNlci5JbnB1dC5LZXlib2FyZC5LZXlDb2Rlcy5IKTtcbiAgICBoS2V5Lm9uKCdkb3duJywgKGV2ZW50OktleWJvYXJkRXZlbnQpID0+IHtcbiAgICAgIGlmICghaGludEJ1dHRvbi5pc0Rpc2FibGVkKSB0aGlzLnNob3dIaW50cygpO1xuICAgIH0pO1xuXG4gICAgdGhpcy5pbnB1dC5vbigncG9pbnRlcmRvd24nLCAocG9pbnRlcjpQaGFzZXIuSW5wdXQuUG9pbnRlciwgZ2FtZU9iamVjdHM6IFBoYXNlci5HYW1lT2JqZWN0cy5HYW1lT2JqZWN0W10pID0+IHtcbiAgICAgIGlmKCFnYW1lT2JqZWN0cy5pbmNsdWRlcyhoaW50QnV0dG9uKSAmJiB0aGlzLl9oaW50QW5pbWF0aW9uUXVldWUuaXNQcm9jZXNzaW5nKVxuICAgICAge1xuICAgICAgICB0aGlzLl9oaW50QW5pbWF0aW9uUXVldWUuY2FuY2VsKCk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgICBnYW1lT2JqZWN0RXZlbnRFbWl0dGVyLm9uKFwiQ0FSRF9QT0lOVEVST1ZFUlwiLCB0aGlzLm9uQ2FyZFBvaW50ZXJPdmVyLmJpbmQodGhpcykpO1xuICAgIGdhbWVPYmplY3RFdmVudEVtaXR0ZXIub24oXCJDQVJEX1BPSU5URVJPVVRcIiwgdGhpcy5vbkNhcmRQb2ludGVyT3V0LmJpbmQodGhpcykpO1xuICAgIGdhbWVPYmplY3RFdmVudEVtaXR0ZXIub24oXCJDQVJEX1BPSU5URVJET1dOXCIsIHRoaXMub25DYXJkUG9pbnRlckRvd24uYmluZCh0aGlzKSk7XG4gICAgZ2FtZU9iamVjdEV2ZW50RW1pdHRlci5vbihcIkNBUkRfRFJBR1NUQVJUXCIsIHRoaXMub25DYXJkRHJhZ1N0YXJ0LmJpbmQodGhpcykpO1xuICAgIGdhbWVPYmplY3RFdmVudEVtaXR0ZXIub24oXCJDQVJEX0RSQUdcIiwgdGhpcy5vbkNhcmREcmFnLmJpbmQodGhpcykpO1xuICAgIGdhbWVPYmplY3RFdmVudEVtaXR0ZXIub24oXCJDQVJEX0RST1BcIiwgdGhpcy5vbkNhcmREcm9wLmJpbmQodGhpcykpO1xuICAgIGdhbWVPYmplY3RFdmVudEVtaXR0ZXIub24oXCJDQVJEX0RSQUdFTkRcIiwgdGhpcy5vbkNhcmREcmFnRW5kLmJpbmQodGhpcykpO1xuICAgIG1vZGVsRXZlbnRFbWl0dGVyLm9uKFwiTU9WRV9DQVJEU19CRVRXRUVOX1BJTEVTXCIsIHRoaXMub25Nb3ZlQ2FyZHNCZXR3ZWVuUGlsZXMuYmluZCh0aGlzKSk7XG4gICAgbW9kZWxFdmVudEVtaXR0ZXIub24oXCJGTElQX09WRVJfQ0FSRFwiLCB0aGlzLm9uRmxpcE92ZXJDYXJkLmJpbmQodGhpcykpO1xuXG4gICAgdGhpcy5fdGFibGUuc3RhcnRHYW1lKCk7XG4gIH1cblxuICBvbkNhcmRQb2ludGVyT3ZlciAoe2NhcmRHYW1lT2JqZWN0LCBwb2ludGVyfTp7Y2FyZEdhbWVPYmplY3Q6Q2FyZEdhbWVPYmplY3QsIHBvaW50ZXI6UGhhc2VyLklucHV0LlBvaW50ZXJ9KVxuICB7XG4gICAgaWYgKCF0aGlzLl9jYXJkQW5pbWF0aW9uUXVldWUuaXNQcm9jZXNzaW5nKSB7XG4gICAgICB0aGlzLmFkZEhpZ2hsaWdodFRvQ2FyZEdhbWVPYmplY3Qoe2NhcmRHYW1lT2JqZWN0fSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMuX2NhcmRBbmltYXRpb25RdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xuICAgICAgICBpZih0aGlzLmlucHV0LmhpdFRlc3RQb2ludGVyKHBvaW50ZXIpWzBdID09PSBjYXJkR2FtZU9iamVjdCkge1xuICAgICAgICAgIHRoaXMuYWRkSGlnaGxpZ2h0VG9DYXJkR2FtZU9iamVjdCh7Y2FyZEdhbWVPYmplY3R9KTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgYWRkSGlnaGxpZ2h0VG9DYXJkR2FtZU9iamVjdCAoe2NhcmRHYW1lT2JqZWN0fTp7Y2FyZEdhbWVPYmplY3Q6Q2FyZEdhbWVPYmplY3R9KVxuICB7XG4gICAgY29uc3QgdGFyZ2V0UGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZ2V0UGlsZUdhbWVPYmplY3RCeUNhcmRHYW1lT2JqZWN0TmFtZShjYXJkR2FtZU9iamVjdC5uYW1lKTtcblxuICAgIGlmIChjYXJkR2FtZU9iamVjdC5pc0ZhY2VVcFxuICAgICAgJiYgdGhpcy5fdGFibGVHYW1lT2JqZWN0LnRhYmxlYXVQaWxlR2FtZU9iamVjdHMuaW5jbHVkZXModGFyZ2V0UGlsZUdhbWVPYmplY3QpKVxuICAgIHtcbiAgICAgIGNvbnN0IHRhcmdldFBpbGUgPSB0aGlzLl90YWJsZS5nZXRQaWxlQnlDYXJkSWQoY2FyZEdhbWVPYmplY3QubmFtZSk7XG4gICAgICBjb25zdCBmcm9tUGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZ2V0UGlsZUdhbWVPYmplY3RCeU5hbWUodGFyZ2V0UGlsZS5pZCk7XG4gICAgICBjb25zdCBzaXplID0gZnJvbVBpbGVHYW1lT2JqZWN0LmNhcmRHYW1lT2JqZWN0cy5sZW5ndGggLSBmcm9tUGlsZUdhbWVPYmplY3QuY2FyZEdhbWVPYmplY3RzLmluZGV4T2YoY2FyZEdhbWVPYmplY3QpO1xuICAgICAgaWYgKFBpbGUuY2hlY2tJZkNhcmRzQXJlRGVzY2VuZGluZyh7Y2FyZHM6IHRhcmdldFBpbGUuY2FyZHMuc2xpY2UoLXNpemUpLCBmYWNlVXA6IHRydWUsIGluU3VpdDogdHJ1ZX0pKVxuICAgICAge1xuICAgICAgICBjYXJkR2FtZU9iamVjdC5hZGRIaWdobGlnaHQoKTtcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5fdGFibGUuZnJvbnREcmF3UGlsZSlcbiAgICB7XG4gICAgICBjb25zdCBmcm9udERyYXdQaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5nZXRQaWxlR2FtZU9iamVjdEJ5TmFtZSh0aGlzLl90YWJsZS5mcm9udERyYXdQaWxlLmlkKTtcbiAgICAgIGlmICh0YXJnZXRQaWxlR2FtZU9iamVjdCA9PT0gZnJvbnREcmF3UGlsZUdhbWVPYmplY3QpXG4gICAgICB7XG4gICAgICAgIGNhcmRHYW1lT2JqZWN0LmFkZEhpZ2hsaWdodCgpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uQ2FyZFBvaW50ZXJPdXQgKHtjYXJkR2FtZU9iamVjdH06e2NhcmRHYW1lT2JqZWN0OkNhcmRHYW1lT2JqZWN0fSlcbiAge1xuICAgIGNhcmRHYW1lT2JqZWN0LnJlbW92ZUhpZ2hsaWdodCgpO1xuICB9XG5cbiAgb25DYXJkUG9pbnRlckRvd24gKHtjYXJkR2FtZU9iamVjdH06e2NhcmRHYW1lT2JqZWN0OkNhcmRHYW1lT2JqZWN0fSlcbiAge1xuICAgIGlmICghY2FyZEdhbWVPYmplY3QuaXNIaWdoTGlnaHRlZCkgcmV0dXJuO1xuICAgIGNvbnN0IHRhcmdldFBpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnlDYXJkR2FtZU9iamVjdE5hbWUoY2FyZEdhbWVPYmplY3QubmFtZSk7XG4gICAgaWYgKHRoaXMuX3RhYmxlLmZyb250RHJhd1BpbGUpXG4gICAge1xuICAgICAgY29uc3QgZnJvbnREcmF3UGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZ2V0UGlsZUdhbWVPYmplY3RCeU5hbWUodGhpcy5fdGFibGUuZnJvbnREcmF3UGlsZS5pZCk7XG4gICAgICBpZiAoZnJvbnREcmF3UGlsZUdhbWVPYmplY3QgPT09IHRhcmdldFBpbGVHYW1lT2JqZWN0KVxuICAgICAge1xuICAgICAgICB0aGlzLl90YWJsZS5kZWFsQ2FyZHNGcm9tRHJhd1BpbGUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBvbkNhcmREcmFnU3RhcnQgKHtjYXJkR2FtZU9iamVjdH06e2NhcmRHYW1lT2JqZWN0OkNhcmRHYW1lT2JqZWN0fSlcbiAge1xuICAgIGlmICghY2FyZEdhbWVPYmplY3QuaXNIaWdoTGlnaHRlZCkgcmV0dXJuO1xuXG4gICAgY29uc3QgdGFyZ2V0UGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZ2V0UGlsZUdhbWVPYmplY3RCeUNhcmRHYW1lT2JqZWN0TmFtZShjYXJkR2FtZU9iamVjdC5uYW1lKTtcbiAgICBjb25zdCBkcmFnUGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZHJhZ1BpbGVHYW1lT2JqZWN0O1xuXG4gICAgaWYgKGNhcmRHYW1lT2JqZWN0LmlzRmFjZVVwXG4gICAgICAmJiB0aGlzLl90YWJsZUdhbWVPYmplY3QudGFibGVhdVBpbGVHYW1lT2JqZWN0cy5pbmNsdWRlcyh0YXJnZXRQaWxlR2FtZU9iamVjdClcbiAgICAgICYmICFkcmFnUGlsZUdhbWVPYmplY3QuYWN0aXZlKVxuICAgIHtcbiAgICAgIGNvbnN0IHRhcmdldFBpbGUgPSB0aGlzLl90YWJsZS5nZXRQaWxlQnlDYXJkSWQoY2FyZEdhbWVPYmplY3QubmFtZSk7XG4gICAgICBjb25zdCBmcm9tUGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZ2V0UGlsZUdhbWVPYmplY3RCeU5hbWUodGFyZ2V0UGlsZS5pZCk7XG4gICAgICBjb25zdCBzaXplID0gZnJvbVBpbGVHYW1lT2JqZWN0LmNhcmRHYW1lT2JqZWN0cy5sZW5ndGggLSBmcm9tUGlsZUdhbWVPYmplY3QuY2FyZEdhbWVPYmplY3RzLmluZGV4T2YoY2FyZEdhbWVPYmplY3QpO1xuXG4gICAgICBpZiAoUGlsZS5jaGVja0lmQ2FyZHNBcmVEZXNjZW5kaW5nKHtjYXJkczogdGFyZ2V0UGlsZS5jYXJkcy5zbGljZSgtc2l6ZSksIGZhY2VVcDogdHJ1ZSwgaW5TdWl0OiB0cnVlfSkpXG4gICAgICB7XG4gICAgICAgIGNvbnN0IGRyYWdQaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5kcmFnUGlsZUdhbWVPYmplY3Q7XG4gICAgICAgIGNvbnN0IHkgPSBjYXJkR2FtZU9iamVjdC55O1xuICAgICAgICBkcmFnUGlsZUdhbWVPYmplY3Quc2V0QWN0aXZlKHRydWUpO1xuICAgICAgICB0aGlzLl90YWJsZUdhbWVPYmplY3QuYnJpbmdUb1RvcChkcmFnUGlsZUdhbWVPYmplY3QpO1xuICAgICAgICBkcmFnUGlsZUdhbWVPYmplY3QueCA9IGZyb21QaWxlR2FtZU9iamVjdC54O1xuICAgICAgICBkcmFnUGlsZUdhbWVPYmplY3QueSA9IGZyb21QaWxlR2FtZU9iamVjdC55ICsgeTtcbiAgICAgICAgZHJhZ1BpbGVHYW1lT2JqZWN0LnBsYWNlQ2FyZEdhbWVPYmplY3RzKHtjYXJkR2FtZU9iamVjdHM6IGZyb21QaWxlR2FtZU9iamVjdC5kcmF3RnJvbnRDYXJkR2FtZU9iamVjdHMoe3NpemV9KX0pO1xuICAgICAgICB0aGlzLl9jYXJkQW5pbWF0aW9uUXVldWUuYWRkKGFzeW5jICgpID0+IHtcbiAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICAgICAgICBkcmFnUGlsZUdhbWVPYmplY3QuYWRqdXN0Q2FyZEdhbWVPYmplY3RQb3NpdGlvbnNXaXRoQW5pbWF0aW9uKCksXG4gICAgICAgICAgICBkcmFnUGlsZUdhbWVPYmplY3QuZXhwYW5kV2l0aEFuaW1hdGlvbigpXG4gICAgICAgICAgXSlcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DYXJkRHJhZyAoe3BvaW50ZXIsIGNhcmRHYW1lT2JqZWN0fTp7cG9pbnRlcjpQaGFzZXIuSW5wdXQuUG9pbnRlciwgY2FyZEdhbWVPYmplY3Q6Q2FyZEdhbWVPYmplY3R9KVxuICB7XG4gICAgaWYgKCFjYXJkR2FtZU9iamVjdC5pc0hpZ2hMaWdodGVkKSByZXR1cm47XG5cbiAgICBjb25zdCB0YXJnZXRQaWxlR2FtZU9iamVjdCA9IHRoaXMuX3RhYmxlR2FtZU9iamVjdC5nZXRQaWxlR2FtZU9iamVjdEJ5Q2FyZEdhbWVPYmplY3ROYW1lKGNhcmRHYW1lT2JqZWN0Lm5hbWUpO1xuXG4gICAgY29uc3QgZHJhZ1BpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmRyYWdQaWxlR2FtZU9iamVjdDtcbiAgICBpZiAodGFyZ2V0UGlsZUdhbWVPYmplY3QgPT09IGRyYWdQaWxlR2FtZU9iamVjdCAmJiBkcmFnUGlsZUdhbWVPYmplY3QuYWN0aXZlKVxuICAgIHtcbiAgICAgIGNvbnN0IGRlbHRhWCA9IHBvaW50ZXIueCAtIHBvaW50ZXIucHJldlBvc2l0aW9uLng7XG4gICAgICBjb25zdCBkZWx0YVkgPSBwb2ludGVyLnkgLSBwb2ludGVyLnByZXZQb3NpdGlvbi55O1xuICAgICAgZHJhZ1BpbGVHYW1lT2JqZWN0LnggKz0gZGVsdGFYO1xuICAgICAgZHJhZ1BpbGVHYW1lT2JqZWN0LnkgKz0gZGVsdGFZO1xuICAgIH1cbiAgfVxuXG4gIG9uQ2FyZERyb3AgKHt6b25lLCBjYXJkR2FtZU9iamVjdH06e3pvbmU6UGhhc2VyLkdhbWVPYmplY3RzLlpvbmUsIGNhcmRHYW1lT2JqZWN0OkNhcmRHYW1lT2JqZWN0fSlcbiAge1xuICAgIGNvbnN0IHRhcmdldFBpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnlDYXJkR2FtZU9iamVjdE5hbWUoY2FyZEdhbWVPYmplY3QubmFtZSk7XG4gICAgY29uc3QgZHJhZ1BpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmRyYWdQaWxlR2FtZU9iamVjdDtcbiAgICBpZiAodGFyZ2V0UGlsZUdhbWVPYmplY3QgPT09IGRyYWdQaWxlR2FtZU9iamVjdCAmJiBkcmFnUGlsZUdhbWVPYmplY3QuYWN0aXZlKVxuICAgIHtcbiAgICAgIGNvbnN0IGZyb21QaWxlID0gdGhpcy5fdGFibGUuZ2V0UGlsZUJ5Q2FyZElkKGNhcmRHYW1lT2JqZWN0Lm5hbWUpO1xuICAgICAgY29uc3QgZnJvbVBpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnlOYW1lKGZyb21QaWxlLmlkKTtcbiAgICAgIGNvbnN0IHRvUGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZ2V0UGlsZUdhbWVPYmplY3RCeShwID0+IHAuem9uZSA9PT0gem9uZSk7XG4gICAgICBjb25zdCB0b1BpbGUgPSB0aGlzLl90YWJsZS5nZXRQaWxlQnlJZCh0b1BpbGVHYW1lT2JqZWN0Lm5hbWUpO1xuICAgICAgY29uc3Qgc2l6ZSA9IGRyYWdQaWxlR2FtZU9iamVjdC5jYXJkR2FtZU9iamVjdHMubGVuZ3RoO1xuICAgICAgY29uc3QgY2FyZEdhbWVPYmplY3RzID0gZHJhZ1BpbGVHYW1lT2JqZWN0LmRyYXdGcm9udENhcmRHYW1lT2JqZWN0cyh7c2l6ZX0pO1xuICAgICAgZnJvbVBpbGVHYW1lT2JqZWN0LnBsYWNlQ2FyZEdhbWVPYmplY3RzKHtjYXJkR2FtZU9iamVjdHN9KTtcblxuICAgICAgY29uc3QgX2NhcmRzID0gY2FyZEdhbWVPYmplY3RzLm1hcChjT2JqID0+IHtcbiAgICAgICAgY29uc3QgY2FyZCA9IHRoaXMuX3RhYmxlLmNhcmRzLmZpbmQoYyA9PiBjT2JqLm5hbWUgPT09IGMuaWQpO1xuICAgICAgICBpZiAoIWNhcmQpIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgY29ycmVzcG9uZGluZyBjYXJkcy5cIik7XG4gICAgICAgIHJldHVybiBjYXJkO1xuICAgICAgfSk7XG5cbiAgICAgIGlmICghdG9QaWxlLmZyb250Q2FyZFxuICAgICAgICB8fCBQaWxlLmNoZWNrSWZDYXJkc0FyZURlc2NlbmRpbmcoe2NhcmRzOiBbdG9QaWxlLmZyb250Q2FyZCwgLi4uX2NhcmRzXSwgZmFjZVVwOiB0cnVlfSkpXG4gICAgICB7XG4gICAgICAgIHRoaXMuX3RhYmxlLm1vdmVDYXJkQmV0d2VlblRhYmxlYXVQaWxlcyh7XG4gICAgICAgICAgdG86IHRvUGlsZSxcbiAgICAgICAgICBmcm9tOiBmcm9tUGlsZSxcbiAgICAgICAgICBzaXplXG4gICAgICAgIH0pO1xuICAgICAgICBkcmFnUGlsZUdhbWVPYmplY3Quc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX2NhcmRBbmltYXRpb25RdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xuICAgICAgICAgIGF3YWl0IGZyb21QaWxlR2FtZU9iamVjdC5hZGp1c3RDYXJkR2FtZU9iamVjdFBvc2l0aW9uc1dpdGhBbmltYXRpb24oKTtcbiAgICAgICAgICBkcmFnUGlsZUdhbWVPYmplY3Quc2V0QWN0aXZlKGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgb25DYXJkRHJhZ0VuZCAoe2NhcmRHYW1lT2JqZWN0fTp7Y2FyZEdhbWVPYmplY3Q6Q2FyZEdhbWVPYmplY3R9KVxuICB7XG4gICAgY29uc3QgdGFyZ2V0UGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZ2V0UGlsZUdhbWVPYmplY3RCeUNhcmRHYW1lT2JqZWN0TmFtZShjYXJkR2FtZU9iamVjdC5uYW1lKTtcbiAgICBjb25zdCBkcmFnUGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZHJhZ1BpbGVHYW1lT2JqZWN0O1xuICAgIGlmICh0YXJnZXRQaWxlR2FtZU9iamVjdCA9PT0gZHJhZ1BpbGVHYW1lT2JqZWN0ICYmIGRyYWdQaWxlR2FtZU9iamVjdC5hY3RpdmUpXG4gICAge1xuICAgICAgY29uc3Qgc2l6ZSA9IGRyYWdQaWxlR2FtZU9iamVjdC5jYXJkR2FtZU9iamVjdHMubGVuZ3RoO1xuICAgICAgY29uc3QgZnJvbVBpbGUgPSB0aGlzLl90YWJsZS5nZXRQaWxlQnlDYXJkSWQoY2FyZEdhbWVPYmplY3QubmFtZSk7XG4gICAgICBjb25zdCBmcm9tUGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZ2V0UGlsZUdhbWVPYmplY3RCeU5hbWUoZnJvbVBpbGUuaWQpO1xuICAgICAgY29uc3QgY2FyZEdhbWVPYmplY3RzID0gZHJhZ1BpbGVHYW1lT2JqZWN0LmRyYXdGcm9udENhcmRHYW1lT2JqZWN0cyh7c2l6ZX0pO1xuICAgICAgZnJvbVBpbGVHYW1lT2JqZWN0LnBsYWNlQ2FyZEdhbWVPYmplY3RzKHtjYXJkR2FtZU9iamVjdHN9KTtcbiAgICAgIHRoaXMuX2NhcmRBbmltYXRpb25RdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xuICAgICAgICBhd2FpdCBmcm9tUGlsZUdhbWVPYmplY3QuYWRqdXN0Q2FyZEdhbWVPYmplY3RQb3NpdGlvbnNXaXRoQW5pbWF0aW9uKCk7XG4gICAgICAgIGRyYWdQaWxlR2FtZU9iamVjdC5zZXRBY3RpdmUoZmFsc2UpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25Nb3ZlQ2FyZHNCZXR3ZWVuUGlsZXMgKHtmcm9tLCB0bywgc2l6ZX06e2Zyb206UGlsZSwgdG86UGlsZSwgc2l6ZTpudW1iZXJ9KSB7XG4gICAgY29uc3QgZnJvbVBpbGVHYW1lT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmdldFBpbGVHYW1lT2JqZWN0QnlOYW1lKGZyb20uaWQpO1xuICAgIGNvbnN0IHRvUGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZ2V0UGlsZUdhbWVPYmplY3RCeU5hbWUodG8uaWQpO1xuXG4gICAgdGhpcy5fY2FyZEFuaW1hdGlvblF1ZXVlLmFkZChhc3luYyAoKSA9PiB7XG4gICAgICBjb25zdCBjYXJkR2FtZU9iamVjdHMgPSBmcm9tUGlsZUdhbWVPYmplY3QuZHJhd0Zyb250Q2FyZEdhbWVPYmplY3RzKHtzaXplfSk7XG4gICAgICB0b1BpbGVHYW1lT2JqZWN0LnBsYWNlQ2FyZEdhbWVPYmplY3RzKHtjYXJkR2FtZU9iamVjdHN9KTtcbiAgICAgIHRoaXMuX3RhYmxlR2FtZU9iamVjdC5icmluZ1RvVG9wKHRvUGlsZUdhbWVPYmplY3QpO1xuICAgICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICB0b1BpbGVHYW1lT2JqZWN0LmFkanVzdENhcmRHYW1lT2JqZWN0UG9zaXRpb25zV2l0aEFuaW1hdGlvbigpLFxuICAgICAgICBmcm9tUGlsZUdhbWVPYmplY3QuYWRqdXN0Q2FyZEdhbWVPYmplY3RQb3NpdGlvbnNXaXRoQW5pbWF0aW9uKClcbiAgICAgIF0pO1xuICAgIH0pO1xuXG4gICAgaWYgKHRoaXMuX3RhYmxlLmlzQ2xlYXIpIHtcbiAgICAgIHRoaXMuX2NhcmRBbmltYXRpb25RdWV1ZS5hZGQoYXN5bmMgKCkgPT4ge1xuICAgICAgICBhbGVydChcIllvdSBiZWF0IHRoZSBnYW1lISEhXCIpO1xuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbiAgb25GbGlwT3ZlckNhcmQgKHtjYXJkfTp7Y2FyZDpDYXJkfSkge1xuICAgIGNvbnN0IGNhcmRHYXJtT2JqZWN0ID0gdGhpcy5fdGFibGVHYW1lT2JqZWN0LmNhcmRHYW1lT2JqZWN0cy5maW5kKGMgPT4gYy5uYW1lID09PSBjYXJkLmlkKTtcbiAgICBpZiAoY2FyZEdhcm1PYmplY3QpIHtcbiAgICAgIHRoaXMuX2NhcmRBbmltYXRpb25RdWV1ZS5hZGQoKCkgPT4gY2FyZEdhcm1PYmplY3QuZmxpcE92ZXIoY2FyZC5pc0ZhY2VVcCkpO1xuICAgIH07XG4gIH1cblxuICBzaG93SGludHMgKClcbiAge1xuICAgIGNvbnN0IG1vdmVzID0gdGhpcy5fdGFibGUuZ2V0UG9zc2libGVNb3Zlc0JldHdlZW5UYWJsZWF1UGlsZXMoKTtcbiAgICBjb25zdCBoaW50UGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuaGludFBpbGVHYW1lT2JqZWN0O1xuICAgIGNvbnN0IGNsZWFySGludFBpbGVHYW1lT2JqZWN0ID0gKCkgPT4ge1xuICAgICAgY29uc3QgY2FyZEdhbWVPYmplY3RzID0gaGludFBpbGVHYW1lT2JqZWN0XG4gICAgICAgIC5kcmF3RnJvbnRDYXJkR2FtZU9iamVjdHMoe3NpemU6IGhpbnRQaWxlR2FtZU9iamVjdC5jYXJkR2FtZU9iamVjdHMubGVuZ3RofSk7XG4gICAgICBjYXJkR2FtZU9iamVjdHMuZm9yRWFjaChjID0+IGMuZGVzdHJveSgpKTtcbiAgICB9O1xuXG4gICAgZm9yIChsZXQge2Zyb20sIHRvLCBzaXplfSBvZiBtb3ZlcylcbiAgICB7XG4gICAgICB0aGlzLl9oaW50QW5pbWF0aW9uUXVldWUuYWRkKGFzeW5jIChvblF1ZXVlQ2FuY2VsKSA9PlxuICAgICAge1xuICAgICAgICBjb25zdCBmcm9tUGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZ2V0UGlsZUdhbWVPYmplY3RCeU5hbWUoZnJvbS5pZCk7XG4gICAgICAgIGNvbnN0IHRvUGlsZUdhbWVPYmplY3QgPSB0aGlzLl90YWJsZUdhbWVPYmplY3QuZ2V0UGlsZUdhbWVPYmplY3RCeU5hbWUodG8uaWQpO1xuICAgICAgICBjb25zdCBmcm9udENhcmRHYW1lT2JqZWN0cyA9IGZyb21QaWxlR2FtZU9iamVjdC5nZXRGcm9udEdhbWVPYmplY3RzKHtzaXplfSk7XG5cbiAgICAgICAgaGludFBpbGVHYW1lT2JqZWN0LnggPSBmcm9tUGlsZUdhbWVPYmplY3QueDtcbiAgICAgICAgaGludFBpbGVHYW1lT2JqZWN0LnkgPSBmcm9tUGlsZUdhbWVPYmplY3QueSArIGZyb250Q2FyZEdhbWVPYmplY3RzWzBdLnk7XG4gICAgICAgIGhpbnRQaWxlR2FtZU9iamVjdC5wbGFjZUNhcmRHYW1lT2JqZWN0cyh7Y2FyZEdhbWVPYmplY3RzOiBmcm9udENhcmRHYW1lT2JqZWN0cy5tYXAoKGMpID0+IHtcbiAgICAgICAgICBjb25zdCBjYXJkR2FtZU9iamVjdCA9IG5ldyBDYXJkR2FtZU9iamVjdCh7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMCxcbiAgICAgICAgICAgIHJhbms6IGMucmFuayxcbiAgICAgICAgICAgIHN1aXQ6IGMuc3VpdCxcbiAgICAgICAgICAgIGlzRmFjZVVwOiBjLmlzRmFjZVVwLFxuICAgICAgICAgICAgbmFtZTogJycsXG4gICAgICAgICAgICBzY2VuZTogdGhpc1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIHJldHVybiBjYXJkR2FtZU9iamVjdDtcbiAgICAgICAgfSl9KTtcblxuICAgICAgICBoaW50UGlsZUdhbWVPYmplY3QuYWRqdXN0Q2FyZEdhbWVPYmplY3RQb3NpdGlvbnMoKTtcbiAgICAgICAgaGludFBpbGVHYW1lT2JqZWN0LnNldEFscGhhKDAuOCk7XG4gICAgICAgIHRoaXMuX3RhYmxlR2FtZU9iamVjdC5icmluZ1RvVG9wKGhpbnRQaWxlR2FtZU9iamVjdCk7XG5cbiAgICAgICAgYXdhaXQgbmV3IFByb21pc2UocmVzb2x2ZSA9PiB7XG4gICAgICAgICAgY29uc3QgdHdlZW4gPSB0aGlzLnR3ZWVucy5hZGQoe1xuICAgICAgICAgICAgdGFyZ2V0czogaGludFBpbGVHYW1lT2JqZWN0LFxuICAgICAgICAgICAgcHJvcHM6IHtcbiAgICAgICAgICAgICAgeDogdG9QaWxlR2FtZU9iamVjdC54LFxuICAgICAgICAgICAgICB5OiB0b1BpbGVHYW1lT2JqZWN0LnkgKyB0b1BpbGVHYW1lT2JqZWN0LmdldE5ld0Zyb250Q2FyZEdhbWVPYmplY3RQb3NpdGlvbigpLnlcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBkdXJhdGlvbjogODAwLFxuICAgICAgICAgICAgY29tcGxldGVEZWxheTogNDAwLFxuICAgICAgICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xuICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICAgIGNsZWFySGludFBpbGVHYW1lT2JqZWN0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgICAgb25RdWV1ZUNhbmNlbCgoKSA9PiB7XG4gICAgICAgICAgICB0d2Vlbi5zdG9wKCk7XG4gICAgICAgICAgICBjbGVhckhpbnRQaWxlR2FtZU9iamVjdCgpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgfSk7XG4gICAgfVxuICB9XG5cbn1cbiIsInZhciBtYXAgPSB7XG5cdFwiLi9sb2dcIjogXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9sb2cuanNcIlxufTtcblxuXG5mdW5jdGlvbiB3ZWJwYWNrQ29udGV4dChyZXEpIHtcblx0dmFyIGlkID0gd2VicGFja0NvbnRleHRSZXNvbHZlKHJlcSk7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKGlkKTtcbn1cbmZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0UmVzb2x2ZShyZXEpIHtcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhtYXAsIHJlcSkpIHtcblx0XHR2YXIgZSA9IG5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIgKyByZXEgKyBcIidcIik7XG5cdFx0ZS5jb2RlID0gJ01PRFVMRV9OT1RfRk9VTkQnO1xuXHRcdHRocm93IGU7XG5cdH1cblx0cmV0dXJuIG1hcFtyZXFdO1xufVxud2VicGFja0NvbnRleHQua2V5cyA9IGZ1bmN0aW9uIHdlYnBhY2tDb250ZXh0S2V5cygpIHtcblx0cmV0dXJuIE9iamVjdC5rZXlzKG1hcCk7XG59O1xud2VicGFja0NvbnRleHQucmVzb2x2ZSA9IHdlYnBhY2tDb250ZXh0UmVzb2x2ZTtcbm1vZHVsZS5leHBvcnRzID0gd2VicGFja0NvbnRleHQ7XG53ZWJwYWNrQ29udGV4dC5pZCA9IFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3Qgc3luYyBeXFxcXC5cXFxcL2xvZyRcIjsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHRpZihfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdKSB7XG5cdFx0cmV0dXJuIF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0uZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0bG9hZGVkOiBmYWxzZSxcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG5cdG1vZHVsZS5sb2FkZWQgPSB0cnVlO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm5tZCA9IChtb2R1bGUpID0+IHtcblx0bW9kdWxlLnBhdGhzID0gW107XG5cdGlmICghbW9kdWxlLmNoaWxkcmVuKSBtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0cmV0dXJuIG1vZHVsZTtcbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBQcm9taXNlID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IHtcblx0XCJhcHBcIjogMFxufTtcblxudmFyIGRlZmVycmVkTW9kdWxlcyA9IFtcblx0W1wiLi9zcmMvaW5kZXgudHNcIixcInZlbmRvcnNcIl0sXG5cdFtcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2stZGV2LXNlcnZlci9jbGllbnQvaW5kZXguanM/aHR0cDovL2xvY2FsaG9zdDo4MDgwXCIsXCJ2ZW5kb3JzXCJdXG5dO1xuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxudmFyIGNoZWNrRGVmZXJyZWRNb2R1bGVzID0gKCkgPT4ge1xuXG59O1xuZnVuY3Rpb24gY2hlY2tEZWZlcnJlZE1vZHVsZXNJbXBsKCkge1xuXHR2YXIgcmVzdWx0O1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZGVmZXJyZWRNb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIGRlZmVycmVkTW9kdWxlID0gZGVmZXJyZWRNb2R1bGVzW2ldO1xuXHRcdHZhciBmdWxmaWxsZWQgPSB0cnVlO1xuXHRcdGZvcih2YXIgaiA9IDE7IGogPCBkZWZlcnJlZE1vZHVsZS5sZW5ndGg7IGorKykge1xuXHRcdFx0dmFyIGRlcElkID0gZGVmZXJyZWRNb2R1bGVbal07XG5cdFx0XHRpZihpbnN0YWxsZWRDaHVua3NbZGVwSWRdICE9PSAwKSBmdWxmaWxsZWQgPSBmYWxzZTtcblx0XHR9XG5cdFx0aWYoZnVsZmlsbGVkKSB7XG5cdFx0XHRkZWZlcnJlZE1vZHVsZXMuc3BsaWNlKGktLSwgMSk7XG5cdFx0XHRyZXN1bHQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IGRlZmVycmVkTW9kdWxlWzBdKTtcblx0XHR9XG5cdH1cblx0aWYoZGVmZXJyZWRNb2R1bGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblxuXHRcdH1cblx0fVxuXHRyZXR1cm4gcmVzdWx0O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy54ID0gKCkgPT4ge1xuXHQvLyByZXNldCBzdGFydHVwIGZ1bmN0aW9uIHNvIGl0IGNhbiBiZSBjYWxsZWQgYWdhaW4gd2hlbiBtb3JlIHN0YXJ0dXAgY29kZSBpcyBhZGRlZFxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cblx0fVxuXHRjaHVua0xvYWRpbmdHbG9iYWwgPSBjaHVua0xvYWRpbmdHbG9iYWwuc2xpY2UoKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGNodW5rTG9hZGluZ0dsb2JhbC5sZW5ndGg7IGkrKykgd2VicGFja0pzb25wQ2FsbGJhY2soY2h1bmtMb2FkaW5nR2xvYmFsW2ldKTtcblx0cmV0dXJuIChjaGVja0RlZmVycmVkTW9kdWxlcyA9IGNoZWNrRGVmZXJyZWRNb2R1bGVzSW1wbCkoKTtcbn07XG5cbi8vIGluc3RhbGwgYSBKU09OUCBjYWxsYmFjayBmb3IgY2h1bmsgbG9hZGluZ1xudmFyIHdlYnBhY2tKc29ucENhbGxiYWNrID0gKGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWUsIGV4ZWN1dGVNb2R1bGVzXSA9IGRhdGE7XG5cdC8vIGFkZCBcIm1vcmVNb2R1bGVzXCIgdG8gdGhlIG1vZHVsZXMgb2JqZWN0LFxuXHQvLyB0aGVuIGZsYWcgYWxsIFwiY2h1bmtJZHNcIiBhcyBsb2FkZWQgYW5kIGZpcmUgY2FsbGJhY2tcblx0dmFyIG1vZHVsZUlkLCBjaHVua0lkLCBpID0gMCwgcmVzb2x2ZXMgPSBbXTtcblx0Zm9yKDtpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcblx0XHRjaHVua0lkID0gY2h1bmtJZHNbaV07XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkgJiYgaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdKSB7XG5cdFx0XHRyZXNvbHZlcy5wdXNoKGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSk7XG5cdFx0fVxuXHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IDA7XG5cdH1cblx0Zm9yKG1vZHVsZUlkIGluIG1vcmVNb2R1bGVzKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0fVxuXHR9XG5cdGlmKHJ1bnRpbWUpIHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHR3aGlsZShyZXNvbHZlcy5sZW5ndGgpIHtcblx0XHRyZXNvbHZlcy5zaGlmdCgpKCk7XG5cdH1cblxuXHQvLyBhZGQgZW50cnkgbW9kdWxlcyBmcm9tIGxvYWRlZCBjaHVuayB0byBkZWZlcnJlZCBsaXN0XG5cdGlmKGV4ZWN1dGVNb2R1bGVzKSBkZWZlcnJlZE1vZHVsZXMucHVzaC5hcHBseShkZWZlcnJlZE1vZHVsZXMsIGV4ZWN1dGVNb2R1bGVzKTtcblxuXHQvLyBydW4gZGVmZXJyZWQgbW9kdWxlcyB3aGVuIGFsbCBjaHVua3MgcmVhZHlcblx0cmV0dXJuIGNoZWNrRGVmZXJyZWRNb2R1bGVzKCk7XG59XG5cbnZhciBjaHVua0xvYWRpbmdHbG9iYWwgPSBzZWxmW1wid2VicGFja0NodW5rc3BpZGVyX3NvbGl0YWlyZVwiXSA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtzcGlkZXJfc29saXRhaXJlXCJdIHx8IFtdO1xudmFyIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uID0gY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2guYmluZChjaHVua0xvYWRpbmdHbG9iYWwpO1xuY2h1bmtMb2FkaW5nR2xvYmFsLnB1c2ggPSB3ZWJwYWNrSnNvbnBDYWxsYmFjazsiLCIvLyBydW4gc3RhcnR1cFxucmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18ueCgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==