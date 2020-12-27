export type PromiseQueueEvents<T> = {
  QUEUE_START: {
  },
  QUEUE_END: {
  },
  PROMISE_START: {
  },
  PROMISE_END: {
    value: T
  },
}
