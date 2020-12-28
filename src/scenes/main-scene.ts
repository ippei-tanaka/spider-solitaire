import Phaser from "phaser";
import {TableGameObject} from '../game-objects/table';
// import {PileGameObjectWithEvent as PileGameObject} from '../game-objects-with-events/pile';
import {CardGameObject} from '../game-objects/card';
// import {emitter as gameObjectEventEmitter} from '../game-objects-with-events/emitter';
import {Button} from '../game-objects/button';
import {Card} from '../models/card';
import {Pile} from '../models/pile';
// import {CardWithEvent} from '../models-with-events/card';
// import {PileWithEvent} from '../models-with-events/pile';
import {TableWithEvent as Table} from '../models-with-events/table';
// import {Table} from '../models/table';
import {createCardsWithEvents as createCards} from '../models-with-events/create-cards';
import {randomizeArray} from '../models/create-cards';
// import {emitter as modelEventEmitter} from '../models-with-events/emitter';
import {JobQueue} from '../job-queue';
// import {debounce} from 'underscore';

type Pointer = Phaser.Input.Pointer;
type Zone = Phaser.GameObjects.Zone;

export default class MainScene extends Phaser.Scene
{
  private __table:Table | undefined;
  private __tableGameObject:TableGameObject | undefined;
  private __cardAnimationQueue:JobQueue<void> | undefined;
  private __hintAnimationQueue:JobQueue<void> | undefined;

  constructor () {
    super('main');
  }

  private get _table () {
    if (!this.__table) throw new Error('Table is not ready.');
    return this.__table;
  }

  private get _tableGameObject () {
    if (!this.__tableGameObject) throw new Error('Table Game Object is not ready.');
    return this.__tableGameObject;
  }

  private get _cardAnimationQueue () {
    if (!this.__cardAnimationQueue) throw new Error('cardAnimationQueue is not ready.');
    return this.__cardAnimationQueue;
  }

  private get _hintAnimationQueue () {
    if (!this.__hintAnimationQueue) throw new Error('hintAnimationQueue is not ready.');
    return this.__hintAnimationQueue;
  }

  create ()
  {
    // console.log(this.sys.game.canvas.width);

    this.__table = new Table({
      numberOfTableauPiles: 4,
      numberOfDrawPiles: 1,
      cards: createCards({
        numberOfDecksUsed: 1,
        numberOfSuits: 1
      }).map(card => {
        card.onFlipOver(this.onFlipOverCard.bind(this))
        return card;
      })
    });

    this.__tableGameObject = new TableGameObject({
      scene: this,
      deckPileId: this._table.deckPile.id,
      drawPilesIds: this._table.drawPiles.map(p => p.id),
      tableauPilesIds: this._table.tableauPiles.map(p => p.id),
      discardPilesIds: this._table.discardPiles.map(p => p.id),
      dragPileId: "drag-pile",
      hintPileId: "hint-pile",
      cardGameObjects: this._table.cards.map(card => {
        const cardGameObject = new CardGameObject({
          scene: this,
          x: 0,
          y: 0,
          suit: card.suit,
          rank: card.rank,
          name: card.id
        });
        cardGameObject.on("pointerover", (pointer:Pointer) => this.onCardPointerOver.call(this, {cardGameObject, pointer}));
        cardGameObject.on("pointerout", (pointer:Pointer) => this.onCardPointerOut.call(this, {cardGameObject, pointer}));
        cardGameObject.on("pointerdown", (pointer:Pointer) => this.onCardPointerDown.call(this, {cardGameObject, pointer}));
        cardGameObject.on("dragstart", (pointer:Pointer) => this.onCardDragStart.call(this, {cardGameObject, pointer}));
        cardGameObject.on("drag", (pointer:Pointer) => this.onCardDrag.call(this, {cardGameObject, pointer}));
        cardGameObject.on("drop", (pointer:Pointer, zone:Zone) => this.onCardDrop.call(this, {cardGameObject, pointer, zone}));
        cardGameObject.on("dragend", (pointer:Pointer) => this.onCardDragEnd.call(this, {cardGameObject, pointer}));
        return cardGameObject;
      })
    });

    this.children.add(this._tableGameObject);

    this.__cardAnimationQueue = new JobQueue<void>();
    this.__hintAnimationQueue = new JobQueue<void>();

    const undoButton = new Button({
      scene: this,
      x: 100,
      y: 600,
      label: 'UNDO'
    });
    undoButton.on('pointerdown', () => this._table.undo());
    this.children.add(undoButton);
    this._cardAnimationQueue.onQueueStart(() => undoButton.disable());
    this._cardAnimationQueue.onQueueEnd(() => undoButton.enable());
    this._cardAnimationQueue.onQueueCancel(() => undoButton.enable());
    this._hintAnimationQueue.onQueueStart(() => undoButton.disable());
    this._hintAnimationQueue.onQueueEnd(() => undoButton.enable());
    this._hintAnimationQueue.onQueueCancel(() => undoButton.enable());

    const uKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.U);
    uKey.on('down', (event:KeyboardEvent) => {
      if (!undoButton.isDisabled) this._table.undo();
    });

