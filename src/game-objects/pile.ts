import Phaser from "phaser";
import {CardGameObject} from "./card";
import {getWorldPosition} from './transform';

export type PileGameObjectArgs = {
  scene:Phaser.Scene,
  x:number,
  y:number,
  name:string,
  isSpread?:boolean,
  isDropTarget?:boolean,
  showDropZone?:boolean
  // isInteractive?:boolean
}

interface CardGameObjectAdjustedPosition {
  x: number,
  y: number,
  cardGameObject: CardGameObject
}

export class PileGameObject extends Phaser.GameObjects.Container
{
  private _isSpread:boolean = false;
  private _cardGameObjects:CardGameObject[] = [];
  private _zone:Phaser.GameObjects.Zone | undefined;
  private _zoneRect:Phaser.GameObjects.Rectangle | undefined;
  // private _isInteractive:boolean = false;
  private readonly _faceDownCardGap:number = 15;
  private readonly _faceUpCardGap:number = 26;
  private readonly _maxHeightOfGaps:number = 380 - CardGameObject.HEIGHT;

  constructor ({
    scene,
    x,
    y,
    name,
    isSpread,
    isDropTarget,
    showDropZone
    // isInteractive
  }:PileGameObjectArgs)
  {
    super(scene, x, y);
    this.name = name;

    if (isSpread) {
      this._isSpread = true;
    }

    if (isDropTarget) {
      this._zone = this.renderZone();
    }

    if (showDropZone)
    {
      this._zoneRect = this.renderZoneRect();
    }

    if (isDropTarget || showDropZone)
    {
      this.resizeZone();
    }

    // if (isInteractive)
    // {
    //   this.setSize(CardGameObject.WIDTH, CardGameObject.HEIGHT);
    //   this.setInteractive();
    //   this._isInteractive = true;
    // }
  }

  private renderZone ()
  {
    const zone = new Phaser.GameObjects.Zone(this.scene, 0, 0, 1, 1);
    this.add(zone);
    return zone;
  }

  private renderZoneRect ()
  {
    const rect = new Phaser.GameObjects.Rectangle(this.scene, 0, 0, 1, 1, 0xffffff, 0.5);
    this.add(rect);
    return rect;
  }

  private resizeZone ()
  {
    const width = CardGameObject.WIDTH;
    const frontCardGameObject = this._cardGameObjects[this._cardGameObjects.length - 1];
    const height = CardGameObject.HEIGHT + (frontCardGameObject ? frontCardGameObject.y : 0);
    const x = 0;
    const y = (height / 2) - (CardGameObject.HEIGHT / 2);

    if (this._zone)
    {
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
  }

  get zone ()
  {
    return this._zone;
  }

  getNewFrontCardGameObjectPosition ()
  {
    const positions = this._getAdjustedCardGameObjectPositions();
    const frontCard = positions[positions.length - 1];
    return frontCard ? {
      x: 0,
      y: frontCard.y + this._faceUpCardGap
    } : {
      x: 0,
      y: 0
    }
  }

  private _getAdjustedCardGameObjectPositions ()
  {

    if (!this._isSpread || this._cardGameObjects.length <= 1)
    {
      return this._cardGameObjects.map((cardGameObject, i) => ({
        x: 0,
        y: 0,
        depth: i,
        cardGameObject
      }));
    }

    const numberOfGaps = this._cardGameObjects.length - 1;
    const numberOfFaceUpCardGaps = this._cardGameObjects.slice(0, -1).reduce((pre, cur) => pre + (cur.isFaceUp ? 1 : 0), 0);
    const numberOfFaceDownCardGaps = numberOfGaps - numberOfFaceUpCardGaps;
    const heihgtOfGaps = numberOfFaceUpCardGaps * this._faceUpCardGap + numberOfFaceDownCardGaps * this._faceDownCardGap;

    let gapOfFaceUpCard = this._faceUpCardGap;
    let gapOfFaceDownCard = this._faceDownCardGap;

    if (heihgtOfGaps > this._maxHeightOfGaps) {
      gapOfFaceUpCard = this._maxHeightOfGaps / (numberOfFaceUpCardGaps + numberOfFaceDownCardGaps * this._faceDownCardGap / this._faceUpCardGap);
      gapOfFaceDownCard = this._maxHeightOfGaps / (numberOfFaceDownCardGaps + numberOfFaceUpCardGaps * this._faceUpCardGap / this._faceDownCardGap);
    }

    let offset = 0;
    let positions:CardGameObjectAdjustedPosition[] = [];
    for (let i = 0; i < this._cardGameObjects.length; i++)
    {
      const cardGameObject = this._cardGameObjects[i];
      positions = [...positions, {
        x: 0,
        y: offset,
        cardGameObject
      }];
      offset = offset + (cardGameObject.isFaceUp ? gapOfFaceUpCard : gapOfFaceDownCard);
    }

    return positions;
  }

  async adjustCardGameObjectPositionsWithAnimation ()
  {
    const positions = this._getAdjustedCardGameObjectPositions();
    await Promise.all(positions
      .filter(position => (position.x !== position.cardGameObject.x || position.y !== position.cardGameObject.y))
      .map(position => new Promise(res => {
        this.scene.tweens.add({
          targets: position.cardGameObject,
          props: {
            x: position.x,
            y: position.y
          },
          duration: 45,
          onComplete: () => res()
        });
    })))
    .then(() => this.resizeZone())
  }

  adjustCardGameObjectPositions ()
  {
    const positions = this._getAdjustedCardGameObjectPositions();
    for (let position of positions)
    {
      position.cardGameObject.x = position.x;
      position.cardGameObject.y = position.y;
    }
    this.resizeZone();
  }

  async expandWithAnimation ()
  {
    await new Promise(resolve => {
      this.scaleX = 1;
      this.scaleY = 1;
      this.scene.tweens.add({
        targets: this,
        props: {
          scaleX: 1.1,
          scaleY: 1.1
        },
        duration: 35,
        onComplete: () => resolve()
      });
    });
  }

  placeCardGameObjects ({cardGameObjects}: {cardGameObjects:CardGameObject[]})
  {
    const worldPosition = getWorldPosition(this);

    for (let index = 0; index < cardGameObjects.length; index++)
    {
      const cardGameObject = cardGameObjects[index];
      cardGameObject.x = cardGameObject.x - worldPosition.x;
      cardGameObject.y = cardGameObject.y - worldPosition.y;
      this.add(cardGameObject);
    }

    this._cardGameObjects = [...this._cardGameObjects, ...cardGameObjects];
  }

  getFrontGameObjects ({size}:{size:number})
  {
    return this._cardGameObjects.slice(-size);
  }

  removeFrontGameObjects ({size}:{size:number})
  {
    const cardGameObjects = this.getFrontGameObjects({size});
    const worldPosition = getWorldPosition(this);
    for (let index = 0; index < cardGameObjects.length; index++)
    {
      const cardGameObject = cardGameObjects[index];
      cardGameObject.x = cardGameObject.x + worldPosition.x;
      cardGameObject.y = cardGameObject.y + worldPosition.y;
      this.remove(cardGameObject);
    }
    this._cardGameObjects = this._cardGameObjects.slice(0, this._cardGameObjects.length - size);
    this.resizeZone();
  }

  drawFrontCardGameObjects ({size}:{size:number})
  {
    const cardGameObjects = this.getFrontGameObjects({size});
    this.removeFrontGameObjects({size});
    return cardGameObjects;
  }

  get cardGameObjects ()
  {
    return [...this._cardGameObjects];
  }
}
