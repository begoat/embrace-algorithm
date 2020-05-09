import { assert } from 'chai';

import { replaceElements } from './index';

const testcase = [
  [2324, true],
];

describe('replaceElements', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(replaceElements(param), result);
    });
  });
});
