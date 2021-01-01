import {BACKGROUND_COLOR} from './settings';

window.addEventListener("load", async () => {

  const div = document.createElement(`div`);
  div.innerHTML = `
  <div class="loading-pane">
    <img src ="./images/loading.svg" width='50' height='50'><br />
    Loading game files...
  </div>
  `;

  document.body.append(div);

  const {default: Phaser} = await import(/* webpackChunkName: "phaser" */ "phaser");
  const {default: MainScene} = await import(/* webpackChunkName: "main-scene" */ "./scenes/main-scene");
  const {default: BootScene} = await import(/* webpackChunkName: "boot-scene" */ "./scenes/boot-scene");
  const {default: GameClearScene} = await import(/* webpackChunkName: "gameclear-scene" */ "./scenes/gameclear-scene");
  const {default:  MenuScene} = await import(/* webpackChunkName: "menu-scene" */ "./scenes/menu-scene");

  // await new Promise(r => setTimeout(r, 1000000000));

  document.body.removeChild(div);

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
    // physics: {
    //   default: 'arcade'
    // },
    // roundPixels: true,
    scene: [BootScene, MainScene, GameClearScene, MenuScene],
    backgroundColor: '#' + BACKGROUND_COLOR.toString(16)
  };

  new Phaser.Game(config);
});
