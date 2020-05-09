import { assert } from 'chai';

import { replaceElements } from './index';

const testcase = [
  [[17,18,5,4,6,1], [18,6,6,6,1,-1]],
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
