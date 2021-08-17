import Phaser from "phaser";
import {TableGameObject} from '../game-objects/table';
import {CardGameObject} from '../game-objects/card';
import {Button} from '../game-objects/button';
import {Card} from '../models/card';
import {Pile} from '../models/pile';
import {Table} from '../models/table';
import {createCards} from '../models/create-cards';
import {JobQueue} from '../job-queue';
import {gameModes} from '../models/game-modes';
import {ActionHistory} from '../models/action-history';

type Pointer = Phaser.Input.Pointer;
type Zone = Phaser.GameObjects.Zone;
type RandomDataGenerator = Phaser.Math.RandomDataGenerator;

export default class MainScene extends Phaser.Scene
{
  private __table:Table | undefined;
  private __tableGameObject:TableGameObject | undefined;
  private __cardAnimationQueue:JobQueue<void> | undefined;
  private __hintAnimationQueue:JobQueue<void> | undefined;
  private _RND: RandomDataGenerator = new Phaser.Math.RandomDataGenerator();
  private static readonly CARD_MOVE_DURATION = 80;
  private _cardMoveDuration = MainScene.CARD_MOVE_DURATION;
  private static readonly CARD_FLIP_DURATION = 80;
  private _cardFlipDuration = MainScene.CARD_FLIP_DURATION;

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
    const gameMode = gameModes[localStorage.getItem('game-mode') || ''];
    if (!gameMode)
    {
      this.redirectToBoot();
      return;
    }

    const seed = localStorage.getItem('seed');
    if (seed) {
      this._RND.state(seed);
    } else {
      localStorage.setItem('seed', this._RND.state());
    }

    this.__cardAnimationQueue = new JobQueue<void>();

    this.__hintAnimationQueue = new JobQueue<void>();

    this.__table = new Table({
      numberOfTableauPiles: gameMode.numberOfTableauPiles,
      numberOfDrawPiles: gameMode.numberOfDrawPiles,
      cards: this._RND.shuffle(createCards({
        numberOfSuitStacks: gameMode.numberOfSuitStacks,
        numberOfSuits: gameMode.numberOfSuits,
        mapping: ({rank, suit, isFaceUp}) => new Card({
          suit,
          rank,
          isFaceUp,
          id: this._RND.uuid()
        })
      })),
      actionHistory: ActionHistory.deserialize(localStorage.getItem('actions') || '') || undefined
    });

    this.__tableGameObject = new TableGameObject({
      scene: this,
      deckPileName: this._table.deckPile.id,
      drawPilesNames: this._table.drawPiles.map(p => p.id),
      tableauPilesNames: this._table.tableauPiles.map(p => p.id),
      discardPilesNames: this._table.discardPiles.map(p => p.id),
      dragPileName: "drag",
      hintPileName: "hint"
    });

    this.children.add(this._tableGameObject);

    const cardGameObjects = this._table.cards.map(card => {
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
      cardGameObject.on("pointerup", (pointer:Pointer) => this.onCardPointerUp.call(this, {cardGameObject, pointer}));
      cardGameObject.on("dragstart", (pointer:Pointer) => this.onCardDragStart.call(this, {cardGameObject, pointer}));
      cardGameObject.on("drag", (pointer:Pointer) => this.onCardDrag.call(this, {cardGameObject, pointer}));
      cardGameObject.on("drop", (pointer:Pointer, zone:Zone) => this.onCardDrop.call(this, {cardGameObject, pointer, zone}));
      cardGameObject.on("dragend", (pointer:Pointer) => this.onCardDragEnd.call(this, {cardGameObject, pointer}));
      return cardGameObject;
    });

    const syncTableAndTableGameObject = () => this._table.piles.forEach(pile => {
      const pileGameObject = this._tableGameObject.getPileGameObjectByName(pile.id);
      const _cardGameObjects = pile.cards.map(card => {
        const cardGameObject = cardGameObjects.find(c => c.name === card.id);
        if (!cardGameObject) throw new Error("The card doesn't exist.");
        cardGameObject.flipOver(card.isFaceUp);
        return cardGameObject;
      });
      pileGameObject.placeCardGameObjects({cardGameObjects: _cardGameObjects});
      pileGameObject.adjustCardGameObjectPositions();
    });

    if (seed && this._table.actionHistory.actions.length > 0) {
      try {
        this._table.setUpInitialCards();
      } catch (e) {
        this.redirectToBoot();
        return;
      }
      syncTableAndTableGameObject();
      this._table.onMoveCardsBetweenPiles(this.onMoveCardsBetweenPiles.bind(this));
      this._table.cards.forEach(card => {
        card.onFlipOver(this.onFlipOverCard.bind(this));
      });
    } else {
      syncTableAndTableGameObject();
      this._table.onMoveCardsBetweenPiles(this.onMoveCardsBetweenPiles.bind(this));
      this._table.cards.forEach(card => {
        card.onFlipOver(this.onFlipOverCard.bind(this));
      });
      this._table.setUpInitialCards();
    }

    this._table.actionHistory.on(() => {
      const serializedActions = ActionHistory.serialize(this._table.actionHistory);
      if (serializedActions) {
        localStorage.setItem('actions', serializedActions);
      }
    });

