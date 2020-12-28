import Phaser from "phaser";
import {TableGameObjectWithEvent as TableGameObject} from '../game-objects-with-events/table';
// import {PileGameObjectWithEvent as PileGameObject} from '../game-objects-with-events/pile';
import {CardGameObjectWithEvent as CardGameObject} from '../game-objects-with-events/card';
import {emitter as gameObjectEventEmitter} from '../game-objects-with-events/emitter';
import {Button} from '../game-objects/button';
import {CardWithEvent as Card} from '../models-with-events/card';
import {PileWithEvent as Pile} from '../models-with-events/pile';
import {TableWithEvent as Table} from '../models-with-events/table';
import {createCardsWithEvents as createCards} from '../models-with-events/create-cards';
import {randomizeArray} from '../models/create-cards';
import {emitter as modelEventEmitter} from '../models-with-events/emitter';
import {JobQueue} from '../job-queue';
// import {debounce} from 'underscore';

export default class MainScene extends Phaser.Scene
{
  private __table:Table | undefined;
  private __tableGameObject:TableGameObject | undefined;
  private _cardAnimationQueue:JobQueue<void> = new JobQueue<void>();
  private _hintAnimationQueue:JobQueue<void> = new JobQueue<void>();
  // private _dragPileAnimationQueue:PromiseQueue<void> = new PromiseQueue<void>();

  constructor () {
    super('main');
  }

  private get _table () {
    if (!this.__table) {
      throw new Error('Table is not ready.');
    }
    return this.__table;
  }

  private get _tableGameObject () {
    if (!this.__tableGameObject) {
      throw new Error('Table Game Object is not ready.');
    }
    return this.__tableGameObject;
  }

  async create ()
  {
    this.__table = new Table({
      numberOfTableauPiles: 10,
      numberOfDrawPiles: 5,
      cards: createCards({
        numberOfDecksUsed: 4,
        numberOfSuits: 2
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
      cardGameObjects: this._table.cards.map(card => new CardGameObject({
        scene: this,
        x: 0,
        y: 0,
        suit: card.suit,
        rank: card.rank,
        name: card.id
      }))
    });

    this.children.add(this._tableGameObject);

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

    this.input.on('pointerdown', (pointer:Phaser.Input.Pointer, gameObjects: Phaser.GameObjects.GameObject[]) => {
      if(!gameObjects.includes(hintButton) && this._hintAnimationQueue.isProcessing)
      {
        this._hintAnimationQueue.cancel();
      }
    });

    gameObjectEventEmitter.on("CARD_POINTEROVER", this.onCardPointerOver.bind(this));
    gameObjectEventEmitter.on("CARD_POINTEROUT", this.onCardPointerOut.bind(this));
    gameObjectEventEmitter.on("CARD_POINTERDOWN", this.onCardPointerDown.bind(this));
    gameObjectEventEmitter.on("CARD_DRAGSTART", this.onCardDragStart.bind(this));
    gameObjectEventEmitter.on("CARD_DRAG", this.onCardDrag.bind(this));
    gameObjectEventEmitter.on("CARD_DROP", this.onCardDrop.bind(this));
    gameObjectEventEmitter.on("CARD_DRAGEND", this.onCardDragEnd.bind(this));
    modelEventEmitter.on("MOVE_CARDS_BETWEEN_PILES", this.onMoveCardsBetweenPiles.bind(this));
    modelEventEmitter.on("FLIP_OVER_CARD", this.onFlipOverCard.bind(this));

    this._table.startGame();
  }

  onCardPointerOver ({cardGameObject, pointer}:{cardGameObject:CardGameObject, pointer:Phaser.Input.Pointer})
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

  onCardDrag ({pointer, cardGameObject}:{pointer:Phaser.Input.Pointer, cardGameObject:CardGameObject})
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

  onCardDrop ({zone, cardGameObject}:{zone:Phaser.GameObjects.Zone, cardGameObject:CardGameObject})
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
        alert("You beat the game!!!");
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
