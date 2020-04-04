export const singleNumber = function(nums) {
  let storage = {};
  for (let i = 0; i < nums.length; i++) {
    const currVal = nums[i];
    if (!storage[currVal]) {
      storage[currVal] = 1;
    } else {
      storage[currVal] = storage[currVal] + 1;
    }
  }

  for (let i = 0; i < nums.length; i++) {
    const currVal = nums[i];
    if (storage[currVal] === 1) {
      return currVal;
    }
  }
};
