import { assert } from 'chai';

import { backspaceCompare } from './index';

const testcase = [
  [['ab#c', 'ad#c'], true],
  [['ab##', 'c#d#'], true],
  [['a##c', '#a#c'], true],
  [['a#c', 'b'], false],
];

describe('backspaceCompare', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.equal(backspaceCompare(...param), result);
    });
  });
});
