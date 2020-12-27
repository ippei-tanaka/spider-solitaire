export type PromiseQueueEvents<T> = {
  QUEUE_START: {
  },
  QUEUE_END: {
  },
  QUEUE_CANCEL: {
    wasProcessing: boolean
  },
  PROMISE_START: {
  },
  PROMISE_END: {
    value: T
  },
}
