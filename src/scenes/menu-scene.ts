import Phaser from "phaser";
import {Button} from '../game-objects/button';

const Rectangle = Phaser.GameObjects.Rectangle;
const Text = Phaser.GameObjects.Text;

export default class MenuScene extends Phaser.Scene
{
  constructor () {
    super('menu');
  }

  create ()
  {
    const stageWidth = this.sys.game.canvas.width;
    const stageHeight = this.sys.game.canvas.height;
    const bg = new Rectangle(
      this,
      stageWidth / 2,
      stageHeight / 2,
      stageWidth,
      stageHeight,
      0xf0f0f0,
      0.8
    );
    this.children.add(bg);

    // const text = new Text(
    //   this,
    //   0,
    //   0,
    //   'Congratulations!',
    //   {
    //     fontSize: "50px",
    //     color: '#ff00dd',
    //     fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'
    //   }
    // );
    // text.x = stageWidth / 2 - text.width / 2;
    // text.y = stageHeight / 2 - text.height / 2 - 20;
    // this.children.add(text);

    const backButton = new Button({
      scene: this,
      x: 0,
      y: 0,
      label: 'Back'
    });
    backButton.x = stageWidth / 2 - 80;
    backButton.y = stageHeight / 2 + 50;
    backButton.on('pointerdown', () => {
      this.scene.resume('main');
      this.scene.stop();
    });
    this.children.add(backButton);

    const startOverButton = new Button({
      scene: this,
      x: 0,
      y: 0,
      label: 'Start Over'
    });
    startOverButton.x = stageWidth / 2 + 50;
    startOverButton.y = stageHeight / 2 + 50;
    startOverButton.on('pointerdown', () => {
      localStorage.removeItem('seed');
      localStorage.removeItem('actions');
      this.scene.start('main');
    });
    this.children.add(startOverButton);
  }

}
