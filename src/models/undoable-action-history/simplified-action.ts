import {
  FACE_UP_CARD,
  MOVE_CARD,
  MOVE_CARD_BETWEEN_TABLEAU_PILES,
  PAUSE,
  UndoableAction
} from './';
import {Card} from '../card';
import {Pile} from '../pile';

export type SimplifiedUndoableAction = {
  t: string,
  c?: string
  f?: string,
  o?: string,
  s?: string,
}

export const simplify = (action:UndoableAction):SimplifiedUndoableAction => {
  switch (action.type)
  {
    case FACE_UP_CARD:
      return {
        t: "F",
        c: action.card.id
      };
    case MOVE_CARD:
      return {
        t: "M",
        f: action.from.name,
        o: action.to.name,
        s: action.size + '',
      };
    case MOVE_CARD_BETWEEN_TABLEAU_PILES:
      return {
        t: "T",
        f: action.from.name,
        o: action.to.name,
        s: action.size + '',
      };
    default:
      return {
        t: "P",
      }
  }
}

export const recover = ({
  simplifiedUndoableAction:action,
  cardFinder,
  pileFinder
}:{
  simplifiedUndoableAction:SimplifiedUndoableAction,
  cardFinder: (name:string) => Card,
  pileFinder: (name:string) => Pile,
}):UndoableAction => {
  switch (action.t)
  {
    case "F":
      return {
        type: FACE_UP_CARD,
        card: cardFinder(action.c || '')
      };
    case "M":
      return {
        type: MOVE_CARD,
        from: pileFinder(action.f || ''),
        to: pileFinder(action.o || ''),
        size: parseInt(action.s || ''),
      };
    case "T":
      return {
        type: MOVE_CARD_BETWEEN_TABLEAU_PILES,
        from: pileFinder(action.f || ''),
        to: pileFinder(action.o || ''),
        size: parseInt(action.s || ''),
      };
    case "P":
    default:
      return {
        type: PAUSE
      }
  }
}
