import {Card, Suit} from './card';

type Mapping = ({
  rank,
  suit,
  isFaceUp,
  index
}:{
  rank:number,
  suit:Suit,
  isFaceUp:boolean,
  index:number
}) => Card;

export type CreateCardsArgs = {
  numberOfSuitStacks:number,
  numberOfSuits:number,
  mapping?: Mapping
};

const defaultMapping:Mapping = ({rank, suit, isFaceUp}) => new Card({suit, rank, isFaceUp});

export const createCards = ({
  numberOfSuitStacks,
  numberOfSuits,
  mapping
}:CreateCardsArgs) => {
  const deckCards:Card[] = [];
  const _mapping = mapping || defaultMapping;

  for (let stackCounter = 0; stackCounter < numberOfSuitStacks; stackCounter++)
  {
    for (let rank = 1; rank <= 13; rank++)
    {
      const index = stackCounter * 13 + rank;
      switch (stackCounter % numberOfSuits)
      {
        case 0:
          deckCards.push(_mapping({rank, suit: Suit.Spade, isFaceUp: false, index}));
          break;
        case 1:
          deckCards.push(_mapping({rank, suit: Suit.Heart, isFaceUp: false, index}));
          break;
        case 2:
          deckCards.push(_mapping({rank, suit: Suit.Club, isFaceUp: false, index}));
          break;
        case 3:
          deckCards.push(_mapping({rank, suit: Suit.Diamond, isFaceUp: false, index}));
          break;
        case 4:
          deckCards.push(_mapping({rank, suit: Suit.Star, isFaceUp: false, index}));
          break;
      }
    }
  }

  return deckCards;
}
