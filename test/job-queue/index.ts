import {JobQueue} from '../../src/job-queue';

test('JobQueue callbacks', done => {
  const queue = new JobQueue<number>();

  const onQueueStartCallback = jest.fn();
  const onJobStartCallback = jest.fn();
  const onJobEndCallback = jest.fn();
  const onQueueEndCallback = jest.fn();

  queue.onQueueStart(() => {
    expect(queue.isProcessing).toBe(true);
    onQueueStartCallback();
  });
  queue.onJobStart(onJobStartCallback);
  queue.onJobEnd(({value}) => onJobEndCallback(value));
  queue.onQueueEnd(onQueueEndCallback);
  queue.onQueueEnd(() => {
    expect(queue.isProcessing).toBe(false);
    expect(onQueueStartCallback).toHaveBeenCalledTimes(1);
    expect(onJobStartCallback).toHaveBeenCalledTimes(3);
    expect(onJobEndCallback).toHaveBeenCalledTimes(3);
    expect(onJobEndCallback).toHaveBeenNthCalledWith(1, 123);
    expect(onJobEndCallback).toHaveBeenNthCalledWith(2, 456);
    expect(onJobEndCallback).toHaveBeenNthCalledWith(3, 789);
    expect(onQueueEndCallback).toHaveBeenCalledTimes(1);
    done()
  });

  expect(queue.isProcessing).toBe(false);

  queue.add(async () => new Promise(resolve => setTimeout(() => resolve(123), 1)));

  expect(queue.isProcessing).toBe(true);

  queue.add(async () => new Promise(resolve => setTimeout(() => resolve(456), 1)));
  queue.add(async () => new Promise(resolve => setTimeout(() => resolve(789), 1)));
});

test('JobQueue reuse', done => {
  const queue = new JobQueue<number>();

  const onQueueStartCallback = jest.fn();
  const onJobStartCallback = jest.fn();
  const onJobEndCallback = jest.fn();
  const onQueueEndCallback = jest.fn();
  let firstQueueDone = false;

  queue.onQueueStart(onQueueStartCallback);
  queue.onJobStart(onJobStartCallback);
  queue.onJobEnd(({value}) => onJobEndCallback(value));
  queue.onQueueEnd(onQueueEndCallback);
  queue.onQueueEnd(() => {
    if (!firstQueueDone)
    {
      firstQueueDone = true;
      queue.add(async () => new Promise(resolve => setTimeout(() => resolve(789), 1)));
    } else {
      expect(onQueueStartCallback).toHaveBeenCalledTimes(2);
      expect(onJobStartCallback).toHaveBeenCalledTimes(3);
      expect(onJobEndCallback).toHaveBeenCalledTimes(3);
      expect(onJobEndCallback).toHaveBeenNthCalledWith(1, 123);
      expect(onJobEndCallback).toHaveBeenNthCalledWith(2, 456);
      expect(onJobEndCallback).toHaveBeenNthCalledWith(3, 789);
      expect(onQueueEndCallback).toHaveBeenCalledTimes(2);
      done()
    }
  });

  queue.add(async () => new Promise(resolve => setTimeout(() => resolve(123), 1)));
  queue.add(async () => new Promise(resolve => setTimeout(() => resolve(456), 1)));
});

test('JobQueue cancel', done => {
  const queue = new JobQueue<number>();

  const onQueueStartCallback = jest.fn();
  const onJobStartCallback = jest.fn();
  const onJobEndCallback = jest.fn();
  const onQueueEndCallback = jest.fn();
  const onQueueCancelCallback = jest.fn();

  queue.onQueueStart(onQueueStartCallback);
  queue.onJobStart(onJobStartCallback);
  queue.onJobEnd(({value}) => onJobEndCallback(value));
  queue.onQueueEnd(onQueueEndCallback);
  queue.onQueueCancel(() => {
    expect(onQueueStartCallback).toHaveBeenCalledTimes(1);
    expect(onJobStartCallback).toHaveBeenCalledTimes(2);
    expect(onJobEndCallback).toHaveBeenCalledTimes(1);
    expect(onJobEndCallback).toHaveBeenNthCalledWith(1, 123);
    expect(onQueueCancelCallback).toHaveBeenCalledTimes(1);
    expect(onQueueEndCallback).not.toHaveBeenCalled();
    done()
  });

  queue.add(async () => new Promise(resolve => setTimeout(() => resolve(123), 1)));
  queue.add(async (onQueueCancel) => {
    return new Promise(resolve => {
      const timeout = setTimeout(() => resolve(456), 100);
      onQueueCancel(() => {
        onQueueCancelCallback();
        clearTimeout(timeout);
      });
    })
  });
  queue.add(async () => new Promise(resolve => setTimeout(() => resolve(789), 1)));
  setTimeout(() => queue.cancel(), 50);
});
