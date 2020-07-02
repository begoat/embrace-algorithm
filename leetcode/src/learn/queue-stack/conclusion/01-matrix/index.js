/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */

export var updateMatrix = function(matrix) {
  let result = [];
  // copy a matrix as result
  for (let i = 0; i < matrix.length; i++) {
    let tmp = [];
    for (let j = 0; j < matrix[i].length; j++) {
      tmp.push(matrix[i][j]);
    }

    result.push(tmp);
  }

  function bfs(i, j) {
    let shortestDistance = Infinity;
    let dddd = 0;
    const queue = [];
    queue.push([i, j]);
    while(queue.length) {
      const queueLen = queue.length;
      for (let t = 0; t < queueLen; t++) {
        const [topI, topJ] = queue.shift();
        if (matrix[topI][topJ] === 0) { // === 0
          shortestDistance = Math.min(shortestDistance, dddd);
          return shortestDistance;
        } else { // === 1
          if (topI + 1 < matrix.length) {
            queue.push([topI + 1, topJ]);
          }

          if (topI - 1 >= 0) {
            queue.push([topI - 1, topJ]);
          }

          if (topJ + 1 < matrix[i].length) {
            queue.push([topI, topJ + 1]);
          }

          if (topJ - 1 >= 0) {
            queue.push([topI, topJ - 1]);
          }
        }
      }

      dddd++;
    }

    return shortestDistance;
  }

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result[i].length; j++) {
      if (matrix[i][j] === 1) {
        result[i][j] = bfs(i, j);
      } else {
        result[i][j] = 0;
      }
    }
  }

  return result;
};

updateMatrix([
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0],
  [0, 1, 0]
]);