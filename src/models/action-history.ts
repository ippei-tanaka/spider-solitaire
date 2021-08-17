import {Emitter} from '../event-emitter';

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

type Action = FaceUpAction | MoveCardAction | PauseAction | MoveCardBetweenTableauPilesAction;

type SerializedAction = {
  type: string,
  cardId?: string
  fromId?: string,
  toId?: string,
  size?: string,
};

type ActionHistoryEvents = {
  ADD: Action,
  REMOVE: Action
};

export class ActionHistory
{
  private _actions:Action[];
  private _emitter:Emitter<ActionHistoryEvents> = new Emitter<ActionHistoryEvents>();
  
  constructor (actions:Action[] = [])
  {
    this._actions = actions;
  }

  add (action:Action)
  {
    this._actions = [...this._actions, action];
    this._emitter.emit('ADD', action);
  }

  remove ()
  {
    const action = this._actions.slice(-1)[0];
    this._actions = this._actions.slice(0, -1);
    this._emitter.emit('REMOVE', action);
  }

  on (callback: (action:Action) => void)
  {
    this._emitter.on('ADD', callback);
    this._emitter.on('REMOVE', callback);
  }

  get latest ()
  {
    return this._actions.length === 0 ? undefined : this._actions[this._actions.length - 1];
  }

  get actions ()
  {
    return [...this._actions];
  }

  static serialize (history: ActionHistory)
  {
    try {
      return JSON.stringify(history.actions);
    } catch (e) {
      console.error(e);
      return null;
    }
  }

  static deserialize (actionString:string)
  {
    if (!actionString)
    {
      return null;
    }

    let objects: SerializedAction[] = [];
    try {
      objects = JSON.parse(actionString) as SerializedAction[];
    } catch (e) {
      console.error(e);
      return null;
    }

    const actions = objects.map<Action>(object => {
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
    return new ActionHistory(actions);
  }
}
