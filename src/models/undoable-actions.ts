import {Card} from './card';
import {Pile} from './pile';

export const FACE_UP_CARD = 'FACE_UP_CARD';
export const MOVE_CARD = 'MOVE_CARD';
export const PAUSE = 'PAUSE';

interface FaceUpAction {
  type: typeof FACE_UP_CARD,
  card: Card
}

interface MoveCardAction {
  type: typeof MOVE_CARD,
  from:Pile,
  to:Pile,
  size:number
}

interface PauseAction {
  type: typeof PAUSE
}

export type UndoableAction = FaceUpAction | MoveCardAction | PauseAction;

export class UndoableActionHistory
{
  private _actions:UndoableAction[] = [];

  add (action:UndoableAction)
  {
    this._actions = [...this._actions, action];
  }

  remove ()
  {
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
}
