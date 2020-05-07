/**
 * @param {number} rowIndex
 * @return {number[]}
 */
export const getRow = function(rowIndex) {
  let pascalsArray = [];

  for (let i = 0; i <= rowIndex; i++) {
    if (i === 0) {
      pascalsArray.push([1]);
    } else if (i === 1) {
      pascalsArray.push([1, 1]);
    } else if (i === 2) {
      pascalsArray.push([1, 2, 1]);
    } else {
      const tmp = [];
      for (let j = 0; j <= i; j++) {
        if (j === 0 || j === i) {
          tmp.push(1);
        } else {
          tmp.push(pascalsArray[i - 1][j - 1] + pascalsArray[i - 1][j]);
        }
      }

      pascalsArray.push(tmp);
    }
  }

  return pascalsArray[rowIndex];
};

getRow(4);
