import Phaser from 'phaser';

class TweenPromise
{
  private _scene: Phaser.Scene;
  private _tween: Phaser.Tweens.Tween | undefined;
  private _createTweenConfig: () => Phaser.Types.Tweens.TweenBuilderConfig
  private _isDone: boolean = false;
  private _callback: () => void = () => {};

  constructor ({
    scene,
    createTweenConfig
  }:{
    scene:Phaser.Scene,
    createTweenConfig: () => Phaser.Types.Tweens.TweenBuilderConfig
  })
  {
    this._scene = scene;
    this._createTweenConfig = createTweenConfig;
  }

  play ()
  {
    if (!this._tween)
    {
      this._tween = this._scene.tweens.create(this._createTweenConfig());
      this._tween.on('complete', () => {
        this._callback();
        this._isDone = true;
      });
      this._tween.play();
    }
  }

  then (callback: () => void)
  {
    this._callback = callback;
  }

  get isDone ()
  {
    return this._isDone;
  }
}

export class TweenQueue
{
  private _scene: Phaser.Scene;
  private _latestTween: TweenPromise | undefined;

  constructor (scene: Phaser.Scene)
  {
    this._scene = scene;
  }

  add (createTweenConfig: () => Phaser.Types.Tweens.TweenBuilderConfig)
  {
    if (!this._latestTween || this._latestTween.isDone)
    {
      this._latestTween = new TweenPromise({
        createTweenConfig,
        scene: this._scene
      });
      this._latestTween.play();
    }
    else
    {
      const tween = new TweenPromise({
        createTweenConfig,
        scene: this._scene
      });
      this._latestTween.then(() => {
        tween.play();
      });
      this._latestTween = tween;
    }
  }
}
