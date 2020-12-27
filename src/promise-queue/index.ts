import {Emitter} from '../event-emitter';
import {PromiseQueueEvents} from './events';

class Deferred<T>  {

  private _createPromise: () => Promise<T>;
  private _promise: Promise<T> | undefined;
  private _onStartCallback: () => void = () => {};
  private _onEndCallback: (value:T) => void = () => {};
  private _status: number = 0;

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
      this._status = 1;
      this._onStartCallback();
      this._promise.then((value:T) => {
        this._status = 2;
        this._onEndCallback(value);
      }).catch(() => {
        this._status = 2;
        console.error("Promise rejected!");
      });
    }
  }

  set onStartCallback (callback: () => void)
  {
    this._onStartCallback = callback;
  }

  set onEndCallback (callback: (value:T) => void)
  {
    this._onEndCallback = callback;
  }

  get isIntact ()
  {
    return this._status === 0;
  }

  get isProcessing ()
  {
    return this._status === 1;
  }

  get isDone ()
  {
    return this._status === 2;
  }
}


export class PromiseQueue<T>
{
  private _hasStarted:boolean = false;
  private _currentIndex:number = 0;
  private _deferedQueue:Deferred<T>[] = [];
  private _emitter: Emitter<PromiseQueueEvents<T>> = new Emitter<PromiseQueueEvents<T>>();

  get isProcessing () {
    return this._hasStarted;
  }

  add (createPromise: () => Promise<T>)
  {
    const deferred = new Deferred({createPromise});
    deferred.onStartCallback = () => {
      this._emitter.emit("PROMISE_START", {});
    };
    deferred.onEndCallback = (value) => {
      this._emitter.emit("PROMISE_END", {value});
      this._currentIndex = this._currentIndex + 1;
      this._process();
    };
    this._deferedQueue = [
      ...this._deferedQueue,
      deferred
    ];
    this._process();
  }

  private _process ()
  {
    if (!this._hasStarted)
    {
      this._hasStarted = true;
      this._emitter.emit("QUEUE_START", {});
    }

    if (this._currentIndex < this._deferedQueue.length)
    {
      const deferred = this._deferedQueue[this._currentIndex];
      if (deferred && deferred.isIntact)
      {
        deferred.process();
      }
    } else {
      this._hasStarted = false;
      this._deferedQueue = [];
      this._currentIndex = 0;
      this._emitter.emit("QUEUE_END", {});
    }
  }

  cancel ()
  {
    const hasStarted = this._hasStarted;
    const deferred = this._deferedQueue[this._currentIndex];

    this._hasStarted = false;
    this._deferedQueue = [];
    this._currentIndex = 0;

    if (!hasStarted || !deferred || !deferred.isProcessing) {
      this._emitter.emit("QUEUE_CANCEL", {wasProcessing: false});
    } else {
      deferred.onEndCallback = (value) => {
        this._emitter.emit("PROMISE_END", {value});
        this._emitter.emit("QUEUE_CANCEL", {wasProcessing: true});
      };
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

  onQueueCancel (callback: () => void)
  {
    this._emitter.on('QUEUE_CANCEL', callback);
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
