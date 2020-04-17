import { assert } from 'chai';

import { checkValidString } from './index';

const testcase = [
  ['()', true],
  ['(*)', true],
  ['(*))', true],
];

describe('checkValidString', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(checkValidString(param), result);
    });
  });
});
