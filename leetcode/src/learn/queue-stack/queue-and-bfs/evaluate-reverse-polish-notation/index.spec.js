import { assert } from 'chai';

import { evalRPN } from './index';

const testcase = [
  [['2', '1', '+', '3', '*'], 9],
  [['4', '13', '5', '/', '+'], 6],
  [['10', '6', '9', '3', '+', '-11', '*', '/', '*', '17', '+', '5', '+'], 22],
  [['4','-2','/','2','-3','-','-'], -7]
];

describe('evalRPN', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(evalRPN(param), result);
    });
  });
});
