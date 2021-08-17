import {Card} from './card';
import {Pile} from './pile';
import {
  FACE_UP_CARD,
  MOVE_CARD,
  MOVE_CARD_BETWEEN_TABLEAU_PILES,
  PAUSE,
  UndoableAction,
  UndoableActionHistory
} from './undoable-action-history';
import {Emitter} from '../event-emitter';

export type TableSettings = {
  numberOfTableauPiles: number,
  numberOfDrawPiles: number,
  cards: Card[]
}

type TableEvents = {
  MOVE_CARDS_BETWEEN_PILES: {
    from:Pile,
    to:Pile,
    size:number
  },
  ACTION_HAPPEN : undefined
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
  private _emitter: Emitter<TableEvents> = new Emitter<TableEvents>();

  constructor (settings: TableSettings)
  {
    this._settings = settings;
    this._cards = settings.cards;
    this._deckPile = new Pile({id: 'deck', cards: settings.cards});
    this._drawPiles = Array.from({length:settings.numberOfDrawPiles}).map((_, i) => new Pile({id: `draw${i}`, cards: []}));
    this._tableauPiles = Array.from({length:settings.numberOfTableauPiles}).map((_, i) => new Pile({id: `tabl${i}`, cards: []}));
    this._discardPiles = Array.from({length:Math.floor(settings.cards.length / 13)}).map((_, i) => new Pile({id: `disc${i}`, cards: []}));
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

  getPileBy (predicate:(p:Pile) => boolean)
  {
    const pile = this._piles.find(predicate);
    if (!pile)
    {
      throw new Error("The pile doesn't exist.");
    }
    return pile;
  }

  getPileById (id:string)
  {
    return this.getPileBy(p => p.id === id);
  }

  getPileByCardId (id:string)
  {
    return this.getPileBy(p => !!p.cards.find(c => c.id === id));
  }

  getCardBy (predicate:(c:Card) => boolean)
  {
    const card = this._cards.find(predicate);
    if (!card)
    {
      throw new Error("The card doesn't exist.");
    }
    return card;
  }

  getCardById (id:string)
  {
    return this.getCardBy(c => c.id === id);
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

  get actionHistory ()
  {
    return this._actionHistory;
  }

  private _moveCardBetweenPiles ({fromId, toId, size}:{fromId:string, toId:string, size:number})
  {
    const from = this._piles.find(p => p.id === fromId);
    if (!from)
    {
      throw new Error(`The "from" pile is not be in this table.`);
    }

    const to = this._piles.find(p => p.id === toId);
    if (!to)
    {
      throw new Error(`The "to" pile is not be in this table.`);
    }

    if (from.getFrontCards({size}).length !== size)
    {
      throw new Error(`The pile "${from.id}" doesn't have ${size} cards to draw.`);
    }

    const cards = from.drawCards({size});
    to.placeCards({cards});

    this._emitter.emit('MOVE_CARDS_BETWEEN_PILES', {from, to, size});
  }

  private _dealCardsFromDeckToTableauPiles ()
  {
    const numberOfCards = this._deckPile.cards.length;
    const numberOfDrawCards = this._settings.numberOfTableauPiles * this._settings.numberOfDrawPiles;

    let counter = 0;
    for (let index = 0; index < numberOfCards - numberOfDrawCards; index++)
    {
      this._moveCardBetweenPiles({
        fromId: this._deckPile.id, 
        toId: this._tableauPiles[counter % this.tableauPiles.length].id, 
        size: 1
      });
      counter = counter + 1;
    }
  }

  private _dealCardsFromDeckToDrawPiles ()
  {
    for (let index = 0; index < this._settings.numberOfDrawPiles; index++)
    {
      this._moveCardBetweenPiles({
        fromId: this._deckPile.id, 
        toId: this._drawPiles[index].id, 
        size: this._settings.numberOfTableauPiles
      });
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

  dealInitialCards ()
  {
    this._dealCardsFromDeckToTableauPiles();
    this._dealCardsFromDeckToDrawPiles();
    this._flipUpTableauFrontCards();
  }

  moveCardBetweenTableauPiles ({fromId, toId, size}:{fromId:string, toId:string, size:number})
  {
    this._checkIfMovingCardTableauPilesIsValid({fromId, toId, size});
    this._moveCardBetweenPiles({fromId, toId, size});
    this._actionHistory.add({fromId, toId, size, type: MOVE_CARD_BETWEEN_TABLEAU_PILES});

    const from = this._tableauPiles.find(p => p.id === fromId);
    if (!from)
    {
      throw new Error(`The "from" pile is not a tableau pile.`);
    }

    const to = this._tableauPiles.find(p => p.id === toId);
    if (!to)
    {
      throw new Error(`The "to" pile is not a tableau pile.`);
    }

    if (from.frontCard && !from.frontCard.isFaceUp) {
      this._faceUpCard({card: from.frontCard});
      this._actionHistory.add({cardId: from.frontCard.id, type: FACE_UP_CARD});
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
          fromId: toId,
          toId: discardedPile.id,
          size: 1
        });
        this._actionHistory.add({
          fromId: toId,
          toId: discardedPile.id,
          size: 1,
          type: MOVE_CARD
        });
      }

      if (to.frontCard && !to.frontCard.isFaceUp) {
        this._faceUpCard({card: to.frontCard});
        this._actionHistory.add({cardId: to.frontCard.id, type: FACE_UP_CARD});
      }
    }

    this._actionHistory.add({type: PAUSE});
  }

  private _checkIfMovingCardTableauPilesIsValid ({fromId, toId, size}:{fromId:string, toId:string, size:number})
  {
    const from = this._tableauPiles.find(p => p.id === fromId);
    if (!from)
    {
      throw new Error(`The "from" pile is not a tableau pile.`);
    }

    const to = this._tableauPiles.find(p => p.id === toId);
    if (!to)
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
        fromId: drawPile.id,
        toId: tableauPile.id,
        size: 1
      });
      this._actionHistory.add({
        fromId: drawPile.id,
        toId: tableauPile.id,
        size: 1,
        type: MOVE_CARD
      });
    }

    for (let tableauPile of this._tableauPiles)
    {
      if (tableauPile.frontCard && !tableauPile.frontCard.isFaceUp) {
        this._faceUpCard({card:tableauPile.frontCard});
        this._actionHistory.add({
          cardId: tableauPile.frontCard.id,
          type: FACE_UP_CARD
        });
      }
    }

    this._actionHistory.add({type: PAUSE});
  }

  undo ()
  {
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
          this.getCardById(action.cardId).faceDown();
          this._actionHistory.remove();
          break;
        case MOVE_CARD:
        case MOVE_CARD_BETWEEN_TABLEAU_PILES:
          this._moveCardBetweenPiles({
            fromId: action.toId,
            toId: action.fromId,
            size: action.size
          });
          this._actionHistory.remove();
          break;
        case PAUSE:
          break loopExecuteUndoActions;
        default:
          break;
      };
    }
  }

  getHints ()
  {
    let moves:{size:number, from: Pile, to: Pile}[] = [];

    for (let from of this._tableauPiles)
    {
      const drawableCards = from.getDescendingInSuitFrontCards();
      if (drawableCards.length === 0) continue;

      for (let to of this._tableauPiles)
      {
        if (from === to) continue;

        if (drawableCards.length === from.cards.length
          && !to.frontCard)
          continue;

        for (let size = drawableCards.length; size > 0; size--)
        {
          if (size !== drawableCards.length
            && !to.frontCard) continue;

          if (to.frontCard
            && !Pile.checkIfCardsAreDescending({
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

  reproduce (actions:UndoableAction[])
  {
    for (let i = 0; i < actions.length; i++)
    {
      const action = actions[i];
      switch (action.type)
      {
        case FACE_UP_CARD:
          this.getCardById(action.cardId).faceUp();
          this._actionHistory.add({
            cardId: action.cardId,
            type: FACE_UP_CARD
          });
          break;
        case MOVE_CARD:
          this._moveCardBetweenPiles({
            fromId: action.fromId,
            toId: action.toId,
            size: action.size
          });
          this._actionHistory.add({
            fromId: action.fromId,
            toId: action.toId,
            size: action.size,
            type: MOVE_CARD
          });
          break;
        case MOVE_CARD_BETWEEN_TABLEAU_PILES:
          this._checkIfMovingCardTableauPilesIsValid({
            fromId: action.fromId,
            toId: action.toId,
            size: action.size
          });
          this._moveCardBetweenPiles({
            fromId: action.fromId,
            toId: action.toId,
            size: action.size
          });
          this._actionHistory.add({
            fromId: action.fromId,
            toId: action.toId,
            size: action.size,
            type: MOVE_CARD
          });
          break;
        case PAUSE:
          this._actionHistory.add({type: PAUSE});
          break;
      }
    }
  }

  onMoveCardsBetweenPiles (callback:
    ({from, to, size}:{from:Pile, to:Pile, size:number}) => void)
  {
    this._emitter.on('MOVE_CARDS_BETWEEN_PILES', callback);
  }

  onActionHappen (callback: () => void)
  {
    this._emitter.on('ACTION_HAPPEN', callback);
  }

  toString()
  {
    return this._piles.map(p => p.id + " " + p.toString()).join('\n');
  }
}
