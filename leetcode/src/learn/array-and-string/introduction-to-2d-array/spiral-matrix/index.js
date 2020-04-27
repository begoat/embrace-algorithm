/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
export const spiralOrder = function(matrix) {
  const result = [];
  const rowNum = matrix.length;
  const colNum = (matrix[0] && matrix[0].length) || 0;
  const matrixRecords = [];
  for (let i = 0; i < rowNum; i++) {
    matrixRecords[i] = Array.from({ length: colNum }, () => false);
  }

  let i = 0, j = 0;
  let direction = 0;
  while(result.length !== rowNum * colNum) {
    if (matrixRecords[i][j]) {
      direction++;
      continue;
    }

    result.push(matrix[i][j]);
    matrixRecords[i][j] = true;
    if (!(direction % 4)) {
      if (j + 1 >= rowNum) {
        direction++;
        continue;
      }

      j++;
    } else if (direction % 4 === 1) {
      if (i + 1 >= colNum) {
        direction++;
        continue;
      }

      i++;
    } else if (direction % 4 === 2) {
      if (j - 1 < 0) {
        direction++;
        continue;
      }

      j--;
    } else if (direction % 4 === 3) {
      if (i - 1 < 0) {
        direction++;
        continue;
      }

      i--;
    }
  }

  return result;
};

spiralOrder([
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
 ]);
