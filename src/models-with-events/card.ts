import {emitter} from './emitter';
import {Card} from '../models/card';

export class CardWithEvent extends Card
{
  faceUp ()
  {
    super.faceUp();
    emitter.emit('FLIP_OVER_CARD', {
      card: this
    });
  }

  faceDown ()
  {
    super.faceDown();
    emitter.emit('FLIP_OVER_CARD', {
      card: this
    });
  }

  flipOver ()
  {
    super.flipOver();
    emitter.emit('FLIP_OVER_CARD', {
      card: this
    });
  }
}
