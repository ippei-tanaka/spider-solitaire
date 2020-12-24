import {emitter} from './emitter';
import {Pile} from '../models/pile';
import {Table} from '../models/table';

export class TableWithEvent extends Table {

  protected _moveCardBetweenPiles ({from, to, size}:{from:Pile, to:Pile, size:number})
  {
    const cards = super._moveCardBetweenPiles({from, to, size});
    emitter.emit('MOVE_CARDS_BETWEEN_PILES', {from, to, size});
    return cards;
  }

}
