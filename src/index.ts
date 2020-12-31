import Phaser from "phaser";
// import HelloWorldScene from "./scenes/hello-world-scene";
import MainScene from "./scenes/main-scene";
import BootScene from "./scenes/boot-scene";
// import GameOverScene from "./scenes/gameover-scene";
import GameClearScene from "./scenes/gameclear-scene";
import MenuScene from "./scenes/menu-scene";
import {BACKGROUND_COLOR} from './settings';

const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    // orientation: Phaser.Scale.Orientation.PORTRAIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1000,
    height: 563,
    max: {
      width: 1000,
      height: 563
    },
    autoRound: true
  },
  // roundPixels: true,
  scene: [BootScene, MainScene, GameClearScene, MenuScene],
  backgroundColor: '#' + BACKGROUND_COLOR.toString(16)
};

window.addEventListener("load", () => {
  new Phaser.Game(config);
});
