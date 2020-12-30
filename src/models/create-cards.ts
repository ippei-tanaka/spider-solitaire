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
  numberOfDecksUsed:number,
  numberOfSuits:number,
  mapping?: Mapping
};

const defaultMapping:Mapping = ({rank, suit, isFaceUp}) => new Card({suit, rank, isFaceUp});

export const createCards = ({
  numberOfDecksUsed,
  numberOfSuits,
  mapping
}:CreateCardsArgs) => {
  const deckCards:Card[] = [];
  const _mapping = mapping || defaultMapping;

  for (let i = 0; i < numberOfDecksUsed; i++)
  {
    for (let rank = 1; rank <= 13; rank++)
    {
      const index = i * 13 + 13;
      switch (numberOfSuits)
      {
        case 4:
          deckCards.push(_mapping({rank, suit: Suit.Diamond, isFaceUp: false, index}));
        case 3:
          deckCards.push(_mapping({rank, suit: Suit.Club, isFaceUp: false, index}));
        case 2:
          deckCards.push(_mapping({rank, suit: Suit.Heart, isFaceUp: false, index}));
        case 1:
          deckCards.push(_mapping({rank, suit: Suit.Spade, isFaceUp: false, index}));
      }
    }
  }

  return deckCards;
}
