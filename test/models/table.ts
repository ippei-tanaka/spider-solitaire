import {Table} from '../../src/models/table';
import {Card, Suit} from '../../src/models/card';
import {createCards} from '../../src/models/create-cards';


test('Table settings', () => {
  const table = new Table({
    numberOfTableauPiles: 10,
    numberOfDrawPiles: 5,
    cards: createCards({
      numberOfDecksUsed: 2,
      numberOfSuits: 4
    })
  });
  expect(table.drawPiles.length).toBe(5);
  expect(table.tableauPiles.length).toBe(10);
  expect(table.discardPiles.length).toBe(8);
  expect(table.piles.length).toBe(24);
});


test('Table startGame', () => {
  const table = new Table({
    numberOfTableauPiles: 10,
    numberOfDrawPiles: 5,
    cards: createCards({
      numberOfDecksUsed: 2,
      numberOfSuits: 4
    })
  });

  expect(table.deckPile.cards.length).toBe(104);

  table.startGame();

  expect(table.deckPile.cards.length).toBe(0);
  expect(table.tableauPiles[0].cards.length).toBe(6);
  expect(table.tableauPiles[1].cards.length).toBe(6);
  expect(table.tableauPiles[2].cards.length).toBe(6);
  expect(table.tableauPiles[3].cards.length).toBe(6);
  expect(table.tableauPiles[4].cards.length).toBe(5);
  expect(table.tableauPiles[5].cards.length).toBe(5);
  expect(table.tableauPiles[6].cards.length).toBe(5);
  expect(table.tableauPiles[7].cards.length).toBe(5);
  expect(table.tableauPiles[8].cards.length).toBe(5);
  expect(table.tableauPiles[9].cards.length).toBe(5);
  expect(table.drawPiles[0].cards.length).toBe(10);
  expect(table.drawPiles[1].cards.length).toBe(10);
  expect(table.drawPiles[2].cards.length).toBe(10);
  expect(table.drawPiles[3].cards.length).toBe(10);
  expect(table.drawPiles[4].cards.length).toBe(10);
  expect(table.discardPiles[0].cards.length).toBe(0);
  expect(table.discardPiles[1].cards.length).toBe(0);
  expect(table.discardPiles[2].cards.length).toBe(0);
  expect(table.discardPiles[3].cards.length).toBe(0);
  expect(table.discardPiles[4].cards.length).toBe(0);
  expect(table.discardPiles[5].cards.length).toBe(0);
  expect(table.discardPiles[6].cards.length).toBe(0);
  expect(table.discardPiles[7].cards.length).toBe(0);
});


test('Table dealCardsFromDrawPile', () => {
  const table = new Table({
    numberOfTableauPiles: 10,
    numberOfDrawPiles: 5,
    cards: createCards({
      numberOfDecksUsed: 2,
      numberOfSuits: 4
    })
  });

  table.startGame();

  table.dealCardsFromDrawPile();

  expect(table.deckPile.cards.length).toBe(0);
  expect(table.tableauPiles[0].cards.length).toBe(7);
  expect(table.tableauPiles[1].cards.length).toBe(7);
  expect(table.tableauPiles[2].cards.length).toBe(7);
  expect(table.tableauPiles[3].cards.length).toBe(7);
  expect(table.tableauPiles[4].cards.length).toBe(6);
  expect(table.tableauPiles[5].cards.length).toBe(6);
  expect(table.tableauPiles[6].cards.length).toBe(6);
  expect(table.tableauPiles[7].cards.length).toBe(6);
  expect(table.tableauPiles[8].cards.length).toBe(6);
  expect(table.tableauPiles[9].cards.length).toBe(6);
  expect(table.drawPiles[0].cards.length).toBe(10);
  expect(table.drawPiles[1].cards.length).toBe(10);
  expect(table.drawPiles[2].cards.length).toBe(10);
  expect(table.drawPiles[3].cards.length).toBe(10);
  expect(table.drawPiles[4].cards.length).toBe(0);
});

