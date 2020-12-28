import {Emitter} from '../event-emitter';
import {Pile} from '../models/pile';
import {Table} from '../models/table';

interface TableEvents {
  MOVE_CARDS_BETWEEN_PILES: {
    from:Pile,
    to:Pile,
    size:number
  }
}

export class TableWithEvent extends Table {

  private _emitter: Emitter<TableEvents> = new Emitter<TableEvents>();

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
}
