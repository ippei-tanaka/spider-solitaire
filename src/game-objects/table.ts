import Phaser from "phaser";
import {CardGameObject} from './card';
import {PileGameObject} from './pile';

export type TableGameObjectSettings = {
  scene:Phaser.Scene,
  deckPileName:string,
  drawPilesNames:string[],
  tableauPilesNames:string[],
  discardPilesNames:string[],
  dragPileName:string,
  hintPileName:string,
  cardGameObjects: CardGameObject[]
};

export class TableGameObject extends Phaser.GameObjects.Container
{
  private _cardGameObjects:CardGameObject[] = [];
  private _pileGameObjects:PileGameObject[] = [];
  private _deckPileGameObject:PileGameObject;
  private _drawPileGameObjects:PileGameObject[] = [];
  private _tableauPileGameObjects:PileGameObject[] = [];
  private _discardPileGameObjects:PileGameObject[] = [];
  private _dragPileGameObject:PileGameObject;
  private _hintPileGameObject:PileGameObject;

  constructor ({
    scene,
    deckPileName,
    drawPilesNames,
    tableauPilesNames,
    discardPilesNames,
    dragPileName,
    hintPileName,
    cardGameObjects
  }:TableGameObjectSettings)
  {
    super(scene, 0, 0);

    this._cardGameObjects = cardGameObjects;

    const _deckPile = new PileGameObject({
      scene: this.scene,
      x:500,
      y:500,
      name: deckPileName
    });
    this._pileGameObjects = [...this._pileGameObjects, _deckPile];
    this._deckPileGameObject = _deckPile;
    this._deckPileGameObject.placeCardGameObjects({cardGameObjects});
    this._deckPileGameObject.adjustCardGameObjectPositions();
    this.add(_deckPile);

    for (let index = 0; index < drawPilesNames.length; index++)
    {
      const drawPile = new PileGameObject({
        scene: this.scene,
        x:55 + index * 20,
        y:77,
        name: drawPilesNames[index]
      });
      this._pileGameObjects = [...this._pileGameObjects, drawPile];
      this._drawPileGameObjects = [...this._drawPileGameObjects, drawPile];
      this.add(drawPile);
    }

    for (let index = 0; index < tableauPilesNames.length; index++)
    {
      const tableauPile = new PileGameObject({
        scene: this.scene,
        x:55 + index * 90,
        y:210,
        name: tableauPilesNames[index],
        isSpread: true,
        isDropTarget: true,
        showDropZone: true
      });
      this._pileGameObjects = [...this._pileGameObjects, tableauPile];
      this._tableauPileGameObjects = [...this._tableauPileGameObjects, tableauPile];
      this.add(tableauPile);
    }

    for (let index = 0; index < discardPilesNames.length; index++)
    {
      const discardPile = new PileGameObject({
        scene: this.scene,
        x:235 + index * 90,
        y:77,
        showDropZone: true,
        name: discardPilesNames[index]
      });
      this._pileGameObjects = [...this._pileGameObjects, discardPile];
      this._discardPileGameObjects = [...this._discardPileGameObjects, discardPile];
      this.add(discardPile);
    }

    const _dragPileGameObject = new PileGameObject({
      scene: this.scene,
      x: 0,
      y: 0,
      name: dragPileName,
      isSpread: true
    });
    this._pileGameObjects = [...this._pileGameObjects, _dragPileGameObject];
    this._dragPileGameObject = _dragPileGameObject;
    this._dragPileGameObject.setActive(false);
    this.add(_dragPileGameObject);

    const _hintPileGameObject = new PileGameObject({
      scene: this.scene,
      x: 0,
      y: 0,
      name: hintPileName,
      isSpread: true
    });
    this._pileGameObjects = [...this._pileGameObjects, _hintPileGameObject];
    this._hintPileGameObject = _hintPileGameObject;
    this._hintPileGameObject.setActive(false);
    this.add(_hintPileGameObject);
  }

  get cardGameObjects ()
  {
    return [...this._cardGameObjects];
  }

  get pileGameObjects ()
  {
    return [...this._pileGameObjects];
  }

  getPileGameObjectBy (predicate:(p:PileGameObject) => any)
  {
    const pile = this._pileGameObjects.find(predicate);
    if (!pile)
    {
      throw new Error("The pile game object doesn't exist.");
    }
    return pile;
  }

  getPileGameObjectByName (name:string)
  {
    return this.getPileGameObjectBy(p => p.name === name);
  }

  getPileGameObjectByCardGameObjectName (name:string)
  {
    return this.getPileGameObjectBy(p => p.cardGameObjects.find(c => c.name === name));
  }

  get deckPileGameObject ()
  {
    return this._deckPileGameObject;
  }

  get drawPileGameObjects ()
  {
    return [...this._drawPileGameObjects];
  }

  get tableauPileGameObjects ()
  {
    return [...this._tableauPileGameObjects];
  }

  get dragPileGameObject ()
  {
    return this._dragPileGameObject;
  }

  get hintPileGameObject ()
  {
    return this._hintPileGameObject;
  }
}
