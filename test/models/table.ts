import {Table} from '../../src/models/table';
import {Card, Suit} from '../../src/models/card';
import {createCards} from '../../src/models/create-cards';

test('Table settings', () => {
  const table = new Table({
    numberOfTableauPiles: 10,
    numberOfDrawPiles: 5,
    cards: createCards({
      numberOfSuitStacks: 8,
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
      numberOfSuitStacks: 8,
      numberOfSuits: 4
    })
  });

  expect(table.deckPile.cards.length).toBe(104);

  table.setUpInitialCards();

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
      numberOfSuitStacks: 8,
      numberOfSuits: 4
    })
  });

  table.setUpInitialCards();

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

  table.setUpInitialCards();

  expect(table.tableauPiles[0].cards.length).toBe(6);
  expect(table.tableauPiles[1].cards.length).toBe(6);

  table.moveCardBetweenTableauPiles({
    fromId: table.tableauPiles[1].id,
    toId: table.tableauPiles[0].id,
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

  table.setUpInitialCards();

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
    fromId: table.tableauPiles[1].id,
    toId: table.tableauPiles[0].id,
    size: 15
  })).toThrow();

  expect(table.tableauPiles[0].cards.length).toBe(13);
  expect(table.tableauPiles[1].cards.length).toBe(2);
  expect(table.discardPiles[0].cards.length).toBe(0);

  table.moveCardBetweenTableauPiles({
    fromId: table.tableauPiles[1].id,
    toId: table.tableauPiles[0].id,
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

  table.setUpInitialCards();

  expect(table.tableauPiles[0].cards.length).toBe(17);
  expect(table.tableauPiles[1].cards.length).toBe(16);
  expect(table.tableauPiles[2].cards.length).toBe(16);

  table.moveCardBetweenTableauPiles({
    fromId: table.tableauPiles[1].id,
    toId: table.tableauPiles[2].id,
    size: 1
  });

  expect(table.tableauPiles[0].cards.length).toBe(17);
  expect(table.tableauPiles[1].cards.length).toBe(15);
  expect(table.tableauPiles[2].cards.length).toBe(17);

  table.moveCardBetweenTableauPiles({
    fromId: table.tableauPiles[2].id,
    toId: table.tableauPiles[0].id,
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

  table.setUpInitialCards();

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

  table.dealCardsFromDrawPile();
  table.dealCardsFromDrawPile();
  table.undo();
  table.dealCardsFromDrawPile();
  table.undo();

  expect(table.drawPiles[0].cards.length).toBe(2);
  expect(table.drawPiles[1].cards.length).toBe(0);
  expect(table.tableauPiles[0].cards.length).toBe(25);
  expect(table.tableauPiles[1].cards.length).toBe(25);
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

  table.setUpInitialCards();

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
    fromId: table.tableauPiles[1].id,
    toId: table.tableauPiles[0].id,
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

  table.setUpInitialCards();

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
    fromId: table.tableauPiles[1].id,
    toId: table.tableauPiles[0].id,
    size: 1
  });

  expect(table.isClear).toBe(true);
});



test('Table hints', () => {
  const table = new Table({
    numberOfTableauPiles: 5,
    numberOfDrawPiles: 0,
    cards: Array.from({length: 1 * 13 * 4}).map(() => new Card({
      suit: Suit.Club,
      rank: 1,
      isFaceUp: true
    }))
  });

  table.setUpInitialCards();

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

  const moves = table.getHints();

  expect(moves.length).toBe(7);

  expect(moves[0].fromId).toBe(table.tableauPiles[0].id);
  expect(moves[0].toId).toBe(table.tableauPiles[1].id);
  expect(moves[0].size).toBe(2);

  expect(moves[1].fromId).toBe(table.tableauPiles[0].id);
  expect(moves[1].toId).toBe(table.tableauPiles[3].id);
  expect(moves[1].size).toBe(2);

  expect(moves[2].fromId).toBe(table.tableauPiles[0].id);
  expect(moves[2].toId).toBe(table.tableauPiles[4].id);
  expect(moves[2].size).toBe(1);

  expect(moves[3].fromId).toBe(table.tableauPiles[1].id);
  expect(moves[3].toId).toBe(table.tableauPiles[2].id);
  expect(moves[3].size).toBe(1);

  expect(moves[4].fromId).toBe(table.tableauPiles[2].id);
  expect(moves[4].toId).toBe(table.tableauPiles[3].id);
  expect(moves[4].size).toBe(1);

  expect(moves[5].fromId).toBe(table.tableauPiles[4].id);
  expect(moves[5].toId).toBe(table.tableauPiles[1].id);
  expect(moves[5].size).toBe(1);

  expect(moves[6].fromId).toBe(table.tableauPiles[4].id);
  expect(moves[6].toId).toBe(table.tableauPiles[3].id);
  expect(moves[6].size).toBe(1);
});


