/**
 * @param {number[]} nums
 * @return {number}
 */
export const findMaxConsecutiveOnes = function(nums) {
  let result = 0;
  let sStart = null;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      if (sStart === null) {
        sStart = i;
      } else {
        // just pass the loop and do nothing
      }
    } else {
      if (sStart === null) {
        // just pass the loop and do nothing
      } else {
        result = Math.max((i - 1) - sStart + 1, result);
        sStart = null;
      }
    }
  }

  if (sStart !== null) {
    result = Math.max((nums.length - 1) - sStart + 1, result);
  }

  return result;
};

findMaxConsecutiveOnes([1,1,0,1,1,1]);
