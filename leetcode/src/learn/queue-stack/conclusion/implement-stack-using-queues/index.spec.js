import { assert } from 'chai';

import { MyStack } from './index';

describe('MyStack', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  it ('testcase', () => {
    const stack = new MyStack();
    stack.push(1);
    stack.push(2);
    assert.equal(stack.top(), 2); // returns 2
    assert.equal(stack.pop(), 2); // returns 2
    assert.equal(stack.empty(), false); // returns false
  });
});
