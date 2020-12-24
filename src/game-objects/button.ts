import Phaser from "phaser";

const {
  Text,
  Container
} = Phaser.GameObjects;

export class Button extends Container
{
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
      fontSize: "35px",
      color: '#000000',
      fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'
    });
    suitText.x -= suitText.width / 2;
    suitText.y -= suitText.height / 2;
    this.add(suitText);
    this.setSize(suitText.width, suitText.height);
    this.setInteractive();
  }

}
