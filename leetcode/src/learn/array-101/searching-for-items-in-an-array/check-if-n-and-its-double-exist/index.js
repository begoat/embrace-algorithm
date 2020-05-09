/**
 * @param {number[]} arr
 * @return {boolean}
 */
export const checkIfExist = function(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    result[arr[i]] = i;
  }

  for (let i = 0; i < arr.length; i++) {
    if (result[arr[i] * 2] !== undefined && result[arr[i] * 2] !== i) {
      return true;
    }
  }

  return false;
};
