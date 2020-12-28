import Phaser from "phaser";

const {
  Text,
  Container,
  Rectangle
} = Phaser.GameObjects;

export class Button extends Container
{
  private _disabled:boolean = false;

  constructor ({
    scene,
    x,
    y,
    label
  }:{
    scene:Phaser.Scene,
    x:number,
    y:number,
    label:string
  })
  {
    super(scene, x, y);
    this.render(label);
  }

  private render (label:string)
  {
    const suitText = new Text(this.scene, 0, 0, label,  {
      fontSize: "21px",
      color: '#000000',
      fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'
    });

    const bg = new Rectangle(this.scene, 0, 0,
      suitText.width + 30,
      suitText.height + 20);
    bg.setFillStyle(0xffffff, 1);
    bg.setStrokeStyle(2, 0x000000);
    this.add(bg);

    suitText.x -= suitText.width / 2;
    suitText.y -= suitText.height / 2;
    this.add(suitText);

    this.setSize(bg.width, bg.height);
    this.setInteractive();

    this.on('pointerover', () => {
      bg.setStrokeStyle(2, 0xff0000);
    });

    this.on('pointerout', () => {
      bg.setStrokeStyle(2, 0x000000);
    });
  }

  disable ()
  {
    this._disabled = true;
    this.setAlpha(0.5);
    this.disableInteractive();
  }

  enable ()
  {
    this._disabled = false;
    this.setAlpha(1);
    this.setInteractive();
  }

  get isDisabled ()
  {
    return this._disabled;
  }
}
