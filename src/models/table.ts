import {Card} from './card';
import {Pile} from './pile';
// import {TableSettings, TableSettingConfig} from './table-settings';
import {
  FACE_UP_CARD,
  MOVE_CARD,
  PAUSE,
  UndoableActionHistory
} from './undoable-actions';

export type TableSettings = {
  numberOfTableauPiles: number,
  numberOfDrawPiles: number,
  cards: Card[]
}

export class Table
{
  private _settings:TableSettings;
  private _cards: Card[];
  private _deckPile:Pile;
  private _drawPiles:Pile[];
  private _tableauPiles:Pile[];
  private _discardPiles:Pile[];
  private _piles:Pile[];
  private _actionHistory:UndoableActionHistory;

  constructor (settings: TableSettings)
  {
    this._settings = settings;
    this._cards = settings.cards;
    this._deckPile = new Pile({label: 'deck', cards: settings.cards});
    this._drawPiles = Array.from({length:settings.numberOfDrawPiles}).map((_, i) => new Pile({label: `draw${i}`, cards: []}));
    this._tableauPiles = Array.from({length:settings.numberOfTableauPiles}).map((_, i) => new Pile({label: `tabl${i}`, cards: []}));
    this._discardPiles = Array.from({length:Math.floor(settings.cards.length / 13)}).map((_, i) => new Pile({label: `disc${i}`, cards: []}));
    this._piles = [this._deckPile, ...this._drawPiles, ...this.tableauPiles, ...this._discardPiles];
    this._actionHistory = new UndoableActionHistory();
  }

  get cards ()
  {
    return [...this._cards];
  }

  get piles ()
  {
    return [...this._piles];
  }

  getPileBy (predicate:(p:Pile) => any)
  {
    const pile = this._piles.find(predicate);
    if (!pile)
    {
      throw new Error("The pile doesn't exist.");
    }
    return pile;
  }

  get deckPile ()
  {
    return this._deckPile;
  }

  get drawPiles ()
  {
    return [...this._drawPiles];
  }

  get tableauPiles ()
  {
    return [...this._tableauPiles];
  }

  get discardPiles ()
  {
    return [...this._discardPiles];
  }

  get isClear ()
  {
    return !this._tableauPiles.find(p => p.cards.length > 0);
  }

  getPossibleMovesBetweenTableauPiles ()
  {
    let moves:{size:number, from: Pile, to: Pile}[] = [];

    for (let from of this._tableauPiles)
    {
      const drawableCards = from.getDescendingInSuitFrontCards();
      if (drawableCards.length === 0) continue;

      for (let to of this._tableauPiles)
      {
        if (to === from) continue;

        for (let size = drawableCards.length; size > 0; size--)
        {
          if (to.frontCard && !Pile.checkIfCardsAreDescending({
            cards: [to.frontCard, ...drawableCards.slice(-size)],
            inSuit: false,
            faceUp: true
          })) continue;

          moves = [...moves, {from, to, size}];
        }
      }
    }

    return moves;
  }

  protected _moveCardBetweenPiles ({from, to, size}:{from:Pile, to:Pile, size:number})
  {
    if (!this._piles.find(p => p === from))
    {
      throw new Error(`The "from" pile is not be in this table.`);
    }

    if (!this._piles.find(p => p === to))
    {
      throw new Error(`The "to" pile is not be in this table.`);
    }

    if (from.getFrontCards({size}).length !== size)
    {
      throw new Error(`The pile "${from.id}" doesn't have ${size} cards to draw.`);
    }

    const cards = from.drawCards({size});
    to.placeCards({cards});
  }

  private _dealCardsFromDeckToTableauPiles ()
  {
    const numberOfCards = this._deckPile.cards.length;
    const numberOfDrawCards = this._settings.numberOfTableauPiles * this._settings.numberOfDrawPiles;

    let counter = 0;
    for (let index = 0; index < numberOfCards - numberOfDrawCards; index++)
    {
      const from = this._deckPile;
      const to = this._tableauPiles[counter % this.tableauPiles.length];
      this._moveCardBetweenPiles({from, to, size: 1});
      counter = counter + 1;
    }
  }

  private _dealCardsFromDeckToDrawPiles ()
  {
    // const numberOfDrawCards = this._settings.numberOfTableauPiles * this._settings.numberOfDrawPiles;

    for (let index = 0; index < this._settings.numberOfDrawPiles; index++)
    {
      const from = this._deckPile;
      const to = this._drawPiles[index];
      this._moveCardBetweenPiles({from, to, size: this._settings.numberOfTableauPiles});
    }
  }

  private _flipUpTableauFrontCards ()
  {
    for (let tableauPile of this._tableauPiles)
    {
      if (tableauPile.frontCard) this._faceUpCard({card: tableauPile.frontCard});
    }
  }

