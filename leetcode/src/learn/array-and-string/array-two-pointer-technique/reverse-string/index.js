/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
export const reverseString = function(s) {
  const swapIJInArray = (targetArray, i, j) => {
    const tmp = targetArray[i];
    targetArray[i] = targetArray[j];
    targetArray[j] = tmp;
  };

  let i = 0, j = s.length - 1;
  while(i < j) {
    swapIJInArray(s, i, j);
    i++;
    j--;
  }

  return s;
};
