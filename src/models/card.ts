// import {eventHub} from '../event-hub';
import {nanoid} from 'nanoid';

export enum Suit {
  Spade = '♠',
  Club = '♣',
  Diamond = '♦',
  Heart = '♥'
}

const getRankText = (rank:number) =>
{
  if (rank < 1 || 13 < rank) {
    throw new Error("Card rank is invalid.");
  }

  if (rank === 11) {
    return 'J';
  } else if (rank === 12) {
    return 'Q';
  } else if (rank === 13) {
    return 'K';
  } else {
    return rank.toString();
  }
}

type CardArgs = {
  suit:Suit,
  rank:number,
  isFaceUp?:boolean,
  id?:string
}

export class Card
{
  private _suit: Suit;
  private _rank: number;
  private _isFaceUp: boolean;
  private _id:string;

  constructor ({suit, rank, isFaceUp, id}:CardArgs)
  {
    this._suit = suit;
    this._isFaceUp = isFaceUp || false;
    this._id = id || nanoid();

    if (1 <= rank && rank <= 13) {
      this._rank = rank;
    } else {
      throw new Error(`The card rank ${rank} is invalid.`);
    }
  }

  get suit () {
    return this._suit;
  }

  get suitMark () {
    return this._suit.toString()
  }

  get rank () {
    return this._rank;
  }

  get rankMark () {
    return getRankText(this._rank)
  }

  get isFaceUp () {
    return this._isFaceUp;
  }

  get id () {
    return this._id;
  }

  faceUp ()
  {
    this._isFaceUp = true;
  }

  faceDown ()
  {
    this._isFaceUp = false;
  }

  flipOver ()
  {
    this._isFaceUp = !this._isFaceUp;
  }

  toString ()
  {
    return this.suitMark + this.rankMark + (this._isFaceUp ? '+' : '-');
  }
}
