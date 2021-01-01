import Phaser from "phaser";
import {Suit} from "../models/card";

const {
  Text,
  Rectangle,
  Container
} = Phaser.GameObjects;

const getSuitText = (suit:Suit) =>
{
  switch(suit) {
    case Suit.Spade:
    return '♠';
    case Suit.Club:
    return '♣';
    case Suit.Diamond:
    return '♦';
    case Suit.Heart:
    return '♥';
    case Suit.Star:
    return '★';
  }
}

const getSuitColor = (suit:Suit) =>
{
  switch(suit) {
    case Suit.Spade:
    case Suit.Club:
      return '#000000';
    case Suit.Diamond:
    case Suit.Heart:
      return '#ff0000';
    case Suit.Star:
      return '#0951f7';
  }
}

const getRankText = (rank:number) =>
{
  if (rank === 1) {
    return 'A';
  } else if (rank === 11) {
    return 'J';
  } else if (rank === 12) {
    return 'Q';
  } else if (rank === 13) {
    return 'K';
  } else {
    return rank.toString();
  }
}

export type CardGameObjectArgs = {
  scene:Phaser.Scene,
  x:number,
  y:number,
  suit:Suit,
  rank:number,
  isFaceUp?: boolean,
  name:string
};

export class CardGameObject extends Container
{
  private _frame:Phaser.GameObjects.Rectangle | undefined;
  private _back:Phaser.GameObjects.Container | undefined;
  private _rank:number;
  private _suit:Suit;
  private _isHighLighted:boolean = false;

  static WIDTH:number = 75;
  static HEIGHT:number = 110;

  constructor ({
    scene,
    x,
    y,
    suit,
    rank,
    isFaceUp,
    name
  }:CardGameObjectArgs)
  {
    super(scene, x, y);
    this.render(suit, rank);
    this.name = name;
    this._suit = suit;
    this._rank = rank;
    this.back.visible = !isFaceUp;
  }

  get suit ()
  {
    return this._suit;
  }

  get rank ()
  {
    return this._rank;
  }

  private get frame ()
  {
    if (!this._frame)
    {
      throw new Error();
    }
    return this._frame;
  }

  private get back ()
  {
    if (!this._back)
    {
      throw new Error();
    }
    return this._back;
  }

  private render (suit:Suit, rank:number)
  {
    const x = 0;
    const y = 0;
    const frame = new Rectangle(this.scene, x, y, CardGameObject.WIDTH, CardGameObject.HEIGHT, 0xffffff);
    frame.setStrokeStyle(2, 0x000000);
    this.add(frame);
    this._frame = frame;

    const rankText = new Text(this.scene, x - 36, y - 59,  getRankText(rank) + getSuitText(suit),  {
      fontSize: "32px",
      color: getSuitColor(suit),
      fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'
    });
    // rankText.x = rankText.x - rankText.width / 2;
    this.add(rankText);
    // this.setAlpha(0.3)

    // const suitText = new Text(this.scene, x - 14, y - 58, getSuitText(suit),  {
    //   fontSize: "25px",
    //   color: getSuitColor(suit),
    //   fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'
    // });
    // suitText.x = suitText.x - suitText.width / 2;
    // this.add(suitText);

    // const suitText = new Text(this.scene, x, y - 45, getSuitText(suit),  {
    //   fontSize: "45px",
    //   color: getSuitColor(suit),
    //   fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'
    // });
    // suitText.x = suitText.x - suitText.width / 2;
    // this.add(suitText);
    //
    // const rankText = new Text(this.scene, x, y - 2,  getRankText(rank),  {
    //   fontSize: "35px",
    //   color: getSuitColor(suit),
    //   fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'
    // });
    // rankText.x = rankText.x - rankText.width / 2;
    // this.add(rankText);

    this._back = new Container(this.scene, x, y);

    const backPattern = new Rectangle(this.scene, x, y, CardGameObject.WIDTH - 20, CardGameObject.HEIGHT - 20, 0xaaaaaa);
    backPattern.setStrokeStyle(3, 0xaaaaaa);
    const backWhite = new Rectangle(this.scene, x, y, CardGameObject.WIDTH - 2, CardGameObject.HEIGHT - 2, 0xffffff);
    this.back.add(backWhite);
    this.back.add(backPattern);
    this.add(this.back);

    this.setSize(CardGameObject.WIDTH, CardGameObject.HEIGHT);
    this.setInteractive({draggable: true});
  }

  flipOverWithAnimation (up:boolean, duration:number) {
    return new Promise<void>(resolve => {
      const timeline = this.scene.tweens.createTimeline();
      timeline.add({
        targets: this,
        props: {
          scaleX: 0,
        },
        duration: duration * 0.5,
        onComplete: () => {
          this.back.visible = !up;
        }
      });
      timeline.add({
        targets: this,
        props: {
          scaleX: 1,
        },
        duration: duration * 0.5,
        onComplete: () => {
          resolve();
        }
      });
      timeline.play();
    });
  }

  flipOver (up:boolean) {
    this.back.visible = !up;
  }

  get isFaceUp ()
  {
    return !this.back.visible;
  }

  addHighlight ()
  {
    this.frame.setStrokeStyle(2, 0xff0000);
    this._isHighLighted = true;
  }

  removeHighlight ()
  {
    this.frame.setStrokeStyle(2, 0x000000);
    this._isHighLighted = false;
  }

  get isHighLighted ()
  {
    return this._isHighLighted;
  }
}
