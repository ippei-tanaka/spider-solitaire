import {Card, Suit} from '../../src/models/card';

test('Card creation', () => {
  const card = new Card({
    suit: Suit.Club,
    rank: 1,
    isFaceUp: true
  });
  expect(card.suit).toBe(Suit.Club);
  expect(card.rank).toBe(1);
  expect(card.isFaceUp).toBe(true);
});

test('Card rank', () => {
  expect(() => {
    new Card({
      suit: Suit.Club,
      rank: 14,
      isFaceUp: true
    });
  }).toThrow();
});