test('Table moveCardBetweenTableauPiles', () => {
  const table = new Table({
    numberOfTableauPiles: 10,
    numberOfDrawPiles: 5,
    cards: Array.from({length: 2 * 13 * 4}).map((_, index) => new Card({
      suit: Suit.Club,
      rank: (index % 13) + 1,
      isFaceUp: true
    }))
  });

  table.startGame();

  expect(table.tableauPiles[0].cards.length).toBe(6);
  expect(table.tableauPiles[1].cards.length).toBe(6);

  table.moveCardBetweenTableauPiles({
    from: table.tableauPiles[1],
    to: table.tableauPiles[0],
    size: 1
  });
  expect(table.tableauPiles[0].cards.length).toBe(7);
  expect(table.tableauPiles[1].cards.length).toBe(5);
  expect(table.tableauPiles[0].frontCard?.isFaceUp).toBeTruthy;
  expect(table.tableauPiles[1].frontCard?.isFaceUp).toBeTruthy;
});


test('Table moveCardBetweenTableauPiles and complete a suit', () => {
  const table = new Table({
    numberOfTableauPiles: 2,
    numberOfDrawPiles: 0,
    cards: Array.from({length: 1 * 13 * 4}).map(() => new Card({
      suit: Suit.Club,
      rank: 1,
      isFaceUp: true
    }))
  });

  table.startGame();

  table.tableauPiles[0].drawCards({size: table.tableauPiles[0].cards.length});
  table.tableauPiles[1].drawCards({size: table.tableauPiles[1].cards.length});

  table.tableauPiles[0].placeCards({
    cards: [new Card({
      suit: Suit.Club,
      rank: 6,
      isFaceUp: false
    }), ...Array.from({length: 12}).map((_, index) => {
      return new Card({
        suit: Suit.Heart,
        rank: 13 - index,
        isFaceUp: true
      })
    })]
  });

  table.tableauPiles[1].placeCards({
    cards: [new Card({
      suit: Suit.Spade,
      rank: 5,
      isFaceUp: false
    }), new Card({
      suit: Suit.Heart,
      rank: 1,
      isFaceUp: true
    })]
  });

  expect(table.tableauPiles[0].cards.length).toBe(13);
  expect(table.tableauPiles[1].cards.length).toBe(2);
  expect(table.discardPiles[0].cards.length).toBe(0);

  expect(() => table.moveCardBetweenTableauPiles({
    from: table.tableauPiles[1],
    to: table.tableauPiles[0],
    size: 15
  })).toThrow();

  expect(table.tableauPiles[0].cards.length).toBe(13);
  expect(table.tableauPiles[1].cards.length).toBe(2);
  expect(table.discardPiles[0].cards.length).toBe(0);

  table.moveCardBetweenTableauPiles({
    from: table.tableauPiles[1],
    to: table.tableauPiles[0],
    size: 1
  });

  expect(table.tableauPiles[0].cards.length).toBe(1);
  expect(table.tableauPiles[1].cards.length).toBe(1);
  expect(table.discardPiles[0].cards.length).toBe(13);

  expect(table.tableauPiles[0].frontCard?.rank).toBe(6);
  expect(table.tableauPiles[0].frontCard?.suit).toBe(Suit.Club);
  expect(table.tableauPiles[0].frontCard?.isFaceUp).toBe(true);

  expect(table.tableauPiles[1].frontCard?.rank).toBe(5);
  expect(table.tableauPiles[1].frontCard?.suit).toBe(Suit.Spade);
  expect(table.tableauPiles[1].frontCard?.isFaceUp).toBe(true);
});


