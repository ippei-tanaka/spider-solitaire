import {createCards, CreateCardsArgs} from '../models/create-cards';
import {CardWithEvent} from './card';

export const createCardsWithEvents = ({
  numberOfDecksUsed,
  numberOfSuits,
  mapping
}:CreateCardsArgs) =>
  createCards({
    numberOfDecksUsed,
    numberOfSuits,
    mapping
  }).map(card => new CardWithEvent({
    suit: card.suit,
    rank: card.rank,
    isFaceUp: card.isFaceUp,
    id: card.id
  }));
