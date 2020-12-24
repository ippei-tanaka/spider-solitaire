import {Card, Suit} from './card';

export const createCards = ({
  numberOfDecksUsed,
  numberOfSuits
}:{
  numberOfDecksUsed:number,
  numberOfSuits:number
}) => {
  const deckCards:Card[] = [];

  for (let i = 0; i < numberOfDecksUsed; i++)
  {
    for (let rank = 1; rank <= 13; rank++)
    {
      switch (numberOfSuits)
      {
        case 4:
          deckCards.push(new Card({suit:Suit.Diamond, rank, isFaceUp: false}));
        case 3:
          deckCards.push(new Card({suit:Suit.Club, rank, isFaceUp: false}));
        case 2:
          deckCards.push(new Card({suit:Suit.Heart, rank, isFaceUp: false}));
        case 1:
          deckCards.push(new Card({suit:Suit.Spade, rank, isFaceUp: false}));
      }
    }
  }

  return deckCards;
}

export const randomizeArray = <T>({array}:{array:T[]}) => {
  const _arr = [...array];
  for (let i = _arr.length - 1; i > 0; i--)
  {
      const j = Math.floor(Math.random() * (i + 1));
      [_arr[i], _arr[j]] = [_arr[j], _arr[i]];
  }
  return _arr;
}
