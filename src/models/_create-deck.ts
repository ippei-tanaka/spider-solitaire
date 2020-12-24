// import {Card, Suit} from './card';
// import {Pile} from './pile';
// // import {TableSettings} from './table-settings';
//
// const getRandomInteger = (max:number, min = 0) => {
//     min = Math.ceil(min);
//     max = Math.floor(max);
//     return Math.floor(Math.random() * (max - min + 1)) + min;
// }
//
// export const sliceIntoTwo = <T>({size, array}:{size:number, array:T[]}) => {
//   return [
//     array.slice(0, size),
//     array.slice(size)
//   ]
// }
//
// export const sliceIntoTwoRandomly = <T>({array}:{array:T[]}) => {
//   return sliceIntoTwo({
//     size: getRandomInteger(Math.max(array.length - 2, 1), 1),
//     array
//   });
// }
//
// const randomizeArray = (array:any[]) => {
//   const _array = [...array];
//   for (let i = _array.length - 1; i > 0; i--)
//   {
//       const j = Math.floor(Math.random() * (i + 1));
//       [_array[i], _array[j]] = [_array[j], _array[i]];
//   }
//   return _array;
// };
//
// export const createDeckCards = (settings:TableSettings) =>
// {
//   const tableauPiles:Card[][] = Array.from({length: settings.numberOfTableauPiles}).map(() => {
//     return [];
//   });
//
//   const discardedPiles:Card[][] = randomizeArray(Array.from({length: settings.numberOfDecksUsed}).map(() => {
//     return [
//       Array.from({length: 13}).map((_, index) => new Card({suit:Suit.Spade, rank: 13 - index,})),
//       Array.from({length: 13}).map((_, index) => new Card({suit:Suit.Club, rank: 13 - index,})),
//       Array.from({length: 13}).map((_, index) => new Card({suit:Suit.Diamond, rank: 13 - index,})),
//       Array.from({length: 13}).map((_, index) => new Card({suit:Suit.Heart, rank: 13 - index,}))
//     ];
//   }).reduce((p, c) => [...p, ...c], []));
//
//
//   for (let discardedPile of discardedPiles)
//   {
//     const index = getRandomInteger(tableauPiles.length - 1);
//     tableauPiles[index] = [...tableauPiles[index], ...discardedPile];
//
//     for (let i = 0; i < 10; i++)
//     {
//       let index1 = 0;
//       for (;;) {
//         index1 = getRandomInteger(tableauPiles.length - 1);
//         if (tableauPiles[index1].length > 0)
//           break;
//       }
//
//       let index2 = 0;
//       for (;;) {
//         index2 = getRandomInteger(tableauPiles.length - 1);
//         if (index1 !== index2)
//           break;
//       }
//
//       // console.log("t", tableauPiles[index1].map(c => c.toString()).join(' '));
//       const tableauPile = tableauPiles[index1];
//       // console.log("t1", tableauPile.map(c => c.toString()).join(' '));
//
//       // const descendingFrontCards = Pile.getDescendingFrontCards({
//       //   cards: tableauPile,
//       //   inSuit: true
//       // });
//       // console.log("d", descendingFrontCards.map(c => c.toString()).join(' '));
//
//       // const leftTableauPile = tableauPile.slice(0, -descendingFrontCards.length);
//       // // console.log("t2", tableauPile.map(c => c.toString()).join(' '));
//       //
//       // const slicedDescendingFrontCards = sliceIntoTwoRandomly({array: descendingFrontCards});
//       // // console.log("s", slicedDescendingFrontCards.map(p => p.map(c => c.toString()).join(' ')).join('\n'));
//       // // const sliced = sliceIntoTwoRandomly({array: tableauPiles[index1]});
//       //
//       // // console.log("s", sliced.map(p => p.map(c => c.toString()).join(' ')).join('\n'));
//       //
//       // // if (Pile.checkIfCardsAreDescending({
//       // //   cards: sliced[1],
//       // //   inSuit: true
//       // // }))
//       // // {
//       // tableauPiles[index1] = [...leftTableauPile, ...slicedDescendingFrontCards[0]];
//       // tableauPiles[index2] = [...tableauPiles[index2], ...slicedDescendingFrontCards[1]];
//       // }
//     }
//   }
//
//   // console.log(tableauPiles.map(p => p.map(c => c.toString()).join(' ')).join('\n'));
//   // console.log(tableauPiles.reduce((p, c) => p + c.length, 0));
//
//   return discardedPiles.reduce((prev, cur) => {
//     return [...prev, ...cur];
//   }, []);
// }
