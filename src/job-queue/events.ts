export type JobQueueEvents<T> = {
  QUEUE_START: {
  },
  QUEUE_END: {
  },
  QUEUE_CANCEL: {
    actuallyCancelled: boolean
  },
  JOB_START: {
  },
  JOB_END: {
    value: T
  },
}
