import {Emitter} from '../event-emitter';
import {Pile} from '../models/pile';
import {Table, TableSettings} from '../models/table';

interface TableEvents {
  MOVE_CARDS_BETWEEN_PILES: {
    from:Pile,
    to:Pile,
    size:number
  },
  ACTION_HAPPEN : undefined
}

export class TableWithEvent extends Table {

  private _emitter: Emitter<TableEvents> = new Emitter<TableEvents>();

  constructor (settings: TableSettings)
  {
    super(settings);
    this._actionHistory.onAdd(() => {
      this._emitter.emit('ACTION_HAPPEN', undefined);
    });
    this._actionHistory.onRemove(() => {
      this._emitter.emit('ACTION_HAPPEN', undefined);
    })
  }

  protected _moveCardBetweenPiles
    ({from, to, size}:{from:Pile, to:Pile, size:number})
  {
    const cards = super._moveCardBetweenPiles({from, to, size});
    this._emitter.emit('MOVE_CARDS_BETWEEN_PILES', {from, to, size});
    return cards;
  }

  onMoveCardsBetweenPiles (callback:
    ({from, to, size}:{from:Pile, to:Pile, size:number}) => void)
  {
    this._emitter.on('MOVE_CARDS_BETWEEN_PILES', callback);
  }

  onActionHappen (callback: () => void)
  {
    this._emitter.on('ACTION_HAPPEN', callback);
  }
}
