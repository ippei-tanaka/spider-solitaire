import Phaser from "phaser";
// import HelloWorldScene from "./scenes/hello-world-scene";
import MainScene from "./scenes/main-scene";

const config = {
  // title: "Game Of Life",
  // url: "https://github.com/digitsensitive/phaser3-typescript",
  // version: "1.0",
  width: 1000,
  height: 800,
  type: Phaser.AUTO,
  // parent: "game",
  scene: [MainScene],
  backgroundColor: "#ededed",
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
