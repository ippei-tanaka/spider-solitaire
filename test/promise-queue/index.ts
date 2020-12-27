import {PromiseQueue} from '../../src/promise-queue';

test('PromiseQueue onQueueStart, onProcessStart, onProcessEnd, onQueueComplete', done => {
  const queue = new PromiseQueue<number>();

  const onQueueStartCallback = jest.fn();
  const onPromiseStartCallback = jest.fn();
  const onPromiseEndCallback = jest.fn();
  const onQueueEndCallback = jest.fn();

  queue.onQueueStart(onQueueStartCallback);
  queue.onPromiseStart(onPromiseStartCallback);
  queue.onPromiseEnd(({value}) => onPromiseEndCallback(value));
  queue.onQueueEnd(onQueueEndCallback);
  queue.onQueueEnd(() => {
    expect(onQueueStartCallback).toHaveBeenCalledTimes(1);
    expect(onPromiseStartCallback).toHaveBeenCalledTimes(3);
    expect(onPromiseEndCallback).toHaveBeenCalledTimes(3);
    expect(onPromiseEndCallback).toHaveBeenNthCalledWith(1, 123);
    expect(onPromiseEndCallback).toHaveBeenNthCalledWith(2, 456);
    expect(onPromiseEndCallback).toHaveBeenNthCalledWith(3, 789);
    expect(onQueueEndCallback).toHaveBeenCalledTimes(1);
    done()
  });

  queue.add(() => new Promise(resolve => setTimeout(() => resolve(123), 1)));
  queue.add(() => new Promise(resolve => setTimeout(() => resolve(456), 1)));
  queue.add(() => new Promise(resolve => setTimeout(() => resolve(789), 1)));
});

test('PromiseQueue reuse', done => {
  const queue = new PromiseQueue<number>();

  const onQueueStartCallback = jest.fn();
  const onPromiseStartCallback = jest.fn();
  const onPromiseEndCallback = jest.fn();
  const onQueueEndCallback = jest.fn();
  let firstQueueDone = false;

  queue.onQueueStart(onQueueStartCallback);
  queue.onPromiseStart(onPromiseStartCallback);
  queue.onPromiseEnd(({value}) => onPromiseEndCallback(value));
  queue.onQueueEnd(onQueueEndCallback);
  queue.onQueueEnd(() => {
    if (!firstQueueDone)
    {
      firstQueueDone = true;
      queue.add(() => new Promise(resolve => setTimeout(() => resolve(789), 1)));
    } else {
      expect(onQueueStartCallback).toHaveBeenCalledTimes(2);
      expect(onPromiseStartCallback).toHaveBeenCalledTimes(3);
      expect(onPromiseEndCallback).toHaveBeenCalledTimes(3);
      expect(onPromiseEndCallback).toHaveBeenNthCalledWith(1, 123);
      expect(onPromiseEndCallback).toHaveBeenNthCalledWith(2, 456);
      expect(onPromiseEndCallback).toHaveBeenNthCalledWith(3, 789);
      expect(onQueueEndCallback).toHaveBeenCalledTimes(2);
      done()
    }
  });

  queue.add(() => new Promise(resolve => setTimeout(() => resolve(123), 1)));
  queue.add(() => new Promise(resolve => setTimeout(() => resolve(456), 1)));
});
/*
test('PromiseQueue cancel', done => {
  const queue = new PromiseQueue<number>();

  const onQueueStartCallback = jest.fn();
  const onPromiseStartCallback = jest.fn();
  const onPromiseEndCallback = jest.fn();
  const onQueueEndCallback = jest.fn();

  queue.onQueueStart(onQueueStartCallback);
  queue.onPromiseStart(onPromiseStartCallback);
  queue.onPromiseEnd(({value}) => onPromiseEndCallback(value));
  queue.onQueueEnd(onQueueEndCallback);
  queue.onQueueCancel(() => {
    expect(onQueueStartCallback).toHaveBeenCalledTimes(1);
    expect(onPromiseStartCallback).toHaveBeenCalledTimes(2);
    expect(onPromiseEndCallback).toHaveBeenCalledTimes(2);
    expect(onPromiseEndCallback).toHaveBeenNthCalledWith(1, 123);
    expect(onPromiseEndCallback).toHaveBeenNthCalledWith(2, 456);
    expect(onQueueEndCallback).not.toHaveBeenCalled();
    done()
  });

  queue.add(() => new Promise(resolve => setTimeout(() => resolve(123), 1)));
  queue.add(() => new Promise(resolve => setTimeout(() => resolve(456), 100)));
  queue.add(() => new Promise(resolve => setTimeout(() => resolve(789), 1)));
  setTimeout(() => queue.cancel(), 50);
});
*/
