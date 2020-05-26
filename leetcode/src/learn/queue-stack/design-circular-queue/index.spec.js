import { assert } from 'chai';

import { MyCircularQueue } from './index';

describe('MyCircularQueue', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  it ('algorithm acc', () => {
    var circularQueue = new MyCircularQueue(3); // set the size to be 3
    assert.deepEqual(circularQueue.enQueue(1), true); // return true
    assert.deepEqual(circularQueue.enQueue(2), true); // return true
    assert.deepEqual(circularQueue.enQueue(3), true); // return true
    assert.deepEqual(circularQueue.enQueue(4), false); // return false, the queue is full
    assert.deepEqual(circularQueue.Rear(), 3); // return 3
    assert.deepEqual(circularQueue.isFull(), true); // return true
    assert.deepEqual(circularQueue.deQueue(), true); // return true
    assert.deepEqual(circularQueue.enQueue(4), true); // return true
    assert.deepEqual(circularQueue.Rear(), 4); // return 4
  });

  let result = [true,4,true,true,9,true,false,true,false,true,true];
  let testcase = [
    'enQueue',
    'Rear',
    'enQueue',
    'deQueue',
    'Front',
    'deQueue',
    'deQueue',
    'isEmpty',
    'deQueue',
    'enQueue',
    'enQueue'
    ];

    let testcaseParam = [[4], [], [9], [], [], [], [], [], [], [6], [4]];

    it('test', () => {
      var circularQueue = new MyCircularQueue(2);
      testcase.map((t, i) => {
        assert.deepEqual(circularQueue[t](...testcaseParam[i]), result[i]);
      });
    });
});
