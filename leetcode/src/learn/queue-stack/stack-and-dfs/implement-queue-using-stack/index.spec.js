import { assert } from 'chai';

import { MyQueue } from './index';

describe('MyQueue', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  it('testcase', () => {
    const queue = new MyQueue();
    queue.push(1);
    queue.push(2);
    assert.equal(queue.peek(), 1); // returns 1
    assert.equal(queue.pop(), 1); // returns 1
    assert.equal(queue.empty(), false); // returns false
  });
});
