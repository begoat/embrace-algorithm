/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
export const findDiagonalOrder = function(matrix) {
  const result = [];
  const M = matrix.length; // M rows
  const N = (matrix[0] && matrix[0].length) || 0; // N cols
  const printResult = (i, j) => {
    if (i >= 0 && i < N && j >= 0 && j < M) {
      result.push(matrix[j][i]);
    }
  };

  for (let i = 0; i <= M + N - 2; i++) { // max-len point
    if (!(i % 2)) { // even
      for (let j = i; j >= 0; j--) {
        printResult(i - j, j);
      }
    } else { // odd
      for (let j = 0; j <= i; j++) {
        printResult(i - j, j);
      }
    }
  }

  return result;
};

findDiagonalOrder([
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
 ]);