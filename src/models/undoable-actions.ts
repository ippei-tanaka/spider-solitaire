import {Card} from './card';
import {Pile} from './pile';
import {Emitter} from '../event-emitter';

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

type UndoableActionHistoryEvents = {
  ADD: UndoableAction,
  REMOVE: UndoableAction
};

export type UndoableAction = FaceUpAction | MoveCardAction | PauseAction;

export class UndoableActionHistory
{
  private _actions:UndoableAction[] = [];
  private _emitter:Emitter<UndoableActionHistoryEvents> = new Emitter<UndoableActionHistoryEvents>();

  add (action:UndoableAction)
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

  onAdd (callback: (action:UndoableAction) => void)
  {
    this._emitter.on('ADD', callback);
  }

  onRemove (callback: (action:UndoableAction) => void)
  {
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
}
