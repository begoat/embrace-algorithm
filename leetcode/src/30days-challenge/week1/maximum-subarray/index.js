/**
 * @param {number[]} nums
 * @return {number}
 */
export const maxSubArray = function(nums) {
  let sum = [];
  for (let i = 0; i < nums.length; i++) {
    if (i === 0) {
      sum[i] = nums[0];
    } else {
      sum[i] = Math.max(sum[i - 1] + nums[i], nums[i]);
    }
  }

  return Math.max(...sum);
};
