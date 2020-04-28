/**
 * @param {number} numRows
 * @return {number[][]}
 */
export const generate = function(numRows) {
  const result = [];

  for (let i = 0; i < numRows; i++) {
    if (i === 0) {
      result.push([1]);
    } else if (i === 1) {
      result.push([1, 1]);
    } else {
      const rowResult = [];
      for (let j = 0; j <= i; j++) {
        if (j === 0) {
          rowResult.push(1);
        } else if (j === i) {
          rowResult.push(1);
        } else {
          rowResult.push(result[i - 1][j - 1] + result[i - 1][j]);
        }
      }

      result.push(rowResult);
    }
  }

  return result;
};
