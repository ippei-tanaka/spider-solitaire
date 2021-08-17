import {Card} from './card';
import {nanoid} from 'nanoid';

type PileArgs = {
  cards?: Card[],
  id?:string
}

export class Pile
{
  protected _cards:Card[];
  protected _id:string;

  constructor (args:PileArgs = {})
  {
    this._cards = args.cards || [];
    this._id = args.id || nanoid();
  }

  get id () {
    return this._id;
  }

  get cards ()
  {
    return [...this._cards];
  }

  get frontCard ():Card|undefined
  {
    return this._cards[this._cards.length - 1];
  }

  get lastCard ():Card|undefined
  {
    return this._cards[0];
  }

  getFrontCards ({size}:{size:number})
  {
    const cards = this._cards;
    if (cards.length === 0 || size < 1) {
      return [];
    }

    const _size = Math.min(cards.length, size);
    return cards.slice(cards.length - _size);
  }

  drawCards ({size}:{size:number})
  {
    const cards = this._cards;
    if (cards.length === 0 || size < 1) {
      return [];
    }

    const _size = Math.min(cards.length, size);
    const drawnCards = cards.slice(cards.length - _size);
    this._cards = cards.slice(0, -size);
    return drawnCards;
  }

  placeCards ({cards}:{cards:Card[]})
  {
    this._cards = [...this._cards, ...cards];
  }

  getDescendingInSuitFrontCards ()
  {
    return Pile.getDescendingFrontCards({
      cards: this._cards,
      inSuit: true,
      faceUp: true
    });
  }

  static getDescendingFrontCards ({cards, inSuit, faceUp}:{cards:Card[], inSuit?:boolean, faceUp?:boolean})
  {
    const _inSuit = inSuit || false;
    const _faceUp = faceUp || false;

    if (cards.length === 0)
    {
      return [];
    }

    let prev = cards[cards.length - 1];

    if (_faceUp && !prev.isFaceUp)
    {
      return [];
    }

    let _cards:Card[] = [prev];

    for (let index = cards.length - 2; index >= 0; index--)
    {
      const current = cards[index];

      if (prev.rank + 1 !== current.rank
        || (_inSuit && prev.suit !== current.suit)
        || (_faceUp && !current.isFaceUp))
      {
        break;
      }

      _cards = [current, ..._cards];
      prev = current;
    }

    return _cards;
  }

  static checkIfCardsAreDescending ({cards, inSuit, faceUp}:{cards:Card[], inSuit?:boolean, faceUp?:boolean})
  {
    return Pile.getDescendingFrontCards({cards, inSuit, faceUp}).length === cards.length;
  }

  checkIfFrontCardsComplete ()
  {
    return this.cards.length >= 13 && Pile.checkIfCardsAreDescending({
      cards: this.cards.slice(-13),
      inSuit: true,
      faceUp: true
    });
  }

  toString ()
  {
    return this.cards.map(c => c.toString()).join(' ');
  }
}
