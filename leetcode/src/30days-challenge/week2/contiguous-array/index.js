/**
 * @param {number[]} nums
 * @return {number}
 */
export const findMaxLength = function(nums) {
  const result = {
    '0': 0,
    '1': 0
  };

  for (let i = 0; i < nums.length; i++) {
    if(nums[i] === 0) {
      result['0']++;
    } else if (nums[i] === 1) {
      result['1']++;
    }
  }

  return Math.min(result['0'], result['1']) * 2;
};
