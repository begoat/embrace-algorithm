/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
export const merge = function(nums1, m, nums2, n) {
  console.log('nums1, m, nums2, n', nums1, m, nums2, n);
  const insertToIdxI = (array, targetIdx, targetNum) => {
    for (let i = array.length - 1; i > targetIdx; i--) {
      array[i] = array[i - 1];
    }

    array[targetIdx] = targetNum;
  };

  let j = 0;
  for (let i = 0; i < m;) {
    if (nums2[j] <= nums1[i]) {
      insertToIdxI(nums1, i, nums2[j]);
      j++;
      m++;
    } else {
      i++;
    }
  }

  const restIdxOfNum2 = n - j;
  for (let i = nums1.length - restIdxOfNum2; i < nums1.length; i++) {
    nums1[i] = nums2[j];
    j++;
  }

  return nums1;
};

merge([4,0,0,0,0,0], 1,[1,2,3,5,6], 5);
