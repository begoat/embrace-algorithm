import { assert } from 'chai';

import { generate } from './index';

const testcase = [
  [5, [
    [1],
   [1,1],
  [1,2,1],
 [1,3,3,1],
[1,4,6,4,1]
]],
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
