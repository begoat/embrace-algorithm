import { assert } from 'chai';

import { isHappy } from './index';

const testcase = [
  [19, true],
  [2, false],
  [7, true],
];

describe('happy-number', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.equal(isHappy(param), result);
    });
  });
});
