import Phaser from "phaser";
import {Button} from '../game-objects/button';

export default class GameOverScene extends Phaser.Scene
{
  constructor () {
    super('gameover');
  }

  init ()
  {
    const bg = new Phaser.GameObjects.Rectangle(this, 500, 400, 1000, 800, 0xf0f0f0, 0.6);
    this.children.add(bg);
  }

  create ()
  {


    const text = new Phaser.GameObjects.Text(
      this,
      300,
      250,
      'Congratulations!',
      {
        fontSize: "50px",
        color: '#ff00dd',
        fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'
      }
    );
    this.children.add(text);

    const startButton = new Button({
      scene: this,
      x: 500,
      y: 350,
      label: 'START OVER'
    });
    startButton.on('pointerdown', () => {
      this.scene.start('main');
    });
    this.children.add(startButton);
  }

}