test('Table takes steps and recovers them', () => {

  const cards = Array.from({length: 1 * 13 * 4}).map((_, index) => new Card({
    suit: Suit.Club,
    rank: 13 - index % 13,
    isFaceUp: false
  }));

  const table = new Table({
    numberOfTableauPiles: 4,
    numberOfDrawPiles: 2,
    cards: [...cards]
  });

  table.setUpInitialCards();

  table.moveCardBetweenTableauPiles({
    fromId: table.tableauPiles[0].id,
    toId: table.tableauPiles[1].id,
    size: 1
  });

  expect(table.tableauPiles[0].frontCard?.rank).toBe(11);
  expect(table.tableauPiles[0].cards.length).toBe(10);
  expect(table.tableauPiles[1].frontCard?.rank).toBe(2);
  expect(table.tableauPiles[1].cards.length).toBe(12);
  expect(table.tableauPiles[2].frontCard?.rank).toBe(4);
  expect(table.tableauPiles[2].cards.length).toBe(11);
  expect(table.tableauPiles[3].frontCard?.rank).toBe(5);
  expect(table.tableauPiles[3].cards.length).toBe(11);
  expect(table.drawPiles[0].cards.length).toBe(4);
  expect(table.drawPiles[1].cards.length).toBe(4);

  table.moveCardBetweenTableauPiles({
    fromId: table.tableauPiles[1].id,
    toId: table.tableauPiles[2].id,
    size: 2
  });

  table.dealCardsFromDrawPile();

  table.moveCardBetweenTableauPiles({
    fromId: table.tableauPiles[2].id,
    toId: table.tableauPiles[3].id,
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

  const table2 = new Table({
    numberOfTableauPiles: 4,
    numberOfDrawPiles: 2,
    cards: [...cards],
    actionHistory: table.actionHistory
  });

  table2.setUpInitialCards();

  expect(table2.tableauPiles[0].frontCard?.rank).toBe(10);
  expect(table2.tableauPiles[0].cards.length).toBe(11);
  expect(table2.tableauPiles[1].frontCard?.rank).toBe(11);
  expect(table2.tableauPiles[1].cards.length).toBe(11);
  expect(table2.tableauPiles[2].frontCard?.rank).toBe(2);
  expect(table2.tableauPiles[2].cards.length).toBe(13);
  expect(table2.tableauPiles[3].frontCard?.rank).toBe(12);
  expect(table2.tableauPiles[3].cards.length).toBe(13);
  expect(table2.drawPiles[0].cards.length).toBe(4);
  expect(table2.drawPiles[1].cards.length).toBe(0);

  table2.undo();
  table2.undo();
  table2.undo();

  expect(table2.tableauPiles[0].frontCard?.rank).toBe(11);
  expect(table2.tableauPiles[0].cards.length).toBe(10);
  expect(table2.tableauPiles[1].frontCard?.rank).toBe(2);
  expect(table2.tableauPiles[1].cards.length).toBe(12);
  expect(table2.tableauPiles[2].frontCard?.rank).toBe(4);
  expect(table2.tableauPiles[2].cards.length).toBe(11);
  expect(table2.tableauPiles[3].frontCard?.rank).toBe(5);
  expect(table2.tableauPiles[3].cards.length).toBe(11);
  expect(table2.drawPiles[0].cards.length).toBe(4);
  expect(table2.drawPiles[1].cards.length).toBe(4);
});
