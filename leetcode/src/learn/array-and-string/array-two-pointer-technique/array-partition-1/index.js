/**
 * @param {number[]} nums
 * @return {number}
 */
export const arrayPairSum = function(nums) {
  const swapIJInArray = (targetArray, i, j) => {
    let tmp = targetArray[i];
    targetArray[i] = targetArray[j];
    targetArray[j] = tmp;
  };

  // sort asc
  const sortArray = targetArray => {
    for (let i = 0; i < targetArray.length; i++) {
      for (let j = i; j > 0; j--) {
        if (targetArray[j] < targetArray[j - 1]) {
          swapIJInArray(targetArray, j, j - 1);
        }
      }
    }

    return targetArray;
  };

  sortArray(nums);
  console.log('nums after sorting', nums);
  let result = 0;
  let i = 0; // fisrt of first group
  let j = nums.length - 2; // first of last group
  while(i <= j) {
    if (i !== j) {
      result += nums[i] + nums[j];
    } else {
      result += nums[i];
    }
    i += 2;
    j -= 2;
  }

  return result;
};