    const undoButton = new Button({
      scene: this,
      x: 77,
      y: 520,
      label: 'Undo'
    });
    undoButton.on('pointerup', () => this._table.undo());
    this.children.add(undoButton);
    const updateUnduButtonDisablity = () => {
      if (
        this._table.actionHistory.actions.length === 0
        || this._cardAnimationQueue.isProcessing
        || this._hintAnimationQueue.isProcessing
      ) {
        undoButton.disable();
      } else {
        undoButton.enable();
      }
    }
    this._cardAnimationQueue.onQueueStart(updateUnduButtonDisablity);
    this._cardAnimationQueue.onQueueEnd(updateUnduButtonDisablity);
    this._cardAnimationQueue.onQueueCancel(updateUnduButtonDisablity);
    this._hintAnimationQueue.onQueueStart(updateUnduButtonDisablity);
    this._hintAnimationQueue.onQueueEnd(updateUnduButtonDisablity);
    this._hintAnimationQueue.onQueueCancel(updateUnduButtonDisablity);
    updateUnduButtonDisablity();
    this._table.actionHistory.on(updateUnduButtonDisablity);

    // const uKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.U);
    // uKey.on('down', (_:KeyboardEvent) => {
    //   if (!undoButton.isDisabled) this._table.undo();
    // });

    const hintButton = new Button({
      scene: this,
      x: 206,
      y: 520,
      label: 'Hint'
    });
    hintButton.on('pointerup', () => this.showHints());
    this.children.add(hintButton);
    this._cardAnimationQueue.onQueueStart(() => hintButton.disable());
    this._cardAnimationQueue.onQueueEnd(() => hintButton.enable());
    this._cardAnimationQueue.onQueueCancel(() => hintButton.enable());
    this._hintAnimationQueue.onQueueStart(() => hintButton.disable());
    this._hintAnimationQueue.onQueueEnd(() => hintButton.enable());
    this._hintAnimationQueue.onQueueCancel(() => hintButton.enable());

    // const hKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.H);
    // hKey.on('down', (_:KeyboardEvent) => {
    //   if (!hintButton.isDisabled) this.showHints();
    // });

    this.input.on('pointerup', (_:Pointer, gameObjects: Phaser.GameObjects.GameObject[]) => {
      if(!gameObjects.includes(hintButton) && this._hintAnimationQueue.isProcessing)
      {
        this._hintAnimationQueue.cancel();
      }
    });


    // const actions = localStorage.getItem('actions');
    // if (seed && actions) {
    //   this._table.reproduce(JSON.parse(actions));
    // }

    // const dKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D);
    // dKey.on('up', (_:KeyboardEvent) => {
    //   this.clearGame();
    // });

    const menuButton = new Button({
      scene: this,
      x: 337,
      y: 520,
      label: 'Menu'
    });
    menuButton.on('pointerup', () => this.showMenu());
    this.children.add(menuButton);

    // const mKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
    // mKey.on('up', (_:KeyboardEvent) => {
    //   this.showMenu();
    // });
  }

  onCardPointerOver ({cardGameObject}:{cardGameObject:CardGameObject})
  {
    if (!this._cardAnimationQueue.isProcessing)
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
  }

  onCardPointerOut ({cardGameObject}:{cardGameObject:CardGameObject})
  {
    cardGameObject.removeHighlight();
  }

  onCardPointerUp ({cardGameObject}:{cardGameObject:CardGameObject})
  {
    const targetPileGameObject = this._tableGameObject.getPileGameObjectByCardGameObjectName(cardGameObject.name);
    if (this._table.frontDrawPile && !this._cardAnimationQueue.isProcessing)
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
            dragPileGameObject.adjustCardGameObjectPositionsWithAnimation(this._cardMoveDuration),
            dragPileGameObject.expandWithAnimation(this._cardMoveDuration)
          ])
        });
      }
    }
  }

  onCardDrag ({pointer, cardGameObject}:{pointer:Pointer, cardGameObject:CardGameObject})
  {
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
          toId: toPile.id,
          fromId: fromPile.id,
          size
        });
        dragPileGameObject.setActive(false);
      } else {
        this._cardAnimationQueue.add(async () => {
          await fromPileGameObject.adjustCardGameObjectPositionsWithAnimation(this._cardMoveDuration);
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
      this._tableGameObject.bringToTop(fromPileGameObject);
      this._cardAnimationQueue.add(async () => {
        await fromPileGameObject.adjustCardGameObjectPositionsWithAnimation(this._cardMoveDuration);
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
        toPileGameObject.adjustCardGameObjectPositionsWithAnimation(this._cardMoveDuration),
        fromPileGameObject.adjustCardGameObjectPositionsWithAnimation(this._cardMoveDuration)
      ]);
    });

    if (this._table.isClear) {
      this._cardAnimationQueue.add(async () => {
        await new Promise(resolve => setTimeout(resolve, 100));
        this.clearGame();
      });
    }
  }

  onFlipOverCard ({card}:{card:Card}) {
    const pileGameObject = this._tableGameObject.getPileGameObjectByCardGameObjectName(card.id);
    const cardGameObject = pileGameObject.cardGameObjects.find(c => c.name === card.id);
    if (cardGameObject) {
      this._cardAnimationQueue.add(() => cardGameObject.flipOverWithAnimation(card.isFaceUp, this._cardFlipDuration));
    };
  }

  showHints ()
  {
    const moves = this._table.getHints();
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

        await new Promise<void>(resolve => {
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

  clearGame ()
  {
    this.scene.pause();
    localStorage.removeItem('seed');
    localStorage.removeItem('actions');
    this.scene.launch('gameclear');
  }

  showMenu ()
  {
    this.scene.pause();
    this.scene.launch('menu');
  }

  redirectToBoot ()
  {
    localStorage.removeItem('game-mode');
    localStorage.removeItem('seed');
    localStorage.removeItem('actions');
    this.scene.start('boot');
  }
}