test('Table undo move card actions', () => {
  const table = new Table({
    numberOfTableauPiles: 3,
    numberOfDrawPiles: 1,
    cards: Array.from({length: 52}).map((_, index) => new Card({
      suit: Suit.Club,
      rank: ((52 - index) % 13) + 1,
      isFaceUp: false
    }))
  });

  table.startGame();

  expect(table.tableauPiles[0].cards.length).toBe(17);
  expect(table.tableauPiles[1].cards.length).toBe(16);
  expect(table.tableauPiles[2].cards.length).toBe(16);

  table.moveCardBetweenTableauPiles({
    from: table.tableauPiles[1],
    to: table.tableauPiles[2],
    size: 1
  });

  expect(table.tableauPiles[0].cards.length).toBe(17);
  expect(table.tableauPiles[1].cards.length).toBe(15);
  expect(table.tableauPiles[2].cards.length).toBe(17);

  table.moveCardBetweenTableauPiles({
    from: table.tableauPiles[2],
    to: table.tableauPiles[0],
    size: 2
  });

  expect(table.tableauPiles[0].cards.length).toBe(19);
  expect(table.tableauPiles[1].cards.length).toBe(15);
  expect(table.tableauPiles[2].cards.length).toBe(15);

  table.undo();

  expect(table.tableauPiles[0].cards.length).toBe(17);
  expect(table.tableauPiles[1].cards.length).toBe(15);
  expect(table.tableauPiles[2].cards.length).toBe(17);

  table.undo();

  expect(table.tableauPiles[0].cards.length).toBe(17);
  expect(table.tableauPiles[1].cards.length).toBe(16);
  expect(table.tableauPiles[2].cards.length).toBe(16);
});


test('Table undo deck card dealing', () => {
  const table = new Table({
    numberOfTableauPiles: 2,
    numberOfDrawPiles: 2,
    cards: Array.from({length: 1 * 13 * 4}).map((_, index) => new Card({
      suit: Suit.Club,
      rank: (index % 13) + 1,
      isFaceUp: false
    }))
  });

  table.startGame();

  expect(table.drawPiles[0].cards.length).toBe(2);
  expect(table.drawPiles[1].cards.length).toBe(2);
  expect(table.tableauPiles[0].cards.length).toBe(24);
  expect(table.tableauPiles[1].cards.length).toBe(24);

  table.dealCardsFromDrawPile();

  expect(table.drawPiles[0].cards.length).toBe(2);
  expect(table.drawPiles[1].cards.length).toBe(0);
  expect(table.tableauPiles[0].cards.length).toBe(25);
  expect(table.tableauPiles[1].cards.length).toBe(25);

  table.dealCardsFromDrawPile();

  expect(table.drawPiles[0].cards.length).toBe(0);
  expect(table.drawPiles[1].cards.length).toBe(0);
  expect(table.tableauPiles[0].cards.length).toBe(26);
  expect(table.tableauPiles[1].cards.length).toBe(26);

  table.undo();

  expect(table.drawPiles[0].cards.length).toBe(2);
  expect(table.drawPiles[1].cards.length).toBe(0);
  expect(table.tableauPiles[0].cards.length).toBe(25);
  expect(table.tableauPiles[1].cards.length).toBe(25);

  table.undo();

  expect(table.drawPiles[0].cards.length).toBe(2);
  expect(table.drawPiles[1].cards.length).toBe(2);
  expect(table.tableauPiles[0].cards.length).toBe(24);
  expect(table.tableauPiles[1].cards.length).toBe(24);
});


