import {Pile} from '../../src/models/pile';
import {Card, Suit} from '../../src/models/card';

test('Pile creation', () => {
  const pile1 = new Pile();
  expect(pile1.cards.length).toBe(0);

  const pile2 = new Pile({cards: [
    new Card({suit: Suit.Club, rank: 1}),
    new Card({suit: Suit.Heart, rank: 2}),
    new Card({suit: Suit.Heart, rank: 4})
  ]});
  expect(pile2.cards.length).toBe(3);
});

test('Pile drawCards', () => {
  const pile1 = new Pile();
  const drawnCards1 = pile1.drawCards({size: 2});
  expect(drawnCards1.length).toBe(0);
  expect(pile1.cards.length).toBe(0);

  const pile2 = new Pile({cards: [
    new Card({suit: Suit.Club, rank: 1}),
    new Card({suit: Suit.Heart, rank: 2}),
    new Card({suit: Suit.Heart, rank: 4})
  ]});
  const drawnCards2 = pile2.drawCards({size: 2});
  expect(drawnCards2.length).toBe(2);
  expect(pile2.cards.length).toBe(1);

  const pile3 = new Pile({cards: [
    new Card({suit: Suit.Club, rank: 1}),
    new Card({suit: Suit.Heart, rank: 2}),
    new Card({suit: Suit.Heart, rank: 4})
  ]});
  const drawnCards3 = pile3.drawCards({size: 0});
  expect(drawnCards3.length).toBe(0);
  expect(pile3.cards.length).toBe(3);
});

test('Pile frontCard', () => {
  const pile1 = new Pile();
  expect(pile1.frontCard).toBeUndefined();

  const pile2 = new Pile({cards: [
    new Card({suit: Suit.Club, rank: 1}),
    new Card({suit: Suit.Heart, rank: 2}),
    new Card({suit: Suit.Heart, rank: 4})
  ]});
  expect((pile2.frontCard || {rank:0}).rank).toBe(4);
});

test('Pile lastCard', () => {
  const pile1 = new Pile();
  expect(pile1.lastCard).toBeUndefined();

  const pile2 = new Pile({cards: [
    new Card({suit: Suit.Club, rank: 1}),
    new Card({suit: Suit.Heart, rank: 2}),
    new Card({suit: Suit.Heart, rank: 4})
  ]});
  expect((pile2.lastCard || {rank:0}).rank).toBe(1);
});


test('Pile getFrontCards', () => {
  const pile1 = new Pile();
  const frontCards1 = pile1.getFrontCards({size: 2});
  expect(frontCards1.length).toBe(0);
  expect(pile1.cards.length).toBe(0);

  const pile2 = new Pile({cards: [
    new Card({suit: Suit.Club, rank: 1}),
    new Card({suit: Suit.Heart, rank: 2}),
    new Card({suit: Suit.Heart, rank: 4})
  ]});
  const frontCards2 = pile2.getFrontCards({size: 2});
  expect(frontCards2.length).toBe(2);
  expect(pile2.cards.length).toBe(3);

  const pile3 = new Pile({cards: [
    new Card({suit: Suit.Club, rank: 1}),
    new Card({suit: Suit.Heart, rank: 2}),
    new Card({suit: Suit.Heart, rank: 4})
  ]});
  const frontCards3 = pile3.getFrontCards({size: 0});
  expect(frontCards3.length).toBe(0);
  expect(pile3.cards.length).toBe(3);
});


test('Pile placeCards', () => {
  const pile1 = new Pile();
  pile1.placeCards({cards:[]});
  expect(pile1.cards.length).toBe(0);

  const pile2 = new Pile({cards: [
    new Card({suit: Suit.Club, rank: 1}),
    new Card({suit: Suit.Heart, rank: 2}),
    new Card({suit: Suit.Heart, rank: 4})
  ]});
  pile2.placeCards({cards: [
    new Card({suit: Suit.Club, rank: 1})
  ]});
  expect(pile2.cards.length).toBe(4);
});


