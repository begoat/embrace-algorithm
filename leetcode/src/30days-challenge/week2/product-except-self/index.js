/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const productExceptSelf = function(nums) {
  if (nums.length === 1) {
    return nums.slice(0, 1);
  }

  let result = [1];
  for (let i = 1; i < nums.length; i++) {
    let curr = 1;
    for (let j = 0; j < i; j++) {
      result[j] *= nums[i];
      curr *= nums[j];
    }

    result.push(curr);
  }

  return result;
};
