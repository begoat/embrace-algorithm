/**
 * @param {number[]} nums
 * @return {number[]}
 */
export const findDisappearedNumbers = function(nums) {
  let result = Array.from({length: nums.length}, () => -1);
  for (let i = 0; i < nums.length; i++) {
    result[nums[i] - 1] = nums[i];
  }

  const moveEleToFront = (arr, targetIdx) => {
    const tmp = arr[targetIdx];
    for (let i = targetIdx; i > 0; i--) {
      arr[i] = arr[i - 1];
    }

    arr[0] = tmp;
  };

  let count = 0;
  console.log('result', JSON.stringify(result));
  for (let i = 0; i < result.length; i++) {
    if (result[i] === -1) {
      result[i] = i + 1;
      count++;
      moveEleToFront(result, i);
    }
  }

  result.length = count;
  return result;
};

findDisappearedNumbers([4,3,2,7,7,2,3,1]);
