type GameModes = {
  [key:string]: GameMode
}

type GameMode = {
  numberOfTableauPiles: number,
  numberOfDrawPiles: number,
  numberOfSuitStacks: number,
  numberOfSuits: number
}

export const gameModes:GameModes = Object.freeze({
  'five-suits': {
    numberOfTableauPiles: 10,
    numberOfDrawPiles: 5,
    numberOfSuitStacks: 8,
    numberOfSuits: 5
  },
  'four-suits': {
    numberOfTableauPiles: 10,
    numberOfDrawPiles: 5,
    numberOfSuitStacks: 8,
    numberOfSuits: 4
  },
  'two-suits': {
    numberOfTableauPiles: 10,
    numberOfDrawPiles: 5,
    numberOfSuitStacks: 8,
    numberOfSuits: 2
  },
  'one-suits': {
    numberOfTableauPiles: 10,
    numberOfDrawPiles: 5,
    numberOfSuitStacks: 8,
    numberOfSuits: 1
  }
});
