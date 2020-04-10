import { assert } from 'chai';

import { MinStack } from './index';

describe('MinStack', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  it ('test', () => {
    var minStack = new MinStack();
    minStack.push(-2);
    minStack.push(0);
    minStack.push(-3);
    assert.equal(minStack.getMin(), -3);
    minStack.pop();
    assert.equal(minStack.top(), 0);
    assert.equal(minStack.getMin(), -2);
  });
});
