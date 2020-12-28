import {Card} from '../models/card';
import {Emitter} from '../event-emitter';

interface CardEvents {
  FLIP_OVER_CARD: {
    card: Card
  }
}

export class CardWithEvent extends Card
{
  private _emitter: Emitter<CardEvents> = new Emitter<CardEvents>();

  faceUp ()
  {
    super.faceUp();
    this._emitter.emit('FLIP_OVER_CARD', {
      card: this
    });
  }

  faceDown ()
  {
    super.faceDown();
    this._emitter.emit('FLIP_OVER_CARD', {
      card: this
    });
  }

  flipOver ()
  {
    super.flipOver();
    this._emitter.emit('FLIP_OVER_CARD', {
      card: this
    });
  }

  onFlipOver (callback:({card}:{card:Card}) => void)
  {
    this._emitter.on('FLIP_OVER_CARD', callback);
  }
}
