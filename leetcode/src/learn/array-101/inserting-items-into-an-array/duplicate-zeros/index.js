/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
export const duplicateZeros = function(arr) {
  const originArrayLen = arr.length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      for (let j = arr.length - 2; j > i; j--) {
        arr[j + 1] = arr[j];
      }

      arr[i + 1] = 0;
      i++;
    }
  }

  arr.length = originArrayLen;

  return arr;
};
