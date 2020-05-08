/**
 * @param {number[]} A
 * @return {number[]}
 */
export const sortedSquares = function(A) {
  const swapInArray = (array, i, j) => {
    const tmp = array[i];
    array[i] = array[j];
    array[j] = tmp;
  };

  // just insertion sort
  const halfSort = array => {
    for (let i = 1; i < array.length; i++) {
      for (let j = i; j >= 1; j--) {
        if (Math.abs(array[j]) < Math.abs(array[j - 1])) {
          swapInArray(array, j, j - 1);
        }
      }
    }
  };

  const arrayProductBy2 = array => {
    for (let i = 0; i < array.length; i++) {
      array[i] = Math.pow(array[i], 2);
    }
  };

  halfSort(A);
  arrayProductBy2(A);
  return A;
};

sortedSquares([-2,0]);