  private _faceUpCard ({card}:{card:Card})
  {
    if (!card.isFaceUp)
    {
      card.faceUp();
    }
  }

  startGame ()
  {
    this._dealCardsFromDeckToTableauPiles();
    this._dealCardsFromDeckToDrawPiles();
    this._flipUpTableauFrontCards();
  }

  moveCardBetweenTableauPiles ({from, to, size}:{from:Pile, to:Pile, size:number})
  {
    if (!this._tableauPiles.find(p => p === from))
    {
      throw new Error(`The "from" pile is not a tableau pile.`);
    }

    if (!this._tableauPiles.find(p => p === to))
    {
      throw new Error(`The "to" pile is not a tableau pile.`);
    }

    const cards = from.getFrontCards({size});
    if (cards.length !== size)
    {
      throw new Error(`The pile "${from.id}" doesn't have ${size} cards to draw.`);
    }

    if (to.frontCard && !Pile.checkIfCardsAreDescending({
      cards: [to.frontCard, ...cards],
      inSuit: false,
      faceUp: true
    }))
    {
      throw new Error(`You can't place those cards to the "to" pile.`);
    }

    this._moveCardBetweenPiles({from, to, size});
    this._actionHistory.add({from, to, size, type: MOVE_CARD});

    if (from.frontCard && !from.frontCard.isFaceUp) {
      this._faceUpCard({card: from.frontCard});
      this._actionHistory.add({card: from.frontCard, type: FACE_UP_CARD});
    }

    const discardedPile = this._discardPiles.find(p => p.cards.length === 0);

    if (!discardedPile)
    {
        throw new Error(`There aren't any empty discarded piles.`);
    }

    if (to.checkIfFrontCardsComplete())
    {
      for (let i = 0; i < 13; i++)
      {
        this._moveCardBetweenPiles({
          from: to,
          to: discardedPile,
          size: 1
        });
        this._actionHistory.add({
          from: to,
          to: discardedPile,
          size: 1,
          type: MOVE_CARD
        });
      }

      if (to.frontCard && !to.frontCard.isFaceUp) {
        this._faceUpCard({card: to.frontCard});
        this._actionHistory.add({card: to.frontCard, type: FACE_UP_CARD});
      }
    }

    this._actionHistory.add({type: PAUSE});
  }

  get frontDrawPile ()
  {
    let drawPile:Pile | undefined;

    for (let index = this._drawPiles.length - 1; index >= 0; index--)
    {
      if (this._drawPiles[index].cards.length === this._settings.numberOfTableauPiles)
      {
        drawPile = this._drawPiles[index];
        break;
      }
    }

    return drawPile;
  }

  dealCardsFromDrawPile ()
  {
    const drawPile = this.frontDrawPile;

    if (!drawPile) {
      throw new Error('There are no cards to draw from draw piles.');
    }

    for (let index = 0; index < this._tableauPiles.length; index++)
    {
      const tableauPile = this._tableauPiles[index];
      this._moveCardBetweenPiles({
        from: drawPile,
        to: tableauPile,
        size: 1
      });
      this._actionHistory.add({
        from: drawPile,
        to: tableauPile,
        size: 1,
        type: MOVE_CARD
      });
    }

    for (let tableauPile of this._tableauPiles)
    {
      if (tableauPile.frontCard && !tableauPile.frontCard.isFaceUp) {
        this._faceUpCard({card:tableauPile.frontCard});
        this._actionHistory.add({
          card: tableauPile.frontCard,
          type: FACE_UP_CARD
        });
      }
    }

    this._actionHistory.add({type: PAUSE});
  }

  undo ()
  {
    // console.log(this._actionHistory.actions.map((a, index, _) => {
    //   return (a.type);
    // }));

    loopDeletePauses: for (;;)
    {
      const action = this._actionHistory.latest;

      if (!action) break loopDeletePauses;

      switch (action.type)
      {
        case PAUSE:
          this._actionHistory.remove();
          break;
        default:
          break loopDeletePauses;
      };
    };

    loopExecuteUndoActions: for (;;)
    {
      const action = this._actionHistory.latest;

      if (!action) break loopExecuteUndoActions;

      switch (action.type)
      {
        case FACE_UP_CARD:
          action.card.faceDown();
          this._actionHistory.remove();
          break;
        case MOVE_CARD:
          this._moveCardBetweenPiles({
            from: action.to,
            to: action.from,
            size: action.size
          });
          this._actionHistory.remove();
          break;
        case PAUSE:
          this._actionHistory.remove();
          break loopExecuteUndoActions;
        default:
          break;
      };
    }
  }

  toString()
  {
    return this._piles.map(p => p.label + " " + p.toString()).join('\n');
  }
}
