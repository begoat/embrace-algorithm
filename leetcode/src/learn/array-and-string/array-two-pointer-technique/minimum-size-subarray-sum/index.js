/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
export const minSubArrayLen = function(s, nums) {
  const getSumOfArrayBoundary = (array, i, j) => {
    return array.reduce((accu, curr, idx) => {
      if (idx >= i && idx <= j) {
        accu += curr;
      }

      return accu;
    }, 0);
  };

  let result = Infinity;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i; j < nums.length; j++) {
      if (getSumOfArrayBoundary(nums, i, j) >= s) {
        result = Math.min(result, j - i + 1);
        if (result === 1) {
          break;
        }
      }
    }
  }

  return result === Infinity ? 0 : result;
};
