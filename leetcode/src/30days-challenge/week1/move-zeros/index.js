/**
 * @param {number[]} nums
 * @return {boolean}
 */
export const moveZeroes = function(nums) {
  let zeroCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      nums.splice(i, 1);
      zeroCount++;
      i --;
    }
  }

  for (let i = 1; i <= zeroCount; i++) {
    nums.push(0);
  }

  return nums;
};
