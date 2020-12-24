class Deferred<T>  {

  _createPromise: () => Promise<T>;
  _promise: Promise<T> | undefined;
  _callback: () => void = () => {};
  _isDone: boolean = false;

  constructor ({
    createPromise
  }:{
    createPromise: () => Promise<T>
  })
  {
    this._createPromise = createPromise;
  }

  process ()
  {
    if (!this._promise)
    {
      this._promise = this._createPromise();
      this._promise.catch(() => {
        console.error("Promise rejected!");
      }).then(() => {
        this._callback();
        this._isDone = true;
      });
    }
  }

  finally (callback: () => void)
  {
    this._callback = callback;
  }

  get isDone ()
  {
    return this._isDone;
  }
}


export class PromiseQueue<T>
{
  private _latestDeferred:Deferred<T> | undefined;

  get isProcessing () {
    return (this._latestDeferred && !this._latestDeferred.isDone) as boolean;
  }

  add (createPromise: () => Promise<T>)
  {
    if (!this._latestDeferred || this._latestDeferred.isDone)
    {
      this._latestDeferred = new Deferred({createPromise});
      this._latestDeferred.process();
    }
    else
    {
      const deferred = new Deferred({createPromise});
      this._latestDeferred.finally(() => {
        deferred.process();
      });
      this._latestDeferred = deferred;
    }
  }
}
