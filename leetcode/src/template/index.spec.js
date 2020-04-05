import { assert } from 'chai';

import { demo } from './index';

const testcase = [
  [19, true],
];

describe('demo', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.equal(demo(param), result);
    });
  });
});