test('Table undo completion of cards', () => {
  const table = new Table({
    numberOfTableauPiles: 2,
    numberOfDrawPiles: 1,
    cards: Array.from({length: 1 * 13 * 4}).map(() => new Card({
      suit: Suit.Club,
      rank: 1,
      isFaceUp: true
    }))
  });

  table.startGame();

  table.tableauPiles[0].drawCards({size: table.tableauPiles[0].cards.length});
  table.tableauPiles[1].drawCards({size: table.tableauPiles[1].cards.length});

  table.tableauPiles[0].placeCards({cards: Array.from({length: 12})
    .map((_, index) => new Card({
      suit: Suit.Heart,
      rank: 13 - index,
      isFaceUp: true
    }))});

  table.tableauPiles[1].placeCards({
    cards: [new Card({
      suit: Suit.Heart,
      rank: 1,
      isFaceUp: true
    })]
  });

  expect(table.tableauPiles[0].cards.length).toBe(12);
  expect(table.tableauPiles[1].cards.length).toBe(1);
  expect(table.discardPiles[0].cards.length).toBe(0);
  expect(table.tableauPiles[0].frontCard?.rank).toBe(2);

  table.moveCardBetweenTableauPiles({
    from: table.tableauPiles[1],
    to: table.tableauPiles[0],
    size: 1
  });

  expect(table.tableauPiles[0].cards.length).toBe(0);
  expect(table.discardPiles[0].cards.length).toBe(13);
  expect(table.discardPiles[0].frontCard?.rank).toBe(13);

  table.undo();

  expect(table.tableauPiles[0].cards.length).toBe(12);
  expect(table.tableauPiles[1].cards.length).toBe(1);
  expect(table.discardPiles[0].cards.length).toBe(0);
  expect(table.tableauPiles[0].frontCard?.rank).toBe(2);

});


test('Table complete a suit and win the game', () => {
  const table = new Table({
    numberOfTableauPiles: 2,
    numberOfDrawPiles: 0,
    cards: Array.from({length: 1 * 13 * 4}).map(() => new Card({
      suit: Suit.Club,
      rank: 1,
      isFaceUp: true
    }))
  });

  table.startGame();

  expect(table.isClear).toBe(false);

  table.tableauPiles[0].drawCards({size: table.tableauPiles[0].cards.length});
  table.tableauPiles[1].drawCards({size: table.tableauPiles[1].cards.length});

  expect(table.isClear).toBe(true);

  table.tableauPiles[0].placeCards({
    cards: Array.from({length: 12}).map((_, index) =>
      new Card({
        suit: Suit.Heart,
        rank: 13 - index,
        isFaceUp: true
      }))
  });

  expect(table.isClear).toBe(false);

  table.tableauPiles[1].placeCards({
    cards: [new Card({
      suit: Suit.Heart,
      rank: 1,
      isFaceUp: true
    })]
  });

  expect(table.isClear).toBe(false);

  table.moveCardBetweenTableauPiles({
    from: table.tableauPiles[1],
    to: table.tableauPiles[0],
    size: 1
  });

  expect(table.isClear).toBe(true);
});



