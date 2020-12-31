import Phaser from "phaser";
import {Button} from '../game-objects/button';
import {BACKGROUND_COLOR} from '../settings';

const Rectangle = Phaser.GameObjects.Rectangle;
const Text = Phaser.GameObjects.Text;

export default class GameClearScene extends Phaser.Scene
{
  constructor () {
    super('gameclear');
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
      BACKGROUND_COLOR,
      0.8
    );
    this.children.add(bg);

    const text = new Text(
      this,
      0,
      0,
      'Congratulations!',
      {
        fontSize: "90px",
        color: '#ffffff',
        fontStyle: 'bold',
        fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'
      }
    );
    text.x = stageWidth / 2 - text.width / 2;
    text.y = stageHeight / 2 - text.height / 2 - 30;
    this.children.add(text);

    const startButton = new Button({
      scene: this,
      x: 0,
      y: 0,
      label: 'Start Over'
    });
    startButton.x = stageWidth / 2;
    startButton.y = stageHeight / 2 + 70;
    startButton.on('pointerdown', () => {
      this.scene.start('main');
    });
    this.children.add(startButton);
  }

}
