/**
 * @param {number[]} nums
 * @return {number}
 */
export const pivotIndex = function(nums) {
  const sum = nums.reduce((accu, curr) => {
    accu += curr;
    return accu;
  }, 0);

  let left = 0;
  for (let i = 0; i < nums.length; i++) {
    const right = sum - left - nums[i];
    if (left === right) {
      return i;
    }

    left += nums[i];
  }

  return -1;
};
