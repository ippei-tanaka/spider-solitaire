import Phaser from "phaser";
import {Button} from '../game-objects/button';

export default class BootScene extends Phaser.Scene
{
  constructor () {
    super('boot');
  }

  create ()
  {
    const bg = new Phaser.GameObjects.Rectangle(this, 500, 400, 1000, 800, 0x555555, 1);
    this.children.add(bg);

    const startButton = new Button({
      scene: this,
      x: 500,
      y: 350,
      label: 'START'
    });
    startButton.on('pointerdown', () => this.scene.start('main'));
    this.children.add(startButton);
  }
}
