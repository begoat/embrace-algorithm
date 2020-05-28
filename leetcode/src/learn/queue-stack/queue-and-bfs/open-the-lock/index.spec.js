import { assert } from 'chai';

import { openLock } from './index';

const testcase = [
  [[[], '0009'], 1],
  [[[], '2000'], 2],
  [[['0201','0101','0102','1212','2002'], '0202'], 6],
  [[['8888'], '0009'], 1],
  [[['8887','8889','8878','8898','8788','8988','7888','9888'], '8888'], -1],
  [[['0000'], '8888'], -1],
];

describe('openLock', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(openLock(...param), result);
    });
  });
});
