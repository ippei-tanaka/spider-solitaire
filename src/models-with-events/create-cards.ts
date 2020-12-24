import {createCards} from '../models/create-cards';
import {CardWithEvent} from './card';

export const createCardsWithEvents = ({
  numberOfDecksUsed,
  numberOfSuits
}:{
  numberOfDecksUsed:number,
  numberOfSuits:number
}) =>
  createCards({
    numberOfDecksUsed,
    numberOfSuits
  }).map(card => new CardWithEvent({
    suit: card.suit,
    rank: card.rank,
    isFaceUp: card.isFaceUp
  }));
