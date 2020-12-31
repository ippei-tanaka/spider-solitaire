import Phaser from "phaser";
import {Button} from '../game-objects/button';
import {BACKGROUND_COLOR} from '../settings';

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
      BACKGROUND_COLOR,
      0.8
    );
    this.children.add(bg);

    const backToGameButton = new Button({
      scene: this,
      x: 0,
      y: 0,
      label: 'Back to Game'
    });
    backToGameButton.x = stageWidth / 2;
    backToGameButton.y = stageHeight / 2 - 50;
    backToGameButton.on('pointerup', () => {
      this.scene.resume('main');
      this.scene.stop();
    });
    this.children.add(backToGameButton);

    const startOverButton = new Button({
      scene: this,
      x: 0,
      y: 0,
      label: 'Quit and Start New Game'
    });
    startOverButton.x = stageWidth / 2;
    startOverButton.y = stageHeight / 2 + 50;
    startOverButton.on('pointerup', () => {
      localStorage.removeItem('seed');
      localStorage.removeItem('actions');
      localStorage.removeItem('game-mode');
      this.scene.stop('main');
      this.scene.start('boot');
    });
    this.children.add(startOverButton);

  }

}
