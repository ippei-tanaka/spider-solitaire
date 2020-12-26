import Phaser from "phaser";
import {CardGameObject} from './card';
import {PileGameObject} from './pile';

export type TableGameObjectSettings = {
  scene:Phaser.Scene,
  deckPileId:string,
  drawPilesIds:string[],
  tableauPilesIds:string[],
  discardPilesIds:string[],
  dragPileId:string,
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

  constructor ({
    scene,
    deckPileId,
    drawPilesIds,
    tableauPilesIds,
    discardPilesIds,
    dragPileId,
    cardGameObjects
  }:TableGameObjectSettings)
  {
    super(scene, 0, 0);

    this._cardGameObjects = cardGameObjects;

    const _deckPile = new PileGameObject({
      scene: this.scene,
      x:500,
      y:500,
      name: deckPileId,
      label: 'deck'
    });
    this._pileGameObjects = [...this._pileGameObjects, _deckPile];
    this._deckPileGameObject = _deckPile;
    this._deckPileGameObject.placeCardGameObjects({cardGameObjects});
    this._deckPileGameObject.adjustCardGameObjectPositions();
    this.add(_deckPile);

    for (let index = 0; index < drawPilesIds.length; index++)
    {
      const drawPile = new PileGameObject({
        scene: this.scene,
        x:70 + index * 20,
        y:100,
        name: drawPilesIds[index],
        label: 'draw' + index
      });
      this._pileGameObjects = [...this._pileGameObjects, drawPile];
      this._drawPileGameObjects = [...this._drawPileGameObjects, drawPile];
      this.add(drawPile);
    }

    for (let index = 0; index < tableauPilesIds.length; index++)
    {
      const tableauPile = new PileGameObject({
        scene: this.scene,
        x:70 + index * 90,
        y:250,
        name: tableauPilesIds[index],
        isSpread: true,
        isDropTarget: true,
        label: 'tableau' + index
      });
      this._pileGameObjects = [...this._pileGameObjects, tableauPile];
      this._tableauPileGameObjects = [...this._tableauPileGameObjects, tableauPile];
      this.add(tableauPile);
    }

    for (let index = 0; index < discardPilesIds.length; index++)
    {
      const discardPile = new PileGameObject({
        scene: this.scene,
        x:300 + index * 90,
        y:100,
        name: discardPilesIds[index],
        label: 'discard' + index
      });
      this._pileGameObjects = [...this._pileGameObjects, discardPile];
      this._discardPileGameObjects = [...this._discardPileGameObjects, discardPile];
      this.add(discardPile);
    }

    const _dragPileGameObject = new PileGameObject({
      scene: this.scene,
      x: 0,
      y: 0,
      name: dragPileId,
      isSpread: true,
      label: 'drag'
    });
    this._pileGameObjects = [...this._pileGameObjects, _dragPileGameObject];
    this._dragPileGameObject = _dragPileGameObject;
    this._dragPileGameObject.setActive(false);
    this.add(_dragPileGameObject);
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
}
