import { assert } from 'chai';

import { removeElement } from './index';

const testcase = [
  [2324, true],
];

describe('removeElement', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(removeElement(param), result);
    });
  });
});
