/**
 * @param {number[]} nums
 * @param {number} S
 * @return {number}
 */
export var findTargetSumWays = function(nums, S) {
  if (nums.length === 1) {
    if (nums[0] === S && nums[0] === -1 * S) {
      return 2;
    }


    if (Math.abs(nums[0]) === Math.abs(S)) {
      return 1;
    }

    return 0;
  }

  const arrayWithoutLastEle = nums.slice(0, nums.length - 1);
  return (
    findTargetSumWays(arrayWithoutLastEle, S + nums[nums.length - 1]) +
    findTargetSumWays(arrayWithoutLastEle, S - nums[nums.length - 1])
  );
};
