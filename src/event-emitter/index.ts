import {EventEmitter} from 'events';

type _EventMap = Record<string, any>;
type _EventKey<T extends _EventMap> = string & keyof T;
type _EventReceiver<T> = (params: T) => void;

interface _Emitter<T extends _EventMap> {
  on<K extends _EventKey<T>>
    (eventName: K, fn: _EventReceiver<T[K]>): void;
  off<K extends _EventKey<T>>
    (eventName: K, fn: _EventReceiver<T[K]>): void;
  emit<K extends _EventKey<T>>
    (eventName: K, params: T[K]): void;
}

export class Emitter<T extends _EventMap> implements _Emitter<T>
{
  private emitter;

  constructor ()
  {
    this.emitter = new EventEmitter();
    // this.emitter.setMaxListeners(1000);
  }

  on<K extends _EventKey<T>>(eventName: K, fn: _EventReceiver<T[K]>) {
    this.emitter.on(eventName, fn);
  }

  off<K extends _EventKey<T>>(eventName: K, fn: _EventReceiver<T[K]>) {
    this.emitter.off(eventName, fn);
  }

  emit<K extends _EventKey<T>>(eventName: K, params: T[K]) {
    this.emitter.emit(eventName, params);
  }
}
