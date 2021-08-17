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

export type Action = FaceUpAction | MoveCardAction | PauseAction | MoveCardBetweenTableauPilesAction;

export class ActionHistory
{
  private _actions:Action[];

  constructor (actions:Action[] = [])
  {
    this._actions = actions;
  }

  add (action:Action)
  {
    this._actions = [...this._actions, action];
  }

  remove ()
  {
    const action = this._actions.slice(-1)[0];
    this._actions = this._actions.slice(0, -1);
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
