import { Table } from '../src/models/table';
import { Card, Suit } from '../src/models/card';
import { createCards } from '../src/models/create-cards';
import { FACE_UP_CARD } from '../src/models/action-history';
import { gameModes } from '../src/models/game-modes';

const gameMode = gameModes['four-suits'];

/*
const shuffleArray = (arr:any[]) => {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

const table1 = new Table({
  numberOfTableauPiles: gameModes['four-suits'].numberOfTableauPiles,
  numberOfDrawPiles: gameModes['four-suits'].numberOfDrawPiles,
  cards: shuffleArray(createCards({
    numberOfSuitStacks: gameModes['four-suits'].numberOfSuitStacks,
    numberOfSuits: gameModes['four-suits'].numberOfSuits,
    mapping: ({rank, suit, isFaceUp}) => new Card({
      suit,
      rank,
      isFaceUp,
    })
  })),
});
table1.setUpInitialCards();
console.log(table1.toString());
*/

const drawPileString = `
draw0 ♥4- ♦J- ♠7- ♠J- ♦4- ♣3- ♦A- ♣7- ♥3- ♥2-
draw1 ♥5- ♠9- ♥6- ♥J- ♦J- ♠2- ♠3- ♦8- ♥9- ♥7-
draw2 ♣9- ♠9- ♦6- ♦10- ♠5- ♠Q- ♦6- ♦5- ♣10- ♣K-
draw3 ♠10- ♣8- ♦7- ♣5- ♣4- ♦3- ♦9- ♣J- ♦K- ♠3-
draw4 ♦2- ♠Q- ♠2- ♥10- ♦K- ♣6- ♠K- ♥10- ♠8- ♠6-
`;

const tableauPileString = `
tabl0 ♥K- ♣Q-# ♥8- ♦5- ♣J- ♠7+
tabl1 ♥7- ♣5-# ♦A- ♥Q- ♥6- ♦3+
tabl2 ♠J- ♣A-# ♥J- ♦2- ♠5- ♣A+
tabl3 ♦9- ♦8-# ♦4- ♠8- ♠A- ♥9+
tabl4 ♣4- ♦7-# ♣2- ♣Q- ♥2+
tabl5 ♥8- ♠A-# ♠4- ♠6- ♥A+
tabl6 ♥4- ♥A-# ♣10- ♣9- ♦10+
tabl7 ♣2- ♣8-# ♣K- ♠K- ♥5+
tabl8 ♥3- ♣6-# ♣3- ♠10- ♦Q+
tabl9 ♠4- ♣7-# ♥Q- ♦Q- ♥K+
`;

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

const markedCardIds:string[] = [];

const parsePileString = (pileString:string) => {
  return pileString
    .trim()
    .split(/\n/)
    .map(ln => {
      const line = ln.trim();
      const matchArr1 = line.match(/^([a-z0-9]{5})\s+(.+)$/) || [];
      return matchArr1[2].trim().split(/\s+/)
      .map(str => {
        const matchArr = str.match(/(.)([0-9AJQK]+)([-+])(#?)/) || [];
        const suit = matchArr[1];
        let rank = matchArr[2];
        const faceUp = matchArr[3];
        const marked = matchArr[4];
        if (rank === 'A') {
          rank = '1'
        } else if (rank === 'J') {
          rank = '11'
        } else if (rank === 'Q') {
          rank = '12'
        } else if (rank === 'K') {
          rank = '13'
        }
        const card = new Card({
          suit: getSuit(suit),
          rank: parseInt(rank),
          isFaceUp: faceUp === '+'
        });
        if (marked)
        {
          markedCardIds.push(card.id);
        }
        return card;
      })
    });
};

const drawPiles = parsePileString(drawPileString);
// const drawPileCardIds = drawPiles.reduce((pre, cur) => [...pre, ...cur], []).map(c => c.id);
const tableauPiles = parsePileString(tableauPileString);

const table = new Table({
  numberOfTableauPiles: gameMode.numberOfTableauPiles,
  numberOfDrawPiles: gameMode.numberOfDrawPiles,
  cards: createCards({
    numberOfSuitStacks: gameMode.numberOfSuitStacks,
    numberOfSuits: gameMode.numberOfSuits
  })
});

table.setUpInitialCards();

for (let i = 0; i < drawPiles.length; i++)
{
  table.drawPiles[i].drawCards({size: table.drawPiles[i].cards.length});
  table.drawPiles[i].placeCards({cards: drawPiles[i]});
}

for (let i = 0; i < tableauPiles.length; i++)
{
  table.tableauPiles[i].drawCards({size: table.tableauPiles[i].cards.length});
  table.tableauPiles[i].placeCards({cards: tableauPiles[i]});
}

console.log(table.toString());
console.log('----');

table.actionHistory.on((action) => {
  if (action.type === FACE_UP_CARD)
  {
    if (!markedCardIds.includes(action.cardId))
    {
      const card = table.getCardById(action.cardId);
      console.log(card.toString(), 'flipped!!!');
    }
  }
});

const random = (max: number, min = 0) => {
  const num = Math.random() * (max - min) + min;
  return Math.floor(num);
};

for (let i = 0; i < 500; i++)
{
  if (table.getHints().length === 0 || random(15) < 1)
  {
    try {
      // table.dealCardsFromDrawPile();
    } catch (error)
    {
      // console.log(error);
    }
    continue;
  }

  const fromIndex = random(table.tableauPiles.length);
  const toIndex = random(table.tableauPiles.length);
  if (fromIndex === toIndex)
  {
    // console.log('fromIndex === toIndex');
    continue;
  }
  const fromId = table.tableauPiles[fromIndex].id;
  const toId = table.tableauPiles[toIndex].id;
  // console.log(`from ${fromId}, to ${toId}`);
  const availableCardLength = table.getPileById(fromId).getDescendingInSuitFrontCards().length;
  if (availableCardLength === 0)
  {
    // console.log('availableCardLength = 0');
    continue;
  }
  const size = random(availableCardLength, 1);
  try {
    table.moveCardBetweenTableauPiles({fromId, toId, size});
  } catch (error)
  {
    // console.log(error);
  }
  // table.dealCardsFromDrawPile();
}


console.log(table.toString());