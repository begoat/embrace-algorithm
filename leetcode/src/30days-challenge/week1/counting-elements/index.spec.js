import { assert } from 'chai';

import { countElements } from './index';

const testcase = [
  [2324, true],
];

describe('countElements', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.equal(countElements(param), result);
    });
  });
});
