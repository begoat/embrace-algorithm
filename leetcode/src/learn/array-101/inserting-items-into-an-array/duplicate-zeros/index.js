/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
export const duplicateZeros = function(arr) {
  let zeroCounts = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      zeroCounts++;
      for (let j = arr.length - 2; j > i; j--) {
        arr[j + 1] = arr[j];
      }

      arr[i + 1] = 0;
      i++;
    }
  }

  return arr;
};
