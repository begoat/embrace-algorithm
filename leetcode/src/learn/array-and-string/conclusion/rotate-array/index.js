/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
export const rotate = function(nums, k) {
  console.log('nums', nums, 'k', k);
  const validK = Math.abs(k % nums.length);

  // solution 1: direct operation according to the question (in place)
  // for (let i = 1; i <= validK; i++) {
  //   const tmp = nums[nums.length - 1];
  //   for (let j = nums.length - 2; j >= 0; j--) {
  //     nums[j + 1] = nums[j];
  //   }

  //   nums[0] = tmp;
  // }

  // return nums;

  // solution 2: fastest maybe (but the space complexity is high) and violate the aim of the question
  // let result = [];
  // for (let i = nums.length - validK; i < nums.length; i++) {
  //   result.push(nums[i]);
  // }

  // for (let i = 0; i < nums.length - validK; i++) {
  //   result.push(nums[i]);
  // }

  // for (let i = 0; i < nums.length; i++) {
  //   nums[i] = result[i];
  // }
  // return result;

  let tmp = [];
  for (let i = nums.length - validK; i < nums.length; i++) {
    tmp.push(nums[i]);
  }

  for (let i = nums.length - validK - 1; i >= 0; i--) {
    nums[i + validK] = nums[i];
  }

  for (let i = 0; i < tmp.length; i++) {
    nums[i] = tmp[i];
  }

  return nums;
};
