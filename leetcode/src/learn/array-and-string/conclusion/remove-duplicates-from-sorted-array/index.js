/**
 * @param {number[]} nums
 * @return {number}
 */
export const removeDuplicates = function(nums) {
  const deleteAndAlignEleFromArray = (array, targetIdx) => {
    for (let i = targetIdx + 1; i < array.length; i++) {
      array[i - 1] = array[i];
    }

    array.length--;
  };

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] === nums[i - 1]) {
      deleteAndAlignEleFromArray(nums, i);
      i--; // len of array has changed
    }
  }

  return nums.length;
};
