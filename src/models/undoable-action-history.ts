// import {Emitter} from '../event-emitter';

export const FACE_UP_CARD = 'FACE_UP_CARD';
export const MOVE_CARD = 'MOVE_CARD';
export const MOVE_CARD_BETWEEN_TABLEAU_PILES = 'MOVE_CARD_BETWEEN_TABLEAU_PILES';
export const PAUSE = 'PAUSE';

interface FaceUpAction {
  type: typeof FACE_UP_CARD,
  cardId: string
}

interface MoveCardAction {
  type: typeof MOVE_CARD,
  fromId:string,
  toId:string,
  size:number
}

interface MoveCardBetweenTableauPilesAction {
  type: typeof MOVE_CARD_BETWEEN_TABLEAU_PILES,
  fromId:string,
  toId:string,
  size:number
}

interface PauseAction {
  type: typeof PAUSE
}

// type UndoableActionHistoryEvents = {
//   ADD: UndoableAction,
//   REMOVE: UndoableAction
// };

export type UndoableAction = FaceUpAction | MoveCardAction | PauseAction | MoveCardBetweenTableauPilesAction;

export class UndoableActionHistory
{
  private _actions:UndoableAction[];
  // private _emitter:Emitter<UndoableActionHistoryEvents> = new Emitter<UndoableActionHistoryEvents>();

  constructor (actions:UndoableAction[] = [])
  {
    this._actions = actions;
  }

  add (action:UndoableAction)
  {
    this._actions = [...this._actions, action];
    // this._emitter.emit('ADD', action);
  }

  remove ()
  {
    const action = this._actions.slice(-1)[0];
    this._actions = this._actions.slice(0, -1);
    // this._emitter.emit('REMOVE', action);
  }

  // onAdd (callback: (action:UndoableAction) => void)
  // {
  //   this._emitter.on('ADD', callback);
  // }

  // onRemove (callback: (action:UndoableAction) => void)
  // {
  //   this._emitter.on('REMOVE', callback);
  // }

  get latest ()
  {
    return this._actions.length === 0 ? undefined : this._actions[this._actions.length - 1];
  }

  get actions ()
  {
    return [...this._actions];
  }

  static serialize (history: UndoableActionHistory)
  {
    return JSON.stringify(history.actions);
  }

  static deserialize (actionString:string)
  {
    const objects = JSON.parse(actionString) as {
      type: string,
      cardId?: string
      fromId?: string,
      toId?: string,
      size?: string,
    }[];
    const actions = objects.map<UndoableAction>(object => {
      switch (object.type)
      {
        case "FACE_UP_CARD":
          return {
            type: FACE_UP_CARD,
            cardId: object.cardId || ''
          };
        case "MOVE_CARD":
          return {
            type: MOVE_CARD,
            fromId: object.fromId || '',
            toId: object.toId || '',
            size: parseInt(object.size || ''),
          };
        case "MOVE_CARD_BETWEEN_TABLEAU_PILES":
          return {
            type: MOVE_CARD_BETWEEN_TABLEAU_PILES,
            fromId: object.fromId || '',
            toId: object.toId || '',
            size: parseInt(object.size || ''),
          };
        case "PAUSE":
        default:
          return {
            type: PAUSE
          }
      }
    });
    return new UndoableActionHistory(actions);
  }
}
