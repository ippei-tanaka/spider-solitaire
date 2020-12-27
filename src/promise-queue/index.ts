import {Emitter} from '../event-emitter';
import {PromiseQueueEvents} from './events';

class Deferred<T>  {

  private _createPromise: () => Promise<T>;
  private _promise: Promise<T> | undefined;
  private _callback: (value:T) => void = () => {};
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
      this._promise.then((value:T) => {
        this._isDone = true;
        this._callback(value);
      }).catch(() => {
        console.error("Promise rejected!");
      })
    }
  }

  set doneCallback (callback: (value:T) => void)
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
  private _emitter: Emitter<PromiseQueueEvents<T>> = new Emitter<PromiseQueueEvents<T>>();

  get isProcessing () {
    return (this._latestDeferred && !this._latestDeferred.isDone) as boolean;
  }

  add (createPromise: () => Promise<T>)
  {
    if (!this._latestDeferred || this._latestDeferred.isDone)
    {
      this._latestDeferred = new Deferred({createPromise});
      this._emitter.emit("QUEUE_START", {});
      this._emitter.emit("PROMISE_START", {});
      this._latestDeferred.doneCallback = (value) => {
        this._emitter.emit("PROMISE_END", {value});
        this._emitter.emit("QUEUE_END", {});
      };
      this._latestDeferred.process();
    }
    else
    {
      const deferred = new Deferred({createPromise});
      this._latestDeferred.doneCallback = (value) => {
        this._emitter.emit("PROMISE_END", {value});
        this._emitter.emit("PROMISE_START", {});
        deferred.process();
      };
      deferred.doneCallback = (value) => {
        this._emitter.emit("PROMISE_END", {value});
        this._emitter.emit("QUEUE_END", {});
      };
      this._latestDeferred = deferred;
    }
  }

  cancel ()
  {
    if (this._latestDeferred && !this._latestDeferred.isDone)
    {

    }
  }

  onQueueStart (callback: () => void)
  {
    this._emitter.on('QUEUE_START', callback);
  }

  onQueueEnd (callback: () => void)
  {
    this._emitter.on('QUEUE_END', callback);
  }

  onPromiseStart (callback: () => void)
  {
    this._emitter.on('PROMISE_START', callback);
  }

  onPromiseEnd (callback: ({value}:{value:T}) => void)
  {
    this._emitter.on('PROMISE_END', callback);
  }
}
