import {Emitter} from '../event-emitter';
import {JobQueueEvents} from './events';

type JobPromiseCreator<T> = (
  onQueueCancel: (callback:() => void) => void
) => Promise<T>;

class Job<T>  {

  private _jobPromiseCreator: JobPromiseCreator<T>;
  private _onStartCallback: () => void = () => {};
  private _onEndCallback: (value:T) => void = () => {};
  private _onFailCallback: (reason:any) => void = () => {};
  private _onQueueCancelCallback: () => void = () => {};
  private _status: number = 0;

  constructor (jobPromiseCreator: JobPromiseCreator<T>)
  {
    this._jobPromiseCreator = jobPromiseCreator;
  }

  start ()
  {
    if (this.isUntouched)
    {
      const promise =
        this._jobPromiseCreator(
          callback => this._onQueueCancelCallback = callback
        );
      this._status = 1;
      this._onStartCallback();
      promise.then((value:T) => {
        this._status = 2;
        this._onEndCallback(value);
      }).catch((reason:any) => {
        this._status = 2;
        this._onFailCallback(reason);
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

  set onFailCallback (callback: (reason:any) => void)
  {
    this._onFailCallback = callback;
  }

  runQueueCancelCallback ()
  {
    this._onQueueCancelCallback();
  }

  get isUntouched ()
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

export class JobQueue<T>
{
  private _hasStarted:boolean = false;
  private _currentIndex:number = 0;
  private _jobQueue:Job<T>[] = [];
  private _emitter: Emitter<JobQueueEvents<T>> = new Emitter<JobQueueEvents<T>>();

  get isProcessing () {
    return this._hasStarted;
  }

  add (jobCreator: JobPromiseCreator<T>)
  {
    const job = new Job(jobCreator);
    job.onStartCallback = () => {
      this._emitter.emit("JOB_START", {});
    };
    job.onEndCallback = (value) => {
      this._emitter.emit("JOB_END", {value});
      this._currentIndex = this._currentIndex + 1;
      this._process();
    };
    job.onFailCallback = (reason) => {
      console.error(reason);
    };
    this._jobQueue = [
      ...this._jobQueue,
      job
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

    if (this._currentIndex < this._jobQueue.length)
    {
      const job = this._jobQueue[this._currentIndex];
      if (job && job.isUntouched)
      {
        job.start();
      }
    } else {
      this._hasStarted = false;
      this._jobQueue = [];
      this._currentIndex = 0;
      this._emitter.emit("QUEUE_END", {});
    }
  }

  cancel ()
  {
    const hasStarted = this._hasStarted;
    const job = this._jobQueue[this._currentIndex];

    this._hasStarted = false;
    this._jobQueue = [];
    this._currentIndex = 0;

    if (!hasStarted || !job || !job.isProcessing) {
      this._emitter.emit("QUEUE_CANCEL", {actuallyCancelled: false});
    } else {
      job.onEndCallback = () => {};
      job.runQueueCancelCallback();
      this._emitter.emit("QUEUE_CANCEL", {actuallyCancelled: true});
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

  onQueueCancel (callback: ({actuallyCancelled}:{actuallyCancelled: boolean}) => void)
  {
    this._emitter.on('QUEUE_CANCEL', callback);
  }

  onJobStart (callback: () => void)
  {
    this._emitter.on('JOB_START', callback);
  }

  onJobEnd (callback: ({value}:{value:T}) => void)
  {
    this._emitter.on('JOB_END', callback);
  }
}