test('Pile checkIfCardsAreDescending', () => {
  expect(Pile.checkIfCardsAreDescending({
    cards: []
  })).toBe(true);

  expect(Pile.checkIfCardsAreDescending({
    cards: [
      new Card({suit:Suit.Club, rank: 1}),
      new Card({suit:Suit.Club, rank: 2}),
      new Card({suit:Suit.Club, rank: 3}),
    ]
  })).toBe(false);

  expect(Pile.checkIfCardsAreDescending({
    cards: [
      new Card({suit:Suit.Club, rank: 1}),
      new Card({suit:Suit.Club, rank: 4}),
      new Card({suit:Suit.Club, rank: 3}),
    ]
  })).toBe(false);

  expect(Pile.checkIfCardsAreDescending({
    cards: [
      new Card({suit:Suit.Diamond, rank: 3}),
      new Card({suit:Suit.Club, rank: 2}),
      new Card({suit:Suit.Club, rank: 1}),
    ]
  })).toBe(true);

  expect(Pile.checkIfCardsAreDescending({
    cards: [
      new Card({suit:Suit.Diamond, rank: 3}),
      new Card({suit:Suit.Club, rank: 2}),
      new Card({suit:Suit.Club, rank: 1}),
    ],
    inSuit: true
  })).toBe(false);

  expect(Pile.checkIfCardsAreDescending({
    cards: [
      new Card({suit:Suit.Club, rank: 3}),
      new Card({suit:Suit.Club, rank: 2}),
      new Card({suit:Suit.Club, rank: 1}),
    ],
    inSuit: true
  })).toBe(true);

  expect(Pile.checkIfCardsAreDescending({
    cards: [
      new Card({suit:Suit.Club, rank: 3, isFaceUp: true}),
      new Card({suit:Suit.Club, rank: 2, isFaceUp: true}),
      new Card({suit:Suit.Club, rank: 1, isFaceUp: true}),
    ],
    inSuit: true,
    faceUp: true
  })).toBe(true);

  expect(Pile.checkIfCardsAreDescending({
    cards: [
      new Card({suit:Suit.Club, rank: 3, isFaceUp: true}),
      new Card({suit:Suit.Club, rank: 2, isFaceUp: false}),
      new Card({suit:Suit.Club, rank: 1, isFaceUp: true}),
    ],
    inSuit: true,
    faceUp: true
  })).toBe(false);

  expect(Pile.checkIfCardsAreDescending({
    cards: [
      new Card({suit:Suit.Club, rank: 3, isFaceUp: false}),
      new Card({suit:Suit.Club, rank: 2, isFaceUp: true}),
      new Card({suit:Suit.Club, rank: 1, isFaceUp: true}),
    ],
    inSuit: true,
    faceUp: true
  })).toBe(false);
});


test('Pile checkIfFrontCardsComplete', () => {
  const pile1 = new Pile();
  expect(pile1.checkIfFrontCardsComplete()).toBe(false);
  expect(pile1.cards.length).toBe(0);

  const pile2 = new Pile({cards: [
    new Card({suit: Suit.Club, rank: 1}),
    new Card({suit: Suit.Heart, rank: 2}),
    new Card({suit: Suit.Heart, rank: 4})
  ]});
  expect(pile2.checkIfFrontCardsComplete()).toBe(false);
  expect(pile2.cards.length).toBe(3);

  const pile3 = new Pile({cards: [new Card({
    suit:Suit.Heart,
    rank: 13,
    isFaceUp: true
  }), ...Array.from({length: 13}).map((_, index) => new Card({
    suit:Suit.Club,
    rank: 13 - index,
    isFaceUp: true
  }))]});
  expect(pile3.cards.length).toBe(14);
  expect(pile3.checkIfFrontCardsComplete()).toBe(true);
});


test('Pile getDescendingFrontCards', () => {
  const pile1 = new Pile();
  expect(Pile.getDescendingFrontCards({cards:pile1.cards}).length).toBe(0);

  const pile2 = new Pile({cards: [
    new Card({suit: Suit.Club, rank: 6}),
    new Card({suit: Suit.Club, rank: 4}),
    new Card({suit: Suit.Heart, rank: 3}),
    new Card({suit: Suit.Heart, rank: 2, isFaceUp: true}),
    new Card({suit: Suit.Heart, rank: 1, isFaceUp: true})
  ]});
  expect(Pile.getDescendingFrontCards({cards:pile2.cards}).length).toBe(4);
  expect(Pile.getDescendingFrontCards({cards:pile2.cards, inSuit: true}).length).toBe(3);
  expect(Pile.getDescendingFrontCards({cards:pile2.cards, faceUp: true}).length).toBe(2);
  expect(Pile.getDescendingFrontCards({cards:pile2.cards, inSuit: true, faceUp: true}).length).toBe(2);
  expect(Pile.getDescendingFrontCards({cards:pile2.cards, inSuit: true, faceUp: true})[0].rank).toBe(2);

  const pile3 = new Pile({cards: [
    new Card({suit: Suit.Club, rank: 6}),
    new Card({suit: Suit.Club, rank: 4}),
    new Card({suit: Suit.Heart, rank: 3}),
    new Card({suit: Suit.Heart, rank: 2, isFaceUp: true}),
    new Card({suit: Suit.Heart, rank: 1})
  ]});
  expect(Pile.getDescendingFrontCards({cards:pile3.cards, faceUp: true}).length).toBe(0);
  expect(Pile.getDescendingFrontCards({cards:pile3.cards, inSuit: true, faceUp: true}).length).toBe(0);
});
