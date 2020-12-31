import Phaser from "phaser";
import {Button} from '../game-objects/button';
import {BACKGROUND_COLOR} from '../settings';
import {gameModes} from '../models/game-modes';

const Rectangle = Phaser.GameObjects.Rectangle;
const Text = Phaser.GameObjects.Text;

export default class BootScene extends Phaser.Scene
{
  constructor () {
    super('boot');
  }

  create ()
  {
    const gameModeKey = localStorage.getItem('game-mode');
    if (gameModeKey && gameModes[gameModeKey])
    {
      this.scene.start('main');
      return;
    }

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
      'Spider Solitaire',
      {
        fontSize: "50px",
        color: '#000000',
        fontFamily: 'Georgia, "Goudy Bookletter 1911", Times, serif'
      }
    );
    text.x = stageWidth / 2 - text.width / 2 - 30;
    text.y = stageHeight / 2 - text.height / 2 - 120;
    this.children.add(text);

    const oneSuitButton = new Button({
      scene: this,
      x: 0,
      y: 0,
      label: '1 Suit'
    });
    oneSuitButton.x = stageWidth / 2 - oneSuitButton.width / 2 - 100;
    oneSuitButton.y = stageHeight / 2 - oneSuitButton.height / 2 + 120;
    oneSuitButton.on('pointerdown', () => {
      localStorage.setItem('game-mode', 'one-suits');
      this.scene.start('main');
    });
    this.children.add(oneSuitButton);

    const twoSuitButton = new Button({
      scene: this,
      x: 0,
      y: 0,
      label: '2 Suits'
    });
    twoSuitButton.x = stageWidth / 2 - twoSuitButton.width / 2 + 100;
    twoSuitButton.y = stageHeight / 2 - twoSuitButton.height / 2 + 120;
    twoSuitButton.on('pointerdown', () => {
      localStorage.setItem('game-mode', 'two-suits');
      this.scene.start('main');
    });
    this.children.add(twoSuitButton);

    const fourSuitButton = new Button({
      scene: this,
      x: 0,
      y: 0,
      label: '4 Suits'
    });
    fourSuitButton.x = stageWidth / 2 - fourSuitButton.width / 2 - 100;
    fourSuitButton.y = stageHeight / 2 - fourSuitButton.height / 2 + 30;
    fourSuitButton.on('pointerdown', () => {
      localStorage.setItem('game-mode', 'four-suits');
      this.scene.start('main');
    });
    this.children.add(fourSuitButton);

    const fiveSuitButton = new Button({
      scene: this,
      x: 0,
      y: 0,
      label: '5 Suits'
    });
    fiveSuitButton.x = stageWidth / 2 - fiveSuitButton.width / 2 + 100;
    fiveSuitButton.y = stageHeight / 2 - fiveSuitButton.height / 2 + 30;
    fiveSuitButton.on('pointerdown', () => {
      localStorage.setItem('game-mode', 'five-suits');
      this.scene.start('main');
    });
    this.children.add(fiveSuitButton);
  }
}
