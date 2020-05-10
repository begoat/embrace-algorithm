/**
 * @param {number[]} nums
 * @return {number}
 */
export const thirdMax = function(nums) {
  let storage = [-Infinity, -Infinity, -Infinity];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === storage[0] || nums[i] === storage[1] || nums[i] === storage[2]) {
      //
    } else if (nums[i] > storage[0]) { // set is as the maximum ele
      storage[2] = storage[1];
      storage[1] = storage[0];
      storage[0] = nums[i];
    } else if (nums[i] > storage[1]) {
      storage[2] = storage[1];
      storage[1] = nums[i];
    } else if (nums[i] > storage[2]) {
      storage[2] = nums[i];
    }
  }

  let maxNum = 0;
  for (let i = 0; i < storage.length; i++) {
    if (storage[i] !== -Infinity) {
      maxNum++;
    }
  }

  if (maxNum === 3) {
    return storage[2];
  }

  return storage[0];
};
