/**
 * @param {number[]} arr
 * @return {number}
 */
export const countElements = function(arr) {
  let result = 0;
  let countingObj = {};
  for (let i = 0; i < arr.length; i++) {
    const curr = arr[i];
    countingObj[curr] = (countingObj[curr] || 0) + 1;
  }

  for (let i = 0; i < arr.length; i++) {
    if (countingObj[arr[i] + 1] !== undefined) {
      result++;
    }
  }

  return result;
};
