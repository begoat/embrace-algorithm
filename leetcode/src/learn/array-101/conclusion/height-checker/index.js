/**
 * @param {number[]} heights
 * @return {number}
 */
export const heightChecker = function(heights) {
  const swapItem = (arr, i, j) => {
    const tmp = arr[i];
    arr[i] = arr[j];
    arr[j] = tmp;
  };

  const sortArr = arr => {
    for (let i = 1; i < arr.length; i++) {
      for (let j = i; j > 0; j--) {
        if (arr[j] < arr[j - 1]) {
          swapItem(arr, j, j - 1);
        }
      }
    }
  };

  let originArray = [];
  for (let i = 0; i < heights.length; i++) {
    originArray[i] = heights[i];
  }

  sortArr(heights);
  let result = 0;
  for (let i = 0; i < heights.length; i++) {
    if (originArray[i] !== heights[i]) {
      result++;
    }
  }

  return result;
};
