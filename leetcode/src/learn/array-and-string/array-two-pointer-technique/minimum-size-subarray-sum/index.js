/**
 * @param {number} s
 * @param {number[]} nums
 * @return {number}
 */
export const minSubArrayLen = function(s, nums) {
  let result = Infinity;
  let left = 0;
  let sum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    while(sum >= s) {
      result = Math.min(result, i - left + 1);
      sum -= nums[left];
      left++;
    }
  }

  return result === Infinity ? 0 : result;
};
