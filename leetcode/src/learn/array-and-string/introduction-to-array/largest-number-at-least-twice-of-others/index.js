/**
 * @param {number[]} nums
 * @return {number}
 */
export const dominantIndex = function(nums) {
  let maxIdx = 0;
  let tempArr = Array.from({length: nums.length}, () => 0);
  nums.forEach((n, idx) => {
    if (n > nums[maxIdx]) {
      maxIdx = idx;
    }

    tempArr[idx] = 2 * n;
  });

  for (let i = 0; i < tempArr.length; i ++) {
    if (i === maxIdx) {
      continue;
    }

    if (tempArr[i] <= nums[maxIdx]) {
      continue;
    } else {
      return -1;
    }
  }

  return maxIdx;
};
