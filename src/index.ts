import Phaser from "phaser";
// import HelloWorldScene from "./scenes/hello-world-scene";
import MainScene from "./scenes/main-scene";
import BootScene from "./scenes/boot-scene";
import GameOverScene from "./scenes/gameover-scene";

const config = {
  // title: "Game Of Life",
  // url: "https://github.com/digitsensitive/phaser3-typescript",
  // version: "1.0",
  // width: 800,
  // height: 600,
  type: Phaser.AUTO,
  // parent: "game",
  scale: {
    mode: Phaser.Scale.FIT,
    // parent: 'phaser-example',
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1000,
    height: 563
  },
  scene: [MainScene,  BootScene, GameOverScene],
  backgroundColor: "#73ba2c",
  // render: { pixelArt: false, antialias: true }
  // physics: {
  //   default: 'arcade',
  //   arcade: {
  //     gravity: { y: 200 }
  //   }
  // },
};

// export class Game extends Phaser.Game {
//   constructor(config: Phaser.Types.Core.GameConfig) {
//     super(config);
//   }
// }

window.addEventListener("load", () => {
  new Phaser.Game(config);
});
