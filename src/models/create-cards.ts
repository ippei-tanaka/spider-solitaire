import {Card, Suit} from './card';

type Mapping = ({rank, suit}:{rank:number, suit:Suit}) => Card;

type CreateCardsArgs = {
  numberOfDecksUsed:number,
  numberOfSuits:number,
  mapping?: Mapping
};

const defaultMapping:Mapping = ({rank, suit}) => new Card({suit, rank, isFaceUp: false});

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
      switch (numberOfSuits)
      {
        case 4:
          deckCards.push(_mapping({rank, suit: Suit.Diamond}));
        case 3:
          deckCards.push(_mapping({rank, suit: Suit.Club}));
        case 2:
          deckCards.push(_mapping({rank, suit: Suit.Heart}));
        case 1:
          deckCards.push(_mapping({rank, suit: Suit.Spade}));
      }
    }
  }

  return deckCards;
}
