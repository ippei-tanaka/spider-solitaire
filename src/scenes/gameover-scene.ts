import Phaser from "phaser";
import {Button} from '../game-objects/button';

const Rectangle = Phaser.GameObjects.Rectangle;
const Text = Phaser.GameObjects.Text;

export default class GameOverScene extends Phaser.Scene
{
  constructor () {
    super('gameover');
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

    const text = new Text(
      this,
      0,
      0,
      'No More Moves!',
      {
        fontSize: "50px",
        color: '#000000',
        fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'
      }
    );
    text.x = stageWidth / 2 - text.width / 2;
    text.y = stageHeight / 2 - text.height / 2 - 20;
    this.children.add(text);

    const startButton = new Button({
      scene: this,
      x: 0,
      y: 0,
      label: 'Start Over'
    });
    console.log(startButton.width);
    startButton.x = stageWidth / 2;
    startButton.y = stageHeight / 2 + 50;
    startButton.on('pointerup', () => {
      this.scene.start('main');
    });
    this.children.add(startButton);
  }

}
