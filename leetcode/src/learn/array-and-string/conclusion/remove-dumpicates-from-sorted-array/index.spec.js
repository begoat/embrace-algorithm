import { assert } from 'chai';

import { removeDuplicates } from './index';

const testcase = [
  [2324, true],
];

describe('removeDuplicates', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(removeDuplicates(param), result);
    });
  });
});