    const hintButton = new Button({
      scene: this,
      x: 250,
      y: 600,
      label: 'HINT'
    });
    hintButton.on('pointerdown', () => this.showHints());
    this.children.add(hintButton);
    this._cardAnimationQueue.onQueueStart(() => hintButton.disable());
    this._cardAnimationQueue.onQueueEnd(() => hintButton.enable());
    this._cardAnimationQueue.onQueueCancel(() => hintButton.enable());
    this._hintAnimationQueue.onQueueStart(() => hintButton.disable());
    this._hintAnimationQueue.onQueueEnd(() => hintButton.enable());
    this._hintAnimationQueue.onQueueCancel(() => hintButton.enable());

    const hKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
    hKey.on('down', (event:KeyboardEvent) => {
      if (!hintButton.isDisabled) this.showHints();
    });

    this.input.on('pointerdown', (pointer:Pointer, gameObjects: Phaser.GameObjects.GameObject[]) => {
      if(!gameObjects.includes(hintButton) && this._hintAnimationQueue.isProcessing)
      {
        this._hintAnimationQueue.cancel();
      }
    });

    this._table.onMoveCardsBetweenPiles(this.onMoveCardsBetweenPiles.bind(this));
    this._table.startGame();

    const dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    dKey.on('down', (event:KeyboardEvent) => {
      this.scene.start('gameover');
    });
  }

  onCardPointerOver ({cardGameObject, pointer}:{cardGameObject:CardGameObject, pointer:Pointer})
  {
    if (!this._cardAnimationQueue.isProcessing) {
      this.addHighlightToCardGameObject({cardGameObject});
    } else {
      this._cardAnimationQueue.add(async () => {
        if(this.input.hitTestPointer(pointer)[0] === cardGameObject) {
          this.addHighlightToCardGameObject({cardGameObject});
        }
      });
    }
  }

  addHighlightToCardGameObject ({cardGameObject}:{cardGameObject:CardGameObject})
  {
    const targetPileGameObject = this._tableGameObject.getPileGameObjectByCardGameObjectName(cardGameObject.name);

    if (cardGameObject.isFaceUp
      && this._tableGameObject.tableauPileGameObjects.includes(targetPileGameObject))
    {
      const targetPile = this._table.getPileByCardId(cardGameObject.name);
      const fromPileGameObject = this._tableGameObject.getPileGameObjectByName(targetPile.id);
      const size = fromPileGameObject.cardGameObjects.length - fromPileGameObject.cardGameObjects.indexOf(cardGameObject);
      if (Pile.checkIfCardsAreDescending({cards: targetPile.cards.slice(-size), faceUp: true, inSuit: true}))
      {
        cardGameObject.addHighlight();
      }
    }
    else if (this._table.frontDrawPile)
    {
      const frontDrawPileGameObject = this._tableGameObject.getPileGameObjectByName(this._table.frontDrawPile.id);
      if (targetPileGameObject === frontDrawPileGameObject)
      {
        cardGameObject.addHighlight();
      }
    }
  }

  onCardPointerOut ({cardGameObject}:{cardGameObject:CardGameObject})
  {
    cardGameObject.removeHighlight();
  }

  onCardPointerDown ({cardGameObject}:{cardGameObject:CardGameObject})
  {
    if (!cardGameObject.isHighLighted) return;
    const targetPileGameObject = this._tableGameObject.getPileGameObjectByCardGameObjectName(cardGameObject.name);
    if (this._table.frontDrawPile)
    {
      const frontDrawPileGameObject = this._tableGameObject.getPileGameObjectByName(this._table.frontDrawPile.id);
      if (frontDrawPileGameObject === targetPileGameObject)
      {
        this._table.dealCardsFromDrawPile();
      }
    }
  }

  onCardDragStart ({cardGameObject}:{cardGameObject:CardGameObject})
  {
    if (!cardGameObject.isHighLighted) return;

    const targetPileGameObject = this._tableGameObject.getPileGameObjectByCardGameObjectName(cardGameObject.name);
    const dragPileGameObject = this._tableGameObject.dragPileGameObject;

    if (cardGameObject.isFaceUp
      && this._tableGameObject.tableauPileGameObjects.includes(targetPileGameObject)
      && !dragPileGameObject.active)
    {
      const targetPile = this._table.getPileByCardId(cardGameObject.name);
      const fromPileGameObject = this._tableGameObject.getPileGameObjectByName(targetPile.id);
      const size = fromPileGameObject.cardGameObjects.length - fromPileGameObject.cardGameObjects.indexOf(cardGameObject);

      if (Pile.checkIfCardsAreDescending({cards: targetPile.cards.slice(-size), faceUp: true, inSuit: true}))
      {
        const dragPileGameObject = this._tableGameObject.dragPileGameObject;
        const y = cardGameObject.y;
        dragPileGameObject.setActive(true);
        this._tableGameObject.bringToTop(dragPileGameObject);
        dragPileGameObject.x = fromPileGameObject.x;
        dragPileGameObject.y = fromPileGameObject.y + y;
        dragPileGameObject.placeCardGameObjects({cardGameObjects: fromPileGameObject.drawFrontCardGameObjects({size})});
        this._cardAnimationQueue.add(async () => {
          await Promise.all([
            dragPileGameObject.adjustCardGameObjectPositionsWithAnimation(),
            dragPileGameObject.expandWithAnimation()
          ])
        });
      }
    }
  }

  onCardDrag ({pointer, cardGameObject}:{pointer:Pointer, cardGameObject:CardGameObject})
  {
    if (!cardGameObject.isHighLighted) return;

    const targetPileGameObject = this._tableGameObject.getPileGameObjectByCardGameObjectName(cardGameObject.name);

    const dragPileGameObject = this._tableGameObject.dragPileGameObject;
    if (targetPileGameObject === dragPileGameObject && dragPileGameObject.active)
    {
      const deltaX = pointer.x - pointer.prevPosition.x;
      const deltaY = pointer.y - pointer.prevPosition.y;
      dragPileGameObject.x += deltaX;
      dragPileGameObject.y += deltaY;
    }
  }

  onCardDrop ({zone, cardGameObject}:{zone:Zone, cardGameObject:CardGameObject})
  {
    const targetPileGameObject = this._tableGameObject.getPileGameObjectByCardGameObjectName(cardGameObject.name);
    const dragPileGameObject = this._tableGameObject.dragPileGameObject;
    if (targetPileGameObject === dragPileGameObject && dragPileGameObject.active)
    {
      const fromPile = this._table.getPileByCardId(cardGameObject.name);
      const fromPileGameObject = this._tableGameObject.getPileGameObjectByName(fromPile.id);
      const toPileGameObject = this._tableGameObject.getPileGameObjectBy(p => p.zone === zone);
      const toPile = this._table.getPileById(toPileGameObject.name);
      const size = dragPileGameObject.cardGameObjects.length;
      const cardGameObjects = dragPileGameObject.drawFrontCardGameObjects({size});
      fromPileGameObject.placeCardGameObjects({cardGameObjects});

      const _cards = cardGameObjects.map(cObj => {
        const card = this._table.cards.find(c => cObj.name === c.id);
        if (!card) throw new Error("Couldn't find corresponding cards.");
        return card;
      });

      if (!toPile.frontCard
        || Pile.checkIfCardsAreDescending({cards: [toPile.frontCard, ..._cards], faceUp: true}))
      {
        this._table.moveCardBetweenTableauPiles({
          to: toPile,
          from: fromPile,
          size
        });
        dragPileGameObject.setActive(false);
      } else {
        this._cardAnimationQueue.add(async () => {
          await fromPileGameObject.adjustCardGameObjectPositionsWithAnimation();
          dragPileGameObject.setActive(false);
        });
      }
    }
  }

  onCardDragEnd ({cardGameObject}:{cardGameObject:CardGameObject})
  {
    const targetPileGameObject = this._tableGameObject.getPileGameObjectByCardGameObjectName(cardGameObject.name);
    const dragPileGameObject = this._tableGameObject.dragPileGameObject;
    if (targetPileGameObject === dragPileGameObject && dragPileGameObject.active)
    {
      const size = dragPileGameObject.cardGameObjects.length;
      const fromPile = this._table.getPileByCardId(cardGameObject.name);
      const fromPileGameObject = this._tableGameObject.getPileGameObjectByName(fromPile.id);
      const cardGameObjects = dragPileGameObject.drawFrontCardGameObjects({size});
      fromPileGameObject.placeCardGameObjects({cardGameObjects});
      this._cardAnimationQueue.add(async () => {
        await fromPileGameObject.adjustCardGameObjectPositionsWithAnimation();
        dragPileGameObject.setActive(false);
      });
    }
  }

  onMoveCardsBetweenPiles ({from, to, size}:{from:Pile, to:Pile, size:number}) {
    const fromPileGameObject = this._tableGameObject.getPileGameObjectByName(from.id);
    const toPileGameObject = this._tableGameObject.getPileGameObjectByName(to.id);

    this._cardAnimationQueue.add(async () => {
      const cardGameObjects = fromPileGameObject.drawFrontCardGameObjects({size});
      toPileGameObject.placeCardGameObjects({cardGameObjects});
      this._tableGameObject.bringToTop(toPileGameObject);
      await Promise.all([
        toPileGameObject.adjustCardGameObjectPositionsWithAnimation(),
        fromPileGameObject.adjustCardGameObjectPositionsWithAnimation()
      ]);
    });

    if (this._table.isClear) {
      this._cardAnimationQueue.add(async () => {
        await new Promise(resolve => setTimeout(resolve, 1000));
        this.scene.start('gameover');
      });
    }
  }

  onFlipOverCard ({card}:{card:Card}) {
    const cardGarmObject = this._tableGameObject.cardGameObjects.find(c => c.name === card.id);
    if (cardGarmObject) {
      this._cardAnimationQueue.add(() => cardGarmObject.flipOver(card.isFaceUp));
    };
  }

  showHints ()
  {
    const moves = this._table.getPossibleMovesBetweenTableauPiles();
    const hintPileGameObject = this._tableGameObject.hintPileGameObject;
    const clearHintPileGameObject = () => {
      const cardGameObjects = hintPileGameObject
        .drawFrontCardGameObjects({size: hintPileGameObject.cardGameObjects.length});
      cardGameObjects.forEach(c => c.destroy());
    };

    for (let {from, to, size} of moves)
    {
      this._hintAnimationQueue.add(async (onQueueCancel) =>
      {
        const fromPileGameObject = this._tableGameObject.getPileGameObjectByName(from.id);
        const toPileGameObject = this._tableGameObject.getPileGameObjectByName(to.id);
        const frontCardGameObjects = fromPileGameObject.getFrontGameObjects({size});

        hintPileGameObject.x = fromPileGameObject.x;
        hintPileGameObject.y = fromPileGameObject.y + frontCardGameObjects[0].y;
        hintPileGameObject.placeCardGameObjects({cardGameObjects: frontCardGameObjects.map((c) => {
          const cardGameObject = new CardGameObject({
            x: 0,
            y: 0,
            rank: c.rank,
            suit: c.suit,
            isFaceUp: c.isFaceUp,
            name: '',
            scene: this
          });
          return cardGameObject;
        })});

        hintPileGameObject.adjustCardGameObjectPositions();
        hintPileGameObject.setAlpha(0.8);
        this._tableGameObject.bringToTop(hintPileGameObject);

        await new Promise(resolve => {
          const tween = this.tweens.add({
            targets: hintPileGameObject,
            props: {
              x: toPileGameObject.x,
              y: toPileGameObject.y + toPileGameObject.getNewFrontCardGameObjectPosition().y
            },
            duration: 800,
            completeDelay: 400,
            onComplete: () => {
              resolve();
              clearHintPileGameObject();
            }
          });
          onQueueCancel(() => {
            tween.stop();
            clearHintPileGameObject();
          });
        });

      });
    }
  }

}
