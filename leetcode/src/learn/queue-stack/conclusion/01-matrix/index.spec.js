import { assert } from 'chai';

import { updateMatrix } from './index';

const testcase = [
  [
    [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ],
    [
      [0, 0, 0],
      [0, 1, 0],
      [0, 0, 0]
    ]
  ],
  [
    [
      [0, 0, 0],
      [0, 1, 0],
      [1, 1, 1]
    ],
    [
      [0, 0, 0],
      [0, 1, 0],
      [1, 2, 1]
    ]
  ],
  [
    [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0]
    ],
    [
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0],
      [0, 1, 0]
    ]
  ]
];

describe('updateMatrix', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  testcase.map(t => {
    const [param, result] = t;
    return it(param.toString(), () => {
      assert.deepEqual(updateMatrix(param), result);
    });
  });
});
