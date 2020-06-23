import { assert } from 'chai';

import { cloneGraph, Node } from './index';

describe('cloneGraph', function() {
  it ('always true', () => {
    assert.equal(true, true);
  });

  it('example3', () => {
    const node1 = new Node(1);
    const node2 = new Node(2);
    node1.neighbors.push(node2);
    node2.neighbors.push(node1);
    const result = cloneGraph(node1);
    assert.equal(result.val, 1);
    assert.equal(result.neighbors[0].val, 2);
  });
});
