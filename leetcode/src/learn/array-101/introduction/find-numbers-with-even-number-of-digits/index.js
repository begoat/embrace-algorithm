/**
 * @param {number[]} nums
 * @return {number}
 */
export const findNumbers = function(nums) {
  let result = 0;
  nums.forEach(n => {
    if (!(String(n).length % 2)) {
      result++;
    }
  });

  return result;
};
