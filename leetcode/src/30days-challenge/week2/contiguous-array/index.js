/**
 * @param {number[]} nums
 * @return {number}
 */
export const findMaxLength = function(nums) {
  let counts = {
    0: [-1]
  }; // key is `count`
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if(nums[i] === 0) {
      count--;
    } else if (nums[i] === 1) {
      count++;
    }

    counts[count] = counts[count] === undefined ? [i] : counts[count].concat([i]);
  }

  return Object.keys(counts).reduce((accu, curr) => {
    return Math.max(accu, counts[curr][counts[curr].length - 1] - counts[curr][0]);
  }, 0);
};
