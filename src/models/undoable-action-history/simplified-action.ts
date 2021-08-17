import {
  FACE_UP_CARD,
  MOVE_CARD,
  MOVE_CARD_BETWEEN_TABLEAU_PILES,
  PAUSE,
  UndoableAction
} from './';

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
        c: action.cardId
      };
    case MOVE_CARD:
      return {
        t: "M",
        f: action.fromId,
        o: action.toId,
        s: action.size + '',
      };
    case MOVE_CARD_BETWEEN_TABLEAU_PILES:
      return {
        t: "T",
        f: action.fromId,
        o: action.toId,
        s: action.size + '',
      };
    default:
      return {
        t: "P",
      }
  }
}

export const recover = (action:SimplifiedUndoableAction):UndoableAction => {
  switch (action.t)
  {
    case "F":
      return {
        type: FACE_UP_CARD,
        cardId: action.c || ''
      };
    case "M":
      return {
        type: MOVE_CARD,
        fromId: action.f || '',
        toId: action.o || '',
        size: parseInt(action.s || ''),
      };
    case "T":
      return {
        type: MOVE_CARD_BETWEEN_TABLEAU_PILES,
        fromId: action.f || '',
        toId: action.o || '',
        size: parseInt(action.s || ''),
      };
    case "P":
    default:
      return {
        type: PAUSE
      }
  }
}
