// import {Table} from '../models/table';
import {Pile} from '../models/pile';
import {Card} from '../models/card';

export type ModelEvents = {
  MOVE_CARDS_BETWEEN_PILES: {
    to: Pile,
    from: Pile,
    size: number
  },
  FLIP_OVER_CARD: {
    card: Card
  }
}
