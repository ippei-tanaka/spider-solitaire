export type JobQueueEvents<T> = {
  QUEUE_START: {
  },
  QUEUE_END: {
  },
  QUEUE_CANCEL: {
    wasProcessing: boolean
  },
  JOB_START: {
  },
  JOB_END: {
    value: T
  },
}
