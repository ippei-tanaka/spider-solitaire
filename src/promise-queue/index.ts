import {Emitter} from '../event-emitter';
import {PromiseQueueEvents} from './events';

class Deferred<T>  {

  private _createPromise: () => Promise<T>;
  private _promise: Promise<T> | undefined;
  private _callback: () => void = () => {};
  private _isDone: boolean = false;

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
        this._isDone = true;
        this._callback();
      });
    }
  }

  set doneCallback (callback: () => void)
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
  private _emitter: Emitter<PromiseQueueEvents> = new Emitter<PromiseQueueEvents>();

  get isProcessing () {
    return (this._latestDeferred && !this._latestDeferred.isDone) as boolean;
  }

  add (createPromise: () => Promise<T>)
  {
    if (!this._latestDeferred || this._latestDeferred.isDone)
    {
      this._latestDeferred = new Deferred({createPromise});
      this._emitter.emit("QUEUE_PROCESS_START", {});
      this._latestDeferred.doneCallback = () => {
        this._emitter.emit("QUEUE_PROCESS_END", {});
      };
      this._latestDeferred.process();
    }
    else
    {
      const deferred = new Deferred({createPromise});
      this._latestDeferred.doneCallback = () => {
        deferred.process();
      };
      deferred.doneCallback = () => {
        this._emitter.emit("QUEUE_PROCESS_END", {});
      };
      this._latestDeferred = deferred;
    }
  }

  onStart (callback: () => void)
  {
    this._emitter.on('QUEUE_PROCESS_START', callback);
  }

  onComplete (callback: () => void)
  {
    this._emitter.on('QUEUE_PROCESS_END', callback);
  }
}
