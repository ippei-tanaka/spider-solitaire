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
import {PromiseQueue} from '../promise-queue';
// import {debounce} from 'underscore';

export default class MainScene extends Phaser.Scene
{
  private __table:Table | undefined;
  private __tableGameObject:TableGameObject | undefined;
  private _cardAnimationBetweenPilesQueue:PromiseQueue<void> = new PromiseQueue<void>();
  private _dragPileAnimationQueue:PromiseQueue<void> = new PromiseQueue<void>();

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
      numberOfTableauPiles: 6,
      numberOfDrawPiles: 3,
      cards: createCards({
        numberOfDecksUsed: 2,
        numberOfSuits: 1
      })
    });

    this.__tableGameObject = new TableGameObject({
      scene: this,
      deckPileId: this._table.deckPile.id,
      drawPilesIds: this._table.drawPiles.map(p => p.id),
      tableauPilesIds: this._table.tableauPiles.map(p => p.id),
      discardPilesIds: this._table.discardPiles.map(p => p.id),
      dragPileId: "drag-pile",
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
    undoButton.on('pointerdown', () => {
      this._table.undo();
    });
    this.children.add(undoButton);
    this._cardAnimationBetweenPilesQueue.onStart(() => {
      undoButton.setActive(false);
      undoButton.setAlpha(0.5);
    });
    this._cardAnimationBetweenPilesQueue.onComplete(() => {
      undoButton.setActive(true);
      undoButton.setAlpha(1);
    });

    const hintButton = new Button({
      scene: this,
      x: 250,
      y: 600,
      label: 'HINT'
    });
    hintButton.on('pointerdown', () => {
      console.log(this._table.getPossibleMovesBetweenTableauPiles());
    });
    this.children.add(hintButton);
    this._cardAnimationBetweenPilesQueue.onStart(() => {
      hintButton.setActive(false);
      hintButton.setAlpha(0.5);
    });
    this._cardAnimationBetweenPilesQueue.onComplete(() => {
      hintButton.setActive(true);
      hintButton.setAlpha(1);
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



    // this.input.addListener('pointerout', () => {
    //   console.log(66666);
    // })
  }

  onCardPointerOver ({cardGameObject, pointer}:{cardGameObject:CardGameObject, pointer:Phaser.Input.Pointer})
  {
    if (!this._cardAnimationBetweenPilesQueue.isProcessing) {
      this.addHighlightToCardGameObject({cardGameObject});
    } else {
      this._cardAnimationBetweenPilesQueue.add(async () => {
        if(this.input.hitTestPointer(pointer)[0] === cardGameObject) {
          this.addHighlightToCardGameObject({cardGameObject});
        }
      });
    }
  }

  addHighlightToCardGameObject ({cardGameObject}:{cardGameObject:CardGameObject})
  {
    const targetPile = this._table.getPileBy(pile => pile.cards.find(card => card.id === cardGameObject.name));

    if (cardGameObject.isFaceUp
      && this._table.tableauPiles.includes(targetPile))
    {
      const fromPileGameObject = this._tableGameObject.getPileGameObjectBy(p => p.name === targetPile.id);
      const size = fromPileGameObject.cardGameObjects.length - fromPileGameObject.cardGameObjects.indexOf(cardGameObject);

      if (Pile.checkIfCardsAreDescending({cards: targetPile.cards.slice(-size), faceUp: true, inSuit: true}))
      {
        cardGameObject.addHighlight();
      }
    }
    else if (this._table.frontDrawPile === targetPile)
    {
      cardGameObject.addHighlight();
    }
  }

  onCardPointerOut ({cardGameObject}:{cardGameObject:CardGameObject})
  {
    cardGameObject.removeHighlight();
  }

  onCardPointerDown ({cardGameObject}:{cardGameObject:CardGameObject})
  {
    if (!cardGameObject.isHighLighted) return;

    const targetPile = this._table.getPileBy(pile => pile.cards.find(card => card.id === cardGameObject.name));

    if (this._table.frontDrawPile === targetPile)
    {
      this._table.dealCardsFromDrawPile();
    }
  }

  onCardDragStart ({cardGameObject}:{cardGameObject:CardGameObject})
  {
    if (!cardGameObject.isHighLighted) return;

    const targetPile = this._table.getPileBy(pile => pile.cards.find(card => card.id === cardGameObject.name));
    const dragPileGameObject = this._tableGameObject.dragPileGameObject;

    if (cardGameObject.isFaceUp
      && this._table.tableauPiles.includes(targetPile)
      && !dragPileGameObject.active)
    {
      const fromPileGameObject = this._tableGameObject.getPileGameObjectBy(p => p.name === targetPile.id);
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
        this._dragPileAnimationQueue.add(async () => {
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

    const targetPileGameObject = this._tableGameObject.getPileGameObjectBy(pile => pile.cardGameObjects.find(card => card === cardGameObject));

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
    const targetPileGameObject = this._tableGameObject.getPileGameObjectBy(pile => pile.cardGameObjects.find(card => card === cardGameObject));
    const dragPileGameObject = this._tableGameObject.dragPileGameObject;
    if (targetPileGameObject === dragPileGameObject && dragPileGameObject.active)
    {
      const fromPile = this._table.getPileBy(pile => pile.cards.find(card => card.id === cardGameObject.name));
      const fromPileGameObject = this._tableGameObject.getPileGameObjectBy(p => p.name === fromPile.id);
      const toPileGameObject = this._tableGameObject.getPileGameObjectBy(p => p.zone === zone);
      const toPile = this._table.getPileBy(pile => toPileGameObject.name === pile.id);
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
        this._cardAnimationBetweenPilesQueue.add(async () => {
          await fromPileGameObject.adjustCardGameObjectPositionsWithAnimation();
          dragPileGameObject.setActive(false);
        });
      }
    }
  }

  onCardDragEnd ({cardGameObject, pointer}:{cardGameObject:CardGameObject, pointer:Phaser.Input.Pointer})
  {
    const targetPileGameObject = this._tableGameObject.getPileGameObjectBy(p => {
      return p.cardGameObjects.find(c => c === cardGameObject);
    });
    const dragPileGameObject = this._tableGameObject.dragPileGameObject;
    if (targetPileGameObject === dragPileGameObject && dragPileGameObject.active)
    {
      const size = dragPileGameObject.cardGameObjects.length;
      const fromPile = this._table.getPileBy(pile => pile.cards.find(card => card.id === cardGameObject.name));
      const fromPileGameObject = this._tableGameObject.getPileGameObjectBy(p => p.name === fromPile.id);
      const cardGameObjects = dragPileGameObject.drawFrontCardGameObjects({size});
      fromPileGameObject.placeCardGameObjects({cardGameObjects});
      this._cardAnimationBetweenPilesQueue.add(async () => {
        await fromPileGameObject.adjustCardGameObjectPositionsWithAnimation();
        dragPileGameObject.setActive(false);
      });
    }
  }

  onMoveCardsBetweenPiles ({from, to, size}:{from:Pile, to:Pile, size:number}) {
    const fromPileGameObject = this._tableGameObject.getPileGameObjectBy(p => p.name === from.id);
    const toPileGameObject = this._tableGameObject.getPileGameObjectBy(p => p.name === to.id);

    this._cardAnimationBetweenPilesQueue.add(async () => {
      const cardGameObjects = fromPileGameObject.drawFrontCardGameObjects({size});
      toPileGameObject.placeCardGameObjects({cardGameObjects});
      this._tableGameObject.bringToTop(toPileGameObject);
      await Promise.all([
        toPileGameObject.adjustCardGameObjectPositionsWithAnimation(),
        fromPileGameObject.adjustCardGameObjectPositionsWithAnimation()
      ]);
    });

    if (this._table.isClear) {
      this._cardAnimationBetweenPilesQueue.add(async () => {
        alert("You beat the game!!!");
      });
    }
  }

  onFlipOverCard ({card}:{card:Card}) {
    const cardGarmObject = this._tableGameObject.cardGameObjects.find(cardCarmeObject => cardCarmeObject.name === card.id);
    if (cardGarmObject) {
      this._cardAnimationBetweenPilesQueue.add(() => cardGarmObject.flipOver(card.isFaceUp));
    };
  }

}
