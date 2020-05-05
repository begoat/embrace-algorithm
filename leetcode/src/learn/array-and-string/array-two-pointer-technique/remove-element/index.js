/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
export const removeElement = function(nums, val) {
  const swapEle = (array, idx1, idx2) => {
    const tmp = array[idx1];
    array[idx1] = array[idx2];
    array[idx2] = tmp;
  };

  let j = nums.length - 1;
  while(nums[j] === val) {
    j--;
  }

  for (let i = 0; i < nums.length; i++) {
    if (i > j) {
      break;
    }

    if (nums[i] === val) {
      swapEle(nums, i, j);
      while(nums[j] === val) {
        j--;
      }
      continue;
    }
  }

  return j + 1;
};

removeElement([0,4,4,0,4,4,4,0,2], 4);