test('Table possible moves', () => {
  const table = new Table({
    numberOfTableauPiles: 5,
    numberOfDrawPiles: 0,
    cards: Array.from({length: 1 * 13 * 4}).map(() => new Card({
      suit: Suit.Club,
      rank: 1,
      isFaceUp: true
    }))
  });

  table.startGame();

  table.tableauPiles[0].drawCards({size: table.tableauPiles[0].cards.length});
  table.tableauPiles[1].drawCards({size: table.tableauPiles[1].cards.length});
  table.tableauPiles[2].drawCards({size: table.tableauPiles[2].cards.length});
  table.tableauPiles[3].drawCards({size: table.tableauPiles[3].cards.length});
  table.tableauPiles[4].drawCards({size: table.tableauPiles[4].cards.length});



  table.tableauPiles[0].placeCards({
    cards: ([
      {r:4,s:Suit.Heart,f:false},
      {r:3,s:Suit.Heart,f:false},
      {r:2,s:Suit.Heart,f:true},
      {r:1,s:Suit.Heart,f:true}
    ]).map(({r,s,f}:{r:number,s:Suit,f:boolean}) => new Card({
      rank: r, suit: s, isFaceUp: f
    }))
  });

  table.tableauPiles[1].placeCards({
    cards: ([
      {r:3,s:Suit.Club,f:true},
    ]).map(({r,s,f}:{r:number,s:Suit,f:boolean}) => new Card({
      rank: r, suit: s, isFaceUp: f
    }))
  });

  table.tableauPiles[2].placeCards({
    cards: ([
      {r:5,s:Suit.Diamond,f:true},
      {r:4,s:Suit.Heart,f:true},
    ]).map(({r,s,f}:{r:number,s:Suit,f:boolean}) => new Card({
      rank: r, suit: s, isFaceUp: f
    }))
  });

  table.tableauPiles[4].placeCards({
    cards: ([
      {r:10,s:Suit.Diamond,f:true},
      {r:2,s:Suit.Heart,f:true},
    ]).map(({r,s,f}:{r:number,s:Suit,f:boolean}) => new Card({
      rank: r, suit: s, isFaceUp: f
    }))
  });

  const moves = table.getPossibleMovesBetweenTableauPiles();

  expect(moves.length).toBe(9);

  expect(moves[0].from).toBe(table.tableauPiles[0]);
  expect(moves[0].to).toBe(table.tableauPiles[1]);
  expect(moves[0].size).toBe(2);

  expect(moves[1].from).toBe(table.tableauPiles[0]);
  expect(moves[1].to).toBe(table.tableauPiles[3]);
  expect(moves[1].size).toBe(2);

  expect(moves[2].from).toBe(table.tableauPiles[0]);
  expect(moves[2].to).toBe(table.tableauPiles[3]);
  expect(moves[2].size).toBe(1);

  expect(moves[3].from).toBe(table.tableauPiles[0]);
  expect(moves[3].to).toBe(table.tableauPiles[4]);
  expect(moves[3].size).toBe(1);

  expect(moves[4].from).toBe(table.tableauPiles[1]);
  expect(moves[4].to).toBe(table.tableauPiles[2]);
  expect(moves[4].size).toBe(1);

  expect(moves[5].from).toBe(table.tableauPiles[1]);
  expect(moves[5].to).toBe(table.tableauPiles[3]);
  expect(moves[5].size).toBe(1);

  expect(moves[6].from).toBe(table.tableauPiles[2]);
  expect(moves[6].to).toBe(table.tableauPiles[3]);
  expect(moves[6].size).toBe(1);

  expect(moves[7].from).toBe(table.tableauPiles[4]);
  expect(moves[7].to).toBe(table.tableauPiles[1]);
  expect(moves[7].size).toBe(1);

  expect(moves[8].from).toBe(table.tableauPiles[4]);
  expect(moves[8].to).toBe(table.tableauPiles[3]);
  expect(moves[8].size).toBe(1);
});


/*
test('Table save steps and recover it', () => {
  const table = new Table({
    numberOfTableauPiles: 4,
    numberOfDrawPiles: 2,
    cards: Array.from({length: 1 * 13 * 4}).map((_, index) => new Card({
      suit: Suit.Club,
      rank: 13 - index % 13,
      isFaceUp: false
    }))
  });

  table.startGame();

  console.log(table.toString());

  table.moveCardBetweenTableauPiles({
    from: table.tableauPiles[0],
    to: table.tableauPiles[1],
    size: 1
  });

  table.moveCardBetweenTableauPiles({
    from: table.tableauPiles[1],
    to: table.tableauPiles[2],
    size: 2
  });

  table.dealCardsFromDrawPile();

  table.moveCardBetweenTableauPiles({
    from: table.tableauPiles[2],
    to: table.tableauPiles[3],
    size: 1
  });

  expect(table.tableauPiles[0].frontCard?.rank).toBe(10);
  expect(table.tableauPiles[0].cards.length).toBe(11);
  expect(table.tableauPiles[1].frontCard?.rank).toBe(11);
  expect(table.tableauPiles[1].cards.length).toBe(11);
  expect(table.tableauPiles[2].frontCard?.rank).toBe(2);
  expect(table.tableauPiles[2].cards.length).toBe(13);
  expect(table.tableauPiles[3].frontCard?.rank).toBe(12);
  expect(table.tableauPiles[3].cards.length).toBe(13);
  expect(table.drawPiles[0].cards.length).toBe(4);
  expect(table.drawPiles[1].cards.length).toBe(0);

  // console.log(table.steps);
  table.reproduce();

});
*/
