import Phaser from "phaser";
// import HelloWorldScene from "./scenes/hello-world-scene";
import MainScene from "./scenes/main-scene";
import BootScene from "./scenes/boot-scene";
// import GameOverScene from "./scenes/gameover-scene";
import GameClearScene from "./scenes/gameclear-scene";
import MenuScene from "./scenes/menu-scene";

const config = {
  type: Phaser.AUTO,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1000,
    height: 563,
    max: {
      width: 1000,
      height: 563
    }
  },
  scene: [MainScene,  BootScene, GameClearScene, MenuScene],
  backgroundColor: "#73ba2c"
};

window.addEventListener("load", () => {
  new Phaser.Game(config);
});
