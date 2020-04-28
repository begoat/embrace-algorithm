import { assert } from 'chai';

import { addBinary } from './index';

const testcase = [
  [['11', '1'], '100'],
  [['1010', '1011'], '10101'],
];

describe('addBinary', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(addBinary(...param), result);
    });
  });
});
