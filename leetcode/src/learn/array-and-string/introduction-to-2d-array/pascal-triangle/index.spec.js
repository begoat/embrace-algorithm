import { assert } from 'chai';

import { generate } from './index';

const testcase = [
  [2324, true],
];

describe('generate', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(generate(param), result);
    });
  });
});
