import {Table} from '../src/models/table';
import {Card, Suit} from '../src/models/card';

const drawPiles = `
♠12- ♠11- ♠10- ♠9-
♠6- ♠5- ♠4- ♠3-
`;

const tableauPiles = `
♠13- ♠12-
♣13- ♣12-
♦13- ♦12-
♥13- ♥12-
`

const getSuit = (str:string) => {
  switch (str) {
    case '♠':
      return Suit.Spade;
    case '♣':
      return Suit.Club;
    case '♦':
      return Suit.Diamond;
    case '♥':
      return Suit.Heart;
    default:
      return Suit.Spade;
  }
};

const parsePileString = (pileString:string) => pileString
  .trim()
  .split(/\n/)
  .map(ln => ln.trim().split(/\s+/)
    .map(str => {
      const matchArr = str.match(/(.)(\d+)([-+])/) || [];
      const suit = matchArr[1];
      const rank = matchArr[2];
      const faceUp = matchArr[3];
      return new Card({
        suit: getSuit(suit),
        rank: parseInt(rank),
        isFaceUp: faceUp === '+'
      })
    }));

console.log(parsePileString(drawPiles));
console.log(parsePileString(tableauPiles));

const flatternPiles = (piles:Card[][]) =>
{
  return piles.reduce((prev, pile) => [...prev, ...pile], []);
}

const table = new Table({
  numberOfTableauPiles: 4,
  numberOfDrawPiles: 2,
  cards: [
    ...flatternPiles(parsePileString(drawPiles)),
    ...flatternPiles(parsePileString(tableauPiles))
  ]
});
    
table.dealInitialCards();

console.log(table.toString());

table.dealCardsFromDrawPile();

console.log(table.toString());